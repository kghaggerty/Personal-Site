//Set visibility of page.
const setVisibility = function (targetEl, action){
    if (action === "hide"){
        targetEl[0].classList.add("hidden")
    }else if (action === "show"){
        targetEl[0].classList.remove("hidden")
    }
}
module.exports = setVisibility
