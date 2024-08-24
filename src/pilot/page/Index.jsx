import React from 'react'

import { Banner} from '../organism/Banner'
import { Coment } from '../organism/Coments'
import { Page } from '../template/page'
import { Service } from '../organism/Service'
import { Section } from '../template/Section'
import { OperationalHours } from '../organism/OperationalHours'
import { Testimoni } from '../organism/Testimoni'
import { MyMaps, MapComponent } from '../organism/MyMaps'

export const Index = () => {
  return (
  <Page>
    <Banner/>
    <Section title='Layanan Kami'>
      <Service/>
    </Section>
    <Section title='Jam Operasional'>
      <OperationalHours/>
    </Section>
    <Section title='Lokasi Kami'>
      <MyMaps/>
      {/* <MapComponent/> */}
    </Section>
    <Section title='Foto-Foto'>
      <Testimoni/>
    </Section>
    {/* <Section title='Testimoni'>
      <Testimoni/>
    </Section> */}
    {/* <Section title='Kata Pelanggan'>
      <Coment/>
    </Section> */}

  </Page>
  )
}
