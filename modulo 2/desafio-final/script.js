url = "https://private-3923c4-santandercoders809.apiary-mock.com/stations";

// function fecthJson(url) {
//     return fetch(url).then( (r) => {
//         if (r.ok) {
//             return r.json();
//         } else {
//             throw new Error('Erro ao carregar os dados' + r.statusText);
//         }
//     });
// }

async function fecthJson() {
    try {
        const response = await fetch(url);
        return await response.json();
    } catch {
        throw new Error('Erro ao carregar os dados');
    }
}

async function init1() {
    console.log("Desafio Final Módulo 2!");
    try {
    const stationAllObj = await fecthJson(url);
    const stationAllArray = stationAllObj["estacoes"]["estacao"]
    const stations = stationAllArray.reduce( (acc, value) => {
        let nameStation = value["_linha"]
        //nameStation = nameStation.split("-").length > 1 ? nameStation.split("-")[1].split(" ")[0] : nameStation.split("-")[0]
        nameStation = nameStation.split("-").length > 1 ? nameStation.split("-")[0] + "-" + nameStation.split("-")[1].split(" ")[0] : nameStation.split("-")[0]
        console.log(nameStation) 
        console.log(nameStation) 
        if (Object.keys(acc).indexOf(nameStation) === -1) {
            acc = {...acc, [nameStation]: []}
        }    
        return {...acc, [nameStation]: acc[nameStation].concat(value)}
    }, {})
    console.log(stations)
    } catch {
        throw new Error("Erro ao carregar os dados");
    }
}

init1();

async function init2() {
    console.log("Desafio Final Módulo 2!")

    const stationAllObj = await fecthJson(url)
    const stationAllArray = stationAllObj["estacoes"]["estacao"]
    const stationNameArray = filterUniqueStation(stationAllArray);
    console.log(stationNameArray)
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