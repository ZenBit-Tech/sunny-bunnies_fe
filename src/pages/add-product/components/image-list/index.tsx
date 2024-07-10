import React from "react";

import { IconButton } from "@mui/material";

import { PenIcon } from "~/assets/icons/pen-icon.tsx";
import { StarCircleIcon } from "~/assets/icons/star-circle-icon.tsx";
import { StarCirclePrimaryIcon } from "~/assets/icons/star-circle-primary-icon.tsx";
import { TrashIcon } from "~/assets/icons/trash-icon.tsx";

import {
	HiddenInput,
	ImageBox,
	ImageOverlay,
	StyledImageContainer,
} from "./styles.ts";

type Image = {
	id: string;
	primary: boolean;
	selected: boolean;
	src: string;
};

type Props = {
	handleReplaceImage: (
		event: React.ChangeEvent<HTMLInputElement>,
		id: string,
	) => void;
	images: Image[];
	removeImage: (id: string) => void;
	setPrimaryImage: (id: string) => void;
	setSelectedImage: (id: string) => void;
};

const ImageList: React.FC<Props> = ({
	handleReplaceImage,
	images,
	removeImage,
	setPrimaryImage,
	setSelectedImage,
}) => {
	const handleSetPrimaryImage = (id: string): (() => void) => {
		return () => setPrimaryImage(id);
	};

	const handleSetSelectedImage = (id: string): (() => void) => {
		return () => setSelectedImage(id);
	};

	const handleRemoveImage = (id: string): (() => void) => {
		return () => removeImage(id);
	};

	const handlePenClick = (id: string): (() => void) => {
		return () => document.getElementById(`replace-image-${id}`)?.click();
	};

	const handleReplaceImageWrapper = (
		id: string,
	): ((event: React.ChangeEvent<HTMLInputElement>) => void) => {
		return (event: React.ChangeEvent<HTMLInputElement>) =>
			handleReplaceImage(event, id);
	};

	return (
		<StyledImageContainer>
			{images.map((image) => (
				<ImageBox
					key={image.id}
					onClick={handleSetSelectedImage(image.id)}
					selected={image.selected}
				>
					<img alt="Uploaded" src={image.src} />
					<ImageOverlay>
						<IconButton onClick={handleSetPrimaryImage(image.id)}>
							{image.primary ? <StarCirclePrimaryIcon /> : <StarCircleIcon />}
						</IconButton>
						<div>
							{image.selected && (
								<>
									<HiddenInput
										accept=".png, .jpg, .jpeg"
										id={`replace-image-${image.id}`}
										onChange={handleReplaceImageWrapper(image.id)}
										type="file"
									/>
									<IconButton onClick={handlePenClick(image.id)}>
										<PenIcon />
									</IconButton>
									<IconButton onClick={handleRemoveImage(image.id)}>
										<TrashIcon />
									</IconButton>
								</>
							)}
						</div>
					</ImageOverlay>
				</ImageBox>
			))}
		</StyledImageContainer>
	);
};

export { ImageList };
