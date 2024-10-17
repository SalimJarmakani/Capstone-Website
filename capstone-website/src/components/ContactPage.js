import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import "./ContactPage.css";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
        file: null,
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };

    // Validation function for the form
    const validateForm = () => {
        let newErrors = {};

        const nameRegex = /^[A-Za-z\s]+$/;
        if (!formData.name.trim()) {
            newErrors.name = "Name is required.";
        } else if (!nameRegex.test(formData.name)) {
            newErrors.name = "Name must contain only letters.";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Please enter a valid email address.";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Please leave a comment.";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        const response = await fetch('http://localhost:8000/contact/send-email/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: formData.email,
                name: formData.name,
                message: formData.message,
            }),
        });
    
        if (response.ok) {
            alert('Form submitted! A confirmation email with the resume has been sent.');
        } else {
            alert('Failed to send email.');
        }
    };

    return (
        <div className="contact-page">
            {/* Navbar (Header) */}
            <AppBar position="static" sx={{ backgroundColor: "#272727" }}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        fontSize="25px"
                        fontWeight="bold"
                        sx={{
                            fontFamily: "monospace, sans-serif",
                            color: "linear-gradient(315deg, #002a5c 0%, #1a4e8c 100%);",
                            marginRight: "auto",
                        }}
                    >
                        Solution Architects
                    </Typography>
                    <Button color="inherit" component={Link} to="/">
                        Home
                    </Button>
                    <Button color="inherit" component={Link} to="/contact">
                        Contact
                    </Button>
                </Toolbar>
            </AppBar>

            {/* Main content */}
            <Container className="contact-container">
                <h1 id="contact-h1">Contact Our Team</h1>
                <p id="contact-p">
                    We'd love to hear from you! Fill out the form below to get in touch
                    and discuss sponsorship opportunities.
                </p>
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder=" " 
                            value={formData.name}
                            onChange={handleChange}
                        />
                        <label htmlFor="name">Name</label>
                        {errors.name && <span className="error-text">{errors.name}</span>}
                    </div>

                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder=" "
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <label htmlFor="email">Email</label>
                        {errors.email && <span className="error-text">{errors.email}</span>}
                    </div>

                    <div className="form-group">
                        <textarea
                            name="message"
                            id="message"
                            placeholder=" "
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                        <label htmlFor="message">Message</label>
                        {errors.message && <span className="error-text">{errors.message}</span>}
                    </div>

                    <button type="submit">Submit</button>
                </form>

                <div className="contact-info">
                    <h3>Contact Information</h3>
                    <p>Email: sponsorships@yourorganization.com</p>
                    <p>Phone: +1-555-123-4567</p>
                    <div className="social-links">
                        <h3>Connect With Us</h3>
                        <a href="https://linkedin.com/company/yourorganization">LinkedIn</a>
                        <a href="https://twitter.com/yourorganization">Twitter</a>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ContactPage;
