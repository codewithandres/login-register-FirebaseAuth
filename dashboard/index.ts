import '../src/css/root.css';
import '../src/css/dashboard.css';

// importacion de funciones de UI
import '../src/UI/sidebarLink';
import '../src/UI/darkMode';
import showSlidebar from '../src/UI/sidebarActtion';

const SelectorSidebar = {
    toggleId: 'header__togle',
    sidebarId: 'sidebar',
    mainId: 'main'
}

showSlidebar(SelectorSidebar)

