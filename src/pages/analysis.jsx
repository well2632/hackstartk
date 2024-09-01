import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import * as animationData from "../lottie/loading.json";
import { Label, Select } from "flowbite-react";
import ApexCharts from "apexcharts";
import ReactApexChart from "react-apexcharts";
import MenuHamburguer from "../components/mobile-header";

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

  /*
  id da empresa mock
  id plugins (mock, puxa e chama socket)
  socket id (gerado automaticamente)
  */

  const series = [
    {
      name: "Movimentação em R$",
      data: [120287, 89740, 94720, 87230, 104982, 119404, 92682, 96240, 79840],
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
    colors: ["#A30DEA"],
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set"],
    },
  };

  return (
    <div className="w-screen flex items-start justify-between ">
      <div className="bg-[#F6F9FA] h-screen w-80  gap-14 flex-col items-center justify-start pt-10 sticky top-0 left-0 hidden lg:flex">
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
      <div className="w-full px-4 lg:px-10 py-10 flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <MenuHamburguer>
            <span></span>
          </MenuHamburguer>
          <h2 className="text-3xl w-full text-center lg:w-auto lg:text-left mt-20 lg:mt-0">Análise de crédito</h2>
          <span className="text-[#637282] w-full text-center lg:w-auto lg:text-left">Resultado SLC Agrícola</span>
        </div>

        {loading && (
          <>
            <div className="w-full flex items-center justify-center relative rounded bg-[#F7EEF8] h-[110px]">
              <Lottie options={defaultOptions} height={80} width={80} />
              <span className="absolute top-4 right-4 bg-[#FBCBFF] text-[#A913B7] px-8 h-10 hidden lg:flex gap-2 items-center justify-center rounded-full ">
                Relatório gerado pelo módulo Stark Bank base <img src="/multiple-stars.svg" alt="" />
              </span>
            </div>
            <div className="hidden lg:flex items-center justify-between gap-8">
              <div className="w-6/12 flex items-center justify-center relative rounded bg-[#F7EEF8] h-[400px]">
                <Lottie options={defaultOptions} height={80} width={80} />
                <span className="absolute top-4 right-4 bg-[#FBCBFF] text-[#A913B7] px-8 h-10 flex gap-2 items-center justify-center rounded-full">
                  Relatório gerado pelo módulo Agrocred <img src="/multiple-stars.svg" alt="" />
                </span>
              </div>
              <div className="w-6/12 flex items-center justify-center relative rounded bg-[#F7EEF8] h-[400px]">
                <Lottie options={defaultOptions} height={80} width={80} />
                <span className="absolute top-4 right-4 bg-[#FBCBFF] text-[#A913B7] px-8 h-10 flex gap-2 items-center justify-center rounded-full">
                  Relatório gerado pelo módulo Stark Bank base <img src="/multiple-stars.svg" alt="" />
                </span>
              </div>
            </div>
          </>
        )}
        {!loading && (
          <div>
            <div className="w-full flex-col lg:flex-row flex items-end justify-between gap-4">
              <span className=" bg-[#FBCBFF] text-[#A913B7] lg:hidden px-8 h-10 flex gap-2 items-center justify-center w-full rounded-full">
                Gerado pelo módulo Scraping
                <img src="/multiple-stars.svg" alt="" />
              </span>
              <div className="flex gap-4  h-[110px] px-10 items-center bg-[#F6F9FA] lg:w-4/12 w-full ">
                <div className="w-[48px] h-[48px] rounded bg-[#F6D8F9]  flex items-center justify-center">
                  <img src="/finance.svg" alt="" />
                </div>

                <div className="flex flex-col gap-0 w-full  rounded">
                  <span className="text-gray-600">Ativo estimado</span>
                  <span className="text-xl font-semibold w-full">R$ 15.536.200.000</span>
                </div>
              </div>
              <div className="flex gap-4 h-[110px] px-10 items-center bg-[#F6F9FA] lg:w-4/12 w-full ">
                <div className="w-[48px] h-[48px] rounded bg-[#F6D8F9]  flex items-center justify-center">
                  <img src="/debt.svg" alt="" />
                </div>
                <div className="flex flex-col gap-0 w-full  rounded">
                  <span className="text-gray-600">Dív. Líquida</span>
                  <span className="text-xl font-semibold w-full">R$ 4.285.270.000</span>
                </div>
              </div>
              <div className="flex gap-4 h-[110px] px-10 items-center bg-[#F6F9FA] lg:w-4/12 w-full ">
                <div className="w-[48px] h-[48px] rounded bg-[#F6D8F9]  flex items-center justify-center">
                  <img src="/gain.svg" alt="" />
                </div>
                <div className="flex flex-col gap-0 w-full  rounded">
                  <span className="text-gray-600">Receita líquida (3 meses)</span>
                  <span className="text-xl font-semibold w-full">R$ 2.111.920.000</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4 flex-col lg:flex-row">
              <span className=" bg-[#FBCBFF] mt-10 lg:mt-0  text-[#A913B7] lg:hidden px-8 h-10 flex gap-2 items-center justify-center w-full rounded-full">
                Gerado pelo módulo Agrocred
                <img src="/multiple-stars.svg" alt="" />
              </span>
              <div className="bg-[#F6F9FA] mt-0 lg:mt-10 p-8 relative w-full lg:w-8/12 ">
                <span className="text-lg">Análise da agricultura</span>
                <span className="lg:absolute hidden static top-4 right-4 bg-[#FBCBFF] text-[#A913B7] px-8 h-10 lg:flex gap-2 items-center justify-center rounded-full">
                  Gerado pelo módulo Stark Bank base <img src="/multiple-stars.svg" alt="" />
                </span>
                <div className="w-full py-4">
                  <Select className="w-full" id="countries" required>
                    <option selected>Fazenda Pombona</option>
                  </Select>
                </div>
                <img className="w-full bg-cover" src="/agro.png" alt="" />
                <div className="flex gap-4  mt-4 flex-col lg:flex-row">
                  <div className="flex items-center justify-between bg-white w-full px-4 h-[40px] rounded">
                    <span>Número de hectares</span>
                    <span className="font-semibold">100.000</span>
                  </div>
                  <div className="flex items-center justify-between bg-white w-full px-4 h-[40px] rounded">
                    <span>Qualidade da safra</span>
                    <span className="font-semibold">100.000</span>
                  </div>
                </div>
              </div>
              <span className=" bg-[#FBCBFF] mt-10 lg:mt-0  text-[#A913B7] lg:hidden px-8 h-10 flex gap-2 items-center justify-center w-full rounded-full">
                Gerado pelo módulo Scraping
                <img src="/multiple-stars.svg" alt="" />
              </span>
              <div className="bg-[#F6F9FA] mt-0 lg:mt-10 p-8 relative w-full lg:w-4/12">
                <span className="text-lg">Análise do acionista</span>
                <span className=" bg-[#FBCBFF] hidden text-[#A913B7] px-8 h-10 lg:flex gap-2 items-center justify-center rounded-full">
                  Gerado pelo módulo Scraping
                  <img src="/multiple-stars.svg" alt="" />
                </span>
                <div className="w-full py-4">
                  <Select className="w-full" id="countries" required>
                    <option selected>Todos os acionistas</option>
                  </Select>
                </div>
                <div className="flex flex-col gap-4 mt-4">
                  <div className="flex items-center justify-between bg-white w-full px-4 h-[40px] rounded">
                    <span>Participação acionária</span>
                    <span className="font-semibold">100%</span>
                  </div>
                  <div className="flex items-center justify-between bg-white w-full px-4 h-[40px] rounded">
                    <span>Dívidas</span>
                    <span className="font-semibold">R$ 332.422,50</span>
                  </div>
                  <div className="flex items-center justify-between bg-white w-full px-4 h-[40px] rounded">
                    <span>Envolvimento política</span>
                    <span className="font-semibold">Pouco</span>
                  </div>
                  <div className="flex items-center justify-between bg-white w-full px-4 h-[40px] rounded">
                    <span>Reputação</span>
                    <span className="font-semibold">Boa</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-4 flex-col lg:flex-row">
              <span className=" bg-[#FBCBFF] mt-10 lg:mt-0  text-[#A913B7] lg:hidden px-8 h-10 flex gap-2 items-center justify-center w-full rounded-full">
                Gerado pelo módulo Stark Bank base
                <img src="/multiple-stars.svg" alt="" />
              </span>
              <div className="bg-[#F6F9FA] mt-0 lg:mt-10 p-8 relative w-full lg:w-8/12">
                <span className="absolute top-4 right-4 hidden  bg-[#FBCBFF] text-[#A913B7] px-8 h-10 lg:flex gap-2 items-center justify-center rounded-full">
                  Gerado pelo módulo Stark Bank base <img src="/multiple-stars.svg" alt="" />
                </span>
                <span className="text-lg">Análise fluxo de caixa</span>
                <ReactApexChart options={options} series={series} type="line" height={350} />
              </div>
              <div className="bg-[#F6F9FA] mt-10 p-8 relative w-full lg:w-4/12">
                <span className="text-lg">Ativos financeiros</span>
                <span className=" bg-[#FBCBFF] text-[#A913B7] px-8 h-10 hidden lg:flex gap-2 items-center justify-center rounded-full">
                  Gerado pelo módulo Scraping
                  <img src="/multiple-stars.svg" alt="" />
                </span>
                <div className="w-full py-4">
                  <Select className="w-full" id="countries" required>
                    <option selected>Todos os ativos</option>
                  </Select>
                </div>
                <div className="flex flex-col gap-4 mt-4">
                  <div className="flex items-center justify-between bg-white w-full px-4 h-[40px] rounded">
                    <span>Terras</span>
                    <span className="font-semibold">R$ 12Bi</span>
                  </div>
                  <div className="flex items-center justify-between bg-white w-full px-4 h-[40px] rounded">
                    <span>Veículos</span>
                    <span className="font-semibold">R$ 1.25Bi</span>
                  </div>
                  <div className="flex items-center justify-between bg-white w-full px-4 h-[40px] rounded">
                    <span>Ferramentas</span>
                    <span className="font-semibold">R$ 0.9Bi</span>
                  </div>
                  <div className="flex items-center justify-between bg-white w-full px-4 h-[40px] rounded">
                    <span>Outros</span>
                    <span className="font-semibold">R$ 1.4Bi</span>
                  </div>
                </div>
              </div>
            </div>
            <span className=" bg-[#FBCBFF] mt-10 lg:mt-0  text-[#A913B7] lg:hidden px-8 h-10 flex gap-2 items-center justify-center w-full rounded-full">
              Gerado pelo módulo Scraping
              <img src="/multiple-stars.svg" alt="" />
            </span>
            <div className="bg-[#F6F9FA] mt-0 lg:mt-10 p-8 relative w-full lg:w-8/12">
              <div className="flex justify-between items-center">
                <span className="text-lg">Score birô de crédito (Serasa)</span>
                <span className="absolute top-4 right-4 bg-[#FBCBFF] text-[#A913B7] px-8 h-10 hidden lg:flex gap-2 items-center justify-center rounded-full">
                  Gerado pelo módulo Scraping <img src="/multiple-stars.svg" alt="" />
                </span>
              </div>
              <div className="flex gap-4 items-center justify-center mt-16 flex-col lg:flex-row">
                <img className="w-24 lg:w-auto" src="/serasa.png" alt="" />
                <span className="text-3xl text-center">674 Bom</span>
              </div>
            </div>
            <div className="bg-[#F6F9FA] mt-10 p-8 relative w-full flex flex-col items-center justify-center gap-4">
              <div className="flex flex-col gap-2">
                <span className="text-lg text-center">A análise de crédito pré-aprovada para a empresa SLC Agrícola foi de</span>
                <span className=" font-semibold text-3xl text-center">Entre R$ 20.000,00 e R$ 70.000,00</span>
                <span className="text-lg text-center">com um risco considerado de 24%</span>
              </div>

              <div className="flex gap-4 items-center justify-center flex-col-reverse lg:flex-row w-full lg:w-auto">
                <button className="bg-gray-200 text-black px-4 py-4 rounded text-center w-full lg:w-auto">Rejeitar proposta</button>
                <button className="bg-gray-200 text-black px-4 py-4 rounded text-center w-full lg:w-auto">Editar proposta</button>
                <button className="bg-cyan-600 text-white px-4 py-4 rounded text-center w-full lg:w-auto">Aprovar proposta</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Analysis;
