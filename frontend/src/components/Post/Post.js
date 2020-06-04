import React, {Component} from 'react'
import axios from 'axios'
import App from "../../App";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';


export class Post extends Component {
    constructor(props) {
        super(props);

        this.state = {
            info: null,
            disableDays: [new Date(2020,5, 19), new Date(2020,5, 18)]
        }
    }

    tileDisabled = ({date}) => {
        if(date <= new Date()){
            return true
        }

        return !!this.state.disableDays.find(item => {return item.getTime() == date.getTime()})
    };

componentDidMount() {
        const {id} = this.props.match.params;

    axios.get('http://127.0.0.1:6200/api/post/get', {params:{id}})
        .then(result =>{
            console.log(result);
            this.setState({info: result.data})

        })
        .catch(error =>{
            console.log(error)
        })
}

    render() {

        const{info} = this.state;
        if(info != null) {
            return (
                <div>
                    <div>
                        <img
                            className="post-header-image"
                            src={info.imageUrlList[0]}
                            alt="No image"
                        />
                    </div>
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-md-7">
                                <h1>{info.title}</h1>
                                <h5>{info.location}</h5>

                                <hr />
                                <p className="mt-1">{info.description}</p>

                                <Calendar
                                    className="mt-5"
                                    onChange={this.onChange}
                                    value={this.state.date}
                                    SelectRange
                                    tileDisabled={this.tileDisabled}
                                />
                            </div>

                            <div className="col-md-5">
                                <Card variant="outlined">
                                    <CardContent>
                                        <h5>$ {info.pricePerNight} per night.</h5>
                                        <Button className="w-100 mt-5 post-reserve-button">Reserve</Button>
                                    </CardContent>
                                </Card>
                            </div>

                        </div>
                    </div>
                </div>
            )
        }
        return(
            <div>

            </div>
        )
    }
}

export default Post;
