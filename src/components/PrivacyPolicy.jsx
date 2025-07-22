import React from 'react';
import styles from './PrivacyPolicy.module.scss';

const PrivacyPolicy = () => (
  <div className={styles.privacyWrapper}>
    <div className={styles.privacyGlass}>
      <h1 className={styles.privacyTitle}>Privacy Policy</h1>
      <div className={styles.privacySection}>
        <h2 className={styles.privacySubtitle}>Overview :</h2>
        <p>HavenHub Infra Privacy Policy (Updated June 20, 2024)</p>
        <p>
          HavenHub Reality Infra Pvt. Ltd. (“HavenHub Infra,” “we,” “us,” or “our”) is committed to protecting the privacy of our users (“you” or “your”). This Privacy Policy explains what information we collect, how we use it, and how we keep it secure.
        </p>
      </div>
      <div className={styles.privacySection}>
        <h2 className={styles.privacySubtitle}>Information We Collect:</h2>
        <ul>
          <li>
            <strong>Directly Provided Information:</strong>
            <ul>
              <li>Contact information: Name, email address, phone number, mailing address.</li>
              <li>Property search criteria: Location, price range, property type, etc.</li>
              <li>Communication details: Messages you send through forms, inquiries, etc.</li>
            </ul>
          </li>
          <li>
            <strong>Automatically Collected Information:</strong>
            <ul>
              <li>Usage data: Browsing history, search queries, pages viewed, etc.</li>
              <li>Device information: IP address, device type, system, browser type, etc.</li>
              <li>Cookies and similar technologies: We use cookies to user preferences, track website usage, and personalize experience. You can manage cookies through your browser settings.</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className={styles.privacySection}>
        <h2 className={styles.privacySubtitle}>How We Use Your Information:</h2>
        <ul>
          <li>Provide and improve our services: Connect you with properties, deliver search results, personalize your experience, and send you relevant communications.</li>
          <li>Respond to your inquiries and requests.</li>
          <li>Fulfill legal and regulatory obligations.</li>
          <li>Prevent fraud and misuse of our website.</li>
          <li>Analyze website usage and improve our services.</li>
        </ul>
      </div>
      <div className={styles.privacySection}>
        <h2 className={styles.privacySubtitle}>Sharing Your Information:</h2>
        <ul>
          <li>
            <strong>Service providers:</strong> We may share your information with vendors who help us operate our website and services, such as marketing agencies or technology providers.
          </li>
          <li>
            <strong>Legal requirements:</strong> We may disclose your information if required by law, subpoena, or court order.
          </li>
          <li>
            <strong>Business transfers:</strong> In the event of a merger, acquisition, or asset sale, your information may be transferred to the new owner.
          </li>
        </ul>
      </div>
      <div className={styles.privacySection}>
        <h2 className={styles.privacySubtitle}>Data Security</h2>
        <p>
          We implement appropriate security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. These measures include encryption, firewalls, and secure server facilities.
        </p>
      </div>
      <div className={styles.privacySection}>
        <h2 className={styles.privacySubtitle}>Your Data Protection Rights</h2>
        <ul>
          <li><strong>Access:</strong> You can request copies of your data.</li>
          <li><strong>Rectification:</strong> You can request correction of inaccurate or incomplete data.</li>
          <li><strong>Erasure:</strong> You can request the deletion of your data under certain conditions.</li>
          <li><strong>Restriction:</strong> You can request a restriction on processing your data.</li>
          <li><strong>Objection:</strong> You can object to the processing of your data.</li>
          <li><strong>Data Portability:</strong> You can request the transfer of your data to another organization.</li>
        </ul>
        <p>To exercise these rights, please contact us at <a href="https://www.havenhubinfra.com" target="_blank" rel="noopener noreferrer">www.havenhubinfra.com</a>.</p>
      </div>
      <div className={styles.privacySection}>
        <h2 className={styles.privacySubtitle}>Cookies and Tracking Technologies</h2>
        <p>
          We use cookies and similar tracking technologies to collect and use personal information about you. Cookies are small data files stored on your device. You can control the use of cookies through your browser settings.
        </p>
      </div>
      <div className={styles.privacySection}>
        <h2 className={styles.privacySubtitle}>Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these third-party sites. Please review their privacy policies before providing any personal information.
        </p>
      </div>
      <div className={styles.privacySection}>
        <h2 className={styles.privacySubtitle}>Children’s Privacy</h2>
        <p>
          Our services are not directed to children under the age of 18. We do not knowingly collect personal information from children. If we become aware that a child under 18 has provided us with personal information, we will take steps to delete such information.
        </p>
      </div>
      <div className={styles.privacySection}>
        <h2 className={styles.privacySubtitle}>Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. Your continued use of our services after the changes have been made will constitute your acceptance of the changes.
        </p>
      </div>
      <div className={styles.privacySection}>
        <h2 className={styles.privacySubtitle}>Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy, please contact us at:
        </p>
        <address>
          <strong>HavenHub Infra</strong><br />
          D-99, Ground Floor, Sec – 2,<br />
          Noida, 201301, Uttar Pradesh<br />
          Email: <a href="mailto:contact@havenhubinfra.com">contact@havenhubinfra.com</a>
        </address>
      </div>
      <div className={styles.privacyFooter}>
        <p>Copyright 2023-2024 HavenHub Reality Infra Pvt. Ltd. All rights reserved.</p>
        <p className={styles.privacyConsent}>
          By using our website, you agree to the terms of this Privacy Policy and consent to our collection, use, and sharing of your information as described herein.
        </p>
      </div>
    </div>
  </div>
);

export default PrivacyPolicy;