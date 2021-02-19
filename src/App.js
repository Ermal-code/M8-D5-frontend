import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, withRouter } from "react-router-dom";
import Home from "./components/Home";
import SideBar from "./components/SideBar";
import PlayBar from "./components/PlayBar";
import { Row } from "react-bootstrap";
import ArtistDetails from "./components/ArtistDetails";
import AlbumDetails from "./components/AlbumDetails";

import Signup from "./components/Signup";
import Login from "./components/Login";

import Likes from "./components/Likes";
// import { connect } from "react-redux";

// const mapStateToProps = (state) => state;

const App = (props) => {
  // state = {
  //   // currentSong: {
  //   //   albumCover: null,
  //   //   artistName: null,
  //   //   songName: null,
  //   // },
  //   searchString: "",
  //   loggedin: false,
  // };
  const [searchString, setSearchString] = useState("");
  // const location = useLocation();
  return (
    <div className="App">
      <Route
        path="/"
        exact
        render={(props) => (
          <Login {...props} loggedin={() => setSearchString(true)} />
        )}
      />
      <Route path="/signup" exact component={Signup} />

      <Row>
        {props.location.pathname !== "/" &&
          props.location.pathname !== "/signup" && (
            <SideBar
              searchString={(string) => searchString}
              searchStr={searchString}
            />
          )}

        <Route
          path="/home"
          exact
          render={(props) => <Home {...props} searchString={searchString} />}
        />

        <Route path="/favorites" exact component={Likes} />
        <Route
          path="/artistDetails/:id"
          exact
          render={(props) => <ArtistDetails {...props} />}
        />
        <Route
          path="/albumDetails/:id"
          exact
          render={(props) => <AlbumDetails {...props} />}
        />
      </Row>
      {props.location.pathname !== "/" &&
        props.location.pathname !== "/signup" && <PlayBar />}
    </div>
  );
};

export default withRouter(App);
