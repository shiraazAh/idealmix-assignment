import React, { Component } from 'react';
import axios from '../../axios-pizza';
import Card from '../../components/Card/Card';
import withErrorHandler from '../../hoc/withErrorHandler/withError'
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './Pizza.module.css'

class Content extends Component {

    //Pizza Container State
    state = {
        pizzas: [],
        error: null,
        loader: true
    }

    //Http Request, and storing response to state or recieving error
    componentDidMount() {
        axios.get('/search?q=pizza')
            .then(response => {
                const pizzas = response.data.recipes.slice(0, 2);
                this.setState({pizzas: pizzas, loader: false})
            })
            .catch(error => {
                this.setState({error: error})
            });
        };

    render() {

        // If there is an error , print nothing
        let cards = this.state.error ? null : <div className={classes.spinner}><Spinner/></div> 

        //When spinner stops, Load the Cards 
        if(!this.state.loader) {
            cards = this.state.pizzas.map(obj => <Card key={obj.recipe_id} title={obj.title} img={obj.image_url} publisher={obj.publisher}></Card>)
        } 
        
        //Render the cards
        return (
            <div className={classes.Pizza}>
                {cards}
            </div>
        )
    }

}

export default withErrorHandler(Content, axios);
