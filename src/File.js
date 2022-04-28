import fs from 'fs';
import config from '../config/config.js';

class File {

    constructor(readPath){
        this.fileContent = '';
        this.readPath = readPath;
        this.writePath = config.DEST_PATH;
    }

    read(){
        if (!fs.existsSync(this.readPath)){
            throw new Error('Arquivo não encontrado!');
        }
        const fileContent = fs.readFileSync(this.readPath, 'utf-8');
        this.fileContent = fileContent;

    }

    write(filename, content){
        if(!fs.existsSync(this.writePath.split('/')[1])){
            fs.mkdirSync(this.writePath.split('/')[1]);
        }
        fs.writeFileSync(`${this.writePath}/${filename}`, content);
    }

    getFileContent(){
        return this.fileContent;
    }

}

export default File;


