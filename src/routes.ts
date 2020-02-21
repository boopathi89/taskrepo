import { Request, Response } from 'express'
import { ResponseWrapperUtil } from './utils/ResponseWrapperUtil'
import { CategoryController } from './controllers/CategoryController';

export class Routes {
    private categoryController = new CategoryController()
    
    public routes(app: any): void {
        app.delete('/api/deleteCategory/:categoryID', this.categoryController.deleteCategory)
    }
}