/* Exercises */
// function runFiveMiles() {
//     console.log("Go for a five mile run")
// }
// function liftWeights() {
//     console.log("Pump iron")
// }
// function swimFortyLaps() {
//     console.log("Swim 40 laps")
// }

// function exerciseRoutine(postRunActivity) {
//     runFiveMiles()
//     postRunActivity()
// }

// exerciseRoutine(swimFortyLaps)

// exerciseRoutine(function() {
//     console.log("Stretch! Work that core!")
// })

// exerciseRoutine(() => console.log("sssStretch! Work that core!"))

// function morningRoutine(exercise){
//     return function() {
//         console.log(`Nom nom nom, this breakfast is delicious!`)
//     }
// }

// const afterExercise = morningRoutine()
// afterExercise

/* Labs */
/*  1) index
       receivesAFunction(callback)
         receives a function and calls it: */
function receivesAFunction(callback) {
    callback()
}
/*   2) index
       returnsANamedFunction()
         "before all" hook for "returns a function": */
function returnThisFunction() {

}
function returnsANamedFunction() {
    return function someName() {}
}
/*   3) index
       returnsAnAnonymousFunction()
         "before all" hook fbr "returns a function": */
function returnsAnAnonymousFunction() {
    return function() {}
}