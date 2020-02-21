import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Categories } from "./Categories";
@Entity()
export class Products {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({name:'product'})
    product: string; 

    @Column({name:'categoriesId'})
    categoriesId: number;

    @ManyToOne(type => Categories, categories => categories.productDetail)
    categories: Categories;
    
    @Column()
    createddate: Date;

    @Column()
    updateddate: Date;
}