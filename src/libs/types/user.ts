import { type Profile } from "./user-profile.type.ts";

type User = {
	email: string;
	name: string;
	profile: Profile;
};

type UserSignUpResponseDto = {
	accessToken: string;
	refreshToken: string;
	user: User;
};

type UserSignInRequestDto = {
	email: string;
	password: string;
};

type UserSignInResponseDto = {
	accessToken: string;
	refreshToken: string;
	user: User;
};

type UserSignUpFormData = {
	email: string;
	name: string;
	password: string;
	repeatPassword: string;
};

type UserSignUpRequestDto = {
	email: string;
	name: string;
	password: string;
};

export {
	type User,
	type UserSignInRequestDto,
	type UserSignInResponseDto,
	type UserSignUpFormData,
	type UserSignUpRequestDto,
	type UserSignUpResponseDto,
};
