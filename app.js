// club
// diamond
// spade
// heart
var cards = [];
var rand;
var temp;
var player1 = [];
var player2 = [];


function build() {
    cards.push("&#127185;");
    cards.push("&#127186;");
    cards.push("&#127187;");
    cards.push("&#127188;");
    cards.push("&#127189;");
    cards.push("&#127190;");
    cards.push("&#127191;");
    cards.push("&#127192;");
    cards.push("&#127193;");
    cards.push("&#127194;");
    cards.push("&#127195;");
    cards.push("&#127197;");
    cards.push("&#127198;");
    cards.push("&#127137;");
    cards.push("&#127138;");
    cards.push("&#127139;");
    cards.push("&#127140;");
    cards.push("&#127141;");
    cards.push("&#127142;");
    cards.push("&#127143;");
    cards.push("&#127144;");
    cards.push("&#127145;");
    cards.push("&#127146;");
    cards.push("&#127147;");
    cards.push("&#127149;");
    cards.push("&#127150;");
    cards.push("&#127153;");
    cards.push("&#127154;");
    cards.push("&#127155;");
    cards.push("&#127156;");
    cards.push("&#127157;");
    cards.push("&#127158;");
    cards.push("&#127159;");
    cards.push("&#127160;");
    cards.push("&#127161;");
    cards.push("&#127162;");
    cards.push("&#127163;");
    cards.push("&#127165;");
    cards.push("&#127166;");
    cards.push("&#127169;");
    cards.push("&#127170;");
    cards.push("&#127171;");
    cards.push("&#127172;");
    cards.push("&#127173;");
    cards.push("&#127174;");
    cards.push("&#127175;");
    cards.push("&#127176;");
    cards.push("&#127177;");
    cards.push("&#127178;");
    cards.push("&#127179;");
    cards.push("&#127181;");
    cards.push("&#127182;");

    console.log(cards);
    document.getElementById("output").innerHTML = cards;

}

function build2() {
    for (var i = 1; i <= 4; i++) {
        for (var j = 1; j <= 13; j++) {
            if (i == 1) {
                switch (j) {
                    case 1:
                        cards.push("clubs Ace");
                        break;
                    case 11:
                        cards.push("clubs Jack");
                        break;
                    case 12:
                        cards.push("clubs Queen");
                        break;
                    case 13:
                        cards.push("clubs King");
                        break;
                    default:
                        cards.push("clubs " + j);
                }

            } else if (i == 2) {
                switch (j) {
                    case 1:
                        cards.push("spades Ace");
                        break;
                    case 11:
                        cards.push("spades Jack");
                        break;
                    case 12:
                        cards.push("spades Queen");
                        break;
                    case 13:
                        cards.push("spades King");
                        break;
                    default:
                        cards.push("spades " + j);
                }

            } else if (i == 3) {
                switch (j) {
                    case 1:
                        cards.push("hearts Ace");
                        break;
                    case 11:
                        cards.push("hearts Jack");
                        break;
                    case 12:
                        cards.push("hearts Queen");
                        break;
                    case 13:
                        cards.push("hearts King");
                        break;
                    default:
                        cards.push("hearts " + j);
                }
            } else {
                switch (j) {
                    case 1:
                        cards.push("diamonds Ace");
                        break;
                    case 11:
                        cards.push("diamonds Jack");
                        break;
                    case 12:
                        cards.push("diamonds Queen");
                        break;
                    case 13:
                        cards.push("diamonds King");
                        break;
                    default:
                        cards.push("diamonds " + j);
                }

            }
        }
    }
    console.log(cards);
    document.getElementById("output").innerHTML = cards;
}

function shuffle() {
    for (var i = 0; i < cards.length; i++) {
        rand = Math.floor(Math.random() * 52);
        temp = cards[i];
        cards[i] = cards[rand];
        cards[rand] = temp;

    }
    console.log(cards);
    document.getElementById("output").innerHTML = cards;

}

function deal() {
    player1.push(cards[0]);
    cards.splice(0, 1);
    player1.push(cards[0]);
    cards.splice(0, 1);
    player2.push(cards[0]);
    cards.splice(0, 1);
    player2.push(cards[0]);
    cards.splice(0, 1);


    console.log(player1);
    console.log(player2);
    console.log(cards.length);
    document.getElementById("output").innerHTML = "player1: " + player1 + "<br><br>";
    document.getElementById("output").innerHTML += "player2: " + player2;


}