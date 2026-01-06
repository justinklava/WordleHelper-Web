const elmsYellowLetters = document.getElementsByClassName('yellow-letters');
const elmsGreenLetters = document.getElementsByClassName('green-letters');
const elmGreyLetters = document.getElementById('grey-letters');
const elmSubmitButton = document.getElementById('submit');


for(const element of elmsYellowLetters) {
    element.addEventListener('input', (event) => { event.target.value = event.target.value.toUpperCase(); });
}
for(const element of elmsGreenLetters) {
    element.addEventListener('input', (event) => { event.target.value = event.target.value.toUpperCase(); });
}
elmGreyLetters.addEventListener('input', (event) => { event.target.value = event.target.value.toUpperCase(); });

elmSubmitButton.addEventListener('click', async (event) => {
    event.preventDefault();
    
});