// Modal 

var modal = document.querySelector('.modal')
var submitBtn = document.querySelector('.submit-button')
var closeBtn = document.querySelector('.close-btn')

// Hide Modal

closeBtn.onclick = function() {
    modal.style.display = "none";
    footerSection.style.display = "none"

    stepOne.style.backgroundColor = "transparent"
    stepTwo.style.backgroundColor = "transparent"
    stepThree.style.backgroundColor = "transparent"

    finalScreen.style.display = "none"
    firstScreen.style.display = "flex"

    document.querySelector('.name-input').value = ""
    document.querySelector('.email-input').value = ""
    document.querySelector('.phone-input').value = ""
    document.querySelector('.question-input').value = ""

}


//


// SUBMIT Form Fields

submitBtn.onclick = function() {
    //Get Values
    var fullname = document.querySelector('.name-input').value
    var email = document.querySelector('.email-input').value
    var number = document.querySelector('.phone-input').value
    var question = document.querySelector('.question-input').value
    //Check Values
    if (fullname.indexOf(' ') !== -1 && email.indexOf('@') !== -1) {
        //split full name
        let nameArr = fullname.split(' ')
        let firstName = nameArr[0]
        let lastName = nameArr[1]
        //
        console.log(fullname)
        console.log(firstName)
        console.log(lastName)
        console.log(email)
        console.log(number)
        console.log(question)



        modal.style.display = "flex";
        stepThree.style.backgroundColor = "#c92a2a"
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

  document.querySelector('.name-input').onclick = function() {
      console.log('clicked')
      document.querySelector('.name-input').style.border = "none"
    document.querySelector(".enter-name").style.display = "none"
  }

  document.querySelector('.email-input').onclick = function() {
    console.log('clicked')
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
purchaseBtn.onclick = function() {
    console.log('clicked')
    firstScreen.style.display = "none"
    preApprovedScreen.style.display = "flex"
    stepOne.style.backgroundColor = "#c92a2a"

}

refiBtn.onclick = function() {
    firstScreen.style.display = "none"
    refiScreen.style.display = "flex"
    stepOne.style.backgroundColor = "#c92a2a"
}

//Second Page
yesBtn.onclick = function() {
    preApprovedScreen.style.display = "none"
    finalScreen.style.display = "block"
    stepTwo.style.backgroundColor = "#c92a2a"
    footerSection.style.display = "block"
}

noBtn.onclick = function() {
    preApprovedScreen.style.display = "none"
    finalScreen.style.display = "block"
    stepTwo.style.backgroundColor = "#c92a2a"
    footerSection.style.display = "block"
}

// Thirdpage
cashoutBtn.onclick = function() {
    refiScreen.style.display = "none"
    finalScreen.style.display = "block"
    stepTwo.style.backgroundColor = "#c92a2a"
    footerSection.style.display = "block"
}

rateBtn.onclick = function() {
    refiScreen.style.display = "none"
    finalScreen.style.display = "block"
    stepTwo.style.backgroundColor = "#c92a2a"
    footerSection.style.display = "block"
}

