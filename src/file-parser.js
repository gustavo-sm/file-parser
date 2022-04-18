import fs from 'fs';
import consoleMessage from '../utils/console-message.js';
import config from '../config/config.js';

const File = (filePath) =>{

    let fileContent = '';

    function read(){
    
        if (fs.existsSync(filePath)){
            fileContent = fs.readFileSync(filePath, 'utf-8');
            return;
        }
        throw new Error('Arquivo não encontrado!');
    
    }

    function write(destPath, content){

        if(!fs.existsSync(destPath.split('/')[1])){
            fs.mkdirSync(destPath.split('/')[1]);
        }
        fs.writeFileSync(destPath, content);
    }

    function parse(){
        console.log(config);
        let parsedFileContent ='';
        fileContent.split(/\\n/).forEach(line =>{
            parsedFileContent+= line.replace(/\\t(?=.*)/g, '') + '\r\n';
            consoleMessage.info(`${line.replace(/\\t(?=.*)/g,'')}`);
        });
        write(`${config.DEST_PATH}/${config.PARSED_FILENAME}`, parsedFileContent);
    }

    function unparse(){
        let stringfiedFile = '';
        fileContent.split(/\r\n/g).forEach(line =>{
            stringfiedFile+=line+' \\n';
        });
        write(`${config.DEST_PATH}/${config.UNPARSED_FILENAME}`, stringfiedFile);

        consoleMessage.info(stringfiedFile);
    }
    return {read, parse, unparse};
}



export { File };


