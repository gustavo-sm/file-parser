import File from  './src/File.js';
import Parser from './src/Parser.js';
import config from './config/config.js';
import consoleMessage from './utils/console-message.js';

const filePath = process.argv[2], 
option = process.argv[3] || 'p';

try{
    const file = new File(filePath);

    file.read();

    const parser = new Parser(file.getFileContent());
    let content = '';

    const mode = {
        p(){
            parser.parse();
            console.log(parser.getParsedContent());
            content = parser.getParsedContent();
            file.write(config.PARSED_FILENAME, content);
        },
        u(){
            parser.unparse();
            content = parser.getUnparsedContent();
            file.write(config.UNPARSED_FILENAME, content);
        }
    };
    mode[option]();


} catch(err){
    consoleMessage.error(err);
}
