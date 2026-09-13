import {
  useCallback,
  useEffect,
  useId,
  useRef,
} from "react";
import { X } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";

import type { Certificate } from "../data";

type CertificateModalProps = {
  certificate: Certificate | null;
  onClose: () => void;
};

const FOCUSABLE_ELEMENTS = [
  'button:not([disabled])',
  'a[href]',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(",");

export function CertificateModal({
  certificate,
  onClose,
}: CertificateModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  const titleId = useId();
  const descriptionId = useId();

  const prefersReducedMotion = useReducedMotion();

  const handleBackdropClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      if (event.target === event.currentTarget) {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (!certificate) return;

    previousActiveElement.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !modalRef.current) {
        return;
      }

      const focusableElements = Array.from(
        modalRef.current.querySelectorAll<HTMLElement>(
          FOCUSABLE_ELEMENTS,
        ),
      );

      if (!focusableElements.length) return;

      const firstElement = focusableElements[0];
      const lastElement =
        focusableElements[focusableElements.length - 1];

      if (
        event.shiftKey &&
        document.activeElement === firstElement
      ) {
        event.preventDefault();
        lastElement.focus();
      } else if (
        !event.shiftKey &&
        document.activeElement === lastElement
      ) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;

      document.removeEventListener(
        "keydown",
        handleKeyDown,
      );

      previousActiveElement.current?.focus();
    };
  }, [certificate, onClose]);

  const backdropMotion = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      };

  const modalMotion = prefersReducedMotion
    ? {}
    : {
        initial: {
          opacity: 0,
          scale: 0.96,
          y: 16,
        },
        animate: {
          opacity: 1,
          scale: 1,
          y: 0,
        },
        exit: {
          opacity: 0,
          scale: 0.97,
          y: 10,
        },
      };

  return (
    <AnimatePresence>
      {certificate && (
        <motion.div
          className="cert-modal-backdrop"
          {...backdropMotion}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.2,
          }}
          onMouseDown={handleBackdropClick}
        >
          <motion.div
            ref={modalRef}
            className="cert-modal-container"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descriptionId}
            {...modalMotion}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.28,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <header className="cert-modal-header">
              <div className="cert-modal-title">
                <h3 id={titleId}>
                  {certificate.title}
                </h3>

                <p id={descriptionId}>
                  {certificate.issuer}
                  <span aria-hidden="true"> · </span>
                  {certificate.category}
                </p>
              </div>

              <button
                ref={closeButtonRef}
                type="button"
                className="cert-modal-close"
                onClick={onClose}
                aria-label="Close certificate viewer"
              >
                <X
                  size={20}
                  strokeWidth={1.8}
                  aria-hidden="true"
                />
              </button>
            </header>

            <div className="cert-modal-body">
              <img
                src={certificate.image}
                alt={certificate.alt}
                className="cert-modal-img"
                decoding="async"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}