# 🚀 Carol-So-DesafioXP-BackEnd 🚀
<p align="left"> 
  
 ### Oie, eu sou a Carol, mãe da Helena e bem vindo ao repositório do Desafio da XP!!!!<br>
 Neste projeto foi desenvolvida uma API para simular uma aplicação bancária, onde trouxemos endpoints com informações da <br>
 pessoa cliente e dos ativos disponiveis para compra e venda.
 Pela primeira vez, desenvolvi um projeto do 0 total, um grande desafio para conciliar a rotina de Trybe e de mãe solo, com muita dedicação e gestão de tempo
 construi algo me deixa muito feliz, pois, se há nove meses me dissessem que sairia do looping for para criar uma aplicação backEnd, 
 provavelmente a Carol do passado não acreditaria. Muita vontade de aprender e o sonho grande de entrar nesse mundo DEV, me fizerem segurar firme 
 nessa caminhada. Gostaria de ter tido mais disponibilidade para completar a aplicação, e fazê-la na sua melhor forma, em todos os detalhes, do código limpo
 às biblbiotecas de segurança, ainda temos um caminho a ser trilhado e a mente aberta para os novos aprendizados!
 





# O que foi pedido:
 ⬛ Requisições para investimento -- POST (/investimentos/comprar)
• O endpoint recebe como entradas o código do ativo, a quantidade de ações compradas,
número da conta compradora
Descrição dos Campos
» “codCliente” - código do cliente (identificador único)<br>
» “codAtivo” - código de identificação única do ativo <br>
» “qtdeAtivo” - quantidade de ações a serem compradas <br>
Validações a serem feitas:<br>
Quantidade de ativo a ser comprada não pode sermaior que a quantidade disponível na corretora<br>


⬛ Requisições para investimento -- POST (/investimentos/comprar)<br>
• O endpoint recebe como entradas o id do ativo, a quantidade de ações vendidas,<br>
número da conta vendedora
Descrição dos Campos
» “codCliente” - código do cliente (identificador único)<br>
» “codAtivo” - código de identificação única do ativo<br>
» “qtdeAtivo” - quantidade de ações a serem vendidas<br>
Validações a serem feitas:
Quantidade de ativo a ser vendida não pode ser maior que a quantidade disponível na carteira <br>

⬛ Requisições para investimento -- GET BY CLIENT(/ativos/{cod-cliente})<br>
» “codCliente” - código de identificaçã única da pessoa cliente<br>
» “CodAtivo” - código de identificação única do ativo<br>
» “QtdeAtivo” - quantidade de ações que a pessoa cliente possui<br>
» “Valor” - Valor da ação<br>

⬛ Requisições para investimento -- GET BY ASSETS (/ativos/{cod-ativo})<br>
» “CodAtivo” - código de identificação única do ativo<br>
» “QtdeAtivo” - quantidade de ações a serem negociadas<br>
» “Valor” - Valor unitário da ação a ser negociada<br>

⬛ Requisição para depósitos e saques -- POST (/conta/deposito)<br>
» “CodCliente” - Código de identificação única da pessoa cliente<br>
» “Valor” - Valor do depósito <br>
Validações a serem feitas:<br>
» 1. Quantidade a ser depositada não poderá ser negativa ou igual a zero.<br>

⬛ Requisição para depósitos e saques -- POST (/conta/saque)<br>
» “CodCliente” - Código de identificação única da pessoa cliente<br>
» “Valor” - Valor do saque <br>
Validações a serem feitas:<br>
» 1. Quantidade a ser sacada não poderá ser maior que o saldo da conta; <br> 
não pode ser negativa e não pode ser igual a zero.

⬛ Requisição para depósitos e saques -- GET (/conta/{cod-cliente})<br>
» “CodCliente” - Código de identificação única da pessoa cliente <br>
» “Saldo” - Saldo da conta<br>




# Stacks utilizada

<p align="left"> 
  
  
  <a href="https://git-scm.com/" rel="noreferrer">
    <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/>
  </a> 
 
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> 
   <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>
  </a> 
  
  
  <a href="https://www.linux.org/" rel="noreferrer">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="40" height="40"/>
  </a>

  <a href="https://sequelize.org/"  rel="noreferrer">
    <img src="https://seeklogo.com/images/S/sequelize-logo-9A5075DB9F-seeklogo.com.png" alt="sequelize" width="40" height="40"/> </a>

<a href="https://www.mysql.com/"  rel="noreferrer">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/>
</a>

 <a href="https://nodejs.org/en/"  rel="noreferrer">
  <img src="https://www.stickersdevs.com.br/wp-content/uploads/2022/01/nodejs-logo-adesivo-sticker.png" alt="mysql" width="40" height="40"/>
</a>
</p>

# Como iniciar o projeto:

📌 Clone o repositório do gitHub através do código:

▶ git clone git@github.com:Carolyla/Carol-So-DesafioXP-BackEnd.git 

📌 Entre na branch que o projeto foi desenvolvido:

▶ git checkout Projeto-Desafio-XP-BackEnd

📌 Utilize o comando abaixo para instalar as dependências

▶ npm install

📌 Para  incializar o projeto e startar as aplicações rodar o comando :

▶ npm start



## 🔗 Links



[![github](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/Carolyla)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/carol-s%C3%B3-silva-104313223/)

---
