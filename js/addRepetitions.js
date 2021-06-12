var topBar = `
<div class="topBar">
    <h1 class="topTitle">Nathan O'Connor</h1>
    <a href="../index.html"><button class="topButton" style="left: 14.5%;">Home</button></a>
    <a href="music.html"><button class="topButton" style="left: 35.875%;">Music</button></a>
    <a href="games.html"><button class="topButton" style="left: 57.25%;">Games</button></a>
    <a href="programming.html"><button class="topButton" style="left: 78.625%;">Programming</button></a>
</div>

<br><br>
`;

var indexTopBar = `
<div class="topBar">
    <h1 class="topTitle">Nathan O'Connor</h1>
    <a href="index.html"><button class="topButton" style="left: 14.5%;">Home</button></a>
    <a href="html/music.html"><button class="topButton" style="left: 35.875%;">Music</button></a>
    <a href="html/games.html"><button class="topButton" style="left: 57.25%;">Games</button></a>
    <a href="html/programming.html"><button class="topButton" style="left: 78.625%;">Programming</button></a>
</div>

<br><br>
`

var stylesheets = `
<link rel="stylesheet" href="../css/generic.css">
<link rel="stylesheet" href="../css/topBar.css">

<!-- Google Fonts -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins">
`

var indexStylesheets = `
<link rel="stylesheet" href="css/generic.css">
<link rel="stylesheet" href="css/topBar.css">

<!-- Google Fonts -->
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins">
`

function addRepetitions()
{
    try
    {
        var currentBody = document.getElementById("body").innerHTML;
        document.getElementById("body").innerHTML = topBar + currentBody;

        var currentHead = document.getElementById("head").innerHTML;
        document.getElementById("head").innerHTML = currentHead + stylesheets;
    }

    finally
    {
        var currentBody = document.getElementById("indexBody").innerHTML;
        document.getElementById("indexBody").innerHTML = indexTopBar + currentBody;

        var currentHead = document.getElementById("indexHead").innerHTML;
        document.getElementById("indexHead").innerHTML = currentHead + indexStylesheets;
    }
}

console.log("hello".substring(0, 2) + "hello".substring(3, 5));