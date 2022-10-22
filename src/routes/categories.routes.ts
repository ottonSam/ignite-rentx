import { Router } from "express";
import multer from "multer";

import {CreateCategoryController} from "../modules/cars/useCases/createCategory/CreateCategoryController";
import { listCategoryController } from "../modules/cars/useCases/listCategory";
import { ImportCategoryController } from "../modules/cars/useCases/importCategory/ImportCategoryController";

const categoriesRoutes = Router();

const upload = multer({
    dest: "./tmp",
});

const createCategoryController = new CreateCategoryController();

categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.get('/', (request, response) => {
    return listCategoryController.handle(request, response);
});

const importCategoryController = new ImportCategoryController();

categoriesRoutes.post('/import', upload.single("file"), importCategoryController.handle);

export { categoriesRoutes }; 