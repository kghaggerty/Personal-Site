const setVisibility = require("../setvisibility")
//Add event listener to the nav bar for Resume

//Get button from HTML

let showResumeFunction = function () {
    //add event listener to resume nav bar button
    const resumeButton = $(".resumepage")
    resumeButton[0].addEventListener("click", (event) => {
        const resumeShow = $(".resume")
        //set visibility of resume information to show
        setVisibility(resumeShow, "show")
    })
}
module.exports = showResumeFunction