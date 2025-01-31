
interface showSlidebarPro {
    toggleId: string;
    sidebarId: string;
    mainId: string;
    headerId: string
}


const showSlidebar = ({ toggleId, sidebarId, mainId, headerId}: showSlidebarPro) => {

    const toggle = document.getElementById(toggleId);
    const sidebar = document.getElementById(sidebarId);
    const main = document.getElementById(mainId);
    const header = document.getElementById(headerId)


    if (!toggle && !sidebar && !main && !header) return;

    toggle?.addEventListener('click', () => {

        console.log('click')
        sidebar?.classList.toggle('show-sidebar');

        main?.classList.toggle('left-pd'); 
        header?.classList.toggle('left-pd')
    })
}

export default showSlidebar;


