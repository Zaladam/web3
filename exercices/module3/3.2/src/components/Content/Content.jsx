import Part from "components/Part/Part"


const Content = (props) =>{
    const {parts} = props
    return(
      <div>
          {parts.map(part => {
              return <Part part={part.name} exercice={part.exercises}/>
          } )}
      </div>
    )
}

export default Content