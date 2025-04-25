import React from 'react';

function Header() {
  return React.createElement(
    'header',
    { className: 'bg-dark text-white p-3 mb-4 shadow' },
    React.createElement(
      'div',
      { className: 'container d-flex justify-content-center align-items-center' },
      React.createElement('h1', { className: 'h4 m-0' }, 'Óticas Carol')
    )
  );
}

export default Header;
