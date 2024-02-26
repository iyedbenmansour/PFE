const thing=require("../models/user.models")


module.exports.allusers=(req,res)=>{
    thing.find()
    .then(allusers=>res.json(allusers))
    .catch((err)=>res.json(err))
}

module.exports.createuser=(req,res)=>{
    thing.create(req.body)
    .then(createduser=>res.status(200).json(createduser ))
    .catch((err)=>res.status(400).json(err))
}

module.exports.deleteuser=(req,res)=>{
    thing.deleteOne({_id:req.params.id})
    .then(deleteduser=>res.json(deleteduser))
    .catch((err)=>res.json(err))
}   

module.exports.updateuser = (req, res) => {
    thing.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    })
      .then((updateduser) =>res.status(200).json(updateduser))
      .catch((err)=>res.status(400).json(err))
  };