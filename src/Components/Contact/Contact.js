import React from 'react';
import emailjs from 'emailjs-com';
import { Button, FormControl, Input, InputLabel, TextField, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import './Contact.css';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      sending: false,
      success: '',
      error: ''
    }
  }
  
  handleSubmit = (e) => {
    const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_USER_NAME } = process.env;
    const { name, email, message} = this.state;
    this.setState({ sending: true });

    e.preventDefault();
    emailjs.send(REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, { name, email, message }, REACT_APP_USER_NAME)
    .then(() => {
      this.setState({ sending: false, success: "Success! Email sent!" });
      this.resetForm();
      setTimeout(() => {
        this.setState({ success: "" });
      }, 7500);
    }, () => {
      this.setState({ sending: false, error: "Email failed to send. Please try again later." });
      setTimeout(() => {
        this.setState({ error: "" });
      }, 7500);
    });
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
    const { name, email, message, sending, success, error } = this.state;
    const { contactRef } = this.props;

    return (
      <div className="contact">
        <Typography id="contact" variant="h4" gutterBottom ref={contactRef}>Contact</Typography>
        <form className="contact-form" id="contact-form" onSubmit={this.handleSubmit}>
          <div className="name-email-wrapper">
            <FormControl margin="normal" className="name-email">
              <InputLabel htmlFor="name">Name</InputLabel>
              <Input id="name" aria-label="name" type="text" value={name} onChange={(e) => this.handleChange("name", e)} required />
            </FormControl>
            <FormControl margin="normal" className="name-email">
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input id="email" aria-label="email" type="email" value={email} onChange={(e) => this.handleChange("email", e)} required />
            </FormControl>
          </div>
          <FormControl fullWidth margin="normal">
            <TextField id="message" aria-label="message" value={message} onChange={(e) => this.handleChange("message", e)} variant="outlined" label="Message" multiline rows={4} required />
          </FormControl>
          <Button className="submit-button" variant="contained" color="primary" type="submit" aria-label="submit" disabled={sending}>Submit</Button>
        </form>
        {success.length ? (
          <Alert variant="filled" severity="success" className="alert-message">{success}</Alert>
        ): ""}
        {error.length ? (
          <Alert variant="filled" severity="error" className="alert-message">{error}</Alert>
        ): ""}
      </div>
    );
  }
}
export default Contact;
