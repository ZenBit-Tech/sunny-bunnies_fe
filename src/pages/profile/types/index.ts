import { Profile } from "~/libs/types/user-profile.type.ts";

type ProfileFormData = {
	email: string;
	name: string;
	profile: Partial<Profile>;
};

export type { ProfileFormData };
