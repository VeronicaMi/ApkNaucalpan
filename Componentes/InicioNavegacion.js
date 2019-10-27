import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Slider from './Slider.js';
import RegistroUsuario from './RegistroUsuario.js';
import DrawerNav from '../Navegadores/DrawerNav.js';
import TerminosCondiciones from '../Navegadores/Navegacion/TerminosCondiciones.js';
import AvisoPrivacidad from '../Navegadores/Navegacion/AvisoPrivacidad.js';

const InicioNavegacion = createStackNavigator({
    Slider: Slider,
    RegistroUsuario: RegistroUsuario,
    TerminosCondiciones: TerminosCondiciones,
    AvisoPrivacidad: AvisoPrivacidad,
    DrawerNav: DrawerNav,

});

const InicioNav = createAppContainer(InicioNavegacion);

export default InicioNav;
