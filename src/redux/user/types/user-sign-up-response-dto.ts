import { type User } from "./user.ts";

type UserSignUpResponseDto = {
	accessToken: string;
	refreshToken: string;
	user: User;
};

export { type UserSignUpResponseDto };
