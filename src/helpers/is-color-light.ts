import { colord, extend } from "colord";
import namesPlugin from "colord/plugins/names";

extend([namesPlugin]);

const isColorLight = (color: string): boolean => {
	const hexColor = colord(color).toHex();

	return colord(hexColor).isLight();
};

export { isColorLight };
