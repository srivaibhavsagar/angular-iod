import { Component, OnInit } from '@angular/core';
import { Recipes } from './recipes.model';
import { RecipeService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
selectedRecipe: Recipes
  constructor() { }

  ngOnInit(): void {
  }

}
