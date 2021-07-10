import { useState } from 'react';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';

import Countries from "./Data/countries.json";
import Gender from "./Data/genders.json";
import Input from './Inputs/Input';
import Select from './Inputs/Select';

import './App.css';

function App () {
  const [data, setData] = useState ({
    firstName: '',
    lastName: '',
    gender: '',
    mobile: '',
    birthday: '',
    country: '',
  });

  const handleReset = () => setData({
      firstName: '',
      lastName: '',
      gender: '',
      mobile: '',
      birthday: '',
      country: '',
    })
  
  
  const [first, setFirst] = useState("")
  const [last, setLast] = useState("")
  const [gender, setGender] = useState("")
  const [mobile, setMobile] = useState("")
  const [birthday, setBirthday] = useState("")
  const [country, setCountry] = useState("")

  const [success, setSuccess] = useState(false)

  const handleChange = e => {
    setData ({...data, [e.target.id]: e.target.value})
    if(data.firstName) setFirst("")
    if(data.lastName) setLast("")
    if(data.gender) setGender("")
    if(data.mobile) setMobile("")
    if(data.birthday) setBirthday("")
    if(data.country) setCountry("")
  };

  const handleSuccess = () => {
    if (data.firstName && data.lastName && data.gender && data.mobile && data.mobile.length === 10 && data.birthday && data.country) {
      setSuccess(true)
    } else {
      setSuccess(false)
    }
  }

  const submitForm = e => {
    e.preventDefault ();
    if (data.firstName === "") {
      setFirst("First name is Required")
    } else if(!isNaN(+data.firstName)){
      setFirst("First name can't be Number")
    } else if (data.firstName.length !== 0) {
      setFirst("")
    }
    if (data.lastName === "") {
      setLast("Last Name is Required")
    } else {
      setLast("")
    }
    if (data.gender === "" || data.gender === "Select Gender") {
      setGender("Gender is Required")
    } else {
      setGender("")
    }
    if (data.mobile === "") {
      setMobile("Mobile No. is Required")
    } else {
      setMobile("")
    }
    if (data.birthday === "") {
      setBirthday("Date of Birthday is Required")
    } else {
      setBirthday("")
    }
    if (data.country === "" || data.country === "Select Country") {
      setCountry("Country of Citizenship is Required")
    } else {
      setCountry("")
    }
    handleSuccess()
  };
  
  function ReloadPage() {
    if(success){
      setTimeout(() => {
        window.location.reload()
      }, 2000);
    }
  }

  ReloadPage()

  return (
    <div className="App">
      <form onSubmit={submitForm}>
          <Input type="text" id="firstName" value={data.firstName} handleChange={handleChange} label="First Name" placeholder="e.g. John" />
          {!data.firstName && (<span className="handleErrors">{first}</span>)}
          
          <Input type="text" id="lastName" value={data.lastName} handleChange={handleChange} label="Last Name" placeholder="e.g. Joe" />
          {!data.lastName && (<span className="handleErrors">{last}</span>)}

          <Select data={Gender} id="gender" handleChange={handleChange} value={data.gender} label="Gender" select />
          {!data.gender && (<span className="handleErrors">{gender}</span>)}

          <Input type="number" id="mobile" value={data.mobile} handleChange={handleChange} label="Mobile No." placeholder="e.g. 07 1234 5678" mobile />
          {!data.mobile && (<span className="handleErrors">{mobile}</span>)}
          
          <label className="label birthday" htmlFor="birthday">Date of Birth</label>
          <div className="date-picker">
            <DatePickerComponent id="birthday" value={data.birthday} format='dd/MM/yyyy' placeholder='Enter date' onChange={handleChange} />
            { data.birthday && data.birthday !== '' &&
              <span className="age">{ new Date() < new Date(data.birthday) ? (<p className="wrong">Wrong date</p>)
              : (<p className="valid">Your age is: {new Date().getFullYear() - new Date(data.birthday).getFullYear()} Years</p>)}</span>
            }
            {data.birthday && <span className="checkmark birthday"></span>}
          </div>
          {!data.birthday && (<span className="handleErrors">{birthday}</span>)}

          {/* <Input type="date" id="birthday" value={data.birthday} handleChange={handleChange} label="Date Of Birthday" /> */}
          <Select data={Countries} id="country" handleChange={handleChange} value={data.country} label="Country of Citizenship" country select />
          {!data.country && (<span className="handleErrors">{country}</span>)}

        <div className="actions">
          <input type="submit" value="Submit" onClick={submitForm} />
          <input disabled={success ? true : false} type="reset" value="Reset" onClick={handleReset} />
        </div>
          { success && (<span className="success-message">Your submission has been received</span>) }
      </form>
    </div>
  );
}

export default App;
