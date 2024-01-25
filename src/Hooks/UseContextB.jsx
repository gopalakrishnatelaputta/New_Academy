import React from 'react'
import UseContextC from './UseContextC'
import { useContext } from 'react'
import { ChannelContext, UserContext } from './UseContexA'

function UseContextB() {
   const user=useContext(UserContext)
   const channel=useContext(ChannelContext)
  return (
    <div>
      <UseContextC></UseContextC>

        {user} - {channel}
    </div>
  )
}

export default UseContextB
