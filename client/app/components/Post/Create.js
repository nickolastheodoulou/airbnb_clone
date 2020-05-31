import React from 'react';
import {Component} from 'react';
import axios from 'axios';

import firebase from "firebase";


class Create extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title : '',
            description: '',
            numberOfPeople: 0,
            pricePerNight: 0,
            location : ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleInputChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name] : value
        });
    }

    handleSubmit(){
        // will add the endpoint in the next lesson
        axios.post('', null, {
            params : {
                user: firebase.auth().currentUser,
                description: this.state.description,
                numberOfPeople: this.state.numberOfPeople,
                pricePerNight: this.state.pricePerNight,
                tilocationtle: this.state.location

            }
        }).then(res => {
            console.log(res);
        }).catch(error => {
            console.log(error);
        })

    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Title:
                        <input name="title" type="text" value={this.state.title} onChange={this.handleInputChange}/>
                    </label>

                    <label>
                        Description:
                        <input name="description" type="text" value={this.state.description} onChange={this.handleInputChange}/>
                    </label>

                    <label>
                        Number Of People:
                        <input name="numberOfPeople" type="number" value={this.state.numberOfPeople} onChange={this.handleInputChange}/>
                    </label>

                    <label>
                        Price Per Night:
                        <input name="pricePerNight" type="number" value={this.state.pricePerNight} onChange={this.handleInputChange}/>
                    </label>

                    <label>
                        Location:
                        <input name="location" type="text" value={this.state.location} onChange={this.handleInputChange}/>
                    </label>

                    <input type="submit" value='Submit' />
                </form>
            </div>
        )
    }


}

export default Create;
