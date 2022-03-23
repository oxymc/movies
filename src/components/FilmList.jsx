import FilmItem from "./FilmItem";

function FilmList(props) {
  return (
    <div className="row fogrid">
      {
        props.items.map(item => {
          return <FilmItem key={item.imdbID} {...item} />
        })
      }
    </div>
  );
}

export default FilmList;


