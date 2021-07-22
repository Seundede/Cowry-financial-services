import {   BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/HomePage/Home'
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component = {Home} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
