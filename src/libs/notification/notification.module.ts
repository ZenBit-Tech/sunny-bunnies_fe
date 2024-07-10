import { toast } from "react-toastify";

import { ValueOf } from "../types/value-of.type.ts";
import { NotificationType } from "./enums/index.ts";

type Options = {
	type: ValueOf<typeof NotificationType>;
};

const defaultMessage = "Unexpected error";

class Notification {
	private show(message: string, options: Options): void {
		toast(message, options);
	}
	public error(message = defaultMessage): void {
		this.show(message, {
			type: NotificationType.ERROR,
		});
	}
	public info(message = defaultMessage): void {
		this.show(message, {
			type: NotificationType.INFO,
		});
	}
	public success(message = defaultMessage): void {
		this.show(message, {
			type: NotificationType.SUCCESS,
		});
	}
	public warning(message = defaultMessage): void {
		this.show(message, {
			type: NotificationType.WARNING,
		});
	}
}

export { Notification };
