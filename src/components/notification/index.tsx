import React from "react";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const Notification: React.FC = () => {
	return (
		<ToastContainer
			autoClose={4000}
			closeOnClick
			draggable
			hideProgressBar={false}
			newestOnTop
			pauseOnFocusLoss
			pauseOnHover
			position="top-right"
			rtl={false}
			theme="dark"
		/>
	);
};

export { Notification };
