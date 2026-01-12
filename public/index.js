const elmsYellowLetters = document.getElementsByClassName('yellow-letters');
const elmsGreenLetters = document.getElementsByClassName('green-letters');
const elmGreyLetters = document.getElementById('grey-letters');
const elmSubmitButton = document.getElementById('submit');
const elmPossibleWords = document.getElementById('possible-words');

for(const element of elmsYellowLetters) {
    element.addEventListener('input', (event) => { event.target.value = event.target.value.toUpperCase(); });
}
for(const element of elmsGreenLetters) {
    element.addEventListener('input', (event) => { event.target.value = event.target.value.toUpperCase(); });
}
elmGreyLetters.addEventListener('input', (event) => { event.target.value = event.target.value.toUpperCase(); });

elmSubmitButton.addEventListener('click', async (event) => {
    event.preventDefault();
    const testBody = {
        yellowLetters: [ '', '', 't', '', ''],
        greenLetters: [ 'd', 'i', '', '', ''],
        greyLetters: 'abc'
    };
    const greenLetters = [ elmsGreenLetters[0].value, elmsGreenLetters[1].value, elmsGreenLetters[2].value, elmsGreenLetters[3].value, elmsGreenLetters[4].value ];
    const yellowLetters = [ elmsYellowLetters[0].value, elmsYellowLetters[1].value, elmsYellowLetters[2].value, elmsYellowLetters[3].value, elmsYellowLetters[4].value ];
    const greyLetters = elmGreyLetters.value;
    const body = {
        greenLetters: greenLetters,
        yellowLetters: yellowLetters,
        greyLetters: greyLetters
    };
    try {
        const response = await fetch(`${hostURL}/api/PossibleWords`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        });
        if (!response.ok) {
            throw new Error(`HTTP error, status: ${response.status}`);
        }
        const responseData = await response.json();
        console.log('Response Data:');
        console.log(responseData);
        elmPossibleWords.replaceChildren();
        for (const word of responseData.possibleWords) {
            const newElm = document.createElement('div');
            newElm.class = 'word';
            newElm.textContent = word;
            elmPossibleWords.appendChild(newElm);
        }
    } catch (error) {
        console.error(`Error fetching POST ${hostURL}/api/PossibleWords`, error.message);
    }
});
