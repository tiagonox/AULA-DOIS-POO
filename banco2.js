class Banco{
    constructor(nome, banco){
        this.nome = nome;
        this.banco = banco;
    }
    setarBanco(novoBanco){
        if (typeof novoBanco == "string") {
            this.banco = novoBanco
        }
    }
}

let p1 = new Banco("Tariane","Santander");
let p2 = new Banco("Vania","Caixa");
let p3 = new Banco("Raimundo","Safra");
let p4 = new Banco("Gizelia","Banco do Brasil");

console.log(`${p1.nome} tem ${p1.banco} como banco`)
console.log(`${p2.nome} tem ${p2.banco} como banco`)
console.log(`${p3.nome} tem ${p3.banco} como banco`)
console.log(`${p4.nome} tem ${p4.banco} como banco`)