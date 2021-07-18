import createStackNavigator from 'react-navigation-stack';
import * as Screens from "../screens/";
import { createAppContainer } from "react-navigation";

const MealsNavigation = createStackNavigator({
    Categories: Screens.Categories,
    CategoryMeals: Screens.CategoryMeals,
    Favorites: Screens.Favorites,
    MealDeatail: Screens.MealDeatail,
    Filters: Screens.Filters
})

export default createAppContainer(MealsNavigation)
