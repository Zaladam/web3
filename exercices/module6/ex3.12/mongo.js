const mongoose = require("mongoose");

if (process.argv.length < 3) {
    console.log('Please provide the password as an argument: node mongo.js <password>')
    process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://luffy:${password}@cluster0.kchmnkm.mongodb.net/phoneBook?retryWrites=true&w=majority`


const personSchema = new mongoose.Schema({
    name: String,
    number: String
})

const Person = mongoose.model('Person', personSchema)

if (process.argv.length < 4) {
    mongoose
        .connect(url)
    Person.find({}).then(result => {
        console.log("phonebook : ")
        result.forEach(person => {
            console.log(person.name + " : " + person.number)
        })
        mongoose.connection.close()
    })


} else {
    mongoose
        .connect(url)
        .then(() => {
            console.log("Connected")
            const person = new Person({
                name: process.argv[3],
                number: process.argv[4]
            })
            return person.save()
        })
        .then(() => {
            console.log('person saved!')
            return mongoose.connection.close()
        })
        .catch((err) => console.log(err))
}
