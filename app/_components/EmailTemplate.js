import React from "react";
import { Body, Button, Container, Column, Head, Heading, Html, Img, Preview, Row, Section, Text } from "@react-email/components";

const EmailTemplate = ({ fileName, fileSize, fileType, shortUrl }) => (
  <Html>
    <Head />
    <Preview>File Shared with You</Preview>
    <Body style={main}>
      <Container>
        <Section style={logo}>
          <Img src='/public/ambox.png' />
        </Section>
        <Section style={content}>
          <Row>
            <Column>
              <Heading as="h2" style={{ fontSize: 26, fontWeight: "bold", textAlign: "center" }}>
                A file has been shared with you.
              </Heading>
              <Text style={paragraph}><b>File Name:</b> {fileName}</Text>
              <Text style={paragraph}><b>File Size:</b> {fileSize}</Text>
              <Text style={paragraph}><b>File Type:</b> {fileType}</Text>
              <Text style={paragraph}><b>Download Link:</b> <a href={shortUrl}>{shortUrl}</a></Text>
              <Text style={paragraph}>
                If you have any questions, please contact support.
              </Text>
            </Column>
          </Row>
        </Section>
        <Text style={{ textAlign: "center", fontSize: 12, color: "rgb(0,0,0, 0.7)" }}>
          © 2024 | AMBOX-FILESHARE
        </Text>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: "#fff",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const paragraph = {
  fontSize: 16,
};

const logo = {
  padding: "30px 20px",
};

const containerButton = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
};

const button = {
  backgroundColor: "#e00707",
  borderRadius: 3,
  color: "#FFF",
  fontWeight: "bold",
  border: "1px solid rgb(0,0,0, 0.1)",
  cursor: "pointer",
  padding: "12px 30px",
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
  overflow: "hidden",
};

const image = {
  maxWidth: "100%",
};

const boxInfos = {
  padding: "20px",
};

export default EmailTemplate;
