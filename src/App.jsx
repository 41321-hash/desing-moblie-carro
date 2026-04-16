import { useState } from 'react'
import './App.css'

// A função começa aqui
export default function App() {
  return (
    <>
      <main>
        <div className="fundo-gradiente">
          <h1>Carros</h1>
          {/* Resto do seu conteúdo */}
        </div>
        <div className="seleção de carros" >
          <div className="selecao-carros">
  <img 
    src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800" 
    alt="Carro Esportivo" 
    className="imagem-carro"
  />
  <h3>Porsche 911</h3>
  <p>O clássico dos sonhos.</p>
</div>
        </div>
      </main>
    </>
  )
}