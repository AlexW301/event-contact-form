// Modal 

var modal = document.querySelector('.modal')
var submitBtn = document.querySelector('.submit-button')
var closeBtn = document.querySelector('.close-btn')

// Hide Modal

closeBtn.onclick = function() {
    modal.style.display = "none";
}


//


// Form Fields

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
    } else if (fullname.indexOf(' ') === -1) {
        // IF NAME IS NOT FULL
        alert('Please enter your full name')
    } else if (email.indexOf('@') === -1) {
        // IF NAME IS NOT FULL
        alert('Please enter valid email')
    }

  }