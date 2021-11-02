// const db = require('../config/db.config.js');
// const Cliente = db.Cliente;
// const Comments = db.Comments;
// const Likes = db.Likes;
// const bcrypt = require("bcrypt")
// const { sign } = require("jsonwebtoken")


// var xFrameOptions = require('x-frame-options');
// const { Users } = require('../config/db.config.js');
// var middleware = xFrameOptions(headerValue = 'Deny')

// //--------------------------------------------------->Cliente
// exports.createCliente = (req, res) => {
//     let cliente = {};

//     try{
//         // Capturando os dados do body e criando a constante cliente.
//         cliente.nome = req.body.nome;
//         cliente.email = req.body.email;
//         cliente.idade = req.body.idade;
    
//         // Salvar cliente no banco de dados.
//         Cliente.create(cliente, 
//                           {attributes: ['id', 'nome', 'email', 'idade']})
//                     .then(result => {    
//                       res.status(200).json(result);
//                     });
//     }catch(error){
//         res.status(500).json({
//             message: "Fail!",
//             error: error.message
//         });
//     }
// }

// exports.getCliente = (req, res) => {
//     Cliente.findByPk(req.params.id, 
//                         {attributes: ['id', 'nome','email', 'idade']})
//         .then(cliente => {
//           res.status(200).json(cliente);
//         }).catch(error => {
//           // mostrar no console a mensagem de erro.
//           console.log(error);

//           res.status(500).json({
//               message: "Error!",
//               error: error
//           });
//         })
// }

// exports.clientes = (req, res) => {
//     // Buscar todos os registros da tabela 
//     try{
//         Cliente.findAll({attributes: ['id', 'nome', 'email', 'idade']})
//         .then(clientes => {
//             res.status(200).json(clientes);
//         })
//     }catch(error) {
//         // log on console
//         console.log(error);

//         res.status(500).json({
//             message: "Error!",
//             error: error
//         });
//     }
// }

// exports.deleteCliente = async (req, res) => {
//     try{
//         let clienteId = req.params.id;
//         let cliente = await Cliente.findByPk(clienteId);

//         if(!cliente){
//             res.status(404).json({
//                 message: "Não existe nenhum cliente com o Id: " + clienteId,
//                 error: "404",
//             });
//         } else {
//             await cliente.destroy();
//             res.status(200).json('cliente deletado com sucesso.');
//         }
//     } catch(error) {
//         res.status(500).json({
//             message: "Error -> Não foi possível deletar o cliente com o Id:" + req.params.id,
//             error: error.message
//         });
//     }
// }

// exports.updateCliente = async (req, res) => {
//     try{
//         let cliente = await Cliente.findByPk(req.body.id);
    
//         if(!cliente){
            
//             res.status(404).json({
//                 message: "Não foi encontrando nenhum cliente com id: " + clienteId,
//                 error: "404"
//             });
//         } else {    
            
//             let updatedObject = {
//                 nome: req.body.nome,
//                 email: req.body.email,
//                 idade: req.body.idade,
//             }
//             let result = await Cliente.update(updatedObject,
//                               { 
//                                 returning: true, 
//                                 where: {id: req.body.id},
//                                 attributes: ['id', 'nome', 'email', 'idade']
//                               }
//                             );

//             // return the response to client
//             if(!result) {
//                 res.status(500).json({
//                     message: "Error -> Não houve alteração no cliente Id: " + req.params.id,
//                     error: "Não pode ser alterado",
//                 });
//             }

//             res.status(200).json(result);
//         }
//     } catch(error){
//         res.status(500).json({
//             message: "Error -> Não pôde ser alterado o cliente com o id: " + req.params.id,
//             error: error.message
//         });
//     }
// }

// //-------------------------------------------------->
// //                      Comments
// //--------------------------------------------------> 

// exports.getComment = async (req, res) => {    //Nesse método é buscado na tabela comments, todos os registro pelo ID da tabela post que estão ligado ao comentario.
//    const postId = req.params.postId;
//    const comments = await Comments.findAll({ where: { PostId: postId } })
//    res.json(comments);
// }

// exports.createComment =  async (req, res) => {
//     const comment = req.body;
//     const username = req.user.username;

//     comment.username = username;        
//     await Comments.create(comment);
//     res.json(comment);
// }

// exports.deleteComment = async (req,res) => {
//     const commentId = req.params.commentId

//     await Comments.destroy({where:{
//         id: commentId,
//     }});
//     res.json("Excluído com sucesso!")
// };

// //-------------------------------------------------->
// //                      Users
// //--------------------------------------------------> 
// exports.createUser = async (req,res)=>{
//     const { username, password } = req.body;
//     bcrypt.hash(password, 10).then((hash)=>{
//         Users.create({
//             username: username,
//             password: hash,
//         })
//         res.json("Success!");
//     });
// };

// exports.login = async (req,res) => {
//     const {username,password} = req.body;

//     const user = await Users.findOne({ where: {username: username}});
//         if(!user) res.json({error: "Usuário não existe!"});

//         bcrypt.compare(password, user.password).then(async(match)=>{
//             if(!match) res.json({error: "Usuário ou senha incorretos!"});

//             const accessToken = sign(
//                 {username: user.username, id: user.id}, "importantsecret");
//             res.json({token:accessToken, username: username, id: user.id});
//         });

// };

// exports.auth = async (req,res)=>{
//     await res.json(req.user)
// }

// //-------------------------------------------------->
// //                      Likes
// //--------------------------------------------------> 
// exports.like = async (req,res)=>{
//     const { PostId } = req.body;
//     const UserId = req.user.id;

//     const found = await Likes.findOne({     //Faz a checagem
//         where: {PostId: PostId, UserId: UserId}
//      });
//     if(!found) {                    //Senão achar nada, dá o LIKE na postagem
//         await Likes.create({PostId: PostId, UserId: UserId});
//         res.json("Like the Post!");
//     } else {
//         await Likes.destroy({
//             where: {PostId: PostId, UserId: UserId},
//         });
//         res.json("Unliked the post...")
//     }
// }


