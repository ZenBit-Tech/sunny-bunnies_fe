import React from "react";

import { ProfileDeleteIcon } from "~/assets/icons/profile-delete-icon.tsx";

import {
	AnimatedButtonContainer,
	PulseBox1,
	PulseBox2,
	WaveIconButton,
} from "./styles.ts";

type Properties = {
	onConfirmDelete: () => void;
};

const AnimatedButton: React.FC<Properties> = ({ onConfirmDelete }) => {
	return (
		<AnimatedButtonContainer>
			<PulseBox1 />
			<PulseBox2 />
			<WaveIconButton onClick={onConfirmDelete}>
				<ProfileDeleteIcon />
			</WaveIconButton>
		</AnimatedButtonContainer>
	);
};

export { AnimatedButton };
