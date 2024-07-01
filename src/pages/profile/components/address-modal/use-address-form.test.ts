import { SelectChangeEvent } from "@mui/material";
import { act, renderHook } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";

import { Address } from "~/libs/types/user-profile.type.ts";
import { Providers } from "~/test/providers.tsx";

import { useAddressForm } from "./use-address-form.ts";

describe("useAddressForm", () => {
	const initialValues: Address = {
		addressLineOne: "123 Street",
		addressLineTwo: "",
		city: "Toronto",
		country: "Canada",
		state: "Ontario",
	};

	const toggleModal = vi.fn();

	test("should initialize with correct values", () => {
		const { result } = renderHook(
			() => useAddressForm(initialValues, toggleModal),
			{
				wrapper: Providers,
			},
		);

		expect(result.current.selectedCountry).toEqual(
			expect.objectContaining({ name: "Canada" }),
		);
		expect(result.current.selectedState).toEqual(
			expect.objectContaining({ name: "Ontario" }),
		);
		expect(result.current.selectedCity).toEqual(
			expect.objectContaining({ name: "Toronto" }),
		);
	});

	test("should handle country change", () => {
		const { result } = renderHook(
			() => useAddressForm(initialValues, toggleModal),
			{
				wrapper: Providers,
			},
		);

		act(() => {
			result.current.handleCountryChange({
				target: { value: "Canada" },
			} as SelectChangeEvent<string>);
		});

		expect(result.current.selectedCountry).toEqual(
			expect.objectContaining({ name: "Canada" }),
		);
		expect(result.current.selectedState).toBeNull();
		expect(result.current.selectedCity).toBeNull();
	});

	test("should handle state change", () => {
		const { result } = renderHook(
			() => useAddressForm(initialValues, toggleModal),
			{
				wrapper: Providers,
			},
		);

		act(() => {
			result.current.handleStateChange({
				target: { value: "Ontario" },
			} as SelectChangeEvent<string>);
		});

		expect(result.current.selectedState).toEqual(
			expect.objectContaining({ name: "Ontario" }),
		);
		expect(result.current.selectedCity).toBeNull();
	});

	test("should handle city change", () => {
		const { result } = renderHook(
			() => useAddressForm(initialValues, toggleModal),
			{
				wrapper: Providers,
			},
		);

		act(() => {
			result.current.handleCityChange({
				target: { value: "Toronto" },
			} as SelectChangeEvent<string>);
		});

		expect(result.current.selectedCity).toEqual(
			expect.objectContaining({ name: "Toronto" }),
		);
	});
});
