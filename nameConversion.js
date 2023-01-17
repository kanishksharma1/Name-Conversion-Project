/* */

//PASCAL CASE

document.body.querySelector(".naming_conversion #convert-btn").addEventListener("click", function name ( ) {
    document.body.querySelector(".naming_conversion .cases_div .case_div #pascal-case").innerText = document.body.querySelector(".naming_conversion #text").value.split(' ').map((word)=>word[0].toUpperCase().concat(word.slice(1))).join('').replace(/ /g , "")
})

// CAMEL CASE

document.body.querySelector(".naming_conversion #convert-btn").addEventListener("click", function name( ) {
    document.body.querySelector(".naming_conversion .cases_div .case_div #camel-case").innerText = document.body.querySelector(".naming_conversion #text").value.split(' ').map((word)=>word[0].toUpperCase().concat(word.slice(1))).join('').replace(/ /g , "").split(' ').map((word)=>word[0].toLowerCase().concat(word.slice(1))).join('').replace(/ /g , "") 
 })


// SNAKE CASE

document.body.querySelector(".naming_conversion #convert-btn").addEventListener("click", function name ( ) {
    document.body.querySelector(".naming_conversion .cases_div .case_div #snake-case").innerText = document.body.querySelector(".naming_conversion #text").value.replace(/ /g , "_").toLowerCase();
})

// SCREAMING SNAKE CASE

document.body.querySelector(".naming_conversion #convert-btn").addEventListener("click", function name ( ) {
    document.body.querySelector(".naming_conversion .cases_div .case_div #screaming-snake-case").innerText = document.body.querySelector(".naming_conversion #text").value.replace(/ /g , "_").toUpperCase();
})

// KEBAB CASE

document.body.querySelector(".naming_conversion #convert-btn").addEventListener("click", function name ( ) {
    document.body.querySelector(".naming_conversion .cases_div .case_div #kebab-case").innerText = document.body.querySelector(".naming_conversion #text").value.replace(/ /g , "-").toLowerCase();
})
 
document.body.querySelector(".naming_conversion #convert-btn").addEventListener("click", function name ( ) {
    document.body.querySelector(".naming_conversion .cases_div .case_div #screaming-kebab-case").innerText = document.body.querySelector(".naming_conversion #text").value.replace(/ /g , "-").toUpperCase();
})
 