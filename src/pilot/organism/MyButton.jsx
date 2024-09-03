import React from 'react'
import { Link } from 'react-router-dom'
import wa from'/wa.svg'
import call from'/call.svg'

export const ContactButton = ({children}) => {
  const phoneNumber = '+6282129100990';
  return (
    <Link 
      className='bg-dark text-light text-nowrap border border-dark' 
      to={`tel:${phoneNumber}`}
      style={{
        display: 'block',
        borderRadius:'.5em .5em .5em .5em',
        border: '0',
        paddingBlock:'.2em',
        paddingInline:'.5em',
        marginTop:'1em',
        textDecoration:'none'
    }}>
        <img src={call} height={25} alt="Contact" className='mx-2'/>
        {children}
    </Link>
  )
}

export const WaButton = ({children, message}) => {
  const phoneNumber = '+6282129100990';
  return (
    <Link 
      className='bg-success-subtle text-dark text-nowrap border border-success' 
      to={`https://wa.me/${phoneNumber}?text=${message}`}
      style={{
        display: 'block',
        borderRadius:'.5em .5em .5em .5em',
        border: '0',
        paddingBlock:'.2em',
        paddingInline:'.5em',
        marginTop:'1em',
        textDecoration:'none'
    }}>
        <img src={wa} height={25} alt="Contact wa" className='mx-2'/>
        {children}
    </Link>
  )
}

export const ConsultButton = ({children, message}) => {
  const phoneNumber = '+6282129100990';
  return (
    <Link 
      className='bg-success-subtle text-success text-nowrap border border-success' 
      to={`https://wa.me/${phoneNumber}?text=${message}`}
      style={{
        borderRadius:'1em .5em .5em 0',
        paddingBlock:'.2em',
        paddingInline:'.5em',
        marginTop:'1em',
        textDecoration:'none'
    }}>
      <img src={wa} height={25} alt="Contact wa" className='mx-2'/>
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
