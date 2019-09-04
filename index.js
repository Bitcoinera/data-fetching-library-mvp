// import * as wrapper from './node_modules/@aragon/wrapper/src/index';
import Aragon from './src/index';

const dappwallDAO = new Aragon('0xeeda0bD313b8042B360Ac6755e01D7970860c445', {apm: {ensRegistryAddress: '0x98df287b6c145399aaa709692c8d308357bc085d'}}) // rinkeby ensRegistry

// '0xeeda0bD313b8042B360Ac6755e01D7970860c445' --> dappwalltest0.aragonid.eth

dappwallDAO.init()
