import { File } from  './src/file-parser.js';
import consoleMessage from './utils/console-message.js';

const filePath = process.argv[2];

try{
    const file = File(filePath);
    file.read();
    file.parse();
} catch(err){
    consoleMessage.error(err);
}
