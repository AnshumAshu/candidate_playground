const jwt =require("jsonwebtoken");
async function genrateJWT(payload){
    let token =await jwt.sign({payload},"myname is ashu",{ expiresIn:'1h',algorithm: 'HS256'});
    return token
}
async function verifyJWT(token){
    try{
        let isValid=await jwt.verify(token,"myname is ashu");
        console.log(isValid);
        return true;
    }
    catch(err){
        return false;
    }
}
module.exports={genrateJWT,verifyJWT};