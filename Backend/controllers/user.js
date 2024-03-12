const  UserSchema  = require('../models/UserModel');

exports.addUser =  async (req , res) => {
    console.log("req name add"  ,req.query  , "req params" , req.params , "req body" , req.body) ;
    console.log("req name " ,  req.body.params) ;  
    const email = req.body.params ; 
    // console.log(name) ; 
    const user = UserSchema({email}) ; 

    try {
         if(!email){
            console.log("name is nulll    " , email) ; 
            return res.status(400).json({message:"Enter Email "})
         }
         await user.save()
         .then(() => {
            res.status(200).json({ message: 'User Added' });
        })
        .catch((error) => {
            console.error("Error saving user:", error);
            res.status(500).json({ message: "Server Error" });
        });

        //  res.status(200).json({message:'User Added'})
    } catch (error) {
        console.log("error" ,error);
        res.status(500).json({message:"Server Error"})
    }

}
