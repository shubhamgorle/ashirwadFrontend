import React,{Fragment, useState} from 'react';
import "./RshowData.css"
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllData } from '../redux/rDataActions'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { deleteData } from '../redux/rDataActions'
import { R_DELETE_DATA_RESET } from '../redux/rDataActionTypes'
import DeleteIcon from "@mui/icons-material/Delete"
import EditIcon from "@mui/icons-material/Edit"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
const ShowData = () => {
    const dispatch = useDispatch();
    const {AllData} = useSelector((state)=>state.rgetAllData);
    const {isDeleted} = useSelector((state)=>state.rdeleteData);
    const [id, setId] = useState()
    const [open, setOpen] = React.useState(false);
    // const idref = useRef(null)
  const handleClickOpen = (id) => {
    setId(id)
    // idref.current.value = id
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    const handleDelete = () =>{
        dispatch(deleteData(id))
        setOpen(false);
    }
    const columns = [
        { field: 'srno', headerName: 'Sr. No', minWidth: 30  },
        { field: 'account', headerName: 'Account', minWidth: 50 ,sortable:false,  cellClassName: (params)=>{
          if(params.row.id === 'total'){
          return "boldColor"
          }
          else{
          return (params.row.account === "divident" ? "blueColor" : "");
          }
      }},
        { field: 'name', headerName: 'Name', minWidth: 120, sortable:false},
        { field: 'description', headerName: 'Description', minWidth: 300, sortable:false,  type:"number"},
        { field: 'money', headerName: 'Expenses', minWidth: 150, type:"number",sortable:false, cellClassName: (params)=>{
          if(params.row.id !== 'total'){
          return (params.row.account !== "income" ? "redColor" : "");
          }
          else{
            return "boldColor"
          }
      } },
        { field: 'mode', headerName: 'Mode', minWidth: 120, type:"number", sortable:false},
        { field: 'date', headerName: 'Date', minWidth: 120,  type:"number", sortable:false},
        { field: 'totalIncome', headerName: 'Income', minWidth: 120,  type:"number",sortable:false, cellClassName: (params)=>{
          if(params.row.id !== 'total'){
          return (params.row.account === "income" ? "greenColor" : "");
          }
          else{
            return "boldColor"
          }
      } },
        { field: 'amtbalance', headerName: 'balance', minWidth: 120,  type:"number",sortable:false, cellClassName: (params)=>{
          if(params.row.id === 'total'){
          return (amitBalance-totalMoney > 0 ? "greenColor" : "redColor");
          }
      } },
        {field:"actions", headerName:"Actions", minWidth:150, flex:0.3, type:"number", sortable:false, renderCell:(params)=>{
          if(params.row.id !== 'total'){
            return(
              <>
              <Link to={`/update/raulgaon/${params.row.id}`}><EditIcon/></Link>
              <Button onClick={()=>handleClickOpen(params.row.id)}><DeleteIcon/></Button>
              {/* <Button onClick={()=>handleDelete(params.row.id)}><DeleteIcon/></Button> */}
              </>
          )
          }
       }},
      ]
      const rows = [];
      let totalMoney = 0;
      let amitBalance = 0;
      AllData &&
      AllData.forEach((item, index)=>{
        if(item.account !== 'income'){
          totalMoney += item.money;
        }
        else{
         amitBalance += item.money
        }
     rows.push({
        id:item._id,
        srno:index+1,
        account:item.account,
        name : item.name,
        description:item.description,
        money:item.account !== 'income' ? item.money : 0,
        mode:item.mode,
        date:item.date,
        totalIncome:item.account === 'income' ? item.money : 0,
        amtbalance:amitBalance-totalMoney
     })    
  })
  rows.push({
    id: 'total', 
    account: 'Total',
    name: '',
    description: '',
    money: totalMoney, 
    mode: '',
    date: '',
    actions:'',
    totalIncome:amitBalance,
    amtbalance:amitBalance-totalMoney
});
    useEffect(()=>{
      if(isDeleted){
        alert("Data Deleted Successfully")
        dispatch({type:R_DELETE_DATA_RESET})
      }
         dispatch(getAllData())
    },[dispatch, isDeleted])
  return (
    <div className='showdataContainer'>
       <DataGrid
                rows={rows}
                columns={columns}
                disableRowSelectionOnClick
                className='productListTable'
                initialState={{
                    pagination: {
                      paginationModel: { pageSize: 8, page: 0 },
                    },
                  }}
                  pageSizeOptions={[8]} 
                />

<React.Fragment>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete Confirmation"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          Are you sure you want to remove this data? Once deleted, it cannot be recovered.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleDelete} autoFocus>
          Delete
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>

    </div>
  )
}

export default ShowData
