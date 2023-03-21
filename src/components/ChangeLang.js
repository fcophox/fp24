import React from 'react'
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

function ChangeLang () {
    const { t , i18n } = useTranslation();
    return (
        <div>
            <div className="row">

                <p>cambio de lenguaje</p>

            </div>                  
        </div>
    )
}
export default ChangeLang