import Header from "../Header/Header";
import Content from "../Content/Content";
import Total from "../Total/Total";

const Course = ({course}) => {
  return(
      <div>
          <Header course= {course.name} />
          <Content parts={course.parts}/>
          <Total total={exercises1 + exercises2 + exercises3}/>
      </div>
  )
}
export default Course