require('dotenv').config()
const express = require("express")
const morgan = require('morgan')
const Person = require('./models/person')
// Initializers. These blocks should be placed in different files, for example middlewares.js, server.js...
// but let's keep this simple.
const app = express()

app.use(express.json())

morgan.token('body', (request) => {
  return JSON.stringify(request.body)
})
morgan.token('currentUserEmail', (request) => {
  return request.currentUser && request.currentUser.email || "anonymous"
})
const logger = morgan(':method :url :status :res[content-length] - :response-time ms :body (:currentUserEmail)')
app.use(logger)

const attachCurrentuser = (request, response, next) => {
  const email = request.header("X-USER-EMAIL")
  if (email) request.currentUser = { email }
  next()
}
app.use(attachCurrentuser)


const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})



// Routes. These blocks should be placed in different files under "routes/" directory
// but let's keep this simple. test
app.get("/info", (request, response) => {
  const now = new Date()
  const bodyContentText = `
  Phonebook has info for ${allPersons.length} people.
  ${now.toString()}
  `
  response
    .type("text")
    .send(bodyContentText)
})

app.get("/api/persons", (request, response) => {
  Person.find({}).then(persons =>{ response.json(persons)})
})

app.post("/api/persons", (request, response) => {
  const personPayload = request.body

  const errorMessages = []
  if (!personPayload.name) errorMessages.push("name must be present")
  if (!personPayload.number) errorMessages.push("number must be present")

  if (errorMessages.length > 0) {
    response
        .status(422)
        .json({
          errorMessages,
        })
    return
  }


  const newPerson = new Person({
    name : personPayload.name,
    number : personPayload.number
  })

  newPerson.save().then(savedPerson =>{
    response.json(savedPerson)
  })

})

app.delete("/api/persons/:id", (request, response,next) => {
  Person.findByIdAndDelete(request.params.id).then(result =>{
    response.json(result).status(204).end()
  })
      .catch(error => next(error))

})

/*
  app.get("/api/persons/:id", (request, response) => {

    const idParam = request.params.id
    const id = Number(idParam)
    const person = allPersons.find(person => person.id === id)
    if (person) {
      response.json(person)
    } else {
      response.status(404).end()
    }
  })




*/
