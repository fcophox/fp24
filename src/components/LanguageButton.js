import React from 'react'
import { useTranslation } from "react-i18next";

function LanguagueButton() {
    const { t , i18n } = useTranslation();

    function changeToEnglish() {
        i18n.changeLanguage ("en");
    }
    function changeToSpanish() {
        i18n.changeLanguage ("es");
    }

    return (
        <div>
            <button onClick={changeToEnglish} className="lng">
                <img src="../assets/images/lng/eeuu.png" alt="ingles"/>
            </button>
            <button onClick={changeToSpanish} className="lng">
                <img src="../assets/images/lng/chile.png" alt="español"/>
            </button>
        </div>
        )
    }
    
    export default LanguagueButton