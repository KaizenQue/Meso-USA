import React, { useState, useRef } from "react";
import Vector2 from "../../assets/Vector2.png";
import Vector1 from "../../assets/Vector1.png";
import TextField from '@mui/material/TextField';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';

const textFieldStyle = {
  '& .MuiInputLabel-root': {
    color: '#4b2c5e',
    fontSize: '20px',
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    '&.Mui-focused': {
      color: '#4b2c5e'
    }
  },
  '& .MuiInput-root': {
    fontSize: '20px',
    fontFamily: 'Helvetica',
    color: '#4b2c5e',
    '&:before': {
      borderBottomColor: 'rgba(75,44,94,0.4)'
    },
    '&:hover:not(.Mui-disabled):before': {
      borderBottomColor: 'rgba(75,44,94,0.6)'
    },
    '&:after': {
      borderBottomColor: '#4b2c5e'
    },
    '&.Mui-focused': {
      color: '#4b2c5e'
    }
  },
  '& .MuiFormHelperText-root': {
    fontSize: '14px',
    fontFamily: 'Helvetica'
  },
  '& .Mui-error': {
    color: '#d32f2f',
    '&:after': {
      borderBottomColor: '#d32f2f'
    }
  }
};

const Hometwo = () => {
  const formRef = useRef();

  // State for form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    emailId: ''
  });

  // Add state for form errors
  const [errors, setErrors] = useState({});

  // State for form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  // State for success dialog
  const [successDialogOpen, setSuccessDialogOpen] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    // Clear error when user starts typing in the field
    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: ''
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    // Check for empty fields
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    } else if (formData.firstName.length < 1) {
      newErrors.firstName = 'First name must be at least 1 characters';
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    } else if (formData.lastName.length < 1) {
      newErrors.lastName = 'Last name must be at least 1 characters';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else {
      // Accept formats like: +1 561-555-7689, (561) 555-7689, 561-555-7689, 5615557689
      const phoneRegex = /^(\+1\s?)?(\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/;
      if (!phoneRegex.test(formData.phoneNumber)) {
        newErrors.phoneNumber = 'Invalid US phone number format (e.g. +1 561-555-7689)';
      }
    }

    if (!formData.emailId.trim()) {
      newErrors.emailId = 'Email is required';
    } else {
      // Email validation with regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.emailId)) {
        newErrors.emailId = 'Please enter a valid email address';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle dialog close
  const handleCloseDialog = () => {
    setSuccessDialogOpen(false);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please correct the errors in the form');
      return;
    }

    setIsSubmitting(true);

    // EmailJS service, template and public key configuration
    const serviceId = 'service_3vbv36o';
    const templateId = 'template_7xrqzk5';
    const publicKey = '5saECdElLOrsCGmdQ';

    // Prepare template parameters to match exactly with EmailJS template variables
    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      email: formData.emailId,
      phone_number: formData.phoneNumber,
    };

    // Send email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully:', response);
        // Open success dialog instead of showing toast
        setSuccessDialogOpen(true);
        // Reset form data
        setFormData({
          firstName: '',
          lastName: '',
          phoneNumber: '',
          emailId: ''
        });
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error('Email sending error:', error);
        toast.error('Error submitting form. Please try again.');
        setIsSubmitting(false);
      });
  };

  return (
    <>
      <ToastContainer position="top-right" />

      {/* Success Dialog */}
      <Dialog
        open={successDialogOpen}
        onClose={handleCloseDialog}
        aria-labelledby="home-dialog-title"
        aria-describedby="home-dialog-description"
        PaperProps={{
          style: {
            borderRadius: '16px',
            padding: '16px',
            maxWidth: '550px'
          }
        }}
      >
        <DialogTitle id="home-dialog-title" sx={{
          fontFamily: 'Georgia',
          fontSize: '28px',
          color: '#4b2c5e',
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: '16px'
        }}>
          {"Thank You for Reaching Out!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="home-dialog-description" sx={{
            fontFamily: 'Helvetica',
            fontSize: '18px',
            color: '#4b2c5e',
            textAlign: 'center',
            marginBottom: '16px'
          }}>
            {/* <b>Thank You for Reaching Out!</b> <br></br> */}
            One of our representatives will be in touch with you shortly.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'center', padding: '16px' }}>
          <Button
            onClick={handleCloseDialog}
            sx={{
              backgroundColor: '#2e4a7d',
              color: '#f8f2e9',
              fontFamily: 'Helvetica',
              fontWeight: 'bold',
              padding: '8px 24px',
              borderRadius: '10px',
              '&:hover': {
                backgroundColor: '#243c68',
              },
            }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Desktop Version */}
      <div className="hidden md:block bg-[#FAF3EC] font-georgia m-0 p-0">
        <div className="bg-[#FAF3EC] font-georgia m-0 p-0 ">
          <div className="w-[1440px] h-[1200px] flex-shrink-0 ">
            <div className="absolute mt-32">
              <img
                src={Vector2}
                alt="Senior Couple"
                className="w-[358px] h-[364px] ml-[26%] mt-[10%]"
              />
              <img
                src={Vector1}
                alt="Family"
                className="w-[299.867px] h-[204.291px] flex-shrink-0 absolute ml-[80%] mt-[15%] transform rotate-[1.701deg] hidden md:block"
              />
            </div>
            <div className="flex flex-col items-center text-center">

              <div className="mt-[15%] ml-[30%] text-[#4B2C5E] font-feature-dlig font-georgia text-[96px] italic font-normal leading-normal">
                <h1 className="mt-32 text-justify text-[96px]">
                  <span className="italic  font-georgia">At 70,</span><br />
                  <span className="text-[#4B2C5E]/60 italic font-georgia">Every Day</span>
                  <span className="text-[#4B2C5E]/60 italic font-georgia"> Matters</span>
                </h1>
                <p className="text-[#4B2C5E] font-helvetica text-[24px] font-normal  w-[660px] h-auto ml-[10%] mt-[6%] text-left">
                You're a parent, a partner, a friend-and you deserve more than care. You deserve compassion, presence, and someone who walks beside you every step of the way.
                </p>
              </div>
            </div>

            <div className="p-[30px] mt-[0.5%] ml-[42%] w-[817px] h-[465px] text-center shadow-[0_4px_8px_rgba(0,0,0,0.1)] rounded-[20px] bg-white">
              <p className="text-[#4B2C5E] font-feature-dlig font-georgia text-[24px] italic font-normal leading-10 w-[679px] text-left h-[100px]">
                {/* <em>Our legal experts don’t just support you-they fight for you with compassion and clarity. 
                </em> */}
                <em>Your journey to justice starts here.</em>
              </p>
              {/* <p className="text-[#4B2C5E] font-georgia text-[32px] mt-[1%] italic font-normal leading-none w-[679px] text-left h-[100px]"> */}
                {/* <em> Fill out the form now.</em> */}
                {/* <em>Your journey to justice starts here.</em> */}
              {/* </p> */}
              <form ref={formRef} onSubmit={handleSubmit} className="pb-10">
                <div className="flex mt-[-3%]">
                  <div className="flex-1 px-4">
                    <TextField
                      id="firstName"
                      name="firstName"
                      label="First Name"
                      variant="standard"
                      fullWidth
                      value={formData.firstName}
                      onChange={handleChange}
                      error={!!errors.firstName}
                      helperText={errors.firstName}
                      sx={{
                        ...textFieldStyle,
                        marginBottom: '60px'
                      }}
                    />
                    <TextField
                      id="phoneNumber"
                      name="phoneNumber"
                      label="Phone Number"
                      variant="standard"
                      fullWidth
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      error={!!errors.phoneNumber}
                      // helperText={errors.phoneNumber || "Format: +1 561-555-7689"}
                      placeholder="+1 XXX-XXX-XXXX"
                      sx={textFieldStyle}
                    />
                  </div>

                  <div className="flex-1 px-4">
                    <TextField
                      id="lastName"
                      name="lastName"
                      label="Last Name"
                      variant="standard"
                      fullWidth
                      value={formData.lastName}
                      onChange={handleChange}
                      error={!!errors.lastName}
                      helperText={errors.lastName}
                      sx={{
                        ...textFieldStyle,
                        marginBottom: '60px'
                      }}
                    />
                    <TextField
                      id="emailId"
                      name="emailId"
                      label="Email ID"
                      variant="standard"
                      fullWidth
                      value={formData.emailId}
                      onChange={handleChange}
                      error={!!errors.emailId}
                      helperText={errors.emailId}
                      sx={textFieldStyle}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-16 inline-flex h-[71px] px-[24px] justify-center items-center gap-[10px] flex-shrink-0 rounded-[20px] bg-[#2E4A7D] text-[#F8F2E9] font-feature-dlig font-helvetica text-[20px] font-bold leading-normal ml-[-73%] border-none hover:bg-[#374A67]"
                >
                  {isSubmitting ? 'Submitting...' : 'Begin Here'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Version - updated with Material UI fields */}
      <div className="block md:hidden bg-[#FAF3EC] font-georgia p-5">
        {/* Images at the top */}
        <div className="flex flex-col items-center">
          <img
            src={Vector2}
            alt="Senior Couple"
            className="w-[70%] max-w-[280px] mt-8"
          />
          <img
            src={Vector1}
            alt="Family"
            className="w-[60%] max-w-[200px] mt-4 hidden md:block"
          />
        </div>

        {/* Text content below images */}
        <div className="mt-8 text-center">
          <h1 className="text-[#4B2C5E] text-4xl italic font-georgia">
            <span>At 70,</span><br />
            <span className="text-[#4B2C5E]/60">Every Day Matters</span>
          </h1>
          <p className="text-[#4B2C5E] font-helvetica text-lg mt-6 px-4 text-center">
          You're a parent, a partner, a friend-and you deserve more than care. You deserve compassion, presence, and someone who walks beside you every step of the way.
          </p>
        </div>

        {/* Form container - centered below text with Material UI components */}
        <div className="p-6 rounded-[20px] mt-8 bg-white shadow-md mx-auto max-w-[500px]">
          <p className="text-[#4B2C5E] font-georgia text-xl italic mb-6 text-center">
            {/* <em>We're here to walk beside you every step of the way not just as professionals, but as people who care</em> */}
            <em>Your journey to justice starts here.</em>
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="">
            <TextField
              id="firstName-mobile"
              name="firstName"
              label="First Name"
              variant="standard"
              fullWidth
              value={formData.firstName}
              onChange={handleChange}
              error={!!errors.firstName}
              helperText={errors.firstName}
              sx={{
                ...textFieldStyle,
                marginBottom: '24px'
              }}
            />

            <TextField
              id="lastName-mobile"
              name="lastName"
              label="Last Name"
              variant="standard"
              fullWidth
              value={formData.lastName}
              onChange={handleChange}
              error={!!errors.lastName}
              helperText={errors.lastName}
              sx={{
                ...textFieldStyle,
                marginBottom: '24px'
              }}
            />

            <TextField
              id="phoneNumber-mobile"
              name="phoneNumber"
              label="Phone Number"
              variant="standard"
              fullWidth
              value={formData.phoneNumber}
              onChange={handleChange}
              error={!!errors.phoneNumber}
              // helperText={errors.phoneNumber || "Format: +1 561-555-7689"}
              placeholder="+1 XXX-XXX-XXXX"
              sx={{
                ...textFieldStyle,
                marginBottom: '24px'
              }}
            />

            <TextField
              id="emailId-mobile"
              name="emailId"
              label="Email ID"
              variant="standard"
              fullWidth
              value={formData.emailId}
              onChange={handleChange}
              error={!!errors.emailId}
              helperText={errors.emailId}
              sx={textFieldStyle}
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 mt-8 rounded-[20px] bg-[#2E4A7D] text-[#F8F2E9] font-helvetica text-lg font-bold hover:bg-[#374A67]"
            >
              {isSubmitting ? 'Submitting...' : 'Begin Here'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Hometwo;