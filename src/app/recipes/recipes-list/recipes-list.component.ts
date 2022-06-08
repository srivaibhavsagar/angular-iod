import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipes } from '../recipes.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected= new EventEmitter<Recipes>()
  recipes: Recipes[];
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes()
  }

  onRecipesSelected(recipe: Recipes){
    this.recipeWasSelected.emit(recipe)
  }
}
