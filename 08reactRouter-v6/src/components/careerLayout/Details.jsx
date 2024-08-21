// import { useLoaderData, useParams } from "react-router-dom";

// function Details() {
//   // what ever we write in the Route path of (Details) component in (App.jsx) component, we wil write exactly the same here in curly braces.
//   // whatever we write in the url for example 123, The useParam function will store that in const id
//   const id = useParams();
//   const personDetails = useLoaderData();

//   console.log(`log inside Details ${personDetails}`);

//   return (
//     <div className="details">
//       <p>{personDetails.phone}</p>
//       <p>{personDetails.password}</p>
//       <p>
//         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum odit
//         tempore cupiditate ratione voluptatem labore cumque consequatur fugit
//         rem dolores!
//       </p>

//       {/* <h2>{id}</h2> */}
//     </div>
//   );
// }
// export default Details;

// // we use this function to extract the detail of single person, in order the get the details of single person we need to know the id of that person.
// // Route params are parsed from dynamic segments and passed to your loader. This is useful for figuring out which resource to load:
// // If a path segment starts with : then it becomes a "dynamic segment". When the route matches the URL, the dynamic segment will be parsed from the URL and provided as params to other router APIs.
// // mean the param is that object which we want to grab and display his deatails in the browse.

// export const careerDetailsLoader = async ({ params }) => {
//   // it mean if we called the id 2, then details of the person with id 2 will display, whose id is 2.
//   const id = params;
//   const call = await fetch(`https://fakestoreapi.com/users?limit=${id}`);
//   const res = await call.json();
//   console.log(res);
//   return res;
// };
