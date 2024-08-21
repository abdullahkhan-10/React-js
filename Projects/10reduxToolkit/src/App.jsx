import AddTodo from "./components/AddTodo";
import AllTodos from "./components/AllTodos";
import Header from './components/Header'

import { Provider } from "react-redux";
import { myStore } from "./reduxState/Store";

function App() {
  return (
    <Provider store={myStore}>
      <Header/>
      <div className="w-1/2 mx-auto">
        <AddTodo />
        <AllTodos />
      </div>
    </Provider>
  );
}

export default App;
