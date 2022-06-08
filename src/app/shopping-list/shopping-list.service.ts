import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model"
export class ShoppingListService{
    ingredientsCHnaged = new EventEmitter<Ingredient[]>();
    private  ingredients: Ingredient[]=[
        new Ingredient('Deployment-1',1),
        new Ingredient('Deployment-2',2),
        new Ingredient('Deployment-3',3),
      ]

    getIngredients(){
        return this.ingredients.slice()
    }

    addIngredient(ingredient: Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsCHnaged.emit(this.ingredients.slice())
    }

    addIngredients(ingredients: Ingredient[]){
        // for (let ing of ingredients){
        //     this.addIngredient(ing)
        // }

        this.ingredients.push(...ingredients)
        this.ingredientsCHnaged.emit(this.ingredients.slice())
    }
}