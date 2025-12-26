import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        if (id === parseInt(arg[1])) {
          window.open(url, "_blank");
        }
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        “Talk is cheap. Show me the code.” <br />
        Selected projects showcasing AI, full-stack systems, and real-world impact.
      </ProjectsIntro>

      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}

      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "AI-Based DPR Analysis Platform (SIH 2025)",
    desc: 
      "Logic-driven GenAI + RAG system for automated DPR evaluation. Includes rule-based reasoning, document & web agents, vector embeddings, and AI-powered PDF annotation for policy, technical, and financial analysis.",
    url: "https://github.com/your-username/ai-dpr-analysis", // replace
  },
  {
    id: 2,
    title: "Student Management System (Full-Stack PWA)",
    desc:
      "Full-stack PWA built with React, Node.js, Express, and MongoDB. Features offline support, Razorpay payment integration, scalable REST APIs, and cloud deployment on Vercel and Render.",
    url: "https://github.com/your-username/student-management-system", // replace
  },
  {
    id: 3,
    title: "AI WhatsApp Chatbot (RAG + GenAI)",
    desc:
      "Context-aware WhatsApp chatbot using Twilio API, vector embeddings, and retrieval-augmented generation. Backend built with FastAPI, Dockerized, and deployed with secure tunneling.",
    url: "https://github.com/your-username/ai-whatsapp-chatbot", // replace
  },
  {
    id: 4,
    title: "JoSAA College Predictor (ML)",
    desc:
      "Machine learning-based college allocation predictor using historical JoSAA datasets. Includes Flask/Streamlit UI and containerized deployment using Docker.",
    url: "https://github.com/your-username/josaa-college-predictor", // replace
  },
];

export default Projects;
