import React from "react";
import "./styles.scss";
import projects from "../../data/projects.json";

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
      <section id="projects" className="section projects">
        <h2 className="text-center">Mis Proyectos</h2>

        <select defaultValue={selectedDev} onChange={this.onSelectChange}>
          <option value="Todos">Todos</option>
          <option value="React">React</option>
          <option value="JavaScript">JavaScript</option>
          <option value="HTML5">HTML5</option>
          <option value="CSS3">CSS3</option>
          <option value="SASS">SASS</option>
          <option value="Diseño Responsive">Diseño Responsive</option>
          <option value="API REST">API REST</option>
        </select>

        <div className="project-list">
          {projects
            .filter(
              item => item.dev.includes(selectedDev) || selectedDev === "Todos"
            )
            .map(project => {
              return (
                <div className="card-img" key={project.id}>
                  <img
                    className="Card__img"
                    src={project.img}
                    alt={project.name}
                  />

                  <h4 className="card-name">{project.name}</h4>
                  <p>{project.description}</p>

                  <a
                    href={project.demo}
                    key={project.demo}
                    // className={singleCardClass}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                  <a
                    href={project.code}
                    key={project.code}
                    // className={singleCardClass}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                </div>
              );
            })}
        </div>
      </section>
    );
  }
}

export default Projects;
