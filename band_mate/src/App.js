import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Provider as ReduxProvider } from "react-redux";

import store from "./redux/store";
import PostsPage from "./containers/PostsPage";
import AddPostPage from "./containers/AddPostPage";
import UsersPage from "./containers/UsersPage";
import AddUserPage from "./containers/AddUserPage";
import LoginPage from "./containers/LoginPage";
import AddInstrumentPage from "./containers/AddInstrumentPage";
import AddGenrePage from "./containers/AddGenrePage";

import Header from './components/Header'
import Home from './components/Home'

function App() {
  return (
    <ReduxProvider store={store}>
      <Router>
          <Switch>
            
            <Route exact path="/">
              <Header />
              <Home/>
            </Route>
            
            <Route path="/posts">
              <Header />
              <PostsPage />
            </Route>
          
            <Route path="/add-post">
              <Header />
              <AddPostPage />
            </Route>

            <Route path="/login">
              <Header />
              <LoginPage />
            </Route>

            <Route path="/add-user">
              <Header />
              <AddUserPage />
            </Route>

            <Route path="/users">
              <Header />
              <UsersPage />
            </Route>
            
            <Route path="/add-instrument">
              <Header />
              <AddInstrumentPage />
            </Route>

            <Route path="/add-genre">
              <Header />
              <AddGenrePage />
            </Route>
            
          </Switch>
          
      </Router>
    </ReduxProvider>
  );
}

export default App;
