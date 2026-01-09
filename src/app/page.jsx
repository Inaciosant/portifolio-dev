import { About } from "@/components/about/about";
import { Hero } from "@/components/hero/hero";
import { Projects } from "@/components/projects/Projects";
import { Skill } from "@/components/Skills/skill";

export default function Home() {
  return (

    <div className="">
    <Hero/>
    <Projects/>
    <About/>
    <Skill/>

  </div>
  )
}
