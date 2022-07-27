### Documentação React

* 2 Criando um elemento "html" do zero
Estes objetos são chamados “Elementos React”. Você pode imaginá-los como descrições do que você quer ver na tela. O React lê esses objetos e os usa para construir o DOM e deixá-lo atualizado.


<!--
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);

ou 

const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
-->

* 3 Renderizando Elementos
Um elemento descreve o que você quer ver na tela. 
Ex.:
const element = <h1>Hello, world</h1>;

O React DOM é o responsável por atualizar o DOM para exibir os elementos React.
OBS.: não confundir elementos com componentes


- Renderizando um Elemento no DOM
Suponhamos que exista um <div> em algum lugar do seu código HTML:

<div id="root"></div>
Nós o chamamos de nó raiz do DOM porque tudo dentro dele será gerenciado pelo React DOM.

Aplicações construídas apenas com React geralmente tem apenas um único nó raiz no DOM. Se deseja integrar o React a uma aplicação existente, você pode ter quantos nós raiz precisar.

Para renderizar um elemento React em um nó raiz, passe ambos para ReactDOM.render()`:

const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));

* 4 Componentes e Props:

Componentes permitem você dividir a UI em partes independentes, reutilizáveis e pensar em cada parte isoladamente.

Conceitualmente, componentes são como funções JavaScript. Eles aceitam entradas arbitrárias (chamadas “props”) e retornam elementos React que descrevem o que deve aparecer na tela.

Componentes de Função e Classe
A maneira mais simples de definir um componente é escrever uma função JavaScript:

function Welcome(props) {
  return <h1>Olá, {props.name}</h1>;
}
Essa função é um componente React válido porque aceita um único argumento de objeto “props” (que significa propriedades) com dados e retorna um elemento React. Nós chamamos esses componentes de “componentes de função” porque são literalmente funções JavaScript.

Você também pode usar uma classe ES6 para definir um componente:

class Welcome extends React.Component {
  render() {
    return <h1>Olá, {this.props.name}</h1>;
  }
}
Os dois componentes acima são equivalentes do ponto de vista do React.

- Renderizando um Componente

No entanto, elementos também podem representar componentes definidos pelo usuário:

const element = <Welcome name="Sara" />;

Quando o React vê um elemento representando um componente definido pelo usuário, ele passa atributos JSX e componentes filhos para esse componente como um único objeto. Nós chamamos esse objeto de “props”.

Por exemplo, esse código renderiza “Olá, Sara” na página:

function Welcome(props) {
  return <h1>Olá, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);

Nota: Sempre inicie os nomes dos componentes com uma letra maiúscula.

O React trata componentes começando com letras minúsculas como tags do DOM. Por exemplo, <div /> representa uma tag div do HTML, mas <Welcome /> representa um componente e requer que Welcome esteja no escopo.



- Compondo Componentes
Componentes podem se referir a outros componentes em sua saída. Isso nos permite usar a mesma abstração de componente para qualquer nível de detalhe. Um botão, um formulário, uma caixa de diálogo, uma tela: em aplicativos React, todos esses são normalmente expressos como componentes.

Por exemplo, nós podemos criar um componente App que renderiza Welcome muitas vezes:

function Welcome(props) {
  return <h1>Olá, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

Tipicamente, novos aplicativos React tem um único componente App no topo. Contudo, se você integrar o React em um aplicativo existente, você pode começar de baixo para cima com um pequeno componente como o Button e gradualmente chegar ao topo da hierarquia de exibição.

- Extraindo Componentes
Extrair componentes pode parecer um trabalho pesado no começo, mas ter uma paleta de componentes reutilizáveis compensa em aplicativos maiores. Uma boa regra é que se uma parte da sua UI for usada várias vezes (Button, Panel, Avatar) ou for complexa o suficiente por si só (App, FeedStory, Comment) é uma boa candidata a ser extraída para um componente separado.

* Props são Somente Leitura

Independente se você declarar um componente como uma função ou uma classe, ele nunca deve modificar seus próprios props.

React é bastante flexível mas tem uma única regra estrita:

Todos os componentes React tem que agir como funções puras em relação ao seus props.


* Estado e Ciclo de Vida

Para implementá-lo, precisamos adicionar um “state” ao componente Clock.

O state do componente é similar as props, mas é privado e totalmente controlado pelo componente.


* Convertendo uma Função para uma Classe

* Qual é a diferença entre elementos e componentes?


obs.: Em React, no entanto, a convenção é usar nomes on[Event] para propriedades que representam eventos e handle[Event] para metodos que manipulam os eventos
 Então sempre que for criar um evento de click usa on e quando for chamar um métido que vai executar uma ação de modificar o elemento, usa o handle