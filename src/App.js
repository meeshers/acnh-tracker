import './sass/App.scss';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import Songs from './pages/Songs';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/songs" component={Songs} />

            {/* <Route path="/about" component={About} />
            <Route path="/articles" component={ArticleListPage} />
            <Route path="/article/:name" component={Article} />
            <Route component={NotFound} /> */}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
