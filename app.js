const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function ask(query) {
    return new Promise(resolve => {
      readline.question(query, answer => resolve(answer));
    });
  }
  
  async function main() {
    let n = parseInt(await ask("Ingrese el número de personas a registrar: "));
    let personas = [];
  
    for (let i = 0; i < n; i++) {
      console.log(`\nPersona ${i + 1}`);
      let nombre = await ask("Nombre: ");
      let edad = parseInt(await ask("Edad: "));
      let nota = parseFloat(await ask("Nota: "));
      personas.push({ nombre, edad, nota });
    }
  
    console.log("\nDatos ingresados:");
    console.log(personas);
  
    personas.sort((a, b) => b.nota - a.nota);
  
    console.log("\nDatos ordenados por nota (mayor a menor):");
    console.log(personas);
  
    readline.close();
  }
  
  main();