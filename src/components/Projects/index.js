import React from "react";
import "./styles.scss";
import projects from "../../data/projects.js";
import ProjectCard from '../ProjectCard/index';


class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDev: "Todos",
    };

    this.onSelectChange = this.onSelectChange.bind(this);
  }
  onSelectChange(event) {
    this.setState({
      selectedDev: event.target.value,
    });
  }

  render() {
    const { selectedDev } = this.state;
    return (
      <section id="projects" className="Card__section">
        <h2 className="Card__list-title">Mis Proyectos</h2>

        <select className="Card__select" defaultValue={selectedDev} onChange={this.onSelectChange}>
          <option value="Todos">Todos</option>
          <option value="React">React</option>
          <option value="JavaScript">JavaScript</option>
          <option value="HTML5">HTML5</option>
          <option value="CSS3">CSS3</option>
          <option value="SASS">SASS</option>
          <option value="Diseño Responsive">Diseño Responsive</option>
          <option value="API REST">API REST</option>
        </select>

        <ul className="Card__list">
          {projects
            .filter(
              item => item.dev.includes(selectedDev) || selectedDev === "Todos"
            )
            .map(project => {
              return (
             
                  <li className="Card__element" key={project.id} >
                    <ProjectCard 
                    img={project.img}
                    name={project.name}
                    description={project.description}
                    code={project.code}
                    demo={project.demo}
                    />
                  </li>
               
              );
            })}
        </ul>
      </section>
    );
  }
}

export default Projects;
