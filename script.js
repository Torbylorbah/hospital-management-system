let params = window.location.search

const openNext = () => {
    window.open(`./login/index.html${params}`, '_self')

}
const openMind = () => {
    window.open(`reg.html${params}`, '_self')

}