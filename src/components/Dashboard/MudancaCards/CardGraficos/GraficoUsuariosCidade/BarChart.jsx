import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import "./styles.css";

Chart.register(...registerables);

const GraficoUsuariosCidade = ({ props }) => {

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
      <Bar
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
            {
              label: "Meta",
              data: [6, 4, 5],
              backgroundColor: "Orange",
              borderColor: "red",
            },
          ],
        }}
        options={{
          indexAxis: 'x',
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
export default GraficoUsuariosCidade;
