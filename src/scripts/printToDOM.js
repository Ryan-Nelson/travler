const printToDom = (what, where) => {
    document.querySelector(where).innerHTML = what
}

export default printToDom