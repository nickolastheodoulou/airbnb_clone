import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'whatwg-fetch';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
        <div>
          <h3>Welcome to Nicks listing website! </h3>
        </div>
    );
  }
}

export default Home;
