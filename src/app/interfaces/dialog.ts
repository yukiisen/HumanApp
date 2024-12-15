import { OnDestroy } from "@angular/core"

export interface Dialog extends OnDestroy {
    name: string
    visible: boolean
    hostClick (): void
    divClick (): void
    willHide: boolean
}
