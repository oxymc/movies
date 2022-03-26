import React from "react";

class Search extends React.Component {
  state = {
    search: 'test',
    filter: 'all',
  }
  checkField = (e) => {
    const label = e.target.parentNode.querySelector('label')
    e.target.value ? 
    label.classList.add('active') : 
    label.classList.remove('active')
  }

  onPressEnter = (event) => {
    if(event.key === 'Enter') {
      this.props.onSearch(this.state.search, this.state.filter);
    }
  }
  onPressSearchButton = () => {
    if(this.state.search) {
      this.props.onSearch(this.state.search, this.state.filter);
    }
    else {
      this.props.onReqCheck();
      return null
    }
  }
  onPressRadio = (e) => {
    if(!this.state.search) {
      this.props.onReqCheck();
      return null
    }
    this.setState({
      filter: e.target.name
    })
    this.props.onSearch(this.state.search, e.target.name);
  }

  render() {
    return(
      <>
        <div className="row foFlex listItems">
          <div className="input-field col s9">
            <input 
              id="search" 
              type="text" 
              className="validate" 
              onBlur={this.checkField} 
              onChange={(e) => this.setState({search: e.target.value})}
              onKeyDown={this.onPressEnter}
            />
            <label htmlFor="search">Search</label>
          </div>
          <button className="btn col s3 red lighten-1 waves-effect waves-light" type="button" onClick={this.onPressSearchButton}>
              Search
          </button>
        </div>
        <div className="chboxes">
          <label>
            <input 
              name="all" 
              type="radio"
              checked={this.state.filter === 'all' ? true : false}
              onChange={this.onPressRadio} />
            <span>All</span>
          </label>
          <label>
            <input 
              name="movie" 
              type="radio"
              checked={this.state.filter === 'movie' ? true : false}
              onChange={this.onPressRadio} />
            <span>Movies</span>
          </label>
          <label>
            <input 
              name="series" 
              type="radio" 
              checked={this.state.filter === 'series' ? true : false}
              onChange={this.onPressRadio} />
            <span>Series</span>
          </label>
        </div>
      </>
    )
  }
}

export default Search;


