Dagaz.Controller.persistense = "none";

Dagaz.View.MARK_R = 18;
Dagaz.Model.showLose = false;

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

if (!_.isUndefined(Dagaz.Controller.addSound)) {
    Dagaz.Controller.addSound(0, "sounds/slide.ogg", true);
}

Dagaz.Model.BuildDesign = function(design) {
    design.checkVersion("z2j", "2");
    design.checkVersion("animate-captures", "false");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-captures", "false");
    design.checkVersion("pass-partial", "true");
    design.checkVersion("detect-loops", "true");

    design.addDirection("se"); // 0
    design.addDirection("s");  // 1
    design.addDirection("sw"); // 2
    design.addDirection("e");  // 3
    design.addDirection("w");  // 4
    design.addDirection("ne"); // 5
    design.addDirection("nw"); // 6
    design.addDirection("n");  // 7

    design.addPlayer("Black", [6, 7, 5, 4, 3, 2, 0, 1]);
    design.addPlayer("White", [0, 1, 2, 3, 4, 5, 6, 7]);

    design.addPosition("a10", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b10", [11, 10, 9, 1, 0, 0, 0, 0]);
    design.addPosition("c10", [11, 10, 9, 1, -1, 0, 0, 0]);
    design.addPosition("d10", [11, 10, 9, 1, -1, 0, 0, 0]);
    design.addPosition("e10", [11, 10, 9, 1, -1, 0, 0, 0]);
    design.addPosition("f10", [11, 10, 9, 1, -1, 0, 0, 0]);
    design.addPosition("g10", [11, 10, 9, 1, -1, 0, 0, 0]);
    design.addPosition("h10", [11, 10, 9, 1, -1, 0, 0, 0]);
    design.addPosition("i10", [11, 10, 9, 0, -1, 0, 0, 0]);
    design.addPosition("j10", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("a9", [11, 10, 0, 1, 0, -9, 0, 0]);
    design.addPosition("b9", [11, 10, 9, 1, -1, -9, 0, -10]);
    design.addPosition("c9", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("d9", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("e9", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("f9", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("g9", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("h9", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("i9", [11, 10, 9, 1, -1, 0, -11, -10]);
    design.addPosition("j9", [0, 10, 9, 0, -1, 0, -11, 0]);
    design.addPosition("a8", [11, 10, 0, 1, 0, -9, 0, -10]);
    design.addPosition("b8", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("c8", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("d8", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("e8", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("f8", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("g8", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("h8", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("i8", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("j8", [0, 10, 9, 0, -1, 0, -11, -10]);
    design.addPosition("a7", [11, 10, 0, 1, 0, -9, 0, -10]);
    design.addPosition("b7", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("c7", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("d7", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("e7", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("f7", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("g7", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("h7", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("i7", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("j7", [0, 10, 9, 0, -1, 0, -11, -10]);
    design.addPosition("a6", [11, 10, 0, 1, 0, -9, 0, -10]);
    design.addPosition("b6", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("c6", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("d6", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("e6", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("f6", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("g6", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("h6", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("i6", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("j6", [0, 10, 9, 0, -1, 0, -11, -10]);
    design.addPosition("a5", [11, 10, 0, 1, 0, -9, 0, -10]);
    design.addPosition("b5", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("c5", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("d5", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("e5", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("f5", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("g5", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("h5", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("i5", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("j5", [0, 10, 9, 0, -1, 0, -11, -10]);
    design.addPosition("a4", [11, 10, 0, 1, 0, -9, 0, -10]);
    design.addPosition("b4", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("c4", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("d4", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("e4", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("f4", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("g4", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("h4", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("i4", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("j4", [0, 10, 9, 0, -1, 0, -11, -10]);
    design.addPosition("a3", [11, 10, 0, 1, 0, -9, 0, -10]);
    design.addPosition("b3", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("c3", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("d3", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("e3", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("f3", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("g3", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("h3", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("i3", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("j3", [0, 10, 9, 0, -1, 0, -11, -10]);
    design.addPosition("a2", [11, 0, 0, 1, 0, -9, 0, -10]);
    design.addPosition("b2", [11, 10, 0, 1, -1, -9, -11, -10]);
    design.addPosition("c2", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("d2", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("e2", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("f2", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("g2", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("h2", [11, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("i2", [0, 10, 9, 1, -1, -9, -11, -10]);
    design.addPosition("j2", [0, 0, 9, 0, -1, 0, -11, -10]);
    design.addPosition("a1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("b1", [0, 0, 0, 1, 0, -9, -11, -10]);
    design.addPosition("c1", [0, 0, 0, 1, -1, -9, -11, -10]);
    design.addPosition("d1", [0, 0, 0, 1, -1, -9, -11, -10]);
    design.addPosition("e1", [0, 0, 0, 1, -1, -9, -11, -10]);
    design.addPosition("f1", [0, 0, 0, 1, -1, -9, -11, -10]);
    design.addPosition("g1", [0, 0, 0, 1, -1, -9, -11, -10]);
    design.addPosition("h1", [0, 0, 0, 1, -1, -9, -11, -10]);
    design.addPosition("i1", [0, 0, 0, 0, -1, -9, -11, -10]);
    design.addPosition("j1", [0, 0, 0, 0, 0, 0, 0, 0]);

    design.addZone("last-rank", 2, [91, 92, 93, 94, 95, 96, 97, 98]);
    design.addZone("last-rank", 1, [1, 2, 3, 4, 5, 6, 7, 8]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.IN_ZONE,	0);	// last-rank
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.IN_ZONE,	0);	// last-rank
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.LITERAL,	0);	// Small
    design.addCommand(1, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	8);
    design.addCommand(1, ZRF.FUNCTION,	26);	// capture
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.JUMP,	11);
    design.addCommand(1, ZRF.PARAM,	2);	// $3
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.IN_ZONE,	0);	// last-rank
    design.addCommand(1, ZRF.IF,	4);
    design.addCommand(1, ZRF.MODE,	1);	// jump-type
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.JUMP,	2);
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.IN_ZONE,	0);	// last-rank
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.LITERAL,	2);	// Large
    design.addCommand(2, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	8);
    design.addCommand(2, ZRF.FUNCTION,	26);	// capture
    design.addCommand(2, ZRF.PARAM,	1);	// $2
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.JUMP,	11);
    design.addCommand(2, ZRF.PARAM,	2);	// $3
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.IN_ZONE,	0);	// last-rank
    design.addCommand(2, ZRF.IF,	4);
    design.addCommand(2, ZRF.MODE,	1);	// jump-type
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.JUMP,	2);
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.IN_ZONE,	0);	// last-rank
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	8);
    design.addCommand(3, ZRF.FUNCTION,	26);	// capture
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.JUMP,	11);
    design.addCommand(3, ZRF.PARAM,	2);	// $3
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.IN_ZONE,	0);	// last-rank
    design.addCommand(3, ZRF.IF,	4);
    design.addCommand(3, ZRF.MODE,	1);	// jump-type
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.JUMP,	2);
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.IN_ZONE,	0);	// last-rank
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.FUNCTION,	26);	// capture
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addPiece("Small", 0);
    design.addMove(0, 0, [7], 0);
    design.addMove(0, 0, [1], 0);
    design.addMove(0, 0, [4], 0);
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 0, [6], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [5], 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 1, [7, 7, 7], 1);
    design.addMove(0, 1, [1, 1, 1], 1);
    design.addMove(0, 1, [4, 4, 4], 1);
    design.addMove(0, 1, [3, 3, 3], 1);
    design.addMove(0, 1, [6, 6, 6], 1);
    design.addMove(0, 1, [2, 2, 2], 1);
    design.addMove(0, 1, [5, 5, 5], 1);
    design.addMove(0, 1, [0, 0, 0], 1);
    design.addMove(0, 4, [], 2);

    design.addPiece("Medium", 1);
    design.addMove(1, 0, [7], 0);
    design.addMove(1, 0, [1], 0);
    design.addMove(1, 0, [4], 0);
    design.addMove(1, 0, [3], 0);
    design.addMove(1, 0, [6], 0);
    design.addMove(1, 0, [2], 0);
    design.addMove(1, 0, [5], 0);
    design.addMove(1, 0, [0], 0);
    design.addMove(1, 2, [7, 7, 7], 1);
    design.addMove(1, 2, [1, 1, 1], 1);
    design.addMove(1, 2, [4, 4, 4], 1);
    design.addMove(1, 2, [3, 3, 3], 1);
    design.addMove(1, 2, [6, 6, 6], 1);
    design.addMove(1, 2, [2, 2, 2], 1);
    design.addMove(1, 2, [5, 5, 5], 1);
    design.addMove(1, 2, [0, 0, 0], 1);
    design.addMove(1, 4, [], 2);

    design.addPiece("Large", 2);
    design.addMove(2, 0, [7], 0);
    design.addMove(2, 0, [1], 0);
    design.addMove(2, 0, [4], 0);
    design.addMove(2, 0, [3], 0);
    design.addMove(2, 0, [6], 0);
    design.addMove(2, 0, [2], 0);
    design.addMove(2, 0, [5], 0);
    design.addMove(2, 0, [0], 0);
    design.addMove(2, 3, [7, 7, 7], 1);
    design.addMove(2, 3, [1, 1, 1], 1);
    design.addMove(2, 3, [4, 4, 4], 1);
    design.addMove(2, 3, [3, 3, 3], 1);
    design.addMove(2, 3, [6, 6, 6], 1);
    design.addMove(2, 3, [2, 2, 2], 1);
    design.addMove(2, 3, [5, 5, 5], 1);
    design.addMove(2, 3, [0, 0, 0], 1);
    design.addMove(2, 4, [], 2);

    design.setup("Black", "Small", 83);
    design.setup("Black", "Small", 84);
    design.setup("Black", "Small", 85);
    design.setup("Black", "Small", 86);
    design.setup("Black", "Medium", 91);
    design.setup("Black", "Medium", 92);
    design.setup("Black", "Medium", 97);
    design.setup("Black", "Medium", 98);
    design.setup("Black", "Large", 93);
    design.setup("Black", "Large", 94);
    design.setup("Black", "Large", 95);
    design.setup("Black", "Large", 96);
    design.setup("White", "Small", 13);
    design.setup("White", "Small", 14);
    design.setup("White", "Small", 15);
    design.setup("White", "Small", 16);
    design.setup("White", "Medium", 1);
    design.setup("White", "Medium", 2);
    design.setup("White", "Medium", 7);
    design.setup("White", "Medium", 8);
    design.setup("White", "Large", 3);
    design.setup("White", "Large", 4);
    design.setup("White", "Large", 5);
    design.setup("White", "Large", 6);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteSmall", "White Small");
    view.defPiece("BlackSmall", "Black Small");
    view.defPiece("WhiteMedium", "White Medium");
    view.defPiece("BlackMedium", "Black Medium");
    view.defPiece("WhiteLarge", "White Large");
    view.defPiece("BlackLarge", "Black Large");
 
    view.defPosition("a10", 798, 798, 59, 59);
    view.defPosition("b10", 710, 798, 59, 59);
    view.defPosition("c10", 622, 798, 59, 59);
    view.defPosition("d10", 534, 798, 59, 59);
    view.defPosition("e10", 446, 798, 59, 59);
    view.defPosition("f10", 358, 798, 59, 59);
    view.defPosition("g10", 270, 798, 59, 59);
    view.defPosition("h10", 182, 798, 59, 59);
    view.defPosition("i10", 94, 798, 59, 59);
    view.defPosition("j10", 6, 798, 59, 59);
    view.defPosition("a9", 798, 710, 59, 59);
    view.defPosition("b9", 710, 710, 59, 59);
    view.defPosition("c9", 622, 710, 59, 59);
    view.defPosition("d9", 534, 710, 59, 59);
    view.defPosition("e9", 446, 710, 59, 59);
    view.defPosition("f9", 358, 710, 59, 59);
    view.defPosition("g9", 270, 710, 59, 59);
    view.defPosition("h9", 182, 710, 59, 59);
    view.defPosition("i9", 94, 710, 59, 59);
    view.defPosition("j9", 6, 710, 59, 59);
    view.defPosition("a8", 798, 622, 59, 59);
    view.defPosition("b8", 710, 622, 59, 59);
    view.defPosition("c8", 622, 622, 59, 59);
    view.defPosition("d8", 534, 622, 59, 59);
    view.defPosition("e8", 446, 622, 59, 59);
    view.defPosition("f8", 358, 622, 59, 59);
    view.defPosition("g8", 270, 622, 59, 59);
    view.defPosition("h8", 182, 622, 59, 59);
    view.defPosition("i8", 94, 622, 59, 59);
    view.defPosition("j8", 6, 622, 59, 59);
    view.defPosition("a7", 798, 534, 59, 59);
    view.defPosition("b7", 710, 534, 59, 59);
    view.defPosition("c7", 622, 534, 59, 59);
    view.defPosition("d7", 534, 534, 59, 59);
    view.defPosition("e7", 446, 534, 59, 59);
    view.defPosition("f7", 358, 534, 59, 59);
    view.defPosition("g7", 270, 534, 59, 59);
    view.defPosition("h7", 182, 534, 59, 59);
    view.defPosition("i7", 94, 534, 59, 59);
    view.defPosition("j7", 6, 534, 59, 59);
    view.defPosition("a6", 798, 446, 59, 59);
    view.defPosition("b6", 710, 446, 59, 59);
    view.defPosition("c6", 622, 446, 59, 59);
    view.defPosition("d6", 534, 446, 59, 59);
    view.defPosition("e6", 446, 446, 59, 59);
    view.defPosition("f6", 358, 446, 59, 59);
    view.defPosition("g6", 270, 446, 59, 59);
    view.defPosition("h6", 182, 446, 59, 59);
    view.defPosition("i6", 94, 446, 59, 59);
    view.defPosition("j6", 6, 446, 59, 59);
    view.defPosition("a5", 798, 358, 59, 59);
    view.defPosition("b5", 710, 358, 59, 59);
    view.defPosition("c5", 622, 358, 59, 59);
    view.defPosition("d5", 534, 358, 59, 59);
    view.defPosition("e5", 446, 358, 59, 59);
    view.defPosition("f5", 358, 358, 59, 59);
    view.defPosition("g5", 270, 358, 59, 59);
    view.defPosition("h5", 182, 358, 59, 59);
    view.defPosition("i5", 94, 358, 59, 59);
    view.defPosition("j5", 6, 358, 59, 59);
    view.defPosition("a4", 798, 270, 59, 59);
    view.defPosition("b4", 710, 270, 59, 59);
    view.defPosition("c4", 622, 270, 59, 59);
    view.defPosition("d4", 534, 270, 59, 59);
    view.defPosition("e4", 446, 270, 59, 59);
    view.defPosition("f4", 358, 270, 59, 59);
    view.defPosition("g4", 270, 270, 59, 59);
    view.defPosition("h4", 182, 270, 59, 59);
    view.defPosition("i4", 94, 270, 59, 59);
    view.defPosition("j4", 6, 270, 59, 59);
    view.defPosition("a3", 798, 182, 59, 59);
    view.defPosition("b3", 710, 182, 59, 59);
    view.defPosition("c3", 622, 182, 59, 59);
    view.defPosition("d3", 534, 182, 59, 59);
    view.defPosition("e3", 446, 182, 59, 59);
    view.defPosition("f3", 358, 182, 59, 59);
    view.defPosition("g3", 270, 182, 59, 59);
    view.defPosition("h3", 182, 182, 59, 59);
    view.defPosition("i3", 94, 182, 59, 59);
    view.defPosition("j3", 6, 182, 59, 59);
    view.defPosition("a2", 798, 94, 59, 59);
    view.defPosition("b2", 710, 94, 59, 59);
    view.defPosition("c2", 622, 94, 59, 59);
    view.defPosition("d2", 534, 94, 59, 59);
    view.defPosition("e2", 446, 94, 59, 59);
    view.defPosition("f2", 358, 94, 59, 59);
    view.defPosition("g2", 270, 94, 59, 59);
    view.defPosition("h2", 182, 94, 59, 59);
    view.defPosition("i2", 94, 94, 59, 59);
    view.defPosition("j2", 6, 94, 59, 59);
    view.defPosition("a1", 798, 6, 59, 59);
    view.defPosition("b1", 710, 6, 59, 59);
    view.defPosition("c1", 622, 6, 59, 59);
    view.defPosition("d1", 534, 6, 59, 59);
    view.defPosition("e1", 446, 6, 59, 59);
    view.defPosition("f1", 358, 6, 59, 59);
    view.defPosition("g1", 270, 6, 59, 59);
    view.defPosition("h1", 182, 6, 59, 59);
    view.defPosition("i1", 94, 6, 59, 59);
    view.defPosition("j1", 6, 6, 59, 59);
}
