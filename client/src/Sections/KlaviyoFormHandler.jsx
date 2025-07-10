import React, { useEffect, useContext } from 'react';
import { GlobalContext } from '../components/GlobalContext';
import { useNavigate } from 'react-router-dom';


const KlaviyoFormHandler = () => {
    const { setEmail } = useContext(GlobalContext);
    const navigate = useNavigate(); // Hook para redirigir
    useEffect(() => {
        const formContainer = document.querySelector('.klaviyo-form-TxCVkR');
        const observer = new MutationObserver((mutationsList) => {
            mutationsList.forEach((mutation) => {
                if (mutation.type === 'childList') {
                    const form = formContainer?.querySelector('form');
                    if (form) {
                        const inputs = form.querySelectorAll('input');
                        inputs.forEach((input) => {
                            input.addEventListener('blur', (e) => {
                                const key = e.target.name || e.target.autocomplete || 'Unnamed Input';
                                const value = e.target.value;

                                if (key === 'email') {
                                    setEmail(value); // Guarda el email en el estado global
                                }

                                console.log(`${key}: ${value}`);
                            });
                            const button = form.querySelector('button');
                            if (button) {
                                button.addEventListener('click', (e) => {
                                    e.preventDefault(); // Evita el comportamiento predeterminado si es necesario
                                    // Redirige a la página /master
                                    navigate('/master');
                                });
                            }
                        });
                    }
                }
            });
        });

        if (formContainer) {
            observer.observe(formContainer, { childList: true, subtree: true });
        }

        return () => {
            observer.disconnect();
        };
    }, [setEmail]);

    return (
        <div className="klaviyo-form-TxCVkR mt-6 flex flex-col gap-4">
            {/* El formulario dinámico de Klaviyo se cargará aquí */}
        </div>
    );
};

export default KlaviyoFormHandler;