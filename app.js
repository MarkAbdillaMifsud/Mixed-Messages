let names = ["Godrick the Grafted", "Rennala, Queen of Caria", "Starscourge Radhan", "Praetor Rykard, Lord of Blasphemy", "Morgott, Omen King", "Malekith, the Black Blade", "Radagon of the Golden Order", "Malenia, Blade of Miquella", "Mohg, Lord of Blood"];
let afflictions = ["bleed", "poison", "scarlet rot", "magic spam", "join the family", "fall to Destined Death", "get crushed by a meteorite", "burnt to a crisp"];
let weapons = ["Great Axe", "Carian Staff", "Starscourge Sword", "Big Snake Sword", "Cool Omen Blade", "Badass Death Sword", "Hammer that broke Elden Ring", "Unfair Appendage of Rot", "Nihil Blood"];
let weaponActions = ["crush mightily", "spews magic", "create gravitational blast", "stab you into explosion", "slash into ghost hammer", "just kill you", "smash you to bits", "murder you while healing them", "remove all your blood"];
let phrases = ["Lowly Tarnished. Thou are unfit even to graft.", "Come my sweetlings. Time to be reborn anew.", "*howls at sky incoherently*", "TOGETHA WE WILL DEVOUA THA VERY GODS", "Thy part in this shall not be forgiven.", "I will not have it stolen from me again.", "*stares at you in silence*", "I am Malenia. Blade of Miquella.", "Miquella is mine and mine alone."];

const getName = () => {
    let randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
}

const getAffliction = () => {
    let randomIndex = Math.floor(Math.random() * afflictions.length);
    return afflictions[randomIndex];
}

const getWeapon = () => {
    let randomIndex = Math.floor(Math.random() * weapons.length);
    return weapons[randomIndex];
}

const getWeaponAction = () => {
    let randomIndex = Math.floor(Math.random() * weaponActions.length);
    return weaponActions[randomIndex];
}

const getPhrase = () => {
    let randomIndex = Math.floor(Math.random() * phrases.length);
    return phrases[randomIndex];
}

console.log(`${getName()} fell upon you and used his ${getWeapon()} to ${getWeaponAction()}! As you fell to the ${getAffliction()}, ${getName()} said ${getPhrase()}`);