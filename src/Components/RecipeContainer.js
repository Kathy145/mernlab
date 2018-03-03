// Include all logic
import React, { Component } from 'react'
import axios from 'axios'
import RecipeList from './RecipeList';

// import { CLIENT_URL } from '../Constants.js'
// import RecipeDetail from './RecipeDetail'

class RecipeContainer extends Component {
    state = {
        recipes: []
    }
componentDidMount () {
	axios.get('https://recipemanagerapi.herokuapp.com/')
	.then(response => this.setState({recipes: response.data.recipes}))

}
	render () {
		let recipes = this.state.recipes
		console.log('recipes is ', recipes)
		return (
			<div> {
			// recipes.map((recipe, currentIndex) => {
			// 	return <li key={currentIndex}>{recipe.title}</li>})
				<RecipeList recipes={recipes}/>
			} 
			<h4 className="center">Add a family recipe to your cookbook!</h4>

            <form className="center" action="/recipes" method="post">
            <input className="center" type="text" name="recipe[title]" placeholder="Title"/>
            <input className="center" type="text" name="recipe[description]" placeholder="Description"/>
            <input className="center" type="text" name="recipe[ingredients]" placeholder="Ingredients"/>
            <input className="center" type="text" name="recipe[instructions]" placeholder="Instructions"/>
            <input className=" center btn waves-effect waves-light pink accent-2 "type="submit" value="Add Recipe"/>
            </form>
			</div>
			)
		}
	}
	
export default RecipeContainer
