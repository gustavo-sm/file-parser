import fs from 'fs';
import consoleMessage from '../utils/console-message.js';

const File = (filePath) =>{

    let fileContent = '';

    function read(){
    
        if (fs.existsSync(filePath)){
            fileContent = fs.readFileSync(filePath, 'utf-8');
            return;
        }
        throw new Error('Arquivo não encontrado!');
    
    }

    function parse(){
        fileContent.split(/\\n/).forEach(line =>{
            consoleMessage.info(`${line.replace(/\\(?=.*)/g,'')}`);
        });
    }
    return {read, parse};
}



export { File };


