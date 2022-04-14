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
            consoleMessage.info(`${line.replace(/\\t|\\(?=.*)/g,'')}`);
        });
    }

    function unparse(){
        let stringfiedFile = '';
        fileContent.split(/\r\n/g).forEach(line =>{
            stringfiedFile+=line+'\\n';
        });

        consoleMessage.info(stringfiedFile);
    }
    return {read, parse, unparse};
}



export { File };


