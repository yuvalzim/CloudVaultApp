import type { FC } from "react"

export interface Route {
    path: string,
    Component: FC
    children: Route[]
}