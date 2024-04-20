import React, { useEffect, useState } from 'react'
import { createColumnHelper } from '@tanstack/react-table'
import Table from 'common/components/atoms/Table'
import { useNavigate } from 'react-router-dom'
import TokenService from 'services/token.service'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './DashboardTable.scss'
import { Button } from '@mantine/core'
import AuthService from 'services/auth.service'


const defaultData: Person[] = [
  {
    passengerName: 'Sherwin',
    airlineName: 'Sri Lanka',
    trips: 59,
    airlineHeadQuaters: 'Katunayake, Sri Lanka',
  },
  {
    passengerName: 'Sherwin',
    airlineName: 'Sri Lanka',
    trips: 59,
    airlineHeadQuaters: 'Katunayake, Sri Lanka',
  },
  {
    passengerName: 'Sherwin',
    airlineName: 'Sri Lanka',
    trips: 59,
    airlineHeadQuaters: 'Katunayake, Sri Lanka',
  },
]

const columnHelper = createColumnHelper<Person>()

const columns = [
  columnHelper.accessor('passengerName', {
    header: () => 'Name',
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor('airlineName', {
    header: () => 'Airline',
    cell: (info) => info.renderValue(),
  }),

  columnHelper.accessor('trips', {
    header: () => 'Trips',
    cell: (info) => info.renderValue(),
  }),
  columnHelper.accessor('airlineHeadQuaters', {
    header: () => <span>Head Quaters</span>,
    cell: (info) => info.renderValue(),
  }),

]
const DashboardTable = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = React.useState(() => [...defaultData])
  const [tableData, setTableData] = useState<Person[]>([])
  const [accessToken, setAccessToken] = useState('')

  const navigate = useNavigate()

  useEffect(() => {

    AuthService.getList(TokenService.getUser()).then((response) => {
      if (response.status === 200) {
        console.log(response.data)
        setTableData(response.data)
        console.log(tableData)
      }
    }
    ).catch((error) => {
      console.log(error)
      const resMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      console.log(resMessage)

      toast.error(resMessage)
    }
    )

    const token = TokenService.getLocalAccessToken()
    if (token) {
      setAccessToken(token)
      navigate('/dashboard')
    } else {

      navigate('/')
    }
  }, [accessToken, setAccessToken, navigate])

  const handleClick = async () => {

    await AuthService.logout(TokenService.getUser()).then((response) => {
      if (response.status === 200) {
        TokenService.removeUser()
        navigate('/')
      }
    })
      .catch((error) => {
        console.log(error)
        const resMessage =
          (error.response &&
            error?.response?.data &&
            error?.response?.data?.message) ||
          error.message ||
          error.toString();
        console.log(resMessage)

        toast.error(resMessage)
      }
      )

  }


  return <>
    <div className='header'>
      <Button
        className='logout-button'
        onClick={handleClick}
        bg='black'
        color='white'
        variant='filled'
      >
        Log out
      </Button>
    </div>
    {data && <Table data={data} columns={columns} />}
    <ToastContainer position="top-center" />
  </>
}

export default DashboardTable
