import Inicio from './inicio'
import Carta1 from './carta1'

// Componente principal que selecciona la carta
const Carta = ({ cartaSeleccionada }) => {
    switch (cartaSeleccionada) {
    case 0: 
        return <Inicio />
      case 1:
        return <Carta1 />;
      case 2:
        return <Carta1 />;
      case 3:
        return <Carta1 />;
      default:
        return <div>Selecciona una carta para ver su contenido</div>;
    }
  };
  
  export default Carta;