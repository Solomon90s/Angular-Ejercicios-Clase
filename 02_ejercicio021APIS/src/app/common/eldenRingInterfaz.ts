export interface ApiResultEldenRing {
  success: boolean
  count: number
  total: number
  data: EldenRing[]
}

export interface ApiResultOneEldenRing{
  data: EldenRing;
}

export interface EldenRing {
  id: string
  name: string
  image?: string
  region: string
  description: string
  location: string
  drops: string[]
  healthPoints: string
}
