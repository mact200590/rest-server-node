const mongoose=require('mongoose');

const dbConnection=async()=>{
    try {
        await mongoose.connect(process.env.DB_CONNECT_LOCAL,{
            useNewUrlParser:true,
            useUnifiedTopology :true,
        });
        console.log("DataBase is online")
    } catch (error) {
        console.log(error);
        throw new Error("Error to init Data Base")
        
    }
   
} 




module.exports={
    dbConnection
}