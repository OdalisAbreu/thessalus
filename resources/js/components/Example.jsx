import React from 'react';
import ReactDOM from 'react-dom/client';

function Example() {
    return (
        <div className="bg-blue-500 text-white p-6">
            <h1 className="text-3xl font-bold">Bienvenido a Thessalus</h1>
            <p className="mt-4">Esto es un componente de React con Tailwind CSS.</p>
        </div>
    );
}

export default Example;

if (document.getElementById('root')) {
    const Index = ReactDOM.createRoot(document.getElementById("root"));

    Index.render(
        <React.StrictMode>
            <Example/>
        </React.StrictMode>
    )
}
