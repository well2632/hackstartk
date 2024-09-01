import React, { useState } from "react";
import { Button, Label, Select } from "flowbite-react";
import { useNavigate } from "react-router-dom";

function App() {
  const [openModal, setOpenModal] = useState(true);

  const navigate = useNavigate();

  return (
    <div className="w-screen overflow-hidden">
      <div className="h-[80px] flex items-center justify-between px-5 lg:px-20 border-b-2 border-[#DCDCDC] w-full relative">
        <div className="absolute bottom-[-2px]  left-0 w-[45%] border-b-[3px] border-[#A30DEA] "></div>
        <div className="flex gap-10">
          <img src="seta.svg"></img>
          <img src="/logo_credit.svg"></img>
        </div>
        <div className="gap-10 hidden lg:flex">
          <div className="flex gap-4">
            <span className="w-[32px] h-[32px] rounded bg-[#A30DEA] flex items-center justify-center text-white">1</span>
            <span className="font-semibold mt-1 text-md">Empresa</span>
          </div>
          <div className="flex gap-4">
            <span className="w-[32px] h-[32px] rounded bg-[#DAADEF] flex items-center justify-center text-white">2</span>
            <span className=" mt-1 text-md">Seleção de módulos</span>
          </div>
          <div className="flex gap-4">
            <span className="w-[32px] h-[32px] rounded bg-[#DAADEF] flex items-center justify-center text-white">3</span>
            <span className=" mt-1 text-md">Documentos</span>
          </div>
        </div>
      </div>
      <div className=" p-5 lg:p-20 flex flex-col gap-4 h-[650px] lg:h-[800px] justify-between">
        <div className="flex flex-col gap-4">
          <h1 className="text-center lg:text-left text-4xl mt-10 lg:mt-0">Seleção de empresa</h1>
          <span className="text-[#637282] text-center lg:text-left ">Com poucos cliques, faça uma análise completa da empresa</span>
          <div className="w-full">
            <div className="mb-2 block w-full">
              <Label htmlFor="countries" value="Empresa selecionada" />
            </div>
            <Select className="w-full" id="countries" required>
              <option selected disabled>
                Selecione uma opção
              </option>

              <option>SLC Agrícola</option>
              <option disabled>iFood</option>
              <option disabled>Quinto Andar</option>
              <option disabled>Loft</option>
            </Select>
          </div>
        </div>

        <div className="border-t-2 h-24  items-center flex justify-between">
          <Button color="gray" className="w-[150px]">
            Cancelar
          </Button>
          <Button className="w-[150px] " onClick={() => navigate("/step2")}>
            Iniciar
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
