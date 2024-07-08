import React from 'react';
import { IconButton } from '@mui/material';

import { StarCircleIcon } from "~/assets/icons/star-circle-icon.tsx";
import { StarCirclePrimaryIcon } from "~/assets/icons/star-circle-primary-icon.tsx";
import { PenIcon } from "~/assets/icons/pen-icon.tsx";
import { TrashIcon } from "~/assets/icons/trash-icon.tsx";

import { StyledImageContainer, ImageBox, ImageOverlay, HiddenInput } from './styles.ts';

interface Image {
    id: string;
    src: string;
    primary: boolean;
    selected: boolean;
}

interface Props {
    images: Image[];
    setPrimaryImage: (id: string) => void;
    setSelectedImage: (id: string) => void;
    handleReplaceImage: (event: React.ChangeEvent<HTMLInputElement>, id: string) => void;
    removeImage: (id: string) => void;
}

const ImageList: React.FC<Props> = ({ images, setPrimaryImage, setSelectedImage, handleReplaceImage, removeImage }) => {
    return (
        <StyledImageContainer>
            {images.map((image) => (
                <ImageBox key={image.id} selected={image.selected} onClick={() => setSelectedImage(image.id)}>
                    <img src={image.src} alt="Uploaded" />
                    <ImageOverlay>
                        <IconButton onClick={() => setPrimaryImage(image.id)}>
                            {image.primary ? <StarCirclePrimaryIcon /> : <StarCircleIcon />}
                        </IconButton>
                        <div>
                            {image.selected && (
                                <>
                                    <HiddenInput
                                        type="file"
                                        accept=".png, .jpg, .jpeg"
                                        onChange={(event) => handleReplaceImage(event, image.id)}
                                        id={`replace-image-${image.id}`}
                                    />
                                    <IconButton
                                        onClick={() => document.getElementById(`replace-image-${image.id}`)?.click()}
                                    >
                                        <PenIcon />
                                    </IconButton>
                                    <IconButton onClick={() => removeImage(image.id)}>
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
