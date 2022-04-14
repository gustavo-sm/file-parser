import { File } from  './src/file-parser.js';

const filePath = process.argv[2];

const file = File(filePath);
file.read();
file.parse();