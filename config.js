var config = {
    // style: 'mapbox://styles/mapbox/streets-v12',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoibGFrZXN0cmVldGNvdW5jaWwiLCJhIjoiY21oM3NxeXFpMW5uYzJrcHJzdzZ3cThyOCJ9.dAxAHkuTSQ15Om48GQIyaA',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'The Street of 10,000 Stories',
    subtitle: 'History is important',
    byline: `Lake Street's evolution over time.`,
    footer: 'Copyright Lake Street Council <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'one',
            alignment: 'left',
            hidden: false,
            title: 'Coliseum Building',
            image: './images/photo1.jpg',
            description: 'A Native of Lake City, Minnesota, Elmer E.B. Freeman opened a small haberdashery shop near East 25th Street and 26th Avenue around 1914.',
            location: {
                center: [-93.23238, 44.94868],
                zoom: 16.64,
                pitch: 63,
                bearing: -35
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'two',
            alignment: 'right',
            hidden: false,
            title: 'Midtown Global Market',
            image: 'https://images.squarespace-cdn.com/content/v1/5e669116eea473063ca33484/1657915819906-KO3AMOTQDSPBFHLRYH1W/070822lsc102.jpg',
            description: 'A Native of Lake City, Minnesota, Elmer E.B. Freeman opened a small haberdashery shop near East 25th Street and 26th Avenue around 1914.',
            location: {
                center: [-93.26085, 44.94879],
                zoom: 17,
                pitch: 63,
                bearing: -35,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'three',
            alignment: 'left',
            hidden: false,
            title: 'Uptown Theater',
            image: 'https://images.squarespace-cdn.com/content/v1/5e669116eea473063ca33484/1657915819906-KO3AMOTQDSPBFHLRYH1W/070822lsc102.jpg',
            description: 'A Native of Lake City, Minnesota, Elmer E.B. Freeman opened a small haberdashery shop near East 25th Street and 26th Avenue around 1914.',
            location: {
                center: [-93.29867, 44.94907],
                zoom: 17,
                pitch: 63,
                bearing: -35
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'four',
            alignment: 'right',
            hidden: false,
            title: 'Lake Calhoun',
            image: 'https://images.squarespace-cdn.com/content/v1/5e669116eea473063ca33484/1657915819906-KO3AMOTQDSPBFHLRYH1W/070822lsc102.jpg',
            description: 'A Native of Lake City, Minnesota, Elmer E.B. Freeman opened a small haberdashery shop near East 25th Street and 26th Avenue around 1914.',
            location: {
                center: [-93.30778, 44.94698],
                zoom: 17,
                pitch: 63,
                bearing: -35
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
