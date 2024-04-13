import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import UCard from './components/userProfileCard/UserCard';
import { BrowserRouter as Router} from 'react-router-dom';
// import CardApp from './components/card/Base';
// import Routines from './Pages/Routines';
// import App from './App';
import CardApp from './components/card/Base';
// import SingleCard from './components/card/SingleCard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <CardApp />
    </Router>
  </React.StrictMode>
);
