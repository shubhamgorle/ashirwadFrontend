import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import "./RinputForm.css"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useDispatch, useSelector } from 'react-redux';
import { createNewData } from '../redux/rDataActions';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export default function RinputForm() {
  const [account, setAccount] = React.useState("");
  const [account1, setAccount1] = React.useState("");
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [money, setMoney] = React.useState(0);
  const [mode, setMode] = React.useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const {success} = useSelector((state)=>state.rnewData)
  const handleAccount = (e) => {
    setAccount(e.target.value)
  }
  const HandleSubmit = (e) => {
    e.preventDefault();
    if (!account || !name || !description || !money || !mode) {
      alert("Please fill out all required fields !")
      return
    }
    const myform = new FormData();
    myform.set("account", account === 'other' ? account1 : account);
    myform.set("name", name);
    myform.set("description", description.trim());
    myform.set("money", money);
    myform.set("mode", mode);
    const currentDate = new Date().toLocaleDateString('en-GB');
    myform.set("date", currentDate);
    dispatch(createNewData(myform))
  }
  useEffect(()=>{
    if(success){
      alert("Data Added Succesfully");
      navigate("/show/raulgaon")
    }
  },[navigate, success])
  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '30ch' } }}
      noValidate
      autoComplete="off"
      className='inputForm'
    >
      
      <div>
        <Box sx={{
          // margin: { xs: 1, sm: 2, md: 3 },  // responsive margins
          padding: { xs: 0.5, }, // responsive padding

        }}>
          <FormControl >
            <h3>Create New Entry</h3>
            <FormLabel id="demo-row-radio-buttons-group-label">A/c</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"

            >
              <FormControlLabel value="divident" control={<Radio />} checked={account === 'divident'} label="Divident" onChange={handleAccount} />
              <FormControlLabel value="officeExpenses" control={<Radio />} checked={account === 'officeExpenses'} label="Office Expenses" onChange={handleAccount} />
              <FormControlLabel value="income" control={<Radio />} checked={account === 'income'} label="income" onChange={handleAccount} />
              <FormControlLabel value="other" control={<Radio />} label="Other" checked={account === 'other'} onChange={handleAccount} />
            </RadioGroup>
          </FormControl>
        </Box>
        <TextField
          style={{ display: account === 'other' ? 'block' : 'none' }}
          id="account"
          label="A/c"
          type='text'
          onChange={(e) => { setAccount1(e.target.value) }}
        />

        <TextField
          required
          id="outlined-select-currency"
          select
          label="Name"
          value={name}
          onChange={(e) => { setName(e.target.value) }}
        >
          <MenuItem value="amit">Amit</MenuItem>
          {/* <MenuItem value="rupesh">Rupesh</MenuItem> */}
        </TextField>

        <TextField
          required
          label="Description"
          type='text'
          multiline
          rows={2}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <TextField
          id="outlined-select-currency"
          required
          select
          label="Payment Mode"
          value={mode}
          onChange={(e) => setMode(e.target.value)}
        >
          <MenuItem value="cash">Cash</MenuItem>
          <MenuItem value="cheque">Cheque</MenuItem>
          <MenuItem value="online">Online</MenuItem>
        </TextField>

        <TextField
          id="outlined-number"
          required
          type="number"
          label="Rs"
          variant="outlined"
          value={money}
          onChange={(e) => setMoney(e.target.value)}
        />
        <Button variant="outlined" onClick={HandleSubmit}>Submit</Button>
      </div>
    </Box>
  );
}
