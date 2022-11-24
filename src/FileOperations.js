import fs from 'fs';

class FileOperations{


    static read(readPath){
        if (!fs.existsSync(readPath)){
            throw new Error('Arquivo não encontrado!');
        }
        return fs.readFileSync(readPath, 'utf-8');
    }

    static write(destPath, filename, content){
        if(!fs.existsSync(destPath.split('/')[1])){
            fs.mkdirSync(destPath.split('/')[1]);
        }
        
        fs.writeFileSync(`${destPath}/${filename}`, content);
    }
    
}

export default FileOperations;