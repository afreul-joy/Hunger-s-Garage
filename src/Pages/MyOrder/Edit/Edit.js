import React, { useEffect, useState } from 'react';
import { Card, Container, Form, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import pic from '../../../Images/Edit/updateInfo.jpg'
import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'


const Edit = () => {
    const {id} = useParams()
    const [userData,setuserData] = useState({})

    useEffect(() => {
        const url = `http://localhost:5000/myOrders/${id}`
        fetch(url)
         .then(res=>res.json())
          .then(data => setuserData(data));
    },[])

    //form method
    
    const handleNumber =e=>{
        const phoneNumber = e.target.value;
        const updatedPhoneNumber = {...userData}
        updatedPhoneNumber.phone=phoneNumber
        setuserData(updatedPhoneNumber);
    }
    const handleAdress =e=>{
        const Address = e.target.value;
        const updatedAdress = {...userData}
        updatedAdress.address=Address
        setuserData(updatedAdress);
    }
    const handleName =e=>{
        const Name = e.target.value;
        const updatedName = {...userData}
        updatedName.name=Name
        setuserData(updatedName);
    }
    const handleEmail =e=>{
        const Email = e.target.value;
        const updatedEmail = {...userData}
        updatedEmail.email=Email
        setuserData(updatedEmail);
    }


    const handleForm=e=>{
     //   Send data server PUT API
        const url = `http://localhost:5000/myOrders/${id}`
        fetch(url,{
            method: 'PUT' ,
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify(userData)
        })
            .then(res=>res.json())
            .then(data=>{
                if(data.modifiedCount>0){ 
                      Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Updated Succesfully!',
                        showConfirmButton: false,
                        timer: 2000
                      })
                      
                    setuserData({})
                }
                
            })
            e.preventDefault();
    }

    return (
        <div>
        <h4 className="text-danger my-4">If You Want, <br /> You Can Update Information </h4>
        <br />
        <Container>
        <Row>
            <div className="col-lg-6">
                <Card className="w-75">
                    <Card.Img className=" img-fluid" src={pic} alt="" /> <br />
                    <Card.Title>Please Update Your Info</Card.Title> <br />
                </Card>
            </div>
            <div className="col-lg-6">
                <div className="d-flex justify-content-center align-items-center">
                    <Form  onSubmit={handleForm} className="w-50">
                        <Form.Control type="text" required   onChange={handleName} className="text-muted p-2  text-center" value={userData.name || ''} /> <br />
                        <Form.Control type="text" required  onChange={handleEmail} className="text-muted p-2  text-center" value={userData.email || ''} /> <br />
                        <Form.Control type="text" required onChange={handleNumber} className="text-muted p-2  text-center" value={userData.phone || ''} /> <br />
                        <Form.Control type="text" required onChange={handleAdress}  className="text-muted p-2  text-center" value={userData.address || ''} /> <br />
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
