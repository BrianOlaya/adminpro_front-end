import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/auth/home'
import Login from './components/auth/Login';
import NewAccount from './components/auth/NewAccount';
import Projects from './components/projects/Projects';
import ProjectState from './context/projects/projectState';
import TaskState from './context/tasks/taskState';
import SpendState from './context/spends/spendState';
import BudgetState from './context/budget/budgetState';

//import AlertState from './context/alerts/alertState';
import AuthState from './context/authentication/authState';
import tokenAuth from './config/tokenAuth';
import PrivateRoute from './components/routes/PrivateRoute';

//revisar si hay token
const token = localStorage.getItem('token');
if (token) {
  tokenAuth(token)
}

function App() {
  return (
    <ProjectState>
      <TaskState>
        <SpendState>
         <BudgetState>
          {/* <AlertState>  */}
          <AuthState>
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/new-account" component={NewAccount} />
                <PrivateRoute exact path="/projects" component={Projects} />
              </Switch>
            </Router>
          </AuthState>
          {/* </AlertState>   */}
          </BudgetState>  
        </SpendState>
      </TaskState>
    </ProjectState>
  );
}

export default App;

