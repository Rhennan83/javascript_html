// 1. ZONA DE PREPARAÇÃO (Entrada)
const aluno = {
	    nome: "Rhennan",
	    nota: 8.5,
	    presenca: 0.9 // Representa 90%
};

const mediaMinima = 7;
const presencaMinima = 0.75; // Representa 75%

//4. ZONA DE VALIDAÇÃO 	(Sistema Sensorial)
if (!aluno || !aluno.nome) {
	    console.log("Erro: Dados do aluno não encontrados ou inválidos.");
} else {

// 2. ZONA DE TRANSFORMAÇÃO (Processamento)
	const passouNota = aluno.nota >= mediaMinima;
	    const passouPresenca = aluno.presenca >= presencaMinima;
	    const aprovado = passouNota && passouPresenca;
// 3. ZONA DE DECISÃO (O Cérebro)
	const statusFinal = aprovado 
	        ? "✅ ACESSO LIBERADO: Bem-vindo ao Lab_Backend!" 
	        : "❌ ACESSO NEGADO: Verifique nota ou presença.";
	// 6. ZONA DE ENTREGA (Saída)
	console.log("---------- RELATÓRIO DE ACESSO ----------");
	    console.log(`Estudante: ${aluno.nome}`);
	    console.log(`Nota: ${aluno.nota} | Presença: ${(aluno.presenca * 100)}%`);
	    console.log(`Resultado: ${statusFinal}`);
	    console.log("-----------------------------------------");
}
