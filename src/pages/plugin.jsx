import React, { useState } from "react";
import { Button, Checkbox, Table, TextInput } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";

function Plugin() {
  const [openModal, setOpenModal] = useState(true);

  const navigate = useNavigate();

  const json = [
    {
      svg: "/icon_s.svg",
      title: "Stark Banking",
      description: "O módulo Start Bank irá fornecer informações do cliente com base no uso dos produtos do banco",
      disabled: false,
    },
    {
      svg: "/open-banking.svg",
      title: "Open Banking",
      description: "O módulo Open Finance irá buscar dados em outras instituições financeiras para lhe ajudar na sua análise de crédito",
      disabled: false,
    },
    {
      svg: "/smart-planting.svg",
      title: "Agrocredit",
      description: "Este plugin fornece uma análise de crédito com base em visão computacional filtrando dados do solo e qualidade da safra",
      disabled: false,
    },
    {
      svg: "/supply_cred.svg",
      title: "Supplycredit",
      description: "Este plugin fornece uma análise de crédito com base nos trajetos e informações logísticas",
      disabled: true,
    },
  ];

  return (
    <div className="w-screen overflow-hidden">
      <div className="h-[80px] flex items-center justify-between px-5 lg:px-20 border-b-2 border-[#DCDCDC] w-full relative">
        <div className="absolute bottom-[-2px]  left-0 w-[80%] border-b-[3px] border-[#A30DEA] "></div>
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
            <span className="w-[32px] h-[32px] rounded bg-[#A30DEA] flex items-center justify-center text-white">2</span>
            <span className="font-semibold mt-1 text-md">Seleção de módulos</span>
          </div>
          <div className="flex gap-4">
            <span className="w-[32px] h-[32px] rounded bg-[#DAADEF] flex items-center justify-center text-white">3</span>
            <span className=" mt-1 text-md">Documentos</span>
          </div>
        </div>
      </div>
      <div className=" p-5 lg:p-20 flex flex-col gap-4 h-[650px] lg:h-[800px] justify-between">
        <div className="flex flex-col gap-4 overflow-y-scroll lg:overflow-hidden">
          <h1 className="text-center lg:text-left text-4xl mt-10 lg:mt-0">Seleção de módulos</h1>
          <span className="text-[#637282] text-center lg:text-left ">Escolha a inteligência que irá fazer a análise de crédito da empresa selecionada.</span>
          <div className=" w-full lg:w-4/12 mb-10">
            <TextInput id="email1" type="email" placeholder="Pesquisar" icon={IoIosSearch} required />
          </div>

          {json.map((element) => (
            <div className="w-full flex items-center justify-start lg:gap-0 gap-6 px-2 ">
              <input
                type="checkbox"
                id="some_id"
                disabled={element.disabled}
                className="
  appearance-none w-8 h-8 border-2 rounded border-gray-300  bg-white"
              />
              <div className="flex items-center justify-center gap-4 w-5/12 lg:w-4/12">
                <img src={element.svg} alt="" />
                <span className="w-40">{element.title}</span>
              </div>

              <div className="w-6/12">
                <span className="block w-full lg:w-1/2 whitespace-normal text-gray-500">{element.description}</span>
              </div>
              <button outline className=" ">
                {!element.disabled && <span className="border-2 py-2 px-4 rounded border-cyan-500 hidden lg:block text-cyan-500">Mais informações</span>}
                {element.disabled && <span className="border-2 py-2 px-4 rounded border-gray-400 hidden lg:block text-gray-400">Em desenvolvimento</span>}
              </button>
            </div>
          ))}
        </div>

        <div className="border-t-2 h-24  items-center flex justify-between">
          <Button color="gray" className="w-[150px]" onClick={() => navigate("/")}>
            Voltar
          </Button>
          <Button className="w-[150px] " onClick={() => navigate("/step3")}>
            Próximo
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Plugin;
