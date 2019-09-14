import Aragon from './src/index';

const dappwallDAO = new Aragon('0xeeda0bD313b8042B360Ac6755e01D7970860c445',
    {apm: {ensRegistryAddress: '0x98df287b6c145399aaa709692c8d308357bc085d'}}
) // rinkeby ensRegistry

// '0xeeda0bD313b8042B360Ac6755e01D7970860c445' --> dappwalltest0.aragonid.eth
// '0x40923e3215243b4a51bf411f9873d02f5bacfd60' --> voting app proxy

dappwallDAO.init()
.then( () => {
    // console.log('notifications are ', dappwallDAO.notifications)
    // console.log('aclProxy is ', dappwallDAO.aclProxy)
    console.log('\n\n past events options are ', dappwallDAO.pastEventsOptions)

    // dappwallDAO.pastEvents()
    // .then( data => {
    //     console.log('data from pastEvents', data) // working!
    // })

    dappwallDAO.getApp('0x40923e3215243b4a51bf411f9873d02f5bacfd60')
    .then( data => {
        console.log('\n\n data is ', data)
    })

    dappwallDAO.runApp('0x40923e3215243b4a51bf411f9873d02f5bacfd60')
    .then( () => {
        // console.log(dappwallDAO.handler())
        // handlers.createRequestHandler(request$, 'past_events', handlers.pastEvents),
    })

})
