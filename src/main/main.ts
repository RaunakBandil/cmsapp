import { PRECONNECT_CHECK_BLOCKLIST } from "@angular/common";

export const main = {
  production: false,
  provide: PRECONNECT_CHECK_BLOCKLIST,
  apiUrl: 'http://localhost:1337'
};
