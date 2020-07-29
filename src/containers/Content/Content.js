import React, { Component } from 'react';
import axios from '../../axios-http';
import Card from '../../components/Card/Card'
import Spinner from '../../components/UI/Spinner/Spinner'
import classes from './Content.module.css'

class Content extends Component {

    state = {
        pizzas: [],
        loader: true
    }

    componentDidMount() {
        axios.get('/search?q=pizza').then(response => {
            const pizzas = response.data.recipes.slice(0, 2);
            console.log(pizzas)
            this.setState({pizzas: pizzas, loader: false});
        });
    }

    render() {


        return (
            <div className={classes.Content}>
                {this.state.pizzas.map(obj => <Card key={obj.recipe_id} title={obj.title} img={obj.image_url} publisher={obj.publisher}></Card>)}
                {this.state.loader ? <div className={classes.spinner}><Spinner/></div> : null}
            </div>
        )
    }

}

export default Content;
