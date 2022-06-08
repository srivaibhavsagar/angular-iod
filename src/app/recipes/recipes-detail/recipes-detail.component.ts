import { Component,ElementRef, ViewChild,Input, OnInit , EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Recipes } from '../recipes.model';
import { RecipeService } from '../recipes.service';
import { EC2 } from 'src/app/shared/ec2.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  @Input() recipe: Recipes
  @ViewChild('nameInput') nameInputRef: ElementRef
  @ViewChild('amountInput') amountInputRef: ElementRef
  ec2Detail = new EventEmitter<EC2[]>();
  constructor(private recipeService: RecipeService,private slService: ShoppingListService) { }

  ngOnInit(): void {
  }
  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients)
  }

  onSubmit(form: NgForm){
    console.log(form)
    const ingName = form.value.deploymentName
    const ingAmount = form.value.instance
    const newIngredient =new Ingredient(ingName,ingAmount)
    this.slService.addIngredient(newIngredient)

  }
}
