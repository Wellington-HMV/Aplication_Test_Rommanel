import { AddressModel } from "../address.model";
import{RegisterModel}from"../register.model";

export interface RegisterViewModel {
    register: RegisterModel;
    address: AddressModel;
}