import GoodButton from "../GoodButton/GoodButton";
import OkButton from "../OkButton/OkButton";
import BadButton from "../BadButton/BadButton";
import ResetButton from "../ResetButton/ResetButton";


function App() {
  return (
    <div>
      <ul>
        <li><GoodButton/></li>
        <li><OkButton/></li>
        <li><BadButton/></li>
      </ul>
      <ResetButton/>
    </div>
  );
}

export default App;
