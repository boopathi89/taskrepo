import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Products } from "./Products";
@Entity()
export class Categories {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({name:'category'})
    category: string;

    @OneToMany(type => Products, products => products.categoriesId)
    productDetail: Products[];

    @Column({select: false})
    createddate: Date;

    @Column({select: false})
    updateddate: Date;

}