def on_gesture_shake():
    basic.clear_screen()
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

basic.show_string("HAZ UNA PREGUNTA")
basic.show_number(8)

def on_forever():
    pass
basic.forever(on_forever)
