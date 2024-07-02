import React from "react";

import { AppRoute } from "~/libs/constants/index.ts";
import { FormButtons } from "~/pages/profile-board/components/buttons.tsx";

import { StyledButtonsContainer, StyledFormHelperText } from "../styles.ts";
import {
	StyledVariantDisplayItem,
	StyledVariantsFormContainer,
} from "./styles.ts";
import { useProductVariantsForm } from "./use-product-variants-form.hook.ts";
import { VariantDisplay } from "./variant-display.tsx";
import { VariantFormInput } from "./variant-form-input.tsx";

const ProductVariantsForm: React.FC = () => {
	const {
		addingVariantError,
		colors,
		colorsOptions,
		editingVariantId,
		errors,
		handleAddVariant,
		handleChangeQuantity,
		handleColorChange,
		handleEditSave,
		handleFormSubmit,
		handleRemoveVariant,
		handleSizeChange,
		handleVariantClick,
		productQuantity,
		selectedColor,
		selectedSize,
		sizes,
		sizesOptions,
		variants,
	} = useProductVariantsForm();

	return (
		<StyledVariantsFormContainer component="form" onSubmit={handleFormSubmit}>
			{editingVariantId === null && (
				<VariantFormInput
					colorsOptions={colorsOptions}
					errors={errors}
					onAddVariant={handleAddVariant}
					onColorChange={handleColorChange}
					onQuantityChange={handleChangeQuantity}
					onSizeChange={handleSizeChange}
					quantity={productQuantity}
					selectedColor={selectedColor}
					selectedSize={selectedSize}
					sizesOptions={sizesOptions}
				/>
			)}
			{addingVariantError && (
				<StyledFormHelperText>{addingVariantError}</StyledFormHelperText>
			)}
			{errors.variants && (
				<StyledFormHelperText>
					{errors.variants.message as string}
				</StyledFormHelperText>
			)}
			{variants.map((variant) => (
				<StyledVariantDisplayItem key={variant.id}>
					{editingVariantId === variant.id && (
						<VariantFormInput
							colorsOptions={colorsOptions}
							errors={errors}
							onAddVariant={handleEditSave}
							onColorChange={handleColorChange}
							onQuantityChange={handleChangeQuantity}
							onSizeChange={handleSizeChange}
							quantity={variant.quantity}
							selectedColor={variant.color}
							selectedSize={variant.size}
							sizesOptions={sizesOptions}
						/>
					)}
				</StyledVariantDisplayItem>
			))}
			{variants.map((variant, index) => (
				<StyledVariantDisplayItem key={variant.id}>
					{editingVariantId !== variant.id && (
						<VariantDisplay
							color={variant.color}
							colors={colors}
							index={index}
							key={variant.id}
							onEdit={handleVariantClick}
							onRemove={handleRemoveVariant}
							quantity={variant.quantity}
							size={variant.size}
							sizes={sizes}
							variantId={variant.id}
						/>
					)}
				</StyledVariantDisplayItem>
			))}
			<StyledButtonsContainer>
				<FormButtons
					isStart={false}
					redirectTo={AppRoute.PRODUCT_DESCRIPTION}
				/>
			</StyledButtonsContainer>
		</StyledVariantsFormContainer>
	);
};

export { ProductVariantsForm };
