import React from 'react';
import { Link } from 'react-router';
import LandingPage from './LandingPage'

function App({ children, routes }) {

  function generateMapMenu() {
    let path = '';
    return (
      routes.filter(route => route.mapMenuTitle)
        .map((route, index, array) => (
          <span key={index}>
            <Link
              to={path += ((path.slice(-1) === '/' ? '' : '/') +
                  (route.path === '/' ? '' : route.path))}
            >
              {route.mapMenuTitle}
            </Link>
            {(index + 1) < array.length && ' / '}
          </span>
        ))
    );
  }

  return(
    <div style={{maxWidth: '500px'}}>
      <h2 style={{marginBottom: 0}}>React for GitHub Pages</h2>
      <LandingPage />
    </div>
  );
}

export default App;
