import React, { ReactElement, useCallback, useEffect, useState } from "react";
import { Controller, ControllerRenderProps, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";
import {
	MenuItem,
	Select as MuiSelect,
	SelectChangeEvent,
	Typography,
} from "@mui/material";

import { NumberInput } from "~/components/number-input/index.tsx";
import { findItemByKey } from "~/helpers/find-item-by-key.ts";
import { AppRoute } from "~/libs/constants/app-route.ts";
import { Color, Size } from "~/libs/types/products.ts";
import { FourthStepFormData, VariantItem } from "~/pages/add-product/types.ts";
import { FormButtons } from "~/pages/profile-board/components/buttons.tsx";

import { useProductVariants } from "../hooks/useProductVariants.ts";
import { Variants } from "../variants-list/index.tsx";
import { fourthStepValidation } from "./fourth-step-validation.ts";
import { colors, sizes } from "./mock.ts";
import {
	StyledBox,
	StyledButton,
	StyledFormContainer,
	StyledFormControl,
	StyledFormLabel,
	StyledParent,
} from "./styles.ts";

type FormData = {
	color: string;
	quantity: number;
	size: string;
};

type FourthStepDefaultValues = {
	isDefaultSizeType: boolean;
	setFourthStepData: (formData: FourthStepFormData) => void;
	variants: VariantItem[];
};

const FourthStepForm: React.FC<FourthStepDefaultValues> = ({
	isDefaultSizeType,
	setFourthStepData,
	variants,
}: FourthStepDefaultValues) => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const {
		addItem,
		deleteItem,
		items,
		quantity,
		selectedColor,
		selectedSize,
		setDefaultItems,
		setQuantity,
		setSelectedColor,
		setSelectedSize,
		updateItem,
	} = useProductVariants();

	const itemsLengthZero = 0;
	const initialQuantity = 1;
	const [isEditing, setIsEditing] = useState(false);
	const [editItem, setEditItem] = useState<VariantItem | null>(null);
	const [error, setError] = useState<null | string>(null);

	const {
		control,
		formState: { errors },
		handleSubmit,
		reset,
		setValue,
	} = useForm<FormData>({
		defaultValues: {
			color: "",
			quantity: initialQuantity,
			size: "",
		},
		resolver: yupResolver(fourthStepValidation),
	});

	useEffect(() => {
		if (!items.length) {
			setDefaultItems(variants);
		}
	}, [items, setDefaultItems, items.length, variants]);

	useEffect(() => {
		if (selectedColor) {
			setValue("color", selectedColor.name);
		}
		if (selectedSize) {
			setValue("size", selectedSize.name);
		}
		setValue("quantity", quantity);
	}, [selectedColor, selectedSize, quantity, setValue]);

	const handleColorChange = useCallback(
		(event: SelectChangeEvent<string>) => {
			const color = findItemByKey(colors, event.target.value, "name");
			if (color) {
				setSelectedColor(color);
			}
		},
		[setSelectedColor],
	);

	const handleSizeChange = useCallback(
		(event: SelectChangeEvent<string>) => {
			const size = findItemByKey(
				sizes(!isDefaultSizeType),
				event.target.value,
				"name",
			);
			if (size) {
				setSelectedSize(size);
			}
		},
		[isDefaultSizeType, setSelectedSize],
	);

	const handleQuantityChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			setQuantity(Number(event.target.value));
		},
		[setQuantity],
	);

	const handleQuantityDecrement = useCallback(() => {
		setQuantity((prevQuantity: number) =>
			prevQuantity > initialQuantity
				? prevQuantity - initialQuantity
				: initialQuantity,
		);
	}, [initialQuantity, setQuantity]);

	const handleQuantityIncrement = useCallback(() => {
		setQuantity((prevQuantity: number) => prevQuantity + initialQuantity);
	}, [initialQuantity, setQuantity]);

	const onSubmit = useCallback(
		(data: FormData) => {
			const newItem: VariantItem = {
				color: findItemByKey(colors, data.color, "name")!,
				quantity: data.quantity,
				size: findItemByKey(sizes(!isDefaultSizeType), data.size, "name")!,
			};

			if (isEditing && editItem) {
				updateItem(editItem.id!, { ...editItem, ...newItem });
				setIsEditing(false);
				setEditItem(null);
			} else {
				addItem(newItem);
			}
			setError(null);
			reset();
		},
		[addItem, editItem, isDefaultSizeType, isEditing, reset, updateItem],
	);

	const handleEditClick = useCallback(
		(item: VariantItem) => {
			setEditItem(item);
			setSelectedColor(item.color);
			setSelectedSize(item.size);
			setQuantity(item.quantity);
			setIsEditing(true);
		},
		[setSelectedColor, setSelectedSize, setQuantity],
	);

	const handleCancelEdit = useCallback(() => {
		setIsEditing(false);
		setEditItem(null);
		reset();
	}, [reset]);

	const handleNext = useCallback(() => {
		if (items.length === itemsLengthZero) {
			setError("At least one variant is required.");
		} else {
			setFourthStepData({ variants: items });
			navigate(AppRoute.PRODUCT_PUBLISH);
		}
	}, [items, itemsLengthZero, navigate, setFourthStepData]);

	const renderColorMenuItem = useCallback(
		(color: Color) => (
			<MenuItem key={color.id} value={color.name}>
				{color.name}
			</MenuItem>
		),
		[],
	);

	const renderSizeMenuItem = useCallback(
		(size: Size) => (
			<MenuItem key={size.id} value={size.name}>
				{size.name}
			</MenuItem>
		),
		[],
	);

	const renderQuantityInput = useCallback(
		({
			field,
		}: {
			field: ControllerRenderProps<FormData, "quantity">;
		}): ReactElement => (
			<NumberInput
				{...field}
				onChange={handleQuantityChange}
				onDecrement={handleQuantityDecrement}
				onIncrement={handleQuantityIncrement}
				value={quantity}
			/>
		),
		[
			handleQuantityChange,
			handleQuantityDecrement,
			handleQuantityIncrement,
			quantity,
		],
	);

	const renderSizeSelect = useCallback(
		({
			field,
		}: {
			field: ControllerRenderProps<FormData, "size">;
		}): ReactElement => (
			<MuiSelect
				{...field}
				onChange={handleSizeChange}
				value={selectedSize?.name || ""}
			>
				<MenuItem value="">{t("AddVendorProduct.selectSize")}</MenuItem>
				{sizes(!isDefaultSizeType).map(renderSizeMenuItem)}
			</MuiSelect>
		),
		[handleSizeChange, isDefaultSizeType, renderSizeMenuItem, selectedSize, t],
	);

	const renderColorSelect = useCallback(
		({
			field,
		}: {
			field: ControllerRenderProps<FormData, "color">;
		}): ReactElement => (
			<MuiSelect
				{...field}
				onChange={handleColorChange}
				value={selectedColor?.name || ""}
			>
				<MenuItem value="">{t("AddVendorProduct.selectColor")}</MenuItem>
				{colors.map(renderColorMenuItem)}
			</MuiSelect>
		),
		[handleColorChange, renderColorMenuItem, selectedColor, t],
	);

	return (
		<StyledParent>
			<div>
				<form onSubmit={handleSubmit(onSubmit)}>
					<StyledFormContainer>
						<StyledFormControl>
							<StyledFormLabel>{t("AddVendorProduct.color")}</StyledFormLabel>

							<Controller
								control={control}
								name="color"
								render={renderColorSelect}
							/>
							<Typography color="error" variant="body2">
								{errors.color?.message}
							</Typography>
						</StyledFormControl>

						<StyledFormControl>
							<StyledFormLabel>{t("AddVendorProduct.size")}</StyledFormLabel>

							<Controller
								control={control}
								name="size"
								render={renderSizeSelect}
							/>
							<Typography color="error" variant="body2">
								{errors.size?.message}
							</Typography>
						</StyledFormControl>

						<StyledFormControl>
							<StyledFormLabel>
								{t("AddVendorProduct.quantity")}
							</StyledFormLabel>

							<Controller
								control={control}
								name="quantity"
								render={renderQuantityInput}
							/>
							<Typography color="error">{errors.quantity?.message}</Typography>
						</StyledFormControl>

						{isEditing ? (
							<>
								<StyledButton type="submit">Save</StyledButton>
								<StyledButton onClick={handleCancelEdit} type="button">
									Cancel
								</StyledButton>
							</>
						) : (
							<StyledButton type="submit">+</StyledButton>
						)}
					</StyledFormContainer>
				</form>
				<Variants
					deleteItem={deleteItem}
					items={items}
					updateItem={handleEditClick}
				/>
			</div>
			<StyledBox>
				{error && <Typography color="error">{error}</Typography>}
				<FormButtons
					handleNext={handleNext}
					isStart={false}
					redirectTo={AppRoute.PRODUCT_DESCRIPTION}
				/>
			</StyledBox>
		</StyledParent>
	);
};

export { FourthStepForm };
