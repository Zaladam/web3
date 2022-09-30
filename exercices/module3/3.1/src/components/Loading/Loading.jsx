import {useState} from "react";

const Loading = () => {
  const [loading,setLoading] = useState(true)
setInterval(()=> setLoading(false)
,3000)
  while(loading) {
    return (
        <div>
          <p>Loading</p>
        </div>
    )
  }

  return(
      <div>
        <p>Feedback</p>
      </div>
  )
}
export default Loading;