const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

const corsOptions = {
  origin: [
    "http://127.0.0.1:5500",
    "http://localhost:5500",
    "https://web.postman.co/workspace/My-Workspace~1f7f2b48-6525-43de-8f39-ae29f79920ca/request/42907660-82b41a7d-da49-4c21-aec7-0c32da3f09b6?historyId=42907660-5bedd315-8dea-4641-83f7-541ee956df63&utm_source=postman&utm_medium=response_tab&utm_campaign=core&utm_content=link",
  ], // Permite ambas as origens
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions)); // Adicionando o middleware CORS com opções

// Servir arquivos estáticos
app.use("/arquivos", express.static("arquivos"));

const menuItems = [
  {
    id: 1,
    nome: "Café Expresso",
    descricao: "Um delicioso café expresso feito na hora.",
    preco: 5.0,
    imagem: "/arquivos/imagens/Cardapio-Café Expresso.png",
  },
  {
    id: 2,
    nome: "Bolo de Cenoura",
    descricao: "Um bolo macio e saboroso com cobertura de chocolate.",
    preco: 8.0,
    imagem: "/arquivos/imagens/Cardapio-Bolo-de-cenoura.jpeg",
  },
  {
    id: 3,
    nome: "Cappuccino",
    descricao: "Café cremoso com espuma de leite e chocolate.",
    preco: 7.0,
    imagem: "/arquivos/imagens/Cardapio-Cappuccino.png",
  },
  {
    id: 4,
    nome: "Sanduíche Natural",
    descricao: "Sanduíche de frango com salada e pão integral.",
    preco: 10.0,
    imagem: "/arquivos/imagens/Cardapio-Sanduiche-natural.png",
  },
  {
    id: 5,
    nome: "Suco de Laranja",
    descricao: "Suco natural de laranja espremida na hora.",
    preco: 6.0,
    imagem: "/arquivos/imagens/Cardapio-Suco de Laranja.png",
  },
  {
    id: 6,
    nome: "Brownie de Chocolate",
    descricao: "Um delicioso brownie com pedaços de chocolate.",
    preco: 7.5,
    imagem: "/arquivos/imagens/Cardapio-Brownie de Chocolate.png",
  },
  {
    id: 7,
    nome: "Suco de Abacaxi",
    descricao: "Suco natural de abacaxi fresquinho.",
    preco: 6.5,
    imagem: "/arquivos/imagens/Cardapio-Suco-de-Abacaxi.jpg",
  },
  {
    id: 8,
    nome: "Pão de Queijo",
    descricao: "Pão de queijo quentinho e crocante.",
    preco: 3.5,
    imagem: "/arquivos/imagens/Cardapio-pao-de-queijo.jpg",
  },
  {
    id: 9,
    nome: "Mocha",
    descricao:
      "Café espresso combinado com chocolate quente e leite vaporizado, coberto com chantilly.",
    preco: 9.0,
    imagem: "/arquivos/imagens/Cardapio-Mocha.jpg",
  },
  {
    id: 10,
    nome: "Café Americano",
    descricao:
      "Um café espresso diluído com água quente, resultando em um café suave.",
    preco: 6.0,
    imagem: "/arquivos/imagens/Cardapio-Café-americano.jpg",
  },
  {
    id: 11,
    nome: "Café Macchiato",
    descricao:
      "Café espresso 'manchado' com uma pequena quantidade de leite vaporizado.",
    preco: 7.0,
    imagem: "/arquivos/imagens/Cardapio-Café-Macchiato.png",
  },
  {
    id: 12,
    nome: "Café Latte",
    descricao:
      "Café espresso com uma grande quantidade de leite vaporizado e uma leve camada de espuma.",
    preco: 8.0,
    imagem: "/arquivos/imagens/Cardapio-Cafe-Latte.jpeg",
  },
  {
    id: 13,
    nome: "Café Irlandês",
    descricao:
      "Café combinado com uísque irlandês, açúcar e uma camada de creme por cima.",
    preco: 10.0,
    imagem: "/arquivos/imagens/Cardapio-Cafe-irlandes.jpg",
  },
  {
    id: 14,
    nome: "Café Gelado",
    descricao:
      "Café preparado e servido frio, muitas vezes com gelo e leite ou creme.",
    preco: 8.0,
    imagem: "/arquivos/imagens/Cardapio-café-gelado.jpg",
  },
  {
    id: 15,
    nome: "Affogato",
    descricao:
      "Uma bola de sorvete de baunilha 'afogada' em uma dose de café espresso quente.",
    preco: 12.0,
    imagem: "/arquivos/imagens/Cardapio-Affogato.jpg",
  },
  {
    id: 16,
    nome: "Café com Leite",
    descricao:
      "Café espresso ou coado misturado com leite quente em partes iguais.",
    preco: 6.5,
    imagem: "/arquivos/imagens/Cardapio-Café-com-Leite.jpg",
  },
  {
    id: 17,
    nome: "Ristretto",
    descricao: "Uma dose de café espresso mais concentrada e com menos volume.",
    preco: 5.5,
    imagem: "/arquivos/imagens/Cardapio-Ristretto.jpg",
  },
  {
    id: 18,
    nome: "Flat White",
    descricao:
      "Café espresso com leite vaporizado, semelhante ao latte, mas com menos espuma.",
    preco: 7.5,
    imagem: "/arquivos/imagens/Cardapio-Flat_White.png",
  },
];

app.get("/api/menu", (req, res) => {
  res.json(menuItems);
});

// app.get("/api/menu", (req, res) => {
//   res.send(menuItems);
// });

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
// http.createServer(app).listen(port, () => {
//   console.log(`Servidor rodando em http://localhost:${port}`);
// });
