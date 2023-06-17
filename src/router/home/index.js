import React from "react";
import Layout from "../../layouts"
import Hero from "../../views/hero";
import BenefitsView from "../../views/benefits";
import StartNowView from "../../views/startnow";
import OpinionsView from "../../views/opinions";
import BottomView from "../../views/bottom";

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <BenefitsView />
      <StartNowView />
      <OpinionsView />
      <BottomView />
    </Layout>
  )
}
