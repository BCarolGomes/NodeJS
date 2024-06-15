const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function lerArquivo() {
    fs.readFile("C:\Users\biaam\Documents\ArqDaTarefa.txt", "utf8", (err, data) => {
        if (err){
            console.error(err);
            return;
        }
        const linhas = data.split("\n")
        let linhasComLetras = 0;
        let somaDosNum = 0;
    
        linhas.forEach ((linha) => {
            const linhasComNum = linha.match(/\d+/g);
    
            if (linhasComNum) {
                linhasComNum.forEach((Number) => {
                    somaDosNum += parseInt(Number, 10);
                });
            }
            else if(/[a-zA-z]/.test(linha)) {
                linhasComLetras++;
            }
        });
        console.log("Linhas com letras:", linhasComLetras);
        console.log("A soma dos números nesse arquivo é igual a ", somaDosNum)
    });

    rl.question("Deseja executar a leitura novamente?", (resposta) => {
        if (resposta.toLowerCase() === "sim") {
            lerArquivo();
        } else {
            rl.close();
        }
    });
}

lerArquivo();