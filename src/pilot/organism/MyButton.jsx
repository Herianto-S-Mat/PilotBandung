import React from 'react'
import { Link } from 'react-router-dom'
import wa from'/wa.svg'


export const ContactButton = ({children, message}) => {
  const phoneNumber = '+6282129100990';
  return (
    <Link 
      className='bg-dark text-light text-nowrap' 
      to={`https://wa.me/${phoneNumber}?text=${message}`}
      style={{
        display: 'block',
        borderRadius:'.5em .5em .5em .5em',
        border: '0',
        paddingBlock:'.2em',
        paddingInline:'.5em',
        margin:'1em',
        textDecoration:'none'
    }}>
        {children}
        <img src={wa} height={25} alt="Contact" className='mx-2'/>
    </Link>
  )
}

export const ConsultButton = ({children, message}) => {
  const phoneNumber = '+6282129100990';
  return (
    <Link 
      className='bg-success-subtle text-dark text-nowrap' 
      to={`https://wa.me/${phoneNumber}?text=${message}`}
      style={{
        borderRadius:'1em 1em 0 1em',
        border: '0',
        paddingBlock:'.3em',
        paddingInline:'1em',
        textDecoration:'none'
    }}>
      <img src={wa} height={25} alt="Contact" className='mx-2'/>
      {children}
    </Link>
  )
}

export const PageButton = ({children, message}) => {
  const phoneNumber = '+6282129100990';
  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      className='bg-light' 
      style={{
        textWrap:'nowrap',
        borderRadius:'.2em',
        border: '0',
        padding:'.1em 1.2em',
        textDecoration:'none',
        fontSize:'1.2em',
        color:'black',
      }}
    >
        {children}
    </a>
  )
}
