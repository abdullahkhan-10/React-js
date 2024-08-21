// import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../Slices/users/userSlice";

const UserView = () => {
  // useDispatch is used to send/update value.
  const dispatch = useDispatch();

  // instead of getting data with re-render, we will get the data on clicking on the buton.
  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, []);

  // first we update the data using (useDispatch) hook.
  // And then use the useSelector hook to get and display the value/data in required component.
  const myUser = useSelector((state) => state.user);
  console.log(myUser);
  

  return (
    <div className="user">
      <h2>List of Users</h2>
      {/* When we click on the button the dispatch method will fire the (fetchUser) function, and send the data from url to (actio.payload) where we have assign this to (state.usersArr), and finally it update the initial state of array from empty to 10 users object. */}
      <button onClick={() =>dispatch(fetchUsers())}>Click</button>

      {/* If loading is true display the div element */}
      {myUser.loading && <div>Loading...</div>}

      {/* if loading is false and there is error display the error else display null */}
      {!myUser.loading && myUser.error ? (
        <div>Error: {myUser.error}</div>
      ) : null}

      {/* if loading is false and the users array length is positive display user data else null */}
      {!myUser.loading && myUser.usersArr.length ? (
        <ul>
          {myUser.usersArr.map(userObj => (
            <li key={userObj.id}>{userObj.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default UserView;

// to  select state from reddux store  we need useSelector hook.
