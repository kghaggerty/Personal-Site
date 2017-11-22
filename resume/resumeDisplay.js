let displayResume = function () {
    //Get id from HTML
    const resumeEl = $("#resume")
    //Make ajax call to get data from JSON file(later firebase)
    $.ajax({
        method: "GET",
        url: "./data/resume.json"
    }).then(function (resumeJsonFile){
        //getting into the JSON file to retrieve specific object values
        let resume = resumeJsonFile.resume
        //Use forEach to iterate through resume array
        resume.forEach(function(resumeItem) {
            resumeEl.append(`
            <div>${resumeItem.title}</div>
            <div>${resumeItem.dates}</div>
            <div>${resumeItem.company}</div>
            <div>${resumeItem.description}</div><br>
            `)
        })
    })
//create function to display data
}
//Exporting module
module.exports = displayResume