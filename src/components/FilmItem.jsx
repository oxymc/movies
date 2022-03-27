function FilmItem(props) {
  const {Title, Year, imdbID, Type, Poster} = props;
  const checkImg = Poster === 'N/A' ? 'hidden' : null
  return (
    <>
      {
        <div id={imdbID} className="">
          <div className="card">
            <div className="card-image">
              <img 
                className={checkImg}
                src={Poster} 
                alt={Title}/>
              <span className="card-title">{Title}</span>
            </div>
            <div>
              <span className="card-content">
                {Type}
              </span>
              <span className="card-action">
                Year: {Year}
              </span>
            </div>
          </div>
        </div>
      }
    </>  
  );
}

export default FilmItem;


