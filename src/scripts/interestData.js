const getInterestsinfo = {
    getAllInterests: () => {
        return fetch("http://localhost:8088/interests?_expand=place")
            .then(res => res.json())
    },
    createInterest: (newInterest) => {
        return fetch("http://localhost:8088/interests", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newInterest)
        })
            .then(res => res.json())
    },
    createNewInterest: (...interest) => {
        return {
            placeId: interest[0],
            name: interest[1],
            description: interest[2]
        }
    },
    getInterest: (id) => {
        return fetch(`http://localhost:8088/interests/${id}`)
            .then(res => res.json())
    },
    editInterest: (id, interest) => {
        return fetch(`http://localhost:8088/interests/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(interest)
        })
            .then(res => res.json())
    },
    deleteInterest: (id) => {
        return fetch(`http://localhost:8088/interests/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
    }
}
export default getInterestsinfo