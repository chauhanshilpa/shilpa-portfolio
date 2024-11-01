import PropTypes from "prop-types";
import envelopeIcon from "../assets/social-icons/envelope.svg";
import gitHubIcon from "../assets/social-icons/github.svg";
import linkedInIcon from "../assets/social-icons/linkedin.svg";
import leetcodeIcon from "../assets/social-icons/leetcode.svg";
import hackerrankIcon from "../assets/social-icons/hackerrank.svg";

const Footer = (props) => {
  const { email, gitHub, linkedIn, name, primaryColor, leetcode, hackerrank } =
    props;

  return (
    <div
      id="footer"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "2.5rem",
        padding: "5rem 0 3rem",
        backgroundColor: primaryColor,
      }}
      className="w-[100%]"
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2.5rem",
        }}
      >
        {email && (
          <a href={`mailto:${email}`}>
            <img src={envelopeIcon} alt="email" className="socialIcon" />
          </a>
        )}
        {gitHub && (
          <a
            href={`https://github.com/${gitHub}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={gitHubIcon} alt="GitHub" className="socialIcon" />
          </a>
        )}
        {linkedIn && (
          <a
            href={`https://www.linkedin.com/in/${linkedIn}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedInIcon} alt="LinkedIn" className="socialIcon" />
          </a>
        )}
        {leetcode && (
          <a
            href={`https://leetcode.com/u/${leetcode}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={leetcodeIcon}
              alt="leetcode"
              className="socialIcon"
              style={{ backgroundColor: "transparent", color: "white" }}
            />
          </a>
        )}
        {hackerrank && (
          <a
            href={`https://www.hackerrank.com/profile/${hackerrank}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={hackerrankIcon}
              alt="hackerrank"
              className="socialIcon"
              style={{ backgroundColor: "transparent" }}
            />
          </a>
        )}
      </div>
      <p className="small" style={{ marginTop: 0, color: "white" }}>
        Created by {name}
      </p>
    </div>
  );
};

Footer.defaultProps = {
  name: "",
};

Footer.propTypes = {
  email: PropTypes.string,
  gitHub: PropTypes.string,
  linkedIn: PropTypes.string,
  name: PropTypes.string.isRequired,
  primaryColor: PropTypes.string,
  leetcode: PropTypes.string,
  hackerrank: PropTypes.string,
};

export default Footer;
