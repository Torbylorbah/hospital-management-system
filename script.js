let params = window.location.search

const openNext = () => {
    window.open(`./login/index.html${params}`, '_self')
}