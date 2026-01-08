import express from 'express';
import { findWords } from './controller.js';

const api = express.Router();
export default api;

api.post('/PossibleWords', (req, res, next) => {
    const testResponse = {
        possibleWords: ['abcde', 'fghij', 'klmno', 'pqrst', 'uvwxy', 'zzzzz'],
        yellowLetters: [ 'asdfg', 'asd', 'jk', 'lj', '' ],
        greenLetters: [ '', '', 'i', '', ''],
        greyLetters: 'jkluio'
    };
    const { yellowLetters, greenLetters, greyLetters } = req.body;
    const possibleWords = findWords(greenLetters, yellowLetters, greyLetters);
    res.send(JSON.stringify({
        possibleWords: possibleWords,
        greenLetters: greenLetters,
        yellowLetters: yellowLetters,
        greyLetters: greyLetters
    }));
});