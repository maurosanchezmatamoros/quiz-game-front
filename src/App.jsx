import { Route, Switch } from 'wouter'
import Home from './pages/home'
import Logged from './pages/logged'
import Login from './pages/login'
import NewChallenge from './pages/newChallenge'
import Signup from './pages/signup'
import { UserContextProvider } from './context'

function App () {
  return (
    <UserContextProvider>
      <Switch>
        <Route path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/logged' component={Logged} />
        <Route path='/newChallenge' component={NewChallenge} />
      </Switch>
    </UserContextProvider>
  )
}

export default App
