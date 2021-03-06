import { AccessMode } from "../types";

export interface Routes {
  authRoute: string;
  fallbackRoute: string;
}

type VerifyRequestOptions = {
  accessMode: AccessMode;
}

export type Options = Partial<VerifyRequestOptions> & Partial<Routes>;
