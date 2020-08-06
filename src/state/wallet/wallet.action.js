import { createAction } from "redux-act";
import { ChainId } from "../../constants";
export const fetchAllTokenListSaga = createAction("fetch all token list saga", (account, ChainId) => ({ account, ChainId }));
export const fetchTokenBalaneSaga = createAction("fetch token balance saga", (tokenAddress, ChainId) => ({ tokenAddress, ChainId }));
export const setTokenList = createAction("set token list", (tokens) => ({ tokens }));
export const fetchSelectedPairSaga = createAction("fetch selected pair saga", (token, type) => ({ token, type }));
export const setSelectedPair = createAction("set selected pair", (token, type) => ({ token, type }));
export const setSelectedPairPrice = createAction("set selected pair price", (price) => ({ price }));
export const setTokenPriceList = createAction("set price", (priceList) => ({ priceList }));
export const swapQuoteSaga = createAction("swap token quote saga", (sellAmount, buyAmount, orderType, account) => ({ sellAmount, buyAmount, orderType, account }));
export const setTransactionStarted = createAction("set transaction started", (transactionStatus) => ({ transactionStatus }));
export const initTransactionStatus = createAction("init transaction status");
export const setPairPrice = createAction("set pair price", (price) => ({ price }));
export const setOrderType = createAction("set order type", (orderType) => ({ orderType }));
export const fetchOrderConfigSaga = createAction("fetch order config saga", (orderDetail) => ({ orderDetail }));
export const initWallet = createAction("init wallet status");