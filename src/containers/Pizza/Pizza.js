import React, { Component } from 'react';
import axios from '../../axios-pizza';
import Card from '../../components/Card/Card';
import withErrorHandler from '../../hoc/withErrorHandler/withError'
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './Pizza.module.css'

class Content extends Component {

    state = {
        pizzas: [],
        error: null,
        loader: true
    }

    componentDidMount() {
        axios.get('/search?q=pizza')
            .then(response => {
                const pizzas = response.data.recipes.slice(0, 2);
                console.log(pizzas)
                this.setState({pizzas: pizzas, loader: false})
            })
            .catch(error => {
                console.log(error);
                this.setState({error: error})
            });
        };

    render() {

        let cards = this.state.error ? null : <div className={classes.spinner}><Spinner/></div> 

        if(!this.state.loader) {
            cards = this.state.pizzas.map(obj => <Card key={obj.recipe_id} title={obj.title} img={obj.image_url} publisher={obj.publisher}></Card>)
        } 

        return (
            <div className={classes.Pizza}>
                {cards}
            </div>
        )
    }

}

export default withErrorHandler(Content, axios);
