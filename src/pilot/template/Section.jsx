import React from 'react'
import { Container } from 'react-bootstrap'

export const Section = ({children, title, id = null}) => {
  return (
    <Container fluid id={id ? id : undefined}>
        <div  
            style={{
                display:'flex',
                flexDirection:'row',
                alignItems:'center',
                marginInline: '1em',
                marginTop:'6em',
                marginBottom:'2em'
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