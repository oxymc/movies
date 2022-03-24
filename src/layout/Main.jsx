import { Component } from "react";
import FilmList from "../components/FilmList";
import Loader from "../components/Loader";
import Search from "../components/Search";
import NoResults from "../components/NoResults";

class Main extends Component {
  state = {
    isLoaded: false,
    items: [],
    error: null,
    header: 'Collection example'
  }

  componentDidMount() {
    fetch("http://www.omdbapi.com/?apikey=3a36a7d6&s=test")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.Search
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  onSearch = (name, type = 'all') => {
    const typeCheck = (type === 'all' ? '' : '&type='+type)
    fetch(`http://www.omdbapi.com/?apikey=3a36a7d6&s=${name+typeCheck}`)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result.Search,
          header: name +' '+ '['+type+']'
        });
      }
    )
  }

  render() {
    const {isLoaded, items, header} = this.state
    return (
      <main className="container content">
        <h1>{header}</h1>
        <Search onSearch={this.onSearch}/>
        {items && items.length ? 
          <FilmList items={items} /> : 
          !items ? <NoResults /> :
          <Loader />}
      </main>
    );
  }
}

export default Main;


