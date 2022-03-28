const houses = [
    { "name": "Atreides", "planets": "Calladan" },
    { "name": "Corrino", "planets": ["Kaitan", "Salusa Secundus"] },
    { "name": "Harkonnen", "planets": ["Giedi Prime", "Arrakis"] }
]
interface House {
    name: string;
    plants: string | string[]
}

interface HouseWithID extends House {
    id: string;
}

function findHouses(houses: string): HouseWithID[];
function findHouses(houses: string, filter: (house: House) => boolean): HouseWithID[];
function findHouses(houses: House[]): HouseWithID[];
function findHouses(houses: House[], filter: (house: House) => boolean): HouseWithID[];
function findHouses(houses: unknown, filter?: (house: House) => boolean): HouseWithID[] {
    if (typeof houses === 'string') houses = JSON.parse(houses);

    let housesWithId: HouseWithID[] = (houses as House[]).map((updatedHouse) => ({
        id: Math.random().toString(36).substr(2, 9),
        ...updatedHouse,
    }));
    if (filter) housesWithId = housesWithId.filter(filter);

    return housesWithId;
}

console.log(
    findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides")
);

// console.log(findHouses(houses, ({ name }) => name === "Harkonnen"));