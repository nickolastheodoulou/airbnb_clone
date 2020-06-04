import React, {Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from "firebase";


import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';

export class Header extends Component {

    handleLogout(){
        firebase.auth().signOut()
    }

    render() {
        return (
            <div>
                <AppBar className="AppBar" position="static">
                    <Toolbar>
                        <Link to="/" style={{ marginRight: 10 }}>
                            <Typography className="AppBar-title" variant="h6" >
                                AirBnb Clone
                            </Typography>
                        </Link>



                        <div className="ml-auto">

                            <Link to="/create">
                                <Button>
                                    Create
                                </Button>
                            </Link>

                            <Link to="/list">
                                <Button>
                                    Listings
                                </Button>
                            </Link>

                            {firebase.auth().currentUser == null ?
                                <Link to="/login">
                                    <Fab className="AppBar-Login" variant="extended">
                                        Login
                                    </Fab>
                                </Link>
                                :
                                <Fab className="AppBar-Login" variant="extended" onClick={this.handleLogout}>
                                    Logout
                                </Fab>
                            }
                        </div>

                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

// export class Header extends Component {
//     render() {
//         return (
//             <div>
//                 <nav>
//                     <Link to="/" style={{ marginRight: 10 }}>Home</Link>
//                     <Link to="/login" style={{ marginRight: 10 }}>Login</Link>
//                     <Link to="/create" style={{ marginRight: 10 }}>Create</Link>
//                     <Link to="/list" style={{ marginRight: 10 }}>Listings</Link>
//                 </nav>
//
//                 <hr />
//             </div>
//         );
//     }
// }

export default Header;
