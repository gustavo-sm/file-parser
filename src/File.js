import fs from 'fs';

const File = (filePath) =>{

    let fileContent = '';

    function read(){
    
        if (fs.existsSync(filePath)){
            fileContent = fs.readFileSync(filePath, 'utf-8');
            return fileContent;
        }
        throw new Error('Arquivo não encontrado!');
    
    }

    function write(destPath, content){

        if(!fs.existsSync(destPath.split('/')[1])){
            fs.mkdirSync(destPath.split('/')[1]);
        }
        fs.writeFileSync(destPath, content);
    }
    return {read, write};
};

export { File };


