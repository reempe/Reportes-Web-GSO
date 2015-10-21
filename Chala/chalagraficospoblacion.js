$(function () {

    // Grafico Numero 1

    $('#graficoNumero1').highcharts({
        chart: {
            type: 'column'
        },

        exporting: {
            enabled: false
        },

        title: {
            text: 'Población proyectada y tasa de crecimiento 2000-2014'
        },
        subtitle: {
            text: 'Con base en el año 2000'
        },
        xAxis: {
            categories: ['2000', '2005', '2010', '2014'],
            crosshair: true
        },
        yAxis: {
            min: 90,
            max: 130,
            title: {
                text: 'Índice en el año 2000 = 100'
            }
        },
        tooltip: {
            
            headerFormat: '<span><b>{point.key}</b></span><br>',
            pointFormat: '<span>{series.name}<br>' +
                         '<b>{point.poblacion:,.0f} habitantes</b><br>' +
                         'Crec. 2000-14: <b>{point.crecimiento}</b></span>',
            
            shared: false,
            useHTML: true
        },
        plotOptions: {
            column: {
                dataLabels: {
                    enabled: true
                },
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Provincia de Caravelí',
            data: [{y: 100.0, poblacion: 33241, crecimiento:'1.40%'},
                   {y: 107.9, poblacion: 35875, crecimiento:'1.40%'},
                   {y: 115.2, poblacion: 38288, crecimiento:'1.40%'},
                   {y: 121.5, poblacion: 40373, crecimiento:'1.40%'}]

        }, {
            name: 'Región Arequipa',
            data: [{y: 100.0, poblacion: 1084725, crecimiento:'1.15%'},
                   {y: 106.5, poblacion: 1155267, crecimiento:'1.15%'},
                   {y: 112.3, poblacion: 1218268, crecimiento:'1.15%'},
                   {y: 117.4, poblacion: 1273180, crecimiento:'1.15%'}]

        }, {
            name: 'Perú',
            data: [{y: 100.0, poblacion: 25983588, crecimiento:'1.23%'},
                   {y: 107.0, poblacion: 27810540, crecimiento:'1.23%'},
                   {y: 113.4, poblacion: 29461933, crecimiento:'1.23%'},
                   {y: 118.6, poblacion: 30817696, crecimiento:'1.23%'}]

        }]
    });
    

    // Mapa Numero 1

    var dataMapaPoblacion1 = [{ "code": "040301", "nombre": "CARAVELI"     , "value": -0.22 , "nombre2": "Caravelí"     , "poblacion2000": 3864  , "poblacion2014": 3749  , "area": 727.68   , "densidad": 5.2  , "crec2000_2014": -0.22 },
                            { "code": "040302", "nombre": "ACARI"        , "value": -2.83 , "nombre2": "Acarí"        , "poblacion2000": 4956  , "poblacion2014": 3318  , "area": 799.21   , "densidad": 4.2  , "crec2000_2014": -2.83 },
                            { "code": "040303", "nombre": "ATICO"        , "value": -0.04 , "nombre2": "Atico"        , "poblacion2000": 4197  , "poblacion2014": 4173  , "area": 3146.24  , "densidad": 1.3  , "crec2000_2014": -0.04 },
                            { "code": "040304", "nombre": "ATIQUIPA"     , "value":  1.76 , "nombre2": "Atiquipa"     , "poblacion2000": 705   , "poblacion2014": 900   , "area": 423.55   , "densidad": 2.1  , "crec2000_2014":  1.76 },
                            { "code": "040305", "nombre": "BELLA UNION"  , "value":  5.85 , "nombre2": "Bella Unión"  , "poblacion2000": 2833  , "poblacion2014": 6279  , "area": 1588.39  , "densidad": 4.0  , "crec2000_2014":  5.85 },
                            { "code": "040306", "nombre": "CAHUACHO"     , "value": -0.11 , "nombre2": "Cahuacho"     , "poblacion2000": 922   , "poblacion2014": 908   , "area": 1412.10  , "densidad": 0.6  , "crec2000_2014": -0.11 },
                            { "code": "040307", "nombre": "CHALA"        , "value":  3.69 , "nombre2": "Chala"        , "poblacion2000": 3959  , "poblacion2014": 6575  , "area": 378.38   , "densidad": 17.4 , "crec2000_2014":  3.69 },
                            { "code": "040308", "nombre": "CHAPARRA"     , "value":  4.52 , "nombre2": "Chaparra"     , "poblacion2000": 2787  , "poblacion2014": 5176  , "area": 1473.19  , "densidad": 3.5  , "crec2000_2014":  4.52 },
                            { "code": "040309", "nombre": "HUANUHUANU"   , "value":  3.47 , "nombre2": "Huanuhuanu"   , "poblacion2000": 1966  , "poblacion2014": 3169  , "area": 708.52   , "densidad": 4.5  , "crec2000_2014":  3.47 },
                            { "code": "040310", "nombre": "JAQUI"        , "value": -3.74 , "nombre2": "Jaqui"        , "poblacion2000": 2238  , "poblacion2014": 1313  , "area": 424.73   , "densidad": 3.1  , "crec2000_2014": -3.74 },
                            { "code": "040311", "nombre": "LOMAS"        , "value":  1.54 , "nombre2": "Lomas"        , "poblacion2000": 1063  , "poblacion2014": 1316  , "area": 452.70   , "densidad": 2.9  , "crec2000_2014":  1.54 },
                            { "code": "040312", "nombre": "QUICACHA"     , "value": -0.08 , "nombre2": "Quicacha"     , "poblacion2000": 1911  , "poblacion2014": 1890  , "area": 1048.42  , "densidad": 1.8  , "crec2000_2014": -0.08 },
                            { "code": "040313", "nombre": "YAUCA"        , "value": -0.96 , "nombre2": "Yauca"        , "poblacion2000": 1840  , "poblacion2014": 1607  , "area": 556.30   , "densidad": 2.9  , "crec2000_2014": -0.96 }];

    
    $('#mapaNumero1').highcharts('Map', {

        chart : {
            borderWidth : 1,
            spacing: [30, 30, 30, 30]
        },

        title : {
            text : 'Crecimiento poblacional promedio en Caravelí'
        },

        subtitle: {
            text: 'Periodo comprendido entre los años 2000 y 2014'
        },

        legend: {
            layout: 'horizontal',
            borderWidth: 0,
            backgroundColor: 'rgba(255,255,255,0.85)',
            floating: true,
            verticalAlign: 'bottom',
            y: 25
        },

        mapNavigation: {
            enabled: false
        },

        colorAxis: {
            min: -10,
            max: 10,
            type: 'linear',
            minColor: '#FF6666',
            maxColor: '#3399FF',
            stops: [
                [0, '#FF6666'],
                [0.5, '#FFFFFF'],
                [1, '#3399FF']
            ]
        },

        tooltip: {
            useHTML: true,
            positioner: function () {
                return { x: 80, y: 400 };
            }
        },

        series: [{
            animation: {
                duration: 100
            },
            data : dataMapaPoblacion1,
            mapData: Highcharts.maps['peru/arequipa/caraveli'],
            joinBy: ['IDDIST', 'code'],
            dataLabels: {
                enabled: true,
                color: 'black',
                format: '{point.nombre2}'
            },
            name: 'Crec. Anual Prom. 2000-2014',
            tooltip: {
                pointFormat: '<span><b>{point.nombre2}:</b> {point.crec2000_2014}%<br>' +
                             '<small>Población 2000: {point.poblacion2000} hab.</small><br>' +
                             '<small>Población 2014: {point.poblacion2014} hab.</small></span>'
            }
        }]
    });

    
    //Mapa Numero 2

    var dataMapaPoblacion2 = [{ "code": "040301", "nombre": "CARAVELI"     , "value": 5.2  , "nombre2": "Caravelí"     , "poblacion2000": 3864  , "poblacion2014": 3749  , "area": 727.68   , "densidad": 5.2  , "crec2000_2014": -0.22 },
                        { "code": "040302", "nombre": "ACARI"        , "value": 4.2  , "nombre2": "Acarí"        , "poblacion2000": 4956  , "poblacion2014": 3318  , "area": 799.21   , "densidad": 4.2  , "crec2000_2014": -2.83 },
                        { "code": "040303", "nombre": "ATICO"        , "value": 1.3  , "nombre2": "Atico"        , "poblacion2000": 4197  , "poblacion2014": 4173  , "area": 3146.24  , "densidad": 1.3  , "crec2000_2014": -0.04 },
                        { "code": "040304", "nombre": "ATIQUIPA"     , "value": 2.1  , "nombre2": "Atiquipa"     , "poblacion2000": 705   , "poblacion2014": 900   , "area": 423.55   , "densidad": 2.1  , "crec2000_2014":  1.76 },
                        { "code": "040305", "nombre": "BELLA UNION"  , "value": 4.0  , "nombre2": "Bella Unión"  , "poblacion2000": 2833  , "poblacion2014": 6279  , "area": 1588.39  , "densidad": 4.0  , "crec2000_2014":  5.85 },
                        { "code": "040306", "nombre": "CAHUACHO"     , "value": 0.6  , "nombre2": "Cahuacho"     , "poblacion2000": 922   , "poblacion2014": 908   , "area": 1412.10  , "densidad": 0.6  , "crec2000_2014": -0.11 },
                        { "code": "040307", "nombre": "CHALA"        , "value": 17.4 , "nombre2": "Chala"        , "poblacion2000": 3959  , "poblacion2014": 6575  , "area": 378.38   , "densidad": 17.4 , "crec2000_2014":  3.69 },
                        { "code": "040308", "nombre": "CHAPARRA"     , "value": 3.5  , "nombre2": "Chaparra"     , "poblacion2000": 2787  , "poblacion2014": 5176  , "area": 1473.19  , "densidad": 3.5  , "crec2000_2014":  4.52 },
                        { "code": "040309", "nombre": "HUANUHUANU"   , "value": 4.5  , "nombre2": "Huanuhuanu"   , "poblacion2000": 1966  , "poblacion2014": 3169  , "area": 708.52   , "densidad": 4.5  , "crec2000_2014":  3.47 },
                        { "code": "040310", "nombre": "JAQUI"        , "value": 3.1  , "nombre2": "Jaqui"        , "poblacion2000": 2238  , "poblacion2014": 1313  , "area": 424.73   , "densidad": 3.1  , "crec2000_2014": -3.74 },
                        { "code": "040311", "nombre": "LOMAS"        , "value": 2.9  , "nombre2": "Lomas"        , "poblacion2000": 1063  , "poblacion2014": 1316  , "area": 452.70   , "densidad": 2.9  , "crec2000_2014":  1.54 },
                        { "code": "040312", "nombre": "QUICACHA"     , "value": 1.8  , "nombre2": "Quicacha"     , "poblacion2000": 1911  , "poblacion2014": 1890  , "area": 1048.42  , "densidad": 1.8  , "crec2000_2014": -0.08 },
                        { "code": "040313", "nombre": "YAUCA"        , "value": 2.9  , "nombre2": "Yauca"        , "poblacion2000": 1840  , "poblacion2014": 1607  , "area": 556.30   , "densidad": 2.9  , "crec2000_2014": -0.96 }];


    // Instanciate the map
    $('#mapaNumero2').highcharts('Map', {

        chart : {
            borderWidth : 1,
            spacing: [30, 30, 30, 30]
        },

        title : {
            text : 'Densidad poblacional en los distritos de Caravelí'
        },

        subtitle: {
            text: 'Calculada para el año 2014'
        },

        legend: {
            layout: 'horizontal',
            borderWidth: 0,
            backgroundColor: 'rgba(255,255,255,0.85)',
            floating: true,
            verticalAlign: 'bottom',
            y: 25
        },

        mapNavigation: {
            enabled: false
        },

        colorAxis: {
            min: 0,
            max: 20,
            type: 'linear',
            minColor: '#FFFFFF',
            maxColor: '#3399FF'
        },

        tooltip: {
            useHTML: true,
            positioner: function () {
                return { x: 80, y: 400 };
            }
        },

        series: [{
            animation: {
                duration: 100
            },
            data : dataMapaPoblacion2,
            mapData: Highcharts.maps['peru/arequipa/caraveli'],
            joinBy: ['IDDIST', 'code'],
            dataLabels: {
                enabled: true,
                color: 'black',
                format: '{point.nombre2}'
            },
            name: 'Densidad poblacional',
            tooltip: {
                pointFormat: '<span><b>{point.nombre2}:</b> {point.densidad} hab./km²<br>' +
                             '<small>Area: {point.area} km²</small><br>' +
                             '<small>Población 2014: {point.poblacion2014} hab.</small></span>'
            }
        }]
    });
                

    
    //Grafico Numero 2


    $('#graficoNumero2').highcharts({
        chart: {
            type: 'column'
        },

        exporting: {
            enabled: false
        },

        title: {
            text: 'Población por grupos de edad para los años 1993 y 2007'
        },

        subtitle: {
            text: 'En porcentajes'
        },

        xAxis: {
            categories: ['Caravelí 1993', 'Caravelí 2007', '', 'Perú 1993', 'Perú 2007']
        },
        yAxis: {
            ceiling: 100,
            title: {
                text: 'Porcentaje'
            }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },

        series: [{
            name: 'De 0 a 14 años',
            data: [35.6, 27.8, null, 37.0, 30.5]
        }, {
            name: 'De 15 a 29 años',
            data: [28.9, 28.9, null, 28.6, 27.6]
        }, {
            name: 'De 30 a 64 años',
            data: [30.6, 37.3, null, 29.8, 35.5]
        }, {
            name: '65 a más años',
            data: [4.9,   6.0, null,  4.6,  6.4]
        }]

    });
    


});