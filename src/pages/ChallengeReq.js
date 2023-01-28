import React from 'react'
import Layout from './Layout/Layout'
import UserTable from '../Components/Table'
const columns = [
  { id: 'ch', label: 'ch#', minWidth:100 },
  {
    id: 'Date',
    label: 'Date',
    minWidth: 100,
    align: 'right',
    backgroundColor:'black',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Status',
    label: 'Status',
    minWidth: 100,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Challenged',
    label: 'Challenged By',
    minWidth: 100,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Details',
    label: 'Details',
    minWidth: 100,
    align: 'right',
  },
];


const rows = [
  {
    ch:'1',
    Date:'17-Jan-2023',
    Status:'Pending',
    Challenged:'ZAIN',
  }
];
export default function ChallengeReq() {

  return (
    <Layout>
    {rows.Details}
   <div className='p-[12%] overflow-auto'>
    <div className='flex justify-center'>
    <h1 className='flex font-extrabold text-3xl pb-6  text-transparent  whitespace-nowrap bg-clip-text bg-gradient-to-r from-gray-700 to-red-700'>Challenge REQUEST</h1>
    </div>
    <UserTable headings={columns} rows={rows}/>
    </div>
    </Layout>
  )
}
