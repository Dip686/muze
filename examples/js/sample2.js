/* eslint-disable */
const env = muze();
const DataModel = muze.DataModel;

d3.json('../../data/cars.json', (data) => {
    let jsonData = data;
    const schema = [{
        name: 'Name',
        type: 'dimension'
    },
    {
        name: 'Maker',
        type: 'dimension'
    },
    {
        name: 'Miles_per_Gallon',
        type: 'measure'
    },

    {
        name: 'Displacement',
        type: 'measure'
    },
    {
        name: 'Horsepower',
        type: 'measure'
    },
    {
        name: 'Weight_in_lbs',
        type: 'measure'
    },
    {
        name: 'Acceleration',
        type: 'measure',
        // numberFormat: (val) => "$" + val 
    },
    {
        name: 'Origin',
        type: 'dimension'
    },
    {
        name: 'Cylinders',
        type: 'dimension'
    },
    {
        name: 'Year',
        type: 'dimension',
        subtype: 'temporal',
        format: '%Y-%m-%d'
    }
    ];

    // jsonData = [
    //     { Origin: "India", Year: "2018-02-22", Acceleration: 1000 },
    //     { Origin: "India", Year: "2018-03-12", Acceleration: 2000 },
    //     { Origin: "India", Year: "2018-04-01", Acceleration: 3000 },
    //     { Origin: "Japan", Year: "2018-02-22", Acceleration: 4000 },
    //     { Origin: "Japan", Year: "2018-03-12", Acceleration: 2000 },
    //     { Origin: "Japan", Year: "2018-04-01", Acceleration: 4000 },
    // ];

    let rootData = new DataModel(jsonData, schema);
    // rootData = rootData.groupBy(["Origin", "Year"], {
    //     Acceleration: "avg"
    // });

    canvas = env.canvas().data(rootData).rows(['Acceleration']).columns([['Year'], ['Year']]).data(rootData).height(400).width(400).color('Origin').config({
        legend: { position: 'bottom' }}).mount('#chart')
});

