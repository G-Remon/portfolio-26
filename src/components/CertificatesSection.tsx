import { useState } from "react";
import { Award, Eye, Clock, Calendar } from "lucide-react";
import { motion } from "motion/react";
import { certificates, Certificate } from "../data";
import { SectionHeading } from "./Typography";
import { CertificateModal } from "./CertificateModal";

export function CertificatesSection() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="section soft">
      <div className="container">
        <SectionHeading
          kicker="Certificates & Learning"
          title="Certificates & Professional Development"
          body="Continuous learning across technology, business, and industry."
        />

        <div className="cert-grid">
          {certificates.map((cert, index) => (
            <motion.article
              key={cert.id}
              className="cert-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Adaptive Image Container */}
              <div
                className="cert-img-container"
                onClick={() => setSelectedCert(cert)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedCert(cert);
                  }
                }}
                aria-label={`View full certificate: ${cert.title}`}
              >
                <span className="cert-category-badge">{cert.category}</span>
                <img
                  src={cert.image}
                  alt={cert.alt}
                  className="cert-img"
                  loading="lazy"
                />
              </div>

              {/* Card Content */}
              <div className="cert-body">
                <h3 className="cert-title">{cert.title}</h3>

                <div className="cert-meta">
                  <span className="cert-issuer">
                    <Award size={15} />
                    {cert.issuer}
                  </span>

                  {cert.duration ? (
                    <span className="cert-duration-badge">
                      <Clock size={13} />
                      {cert.duration}
                    </span>
                  ) : cert.date ? (
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <Calendar size={13} />
                      {cert.date}
                    </span>
                  ) : null}
                </div>

                <p className="cert-desc">{cert.description}</p>

                {/* Sika Highlight Box */}
                {cert.highlight && (
                  <div className="cert-highlight-box">
                    <span>Strategic Intent</span>
                    <p>{cert.highlight}</p>
                  </div>
                )}

                {/* Topics Tags */}
                {cert.topics && cert.topics.length > 0 && (
                  <div className="cert-topics-list">
                    {cert.topics.map((topic) => (
                      <span key={topic} className="cert-topic-tag">
                        {topic}
                      </span>
                    ))}
                  </div>
                )}

                {/* View Certificate Button */}
                <button
                  type="button"
                  className="cert-view-btn"
                  onClick={() => setSelectedCert(cert)}
                >
                  <Eye size={16} />
                  View Certificate
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Lightbox Modal Viewer */}
      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </section>
  );
}
