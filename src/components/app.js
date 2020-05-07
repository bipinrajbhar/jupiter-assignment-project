import { h, Component } from "preact";
import { Router } from "preact-router";

import Header from "./header";

// Code-splitting is automated for routes
import Home from "../routes/home";
import Nav from "../components/nav";
import Settings from "../routes/settings";
import Notification from "../routes/notification";
import Task1 from "../routes/task1";
import PageNotFound from "../routes/pageNotFound";

export default class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = (e) => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <div class="font-sans" id="app">
        <Header />
        <main class="container mx-auto md:ml-64 pt-20">
          <Router onChange={this.handleRoute}>
            <Home path="/" />
            <Settings path="/settings" />
            <Notification path="/notification" />
            <Task1 path="/task1" />
            <PageNotFound default />
          </Router>
        </main>
      </div>
    );
  }
}
