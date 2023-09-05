Dagaz.Controller.persistense = "none";

Dagaz.Model.WIDTH  = 4;
Dagaz.Model.HEIGHT = 8;

ZRF = {
    JUMP:          0,
    IF:            1,
    FORK:          2,
    FUNCTION:      3,
    IN_ZONE:       4,
    FLAG:          5,
    SET_FLAG:      6,
    POS_FLAG:      7,
    SET_POS_FLAG:  8,
    ATTR:          9,
    SET_ATTR:      10,
    PROMOTE:       11,
    MODE:          12,
    ON_BOARD_DIR:  13,
    ON_BOARD_POS:  14,
    PARAM:         15,
    LITERAL:       16,
    VERIFY:        20
};

Dagaz.Controller.addSound(10, "sounds/pawn.wav", true);
Dagaz.Controller.addSound(11, "sounds/knight.wav", true);
Dagaz.Controller.addSound(12, "sounds/bishop.wav", true);
Dagaz.Controller.addSound(13, "sounds/queen.wav", true);
Dagaz.Controller.addSound(14, "sounds/rook.wav", true);

Dagaz.Model.BuildDesign = function(design) {
    design.checkVersion("z2j", "2");
    design.checkVersion("animate-captures", "false");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("chess-invariant", "true");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("ne");
    design.addDirection("n");
    design.addDirection("se");
    design.addDirection("sw");
    design.addDirection("nw");

    design.addPlayer("White", [1, 0, 4, 6, 2, 7, 3, 5]);
    design.addPlayer("Black", [1, 0, 4, 6, 2, 7, 3, 5]);

    design.addPosition("a8", [0, 1, 4, 0, 0, 5, 0, 0]);
    design.addPosition("b8", [-1, 1, 4, 0, 0, 5, 3, 0]);
    design.addPosition("c8", [-1, 1, 4, 0, 0, 5, 3, 0]);
    design.addPosition("d8", [-1, 0, 4, 0, 0, 0, 3, 0]);
    design.addPosition("a7", [0, 1, 4, -3, -4, 5, 0, 0]);
    design.addPosition("b7", [-1, 1, 4, -3, -4, 5, 3, -5]);
    design.addPosition("c7", [-1, 1, 4, -3, -4, 5, 3, -5]);
    design.addPosition("d7", [-1, 0, 4, 0, -4, 0, 3, -5]);
    design.addPosition("a6", [0, 1, 4, -3, -4, 5, 0, 0]);
    design.addPosition("b6", [-1, 1, 4, -3, -4, 5, 3, -5]);
    design.addPosition("c6", [-1, 1, 4, -3, -4, 5, 3, -5]);
    design.addPosition("d6", [-1, 0, 4, 0, -4, 0, 3, -5]);
    design.addPosition("a5", [0, 1, 4, -3, -4, 5, 0, 0]);
    design.addPosition("b5", [-1, 1, 4, -3, -4, 5, 3, -5]);
    design.addPosition("c5", [-1, 1, 4, -3, -4, 5, 3, -5]);
    design.addPosition("d5", [-1, 0, 4, 0, -4, 0, 3, -5]);
    design.addPosition("a4", [0, 1, 4, -3, -4, 5, 0, 0]);
    design.addPosition("b4", [-1, 1, 4, -3, -4, 5, 3, -5]);
    design.addPosition("c4", [-1, 1, 4, -3, -4, 5, 3, -5]);
    design.addPosition("d4", [-1, 0, 4, 0, -4, 0, 3, -5]);
    design.addPosition("a3", [0, 1, 4, -3, -4, 5, 0, 0]);
    design.addPosition("b3", [-1, 1, 4, -3, -4, 5, 3, -5]);
    design.addPosition("c3", [-1, 1, 4, -3, -4, 5, 3, -5]);
    design.addPosition("d3", [-1, 0, 4, 0, -4, 0, 3, -5]);
    design.addPosition("a2", [0, 1, 4, -3, -4, 5, 0, 0]);
    design.addPosition("b2", [-1, 1, 4, -3, -4, 5, 3, -5]);
    design.addPosition("c2", [-1, 1, 4, -3, -4, 5, 3, -5]);
    design.addPosition("d2", [-1, 0, 4, 0, -4, 0, 3, -5]);
    design.addPosition("a1", [0, 1, 0, -3, -4, 0, 0, 0]);
    design.addPosition("b1", [-1, 1, 0, -3, -4, 0, 0, -5]);
    design.addPosition("c1", [-1, 1, 0, -3, -4, 0, 0, -5]);
    design.addPosition("d1", [-1, 0, 0, 0, -4, 0, 0, -5]);
    design.addPosition("X1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X3", [0, 0, 0, 0, 0, 0, 0, 0]);

    design.addZone("last-rank", 1, [0, 1, 2, 3]);
    design.addZone("last-rank", 2, [28, 29, 30, 31]);
    design.addZone("third-rank", 1, [20, 21, 22, 23]);
    design.addZone("third-rank", 2, [8, 9, 10, 11]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.IN_ZONE,	0);	// last-rank
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	4);
    design.addCommand(0, ZRF.PROMOTE,	2);	// Rook
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.JUMP,	2);
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.IN_ZONE,	1);	// third-rank
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.IN_ZONE,	0);	// last-rank
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	4);
    design.addCommand(2, ZRF.PROMOTE,	2);	// Rook
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.JUMP,	2);
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	5);	// last-to?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.LITERAL,	0);	// Pawn
    design.addCommand(3, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	26);	// capture
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	6);	// mark
    design.addCommand(3, ZRF.PARAM,	2);	// $3
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	4);	// last-from?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	7);	// back
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.PARAM,	1);	// $2
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.PARAM,	2);	// $3
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.LITERAL,	2);	// Rook
    design.addCommand(5, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	3);	// $4
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.PARAM,	4);	// $5
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.IF,	7);
    design.addCommand(6, ZRF.FORK,	3);
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end
    design.addCommand(6, ZRF.PARAM,	1);	// $2
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.JUMP,	-8);
    design.addCommand(6, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.PARAM,	0);	// $1
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.PARAM,	1);	// $2
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(7, ZRF.FUNCTION,	0);	// not
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end


    design.addPiece("Pawn", 0, 100);
    design.addMove(0, 0, [4], 0, 10);
    design.addMove(0, 1, [4, 4], 0, 10);
    design.addMove(0, 2, [7], 0, 10);
    design.addMove(0, 2, [3], 0, 10);
    design.addMove(0, 3, [1, 4, 4], 0, 10);
    design.addMove(0, 3, [0, 4, 4], 0, 10);

    design.addPiece("King", 1, 20000);
    design.addMove(1, 4, [4], 0, 11);
    design.addMove(1, 4, [2], 0, 11);
    design.addMove(1, 4, [0], 0, 11);
    design.addMove(1, 4, [1], 0, 11);
    design.addMove(1, 4, [7], 0, 11);
    design.addMove(1, 4, [6], 0, 11);
    design.addMove(1, 4, [3], 0, 11);
    design.addMove(1, 4, [5], 0, 11);
    design.addMove(1, 5, [0, 0, 0, 1, 1], 0, 11);

    design.addPiece("Rook", 2, 500);
    design.addMove(2, 6, [4, 4], 0, 12);
    design.addMove(2, 6, [2, 2], 0, 12);
    design.addMove(2, 6, [0, 0], 0, 12);
    design.addMove(2, 6, [1, 1], 0, 12);

    design.addPiece("Knight", 3, 330);
    design.addMove(3, 7, [4, 7], 0, 13);
    design.addMove(3, 7, [4, 3], 0, 13);
    design.addMove(3, 7, [2, 6], 0, 13);
    design.addMove(3, 7, [2, 5], 0, 13);
    design.addMove(3, 7, [0, 7], 0, 13);
    design.addMove(3, 7, [0, 6], 0, 13);
    design.addMove(3, 7, [1, 3], 0, 13);
    design.addMove(3, 7, [1, 5], 0, 13);

    design.addPiece("Bishop", 4, 320);
    design.addMove(4, 6, [7, 7], 0, 14);
    design.addMove(4, 6, [6, 6], 0, 14);
    design.addMove(4, 6, [3, 3], 0, 14);
    design.addMove(4, 6, [5, 5], 0, 14);

    design.setup("White", "Pawn", 24);
    design.setup("White", "Pawn", 25);
    design.setup("White", "Pawn", 26);
    design.setup("White", "Pawn", 27);
    design.setup("White", "Rook", 31);
    design.setup("White", "Bishop", 29);
    design.setup("White", "Knight", 30);
    design.setup("White", "King", 28);
    design.setup("Black", "Pawn", 4);
    design.setup("Black", "Pawn", 5);
    design.setup("Black", "Pawn", 6);
    design.setup("Black", "Pawn", 7);
    design.setup("Black", "Rook", 3);
    design.setup("Black", "Bishop", 1);
    design.setup("Black", "Knight", 2);
    design.setup("Black", "King", 0);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhitePawn", "White Pawn");
    view.defPiece("BlackPawn", "Black Pawn");
    view.defPiece("WhiteKing", "White King");
    view.defPiece("BlackKing", "Black King");
    view.defPiece("WhiteRook", "White Rook");
    view.defPiece("BlackRook", "Black Rook");
    view.defPiece("WhiteKnight", "White Knight");
    view.defPiece("BlackKnight", "Black Knight");
    view.defPiece("WhiteBishop", "White Bishop");
    view.defPiece("BlackBishop", "Black Bishop");
 
    view.defPosition("a8", 206, 478, 68, 68);
    view.defPosition("b8", 138, 478, 68, 68);
    view.defPosition("c8", 70, 478, 68, 68);
    view.defPosition("d8", 2, 478, 68, 68);
    view.defPosition("a7", 206, 410, 68, 68);
    view.defPosition("b7", 138, 410, 68, 68);
    view.defPosition("c7", 70, 410, 68, 68);
    view.defPosition("d7", 2, 410, 68, 68);
    view.defPosition("a6", 206, 342, 68, 68);
    view.defPosition("b6", 138, 342, 68, 68);
    view.defPosition("c6", 70, 342, 68, 68);
    view.defPosition("d6", 2, 342, 68, 68);
    view.defPosition("a5", 206, 274, 68, 68);
    view.defPosition("b5", 138, 274, 68, 68);
    view.defPosition("c5", 70, 274, 68, 68);
    view.defPosition("d5", 2, 274, 68, 68);
    view.defPosition("a4", 206, 206, 68, 68);
    view.defPosition("b4", 138, 206, 68, 68);
    view.defPosition("c4", 70, 206, 68, 68);
    view.defPosition("d4", 2, 206, 68, 68);
    view.defPosition("a3", 206, 138, 68, 68);
    view.defPosition("b3", 138, 138, 68, 68);
    view.defPosition("c3", 70, 138, 68, 68);
    view.defPosition("d3", 2, 138, 68, 68);
    view.defPosition("a2", 206, 70, 68, 68);
    view.defPosition("b2", 138, 70, 68, 68);
    view.defPosition("c2", 70, 70, 68, 68);
    view.defPosition("d2", 2, 70, 68, 68);
    view.defPosition("a1", 206, 2, 68, 68);
    view.defPosition("b1", 138, 2, 68, 68);
    view.defPosition("c1", 70, 2, 68, 68);
    view.defPosition("d1", 2, 2, 68, 68);

    view.defPopup("Promote", 26, 50);
    view.defPopupPosition("X1", 10, 7, 68, 68);
    view.defPopupPosition("X2", 80, 7, 68, 68);
    view.defPopupPosition("X3", 150, 7, 68, 68);
}
