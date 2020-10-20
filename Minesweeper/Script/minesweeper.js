isCtrl = 0
mode = 0
mines = new Array();
clear = new Array();
mineh = new Array();
mineq = new Array();
ql = 0;
qx = new Array();
qy = new Array();
revealedcells = 0;
placedmines = 0;
width = 0;
height = 0;
ms = 0;

document.onkeyup = function(e) {
    if (e.which == 17)
        isCtrl = 0;
}
document.onkeydown = function(e) {
    if (e.which == 17)
        isCtrl = 1;
}
function update() {
    if (document.choosemode.mode[0].checked == true && mode == 1) {
        document.getElementById("settings").innerHTML = "<select id='input_d'><option value='0'>Noob (10x10 Grid with 10/100 Mines)</option><option value='1'>Easy (12x12 Grid with 20/144 Mines)</option><option value='2' selected='true'>Medium (14x14 Grid with 30/196 Mines)</option><option value='3'>Hard (16x16 Grid with 45/256 Mines)</option><option value='4'>Veteran (18x18 Grid with 75/324 Mines)</option><option value='5'>Impossible (20x20 Grid with 100/400 Mines)</option></select><br/><button style='margin:8px 0px' onClick='generate_dif()'>Generate new</button>"
        mode = 0
    }
    if (document.choosemode.mode[1].checked == true && mode == 0) {
        document.getElementById("settings").innerHTML = "<div id='settings_custom'>Width: <input id='input_w' type='text' onkeypress='return onlyNumbers();' style='width:50px; background-color:#1a1a1a; border:#5a5a5a;' value='20'> &nbsp; &nbsp;Height: <input id='input_h' type='text' onkeypress='return onlyNumbers();' style='width:50px; background-color:#1a1a1a; border:#5a5a5a;' value='20'> &nbsp; &nbsp;Mines: <input id='input_m' type='text' onkeypress='return onlyNumbers();' style='width:50px; background-color:#1a1a1a; border:#5a5a5a;' value='30'><br/><button style='margin:8px 0px' onClick='generate(document.getElementById(" + '"input_w"' + ").value,document.getElementById(" + '"input_h"' + ").value,document.getElementById(" + '"input_m"' + ").value)'>Generate new</button>"
        mode = 1
    }
    setTimeout("update();", 20)
}
function onlyNumbers(evt) {
    var e = event || evt;
    var charCode = e.which || e.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}
function clickgrid(x, y) {
	clickSound()
    if (placedmines == 0)
        generate_placemines(x, y);
    if (mines[x][y] == 1) {
        updatehtml();
		failSound()
        for (a = 0; a < width; a++) {
            for (b = 0; b < height; b++) {
                mineh[a][b] = 1;
            }
        }
        updatehtml();
    } else if (clear[x][y] == 0) {
        ql = 1;
        qx[0] = x;
        qy[0] = y;
        reveal();
    } else {
        mineh[x][y] = 1;
        revealedcells += 1;
        checkwin();
        updatehtml();
    }
}
function reveal() {
    var a, b, c, cx, cy, nql, nqx, nqy, tx, ty, exist;
    nql = 0;
    nqx = new Array();
    nqy = new Array();
    for (a = 0; a < ql; a++) {
        cx = qx[a];
        cy = qy[a];
        mineh[cx][cy] = 1;
        revealedcells += 1;
        if (clear[cx][cy] == 0) {
            for (b = 0; b < 4; b++) {
                if (b == 0) {
                    tx = 1;
                    ty = 0;
                }
                if (b == 1) {
                    tx = 0;
                    ty = 1;
                }
                if (b == 2) {
                    tx = -1;
                    ty = 0;
                }
                if (b == 3) {
                    tx = 0;
                    ty = -1;
                }
                if (cx + tx >= width)
                    tx = 0;
                if (cy + ty >= height)
                    ty = 0;
                if (cx + tx < 0)
                    tx = 0;
                if (cy + ty < 0)
                    ty = 0;
                if (mineh[cx + tx][cy + ty] == 0 && mines[cx + tx][cy + ty] == 0) {
                    exist = 0
                    for (c = 0; c < nql; c++) {
                        if (nqx[c] == cx + tx && nqy[c] == cy + ty) {
                            exist = 1;
                            break;
                        }
                    }
                    if (exist == 0) {
                        nqx[nql] = cx + tx;
                        nqy[nql] = cy + ty;
                        nql += 1;
                    }
                }
            }
        }
    }
    for (a = 0; a < nql; a++) {
        qx[a] = nqx[a];
        qy[a] = nqy[a];
    }
    ql = nql;
    checkwin();
    updatehtml();
    if (ql > 0)
        setTimeout("reveal();", 10);
}
function clickcell(x, y) {
    if (isCtrl == 0) {
        if (mineq[x][y] == 0)
            clickgrid(x, y);
    } else {
        if (mineq[x][y] == 0) {
            mineq[x][y] = 1;
        } else {
            mineq[x][y] = 0;
        }
        updatehtml();
    }
}
function updatehtml() {
    var a, b, str;
    str = "";
    str += "<table border='1' style='background-color:black; border:black;' cellspacing='1'>";
    for (b = 0; b < height; b++) {
        str += "<tr>";
        for (a = 0; a < width; a++) {
            str += "<td><div id='box'>";
            if (mineh[a][b] == 0) {
                str += "<button type='submit' style='left:-8px; top:-5px; position:relative; width:25px; height:25px; color:white; background-color:#1a1a1a; border:#5a5a5a;' onclick='clickcell(" + a + "," + b + ")'>"
                if (mineq[a][b] == 1)
                    str += "✪";
                str += "</button>";
            } else {
                if (mines[a][b] == 1) {
                    str += "<span style='color:white;'>☢</span>";
                } else if (clear[a][b] > 0) {
                    str += "<span style='font-weight:bold; background-color:black; border:#5a5a5a; color:";
                    if (clear[a][b] == 1)
                        str += "#0000FF"
                    if (clear[a][b] == 2)
                        str += "#008000"
                    if (clear[a][b] == 3)
                        str += "#FF0000"
                    if (clear[a][b] == 4)
                        str += "#800080"
                    if (clear[a][b] == 5)
                        str += "#800000"
                    if (clear[a][b] == 6)
                        str += "#40E0D0"
                    if (clear[a][b] == 7)
                        str += "#000000"
                    if (clear[a][b] == 8)
                        str += "#808080"
                    str += "'>";
                    str += clear[a][b]
                    str += "</span>";
                }
            }
            str += "</div></td>";
        }
        str += "</tr>";
    }
    str += "</table>";
    document.getElementById("minesweeper").innerHTML = str;
    document.getElementById("minesweeper").style.width = (width * 30) + "px";
    document.getElementById("minesweeper").style.height = (height * 30) + "px";
}
function generate_dif() {
    var difficulty = document.getElementById('input_d').value
    if (difficulty == 0)
        generate(10, 10, 10)
    if (difficulty == 1)
        generate(12, 12, 20)
    if (difficulty == 2)
        generate(14, 14, 30)
    if (difficulty == 3)
        generate(16, 16, 45)
    if (difficulty == 4)
        generate(18, 18, 75)
	if (difficulty == 5)
        generate(20, 20, 100)
}
function generate(w, h, m) {
    var a, b;
    revealedcells = 0;
    placedmines = 0;
    width = w;
    height = h;
    ms = m;
    if (ms >= w * h)
        ms = w * h - 1;
    for (a = 0; a < w; a++) {
        mines[a] = new Array()
        clear[a] = new Array()
        mineh[a] = new Array()
        mineq[a] = new Array()
        for (b = 0; b < h; b++) {
            mines[a][b] = 0
            clear[a][b] = 0
            mineh[a][b] = 0
            mineq[a][b] = 0
        }
    }
    updatehtml();
}
function generate_placemines(x, y) {
    placedmines = 0;
    while (placedmines < ms) {
        var a, b;
        do {
            a = Math.floor(Math.random() * width);
            b = Math.floor(Math.random() * height);
        } while ((a == x && b == y) || mines[a][b]);
        placedmines += 1;
        mines[a][b] = 1;
        if (a > 0)
            clear[a - 1][b] += 1;
        if (a < width - 1)
            clear[a + 1][b] += 1;
        if (b > 0)
            clear[a][b - 1] += 1;
        if (b < height - 1)
            clear[a][b + 1] += 1;
        if (a > 0 && b > 0)
            clear[a - 1][b - 1] += 1;
        if (a < width - 1 && b < height - 1)
            clear[a + 1][b + 1] += 1;
        if (a > 0 && b < height - 1)
            clear[a - 1][b + 1] += 1;
        if (a < width - 1 && b > 0)
            clear[a + 1][b - 1] += 1;
    }
    updatehtml();
}
function checkwin() {
    if (revealedcells == width * height - placedmines) {
		winSound()
        for (a = 0; a < width; a++) {
            for (b = 0; b < height; b++) {
                mineh[a][b] = 1;
            }
        }
        updatehtml();
    }
}
