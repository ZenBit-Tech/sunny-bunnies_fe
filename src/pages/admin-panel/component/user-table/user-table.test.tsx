import React from "react";
/* eslint-disable */
import { fireEvent, screen } from "@testing-library/react";
import { expect, test, vi } from "vitest";

import { User } from "~/libs/types/user.ts";
import { customRender } from "~/test/test-utils.tsx";
import { t } from "i18next";
import { UserTable } from "./index.tsx";

const mockUsers: User[] = [
	{
		createdAt: new Date("2023-06-01T00:00:00.000Z"),
		email: "john.doe@example.com",
		id: "1",
		isVerified: true,
		name: "John Doe",
		profile: {
			addressLineOne: "123 Main St",
			addressLineTwo: "Apt 4B",
			cardNumber: "123",
			city: "New York",
			clothesSize: "X",
			country: "USA",
			cvvCode: "123",
			expireDate: "123",
			isRegistrationCompleted: true,
			jeansSize: "X",
			phoneNumber: "555-1234",
			profilePhoto: "https://example.com/avatar1.jpg",
			role: "user",
			shoeSize: "13",
			state: "NY",
		},
		status: "active",
	},
	{
		createdAt: new Date("2023-07-01T00:00:00.000Z"),
		email: "jane.smith@example.com",
		id: "2",
		isVerified: false,
		name: "Jane Smith",
		profile: {
			addressLineOne: "456 Elm St",
			addressLineTwo: "Apt 4B",
			cardNumber: "123",
			city: "New York",
			clothesSize: "X",
			country: "USA",
			cvvCode: "123",
			expireDate: "123",
			isRegistrationCompleted: true,
			jeansSize: "X",
			phoneNumber: "555-1234",
			profilePhoto: "https://example.com/avatar1.jpg",
			role: "user",
			shoeSize: "13",
			state: "NY",
		},
		status: "inactive",
	},
];

test("renders UserTable component", () => {
	customRender(
		<UserTable
			createSortHandler={() => vi.fn()}
			role="buyer"
			users={mockUsers}
		/>,
	);

	expect(screen.getByText("John Doe")).toBeInTheDocument();
	expect(screen.getByText("john.doe@example.com")).toBeInTheDocument();
	expect(screen.getByText("123 Main St")).toBeInTheDocument();
	expect(screen.getByText("June 01, 2023")).toBeInTheDocument();

	expect(screen.getByText("Jane Smith")).toBeInTheDocument();
	expect(screen.getByText("jane.smith@example.com")).toBeInTheDocument();
	expect(screen.getByText("456 Elm St")).toBeInTheDocument();
	expect(screen.getByText("July 01, 2023")).toBeInTheDocument();
});

test("sorts table by name when header is clicked", () => {
	const mockSortHandler = vi.fn();

	customRender(
		<UserTable
			createSortHandler={mockSortHandler}
			role="buyer"
			users={mockUsers}
		/>,
	);

	fireEvent.click(screen.getByText(t("AdminUserManagementPage.name")));

	expect(mockSortHandler).toHaveBeenCalledWith("name");
});
