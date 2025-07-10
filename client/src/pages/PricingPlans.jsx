import React from 'react';

const PricingPlans = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">Planes Personalizados</h2>
          <p className="text-gray-600 mt-2">Elige el plan que mejor se adapte a tus necesidades y objetivos. Todos incluyen seguimiento personalizado para garantizar tu éxito.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Pack Básico */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-teal-200 py-4 text-center text-white">
              <h3 className="text-xl font-semibold text-teal-800">Pack Básico</h3>
            </div>
            <div className="p-6">
              <div className="text-center mb-4">
                <span className="text-4xl font-bold text-gray-800">74€</span>
                <span className="text-gray-600">/por mes</span>
              </div>
              <ul className="list-none space-y-2 text-gray-700">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Plan nutricional adaptado a tus objetivos
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Personalización según preferencias alimentarias
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Seguimiento semanal durante 1 mes
                </li>
              </ul>
              <div className="mt-6 text-center">
                <button className="bg-teal-500 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded">
                  Elegir este plan
                </button>
              </div>
            </div>
          </div>

          {/* Pack Intermedio */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-yellow-200 py-4 text-center text-white">
              <h3 className="text-xl font-semibold text-yellow-800">Pack Intermedio</h3>
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full absolute top-2 right-2">Popular</span>
            </div>
            <div className="p-6">
              <div className="text-center mb-4">
                <span className="text-4xl font-bold text-gray-800">111€</span>
                <span className="text-gray-600">/por mes</span>
              </div>
              <ul className="list-none space-y-2 text-gray-700">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Todo lo del <b>Pack Básico</b>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Entrenamiento personalizado
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Lista de la compra semanal
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Acceso a software de dietas
                </li>
              </ul>
              <div className="mt-6 text-center">
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-semibold py-2 px-4 rounded">
                  Elegir este plan
                </button>
              </div>
            </div>
          </div>

          {/* Pack Premium */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gray-800 py-4 text-center text-white">
              <h3 className="text-xl font-semibold text-white">Pack Premium</h3>
            </div>
            <div className="p-6">
              <div className="text-center mb-4">
                <span className="text-4xl font-bold text-gray-800">189€</span>
                <span className="text-gray-600">/por mes</span>
              </div>
              <ul className="list-none space-y-2 text-gray-700">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Todo lo del Pack Intermedio
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Preparación batch cooking para 3 días
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Acompañamiento de compra
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  Entreno individualizado
                </li>
              </ul>
              <div className="mt-6 text-center">
                <button className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded">
                  Elegir este plan
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PricingPlans;