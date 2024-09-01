import React, { useState } from "react";
import { Button, Label, FileInput, TextInput } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";

function FileUpload() {
  const [openModal, setOpenModal] = useState(true);

  const navigate = useNavigate();

  return (
    <div className="w-screen overflow-hidden">
      <div className="h-[80px] flex items-center justify-center px-5 lg:px-20 border-b-2 border-[#DCDCDC] w-full relative">
        <div className="absolute bottom-[-2px]  left-0 w-full border-b-[3px] border-[#A30DEA] "></div>
        <div className="flex gap-10">
          <img src="/logo_credit.svg"></img>
        </div>
      </div>
      <div className=" p-5 lg:p-20 flex flex-col gap-4 h-[650px] lg:h-[800px] justify-between">
        <div className="flex flex-col gap-4 overflow-y-scroll lg:overflow-hidden">
          <h1 className="text-center  text-4xl mt-10 lg:mt-0 ">Estamos carregando sua análise de crédito</h1>
          <span className="text-[#637282] text-center   ">Sua análise está sendo feita, esse processo pode levar alguns minutos...</span>
        </div>
      </div>
    </div>
  );
}

export default FileUpload;
