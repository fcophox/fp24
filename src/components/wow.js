/* Importas el elemento */
import WOW from 'wowjs';
/*En el Ciclo de vida componentDidMount se inicia la librería */
componentDidMount() {
    new WOW.WOW({
        live: false
    }).init();
}