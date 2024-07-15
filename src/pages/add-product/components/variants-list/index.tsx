import React from "react";
import { useTranslation } from "react-i18next";

import { PenIcon } from "~/assets/icons/pen-icon.tsx";
import { TrashIcon } from "~/assets/icons/trash-icon.tsx";
import { VariantItem } from "~/pages/add-product/types.ts";

import { ItemColumn, ItemRow } from "./styles.ts";

type VariantProps = {
	deleteItem: (id: number) => void;
	items: VariantItem[];
	updateItem: (item: VariantItem) => void;
};

const Variants: React.FC<VariantProps> = ({
	deleteItem,
	items,
	updateItem,
}) => {
	const { t } = useTranslation();
	let itemCount = 1;

	const handleUpdateItemClick = (item: VariantItem) => (): void => {
		updateItem(item);
	};

	const handleDeleteItemClick = (id: number) => (): void => {
		deleteItem(id);
	};

	return (
		<>
			{items.map((item) => (
				<ItemRow key={item.id}>
					<ItemColumn>
						{itemCount++}){" "}
						{`${t("AddVendorProduct.color")} - ${item.color.name}`}
					</ItemColumn>
					<ItemColumn>{`${t("AddVendorProduct.size")} - ${
						item.size.name
					}`}</ItemColumn>
					<ItemColumn>{`${t("AddVendorProduct.quantity")} - ${
						item.quantity
					}`}</ItemColumn>
					<ItemColumn>
						<button onClick={handleUpdateItemClick(item)}>
							<PenIcon />
						</button>
						<button onClick={handleDeleteItemClick(Number(item.id))}>
							<TrashIcon />
						</button>
					</ItemColumn>
				</ItemRow>
			))}
		</>
	);
};

export { Variants };
