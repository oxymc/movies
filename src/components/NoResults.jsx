function NoResults(props) {
  return (
    <div className="row no-res">
      <h3>No items</h3>
      <p className="flow-text">You can go to <button className="btn s3 red lighten-1 waves-effect waves-light" onClick={props.toHomePage}>HOME</button> page or change your request</p>
    </div> 
  );
}

export default NoResults;


