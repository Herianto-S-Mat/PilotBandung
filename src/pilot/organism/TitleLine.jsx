import React from 'react'

export const TitleLine = ({children}) => {
  return (
    <div className='' style={{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginInline: '1em',
        margin:'6em',
    }}>
        <hr className='text-dark w-100 opacity-100 mx-3'/>
        {children}
        <hr className='text-dark w-100 opacity-100 mx-3'/>
    </div>
  )
}
