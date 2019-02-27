import getInterests from "./interestData";
import printToDom from "./printToDOM";
import printingNewInterests from "./printingNewInterests"
const printInterests = () => {
    getInterests.getAllInterests()
        .then(interestsArray => {
            const newInterest = printingNewInterests(interestsArray)
            printToDom(newInterest, "#interestsSection")
        })
}

export default printInterests