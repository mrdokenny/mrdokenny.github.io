import * as React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

const styles = {
  center: {
    textAlign: 'center',
  } as React.CSSProperties,
  icons: {
    marginRight: '5px',
  } as React.CSSProperties,
  white: {
    background: 'white',
    border: '1px solid #ddd',
    padding: '1em',
  } as React.CSSProperties,
};

const Contact = () => (
  <Container>
    <Row>
      <Col xs={12} sm={8}>
        <div style={styles.white}>
          <h2 style={styles.center}>Get in Touch</h2>
          <p>
            If you like what you see here and would like to request a resume,
            please contact me via email.
          </p>
          <p>
            {"Also, if you have any questions, please don't hesitate to ask."}
          </p>
        </div>
      </Col>
      <Col xs={12} sm={4}>
        <div style={styles.white}>
          <dl>
            <dt>Email</dt>
            <dd>
              <a
                href="mailto:contact@kennydo.com"
                title="Click to send me an email"
              >
                contact@kennydo.com
              </a>
            </dd>
          </dl>
          <SocialIcon
            style={styles.icons}
            url="mailto:contact@kennydo.com"
            network="email"
            title="Click to send me an email"
          />
          <SocialIcon
            style={styles.icons}
            url="https://github.com/mrdokenny"
            title="Come see my projects"
          />
        </div>
      </Col>
    </Row>
  </Container>
);

export default Contact;
