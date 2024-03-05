import * as actionName from './action'
const initlaseState = {
    user: null,
    recipes: [],
    count: 1,
    categories: null,
    shoppingList: [],
}



const Reducer = (state = initlaseState, action) => {
    switch (action.type) {
        case actionName.GET_RECIPE: {
            const recipes = [...action.data]
            return {
                ...state,
                recipes,
            }
        }
        case actionName.ADD_RECIPE: {
            const recipes = [...state.recipes]
            recipes.push(action.data)
            return {
                ...state,
                recipes
            }

        }

        case actionName.UPDATE_RECIPE: {
            const updatedRecipe = action.payload;
            const recipeIndex = state.recipes.findIndex(recipe => recipe.Id === updatedRecipe.Id);

            if (recipeIndex !== -1) {
                const updatedRecipes = [...state.recipes];
                updatedRecipes[recipeIndex] = {
                    ...updatedRecipes[recipeIndex],
                    Name: updatedRecipe.Name,
                    Description: updatedRecipe.Description,
                    Img: updatedRecipe.Img,
                    Ingrident: updatedRecipe.Ingrident,
                    Instructions: updatedRecipe.Instructions,
                };

                return {
                    ...state,
                    recipes: updatedRecipes,
                };
            }
            return state;
        }
        case actionName.DELETE_RECIPE: {
            const recipeIdToDelete = action.recipeId;
            const updatedRecipes = state.recipes.filter(
                recipe => recipe.Id !== recipeIdToDelete
            );
            return {
                ...state,
                recipes: updatedRecipes,
            };
        }
        case actionName.ADD_USER: {
            const user = action.data;
            return {
                ...state,
                user
            }
        }
        case actionName.GET_CATEGORY: {

            return {
                ...state,
                categories: action.data
            }
        }
        case actionName.ADD_CATEGORY: {
            const category = [...state.categories]
            category.push(action.data)
            return {
                ...state,
                category
            }
        }
        case actionName.GET_SHOPPINGLIST: {
            const shoppingList = [...action.data]
            console.log(shoppingList)
            return {
                ...state,
                shoppingList,
            }
        }
        case actionName.GET_INGRIDIENT: {
            return {
                ...state, recipes: action.data
            }
        }


        case actionName.ADD_PRODUCT: {
            const product = [...state.shoppingList]
            product.push(action.data)
            return {
                ...state,
                product
            }
        }


        case actionName.EDIT_PRODUCT: {
            const updatedProduct = action.payload;
            const productIndex = state.shoppingList.findIndex(product => product.Id === updatedProduct.Id);

            if (productIndex !== -1) {
                const updatedProucts = [...state.shoppingList];
                updatedProucts[productIndex] = {
                    ...updatedProduct[productIndex],
                    Name: updatedProduct.Name,
                    Count: updatedProduct.Description,
                };

                return {
                    ...state,
                    shoppingList: updatedProduct,
                };
            }
            return state;
        }





        case actionName.DELETE_PRODUCT: {
            const productIdToDelete = action.Id;
            const updatedShoppingList = state.shoppingList.filter(
                product => product.Id !== productIdToDelete
            );
            return {
                ...state,
                shoppingList: updatedShoppingList,
            };
        }



        default:
            return { ...state };
    }
}
export default Reducer;

















