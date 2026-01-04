import { Cashfree, CFEnvironment } from "cashfree-pg";

// @ts-ignore
Cashfree.XClientId = process.env.CASHFREE_APP_ID;
// @ts-ignore
Cashfree.XClientSecret = process.env.CASHFREE_SECRET_KEY;
// Explicitly set to PRODUCTION
// @ts-ignore
Cashfree.XEnvironment = 'PRODUCTION';

export default Cashfree;
