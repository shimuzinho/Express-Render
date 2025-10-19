const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.type('html').send(html('Hello from Render!', 'Hello Express API')));

app.get('/req', (req, res) => {
  console.log("Just got a request!")
  res.send('Yo!')
})

app.get('/meunome', (req, res) => {
  res.type('html').send(html('Meu Nome', 'Meu nome é Pedro Rossini Lanutti de Moraes'));
});

app.get('/tico', (req, res) => {
  res.type('html').send(html('KKKKK', 'teco'));
});

app.get('/pokemons', (req, res) => {
  res.json([
    { "id": 1, "nome": "Caterpie" },
    { "id": 2, "nome": "Pidgeotto" },
    { "id": 3, "nome": "Bulbasaur" },
    { "id": 4, "nome": "Charmander" },
    { "id": 5, "nome": "Squirtle" },
    { "id": 6, "nome": "Krabby" },
    { "id": 7, "nome": "Primeape" },
    { "id": 8, "nome": "Muk" },
    { "id": 9, "nome": "Tauros" },
    { "id": 10, "nome": "Kingler" }
  ]);
});

app.post('/series', (req, res) => {
  res.json([
    {
      "titulo": "The Good Place",
      "ano_inicio": 2016,
      "genero": ["Comédia", "Ficção científica", "Filosofia"],
      "criador": "Michael Schur",
      "sinopse": "Eleanor morre e vai parar em um lugar chamado 'O Bom Lugar', mas logo percebe que há algo errado e tenta se tornar uma pessoa melhor para merecer ficar lá."
    },
    {
      "titulo": "The Blacklist",
      "ano_inicio": 2013,
      "genero": ["Suspense", "Crime", "Ação"],
      "criador": "Jon Bokenkamp",
      "sinopse": "Raymond 'Red' Reddington, um ex-agente do governo e criminoso procurado, se entrega ao FBI e oferece ajuda para capturar outros criminosos em troca de imunidade."
    },
    {
      "titulo": "Lucifer",
      "ano_inicio": 2016,
      "genero": ["Drama", "Fantasia", "Policial"],
      "criador": "Tom Kapinos",
      "sinopse": "Entediado no inferno, Lúcifer Morningstar decide viver em Los Angeles, onde ajuda a polícia a resolver crimes enquanto enfrenta dilemas sobre moralidade e redenção."
    }
  ]);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

function html(title, text) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
        <script>
          setTimeout(() => {
            confetti({
              particleCount: 100,
              spread: 70,
              origin: { y: 0.6 },
              disableForReducedMotion: true
            });
          }, 500);
        </script>
        <style>
          @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");
          @font-face {
            font-family: "neo-sans";
            src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
            font-style: normal;
            font-weight: 700;
          }
          html {
            font-family: neo-sans;
            font-weight: 700;
            font-size: calc(62rem / 16);
          }
          body {
            background: white;
          }
          section {
            border-radius: 1em;
            padding: 1em;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-right: -50%;
            transform: translate(-50%, -50%);
          }
        </style>
      </head>
      <body>
        <section>
          ${text} 
        </section>
      </body>
    </html>
    `
}