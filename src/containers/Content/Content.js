import React, { Component } from 'react';
import axios from '../../axios-http';
import Card from '../../components/Card/Card'
import classes from './Content.module.css'

class Content extends Component {

    state = {
        photos: []
    }

    componentDidMount() {
        axios.get('/search?q=pizza').then(response => {
            const photos = response.data.recipes.slice(0, 2);
            console.log(photos)
            this.setState({photos: photos});
        });
    }

    render() {
        return (
            <div className={classes.Content}>
                {this.state.photos.map(obj => <Card key={obj.recipe_id} title={obj.title} img={obj.image_url} publisher={obj.publisher}></Card>)}
            </div>
        )
    }

}

export default Content;
