import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import axios from '../../axios-burger';
import Spinner from '../../components/UI/Spinner/Spinner'
import WithErrorHandler from '../../hoc/withErrorHandler/withError'

const INGREDIENT_PRICE = {
    bacon: 0.7,
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3
}

class BurgerBuilder extends Component {

    state = {
        ingredients : null,
        totalPrice: 4,
        purchasing: false,
        loading: false,
        error: null
    }

    componentDidMount() {
        axios.get("https://react-my-burger-84fc4.firebaseio.com/ingredients.json")
            .then(response => {
                this.setState({ingredients: response.data})
            })
            .catch(error => {
                this.setState({error: error})
            })
    }

    addIngredients = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {...this.state.ingredients};
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + INGREDIENT_PRICE[type];
        updatedIngredients[type] = updatedCount

        this.setState({ingredients: updatedIngredients, totalPrice: newPrice})
    } 

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

        const disabledInfo = {
            ...this.state.ingredients
        }
        
        let burger = this.state.error ? null : <div style={{display: "flex", 
                                                                                                    justifyContent: "center", 
                                                                                                    alignItems: "center",
                                                                                                    marginTop: "200px"}}><Spinner /></div>;

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


        for(let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        
        return (
            <React.Fragment>
                {burger}
            </React.Fragment>
        )
    }
}

export default WithErrorHandler(BurgerBuilder, axios);