// Simple calculator - Versão Estabilizada
 const PI = 3.14151;
 let radius = 5;

// Cálculo da área (Processamento numérico)
 let area = PI * radius * radius;

// Interpolação correta usando crases (Template Literals)
// Nota: A tecla de crase ( ` ) permite injetar a variável ${area} no texto.
 let message = `The circle area is: ${area}`;

// Exibição dos Diagnósticos no Terminal
 console.log(message);
 console.log("Area type:", typeof area);
 console.log("Message type:", typeof message);
