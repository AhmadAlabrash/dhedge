

# Functions:
- [`txGuard(address _poolManagerLogic, address to, bytes data)`](#SynthetixFuturesMarketContractGuard-txGuard-address-address-bytes-)

# Events:
- [`FuturesMarketEvent(address fundAddress, address futuresMarket)`](#SynthetixFuturesMarketContractGuard-FuturesMarketEvent-address-address-)


# Function `txGuard(address _poolManagerLogic, address to, bytes data) → uint16 txType, bool` {#SynthetixFuturesMarketContractGuard-txGuard-address-address-bytes-}
Transaction guard for a Synthetix Futures Market


## Parameters:
- `_poolManagerLogic`: the pool manager logic

- `to`: the futures market

- `data`: the transaction data


## Return Values:
- txType the transaction type of a given transaction data.

- isPublic if the transaction is public or private


