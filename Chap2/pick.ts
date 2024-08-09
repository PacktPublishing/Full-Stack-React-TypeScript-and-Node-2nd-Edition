interface SuperComplexType {
  name: string;
  age: number;
  street: string;
  state: string;
  zip: string;
  employeeId: number;
  dateStarted: Date;
  favoriteFood: string;
  favoriteColor: string;
  favoriteSportsTeam: string;
  homeTown: string;
  corporateOfficeCity: string;
}

type SimpleType = Pick<
  SuperComplexType,
  "name" | "age" | "corporateOfficeCity"
>;

const adam: SimpleType = {
  name: "adam",
  age: 33,
  corporateOfficeCity: "New York",
};
