import React, { useState } from "react";

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
    const [status, setStatus] = useState("");

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        // In production, wire this to a backend email endpoint
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus(""), 4000);
    };

    return (
        <main style={{ paddingTop: "90px" }}>
            <section className="section">
                <div className="container">
                    <h1 className="section-title">Get In Touch</h1>
                    <p className="section-subtitle">
                        Have a project in mind or just want to say hi? My inbox is open.
                    </p>

                    <div className="contact-grid">
                        {/* Form */}
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="form-label">Your Name</label>
                                <input
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="John Doe"
                                    className="form-input"
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Email Address</label>
                                <input
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="john@example.com"
                                    className="form-input"
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Subject</label>
                                <input
                                    name="subject"
                                    value={form.subject}
                                    onChange={handleChange}
                                    required
                                    placeholder="Project Inquiry"
                                    className="form-input"
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Message</label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="Tell me about your project..."
                                    className="form-textarea"
                                />
                            </div>
                            {status === "success" && (
                                <div
                                    style={{
                                        padding: "12px 16px",
                                        background: "rgba(16,185,129,0.15)",
                                        border: "1px solid var(--color-success)",
                                        borderRadius: "var(--radius-sm)",
                                        color: "var(--color-success)",
                                        fontWeight: 500,
                                    }}
                                >
                                    ✅ Message sent successfully! I'll get back to you soon.
                                </div>
                            )}
                            <button type="submit" className="btn btn-primary">
                                Send Message →
                            </button>
                        </form>

                        {/* Info */}
                        <div>
                            <ul className="contact-info-list">
                                {[
                                    { icon: "📧", title: "Email", info: "mujtabaofficial247@gmail.com" },
                                    { icon: "📍", title: "Location", info: "Lahore, Pakistan" },
                                    { icon: "💼", title: "LinkedIn", info: "www.linkedin.com/in/ghulam-mujtaba-gm247" },
                                    { icon: "🐙", title: "GitHub", info: "https://github.com/G-Mujtaba247" },
                                ].map((item) => (
                                    <li key={item.title} className="contact-info-item">
                                        <div className="contact-info-icon">{item.icon}</div>
                                        <div>
                                            <div
                                                style={{
                                                    fontWeight: 600,
                                                    marginBottom: 4,
                                                    fontSize: "0.95rem",
                                                }}
                                            >
                                                {item.title}
                                            </div>
                                            <div
                                                style={{
                                                    color: "var(--color-text-muted)",
                                                    fontSize: "0.9rem",
                                                }}
                                            >
                                                {item.info}
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <div
                                style={{
                                    marginTop: 32,
                                    padding: 24,
                                    background: "var(--gradient-card)",
                                    border: "1px solid var(--color-border)",
                                    borderRadius: "var(--radius)",
                                    textAlign: "center",
                                }}
                            >
                                <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", marginBottom: 8 }}>
                                    ⚡ Average response time
                                </p>
                                <p style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--color-primary-light)" }}>
                                    Within 24 hours
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
