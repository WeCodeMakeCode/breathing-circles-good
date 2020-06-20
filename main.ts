namespace SpriteKind {
    export const circle = SpriteKind.create()
}
let myCircle: Circle = null
let circles: Sprite[] = []
let Index3 = 0
function expand (color: number) {
    for (let Index2 = 0; Index2 <= 80; Index2++) {
        myCircle = circle.createCircleSprite(1 + Index2, color, false)
        myCircle.circle.setKind(SpriteKind.circle)
        pause(20)
    }
    circles = sprites.allOfKind(SpriteKind.circle)
    for (let value of circles) {
        value.destroy()
    }
}
function shrink (color: number) {
    for (let Index2 = 0; Index2 <= 80; Index2++) {
        Index3 = 80 - Index2
        myCircle = circle.createCircleSprite(1 + Index3, color, false)
        myCircle.circle.setKind(SpriteKind.circle)
        pause(20)
    }
    circles = sprites.allOfKind(SpriteKind.circle)
    for (let value of circles) {
        value.destroy()
    }
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let index = 0; index <= 14; index++) {
        expand(index + 1)
        shrink(index + 1)
    }
})
