//<(^ -^)>
let setVisibility = require("../setVisibility")

//Hide everything except home page
let showHome = function () {
    const hideRest = $(".hidden")
    setVisibility(hideRest,"hidden")
}

module.exports = showHome