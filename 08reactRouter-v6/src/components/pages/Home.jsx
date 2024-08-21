import { useNavigate } from "react-router-dom"

function Home() {
  // this hook return a funtion  which we store in const (navigate), Using this (navigate) function we can now navigate to the (order summary) route on click of the button
  const navigate = useNavigate()
  return (
    <div className="home">
      <h2>Welcome To Home Page.</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dolor
        assumenda, itaque nesciunt alias voluptatum nobis blanditiis eos
        officiis aperiam earum eum vel quas odio optio, distinctio ab sunt unde
        incidunt ipsum omnis amet magnam accusantium aut! Excepturi, cupiditate
        iusto!
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus
        veniam ducimus eligendi nihil, cumque ab eveniet modi architecto quidem,
        non odit saepe facere voluptas esse mollitia illo fuga exercitationem id
        dicta iusto eaque numquam quaerat ad! Fugit velit beatae laudantium.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus
        veniam ducimus eligendi nihil, cumque ab eveniet modi architecto quidem,
        non odit saepe facere voluptas esse mollitia illo fuga exercitationem id
        dicta iusto eaque numquam quaerat ad! Fugit velit beatae laudantium.
      </p>

      {/* pass the path/url of the route to the navigate function, On which we want to land */}
      <button onClick={() => navigate("order-summary")}>Order Now</button>
    </div>
  );
}

export default Home;
