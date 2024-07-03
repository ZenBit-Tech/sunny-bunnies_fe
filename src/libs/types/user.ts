import { type Profile } from "./user-profile.type.ts";

type User = {
	createdAt: Date;
	email: string;
	id: string;
	isVerified: boolean;
	name: string;
	profile: Profile;
	status: UserStatus;
};

type UserStatus = "active" | "inactive";

type UsersResponseDto = {
	totalCount: number;
	totalPages: number;
	users: User[];
};

type UsersRequestDto = {
	limit: number;
	order: "ASC" | "DESC";
	page: number;
	role: string;
	searchQuery: string;
	sortField: string;
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

type UserVerifyEmailRequestDto = {
	email: string;
};

type UserVerifyOtpRequestDto = {
	code: string;
	email: string;
};

type UserRestorePasswordRequestDto = {
	email: string;
};

type UserResetPasswordRequestDto = {
	password: string;
	token: string;
};

type UserRestorePasswordForm = {
	password: string;
	repeatPassword: string;
};

export {
	type User,
	type UserResetPasswordRequestDto,
	type UserRestorePasswordForm,
	type UserRestorePasswordRequestDto,
	type UserSignInRequestDto,
	type UserSignInResponseDto,
	type UserSignUpFormData,
	type UserSignUpRequestDto,
	type UserSignUpResponseDto,
	type UserStatus,
	type UserVerifyEmailRequestDto,
	type UserVerifyOtpRequestDto,
	type UsersRequestDto,
	type UsersResponseDto,
};
