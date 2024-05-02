const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const showSignUpButton = document.getElementById('showSignUp');
const showSignInButton = document.getElementById('showSignIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});

showSignUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
});

showSignInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
});
