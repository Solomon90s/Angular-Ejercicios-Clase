export interface ApiResultPokemon {
    data:       Pokemon[];
    page:       number;
    pageSize:   number;
    count:      number;
    totalCount: number;
}
export interface ApiResultOnePokemon{
  data: Pokemon;
}

export interface Pokemon {
    id:                     string;
    name:                   string;
    supertype:              Supertype;
    subtypes:               string[];
    hp:                     string;
    types:                  RetreatCost[];
    evolvesFrom?:           string;
    attacks:                Attack[];
    weaknesses?:            Resistance[];
    resistances?:           Resistance[];
    retreatCost?:           RetreatCost[];
    convertedRetreatCost?:  number;
    set:                    Set;
    number:                 string;
    artist:                 string;
    rarity?:                Rarity;
    flavorText?:            string;
    nationalPokedexNumbers: number[];
    legalities:             Legalities;
    images:                 DatumImages;
    tcgplayer?:             Tcgplayer;
    cardmarket:             Cardmarket;
    evolvesTo?:             string[];
    level?:                 string;
    abilities?:             Ability[];
    rules?:                 string[];
}

export interface Ability {
    name: string;
    text: string;
    type: string;
}

export interface Attack {
    name:                string;
    cost:                RetreatCost[];
    convertedEnergyCost: number;
    damage:              string;
    text:                string;
}

export enum RetreatCost {
    Colorless = "Colorless",
    Darkness = "Darkness",
    Dragon = "Dragon",
    Fighting = "Fighting",
    Fire = "Fire",
    Grass = "Grass",
    Lightning = "Lightning",
    Metal = "Metal",
    Psychic = "Psychic",
    Water = "Water",
}

export interface Cardmarket {
    url:       string;
    updatedAt: UpdatedAt;
    prices:    { [key: string]: number };
}

export enum UpdatedAt {
    The20231218 = "2023/12/18",
}

export interface DatumImages {
    small: string;
    large: string;
}

export interface Legalities {
    unlimited: Expanded;
    expanded?: Expanded;
}

export enum Expanded {
    Legal = "Legal",
}

export enum Rarity {
    Common = "Common",
    RareHolo = "Rare Holo",
    RareHoloGX = "Rare Holo GX",
}

export interface Resistance {
    type:  RetreatCost;
    value: string;
}

export interface Set {
    id:           string;
    name:         string;
    series:       string;
    printedTotal: number;
    total:        number;
    legalities:   Legalities;
    ptcgoCode?:   string;
    releaseDate:  string;
    updatedAt:    string;
    images:       SetImages;
}

export interface SetImages {
    symbol: string;
    logo:   string;
}

export enum Supertype {
    Pokémon = "Pokémon",
}

export interface Tcgplayer {
    url:       string;
    updatedAt: UpdatedAt;
    prices:    Prices;
}

export interface Prices {
    holofoil?:             The1_StEditionHolofoil;
    reverseHolofoil?:      The1_StEditionHolofoil;
    normal?:               The1_StEditionHolofoil;
    "1stEditionHolofoil"?: The1_StEditionHolofoil;
    unlimitedHolofoil?:    The1_StEditionHolofoil;
}
export interface Holofoil {
  low: number
  mid: number
  high: number
  market: number
  directLow?: number
}

export interface The1_StEditionHolofoil {
    low:       number;
    mid:       number;
    high:      number;
    market:    number;
    directLow: number | null;
}
