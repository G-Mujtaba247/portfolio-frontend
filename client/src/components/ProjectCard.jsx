import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
    return (
        <article className="card project-card fade-in">
            <div className="project-card-image">
                {project.image ? (
                    <img
                        src={project.image.startsWith("http") ? project.image : `${process.env.REACT_APP_SERVER_URL || "http://localhost:5000"}${project.image}`}
                        alt={project.title}
                    />
                ) : (
                    <div
                        style={{
                            width: "100%",
                            height: "100%",
                            background: "linear-gradient(135deg, #7c3aed22 0%, #06b6d422 100%)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "4rem",
                        }}
                    >
                        🚀
                    </div>
                )}
                <div className="project-card-image-overlay" />
                {project.featured && (
                    <span
                        style={{
                            position: "absolute",
                            top: 12,
                            right: 12,
                            background: "linear-gradient(135deg, #f59e0b, #ef4444)",
                            color: "#fff",
                            padding: "3px 10px",
                            borderRadius: "50px",
                            fontSize: "0.72rem",
                            fontWeight: 700,
                        }}
                    >
                        ⭐ Featured
                    </span>
                )}
            </div>
            <div className="project-card-body">
                {project.tags && project.tags.length > 0 && (
                    <div className="project-card-tags">
                        {project.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="tag">{tag}</span>
                        ))}
                    </div>
                )}
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-desc">{project.description}</p>
                <div className="project-card-actions">
                    <Link to={`/projects/${project._id}`} className="btn btn-primary">
                        View Details
                    </Link>
                    {project.githubLink && (
                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-secondary"
                        >
                            GitHub
                        </a>
                    )}
                    {project.liveLink && (
                        <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-outline"
                        >
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
};

export default ProjectCard;
