import { useCallback, useEffect, useState } from "react";
import { type Category } from "~/pages/home/types/index.ts";

const breakpoints = [
	{ itemsPerPage: 1, width: 682 },
	{ itemsPerPage: 2, width: 912 },
	{ itemsPerPage: 3, width: 1114 },
	{ itemsPerPage: 4, width: 1354 },
	{ itemsPerPage: 6, width: Infinity },
];

const initialItemPerPage = 6;
const initialStartIndex = 0;
const defaultStep = 1;

type CategoryCarouselState = {
	handleNext: () => void;
	handlePrev: () => void;
	itemsPerPage: number;
	showNextButton: boolean;
	showPrevButton: boolean;
	startIndex: number;
	animationClass: string;
};

const useCategoryCarousel = (categories: Category[]): CategoryCarouselState => {
	const [itemsPerPage, setItemsPerPage] = useState(initialItemPerPage);
	const [startIndex, setStartIndex] = useState(initialStartIndex);
	const [animationClass, setAnimationClass] = useState('');

	const handleResize = useCallback((): void => {
		const screenWidth = window.innerWidth;
		const { itemsPerPage: items } =
			breakpoints.find((breakpoint) => screenWidth < breakpoint.width) ||
			breakpoints[breakpoints.length - defaultStep];
		setItemsPerPage(items);
	}, []);

	useEffect(() => {
		handleResize();

		window.addEventListener("resize", handleResize);

		return (): void => window.removeEventListener("resize", handleResize);
	}, [handleResize]);

	const handleNext = useCallback((): void => {
		if (startIndex + itemsPerPage < categories.length) {
			requestAnimationFrame(() => {
				setAnimationClass('category-slide-out-left');
				requestAnimationFrame(() => {
					setStartIndex(Math.min(startIndex + itemsPerPage, categories.length - defaultStep));
					setAnimationClass('category-slide-in-right');
				});
			});
		}
	}, [categories.length, itemsPerPage, startIndex]);

	const handlePrev = useCallback((): void => {
		if (startIndex > 0) {
			requestAnimationFrame(() => {
				setAnimationClass('category-slide-out-right');
				requestAnimationFrame(() => {
					setStartIndex(Math.max(startIndex - itemsPerPage, initialStartIndex));
					setAnimationClass('category-slide-in-left');
				});
			});
		}
	}, [itemsPerPage, startIndex]);

	const showPrevButton = startIndex > initialStartIndex;
	const showNextButton = startIndex + itemsPerPage < categories.length;

	return {
		handleNext,
		handlePrev,
		itemsPerPage,
		showNextButton,
		showPrevButton,
		startIndex,
		animationClass,
	};
};

export { useCategoryCarousel };
