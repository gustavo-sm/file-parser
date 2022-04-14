import { File } from  './src/file-parser.js';
import consoleMessage from './utils/console-message.js';

const filePath = process.argv[2], 
option = process.argv[3] || 'p';

try{
    const file = File(filePath);
    file.read();

    const mode = {
        p(){
            file.parse();
        },
        u(){
            file.unparse();
        }
    };
    mode[option]();

} catch(err){
    consoleMessage.error(err);
}
