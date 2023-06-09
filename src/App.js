import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import Categories from './routes/Categories';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <div className="booknav-container flex-con flex-center">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
