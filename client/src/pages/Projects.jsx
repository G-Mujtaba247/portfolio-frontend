import React, { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { getAllProjects } from "../api";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [search, setSearch] = useState("");
    const [filterTag, setFilterTag] = useState("All");

    useEffect(() => {
        getAllProjects()
            .then((res) => setProjects(res.data.projects || []))
            .catch(() => setError("Failed to load projects. Please try again."))
            .finally(() => setLoading(false));
    }, []);

    // Gather unique tags
    const allTags = ["All", ...new Set(projects.flatMap((p) => p.tags || []))];

    const filtered = projects.filter((p) => {
        const matchSearch =
            p.title.toLowerCase().includes(search.toLowerCase()) ||
            p.description.toLowerCase().includes(search.toLowerCase());
        const matchTag = filterTag === "All" || (p.tags || []).includes(filterTag);
        return matchSearch && matchTag;
    });

    return (
        <main style={{ paddingTop: "90px" }}>
            <section className="section">
                <div className="container">
                    <h1 className="section-title">My Projects</h1>
                    <p className="section-subtitle">
                        A collection of work that showcase my skills and passion for
                        building great software.
                    </p>

                    {/* Filters */}
                    <div
                        style={{
                            display: "flex",
                            gap: 16,
                            flexWrap: "wrap",
                            marginBottom: 40,
                            alignItems: "center",
                        }}
                    >
                        <input
                            type="text"
                            placeholder="Search projects..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="form-input"
                            style={{ flex: 1, minWidth: 240 }}
                        />
                        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                            {allTags.map((tag) => (
                                <button
                                    key={tag}
                                    onClick={() => setFilterTag(tag)}
                                    className={filterTag === tag ? "btn btn-primary" : "btn btn-secondary"}
                                    style={{ padding: "8px 16px", fontSize: "0.85rem" }}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Content */}
                    {loading ? (
                        <div className="loader-wrap">
                            <div className="loader" />
                        </div>
                    ) : error ? (
                        <div className="empty-state">
                            <div className="empty-state-icon">⚠️</div>
                            <p>{error}</p>
                        </div>
                    ) : filtered.length === 0 ? (
                        <div className="empty-state">
                            <div className="empty-state-icon">🔍</div>
                            <p>No projects found matching your criteria.</p>
                        </div>
                    ) : (
                        <>
                            <p
                                style={{
                                    color: "var(--color-text-muted)",
                                    marginBottom: 24,
                                    fontSize: "0.9rem",
                                }}
                            >
                                Showing {filtered.length} project{filtered.length !== 1 ? "s" : ""}
                            </p>
                            <div className="projects-grid">
                                {filtered.map((project) => (
                                    <ProjectCard key={project._id} project={project} />
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </section>
        </main>
    );
};

export default Projects;
