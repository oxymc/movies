function FilmItem(props) {
  const {Title, Year, imdbID, Type, Poster} = props;
  return (
    <>
      {
        Poster === 'N/A' ? null : 
        <div id={imdbID} className="">
          <div className="card">
            <div className="card-image">
              <img src={Poster} />
              <span className="card-title">{Title}</span>
            </div>
            <div className="card-content">
              <p>{Type}</p>
            </div>
            <div className="card-action">
              <span>Year: {Year}</span>
            </div>
          </div>
        </div>
      }
    </>  
  );
}

export default FilmItem;


