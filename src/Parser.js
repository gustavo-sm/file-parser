import consoleMessage from '../utils/console-message.js';

class Parser{
    
    constructor(fileContent = ''){
        this.fileContent = fileContent;
        this.parsedFileContent = '';
        this.unparsedFileContent = '';
    }

    parse(){
        try{
            this.fileContent.split(/\\n/).forEach(line =>{
                this.parsedFileContent+= line.replace(/\\t(?=.*)/g, '') + '\r\n';
                consoleMessage.info(`${line.replace(/\\t(?=.*)/g,'')}`);
            });           

        } catch(err){
            throw new Error(err);
        }
    }

    unparse(){
        try{
            this.fileContent.split(/\r\n/g).forEach(line =>{
                if(line.replace(/\s/g, ''))
                    this.unparsedFileContent+=line+'\\n';
            });
    
            consoleMessage.info(this.unparsedFileContent);

        } catch(err){
            throw new Error(err);
        }
    }

    getParsedContent(){
        return this.parsedFileContent;
    }

    getUnparsedContent(){
        return this.unparsedFileContent;
    }

}

export default Parser;