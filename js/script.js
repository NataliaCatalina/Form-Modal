'use strict';


//gain reference to when the user submits the form
        //capture form input values
        //test the values
            //if values are clear 
                //send feedback
            //send to database
                //else send error feedback


//gain reference to when the user submits the form
document.querySelector(".submitBtn").addEventListener('click', function(event){
    event.preventDefault(); //stop the default page from loading

    //capture form input values
    let userName = document.querySelector('#userName').value;
    let emailName = document.querySelector('.email').value;
    let passwordName = document.querySelector('.password').value;
    

    //get reference to our error tags
    let userNameError = document.querySelector('#userNameError');
    let emailError = document.querySelector('#emailError');

    // console.log(userName, emailName, passwordName);

    //test for empty values
    if (userName == '') {
        userNameError.textContent = "Please enter your name";
    } else if(userName.length >=20){
        userNameError.textContent = "Please enter a Shorter Name";
    } else {
        userNameError.textContent = " ";
    }

    if(emailName == '') {
        emailError.textContent = "Please enter a Email";
    } else {
        emailError.textContent = " ";
    }

    if(passwordName == '') {
        passwordError.textContent = "Please enter a Password";
    } else {
        emailError.textContent = " ";
    }

});


/** MODAL **/

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal);

//create open and close function 
const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden')
    console.log('test');
}

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    console.log('test');
   
}

//loop through the button and add an event listener to each
for (let i=0;i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openModal);

//create triggers
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e)  {
    if(e.key === 'Escape' && !modal.classList.contains('hidden') ) {
        closeModal();
    }

}); 