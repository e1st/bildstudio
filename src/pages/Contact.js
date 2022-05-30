import { useState } from "react";
import styled from "styled-components";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { ReCaptcha } from "react-recaptcha-v3";
import { GoogleMapConfig } from "../config/GoogleMapConfig";
import { GoogleMapStyles } from "../styles/GoogleMap";
import { GoogleMapUtil } from "../utils/GoogleMapUtil";
import { PageHeading } from "../components/PageHeading";
import { AppConfig } from "../config/AppConfig";

const GoogleMapContainer = styled.div``;
const ContactFormContainer = styled.div``;
const ContactForm = styled.form``;
const ContactFormEmailSent = styled.div``;
const ContactFormElement = styled.div`
  button,
  textarea,
  input {
    width: 100%;
    padding: 15px;
    border: 2px solid #898787;
    transition: background-color 0.2s;
    resize: none;

    &:focus-visible {
      outline: none;
    }
  }

  textarea,
  input {
    &:focus {
      background-color: #efefef;
    }
  }

  button {
    border: 0;
    background-color: #2ecc71;
    color: #fff;
    cursor: pointer;
    font-size: 16px;
    text-transform: capitalize;

    &:hover {
      background-color: #24b963;
    }
  }

  margin-bottom: 15px;
`;
const ContactFormSection = styled.div`
  margin-bottom: 25px;
`;
const ContactFormSectionHeading = styled.h2`
  margin-bottom: 16px;
`;
const ContactFormSectionContent = styled.p``;
const ContactInfo = styled.div`
  margin-bottom: 16px;
`;
const ContactInfoSection = styled.div`
  margin-bottom: 8px;
`;
const ContactInfoHours = styled.ul``;
const ContactInfoHoursItem = styled.li`
  display: flex;
  margin-bottom: 10px;
  justify-content: space-between;

  &:last-child {
    margin: 0;
  }
`;
const SuccessMessage = styled.h4`
  color: #24b963;
`;
const ContactInfoMailTo = styled.a`
  color: #24b963;
  transition: color 0.2s;

  &:hover {
    color: #000000;
  }
`;

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    name: null,
    email: null,
    subject: null,
    message: null,
  });

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setSuccess(checkIsFormValid());
  };

  const checkIsFormValid = () => {
    const { name, email, subject, message } = form;
    return name && email && subject && message ? true : false;
  };

  return (
    <>
      <PageHeading title="Got a Question or INquiry?" />

      <GoogleMapContainer>
        <LoadScript googleMapsApiKey={GoogleMapConfig.apiKey}>
          <GoogleMap
            mapContainerStyle={GoogleMapStyles}
            zoom={13}
            center={GoogleMapUtil.getDefaults()}
          />
        </LoadScript>
      </GoogleMapContainer>

      <section className="container">
        <div className="row">
          <div className="col-xs-12 col-lg-9">
            <ContactFormSection>
              <ContactFormSectionHeading>
                Contact Form
              </ContactFormSectionHeading>
              <ContactFormSectionContent>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                tincidunt dolor et tristique bibendum. Aenean sollicitudin vitae
                dolor ut posuere.
              </ContactFormSectionContent>
            </ContactFormSection>
            <ContactFormContainer>
              {!success && (
                <ContactForm onSubmit={onSubmitHandler}>
                  <ContactFormElement className="col-xs-12 col-lg-7">
                    <div className="row">
                      <input
                        type="text"
                        placeholder="Name"
                        required
                        onChange={(event) => {
                          setForm({
                            ...form,
                            name: event.target.value
                              ? event.target.value
                              : null,
                          });
                        }}
                      />
                    </div>
                  </ContactFormElement>
                  <ContactFormElement className="col-xs-12 col-lg-7">
                    <div className="row">
                      <input
                        type="email"
                        placeholder="E-mail Address"
                        required
                        onChange={(event) => {
                          setForm({
                            ...form,
                            email: event.target.value
                              ? event.target.value
                              : null,
                          });
                        }}
                      />
                    </div>
                  </ContactFormElement>
                  <ContactFormElement className="col-xs-12 col-lg-7">
                    <div className="row">
                      <input
                        type="text"
                        placeholder="Subject"
                        onChange={(event) => {
                          setForm({
                            ...form,
                            subject: event.target.value
                              ? event.target.value
                              : null,
                          });
                        }}
                      />
                    </div>
                  </ContactFormElement>
                  <ContactFormElement className="col-xs-12 col-lg-10">
                    <div className="row">
                      <textarea
                        placeholder="Message"
                        rows={10}
                        required
                        maxLength={100}
                        onChange={(event) => {
                          setForm({
                            ...form,
                            message: event.target.value
                              ? event.target.value
                              : null,
                          });
                        }}
                      ></textarea>
                    </div>
                  </ContactFormElement>
                  <ContactFormElement className="col-xs-12 col-lg-3">
                    <div className="row">
                      <button type="submit">Send Message</button>
                    </div>
                  </ContactFormElement>

                  <ContactFormElement className="col-xs-12 col-lg-3">
                    <ReCaptcha
                      sitekey={GoogleMapConfig.apiKey}
                      action="submit"
                    />
                  </ContactFormElement>
                </ContactForm>
              )}

              {success && (
                <ContactFormEmailSent>
                  <SuccessMessage>
                    Your message has been sent successfully, we will response to
                    you as soon as possible :)
                  </SuccessMessage>
                </ContactFormEmailSent>
              )}
            </ContactFormContainer>
          </div>
          <div className="col-xs-12 col-lg-3">
            <ContactFormSection>
              <ContactInfo>
                <ContactFormSectionHeading>
                  Contact Info
                </ContactFormSectionHeading>
                <ContactFormSectionContent>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit velit
                  justo.
                </ContactFormSectionContent>
              </ContactInfo>
              <ContactInfo>
                <ContactInfoSection>
                  <strong>email: </strong>
                  <span>
                    <ContactInfoMailTo
                      href={`mailto:${AppConfig.contactEmail}`}
                    >
                      {AppConfig.contactEmail}
                    </ContactInfoMailTo>
                  </span>
                </ContactInfoSection>
                <ContactInfoSection>
                  <strong>phone: </strong>
                  <span>1.306.222.4545</span>
                </ContactInfoSection>
              </ContactInfo>
              <ContactInfo>
                <ContactFormSectionContent>
                  222 2nd Ave South Saskabush, SK S7M 1T6
                </ContactFormSectionContent>
              </ContactInfo>
            </ContactFormSection>
            <ContactFormSection>
              <ContactFormSectionHeading>Store Hours</ContactFormSectionHeading>
              <ContactInfoHours>
                <ContactInfoHoursItem>
                  <span>Monday - Thursday</span>
                  <span>8 am - 5 pm</span>
                </ContactInfoHoursItem>
                <ContactInfoHoursItem>
                  <span>Friday</span>
                  <span>8 am - 6 pm</span>
                </ContactInfoHoursItem>
                <ContactInfoHoursItem>
                  <span>Saturday</span>
                  <span>9 am - 5 pm</span>
                </ContactInfoHoursItem>
                <ContactInfoHoursItem>
                  <span>Sunday & Holidays</span>
                  <span>Closed</span>
                </ContactInfoHoursItem>
              </ContactInfoHours>
            </ContactFormSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
