import { Cashfree, CFEnvironment } from "cashfree-pg";

// @ts-ignore
Cashfree.XClientId = process.env.CASHFREE_APP_ID;
// @ts-ignore
Cashfree.XClientSecret = process.env.CASHFREE_SECRET_KEY;
// @ts-ignore
Cashfree.XEnvironment = process.env.CASHFREE_ENV === 'production' ? CFEnvironment.PRODUCTION : CFEnvironment.SANDBOX;

export default Cashfree;
