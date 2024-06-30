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
import React from "react";
import { Link } from "react-router-dom";

import { ChatIcon } from "~/assets/icons/chat-icon.tsx";
import { ViewIcon } from "~/assets/icons/view-icon.tsx";
import { configureString } from "~/helpers/configure-string.helper.ts";
import { AppRoute } from "~/libs/constants/app-route.ts";
import { userRole } from "~/libs/constants/index.ts";
import { User } from "~/libs/types/user.ts";
import theme from "~/theme.ts";

import { CustomTableCell, CustomUpperCaseTableCell } from "./styles.ts";

type Properties = {
	createSortHandler: (field: string) => () => void;
	role: string;
	users: User[];
};

const UserTable: React.FC<Properties> = ({
	createSortHandler,
	role,
	users,
}) => {
	const currentLink =
		role === userRole.BUYER
			? AppRoute.MANAGEMENT_BUYER_$ID
			: AppRoute.MANAGEMENT_VENDOR_$ID;

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
						</CustomUpperCaseTableCell>
						<CustomUpperCaseTableCell onClick={createSortHandler("email")}>
							{t("AdminUserManagementPage.email")}
						</CustomUpperCaseTableCell>
						<CustomUpperCaseTableCell
							onClick={createSortHandler("addressLineOne")}
						>
							{t("AdminUserManagementPage.address")}
						</CustomUpperCaseTableCell>
						<CustomUpperCaseTableCell onClick={createSortHandler("createdAt")}>
							{t("AdminUserManagementPage.date")}
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
								{user.profile.addressLineOne || "-"}
							</CustomTableCell>
							<CustomTableCell>
								{format(new Date(user.createdAt), "MMMM dd, yyyy")}
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
