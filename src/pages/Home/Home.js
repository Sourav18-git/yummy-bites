import React from 'react'
import Layout from '../../components/Layout/Layout'
import Section from './Section'
import '../../styles/HomeStyles.css'
import Section2 from '../Section2'
import Section3 from './Section3'
export default function Home() {
  return (
   <>
   <Layout>
    <Section/>
    {/* About Section */}
    <Section2/>
    {/* Menu Section*/}
    <Section3/>
   </Layout>
   </>
  )
}
