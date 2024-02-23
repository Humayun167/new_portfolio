import { projectsData } from './Data'
import { projectsNav } from './Data';
import WorksItems from './WorksItems';
const Works = () => {
    return (
          <div>
             <div className='work__filters'>
            {projectsNav.map((item, index)=>{
                return (
                    <span className="work__item" key={index}>{item.name}</span>
                )
            })}
           </div>
        
        <div className="work__container container grid">
            {projectsData.map((item) => {
                return <WorksItems item={item} key={item.id}></WorksItems>
            })}
        </div>
          </div>

    );
};

export default Works;