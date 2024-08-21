import "./App.css";
import Header from "./components/Header";
import CakeView from "./components/CakeView";
import IceCreamView from "./components/IceCreamView";
import UserView from "./components/UserView";


function App() {
  return (
    <div className="app">
      <Header />
      <main className="body">
        <CakeView />
        <IceCreamView />
        <UserView />
      </main>
    </div>
  );
}

export default App;

// Note. Redux Toolkit comparasion with a cake shop.
// Three main points.

// 1.  In redux a (store) act like a cake (shop), like in shop all the cakes are store, the same in redux store the state of entire app is hold.
// 2.  In redux an (action) act like (cake ordered), In cake shop the (cake ordered) describe the shopkeeper that a customer want cake, in redux the (action) decribe that the user want something, or describe what happened.
// 3. In redux the (reducers) act like shopkeepersc, In cake shop the (shopkeeper) take the cake order from the customers on counter and then from the shop grab the cake and handed to the customer, In redux the (reducers) works the same they take the action from the users and then from the store track and update the state for the action,
// let suppose the action is user wants to add new obejct to array, so the reducer function take the action of adding new object to array from customer and then through (state) variable update the array in store
