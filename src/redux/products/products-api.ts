import { httpMethods } from "~/libs/constants/http-methods.ts";
import {
	type Color,
	type Product,
	type ProductBrand,
	type ProductMaterial,
	type ProductStyle,
	type Size,
} from "~/libs/types/products.ts";
import {
	AddProductRequestDto,
	type CategoryWithTypes,
} from "~/pages/add-products/types.ts";

import { api } from "../services.ts";
import {
	productsApiPath,
	productsLoadLimit,
	productsLoadOffset,
} from "./constants.ts";

type GetProductsRequestQuery = {
	brand?: string;
	category?: string;
	color?: string;
	dateRange?: number;
	gender?: string;
	limit?: number;
	material?: string;
	maxPrice?: number;
	minPrice?: number;
	offset?: number;
	size?: string;
	style?: string;
};

export const productsApi = api.injectEndpoints({
	endpoints: (builder) => ({
		addNewProduct: builder.mutation<Product, AddProductRequestDto>({
			query: (newProduct) => ({
				body: newProduct,
				method: httpMethods.POST,
				url: productsApiPath.ROOT,
			}),
		}),
		deleteProductImage: builder.mutation<boolean, string>({
			query: (imageUrl) => ({
				body: { url: imageUrl },
				method: httpMethods.DELETE,
				url: productsApiPath.UPLOAD_IMAGE,
			}),
		}),
		getCategoriesWithTypes: builder.query<CategoryWithTypes[], undefined>({
			query: () => ({
				method: httpMethods.GET,
				url: productsApiPath.PRODUCT_DETAILS_CATEGORIES,
			}),
		}),
		getProductBrands: builder.query<ProductBrand[], undefined>({
			query: () => ({
				method: httpMethods.GET,
				url: productsApiPath.PRODUCT_DETAILS_BRANDS,
			}),
		}),
		getProductById: builder.query<Product, string | undefined>({
			query: (id) => ({
				method: httpMethods.GET,
				url: productsApiPath.ROOT + `/${id}`,
			}),
		}),
		getProductColors: builder.query<Color[], undefined>({
			query: () => ({
				method: httpMethods.GET,
				url: productsApiPath.PRODUCT_DETAILS_COLORS,
			}),
		}),
		getProductMaterials: builder.query<ProductMaterial[], undefined>({
			query: () => ({
				method: httpMethods.GET,
				url: productsApiPath.PRODUCT_DETAILS_MATERIAL,
			}),
		}),
		getProductSizes: builder.query<Size[], undefined>({
			query: () => ({
				method: httpMethods.GET,
				url: productsApiPath.PRODUCT_DETAILS_SIZES,
			}),
		}),
		getProductStyles: builder.query<ProductStyle[], undefined>({
			query: () => ({
				method: httpMethods.GET,
				url: productsApiPath.PRODUCT_DETAILS_STYLES,
			}),
		}),
		getProducts: builder.query<Product[], GetProductsRequestQuery>({
			forceRefetch({ currentArg, previousArg }) {
				return (
					currentArg?.category !== previousArg?.category ||
					currentArg?.limit !== previousArg?.limit ||
					currentArg?.offset !== previousArg?.offset ||
					currentArg?.dateRange !== previousArg?.dateRange ||
					currentArg?.gender !== previousArg?.gender ||
					currentArg?.minPrice !== previousArg?.minPrice ||
					currentArg?.maxPrice !== previousArg?.maxPrice ||
					currentArg?.size !== previousArg?.size ||
					currentArg?.color !== previousArg?.color ||
					currentArg?.style !== previousArg?.style ||
					currentArg?.brand !== previousArg?.brand ||
					currentArg?.material !== previousArg?.material
				);
			},
			merge: (currentCache, newItems, { arg }) => {
				if (arg.category || arg.offset === productsLoadOffset) {
					return newItems;
				}

				return [...currentCache, ...newItems];
			},
			query: (filters = {}) => {
				const defaultFilters = {
					limit: productsLoadLimit,
					offset: productsLoadOffset,
				};
				const finalFilters = { ...defaultFilters, ...filters };

				return {
					method: httpMethods.GET,
					params: finalFilters,
					url: productsApiPath.ROOT,
				};
			},
			serializeQueryArgs: ({ endpointName }) => {
				return endpointName;
			},
		}),
		getProductsByName: builder.query<Product[], { name: string }>({
			forceRefetch({ currentArg, previousArg }) {
				return currentArg?.name !== previousArg?.name;
			},
			query: ({ name }) => ({
				method: httpMethods.GET,
				params: { name },
				url: productsApiPath.ROOT,
			}),
		}),
		uploadProductImage: builder.mutation<{ url: string }, FormData>({
			query: (formData: FormData) => ({
				body: formData,
				method: httpMethods.POST,
				url: productsApiPath.UPLOAD_IMAGE,
			}),
		}),
	}),
});

export const {
	useAddNewProductMutation,
	useDeleteProductImageMutation,
	useGetCategoriesWithTypesQuery,
	useGetProductBrandsQuery,
	useGetProductByIdQuery,
	useGetProductColorsQuery,
	useGetProductMaterialsQuery,
	useGetProductSizesQuery,
	useGetProductStylesQuery,
	useGetProductsByNameQuery,
	useGetProductsQuery,
	useUploadProductImageMutation,
} = productsApi;
