import Hero from "./components/sections/hero";
import Nav from "./components/nav";
import SectionOne from "./components/sections/section-one";
import SectionTwo from "./components/sections/section-two";
import SectionThree from "./components/sections/section-three";

export default function App() {
  return (
    <div className="max-w-[1366px] flex flex-col mx-auto overflow-x-hidden overflow-y-scroll">
      <Nav/>
      <Hero/>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree />
    </div>
  )
}
