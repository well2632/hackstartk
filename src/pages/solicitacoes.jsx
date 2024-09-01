import React from "react";

function LimitRequestsTable() {
  const requests = [
    { client: "Rappi", limit: "R$ 200.000,00", status: "Em aberto" },
    { client: "Natura", limit: "R$ 2.500,00", status: "Aceita" },
    { client: "A de Agro", limit: "R$ 2.900,00", status: "Em aberto" },
    { client: "Ultragaz", limit: "R$ 150.000,00", status: "Em aberto" },
    { client: "Apple", limit: "R$ 80.000,00", status: "Em aberto" },
    { client: "Renner", limit: "R$ 8.000,00", status: "Negada" },
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-6">Solicitações de Limite</h2>
      
      <div className="overflow-x-auto">
        <table className=" bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="py-3 px-4 border-b">Clientes</th>
              <th className="py-3 px-4 border-b">Limite Solicitado</th>
              <th className="py-3 px-4 border-b">Status - Solicitação</th>
              <th className="py-3 px-4 border-b">Solicitação</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">{request.client}</td>
                <td className="py-2 px-4 border-b">{request.limit}</td>
                <td className="py-2 px-4 border-b">{request.status}</td>
                <td className="py-2 px-4 border-b">
                  {request.status === "Em aberto" ? (
                    <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
                      Abrir solicitação
                    </button>
                  ) : (
                    "Concluída"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LimitRequestsTable;
