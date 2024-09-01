import React, { useState } from "react";
import { Button, Label, FileInput, TextInput } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";

function FileUpload() {
  const [openModal, setOpenModal] = useState(true);

  const navigate = useNavigate();

  return (
    <div className="w-screen overflow-hidden">
      <div className="h-[80px] flex items-center justify-between px-5 lg:px-20 border-b-2 border-[#DCDCDC] w-full relative">
        <div className="absolute bottom-[-2px]  left-0 w-[95%] border-b-[3px] border-[#A30DEA] "></div>
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
            <span className="font-semibold mt-1 text-md">Inserção de ativos</span>
          </div>
          <div className="flex gap-4">
            <span className="w-[32px] h-[32px] rounded bg-[#A30DEA] flex items-center justify-center text-white">3</span>
            <span className="font-semibold mt-1 text-md">Documentos</span>
          </div>
        </div>
      </div>
      <div className=" p-5 lg:p-20 flex flex-col gap-4 h-[650px] lg:h-[800px] justify-between">
        <div className="flex flex-col gap-4 overflow-y-scroll lg:overflow-hidden">
          <h1 className="text-center lg:text-left text-4xl mt-10 lg:mt-0">Inserção de ativos</h1>
          <span className="text-[#637282] text-center lg:text-left ">Anexe documentos que comprovem os ativos da empresa</span>

          <div className="flex w-full items-center justify-center">
            <Label
              htmlFor="dropzone-file"
              className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pb-6 pt-5">
                <svg className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Anexe o último relatório financeiro da empresa</span>
                </p>
              </div>
              <FileInput id="dropzone-file" className="hidden" />
            </Label>
          </div>
        </div>

        <div className="border-t-2 h-24  items-center flex justify-between">
          <Button color="gray" className="w-[150px]" onClick={() => navigate("/step2")}>
            Voltar
          </Button>
          <Button className="w-[150px] " onClick={() => navigate("/step4")}>
            Próximo
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FileUpload;
