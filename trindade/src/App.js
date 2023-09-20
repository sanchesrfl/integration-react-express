// Consumindo a API no React
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/usuarios')
      .then(response => {
        console.log('Dados da resposta:', response.data); // Adicione esta linha
        setUsuarios(response.data);
      })
      .catch(error => {
        console.error('Erro na solicitação:', error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Usuários</h1>
      <ul>
        {usuarios.map(usuario => (
          <li key={usuario.id}>{usuario.nome}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;