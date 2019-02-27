const interestForm = {
    form: `
        <div>
            <h3>Create New Interest</h3>
            <fieldset>
                <lable for="Name">Name</lable>
                <input type="text" id="Name" name="Name" require>
                <label for="Description">Description</label>
                <textarea id="Description" name="Description" require></textarea>
                <select id="Location" name="Location" require>
                <option id="location--0">Choose</option>
                <option id="location--1">Italy</option>
                <option id="location--2">Switzerland</option>
                <option id="location--3">France</option>
                </select>
                </fieldset>
            <button id="saveBtn">Save</button>
        </div>
    `,
    createBtn: `
    <button id="createBtn">Create New Interest</button>
    `
}

export default interestForm