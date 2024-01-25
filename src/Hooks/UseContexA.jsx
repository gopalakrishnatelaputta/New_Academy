import React from 'react'
import UseContextB from './UseContextB'


export const UserContext=React.createContext()
export const ChannelContext=React.createContext()

function UseContexA() {
  return (
    <div>
      <UserContext.Provider value={'Gopala Krishna'}>
        <ChannelContext.Provider value={'Telaputta'}>
            <UseContextB></UseContextB>
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default UseContexA
