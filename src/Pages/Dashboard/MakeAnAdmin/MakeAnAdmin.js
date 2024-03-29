import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Alert, Button } from "@mui/material";


const MakeAnAdmin = () => {
  const [email, setEmail] = useState("");
  const [success,setSuccess] = useState(false)
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  
  const handleAdminSubmit = (e) => {
    e.preventDefault();
    const user = { email };
    fetch("https://hunger-s-garage-server.vercel.app/users/admin", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
          if(data.modifiedCount){
              console.log(data);
              setSuccess(true)
              setEmail('')
          }
      });
  };
  return (
    <div>
      <h2 className="text-center my-3 fw-bold" style={{ color: "#3498db" }}>Make an admin </h2> <br />
      <form onSubmit={handleAdminSubmit}>
        <TextField
          id="standard-basic"
          label="Email"
          variant="standard"
          type="email"
          sx={{width:'50%'}}
          onBlur={handleOnBlur}
        />
        <Button type="submit" variant="contained">
          Make Admin
        </Button>
      </form>
      <br />
      <br />
      {success && <Alert severity="success">Make an admin successfully</Alert>}
    </div>
  );
};

export default MakeAnAdmin;
