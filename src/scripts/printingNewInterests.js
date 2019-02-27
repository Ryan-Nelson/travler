const printingNewInterests = (newInterest) => {
    let newstring = ""
    newInterest.forEach((interest) => {
        newstring += `
        <div id="interestCard${interest.id}">
            <h3>${interest.name}</h3>
            <div>${interest.description}</div>
            <div>${interest.place}</div>
            <div>
            <button id="editBtn--${interest.id}">Edit</button>
            <button id="deleteBtn--${interest.id}">Delete</button>
            </div>
        </div>
        `
    });
    return newstring
}

export default printingNewInterests