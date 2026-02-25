import React from "react";

const About = () => {
    return (
        <main style={{ paddingTop: "90px" }}>
            <section className="section">
                <div className="container">
                    <div className="about-grid">
                        {/* Image column */}
                        <div className="about-image-wrap">
                            <div className="about-image-box">
                                <div
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        background:
                                            "linear-gradient(135deg, #7c3aed33, #06b6d433)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "8rem",
                                    }}
                                >
                                    👨‍💻
                                </div>
                            </div>
                            <div className="about-image-glow" />
                        </div>

                        {/* Content column */}
                        <div>
                            <h1 className="section-title">About Me</h1>
                            <p
                                style={{
                                    color: "var(--color-text-muted)",
                                    fontSize: "1.05rem",
                                    lineHeight: 1.9,
                                    marginBottom: 20,
                                }}
                            >
                                Hi! I'm a passionate Full-Stack Developer with expertise in the
                                MERN stack. I love turning ideas into reality through clean code
                                and intuitive design. My journey in software development started
                                6 months ago, and I've been building meaningful digital experiences
                                ever since.
                            </p>
                            <p
                                style={{
                                    color: "var(--color-text-muted)",
                                    fontSize: "1.05rem",
                                    lineHeight: 1.9,
                                    marginBottom: 32,
                                }}
                            >
                                When I'm not coding, I enjoy contributing to open-source
                                projects, writing tech articles, and exploring new frameworks.
                                I believe in writing code that is not just functional, but
                                elegant and maintainable.
                            </p>

                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "1fr 1fr",
                                    gap: 16,
                                    marginBottom: 32,
                                }}
                            >
                                {[
                                    ["📍 Location", "Lahore, Pakistan"],
                                    ["💼 Experience", "6+ Months"],
                                    ["🎓 Education", "BSCS"],
                                    ["🌐 Languages", "English, Urdu"],
                                ].map(([label, value]) => (
                                    <div
                                        key={label}
                                        style={{
                                            padding: "12px 16px",
                                            background: "var(--color-bg-card)",
                                            borderRadius: "var(--radius-sm)",
                                            border: "1px solid var(--color-border)",
                                        }}
                                    >
                                        <div
                                            style={{
                                                fontSize: "0.78rem",
                                                color: "var(--color-text-muted)",
                                                marginBottom: 4,
                                            }}
                                        >
                                            {label}
                                        </div>
                                        <div style={{ fontWeight: 600 }}>{value}</div>
                                    </div>
                                ))}
                            </div>

                            <div style={{ display: "flex", gap: 12 }}>
                                <a href="/contact" className="btn btn-primary">
                                    Hire Me
                                </a>
                                <a href="#" className="btn btn-secondary">
                                    Download CV
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Stats */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(4, 1fr)",
                            gap: 24,
                            marginTop: 80,
                        }}
                    >
                        {[
                            ["10+", "Projects Completed"],
                            ["5+", "Happy Clients"],
                            ["6+", "Months Experience"],
                        ].map(([num, label]) => (
                            <div
                                key={label}
                                style={{
                                    textAlign: "center",
                                    padding: "32px 20px",
                                    background: "var(--gradient-card)",
                                    border: "1px solid var(--color-border)",
                                    borderRadius: "var(--radius)",
                                }}
                            >
                                <div className="stat-number">{num}</div>
                                <div className="stat-label">{label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
