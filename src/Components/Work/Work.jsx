import Works from "./Works";

const Work = () => {
    return (
        <div>
           <section className="work section " id="portfolio"></section> 
           <h2 className="section__title">Portfolio</h2>
           <span className="section__subtitle">Most recent projects</span>

           <Works></Works>
        </div>
    );
};

export default Work;