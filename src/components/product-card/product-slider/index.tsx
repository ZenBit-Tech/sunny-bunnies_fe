import React, { useState } from "react";
import Slider from "react-slick";

import { colord } from "colord";

import { configureString } from "~/helpers/index.ts";
import { AppRoute } from "~/libs/constants/index.ts";
import { Product } from "~/libs/types/products.ts";

import {
	colorChangeIndex,
	defaultImageIndex,
	firstSlider,
} from "../constats.ts";
import { CustomSliderDot, StyledImage, StyledImageWrapper } from "../styles.ts";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type ProductSliderProps = {
	item: Product;
};

const ProductSlider: React.FC<ProductSliderProps> = ({ item }) => {
	const { id: id, images } = item;
	const [activeSlide, setActiveSlide] = useState(firstSlider);

	const modifiedColor = colord(item.variants[defaultImageIndex].color.name)
		.lighten(colorChangeIndex)
		.toHex();
	const modifiedActiveColor = colord(
		item.variants[defaultImageIndex].color.name,
	)
		.darken(colorChangeIndex)
		.toHex();

	const sliderSettings = {
		beforeChange: (_current: number, next: number): void =>
			setActiveSlide(next),
		customPaging: (index: number): React.ReactElement => (
			<CustomSliderDot
				backgroundColor={{
					active: modifiedActiveColor,
					inactive: modifiedColor,
				}}
				isActive={index === activeSlide}
			/>
		),
		dots: true,
		infinite: true,
		slidesToScroll: 1,
		slidesToShow: 1,
		speed: 500,
	};

	return (
		<Slider {...sliderSettings}>
			{images.map((image, index) => (
				<StyledImageWrapper
					key={index}
					to={configureString(AppRoute.PRODUCT, { id: String(id) })}
				>
					<StyledImage alt={image.description} src={image.url} />
				</StyledImageWrapper>
			))}
		</Slider>
	);
};

export { ProductSlider };
