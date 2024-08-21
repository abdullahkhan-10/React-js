import { useLoaderData } from "react-router-dom";

function Github() {
    const githubData = useLoaderData()
    // console.log(githubData);

    // we get object in above const (githubData) from the below gitHubInfoLoader function, that's why we are not mapping it in return statement, because if it was array then we would have map it.
  return (
    <div className=" w-1/2 mx-auto text-center m-4 bg-green-200 text-gray p-4 text-2xl rounded-xl">
      <h2>Github followers: {githubData.followers}</h2>
      <h2 className="mt-3">Github following: {githubData.following}</h2>
      <img className="rounded-full mx-auto mt-14" src={githubData.avatar_url} alt="Git picture" width={200} />
    </div>
  );
}
export default Github;

//  A loader is a function that returns a promise that resolves with the data needed for a route.
// - Loaders are called before the route is rendered, and the data is passed to the component as a prop.
// - Loaders can be used to fetch data from APIs, databases, or any other data source.
// - Loaders can also be used to handle loading states, errors, and caching.

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/abdullahkhan-10")

    return response.json();
};

// the data  is return to the useLoaderData(), and it set the data const (gitHubData). 