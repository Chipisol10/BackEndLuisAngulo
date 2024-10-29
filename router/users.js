import { Router } from "express";
import {allUser,userByRole} from "../controllers/users/read.js";
import { create } from "../controllers/users/create.js";
import { update } from "../controllers/users/update.js";

const router = Router()

router.get('/all',allUser)
router.get('/role/:x',userByRole)
router.post('/create',create)
router.put ('/update',update)

export default router