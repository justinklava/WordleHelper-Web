import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

export { };

const currentDirectory = path.dirname(fileURLToPath(import.meta.url));

const dictionary = fs.readFileSync(path.resolve(currentDirectory, 'data', 'shuffled_real_wordles.txt'), 'utf8').split('\n');
