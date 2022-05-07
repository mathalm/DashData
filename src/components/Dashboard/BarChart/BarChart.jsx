import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import "./styles.css";

Chart.register(...registerables);

const BarChart = ({ listagemUsuarios }) => {
  var contagemCidadePoA = listagemUsuarios.filter(function filterByID(obj) {
    if ("address" in obj && obj.address.city.includes("Porto Alegre")) {
      return true;
    } else {
      return false;
    }
  });
  var contagemCidadeFloripa = listagemUsuarios.filter(function filterByID(obj) {
    if ("address" in obj && obj.address.city.includes("Florianópolis")) {
      return true;
    } else {
      return false;
    }
  });
  var contagemCidadeRio = listagemUsuarios.filter(function filterByID(obj) {
    if ("address" in obj && obj.address.city.includes("Rio de Janeiro")) {
      return true;
    } else {
      return false;
    }
  });
  const dadosBar = [contagemCidadePoA.length, contagemCidadeFloripa.length, contagemCidadeRio.length];

  return (
    <div className="div-grafico1">
      <Bar
      onClick={() =>{console.log('teste')}}
        data={{
          labels: ["Porto Alegre", "Florianópolis", "Rio de Janeiro"],
          datasets: [
            {
              label: "Cadastro de usuários",
              data: dadosBar,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
            },
            // {
            //   label: "Meta",
            //   data: [8, 5, 6],
            //   backgroundColor: "Orange",
            //   borderColor: "red",
            // },
          ],
        }}
        options={{
          indexAxis: 'y',
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                offset: true
              }
            },
          },
        }}
      />
    </div>
  );
};
export default BarChart;
