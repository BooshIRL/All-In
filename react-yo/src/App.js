import './App.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './sass.scss';

const Header = () => {
  return (
    <>
      <h1>All About Counrty Line</h1>
      <p>Whether you're looking for a place for a quiet vacation, a stop for a road trip, or even a great place to settle down for a while then All-In Country Line RV park is the place for you. All your utilities are included in our base price, so you never have to worry about electricity or water bills. In the township of Archie, we have a few places to eat like The Fishing Doc and Momma's Kitchen. Overall, the best part of staying at Country Line is the community, get to know us and the wonderful people of Archie Missouri. </p>
    </>
  );
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);

reportWebVitals();
