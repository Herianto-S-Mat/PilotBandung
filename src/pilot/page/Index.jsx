import React from 'react'

import { Coment } from '../organism/Coments'
import { Page } from '../template/page'
import { Service } from '../organism/Service'
import { Section } from '../template/Section'
import { OperationalHours } from '../organism/OperationalHours'
import { CorouselPicture } from '../organism/CorouselPicture'
import { CombinedMap } from '../organism/MyMaps'

export const Index = () => {
  return (
  <Page>
    <Section title='Layanan Kami' id="layanan">
      <Service/>
    </Section>
    <Section title='Jam Operasional'>
      <OperationalHours/>
    </Section>
    <Section title='Lokasi Kami'>
      <CombinedMap/>
    </Section>
    <Section title='Galeri'>
      <CorouselPicture/>
    </Section>
    {/* <Section title='Kata Pelanggan'>
      <Coment/>
    </Section> */}


  </Page>
  )
}
