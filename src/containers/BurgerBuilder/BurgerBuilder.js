import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import axios from '../../axios-burger';
import Spinner from '../../components/UI/Spinner/Spinner'
import WithErrorHandler from '../../hoc/withErrorHandler/withError'


//Price of each ingredient fo calculation of total cost of burger
const INGREDIENT_PRICE = {
    bacon: 0.7,
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3
}

class BurgerBuilder extends Component {

    //Burger Builder State
    state = {
        ingredients : null,
        totalPrice: 4,
        purchasing: false,
        loading: false,
        error: null
    }

    //Fetching Data from api, and storing data to state if available, else, set error to state.
    componentDidMount() {
        axios.get("https://react-my-burger-84fc4.firebaseio.com/ingredients.json")
            .then(response => {
                this.setState({ingredients: response.data})
            })
            .catch(error => {
                this.setState({error: error})
            })
    }

    //Function to increase the amount of ingredients and calculate the price and set the total price
    addIngredients = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {...this.state.ingredients};
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + INGREDIENT_PRICE[type];
        updatedIngredients[type] = updatedCount

        this.setState({ingredients: updatedIngredients, totalPrice: newPrice})
    } 

    //Function to decrease the amount of ingredients and calculate the price and set the total price
    removeIngredients = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0 ) return;
        const updatedCount = oldCount - 1;
        const updatedIngredients = {...this.state.ingredients};
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - INGREDIENT_PRICE[type];
        updatedIngredients[type] = updatedCount

        this.setState({ingredients: updatedIngredients, totalPrice: newPrice})
    } 


    render() {

        //To disable the Less buttons when no ingredients
        const disabledInfo = {
            ...this.state.ingredients
        }

        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        
        //If there is an error then print nothing, else show spinner until burger builder renders
        let burger = this.state.error ? null : <div style={{display: "flex",
                                                    justifyContent: "center", 
                                                    alignItems: "center",
                                                    marginTop: "200px"}}><Spinner /></div>;
        
        //If there are ingredients in state, then render the components
        if(this.state.ingredients) {
            burger = (
                <React.Fragment>
                    <Burger ingredients={this.state.ingredients}></Burger>
                    <BuildControls 
                    ingredientsAdded={this.addIngredients} 
                    ingredientsRemoved={this.removeIngredients}
                    disabledInfo={disabledInfo}
                    price={this.state.totalPrice}
                    openModal={this.purchaseHandler} />
                </React.Fragment>
            )
        }
        
        return (
            <React.Fragment>
                {burger}
            </React.Fragment>
        )
    }
}

export default WithErrorHandler(BurgerBuilder, axios);