export interface Dialog {
    name: string
    visible: boolean
    hostClick (): void
    divClick (): void
    willHide: boolean
}
