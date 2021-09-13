export interface UserLogin {
  email: string;
  password: string;
  returnSecureToken?: boolean;
}
export interface UserProfile {
  userUID: string;
  nickname: string;
  birthDate?: string;
  phoneNumber?: string;
  registrationDate?: string;
  avatar?: string;
  purchases?: IcecreamCard[];
  views?: IcecreamCard[];
}
export interface FirebaseAuthResponse {
  idToken: string;
  expiresIn: string;
  localId: string;
}
export interface FbCreateResponse {
  name: string;
}
export interface IcecreamCard {
  id: string;
  isHit: boolean;
  popular: string;
  cost: string;
  additional: string;
  fatContent: string;
  imgPath: string;
  title: string;
}
