function Movies(props) {
  return (
    <div className="movie-card">
        <img src={props.image} alt="" />
        <p>Title: {props.moTitle}</p>
        <p>Year: {props.moYear}</p>
    </div>
  );
}

export default Movies;
