import { Box, styled } from "@mui/material";
import { keyframes } from "@mui/system";

const slideInLeft = keyframes`
	from {
		transform: translateX(-100%);
		opacity: 0;
	}
	to {
		transform: translateX(0);
		opacity: 1;
	}
`;

const slideInRight = keyframes`
	from {
		transform: translateX(100%);
		opacity: 0;
	}
	to {
		transform: translateX(0);
		opacity: 1;
	}
`;

const slideOutLeft = keyframes`
	from {
		transform: translateX(0);
		opacity: 1;
	}
	to {
		transform: translateX(-100%);
		opacity: 0;
	}
`;

const slideOutRight = keyframes`
	from {
		transform: translateX(0);
		opacity: 1;
	}
	to {
		transform: translateX(100%);
		opacity: 0;
	}
`;

const StyledCategoryCarouselContainer = styled(Box)`
	align-items: flex-start;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	padding: 15px 52px;
	width: 100%;
`;

const StyledCategoriesContainer = styled(Box)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	overflow: hidden;
	width: 100%;
`;

const StyledCategoriesItems = styled(Box)`
	display: flex;
	gap: 80px;
	flex-wrap: nowrap;
	overflow-x: auto;
	scroll-behavior: smooth;
	width: 100%;
	min-width: 0;
	align-items: center;

	&.category-slide-in-left,
	&.category-slide-in-right,
	&.category-slide-out-left,
	&.category-slide-out-right {
		overflow: hidden;
		width: 100%;
	}

	&.category-slide-in-left {
		animation: ${slideInLeft} 0.3s forwards;
	}

	&.category-slide-in-right {
		animation: ${slideInRight} 0.3s forwards;
	}

	&.category-slide-out-left {
		animation: ${slideOutLeft} 0.3s forwards;
	}

	&.category-slide-out-right {
		animation: ${slideOutRight} 0.3s forwards;
	}
`;

export {
	StyledCategoriesContainer,
	StyledCategoriesItems,
	StyledCategoryCarouselContainer,
};
