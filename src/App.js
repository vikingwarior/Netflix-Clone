import { Provider } from "react-redux";
import appStore from "./utils/redux/appStore";

import "./App.css";
import Body from "./components/Body";

function App() {
  return (
    <div className="App">
      <Provider store={appStore}>
        <Body />
      </Provider>
    </div>
  );
}

export default App;
