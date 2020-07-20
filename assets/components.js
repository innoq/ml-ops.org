if (this.customElements) {

    class SidenavLinks extends HTMLElement {
        connectedCallback () {
            const toc = document.querySelectorAll('h2')
            for (const chapter of toc) {
                const link = document.createElement('a')
                link.classList.add('sidenav__link')
                link.href = '#' + chapter.id
                link.innerHTML = chapter.innerHTML
                console.log(link)
                this.appendChild(link)
            }
        }
    }

    customElements.define('sidenav-links', SidenavLinks)

}
