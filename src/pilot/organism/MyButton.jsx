import React from 'react'
import { Link } from 'react-router-dom'
import wa from'/wa.svg'


export const ContactButton = ({children, to}) => {
  return (
    <Link 
      className='bg-warning text-dark' 
      to={to}
      style={{
        borderRadius:'1em 1em 0 1em',
        border: '0',
        paddingBlock:'.5em',
        paddingInline:'1em',
        margin:'1em',
        textDecoration:'none',
    }}>
        {children} <img src={wa} height={25}/>
    </Link>
  )
}

export const PageButton = ({children, link}) => {
  return (
    <Link
      to = {`/${link}`} 
      className='bg-warning-subtle' 
      style={{
        textWrap:'nowrap',
        borderRadius:'.2em',
        border: '0',
        padding:'.3em 1.5em',
        textDecoration:'none',
        fontSize:'1.5em',
        color:'black',
      }}
    >
        {children}
    </Link>
  )
}
