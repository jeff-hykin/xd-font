'use strict';
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t11, _r1_t12;
var _r1_class8 = function _r1_t11(r150_x, r150_y) {
    var _r150_t0 = this;
    _r150_t0.x = r150_x;
    _r150_t0.y = r150_y;
    return void 0;
};
var r1_unorm = require('unorm');
var _r1_t9 = require('../support/utils');
var r1_mix = _r1_t9.mix;
var r1_linreg = _r1_t9.linreg;
var r1_clamp = _r1_t9.clamp;
var r1_fallback = _r1_t9.fallback;
var r1_suggestGC = _r1_t9.suggestGC;
var _r1_t10 = require('../meta/aesthetics');
var r1_designParameters = _r1_t10.designParameters;
var r1_customDecompositions = {
    'Ŗ': 'R̦',
    'ŗ': 'r̦',
    'Ķ': 'K̦',
    'ķ': 'k̦',
    'Ņ': 'N̦',
    'ņ': 'n̦',
    'Ļ': 'L̦',
    'ļ': 'l̦',
    'Ģ': 'G̦',
    'ģ': 'g̒',
    'Ɨ': 'I̵',
    'ƚ': 'l̵',
    'Ɉ': 'J̵',
    'ɉ': 'j̵',
    'ɨ': 'i̵',
    'Ɍ': 'R̵',
    'ɍ': 'r̵',
    'Ƶ': 'Z̵',
    'ƶ': 'z̵',
    'ᵻ': 'ɪ̵',
    'ᵼ': 'ɩ̵',
    'ᵿ': 'ʊ\uE091',
    'ʉ': 'u\uE091',
    'Ʉ': 'U\uE091',
    'ǥ': 'g\uE091',
    'ƻ': '2\uE091',
    'Ɏ': 'Y\uE091',
    'Ұ': 'Ү̵',
    'ұ': 'ү̵',
    'ɏ': 'y\uE091',
    'ꬰ': 'ꭤ\uE091',
    'ᵽ': 'p\uE091',
    'ł': 'l\uE090',
    'ľ': 'l̕',
    'ť': 't̕',
    'Ⱥ': 'A̸',
    'Ȼ': 'C̸',
    'ȼ': 'c̷',
    'Ⱦ': 'T̸',
    'Ɇ': 'E̸',
    'ɇ': 'e̷',
    'ʐ': 'z̢',
    'ɖ': 'd̢',
    'ɳ': 'n̢',
    'Ʈ': 'T̢',
    'ᶏ': 'a̢',
    'ᶐ': 'ɑ̢',
    'ᶑ': 'ɗ̢',
    'ᶙ': 'u̢',
    'ẚ': 'a͗',
    'ẜ': 'ſ\uE090',
    'ẝ': 'ſ̵',
    'Ҙ': 'З̧',
    'ҙ': 'з̧',
    'Ҫ': 'С̧',
    'ҫ': 'с̧',
    'ˋ': ' ̀',
    'ˊ': ' ́',
    'ˆ': ' ̂',
    '\u02DC': ' ̃',
    '\xAF': ' ̄',
    'ˉ': ' ̄',
    '\u02D8': ' ̆',
    '\u02D9': ' ̇',
    '\xA8': ' ̈',
    '\u02DA': ' ̊',
    'ˇ': ' ̌',
    '\xB8': ' ̧',
    'ˍ': ' ̱',
    'ˎ': ' ̖',
    'ˏ': ' ̗',
    '\u02D2': ' ̹',
    '\u02D3': ' ̜',
    '\u02D4': ' ̝',
    '\u02D5': ' ̞',
    '\u02D6': ' ̟',
    '\u02D7': ' ̠',
    '\u02DB': ' ̨',
    '\u02DD': ' ̋',
    '\u02DF': ' ̽',
    'ˬ': ' ̬',
    '\u02ED': ' ̿',
    '\u02F3': ' ̥',
    '\u02F7': ' ̰',
    '\u1FED': ' ̈̀',
    '\u1FEE': ' ̈́',
    '\u1FEF': ' ̀',
    '\u1FFD': ' ́',
    '\u1FFE': ' ̔',
    '\u1FBD': ' ̓',
    'ι': ' ͅ',
    '\u1FBF': ' ̓',
    '\u1FC0': ' ͂',
    '\u1FC1': ' ̈͂',
    '\u0384': ' ́',
    '\u0385': ' ̈́',
    'ͺ': ' ͅ',
    '\u219A': '',
    '\u219B': '',
    '\u21AE': ''
};
exports.apply = r1_apply = function _r1_t12() {
    var r250_j, _r250_t29;
    var _r250_t6 = this;
    var r250_xn$capture$2Lrc = _r250_t6;
    var _r250_t0 = r250_xn$capture$2Lrc;
    var r250_metrics = _r250_t0.metrics;
    var r250_xn$NamedParameterPair$2Lrc9b = _r250_t0['$NamedParameterPair$'];
    var r250_xn$donothing$2Lrc0b = _r250_t0['$donothing$'];
    var r250_para = _r250_t0.para;
    var r250_recursive = _r250_t0.recursive;
    var r250_recursiveCodes = _r250_t0.recursiveCodes;
    var r250_variantSelector = _r250_t0.variantSelector;
    var r250_font = _r250_t0.font;
    var r250_glyphs = _r250_t0.glyphs;
    var r250_glyphList = _r250_t0.glyphList;
    var r250_unicodeGlyphs = _r250_t0.unicodeGlyphs;
    var r250_xn$createglyph$7Hrq = _r250_t0['create-glyph'];
    var r250_xn$save$2Lrc5 = _r250_t0['$save$'];
    var r250_xn$saveglyph$5sIl = _r250_t0['save-glyph'];
    var r250_spirofns = _r250_t0.spirofns;
    var r250_markset = _r250_t0.markset;
    var r250_MARK = _r250_t0.MARK;
    var r250_BASE = _r250_t0.BASE;
    var r250_AS_BASE = _r250_t0.AS_BASE;
    var r250_ALSO_METRICS = _r250_t0.ALSO_METRICS;
    var r250_pickHash = _r250_t0.pickHash;
    var r250_dependencyProfile = _r250_t0.dependencyProfile;
    var r250_getDependencyProfile = _r250_t0.getDependencyProfile;
    var r250_buildFont = _r250_t0.buildFont;
    var r250_newtemp = _r250_t0.newtemp;
    var r250_tagged = _r250_t0.tagged;
    var r250_TempFont = _r250_t0.TempFont;
    var r250_includeGlyphPart = _r250_t0.includeGlyphPart;
    var r250_compsiteMarkSet = _r250_t0.compsiteMarkSet;
    var r250_MarksetDiv = _r250_t0.MarksetDiv;
    var r250_DivFrame = _r250_t0.DivFrame;
    var _r250_t1 = r250_metrics;
    var r250_UPM = _r250_t1.UPM;
    var r250_WIDTH = _r250_t1.WIDTH;
    var r250_SB = _r250_t1.SB;
    var r250_CAP = _r250_t1.CAP;
    var r250_XH = _r250_t1.XH;
    var r250_DESCENDER = _r250_t1.DESCENDER;
    var r250_CONTRAST = _r250_t1.CONTRAST;
    var r250_symbolMid = _r250_t1.symbolMid;
    var r250_parenTop = _r250_t1.parenTop;
    var r250_parenBot = _r250_t1.parenBot;
    var r250_operTop = _r250_t1.operTop;
    var r250_operBot = _r250_t1.operBot;
    var r250_tackTop = _r250_t1.tackTop;
    var r250_tackBot = _r250_t1.tackBot;
    var r250_plusTop = _r250_t1.plusTop;
    var r250_plusBot = _r250_t1.plusBot;
    var r250_Italify = _r250_t1.Italify;
    var r250_Upright = _r250_t1.Upright;
    var r250_Scale = _r250_t1.Scale;
    var r250_Translate = _r250_t1.Translate;
    var r250_Rotate = _r250_t1.Rotate;
    var r250_globalTransform = _r250_t1.globalTransform;
    var r250_TANSLANT = _r250_t1.TANSLANT;
    var r250_SINSLANT = _r250_t1.SINSLANT;
    var r250_COSSLANT = _r250_t1.COSSLANT;
    var r250_HVCONTRAST = _r250_t1.HVCONTRAST;
    var r250_UPWARD = _r250_t1.UPWARD;
    var r250_DOWNWARD = _r250_t1.DOWNWARD;
    var r250_RIGHTWARD = _r250_t1.RIGHTWARD;
    var r250_LEFTWARD = _r250_t1.LEFTWARD;
    var r250_Upward = _r250_t1.Upward;
    var r250_Downward = _r250_t1.Downward;
    var r250_Leftward = _r250_t1.Leftward;
    var r250_Rightward = _r250_t1.Rightward;
    var r250_O = _r250_t1.O;
    var r250_OX = _r250_t1.OX;
    var r250_OXHOOK = _r250_t1.OXHOOK;
    var r250_HOOK = _r250_t1.HOOK;
    var r250_AHOOK = _r250_t1.AHOOK;
    var r250_SHOOK = _r250_t1.SHOOK;
    var r250_RHOOK = _r250_t1.RHOOK;
    var r250_JHOOK = _r250_t1.JHOOK;
    var r250_FHOOK = _r250_t1.FHOOK;
    var r250_HOOKX = _r250_t1.HOOKX;
    var r250_SMOOTH = _r250_t1.SMOOTH;
    var r250_SMALLSMOOTH = _r250_t1.SMALLSMOOTH;
    var r250_STROKE = _r250_t1.STROKE;
    var r250_DOTSIZE = _r250_t1.DOTSIZE;
    var r250_PERIODSIZE = _r250_t1.PERIODSIZE;
    var r250_BARPOS = _r250_t1.BARPOS;
    var r250_GBARPOS = _r250_t1.GBARPOS;
    var r250_PBARPOS = _r250_t1.PBARPOS;
    var r250_EBARPOS = _r250_t1.EBARPOS;
    var r250_OVERLAYPOS = _r250_t1.OVERLAYPOS;
    var r250_FIVEBARPOS = _r250_t1.FIVEBARPOS;
    var r250_LONGJUT = _r250_t1.LONGJUT;
    var r250_JUT = _r250_t1.JUT;
    var r250_VJUT = _r250_t1.VJUT;
    var r250_ACCENT = _r250_t1.ACCENT;
    var r250_ACCENTX = _r250_t1.ACCENTX;
    var r250_CTHIN = _r250_t1.CTHIN;
    var r250_CTHINB = _r250_t1.CTHINB;
    var r250_SLAB = _r250_t1.SLAB;
    var r250_TAILADJX = _r250_t1.TAILADJX;
    var r250_TAILADJY = _r250_t1.TAILADJY;
    var r250_LBALANCE = _r250_t1.LBALANCE;
    var r250_IBALANCE = _r250_t1.IBALANCE;
    var r250_LBALANCE2 = _r250_t1.LBALANCE2;
    var r250_IBALANCE2 = _r250_t1.IBALANCE2;
    var r250_JBALANCE = _r250_t1.JBALANCE;
    var r250_JBALANCE2 = _r250_t1.JBALANCE2;
    var r250_TBALANCE = _r250_t1.TBALANCE;
    var r250_TBALANCE2 = _r250_t1.TBALANCE2;
    var r250_RBALANCE = _r250_t1.RBALANCE;
    var r250_RBALANCE2 = _r250_t1.RBALANCE2;
    var r250_FBALANCE = _r250_t1.FBALANCE;
    var r250_ONEBALANCE = _r250_t1.ONEBALANCE;
    var r250_FULLWIDTH = _r250_t1.FULLWIDTH;
    var r250_FULLWIDTH1 = _r250_t1.FULLWIDTH1;
    var r250_FULLWIDTH2 = _r250_t1.FULLWIDTH2;
    var r250_FULLWIDTH3 = _r250_t1.FULLWIDTH3;
    var r250_OXE = _r250_t1.OXE;
    var r250_ESS = _r250_t1.ESS;
    var r250_ESSQUESTION = _r250_t1.ESSQUESTION;
    var r250_XO = _r250_t1.XO;
    var r250_CAPO = _r250_t1.CAPO;
    var r250_HALFSTROKE = _r250_t1.HALFSTROKE;
    var r250_RIGHTSB = _r250_t1.RIGHTSB;
    var r250_FWRSB = _r250_t1.FWRSB;
    var r250_MIDDLE = _r250_t1.MIDDLE;
    var r250_FWMIDDLE = _r250_t1.FWMIDDLE;
    var r250_CAPMIDDLE = _r250_t1.CAPMIDDLE;
    var r250_CAP_SMOOTH = _r250_t1.CAP_SMOOTH;
    var r250_DOTRADIUS = _r250_t1.DOTRADIUS;
    var r250_PERIODRADIUS = _r250_t1.PERIODRADIUS;
    var r250_SIDEJUT = _r250_t1.SIDEJUT;
    var r250_SMOOTHA = _r250_t1.SMOOTHA;
    var r250_SMOOTHB = _r250_t1.SMOOTHB;
    var r250_SMALLSMOOTHA = _r250_t1.SMALLSMOOTHA;
    var r250_SMALLSMOOTHB = _r250_t1.SMALLSMOOTHB;
    var r250_CORRECTION_OMIDX = _r250_t1.CORRECTION_OMIDX;
    var r250_CORRECTION_OMIDS = _r250_t1.CORRECTION_OMIDS;
    var r250_WHITENESS = _r250_t1.WHITENESS;
    var r250_adviceBlackness = _r250_t1.adviceBlackness;
    var r250_adviceBlackness2 = _r250_t1.adviceBlackness2;
    var r250_MVERTSTROKE = _r250_t1.MVERTSTROKE;
    var r250_MVERTSTROKE_D = _r250_t1.MVERTSTROKE_D;
    var r250_OVERLAYSTROKE = _r250_t1.OVERLAYSTROKE;
    var r250_OPERATORSTROKE = _r250_t1.OPERATORSTROKE;
    var r250_GEOMETRYSTROKE = _r250_t1.GEOMETRYSTROKE;
    var r250_SHOULDERFINE = _r250_t1.SHOULDERFINE;
    var r250_SUPERNESS = _r250_t1.SUPERNESS;
    var r250_superxy = _r250_t1.superxy;
    var r250_adviceSSmooth = _r250_t1.adviceSSmooth;
    var r250_adviceGlottalStopSmooth = _r250_t1.adviceGlottalStopSmooth;
    var r250_shoulderMidSlope = _r250_t1.shoulderMidSlope;
    var _r250_t2 = r250_spirofns;
    var r250_g4 = _r250_t2.g4;
    var r250_g2 = _r250_t2.g2;
    var r250_corner = _r250_t2.corner;
    var r250_flat = _r250_t2.flat;
    var r250_curl = _r250_t2.curl;
    var r250_close = _r250_t2.close;
    var r250_end = _r250_t2.end;
    var r250_straight = _r250_t2.straight;
    var r250_widths = _r250_t2.widths;
    var r250_xn$disablegizmo$3qIs = _r250_t2['disable-gizmo'];
    var r250_xn$disablecontrast$3qIs = _r250_t2['disable-contrast'];
    var r250_heading = _r250_t2.heading;
    var r250_unimportant = _r250_t2.unimportant;
    var r250_important = _r250_t2.important;
    var r250_alsothru = _r250_t2.alsothru;
    var r250_alsothruthem = _r250_t2.alsothruthem;
    var r250_bezcontrols = _r250_t2.bezcontrols;
    var r250_quadcontrols = _r250_t2.quadcontrols;
    var r250_archv = _r250_t2.archv;
    var r250_arcvh = _r250_t2.arcvh;
    var r250_complexThru = _r250_t2.complexThru;
    var r250_dispiro = _r250_t2.dispiro;
    var r250_xn$spirooutline$1aao = _r250_t2['spiro-outline'];
    var r250_union = _r250_t2.union;
    var r250_intersection = _r250_t2.intersection;
    var r250_difference = _r250_t2.difference;
    var _r250_t3 = r250_xn$capture$2Lrc.commonShapes;
    var r250_queryFeatureSelector = _r250_t3.queryFeatureSelector;
    var r250_xn$selectvariant$7Hrq = _r250_t3['select-variant'];
    var r250_xn$italicvariant$7Hrq = _r250_t3['italic-variant'];
    var r250_alias = _r250_t3.alias;
    var r250_composite = _r250_t3.composite;
    var r250_xn$intounicode$5sIl = _r250_t3['into-unicode'];
    var r250_turned = _r250_t3.turned;
    var r250_hcombine = _r250_t3.hcombine;
    var r250_vcombine = _r250_t3.vcombine;
    var r250_dual = _r250_t3.dual;
    var r250_vdual = _r250_t3.vdual;
    var r250_fwl = _r250_t3.fwl;
    var r250_fwr = _r250_t3.fwr;
    var r250_dwl = _r250_t3.dwl;
    var r250_dwr = _r250_t3.dwr;
    var r250_dwc = _r250_t3.dwc;
    var r250_Rect = _r250_t3.Rect;
    var r250_Ring = _r250_t3.Ring;
    var r250_RingAt = _r250_t3.RingAt;
    var r250_DotAt = _r250_t3.DotAt;
    var r250_CircleRing = _r250_t3.CircleRing;
    var r250_CircleRingAt = _r250_t3.CircleRingAt;
    var r250_CircleDotAt = _r250_t3.CircleDotAt;
    var r250_OShape = _r250_t3.OShape;
    var r250_OShapeOutline = _r250_t3.OShapeOutline;
    var r250_OBarLeftShape = _r250_t3.OBarLeftShape;
    var r250_OBarRightShape = _r250_t3.OBarRightShape;
    var r250_LeftwardTopSerif = _r250_t3.LeftwardTopSerif;
    var r250_LeftwardBottomSerif = _r250_t3.LeftwardBottomSerif;
    var r250_RightwardTopSerif = _r250_t3.RightwardTopSerif;
    var r250_RightwardBottomSerif = _r250_t3.RightwardBottomSerif;
    var r250_CenterTopSerif = _r250_t3.CenterTopSerif;
    var r250_CenterBottomSerif = _r250_t3.CenterBottomSerif;
    var r250_DownwardRightSerif = _r250_t3.DownwardRightSerif;
    var r250_UpwardRightSerif = _r250_t3.UpwardRightSerif;
    var r250_DownwardLeftSerif = _r250_t3.DownwardLeftSerif;
    var r250_UpwardLeftSerif = _r250_t3.UpwardLeftSerif;
    var r250_AIVSerifs = _r250_t3.AIVSerifs;
    var r250_AIHSerifs = _r250_t3.AIHSerifs;
    var r250_AINSerifs = _r250_t3.AINSerifs;
    var r250_AICyrISerifs = _r250_t3.AICyrISerifs;
    var r250_AIMSerifs = _r250_t3.AIMSerifs;
    var r250_halfXStrand = _r250_t3.halfXStrand;
    var r250_xStrand = _r250_t3.xStrand;
    var r250_nShoulderKnots = _r250_t3.nShoulderKnots;
    var r250_nShoulder = _r250_t3.nShoulder;
    var r250_mShoulderSpiro = _r250_t3.mShoulderSpiro;
    var r250_HBar = _r250_t3.HBar;
    var r250_HBarTop = _r250_t3.HBarTop;
    var r250_HBarBottom = _r250_t3.HBarBottom;
    var r250_HOverlayBar = _r250_t3.HOverlayBar;
    var r250_VBar = _r250_t3.VBar;
    var r250_VBarLeft = _r250_t3.VBarLeft;
    var r250_VBarRight = _r250_t3.VBarRight;
    var r250_VerticalHook = _r250_t3.VerticalHook;
    var r250_LegShape = _r250_t3.LegShape;
    var r250_LeftHook = _r250_t3.LeftHook;
    var r250_HooktopLeftBar = _r250_t3.HooktopLeftBar;
    var r250_CurlyTail = _r250_t3.CurlyTail;
    var r250_HCurlyTail = _r250_t3.HCurlyTail;
    var r250_FlatSlashShape = _r250_t3.FlatSlashShape;
    var r250_determineMixR = _r250_t3.determineMixR;
    var r250_HookShape = _r250_t3.HookShape;
    var r250_hookstart = _r250_t3.hookstart;
    var r250_hookend = _r250_t3.hookend;
    var r250_CyrDescender = _r250_t3.CyrDescender;
    var r250_refair = _r250_t3.refair;
    var r250_Fork = _r250_t3.Fork;
    var r250_Miniature = _r250_t3.Miniature;
    var r250_Thinner = _r250_t3.Thinner;
    var r250_Widen = _r250_t3.Widen;
    var r250_FlipAround = _r250_t3.FlipAround;
    var r250_ScaleAround = _r250_t3.ScaleAround;
    var r250_Realign = _r250_t3.Realign;
    var r250_ForceUpright = _r250_t3.ForceUpright;
    var r250_Overlay = _r250_t3.Overlay;
    var r250_diagCor = _r250_t3.diagCor;
    var _r250_t4 = r250_xn$capture$2Lrc.overmarks;
    var r250_markExtend = _r250_t4.markExtend;
    var r250_markHalfStroke = _r250_t4.markHalfStroke;
    var r250_markStress = _r250_t4.markStress;
    var r250_markFine = _r250_t4.markFine;
    var r250_markMiddle = _r250_t4.markMiddle;
    var r250_markDotsRadius = _r250_t4.markDotsRadius;
    var r250_aboveMarkTop = _r250_t4.aboveMarkTop;
    var r250_aboveMarkBot = _r250_t4.aboveMarkBot;
    var r250_aboveMarkMid = _r250_t4.aboveMarkMid;
    var r250_belowMarkBot = _r250_t4.belowMarkBot;
    var r250_belowMarkTop = _r250_t4.belowMarkTop;
    var r250_commaOvershoot = _r250_t4.commaOvershoot;
    var r250_commaOvershoot2 = _r250_t4.commaOvershoot2;
    var r250_commaAboveRadius = _r250_t4.commaAboveRadius;
    var r250_TildeShape = _r250_t4.TildeShape;
    (function () {
        var r252__id, _r252_t0, _r252_t1, _r252_t6;
        if (!r250_recursive)
            r1_suggestGC();
        var r252_isAboveMark = function _r252_t7(r253_mark) {
            return r253_mark && r253_mark.anchors && r253_mark.anchors.above && r253_mark.anchors.above.type === r250_MARK;
        };
        var r252_iotaBelowToLF = function _r252_t8(r254_p, r254_j, r254_parts) {
            return r254_p === r250_glyphs.iotaBelow ? r254_parts[r254_j] = r250_glyphs.iotaLF : void 0;
        };
        var r252_ogonekBelowToTR = function _r252_t9(r255_p, r255_j, r255_parts) {
            return r255_p === r250_glyphs.ogonekBelow ? r255_parts[r255_j] = r250_glyphs.ogonekTR : void 0;
        };
        var r252_subParts = function _r252_t10(r256_parts) {
            var r256_p;
            var r256_hasMarkAbove = false;
            var _r256_t0 = r256_parts;
            var _r256_t1 = _r256_t0.length;
            var _r256_t2 = 0;
            for (; _r256_t2 < _r256_t1; _r256_t2 = _r256_t2 + 1) {
                r256_p = _r256_t0[_r256_t2];
                if (r252_isAboveMark(r256_p))
                    r256_hasMarkAbove = true;
            }
            if ((r256_parts[0] === r250_glyphs.i || r256_parts[0] === r250_glyphs.cyrUkrainiani) && r256_hasMarkAbove)
                r256_parts[0] = r250_glyphs.dotlessi;
            if (r256_parts[0] === r250_glyphs.j && r256_hasMarkAbove)
                r256_parts[0] = r250_glyphs.dotlessj;
            if (r256_parts[0].anchors.lf)
                r256_parts.forEach(r252_iotaBelowToLF);
            if (r256_parts[0].anchors.trailing)
                r256_parts.forEach(r252_ogonekBelowToTR);
            var r256_j = 0;
            for (; r256_j < r256_parts.length; r256_j = r256_j + 1)
                if (r256_parts[r256_j] === r250_glyphs.commaAbove) {
                    if (r256_parts[r256_j + 1] === r250_glyphs.graveAbove) {
                        r256_parts[r256_j] = null;
                        r256_parts[r256_j + 1] = r250_glyphs.psilivaria;
                    } else if (r256_parts[r256_j + 1] === r250_glyphs.acuteAbove) {
                        r256_parts[r256_j] = null;
                        r256_parts[r256_j + 1] = r250_glyphs.psilioxia;
                    } else if (r256_parts[r256_j + 1] === r250_glyphs.perispomeniAbove) {
                        r256_parts[r256_j] = null;
                        r256_parts[r256_j + 1] = r250_glyphs.psiliperispomeni;
                    }
                } else if (r256_parts[r256_j] === r250_glyphs.revCommaAbove)
                    if (r256_parts[r256_j + 1] === r250_glyphs.graveAbove) {
                        r256_parts[r256_j] = null;
                        r256_parts[r256_j + 1] = r250_glyphs.dasiavaria;
                    } else if (r256_parts[r256_j + 1] === r250_glyphs.acuteAbove) {
                        r256_parts[r256_j] = null;
                        r256_parts[r256_j + 1] = r250_glyphs.dasiaoxia;
                    } else if (r256_parts[r256_j + 1] === r250_glyphs.perispomeniAbove) {
                        r256_parts[r256_j] = null;
                        r256_parts[r256_j + 1] = r250_glyphs.dasiaperispomeni;
                    }
            return r256_parts;
        };
        var r252_pad = function _r252_t11(r258__s, r258_n) {
            var r258_s = r258__s;
            for (; r258_s.length < r258_n;)
                r258_s = '0' + r258_s;
            return r258_s;
        };
        var r252_nComposed = 0;
        var r252_foundDecompositions = {};
        var r252_decideName = function _r252_t12(r259_namingParts, r259_parts, r259_code) {
            var r259_part, r259_j;
            var r259_baseName = r259_namingParts[0].name;
            var r259_glyphName = r259_baseName;
            var _r259_t0 = r259_namingParts.slice(1)[Symbol.iterator]();
            var _r259_t1 = void 0;
            for (; !(_r259_t1 = _r259_t0.next()).done;) {
                r259_part = _r259_t1.value;
                if (r259_part)
                    r259_glyphName = r259_glyphName + r1_fallback(r259_part.shortName, r259_part.name);
            }
            if (r252_foundDecompositions[r259_glyphName]) {
                r259_j = 2;
                for (; r252_foundDecompositions[r259_glyphName + r259_j];)
                    r259_j = r259_j + 1;
                r259_glyphName = r259_glyphName + r259_j;
            }
            if (r259_glyphName.length > 27)
                r259_glyphName = 'uni' + r252_pad(r259_code.toString(16).toUpperCase(), 4);
            return r259_glyphName;
        };
        var r252_buildForCode = function _r252_t13(r262_code) {
            var r262_str, r262_nfd, r262_parts, r262_allFound, r262_j, r262_part, r262_namingParts, r262_glyphName, _r262_t0, _r262_t1;
            if (!r250_unicodeGlyphs[r262_code]) {
                r262_str = String.fromCharCode(r262_code);
                r262_nfd = r1_fallback(r1_customDecompositions[r262_str], r1_unorm.nfd(r262_str));
                if (r262_nfd.length > 1) {
                    r262_parts = [];
                    r262_allFound = true;
                    _r262_t0 = 0;
                    _r262_t1 = r262_nfd.length;
                    r262_j = _r262_t0;
                    for (; r262_j < _r262_t1; r262_j = r262_j + 1) {
                        r262_part = r250_unicodeGlyphs[r262_nfd.charCodeAt(r262_j)];
                        if (!r262_part)
                            r262_allFound = false;
                        else
                            r262_parts[r262_j] = r250_unicodeGlyphs[r262_nfd.charCodeAt(r262_j)];
                    }
                    return r262_allFound ? (r262_namingParts = r262_parts.slice(0), r262_parts = r252_subParts(r262_parts), r262_glyphName = r252_decideName(r262_namingParts, r262_parts, r262_code), r252_foundDecompositions[r262_glyphName] = [
                        r262_glyphName,
                        r262_code,
                        r262_parts
                    ]) : void 0;
                } else
                    return void 0;
            } else
                return void 0;
        };
        if (r250_recursiveCodes)
            r250_recursiveCodes.forEach(r252_buildForCode);
        else {
            _r252_t0 = 0;
            _r252_t1 = 65535;
            r252_code = _r252_t0;
            for (; r252_code < _r252_t1; r252_code = r252_code + 1)
                r252_buildForCode(r252_code);
        }
        r1_suggestGC();
        var _r252_t2 = [];
        var r252_glyphName = _r252_t2[0];
        var r252_code = _r252_t2[1];
        var r252_parts = _r252_t2[2];
        var r252_construction = function _r252_t14() {
            var r266_part;
            var _r266_t3 = this;
            var r266_currentGlyph = _r266_t3;
            if (r252_code) {
                r266_currentGlyph['assign-unicode'](r252_code);
                r250_unicodeGlyphs[r266_currentGlyph.unicode[r266_currentGlyph.unicode.length - 1]] = r266_currentGlyph;
            }
            r266_currentGlyph.include(r252_parts[0], r250_AS_BASE);
            r266_currentGlyph['set-width'](r252_parts[0].advanceWidth);
            var r266_names = [r252_parts[0].name];
            var _r266_t0 = r252_parts.slice(1);
            var _r266_t1 = _r266_t0.length;
            var _r266_t2 = 0;
            for (; _r266_t2 < _r266_t1; _r266_t2 = _r266_t2 + 1) {
                r266_part = _r266_t0[_r266_t2];
                if (r266_part) {
                    r266_currentGlyph.include(r266_part);
                    r266_names.push(r266_part.name);
                    if (r266_part.name === 'rtailBR')
                        r266_currentGlyph['eject-contour']('serifRB');
                }
            }
            r252_nComposed = r252_nComposed + 1;
            return void 0;
        };
        var r252_cfv = function _r252_t15(r273_glyphName, r273__pa) {
            var r273_h, r273_feature, r273_variant, r273_variantRoot, _r273_t0, _r273_t1, _r273_t2;
            if (!r250_recursive && r273__pa[0].featureSelector) {
                r273_h = {};
                _r273_t0 = Object.keys(r273__pa[0].featureSelector);
                _r273_t1 = _r273_t0.length;
                _r273_t2 = 0;
                for (; _r273_t2 < _r273_t1; _r273_t2 = _r273_t2 + 1) {
                    r273_feature = _r273_t0[_r273_t2];
                    r273_variant = r273__pa[0].featureSelector[r273_feature];
                    r273_variantRoot = r250_glyphs[r273_variant];
                    if (r273_variantRoot) {
                        r252_parts = [r273_variantRoot].concat(r273__pa.slice(1));
                        r252_code = null;
                        r250_xn$createglyph$7Hrq(r273_glyphName + '.' + r273_feature, r252_construction);
                        r273_h[r273_feature] = r273_glyphName + '.' + r273_feature;
                    }
                }
                return r250_glyphs[r273_glyphName] ? r250_glyphs[r273_glyphName].featureSelector = r273_h : void 0;
            } else
                return void 0;
        };
        var _r252_t3 = Object.keys(r252_foundDecompositions);
        var _r252_t4 = _r252_t3.length;
        var _r252_t5 = 0;
        for (; _r252_t5 < _r252_t4; _r252_t5 = _r252_t5 + 1) {
            r252__id = _r252_t3[_r252_t5];
            _r252_t6 = r252_foundDecompositions[r252__id];
            r252_glyphName = _r252_t6[0];
            r252_code = _r252_t6[1];
            r252_parts = _r252_t6[2];
            r250_xn$createglyph$7Hrq(r252_glyphName, r252_construction);
            r252_cfv(r252_glyphName, r252_parts);
        }
        return r1_suggestGC();
    }());
    var r250_suggestName = function _r250_t10(r278__name) {
        var r278_j;
        var r278_name = r278__name;
        if (r250_glyphs[r278_name]) {
            r278_j = 2;
            for (; r250_glyphs[r278_name + r278_j];)
                r278_j = r278_j + 1;
            r278_name = r278_name + r278_j;
        }
        return r278_name;
    };
    var r250_circleInner = function _r250_t11(r279_dscale, r279_miniatureFont, r279_unicode, r279_parts, r279_width, r279_bal, r279_baly) {
        var r279_gni = '.ci.' + r279_parts.join('_') + '.' + [
            r279_dscale,
            r279_width,
            r279_bal,
            r279_baly
        ].join('.');
        if (r250_glyphs[r279_gni])
            return r250_glyphs[r279_gni];
        var r279_lg = r250_xn$createglyph$7Hrq(r279_gni, function _r279_t2() {
            var r281_glyphid, r281_g;
            var _r281_t3 = this;
            var r281_currentGlyph = _r281_t3;
            var r281_tw = 0;
            var _r281_t0 = r279_parts;
            var _r281_t1 = _r281_t0.length;
            var _r281_t2 = 0;
            for (; _r281_t2 < _r281_t1; _r281_t2 = _r281_t2 + 1) {
                r281_glyphid = _r281_t0[_r281_t2];
                r281_g = r279_miniatureFont[r281_glyphid];
                r281_currentGlyph.include(r281_g);
                r281_currentGlyph['apply-transform'](r250_Translate(-r281_g.advanceWidth, 0));
                r281_tw = r281_tw + r281_g.advanceWidth;
            }
            r281_currentGlyph['apply-transform'](r250_Translate(r281_tw, 0));
            r281_currentGlyph['apply-transform'](r250_Upright());
            r281_currentGlyph['apply-transform'](r250_Scale(Math.min(1, r279_width / r281_tw), 1));
            r281_tw = Math.min(r279_width, r281_tw);
            var r281_shift = 0;
            if (r281_g.anchors.above && r281_g.anchors.below)
                if (r279_bal)
                    r281_shift = r250_CAP / 2 - r1_mix(r279_baly, r1_mix(r281_g.anchors.above.y, r281_g.anchors.below.y, 0.5), r279_bal);
                else
                    r281_shift = r250_CAP / 2 - r1_mix(r281_g.anchors.above.y, r281_g.anchors.below.y, 0.5);
            r281_currentGlyph['apply-transform'](r250_Translate(-r281_tw / 2, -r250_CAP / 2 + r281_shift));
            r281_currentGlyph['apply-transform'](r250_Scale(r279_dscale));
            r281_currentGlyph['apply-transform'](r250_Translate(r279_width / 2, r250_CAP / 2 * r279_dscale));
            r281_currentGlyph['apply-transform'](r250_Italify());
            r281_currentGlyph.cmpPriority = 12;
            r250_refair(_r281_t3);
            r281_currentGlyph['set-width'](0);
            return void 0;
        });
        return r279_lg;
    };
    var r250_circleDimens = function _r250_t12(r294_dscale, r294_w, r294_m) {
        var r294_width = r1_fallback(r294_w, r250_WIDTH);
        r294_dscale = r1_linreg(r250_WIDTH, 0.55, r250_UPM, 0.6, r294_width);
        var r294_spatt = r1_linreg(r250_WIDTH, 0.175, r250_UPM, 0.27, r294_width);
        var r294_sw0 = r250_adviceBlackness(5);
        var r294_sw = Math.max(r294_sw0, r1_fallback(r294_m, 0));
        var r294_top = r250_CAP * r294_dscale + Math.max(r250_CAP * r294_spatt, r294_sw * 3);
        var r294_bot = 0 - Math.max(r250_CAP * r294_spatt, r294_sw * 3);
        var r294_left = Math.max(r250_SB + r250_O * 3, Math.min(r294_width / 2 - (r294_top - r294_bot) / 2, r294_width / 2 - r250_CAP / 2 * r294_dscale - r294_sw * 2.5));
        var r294_right = Math.min(r294_width - r250_SB - r250_O * 3, Math.max(r294_width / 2 + (r294_top - r294_bot) / 2, r294_width / 2 + r250_CAP / 2 * r294_dscale + r294_sw * 2.5));
        return {
            'width': r294_width,
            'dscale': r294_dscale,
            'sw0': r294_sw0,
            'sw': r294_sw,
            'top': r294_top,
            'bot': r294_bot,
            'left': r294_left,
            'right': r294_right
        };
    };
    var r250_circledMiniatureFont = function _r250_t13(r295_records) {
        var r295_pendingGlyphs = r295_records.map(function _r295_t2(r296_record) {
            return r296_record[1];
        });
        return r250_Miniature(new r250_xn$NamedParameterPair$2Lrc9b('glyphs', r295_pendingGlyphs.reduce(function _r295_t3(r298_a, r298_b) {
            return r298_a.concat(r298_b);
        })), new r250_xn$NamedParameterPair$2Lrc9b('crowd', 5), new r250_xn$NamedParameterPair$2Lrc9b('scale', 0.65), new r250_xn$NamedParameterPair$2Lrc9b('unfair', true));
    };
    var r250_createCircledGlyphs = function _r250_t14(r302_records) {
        var r302_miniatureFont, r302_unicode, r302_parts, r302_w, r302_bal, r302_baly, _r302_t0, _r302_t1, _r302_t2, _r302_t3, _r302_t7, _r302_t8;
        if (!r250_recursive) {
            r302_miniatureFont = r250_circledMiniatureFont(r302_records);
            _r302_t0 = r302_records;
            _r302_t1 = _r302_t0.length;
            _r302_t2 = 0;
            _r302_t7 = _r302_t2 < _r302_t1;
            for (; _r302_t7; _r302_t7 = _r302_t2 < _r302_t1) {
                _r302_t3 = _r302_t0[_r302_t2];
                r302_unicode = _r302_t3[0];
                r302_parts = _r302_t3[1];
                r302_w = _r302_t3[2];
                r302_bal = _r302_t3[3];
                r302_baly = _r302_t3[4];
                (function () {
                    var _r305_t0 = r250_circleDimens(r305_dscale, r302_w);
                    var r305_width = _r305_t0.width;
                    var r305_dscale = _r305_t0.dscale;
                    var r305_sw = _r305_t0.sw;
                    var r305_top = _r305_t0.top;
                    var r305_bot = _r305_t0.bot;
                    var r305_left = _r305_t0.left;
                    var r305_right = _r305_t0.right;
                    return r250_xn$createglyph$7Hrq(r250_suggestName('circle-' + r302_parts.join('_')), function _r305_t1() {
                        var _r307_t0 = this;
                        var r307_currentGlyph = _r307_t0;
                        r307_currentGlyph['set-width'](r305_width);
                        if (r302_unicode) {
                            r307_currentGlyph['assign-unicode'](r302_unicode);
                            r250_unicodeGlyphs[r307_currentGlyph.unicode[r307_currentGlyph.unicode.length - 1]] = r307_currentGlyph;
                        }
                        r307_currentGlyph.include(r250_circleInner(r305_dscale, r302_miniatureFont, r302_unicode, r302_parts, r305_width, r302_bal, r302_baly));
                        r307_currentGlyph.include(r250_OShape(r305_top, r305_bot, r305_left, r305_right, r305_sw, r250_SMALLSMOOTHA * r305_width / r250_WIDTH, r250_SMALLSMOOTHB * r305_width / r250_WIDTH));
                        r307_currentGlyph['apply-transform'](r250_Upright());
                        r307_currentGlyph['apply-transform'](r250_Translate(0, r250_symbolMid - r250_CAP * r305_dscale / 2));
                        r307_currentGlyph['apply-transform'](r250_Italify());
                        return void 0;
                    });
                }());
                _r302_t8 = _r302_t2 = _r302_t2 + 1;
            }
            return _r302_t8;
        } else
            return void 0;
    };
    var r250_createBoxedGlyphs = function _r250_t15(r315_records) {
        var r315_miniatureFont, r315_unicode, r315_parts, r315_w, r315_bal, r315_baly, _r315_t0, _r315_t1, _r315_t2, _r315_t3, _r315_t7, _r315_t8;
        if (!r250_recursive) {
            r315_miniatureFont = r250_circledMiniatureFont(r315_records);
            _r315_t0 = r315_records;
            _r315_t1 = _r315_t0.length;
            _r315_t2 = 0;
            _r315_t7 = _r315_t2 < _r315_t1;
            for (; _r315_t7; _r315_t7 = _r315_t2 < _r315_t1) {
                _r315_t3 = _r315_t0[_r315_t2];
                r315_unicode = _r315_t3[0];
                r315_parts = _r315_t3[1];
                r315_w = _r315_t3[2];
                r315_bal = _r315_t3[3];
                r315_baly = _r315_t3[4];
                (function () {
                    var _r318_t0 = r250_circleDimens(r318_dscale, r315_w);
                    var r318_width = _r318_t0.width;
                    var r318_dscale = _r318_t0.dscale;
                    var r318_sw = _r318_t0.sw;
                    var r318_top = _r318_t0.top;
                    var r318_bot = _r318_t0.bot;
                    var r318_left = _r318_t0.left;
                    var r318_right = _r318_t0.right;
                    return r250_xn$createglyph$7Hrq(r250_suggestName('boxed-' + r315_parts.join('_')), function _r318_t1() {
                        var _r320_t0 = this;
                        var r320_currentGlyph = _r320_t0;
                        r320_currentGlyph['set-width'](r318_width);
                        if (r315_unicode) {
                            r320_currentGlyph['assign-unicode'](r315_unicode);
                            r250_unicodeGlyphs[r320_currentGlyph.unicode[r320_currentGlyph.unicode.length - 1]] = r320_currentGlyph;
                        }
                        r320_currentGlyph.include(r250_circleInner(r318_dscale, r315_miniatureFont, r315_unicode, r315_parts, r318_width, r315_bal, r315_baly));
                        r320_currentGlyph.include(r250_union(r250_HBarTop(r318_left, r318_right, r318_top, r318_sw), r250_HBarBottom(r318_left, r318_right, r318_bot, r318_sw), r250_VBarLeft(r318_left, r318_bot, r318_top, r318_sw), r250_VBarRight(r318_right, r318_bot, r318_top, r318_sw)));
                        r320_currentGlyph['apply-transform'](r250_Upright());
                        r320_currentGlyph['apply-transform'](r250_Translate(0, r250_symbolMid - r250_CAP * r318_dscale / 2));
                        r320_currentGlyph['apply-transform'](r250_Italify());
                        return void 0;
                    });
                }());
                _r315_t8 = _r315_t2 = _r315_t2 + 1;
            }
            return _r315_t8;
        } else
            return void 0;
    };
    var r250_createInsetCircledGlyphs = function _r250_t16(r328_records) {
        var r328_miniatureFont, r328_unicode, r328_parts, r328_w, r328_bal, r328_baly, _r328_t0, _r328_t1, _r328_t2, _r328_t3, _r328_t7, _r328_t8;
        if (!r250_recursive) {
            r328_miniatureFont = r250_circledMiniatureFont(r328_records);
            _r328_t0 = r328_records;
            _r328_t1 = _r328_t0.length;
            _r328_t2 = 0;
            _r328_t7 = _r328_t2 < _r328_t1;
            for (; _r328_t7; _r328_t7 = _r328_t2 < _r328_t1) {
                _r328_t3 = _r328_t0[_r328_t2];
                r328_unicode = _r328_t3[0];
                r328_parts = _r328_t3[1];
                r328_w = _r328_t3[2];
                r328_bal = _r328_t3[3];
                r328_baly = _r328_t3[4];
                (function () {
                    var _r331_t0 = r250_circleDimens(r331_dscale, r328_w);
                    var r331_width = _r331_t0.width;
                    var r331_dscale = _r331_t0.dscale;
                    var r331_sw = _r331_t0.sw;
                    var r331_top = _r331_t0.top;
                    var r331_bot = _r331_t0.bot;
                    var r331_left = _r331_t0.left;
                    var r331_right = _r331_t0.right;
                    return r250_xn$createglyph$7Hrq(r250_suggestName('inset-circle-' + r328_parts.join('_')), function _r331_t1() {
                        var _r333_t0 = this;
                        var r333_currentGlyph = _r333_t0;
                        r333_currentGlyph['set-width'](r331_width);
                        if (r328_unicode) {
                            r333_currentGlyph['assign-unicode'](r328_unicode);
                            r250_unicodeGlyphs[r333_currentGlyph.unicode[r333_currentGlyph.unicode.length - 1]] = r333_currentGlyph;
                        }
                        r333_currentGlyph.include(r250_difference(r250_OShapeOutline(r331_top, r331_bot, r331_left, r331_right, r331_sw, r250_SMALLSMOOTHA * r331_width / r250_WIDTH, r250_SMALLSMOOTHB * r331_width / r250_WIDTH), r250_circleInner(r331_dscale, r328_miniatureFont, r328_unicode, r328_parts, r331_width, r328_bal, r328_baly)));
                        r333_currentGlyph['apply-transform'](r250_Upright());
                        r333_currentGlyph['apply-transform'](r250_Translate(0, r250_symbolMid - r250_CAP * r331_dscale / 2));
                        r333_currentGlyph['apply-transform'](r250_Italify());
                        return void 0;
                    });
                }());
                _r328_t8 = _r328_t2 = _r328_t2 + 1;
            }
            return _r328_t8;
        } else
            return void 0;
    };
    var r250_createInsetBoxedGlyphs = function _r250_t17(r340_records) {
        var r340_miniatureFont, r340_unicode, r340_parts, r340_w, r340_bal, r340_baly, _r340_t0, _r340_t1, _r340_t2, _r340_t3, _r340_t7, _r340_t8;
        if (!r250_recursive) {
            r340_miniatureFont = r250_circledMiniatureFont(r340_records);
            _r340_t0 = r340_records;
            _r340_t1 = _r340_t0.length;
            _r340_t2 = 0;
            _r340_t7 = _r340_t2 < _r340_t1;
            for (; _r340_t7; _r340_t7 = _r340_t2 < _r340_t1) {
                _r340_t3 = _r340_t0[_r340_t2];
                r340_unicode = _r340_t3[0];
                r340_parts = _r340_t3[1];
                r340_w = _r340_t3[2];
                r340_bal = _r340_t3[3];
                r340_baly = _r340_t3[4];
                (function () {
                    var _r343_t0 = r250_circleDimens(r343_dscale, r340_w);
                    var r343_width = _r343_t0.width;
                    var r343_dscale = _r343_t0.dscale;
                    var r343_sw = _r343_t0.sw;
                    var r343_top = _r343_t0.top;
                    var r343_bot = _r343_t0.bot;
                    var r343_left = _r343_t0.left;
                    var r343_right = _r343_t0.right;
                    return r250_xn$createglyph$7Hrq(r250_suggestName('inset-boxed-' + r340_parts.join('_')), function _r343_t1() {
                        var _r345_t0 = this;
                        var r345_currentGlyph = _r345_t0;
                        r345_currentGlyph['set-width'](r343_width);
                        if (r340_unicode) {
                            r345_currentGlyph['assign-unicode'](r340_unicode);
                            r250_unicodeGlyphs[r345_currentGlyph.unicode[r345_currentGlyph.unicode.length - 1]] = r345_currentGlyph;
                        }
                        r345_currentGlyph.include(r250_difference(r250_xn$spirooutline$1aao(r250_corner(r343_left, r343_top), r250_corner(r343_left, r343_bot), r250_corner(r343_right, r343_bot), r250_corner(r343_right, r343_top), r250_close()), r250_circleInner(r343_dscale, r340_miniatureFont, r340_unicode, r340_parts, r343_width, r340_bal, r340_baly)));
                        r345_currentGlyph['apply-transform'](r250_Upright());
                        r345_currentGlyph['apply-transform'](r250_Translate(0, r250_symbolMid - r250_CAP * r343_dscale / 2));
                        r345_currentGlyph['apply-transform'](r250_Italify());
                        return void 0;
                    });
                }());
                _r340_t8 = _r340_t2 = _r340_t2 + 1;
            }
            return _r340_t8;
        } else
            return void 0;
    };
    var r250_createDoubleCircledGlyphs = function _r250_t18(r352_records) {
        var r352_miniatureFont, r352_unicode, r352_parts, r352_w, r352_bal, r352_baly, _r352_t0, _r352_t1, _r352_t2, _r352_t3, _r352_t7, _r352_t8;
        if (!r250_recursive) {
            r352_miniatureFont = r250_circledMiniatureFont(r352_records);
            _r352_t0 = r352_records;
            _r352_t1 = _r352_t0.length;
            _r352_t2 = 0;
            _r352_t7 = _r352_t2 < _r352_t1;
            for (; _r352_t7; _r352_t7 = _r352_t2 < _r352_t1) {
                _r352_t3 = _r352_t0[_r352_t2];
                r352_unicode = _r352_t3[0];
                r352_parts = _r352_t3[1];
                r352_w = _r352_t3[2];
                r352_bal = _r352_t3[3];
                r352_baly = _r352_t3[4];
                (function () {
                    var _r355_t0 = r250_circleDimens(r355_dscale, r352_w, r352_w * 0.08);
                    var r355_width = _r355_t0.width;
                    var r355_dscale = _r355_t0.dscale;
                    var r355_sw0 = _r355_t0.sw0;
                    var r355_sw = _r355_t0.sw;
                    var r355_top = _r355_t0.top;
                    var r355_bot = _r355_t0.bot;
                    var r355_left = _r355_t0.left;
                    var r355_right = _r355_t0.right;
                    var r355_sw1 = Math.min(r355_sw0, r355_sw / 3);
                    return r250_xn$createglyph$7Hrq(r250_suggestName('double-circle-' + r352_parts.join('_')), function _r355_t1() {
                        var _r357_t0 = this;
                        var r357_currentGlyph = _r357_t0;
                        r357_currentGlyph['set-width'](r355_width);
                        if (r352_unicode) {
                            r357_currentGlyph['assign-unicode'](r352_unicode);
                            r250_unicodeGlyphs[r357_currentGlyph.unicode[r357_currentGlyph.unicode.length - 1]] = r357_currentGlyph;
                        }
                        r357_currentGlyph.include(r250_circleInner(r355_dscale, r352_miniatureFont, r352_unicode, r352_parts, r355_width, r352_bal, r352_baly));
                        r357_currentGlyph.include(r250_OShape(r355_top, r355_bot, r355_left, r355_right, r355_sw1, r250_SMALLSMOOTHA * r355_width / r250_WIDTH, r250_SMALLSMOOTHB * r355_width / r250_WIDTH));
                        r357_currentGlyph.include(r250_OShape(r355_top - r355_sw + r355_sw1, r355_bot + r355_sw - r355_sw1, r355_left + r355_sw * r250_HVCONTRAST - r355_sw1 * r250_HVCONTRAST, r355_right - r355_sw * r250_HVCONTRAST + r355_sw1 * r250_HVCONTRAST, r355_sw1, r250_SMALLSMOOTHA * r355_width / r250_WIDTH, r250_SMALLSMOOTHB * r355_width / r250_WIDTH));
                        r357_currentGlyph['apply-transform'](r250_Upright());
                        r357_currentGlyph['apply-transform'](r250_Translate(0, r250_symbolMid - r250_CAP * r355_dscale / 2));
                        r357_currentGlyph['apply-transform'](r250_Italify());
                        return void 0;
                    });
                }());
                _r352_t8 = _r352_t2 = _r352_t2 + 1;
            }
            return _r352_t8;
        } else
            return void 0;
    };
    var r250_bracedDottdeDimens = function _r250_t19(r366_width) {
        var r366_sw0 = Math.max(r250_WIDTH * 0.075, r250_adviceBlackness(5));
        var r366_sw = Math.min(r250_STROKE, r366_sw0);
        var r366_dscale = r1_linreg(r250_WIDTH, 0.55, r250_UPM, 0.65, r366_width);
        var r366_pscale = r1_linreg(r250_WIDTH, 0.6, r250_UPM, 0.75, r366_width);
        var r366_l = Math.max(r250_SB + r250_O * 3, r366_width / 2 - r250_CAP / 2 * r366_dscale - r366_sw0 * 2.5) + r250_OX;
        var r366_r = r366_width - r366_l;
        return {
            'width': r366_width,
            'sw': r366_sw,
            'dscale': r366_dscale,
            'pscale': r366_pscale,
            'l': r366_l,
            'r': r366_r
        };
    };
    var r250_createBracedGlyphs = function _r250_t20(r367_records) {
        var r367_pendingGlyphs, r367_miniatureFont, r367_unicode, r367_parts, r367_w, r367_bal, r367_baly, _r367_t0, _r367_t1, _r367_t2, _r367_t3, _r367_t9, _r367_t10;
        if (!r250_recursive) {
            r367_pendingGlyphs = r367_records.map(function _r367_t7(r368_record) {
                return r368_record[1];
            });
            r367_miniatureFont = r250_Miniature(new r250_xn$NamedParameterPair$2Lrc9b('glyphs', r367_pendingGlyphs.reduce(function _r367_t8(r370_a, r370_b) {
                return r370_a.concat(r370_b);
            })), new r250_xn$NamedParameterPair$2Lrc9b('crowd', r1_fallback(r250_para.smallCrowd, 3.75)), new r250_xn$NamedParameterPair$2Lrc9b('scale', 0.65), new r250_xn$NamedParameterPair$2Lrc9b('sbscale', 1), new r250_xn$NamedParameterPair$2Lrc9b('unfair', true));
            _r367_t0 = r367_records;
            _r367_t1 = _r367_t0.length;
            _r367_t2 = 0;
            _r367_t9 = _r367_t2 < _r367_t1;
            for (; _r367_t9; _r367_t9 = _r367_t2 < _r367_t1) {
                _r367_t3 = _r367_t0[_r367_t2];
                r367_unicode = _r367_t3[0];
                r367_parts = _r367_t3[1];
                r367_w = _r367_t3[2];
                r367_bal = _r367_t3[3];
                r367_baly = _r367_t3[4];
                (function () {
                    var _r377_t0 = r250_bracedDottdeDimens(r367_w);
                    var r377_width = _r377_t0.width;
                    var r377_dscale = _r377_t0.dscale;
                    var r377_pscale = _r377_t0.pscale;
                    var r377_sw = _r377_t0.sw;
                    var r377_l = _r377_t0.l;
                    var r377_r = _r377_t0.r;
                    var r377_gn = r250_suggestName('braced-' + r367_parts.join('_'));
                    var r377_gni = r250_suggestName('braced-inner-' + r367_parts.join('_') + '.' + r377_dscale);
                    var r377_lg = r250_xn$createglyph$7Hrq(r377_gni, function _r377_t1() {
                        var r379_glyphid, r379_g, r379_gMiddleY;
                        var _r379_t3 = this;
                        var r379_currentGlyph = _r379_t3;
                        var r379_tw = 0;
                        var r379_lastg = null;
                        var _r379_t0 = r367_parts;
                        var _r379_t1 = _r379_t0.length;
                        var _r379_t2 = 0;
                        for (; _r379_t2 < _r379_t1; _r379_t2 = _r379_t2 + 1) {
                            r379_glyphid = _r379_t0[_r379_t2];
                            r379_g = r367_miniatureFont[r379_glyphid];
                            if (r379_tw) {
                                r379_tw = r379_tw - r250_SB;
                                r379_currentGlyph['apply-transform'](r250_Translate(r250_SB, 0));
                            }
                            r379_currentGlyph.include(r379_g);
                            r379_currentGlyph['apply-transform'](r250_Translate(-r379_g.advanceWidth, 0));
                            r379_tw = r379_tw + r379_g.advanceWidth;
                            r379_lastg = r379_g;
                        }
                        r379_currentGlyph['apply-transform'](r250_Translate(r379_tw, 0));
                        r379_currentGlyph['apply-transform'](r250_Upright());
                        r379_currentGlyph['apply-transform'](r250_Scale(Math.min(1, r377_width / r379_tw), 1));
                        r379_tw = Math.min(r377_width, r379_tw);
                        r379_currentGlyph['apply-transform'](r250_Translate(-r379_tw / 2, 0));
                        r379_currentGlyph['apply-transform'](r250_Scale(r377_dscale));
                        var r379_shift = 0;
                        if (r379_lastg.anchors.above && r379_lastg.anchors.below) {
                            r379_gMiddleY = r1_mix(r379_lastg.anchors.above.y, r379_lastg.anchors.below.y, 0.5);
                            if (r367_bal)
                                r379_shift = r250_CAP / 2 - r1_mix(r367_baly, r379_gMiddleY, r367_bal);
                            else
                                r379_shift = r250_CAP / 2 - r379_gMiddleY;
                        }
                        r379_currentGlyph['apply-transform'](r250_Translate(r377_width / 2, r250_symbolMid * r377_pscale - (r250_CAP / 2 - r379_shift) * r377_dscale));
                        r379_currentGlyph['apply-transform'](r250_Italify());
                        r379_currentGlyph.cmpPriority = 11;
                        r250_refair(_r379_t3);
                        r379_currentGlyph['set-width'](0);
                        return void 0;
                    });
                    return function _r377_t2() {
                        var _r394_t0 = this;
                        var r394_currentGlyph = _r394_t0;
                        if (!r394_currentGlyph)
                            return void 0;
                        if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/autobuilds.ptl.1')
                            r250_glyphList.pop();
                        var r394_s = r250_TANSLANT * r250_symbolMid;
                        r394_currentGlyph['set-width'](r377_width);
                        r394_currentGlyph.include(r377_lg);
                        r394_currentGlyph.include(r250_dispiro(r250_widths.lhs(r377_sw), r250_g4(r1_mix(r377_l, r377_r, 0.15) - r394_s, r250_parenTop * r377_pscale), r250_g4.down.mid(r377_l - r394_s + r250_O, r250_symbolMid * r377_pscale), r250_g4(r1_mix(r377_l, r377_r, 0.15) - r394_s, r250_parenBot * r377_pscale)));
                        r394_currentGlyph.include(r250_dispiro(r250_widths.rhs(r377_sw), r250_g4(r1_mix(r377_r, r377_l, 0.15) + r394_s, r250_parenTop * r377_pscale), r250_g4.down.mid(r377_r + r394_s - r250_O, r250_symbolMid * r377_pscale), r250_g4(r1_mix(r377_r, r377_l, 0.15) + r394_s, r250_parenBot * r377_pscale)));
                        r394_currentGlyph.include(r250_Upright());
                        r394_currentGlyph.include(r250_Translate(0, r250_symbolMid - r250_symbolMid * r377_pscale));
                        r394_currentGlyph.include(r250_Italify());
                        r250_xn$save$2Lrc5.call(r394_currentGlyph, r377_gn, r367_unicode);
                        r250_dependencyProfile[r394_currentGlyph.name] = r250_getDependencyProfile(r394_currentGlyph);
                        return r394_currentGlyph;
                    }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/autobuilds.ptl.1', r250_xn$donothing$2Lrc0b));
                }());
                _r367_t10 = _r367_t2 = _r367_t2 + 1;
            }
            return _r367_t10;
        } else
            return void 0;
    };
    var r250_createDottedGlyphs = function _r250_t21(r403_shrink, r403_records) {
        var r403_pendingGlyphs, r403_miniatureFont, r403_unicode, r403_parts, r403_w, _r403_t0, _r403_t1, _r403_t2, _r403_t3, _r403_t9, _r403_t10;
        if (!r250_recursive) {
            r403_pendingGlyphs = r403_records.map(function _r403_t7(r404_record) {
                return r404_record[1];
            });
            r403_miniatureFont = r250_Thinner(r403_pendingGlyphs.reduce(function _r403_t8(r405_a, r405_b) {
                return r405_a.concat(r405_b);
            }).concat(['period']), r250_para.spacing > 1 ? 1 : r403_shrink);
            _r403_t0 = r403_records;
            _r403_t1 = _r403_t0.length;
            _r403_t2 = 0;
            _r403_t9 = _r403_t2 < _r403_t1;
            for (; _r403_t9; _r403_t9 = _r403_t2 < _r403_t1) {
                _r403_t3 = _r403_t0[_r403_t2];
                r403_unicode = _r403_t3[0];
                r403_parts = _r403_t3[1];
                r403_w = _r403_t3[2];
                (function () {
                    var r408_gn = r250_suggestName('dotted-' + r403_parts.join('_'));
                    var _r408_t0 = r250_bracedDottdeDimens(r403_w);
                    var r408_width = _r408_t0.width;
                    var r408_dscale = _r408_t0.dscale;
                    var r408_pscale = _r408_t0.pscale;
                    var r408_sw = _r408_t0.sw;
                    var r408_l = _r408_t0.l;
                    var r408_r = _r408_t0.r;
                    return function _r408_t1() {
                        var r410_glyphid, r410_g;
                        var _r410_t3 = this;
                        var r410_currentGlyph = _r410_t3;
                        if (!r410_currentGlyph)
                            return void 0;
                        if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/autobuilds.ptl.2')
                            r250_glyphList.pop();
                        r410_currentGlyph['set-width'](r408_width);
                        var r410_tw = 0;
                        var _r410_t0 = r403_parts.concat(['period']);
                        var _r410_t1 = _r410_t0.length;
                        var _r410_t2 = 0;
                        for (; _r410_t2 < _r410_t1; _r410_t2 = _r410_t2 + 1) {
                            r410_glyphid = _r410_t0[_r410_t2];
                            r410_g = r403_miniatureFont[r410_glyphid];
                            if (r410_tw) {
                                r410_tw = r410_tw - r250_SB;
                                r410_currentGlyph['apply-transform'](r250_Translate(r250_SB, 0));
                            }
                            r410_currentGlyph.include(r410_g);
                            r410_currentGlyph['apply-transform'](r250_Translate(-r410_g.advanceWidth, 0));
                            r410_tw = r410_tw + r410_g.advanceWidth;
                        }
                        r410_currentGlyph['apply-transform'](r250_Translate(r410_tw, 0));
                        r410_tw = r410_tw - r250_SB;
                        r410_currentGlyph['apply-transform'](r250_Upright());
                        if (r410_tw > r408_width)
                            r410_currentGlyph['apply-transform'](r250_Scale(Math.min(1, r408_width / r410_tw), 1));
                        else
                            r410_currentGlyph['apply-transform'](r250_Translate(r408_width / 2 - r410_tw / 2, 0));
                        r410_currentGlyph['apply-transform'](r250_Italify());
                        r410_currentGlyph.cmpPriority = 11;
                        r250_xn$save$2Lrc5.call(r410_currentGlyph, r408_gn, r403_unicode);
                        r250_dependencyProfile[r410_currentGlyph.name] = r250_getDependencyProfile(r410_currentGlyph);
                        return r410_currentGlyph;
                    }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/autobuilds.ptl.2', r250_xn$donothing$2Lrc0b));
                }());
                _r403_t10 = _r403_t2 = _r403_t2 + 1;
            }
            return _r403_t10;
        } else
            return void 0;
    };
    var r250_createSuperscripts = function _r250_t22(r423_records) {
        var r423_pendingGlyphs, r423_miniatureFont, r423_unicode, r423_glyphid, r423_pri, _r423_t0, _r423_t1, _r423_t2, _r423_t3, _r423_t8, _r423_t9;
        if (!r250_recursive) {
            r423_pendingGlyphs = r423_records.map(function _r423_t7(r424_record) {
                return r424_record[1];
            });
            r423_miniatureFont = r250_Miniature(new r250_xn$NamedParameterPair$2Lrc9b('glyphs', r423_pendingGlyphs), new r250_xn$NamedParameterPair$2Lrc9b('crowd', 4), new r250_xn$NamedParameterPair$2Lrc9b('scale', 0.7), new r250_xn$NamedParameterPair$2Lrc9b('unfair', true), new r250_xn$NamedParameterPair$2Lrc9b('mono', true));
            _r423_t0 = r423_records;
            _r423_t1 = _r423_t0.length;
            _r423_t2 = 0;
            _r423_t8 = _r423_t2 < _r423_t1;
            for (; _r423_t8; _r423_t8 = _r423_t2 < _r423_t1)
                _r423_t9 = (_r423_t3 = _r423_t0[_r423_t2], r423_unicode = _r423_t3[0], r423_glyphid = _r423_t3[1], r423_pri = _r423_t3[2], r250_xn$createglyph$7Hrq(r250_suggestName('sup' + r423_glyphid), function _r423_t10() {
                    var _r432_t0 = this;
                    var r432_currentGlyph = _r432_t0;
                    if (r423_unicode) {
                        r432_currentGlyph['assign-unicode'](r423_unicode);
                        r250_unicodeGlyphs[r432_currentGlyph.unicode[r432_currentGlyph.unicode.length - 1]] = r432_currentGlyph;
                    }
                    var r432_middle = r423_miniatureFont[r423_glyphid].advanceWidth / 2;
                    r432_currentGlyph.include(r423_miniatureFont[r423_glyphid], r250_AS_BASE, r250_ALSO_METRICS);
                    r432_currentGlyph['apply-transform'](r250_Upright(), true);
                    r432_currentGlyph['apply-transform'](r250_Translate(-r432_middle, -r250_CAP), true);
                    r432_currentGlyph['apply-transform'](r250_Scale(0.7), true);
                    r432_currentGlyph['apply-transform'](r250_Translate(r432_middle, r250_CAP + r250_ACCENT / 2), true);
                    r432_currentGlyph['apply-transform'](r250_Italify(), true);
                    if (r423_pri)
                        r432_currentGlyph.cmpPriority = r423_pri;
                    r250_refair(_r432_t0);
                    return void 0;
                }), _r423_t2 = _r423_t2 + 1);
            return _r423_t9;
        } else
            return void 0;
    };
    var r250_createSubscripts = function _r250_t23(r440_records) {
        var r440_pendingGlyphs, r440_miniatureFont, r440_unicode, r440_glyphid, r440_pri, _r440_t0, _r440_t1, _r440_t2, _r440_t3, _r440_t8, _r440_t9;
        if (!r250_recursive) {
            r440_pendingGlyphs = r440_records.map(function _r440_t7(r441_record) {
                return r441_record[1];
            });
            r440_miniatureFont = r250_Miniature(new r250_xn$NamedParameterPair$2Lrc9b('glyphs', r440_pendingGlyphs), new r250_xn$NamedParameterPair$2Lrc9b('crowd', 4), new r250_xn$NamedParameterPair$2Lrc9b('scale', 0.7), new r250_xn$NamedParameterPair$2Lrc9b('unfair', true), new r250_xn$NamedParameterPair$2Lrc9b('mono', true));
            _r440_t0 = r440_records;
            _r440_t1 = _r440_t0.length;
            _r440_t2 = 0;
            _r440_t8 = _r440_t2 < _r440_t1;
            for (; _r440_t8; _r440_t8 = _r440_t2 < _r440_t1)
                _r440_t9 = (_r440_t3 = _r440_t0[_r440_t2], r440_unicode = _r440_t3[0], r440_glyphid = _r440_t3[1], r440_pri = _r440_t3[2], r250_xn$createglyph$7Hrq(r250_suggestName('sub' + r440_glyphid), function _r440_t10() {
                    var _r449_t0 = this;
                    var r449_currentGlyph = _r449_t0;
                    if (r440_unicode) {
                        r449_currentGlyph['assign-unicode'](r440_unicode);
                        r250_unicodeGlyphs[r449_currentGlyph.unicode[r449_currentGlyph.unicode.length - 1]] = r449_currentGlyph;
                    }
                    var r449_middle = r440_miniatureFont[r440_glyphid].advanceWidth / 2;
                    r449_currentGlyph.include(r440_miniatureFont[r440_glyphid], r250_AS_BASE, r250_ALSO_METRICS);
                    r449_currentGlyph['apply-transform'](r250_Upright(), true);
                    r449_currentGlyph['apply-transform'](r250_Translate(-r449_middle, 0), true);
                    r449_currentGlyph['apply-transform'](r250_Scale(0.7), true);
                    r449_currentGlyph['apply-transform'](r250_Translate(r449_middle, r250_DESCENDER / 2), true);
                    r449_currentGlyph['apply-transform'](r250_Italify(), true);
                    if (r440_pri)
                        r449_currentGlyph.cmpPriority = r440_pri;
                    r250_refair(_r449_t0);
                    return void 0;
                }), _r440_t2 = _r440_t2 + 1);
            return _r440_t9;
        } else
            return void 0;
    };
    var r250_createSMCPs = function _r250_t24(r457_records) {
        var r457_pendingGlyphs, r457_forkedParams, r457_sf, r457_unicode, r457_glyphid, r457_tfm, _r457_t0, _r457_t1, _r457_t2, _r457_t3, _r457_t8, _r457_t9;
        if (!r250_recursive) {
            r457_pendingGlyphs = r457_records.map(function _r457_t7(r458_record) {
                return r458_record[1];
            });
            r457_forkedParams = Object.create(r250_para);
            r457_forkedParams.cap0 = r250_para.cap;
            r457_forkedParams.cap = r250_XH;
            r457_forkedParams.xheight = r250_XH * r250_XH / r250_CAP;
            r457_forkedParams.diversityM = 1;
            r457_forkedParams.diversityF = 1;
            r457_forkedParams.diversityI = 1;
            r457_forkedParams.diversityII = 1;
            r457_sf = r250_Fork(r457_pendingGlyphs, r457_forkedParams);
            _r457_t0 = r457_records;
            _r457_t1 = _r457_t0.length;
            _r457_t2 = 0;
            _r457_t8 = _r457_t2 < _r457_t1;
            for (; _r457_t8; _r457_t8 = _r457_t2 < _r457_t1)
                _r457_t9 = (_r457_t3 = _r457_t0[_r457_t2], r457_unicode = _r457_t3[0], r457_glyphid = _r457_t3[1], r457_tfm = _r457_t3[2], r250_xn$createglyph$7Hrq(r250_suggestName('smcp' + r457_glyphid), function _r457_t10() {
                    var _r461_t0 = this;
                    var r461_currentGlyph = _r461_t0;
                    if (r457_unicode) {
                        r461_currentGlyph['assign-unicode'](r457_unicode);
                        r250_unicodeGlyphs[r461_currentGlyph.unicode[r461_currentGlyph.unicode.length - 1]] = r461_currentGlyph;
                    }
                    r461_currentGlyph.include(r457_sf[r457_glyphid], r250_AS_BASE);
                    r461_currentGlyph['set-width'](r457_sf[r457_glyphid].advanceWidth);
                    if (r457_tfm)
                        r461_currentGlyph.include(r457_tfm);
                    return void 0;
                }), _r457_t2 = _r457_t2 + 1);
            return _r457_t9;
        } else
            return void 0;
    };
    var r250_createMedievalCombs = function _r250_t25(r466_records) {
        var r466_pendingGlyphs, r466_miniatureFont, r466_unicode, r466_glyphid, _r466_t0, _r466_t1, _r466_t2, _r466_t3, _r466_t8, _r466_t9;
        if (!r250_recursive) {
            r466_pendingGlyphs = r466_records.map(function _r466_t7(r467_record) {
                return r467_record[1];
            });
            r466_miniatureFont = r250_Miniature(new r250_xn$NamedParameterPair$2Lrc9b('glyphs', r466_pendingGlyphs), new r250_xn$NamedParameterPair$2Lrc9b('crowd', 4), new r250_xn$NamedParameterPair$2Lrc9b('scale', 0.7), new r250_xn$NamedParameterPair$2Lrc9b('unfair', true), new r250_xn$NamedParameterPair$2Lrc9b('mono', true));
            _r466_t0 = r466_records;
            _r466_t1 = _r466_t0.length;
            _r466_t2 = 0;
            _r466_t8 = _r466_t2 < _r466_t1;
            for (; _r466_t8; _r466_t8 = _r466_t2 < _r466_t1)
                _r466_t9 = (_r466_t3 = _r466_t0[_r466_t2], r466_unicode = _r466_t3[0], r466_glyphid = _r466_t3[1], r250_xn$createglyph$7Hrq(r250_suggestName('comb' + r466_glyphid), function _r466_t10() {
                    var _r475_t0 = this;
                    var r475_currentGlyph = _r475_t0;
                    r475_currentGlyph['set-width'](0);
                    if (r466_unicode) {
                        r475_currentGlyph['assign-unicode'](r466_unicode);
                        r250_unicodeGlyphs[r475_currentGlyph.unicode[r475_currentGlyph.unicode.length - 1]] = r475_currentGlyph;
                    }
                    var r475_middle = r466_miniatureFont[r466_glyphid].advanceWidth / 2;
                    r475_currentGlyph.include(r466_miniatureFont[r466_glyphid]);
                    r475_currentGlyph['apply-transform'](r250_Upright());
                    r475_currentGlyph['apply-transform'](r250_Translate(-r475_middle, 0));
                    r475_currentGlyph['apply-transform'](r250_Scale(0.4));
                    r475_currentGlyph['apply-transform'](r250_Translate(r250_markMiddle, r250_aboveMarkBot));
                    r475_currentGlyph['apply-transform'](r250_Italify());
                    r250_refair(_r475_t0);
                    r475_currentGlyph['set-anchor']('above', r250_MARK, r250_markMiddle, r250_XH, r250_markMiddle, r250_aboveMarkTop);
                    return void 0;
                }), _r466_t2 = _r466_t2 + 1);
            return _r466_t9;
        } else
            return void 0;
    };
    var r250_createFracImpl = function _r250_t26(r485_suffix, r485_records, r485_fine, r485_scaleFactor, r485_closing) {
        var r485_pendingGlyphs, r485_miniatureFont, r485_unicode, r485_numid, r485_denid, r485_height, _r485_t0, _r485_t1, _r485_t2, _r485_t3, _r485_t4, _r485_t5, _r485_t6, _r485_t7, _r485_t13, _r485_t14;
        if (!r250_recursive) {
            r485_pendingGlyphs = r485_records.map(function _r485_t11(r486_record) {
                return r486_record[1];
            }).concat(r485_records.map(function _r485_t12(r487_record) {
                return r487_record[2];
            }));
            r485_miniatureFont = r250_Miniature(new r250_xn$NamedParameterPair$2Lrc9b('glyphs', r485_pendingGlyphs), new r250_xn$NamedParameterPair$2Lrc9b('crowd', 4), new r250_xn$NamedParameterPair$2Lrc9b('scale', r485_scaleFactor + 0.05), new r250_xn$NamedParameterPair$2Lrc9b('unfair', true));
            _r485_t0 = r485_records;
            _r485_t1 = _r485_t0.length;
            _r485_t2 = 0;
            for (; _r485_t2 < _r485_t1; _r485_t2 = _r485_t2 + 1) {
                _r485_t3 = _r485_t0[_r485_t2];
                r485_unicode = _r485_t3[0];
                r485_numid = _r485_t3[1];
                r485_denid = _r485_t3[2];
                r485_height = _r485_t3[3];
                (function () {
                    var r494_dist = r250_XH * (1 - r485_scaleFactor - r485_closing);
                    if (!r250_glyphs[r485_numid + r485_suffix + '.numpart'])
                        r250_xn$saveglyph$5sIl(r485_numid + r485_suffix + '.numpart', null, function _r494_t0() {
                            var _r496_t0 = this;
                            var r496_currentGlyph = _r496_t0;
                            if (!r496_currentGlyph)
                                return void 0;
                            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/autobuilds.ptl.3')
                                r250_glyphList.pop();
                            r496_currentGlyph.include(r485_miniatureFont[r485_numid]);
                            r496_currentGlyph['apply-transform'](r250_Upright());
                            r496_currentGlyph['apply-transform'](r250_Translate(-r485_miniatureFont[r485_numid].advanceWidth / 2, 0));
                            r496_currentGlyph['apply-transform'](r250_Scale(r250_CAP / r1_fallback(r485_height, r250_CAP) * r485_scaleFactor));
                            r496_currentGlyph['apply-transform'](r250_Translate(r250_MIDDLE, r250_symbolMid + r494_dist / 2));
                            r496_currentGlyph['apply-transform'](r250_Italify());
                            r250_refair(_r496_t0);
                            r250_dependencyProfile[r496_currentGlyph.name] = r250_getDependencyProfile(r496_currentGlyph);
                            return r496_currentGlyph;
                        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/autobuilds.ptl.3', r250_xn$donothing$2Lrc0b)));
                    return !r250_glyphs[r485_denid + r485_suffix + '.denpart'] ? r250_xn$saveglyph$5sIl(r485_denid + r485_suffix + '.denpart', null, function _r494_t1() {
                        var _r504_t0 = this;
                        var r504_currentGlyph = _r504_t0;
                        if (!r504_currentGlyph)
                            return void 0;
                        if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/autobuilds.ptl.4')
                            r250_glyphList.pop();
                        r504_currentGlyph.include(r485_miniatureFont[r485_denid]);
                        r504_currentGlyph['apply-transform'](r250_Upright());
                        r504_currentGlyph['apply-transform'](r250_Translate(-r485_miniatureFont[r485_denid].advanceWidth / 2, 0));
                        r504_currentGlyph['apply-transform'](r250_Scale(r250_CAP / r1_fallback(r485_height, r250_CAP) * r485_scaleFactor));
                        r504_currentGlyph['apply-transform'](r250_Translate(r250_MIDDLE, r250_symbolMid - r250_CAP * r485_scaleFactor - r494_dist / 2));
                        r504_currentGlyph['apply-transform'](r250_Italify());
                        r250_refair(_r504_t0);
                        r250_dependencyProfile[r504_currentGlyph.name] = r250_getDependencyProfile(r504_currentGlyph);
                        return r504_currentGlyph;
                    }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/autobuilds.ptl.4', r250_xn$donothing$2Lrc0b))) : void 0;
                }());
            }
            _r485_t4 = r485_records;
            _r485_t5 = _r485_t4.length;
            _r485_t6 = 0;
            _r485_t13 = _r485_t6 < _r485_t5;
            for (; _r485_t13; _r485_t13 = _r485_t6 < _r485_t5) {
                _r485_t7 = _r485_t4[_r485_t6];
                r485_unicode = _r485_t7[0];
                r485_numid = _r485_t7[1];
                r485_denid = _r485_t7[2];
                r485_height = _r485_t7[3];
                (function () {
                    return r250_xn$saveglyph$5sIl(r250_suggestName(r485_numid + 'over' + r485_denid), r485_unicode, function _r513_t0() {
                        var _r515_t0 = this;
                        var r515_currentGlyph = _r515_t0;
                        r250_includeGlyphPart(r515_currentGlyph, r250_glyphs, r485_numid + r485_suffix + '.numpart');
                        r250_includeGlyphPart(r515_currentGlyph, r250_glyphs, r485_denid + r485_suffix + '.denpart');
                        if (r485_fine)
                            r515_currentGlyph.include(r250_HBar(r250_SB, r250_RIGHTSB, r250_symbolMid, r485_fine * 0.75));
                        return void 0;
                    });
                }());
                _r485_t14 = _r485_t6 = _r485_t6 + 1;
            }
            return _r485_t14;
        } else
            return void 0;
    };
    var r250_createFractions = function _r250_t27(r519_records) {
        return r250_createFracImpl('.frac', r519_records, r250_adviceBlackness(3), 0.55, 0.05);
    };
    var r250_createPowerlineStacks = function _r250_t28(r520_records) {
        return r250_createFracImpl('.pwlStack', r520_records, 0, 0.6, 0.15);
    };
    r250_createSMCPs([
        [
            7424,
            'A'
        ],
        [
            7425,
            'AE'
        ],
        [
            7427,
            'Bbar'
        ],
        [
            7428,
            'C'
        ],
        [
            7429,
            'D'
        ],
        [
            7430,
            'Dcroat'
        ],
        [
            7431,
            'E'
        ],
        [
            7432,
            'cyrZe'
        ],
        [
            7434,
            'J'
        ],
        [
            7435,
            'K'
        ],
        [
            7436,
            'Lslash'
        ],
        [
            7437,
            'M'
        ],
        [
            7438,
            'cyrI'
        ],
        [
            7439,
            'O'
        ],
        [
            7440,
            'turnC'
        ],
        [
            7445,
            'OU'
        ],
        [
            7448,
            'P'
        ],
        [
            7449,
            'cyrYa'
        ],
        [
            7450,
            'R',
            r250_FlipAround(r250_MIDDLE, r250_XH / 2)
        ],
        [
            7451,
            'T'
        ],
        [
            7456,
            'V'
        ],
        [
            7457,
            'W'
        ],
        [
            7458,
            'Z'
        ],
        [
            7459,
            'Ezh'
        ],
        [
            7462,
            'Gamma'
        ],
        [
            7463,
            'Lambda'
        ],
        [
            7464,
            'Pi'
        ],
        [
            7465,
            'Rho'
        ],
        [
            7467,
            'cyrEl'
        ],
        [
            42800,
            'F'
        ],
        [
            42801,
            'S'
        ],
        [
            42927,
            'Q'
        ]
    ]);
    r250_createSuperscripts([
        [
            8304,
            'zero'
        ],
        [
            185,
            'one'
        ],
        [
            178,
            'two'
        ],
        [
            179,
            'three'
        ],
        [
            8308,
            'four'
        ],
        [
            8309,
            'five'
        ],
        [
            8310,
            'six'
        ],
        [
            8311,
            'seven'
        ],
        [
            8312,
            'eight'
        ],
        [
            8313,
            'nine'
        ],
        [
            688,
            'h'
        ],
        [
            689,
            'hhooktop'
        ],
        [
            690,
            'j'
        ],
        [
            691,
            'r'
        ],
        [
            692,
            'turnr'
        ],
        [
            693,
            'turnrrtail'
        ],
        [
            694,
            'invsmcpR'
        ],
        [
            695,
            'w'
        ],
        [
            696,
            'y'
        ],
        [
            704,
            'fineglottalstop'
        ],
        [
            705,
            'finerevglottalstop'
        ],
        [
            736,
            'latingamma'
        ],
        [
            737,
            'l'
        ],
        [
            738,
            's'
        ],
        [
            739,
            'x'
        ],
        [
            740,
            'revglottalstop'
        ],
        [
            8305,
            'i'
        ],
        [
            8319,
            'n'
        ],
        [
            7491,
            'a'
        ],
        [
            7492,
            'turna'
        ],
        [
            7493,
            'scripta'
        ],
        [
            7494,
            'turnae'
        ],
        [
            7495,
            'b'
        ],
        [
            7496,
            'd'
        ],
        [
            7497,
            'e'
        ],
        [
            7498,
            'turne'
        ],
        [
            7499,
            'epsilon'
        ],
        [
            7500,
            'cyrze'
        ],
        [
            7501,
            'g'
        ],
        [
            7502,
            'turni'
        ],
        [
            7503,
            'k'
        ],
        [
            7504,
            'm'
        ],
        [
            7505,
            'eng'
        ],
        [
            7506,
            'o'
        ],
        [
            7507,
            'turnc'
        ],
        [
            7508,
            'oupperhalf'
        ],
        [
            7509,
            'olowerhalf'
        ],
        [
            7510,
            'p'
        ],
        [
            7511,
            't'
        ],
        [
            7512,
            'u'
        ],
        [
            7514,
            'turnm'
        ],
        [
            7515,
            'v'
        ],
        [
            7516,
            'latinayin'
        ],
        [
            7517,
            'beta'
        ],
        [
            7518,
            'gamma'
        ],
        [
            7519,
            'delta'
        ],
        [
            7520,
            'phi'
        ],
        [
            7521,
            'chi'
        ],
        [
            7544,
            'smcpH'
        ],
        [
            7579,
            'turnscripta'
        ],
        [
            7580,
            'c'
        ],
        [
            7581,
            'ccurlytail'
        ],
        [
            7582,
            'eth'
        ],
        [
            7583,
            'revlatinepsilon'
        ],
        [
            7584,
            'f'
        ],
        [
            7585,
            'turnf'
        ],
        [
            7586,
            'scriptg'
        ],
        [
            7587,
            'turnh'
        ],
        [
            7588,
            'ibarOver'
        ],
        [
            7589,
            'latiniota'
        ],
        [
            7590,
            'smcpI'
        ],
        [
            7591,
            'smcpIbarOver'
        ],
        [
            7592,
            'jcurlytail'
        ],
        [
            7595,
            'smcpL'
        ],
        [
            7593,
            'lrtail'
        ],
        [
            7596,
            'mltail'
        ],
        [
            7597,
            'turnmleg'
        ],
        [
            7598,
            'nltail'
        ],
        [
            7599,
            'nrtailBR'
        ],
        [
            7600,
            'smcpN'
        ],
        [
            7601,
            'obar'
        ],
        [
            7602,
            'varphi'
        ],
        [
            7603,
            'srtail'
        ],
        [
            7604,
            'esh'
        ],
        [
            7605,
            'tltail'
        ],
        [
            7606,
            'ulongBarOver'
        ],
        [
            7607,
            'latinupsilon1'
        ],
        [
            7608,
            'smcpU'
        ],
        [
            7609,
            'latinupsilon2'
        ],
        [
            7610,
            'turnv'
        ],
        [
            7612,
            'zrtailBR'
        ],
        [
            7613,
            'zcurlytail'
        ],
        [
            7614,
            'ezh'
        ],
        [
            7615,
            'theta'
        ],
        [
            7611,
            'z'
        ],
        [
            7468,
            'A'
        ],
        [
            7469,
            'AE'
        ],
        [
            7470,
            'B'
        ],
        [
            7471,
            'Bbar'
        ],
        [
            7472,
            'D'
        ],
        [
            7473,
            'E'
        ],
        [
            7474,
            'turnE'
        ],
        [
            7475,
            'G'
        ],
        [
            7476,
            'H'
        ],
        [
            7477,
            'I'
        ],
        [
            7478,
            'J'
        ],
        [
            7479,
            'K'
        ],
        [
            7480,
            'L'
        ],
        [
            7481,
            'M'
        ],
        [
            7482,
            'N'
        ],
        [
            7483,
            'cyrI'
        ],
        [
            7484,
            'O'
        ],
        [
            7485,
            'OU'
        ],
        [
            7486,
            'P'
        ],
        [
            7487,
            'R'
        ],
        [
            null,
            'S'
        ],
        [
            7488,
            'T'
        ],
        [
            7489,
            'U'
        ],
        [
            7490,
            'W'
        ],
        [
            11389,
            'V'
        ],
        [
            8314,
            'plus',
            -11
        ],
        [
            8315,
            'minus',
            -11
        ],
        [
            8316,
            'equal',
            -11
        ],
        [
            8317,
            'parenLeft',
            -11
        ],
        [
            8318,
            'parenRight',
            -11
        ]
    ]);
    if (!r250_recursive) {
        _r250_t29 = r250_Miniature([
            'a',
            'o'
        ], 3.5, 0.7);
        (function (_r250_leti5) {
            var r521_df = _r250_leti5;
            (function _r521_t0() {
                var _r523_t0 = this;
                var r523_currentGlyph = _r523_t0;
                if (!r523_currentGlyph)
                    return void 0;
                if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/autobuilds.ptl.5')
                    r250_glyphList.pop();
                r523_currentGlyph.include(r521_df.a);
                r523_currentGlyph.include(r250_HBarBottom(r250_SB, r250_RIGHTSB, r250_DESCENDER));
                r523_currentGlyph['apply-transform'](r250_Upright());
                r523_currentGlyph['apply-transform'](r250_Translate(-r250_MIDDLE, -r250_XH));
                r523_currentGlyph['apply-transform'](r250_Scale(0.7));
                r523_currentGlyph['apply-transform'](r250_Translate(r250_MIDDLE, r250_CAP));
                r523_currentGlyph['apply-transform'](r250_Italify());
                r250_xn$save$2Lrc5.call(r523_currentGlyph, 'ordfeminine', 170);
                r250_dependencyProfile[r523_currentGlyph.name] = r250_getDependencyProfile(r523_currentGlyph);
                return r523_currentGlyph;
            }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/autobuilds.ptl.5', r250_xn$donothing$2Lrc0b)));
            return function _r521_t1() {
                var _r533_t0 = this;
                var r533_currentGlyph = _r533_t0;
                if (!r533_currentGlyph)
                    return void 0;
                if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/autobuilds.ptl.6')
                    r250_glyphList.pop();
                r533_currentGlyph.include(r521_df.o);
                r533_currentGlyph.include(r250_HBarBottom(r250_SB, r250_RIGHTSB, r250_DESCENDER));
                r533_currentGlyph['apply-transform'](r250_Upright());
                r533_currentGlyph['apply-transform'](r250_Translate(-r250_MIDDLE, -r250_XH));
                r533_currentGlyph['apply-transform'](r250_Scale(0.7));
                r533_currentGlyph['apply-transform'](r250_Translate(r250_MIDDLE, r250_CAP));
                r533_currentGlyph['apply-transform'](r250_Italify());
                r250_xn$save$2Lrc5.call(r533_currentGlyph, 'ordmasculine', 186);
                r250_dependencyProfile[r533_currentGlyph.name] = r250_getDependencyProfile(r533_currentGlyph);
                return r533_currentGlyph;
            }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/autobuilds.ptl.6', r250_xn$donothing$2Lrc0b));
        }(_r250_t29));
    }
    r250_createSubscripts([
        [
            8320,
            'zero'
        ],
        [
            8321,
            'one'
        ],
        [
            8322,
            'two'
        ],
        [
            8323,
            'three'
        ],
        [
            8324,
            'four'
        ],
        [
            8325,
            'five'
        ],
        [
            8326,
            'six'
        ],
        [
            8327,
            'seven'
        ],
        [
            8328,
            'eight'
        ],
        [
            8329,
            'nine'
        ],
        [
            8336,
            'a'
        ],
        [
            8337,
            'e'
        ],
        [
            8338,
            'o'
        ],
        [
            8339,
            'x'
        ],
        [
            8340,
            'turne'
        ],
        [
            8341,
            'h'
        ],
        [
            8342,
            'k'
        ],
        [
            8343,
            'l'
        ],
        [
            8344,
            'm'
        ],
        [
            8345,
            'n'
        ],
        [
            8346,
            'p'
        ],
        [
            8347,
            's'
        ],
        [
            8348,
            't'
        ],
        [
            7522,
            'i'
        ],
        [
            7523,
            'r'
        ],
        [
            7524,
            'u'
        ],
        [
            7525,
            'v'
        ],
        [
            7526,
            'beta'
        ],
        [
            7527,
            'gamma'
        ],
        [
            7528,
            'rho'
        ],
        [
            7529,
            'phi'
        ],
        [
            7530,
            'chi'
        ],
        [
            11388,
            'j'
        ],
        [
            8330,
            'plus',
            -11
        ],
        [
            8331,
            'minus',
            -11
        ],
        [
            8332,
            'equal',
            -11
        ],
        [
            8333,
            'parenLeft',
            -11
        ],
        [
            8334,
            'parenRight',
            -11
        ]
    ]);
    r250_createFractions([
        [
            188,
            'one',
            'four'
        ],
        [
            189,
            'one',
            'two'
        ],
        [
            190,
            'three',
            'four'
        ],
        [
            8528,
            'one',
            'seven'
        ],
        [
            8529,
            'one',
            'nine'
        ],
        [
            8530,
            'one',
            'ten'
        ],
        [
            8531,
            'one',
            'three'
        ],
        [
            8532,
            'two',
            'three'
        ],
        [
            8533,
            'one',
            'five'
        ],
        [
            8534,
            'two',
            'five'
        ],
        [
            8535,
            'three',
            'five'
        ],
        [
            8536,
            'four',
            'five'
        ],
        [
            8537,
            'one',
            'six'
        ],
        [
            8538,
            'five',
            'six'
        ],
        [
            8539,
            'one',
            'eight'
        ],
        [
            8540,
            'three',
            'eight'
        ],
        [
            8541,
            'five',
            'eight'
        ],
        [
            8542,
            'seven',
            'eight'
        ],
        [
            8585,
            'zero',
            'three'
        ],
        [
            8453,
            'C',
            'O'
        ],
        [
            8454,
            'C',
            'U'
        ],
        [
            null,
            'space',
            'space'
        ]
    ]);
    r250_createPowerlineStacks([
        [
            57505,
            'L',
            'N'
        ],
        [
            57507,
            'C',
            'N'
        ]
    ]);
    r250_createMedievalCombs([
        [
            867,
            'a'
        ],
        [
            868,
            'e'
        ],
        [
            869,
            'i'
        ],
        [
            870,
            'o'
        ],
        [
            871,
            'u'
        ],
        [
            872,
            'c'
        ],
        [
            873,
            'd'
        ],
        [
            874,
            'h'
        ],
        [
            875,
            'm'
        ],
        [
            876,
            'r'
        ],
        [
            877,
            't'
        ],
        [
            878,
            'v'
        ],
        [
            879,
            'x'
        ],
        [
            7636,
            'ae'
        ],
        [
            7639,
            'ccedillaBelow'
        ],
        [
            7640,
            'cyrde.italic'
        ],
        [
            7641,
            'eth'
        ],
        [
            7642,
            'g'
        ],
        [
            7643,
            'G'
        ],
        [
            7644,
            'k'
        ],
        [
            7645,
            'l'
        ],
        [
            7646,
            'L'
        ],
        [
            7647,
            'M'
        ],
        [
            7648,
            'n'
        ],
        [
            7649,
            'N'
        ],
        [
            7650,
            'R'
        ],
        [
            7651,
            'rrotunda'
        ],
        [
            7652,
            's'
        ],
        [
            7653,
            'longs'
        ],
        [
            7654,
            'z'
        ],
        [
            7655,
            'alpha'
        ],
        [
            7656,
            'b'
        ],
        [
            7657,
            'beta'
        ],
        [
            7658,
            'turne'
        ],
        [
            7659,
            'f'
        ],
        [
            7662,
            'p'
        ],
        [
            7663,
            'esh'
        ],
        [
            7664,
            'mu'
        ],
        [
            7665,
            'w'
        ],
        [
            7666,
            'adieresis'
        ],
        [
            7667,
            'odieresis'
        ],
        [
            7668,
            'udieresis'
        ]
    ]);
    var r250_createLigatures = function _r250_t32(r542__shrink1, r542__shrink2, r542_wadj1, r542_wadj2, r542_records) {
        var r542_pendingGlyphs1, r542_pendingGlyphs2, r542_wide, r542_shrink1, r542_shrink2, r542_df1, r542_df2, r542_unicode, r542_c1, r542_c2, r542_mark, r542_glyphName, r542_j, r542_kern, r542_refW, r542_targetW, _r542_t0, _r542_t1, _r542_t2, _r542_t3, _r542_t9, _r542_t10;
        if (!r250_recursive) {
            r542_pendingGlyphs1 = r542_records.map(function _r542_t7(r543_record) {
                return r543_record[1];
            });
            r542_pendingGlyphs2 = r542_records.map(function _r542_t8(r544_record) {
                return r544_record[2];
            });
            r542_wide = r250_para.spaing > 1 || r250_para.diversityM > 1;
            r542_shrink1 = r542_wide ? 1 : r1_clamp(0, 1, r542__shrink1 * r250_para.diversityM);
            r542_shrink2 = r542_wide ? 1 : r1_clamp(0, 1, r542__shrink2 * r250_para.diversityM);
            r542_df1 = r250_Thinner(r542_pendingGlyphs1, r542_shrink1);
            r542_df2 = r250_Thinner(r542_pendingGlyphs2, r542_shrink2);
            _r542_t0 = r542_records;
            _r542_t1 = _r542_t0.length;
            _r542_t2 = 0;
            _r542_t9 = _r542_t2 < _r542_t1;
            for (; _r542_t9; _r542_t9 = _r542_t2 < _r542_t1) {
                _r542_t3 = _r542_t0[_r542_t2];
                r542_unicode = _r542_t3[0];
                r542_c1 = _r542_t3[1];
                r542_c2 = _r542_t3[2];
                r542_mark = _r542_t3[3];
                r542_glyphName = '' + r542_c1 + '_' + r542_c2;
                if (r250_glyphs[r542_glyphName]) {
                    r542_j = 2;
                    for (; r250_glyphs[r542_glyphName + r542_j];)
                        r542_j = r542_j + 1;
                    r542_glyphName = r542_glyphName + r542_j;
                }
                if (r542_wide)
                    (function _r542_t11() {
                        var _r548_t0 = this;
                        var r548_currentGlyph = _r548_t0;
                        if (!r548_currentGlyph)
                            return void 0;
                        if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/autobuilds.ptl.7')
                            r250_glyphList.pop();
                        r548_currentGlyph.include(r542_df2[r542_c2]);
                        r548_currentGlyph.include(r250_Translate(r542_df1[r542_c1].advanceWidth, 0));
                        r548_currentGlyph.include(r542_df1[r542_c1]);
                        r548_currentGlyph['set-width'](r542_df1[r542_c1].advanceWidth + r542_df2[r542_c2].advanceWidth);
                        r250_xn$save$2Lrc5.call(r548_currentGlyph, r542_glyphName, r542_unicode);
                        r250_dependencyProfile[r548_currentGlyph.name] = r250_getDependencyProfile(r548_currentGlyph);
                        return r548_currentGlyph;
                    }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/autobuilds.ptl.7', r250_xn$donothing$2Lrc0b)));
                else {
                    r542_kern = r250_SB * 7 / 8 * (r542_shrink1 + r542_shrink2);
                    r542_refW = r250_WIDTH * (r542_shrink1 * r542_wadj1 + r542_shrink2 * r542_wadj2) - r542_kern;
                    r542_targetW = r250_WIDTH * r250_para.diversityM;
                    (function _r542_t12() {
                        var _r555_t0 = this;
                        var r555_currentGlyph = _r555_t0;
                        if (!r555_currentGlyph)
                            return void 0;
                        if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/autobuilds.ptl.8')
                            r250_glyphList.pop();
                        r555_currentGlyph.include(r542_df2[r542_c2]);
                        r555_currentGlyph.include(r250_Translate(r250_WIDTH * r542_shrink1 * r542_wadj1 - r542_kern, 0));
                        r555_currentGlyph.include(r542_df1[r542_c1]);
                        r555_currentGlyph.include(r250_Translate(-r250_WIDTH * r542_shrink1 * (1 - r542_wadj1) / 2, 0));
                        r555_currentGlyph.include(r250_Upright());
                        r555_currentGlyph.include(r250_Translate(-r542_refW / 2, 0));
                        r555_currentGlyph.include(r250_Scale((r542_targetW - r250_SB * 1.25) / (r542_targetW - r250_SB * 2) * r542_targetW / r542_refW, 1));
                        r555_currentGlyph.include(r250_Translate(r542_targetW / 2, 0));
                        r555_currentGlyph.include(r250_Italify());
                        if (r542_mark)
                            r555_currentGlyph.include(r250_MarksetDiv(r250_para.diversityM)[r542_mark]);
                        r250_xn$save$2Lrc5.call(r555_currentGlyph, r542_glyphName, r542_unicode);
                        r250_dependencyProfile[r555_currentGlyph.name] = r250_getDependencyProfile(r555_currentGlyph);
                        return r555_currentGlyph;
                    }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/autobuilds.ptl.8', r250_xn$donothing$2Lrc0b)));
                }
                _r542_t10 = _r542_t2 = _r542_t2 + 1;
            }
            return _r542_t10;
        } else
            return void 0;
    };
    var r250_stdShrink = r1_clamp(0.75, 0.9, r1_linreg(72, 0.75, 108, 0.9, r250_STROKE));
    r250_createLigatures(r250_stdShrink, r250_stdShrink, 1, 1, [
        [
            452,
            'D',
            'Zcaron'
        ],
        [
            453,
            'D',
            'zcaron'
        ],
        [
            454,
            'd',
            'zcaron'
        ],
        [
            455,
            'L',
            'J'
        ],
        [
            456,
            'L',
            'j'
        ],
        [
            457,
            'l',
            'j'
        ],
        [
            458,
            'N',
            'J'
        ],
        [
            459,
            'N',
            'j'
        ],
        [
            460,
            'n',
            'j'
        ],
        [
            675,
            'd',
            'z'
        ],
        [
            497,
            'D',
            'Z'
        ],
        [
            498,
            'D',
            'z'
        ],
        [
            499,
            'd',
            'z'
        ],
        [
            676,
            'd',
            'ezh'
        ],
        [
            677,
            'd',
            'zcurlytail'
        ],
        [
            678,
            't',
            's'
        ],
        [
            679,
            't',
            'esh'
        ],
        [
            680,
            't',
            'ccurlytail'
        ],
        [
            681,
            'f',
            'eng'
        ],
        [
            682,
            'l',
            's'
        ],
        [
            683,
            'l',
            'z'
        ],
        [
            1144,
            'O',
            'y',
            'if'
        ],
        [
            1145,
            'o',
            'y',
            'p'
        ],
        [
            8359,
            'P',
            's'
        ],
        [
            8360,
            'R',
            's'
        ]
    ]);
    r250_createLigatures(0.7, 0.8, 0.75, 0.9, [
        [
            8451,
            'degree',
            'C'
        ],
        [
            8457,
            'degree',
            'F'
        ]
    ]);
    if (!r250_recursive)
        (function () {
            var r567_compositions = [
                [
                    169,
                    ['C'],
                    r250_FULLWIDTH2
                ],
                [
                    174,
                    ['R'],
                    r250_FULLWIDTH2
                ],
                [
                    8471,
                    ['P'],
                    r250_FULLWIDTH2
                ],
                [
                    9450,
                    ['zero'],
                    r250_FULLWIDTH1
                ]
            ];
            r567_compositions.push([
                null,
                ['space'],
                r250_FULLWIDTH1
            ]);
            var _r567_t0 = 1;
            var _r567_t1 = 20;
            var r567_j = _r567_t0;
            for (; r567_j <= _r567_t1; r567_j = r567_j + 1)
                r567_compositions.push([
                    9312 + r567_j - 1,
                    (r567_j + '').split('').map(function _r567_t10(r570_c) {
                        return r250_unicodeGlyphs['0'.charCodeAt(0) + (r570_c - 0)].name;
                    }),
                    r250_FULLWIDTH1
                ]);
            var _r567_t2 = 21;
            var _r567_t3 = 35;
            r567_j = _r567_t2;
            for (; r567_j <= _r567_t3; r567_j = r567_j + 1)
                r567_compositions.push([
                    12881 + r567_j - 21,
                    (r567_j + '').split('').map(function _r567_t11(r573_c) {
                        return r250_unicodeGlyphs['0'.charCodeAt(0) + (r573_c - 0)].name;
                    }),
                    r250_FULLWIDTH1
                ]);
            var _r567_t4 = 36;
            var _r567_t5 = 50;
            r567_j = _r567_t4;
            for (; r567_j <= _r567_t5; r567_j = r567_j + 1)
                r567_compositions.push([
                    12977 + r567_j - 36,
                    (r567_j + '').split('').map(function _r567_t12(r576_c) {
                        return r250_unicodeGlyphs['0'.charCodeAt(0) + (r576_c - 0)].name;
                    }),
                    r250_FULLWIDTH1
                ]);
            var _r567_t6 = 0;
            var _r567_t7 = 26;
            r567_j = _r567_t6;
            for (; r567_j < _r567_t7; r567_j = r567_j + 1)
                r567_compositions.push([
                    9398 + r567_j,
                    [r250_unicodeGlyphs['A'.charCodeAt(0) + r567_j].name],
                    r250_FULLWIDTH1
                ]);
            var _r567_t8 = 0;
            var _r567_t9 = 26;
            r567_j = _r567_t8;
            for (; r567_j < _r567_t9; r567_j = r567_j + 1)
                r567_compositions.push([
                    9424 + r567_j,
                    [r250_unicodeGlyphs['a'.charCodeAt(0) + r567_j].name],
                    r250_FULLWIDTH1,
                    0.5,
                    r250_XH / 2
                ]);
            return r250_createCircledGlyphs(r567_compositions);
        }());
    if (!r250_recursive)
        (function () {
            var r581_compositions = [[
                    9471,
                    ['zero'],
                    r250_FULLWIDTH1
                ]];
            var _r581_t0 = 1;
            var _r581_t1 = 10;
            var r581_j = _r581_t0;
            for (; r581_j <= _r581_t1; r581_j = r581_j + 1)
                r581_compositions.push([
                    10102 + r581_j - 1,
                    (r581_j + '').split('').map(function _r581_t6(r584_c) {
                        return r250_unicodeGlyphs['0'.charCodeAt(0) + (r584_c - 0)].name;
                    }),
                    r250_FULLWIDTH1
                ]);
            var _r581_t2 = 11;
            var _r581_t3 = 20;
            r581_j = _r581_t2;
            for (; r581_j <= _r581_t3; r581_j = r581_j + 1)
                r581_compositions.push([
                    9451 + r581_j - 11,
                    (r581_j + '').split('').map(function _r581_t7(r587_c) {
                        return r250_unicodeGlyphs['0'.charCodeAt(0) + (r587_c - 0)].name;
                    }),
                    r250_FULLWIDTH1
                ]);
            var _r581_t4 = 0;
            var _r581_t5 = 26;
            r581_j = _r581_t4;
            for (; r581_j < _r581_t5; r581_j = r581_j + 1)
                r581_compositions.push([
                    127312 + r581_j,
                    [r250_unicodeGlyphs['A'.charCodeAt(0) + r581_j].name],
                    r250_FULLWIDTH1
                ]);
            return r250_createInsetCircledGlyphs(r581_compositions);
        }());
    if (!r250_recursive)
        (function () {
            var r590_compositions = [];
            r590_compositions.push([
                null,
                ['space'],
                r250_FULLWIDTH1
            ]);
            var _r590_t0 = 0;
            var _r590_t1 = 26;
            var r590_j = _r590_t0;
            for (; r590_j < _r590_t1; r590_j = r590_j + 1)
                r590_compositions.push([
                    127280 + r590_j,
                    [r250_unicodeGlyphs['A'.charCodeAt(0) + r590_j].name],
                    r250_FULLWIDTH1
                ]);
            return r250_createBoxedGlyphs(r590_compositions);
        }());
    if (!r250_recursive)
        (function () {
            var r593_compositions = [];
            var _r593_t0 = 0;
            var _r593_t1 = 26;
            var r593_j = _r593_t0;
            for (; r593_j < _r593_t1; r593_j = r593_j + 1)
                r593_compositions.push([
                    127344 + r593_j,
                    [r250_unicodeGlyphs['A'.charCodeAt(0) + r593_j].name],
                    r250_FULLWIDTH1
                ]);
            return r250_createInsetBoxedGlyphs(r593_compositions);
        }());
    if (!r250_recursive)
        (function () {
            var r596_compositions = [];
            r596_compositions.push([
                null,
                ['space'],
                r250_FULLWIDTH1
            ]);
            var _r596_t0 = 1;
            var _r596_t1 = 10;
            var r596_j = _r596_t0;
            for (; r596_j <= _r596_t1; r596_j = r596_j + 1)
                r596_compositions.push([
                    9461 + r596_j - 1,
                    (r596_j + '').split('').map(function _r596_t2(r599_c) {
                        return r250_unicodeGlyphs['0'.charCodeAt(0) + (r599_c - 0)].name;
                    }),
                    r250_FULLWIDTH1
                ]);
            return r250_createDoubleCircledGlyphs(r596_compositions);
        }());
    if (!r250_recursive)
        (function () {
            var r600_compositions = [];
            r600_compositions.push([
                null,
                ['space'],
                r250_FULLWIDTH1
            ]);
            var _r600_t0 = 1;
            var _r600_t1 = 20;
            var r600_j = _r600_t0;
            for (; r600_j <= _r600_t1; r600_j = r600_j + 1)
                r600_compositions.push([
                    9332 + r600_j - 1,
                    (r600_j + '').split('').map(function _r600_t6(r603_c) {
                        return r250_unicodeGlyphs['0'.charCodeAt(0) + (r603_c - 0)].name;
                    }),
                    r250_FULLWIDTH1
                ]);
            var _r600_t2 = 0;
            var _r600_t3 = 26;
            r600_j = _r600_t2;
            for (; r600_j < _r600_t3; r600_j = r600_j + 1)
                r600_compositions.push([
                    9372 + r600_j,
                    [r250_unicodeGlyphs['a'.charCodeAt(0) + r600_j].name],
                    r250_FULLWIDTH1,
                    0.5,
                    r250_XH / 2
                ]);
            var _r600_t4 = 0;
            var _r600_t5 = 26;
            r600_j = _r600_t4;
            for (; r600_j < _r600_t5; r600_j = r600_j + 1)
                r600_compositions.push([
                    127248 + r600_j,
                    [r250_unicodeGlyphs['A'.charCodeAt(0) + r600_j].name],
                    r250_FULLWIDTH1
                ]);
            return r250_createBracedGlyphs(r600_compositions);
        }());
    if (!r250_recursive)
        (function () {
            var r608_compositions = [[
                    127232,
                    ['zero'],
                    r250_FULLWIDTH1
                ]];
            var _r608_t0 = 1;
            var _r608_t1 = r250_para.spacing > 0 ? 20 : 9;
            var r608_j = _r608_t0;
            for (; r608_j <= _r608_t1; r608_j = r608_j + 1)
                r608_compositions.push([
                    9352 + r608_j - 1,
                    (r608_j + '').split('').map(function _r608_t2(r611_c) {
                        return r250_unicodeGlyphs['0'.charCodeAt(0) + (r611_c - 0)].name;
                    }),
                    r250_FULLWIDTH1
                ]);
            return r250_createDottedGlyphs(0.9, r608_compositions);
        }());
    (function () {
        var r612_doubleSuperscript = function _r612_t0(r613_a, r613_b) {
            return function _r613_t2() {
                var _r615_t0 = this;
                var r615_currentGlyph = _r615_t0;
                r615_currentGlyph.include(r613_a);
                r615_currentGlyph['apply-transform'](r250_Translate(-r250_WIDTH * 0.6, 0));
                r615_currentGlyph.include(r613_b);
                r615_currentGlyph['apply-transform'](r250_Upright());
                r615_currentGlyph['apply-transform'](r250_Translate(-r250_WIDTH * 0.2, -r250_CAP));
                r615_currentGlyph['apply-transform'](r250_Scale(0.8));
                r615_currentGlyph['apply-transform'](r250_Translate(r250_MIDDLE, r250_CAP));
                r615_currentGlyph['apply-transform'](r250_Italify());
                return void 0;
            };
        };
        (function _r612_t1() {
            var _r625_t0 = this;
            var r625_currentGlyph = _r625_t0;
            if (!r625_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/autobuilds.ptl.9')
                r250_glyphList.pop();
            r625_currentGlyph.include(r612_doubleSuperscript(r250_glyphs.supT, r250_glyphs.supM));
            r250_xn$save$2Lrc5.call(r625_currentGlyph, 'trademark', 8482);
            r250_dependencyProfile[r625_currentGlyph.name] = r250_getDependencyProfile(r625_currentGlyph);
            return r625_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/autobuilds.ptl.9', r250_xn$donothing$2Lrc0b)));
        return function _r612_t2() {
            var _r629_t0 = this;
            var r629_currentGlyph = _r629_t0;
            if (!r629_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/autobuilds.ptl.10')
                r250_glyphList.pop();
            r629_currentGlyph.include(r612_doubleSuperscript(r250_glyphs.supS, r250_glyphs.supM));
            r250_xn$save$2Lrc5.call(r629_currentGlyph, 'servicemark', 8480);
            r250_dependencyProfile[r629_currentGlyph.name] = r250_getDependencyProfile(r629_currentGlyph);
            return r629_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/autobuilds.ptl.10', r250_xn$donothing$2Lrc0b));
    }());
    if (!r250_recursive && r250_para.spacing === 0) {
        r250_font.glyf = r250_font.glyf.filter(function _r250_t49(r632_g) {
            return r632_g.advanceWidth <= r250_WIDTH;
        });
        r250_glyphList.length = r250_font.glyf.length;
        r250_j = 0;
        for (; r250_j < r250_font.glyf.length; r250_j = r250_j + 1)
            r250_glyphList[r250_j] = r250_font.glyf[r250_j];
    }
    if (!r250_recursive && r250_para.spacing > 0)
        return function () {
            var r634_j, _r634_t1, _r634_t2, _r634_t9, _r634_t11, _r634_t12;
            var r634_createDoubleWidth = function _r634_t3(r635_records) {
                var r635_unicode, r635_glyphid, _r635_t3, _r635_t10, _r635_t12, _r635_t13;
                var r635_scale = 1.25 / (r250_WIDTH / 500);
                var r635_pendingGlyphs = r635_records.map(function _r635_t8(r636_record) {
                    return r636_record[1];
                });
                var r635_widenFont = r250_Widen(r635_pendingGlyphs, r635_scale, r635_scale * 1.1);
                var _r635_t0 = r635_records;
                var _r635_t1 = _r635_t0.length;
                var _r635_t2 = 0;
                var _r635_t9 = _r635_t2 < _r635_t1;
                for (; _r635_t9; _r635_t9 = _r635_t2 < _r635_t1) {
                    _r635_t3 = _r635_t0[_r635_t2];
                    r635_unicode = _r635_t3[0];
                    r635_glyphid = _r635_t3[1];
                    if (!r250_unicodeGlyphs[r635_unicode])
                        r250_xn$createglyph$7Hrq(r250_suggestName('dw' + r635_glyphid), function _r635_t11() {
                            var _r639_t0 = this;
                            var r639_currentGlyph = _r639_t0;
                            r639_currentGlyph['set-width'](r250_UPM);
                            if (r635_unicode) {
                                r639_currentGlyph['assign-unicode'](r635_unicode);
                                r250_unicodeGlyphs[r639_currentGlyph.unicode[r639_currentGlyph.unicode.length - 1]] = r639_currentGlyph;
                            }
                            r639_currentGlyph.include(r635_widenFont[r635_glyphid], r250_AS_BASE);
                            r639_currentGlyph['apply-transform'](r250_Translate(r250_UPM / 2 - r250_WIDTH * r635_scale / 2, 0), true);
                            return void 0;
                        });
                    else {
                        _r635_t12 = r635_widenFont[r635_glyphid];
                        _r635_t13 = r250_unicodeGlyphs[r635_unicode];
                        (function (_r635_leti4, _r635_leti5) {
                            var r644_xn$thisglyph$5sIl = _r635_leti4;
                            var r644_xn$thatglyph$5sIl = _r635_leti5;
                            return r644_xn$thisglyph$5sIl && r644_xn$thatglyph$5sIl ? (r644_xn$thatglyph$5sIl.advanceWidth = r250_FULLWIDTH, r644_xn$thatglyph$5sIl.anchors = r644_xn$thisglyph$5sIl.anchors, r644_xn$thatglyph$5sIl.contours = r644_xn$thisglyph$5sIl.contours, r644_xn$thatglyph$5sIl.include(r250_Translate(r250_FULLWIDTH / 2 - r644_xn$thisglyph$5sIl.advanceWidth / 2, 0))) : void 0;
                        }(_r635_t12, _r635_t13));
                    }
                    _r635_t10 = _r635_t2 = _r635_t2 + 1;
                }
                return _r635_t10;
            };
            var _r634_t4 = r634_createDoubleWidth;
            var _r634_t5 = [];
            var _r634_t8 = function (_r634_leti0) {
                var r645_j, _r645_t0, _r645_t1, _r645_t2;
                var r645_a = _r634_leti0;
                if (r250_para.fullwidth_codes) {
                    _r645_t0 = r250_para.fullwidth_codes;
                    _r645_t1 = _r645_t0.length;
                    _r645_t2 = 0;
                    for (; _r645_t2 < _r645_t1; _r645_t2 = _r645_t2 + 1) {
                        r645_j = _r645_t0[_r645_t2];
                        if (r250_unicodeGlyphs[r645_j] && r250_unicodeGlyphs[r645_j].advanceWidth < 1000)
                            r645_a.push([
                                r645_j,
                                r250_unicodeGlyphs[r645_j].name
                            ]);
                    }
                }
                return r645_a;
            }(_r634_t5);
            _r634_t4(_r634_t8);
            if (r250_para.stressFW) {
                (function _r634_t10() {
                    var _r649_t0 = this;
                    var r649_currentGlyph = _r649_t0;
                    if (!r649_currentGlyph)
                        return void 0;
                    if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/autobuilds.ptl.11')
                        r250_glyphList.pop();
                    var r649_fine = r250_adviceBlackness(4);
                    var r649_t = r250_font.OS_2.usWinAscent + r649_fine / 2;
                    var r649_b = -r250_font.OS_2.usWinDescent - r649_fine / 2;
                    var r649_l = -r649_fine / 2 * r250_HVCONTRAST;
                    var r649_r = r250_UPM + r649_fine / 2 * r250_HVCONTRAST;
                    r649_currentGlyph.include(r250_HBarTop(r649_l, r1_mix(r649_l, r649_r, 1 / 3), r649_t, r649_fine));
                    r649_currentGlyph.include(r250_HBarTop(r1_mix(r649_l, r649_r, 2 / 3), r649_r, r649_t, r649_fine));
                    r649_currentGlyph.include(r250_HBarBottom(r649_l, r1_mix(r649_l, r649_r, 1 / 3), r649_b, r649_fine));
                    r649_currentGlyph.include(r250_HBarBottom(r1_mix(r649_l, r649_r, 2 / 3), r649_r, r649_b, r649_fine));
                    r649_currentGlyph.include(r250_VBarLeft(r649_l, r649_t, r1_mix(r649_t, r649_b, 1 / 3), r649_fine));
                    r649_currentGlyph.include(r250_VBarLeft(r649_l, r1_mix(r649_t, r649_b, 2 / 3), r649_b, r649_fine));
                    r649_currentGlyph.include(r250_VBarRight(r649_r, r649_t, r1_mix(r649_t, r649_b, 1 / 3), r649_fine));
                    r649_currentGlyph.include(r250_VBarRight(r649_r, r1_mix(r649_t, r649_b, 2 / 3), r649_b, r649_fine));
                    r250_xn$save$2Lrc5.call(r649_currentGlyph, 'fwbox');
                    r250_dependencyProfile[r649_currentGlyph.name] = r250_getDependencyProfile(r649_currentGlyph);
                    return r649_currentGlyph;
                }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/autobuilds.ptl.11', r250_xn$donothing$2Lrc0b)));
                _r634_t1 = 1;
                _r634_t2 = 255;
                r634_j = _r634_t1;
                _r634_t11 = r634_j < _r634_t2;
                for (; _r634_t11; _r634_t11 = r634_j < _r634_t2)
                    _r634_t12 = (r250_unicodeGlyphs[65280 + r634_j] && r250_unicodeGlyphs[65280 + r634_j].advanceWidth === r250_UPM ? r250_glyphs.fwbox ? r250_unicodeGlyphs[65280 + r634_j].include(r250_glyphs.fwbox) : void 0 : void 0, r634_j = r634_j + 1);
                _r634_t9 = _r634_t12;
            }
            return _r634_t9;
        }();
    else
        return void 0;
};
