const thing=require("../models/booking.models")


module.exports.allbooking=(req,res)=>{
    thing.find()
    .then(allbooking=>res.json(allbooking))
    .catch((err)=>res.json(err))
}

module.exports.createbooking=(req,res)=>{
    thing.create(req.body)
    .then(createdbooking=>res.status(200).json(createdbooking ))
    .catch((err)=>res.status(400).json(err))
}

module.exports.deletebooking=(req,res)=>{
    thing.deleteOne({_id:req.params.id})
    .then(deletedbooking=>res.json(deletedbooking))
    .catch((err)=>res.json(err))
}   

module.exports.updatebooking= (req, res) => {
    thing.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    })
      .then((updatedbooking) =>res.status(200).json(updatedbooking))
      .catch((err)=>res.status(400).json(err))
  };