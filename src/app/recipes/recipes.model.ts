import { Ingredient } from "../shared/ingredient.model";
import { EC2 } from "../shared/ec2.model";

export class Recipes{
    public name: string;
    public description: string;
    public imagePath: string
    public ingredients: Ingredient[];
    public ec2: EC2[]


    constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[]){
        this.name=name
        this.description=desc
        this.imagePath=imagePath
        this.ingredients=ingredients
    }

    // constructor(name: string, desc: string, imagePath: string, ec2: EC2[]){
    //     this.name=name
    //     this.description=desc
    //     this.imagePath=imagePath
    //     this.ec2=ec2
    // }
}