import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import * as animationData from "../lottie/loading.json";
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

  const seriesLine = [
    {
      name: "Alimentício",
      data: [30, 25, 30, 30, 24, 23, 25, 29, 24, 29, 17],
    },
    {
      name: "Logístico",
      data: [26, 29, 18, 20, 25, 28, 26, 28, 29, 20, 25],
    },
    {
      name: "Agrícola",
      data: [10, 7, 15, 12, 4, 27, 18, 14, 18, 6, 11],
    },
  ];

  const optionsLine = {
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
    colors: ["#017EFA", "#30D987", "#FD1F9B"],
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

  const seriesPie = [35, 26, 12]; // Percentuais dos setores
  const optionsPie = {
    chart: {
      type: "donut",
    },
    labels: ["Alimentício", "Logístico", "Agrícola"],
    colors: ["#017EFA", "#30D987", "#FD1F9B"],
    legend: {
      position: "bottom",
    },
    plotOptions: {
      pie: {
        donut: {
          size: "60%", // Tamanho do donut
        },
        dataLabels: {
          offset: -10, // Ajusta a posição dos rótulos
        },
      },
    },
    dataLabels: {
      formatter: (val, opts) => {
        return opts.w.globals.labels[opts.seriesIndex] + ": " + val.toFixed(0) + "%";
      },
    },
    stroke: {
      show: false,
    },
  };

  return (
    <div className="w-screen flex items-start justify-between ">
      <img src="/logo_credit.svg"></img>
      <ul className="flex flex-col gap-2 w-full px-4">
        <li className="h-14 rounded-full px-4 flex items-center hover:bg-gray-200 cursor-pointer">Dashboard</li>
        <li className="h-14 rounded-full px-4 flex items-center hover:bg-gray-200 cursor-pointer">Análise de crédito</li>
        <li className="h-14 rounded-full px-4 flex items-center bg-cyan-600 text-white hover:bg-cyan-700 cursor-pointer">Solicitações</li>
        <li className="h-14 rounded-full px-4 flex items-center hover:bg-gray-200 cursor-pointer">Personalização</li>
      </ul>
      <div className="flex flex-col gap-2 w-full px-4 mt-80">
        <span className="h-14 rounded-full px-4 flex items-center hover:bg-gray-200 cursor-pointer">Sair da plataforma</span>
      </div>
      <div className="w-full px-10 py-10 flex flex-col gap-4">
        <h2>Dashboard</h2>
        <div className="flex flex-col gap-4 w-full lg:w-auto">
          <MenuHamburguer />
          <h2 className="text-3xl mt-10">Painel</h2>
        </div>
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
          <h3 className="text-2xl font-bold">78</h3>
          <p className="text-sm text-gray-600">Total de Solicitações</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow lg:w-1/3 w-full">
          <h3 className="text-2xl font-bold">58</h3>
          <p className="text-sm text-gray-600">Total Aprovadas</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow lg:w-1/3 w-full">
          <h3 className="text-2xl font-bold">20</h3>
          <p className="text-sm text-gray-600">Solicitações Rejeitadas</p>
        </div>
      </div>

      <div className="flex gap-4 mt-8">
        <div className="bg-white p-6 rounded-lg shadow w-1/3">
          <h3 className="text-2xl font-bold">R$445.685,59</h3>
          <p className="text-sm text-gray-600">Total de Crédito Solicitado</p>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow w-1/3">
        <h3 className="text-2xl font-bold">R$145.685,59</h3>
        <p className="text-sm text-gray-600">Total de Crédito Concedido</p>
      </div>
      <div className="flex gap-4 mt-8">
        <div className="bg-[#F6F9FA] mt-10 p-8 relative w-1/2">
          <span className="text-lg">Distribuição de Solicitações por Setor</span>
          <ReactApexChart options={optionsPie} series={seriesPie} type="donut" height={350} />
        </div>
      </div>
      <div className="bg-[#F6F9FA] mt-10 p-8 w-1/2">
        <h3 className="text-lg font-bold mb-4">Distribuição dos Valores de Solicitações</h3>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <div
              className="h-6"
              style={{
                width: "5%",
                backgroundColor: "#FF6F61",
                borderRadius: "4px",
              }}
            />
            <span>Acima de R$30.000,00: 5 (8%)</span>
          </div>
          <div className="flex items-center gap-4">
            <div
              className="h-6"
              style={{
                width: "15%",
                backgroundColor: "#6B5B95",
                borderRadius: "4px",
              }}
            />
            <span>Entre R$15.000,00 e R$30.000,00: 15 (23%)</span>
          </div>
          <div className="flex items-center gap-4">
            <div
              className="h-6"
              style={{
                width: "25%",
                backgroundColor: "#88B04B",
                borderRadius: "4px",
              }}
            />
            <span>Entre R$5.000,00 e R$15.000,00: 35 (54%)</span>
          </div>
          <div className="flex items-center gap-4">
            <div
              className="h-6"
              style={{
                width: "35%",
                backgroundColor: "#F7B7A3",
                borderRadius: "4px",
              }}
            />
            <span>Abaixo de R$5.000,00: 10 (15%)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
