import { Component } from "react";
import FilmList from "../components/FilmList";

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

  render() {
    const {isLoaded, items} = this.state
    return (
      <main className="container content">
        <h1>Collection example</h1>
        {items.length ? <FilmList items={items} /> : null}
      </main>
    );
  }
}

export default Main;


