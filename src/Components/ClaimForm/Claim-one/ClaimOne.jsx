import React, { useState, useRef } from 'react';
import ClaimFormImg from '../../../assets/Vector.svg';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
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

const selectFieldStyle = {
  ...textFieldStyle,
  '& .MuiSelect-select': {
    fontSize: '20px',
    fontFamily: 'Helvetica',
    color: '#4b2c5e'
  },
  '& .MuiSelect-icon': {
    color: '#4b2c5e'
  },
  '& .MuiInputLabel-root': {
    color: '#4b2c5e',
    fontSize: '20px',
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    '&.Mui-focused': {
      color: '#4b2c5e'
    }
  },
  '& .MuiInput-underline:before': {
    borderBottomColor: 'rgba(75,44,94,0.4)'
  },
  '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
    borderBottomColor: 'rgba(75,44,94,0.6)'
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#4b2c5e'
  },
  '& .MuiFormHelperText-root': {
    fontSize: '14px',
    fontFamily: 'Helvetica',
    marginLeft: '0'
  }
};

const menuItemStyle = {
  fontSize: '18px',
  fontFamily: 'Helvetica',
  color: '#4b2c5e'
};

const ClaimOne = () => {
  const form = useRef();
  
  // US States data
  const usStates = [
    { value: 'AL', label: 'Alabama' },
    { value: 'AK', label: 'Alaska' },
    { value: 'AZ', label: 'Arizona' },
    { value: 'AR', label: 'Arkansas' },
    { value: 'CA', label: 'California' },
    { value: 'CO', label: 'Colorado' },
    { value: 'CT', label: 'Connecticut' },
    { value: 'DE', label: 'Delaware' },
    { value: 'FL', label: 'Florida' },
    { value: 'GA', label: 'Georgia' },
    { value: 'HI', label: 'Hawaii' },
    { value: 'ID', label: 'Idaho' },
    { value: 'IL', label: 'Illinois' },
    { value: 'IN', label: 'Indiana' },
    { value: 'IA', label: 'Iowa' },
    { value: 'KS', label: 'Kansas' },
    { value: 'KY', label: 'Kentucky' },
    { value: 'LA', label: 'Louisiana' },
    { value: 'ME', label: 'Maine' },
    { value: 'MD', label: 'Maryland' },
    { value: 'MA', label: 'Massachusetts' },
    { value: 'MI', label: 'Michigan' },
    { value: 'MN', label: 'Minnesota' },
    { value: 'MS', label: 'Mississippi' },
    { value: 'MO', label: 'Missouri' },
    { value: 'MT', label: 'Montana' },
    { value: 'NE', label: 'Nebraska' },
    { value: 'NV', label: 'Nevada' },
    { value: 'NH', label: 'New Hampshire' },
    { value: 'NJ', label: 'New Jersey' },
    { value: 'NM', label: 'New Mexico' },
    { value: 'NY', label: 'New York' },
    { value: 'NC', label: 'North Carolina' },
    { value: 'ND', label: 'North Dakota' },
    { value: 'OH', label: 'Ohio' },
    { value: 'OK', label: 'Oklahoma' },
    { value: 'OR', label: 'Oregon' },
    { value: 'PA', label: 'Pennsylvania' },
    { value: 'RI', label: 'Rhode Island' },
    { value: 'SC', label: 'South Carolina' },
    { value: 'SD', label: 'South Dakota' },
    { value: 'TN', label: 'Tennessee' },
    { value: 'TX', label: 'Texas' },
    { value: 'UT', label: 'Utah' },
    { value: 'VT', label: 'Vermont' },
    { value: 'VA', label: 'Virginia' },
    { value: 'WA', label: 'Washington' },
    { value: 'WV', label: 'West Virginia' },
    { value: 'WI', label: 'Wisconsin' },
    { value: 'WY', label: 'Wyoming' },
    { value: 'DC', label: 'District of Columbia' },
    { value: 'AS', label: 'American Samoa' },
    { value: 'GU', label: 'Guam' },
    { value: 'MP', label: 'Northern Mariana Islands' },
    { value: 'PR', label: 'Puerto Rico' },
    { value: 'VI', label: 'U.S. Virgin Islands' }
  ];
  
  // Exposure locations data
  const exposureLocations = [
    { value: 'military', label: 'Military Service' },
    { value: 'shipyard', label: 'Shipyard' },
    { value: 'construction', label: 'Construction Site' },
    { value: 'factory', label: 'Factory/Industrial Plant' },
    { value: 'power_plant', label: 'Power Plant' },
    { value: 'mine', label: 'Mine' },
    { value: 'refinery', label: 'Refinery' },
    { value: 'railroad', label: 'Railroad' },
    { value: 'automotive', label: 'Automotive Industry' },
    { value: 'textile', label: 'Textile Mill' },
    { value: 'insulation', label: 'Insulation Work' },
    { value: 'school', label: 'School/Public Building' },
    { value: 'residential', label: 'Residential Building' },
    { value: 'other', label: 'Other' }
  ];
  
  // State for form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    emailId: '',
    state: '',
    asbestosExposure: '',
    exposureLocation: '',
    dateOfBirth: '',
    story: '',
    privacyPolicy: false,
    humanVerification: false
  });

  // State for form validation
  const [errors, setErrors] = useState({});
  // State for form submission status
  const [isSubmitting, setIsSubmitting] = useState(false);
  // State for success dialog
  const [successDialogOpen, setSuccessDialogOpen] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Validate form before submission
  const validateForm = () => {
    const newErrors = {};

    // Required field validation
    const requiredFields = [
      'firstName', 'lastName', 'phoneNumber', 'emailId',
      'state', 'asbestosExposure', 'exposureLocation', 'dateOfBirth'
    ];

    requiredFields.forEach(field => {
      if (!formData[field]) {
        newErrors[field] = 'This field is required';
      }
    });

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.emailId && !emailRegex.test(formData.emailId)) {
      newErrors.emailId = 'Invalid email format';
    }

    // Phone number validation
    // Accept formats like: +1 561-555-7689, (561) 555-7689, 561-555-7689, 5615557689
    const phoneRegex = /^(\+1\s?)?(\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/;
    if (formData.phoneNumber && !phoneRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Invalid US phone number format (e.g. +1 561-555-7689)';
    }

    // Privacy policy and human verification
    if (!formData.privacyPolicy) {
      newErrors.privacyPolicy = 'You must agree to the privacy policy';
    }

    if (!formData.humanVerification) {
      newErrors.humanVerification = 'Please verify you are a person';
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

    if (validateForm()) {
      setIsSubmitting(true);
      
      // EmailJS service, template and public key configuration
      const serviceId = 'service_3vbv36o';
      const templateId = 'template_idmq87s';
      const publicKey = '5saECdElLOrsCGmdQ';
      
      // Get state name from value
      const stateName = usStates.find(state => state.value === formData.state)?.label || formData.state;
      
      // Get exposure type and location labels
      const exposureType = (() => {
        switch(formData.asbestosExposure) {
          case 'workplace': return 'Workplace';
          case 'home': return 'Home';
          case 'secondary': return 'Secondary Exposure';
          case 'other': return 'Other';
          default: return formData.asbestosExposure;
        }
      })();
      
      const exposureLocation = exposureLocations.find(loc => loc.value === formData.exposureLocation)?.label || formData.exposureLocation;
      
      // Prepare template parameters to match exactly with EmailJS template variables
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        email: formData.emailId,
        phone_number: formData.phoneNumber,
        state: stateName,
        exposure_type: exposureType,
        exposure_location: exposureLocation, 
        diagnosis_date: "Not provided", // Could add a diagnosis date field to the form if needed
        additional_info: formData.story || "No additional information provided",
        agreed_to_terms: formData.privacyPolicy ? "Yes" : "No",
        to_name: "Admin" // Adding a recipient name for the template
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
            emailId: '',
            state: '',
            asbestosExposure: '',
            exposureLocation: '',
            dateOfBirth: '',
            story: '',
            privacyPolicy: false,
            humanVerification: false
          });
          setIsSubmitting(false);
        })
        .catch((error) => {
          console.error('Email sending error:', error);
          toast.error('Error submitting form. Please try again.');
          setIsSubmitting(false);
        });
    } else {
      toast.error('Please correct the errors in the form');
    }
  };

  return (
    <div
      className="w-full relative bg-[#faf3ec] min-h-screen overflow-hidden text-left text-[20px] text-[#4b2c5e] font-helvetica px-4 sm:px-8 py-8 sm:py-12"
    >
      <ToastContainer position="top-right" />
      
      {/* Success Dialog */}
      <Dialog
        open={successDialogOpen}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          style: {
            borderRadius: '16px',
            padding: '16px',
            maxWidth: '550px'
          }
        }}
      >
        <DialogTitle id="alert-dialog-title" sx={{ 
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
          <DialogContentText id="alert-dialog-description" sx={{ 
            fontFamily: 'Helvetica', 
            fontSize: '18px', 
            color: '#4b2c5e',
            textAlign: 'center',
            marginBottom: '16px'
          }}>
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
      
      {/* Hero Section */}
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 mb-8 md:mb-16">
        <div className="w-full md:w-[450px] flex-shrink-0">
          <img
            src={ClaimFormImg}
            alt="Claim Form Illustration"
            className="w-full h-auto"
          />
        </div>
        <div className="flex-1 pt-4 md:pt-8 text-left">
          <i className='font-["Georgia"] relative text-[40px] sm:text-[60px] md:text-[80px] lg:text-[80px] inline-block text-[#4b2c5e]'>
            <span>{`You Don't Have to `}</span>
            <span className="text-[rgba(75,44,94,0.66)]">Face This Alone </span>
          </i>
          <div className='font-["Helvetica"] relative text-[18px] sm:text-[20px] md:text-[24px] text-[#4b2c5e] inline-block pb-[30px]'>{`If you, or a family member has been diagnosed with mesothelioma, don't hesitate to reach out. `}</div>
        </div>
      </div>

      <div className="flex justify-center md:justify-end">
      {/* Form Section */}
      <form onSubmit={handleSubmit} className="w-full md:w-[800px] md:-mt-[5%] md:mr-[10%]">
        <div className="rounded-[20px] bg-white p-6 sm:p-8 md:p-12 shadow-lg">
          <div className="mb-8 md:mb-12">
            <i className="block text-[24px] sm:text-[28px] md:text-[32px] font-['Georgia'] mb-4 md:mb-8 text-left">
              We're here to fight for you every step of the way.
            </i>
          </div>

          <div className="space-y-6 md:space-y-8">
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              <div className="w-full md:flex-1">
                <TextField
                  id="firstName"
                  name="firstName"
                  label="First Name *"
                  variant="standard"
                  fullWidth
                  value={formData.firstName}
                  onChange={handleChange}
                  error={!!errors.firstName}
                  helperText={errors.firstName}
                  sx={textFieldStyle}
                />
              </div>
              <div className="w-full md:flex-1">
                <TextField
                  id="lastName"
                  name="lastName"
                  label="Last Name *"
                  variant="standard"
                  fullWidth
                  value={formData.lastName}
                  onChange={handleChange}
                  error={!!errors.lastName}
                  helperText={errors.lastName}
                  sx={textFieldStyle}
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              <div className="w-full md:flex-1">
                <TextField
                  id="phoneNumber"
                  name="phoneNumber"
                  label="Phone Number *"
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
              <div className="w-full md:flex-1">
                <TextField
                  id="emailId"
                  name="emailId"
                  label="Email ID *"
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

            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              <div className="w-full md:flex-1">
                <FormControl fullWidth error={!!errors.state} variant="standard">
                  <InputLabel id="state-label" sx={{
                    color: '#4b2c5e',
                    fontSize: '20px',
                    fontFamily: 'Helvetica',
                    fontWeight: 'bold',
                    '&.Mui-focused': {
                      color: '#4b2c5e'
                    }
                  }}>State *</InputLabel>
                  <Select
                    labelId="state-label"
                    id="state"
                    name="state"
                    value={formData.state}
                    label="State *"
                    onChange={handleChange}
                    sx={selectFieldStyle}
                    MenuProps={{
                      PaperProps: {
                        sx: {
                          '& .MuiMenuItem-root': menuItemStyle
                        }
                      }
                    }}
                  >
                    <MenuItem value="">Select a state</MenuItem>
                    {usStates.map((state) => (
                      <MenuItem key={state.value} value={state.value}>
                        {state.label}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.state && <FormHelperText>{errors.state}</FormHelperText>}
                </FormControl>
              </div>
              <div className="w-full md:flex-1">
                <FormControl fullWidth error={!!errors.asbestosExposure} variant="standard">
                  <InputLabel id="asbestos-exposure-label" sx={{
                    color: '#4b2c5e',
                    fontSize: '20px',
                    fontFamily: 'Helvetica',
                    fontWeight: 'bold',
                    '&.Mui-focused': {
                      color: '#4b2c5e'
                    }
                  }}>Asbestos Exposure *</InputLabel>
                  <Select
                    labelId="asbestos-exposure-label"
                    id="asbestosExposure"
                    name="asbestosExposure"
                    value={formData.asbestosExposure}
                    label="Asbestos Exposure *"
                    onChange={handleChange}
                    sx={selectFieldStyle}
                    MenuProps={{
                      PaperProps: {
                        sx: {
                          '& .MuiMenuItem-root': menuItemStyle
                        }
                      }
                    }}
                  >
                    <MenuItem value="">Select exposure type</MenuItem>
                    <MenuItem value="workplace">Workplace</MenuItem>
                    <MenuItem value="home">Home</MenuItem>
                    <MenuItem value="secondary">Secondary Exposure</MenuItem>
                    <MenuItem value="other">Other</MenuItem>
                  </Select>
                  {errors.asbestosExposure && <FormHelperText>{errors.asbestosExposure}</FormHelperText>}
                </FormControl>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              <div className="w-full md:flex-1">
                <FormControl fullWidth error={!!errors.exposureLocation} variant="standard">
                  <InputLabel id="exposure-location-label" sx={{
                    color: '#4b2c5e',
                    fontSize: '20px',
                    fontFamily: 'Helvetica',
                    fontWeight: 'bold',
                    '&.Mui-focused': {
                      color: '#4b2c5e'
                    }
                  }}>Exposure Location *</InputLabel>
                  <Select
                    labelId="exposure-location-label"
                    id="exposureLocation"
                    name="exposureLocation"
                    value={formData.exposureLocation}
                    label="Exposure Location *"
                    onChange={handleChange}
                    sx={selectFieldStyle}
                    MenuProps={{
                      PaperProps: {
                        sx: {
                          '& .MuiMenuItem-root': menuItemStyle
                        }
                      }
                    }}
                  >
                    <MenuItem value="">Select exposure location</MenuItem>
                    {exposureLocations.map((location) => (
                      <MenuItem key={location.value} value={location.value}>
                        {location.label}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.exposureLocation && <FormHelperText>{errors.exposureLocation}</FormHelperText>}
                </FormControl>
              </div>
              <div className="w-full md:flex-1">
                <TextField
                  id="dateOfBirth"
                  name="dateOfBirth"
                  label="Date of Birth *"
                  type="date"
                  variant="standard"
                  fullWidth
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  error={!!errors.dateOfBirth}
                  helperText={errors.dateOfBirth}
                  InputLabelProps={{ shrink: true }}
                  sx={textFieldStyle}
                />
              </div>
            </div>

            <div>
              <TextField
                id="story"
                name="story"
                label="Tell us your story (optional)"
                variant="standard"
                fullWidth
                multiline
                minRows={4}
                value={formData.story}
                onChange={handleChange}
                sx={textFieldStyle}
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <input
                  type="checkbox"
                  name="privacyPolicy"
                  checked={formData.privacyPolicy}
                  onChange={handleChange}
                  className="mt-1"
                />
                <div className="text-xs sm:text-sm font-['Helvetica'] ">
                  <span>I agree to the </span>
                  <b>privacy policy</b>
                  <span> and </span>
                  <b>disclaimer</b>
                  <span> and give my express written consent to be contacted regarding my case options. I understand that I may be contacted using automatic dialing equipment. Message and data rates may apply. My consent does not require purchase. This is Legal advertising.</span>
                </div>
              </div>
              {errors.privacyPolicy && <div className="text-red-500 text-sm">{errors.privacyPolicy}</div>}

              <div className="flex items-start gap-4 font-['Helvetica']">
                <input
                  type="checkbox"
                  name="humanVerification"
                  checked={formData.humanVerification}
                  onChange={handleChange}
                  className="mt-1"
                />
                <div className="text-xs sm:text-sm">Please check this box to verify you're a person.</div>
              </div>
              {errors.humanVerification && <div className="text-red-500 text-sm">{errors.humanVerification}</div>}
            </div>

            <div className="text-left sm:text-left">
              <button
                type="submit"
                className="rounded-[10px] bg-[#2e4a7d] text-[#f8f2e9] px-8 sm:px-12 py-3 sm:py-4 font-bold hover:bg-[#243c68] transition-colors text-sm sm:text-base md:text-lg "
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
      </div>
    </div>
  );
};

export default ClaimOne;