import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Meals = () => {
    const [foods, setFoods] = useState([])
    useEffect(() => {
        const url = `https://hungers-garage.herokuapp.com/meals`
        fetch(url)
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])

    return (
        <Container>
        <Row lg={3} xs={1} className="g-4 ">

            {
                foods.map(food => <Col
                    key={food.name}
                >
                    <Card className="mb-2">
                        <Card.Img className="w-50 mx-auto" src={food.img} alt="" />
                        <Card.Title>{food.name}</Card.Title>
                        <small>{food.details.slice(0, 40)}</small>
                        <Card.Title>{food.price}</Card.Title>
                        <Link to={`/meals/${food._id}`} style={{textDecoration: "none"}}><Button variant="contained" color="secondary" size="medium" className="mb-2" >Buy Now</Button></Link>
                    </Card>
                      
                </Col>)
            }
        </Row>
    </Container>
    );
};

export default Meals;


