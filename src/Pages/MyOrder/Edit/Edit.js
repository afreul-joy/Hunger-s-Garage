import React, { useEffect, useState } from 'react';
import { Card, Container, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const Edit = () => {
    const {id} = useParams()
    const [meal,setMeal] = useState({})
    

    const {user}=useAuth() 
    useEffect(() => {
        const url = `http://localhost:5000/myOrders/${id}`
        fetch(url)
         .then(res=>res.json())
          .then(data => setMeal(data));
    },[])

    //form method
    const [name,setName] = useState({})
    const [phone,setPhone] = useState("")
    const [address,setAddress] = useState("")
    
    const handleNumber =e=>{
        const phoneNumber = e.target.value;
        setPhone(phoneNumber);
    }
    const handleAdress =e=>{
        const Address = e.target.value;
        setAddress(Address)
    }

    const handleName = e=>{
        
        const UpdatedName=e.target.value
        const updatedUser = {name:UpdatedName,}
        // updatedName.name=updatedName
        // console.log(name);
        setName(updatedUser)
    }
    // const handleEmail = e=>{
    //     const updatedName =e.target.value;
    //     const updatedUser = {name}
    //     updatedUser.name=updatedName
    //     // console.log(userProfile);
    // }

    const handleForm=e=>{
        e.preventDefault();
        const userData = {name:user.displayName,email:user.email,img:meal.img,productName:meal.name,productPrice:meal.price,phone:phone,address:address}
        console.log(userData);

        // Send data server POST API
        // fetch('http://localhost:5000/purchase',{
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify(userData)

        // })
        //     .then(res=>res.json())
        //     .then(data=>{
        //         if(data.insertedId)
        //        {
        //        e.target.reset();}
        //     })
    }

    return (
        <div>
        <h2 className="text-success my-2">Please Order </h2>
        {/* <h2>{userProfile}</h2>     */}
        <Container>
        <Row>
            <div className="col-lg-6">
                <Card className="mb-2">
                    <Card.Img className="w-50 mx-auto img-fluid" src={meal.img} alt="" />
                    <Card.Title>{meal.productName}</Card.Title>
                </Card>
            </div>
            <div className="col-lg-6">
                <h4 className="text-primary mb-3">Update Order</h4>
                <div className="d-flex justify-content-center align-items-center">
                    <Form  onSubmit={handleForm} className="w-50">
                        <Form.Control type="text" onChange={handleName}  className="text-muted p-2  text-center" value={`Name: ${user.displayName}`  || ''} /> <br />
                        <Form.Control type="text"  className="text-muted p-2  text-center" value={`Email: ${user.email}` || ''} /> <br />
                        <Form.Control type="text" required onChange={handleNumber} className="text-muted p-2  text-center" placeholder="Enter Your Phone Number" /> <br />
                        <Form.Control type="text" required onChange={handleAdress}  className="text-muted p-2  text-center" placeholder="Enter Your Address" /> <br />
                        <Button type="submit" variant="contained" className="mb-2" >Update</Button>    
                                        
                  {/* <ToastContainer /> */}
                    </Form>
                </div>

            </div>
             </Row>
        </Container>
    </div>
    );
};

export default Edit;