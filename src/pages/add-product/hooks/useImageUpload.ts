import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

type Image = {
	id: string;
	src: string;
	primary: boolean;
	selected: boolean;
};

const defaultPrimaryStatus = false;
const defaultSelectedStatus = false;
const firstFileIndex = 0;

const useImageUpload = () => {
	const [images, setImages] = useState<Image[]>([]);

	const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files) {
			const fileArray = Array.from(event.target.files).map((file) => {
				const id = uuidv4();
				return {
					id,
					src: URL.createObjectURL(file),
					primary: defaultPrimaryStatus,
					selected: defaultSelectedStatus,
				};
			});
			setImages((prevImages) => [...prevImages, ...fileArray]);
		}
	};

	const handleReplaceImage = (
		event: React.ChangeEvent<HTMLInputElement>,
		id: string,
	) => {
		if (event.target.files && event.target.files[firstFileIndex]) {
			const newImage = URL.createObjectURL(event.target.files[firstFileIndex]);
			setImages((prevImages) =>
				prevImages.map((image) =>
					image.id === id ? { ...image, src: newImage } : image,
				),
			);
		}
	};

	const setPrimaryImage = (id: string) => {
		setImages((prevImages) =>
			prevImages.map((image) => ({
				...image,
				primary: image.id === id,
			})),
		);
	};

	const setSelectedImage = (id: string) => {
		setImages((prevImages) =>
			prevImages.map((image) => ({
				...image,
				selected: image.id === id,
			})),
		);
	};

	const removeImage = (id: string) => {
		setImages((prevImages) => prevImages.filter((image) => image.id !== id));
	};

	return {
		images,
		handleImageUpload,
		handleReplaceImage,
		setPrimaryImage,
		setSelectedImage,
		removeImage,
	};
};

export { useImageUpload };
