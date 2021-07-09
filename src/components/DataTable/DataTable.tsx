import React, {useState} from 'react';
import { DataGrid, GridColDef, GridDataContainer, GridValueGetterParams } from '@material-ui/data-grid';
import { server_calls } from '../../api';
import { useGetData } from '../../custom-hooks';
import { Button,Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle } from '@material-ui/core';
import { CarForm } from '../CarForm/CarForm';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'year', headerName: 'Year', width: 110, editable: true, },
  { field: 'make', headerName: 'Make', width: 150, editable: true, },
  { field: 'model', headerName: 'Model', width: 150, editable: true, },
  { field: 'price', headerName: 'Price', type: 'number', width: 110, editable: true, },
  { field: 'color', headerName: 'Color', width: 150, editable: true, },
  { field: 'seats', headerName: 'Seats', width: 110, editable: true, },
  { field: 'condition', headerName: 'Condition', width: 150, editable: true, },
];

interface gridData{
  data:{
    id?:string;
  }
}

export const DataTable = () => {
  let { carData, getData } = useGetData();
  let [open, setOpen] = useState(false);
  let [gridData, setData] = useState<gridData>({data:{}})

  let handleOpen = () => {
    setOpen(true)
  }

  let handleClose = () => {
    setOpen(false)
  }

  let deleteData = () => {
    server_calls.delete(gridData.data.id!)
    getData()
  }

  console.log(gridData.data.id)
  console.log(carData)

  return (
    <div style={{ height: 400, width: '100%' }}>
        <h2>Car Inventory</h2>
        <DataGrid rows={carData} columns={columns} pageSize={5} checkboxSelection onRowSelected = { setData } />
        <Button onClick={handleOpen}>Update</Button>
        <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Update Car</DialogTitle>
            <DialogContent>
              <DialogContentText>Update Car</DialogContentText>
                <CarForm id={gridData.data.id!}/>
            </DialogContent>
            <DialogActions>
              <Button onClick = {handleClose} color="primary">Cancel</Button>
              <Button onClick={handleClose} color = "primary">Done</Button> 
            </DialogActions>
          </Dialog>

    </div>
  );
}         