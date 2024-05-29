import { type User } from "./user.ts";

type AuthTokenResponse = {
	accessToken: string;
	refreshToken: string;
	user: User;
};

export { type AuthTokenResponse };
