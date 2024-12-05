export interface InfoApiSouthPark {
  data: SouthPark[]
  links: Links
  meta: Meta
}

export interface SouthPark {
  id: number
  name: string
  age?: number
  sex: string
  hair_color?: string
  occupation?: string
  grade?: string
  religion?: string
  voiced_by: any
  created_at: string
  updated_at: string
  url: string
  family: string
  relatives: Rela[]
  episodes: string[]
}

export interface Rela {
  url: string
  relation: string
}

export interface Links {
  first: string
  last: string
  prev: any
  next: string
}

export interface Meta {
  current_page: number
  from: number
  last_page: number
  links: Link[]
  path: string
  per_page: number
  to: number
  total: number
}

export interface Link {
  url?: string
  label: string
  active: boolean
}
