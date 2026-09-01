import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Layout } from "../components/layout";
import { PageMeta } from "../components/PageMeta";
import { PageIntro } from "../components/Typography";
import { Helmet } from "react-helmet-async";

export function NotFound() {
  return (
    <Layout>
      <PageMeta 
        title="404: Not Found — Gerges Remon"
        description="The requested page could not be found."
      />
      {/* Explicitly noindex the 404 page */}
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      
      <PageIntro 
        eyebrow="404 Error" 
        title="Page not found." 
        body="The page or case study you requested does not exist or has been moved."
      />
      
      <section className="section compact" style={{ minHeight: '40vh' }}>
        <div className="container" style={{ display: 'flex', gap: '15px' }}>
          <Link className="button primary" to="/">
            Return Home <ArrowRight size={18} />
          </Link>
          <Link className="button secondary" to="/work">
            View My Work <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
