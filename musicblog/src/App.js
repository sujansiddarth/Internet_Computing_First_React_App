import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Blog from './components/Blog';
import News from './components/News'
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Blog />
      <News />
    </div>
  );
}

export default App;
