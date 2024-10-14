import React, { useState } from 'react';

function Form() {
    const [formData, setFormData] = useState({
        name: '',
        description: '', 
        label: '',
        link: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/ia', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                alert('IA agregada con éxito!');
                setFormData({
                    name: '',
                    description: 'Descripción por defecto', // Resetear a la descripción por defecto
                    label: '',
                    link: ''
                });
            } else {
                const errorData = await response.json();
                alert(`Error al agregar la IA: ${errorData.error || 'Error desconocido'}`);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error al conectar con el servidor');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Nombre de la IA"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <textarea
                name="description"
                placeholder="Descripción"
                value={formData.description}
                onChange={handleChange}
            />
            <input
                type="text"
                name="label"
                placeholder="Etiqueta (Free/Freemium/etc.)"
                value={formData.label}
                onChange={handleChange}
            />
            <input
                type="url"
                name="link"
                placeholder="Link"
                value={formData.link}
                onChange={handleChange}
            />
            <button type="submit">Agregar IA</button>
        </form>
    );
}

export default Form;



