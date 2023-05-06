import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Main from './Main/Main';
import About from './About/About';
import Menu from './Menu/Menu';
import Order from './Order/Order';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/order" element={<Order/>}/>
    </Routes>
    </>
  );
}

export default App;