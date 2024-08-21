import { useLoaderData, Link } from "react-router-dom"

function  Careers(){
    // the (useLoaderData) Hook get access to the data which we return from the async functin below, and then store that data in const (allCareers) as an array form, and then display all data from array in jsx through (map) method in the browser.
    const allCareers = useLoaderData()

    return(
        <div className="careers">
            {
                allCareers.map( (element) =>{
                    return(
                        // to show each id in the url
                        <Link to={element.id.toString()} key={element.id}>
                            <p>{element.username}</p>
                            <p>{element.email}</p>
                        </Link>
                    )
                })
            }
        </div>
    )
};
export default Careers;

// we will use function to fetch data from api, we will call the function when we click on careers link in Menu. 
// we do this by passing loader attribute to (Careers) component inside App.jsx
// we are not using (useEffect) Hook because it cause extra render of the app.

export const careersLoader = async () =>{
    const call = await fetch('https://fakestoreapi.com/users?limit=10')
    const res = await call.json()
    // console.log(res);
    return res
}
// when the functin is called in (Careers) Route present in (App.jsx) the react router will resolve the promise and the data to component will be available through useLoaderData Hook, and it will set all the data from api in const (allCareers)

