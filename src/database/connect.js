const mongoose = require ('mongoose')

const connevtToDatabase= async()=>{
    await mongoose.connect(
      'mongodb+srv://matheus_ismarsi_db_user:<db_password>@saasbarbearia.lu8gjza.mongodb.net/?retryWrites=true&w=majority&appName=SaasBarbearia',(error)=>{
        if(error){
            return console.log('Ocorreu um erro aose conectar ao banco de dados ',error)
        }

        return console.log('Conexão bem-sucedida')
      }
    );
}


module.exports = connevtToDatabase