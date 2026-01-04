import { Cashfree, CFEnvironment } from "cashfree-pg";

// @ts-ignore
Cashfree.XClientId = process.env.CASHFREE_APP_ID;
// @ts-ignore
Cashfree.XClientSecret = process.env.CASHFREE_SECRET_KEY;
// Use string "SANDBOX" or "PRODUCTION" directly to avoid undefined enum issues
// @ts-ignore
Cashfree.XEnvironment = process.env.CASHFREE_ENV === 'production' ? 'PRODUCTION' : 'SANDBOX';

export default Cashfree;
