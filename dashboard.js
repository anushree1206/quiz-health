document.body.style.backgroundImage="url('girl.jpg')";
document.body.style.backgroundSize = "cover";
function proceedToQuiz(){
    const age = document.getElementById("age").value;
    if(age<2 || isNaN(age))
    {
       alert("please enter a valid age");
       return;
    }
    localStorage.setItem("userage",age);
    window.location.href='quiz.html';
}