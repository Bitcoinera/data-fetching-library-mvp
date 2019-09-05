import Aragon from './src/index';

const dappwallDAO = new Aragon('0xeeda0bD313b8042B360Ac6755e01D7970860c445',
    {apm: {ensRegistryAddress: '0x98df287b6c145399aaa709692c8d308357bc085d'}},
    {events: {subscriptionDelayTime: 180000} // 3 mins
}) // rinkeby ensRegistry

// '0xeeda0bD313b8042B360Ac6755e01D7970860c445' --> dappwalltest0.aragonid.eth

dappwallDAO.init()
.then( () => {
    // console.log('notifications are ', dappwallDAO.notifications)
    // console.log('aclProxy is ', dappwallDAO.aclProxy)
    console.log('past events options are ', dappwallDAO.pastEventsOptions)

    dappwallDAO.pastEvents()
    .then( data => {
        console.log('data from pastEvents', data) // working!
    })
})

