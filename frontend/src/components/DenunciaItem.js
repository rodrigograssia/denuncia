import React from 'react';

export default function DenunciaItem({ d, showUser = false, showConclude = false, onConclude }) {
  const statusNormalized = (d.status || '').toUpperCase();
  const isConcluido = statusNormalized.startsWith('CONCLU');

  return (
    <div className="bg-white dark:bg-neutral-900 rounded-lg border border-gray-300 dark:border-neutral-600 p-4 shadow">
      <div className="flex flex-col items-start justify-between">
        <div className="flex w-full justify-between">
          <div>
            <p className="text-xs text-gray-400">ID: {d.idDenuncia ?? d.id}</p>
            {showUser && <p className="text-xs text-gray-400">ID Usuário: {d.idUsuario}</p>}
          </div>
          <div className="text-xs text-gray-400">{d.status}</div>
        </div>

        <h2 className="font-bold text-lg dark:text-white mt-2">{d.titulo_denuncia || d.titulo}</h2>
      </div>

      <div className="flex flex-wrap gap-4 items-center text-sm text-gray-500 dark:text-gray-400 mt-2">
        <span>Categoria: <span className="text-gray-700 dark:text-gray-200">{d.categoria_denuncia || d.categoria}</span></span>
        {(d.empresa_denuncia || d.nomeEmpresa) && <span>Empresa: <span className="text-gray-700 dark:text-gray-200">{d.empresa_denuncia || d.nomeEmpresa}</span></span>}
      </div>

      {(d.descricao_denuncia || d.descricao) && <p className="mt-2 text-gray-700 dark:text-gray-300">{d.descricao_denuncia || d.descricao}</p>}

      <div className="flex items-center gap-3 mt-2">
        {statusNormalized === 'PENDENTE' && <p className="text-blue-600">{d.status}</p>}
        {isConcluido && <p className="text-green-600">{d.status}</p>}
        {showConclude && !isConcluido && (
          <button
            onClick={() => onConclude && onConclude(d)}
            className="p-2 rounded-md border border-green-600 flex items-center justify-center ml-auto text-green-600 text-xs md:text-sm hover:bg-neutral-200 hover:dark:bg-neutral-700"
          >
            Marcar como Concluída
          </button>
        )}
      </div>
    </div>
  );
}
