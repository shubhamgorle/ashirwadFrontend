import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import "./InputForm.css"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { UpdateData } from '../redux/newDataActions';
import { useEffect, useState } from 'react';
import { UPDATE_DATA_RESET } from '../redux/newDataActionTypes';
import { getDetails } from '../redux/newDataActions';
export default function UpdateForm() {
  // get data from redux store
  const { isUpdated } = useSelector((state) => state.deleteData);
  const { details } = useSelector((state) => state.getDetails);

  // all states
  const [account, setAccount] = useState();
  const [account1, setAccount1] = useState();
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [money, setMoney] = useState();
  const [mode, setMode] = useState();

  // all hooks
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { id } = useParams();

  const handleAccount = (e) => {
    setAccount(e.target.value)
  }
  const HandleSubmit = (e) => {
    e.preventDefault();
    if (!account || !name || !description || !money || !mode) {
      alert("Please fill out all required fields !")
      return;
    }
    const myform = new FormData();
    myform.set("account", account !== 'divident' &&  account !== 'officeExpenses' && account !== 'income' ? account1 : account);
    myform.set("name", name);
    myform.set("description", description.trim());
    myform.set("money", money);
    myform.set("mode", mode);
    const currentDate = new Date().toLocaleDateString('en-GB');
    myform.set("date", currentDate);
    dispatch(UpdateData(id, myform))
  }
  useEffect(() => {
    if (isUpdated) {
      alert("Data Updated Succesfully");
      dispatch({ type: UPDATE_DATA_RESET })
      navigate("/show/mendhepathar")
    }
    if (details && details._id !== id) {
      dispatch(getDetails(id))
    } else {
      setAccount(details.account)
      setAccount1(details.account)
      setName(details.name)
      setDescription(details.description)
      setMoney(details.money)
      setMode(details.mode)
    }

  }, [isUpdated, navigate, dispatch, id, details])
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
          <h3>Update</h3>
            <FormLabel id="demo-row-radio-buttons-group-label">A/c</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"

            >
              <FormControlLabel value="divident" control={<Radio />} checked={account === 'divident'} label="Divident" onChange={handleAccount} />
              <FormControlLabel value="officeExpenses" control={<Radio />} checked={account === 'officeExpenses'} label="Office Expenses" onChange={handleAccount} />
              <FormControlLabel value="income" control={<Radio />} checked={account === 'income'} label="income" onChange={handleAccount} />
              <FormControlLabel value="other" control={<Radio />} label="Other" checked={account !== 'divident' &&  account !== 'officeExpenses' && account !== 'income'} onChange={handleAccount} />
            </RadioGroup>
          </FormControl>
        </Box>
        <TextField
          style={{ display: account !== 'divident' &&  account !== 'officeExpenses' && account !== 'income' ? 'block' : 'none' }}
          id="account"
          // label="A/c"
          placeholder='A/c'
          type='text'
          value={account1}
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
        </TextField>

        <TextField
          required
          // label="Description"
          placeholder='Description'
          type='text'
          multiline
          rows={4}
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
          // label="Rs"
          placeholder='Money'
          variant="outlined"
          value={money}
          onChange={(e) => setMoney(e.target.value)}
        />
        <Button variant="outlined" onClick={HandleSubmit}>Update</Button>
      </div>
    </Box>
  );
}
