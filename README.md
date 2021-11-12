# CodeVideo
Projeto utilizando React, Node.JS,  Express e MySQL
<hr>

CodeVideo é um repositório de vídeos para estudantes de programação. Onde cada usuário pode postar seus vídeos, comentar posts de outros usuário e ainda indicar se gostou ou não.
O projeto foi dividido nas pastas backend e frontend.<br>
Backend:<br>
-Node.JS<br>
-Express<br>
-Sequelize<br>
<br>
Frontend:<br>
-React<br>
<br>
O banco de dados escolhido foi o MySQL.

<h3>Utilização:</h3>
<hr>
Após clonar o repositório, criar a base de dados DB_CODEVIDEO e ao iniciar a IDE, abrir dois terminais. No primeiro executar:

-cd .\backend\

-node server

No segundo terminar, executar:

-cd .\frontend\

-yarn start

Assim que iniciado o servidor e cliente, realizar a execução do script INSERTS_DB_CODEVIDEO.sql, onde será realizada a inserção das tabelas.
<br>

1. Registro: http://localhost:3000/registration
  Utilizar para se registrar no sistema.

2. Login: http://localhost:3000/login
  Ao se registrar, o usuário será redirecionado para a tela de login.

3. Home page: http://localhost:3000/principal
  Após realizar o login, o usuário será redirecionado para a home page do website. Na navbar podem ser vistos os links para criar um novo post, informação do usuário   logado e link para realizar logout.
  Abaixo temos uma lista com os posts de todos os usuários, em que ao clicar, será redirecionado para o link do vídeo.

4. Criar Posts: http://localhost:3000/posts/add
  No post, todos os campos são obrigatórios. Deverá ser informado o título, descrição, categoria, capa e link do vídeo. Para salvar as alterações, clicar no botão <b>Criar Post</b>

5. Após a criação do post, ao acessar a página principal é possível visualizar seu novo post. Dentro do card do post é possível clicar na imagem e acessar seu post.

  5.1. Meu post: http://localhost:3000/post/1 (Exemplo)
  Outros usuário não podem modificar seu post, somente seu usuário logado. Portanto para seu próprio usuário, serão exibidas as opções de excluir o post e clicando no título ou descrição, é possível editar o post.

5.1. Meu post: localhost:3000/post/1 (Exemplo)
    Outros usuário não podem modificar seu post, somente seu usuário logado. Portanto para seu próprio usuário, serão exibidas as opções de excluir o post e clicando     no título ou descrição, é possível editar o post.
  
5.2. Comentários: Dentro da postagem é possível criar comentários e excluir, caso o usuário logado seja o mesmo que criou o post.
 
6. Na página principal, nos posts, é possível verificar o usuário que realizou a postagem. Clicando em seu nome, o usuário é redirecionado para a listagem de posts daquele usuário.
	
6.1. Like e deslike: Dentro do card da postagem, existem botões para dar like ou deslike no post.
 
7. Meus posts: http://localhost:3000/profile/1 (Exemplo)
   Nessa página serão exibidos todos os posts do usuário. Se o usuário logado for o mesmo usuário desta página, é possível alterar sua senha.
   
7.1. Ainda dentro da listagem de posts do usuário, existe um botão para visualizar cada postagem.

8. Na navbar da página principal, em Categorias, é possível selecionar uma filtragem pela categoria das postagem.

9. Ainda na navbar, existe um botão "Logout" para deslogar o usuário.
