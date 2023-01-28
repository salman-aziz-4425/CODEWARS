import React from 'react'
import Layout from './Layout/Layout'
import UserTable from '../Components/Table'
import { Button } from '@mui/material';
const columns = [
  { id: 'ch', label: 'Challenge#', minWidth:10},
  {
    id: 'Date',
    label: 'Date',
    minWidth: 10,
    align: 'right',
    backgroundColor:'black',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'OPPONENT',
    label: 'OPPONENT',
    minWidth: 10,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Details',
    label: 'Details',
    minWidth: 10,
    align: 'right',
  },
];


const rows = [
  {
    ch:'1',
    Date:'17-Jan-2023',
    OPPONENT:'ZAIN',
  }
];
export default function YourChallenge() {

  return (
    <Layout>
    {rows.Details}
   <div className='p-[12%] overflow-auto'>
    <div className='flex justify-center'>
    <h1 className='flex font-extrabold text-3xl pb-6  text-transparent  whitespace-nowrap bg-clip-text bg-gradient-to-r from-gray-700 to-red-700'>Your Challenge</h1>
    </div>
    <UserTable headings={columns} rows={rows}/>
    <div className='flex justify-end'>
    <Button sx={{display:'flex',marginTop:'5%',justifyContent:'end'}}   variant="contained">MAKE CHALLENGE</Button>
    </div>
    </div>
    </Layout>
  )
}
