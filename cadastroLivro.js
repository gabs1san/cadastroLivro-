const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let livros = [];

function menu() {
  console.log("\n--- Sistema de Livros ---");
  console.log("1 - Cadastrar livro");
  console.log("2 - Listar livros");
  console.log("3 - Remover livro");
  console.log("0 - Sair");

  rl.question("Escolha uma opção: ", (opcao) => {
    switch(opcao) {
      case "1":
        cadastrarLivro();
        break;
      case "2":
        listarLivros();
        break;
      case "3":
        removerLivro();
        break;
      case "0":
        rl.close();
        break;
      default:
        console.log("Opção inválida!");
        menu();
    }
  });
}

function cadastrarLivro() {
  rl.question("Nome do livro: ", (nome) => {
    rl.question("Autor: ", (autor) => {
      rl.question("Ano de publicação: ", (ano) => {

        livros.push({
          nome: nome,
          autor: autor,
          ano: Number(ano)
        });

        console.log("Livro cadastrado com sucesso!");
        menu();
      });
    });
  });
}

function listarLivros() {
  console.log("\n--- Lista de Livros ---");

  if (livros.length === 0) {
    console.log("Nenhum livro cadastrado.");
  } else {
    livros.forEach((livro, index) => {
      console.log(`${index} - ${livro.nome} | ${livro.autor} | ${livro.ano}`);
    });
  }

  menu();
}

function removerLivro() {
  rl.question("Digite o índice do livro para remover: ", (index) => {
    livros.splice(index, 1);
    console.log("Livro removido!");
    menu();
  });
}

menu();