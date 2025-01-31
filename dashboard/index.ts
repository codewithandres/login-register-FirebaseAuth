import '../src/css/root.css';
import '../src/css/dashboard.css';

// importacion de funciones de UI
import '../src/UI/sidebarLink';
import '../src/UI/darkMode';
import showSlidebar from '../src/UI/sidebarActtion';

const SelectorSidebar = {
    toggleId: 'header-toggle',
    sidebarId: 'sidebar',
    mainId: 'main',
    headerId: 'header'
}

showSlidebar(SelectorSidebar)

