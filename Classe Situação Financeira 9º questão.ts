class SituacaoFinanceira{
    valorCreditos: number = 0;
    valorDebitos: number = 0;

    calcularSaldo(): number{
        return this.valorCreditos-this.valorDebitos
    }
}

let situacaoFinanceira = new SituacaoFinanceira;

situacaoFinanceira.valorCreditos = 1000;
situacaoFinanceira.valorDebitos = 500;

let saldo = situacaoFinanceira.calcularSaldo();

console.log(`O saldo atual na sua conta é de: R\$${saldo.toFixed(2)}`);
