# portfolio-SemanaReactJS-SujeitoProgramador
Semana de estudos com ReactJS do canal 'Sujeito Programador'

## Comandos:
- `npx create-react-app imc` => Cria o projeto React na pasta imc
- `npm start` => Inicializa o projeto instalando as dependências e estabelecendo as configurações básicas
- `npm install axios` => Instala a biblioteca do axios para trabalhar com requisições HTTP de forma mais simples e organizada

## Anotações
- Para estabelecer a rotas entre as páginas no React.
  - Dependência: `react-router-dom`
- Disponibiliza um pacote interessante de ícones para a aplicação.
  - Dependência: `react-icons`
- O arquivo `routes.js` faz a configuração das rotas de navegação da página web.
- **useState**: Hook voltada para guardar o estado em uma variável.
  - Um link, contador, ...
- **useEffect**: Faz o ciclo de vida do componente desde a hora que a tela é carregada.
- Armazenamento dos links:
  - Foi utilizado um localStorage, ou seja, ele armazena na cache do navegador, contudo, se forem limpos os temporários os dados serão apagados.