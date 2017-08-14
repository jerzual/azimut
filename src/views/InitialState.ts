export function createInitialState() {
    return {
        // router details
        navigation: {
            url: '/',
            route: {
                name: 'menu',
                options: {
                    page: 0,
                    sort: ''
                }
            }
        },
        message: {},
        // menu / activated ui buttons
        actions: {

        },
        // default options
        options: {
            theme: 'dark',
            show3D: true,
            render: {
                wireframes: true,
                shaders: true    
            },
            keyBindings: {
                top: '',
                right: '',
                bottom: '',
                left: ''
            }
        },
        // content is the details generic view
        content: {
            panelShown: false,
            data: []
        },
        // world objects 
        city: {
            levels: [
                {
                    name: 'ground',
                    tiles: [[]]
                }
            ]
        },
        party: {
            members: {
                A: {

                },
                B: {

                },
                C: {

                },
                D: {

                },
            }
        },
        // hero is the selected party member, has camera focus.
        hero: {
            stats: {

            },
            //available actions
            actions: {

            }
        },
        // scene details, THREE.js 3D info extracted from city data
        scene: {
            details: {
                cityUUID: '',
                levelUUID: '',
                offset: {
                    x: 12,
                    y: 12
                }
            },
            camera: {

            },
            objects: [{}],
            actors: [],
            tiles: [
                [{ id: 0 }, { id: 1 }, { id: 3 }],
                [{ id: 4 }, { id: 5 }, { id: 6 }],
                [{ id: 7 }, { id: 8 }, { id: 9 }]
            ]
        }
    };
};

const InitialState = createInitialState();

export default InitialState;