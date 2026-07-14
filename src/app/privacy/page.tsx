import type { Metadata } from "next";
import { LegalLayout, type TocEntry } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy | DStarix Techno",
  description:
    "How DStarix Techno collects, uses, shares and protects personal information, and the rights you have over your data under GDPR and CCPA.",
};

const toc: TocEntry[] = [
  { id: "introduction", label: "1. Introduction" },
  { id: "information-we-collect", label: "2. Information We Collect" },
  { id: "how-we-use", label: "3. How We Use It" },
  { id: "data-sharing", label: "4. Data Sharing" },
  { id: "data-security", label: "5. Data Security" },
  { id: "data-retention", label: "6. Data Retention" },
  { id: "your-rights", label: "7. Your Rights" },
  { id: "international-transfers", label: "8. International Transfers" },
  { id: "cookies", label: "9. Cookies" },
  { id: "childrens-privacy", label: "10. Children's Privacy" },
  { id: "changes", label: "11. Changes" },
  { id: "contact", label: "12. Contact" },
];

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      updated="July 2026"
      intro="This policy explains what information DStarix Techno collects, why we collect it, and the choices you have. We keep it plain, because trust is part of the product."
      toc={toc}
    >
      <section id="introduction">
        <h2>1. Introduction</h2>
        <p>
          DStarix Techno (&ldquo;DStarix,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo; or
          &ldquo;our&rdquo;) builds and operates artificial-intelligence systems for
          enterprise clients. This Privacy Policy describes how we handle personal
          information across our website, marketing activities, and the products and
          services we deliver to our clients.
        </p>
        <p>
          This policy covers information we process as a <strong>data controller</strong>
          {" "}— primarily website visitors, prospective clients and job applicants. Where
          we process personal data on behalf of a client as part of a delivered system, we
          act as a <strong>data processor</strong>, and that processing is governed by the
          Data Processing Agreement (DPA) in our contract with that client rather than by
          this policy.
        </p>
      </section>

      <section id="information-we-collect">
        <h2>2. Information We Collect</h2>
        <p>We collect information in three ways: directly from you, automatically, and from trusted third parties.</p>
        <h3>Information you provide</h3>
        <ul>
          <li>Contact and identity details such as name, email address, company, role and phone number when you fill out a form, book a call or email us.</li>
          <li>Content of your communications, including project requirements and any files you choose to share during a discovery conversation.</li>
          <li>Recruitment information such as your CV, work history and portfolio when you apply for a role.</li>
        </ul>
        <h3>Information collected automatically</h3>
        <ul>
          <li>Device and connection data such as IP address, browser type, operating system and referring URLs.</li>
          <li>Usage data such as pages viewed, links clicked and time spent, collected through cookies and similar technologies.</li>
        </ul>
        <h3>Information from third parties</h3>
        <ul>
          <li>Enrichment and verification data from business-information providers, and referrals from partners, where permitted by law.</li>
        </ul>
        <p>
          We do not intentionally collect special categories of personal data (such as
          health, biometric or political data) through our website, and we ask that you do
          not submit such information to us unsolicited.
        </p>
      </section>

      <section id="how-we-use">
        <h2>3. How We Use It</h2>
        <p>We use personal information only where we have a lawful basis to do so, including to:</p>
        <ul>
          <li>Respond to enquiries, schedule calls and provide the services you request.</li>
          <li>Deliver, maintain, secure and improve our website, products and services.</li>
          <li>Send relevant updates and marketing where you have consented or where we have a legitimate interest, subject to your right to opt out at any time.</li>
          <li>Evaluate job applications and manage our recruitment process.</li>
          <li>Detect, prevent and respond to fraud, abuse and security incidents.</li>
          <li>Comply with legal obligations and enforce our agreements.</li>
        </ul>
        <p>
          Our legal bases under the GDPR are, as applicable: your <strong>consent</strong>,
          the <strong>performance of a contract</strong>, our <strong>legitimate
          interests</strong> in operating and growing our business, and{" "}
          <strong>compliance with legal obligations</strong>.
        </p>
      </section>

      <section id="data-sharing">
        <h2>4. Data Sharing</h2>
        <p>We do not sell your personal information. We share it only in the limited circumstances below:</p>
        <ul>
          <li><strong>Service providers</strong> who process data on our behalf under contract — for example hosting, analytics, CRM and email delivery vendors.</li>
          <li><strong>Professional advisers</strong> such as auditors, lawyers and accountants where necessary.</li>
          <li><strong>Corporate transactions</strong> such as a merger, acquisition or asset sale, in which case data may be transferred subject to this policy.</li>
          <li><strong>Legal and safety</strong> reasons, where disclosure is required by law, regulation or valid legal process, or to protect rights, property and safety.</li>
        </ul>
        <p>All service providers are bound by contractual obligations to keep personal information confidential and to use it only for the services they provide to us.</p>
      </section>

      <section id="data-security">
        <h2>5. Data Security</h2>
        <p>
          Security is foundational to how we build. We apply technical and organizational
          measures appropriate to the risk, including encryption in transit and at rest,
          role-based access control, least-privilege permissions, network isolation,
          continuous monitoring and regular security reviews. Our engagements are built to
          align with SOC 2, ISO 27001, HIPAA and GDPR expectations.
        </p>
        <p>
          No method of transmission or storage is completely secure. While we work hard to
          protect your information, we cannot guarantee absolute security, and any
          transmission is at your own risk.
        </p>
      </section>

      <section id="data-retention">
        <h2>6. Data Retention</h2>
        <p>
          We retain personal information only for as long as necessary to fulfil the
          purposes described in this policy, including to satisfy legal, accounting or
          reporting requirements. Retention periods vary by data type: enquiry and CRM
          records are typically kept for the duration of our relationship plus a reasonable
          follow-up period; recruitment data is kept for the duration of the process and a
          limited period afterwards unless you consent to longer. When information is no
          longer needed, we securely delete or anonymize it.
        </p>
      </section>

      <section id="your-rights">
        <h2>7. Your Rights (GDPR &amp; CCPA)</h2>
        <p>Depending on where you live, you may have some or all of the following rights over your personal information:</p>
        <ul>
          <li><strong>Access</strong> — request a copy of the personal data we hold about you.</li>
          <li><strong>Rectification</strong> — ask us to correct inaccurate or incomplete data.</li>
          <li><strong>Erasure</strong> — ask us to delete your data in certain circumstances.</li>
          <li><strong>Restriction and objection</strong> — limit or object to certain processing, including direct marketing.</li>
          <li><strong>Portability</strong> — receive your data in a structured, machine-readable format.</li>
          <li><strong>Withdraw consent</strong> — where processing is based on consent, at any time.</li>
          <li><strong>Non-discrimination</strong> — we will not discriminate against you for exercising your CCPA rights, and we do not sell or share personal information as those terms are defined under California law.</li>
        </ul>
        <p>
          To exercise any of these rights, contact us using the details below. We will
          respond within the timeframes required by applicable law. You also have the right
          to lodge a complaint with your local data protection authority.
        </p>
      </section>

      <section id="international-transfers">
        <h2>8. International Transfers</h2>
        <p>
          We operate globally, with teams and infrastructure across multiple regions. Your
          information may be transferred to, and processed in, countries other than the one
          in which you reside. Where we transfer personal data out of the European Economic
          Area, the United Kingdom or other regulated regions, we rely on appropriate
          safeguards such as the European Commission&rsquo;s Standard Contractual Clauses
          and equivalent mechanisms, together with additional technical measures where
          needed.
        </p>
      </section>

      <section id="cookies">
        <h2>9. Cookies</h2>
        <p>
          We use cookies and similar technologies to run our website, remember your
          preferences, measure performance and understand how our site is used. Essential
          cookies are required for the site to function; analytics and preference cookies
          are optional and set only with your consent where required.
        </p>
        <p>
          You can control cookies through your browser settings and, where offered, through
          our cookie preferences tool. Disabling some cookies may affect how parts of the
          site behave.
        </p>
      </section>

      <section id="childrens-privacy">
        <h2>10. Children&rsquo;s Privacy</h2>
        <p>
          Our website and services are intended for businesses and individuals aged 18 and
          over. We do not knowingly collect personal information from children. If you
          believe a child has provided us with personal data, please contact us and we will
          take steps to delete it.
        </p>
      </section>

      <section id="changes">
        <h2>11. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time to reflect changes in our
          practices, technology or legal requirements. When we make material changes, we
          will update the &ldquo;last updated&rdquo; date above and, where appropriate,
          provide additional notice. We encourage you to review this page periodically.
        </p>
      </section>

      <section id="contact">
        <h2>12. Contact Us</h2>
        <p>
          If you have questions about this policy or how we handle your information, or if
          you would like to exercise your rights, please reach out:
        </p>
        <ul>
          <li>Email: <a href="mailto:privacy@dstarix.in">privacy@dstarix.in</a></li>
          <li>Data Protection Officer: <a href="mailto:dpo@dstarix.in">dpo@dstarix.in</a></li>
          <li>Post: DStarix Techno, Prestige Tech Park, Bengaluru 560103, India</li>
        </ul>
      </section>
    </LegalLayout>
  );
}
