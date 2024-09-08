import {MyNavbar} from '../organism/Navbar'
import { Main } from "../organism/Main"
import { MyFooter } from "../organism/MyFooter"
import { ContactMe } from "../organism/ContactMe"
import { Banner } from '../organism/Banner'

export const Page = ({children}) => {
  return (
    <>
        <MyNavbar/>
        <Banner/>
        <Main>
            {children}
        </Main>
        <MyFooter/>
        {/* <ContactMe/> */}
    </>
  )
}
