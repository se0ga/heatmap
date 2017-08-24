ymaps.ready(['Heatmap']).then(function init() {

    var myMap = new ymaps.Map('map', {
        center: [55.733835, 37.588227],
        zoom: 11,
        controls: []
    });

    var data = [];
    for (var attr in obj) {
        if (obj[attr].coords && obj[attr].precision == 'exact') {
            data.push([obj[attr].coords[0], obj[attr].coords[1]]);
        }
    }
    myMap.geoObjects
        .add(new ymaps.Placemark([55.74681391473243, 37.60905924632876], {
            balloonContent: 'Центр массы тепловой карты'
        }, {
            preset: 'islands#icon',
            iconColor: '#0095b6'
        }));
    var heatmap = new ymaps.Heatmap(data, {
        // Радиус влияния.
        radius: 15,
        // Нужно ли уменьшать пиксельный размер точек при уменьшении зума. False - не нужно.
        dissipating: false,
        // Прозрачность тепловой карты.
        opacity: 0.8,
        // Прозрачность у медианной по весу точки.
        intensityOfMidpoint: 0.2,
        // JSON описание градиента.
        gradient: {
            0.1: 'rgba(128, 255, 0, 0.7)',
            0.2: 'rgba(255, 255, 0, 0.8)',
            0.7: 'rgba(234, 72, 58, 0.9)',
            1.0: 'rgba(162, 36, 25, 1)'
        }
    });
    heatmap.setMap(myMap);
});
