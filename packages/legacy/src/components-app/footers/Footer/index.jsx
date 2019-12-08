import React from "react";
import PropTypes from "prop-types";
import { Link as GatsbyLink } from "gatsby";

import { Paragraph, Text } from "../../../components/typography";

import { FormSignup } from "../../forms";
import "./index.module.scss";

const Footer = ({ quickLinks }) => (
  <footer styleName="footer">
    <div styleName="links">
      <div styleName="block">
        <header>
          <Paragraph size="md" color="grayscale-0">
            Explore
          </Paragraph>
        </header>
        <ul>
          {quickLinks.map(({ title, route }) => (
            <li key={title}>
              <GatsbyLink to={route || title.split(" ").join("-")}>
                <Paragraph size="md" color="white">
                  {title}
                </Paragraph>
              </GatsbyLink>
            </li>
          ))}
        </ul>
      </div>
      <div styleName="block">
        <header>
          <Paragraph size="md" color="grayscale-0">
            Sign up to become a Honest Heather Insider. Join the community of
            honest, feel-good conversation.
          </Paragraph>
        </header>
        <div styleName="mail">
          <FormSignup
            name="footer"
            layout="inline"
            actionLabel="Join the Email list!"
            placeholder={{
              email: "youremailaddress@awesome.com"
            }}
          />
        </div>
      </div>
    </div>
    <div styleName="credits">
      <div>
        <div styleName="info">
          <Text size="sm" color="grayscale-0">
            Copyright &copy; 2018, Heather Turano Coaching, LLC, All Rights
            Reserved
          </Text>
        </div>
        <div styleName="created-by">
          <Text size="sm" color="grayscale-0">
            Designed and developed by
          </Text>
          <span>&nbsp;</span>
          <Text size="sm" color="secondary-0">
            <a
              href="http://www.imaginedelements.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Imagined Elements, LLC
            </a>
          </Text>
        </div>
      </div>
      <div styleName="privacy">
        <GatsbyLink to="/privacy-policy">
          <Text size="sm" color="secondary-0">
            Privary Policy
          </Text>
        </GatsbyLink>
        <Text size="sm" color="secondary-0">
          &nbsp;|&nbsp;
        </Text>
        <GatsbyLink to="/terms-of-service">
          <Text size="sm" color="secondary-0">
            Terms of Service
          </Text>
        </GatsbyLink>
        <Text size="sm" color="secondary-0">
          &nbsp;|&nbsp;
        </Text>
        <GatsbyLink to="/cookie-policy">
          <Text size="sm" color="secondary-0">
            Cookie Policy
          </Text>
        </GatsbyLink>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  quickLinks: PropTypes.array.isRequired
};

export default Footer;
