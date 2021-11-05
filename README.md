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
Para iniciar, realizar a execução do script DB_CODEVIDEO.sql, onde será criada a base de dados e inserção das tabelas.
<br>
1. Registro: http://localhost:3000/registration
  Utilizar para se registrar no sistema.

2. Login: http://localhost:3000/login
  Ao se registrar, o usuário será redirecionado para a tela de login.

3. Home page: http://localhost:3000/principal
  Após realizar o login, o usuário será redirecionado para a home page do website. Na navbar podem ser vistos os links para criar um novo post, informação do usuário   logado e link para realizar logout.
  Abaixo temos uma lista com os posts de todos os usuários, em que ao clicar, será redirecionado para o link do vídeo.

4. Criar Posts: http://localhost:3000/posts/add
  No post, todos os campos são obrigatórios. Deverá ser informado o título, descrição e link do vídeo. Para salvar as alterações, clicar no botão <b>Criar Post</b>
  Observação: A capa do post, será inserida pelo administrador.

5. Meu post: localhost:3000/post/1 (Exemplo)
  Outros usuário não podem modificar seu post, somente seu usuário logado. Portanto para seu próprio usuário, serão exibidas as opções de excluir o post e clicando no  título ou descrição, é possível alterar.
