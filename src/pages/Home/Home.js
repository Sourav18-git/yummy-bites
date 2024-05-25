import React from 'react'
import Layout from '../../components/Layout/Layout'
import Section from './Section'
import '../../styles/HomeStyles.css'
import Section2 from '../Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
import Section7 from './Section7'
export default function Home() {
  return (
   <>
   <Layout>
    <Section/>
    {/* About Section */}
    <Section2/>
    {/* Menu Section*/}
    <Section3/>
{/* promotion section  */}
<Section4/>
{/* shop section 5 */}
<Section5/>

{/* blog section */}
<Section6/>
{/* contact section 8 */}
<Section7/>
   </Layout>
   </>
  )
}
