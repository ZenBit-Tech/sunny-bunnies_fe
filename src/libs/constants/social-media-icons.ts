import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineSharpIcon from "@mui/icons-material/MailOutlineSharp";

import { TwitterIcon } from "~/assets/icons/twitter-icon.tsx";
import { colors } from "~/libs/constants/color.ts";

const socialMediaDataLogIn = [
	{
		IconComponent: InstagramIcon,
		backgroundColor: colors.BLACK,
		href: "#",
		iconColor: colors.WHITE,
	},
	{
		IconComponent: FacebookIcon,
		backgroundColor: colors.BLACK,
		href: "#",
		iconColor: colors.WHITE,
	},
	{
		IconComponent: MailOutlineSharpIcon,
		backgroundColor: colors.BLACK,
		href: "#",
		iconColor: colors.WHITE,
	},
];
const socialMediaDataLogOut = [
	{
		IconComponent: InstagramIcon,
		backgroundColor: colors.WHITE,
		href: "#",
		iconColor: colors.BLACK,
	},
	{
		IconComponent: FacebookIcon,
		backgroundColor: colors.WHITE,
		href: "#",
		iconColor: colors.BLACK,
	},
	{
		IconComponent: TwitterIcon,
		backgroundColor: colors.WHITE,
		href: "#",
		iconColor: colors.WHITE,
	},
	{
		IconComponent: MailOutlineSharpIcon,
		backgroundColor: colors.WHITE,
		href: "#",
		iconColor: colors.BLACK,
	},
];
export { socialMediaDataLogIn, socialMediaDataLogOut };
