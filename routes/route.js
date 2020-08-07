const express=require('express');
const router=express.Router();

const controller=require("../controller/curd");


router.get("/",controller.user_details);
router.post("/create",controller.user_create);
router.put("/:id",controller.user_update);
router.delete("/:id/delete",controller.user_delete) 



module.exports=router;