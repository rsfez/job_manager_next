import { Column } from "../design/Containers";
import { Person } from "../data/Person";

export type PersonInfoType = {
  person: Person;
};

export const PersonInfo = ({ person }: PersonInfoType) => (
  <Column>{person.fullName}</Column>
);
