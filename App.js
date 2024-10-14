import React, { useEffect, useState } from 'react';
import Card from './components/cards';
import Form from './components/form';
import './App.css';

function App() {
    const [iaList, setIaList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/ia')
            .then((response) => response.json())
            .then((data) => setIaList(data))
            .catch((error) => console.error('Error:', error));
    }, []);

    return (
        <div className="App">
            <h2>¡Sugiere una nueva IA!</h2>
            <Form />
        </div>
    );
}

export default App;



