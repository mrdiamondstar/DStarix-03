import type { Metadata } from "next";
import { LegalLayout, type TocEntry } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service | DStarix Techno",
  description:
    "The terms that govern your use of the DStarix Techno website, products and services, including acceptable use, intellectual property, liability and termination.",
};

const toc: TocEntry[] = [
  { id: "acceptance", label: "1. Acceptance of Terms" },
  { id: "services", label: "2. Description of Services" },
  { id: "eligibility", label: "3. Eligibility" },
  { id: "accounts", label: "4. Accounts" },
  { id: "acceptable-use", label: "5. Acceptable Use" },
  { id: "intellectual-property", label: "6. Intellectual Property" },
  { id: "client-data", label: "7. Client Data & Confidentiality" },
  { id: "fees", label: "8. Fees & Payment" },
  { id: "warranties", label: "9. Warranties & Disclaimers" },
  { id: "liability", label: "10. Limitation of Liability" },
  { id: "indemnification", label: "11. Indemnification" },
  { id: "termination", label: "12. Termination" },
  { id: "governing-law", label: "13. Governing Law" },
  { id: "changes", label: "14. Changes to Terms" },
  { id: "contact", label: "15. Contact" },
];

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      updated="July 2026"
      intro="These terms govern your access to and use of the DStarix Techno website, products and services. Please read them carefully — by using our services, you agree to them."
      toc={toc}
    >
      <section id="acceptance">
        <h2>1. Acceptance of Terms</h2>
        <p>
          These Terms of Service (&ldquo;Terms&rdquo;) form a binding agreement between you
          and DStarix Techno (&ldquo;DStarix,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo; or
          &ldquo;our&rdquo;). By accessing or using our website, products or services (the
          &ldquo;Services&rdquo;), you agree to be bound by these Terms. If you are entering
          into these Terms on behalf of an organization, you represent that you have the
          authority to bind that organization.
        </p>
        <p>
          Where we deliver a specific engagement, a separate written master services
          agreement or statement of work (an &ldquo;Order&rdquo;) may apply. If there is any
          conflict between these Terms and a signed Order, the Order governs for that
          engagement.
        </p>
      </section>

      <section id="services">
        <h2>2. Description of Services</h2>
        <p>
          DStarix designs, builds and operates artificial-intelligence systems, and
          provides related consulting, engineering and support. The scope, deliverables,
          timelines and any service levels for a paid engagement are defined in the
          applicable Order. We may improve, modify or discontinue features of our website
          and Services over time, and will give reasonable notice of material changes that
          affect an active engagement.
        </p>
      </section>

      <section id="eligibility">
        <h2>3. Eligibility</h2>
        <p>
          You must be at least 18 years old and capable of forming a binding contract to
          use the Services. The Services are intended for business and professional use.
          You may not use the Services if you are barred from doing so under applicable law
          or subject to sanctions that would prohibit your use.
        </p>
      </section>

      <section id="accounts">
        <h2>4. Accounts</h2>
        <p>
          Some Services require an account. You agree to provide accurate information, keep
          your credentials confidential and remain responsible for all activity under your
          account. Notify us promptly of any unauthorized use or suspected security breach.
          We may suspend or disable accounts that we reasonably believe are compromised or
          used in violation of these Terms.
        </p>
      </section>

      <section id="acceptable-use">
        <h2>5. Acceptable Use</h2>
        <p>You agree not to, and not to permit any third party to:</p>
        <ul>
          <li>Use the Services for any unlawful, harmful, fraudulent or infringing purpose.</li>
          <li>Reverse engineer, decompile or attempt to extract source code or model weights except to the extent permitted by law.</li>
          <li>Interfere with or disrupt the integrity, security or performance of the Services or underlying infrastructure.</li>
          <li>Attempt to gain unauthorized access to any systems, data or accounts.</li>
          <li>Introduce malware, or scrape or harvest data in violation of applicable terms or law.</li>
          <li>Use the Services to generate content that is unlawful, defamatory, or that violates the rights or privacy of others.</li>
        </ul>
        <p>We may investigate suspected violations and take appropriate action, including suspension or termination of access.</p>
      </section>

      <section id="intellectual-property">
        <h2>6. Intellectual Property</h2>
        <p>
          The website, our platforms, methodologies, software, documentation and all
          related intellectual property are and remain owned by DStarix or its licensors.
          Except for the rights expressly granted to you in these Terms or an Order, no
          rights are transferred to you.
        </p>
        <p>
          Ownership of deliverables created specifically for a client, and any license
          grants relating to pre-existing or background intellectual property, are governed
          by the applicable Order. Unless stated otherwise, we retain ownership of general
          know-how, tools and reusable components we develop.
        </p>
      </section>

      <section id="client-data">
        <h2>7. Client Data &amp; Confidentiality</h2>
        <p>
          As between the parties, you retain all rights in the data you provide to us
          (&ldquo;Client Data&rdquo;). You grant us a limited license to process Client Data
          solely to provide and support the Services. Where we process personal data on your
          behalf, we do so as a processor under the Data Processing Agreement that forms
          part of your Order and in accordance with our Privacy Policy.
        </p>
        <p>
          Each party agrees to protect the other&rsquo;s confidential information with at
          least the same care it uses for its own, to use it only for the purposes of the
          engagement, and not to disclose it except to personnel and advisers with a need to
          know who are bound by confidentiality obligations.
        </p>
      </section>

      <section id="fees">
        <h2>8. Fees &amp; Payment</h2>
        <p>
          Fees, rates and payment terms for paid Services are set out in the applicable
          Order. Unless stated otherwise, fees are exclusive of taxes, and invoices are
          payable within thirty (30) days of the invoice date. Late payments may accrue
          interest at the lower of 1.5% per month or the maximum permitted by law. We may
          suspend Services for accounts that are materially overdue after reasonable notice.
        </p>
      </section>

      <section id="warranties">
        <h2>9. Warranties &amp; Disclaimers</h2>
        <p>
          We will perform paid Services in a professional and workmanlike manner consistent
          with the applicable Order. Except as expressly stated, the Services and website
          are provided <strong>&ldquo;as is&rdquo;</strong> and{" "}
          <strong>&ldquo;as available&rdquo;</strong> without warranties of any kind, whether
          express, implied or statutory, including implied warranties of merchantability,
          fitness for a particular purpose and non-infringement.
        </p>
        <p>
          Artificial-intelligence systems are probabilistic and may produce inaccurate or
          unexpected outputs. You are responsible for evaluating outputs and for any
          decisions made in reliance on them, and for maintaining appropriate human
          oversight where outcomes are material.
        </p>
      </section>

      <section id="liability">
        <h2>10. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, neither party will be liable for any
          indirect, incidental, special, consequential or punitive damages, or for lost
          profits, revenue, data or goodwill, arising out of or relating to these Terms or
          the Services, even if advised of the possibility of such damages.
        </p>
        <p>
          Except for liability that cannot be limited by law, each party&rsquo;s total
          aggregate liability arising out of or relating to the Services will not exceed the
          amounts paid or payable by you to us under the applicable Order in the twelve (12)
          months preceding the event giving rise to the claim.
        </p>
      </section>

      <section id="indemnification">
        <h2>11. Indemnification</h2>
        <p>
          You agree to defend, indemnify and hold harmless DStarix and its personnel from
          and against any claims, damages, liabilities and reasonable expenses arising out
          of your Client Data, your use of the Services in breach of these Terms, or your
          violation of applicable law or the rights of a third party. Any indemnities
          relating to a paid engagement are as set out in the applicable Order.
        </p>
      </section>

      <section id="termination">
        <h2>12. Termination</h2>
        <p>
          Either party may terminate an engagement as provided in the applicable Order. We
          may suspend or terminate your access to the website or Services if you materially
          breach these Terms and do not cure the breach within a reasonable period after
          notice, or immediately where required for security or legal reasons. Upon
          termination, your right to use the Services ceases, and provisions that by their
          nature should survive — including intellectual property, confidentiality,
          disclaimers, liability limits and indemnities — will survive.
        </p>
      </section>

      <section id="governing-law">
        <h2>13. Governing Law</h2>
        <p>
          These Terms are governed by the laws applicable at our principal place of
          business, without regard to conflict-of-laws principles. The courts located in
          that jurisdiction will have exclusive jurisdiction over any dispute, except that
          either party may seek injunctive relief in any court of competent jurisdiction to
          protect its intellectual property or confidential information. Where a signed
          Order specifies a different governing law or dispute-resolution process, that Order
          controls for the relevant engagement.
        </p>
      </section>

      <section id="changes">
        <h2>14. Changes to These Terms</h2>
        <p>
          We may update these Terms from time to time. When we make material changes, we
          will update the &ldquo;last updated&rdquo; date above and, where appropriate,
          provide additional notice. Your continued use of the Services after changes take
          effect constitutes acceptance of the revised Terms.
        </p>
      </section>

      <section id="contact">
        <h2>15. Contact Us</h2>
        <p>If you have questions about these Terms, please contact us:</p>
        <ul>
          <li>Email: <a href="mailto:legal@dstarix.in">legal@dstarix.in</a></li>
          <li>Post: DStarix Techno, Prestige Tech Park, Bengaluru 560103, India</li>
        </ul>
      </section>
    </LegalLayout>
  );
}
