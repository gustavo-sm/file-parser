## file-parser

Biblioteca para parse de conteúdo de arquivos de codigo js, provenientes no seguinte formato de exemplo:  

```function teste(arg1,arg2){\nreturn arg1+arg2;\n}\n\n\nfunction teste2(){\treturn 1+1\n}\n```

Resultado:  
![image](https://user-images.githubusercontent.com/80229794/203704840-31c7b539-eac9-4959-9940-94a715c66c6d.png)

### Instruções:
- ```npm install``` para baixar as dependências;
- ```npm run parser``` _```caminho do arquivo a ser lido```_ ```p``` (para parse) ou ```u``` (para unparse)
