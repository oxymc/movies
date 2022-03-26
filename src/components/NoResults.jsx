function NoResults(props) {
  return (
    <div className="row">
      <h3>No items</h3>
      <button className="btn col s3 red lighten-1 waves-effect waves-light" onClick={props.toHomePage}>HOME</button>
    </div> 
  );
}

export default NoResults;


