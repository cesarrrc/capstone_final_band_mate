import { makeStyles } from "@material-ui/core/styles"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { Provider as ReduxProvider } from "react-redux";

import store from "./redux/store";
import PostsPage from "./containers/PostsPage";
import AddPostPage from "./containers/AddPostPage";
import UsersPage from "./containers/UsersPage";
import AddUserPage from "./containers/AddUserPage";


import Header from './components/Header'
import Home from './components/Home'
import LogIn from './components/LogIn'



const useStyles = makeStyles((_) => ({
  root: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();

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
              <LogIn />
            </Route>

            <Route path="/add-user">
              <AddUserPage />
            </Route>

            <Route path="/users">
              <UsersPage />
            </Route>
          
          </Switch>
          
      </Router>
    </ReduxProvider>
  );
}

export default App;
