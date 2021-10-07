url = "https://private-3923c4-santandercoders809.apiary-mock.com/stations";

function fecthJson(url) {
    return fetch(url).then( (r) => {
        if (r.ok) {
            return r.json();
        } else {
            throw new Error('Erro ao carregar os dados' + r.statusText);
        }
    });
}

async function init1() {
    console.log("Desafio Final Módulo 2!");

    const stationAllObj = await fecthJson(url);
    const stationAllArray = stationAllObj["estacoes"]["estacao"]
    const stations = stationAllArray.reduce( (acc, value) => {
        let nameStation = value["_linha"];
        if (Object.keys(acc).indexOf(nameStation) === -1) {
            acc = {...acc, [nameStation]: []}
        }    
        return {...acc, [nameStation]: acc[nameStation].concat(value)}
    }, {})
    console.log(stations)
}

init1();

async function init2() {
    console.log("Desafio Final Módulo 2!")

    const stationAllObj = await fecthJson(url)
    const stationAllArray = stationAllObj["estacoes"]["estacao"]
    const stationNameArray = filterUniqueStation(stationAllArray);
    const stationNameObj = organazeStationNameObj(stationNameArray);
    const stations = organizeStationInfo(stationAllArray, stationNameObj);
    console.log(stations)
}

function filterUniqueStation(arrayStation) {
    const filteredStation = arrayStation.filter( ({_linha}) => _linha)
    const onlyStation = filteredStation.map( ({_linha}) => _linha)
    return [... new Set(onlyStation)]
}

function organazeStationNameObj(stationName) {
    const stationNameObj = stationName.reduce( (acc, value) => {
        return {...acc, [value]: []}
    }, {})
    return stationNameObj
}

function organizeStationInfo(arr, obj) {
    return arr.reduce( (acc, value) => {
        let nameStation = value["_linha"];
        return {...acc, [nameStation]: acc[nameStation].concat(value)}
    }, obj)
}


init2();