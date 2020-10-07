import React from 'react';
import './Contact.css';
import { Button, FormControl, Input, InputLabel, TextField, Typography } from '@material-ui/core';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:3000/send', {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      }).then(
      (response) => (response.json())
        ).then((response)=> {
      if (response.status === 'success') {
        alert("Message Sent."); 
        this.resetForm()
      } else if(response.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }

  resetForm = () => {
    this.setState({
      name: '',
      email: '',
      message: ''
    });
  }

  handleChange = (type, e) => {
    let stateChange = {};
    stateChange[type] = e.target.value;
    this.setState(stateChange);
  }

  render () {
    const { name, email, message } = this.state;
    return (
      <div className="contact">
        <Typography variant="h4" gutterBottom>Contact</Typography>
        <form className="contact-form" id="contact-form" onSubmit={this.handleSubmit}>
          <div className="name-email-wrapper">
            <FormControl margin="normal" className="name-email">
              <InputLabel htmlFor="name">Name</InputLabel>
              <Input id="name" aria-label="name" type="text" value={name} onChange={(e) => this.handleChange("name", e)} />
            </FormControl>
            <FormControl margin="normal" className="name-email">
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input id="email" aria-label="email" type="email" value={email} onChange={(e) => this.handleChange("email", e)} />
            </FormControl>
          </div>
          <FormControl fullWidth margin="normal">
            <TextField id="message" aria-label="message" value={message} onChange={(e) => this.handleChange("message", e)} variant="outlined" label="Message" multiline rows={4} />
          </FormControl>
          <Button className="submit-button" variant="contained" color="primary" type="submit" aria-label="submit">Submit</Button>
        </form>
      </div>
    );
  }
}
export default Contact;
