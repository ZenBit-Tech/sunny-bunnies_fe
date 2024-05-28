const storageKey = {
	ACCESS_TOKEN: "access_token",
	REFRESH_TOKEN: "refresh_token",
} as const;

type StorageKey = keyof typeof storageKey;

class Storage {
	private store: globalThis.Storage;

	public constructor(store: globalThis.Storage) {
		this.store = store;
	}

	public drop(key: (typeof storageKey)[StorageKey]): Promise<void> {
		this.store.removeItem(key);
		return Promise.resolve();
	}

	public get<R = string>(
		key: (typeof storageKey)[StorageKey],
	): Promise<R | null> {
		return Promise.resolve(this.store.getItem(key) as R | null);
	}

	public set(
		key: (typeof storageKey)[StorageKey],
		value: string,
	): Promise<void> {
		this.store.setItem(key, value);
		return Promise.resolve();
	}
}

const storage = new Storage(localStorage);

export { storage, storageKey };
