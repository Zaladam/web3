import {ProviderWrapper as CounterProviderWrapper} from "../../contexts/CounterContext";
import App from "../App/App.jsx";

const AppLoader= () => {
    return (
        <CounterProviderWrapper>
            <App/>
        </CounterProviderWrapper >
    )
}
export default AppLoader