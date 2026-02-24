import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import { getFeaturedProjects } from "../api";

const skills = [
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Express", icon: "🚂" },
    { name: "JavaScript", icon: "💛" },
    { name: "Tailwind", icon: "🌊" },
    { name: "Git", icon: "🔀" },
    { name: "REST API", icon: "🔌" },
    { name: "TypeScript", icon: "💙" },
];

const Home = () => {
    const [featuredProjects, setFeaturedProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getFeaturedProjects()
            .then((res) => setFeaturedProjects(res.data.projects || []))
            .catch(() => setFeaturedProjects([]))
            .finally(() => setLoading(false));
    }, []);

    return (
        <main>
            {/* Hero */}
            <section className="hero">
                <div className="container hero-content">
                    <div className="hero-badge">🚀 Available for Work</div>
                    <h1 className="hero-title">
                        Hi, I'm a <br />
                        <span className="highlight">Full-Stack Developer</span>
                    </h1>
                    <p className="hero-description">
                        I craft elegant digital experiences using cutting-edge technologies.
                        From pixel-perfect UIs to scalable backend architectures.
                    </p>
                    <div className="hero-actions">
                        <Link to="/projects" className="btn btn-primary">
                            View My Work
                        </Link>
                        <Link to="/contact" className="btn btn-secondary">
                            Let's Talk →
                        </Link>
                    </div>
                </div>
                <div className="hero-scroll">
                    <div className="hero-scroll-line" />
                    <span>Scroll Down</span>
                </div>
            </section>

            <div className="divider" />

            {/* Skills */}
            <section className="section">
                <div className="container">
                    <h2 className="section-title">Tech Stack</h2>
                    <p className="section-subtitle">
                        Technologies I use to bring ideas to life
                    </p>
                    <div className="skills-grid">
                        {skills.map((skill) => (
                            <div key={skill.name} className="skill-item">
                                <div className="skill-icon">{skill.icon}</div>
                                <div className="skill-name">{skill.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="divider" />

            {/* Featured Projects */}
            {!loading && featuredProjects.length > 0 && (
                <section className="section">
                    <div className="container">
                        <h2 className="section-title">Featured Projects</h2>
                        <p className="section-subtitle">
                            A selection of my best work
                        </p>
                        <div className="projects-grid">
                            {featuredProjects.map((project) => (
                                <ProjectCard key={project._id} project={project} />
                            ))}
                        </div>
                        <div style={{ textAlign: "center", marginTop: 48 }}>
                            <Link to="/projects" className="btn btn-primary">
                                View All Projects →
                            </Link>
                        </div>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="section" id="cta">
                <div className="container" style={{ textAlign: "center" }}>
                    <div
                        style={{
                            background:
                                "linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(6,182,212,0.1) 100%)",
                            border: "1px solid rgba(124,58,237,0.3)",
                            borderRadius: 24,
                            padding: "80px 40px",
                        }}
                    >
                        <h2 style={{ fontSize: "clamp(2rem,4vw,3rem)", marginBottom: 16 }}>
                            Have a project in mind?
                        </h2>
                        <p
                            style={{
                                color: "var(--color-text-muted)",
                                fontSize: "1.1rem",
                                marginBottom: 36,
                            }}
                        >
                            Let's collaborate and build something amazing together.
                        </p>
                        <Link to="/contact" className="btn btn-primary">
                            Start a Conversation →
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
