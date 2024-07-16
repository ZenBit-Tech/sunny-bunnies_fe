import React, { useState } from "react";

import { Color, Size } from "~/libs/types/products.ts";
import { VariantItem } from "~/pages/add-product/types.ts";

type ProductVariantsReturnType = {
	addItem: (item: VariantItem) => void;
	deleteItem: (id: number) => void;
	items: VariantItem[];
	quantity: number;
	selectedColor: Color | null;
	selectedSize: Size | null;
	setDefaultItems: (items: VariantItem[]) => void;
	setQuantity: React.Dispatch<React.SetStateAction<number>>;
	setSelectedColor: (color: Color) => void;
	setSelectedSize: (size: Size) => void;
	updateItem: (id: number, updatedItem: VariantItem) => void;
};
const useProductVariants = (): ProductVariantsReturnType => {
	const initialQuantity = 1;
	const notSelectedValue = 0;
	const notFoundIndex = -1;
	const [items, setItems] = useState<VariantItem[]>([]);
	const [selectedColor, setSelectedColor] = useState<Color | null>(null);
	const [selectedSize, setSelectedSize] = useState<Size | null>(null);
	const [quantity, setQuantity] = useState<number>(initialQuantity);

	const addItem = (): void => {
		if (selectedColor && selectedSize && quantity > notSelectedValue) {
			const plusOneItem = 1;
			const existingItemIndex = items.findIndex(
				(item) =>
					item.color.id === selectedColor.id &&
					item.size.id === selectedSize.id,
			);

			if (existingItemIndex !== notFoundIndex) {
				const updatedItems = items.map((item, index) =>
					index === existingItemIndex
						? { ...item, quantity: item.quantity + quantity }
						: item,
				);
				setItems(updatedItems);
			} else {
				setItems([
					...items,
					{
						color: selectedColor,
						id: items.length + plusOneItem,
						quantity,
						size: selectedSize,
					},
				]);
			}

			setSelectedColor(null);
			setSelectedSize(null);
			setQuantity(initialQuantity);
		}
	};

	const updateItem = (id: number, updatedItem: VariantItem): void => {
		if (
			updatedItem.color &&
			updatedItem.size &&
			updatedItem.quantity > notSelectedValue
		) {
			const existingItemIndex = items.findIndex(
				(item) =>
					item.color.id === updatedItem.color.id &&
					item.size.id === updatedItem.size.id,
			);

			if (
				existingItemIndex !== notFoundIndex &&
				items[existingItemIndex].id !== id
			) {
				const updatedItems = items.map((item, index) =>
					index === existingItemIndex
						? { ...item, quantity: item.quantity + updatedItem.quantity }
						: item,
				);
				setItems(updatedItems.filter((item) => item.id !== id));
			} else {
				setItems(items.map((item) => (item.id === id ? updatedItem : item)));
			}
		}
	};

	const deleteItem = (id: number): void => {
		setItems(items.filter((item) => item.id !== id));
	};

	const setDefaultItems = (items: VariantItem[]): void => {
		setItems(items);
	};

	return {
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
	};
};

export { useProductVariants };
