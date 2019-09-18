import Aragon from './src/index';

const yourDAO = new Aragon('0xeeda0bD313b8042B360Ac6755e01D7970860c445',
    {apm: {ensRegistryAddress: '0x98df287b6c145399aaa709692c8d308357bc085d'}},
) // rinkeby ensRegistry

// '0xeeda0bD313b8042B360Ac6755e01D7970860c445' --> dappwalltest0.aragonid.eth
// '0x40923e3215243b4a51bf411f9873d02f5bacfd60' --> voting app proxy
// '0xe2e1ff165a08bcd7a127a77ea50d0cfdad580510' --> acl proxy

yourDAO.init()
.then( () => {

    console.log('\n\n past events options are ', yourDAO.pastEventsOptions)
    // first block 4843439

    // yourDAO.pastEvents()
    // .then( data => {
    //     console.log('data from past events', data) // working!
    // })

    yourDAO.currentEvents()
    .then( data => {
        console.log('\n\n data from current events', data) // working!
    })

})
