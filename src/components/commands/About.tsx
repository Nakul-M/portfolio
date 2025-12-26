import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Nakul Mahajan</HighlightSpan>.
      </p>
      <p>
        I'm a <HighlightAlt>Full-Stack & AI Engineer</HighlightAlt> with a strong
        interest in systems, automation, and problem solving.
      </p>
      <p>
        I build scalable web applications, AI-driven tools, and
        terminal-inspired interfaces that solve real-world problems.
      </p>
      <p>
        SIH'25 Grand Finalist · MERN Stack · GenAI · Competitive Programming
      </p>
    </AboutWrapper>
  );
};

export default About;
