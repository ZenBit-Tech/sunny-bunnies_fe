const findItemByKey = <T>(items: T[], name: string, key: keyof T): T | null => {
	return items.find((item) => item[key] === name) || null;
};

export { findItemByKey };
