import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import UCard from './components/userProfileCard/UserCard';
import { BrowserRouter as Router} from 'react-router-dom';
// import CardApp from './components/card/Base';
import Routines from './Pages/Routines';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <UCard />
    </Router>
  </React.StrictMode>
);
