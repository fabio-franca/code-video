const { verify } = require("jsonwebtoken");

const validateToken = (req,res, next) =>{
    const accessToken = req.header("accessToken"); //Pega o header que vem do frontend, após se autenticar

    if(!accessToken) return res.json({error: "Usuário não está logado!"});
        try{
            const validToken = verify(accessToken, "importantsecret");
            if(validToken){
                return next();
            }
        } catch(err) {
            return res.json({error: err})
        }
};

module.exports = {validateToken};