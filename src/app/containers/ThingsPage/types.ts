/* --- STATE --- */
import { ThingType } from 'types/Thing';

export interface ThingsPageState {
  things: ThingType[];
  thingsLoading: boolean;
  thingsError?: ThingsErrorType | null;
}

export enum ThingsErrorType {
  NO_THINGS = 1, // Route found but there were no resources
  THINGS_NOT_FOUND = 2, // Route not found
  RESPONSE_ERROR = 3, // A network error
  THINGS_NOT_AUTHORISED = 4, // Authorisation failed
}

export type ContainerState = ThingsPageState;
