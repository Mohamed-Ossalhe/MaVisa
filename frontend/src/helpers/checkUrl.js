const checkUrl = (path) => {
    if(!window.location.pathname.includes(path)) {
        localStorage.removeItem('token')
    }
}

export default checkUrl