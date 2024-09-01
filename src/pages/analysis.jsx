import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import * as animationData from "../lottie/loading.json";

function Analysis() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="w-screen overflow-hidden flex gap-4 items-start justify-between">
      <div className="bg-[#F6F9FA] h-screen w-80 flex gap-14 flex-col items-center justify-start pt-10">
        <img src="/logo_credit.svg"></img>
        <ul className="flex flex-col gap-2 w-full px-4">
          <li className=" h-14 rounded-full px-4 flex items-center hover:bg-gray-200 cursor-pointer">Dashboard</li>
          <li className=" h-14 rounded-full px-4 flex items-center bg-cyan-600 text-white hover:bg-cyan-700 cursor-pointer">Análise de crédito</li>
          <li className=" h-14 rounded-full px-4 flex items-center hover:bg-gray-200 cursor-pointer">Solicitações</li>
          <li className=" h-14 rounded-full px-4 flex items-center hover:bg-gray-200 cursor-pointer">Personalização</li>
        </ul>
        <div className="flex flex-col gap-2 w-full px-4 mt-80">
          <span className=" h-14 rounded-full px-4 flex items-center hover:bg-gray-200 cursor-pointer">Sair da plataforma</span>
        </div>
      </div>
      <div className="w-full px-10 pt-10 flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl">Análise de crédito</h2>
          <span className="text-[#637282]">Resultado SLC Agrícola</span>
        </div>

        <div className="w-full flex items-center justify-center relative rounded bg-[#F7EEF8] h-[110px]">
          <Lottie options={defaultOptions} height={80} width={80} />
          <span className="absolute top-4 right-4 bg-[#FBCBFF] text-[#A913B7] px-8 h-10 flex items-center justify-center rounded-full">Relatório gerado pelo módulo Stark Bank base</span>
        </div>
        <div className="flex items-center justify-between gap-8">
          <div className="w-6/12 flex items-center justify-center relative rounded bg-[#F7EEF8] h-[400px]">
            <Lottie options={defaultOptions} height={80} width={80} />
            <span className="absolute top-4 right-4 bg-[#FBCBFF] text-[#A913B7] px-8 h-10 flex items-center justify-center rounded-full">Relatório gerado pelo módulo Stark Bank base</span>
          </div>
          <div className="w-6/12 flex items-center justify-center relative rounded bg-[#F7EEF8] h-[400px]">
            <Lottie options={defaultOptions} height={80} width={80} />
            <span className="absolute top-4 right-4 bg-[#FBCBFF] text-[#A913B7] px-8 h-10 flex items-center justify-center rounded-full">Relatório gerado pelo módulo Stark Bank base</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analysis;
