// Função para calcular o saldo de vitórias e determinar o nível do jogador
function calcularSaldoEVitórias(vitorias, derrotas) {
    // Passo 2: Calcular o saldo de vitórias
    let saldoVitorias = vitorias - derrotas;
    
    // Passo 3: Determinar o nível do jogador
    let nivel;
    
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }
    
    // Passo 4: Exibir a mensagem
    console.log(`O Herói tem um saldo de ${saldoVitorias} vitórias e está no nível ${nivel}.`);
}

// Testar a função com alguns exemplos
calcularSaldoEVitórias(8, 5);  // O Herói tem um saldo de 3 vitórias e está no nível Ferro.
calcularSaldoEVitórias(15, 5); // O Herói tem um saldo de 10 vitórias e está no nível Bronze.
calcularSaldoEVitórias(35, 10); // O Herói tem um saldo de 25 vitórias e está no nível Prata.
calcularSaldoEVitórias(75, 20); // O Herói tem um saldo de 55 vitórias e está no nível Ouro.
calcularSaldoEVitórias(85, 10); // O Herói tem um saldo de 75 vitórias e está no nível Diamante.
calcularSaldoEVitórias(95, 10); // O Herói tem um saldo de 85 vitórias e está no nível Lendário.
calcularSaldoEVitórias(110, 10); // O Herói tem um saldo de 100 vitórias e está no nível Imortal.
