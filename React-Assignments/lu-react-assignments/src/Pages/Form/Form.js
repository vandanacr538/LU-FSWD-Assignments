import { Box, Button, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import './form.css'

export default function Form() {
  let [course, setCourse] = useState("");
  let [gender, setGender] = useState("");
  let [formData, setFormData] = useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
  });
  let [Errors, setErrors] = useState({
    fnameError: false,
    lnameError: false,
    phoneError: false,
    phoneErrorMsg: "",
    emailError: false,
    courseError: false,
  })

  function handleFormDataChange(e) {
    setFormData((previousValue) => (
      { ...previousValue, [e.target.name]: e.target.value }
    ))
  }
  function handleCourseChange(e) {
    setCourse(e.target.value);
    setFormData((previousValue) => ({ ...previousValue, course: course, gender: gender }));
    if (e.target.value == null) {
      setErrors((previousValue) => (
        { ...previousValue, courseError: true }))
    }
    else {
      setErrors((previousValue) => (
        { ...previousValue, courseError: false }))
    }
  }
  function handleGenderChange(e) {
    setGender(e.target.value);
    setFormData((previousValue) => ({ ...previousValue, course: course, gender: gender }))
  }
  function handlePhoneErrorOnChange(e) {
    if (e.target.value === "") {
      setErrors((previousValue) => (
        { ...previousValue, phoneError: true, phoneErrorMsg: "Phone Number cannot be empty" }))
    }
    else if (e.target.value.toString().length != 10) {
      setErrors((previousValue) => (
        { ...previousValue, phoneError: true, phoneErrorMsg: "Phone Number must have 10 digits" }))
    }
    else {
      setErrors((previousValue) => (
        { ...previousValue, phoneError: false, phoneErrorMsg: "" }))
    }
  }
  let validateFname = () => {
    if (formData.fname === "") {
      setErrors((previousValue) => ({ ...previousValue, fnameError: true }));
    }
    else {
      setErrors((previousValue) => ({ ...previousValue, fnameError: false }));
    }
  }
  let validateLname = () => {
    if (formData.lname === "") {
      setErrors((previousValue) => ({ ...previousValue, lnameError: true }));
    }
    else {
      setErrors((previousValue) => ({ ...previousValue, lnameError: false }));
    }
  }
  let validatePhone = () => {
    if (formData.phone === "") {
      setErrors((previousValue) => (
        {
          ...previousValue,
          phoneError: true,
          phoneErrorMsg: "Phone Number cannot be empty"
        }
      ));
    }
    else {
      if (formData.phone.toString().length < 10) {
        setErrors((previousValue) => (
          {
            ...previousValue,
            phoneError: true,
            phoneErrorMsg: "Phone number cannot have less than 10 digits"
          }));
      }
      else if (formData.phone.toString().length > 10) {
        setErrors((previousValue) => (
          {
            ...previousValue,
            phoneError: true,
            phoneErrorMsg: "Phone number cannot have more than 10 digits"
          }));
      }
      else {
        setErrors((previousValue) => (
          {
            ...previousValue,
            phoneError: false,
            phoneErrorMsg: ""
          }));
      }
    }
  }
  let validateEmail = () => {
    if (formData.email === "") {
      setErrors((previousValue) => ({ ...previousValue, emailError: true }));
    }
    else {
      setErrors((previousValue) => ({ ...previousValue, emailError: false }));
    }
  }
  let validateCourse = () => {
    if (formData.course == null) {
      setErrors((previousValue) => ({ ...previousValue, courseError: true }));
    }
    else {
      setErrors((previousValue) => ({ ...previousValue, courseError: false }));
    }
  }

  function displayFormData() {
    console.log(formData);
    console.log(formData.course)
    validateFname();
    validateLname();
    validatePhone();
    validateEmail();
    validateCourse();
  }

  return (
    <div>
      <Box className="form-container"
        sx={{
          border: "2px solid blue",
          '@media only screen and (max-width:780px)': {
            backgroundColor: "Blue",
          }
        }}>
        <Box className="form-box">
          <div className='display-dp'>
            <div className='dp'></div>
            <h3>Username</h3>
          </div>
          <div className='dp-details'>
            <TextField error={Errors.fnameError}
              required size='small' margin='normal'
              label="First Name" sx={{ marginRight: "15px" }}
              name="fname"
              onChange={handleFormDataChange}>
            </TextField>
            <TextField error={Errors.lnameError}
              required size='small' margin='normal'
              label="Last Name" name="lname"
              onChange={handleFormDataChange}>
            </TextField>
            <TextField error={Errors.phoneError} helperText={Errors.phoneErrorMsg}
              type="number" required size='small'
              margin='normal' label="Phone Number"
              sx={{ marginRight: "15px" }} name="phone"
              onChange={handleFormDataChange}
              onKeyUp={handlePhoneErrorOnChange}>
            </TextField>
            <TextField error={Errors.emailError}
              required size='small' margin='normal' 
              label="Email" name="email" 
              onChange={handleFormDataChange}>
            </TextField>

            <FormControl sx={{ marginTop: "15px" }}>
              <FormLabel>Gender</FormLabel>
              <RadioGroup row>
                <FormControlLabel value="female" control={<Radio onChange={handleGenderChange} />} label="Female" />
                <FormControlLabel value="male" control={<Radio onChange={handleGenderChange} />} label="Male" />
              </RadioGroup>
            </FormControl>

            <FormControl size='small' sx={{ display: "flex", marginTop: "15px", width: "50%" }}>
              <InputLabel>Select Course</InputLabel>
              <Select error={Errors.courseError} value={course} onChange={handleCourseChange} label="Select Course">
                <MenuItem value={"Full Stack"}>Full Stack</MenuItem>
                <MenuItem value={"Data Science"}>Data Science</MenuItem>
              </Select>
            </FormControl>

            <Button variant='contained' onClick={displayFormData} sx={{ marginTop: "20px", width: "150px" }}>Submit</Button>
          </div>

        </Box>
      </Box>
    </div>
  )
}
