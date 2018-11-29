(function() {
    return {
   transition: TRANSITIONS.ANIMATED_GPU, //ANIMATED or SIMPLE (better perfomance)
   entitySize: ENTITY_SIZES.NORMAL, //SMALL, BIG are available
   tileSize: 150,
   tileMargin: 6,

   authToken: null, // optional: make an long live token and put it here
   //googleApiKey: "XXXXXXXXXX", // Required if you are using Google Maps for device tracker
   debug: false, // Prints entities and state change info to the console.

   // next fields are optional
   events: [],
   timeFormat: 24,
   menuPosition: MENU_POSITIONS.LEFT,
   hideScrollbar: false,
   groupsAlign: GROUP_ALIGNS.HORIZONTALLY,

   header: {
      styles: {},
      right: [],
      left: []
   },

    pages: [
        {
            title: 'Cameras page',
            bg: 'images/bg1.jpeg',
            icon: 'mdi-home-outline', // home icon
            style: {
                width: '100%'
            },
            groups: [
                {
                    items: [
                        {
                            position: [0, 0],
                            id: 'camera.kitchen',
                            type: TYPES.CAMERA_THUMBNAIL,
                            bgSize: 'cover',
                            classes: ['flex-item'],
                            state: false,
                            styles: {},

                            fullscreen: {
                                type: TYPES.CAMERA,
                                refresh: 1000, // can be number in milliseconds
                                bgSize: 'contain'
                            }
                        },
                        {
                            position: [0, 3],
                            id: 'camera.sophias_bed',
                            type: TYPES.CAMERA_THUMBNAIL,
                            bgSize: 'cover',
                            classes: ['flex-item'],
                            state: false,
                            styles: {},

                            fullscreen: {
                                type: TYPES.CAMERA,
                                refresh: 1000, // can be number in milliseconds
                                bgSize: 'contain'
                            },
                        },
                        {
                            position: [4, 0],
                            id: 'camera.back_doors',
                            type: TYPES.CAMERA_THUMBNAIL,
                            bgSize: 'cover',
                            classes: ['flex-item'],
                            state: false,
                            styles: {},

                            fullscreen: {
                                type: TYPES.CAMERA,
                                refresh: 1000, // can be number in milliseconds
                                bgSize: 'contain'
                            }
                        },
                        {
                            position: [0, 0],
                            id: 'camera.upstairs',
                            type: TYPES.CAMERA_THUMBNAIL,
                            bgSize: 'cover',
                            classes: ['flex-item'],
                            state: false,
                            styles: {},

                            fullscreen: {
                                type: TYPES.CAMERA,
                                refresh: 1000, // can be number in milliseconds
                                bgSize: 'contain'
                            },
                        },
                        {
                            position: [0, 0],
                            id: 'camera.office',
                            type: TYPES.CAMERA_THUMBNAIL,
                            bgSize: 'cover',
                            classes: ['flex-item'],
                            state: false,
                            styles: {},

                            fullscreen: {
                                type: TYPES.CAMERA,
                                refresh: 1000, // can be number in milliseconds
                                bgSize: 'contain'
                            },
                        },
                        {
                            position: [0, 0],
                            id: 'camera.lanai',
                            type: TYPES.CAMERA_THUMBNAIL,
                            bgSize: 'cover',
                            classes: ['flex-item'],
                            state: false,
                            styles: {},

                            fullscreen: {
                                type: TYPES.CAMERA,
                                refresh: 1000, // can be number in milliseconds
                                bgSize: 'contain'
                            },
                        },
                    ]
                },
            ]
        },
    ],
}
})();