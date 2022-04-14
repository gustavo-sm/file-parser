import fs from 'fs';
import consoleMessage from '../utils/console-message.js';

const File = (filePath) =>{

    let fileContent = '';

    function read(){
        fileContent = fs.readFileSync(filePath, 'utf-8');
    }

    function parse(){
        fileContent.split(/\\n/).forEach(line =>{
            consoleMessage.info(`${line.replace(/\\(?=.*)/g,'')}`);
        });
    }
    return {read, parse};
}



export { File };


