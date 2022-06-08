import { Injectable } from "@angular/core"
import { Ingredient } from "../shared/ingredient.model"
import { ShoppingListService } from "../shopping-list/shopping-list.service"
import { Recipes } from "./recipes.model"

@Injectable()
export class RecipeService{
    private recipes: Recipes[]=[
        new Recipes(
            'Request A Server in Amazon Cloud',
            'Fill the form to provision a EC2 VM',
            'https://miro.medium.com/max/287/0*at6076vHFC6hPbP0.jpg',[
                new Ingredient('Random',1)
            ]),
        new Recipes(
            'Request a S3 Bucket in Amazon Cloud',
            'Fill the form to create a S3 Bucket',
            'https://miro.medium.com/max/640/1*B9CIOrxdROHvtdmouQA1_A.png',[
                new Ingredient('Bread',2)
            ])
      ]

    constructor(private slService: ShoppingListService){

    }

    getRecipes(){
        // console.log(this.recipes.slice(0))
        return this.recipes.slice()
    }

    addIngredientsToShoppingList(ingredient: Ingredient[]){
        console.log(ingredient)
        // this.slService.addIngredients(ingredient)
    }
}