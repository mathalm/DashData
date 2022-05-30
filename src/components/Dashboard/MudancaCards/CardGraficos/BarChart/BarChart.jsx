import React, { useEffect, useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import "./styles.css";

Chart.register(...registerables);

const BarChart = ({ props }) => {

  const listagemUsuarios = props.listagemUsuarios;

  const [contagemCidadePoA, setContagemCidadePoA] = useState([]);
  const [contagemCidadeFloripa, setContagemCidadeFloripa] = useState([]);
  const [contagemCidadeRio, setContagemCidadeRio] = useState([]);

  useEffect(() => {
    const filtrarLista = (nomeDaCidade) => {
      return (
        listagemUsuarios.filter(function filterByID(obj) {
          if ("address" in obj && obj.address.city.includes(nomeDaCidade)) {
            return true;
          } else {
            return false;
          }
        })
      )
    }
    setContagemCidadePoA(filtrarLista("Porto Alegre"))
    setContagemCidadeRio(filtrarLista("Rio de Janeiro"))
    setContagemCidadeFloripa(filtrarLista("Florianópolis"))
  }, [listagemUsuarios])

  const dadosBar = [contagemCidadePoA.length, contagemCidadeFloripa.length, contagemCidadeRio.length];

  return (
    <div className="div-grafico1">
      <Pie
        data={{
          labels: ["Porto Alegre", "Florianópolis", "Rio de Janeiro"],
          datasets: [
            {
              label: "Cadastro de usuários",
              data: dadosBar,
              backgroundColor: [
                "rgba(255, 99, 133, 0.7)",
                "rgba(153, 102, 255, 0.7)",
                "rgba(255, 159, 64, 0.7)",
              ],
              borderColor: [
                "#ff1648",
                "#742eff",
                "#ff8f1e",
              ],
              borderWidth: 1,
            }
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
