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
    const [phone,setPhone] = useState("")
    const [address,setAddress] = useState("")
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    
    const handleNumber =e=>{
        const phoneNumber = e.target.value;
        setPhone(phoneNumber);
    }
    const handleAdress =e=>{
        const Address = e.target.value;
        setAddress(Address)
    }
    const handleName =e=>{
        const Name = e.target.value;
        setName(Name)
    }
    const handleEmail =e=>{
        const Email = e.target.value;
        setEmail(Email)
    }


    const handleForm=e=>{
        e.preventDefault();
        const userData = {name:user.displayName,email:user.email,img:meal.img,productName:meal.name,phone:phone,address:address}
        console.log(userData);

        // Send data server PUT API
        const url = `http://localhost:5000/myOrders/${id}`
        fetch(url,{
            method: 'PUT' ,
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(userData)
        })
            .then(res=>res.json())
            .then(data=>{
                if(data.modifiedCount>0){
                    alert("Updated Successfully")
                    setMeal({})
                }
                
            })
    }

    return (
        <div>
        <h4 className="text-danger my-4">If You Want, <br /> You Can Update Information </h4>
        
        <Container>
        <Row>
            <div className="col-lg-6">
                <Card className="mb-2">
                    <Card.Img className="w-50 mx-auto img-fluid" src={meal.img} alt="" />
                    <Card.Title>{meal.productName}</Card.Title>
                </Card>
            </div>
            <div className="col-lg-6">
                <h5 className="text-primary mb-3">User Information</h5>
                <div className="d-flex justify-content-center align-items-center">
                    <Form  onSubmit={handleForm} className="w-50">
                        <Form.Control type="text" readOnly required   onChange={handleName} className="text-muted p-2  text-center" defaultValue={user?.displayName} /> <br />
                        <Form.Control type="text" readOnly required  onChange={handleEmail} className="text-muted p-2  text-center" defaultValue= {user?.email} /> <br />
                        <Form.Control type="text" required onChange={handleNumber} className="text-muted p-2  text-center" defaultValue= {meal.phone} /> <br />
                        <Form.Control type="text" required onChange={handleAdress}  className="text-muted p-2  text-center" defaultValue= {meal.address} /> <br />
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