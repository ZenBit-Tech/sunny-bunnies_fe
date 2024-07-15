import React from "react";
import { Link } from "react-router-dom";

import {
	IconButton,
	Paper,
	Table,
	TableBody,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";
import { format } from "date-fns";
import { t } from "i18next";

import { ChatIcon } from "~/assets/icons/chat-icon.tsx";
import { ViewIcon } from "~/assets/icons/view-icon.tsx";
import { CustomArrowIcon } from "~/components/index.ts";
import { configureString } from "~/helpers/index.ts";
import { AppRoute } from "~/libs/constants/app-route.ts";
import { dateFormat, userRole } from "~/libs/constants/index.ts";
import { User } from "~/libs/types/user.ts";
import { sortOrder } from "~/pages/admin-panel/constants/index.ts";
import theme from "~/theme.ts";

import { CustomTableCell, CustomUpperCaseTableCell } from "./styles.ts";

type Properties = {
	createSortHandler: (field: string) => () => void;
	order: string;
	role: string;
	users: User[];
};

const UserTable: React.FC<Properties> = ({
	createSortHandler,
	order,
	role,
	users,
}) => {
	let currentLink: string;
	const isAscending = order === sortOrder.ASC;

	switch (role) {
		case userRole.BUYER:
			currentLink = AppRoute.MANAGEMENT_BUYER_$ID;
			break;
		case userRole.VENDOR:
			currentLink = AppRoute.MANAGEMENT_VENDOR_$ID;
			break;
		default:
			currentLink = AppRoute.MANAGEMENT_NO_ROLE_$ID;
			break;
	}

	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow
						sx={{
							backgroundColor: theme.palette.gray,
						}}
					>
						<CustomUpperCaseTableCell onClick={createSortHandler("name")}>
							{t("AdminUserManagementPage.name")}
							<CustomArrowIcon isAscending={isAscending} />
						</CustomUpperCaseTableCell>
						<CustomUpperCaseTableCell onClick={createSortHandler("email")}>
							{t("AdminUserManagementPage.email")}
							<CustomArrowIcon isAscending={isAscending} />
						</CustomUpperCaseTableCell>
						<CustomUpperCaseTableCell
							onClick={createSortHandler("addressLineOne")}
						>
							{t("AdminUserManagementPage.address")}
							<CustomArrowIcon isAscending={isAscending} />
						</CustomUpperCaseTableCell>
						<CustomUpperCaseTableCell onClick={createSortHandler("createdAt")}>
							{t("AdminUserManagementPage.date")}
							<CustomArrowIcon isAscending={isAscending} />
						</CustomUpperCaseTableCell>
						<CustomUpperCaseTableCell>
							{t("AdminUserManagementPage.action")}
						</CustomUpperCaseTableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{users.map((user, index) => (
						<TableRow key={index}>
							<CustomTableCell>{user.name}</CustomTableCell>
							<CustomTableCell>{user.email}</CustomTableCell>
							<CustomTableCell>
								{user.profile?.addressLineOne || "-"}
							</CustomTableCell>
							<CustomTableCell>
								{format(new Date(user.createdAt), dateFormat)}
							</CustomTableCell>
							<CustomTableCell>
								<IconButton
									component={Link}
									to={configureString(currentLink, { id: String(user.id) })}
								>
									<ViewIcon />
								</IconButton>
								<IconButton component={Link} to={`/view/${user.id}`}>
									<ChatIcon />
								</IconButton>
							</CustomTableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export { UserTable };
