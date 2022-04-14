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

    function write(){

    }

    function parse(){
        let parsedFileContent ='';
        fileContent.split(/\\n/).forEach(line =>{
            parsedFileContent+= line.replace(/\\t(?=.*)/g, '') + '\r\n';
            consoleMessage.info(`${line.replace(/\\t(?=.*)/g,'')}`);
        });
        fs.writeFileSync('parsed.js', parsedFileContent);
    }

    function unparse(){
        let stringfiedFile = '';
        fileContent.split(/\r\n/g).forEach(line =>{
            stringfiedFile+=line+' \\n';
        });
        fs.writeFileSync('unparsed.txt', stringfiedFile);

        consoleMessage.info(stringfiedFile);
    }
    return {read, parse, unparse};
}



export { File };


