function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

colorPallets = [
    {"leftBG":"#4ecdc4",   "leftTxt":"#1a535c",   "rightBG":"#ff6b6b",   "rightTxt":"#ffe66d",   "btnBack":"#f7fff7"},
    {"leftBG":"#ffbf69",   "leftTxt":"#2ec4b6",   "rightBG":"#cbf3f0",   "rightTxt":"#ff9f1c",   "btnBack":"#ffffff"},
    {"leftBG":"#f2cc8f",   "leftTxt":"#e07a5f",   "rightBG":"#81b29a",   "rightTxt":"#3d405b",   "btnBack":"#f4f1de"},
    {"leftBG":"#f86624",   "leftTxt":"#f9c80e",   "rightBG":"#662e9b",   "rightTxt":"#43bccd",   "btnBack":"#ea3546"},
    {"leftBG":"#333533",   "leftTxt":"#f5cb5c",   "rightBG":"#cfcfcf",   "rightTxt":"#333533",   "btnBack":"#e8eddf"},
]

$("#txtRight").html(choose(list))
$("#txtLeft").html(choose(list))

palletNum = Math.floor(Math.random()*colorPallets.length)
console.log(palletNum)
pallet = colorPallets[palletNum]
$(".left").css("background-color",pallet["leftBG"])
$(".right").css("background-color",pallet["rightBG"])
$("#txtLeft").css("color",pallet["leftTxt"])
$('#txtRight').css("color",pallet["rightTxt"])
$("refreshButton").css("background-color",pallet["btnBack"])

function refresh() {
    $("#txtRight").html(choose(list))
    $("#txtLeft").html(choose(list))
}