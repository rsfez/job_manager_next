import Head from "next/head";
import { Header, HeaderParams } from "../Components/Home/Header";
import json from "../assets/data.json";
import { Person } from "../data/Person";
import styled from "styled-components";
import { primaryBlue } from "../design/constants/colors";
import { SkillSet } from "../Components/Skills/SkillSet";

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
      <SkillSet skillSet={person.skills.firstSet!} />
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
