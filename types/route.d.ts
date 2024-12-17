export interface Route {
  label: string
  path?: string
  icon: string
  roles: string[]
  submenus?: ChildRoute[]
}

export interface ChildRoute {
  label: string
  path?: string
  icon: string
  roles: string[]
}
