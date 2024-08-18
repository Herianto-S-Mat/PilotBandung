import {MyNavbar} from '../organism/Navbar'
import { Main } from "../organism/Main"
import { MyFooter } from "../organism/MyFooter"
import { ContactMe } from "../organism/ContactMe"

export const Page = ({children}) => {
  return (
    <>
        <MyNavbar/>
        <Main>
            {children}
            <MyFooter/>
        </Main>
        <ContactMe/>
    </>
  )
}
