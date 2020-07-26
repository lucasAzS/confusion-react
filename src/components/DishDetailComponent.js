import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    renderDish(dish) {
        if (dish != null)
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else return <div></div>;
    }

    renderComments(dish) {
        if (dish !== null)
            return (
                <div>
                    <h4>Comments</h4>
                    {dish.comments.map((c) => {
                        return (
                            <ul className='list-unstyled'>
                                <li key={c.id}>{c.comment}</li>
                                <li key={c.id}>
                                    -- {c.author}, {c.date}
                                </li>
                            </ul>
                        );
                    })}
                </div>
            );
        else return <div></div>;
    }

    render() {
        return (
            <div className='row'>
                <div className='col-12 col-md-5 m-1'>
                    {this.renderDish(this.props.selectedDish)}
                </div>
                <div className='col-12 col-md-5 m-1'>
                    {this.renderComments(this.props.selectedDish)}
                </div>
            </div>
        );
    }
}

export default DishDetail;
