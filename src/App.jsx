import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Header from './components/Header'; // Optional
import MovieList from './components/MovieList'; // Your homepage or dashboard

function App() {
  return (
    <Router>
      {/* Optional: Add <Header /> here if it should show on all pages */}
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
