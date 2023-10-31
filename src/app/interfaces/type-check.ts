import { ICompanyRegister } from "./organisation";
import { ICustomError} from "./error";
import { IUser } from "./user";
import { IJobApplication } from "./IJobApplication";
import { IApplyForJobRegistration } from "./job-registration";
import { Interface } from "node:readline/promises";

export function instanceOfTypeIUser(object: any): object is IUser {
    return object
}

export function instanceOfTypeIOrganisation(object: any): object is ICompanyRegister {
    return object
}

export function instanceOfTypeIJobApplication(object: any): object is IJobApplication {
    return object
}

export function instanceOfTypeIJobRegistration(object: any): object is IApplyForJobRegistration {
    return object
}

export function instanceOfTypeCustomError(object: any): object is ICustomError{
    return object?.code
}

