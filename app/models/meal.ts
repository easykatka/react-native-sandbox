import {ICategories} from "./category";

export interface IMeal {
    id: string, categoryIds: string[], title: string, affordability: string,
    complexity: string, imageUrl: string,
    duration: number, ingredients: string[], steps: string[],
    isGlutenFree: boolean, isVegan: boolean,
    isVegetarian: boolean, isLactoseFree: boolean
}

export default class Meal implements IMeal{
    categoryIds
    id
    title
    affordability
    complexity
    imageUrl
    duration
    ingredients
    steps
    isGlutenFree
    isVegan
    isVegetarian
    isLactoseFree

    constructor(id: string, categoryIds: string[], title: string, affordability: string,
                complexity: string, imageUrl: string,
                duration: number, ingredients: string[], steps: string[],
                isGlutenFree: boolean, isVegan: boolean,
                isVegetarian: boolean, isLactoseFree: boolean) {
        {
            this.id = id;
            this.categoryIds = categoryIds;
            this.title = title;
            this.affordability = affordability
            this.complexity = complexity
            this.imageUrl = imageUrl
            this.duration = duration
            this.ingredients = ingredients
            this.steps = steps
            this.isGlutenFree = isGlutenFree
            this.isVegan = isVegan
            this.isVegetarian = isVegetarian
            this.isLactoseFree = isLactoseFree
        }
    }
}