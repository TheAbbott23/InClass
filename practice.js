(function() {

const question1 = document.getElementById("question-1");

question1.style.color = 'blue'

const question2 = document.querySelector('.question-2');

question2.style.color = 'red'

const questions = document.querySelectorAll('.question-3');

for (let question3 of questions) {
    question3.style.color='orange'
}

const question4 = document.getElementById('question-4');
//console.log(question4)
question4.parentNode.style.backgroundColor = 'purple';

const button = document.getElementById('alert-button');

button.addEventListener('click',() => {
    console.log('Click!!');
} )


//Question 6
const button2 = document.getElementById('add-tv-show-button');

button2.addEventListener('click',() => {
    console.log(button2);

const newLi = document.createElement('li');

//newLi.innerText = "The Wire";

const ul = document.querySelector('ul');

ul.append(newLi);

//Question 7

const button3 = document.getElementById('question-7-remove-button');

button3.addEventListener('click',() => {
    console.log(button3.remove);

} );

//Question 11

const question11 = document.getElementById('question-11');
console.log(question11.innerText);



//Question 12

// const button = document.getElementById("say-hello");
// button.addEventListener('click', () => {
//     const input = document.getElementById("question-12-name");
//     const output = document.getElementById("message");
//     output.textContent = `Hello ${input.value}`;


//Question 13

const addUserButton = document.getElementById('add-user');
addUserButton,addEventListener('click', ()=> {
    const input = document.getElementById('question-13-name');
    const output = document.getElementById('users')

    const newLi = document.createElement('li');
    newLi.innerText = input.value ;
    output.append(newLi);
});

//Question14

const showButton = document.getElementById('show-button');
showButton.addUserButton('click', ()=> {
    const secretText = document.getElementById('secret-text');
    secretText.style.display = "block";
})

const hideButton = document.getElementById('hide-button');
hideButton.addEventListener("click", ()=>{
    const secretText = document.getElementById('secret-text');
    secretText.style.display = "none";

})

//Question15


});


})();
