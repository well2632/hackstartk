import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import * as animationData from "../lottie/loading.json";
import { Label, Select } from "flowbite-react";
import ApexCharts from "apexcharts";
import ReactApexChart from "react-apexcharts";
import MenuHamburguer from "../components/mobile-header";

function Dashboard() {
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

  /*
  id da empresa mock
  id plugins (mock, puxa e chama socket)
  socket id (gerado automaticamente)
  */

  const series = [
    {
      name: "Alimentício",
      data: [120287, 89740, 94720, 87230, 104982, 119404, 92682, 96240, 79840, 83456, 66780],
    },
    {
      name: "Logístico",
      data: [100287, 49740, 23420, 97280, 104982, 139404, 52656, 108240, 54840, 39840, 63456],
    },
    {
      name: "Agrícola",
      data: [30287, 29740, 23420, 57280, 94982, 99404, 22656, 38240, 14840, 39840, 13456],
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },

    legend: {
      show: true,
      showForSingleSeries: true,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
    },
    dataLabels: {
      enabled: true,
    },
    colors: ["#017EFA", "#30D987", "#FD1F9B"], //Cores
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
    },
  };

  return (
    <div className="w-screen flex items-start justify-between ">
      <div className="bg-[#F6F9FA] h-screen w-80 lg:  lg:flex gap-14 hidden flex-col items-center justify-start pt-10 sticky top-0 left-0">
        <img src="/logo_credit.svg"></img>
        <ul className="flex flex-col gap-2 w-full px-4">
          <li className=" h-14 rounded-full px-4 flex items-center hover:bg-gray-200 cursor-pointer">Dashboard</li>
          <li className=" h-14 rounded-full px-4 flex items-center hover:bg-gray-200 cursor-pointer">Análise de crédito</li>
          <li className=" h-14 rounded-full px-4 flex items-center bg-cyan-600 text-white hover:bg-cyan-700 cursor-pointer">Solicitações</li>
          <li className=" h-14 rounded-full px-4 flex items-center hover:bg-gray-200 cursor-pointer">Personalização</li>
        </ul>
        <div className="flex flex-col gap-2 w-full px-4 mt-80">
          <span className=" h-14 rounded-full px-4 flex items-center hover:bg-gray-200 cursor-pointer">Sair da plataforma</span>
        </div>
      </div>
      <div className="w-full px-10 py-10 flex flex-col gap-4">
        <h2>Dashboard</h2>
        <div className="flex flex-col gap-4 w-full lg:w-auto">
          <MenuHamburguer />
          <h2 className="text-3xl mt-10">Painel</h2>
        </div>

        <div className="flex gap-4">
          <div className="bg-[#F6F9FA] mt-10 p-4 lg:p-8 relative w-full">
            <span className="absolute top-4 right-4 bg-[#FBCBFF] text-[#A913B7] px-8 h-10 hidden lg:flex gap-2 items-center justify-center rounded-full">Dia Semana Mês</span>
            <span className="text-lg">Solicitações de Crédito X Setor</span>
            <div className="flex flex-col lg:flex-row w-full lg:w-auto gap-4 mt-4">
              <div className="flex items-center justify-between bg-white w-full px-4 h-[40px] rounded">
                <span>Alimentício</span>
                <span className="font-semibold">35</span>
              </div>
              <div className="flex items-center justify-between bg-white w-full px-4 h-[40px] rounded">
                <span>Logítico</span>
                <span className="font-semibold">26</span>
              </div>
              <div className="flex items-center justify-between bg-white w-full px-4 h-[40px] rounded">
                <span>Agrícola</span>
                <span className="font-semibold">12</span>
              </div>
            </div>
            <ReactApexChart options={options} series={series} type="line" height={350} />
          </div>
        </div>

        <div className="flex gap-4 mt-8 flex-col lg:flex-row">
          <div className="bg-white p-6 rounded-lg shadow lg:w-1/3 w-full">
            <h3 className="text-2xl font-bold">73</h3>
            <p className="text-sm text-gray-600">Total de Solicitações</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow lg:w-1/3 w-full">
            <h3 className="text-2xl font-bold">874</h3>
            <p className="text-sm text-gray-600">Total Aprovadas</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow lg:w-1/3 w-full">
            <h3 className="text-2xl font-bold">380</h3>
            <p className="text-sm text-gray-600">Solicitações Rejeitadas</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
