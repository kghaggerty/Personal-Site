const displayContact = require("./contact/contactDisplay")
const displayResume = require("./resume/resumeDisplay")
const showHome = require("./home/homeDisplay")
const showResumeFunction = require("./resume/resumeEventListener")

showResumeFunction(displayResume);
displayContact();
displayResume();