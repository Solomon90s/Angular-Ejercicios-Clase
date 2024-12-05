export interface ApiResultZeldaEquipamiento {
  data: Equipamiento[]
}

export interface ApiResultOneEquipamiento{
  data: Equipamiento;
}

export interface Equipamiento {
  category: string
  common_locations?: string[]
  description: string
  dlc: boolean
  id: number
  image: string
  name: string
  properties: Properties
}

export interface Properties {
  attack?: number
  defense?: number
}
