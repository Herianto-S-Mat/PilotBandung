import React from 'react'
import { Container } from 'react-bootstrap'

export const Section = ({children, title}) => {
  return (
    <Container>
        <div 
            className='' 
            style={{
                display:'flex',
                flexDirection:'row',
                alignItems:'center',
                marginInline: '1em',
                marginTop:'6em'
            }}
        >
            <hr className='text-dark w-100 opacity-100 mx-3'/>
            <h3 className='text-nowrap'>{title}</h3>
            <hr className='text-dark w-100 opacity-100 mx-3'/>
        </div>
        {children} 
    </Container>
  )
}
