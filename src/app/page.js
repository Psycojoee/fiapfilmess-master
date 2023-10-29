"use client";
import Image from "next/image";
import React, { useState, useEffect } from 'react';
import loginimage from "@/images/sanofi.png";
import './globals.css';

function redirectTo(route) {
  window.location.href = route;
}

async function carregarDados() {
}

export default function Home() {
  const [currentPage, setCurrentPage] = useState('');
  const [score, setScore] = useState(0);
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    document.querySelectorAll('.risk-checkbox').forEach(checkbox => {
      checkbox.addEventListener('change', function() {
        if (this.checked) {
          setScore(prevScore => prevScore + 1);
        } else {
          setScore(prevScore => prevScore - 1);
        }
      });
    });
  }, []);

  const handleLogout = () => {
    redirectTo('/login');
  };

  return (
    <div className="bg-slate-300 h-screen w-screen flex">
      <button className="hamburger md:hidden" onClick={() => setMenuVisible(!menuVisible)}>
          ☰
      </button>
      <div className={`sidebar ${menuVisible ? 'visible' : ''} md:block fixed top-0 left-0 h-full max-h-screen bg-red shadow-lg ${menuVisible ? 'w-1/3' : 'w-1/5'} md:w-1/5`}>
          <div className="p-4">
              <div className="mb-4">
                  <aside className="hidden md:flex w-5/5 p-8">
                      <Image className="h-full w-full object-cover md:w-auto md:h-auto" src={loginimage} />
                  </aside>
                  <button className={`w-full p-3 bg-slate-700 text-white rounded mb-3`} onClick={() => redirectTo('login/page2')}>
                      Profilaxia Tev Em Pacientes Cirúrgicos
                  </button>
                  <button className={`w-full p-3 bg-slate-700 text-white rounded mb-3`}>
                      Profilaxia de Tev Em Pacientes Clínicos
                  </button>
                  <button className={`w-full p-3 bg-slate-700 text-white rounded mb-3`}>
                      Avaliação de Risco Tev Em Pacientes Obstétricas
                  </button>
                  <button className={`w-full p-3 bg-slate-700 text-white rounded mb-3`}>
                      Pacientes Especiais
                  </button>
                  <button className={`w-full p-3 bg-slate-700 text-white rounded mb-3`}>
                      Tratamento do Tev
                  </button>
                  <button className={`w-full p-3 bg-slate-700 text-white rounded mb-3`}>
                      Oncologia
                  </button>
                  <button className={`w-full p-3 bg-slate-700 text-white rounded mb-3`}>
                      Cardiologia
                  </button>
                  <button className={`w-full p-3 bg-slate-700 text-white rounded mb-3`}>
                      Recursos
                  </button>
                  <button className={`w-full p-4 text-center text-white bg-red-500 rounded-lg`} onClick={handleLogout}>
                      Sair
                  </button>
              </div>
          </div>
      </div>
      <div className="text-white flex flex-col w-full pl-8 justify-between">
      <h1 className="text-4xl font-bold mb-4 text-center w-full mt-4 text-black p-2" style={{ paddingTop: '40px' }}>Profilaxia Tev Em Pacientes Cirúrgicos</h1>
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '100%', alignItems: 'flex-start', flex: 1, justifyContent: 'center' }}>
            <label className={`checkbox-label sm:text-base lg:text-xl mb-2 text-black font-bold ${menuVisible ? 'md:w-full' : ''}`}>
                <input type="checkbox" className="risk-checkbox " id="risk1" style={{width: '30px', height: '30px', marginRight: '30px'}} /> Idade de 41 anos a 60 anos
          </label>
          <label className={`checkbox-label sm:text-base lg:text-xl mb-2 text-black font-bold ${menuVisible ? 'md:w-full' : ''}`}>
            <input type="checkbox" className="risk-checkbox" id="risk2" style={{ width: '30px', height: '30px', marginRight: '30px' }} /> Cirurgia de grande porte (menos de 1 mês)
          </label>
          <label className={`checkbox-label sm:text-base lg:text-xl mb-2 text-black font-bold ${menuVisible ? 'md:w-full' : ''}`}>
            <input type="checkbox" className="risk-checkbox" id="risk3" style={{ width: '30px', height: '30px', marginRight: '30px' }}/> Obesidade (IMC maior que 25)
          </label>
          <label className={`checkbox-label sm:text-base lg:text-xl mb-2 text-black font-bold ${menuVisible ? 'md:w-full' : ''}`}>
            <input type="checkbox" className="risk-checkbox" id="risk4" style={{ width: '30px', height: '30px', marginRight: '30px' }}/> Varizes de membros interiores
          </label>
          <label className={`checkbox-label sm:text-base lg:text-xl mb-2 text-black font-bold ${menuVisible ? 'md:w-full' : ''}`}>
            <input type="checkbox" className="risk-checkbox" id="risk4" style={{ width: '30px', height: '30px', marginRight: '30px' }}/> História de doença intestinal inflamatória
          </label>
          <label className={`checkbox-label sm:text-base lg:text-xl mb-2 text-black font-bold ${menuVisible ? 'md:w-full' : ''}`}>
            <input type="checkbox" className="risk-checkbox" id="risk4" style={{ width: '30px', height: '30px', marginRight: '30px' }}/> Sepse (Menos de 1 mês)
          </label>
          <label className={`checkbox-label sm:text-base lg:text-xl mb-2 text-black font-bold ${menuVisible ? 'md:w-full' : ''}`}>
            <input type="checkbox" className="risk-checkbox" id="risk4" style={{ width: '30px', height: '30px', marginRight: '30px' }}/> Doença pulmonar grave (Menos de 1 mês) incluindo pneumonia
          </label>
          <label className={`checkbox-label sm:text-base lg:text-xl mb-2 text-black font-bold ${menuVisible ? 'md:w-full' : ''}`}>
            <input type="checkbox" className="risk-checkbox" id="risk4" style={{ width: '30px', height: '30px', marginRight: '30px' }}/> Edema Recorrente de membros inferiores
          </label>
          <label className={`checkbox-label sm:text-base lg:text-xl mb-2 text-black font-bold ${menuVisible ? 'md:w-full' : ''}`}>
            <input type="checkbox" className="risk-checkbox" id="risk4" style={{ width: '30px', height: '30px', marginRight: '30px' }}/> Infarto agudo do miocárdio
          </label>
          <label className={`checkbox-label sm:text-base lg:text-xl mb-2 text-black font-bold ${menuVisible ? 'md:w-full' : ''}`}>
            <input type="checkbox" className="risk-checkbox" id="risk4" style={{ width: '30px', height: '30px', marginRight: '30px' }}/> Insuficiência cardíaca congestiva
          </label>
          <label className={`checkbox-label sm:text-base lg:text-xl mb-2 text-black font-bold ${menuVisible ? 'md:w-full' : ''}`}>
            <input type="checkbox" className="risk-checkbox" id="risk4" style={{ width: '30px', height: '30px', marginRight: '30px' }}/> Doença pulmonar obstrutiva crônica
          </label>
            <div style={{ position: 'fixed', bottom: '10px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', zIndex: 1000 }}>
              <h2 className="titulo text-black text-4xl font-bold">Pontuação</h2>
              <div className="pontuação">
                  <span id="scoreDisplay" className="text-4xl text-black font-bold">{score}</span>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}
