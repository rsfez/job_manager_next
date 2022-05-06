import Head from "next/head";
import { Header, HeaderParams } from "../components/Home/Header";
import json from "../assets/data.json";
import { Person } from "../data/Person";
import styled from "styled-components";
import { primaryBlue } from "../design/constants/colors";
import { Row } from "../design/Containers";
import { SkillSet } from "../components/Skills/SkillSet";
import { PersonInfo } from "../components/PersonInfo";

type HomeParams = {
  person: Person;
  headerParamsBuilder?: Function;
};

const _headerParamsBuilder = (person: Person): HeaderParams => ({
  fullName: person.fullName,
  companyName: person.companies.currentCompany.name,
  backgroundColor: person.companies.currentCompany.primaryColor,
  textColor: person.companies.currentCompany.alternateColor,
  roleName: person.roles.currentRole.name,
});

const Container = styled.div`
  background-color: ${primaryBlue};
  height: 100%;
`;

const PersonInfoContainer = styled.div`
  flex-grow: 3;
`;

const SkillSetContainer = styled.div`
  flex-grow: 2;
`;

const Home = ({
  person,
  headerParamsBuilder = _headerParamsBuilder,
}: HomeParams) => (
  <Container>
    <Head>
      <title>Job Manager</title>
    </Head>

    <Header {...headerParamsBuilder(person)} />
    <main>
      <Row>
        <PersonInfoContainer>
          <PersonInfo person={person} />
        </PersonInfoContainer>
        <SkillSetContainer>
          <SkillSet skillSet={person.skills.firstSet!} />
        </SkillSetContainer>
        <SkillSetContainer>
          <SkillSet skillSet={person.skills.secondSet!} />
        </SkillSetContainer>
        <SkillSetContainer>
          <SkillSet skillSet={person.skills.miscSet!} />
        </SkillSetContainer>
      </Row>
    </main>
  </Container>
);

// noinspection JSUnusedGlobalSymbols
export async function getStaticProps() {
  const person: Person = await JSON.parse(JSON.stringify(json));
  return {
    props: {
      person,
    },
  };
}

// noinspection JSUnusedGlobalSymbols
export default Home;
