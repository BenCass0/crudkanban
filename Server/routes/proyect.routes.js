import { Router } from "express";
import { createProyect ,getProyect,getProyects,updateProyect,deleteProyect} from "../controllers/proyect.controllers.js";
const router=Router();

//CRUD for proyects
router.get("/proyect",getProyects)

router.get("/proyect/:id",getProyect);

router.post("/proyect",createProyect);

router.put("/proyect/:id",updateProyect);

router.delete("/proyect/:id",deleteProyect);

/*CRUD for columns
router.get("/columns/:id",getProyect);

router.post("/columns",createProyect);

router.put("/columns/:id",updateProyect);

router.delete("/columns/:id",deleteProyect);

//CRUD for tasks
router.get("/task/:id",getProyect);

router.post("/task",createProyect);

router.put("/task/:id",updateProyect);

router.delete("/task/:id",deleteProyect);*/
export default router;