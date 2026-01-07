import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

export { findWords };

const currentDirectory = path.dirname(fileURLToPath(import.meta.url));

const dictionary = fs.readFileSync(path.resolve(currentDirectory, 'data', 'shuffled_real_wordles.txt'), 'utf8').split('\n');

const findWords = (greenLetters, yellowLetters, greyLetters) => {
    const possibleWords = [];
    //possibleWords.push('abcde', 'fghij', 'klmno');
    for(const word of dictionary) {
        if(word === '' || word == null) continue;
        if(hasGreys(word, greyLetters)) continue;
        if(!matchesGreens(word, greenLetters)) continue;
        if(!matchesYellows(word, yellowLetters)) continue;
        possibleWords.push(word);
    }
    return possibleWords;
};

const hasGreys = (word, letters) => {
    for(const letter of letters.toUpperCase()) {
        if (word.toUpperCase().includes(letter))
            return true;
    }
    return false;
};

const matchesGreens = (word, letters) => {
    for (let i = 0; i < 5; i++) {
        if (letters[i] === '') continue;
        if (word[i].toUpperCase() !== letters[i].toUpperCase()) return false;
    }
    return true;
};

const matchesYellows = (word, letters) => {
    for (let i = 0; i < 5; i++) {
        for (const letter of letters[i]) {
            if (letter === '' || letter == null) continue;
            if (!word.toUpperCase().includes(letter.toUpperCase())) return false;
            if (word[i].toUpperCase() === letter.toUpperCase()) return false;
        }
    }
    return true;
};