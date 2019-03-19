import React, {Component} from 'react';
import {Card, CardText, CardBody} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './UserCard.css';

class UserCard extends Component{
    render() {
        return (
        <Card className="UserCard-Card UserCard-Card_space-top-bottom container">
            <CardBody className="UserCard-CardBody row col-12">
                <div className="UserCard-ImageBlock col-4">
                {/*    <CardImg classname="UserCard-CardImg" top src="" alt="Card image"/> */}
                <div className="UserCard-Image"></div>
                </div>
                <div className="UserCard-InfoBlock UserCard-InfoBlock_position col-8">
                    <CardText className="UserCard-CardText">
                        user name
                    </CardText>
                </div>
            </CardBody>
        </Card>
    )
    }
    
}
export default UserCard;