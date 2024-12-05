export interface ApiResultZelda {
  data: DataCategory[]
}

export interface ApiResultZeldaEntry {
  data: DataCategory
}

export interface DataCategory {
  category: string
  common_locations?: string[]
  description: string
  dlc: boolean
  drops?: string[]
  edible: boolean
  hearts_recovered?:number
  id: number
  image: string
  name: string

  properties?: Properties
}

export interface Properties {
  attack?: number
  defense?: number

}
