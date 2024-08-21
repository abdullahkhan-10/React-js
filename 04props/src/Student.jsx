function Student({name, age}) {        // we can destructure the object
  return (
    <>
      <h1>My name is {name}</h1>
      <h2>I am {age} years old</h2>
    </>
  );
}
export default Student;


// function Student(props) {         // we get the props as an object
// console.log(props);
//   return (
//     <>
//       <h1>My name is {props.name}</h1>
//       <h2>I am {props.age} years old</h2>
//     </>
//   );
// }
// export default Student;