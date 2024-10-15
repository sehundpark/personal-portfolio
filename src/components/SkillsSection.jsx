import styled from "styled-components";

export const SkillsSection = ({ skills }) => {
  return (
    <SkillsContainer>
      <h2>Skills</h2>
      <SkillsList>
        {skills.map((skill, index) => (
          <SkillItem key={index}>{skill}</SkillItem>
        ))}
      </SkillsList>
    </SkillsContainer>
  );
};

const SkillsContainer = styled.section`
  margin: 2rem 0;
`;

const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style-type: none;
  padding: 0;
`;

const SkillItem = styled.li`
  background-color: var(--skill-bg);
  color: var(--skill-text);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
`;
