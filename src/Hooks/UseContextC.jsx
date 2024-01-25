import React from 'react'
import { ChannelContext, UserContext } from './UseContexA'

function UseContextC() {
  return (
    <div>
      <UserContext.Consumer>
        {
            user=>{
                return(
                    <ChannelContext.Consumer>
                    {
                        channel=>{
                            return(
                                <h2> User Context Value  :{user}  ||||||    Channel Context Value :{channel}</h2>
                            )
                            
                        }
                    }
                </ChannelContext.Consumer>
                )
                
            }
        }
        
      </UserContext.Consumer>
    </div>
  )
}

export default UseContextC
