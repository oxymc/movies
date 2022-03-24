import React from "react";

class Search extends React.Component {
  state = {
    search: '',
  }
  checkField = (e) => {
    const label = e.target.parentNode.querySelector('label')
    e.target.value ? 
    label.classList.add('active') : 
    label.classList.remove('active')
  }

  onPressEnter = (event) => {
    if(event.key === 'Enter') {
      this.props.onSearch(this.state.search);
    }
  }
  onPressSearchButton = () => {
      this.props.onSearch(this.state.search);
  }

  render() {
    return(
      <div className="row foFlex">
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
        <button className="btn col s3 waves-effect waves-light" type="button" onClick={this.onPressSearchButton}>
            send
        </button>
      </div>
    )
  }
}

export default Search;


