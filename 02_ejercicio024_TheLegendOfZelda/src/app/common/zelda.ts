export interface InfoApiZelda {
  success: boolean
  count: number
  data: Zelda[]
}

export interface Zelda {
  name: string
  description: string
  developer: string
  publisher: string
  released_date: string
  id: string
}
