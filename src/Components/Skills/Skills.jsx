import Backend from "./Backend";
import Frontend from "./Frontend";
import './Skills.css'
const Skills = () => {
    return (
        <section className="skills section" id="skills">
        <h2 className="section__title">Skills </h2>
        <span className="section__subtitle">My Technology Level</span>
       
       <div className="skills__container container grid">
          <Frontend></Frontend>
          <Backend></Backend>
       </div>
       
       </section>
    );
};

export default Skills;