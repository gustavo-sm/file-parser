import File from  './src/File.js';
import Parser from './src/Parser.js';
import config from './config/config.js';
import consoleMessage from './utils/console-message.js';
import FileOperations from './src/FileOperations.js';

const filePath = process.argv[2], 
option = process.argv[3] || 'p';

try{
    const FileOps = new FileOperations(),
    file = new File(filePath, FileOps),
    parser = new Parser(file.extractContent());

    let content = '';

    const mode = {
        p(){
            parser.parse();
            content = parser.getParsedContent();
            FileOps.write(config.PARSED_FILENAME, content);
        },
        u(){
            parser.unparse();
            content = parser.getUnparsedContent();
            FileOps.write(config.UNPARSED_FILENAME, content);
        }
    };
    mode[option]();


} catch(err){
    consoleMessage.error(err);
}
