import Content from "components/Content/Content"
import Header from "components/Header/Header"
import Total from "components/Total/Total"
import './App.css'
import Course from "../Course/Course";

const App = () => {
    const course = {
        id: 1,
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            }
        ]
    }
  return (
    <div className="test">
        <Course course={course}/>
    </div>
  )
}

export default App