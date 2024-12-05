export interface ApiResultZelda {
  data: Monstruos[]
}

export interface ApiResultOneMonster{
  data: Monstruos;
}

export interface Monstruos {
  category: string
  common_locations?: string[]
  description: string
  dlc: boolean
  drops?: string[]
  id: number
  image: string
  name: string
  cooking_effect?: string
  hearts_recovered?: number
  properties?: Properties
  edible?: boolean
}

export interface Properties {
  attack?: number
  defense?: number
}


