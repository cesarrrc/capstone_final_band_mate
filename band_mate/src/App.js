import { makeStyles } from "@material-ui/core/styles"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { Provider as ReduxProvider } from "react-redux";

import store from "./redux/store";
import PostsPage from "./containers/PostsPage";
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
            
            <Route path="/posts">
              <PostsPage />
            </Route>
            
            <Route exact path="/">
              <Home/>
            </Route>
          
          <Route path="/login">
            <LogIn />
          </Route>
          
          </Switch>
          
      </Router>
    </ReduxProvider>
  );
}

export default App;
