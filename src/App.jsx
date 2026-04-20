import './App.css'

function App() {

  const listaCarros = [
    { id: 1, nome: "Porsche 911", velocidade: 330, img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400" },
    { id: 2, nome: "Bugatti Chiron", velocidade: 490, img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=500" },
    { id: 3, nome: "Ferrari F8", velocidade: 340, img: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=400" },
    { id: 4, nome: "Fusca Turbo", velocidade: 140, img: "https://images.unsplash.com/photo-1541443131876-44b03de101c5?w=400" }
  ];

  const carrosOrdenados = [...listaCarros].sort((a, b) => b.velocidade - a.velocidade);

  return (
    <main>
      <div className="fundo-gradiente">
        <h1>Carros</h1>
        <p data-text="Descubra os carros mais rápidos do mundo">Descubra os carros mais rápidos do mundo</p>
        
        <div className="container-vitrine">
          {carrosOrdenados.map((carro) => (
            <div key={carro.id} className="selecao-carros">
              <img src={carro.img} alt={carro.nome} className="imagem-carro" />
              <h3>{carro.nome}</h3>
              <p className="velocidade-tag" data-text={carro.velocidade + ' km/h'}>{carro.velocidade} km/h</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default App