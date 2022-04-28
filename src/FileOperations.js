import fs from 'fs';
import config from '../config/config.js';

class FileOperations{

    read(path){
        if (!fs.existsSync(path)){
            throw new Error('Arquivo não encontrado!');
        }
        return fs.readFileSync(path, 'utf-8');
    }

    write(filename, content){
        if(!fs.existsSync(config.DEST_PATH.split('/')[1])){
            fs.mkdirSync(config.DEST_PATH.split('/')[1]);
        }
        
        fs.writeFileSync(`${config.DEST_PATH}/${filename}`, content);
    }
    
}

export default FileOperations;