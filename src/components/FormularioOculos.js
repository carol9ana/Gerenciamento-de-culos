import React, { useState, useEffect } from 'react';

function FormularioOculos({ onSalvar, oculosEditando }) {
  const [dados, setDados] = useState({
    doenca: '',
    grauEsq: '',
    grauDir: '',
    armacao: '',
    foto: '',
  });

  useEffect(() => {
    if (oculosEditando) {
      setDados(oculosEditando);
    }
  }, [oculosEditando]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDados((prev) => ({ ...prev, [name]: value }));
  };

  const handleFoto = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setDados((prev) => ({ ...prev, foto: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSalvar(dados);
    setDados({ doenca: '', grauEsq: '', grauDir: '', armacao: '', foto: '' });
    document.getElementById('fotoInput').value = ''; // Limpa o input de foto
  };

  return React.createElement(
    'form',
    { onSubmit: handleSubmit },
    React.createElement(
      'div',
      { className: 'mb-3' },
      React.createElement('label', { className: 'form-label' }, 'Doença'),
      React.createElement('input', {
        type: 'text',
        name: 'doenca',
        value: dados.doenca,
        onChange: handleChange,
        className: 'form-control',
        placeholder: 'Ex: Miopia',
        required: true,
      })
    ),
    React.createElement(
      'div',
      { className: 'row' },
      React.createElement(
        'div',
        { className: 'col-md-6 mb-3' },
        React.createElement('label', { className: 'form-label' }, 'Grau Esquerdo'),
        React.createElement('input', {
          type: 'number',
          step: '0.25',
          name: 'grauEsq',
          value: dados.grauEsq,
          onChange: handleChange,
          className: 'form-control',
          placeholder: 'Ex: -2.50',
          required: true,
        })
      ),
      React.createElement(
        'div',
        { className: 'col-md-6 mb-3' },
        React.createElement('label', { className: 'form-label' }, 'Grau Direito'),
        React.createElement('input', {
          type: 'number',
          step: '0.25',
          name: 'grauDir',
          value: dados.grauDir,
          onChange: handleChange,
          className: 'form-control',
          placeholder: 'Ex: -1.75',
          required: true,
        })
      )
    ),
    React.createElement(
      'div',
      { className: 'mb-3' },
      React.createElement('label', { className: 'form-label' }, 'Armação'),
      React.createElement('input', {
        type: 'text',
        name: 'armacao',
        value: dados.armacao,
        onChange: handleChange,
        className: 'form-control',
        placeholder: 'Ex: Armação metálica',
        required: true,
      })
    ),
    React.createElement(
      'div',
      { className: 'mb-4' },
      React.createElement('label', { className: 'form-label' }, 'Foto da Armação'),
      React.createElement('input', {
        type: 'file',
        id: 'fotoInput',
        accept: 'image/*',
        onChange: handleFoto,
        className: 'form-control',
      })
    ),
    React.createElement(
      'button',
      { type: 'submit', className: 'btn btn-primary w-100' },
      oculosEditando ? 'Atualizar' : 'Cadastrar'
    )
  );
}

export default FormularioOculos;
