var numselected = null;
var tileselected = null;

var easy = document.getElementById("easy");
var medium = document.getElementById("medium");
var hard = document.getElementById("hard");

var type = null;
var num = null;


var errors = 0;

// [
//     "8-7--4--9",
//     "1-98-23-7",
//     "-35--74-6",
//     "6-478-93-",
//     "9-3--1-7-",
//     "78---314-",
//     "-714-98-3",
//     "42-376-91",
//     "39-1-87-4"
// ]


// [
// "867534219",
// "149862357",
// "235917486",
// "614785932",
// "953241678",
// "782693145",
// "571429863",
// "428376591",
// "369158724"
// ]


var options = [

    //easy
    [
        [
            "---26-7-1",
            "68--7--9-",
            "19---45--",
            "82-1---4-",
            "--46-29--",
            "-5---3-28",
            "--93---74",
            "-4--5--36",
            "7-3-18---"
        ],
        [
            "1--489--6",
            "73-----4-",
            "-----1295",
            "--712-6--",
            "5--7-3--8",
            "--6-957--",
            "9146-----",
            "-2-----37",
            "8--512--4"
        ],
        [
            "-482----1",
            "1--384726",
            "3--7-1948",
            "-7264518-",
            "8----24--",
            "--------7",
            "-84---3--",
            "6--41---2",
            "--3----74"
        ],
        [
            "8-7--4--9",
            "1-98-23-7",
            "-35--74-6",
            "6-478-93-",
            "9-3--1-7-",
            "78---314-",
            "-714-98-3",
            "42-376-91",
            "39-1-87-4"
        ]
    ],
    //medium
    [
        [
            "--74916-5",
            "2---6-3-9",
            "-----7-1-",
            "-586----4",
            "--3----9-",
            "--62--187",
            "9-4-7---2",
            "67-83----",
            "81--45---"
        ],

    ],

    //hard

    [

    ]
]


var optionssol = [
    [
        [
            "435269781",
            "682571493",
            "197834562",
            "826195347",
            "374682915",
            "951743628",
            "519326874",
            "248957136",
            "763418259"
        ],
        [
            "152489376",
            "739256841",
            "468371295",
            "387124659",
            "591763428",
            "246895713",
            "914637582",
            "625948137",
            "873512964"
        ],
        [
            "748296531",
            "159384726",
            "326751948",
            "972645183",
            "831972465",
            "465138297",
            "284567319",
            "697413852",
            "513829674"
        ],
        [
            "867534219",
            "149862357",
            "235917486",
            "614785932",
            "953241678",
            "782693145",
            "571429863",
            "428376591",
            "369158724"
        ]
    ],

    [
        [
            "387491625",
            "241568379",
            "569327418",
            "758619234",
            "123784596",
            "496253187",
            "934176852",
            "675832941",
            "812945763"
        ],

    ],

    [

    ]
]



var board = [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
]

var solution = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
]


for (let i = 1; i <= options[0].length; i++) {
    let tile = document.createElement("div");
    var chirag = 0;
    tile.id = chirag.toString() + "--" + i.toString();
    tile.innerText = i;
    tile.classList.add("number");
    tile.classList.add("level");
    tile.addEventListener("click", checklevel);
    easy.appendChild(tile);
}

for (let i = 1; i <= options[1].length; i++) {
    let tile = document.createElement("div");
    var chirag = 1;
    tile.id = chirag.toString() + "--" + i.toString();
    tile.innerText = i;
    tile.classList.add("number");
    tile.classList.add("level");
    tile.addEventListener("click", checklevel);
    medium.appendChild(tile);
}

for (let i = 1; i <= options[2].length; i++) {
    let tile = document.createElement("div");
    var chirag = 2;
    tile.id = chirag.toString() + "--" + i.toString();
    tile.innerText = i;
    tile.classList.add("level");
    tile.classList.add("number");
    tile.addEventListener("click", checklevel);
    hard.appendChild(tile);

}

function checklevel() {
    let coord = this.id.split("--");
    board = options[coord[0]][coord[1] - 1];
    solution = optionssol[coord[0]][coord[1] - 1];
    document.getElementById("board").innerHTML = "";
    document.getElementById("digits").innerHTML = "";
    setgame();
    numselected = null;
    tileselected = null;
    type = coord[0];
    num = coord[1];
}



window.onload = function () {
    setgame();
}

function setgame() {
    for (var i = 1; i <= 9; i++) {
        let number = document.createElement("div");
        number.id = i;
        number.innerText = i;
        number.classList.add("number");
        number.addEventListener("click", selectnumber);
        document.getElementById("digits").appendChild(number);
    }

    for (let i = 0; i < 9; i++) {
        for (let t = 0; t < 9; t++) {
            let tile = document.createElement("div");
            tile.id = i.toString() + "-" + t.toString();
            tile.addEventListener("click", selecttile);
            if (board[i][t] != '-') {
                tile.innerText = board[i][t];
                tile.classList.add("tilestart");
            }
            if (i == 2 || i == 5) {
                tile.classList.add("horizontal");
            }
            if (t == 2 || t == 5) {
                tile.classList.add("vertical");
            }
            tile.classList.add("tile");
            document.getElementById("board").appendChild(tile);
        }
    }
}

function selectnumber() {
    if (numselected != null) {
        numselected.classList.remove("numberselected");
    }
    numselected = this;
    numselected.classList.add("numberselected");
}

function selecttile() {
    if (numselected) {
        if (this.innerText != "") return;

        let coord = this.id.split("-");
        let r = parseInt(coord[0]);
        let c = parseInt(coord[1]);
        if (solution[r][c] == numselected.id) {
            this.innerText = numselected.id;
            let originalstring = board[r];
            let newstring = "";
            for (let i = 0; i < 9; i++) {
                if (i == c) {
                    newstring += (numselected.id).toString();
                }
                else newstring += originalstring[i];

            }
            options[type][num - 1][r] = newstring;

            if (checkcomplete()) {
                document.getElementById(type.toString() + "--" + (num).toString()).classList.add("complete");
            }
        }
        else {
            errors += 1;
            document.getElementById("errors").innerText = errors;
        }
    }
}

function checkcomplete() {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (options[type][num - 1][i][j] == "-")
                return false;
        }

    }
    return true;
}