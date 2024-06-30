import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

import {
	useCheckFollowStatusQuery,
	useFollowMutation,
	useUnFollowMutation,
} from "~/redux/user/user-api.ts";

type UseFollowHandlerResult = {
	handleFollowClick: () => Promise<void>;
	isFollowing: boolean;
	serverError: string | undefined;
};

const useFollowHandler = (vendorId: string): UseFollowHandlerResult => {
	const { t } = useTranslation();
	const { data: followStatus } = useCheckFollowStatusQuery({
		userId: vendorId,
	});
	const [serverError, setServerError] = useState("");
	const [isFollowing, setIsFollowing] = useState(false);
	const [followMutation] = useFollowMutation();
	const [unfollowMutation] = useUnFollowMutation();

	useEffect(() => {
		if (followStatus !== undefined) {
			setIsFollowing(followStatus);
		}
	}, [followStatus, vendorId]);

	const handleFollowClick = useCallback(async () => {
		try {
			if (isFollowing) {
				const result = await unfollowMutation({ userId: vendorId });
				if (result.data) {
					setIsFollowing(false);
				} else {
					const err = (result.error as FetchBaseQueryError).data as Error;
					setServerError(err.message);
				}
			} else {
				const result = await followMutation({ userId: vendorId });
				if (result.data) {
					setIsFollowing(true);
				} else {
					const err = (result.error as FetchBaseQueryError).data as Error;
					setServerError(err.message);
				}
			}
		} catch (error) {
			setServerError(t("VendorProfilePage.anErrorOccur"));
		}
	}, [isFollowing, followMutation, unfollowMutation, vendorId, t]);

	return { handleFollowClick, isFollowing, serverError };
};

export { useFollowHandler };
