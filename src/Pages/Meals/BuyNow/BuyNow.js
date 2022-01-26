import React, { useEffect, useState } from 'react';
import { Card, Container,Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const BuyNow = () => {
    const [meal,setMeal] = useState({})

    const {id} = useParams()

    useEffect(() => {
        const url = `http://localhost:5000/meals/${id}`
        fetch(url)
         .then(res=>res.json())
          .then(data => setMeal(data));
    },[])

    return (
        <div>
            <h2>Lets buy</h2>
            <Container>
            <Row>
                <div className="col-lg-6">
                    <Card className="mb-2">
                        <Card.Img className="w-50 mx-auto img-fluid" src={meal.img} alt="" />
                        <Card.Title>{meal.name}</Card.Title>
                        <small>{meal.details}</small> <br />
                    </Card>
                </div>
                <div className="col-lg-6">
                            <h2>Hello</h2>
                </div>
                 </Row>
            </Container>
        </div>
    );
};

export default BuyNow;