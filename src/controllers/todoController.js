const { get } = require("mongoose")
const todo=require("../models/todoModel")

const todoAdd= async (req,res)=>{
    

    try {
    const _todo= await todo.findOne({name:req.body.name})
    if(_todo){
        return res.status(400).json({
            success:false,
            message:"Bu isimde kayıt mevcut"
        })
    }

        const todoAdd=new todo(req.body)


        await todoAdd.save()
         .then(()=>{
            return res.status(201).json(todoAdd)
         })
         .catch((err)=>{
            res.status(400).json({
                success:false,
                message:"Kayıt olustururken hata çıktı" + err
            })
         })

        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"Kayıt olusturulamadi"
        })
    }
    
}

const getAll= async (req,res)=>{

    try {
        const todoGetAll= await todo.find({})
        console.log(todoGetAll)
        return res.status(200).json({
            success:true,
            data:todoGetAll
        })
    } catch (error) {

        console.log("Veriler getirilemedi"+err)
        return res.status(500).json({
            success:true,
            message:"Kayıt getirilemedi"
        })
        
    }

}

const todoUpdate= async(req,res)=>{
    const{id}=req.params
    try {
        const update=await todo.findByIdAndUpdate(id,req.body)
        if(update){
            return res.status(200).json({
                success:true,
                message:"Güncelleme Tamam"
            })
        }else{
            return res.status(400).json({
                success:false,
                message:"Kayıt Guncellenemedi"
            })
        }
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Güncelleme Yapılamadı"
        })
    }

}
const todoDelete= async(req,res)=>{
    const{id}=req.params
    try {
        const _delete=await todo.findByIdAndDelete(id)
        if(_delete){
            return res.status(200).json({
                success:true,
                message:"Kayıt Silindi"
            })
        }else{
            return res.status(400).json({
                success:false,
                message:"Kayıt Silinmedi"
            })
        }
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Kayıt Silinemedi" + error
        })
    }

}

const todoGet=async (req,res)=>{
    const{id}=req.params
    try {
        const toGet=await todo.findById(id)
        if(toGet)
        {
         return res.status(200).json(toGet)
        }else{
            return res.status(200).json({
            success:false,
            message:"Kayıt Bulunamadı"
            })
        }
        
    } catch (error) {
        
    }

}

module.exports={
    todoAdd,
    getAll,
    todoUpdate,
    todoDelete,
    todoGet
}