import React from 'react';

function TabelaOculos({ oculos, onEditar, onExcluir }) {
  return React.createElement(
    'div',
    { className: 'table-responsive' },
    React.createElement(
      'table',
      { className: 'table table-striped align-middle' },
      React.createElement(
        'thead',
        null,
        React.createElement(
          'tr',
          null,
          ...['ID','Foto', 'Doença', 'Grau Esq.', 'Grau Dir.', 'Armação', 'Ações'].map((col) =>
            React.createElement('th', { key: col }, col)
          )
        )
      ),
      React.createElement(
        'tbody',
        null,
        oculos.map((item) =>
          React.createElement(
            'tr',
            { key: item.id },
            React.createElement('td', null, item.id),
            React.createElement('td', null,
              item.foto
                ? React.createElement('img', {
                    src: item.foto,
                    alt: 'Foto armação',
                    className: 'img-fluid rounded',
                    style: { width: '80px' }
                  })
                : 'Sem foto'
            ),
            React.createElement('td', null, item.doenca),
            React.createElement('td', null, item.grauEsq),
            React.createElement('td', null, item.grauDir),
            React.createElement('td', null, item.armacao),
            React.createElement(
              'td',
              null,
              React.createElement(
                'button',
                {
                  className: 'btn btn-warning btn-sm me-2',
                  onClick: () => onEditar(item),
                },
                'Editar'
              ),
              React.createElement(
                'button',
                {
                  className: 'btn btn-danger btn-sm',
                  onClick: () => onExcluir(item.id),
                },
                'Excluir'
              )
            )
          )
        )
      )
    )
  );
}

export default TabelaOculos;
