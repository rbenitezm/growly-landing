import React, { useEffect, useContext } from 'react';
import { GlobalContext } from '../components/GlobalContext';
import { useNavigate } from 'react-router-dom';


const KlaviyoFormBuyHandler = () => {

    return (
        <div className="klaviyo-form-TUiu5w mt-6 flex flex-col gap-4"
        style={{
            position: "absolute",
            left: "-9999px",
            width: "1px",
            height: "1px",
            overflow: "hidden",
        }}
        aria-hidden="true"
        tabIndex={-1}>
            {/* El formulario dinámico de Klaviyo se cargará aquí */}
        </div>
    );
};

export default KlaviyoFormBuyHandler;