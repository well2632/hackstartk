import React, { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { useNavigate } from "react-router-dom";

export default function MenuHamburguer({ children }) {
  const [isOpen, setOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <div className={"flex flex-col  lg:hidden w-full z-10 items-center  px-4 fixed top-0 left-0 bg-white  " + (isOpen ? "h-full justify-start" : "h-[80px] justify-center")}>
      <div className="flex justify-between items-center w-full h-[80px] border-b-[1px]">
        <img src="/logo_credit.svg"></img>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
      <div className={"w-screen bg-white p-4 flex-col " + (isOpen ? "flex" : "hidden")}>
        <span className="h-16 w-full  flex items-center justify-start px-2 border-b-[1px]" onClick={() => navigate("/step1")}>
          Painel
        </span>
        <span className="h-16 w-full  flex items-center justify-start px-2 border-b-[1px]" onClick={() => navigate("/")}>
          Análise de crédito
        </span>
        <span className="h-16 w-full  flex items-center justify-start px-2 border-b-[1px] text-gray-400">Solicitações de crédito</span>
        <span className="h-16 w-full  flex items-center justify-start px-2 border-b-[1px] text-gray-400">Personalização</span>
      </div>
    </div>
  );
}
