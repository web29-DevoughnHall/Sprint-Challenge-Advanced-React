import React from "react";
import Header from "./components/Header";
import PlayerList from "./components/PlayerList";
import SearchForm from "./components/SearchForm";
import "./App.css";
import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      name: "",
      country: ""
    };
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/players")
      .then(res => {
        console.log(res.data);
        this.setState({
          data: res.data,
        });
      })
      .catch(error => console.log("!!!!!!!", error));
  }
  render() {
    return (
      <div className="App">
        <Header />
        <SearchForm
          data={this.state.data}
          name={this.state.name}
          country={this.state.country}
        />
        <PlayerList
          data={this.state.data}
          name={this.state.name}
          country={this.state.country}
        />
      </div>
    );
  }
}


export default App;
