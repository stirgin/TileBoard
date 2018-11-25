/*
 This is an example configuration file.

 COPY OR RENAME THIS FILE TO config.js.

 Make sure you use real IDs from your HA entities.
*/
var CONFIG= {
    customTheme: null, // CUSTOM_THEMES.TRANSPARENT, CUSTOM_THEMES.MATERIAL, CUSTOM_THEMES.MOBILE, CUSTOM_THEMES.COMPACT, CUSTOM_THEMES.HOMEKIT, CUSTOM_THEMES.WINPHONE, CUSTOM_THEMES.WIN95
    transition: TRANSITIONS.ANIMATED_GPU, //ANIMATED or SIMPLE (better perfomance)
    entitySize: ENTITY_SIZES.NORMAL, //SMALL, BIG are available
    tileSize: 150,
    tileMargin: 6,
    serverUrl: "http://localhost:8123",
    wsUrl: "ws://localhost:8123/api/websocket",
    authToken: null, // optional: make an long live token and put it here
    //googleApiKey: "XXXXXXXXXX", // Required if you are using Google Maps for device tracker
    debug: false, // Prints entities and state change info to the console.
};


var MAIN = {
    customTheme: null, // CUSTOM_THEMES.TRANSPARENT, CUSTOM_THEMES.MATERIAL, CUSTOM_THEMES.MOBILE, CUSTOM_THEMES.COMPACT, CUSTOM_THEMES.HOMEKIT, CUSTOM_THEMES.WINPHONE, CUSTOM_THEMES.WIN95
    transition: TRANSITIONS.ANIMATED_GPU, //ANIMATED or SIMPLE (better perfomance)
    entitySize: ENTITY_SIZES.NORMAL, //SMALL, BIG are available
    tileSize: 150,
    tileMargin: 6,
    serverUrl: "http://localhost:8123",
    wsUrl: "ws://localhost:8123/api/websocket",
    authToken: null, // optional: make an long live token and put it here
    //googleApiKey: "XXXXXXXXXX", // Required if you are using Google Maps for device tracker
    debug: false, // Prints entities and state change info to the console.

    // next fields are optional
    events: [],
    timeFormat: 24,
    menuPosition: MENU_POSITIONS.LEFT, // or BOTTOM
    hideScrollbar: false, // horizontal scrollbar
    groupsAlign: GROUP_ALIGNS.HORIZONTALLY, // or VERTICALLY

    header: { // https://github.com/resoai/TileBoard/wiki/Header-configuration
        styles: {
            padding: '30px 130px 0',
            fontSize: '28px'
        },
        right: [],
        left: [
            {
                type: HEADER_ITEMS.DATETIME,
                dateFormat: 'EEEE, LLLL dd', //https://docs.angularjs.org/api/ng/filter/date
            }
        ]
    },

    screensaver: {
        timeout: 30,
        slidesTimeout: 10,
        styles: {
            fontSize: '40px'
        },
        leftBottom: [
            { type: SCREENSAVER_ITEMS.DATETIME }
         ],
        slides: [
        { bg: 'images/bg1.jpeg' },
        {
            bg: 'images/bg2.png',
            rightTop: [ // put text to the 2nd slide
                {
                    type: SCREENSAVER_ITEMS.CUSTOM_HTML,
                    html: 'Welcome to the <b>TileBoard</b>',
                    styles: { fontSize: '40px' }
                }
            ]
        },
        { bg: 'images/bg3.jpg' }
        ]
    },

    pages: [
        {
            title: 'Main page',
            bg: 'images/bg1.jpeg',
            icon: 'mdi-home-outline', // home icon
            groups: [
                {
                    title: 'TileBoards',
                    width: 3,
                    height: 3,
                    items: [
                        {
                            position: [0, 0],
                            type: TYPES.ROUTER,
                            routerType: 'CAMERAS',
                            title: 'Cameras',
                            id: { },
                            icon: 'mdi-monitor'
                        },
                    ]
                }
            ]
        }
    ],
}
