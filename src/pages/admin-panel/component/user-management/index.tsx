import React, { useCallback, useEffect, useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import SortIcon from "@mui/icons-material/Sort";
import {
	Box,
	IconButton,
	InputBase,
	Menu,
	MenuItem,
	Typography,
} from "@mui/material";
import { t } from "i18next";

import { CustomError, Loader } from "~/components/index.ts";
import {
	sortFieldNames,
	sortOption,
} from "~/pages/admin-panel/constants/index.ts";
import { useGetUsersByOptionsQuery } from "~/redux/admin/admin-api.ts";
import theme from "~/theme.ts";

import {
	BoldDivider,
	StyledContainer,
	StyledSortButton,
	StyledWrapperContainer,
	StyledWrapperHeader,
} from "../styles.ts";
import { UserTable } from "../user-table/index.tsx";
import { StyledPaper, StylesSearchBox } from "./styles.ts";

type Properties = {
	role: string;
};

const UserManagement: React.FC<Properties> = ({ role }) => {
	const [searchQuery, setSearchQuery] = useState("");
	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
	const [sortOrder, setSortOrder] = useState<"ASC" | "DESC">("ASC");
	const [sortField, setSortField] = useState("name");

	const {
		data: fetchedUsers = [],
		isError,
		isLoading,
		refetch,
	} = useGetUsersByOptionsQuery({
		order: sortOrder,
		role,
		searchQuery,
		sortField,
	});
	const handleSearch = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			const { value } = event.target;
			setSearchQuery(value);
			refetch();
		},
		[refetch],
	);

	const handleSortClick = useCallback(
		(event: React.MouseEvent<HTMLButtonElement>) => {
			setAnchorEl(event.currentTarget);
		},
		[],
	);

	const handleSortClose = useCallback(() => {
		setAnchorEl(null);
	}, []);

	const createSortHandler = useCallback(
		(field: string) => (): void => {
			setSortField(field);
			handleSortClose();
			refetch();
		},
		[handleSortClose, refetch],
	);

	const toggleSortOrderHandler = useCallback(() => {
		setSortOrder((prevSortOrder) => (prevSortOrder === "ASC" ? "DESC" : "ASC"));
		refetch();
	}, [refetch]);

	useEffect(() => {
		refetch();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [location.pathname, refetch]);

	return (
		<StyledContainer>
			<Typography
				sx={{
					fontFamily: theme.typography.playfairDisplayBold,
					fontSize: theme.fontSizes.large,
					mb: 2,
				}}
			>
				{t("AdminPage.users")}
			</Typography>
			<StyledWrapperContainer>
				<StyledWrapperHeader>
					<Box sx={{ alignItems: "center", display: "flex" }}>
						<BoldDivider />
						<Typography
							sx={{ fontFamily: theme.typography.playfairDisplayBold }}
						>
							{t("AdminPage.userList")}
						</Typography>
					</Box>
					<Box>
						<Box sx={{ display: "flex", gap: "10px" }}>
							<StyledSortButton
								aria-label="toggle-sort-order"
								onClick={toggleSortOrderHandler}
							>
								{sortOrder === "ASC" ? (
									<SortIcon />
								) : (
									<SortIcon sx={{ transform: "rotate(180deg)" }} />
								)}
								{sortOrder}
							</StyledSortButton>
							<StyledSortButton
								aria-controls="sort-menu"
								aria-haspopup="true"
								onClick={handleSortClick}
							>
								{t("AdminUserManagementPage.sort")}: {sortFieldNames[sortField]}
							</StyledSortButton>
						</Box>
						<Menu
							anchorEl={anchorEl}
							id="sort-menu"
							onClose={handleSortClose}
							open={Boolean(anchorEl)}
						>
							<MenuItem onClick={createSortHandler(sortOption.NAME)}>
								{t("AdminUserManagementPage.name")}
							</MenuItem>
							<MenuItem onClick={createSortHandler(sortOption.EMAIL)}>
								{t("AdminUserManagementPage.email")}
							</MenuItem>
							<MenuItem onClick={createSortHandler(sortOption.ADDRESS)}>
								{t("AdminUserManagementPage.address")}
							</MenuItem>
							<MenuItem onClick={createSortHandler(sortOption.DATE)}>
								{t("AdminUserManagementPage.date")}
							</MenuItem>
						</Menu>
					</Box>
				</StyledWrapperHeader>
				<StylesSearchBox>
					<StyledPaper component="form">
						<IconButton aria-label="search" sx={{ p: "10px" }} type="submit">
							<SearchIcon />
						</IconButton>
						<InputBase
							inputProps={{ "aria-label": "search" }}
							onChange={handleSearch}
							placeholder={t("AdminUserManagementPage.search")}
							sx={{ width: "100%" }}
							value={searchQuery}
						/>
					</StyledPaper>
				</StylesSearchBox>
				<UserTable
					createSortHandler={createSortHandler}
					role={role}
					users={fetchedUsers}
				/>
				{isLoading && <Loader />}
				{isError && (
					<CustomError
						errorMessage={t("AdminUserManagementPage.errorLoadingProfile")}
					/>
				)}
			</StyledWrapperContainer>
		</StyledContainer>
	);
};

export { UserManagement };
