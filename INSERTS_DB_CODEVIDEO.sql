INSERT users(username,password,createdAt,updatedAt) VALUES("fabio","fabio123","2021-10-29 14:50:10","2021-10-29 14:50:10");
INSERT users(username,password,createdAt,updatedAt) VALUES("dorothy","maria1","2021-10-29 14:50:10","2021-10-29 14:50:10");

INSERT INTO CATEGORIAS VALUES (1, "Frontend","2021-10-29 14:50:10","2021-10-29 14:50:10");
INSERT INTO CATEGORIAS VALUES (2, "Backend","2021-10-29 14:50:10","2021-10-29 14:50:10");
INSERT INTO CATEGORIAS VALUES (3, "Dados","2021-10-29 14:50:10","2021-10-29 14:50:10");

INSERT INTO CAPAS VALUES (1,"HTML","../images/HTML.png","2021-10-29 14:50:10","2021-10-29 14:50:10");
INSERT INTO CAPAS VALUES (2,"CSS","../images/CSS.png","2021-10-29 14:50:10","2021-10-29 14:50:10");
INSERT INTO CAPAS VALUES (3,"JAVASCRIPT","../images/JS.png","2021-10-29 14:50:10","2021-10-29 14:50:10");
INSERT INTO CAPAS VALUES (4,"NODE","../images/NODE.png","2021-10-29 14:50:10","2021-10-29 14:50:10");
INSERT INTO CAPAS VALUES (5,"REACT","../images/REACT.png","2021-10-29 14:50:10","2021-10-29 14:50:10");
INSERT INTO CAPAS VALUES (6,"MYSQL","../images/MYSQL.png","2021-10-29 14:50:10","2021-10-29 14:50:10");




INSERT INTO posts(titulo,descricao,video,username,createdAt,updatedAt,CapaId, CategoriaId, UserId) VALUES("Curso de HTML5","Site Completo - by Gustavo Guanabara","https://www.youtube.com/embed/epDCjksKMok","fabio","2021-10-29 14:50:10","2021-10-29 14:50:10",1,1,1);
INSERT INTO posts(titulo,descricao,video,username,createdAt,updatedAt,CapaId, CategoriaId, UserId) VALUES("Curso de CSS para iniciantes","Aprenda CSS e crie um projeto","https://www.youtube.com/embed/vwbegraDXD8","fabio","2021-10-29 14:50:10","2021-10-29 14:50:10",2,1,1);
INSERT INTO posts(titulo,descricao,video,username,createdAt,updatedAt,CapaId, CategoriaId, UserId) VALUES("Curso em Vídeo JAVASCRIPT","Você sabe para que serve a linguagem JavaScript / ECMAScript? Sabe a diferença entre um cliente e um servidor para a Internet? Descubra conosco!","https://www.youtube.com/embed/Ptbk2af68e8","fabio","2021-10-29 14:50:10","2021-10-29 14:50:10",3,1,1);
INSERT INTO posts(titulo,descricao,video,username,createdAt,updatedAt,CapaId, CategoriaId, UserId) VALUES("Curso de Node.JS","O que é Node.JS, está é a primeira aula do nosso novo curso de Node.js, nesta aula você vai entender o que é esta tecnologia derivada do Javascript.","https://www.youtube.com/embed/LLqq6FemMNQ","dorothy","2021-10-29 14:50:10","2021-10-29 14:50:10",4,2,2);
INSERT INTO posts(titulo,descricao,video,username,createdAt,updatedAt,CapaId, CategoriaId, UserId) VALUES("ReactJS - Introdução","Vídeo de introdução para React - by João Ribeiro","https://www.youtube.com/embed/C8M94QLJy0o","fabio","2021-10-29 14:50:10","2021-10-29 14:50:10",5,1,1);
INSERT INTO posts(titulo,descricao,video,username,createdAt,updatedAt,CapaId, CategoriaId, UserId) VALUES("Curso MySQL","O que é um Banco de Dados?","https://www.youtube.com/embed/Ofktsne-utM","fabio","2021-10-29 14:50:10","2021-10-29 14:50:10",6,3,1);