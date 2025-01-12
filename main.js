document.body.style.backgroundImage="url('health.jpg')";
function start_assessment(){
alert("Redirecting to the Health Assessment Quiz!");
document.style.textalign="center";
}
document.getElementsByTagName("h1")[0].style.color="Green";
document.getElementById("start-button").addEventListener("click",function()
{
    window.location.href="dashboard.html";
});