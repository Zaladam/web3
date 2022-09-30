import {useState} from "react";
import Feedback from "../Feedback";

const Loading = () => {
  const [loading,setLoading] = useState(true)
setInterval(()=> setLoading(false)
,3000)
  if(loading) {
    return (
        <div>
          <p>Loading</p>
        </div>
    )
  }

  return(
      <Feedback/>
  )
}
export default Loading;