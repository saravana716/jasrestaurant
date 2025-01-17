import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import SingleStatefile from './Components/SingleStatefile';
import Banner from './Components/Banner/Banner';
import Services from './Components/Services/Services';
import Planning from './Components/Planning/Planning';
import Reveloutions from './Components/Revolutions/Reveloutions';
import Mobilefilters from './Components/Mobilefilters';
import { useSelector } from 'react-redux';
import Document from './Components/Document/Document';
function App() {

  const selector=useSelector(function (event) {
    return event.login
  })
  console.log(selector);
  
  return (
    <div className="App">
    <Document/>
    </div>
  );
}

export default App;
