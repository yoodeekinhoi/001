Mbit_IR.onPressEvent(RemoteButton.Up, function () {
    Tinybit.CarCtrl(Tinybit.CarState.Car_Run)
})
Mbit_IR.init(Pins.P0)
