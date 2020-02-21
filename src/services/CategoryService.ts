import { getManager, JoinColumn } from "typeorm";
import { Categories } from "../models/entities/Categories";
import { Products } from "../models/entities/Products";
  
export class CategoryService {
    constructor() { }
    async deleteCategory(_req: any) {
        let inputData 	=	_req.body;
		try {
			//Selecting the category based products
			const productResult	=	await getManager().getRepository(Products).find({relations: ["categories"],
			where: 
				{
					categoriesId: inputData.categoryID
				}				
			});
			let deletedProducts = [];
			//Deleting the category
			await getManager().createQueryBuilder().delete().from(Categories).where("id = :id", { id: inputData.categoryID }).execute();
			//Pushing the deleted products into array
			for (let i = 0; i < productResult.length; i++) {
				deletedProducts.push(productResult[i].product);
			}
			return deletedProducts;
        } catch (err) {
            throw err;
        }
    }
}