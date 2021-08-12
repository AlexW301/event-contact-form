// Modal 

var modal = document.querySelector('.modal')
var submitBtn = document.querySelector('.submit-button')
var closeBtn = document.querySelector('.close-btn')

// Hide Modal

closeBtn.onclick = function () {
    modal.style.display = "none";
    footerSection.style.display = "none"

    stepOne.style.backgroundColor = "transparent"
    stepTwo.style.backgroundColor = "transparent"
    stepThree.style.backgroundColor = "transparent"

    finalScreen.style.display = "none"
    firstScreen.style.display = "flex"

    responses = []

    document.querySelector('.name-input').value = ""
    document.querySelector('.email-input').value = ""
    document.querySelector('.phone-input').value = ""
    document.querySelector('.question-input').value = ""

}


//


// SUBMIT Form Fields

//Get Question Repsonses
let responses = []



submitBtn.onclick = function () {
    //Get Values
    var fullname = document.querySelector('.name-input').value
    var email = document.querySelector('.email-input').value
    var number = document.querySelector('.phone-input').value
    var question = document.querySelector('.question-input').value
    //Check Values
    if (fullname.indexOf(' ') !== -1 && email.indexOf('@') !== -1) {
        //Split full name
        let nameArr = fullname.split(' ')
        let firstName = nameArr[0]
        let lastName = nameArr[1]
        //Get Answers
        let answerOne = responses[0]
        let answerTwo = responses[1]
        //push to firebase
        firebase.firestore().collection("event-forms").add({
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: number,
            question: question,
            responseOne: answerOne,
            responseTwo: answerTwo
        }).then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            // Show success modal on completion
            modal.style.display = "flex";
            stepThree.style.backgroundColor = "#c92a2a"
        }).catch((error) => {
            console.log("Error adding document: ", error);
        })
    } if (fullname.indexOf(' ') === -1) {
        // IF NAME IS NOT FULL
        document.querySelector('.name-input').style.border = "1px solid red"
        document.querySelector(".enter-name").style.display = "block"
    } if (email.indexOf('@') === -1) {
        // IF EMAIL IS NOT FULL
        document.querySelector('.email-input').style.border = "1px solid red"
        document.querySelector(".enter-email").style.display = "block"
    }

}

document.querySelector('.name-input').onclick = function () {
    document.querySelector('.name-input').style.border = "none"
    document.querySelector(".enter-name").style.display = "none"
}

document.querySelector('.email-input').onclick = function () {
    document.querySelector('.email-input').style.border = "none"
    document.querySelector(".enter-email").style.display = "none"
}

//   Navigation

let firstScreen = document.querySelector('.purchase-or-refi')
let preApprovedScreen = document.querySelector('.pre-approved')
let refiScreen = document.querySelector('.refi')
let finalScreen = document.querySelector('.final-form')

let purchaseBtn = document.querySelector('.purchase-btn')
let refiBtn = document.querySelector('.refi-btn')

let yesBtn = document.querySelector('.yes-approved')
let noBtn = document.querySelector('.no-approved')

let cashoutBtn = document.querySelector('.cashout-btn')
let rateBtn = document.querySelector('.rate-btn')

let footerSection = document.querySelector('.footer-section')

// Progress Bar
let stepOne = document.querySelector('.step-one')
let stepTwo = document.querySelector('.step-two')
let stepThree = document.querySelector('.step-three')

//First Page
purchaseBtn.onclick = function () {
    responses.push('Looking to: Purchase')

    firstScreen.style.display = "none"
    preApprovedScreen.style.display = "flex"
    stepOne.style.backgroundColor = "#c92a2a"

}

refiBtn.onclick = function () {
    responses.push('Looking to: Refinance')

    firstScreen.style.display = "none"
    refiScreen.style.display = "flex"
    stepOne.style.backgroundColor = "#c92a2a"
}

//Second Page
yesBtn.onclick = function () {
    responses.push('Pre-Approved: Yes')

    preApprovedScreen.style.display = "none"
    finalScreen.style.display = "block"
    stepTwo.style.backgroundColor = "#c92a2a"
    footerSection.style.display = "block"
}

noBtn.onclick = function () {
    responses.push('Pre-Approved: No')

    preApprovedScreen.style.display = "none"
    finalScreen.style.display = "block"
    stepTwo.style.backgroundColor = "#c92a2a"
    footerSection.style.display = "block"
}

// Thirdpage
cashoutBtn.onclick = function () {
    responses.push('Refi Type: Cash Out')

    refiScreen.style.display = "none"
    finalScreen.style.display = "block"
    stepTwo.style.backgroundColor = "#c92a2a"
    footerSection.style.display = "block"
}

rateBtn.onclick = function () {
    responses.push('Refi Type: Rate & Term')

    refiScreen.style.display = "none"
    finalScreen.style.display = "block"
    stepTwo.style.backgroundColor = "#c92a2a"
    footerSection.style.display = "block"
}

