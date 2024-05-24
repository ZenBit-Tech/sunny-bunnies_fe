import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { useAppDispatch, useAppSelector } from "~/modules/example-hooks.ts";
import { addUser } from "~/modules/example-slice.ts";

import styles from "./styles.module.css";

type FormData = {
	firstName: string;
	lastName: string;
};

const ExampleForm: React.FC = () => {
	const dispatch = useAppDispatch();
	const { t } = useTranslation();
	const userList = useAppSelector((state) => state.user.list);

	const {
		formState: { errors, isValid },
		handleSubmit,
		register,
		reset,
	} = useForm<FormData>({
		mode: "onBlur",
	});

	const onSubmit = handleSubmit(({ firstName, lastName }) => {
		dispatch(addUser({ firstName, lastName }));
		reset();
	});

	return (
		<Container className={styles["form"]} maxWidth="sm">
			<Box component="form" noValidate onSubmit={onSubmit}>
				<Typography variant="h6">{t("ExampleComponent.firstName")}</Typography>
				<TextField
					fullWidth
					margin="normal"
					{...register("firstName", {
						minLength: {
							message: t("Min 3 symbols"),
							value: 3,
						},
						required: t("ExampleComponent.thisFieldRequired"),
					})}
					error={!!errors.firstName}
				/>
				{errors.firstName && (
					<FormHelperText error>{errors.firstName.message}</FormHelperText>
				)}
				<Typography variant="h6">{t("ExampleComponent.lastName")}</Typography>
				<TextField
					fullWidth
					margin="normal"
					{...register("lastName", {
						minLength: {
							message: t("Min 3 symbols"),
							value: 3,
						},
						required: t("ExampleComponent.thisFieldRequired"),
					})}
					error={!!errors.lastName}
				/>
				{errors.lastName && (
					<FormHelperText error>{errors.lastName.message}</FormHelperText>
				)}
				<Button
					color="primary"
					disabled={!isValid}
					sx={{ color: "text.active", mt: 3 }}
					type="submit"
					variant="contained"
				>
					{t("ExampleComponent.submit")}
				</Button>
			</Box>
			{userList.map((user) => (
				<Typography
					key={user.firstName}
				>{`${user.firstName} ${user.lastName}`}</Typography>
			))}
		</Container>
	);
};

export { ExampleForm };
