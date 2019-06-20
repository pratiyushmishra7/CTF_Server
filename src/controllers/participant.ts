import { default as Participant } from "../models/participant";
import express from "express";
import initCRUD from "../utils/crudFactory";

const router = express.Router({mergeParams: true});
const [create, get, update, all] = initCRUD(Participant);

router.post('/',create);
router.get('/',all);
router.get('/:id',get);
router.put('/:id',update);

export default router;