import React from 'react';
import GlobalStyle from './globalStyles';
import Home from './pages/HomePage/Home';
import Task from './pages/TaskPage/Task';
import Contact from './pages/ContactPage/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
        <Routes>
          <Route path='/' exact component={Home} />
        <Route path='/task' component={Task} />
        <Route path='/contact' component={Contact} />
        </Routes>
        

    </Router>
  );
}

export default App;
