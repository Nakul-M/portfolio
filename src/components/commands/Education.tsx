import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Education</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "B.Tech in Computer Science & Engineering",
    desc: "National Institute of Technology Srinagar | 2023 – Present | CGPA: 9.085",
  },
  {
    title: "SNS Jammu (Class XII)",
    desc: "Science Stream | JKBoard | 96 % | 2022 – 2023",
  },
  
];

export default Education;
