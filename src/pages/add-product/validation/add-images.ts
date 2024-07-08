import * as Yup from "yup";

const imagesValidation = Yup.object().shape({
    images: Yup.array().min(4, 'At least 4 images are required').required('Images are required'),
});

export { imagesValidation };
