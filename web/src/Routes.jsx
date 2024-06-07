import { Route, Routes as Switch, BrowserRouter } from "react-router-dom";
import Header from "./components/Header"
import Home from "./views/Home"
import Login from "./views/Login"

function Routes() {
  return (
    <BrowserRouter>
        <Header/>
        <Switch>
            <Route Component={ Home } path="/" exact />
            <Route Component={ Login } path="/login" />
        </Switch>
    </BrowserRouter>
  )
}

export default Routes
