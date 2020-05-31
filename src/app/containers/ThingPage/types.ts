import { ThingType } from 'types/Thing';

export interface ThingPageState {
  thing: ThingType;
  thingLoading: boolean;
  thingError?: ThingErrorType | null;
}

export enum ThingErrorType {
  NO_THING = 1, // Route found but there was no resource
  THING_NOT_FOUND = 2, // Route not found
  RESPONSE_ERROR = 3, // A network error
  THING_NOT_AUTHORISED = 4, // Authorisation failed
}

export type ContainerState = ThingPageState;
