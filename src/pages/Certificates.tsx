import { Layout } from "../components/layout";
import { PageMeta } from "../components/PageMeta";
import { CertificatesSection } from "../components/CertificatesSection";

export function Certificates() {
  return (
    <Layout>
      <PageMeta
        title="Certificates & Professional Development — Gerges Remon"
        description="Professional certificates and continuous learning across technology, business, industry knowledge, and front-end development."
      />

      <section className="page-intro">
        <div className="container">
          <p className="eyebrow">Certificates & Learning</p>
          <h1>Certificates & Professional Development</h1>
          <p>
            Learning with purpose — strengthening the technical, business, and
            creative knowledge behind the work I build.
          </p>
        </div>
      </section>

      <CertificatesSection hideHeading={true} />
    </Layout>
  );
}
