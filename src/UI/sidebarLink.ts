


const sidebarLink = document.querySelectorAll('.sidebar__list a');

const linkColor = (event: MouseEvent) => {
    const target = event.target as HTMLElement;

    sidebarLink.forEach(i => i.classList.remove('active-link'));

    target.closest('.sidebar__link')?.classList.add('active-link')

}

sidebarLink.forEach(l => l.addEventListener('click', linkColor as EventListener))

