import { Component } from "react";
import FilmList from "../components/FilmList";
import Loader from "../components/Loader";
import Search from "../components/Search";

class Main extends Component {

  state = {
    isLoaded: false,
    items: [],
    error: null
  }

  componentDidMount() {
    fetch("http://www.omdbapi.com/?apikey=3a36a7d6&s=matrix")
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

  onSearch = (value) => {
    fetch(`http://www.omdbapi.com/?apikey=3a36a7d6&s=${value}`)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          items: result.Search
        });
      }
    )
  }

  render() {
    const {isLoaded, items} = this.state
    return (
      <main className="container content">
        <h1>Collection example</h1>
        <Search onSearch={this.onSearch}/>
        {items.length ? <FilmList items={items} /> : <Loader />}
      </main>
    );
  }
}

export default Main;


