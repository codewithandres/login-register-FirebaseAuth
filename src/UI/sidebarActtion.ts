
interface showSlidebarPro {
    toggleId: string;
    sidebarId: string;
    mainId: string;
}


const showSlidebar = ({ toggleId, sidebarId, mainId }: showSlidebarPro) => {

    const toggle = document.getElementById(toggleId);
    const sidebar = document.getElementById(sidebarId);
    const main = document.getElementById(mainId);


    if (!toggle && !sidebar && !main) return;

    toggle?.addEventListener('click', () => {

        console.log('click')
        sidebar?.classList.toggle('show-sidebar')

        main?.classList.toggle('main-pd')
    })
}

export default showSlidebar;


