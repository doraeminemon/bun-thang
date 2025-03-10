
import { BYPASS_TOKEN } from '$env/static/private';
export const config = {
  isr: {
    expiration: 60,
    bypassToken: BYPASS_TOKEN,
    allowQuery: ['search']
  }
};