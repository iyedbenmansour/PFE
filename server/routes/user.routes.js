const usercontrollers=require('../controllers/user.controllers')
const bookingcontrollers=require('../controllers/booking.controllers')
module.exports=app=>{
    app.get("/api/users",usercontrollers.allusers)
    app.post("/api/users",usercontrollers.createuser)
    app.put("/api/users/:id",usercontrollers.updateuser)
    app.delete("/api/users/:id",usercontrollers.deleteuser)
    app.get("/api/booking",bookingcontrollers.allbooking)
    app.post("/api/booking",bookingcontrollers.createbooking)
    app.put("/api/booking/:id",bookingcontrollers.updatebooking)
    app.delete("/api/booking/:id",bookingcontrollers.deletebooking)
}