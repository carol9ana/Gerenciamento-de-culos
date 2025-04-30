import React from 'react';

function Footer() {
  return React.createElement(
    'footer',
    { className: 'bg-dark text-white text-center p-3 mt-4' },
    React.createElement(
      'div',
      { className: 'container' },
      React.createElement('p', { className: 'mb-0' }, `© ${new Date().getFullYear()} Óptica Carol. Todos os direitos reservados.`)
    )
  );
}

export default Footer;
