import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import HerSection from "../components/sections/HeroSection"

function IndexPage() {
  return (
    <Layout>
      <SEO title="Home" />
      <HerSection />
    </Layout>
  )
}

export default IndexPage
