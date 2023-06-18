import React from "react";
import Layout from "../../layouts"
import HeroView from "../../views/hero";
import BenefitsView from "../../views/benefits";
import StartNowView from "../../views/startnow";
import OpinionsView from "../../views/opinions";
import BottomView from "../../views/bottom";
import { useBreakpoint } from "../../hooks/useBreakpoint";

export default function HomePage() {

  const { breakpoint } = useBreakpoint();
  const isSmall = breakpoint === "sm";

  return (
    <Layout>
      <HeroView breakpoint={breakpoint} />
      <BenefitsView breakpoint={breakpoint} />
      <StartNowView breakpoint={breakpoint} />
      {isSmall
        ? (
          <>
            <BottomView breakpoint={breakpoint} />
            <OpinionsView breakpoint={breakpoint} />
          </>)
        : (
          <>
            <OpinionsView breakpoint={breakpoint} />
            <BottomView breakpoint={breakpoint} />
          </>)
      }
    </Layout>
  )
}