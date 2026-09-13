import { useCallback, useState } from "react";
import { Award, Calendar, Clock, Eye } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { certificates, type Certificate } from "../data";
import { SectionHeading } from "./Typography";
import { CertificateModal } from "./CertificateModal";

const ANIMATION = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

type CertificatesSectionProps = {
  hideHeading?: boolean;
};

export function CertificatesSection({ hideHeading = false }: CertificatesSectionProps) {
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);

  const prefersReducedMotion = useReducedMotion();

  const openCertificate = useCallback((certificate: Certificate) => {
    setSelectedCertificate(certificate);
  }, []);

  const closeCertificate = useCallback(() => {
    setSelectedCertificate(null);
  }, []);

  return (
    <>
      <section className="section compact certificates-section">
        <div className="container">
          {!hideHeading && (
            <SectionHeading
              kicker="Certificates & Learning"
              title="Certificates & Professional Development"
              body="Continuous learning across technology, business, and industry."
            />
          )}

          <div className="cert-grid">
            {certificates.map((certificate, index) => {
              const hasDuration = Boolean(certificate.duration);
              const hasDate = !hasDuration && Boolean(certificate.date);

              return (
                <motion.article
                  key={certificate.id}
                  className="cert-card"
                  initial={prefersReducedMotion ? false : ANIMATION.hidden}
                  whileInView={ANIMATION.visible}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  transition={{
                    duration: prefersReducedMotion ? 0 : 0.45,
                    delay: prefersReducedMotion ? 0 : index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <button
                    type="button"
                    className="cert-img-container"
                    onClick={() => openCertificate(certificate)}
                    aria-label={`View full certificate: ${certificate.title}`}
                  >
                    <span className="cert-category-badge">
                      {certificate.category}
                    </span>

                    <img
                      src={certificate.image}
                      alt={certificate.alt}
                      className="cert-img"
                      loading="lazy"
                      decoding="async"
                    />
                  </button>

                  <div className="cert-body">
                    <h3 className="cert-title">{certificate.title}</h3>

                    <div className="cert-meta">
                      <span className="cert-issuer">
                        <Award
                          size={15}
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />

                        {certificate.issuer}
                      </span>

                      {hasDuration && (
                        <span className="cert-duration-badge">
                          <Clock
                            size={13}
                            strokeWidth={1.8}
                            aria-hidden="true"
                          />

                          {certificate.duration}
                        </span>
                      )}

                      {hasDate && (
                        <span className="cert-date">
                          <Calendar
                            size={13}
                            strokeWidth={1.8}
                            aria-hidden="true"
                          />

                          {certificate.date}
                        </span>
                      )}
                    </div>

                    <p className="cert-desc">
                      {certificate.description}
                    </p>

                    {certificate.highlight && (
                      <div className="cert-highlight-box">
                        <span>Strategic Intent</span>
                        <p>{certificate.highlight}</p>
                      </div>
                    )}
                    {certificate.topics && certificate.topics.length > 0 && (
                      <ul
                        className="cert-topics-list"
                        aria-label={`${certificate.title} topics`}
                      >
                        {certificate.topics.map((topic) => (
                          <li
                            key={topic}
                            className="cert-topic-tag"
                          >
                            {topic}
                          </li>
                        ))}
                      </ul>
                    )}

                    <button
                      type="button"
                      className="cert-view-btn"
                      onClick={() => openCertificate(certificate)}
                      aria-label={`Open ${certificate.title}`}
                    >
                      <Eye
                        size={16}
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />

                      <span>View Certificate</span>
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <CertificateModal
        certificate={selectedCertificate}
        onClose={closeCertificate}
      />
    </>
  );
}