// src/components/TermsOfUse.jsx
import React from 'react';
import styles from './TermsOfUse.module.scss';

const TermsOfUse = () => {
  return (
    <div className={styles.termsContainer}>
      <h1 className={styles.title}>Terms of Use</h1>
      <p className={styles.text}>
        By using this website, you agree to the terms of use as follows.
      </p>

      <section>
        <h2>Access and Use</h2>
        <ul>
          <li>To access certain resources on this website, you may be required to provide accurate and up-to-date personal information.</li>
          <li>You are responsible for maintaining the confidentiality of your login information.</li>
          <li>You agree to access resources only through authorized means and not disrupt or interfere with the website’s operation.</li>
        </ul>
      </section>

      <section>
        <h2>Prohibited Activities</h2>
        <ul>
          <li>Copying, duplicating, reproducing, selling, or reselling any website content is strictly prohibited.</li>
          <li>You are responsible for any unauthorized activities conducted using your account.</li>
        </ul>
      </section>

      <section>
        <h2>Indemnification</h2>
        <p>You agree to indemnify HavenHub Infra for any losses or damages arising from your violation of this disclaimer.</p>
      </section>

      <section>
        <h2>Intellectual Property</h2>
        <p>All trademarks, service marks, and logos displayed on this website are the property of HavenHub Infra. Unauthorized use is prohibited.</p>
      </section>

      <section>
        <h2>Unsolicited Ideas</h2>
        <p>While HavenHub Infra welcomes feedback, any information or materials submitted through this website will be considered non-confidential and non-proprietary.</p>
      </section>

      <section>
        <h2>Limitation of Liability</h2>
        <p>HavenHub Infra is not liable for any direct or indirect losses or damages arising from your use of this website.</p>
      </section>

      <section>
        <h2>Privacy</h2>
        <p>HavenHub Infra respects your privacy. Please refer to our separate Privacy Policy for details on information collection and management.</p>
      </section>

      <section>
        <h2>Entire Agreement</h2>
        <p>This disclaimer constitutes the entire agreement between you and HavenHub Infra regarding your use of this website.</p>
      </section>
    </div>
  );
};

export default TermsOfUse;
