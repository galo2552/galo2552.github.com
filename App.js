import React, { useState } from 'react';
import Card from './components/cards';
import Form from './components/form';
import './App.css';

function App() {
    const [iaList, setIaList] = useState([
        {
            name: "ChatGPT",
            image: "./imgs/chatgpt.jpg",
            description: "La herramienta 'clásica', mucha variedad de utilidades sobre programación, resumen, lee archivos. Pero sin ninguna especialización.",
            label: "Free",
            link: "https://chat.openai.com/"
        },
        {
            name: "Claude",
            image: "./imgs/claude.jpeg",
            description: "Herramienta ideal para la programación, le puedes compartir tu código y te ayudará.",
            label: "Freemium",
            link: "https://www.anthropic.com/index/claude"
        }
    ]);

    const addIA = (newIA) => {
        setIaList([...iaList, newIA]);  // Agrega la nueva IA a la lista existente
    };

    return (
        <div className="App">
            <h1>Aquí te presentaremos todas las IA's a tu disposición</h1>
            <div className="ia-s">
                {iaList.map((ia, index) => (
                    <Card 
                        key={index} 
                        name={ia.name} 
                        image={ia.image} 
                        description={ia.description}
                        label={ia.label}
                        link={ia.link}
                    />
                ))}
            </div>

            <h2>¡Sugiere una nueva IA!</h2>
            <Form addIA={addIA} />
        </div>
    );
}

export default App;


