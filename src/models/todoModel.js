const mongosee=require("mongoose")

const todoShecema=new mongosee.Schema({
    name :{
        type:String,
        require:true,
        trim:true
    },
    description :{
        type:String,
        require:true,
        trim:true
    },
    complated :{
        type:Boolean,
        default:false
    }
},{collection:"Todo",timestamps:true})

const todo=mongosee.model("Todo",todoShecema)

module.exports=todo