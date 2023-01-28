import React from 'react'
import Layout from './Layout/Layout'
import UserTable from '../Components/Table'
const columns = [
  { id: 'rank', label: 'Rank', minWidth: 100 },
  { id: 'name', label: 'Player Name', minWidth: 100 },
  {
    id: 'match',
    label: 'MATCHES',
    minWidth: 100,
    align: 'right',
    backgroundColor:'black',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Total',
    label: 'Total Points',
    minWidth: 100,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'won',
    label: 'MATCHES WON',
    minWidth: 100,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'rating',
    label: 'RATING',
    minWidth: 100,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
];


const rows = [
  {
    rank:'1',
    name:'salman',
    match:1,
    Total:10,
    won:1,
    rating:2.5
  }
];
export default function Ranking() {
  return (
    <Layout>
   <div className='p-[12%] overflow-auto'>
    <div className='flex justify-center'>
    <h1 className='flex font-extrabold text-3xl pb-6  text-transparent  whitespace-nowrap bg-clip-text bg-gradient-to-r from-gray-700 to-red-700'>RANKING</h1>
    </div>
    <UserTable headings={columns} rows={rows}/>
    </div>
    </Layout>
  )
}
