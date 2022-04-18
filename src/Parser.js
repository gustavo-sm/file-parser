import consoleMessage from '../utils/console-message.js';
import config from '../config/config.js';

const Parser = (File) => {
    
    function parse(fileContent){
        let parsedFileContent ='';
        fileContent.split(/\\n/).forEach(line =>{
            parsedFileContent+= line.replace(/\\t(?=.*)/g, '') + '\r\n';
            consoleMessage.info(`${line.replace(/\\t(?=.*)/g,'')}`);
        });
        File.write(`${config.DEST_PATH}/${config.PARSED_FILENAME}`, parsedFileContent);
    }

    function unparse(fileContent){
        let stringfiedFile = '';
        fileContent.split(/\r\n/g).forEach(line =>{
            stringfiedFile+=line+' \\n';
        });
        File.write(`${config.DEST_PATH}/${config.UNPARSED_FILENAME}`, stringfiedFile);

        consoleMessage.info(stringfiedFile);
    }
    return {parse, unparse};
}

export { Parser };