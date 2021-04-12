![recipe hero banner](./images/recipe-hero-banner.png)

## RecipeHero

[View online here!](https://recipehero2021.herokuapp.com/home)

**The Problem**:

The internet is home to thousands of recipe sites, but few allow users to review recipes, save their favorites for later, and follow their favorite recipe writers all in one place. Our app serves as a social hub for recipe lovers, from newbie cooks to experienced home chefs with their own recipes to share. User interaction drives our site, as user ratings for each recipe will be a key sorting criterion for search results, as well as a method of recommending popular recipes to users. Our app’s users can trust that our recipes have been vetted and reviewed by users like them, allowing for the growth of an online community of home cooks.

**The User Base**:

Our users include casual cooks who want to find new recipes, as well as more experienced cooks who have their own recipes to share with others.
* Our Basic Users:
  * Will be able to find new recipes to try based on search criteria like cuisine, ingredients, and health considerations.
  * Will be able to review recipes they’ve tried and save their favorite recipes to view again later.
* Our Recipe Authors:
  * Will be able to post their own recipes to the site to be tried and reviewed by other users.
  * Will be able to build a following of other users who want to read more recipes from them in the future.
* Staff:
  * Can delete a recipe posted by users if a duplicate recipe found or recipe is not authentic.

**Our Strategy**:

Our strategy is to provide our users tools to create a community online that, regardless of their cooking experience, lets them consider ratings, tips and tricks from other users like them when searching for new recipes. For example: if our user is a busy CS student who has to minimize cooking time and grocery budget, they can follow other users with similar time and money constraints and when searching a recipe, consider the reviews of users like them in terms of ease. Our users can also contribute to the community by posting reviews of recipes they have tried to add to the knowledge-base for their particular niche of users. The main strength of our solution lies in letting our users vet and rate recipes for each other.

**The Web API**: [Spoonacular API](https://spoonacular.com/food-api)

The Spoonacular API provides the most features out of any of the food recipe APIs we have researched so far. Not only does it include basic features like ingredient search, dietary restrictions, photos of the recipe, and calorie count, but it also includes premium features that other APIs don’t have, like recipe instructions. Since we’ll be creating an in-house ‘details’ page, we need to have all the features a fully fledged recipe site has - meaning that recipe instructions are a must. The Spoonacular API also has a wealth of very specific recipe information that would surely help users looking to stick to a very specific diet.
