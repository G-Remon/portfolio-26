import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export function BackButton() {
  const navigate = useNavigate();
  const location = useLocation();

  // Do not render the Back button on the initial root Home page
  if (location.pathname === "/" && !location.hash) {
    return null;
  }

  const handleBack = () => {
    // Check if there is a previous history entry in the browser session
    const hasHistory = window.history.state && window.history.state.idx > 0;
    if (hasHistory) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <button
      type="button"
      className="back-button"
      onClick={handleBack}
      aria-label="Go back"
      title="Go back"
    >
      <ArrowLeft className="back-button-icon" size={18} aria-hidden="true" />
      <span className="back-button-label">Back</span>
    </button>
  );
}
