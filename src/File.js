class File {

    constructor(readPath, FileOps){
        this.fileContent = '';
        this.readPath = readPath;
        this.FileOps = FileOps;
    }

    extractContent(){
        this.fileContent = this.FileOps.read(this.readPath);
        return this.fileContent;
    }

}

export default File;


