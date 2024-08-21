import "./App.css";
import Header from "./components/Header";
import UserContextProvider from "./Context/UserContextProvider";
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  return (
    <>
    {/* step 3 */}
      <UserContextProvider>
        <Header />

        <Login/>
        <Profile/>
      </UserContextProvider>
    </>
  );
}

export default App;
