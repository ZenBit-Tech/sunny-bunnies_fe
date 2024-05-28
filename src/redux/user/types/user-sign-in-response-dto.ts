import { type User } from "./user.ts";

type UserSignInResponseDto = {
	accessToken: string;
	refreshToken: string;
	user: User;
};

export { type UserSignInResponseDto };
