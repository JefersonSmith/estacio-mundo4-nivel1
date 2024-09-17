import React, { createContext, useState, useContext } from 'react';
import { server } from '../data/Suppliers';

const SuppliersContext = createContext();

export const useSuppliers = () => useContext(SuppliersContext);

export const SuppliersProvider = ({ children }) => {
  const dadosIniciais = server.secoes.flatMap(secao => 
    secao.data.map(cliente => ({ ...cliente, categoria: secao.categoria })),
  );

  const [clientes, setSuppliers] = useState(dadosIniciais);

  
  const filtrarSuppliers = (categoria, nomeEmpresa) => {
    const clientesFiltrados = clientes.filter(cliente => {
      //console.log('filtrarSuppliers ===>',cliente)
      const correspondeCategoria = categoria ? cliente.categoria.toLowerCase().includes(categoria.toLowerCase()) : true;
      const correspondeNomeEmpresa = nomeEmpresa ? cliente.nome.toLowerCase().includes(nomeEmpresa.toLowerCase()) : true;
      return correspondeCategoria && correspondeNomeEmpresa;
    });
  
    // Agrupa os clientes filtrados por categoria
    const secoesAgrupadas = clientesFiltrados.reduce((acc, cliente) => {
      const { categoria } = cliente;
      if (!acc[categoria]) {
        acc[categoria] = { categoria: categoria, data: [] };
      }
      acc[categoria].data.push(cliente);
      return acc;
    }, {});
  
    return Object.values(secoesAgrupadas);
  };
  


  const adicionarSupplier = (cliente) => {
    setSuppliers([...clientes, { ...cliente, categoria: cliente.categoria }]);
  };
 
  const removerSupplier = (clienteId) => {
    setSuppliers(clientes.filter(cliente => cliente.id !== clienteId));
  };

  const atualizarSupplier = (clienteId, dadosAtualizados) => {
    setSuppliers(clientes.map(cliente => {
      if (cliente.id === clienteId) {
        const categoriaAtualizada = dadosAtualizados.categoria ? dadosAtualizados.categoria : cliente.categoria;
        const { categoria, ...restoDosDadosAtualizados } = dadosAtualizados;
        return { ...cliente, ...restoDosDadosAtualizados, categoria: categoriaAtualizada };
      }
      return cliente;
    }));
  };
 
  const buscarSupplierPorId = (id) => {
    return clientes.find(cliente => cliente.id === id);
  };

  const getSuppliersFormatoOriginal = () => {
    const secoesAgrupadas = clientes.reduce((acc, cliente) => {
      const { categoria } = cliente;
      //console.log('getSuppliersFormatoOriginal',categoria)
      if (!acc[categoria]) {
        acc[categoria] = { categoria: categoria, data: [] };
      }
      //console.log('return acc')
      acc[categoria].data.push(cliente);
      return acc;
    }, {});
    //console.log('return Object.values(secoesAgrupadas)')
    return Object.values(secoesAgrupadas);
  };

  return (
    <SuppliersContext.Provider value={{
      clientes, 
      adicionarSupplier, 
      removerSupplier, 
      atualizarSupplier, 
      getSuppliersFormatoOriginal,
      buscarSupplierPorId,
      filtrarSuppliers
    }}>
      {children}
    </SuppliersContext.Provider>
  );
};
