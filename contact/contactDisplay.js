//This page will display the contact data information
//Wrap in function to export
let displayContact = function () {
    //Get id from HTML
    const contactEl = $("#contact")
    //Make ajax call to get data from JSON file(later firebase)
    $.ajax({
        method: "GET",
        url: "./data/contact.json"
    }).then(function (contactJsonFile){
        //getting into the JSON file to retrieve specific object values
        let contact = contactJsonFile.contact[0]
        contactEl.html(`
            <div>${contact.name}</div>
            <div><a href="${contact.facebook_contact}">My Facebook Page</a></div>
            <div><a href="${contact.linked_in_contact}">My Linked In Page</a></div>
        `)

    })
//create function to display data
}
//Exporting module
module.exports = displayContact