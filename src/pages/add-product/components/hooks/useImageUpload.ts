import React, { useState } from "react";

import { v4 as uuidv4 } from "uuid";

type Image = {
	id: string;
	primary: boolean;
	selected: boolean;
	src: string;
};

const defaultPrimaryStatus = false;
const defaultSelectedStatus = false;
const firstFileIndex = 0;

type UseImageUploadReturn = {
	handleImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
	handleReplaceImage: (
		event: React.ChangeEvent<HTMLInputElement>,
		id: string,
	) => void;
	images: Image[];
	removeImage: (id: string) => void;
	setImagesDefault: (images: Image[]) => void;
	setPrimaryImage: (id: string) => void;
	setSelectedImage: (id: string) => void;
};

const useImageUpload = (): UseImageUploadReturn => {
	const [images, setImages] = useState<Image[]>([]);

	const handleImageUpload = (
		event: React.ChangeEvent<HTMLInputElement>,
	): void => {
		if (event.target.files) {
			const fileArray = Array.from(event.target.files).map((file) => {
				const id = uuidv4();

				return {
					id,
					primary: defaultPrimaryStatus,
					selected: defaultSelectedStatus,
					src: URL.createObjectURL(file),
				};
			});
			setImages((prevImages) => [...prevImages, ...fileArray]);
		}
	};

	const handleReplaceImage = (
		event: React.ChangeEvent<HTMLInputElement>,
		id: string,
	): void => {
		if (event.target.files && event.target.files[firstFileIndex]) {
			const newImage = URL.createObjectURL(event.target.files[firstFileIndex]);
			setImages((prevImages) =>
				prevImages.map((image) =>
					image.id === id ? { ...image, src: newImage } : image,
				),
			);
		}
	};

	const setPrimaryImage = (id: string): void => {
		setImages((prevImages) =>
			prevImages.map((image) => ({
				...image,
				primary: image.id === id,
			})),
		);
	};

	const setSelectedImage = (id: string): void => {
		setImages((prevImages) =>
			prevImages.map((image) => ({
				...image,
				selected: image.id === id,
			})),
		);
	};

	const removeImage = (id: string): void => {
		setImages((prevImages) => prevImages.filter((image) => image.id !== id));
	};

	const setImagesDefault = (images: Image[]): void => {
		setImages(images);
	};

	return {
		handleImageUpload,
		handleReplaceImage,
		images,
		removeImage,
		setImagesDefault,
		setPrimaryImage,
		setSelectedImage,
	};
};

export { useImageUpload };
