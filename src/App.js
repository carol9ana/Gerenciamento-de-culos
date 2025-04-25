import React, { useState, useEffect } from 'react';
import FormularioOculos from './components/FormularioOculos';
import TabelaOculos from './components/TabelaOculos';
import { getLS, setLS } from './utils/storage.js';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [oculos, setOculos] = useState([]);
  const [editando, setEditando] = useState(null);

  useEffect(() => {
    setOculos(getLS('oculos') || []);
  }, []);

  const salvar = (novo) => {
    let lista;
    if (editando) {
      lista = oculos.map((item) => (item.id === editando.id ? { ...novo, id: editando.id } : item));
    } else {
      lista = [...oculos, { ...novo, id: Date.now() }];
    }
    setOculos(lista);
    setLS('oculos', lista);
    setEditando(null);
  };

  const excluir = (id) => {
    const filtrado = oculos.filter((item) => item.id !== id);
    setOculos(filtrado);
    setLS('oculos', filtrado);
  };

  return (
    <>
      <Header />
      <main className="container my-5">
        <h2 className="mb-4 text-center">Cadastro de Óculos</h2>
        <div className="row">
          <div className="col-md-5 mb-4">
            <FormularioOculos onSalvar={salvar} oculosEditando={editando} />
          </div>
          <div className="col-md-7">
            <TabelaOculos oculos={oculos} onEditar={setEditando} onExcluir={excluir} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
