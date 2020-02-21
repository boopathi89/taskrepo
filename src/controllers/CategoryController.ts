import { CategoryService } from "./../services/CategoryService";
import { Request, Response } from "express";
import { ResponseWrapperUtil } from "../utils/ResponseWrapperUtil";
import { AppConstants } from "../config/AppConstants";

export class CategoryController {
  categoryService: CategoryService = new CategoryService();
  constructor() {}
  deleteCategory = (req: Request, res: Response) => {
    this.categoryService.deleteCategory(req).then(
      result => {
        ResponseWrapperUtil.sendSuccessResponse(res, {
          responseCode: AppConstants.RESPONSE_CODES.SUCCESS,
		  data: result,
          message: "Category deleted successfully"
        });
      },
      err => {
        ResponseWrapperUtil.sendErrorResponse(res, {
          responseCode: AppConstants.RESPONSE_CODES.FAIL,
          message: "Error in deleteing category",
          error: err.message
        });
      }
    );
  };
}
