
import express from "express";
import { adminHome, adminProfile, createAdmin, deleteAdmin, editAdmin, getAllAdmin, getSingleAdmin } from "../controllers/adminControllers.js";
import authLogin from "../controllers/authCheck.js";
import loginCheck from "../middleware/adminCheck.js";

const router = express.Router();



router.post('/login',authLogin);
router.get('/home',loginCheck,adminHome);
router.get('/profile',loginCheck,adminProfile);
router.get('/', getAllAdmin).post('/',createAdmin);
router.get('/:id',getSingleAdmin).delete('/:id',deleteAdmin).patch('/:id',editAdmin);


export default router