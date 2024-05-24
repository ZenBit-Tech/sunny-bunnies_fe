import React from "react";

import { ExampleForm } from "~/components/index.tsx";

import styles from "./example-styles.module.css";

const Auth: React.FC = () => {
	return (
		<div className={styles["example-selector"]}>
			<ExampleForm />
		</div>
	);
};

export { Auth };
