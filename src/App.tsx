import {Provider, useDispatch} from "react-redux";
import {store} from "./store/store";
import 'antd/dist/antd.css';
import AppController from "./components/AppController/AppController";

const App = () => {
  return (
    <Provider store={store}>
      <AppController />
    </Provider>
  );
}

export default App;
