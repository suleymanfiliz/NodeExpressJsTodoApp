const mongose=require("mongoose")

mongose.connect(process.env.MONGODB_CONNECTION_STRING,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("Bağlandı")
})
.catch((err)=>{
    console.log("Baglanamadı hata : "+err)
})