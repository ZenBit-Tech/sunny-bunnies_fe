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

import { DeleteIcon } from "~/assets/icons/delete-icon.tsx";
import { EditIcon } from "~/assets/icons/edit-icon.tsx";
import { ViewIcon } from "~/assets/icons/view-icon.tsx";
import { User } from "~/libs/types/user.ts";
import theme from "~/theme.ts";

import { CustomTableCell, CustomUpperCaseTableCell } from "./style.ts";

type Properties = {
	createSortHandler: (field: string) => () => void;
	users: User[];
};

const UserTable: React.FC<Properties> = ({ createSortHandler, users }) => {
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
							<CustomTableCell>{user.profile.addressLineOne}</CustomTableCell>
							<CustomTableCell>
								{format(new Date(user.createdAt), "MMMM dd, yyyy")}
							</CustomTableCell>
							<CustomTableCell>
								<IconButton>
									<EditIcon />
								</IconButton>
								<IconButton>
									<ViewIcon />
								</IconButton>
								<IconButton>
									<DeleteIcon />
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
