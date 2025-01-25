// importacion de estilos
import 'animate.css'
import '@/css/root.css';
import '@/css/dashboard.css';
import '@/css/index.css';

// importacion de componentes
import '@/formulario'
import '@/formulario-singUp'

// importacion de funciones de UI
import { showSlidebar} from '@/UI/sidebarActtion';

const SelectorSidebar = { 
    toggleId: 'header__togle',
    sidebarId: 'sidebar',
    mainId: 'main'
}

showSlidebar(SelectorSidebar)