const db = require('../config/db.config.js');
const Cliente = db.Cliente;
const Posts = db.Posts;
const Comments = db.Comments;

var xFrameOptions = require('x-frame-options')
var middleware = xFrameOptions(headerValue = 'Deny')

//--------------------------------------------------->Cliente
exports.createCliente = (req, res) => {
    let cliente = {};

    try{
        // Capturando os dados do body e criando a constante cliente.
        cliente.nome = req.body.nome;
        cliente.email = req.body.email;
        cliente.idade = req.body.idade;
    
        // Salvar cliente no banco de dados.
        Cliente.create(cliente, 
                          {attributes: ['id', 'nome', 'email', 'idade']})
                    .then(result => {    
                      res.status(200).json(result);
                    });
    }catch(error){
        res.status(500).json({
            message: "Fail!",
            error: error.message
        });
    }
}

exports.getCliente = (req, res) => {
    Cliente.findByPk(req.params.id, 
                        {attributes: ['id', 'nome','email', 'idade']})
        .then(cliente => {
          res.status(200).json(cliente);
        }).catch(error => {
          // mostrar no console a mensagem de erro.
          console.log(error);

          res.status(500).json({
              message: "Error!",
              error: error
          });
        })
}

exports.clientes = (req, res) => {
    // Buscar todos os registros da tabela 
    try{
        Cliente.findAll({attributes: ['id', 'nome', 'email', 'idade']})
        .then(clientes => {
            res.status(200).json(clientes);
        })
    }catch(error) {
        // log on console
        console.log(error);

        res.status(500).json({
            message: "Error!",
            error: error
        });
    }
}

exports.deleteCliente = async (req, res) => {
    try{
        let clienteId = req.params.id;
        let cliente = await Cliente.findByPk(clienteId);

        if(!cliente){
            res.status(404).json({
                message: "Não existe nenhum cliente com o Id: " + clienteId,
                error: "404",
            });
        } else {
            await cliente.destroy();
            res.status(200).json('cliente deletado com sucesso.');
        }
    } catch(error) {
        res.status(500).json({
            message: "Error -> Não foi possível deletar o cliente com o Id:" + req.params.id,
            error: error.message
        });
    }
}

exports.updateCliente = async (req, res) => {
    try{
        let cliente = await Cliente.findByPk(req.body.id);
    
        if(!cliente){
            
            res.status(404).json({
                message: "Não foi encontrando nenhum cliente com id: " + clienteId,
                error: "404"
            });
        } else {    
            
            let updatedObject = {
                nome: req.body.nome,
                email: req.body.email,
                idade: req.body.idade,
            }
            let result = await Cliente.update(updatedObject,
                              { 
                                returning: true, 
                                where: {id: req.body.id},
                                attributes: ['id', 'nome', 'email', 'idade']
                              }
                            );

            // return the response to client
            if(!result) {
                res.status(500).json({
                    message: "Error -> Não houve alteração no cliente Id: " + req.params.id,
                    error: "Não pode ser alterado",
                });
            }

            res.status(200).json(result);
        }
    } catch(error){
        res.status(500).json({
            message: "Error -> Não pôde ser alterado o cliente com o id: " + req.params.id,
            error: error.message
        });
    }
}

//-------------------------------------------------->
//                      Posts
//--------------------------------------------------> 
exports.createPosts = (req, res) => {
    let post = {};

    try{
        // Capturando os dados do body e criando a constante cliente.
        post.titulo = req.body.titulo;
        post.descricao = req.body.descricao;
        post.video = req.body.video;
    
        // Salvar cliente no banco de dados.
        Posts.create(post, 
                          {attributes: ['id', 'titulo', 'descricao', 'video']})
                    .then(result => {    
                      res.status(200).json(result);
                    });
    }catch(error){
        res.status(500).json({
            message: "Fail!",
            error: error.message
        });
    }
}

//Buscar por PK
exports.getPost = (req, res) => {
    Posts.findByPk(req.params.id, 
                        {attributes: ['id', 'titulo','descricao', 'video', 'capa']})
        .then(post => {
          res.status(200).json(post);
        }).catch(error => {
          // mostrar no console a mensagem de erro.
          console.log(error);

          res.status(500).json({
              message: "Error!",
              error: error
          });
        })
}

//Listar
exports.posts = (req, res) => {
    // Buscar todos os registros da tabela 
    try{
        Posts.findAll({attributes: ['id', 'titulo', 'descricao', 'video', 'capa']})
        .then(posts => {
            res.status(200).json(posts);
            res.get(middleware);
        })
    }catch(error) {
        // log on console
        console.log(error);

        res.status(500).json({
            message: "Error!",
            error: error
        });
    }
}

//Delete
exports.deletePost = async (req, res) => {
    try{
        let postId = req.params.id;
        let post = await Posts.findByPk(postId);

        if(!post){
            res.status(404).json({
                message: "Não existe nenhum post com o Id: " + postId,
                error: "404",
            });
        } else {
            await post.destroy();
            res.status(200).json('Post deletado com sucesso.');
        }
    } catch(error) {
        res.status(500).json({
            message: "Error -> Não foi possível deletar o post com o Id:" + req.params.id,
            error: error.message
        });
    }
}

//Update
exports.updatePost = async (req, res) => {
    try{
        let post = await Posts.findByPk(req.body.id);
    
        if(!post){
            
            res.status(404).json({
                message: "Não foi encontrando nenhum cliente com id: " + postId,
                error: "404"
            });
        } else {    
            
            let updatedObject = {
                titulo: req.body.titulo,
                descricao: req.body.descricao,
                video: req.body.video,
            }
            let result = await Posts.update(updatedObject,
                              { 
                                returning: true, 
                                where: {id: req.body.id},
                                attributes: ['id', 'titulo', 'descricao', 'video']
                              }
                            );

            // return the response to client
            if(!result) {
                res.status(500).json({
                    message: "Error -> Não houve alteração no post Id: " + req.params.id,
                    error: "Não pode ser alterado",
                });
            }

            res.status(200).json(result);
        }
    } catch(error){
        res.status(500).json({
            message: "Error -> Não pôde ser alterado o post com o id: " + req.params.id,
            error: error.message
        });
    }
}


//-------------------------------------------------->
//                      Comments
//--------------------------------------------------> 

exports.getComment = async (req, res) => {    //Nesse método é buscado na tabela comments, todos os registro pelo ID da tabela post que estão ligado ao comentario.
   const postId = req.params.postId;
   const comments = await Comments.findAll({ where: { PostId: postId } })
   res.json(comments);
}

exports.createComment = async (req, res) =>{
    const comment = req.body;
    await Comments.create(comment);
    res.json(comment);
}