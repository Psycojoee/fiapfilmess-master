"use client";
import Image from "next/image";
import React, { useState, useEffect } from 'react';
import loginimage from "@/images/sanofi.png";
import './globals.css';


// Função para redirecionar para outra página
function redirectTo(route) {
  window.location.href = route;
}

async function carregarDados() {
  // Coloque aqui a lógica para carregar os dados
}

export default function Home() {
  // Utilize o estado para armazenar a página atual
  const [currentPage, setCurrentPage] = useState(''); // Inicialize com uma página vazia
  const [score, setScore] = useState(0); // Adicione o estado para a pontuação

  useEffect(() => {
    // Quando o componente é montado, vincule o evento 'change' aos checkboxes
    document.querySelectorAll('.risk-checkbox').forEach(checkbox => {
      checkbox.addEventListener('change', function() {
        if (this.checked) {
          setScore(score + 1);
        } else {
          setScore(score - 1);
        }
      });
    });
  },);

  // Função para lidar com o logout
  const handleLogout = () => {
    redirectTo('/login');
  };

  return (
    <div className="bg-slate-300 h-screen w-screen flex">
      <div className="fixed top-0 left-0 h-full w-64 max-h-screen bg-black shadow-lg">
        <div className="p-4">
          <div className="mb-4">
            <aside className="hidden md:flex p-4">
              <Image className="h-full w-full object-cover" src={loginimage} />
            </aside>
            <button className="w-full p-3 bg-slate-700 text-white rounded mb-3"
              onClick={() => setCurrentPage('@src/app/login/page.jsx')}>Profilaxia Tev Em Pacientes Cirúrgicos</button>
            <button className="w-full p-3 bg-slate-700 text-white rounded mb-3"
              onClick={() => setCurrentPage('@src/app/login/page.jsx')}>Profilaxia de Tev Em Pacientes Clínicos</button>
            <button className="w-full p-3 bg-slate-700 text-white rounded mb-3"
              onClick={() => setCurrentPage('@src/app/login/page.jsx')}>Avaliação de Risco Tev Em Pacientes Obstétricas</button>
            <button className="w-full p-3 bg-slate-700 text-white rounded mb-3"
              onClick={() => setCurrentPage('@src/app/login/page.jsx')}>Pacientes Especiais</button>
            <button className="w-full p-3 bg-slate-700 text-white rounded mb-3"
              onClick={() => setCurrentPage('@src/app/login/page.jsx')}>Tratamento do Tev</button>
            <button className="w-full p-3 bg-slate-700 text-white rounded mb-3"
              onClick={() => setCurrentPage('@src/app/login/page.jsx')}>Oncologia</button>
            <button className="w-full p-3 bg-slate-700 text-white rounded mb-3"
              onClick={() => setCurrentPage('@src/app/login/page.jsx')}>Cardiologia</button>
            <button className="w-full p-3 bg-slate-700 text-white rounded mb-3"
              onClick={() => setCurrentPage('@src/app/login/page.jsx')}>Recursos</button>
  
            <div className="fixed bottom-0 right-0 mb-4 mr-4 text-4xl">
              <h2 className="titulo text-black">Pontuação</h2>
              <div className="pontuação">
                <span id="scoreDisplay" className="text-4xl text-black">{score}</span>
              </div>
            </div>
            <button className="w-full p-4 text-center text-white bg-red-500 rounded-lg" onClick={handleLogout}>
              Sair
            </button>
          </div>
        </div>
      </div>
      <div className="text-white flex flex-col justify-center items-center w-full">
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '100%', fontSize: '30px', color:'#000'}}>
          <label className="checkbox-label">
            <input type="checkbox" className="risk-checkbox" id="risk1" style={{width: '30px', height: '30px', marginRight: '20px'}} /> Idade de 41 anos a 60 anos
          </label>
          <label className="checkbox-label">
            <input type="checkbox" className="risk-checkbox" id="risk2" style={{ width: '20px', height: '20px', marginRight: '20px' }} /> Cicurgia de grande porte (menos de 1 mês)
          </label>
          <label className="checkbox-label">
            <input type="checkbox" className="risk-checkbox" id="risk3" style={{ width: '20px', height: '20px', marginRight: '20px' }}/> Obesidade (IMC maior que 25)
          </label>
          <label className="checkbox-label">
            <input type="checkbox" className="risk-checkbox" id="risk4" style={{ width: '20px', height: '20px', marginRight: '20px' }}/> Varizes de membros interíores
          </label>
          <label className="checkbox-label">
            <input type="checkbox" className="risk-checkbox" id="risk4" style={{ width: '20px', height: '20px', marginRight: '20px' }}/> História de doença intestinal inflamatória
          </label>
          <label className="checkbox-label">
            <input type="checkbox" className="risk-checkbox" id="risk4" style={{ width: '20px', height: '20px', marginRight: '20px' }}/> Sepse (Menos de 1 mês)
          </label>
          <label className="checkbox-label">
            <input type="checkbox" className="risk-checkbox" id="risk4" style={{ width: '20px', height: '20px', marginRight: '20px' }}/> Doença pulmonar grave (Menos de 1 mês) incluindo pneumonia
          </label>
          <label className="checkbox-label">
            <input type="checkbox" className="risk-checkbox" id="risk4" style={{ width: '20px', height: '20px', marginRight: '20px' }}/> Edema Recorrente de membros inferiores
          </label>
          <label className="checkbox-label">
            <input type="checkbox" className="risk-checkbox" id="risk4" style={{ width: '20px', height: '20px', marginRight: '20px' }}/> Infatdo agudo do miocárdio
          </label>
          <label className="checkbox-label">
            <input type="checkbox" className="risk-checkbox" id="risk4" style={{ width: '20px', height: '20px', marginRight: '20px' }}/> Insuficiência cardíaca congestiva
          </label>
          <label className="checkbox-label">
            <input type="checkbox" className="risk-checkbox" id="risk4" style={{ width: '20px', height: '20px', marginRight: '20px' }}/> Doença pulmonar obstrutiva crônica
          </label>
        </div>
      </div>
    </div>
  );
}