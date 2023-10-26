"use client";
import Image from "next/image";
import React, { useState, useEffect } from 'react';
import loginimage from "@/images/sanofi.png";
import './globals.css';

function redirectTo(route) { // Função para redirecionar para outra página
  window.location.href = route;
}

async function carregarDados() {  // Coloque aqui a lógica para carregar os dados

}

export default function Home() {
  // Utilize o estado para armazenar a página atual
  const [currentPage, setCurrentPage] = useState(''); // Inicialize com uma página vazia
  const [score, setScore] = useState(0); // Adicione o estado para a pontuação
  const [menuVisible, setMenuVisible] = useState(false); // Estado para controlar a visibilidade do menu hambúrguer

  useEffect(() => { // Quando o componente é montado, vincule o evento 'change' aos checkboxes
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

  const handleLogout = () => { // Função para lidar com o logout
    redirectTo('/login');
  };

  return (
    <div className="bg-slate-300 h-screen w-screen flex">
      <button className="hamburger md:hidden" onClick={() => setMenuVisible(!menuVisible)}>
        ☰
      </button>
      <div className={`sidebar ${menuVisible ? 'visible' : ''} md:block fixed top-0 left-0 h-full max-h-screen bg-red shadow-lg`} style={{ width: '30%' }}>
        <div className="p-4">
          <div className="mb-4">
            <aside className="hidden md:flex w-5/5 p-8">
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
            <button className="w-full p-4 text-center text-white bg-red-500 rounded-lg" onClick={handleLogout}>
              Sair
            </button>
  
            <div className="fixed bottom-0 right-0 mb-4 mr-4 text-4xl">
              <h2 className="titulo text-black">Pontuação</h2>
              <div className="pontuação">
                <span id="scoreDisplay" className="text-4xl text-black">{score}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white flex flex-col w-full pl-8 pt-72">
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '100%', fontSize: '30px', color:'#000', alignItems: 'flex-start'}}>

          <label className="checkbox-label">
            <input type="checkbox" className="risk-checkbox " id="risk1" style={{width: '30px', height: '30px', marginRight: '30px'}} /> Idade de 41 anos a 60 anos
          </label>
          <label className="checkbox-label">
            <input type="checkbox" className="risk-checkbox" id="risk2" style={{ width: '30px', height: '30px', marginRight: '30px' }} /> Cicurgia de grande porte (menos de 1 mês)
          </label>
          <label className="checkbox-label">
            <input type="checkbox" className="risk-checkbox" id="risk3" style={{ width: '30px', height: '30px', marginRight: '30px' }}/> Obesidade (IMC maior que 25)
          </label>
          <label className="checkbox-label">
            <input type="checkbox" className="risk-checkbox" id="risk4" style={{ width: '30px', height: '30px', marginRight: '30px' }}/> Varizes de membros interíores
          </label>
          <label className="checkbox-label">
            <input type="checkbox" className="risk-checkbox" id="risk4" style={{ width: '30px', height: '30px', marginRight: '30px' }}/> História de doença intestinal inflamatória
          </label>
          <label className="checkbox-label">
            <input type="checkbox" className="risk-checkbox" id="risk4" style={{ width: '30px', height: '30px', marginRight: '30px' }}/> Sepse (Menos de 1 mês)
          </label>
          <label className="checkbox-label">
            <input type="checkbox" className="risk-checkbox" id="risk4" style={{ width: '30px', height: '30px', marginRight: '30px' }}/> Doença pulmonar grave (Menos de 1 mês) incluindo pneumonia
          </label>
          <label className="checkbox-label">
            <input type="checkbox" className="risk-checkbox" id="risk4" style={{ width: '30px', height: '30px', marginRight: '30px' }}/> Edema Recorrente de membros inferiores
          </label>
          <label className="checkbox-label">
            <input type="checkbox" className="risk-checkbox" id="risk4" style={{ width: '30px', height: '30px', marginRight: '30px' }}/> Infatdo agudo do miocárdio
          </label>
          <label className="checkbox-label">
            <input type="checkbox" className="risk-checkbox" id="risk4" style={{ width: '30px', height: '30px', marginRight: '30px' }}/> Insuficiência cardíaca congestiva
          </label>
          <label className="checkbox-label">
            <input type="checkbox" className="risk-checkbox" id="risk4" style={{ width: '30px', height: '30px', marginRight: '30px' }}/> Doença pulmonar obstrutiva crônica
          </label>
        </div>
      </div>
    </div>
  );
}