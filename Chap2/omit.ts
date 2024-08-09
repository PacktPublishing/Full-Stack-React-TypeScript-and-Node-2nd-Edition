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

type SimpleTypeOmit = Omit<
  SuperComplexType,
  "name" | "age" | "corporateOfficeCity"
>;
