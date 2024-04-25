import { useFetchProjects } from "./fetchPerson";
import './App.css'

const Projects = () => {
    const { isLoading, project } = useFetchProjects();
    console.log(project);
    if (isLoading) {
        return (
            <section className="projects">
                <h2>Loading...</h2>
            </section>
        );
    }
    return (
        <section className="projects">
            <div className="title">
                <h4>Projects</h4>
                <div className="title-underline"></div>
                <div className="projects-center">
                    {project.map((eachProject) => {
                        const { id, img, title, url } = eachProject;
                        return (
                            <a
                                href={url}
                                key={id}
                                target="_blank"
                                rel="noreferrer"
                                className="project"
                            >
                                <img src={img} alt={title} className="img" />
                                <h5>{title}</h5>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;
