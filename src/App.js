import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import About from './components/About/About';
import AddPlaces from './components/AddPlaces/AddPlaces';
import AddService from './components/AddService/AddService';

import AdminDashboard from './components/Admin/AdminDashboard/AdminDashboard';
import Booking from './components/Booking/Booking';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import ManageServices from './components/ManageServices/ManageServices';
import NotFound from './components/NotFound/NotFound';
import Services from './components/Services/Services';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Route/PrivateRoute';
import AllTourists from './components/Admin/AllTourists/AllTourists';
import AddTourist from './components/AddTourist/AddTourist';


function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute exact path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/addService">
              <AddService></AddService>
            </Route>
            <Route exact path="/manageServices">
              <ManageServices></ManageServices>
            </Route>

            <Route exact path="/addPlaces">
              <AddPlaces></AddPlaces>
            </Route>
            <PrivateRoute exact path="/adminDashboard">
              <AdminDashboard></AdminDashboard>
            </PrivateRoute>
            <Route exact path="/registerTourist">
              <AddTourist></AddTourist>
            </Route>
            {/* <Route exact path="/registerTourist">
              <AllTourists></AllTourists>
            </Route> */}


            <Route exact path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>

        </BrowserRouter>
      </AuthProvider>



    </div>
  );
}

export default App;
