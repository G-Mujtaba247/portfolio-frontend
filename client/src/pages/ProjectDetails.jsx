import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProjectById } from "../api";

const ProjectDetails = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        getProjectById(id)
            .then((res) => setProject(res.data.project || null))
            .catch(() => setError("Project not found."))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) {
        return (
            <div className="loader-wrap" style={{ minHeight: "100vh" }}>
                <div className="loader" />
            </div>
        );
    }

    if (error || !project) {
        return (
            <main style={{ paddingTop: "90px" }}>
                <div className="container">
                    <div className="empty-state" style={{ minHeight: "60vh" }}>
                        <div className="empty-state-icon">😕</div>
                        <p>{error || "Project not found."}</p>
                        <Link to="/projects" className="btn btn-primary" style={{ marginTop: 24 }}>
                            ← Back to Projects
                        </Link>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main style={{ paddingTop: "90px", minHeight: "100vh" }}>
            <section className="section" style={{ paddingTop: 40 }}>
                <div className="container">
                    <Link
                        to="/projects"
                        style={{
                            color: "var(--color-text-muted)",
                            fontSize: "0.9rem",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 8,
                            marginBottom: 32,
                        }}
                        className="btn-secondary"
                    >
                        ← Back to Projects
                    </Link>

                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1fr 1fr",
                            gap: 48,
                            alignItems: "start",
                        }}
                    >
                        {/* Image */}
                        <div>
                            <div
                                style={{
                                    borderRadius: "var(--radius)",
                                    overflow: "hidden",
                                    border: "1px solid var(--color-border)",
                                    height: 360,
                                    background: "linear-gradient(135deg, #7c3aed22, #06b6d422)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                {project.image ? (
                                    <img
                                        src={project.image.startsWith("http") ? project.image : `${process.env.REACT_APP_SERVER_URL || "http://localhost:5000"}${project.image}`}
                                        alt={project.title}
                                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                    />
                                ) : (
                                    <span style={{ fontSize: "5rem" }}>🚀</span>
                                )}
                            </div>
                        </div>

                        {/* Info */}
                        <div>
                            {project.featured && (
                                <span
                                    style={{
                                        display: "inline-block",
                                        background: "linear-gradient(135deg,#f59e0b,#ef4444)",
                                        color: "#fff",
                                        padding: "4px 14px",
                                        borderRadius: 50,
                                        fontSize: "0.8rem",
                                        fontWeight: 700,
                                        marginBottom: 16,
                                    }}
                                >
                                    ⭐ Featured Project
                                </span>
                            )}
                            <h1
                                style={{
                                    fontSize: "clamp(1.8rem,4vw,2.8rem)",
                                    marginBottom: 16,
                                }}
                            >
                                {project.title}
                            </h1>

                            {project.tags && project.tags.length > 0 && (
                                <div className="project-card-tags" style={{ marginBottom: 20 }}>
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>
                            )}

                            <p
                                style={{
                                    color: "var(--color-text-muted)",
                                    lineHeight: 1.8,
                                    marginBottom: 32,
                                    fontSize: "1rem",
                                }}
                            >
                                {project.description}
                            </p>

                            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                                {project.liveLink && (
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn btn-primary"
                                    >
                                        🌐 Live Demo
                                    </a>
                                )}
                                {project.githubLink && (
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn btn-secondary"
                                    >
                                        GitHub Repo
                                    </a>
                                )}
                            </div>

                            <div
                                style={{
                                    marginTop: 32,
                                    padding: 16,
                                    background: "var(--color-bg-card)",
                                    borderRadius: "var(--radius-sm)",
                                    border: "1px solid var(--color-border)",
                                }}
                            >
                                <p style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}>
                                    📅 Added on{" "}
                                    {new Date(project.createdAt).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ProjectDetails;
