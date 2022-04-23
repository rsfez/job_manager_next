import Head from "next/head";
import { Header, HeaderParams } from "../../Components/Home/Header";
import { useEffect, useState } from "react";
import json from "../../assets/data.json";
import { getEmptyPerson, Person } from "../../data/Person";
import styled from "styled-components";
import { primaryBlue } from "../../design/constants/colors";
import { SkillSet } from "../../Components/Skills/SkillSet";

const _loadPerson = async ({
  setPerson,
  setIsLoading,
}: {
  setPerson: Function;
  setIsLoading: Function;
}) => {
  setIsLoading(true);
  try {
    const person: Person = await JSON.parse(JSON.stringify(json));
    setPerson(person);
  } catch (e) {
    console.log({ e });
  } finally {
    setIsLoading(false);
  }
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

export const Home = ({
  loadPerson = _loadPerson,
  headerParamsBuilder = _headerParamsBuilder,
}: {
  loadPerson: Function;
  headerParamsBuilder: Function;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [person, setPerson] = useState(getEmptyPerson());

  useEffect(() => {
    loadPerson({ setPerson, setIsLoading });
  }, [loadPerson]);

  if (isLoading) return null;

  return (
    <Container>
      <Head>
        <title>Job Manager</title>
      </Head>

      <Header {...headerParamsBuilder(person)} />
      <main>
        <SkillSet skillSet={person.skills.first_set!} />
      </main>
    </Container>
  );
};
