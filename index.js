import Parser from './src/Parser.js';
import config from './config/config.js';
import consoleMessage from './utils/console-message.js';
import FileOperations from './src/FileOperations.js';

const filePath = process.argv[2], 
option = process.argv[3] || 'p';

try{
    const parser = new Parser(FileOperations.read(filePath));

    let content = '';

    const mode = {
        p(){
            parser.parse();
            content = parser.getParsedContent();
            FileOperations.write(config.DEST_PATH, config.PARSED_FILENAME, content);
        },
        u(){
            parser.unparse();
            content = parser.getUnparsedContent();
            FileOperations.write(config.DEST_PATH, config.UNPARSED_FILENAME, content);
        }
    };
    mode[option]();


} catch(err){
    consoleMessage.error(err);
}
