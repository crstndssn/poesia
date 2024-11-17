import Carta1 from './cartas/carta1'
import Carta2 from './cartas/carta2'
import Carta3 from './cartas/carta3'
import Carta4 from './cartas/carta4'
import Carta5 from './cartas/carta5'
import Carta6 from './cartas/carta6'
import Carta7 from './cartas/carta7'

// Componente principal que selecciona la carta
const Carta = ({ cartaSeleccionada }) => {
    switch (cartaSeleccionada) {
      case 1:
        return <Carta1 />;
      case 2:
        return <Carta2 />;
      case 3:
        return <Carta3 />;
      case 4:
        return <Carta4 />;
      case 5:
        return <Carta5 />;
      case 6:
        return <Carta6 />;
      case 7:
        return <Carta7 />;
      default:
        return <div>Selecciona una carta para ver su contenido</div>;
    }
  };
  
  export default Carta;