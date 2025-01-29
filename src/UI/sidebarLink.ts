


const sidebarLink = document.querySelectorAll('.siderbar__list a');

const linkColor = (event: MouseEvent) => {
    const target = event.target as HTMLElement;

    sidebarLink.forEach(i => i.classList.remove('active__link'));

    target.closest('.sidebar__link')?.classList.add('active__link')

}

sidebarLink.forEach(l => l.addEventListener('click', linkColor as EventListener))

