type Role = {
	role: string;
};

type GeneralInformation = {
	phoneNumber: string;
	profilePhoto: string;
};

type Address = {
	addressLineOne: string;
	addressLineTwo: string;
	city: string;
	country: string;
	state: string;
};

type CreditCard = {
	cardNumber: string;
	cvvCode: string;
	expireDate: string;
};

type Size = {
	clothesSize: string;
	isRegistrationCompleted: boolean;
	jeansSize: string;
	shoeSize: string;
};

type Profile = Address & CreditCard & GeneralInformation & Role & Size;

export {
	type Address,
	type CreditCard,
	type GeneralInformation,
	type Profile,
	type Role,
	type Size,
};
