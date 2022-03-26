import { Component } from "react";
import FilmList from "../components/FilmList";
import Loader from "../components/Loader";
import Search from "../components/Search";
import NoResults from "../components/NoResults";

const API_KEY = process.env.REACT_APP_API_KEY

class Main extends Component {
  state = {
    loading: true,
    items: [],
    error: null,
    header: 'Collection example'
  }

  componentDidMount() {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=test`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState(
            {items: result.Search, loading: false}
          )
        },
        (error) => {
          this.setState({
            loading: false,
            error
          });
        }
      )
      .catch((error) => {
        console.error(error)
      })
  }

  onSearch = (name, type = 'all') => {
    this.setState({loading: true})
    const typeCheck = (type === 'all' ? '' : '&type='+type)
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${name+typeCheck}`)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState(
          {header: `${name} ['${type}']`, items: result.Search, loading: false}
        )
      }
    )
    .catch((error) => {
      console.error(error)
    })
  }

  render() {
    const {loading, items, header} = this.state
    return (
      <main className="container content">
        <h1>{loading ? <Loader /> : header}</h1>
        <Search onSearch={this.onSearch}/>
        {
          loading ?
            <Loader /> :
            (items && items.length) ?
            <FilmList items={items} /> :
            !items ?
              <NoResults /> :
              <Loader />
        }
      </main>
    );
  }
}

export default Main;


