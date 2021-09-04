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
import ReplyContainer from "./containers/ReplyContainer";


import Header from './components/Header'
import Home from './components/Home'

function App() {
  return (
    <ReduxProvider store={store}>
      <Router>
        <Header />
          <Switch>
            
            <Route exact path="/">
              <Home/>
            </Route>
            
            <Route path="/posts">
              <PostsPage />
            </Route>
          
            <Route path="/add-post">
              <AddPostPage />
            </Route>

            <Route path="/login">
              <LoginPage />
            </Route>

            <Route path="/add-user">
              <AddUserPage />
            </Route>

            <Route path="/users">
              <UsersPage />
            </Route>
            
            <Route path="/add-instrument">
              <AddInstrumentPage />
            </Route>

            <Route path="/add-genre">
              <AddGenrePage />
            </Route>
          </Switch>
          
      </Router>
    </ReduxProvider>
  );
}

export default App;
