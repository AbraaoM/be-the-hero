# Be the hero
<p align="center">
  <img src="https://raw.githubusercontent.com/AbraaoM/be-the-hero/5c867a4fb11eb7b1c0336ab5e8aba19aad8e9de9/frontend/src/assets/logo.svg">
</p>

Aplicativo desenvolvido na semana Omnistack 11 da Rocketseat.

Se trata de uma aplicação hipotética em que uma instituição de caridade faria cadastro pela plataforma web e por lá cadastraria alguma necessidade da instituição, pessoas interessadas em ajudar na causa, os heróis, teriam acesso as demandas pelo aplicativo web.

O desenvolvimento está dividido entre frontend, backend e mobile:

## Backend
Desenvolvido utilizando o Express, um framework Javascript que utiliza Node, o backend implementa um banco de dados SQLite e fornece informações deste banco por meio de uma API para serem utilizadas pelas aplicações de frontend e mobile.

## Frontend
Desenvolvida utilizando o React, um framework Javascript. O frontend utiliza Axios para acessar os endpoints e React Router DOM para organizar as rotas da aplicação. 

Foram implementadas quatro telas:
### Logon
Possibilita o acesso ao sistema por meio de um ID da instituição ou ser direcionado para o cadastro de nova conta. </br>
<img width="460" height="300" src="https://raw.githubusercontent.com/AbraaoM/be-the-hero/master/screenshots/logon.png">

### Home
Depois de logada a instituição terá acesso a tela de home, que apresenta as demandas cadastradas pela instituição e permite a exclusão delas, nesta tela também é possível fazer o cadastro de novas demandas. </br>
<img width="460" height="300" src="https://raw.githubusercontent.com/AbraaoM/be-the-hero/master/screenshots/home.png">

### Cadastro de instituição
<img width="460" height="300" src="https://raw.githubusercontent.com/AbraaoM/be-the-hero/master/screenshots/cadastro.png">

### Cadastro de demandas
<img width="460" height="300" src="https://raw.githubusercontent.com/AbraaoM/be-the-hero/5c867a4fb11eb7b1c0336ab5e8aba19aad8e9de9/screenshots/cadastro%20de%20novo%20caso.png">

## Mobile
Desenvolvido utilizando React Native, um framework Javascript. O app mobile utiliza Expo como base para desenvolvimento, Axios para acessar os endpoints do backend e React Navigation para organizar as rotas da aplicação. 

O aplicativo possui duas telas e um splash:
### Splash
<img width="164" height="340" src="https://raw.githubusercontent.com/AbraaoM/be-the-hero/master/screenshots/splash-mobile.jpeg">

### Home
A primeira tela a ser exibida para o usuário exibe todas as demandas cadastradas no banco de dados, de todas as instituições. </br>
<img width="164" height="340" src="https://raw.githubusercontent.com/AbraaoM/be-the-hero/master/screenshots/home-mobile.jpeg">

### Detalhes
Essa é a tela que apresenta detalhes sobre uma demanda listada na tela home, é possível ao herói entrar em contato com a instituição por meio de whatsapp e e-mail. </br>
<img width="164" height="340" src="https://raw.githubusercontent.com/AbraaoM/be-the-hero/master/screenshots/caso-mobile.jpeg">