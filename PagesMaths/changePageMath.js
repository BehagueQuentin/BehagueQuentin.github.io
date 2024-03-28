function afficher_texte(id){
    var span = document.getElementById(id);
    if(span.style.display == "none") {
    span.style.display = "inline";
    } else {
    span.style.display = "none";
    }
}
var currentExerciseIndex = 0;
    var isAnimating = false;
    function showExercise(index) {
    var exercises = document.querySelectorAll('.exercise');
    exercises.forEach(function(exercise) {
        exercise.classList.add('hidden');
    });
    exercises[index].classList.remove('hidden');
}
function prevExercise(taille) {
    showExercise((currentExerciseIndex - 1 + taille) % taille);
    currentExerciseIndex = (currentExerciseIndex - 1 + taille) % taille;
}
function nextExercise(taille) {
    showExercise((currentExerciseIndex + 1) % taille);
    currentExerciseIndex = (currentExerciseIndex + 1) % taille;
}
showExercise(currentExerciseIndex);