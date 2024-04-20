import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import UCard from './components/userProfileCard/UserCard';
import { BrowserRouter as Router} from 'react-router-dom';
// import StartSet from './components/card/singlecards/Set';
import App from './App';
// import CardApp from './components/card/Base';
// import SingleCard from './components/card/SingleCard';
// import Routines from './Pages/Routines';
// import StartSet from './components/card/singlecards/Set';
// import CreateWorkout from './components/card/singlecards/CreateWorkout';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
