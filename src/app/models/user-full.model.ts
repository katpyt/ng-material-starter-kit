export interface UserFullModel {
    readonly id: number;
    readonly email: string;
    readonly username: string;
    readonly password: string;
    readonly name: FullName;
    readonly address: Address;
    readonly phone: string;
}

export interface FullName{
    readonly firstname: string;
    readonly lastname: string;
}

export interface Address{
    readonly city: string;
    readonly street: string;
    readonly number: number;
    readonly zipcode: string;
    readonly geolocation: Geolocation;
}

export interface Geolocation{
    readonly lat: string;
    readonly long: string;
}
