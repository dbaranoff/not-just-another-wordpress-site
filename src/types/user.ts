export enum UserTitlesEnum {
  Mr = 'mr',
  Ms = 'ms',
  Mrs = 'mrs',
  Miss = 'miss',
  Dr = 'dr',
  None = ''
}

export enum UserGendersEnum {
  Male = 'male',
  Female = 'female',
  Other = 'other',
  None = ''
}

export interface ILocation {
  street: string;
  city: string;
  state: string;
  country: string;
  timezone: string;
}

export interface IUserPreview {
  id: string;
  title: UserTitlesEnum;
  firstName: string;
  lastName: string;
  picture: string;
}

export interface IUser extends IUserPreview {
  gender: UserGendersEnum;
  dateOfBirth: string;
  registerDate: string;
  phone: string;
  location: ILocation;
}

export interface IUsersState {
  items: (IUser | IUserPreview)[] | null;
  // TODO: form: IUserFormState; create own form persistor
  isLoading: boolean;
  error: Error | null;
}
