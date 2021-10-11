const {response, request}=require('express')


const isAdmin=(req=request, res=response, next)=>{
   const {role, name} = req.user;

   if(role!=="ADMIN_ROLE"){
      return res.status(401).json({
           msg:`${name} don't have permission to delete user`
       })
   }
   next();
}


const haveRole=(...roles)=>{
    return (req=request, res=response, next)=>{
   const role=req.user.role;
   console.log(role)
      if(!roles.includes(role)){
          res.status(401).json({
              msg:`The user ${role} is not valid`
          })
      }
      next();
    }
 

}
module.exports={
    isAdmin,
    haveRole
}