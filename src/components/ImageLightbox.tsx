import { useEffect, useState, useRef, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, AlertCircle } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

type ImageLightboxProps = {
  images: string[];
  initialIndex?: number;
  altPrefix?: string;
  onClose: () => void;
};

export function ImageLightbox({
  images,
  initialIndex = 0,
  altPrefix = "Project screenshot",
  onClose,
}: ImageLightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [imageError, setImageError] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  const prefersReducedMotion = useReducedMotion();

  const totalImages = images.length;
  const currentImage = images[currentIndex] || "";

  // Next image handler
  const handleNext = useCallback(() => {
    setImageError(false);
    setCurrentIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
  }, [totalImages]);

  // Previous image handler
  const handlePrev = useCallback(() => {
    setImageError(false);
    setCurrentIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  }, [totalImages]);

  // Body scroll lock & focus management
  useEffect(() => {
    previousActiveElement.current = document.activeElement as HTMLElement;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Focus close button on mount
    if (closeButtonRef.current) {
      closeButtonRef.current.focus();
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      if (previousActiveElement.current) {
        previousActiveElement.current.focus();
      }
    };
  }, []);

  // Keyboard navigation & trap
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight" && totalImages > 1) {
        handleNext();
      } else if (e.key === "ArrowLeft" && totalImages > 1) {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev, onClose, totalImages]);

  // Touch gesture handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || totalImages <= 1) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX.current - touchEndX;

    if (diffX > 40) {
      handleNext();
    } else if (diffX < -40) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        className="lightbox-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={`${altPrefix} viewer`}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Close Button */}
        <button
          ref={closeButtonRef}
          type="button"
          className="lightbox-close-btn"
          onClick={onClose}
          aria-label="Close image viewer"
          title="Close image viewer"
        >
          <X size={22} />
        </button>

        {/* Previous Arrow */}
        {totalImages > 1 && (
          <button
            type="button"
            className="lightbox-arrow lightbox-arrow-left"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            aria-label="Previous image"
            title="Previous image"
          >
            <ChevronLeft size={26} />
          </button>
        )}

        {/* Image Content Container */}
        <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              className="lightbox-img-wrapper"
              initial={
                prefersReducedMotion
                  ? { opacity: 0 }
                  : { opacity: 0, scale: 0.97, y: 10 }
              }
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={
                prefersReducedMotion
                  ? { opacity: 0 }
                  : { opacity: 0, scale: 0.97, y: -10 }
              }
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              {imageError ? (
                <div className="lightbox-error">
                  <AlertCircle size={32} />
                  <p>Image unavailable</p>
                </div>
              ) : (
                <img
                  src={currentImage}
                  alt={`${altPrefix} — image ${currentIndex + 1} of ${totalImages}`}
                  className="lightbox-img"
                  onError={() => setImageError(true)}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Next Arrow */}
        {totalImages > 1 && (
          <button
            type="button"
            className="lightbox-arrow lightbox-arrow-right"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            aria-label="Next image"
            title="Next image"
          >
            <ChevronRight size={26} />
          </button>
        )}

        {/* Counter */}
        {totalImages > 1 && (
          <div className="lightbox-counter" onClick={(e) => e.stopPropagation()}>
            <span>{currentIndex + 1}</span> / <span>{totalImages}</span>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
