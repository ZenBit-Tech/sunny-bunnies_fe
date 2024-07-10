import { user } from "./user.ts";

export const products = {
	products: [
		{
			activityStatus: "active",
			brand: "Brand A",
			category: { id: 1, name: "Category A" },
			createdAt: "2023-01-01T00:00:00.000Z",
			description: "Description of Product 1",
			gender: "female",
			id: "1",
			images: [
				{
					createdAt: "2023-01-01T00:00:00.000Z",
					description: "Image 1 of Product 1",
					id: 1,
					url: "https://example.com/image1.jpg",
				},
			],
			material: "Cotton",
			maxPrice: 100,
			minPrice: 50,
			name: "Product 1",
			quantity: 10,
			status: "available",
			style: "casual",
			updatedAt: "2023-01-01T00:00:00.000Z",
			user: user,
			variants: [
				{
					color: { id: 1, name: "Red" },
					id: 1,
					quantity: 5,
					size: { id: 1, name: "M" },
				},
			],
		},
		{
			activityStatus: "inactive",
			brand: "Brand B",
			category: { id: 2, name: "Category B" },
			createdAt: "2023-01-01T00:00:00.000Z",
			description: "Description of Product 2",
			gender: "male",
			id: "2",
			images: [
				{
					createdAt: "2023-01-01T00:00:00.000Z",
					description: "Image 1 of Product 2",
					id: 2,
					url: "https://example.com/image2.jpg",
				},
			],
			material: "Polyester",
			maxPrice: 200,
			minPrice: 150,
			name: "Product 2",
			quantity: 20,
			status: "out of stock",
			style: "formal",
			updatedAt: "2023-01-01T00:00:00.000Z",
			user: user,
			variants: [
				{
					color: { id: 2, name: "Blue" },
					id: 2,
					quantity: 10,
					size: { id: 2, name: "L" },
				},
			],
		},
	],
	totalCount: 2,
	totalPages: 1,
};
