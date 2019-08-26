'use strict';
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t11, _r1_t12;
var _r1_class8 = function _r1_t11(r150_x, r150_y) {
    var _r150_t0 = this;
    _r150_t0.x = r150_x;
    _r150_t0.y = r150_y;
    return void 0;
};
var _r1_t9 = require('../support/utils');
var r1_mix = _r1_t9.mix;
var r1_linreg = _r1_t9.linreg;
var r1_clamp = _r1_t9.clamp;
var r1_fallback = _r1_t9.fallback;
var _r1_t10 = require('../meta/aesthetics');
var r1_designParameters = _r1_t10.designParameters;
var r1_maskBit = require('../support/mask-bit');
exports.apply = r1_apply = function _r1_t12() {
    var _r250_t7 = this;
    var r250_xn$capture$2Lrc = _r250_t7;
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
    if (r250_recursive)
        return void 0;
    var r250_left = r250_MIDDLE - 0.25 * r250_WIDTH;
    var r250_right = r250_MIDDLE + 0.25 * r250_WIDTH;
    var r250_offsetY = 0.3 * (r250_symbolMid - r250_operTop);
    var r250_stress = 0.5 * r250_adviceBlackness(3.375);
    var r250_dotRadius = r250_PERIODRADIUS * Math.min(1, r250_stress / r250_HALFSTROKE);
    (function _r250_t9() {
        var _r253_t0 = this;
        var r253_currentGlyph = _r253_t0;
        if (!r253_currentGlyph)
            return void 0;
        if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-braille.ptl.1')
            r250_glyphList.pop();
        r253_currentGlyph['set-width'](r250_WIDTH);
        r250_xn$save$2Lrc5.call(r253_currentGlyph, 'brailleBlank', 10240);
        r250_dependencyProfile[r253_currentGlyph.name] = r250_getDependencyProfile(r253_currentGlyph);
        return r253_currentGlyph;
    }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-braille.ptl.1', r250_xn$donothing$2Lrc0b)));
    var _r250_t5 = 1;
    var _r250_t6 = 256;
    var r250_byte = _r250_t5;
    for (; r250_byte < _r250_t6; r250_byte = r250_byte + 1)
        (function _r250_t10() {
            var _r259_t2;
            var _r259_t3 = this;
            var r259_currentGlyph = _r259_t3;
            if (!r259_currentGlyph)
                return void 0;
            if (r250_glyphList[r250_glyphList.length - 1].name === '.WF.glyphs/symbol-braille.ptl.2')
                r250_glyphList.pop();
            var r259_dots = [];
            var r259_xn$ycoord$7uIe = function _r259_t5(r260_y) {
                return r250_symbolMid + r260_y * r250_offsetY;
            };
            var _r259_t0 = 0;
            var _r259_t1 = 8;
            var r259_bit = _r259_t0;
            for (; r259_bit < _r259_t1; r259_bit = r259_bit + 1)
                if (r1_maskBit(r250_byte, r259_bit)) {
                    r259_currentGlyph.include((_r259_t2 = r259_bit, 0 === _r259_t2 ? r250_DotAt(r250_left, r259_xn$ycoord$7uIe(-3), r250_dotRadius) : 1 === _r259_t2 ? r250_DotAt(r250_left, r259_xn$ycoord$7uIe(-1), r250_dotRadius) : 2 === _r259_t2 ? r250_DotAt(r250_left, r259_xn$ycoord$7uIe(1), r250_dotRadius) : 3 === _r259_t2 ? r250_DotAt(r250_right, r259_xn$ycoord$7uIe(-3), r250_dotRadius) : 4 === _r259_t2 ? r250_DotAt(r250_right, r259_xn$ycoord$7uIe(-1), r250_dotRadius) : 5 === _r259_t2 ? r250_DotAt(r250_right, r259_xn$ycoord$7uIe(1), r250_dotRadius) : 6 === _r259_t2 ? r250_DotAt(r250_left, r259_xn$ycoord$7uIe(3), r250_dotRadius) : 7 === _r259_t2 ? r250_DotAt(r250_right, r259_xn$ycoord$7uIe(3), r250_dotRadius) : void 0));
                    r259_dots.push(r259_bit + 1);
                }
            r259_currentGlyph.cmpPriority = -101;
            r250_xn$save$2Lrc5.call(r259_currentGlyph, 'braille' + r259_dots.join(''), 10240 + r250_byte);
            r250_dependencyProfile[r259_currentGlyph.name] = r250_getDependencyProfile(r259_currentGlyph);
            return r259_currentGlyph;
        }.call(r250_xn$createglyph$7Hrq('.WF.glyphs/symbol-braille.ptl.2', r250_xn$donothing$2Lrc0b)));
    r250_glyphs.braille7.cmpPriority = 101;
    r250_glyphs.braille37.cmpPriority = 102;
    r250_glyphs.braille3.cmpPriority = 101;
    r250_glyphs.braille237.cmpPriority = 103;
    r250_glyphs.braille27.cmpPriority = 102;
    r250_glyphs.braille23.cmpPriority = 102;
    r250_glyphs.braille2.cmpPriority = 101;
    r250_glyphs.braille1237.cmpPriority = 104;
    r250_glyphs.braille123.cmpPriority = 103;
    r250_glyphs.braille127.cmpPriority = 103;
    r250_glyphs.braille137.cmpPriority = 103;
    r250_glyphs.braille13.cmpPriority = 102;
    r250_glyphs.braille12.cmpPriority = 102;
    r250_glyphs.braille17.cmpPriority = 102;
    r250_glyphs.braille1.cmpPriority = 101;
    r250_glyphs.braille7.flatten = true;
    r250_glyphs.braille37.flatten = true;
    r250_glyphs.braille3.flatten = true;
    r250_glyphs.braille237.flatten = true;
    r250_glyphs.braille27.flatten = true;
    r250_glyphs.braille23.flatten = true;
    r250_glyphs.braille2.flatten = true;
    r250_glyphs.braille1237.flatten = true;
    r250_glyphs.braille123.flatten = true;
    r250_glyphs.braille127.flatten = true;
    r250_glyphs.braille137.flatten = true;
    r250_glyphs.braille13.flatten = true;
    r250_glyphs.braille12.flatten = true;
    r250_glyphs.braille17.flatten = true;
    return r250_glyphs.braille1.flatten = true;
};
