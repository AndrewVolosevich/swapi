import {Provider} from "react-redux";
import {store} from "./store/store";
import Peoples from "./components/Peoples/Peoples";

const App = () => {
  return (
    <Provider store={store}>
      Test
        <Peoples />
    </Provider>
  );
}

export default App;
