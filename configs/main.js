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
    menuPosition: MENU_POSITIONS.LEFT, // or BOTTOM
    hideScrollbar: false, // horizontal scrollbar
    groupsAlign: GROUP_ALIGNS.HORIZONTALLY, // or VERTICALLY

    header: { // https://github.com/resoai/TileBoard/wiki/Header-configuration
        styles: {
            padding: '30px 130px 0',
            fontSize: '28px'
        },
        right: [

            {
                type: HEADER_ITEMS.CUSTOM_HTML,
                html: 'Welcome to the <b>TileBoard</b>',
                styles: {
                    margin: '40px 0 0'
                }
            },
            // Uncomment weather object to get weather in your header.
            {
                type: HEADER_ITEMS.WEATHER,
                styles: {
                    margin: '0 0 0'
                },
                icon: '&sensor.dark_sky_icon.state',
                icons: {
                    'clear-day': 'clear',
                    'clear-night': 'nt-clear',
                    'cloudy': 'cloudy',
                    'rain': 'rain',
                    'sleet': 'sleet',
                    'snow': 'snow',
                    'wind': 'hazy',
                    'fog': 'fog',
                    'partly-cloudy-day': 'partlycloudy',
                    'partly-cloudy-night': 'nt-partlycloudy'
                },
                fields: {
                    summary: '&sensor.dark_sky_summary.state',
                    temperature: '&sensor.dark_sky_temperature.state',
                    temperatureUnit: '&sensor.dark_sky_temperature.attributes.unit_of_measurement',
                }
            }
        ],
        left: [
            {
                type: HEADER_ITEMS.DATETIME,
                dateFormat: 'EEEE, LLLL dd', //https://docs.angularjs.org/api/ng/filter/date
            }
        ]
    },

    pages: [
        {
            title: 'Main page',
            bg: 'images/bg1.jpeg',
            icon: 'mdi-home-outline', // home icon
            groups: [
                {
                    title: 'First group',
                    width: 2,
                    height: 3,
                    items: [
                        {
                            position: [0, 0],
                            width: 2,
                            type: TYPES.TEXT_LIST,
                            id: {}, // using empty object for an unknown id
                            state: false, // disable state element
                            list: [
                                {
                                    title: 'Sun.sun state',
                                    icon: 'mdi-weather-sunny',
                                    value: '&sun.sun.state'
                                },
                                {
                                    title: 'Sun rising',
                                    icon: 'mdi-clock-outline',
                                    value: '&sun.sun.attributes.next_rising'
                                },
                                {
                                    title: 'Sun setting',
                                    icon: 'mdi-clock-outline',
                                    value: '&sun.sun.attributes.next_setting'
                                }
                            ]
                        },

                        {
                            position: [0, 1],
                            id: 'camera.kitchen',
                            type: TYPES.CAMERA_THUMBNAIL,
                            bgSize: 'cover',
                            width: 2,
                            height: 1,
                            state: false,
                            fullscreen: {
                                type: TYPES.CAMERA,
                                refresh: 1000, // can be number in milliseconds
                                bgSize: 'contain'
                            }
                        },
                        {
                            position: [0, 2],
                            id: 'camera.sophias_bed',
                            type: TYPES.CAMERA_THUMBNAIL,
                            bgSize: 'cover',
                            width: 2,
                            height: 1,
                            state: false,
                            fullscreen: {
                                type: TYPES.CAMERA,
                                refresh: 1000, // can be number in milliseconds
                                bgSize: 'contain'
                            },
                        },
                        {
                            position: [0, 3],
                            id: 'camera.lanai',
                            type: TYPES.CAMERA_THUMBNAIL,
                            bgSize: 'cover',
                            width: 2,
                            height: 1,
                            state: false,
                            fullscreen: {
                                type: TYPES.CAMERA,
                                refresh: 1000, // can be number in milliseconds
                                bgSize: 'contain'
                            },
                        }
                    ]
                },

                {
                    title: 'Second group',
                    width: 2,
                    height: 4,
                    items: [
                        {
                            position: [0, 0],
                            name: 'Johan',
                            type: TYPES.DEVICE_TRACKER,
                            id: 'device_tracker.404e3624619c',
                            map: 'yandex',
                            states: {
                                home: "Home",
                                not_home: "Away",
                                office: "Office",
                            },
                            zoomLevels: [13, 13], // or [9] for only one map slide
                            hideEntityPicture: false, //hide entity pic, if you need only map
                            slidesDelay: 2 // delay before first slide animation
                        },

                        {
                            position: [1, 0],
                            title: 'Bedside',
                            subtitle: 'Tanya',
                            id: 'light.tanyas_bedside',
                            type: TYPES.LIGHT,
                            states: {
                                on: "On",
                                off: "Off"
                            },
                            icons: {
                                on: "mdi-lightbulb-on",
                                off: "mdi-lightbulb",
                            },
                            sliders: [
                                {
                                    title: 'Brightness',
                                    field: 'brightness',
                                    max: 100,
                                    min: 0,
                                    step: 5,
                                    request: {
                                        type: "call_service",
                                        domain: "light",
                                        service: "turn_on",
                                        field: "brightness"
                                    }
                                },
                                {
                                    title: 'Color temp',
                                    field: 'color_temp',
                                    max: 666,
                                    min: 255,
                                    step: 80,
                                    request: {
                                        type: "call_service",
                                        domain: "light",
                                        service: "turn_on",
                                        field: "color_temp"
                                    }
                                }
                            ]
                        },


                        {
                            position: [0, 1],
                            type: TYPES.ALARM,
                            //id: "alarm_control_panel.home_alarm",
                            id: { state: 'disarmed' }, // replace it with real string id
                            title: 'Home Alarm',
                            icons: {
                                disarmed: 'mdi-bell-off',
                                pending: 'mdi-bell',
                                armed_home: 'mdi-bell-plus',
                                armed_away: 'mdi-bell',
                                triggered: 'mdi-bell-ring'
                            },
                            states: {
                                disarmed: 'Disarmed',
                                pending: 'Pending',
                                armed_home: 'Armed home',
                                armed_away: 'Armed away',
                                triggered: 'Triggered'
                            }
                        },
                        {
                            position: [1, 1],
                            type: TYPES.SENSOR,
                            title: 'Family room',
                            id: 'sensor.aeotec_zw100_multisensor_6_temperature',
                            unit: 'C', // override default entity unit
                            state: false, // hidding state
                            filter: function (value) { // optional
                                var num = parseFloat(value);
                                return num && !isNaN(num) ? num.toFixed(1) : value;
                            }
                        },
                        {
                            position: [1, 2],
                            type: TYPES.SWITCH,
                            id: 'switch.uvcg3flex29f8',
                            title: "Sophia's camera",
                            subtitle: '',
                            states: {
                                on: "On",
                                off: "Off"
                            },
                            icons: {
                                on: "mdi-camera",
                                off: "mdi-camera-off",
                            }
                        },
                        {
                            position: [0, 3],
                            type: TYPES.WEATHER_LIST,
                            width: 2,
                            height: 2,
                            title: 'Forecast',
                            id: {},
                            icons: {
                                'clear-day': 'clear',
                                'clear-night': 'nt-clear',
                                'cloudy': 'cloudy',
                                'rain': 'rain',
                                'sleet': 'sleet',
                                'snow': 'snow',
                                'wind': 'hazy',
                                'fog': 'fog',
                                'partly-cloudy-day': 'partlycloudy',
                                'partly-cloudy-night': 'nt-partlycloudy'
                            },
                            hideHeader: false,
                            secondaryTitle: 'rain chance',
                            list: [1,2,3,4,5].map(function (id) {
                                var d = new Date(Date.now() + id * 24 * 60 * 60 * 1000);
                                var date = d.toString().split(' ').slice(1,3).join(' ');

                                var forecast = "&sensor.dark_sky_overnight_low_temperature_" + id + ".state - ";
                                forecast += "&sensor.dark_sky_daytime_high_temperature_" + id + ".state";
                                forecast += "&sensor.dark_sky_daytime_high_temperature_" + id + ".attributes.unit_of_measurement";

                                var rain = "&sensor.dark_sky_precip_probability_" + id + ".state";
                                rain += "&sensor.dark_sky_precip_probability_" + id + ".attributes.unit_of_measurement";

                                return {
                                    date: date,
                                    icon: "&sensor.dark_sky_icon_" + id + ".state",
                                    //iconImage: null, replace icon with image
                                    primary: forecast,
                                    secondary: rain
                                }
                            })
                        }


                    ]
                },

                {
                    title: 'Third group',
                    width: 2,
                    height: 3,
                    items: [
                        {
                            position: [0, 0],
                            height: 2,


                            //classes: ['-compact'], // enable this if you want a little square tile (1x1)
                            type: TYPES.WEATHER,
                            id: 'weather.dark_sky',
                            state: '&sensor.dark_sky_summary.state', // label with weather summary (e.g. Sunny)
                            icon: '&sensor.dark_sky_icon.state',
                            iconImage: '&sensor.dark_sky_icon.state', // use this one if you want to replace icon with image
                            icons: {
                                'clear-day': 'clear',
                                'clear-night': 'nt-clear',
                                'cloudy': 'cloudy',
                                'rain': 'rain',
                                'sleet': 'sleet',
                                'snow': 'snow',
                                'wind': 'hazy',
                                'fog': 'fog',
                                'partly-cloudy-day': 'partlycloudy',
                                'partly-cloudy-night': 'nt-partlycloudy'
                            },
                            fields: { // most of that fields are optional
                                summary: '&sensor.dark_sky_summary.state',
                                temperature: '&sensor.dark_sky_temperature.state',
                                temperatureUnit: '&sensor.dark_sky_temperature.attributes.unit_of_measurement',
                                windSpeed: '&sensor.dark_sky_wind_speed.state',
                                windSpeedUnit: '&sensor.dark_sky_wind_speed.attributes.unit_of_measurement',
                                humidity: '&sensor.dark_sky_humidity.state',
                                humidityUnit: '&sensor.dark_sky_humidity.attributes.unit_of_measurement',

                                list: [
                                    // custom line
                                    'Feels like '
                                    + '&sensor.dark_sky_apparent_temperature.state'
                                    + '&sensor.dark_sky_apparent_temperature.attributes.unit_of_measurement',

                                    // another custom line
                                    'Pressure '
                                    + '&sensor.dark_sky_pressure.state'
                                    + '&sensor.dark_sky_pressure.attributes.unit_of_measurement',

                                    // yet another custom line
                                    '&sensor.dark_sky_precip_probability.state'
                                    + '&sensor.dark_sky_precip_probability.attributes.unit_of_measurement'
                                    + ' chance of rain'
                                ]
                            }
                        },
                        {
                            position: [1, 0],
                            width: 1,
                            type: TYPES.MEDIA_PLAYER,
                            id: 'media_player.mp_foyer',
                            //id: {: 0.2}, // replace it with real string id
                            state: false,
                            title: 'Foyer',
                            subtitle: '@attributes.media_title',
                            bgSuffix: '@attributes.entity_picture',
                            //subtitle: 'Example of subtitle',
                            slider: {
                                min: 0,
                                max: 1,
                                step: .02,
                                request: {
                                    type: "call_service",
                                    domain: "input_number",
                                    service: "set_value",
                                    field: "value"
                                }
                            }
                        }, {
                            position: [1, 1],
                            width: 1,
                            type: TYPES.MEDIA_PLAYER,
                            id: 'media_player.mp_master_bathroom',
                            //id: {: 0.2}, // replace it with real string id
                            state: false,
                            title: 'Master Bathroom',
                            subtitle: '@attributes.media_title',
                            bgSuffix: '@attributes.entity_picture',
                            //subtitle: 'Example of subtitle',
                            slider: {
                                min: 0,
                                max: 1,
                                step: .02,
                                request: {
                                    type: "call_service",
                                    domain: "input_number",
                                    service: "set_value",
                                    field: "value"
                                }
                            }
                        }, {
                            position: [1, 2],
                            width: 1,
                            type: TYPES.MEDIA_PLAYER,
                            id: 'media_player.mp_office',
                            //id: {: 0.2}, // replace it with real string id
                            state: false,
                            title: 'Office',
                            subtitle: '@attributes.media_title',
                            bgSuffix: '@attributes.entity_picture',
                            //subtitle: 'Example of subtitle',
                            slider: {
                                min: 0,
                                max: 1,
                                step: .02,
                                request: {
                                    type: "call_service",
                                    domain: "input_number",
                                    service: "set_value",
                                    field: "value"
                                }
                            }
                        }
                    ]
                }
            ]
        },
    ],
}
})();