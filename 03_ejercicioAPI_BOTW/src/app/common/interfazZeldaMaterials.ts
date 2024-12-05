export interface ApiResultMaterialsZelda {
  data: Materials[]
}

export interface ApiOneMaterial {
  data: Materials;
}

export interface Materials {
  category: string
  common_locations: string[]
  cooking_effect: string
  description: string
  dlc: boolean
  hearts_recovered: number
  id: number
  image: string
  name: string
}
