import { AxelarAssetTransfer, CHAINS, Environment } from "@axelar-network/axelarjs-sdk";

const sdk = new AxelarAssetTransfer({environment: Environment.TESTNET});

const fromChain = CHAINS.TESTNET.POLYGON;
const toChain = CHAINS.TESTNET.AVALANCHE;
const destinationAddress = '0x3E77Fd1B4d4176CA9d54dB60f132FbB88BFA43CA';
const asset =  'uausdc';

const depositAddress = sdk.getDepositAddress({
    fromChain,
    toChain,
    destinationAddress,
    asset
});

depositAddress.then(address => {console.log('result was',address)})
.catch(err => console.error(err.message));