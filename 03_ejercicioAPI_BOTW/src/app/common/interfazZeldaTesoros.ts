export interface ApiResultZeldaTesoros {
  data: Tesoros[]
}

export interface ApiOneTesoro {
  data: Tesoros;
}

export interface Tesoros {
  category: string
  common_locations: string[]
  description: string
  dlc: boolean
  drops: string[]
  id: number
  image: string
  name: string
}
