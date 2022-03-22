import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UseContext'

export const MainApp = () => {

  // const user = {
  //   id: 1234,
  //   name: 'Ignacio',
  //   email: 'jm10cuyun@gmail.com'
  // }
  const [user, setUser] = useState({})

  return (
    <>
        <UserContext.Provider value={ {
          user,
          UserContext
        } }>
          <AppRouter/>
        </UserContext.Provider>

    </>
  )
}
