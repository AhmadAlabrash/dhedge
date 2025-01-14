import { arbitrumChainData } from "../../config/chainData/arbitrumData";
import { implementationStorageAddress } from "../common/deploymentData";
import { IAddresses } from "../types";

export const arbitrumProdData: IAddresses = {
  protocolDaoAddress: arbitrumChainData.dHEDGE.daoMultisig,
  protocolTreasuryAddress: arbitrumChainData.dHEDGE.treasury,
  proxyAdminAddress: arbitrumChainData.proxyAdmin,
  implementationStorageAddress,

  // Gnosis safe multicall/send address
  // https://github.com/gnosis/safe-deployments
  gnosisMultiSendAddress: "0xA238CBeb142c10Ef7Ad8442C6D1f9E89e07e7761",
  gnosisApi: "https://safe-transaction-arbitrum.safe.global",

  easySwapperConfig: {
    customLockupAllowedPools: [],
    feeByPassManagers: [],
    feeNumerator: 10,
    feeDenominator: 10000,
  },

  superSwapper: {
    routeHints: [],
  },

  assets: {
    nativeAssetWrapper: arbitrumChainData.assets.weth,
    weth: arbitrumChainData.assets.weth,
    usdc: arbitrumChainData.assets.usdc,
    dai: arbitrumChainData.assets.dai,
    dht: arbitrumChainData.assets.dht,
  },

  uniV3: {
    uniswapV3FactoryAddress: arbitrumChainData.uniswapV3.factory,
    uniswapV3RouterAddress: arbitrumChainData.uniswapV3.swapRouter,
    uniSwapV3NonfungiblePositionManagerAddress: arbitrumChainData.uniswapV3.nonfungiblePositionManager,
  },

  aaveV3: {
    aaveIncentivesControllerAddress: arbitrumChainData.aaveV3.incentives,
    aaveLendingPoolAddress: arbitrumChainData.aaveV3.lendingPool,
    aaveProtocolDataProviderAddress: arbitrumChainData.aaveV3.poolDataProvider,
  },

  oneInchV4RouterAddress: arbitrumChainData.oneInch.v4Router,
  oneInchV5RouterAddress: arbitrumChainData.oneInch.v5Router,

  balancerV2VaultAddress: arbitrumChainData.balancer.v2Vault,
};

export const arbitrumProdFileNames = {
  versionsFileName: "./publish/arbitrum/prod/versions.json",
  assetsFileName: "./config/arbitrum/dHEDGE Assets list.json",
  assetGuardsFileName: "./config/arbitrum/dHEDGE Governance Asset Guards.csv",
  contractGuardsFileName: "./config/arbitrum/dHEDGE Governance Contract Guards.csv",
  governanceNamesFileName: "./config/arbitrum/dHEDGE Governance Names.csv",
} as const;
