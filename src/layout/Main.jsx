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
    header: 'Collection example',
    showFilters: false
  }
  defaultApi = () => fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=test`)
  .then(res => res.json())
  .then(
    (result) => {
      this.setState(
        {items: result.Search, loading: false, showFilters: false}
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

  componentDidMount() {
    this.defaultApi()
  }

  onReqCheck = () => {
    document.getElementById('search').focus()
    this.setState({
      header: 'Fill the search input',
      showFilters: false
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
          {header: name, items: result.Search, loading: false, showFilters: true}
        )
      }
    )
    .catch((error) => {
      console.error(error)
    })
  }
  
  toHomePage = () => {
    this.defaultApi()
    this.setState({
      header: 'Collection example',
      showFilters: false
    })
  } 

  render() {
    const {loading, items, header, showFilters} = this.state
    return (
      <main className="container content"> 
        <Search 
          items={items} 
          showFilters={showFilters}
          onSearch={this.onSearch} 
          onReqCheck={this.onReqCheck}
          toHomePage={this.toHomePage}
        />
        <h1>{header}</h1>
        {
          loading ?
            <Loader /> :
            (items && items.length) ?
            <FilmList items={items} /> :
            !items ?
              <NoResults toHomePage={this.toHomePage} /> :
              <Loader />
        }
      </main>
    );
  }
}

export default Main;


