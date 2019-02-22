
const getInterestsinfo = {
    getInterests: () => {
        return fetch("http://localhost:8088/interests")
            .then(res => res.json())
    },
    createInterest: (interestObj) => {
        return fetch("http://localhost:8088/interests", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(interestObj)
        })
            .then(res => res.json())
    }
}

export default getInterestsinfo