## Tutorial Prático de Como usar o React

1: tenha o node e o npm instalado

2: Instalando o create-react-app 

- crie uma pasta onde seu projeto vai ficar e abra essa pasta em seu editor de código. (estou usando o vs code)

- abra o terminal e digite:

$ npx create-react-app nomedoprojeto

se der erro de execução falando da versão diferente rode esse comando:

$ npx clear-npx-cache

e roda novamente o:

$ npx create-react-app nomedoprojeto


mude para o diretório que você acabou de criar 

$cd nomedoprojeto

e já pode executar o projeto

$ npm start

vai abrir uma aba do navegador com o projeto criado funcionando.

3: entendendo a arquitetura do projeto...

Ele vai criar várias pastas e arquivos, o que nos interessa é a pasta src

* Opcional: na pasta Public, tem um arquivo index.html que é usado para rodar a aplicação. Mas não é nela que vamos colocar o código.Nesse arquivo, você tem a opção de mudar só o nome que está na tag title. Se você fizer isso, já vai poder perceber que essa alteração foi feita de forma automática na aba do navegador.

* nesse arquivo também tem a div com o #root que vai renderizar toda a página em React que a gente criar

* Ao abrir o Dev tools na aba do chrome, é pedido para instalar a extensão react develop tools

4: Modificando o código

vá até a pasta src no editor de texto e encontre o arquivo index.js

na pasta src procure o arquivo App.js
 é nesse arquivo onde está o código da nossa aplicação. É onde fica o componente principal da aplicação

 Apague tudo que está dentro da tag <div className="App"></div> e pode começar a sua aplicação escrevendo react. A partir daqui todas as alterações vão ser mostradas na tela "automagicamente"!!



5: criando um componente

dentro da pasta src crie uma pasta chamada components

dentro da pasta components crie um arquivo.js com o nome do seu componente. Use o CamelCase com a primeira letra maiúscula. ex.: MeuComponente.js

Dentro desse arquivo crie a base do componente, que é a mesma do arquivo app.js.
Ex.:

```js

function App() {
  return (
    <div className="App">
      <h2>Helo World!</h2>
    </div>
  );
}

export default App;
```

obs.: as tags HTML dentro do parenteses já é JSX e funcionam como um HTML convencional, porém tem algumas regras..

Depois de criar o componente, é necessário importá-lo no index.js

para isso coloca no início do código:

import NomeDoComponente from  "./lugardoarquivo.js"

depois, dentro do retorno da função App, escreva o nome do componente dentro de uma tag. Ex.:

<FirstComponent />

olhe no navegador e veja o componente importado

----------------------------------------------------------
* Regras para escrever HTML no JSX:

- Só pode ter um elemento pai. Então você deve colocar todos os elementos dentro de uma única tag, em geral é usado a div ou uma tag vazia

- para colocar uma classe no JSX tem que escrever className="nomedaclasse". Ou seja, todas as palavras que conflitam com o JS ou HTML é necessário mudar

- Atributo for do HTML (for="name"). Nesse caso é usado htmlFor

- Para fazer comentários:
// usa as duas barras

e dentro do return usa {/* comentário*/}

- template express: {} as chaves representam o código JS dentro JSX, por isso, sempre que tiver um código JS tem que ser colocado entre {} 
Ex.:

{2 + 2} // 4
<p>Nome: {name}</p> // Nome: Charlie


OBS: se fechar a aba do navegador é só olhar em porta localhost o app foi aberto e digitar o caminho na barra de busca do navegador.

----------------------------------------------------------


6: Hierarquia de componentes

Se criar uma componente, pode utilizar ele tanto no index.js quanto no app.js, também pode usar dentro de outro componente e as duas formas ao mesmo tempo.

7: Eventos de clique

é possível ter acesso aos eventos de clique direto na tag, assim como é no HTML, a diferença é que a implementação do JS já pode feita ali também através das {} ou pode ser criada uma const que guarda a função fora e depois passa a variável como valor do atributo HTML dentro das chaves.

Ex:

const AnotherComponent = () => {
  
  let contador = 0
  const handleClick = () => {
    contador+=1
    console.log(contador);
  }

  return (
    <div>
      <p>Segundo componente</p>
      <button onClick={handleClick}>Evento de clique</button>
      <button onClick={() => console.log("teste")}>Evento no elemento</button>
    </div>
  )
}

como o AnotherComponent foi replicado duas vezes (uma no app e outra no firstCompoenent) a lógica é diferente pra cada botão que aparece na tela.
No caso, ao clicar no primeiro botão ele vai mostrando 1,2,3,4...
se eu clicar no segundo botão, ele começa novamente do 1. Se eu voltar a clicar no segundo ele continua contando a partir de onde tava 5, 6.. se volto pro outro ele vai pra o 2. Então é o mesmo componente mas são separados e guardam estados diferentes.



* Adicionando Imagens:
cria um novo componente e retorna isso:

- para imagem dentro da pasta public
<div>
      <img src="/image1.jpg"></img>
    </div>

ou

- para imagem dentro da pasta src/assets

import nomequevcquerchamaraimagem from "./lugarenomedoarquivo.jpg


### Hooks:

toda palavra que começar com use pode ser que estejamos falando de um hook

  # useState:

- cria o componente hooks

e usa o useState pois ele gerencia os valores que aparecem na tela

para isso:

- no componente hooks tem que importar o useState:

import { useState } from "react"

e criar uma const e entre colchetes coloca o nome Do Que Vai Modificar e o prefixo set com o nome anterior. E essa variável vai receber a funcao useState. Ex.:

const [minhaVariavel, setMinhaVariavel] = useState(valorPadrãoQueVaiComeçarNessaVariável)

Nesse caso, o hook está sendo invocada para gerenciar o acesso ao valor da variável e a alteração d valor da variável (respectivamente). Isso me dá a possibilidade de consultar e alterar essa variável

depois cria a função que vai gerenciar:

const minhaFuncaoHook = () => {
    setMinhaVariavel(novoValor)
  }
e não esquece de implementar ela no componente:

<p>variavelHook: {novavariavel}</p>
      <button onClick={minhaFuncaoHook}>Mudar nova variavel</button>

e não esquecer de implementar ele no app.js (ou onde vc quiser)

- no inicio do código:

import Hooks from "./components/Hooks.js"

dentro da função do componente:

<Hook />


# useEffect

pode executar alguma coisa quando quiser, se baseando na referência de algum dado, ou quando o usuário entra na página.


Para usar tem que importar no componente hooks:

import { useState, useEffect } from "react"


depois implementa o useEffect com a função 


useEffect(() => {
    console.log("testando");
  })

e sempre que alguma coisa mudar na tela, ou usuário fizer alguma entrada, essa função vai ser executada.
Ex. de uso: quando o usuário carrega a página, usa o useEffect pra poder carregar os dados da API


# Renderização de listas:

cria o componente lista:

const Lists = () => {

  const items = [{
    id: 1,
    name: "Charlie"
  },
    {
      id: 2,
      name: "Gustavo"
  }]
  return (
    <div>
      {items.map((item) => (
        // lembrar de colocar o key={item.id} pra ele identificar o elemento que ele tá trabalhando
        <p key={item.id}>
          {item.id}: {item.name}
        </p>
      ))}
    </div>
  )
}

export default Lists;

e importa ele no App.js (ou onde quiser)

import Lists from "./...."

e

<Lists/>


# Renderização condicional: (if else)

const RenderCond = () => {
  const x = 6;
  const y = 2

  return (
    //&& = então execute isso
    <div>{x > 5 && <p>x é maior que 5</p>}

  {/*// if else: usa if ternário*/}
    {x > 5 ? <p>x é um número alto</p> : <p>x é um número baixo</p>}
    
    </div>

  );
}

export default RenderCond;

# Props

ao colocar props dentro do parârenteses da função, o componente fica aceitando propriedades. Que devem ser passadas lá onde implementa o componente<RenderCond x={5}/>. e esse props vira um objeto. pra acessar coloca props.x

então tem que ir onde ele foi importado e colocar a propriedade. 

É possível ter mais de uma props, então é necessário desestruturar. Nesse caso, no lugar de props coloca só a propriedade que eu quero usar, nesse exemplo, o x. Se tiver mais de uma propriedade separa por , 
ex.: 


const RenderCond = ({x, y}) => {
  
  return (
    //&& = então execute isso
    <div>{x > 5 && <p>x é maior que 5</p>}

  {/*// if else: usa if ternário*/}
    {x > 5 ? <p>x é um número alto</p> : <p>x é um número baixo</p>}
      <p> O valor de Y é: {y}</p>
    </div>

  );
}

export default RenderCond;



# fragment

com o fragment é possível colocar todos os elementos filhos em uma tag vazia, pra que a div não atrapalhe o código.

const Fragment = () => {
  return (
    <>
      <p>Primeiro</p>
      <p>Segundo</p>
    </>
  )
}

export default Fragment

lembra de importar ele:

import Fragment from "./...."

<Fragment />


#children:

Usa uma tag div pra abraçar outros elementos filhos

No arquivo do componete:
const Container = ({children}) => {
  return (
    <div className="container">
      {/*o children aqui tá representando os elementos que estão lá dentro da tag HTML do componente*/}
      {children}
    </div>
  )
}

export default Container;

No arqui app.js:

import Container from './components/Container.js'

<Container>
        <h1>Este é filho do container</h1>
      </Container>


OBS.: para parar de executar o react é só apertar ctrl+c no terminal