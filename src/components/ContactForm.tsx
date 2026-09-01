import { useState, useRef, FormEvent } from "react";
import emailjs from '@emailjs/browser';
import { ArrowRight } from "lucide-react";
import { profile } from "../data";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    
    // Check if env vars are present, if not fallback to mailto (for now, until user adds keys)
    if (!import.meta.env.VITE_EMAILJS_SERVICE_ID) {
      const d = new FormData(e.currentTarget);
      const subject = encodeURIComponent(`${d.get("type")} inquiry from ${d.get("name")}`);
      const body = encodeURIComponent(`Name: ${d.get("name")}\nCompany: ${d.get("company")}\nTimeline: ${d.get("timeline")}\nEmail: ${d.get("email")}\n\n${d.get("message")}`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus("success");
      return;
    }

    setStatus("loading");

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formRef.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setStatus("success");
      formRef.current?.reset();
    })
    .catch((error) => {
      console.error(error);
      setStatus("error");
    });
  };

  return (
    <form ref={formRef} onSubmit={sendEmail}>
      <label>
        Name
        <input required name="name" autoComplete="name" disabled={status === "loading"} />
      </label>
      <label>
        Email
        <input required name="email" type="email" autoComplete="email" disabled={status === "loading"} />
      </label>
      <label>
        Company / Organization
        <input name="company" autoComplete="organization" disabled={status === "loading"} />
      </label>
      <label>
        Project type
        <select name="type" defaultValue="Automation / Business System" disabled={status === "loading"}>
          {["Automation / Business System", "Data Analysis / Dashboard", "AI Workflow", "Content / Creative Project", "Website / Front-End", "Presentation / Company Profile", "Consultation", "Other"].map(x => (
            <option key={x} value={x}>{x}</option>
          ))}
        </select>
      </label>
      <label>
        Timeline <span>(optional)</span>
        <input name="timeline" placeholder="e.g. This month" disabled={status === "loading"} />
      </label>
      <label className="full">
        Message
        <textarea required name="message" rows={7} placeholder="What is happening now, and what would you like to improve?" disabled={status === "loading"} />
      </label>
      
      <button className="button primary" type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : <>Send inquiry <ArrowRight size={18} /></>}
      </button>

      {status === "success" && (
        <p className="form-note" role="status" style={{ color: "green" }}>
          Message sent successfully. I will get back to you soon.
          {!import.meta.env.VITE_EMAILJS_SERVICE_ID && " (Opened in your email client due to missing EmailJS keys in .env)"}
        </p>
      )}
      {status === "error" && (
        <p className="form-note" role="status" style={{ color: "red" }}>
          Something went wrong. Please try emailing directly.
        </p>
      )}
    </form>
  );
}
