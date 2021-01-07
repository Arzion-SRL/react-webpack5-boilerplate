import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './styles.css';
import Home from '~modules/Home';
import Dashboard from '~modules/Dashboard';
import PageError from '~modules/PageError';

const App = () => (
    <Router>
        <Switch>
            <Route exact from="/" component={Home} />
            <Route exact from="/dashboard">
                <Dashboard />
            </Route>
            <Route component={PageError} />
        </Switch>
    </Router>
);

export default App;
