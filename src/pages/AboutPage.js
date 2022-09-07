import React from "react"
import ImageSection from "../components/ImageSection"
import SkillsSection from "../components/SkillsSection"
import TitleComponent from "../components/TitleComponent"

function AboutPage(){
    return(
        <div className="AboutPage">
            <TitleComponent title={'About me'} span={'About me'}/>
            <ImageSection />
            <TitleComponent title={'My skills'} span={'My skills'}/>
            <div className='skills-container'>
                <SkillsSection skill={'JavaScript'} progress={'60%'} />
                <SkillsSection skill={'React JS'} progress={'65%'} />
                <SkillsSection skill={'Single-Spa(microfrontend)'} progress={'65%'} />
                <SkillsSection skill={'ContextAPI'} progress={'70%'} />
                <SkillsSection skill={'HTML/CSS'} progress={'55%'} />
                <SkillsSection skill={'SASS'} progress={'60%'} />
                <SkillsSection skill={'Jest(React-testing-library)'} progress={'70%'} />
                <SkillsSection skill={'Redux'} progress={'60%'} />
            </div>
        </div>
    )
}

export default AboutPage