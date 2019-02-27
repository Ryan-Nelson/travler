import interestForm from "./interestForm";
import getInterestsinfo from "./interestData";
import printInterests from "./interests";

const interestEvents = {
    SaveEvent: () => {
        const container = document.querySelector("#formContainer")
        container.addEventListener("click", (event) => {
            if (event.target.id === "createBtn") {
                container.innerHTML = interestForm.form
            } else if (event.target.textContent === "Save") {
                const name = document.querySelector("#Name").value
                const description = document.querySelector("#Description").value
                const location = document.querySelector("#Location").value
                const newInterest = getInterestsinfo.createNewInterest(location, name, description)
                if (name === "" || description === "" || location === "") {
                    alert("form not filled")
                } else {
                    getInterestsinfo.createInterest(newInterest)
                        .then(() => {
                            container.innerHTML = interestForm.createBtn
                            printInterests()
                        })
                }
            } else if (event.target.textContent === "Update") {
                const name = document.querySelector("#Name").value
                const description = document.querySelector("#Description").value
                const location = document.querySelector("#Location").value
                const newInterest = getInterestsinfo.createNewInterest(location, name, description)
                if (name === "" || description === "" || location === "") {
                    alert("form not filled")
                } else {
                    getInterestsinfo.editInterest(newInterest)
                        .then(() => {
                            container.innerHTML = interestForm.button
                            printInterests()
                        })
                }
            }
        })
    },
    editEvent: () => {
        document.querySelector("#interestsSection").addEventListener("click", (event) => {
            if (event.target.id.startsWith("editBtn")) {
                document.querySelector("#formContainer").innerHTML = interestForm.form
                document.querySelector("#formContainer").scrollIntoView()
                document.querySelector("#saveBtn").textContent = "Update"
                const newEdit = event.target.id.split("--")[1]
                getInterestsinfo.getInterest(newEdit)
                    .then(interest => {
                        document.querySelector("#Name").value = interest.name
                        document.querySelector("#Description").value = interest.description
                        document.querySelector("#Location").value = interest.placeId
                    })
            }
        })
    },
    deleteEvent: () => {
        document.querySelector("#interestsSection").addEventListener("click", (event) => {
            if (event.target.id.startsWith("deleteBtn")) {
                const Delete = confirm("delete")
                if (Delete === true) {
                    const Delete = event.target.id.split("--")[1]
                    getInterestsinfo.deleteInterest(Delete)
                        .then(() => {
                            printInterests()
                        })
                }
            }
        })
    }
}
export default interestEvents