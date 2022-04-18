import { File } from  './src/File.js';
import { Parser } from './src/Parser.js';
import consoleMessage from './utils/console-message.js';

const filePath = process.argv[2], 
option = process.argv[3] || 'p';

try{
    const file = File(filePath),
        content = file.read(),
        parser = Parser(file);

    const mode = {
        p(){
            parser.parse(content);
        },
        u(){
            parser.unparse(content);
        }
    };
    mode[option]();

} catch(err){
    consoleMessage.error(err);
}
