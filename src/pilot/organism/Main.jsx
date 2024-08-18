import './organism.css'
export const Main = ({children}) => {
  return (
    <div className='container'>
      <div className='row flex-col py-0' >
        {children}
      </div>
    </div>
  )
}
