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
var r1_barmixL = _r1_t9.barmixL;
var r1_linreg = _r1_t9.linreg;
var r1_clamp = _r1_t9.clamp;
var r1_fallback = _r1_t9.fallback;
var _r1_t10 = require('../meta/aesthetics');
var r1_designParameters = _r1_t10.designParameters;
exports.apply = r1_apply = function _r1_t12() {
    var _r249_t184;
    var _r249_t7 = this;
    var r249_xn$capture$2Lrc = _r249_t7;
    var _r249_t0 = r249_xn$capture$2Lrc;
    var r249_metrics = _r249_t0.metrics;
    var r249_xn$NamedParameterPair$2Lrc9b = _r249_t0['$NamedParameterPair$'];
    var r249_xn$donothing$2Lrc0b = _r249_t0['$donothing$'];
    var r249_para = _r249_t0.para;
    var r249_recursive = _r249_t0.recursive;
    var r249_recursiveCodes = _r249_t0.recursiveCodes;
    var r249_variantSelector = _r249_t0.variantSelector;
    var r249_font = _r249_t0.font;
    var r249_glyphs = _r249_t0.glyphs;
    var r249_glyphList = _r249_t0.glyphList;
    var r249_unicodeGlyphs = _r249_t0.unicodeGlyphs;
    var r249_xn$createglyph$7Hrq = _r249_t0['create-glyph'];
    var r249_xn$save$2Lrc5 = _r249_t0['$save$'];
    var r249_xn$saveglyph$5sIl = _r249_t0['save-glyph'];
    var r249_spirofns = _r249_t0.spirofns;
    var r249_markset = _r249_t0.markset;
    var r249_MARK = _r249_t0.MARK;
    var r249_BASE = _r249_t0.BASE;
    var r249_AS_BASE = _r249_t0.AS_BASE;
    var r249_ALSO_METRICS = _r249_t0.ALSO_METRICS;
    var r249_pickHash = _r249_t0.pickHash;
    var r249_dependencyProfile = _r249_t0.dependencyProfile;
    var r249_getDependencyProfile = _r249_t0.getDependencyProfile;
    var r249_buildFont = _r249_t0.buildFont;
    var r249_newtemp = _r249_t0.newtemp;
    var r249_tagged = _r249_t0.tagged;
    var r249_TempFont = _r249_t0.TempFont;
    var r249_includeGlyphPart = _r249_t0.includeGlyphPart;
    var r249_compsiteMarkSet = _r249_t0.compsiteMarkSet;
    var r249_MarksetDiv = _r249_t0.MarksetDiv;
    var r249_DivFrame = _r249_t0.DivFrame;
    var _r249_t1 = r249_metrics;
    var r249_UPM = _r249_t1.UPM;
    var r249_WIDTH = _r249_t1.WIDTH;
    var r249_SB = _r249_t1.SB;
    var r249_CAP = _r249_t1.CAP;
    var r249_XH = _r249_t1.XH;
    var r249_DESCENDER = _r249_t1.DESCENDER;
    var r249_CONTRAST = _r249_t1.CONTRAST;
    var r249_symbolMid = _r249_t1.symbolMid;
    var r249_parenTop = _r249_t1.parenTop;
    var r249_parenBot = _r249_t1.parenBot;
    var r249_operTop = _r249_t1.operTop;
    var r249_operBot = _r249_t1.operBot;
    var r249_tackTop = _r249_t1.tackTop;
    var r249_tackBot = _r249_t1.tackBot;
    var r249_plusTop = _r249_t1.plusTop;
    var r249_plusBot = _r249_t1.plusBot;
    var r249_Italify = _r249_t1.Italify;
    var r249_Upright = _r249_t1.Upright;
    var r249_Scale = _r249_t1.Scale;
    var r249_Translate = _r249_t1.Translate;
    var r249_Rotate = _r249_t1.Rotate;
    var r249_globalTransform = _r249_t1.globalTransform;
    var r249_TANSLANT = _r249_t1.TANSLANT;
    var r249_SINSLANT = _r249_t1.SINSLANT;
    var r249_COSSLANT = _r249_t1.COSSLANT;
    var r249_HVCONTRAST = _r249_t1.HVCONTRAST;
    var r249_UPWARD = _r249_t1.UPWARD;
    var r249_DOWNWARD = _r249_t1.DOWNWARD;
    var r249_RIGHTWARD = _r249_t1.RIGHTWARD;
    var r249_LEFTWARD = _r249_t1.LEFTWARD;
    var r249_Upward = _r249_t1.Upward;
    var r249_Downward = _r249_t1.Downward;
    var r249_Leftward = _r249_t1.Leftward;
    var r249_Rightward = _r249_t1.Rightward;
    var r249_O = _r249_t1.O;
    var r249_OX = _r249_t1.OX;
    var r249_OXHOOK = _r249_t1.OXHOOK;
    var r249_HOOK = _r249_t1.HOOK;
    var r249_AHOOK = _r249_t1.AHOOK;
    var r249_SHOOK = _r249_t1.SHOOK;
    var r249_RHOOK = _r249_t1.RHOOK;
    var r249_JHOOK = _r249_t1.JHOOK;
    var r249_FHOOK = _r249_t1.FHOOK;
    var r249_HOOKX = _r249_t1.HOOKX;
    var r249_SMOOTH = _r249_t1.SMOOTH;
    var r249_SMALLSMOOTH = _r249_t1.SMALLSMOOTH;
    var r249_STROKE = _r249_t1.STROKE;
    var r249_DOTSIZE = _r249_t1.DOTSIZE;
    var r249_PERIODSIZE = _r249_t1.PERIODSIZE;
    var r249_BARPOS = _r249_t1.BARPOS;
    var r249_GBARPOS = _r249_t1.GBARPOS;
    var r249_PBARPOS = _r249_t1.PBARPOS;
    var r249_EBARPOS = _r249_t1.EBARPOS;
    var r249_OVERLAYPOS = _r249_t1.OVERLAYPOS;
    var r249_FIVEBARPOS = _r249_t1.FIVEBARPOS;
    var r249_LONGJUT = _r249_t1.LONGJUT;
    var r249_JUT = _r249_t1.JUT;
    var r249_VJUT = _r249_t1.VJUT;
    var r249_ACCENT = _r249_t1.ACCENT;
    var r249_ACCENTX = _r249_t1.ACCENTX;
    var r249_CTHIN = _r249_t1.CTHIN;
    var r249_CTHINB = _r249_t1.CTHINB;
    var r249_SLAB = _r249_t1.SLAB;
    var r249_TAILADJX = _r249_t1.TAILADJX;
    var r249_TAILADJY = _r249_t1.TAILADJY;
    var r249_LBALANCE = _r249_t1.LBALANCE;
    var r249_IBALANCE = _r249_t1.IBALANCE;
    var r249_LBALANCE2 = _r249_t1.LBALANCE2;
    var r249_IBALANCE2 = _r249_t1.IBALANCE2;
    var r249_JBALANCE = _r249_t1.JBALANCE;
    var r249_JBALANCE2 = _r249_t1.JBALANCE2;
    var r249_TBALANCE = _r249_t1.TBALANCE;
    var r249_TBALANCE2 = _r249_t1.TBALANCE2;
    var r249_RBALANCE = _r249_t1.RBALANCE;
    var r249_RBALANCE2 = _r249_t1.RBALANCE2;
    var r249_FBALANCE = _r249_t1.FBALANCE;
    var r249_ONEBALANCE = _r249_t1.ONEBALANCE;
    var r249_FULLWIDTH = _r249_t1.FULLWIDTH;
    var r249_FULLWIDTH1 = _r249_t1.FULLWIDTH1;
    var r249_FULLWIDTH2 = _r249_t1.FULLWIDTH2;
    var r249_FULLWIDTH3 = _r249_t1.FULLWIDTH3;
    var r249_OXE = _r249_t1.OXE;
    var r249_ESS = _r249_t1.ESS;
    var r249_ESSQUESTION = _r249_t1.ESSQUESTION;
    var r249_XO = _r249_t1.XO;
    var r249_CAPO = _r249_t1.CAPO;
    var r249_HALFSTROKE = _r249_t1.HALFSTROKE;
    var r249_RIGHTSB = _r249_t1.RIGHTSB;
    var r249_FWRSB = _r249_t1.FWRSB;
    var r249_MIDDLE = _r249_t1.MIDDLE;
    var r249_FWMIDDLE = _r249_t1.FWMIDDLE;
    var r249_CAPMIDDLE = _r249_t1.CAPMIDDLE;
    var r249_CAP_SMOOTH = _r249_t1.CAP_SMOOTH;
    var r249_DOTRADIUS = _r249_t1.DOTRADIUS;
    var r249_PERIODRADIUS = _r249_t1.PERIODRADIUS;
    var r249_SIDEJUT = _r249_t1.SIDEJUT;
    var r249_SMOOTHA = _r249_t1.SMOOTHA;
    var r249_SMOOTHB = _r249_t1.SMOOTHB;
    var r249_SMALLSMOOTHA = _r249_t1.SMALLSMOOTHA;
    var r249_SMALLSMOOTHB = _r249_t1.SMALLSMOOTHB;
    var r249_CORRECTION_OMIDX = _r249_t1.CORRECTION_OMIDX;
    var r249_CORRECTION_OMIDS = _r249_t1.CORRECTION_OMIDS;
    var r249_WHITENESS = _r249_t1.WHITENESS;
    var r249_adviceBlackness = _r249_t1.adviceBlackness;
    var r249_adviceBlackness2 = _r249_t1.adviceBlackness2;
    var r249_MVERTSTROKE = _r249_t1.MVERTSTROKE;
    var r249_MVERTSTROKE_D = _r249_t1.MVERTSTROKE_D;
    var r249_OVERLAYSTROKE = _r249_t1.OVERLAYSTROKE;
    var r249_OPERATORSTROKE = _r249_t1.OPERATORSTROKE;
    var r249_GEOMETRYSTROKE = _r249_t1.GEOMETRYSTROKE;
    var r249_SHOULDERFINE = _r249_t1.SHOULDERFINE;
    var r249_SUPERNESS = _r249_t1.SUPERNESS;
    var r249_superxy = _r249_t1.superxy;
    var r249_adviceSSmooth = _r249_t1.adviceSSmooth;
    var r249_adviceGlottalStopSmooth = _r249_t1.adviceGlottalStopSmooth;
    var r249_shoulderMidSlope = _r249_t1.shoulderMidSlope;
    var _r249_t2 = r249_spirofns;
    var r249_g4 = _r249_t2.g4;
    var r249_g2 = _r249_t2.g2;
    var r249_corner = _r249_t2.corner;
    var r249_flat = _r249_t2.flat;
    var r249_curl = _r249_t2.curl;
    var r249_close = _r249_t2.close;
    var r249_end = _r249_t2.end;
    var r249_straight = _r249_t2.straight;
    var r249_widths = _r249_t2.widths;
    var r249_xn$disablegizmo$3qIs = _r249_t2['disable-gizmo'];
    var r249_xn$disablecontrast$3qIs = _r249_t2['disable-contrast'];
    var r249_heading = _r249_t2.heading;
    var r249_unimportant = _r249_t2.unimportant;
    var r249_important = _r249_t2.important;
    var r249_alsothru = _r249_t2.alsothru;
    var r249_alsothruthem = _r249_t2.alsothruthem;
    var r249_bezcontrols = _r249_t2.bezcontrols;
    var r249_quadcontrols = _r249_t2.quadcontrols;
    var r249_archv = _r249_t2.archv;
    var r249_arcvh = _r249_t2.arcvh;
    var r249_complexThru = _r249_t2.complexThru;
    var r249_dispiro = _r249_t2.dispiro;
    var r249_xn$spirooutline$1aao = _r249_t2['spiro-outline'];
    var r249_union = _r249_t2.union;
    var r249_intersection = _r249_t2.intersection;
    var r249_difference = _r249_t2.difference;
    var _r249_t3 = r249_xn$capture$2Lrc.commonShapes;
    var r249_queryFeatureSelector = _r249_t3.queryFeatureSelector;
    var r249_xn$selectvariant$7Hrq = _r249_t3['select-variant'];
    var r249_xn$italicvariant$7Hrq = _r249_t3['italic-variant'];
    var r249_alias = _r249_t3.alias;
    var r249_composite = _r249_t3.composite;
    var r249_xn$intounicode$5sIl = _r249_t3['into-unicode'];
    var r249_turned = _r249_t3.turned;
    var r249_hcombine = _r249_t3.hcombine;
    var r249_vcombine = _r249_t3.vcombine;
    var r249_dual = _r249_t3.dual;
    var r249_vdual = _r249_t3.vdual;
    var r249_fwl = _r249_t3.fwl;
    var r249_fwr = _r249_t3.fwr;
    var r249_dwl = _r249_t3.dwl;
    var r249_dwr = _r249_t3.dwr;
    var r249_dwc = _r249_t3.dwc;
    var r249_Rect = _r249_t3.Rect;
    var r249_Ring = _r249_t3.Ring;
    var r249_RingAt = _r249_t3.RingAt;
    var r249_DotAt = _r249_t3.DotAt;
    var r249_CircleRing = _r249_t3.CircleRing;
    var r249_CircleRingAt = _r249_t3.CircleRingAt;
    var r249_CircleDotAt = _r249_t3.CircleDotAt;
    var r249_OShape = _r249_t3.OShape;
    var r249_OShapeOutline = _r249_t3.OShapeOutline;
    var r249_OBarLeftShape = _r249_t3.OBarLeftShape;
    var r249_OBarRightShape = _r249_t3.OBarRightShape;
    var r249_LeftwardTopSerif = _r249_t3.LeftwardTopSerif;
    var r249_LeftwardBottomSerif = _r249_t3.LeftwardBottomSerif;
    var r249_RightwardTopSerif = _r249_t3.RightwardTopSerif;
    var r249_RightwardBottomSerif = _r249_t3.RightwardBottomSerif;
    var r249_CenterTopSerif = _r249_t3.CenterTopSerif;
    var r249_CenterBottomSerif = _r249_t3.CenterBottomSerif;
    var r249_DownwardRightSerif = _r249_t3.DownwardRightSerif;
    var r249_UpwardRightSerif = _r249_t3.UpwardRightSerif;
    var r249_DownwardLeftSerif = _r249_t3.DownwardLeftSerif;
    var r249_UpwardLeftSerif = _r249_t3.UpwardLeftSerif;
    var r249_AIVSerifs = _r249_t3.AIVSerifs;
    var r249_AIHSerifs = _r249_t3.AIHSerifs;
    var r249_AINSerifs = _r249_t3.AINSerifs;
    var r249_AICyrISerifs = _r249_t3.AICyrISerifs;
    var r249_AIMSerifs = _r249_t3.AIMSerifs;
    var r249_halfXStrand = _r249_t3.halfXStrand;
    var r249_xStrand = _r249_t3.xStrand;
    var r249_nShoulderKnots = _r249_t3.nShoulderKnots;
    var r249_nShoulder = _r249_t3.nShoulder;
    var r249_mShoulderSpiro = _r249_t3.mShoulderSpiro;
    var r249_HBar = _r249_t3.HBar;
    var r249_HBarTop = _r249_t3.HBarTop;
    var r249_HBarBottom = _r249_t3.HBarBottom;
    var r249_HOverlayBar = _r249_t3.HOverlayBar;
    var r249_VBar = _r249_t3.VBar;
    var r249_VBarLeft = _r249_t3.VBarLeft;
    var r249_VBarRight = _r249_t3.VBarRight;
    var r249_VerticalHook = _r249_t3.VerticalHook;
    var r249_LegShape = _r249_t3.LegShape;
    var r249_LeftHook = _r249_t3.LeftHook;
    var r249_HooktopLeftBar = _r249_t3.HooktopLeftBar;
    var r249_CurlyTail = _r249_t3.CurlyTail;
    var r249_HCurlyTail = _r249_t3.HCurlyTail;
    var r249_FlatSlashShape = _r249_t3.FlatSlashShape;
    var r249_determineMixR = _r249_t3.determineMixR;
    var r249_HookShape = _r249_t3.HookShape;
    var r249_hookstart = _r249_t3.hookstart;
    var r249_hookend = _r249_t3.hookend;
    var r249_CyrDescender = _r249_t3.CyrDescender;
    var r249_refair = _r249_t3.refair;
    var r249_Fork = _r249_t3.Fork;
    var r249_Miniature = _r249_t3.Miniature;
    var r249_Thinner = _r249_t3.Thinner;
    var r249_Widen = _r249_t3.Widen;
    var r249_FlipAround = _r249_t3.FlipAround;
    var r249_ScaleAround = _r249_t3.ScaleAround;
    var r249_Realign = _r249_t3.Realign;
    var r249_ForceUpright = _r249_t3.ForceUpright;
    var r249_Overlay = _r249_t3.Overlay;
    var r249_diagCor = _r249_t3.diagCor;
    var _r249_t4 = r249_xn$capture$2Lrc.overmarks;
    var r249_markExtend = _r249_t4.markExtend;
    var r249_markHalfStroke = _r249_t4.markHalfStroke;
    var r249_markStress = _r249_t4.markStress;
    var r249_markFine = _r249_t4.markFine;
    var r249_markMiddle = _r249_t4.markMiddle;
    var r249_markDotsRadius = _r249_t4.markDotsRadius;
    var r249_aboveMarkTop = _r249_t4.aboveMarkTop;
    var r249_aboveMarkBot = _r249_t4.aboveMarkBot;
    var r249_aboveMarkMid = _r249_t4.aboveMarkMid;
    var r249_belowMarkBot = _r249_t4.belowMarkBot;
    var r249_belowMarkTop = _r249_t4.belowMarkTop;
    var r249_commaOvershoot = _r249_t4.commaOvershoot;
    var r249_commaOvershoot2 = _r249_t4.commaOvershoot2;
    var r249_commaAboveRadius = _r249_t4.commaAboveRadius;
    var r249_TildeShape = _r249_t4.TildeShape;
    var _r249_t5 = r249_xn$capture$2Lrc.letterBasic;
    var r249_ISerifShape = _r249_t5.ISerifShape;
    var r249_IotaShape = _r249_t5.IotaShape;
    var r249_LShape = _r249_t5.LShape;
    var r249_VShape = _r249_t5.VShape;
    var r249_YShape = _r249_t5.YShape;
    var r249_yBaseKnots = _r249_t5.yBaseKnots;
    var r249_SmallYShape = _r249_t5.SmallYShape;
    var r249_KShape = _r249_t5.KShape;
    var r249_PShape = _r249_t5.PShape;
    var r249_NShape = _r249_t5.NShape;
    var r249_UShape = _r249_t5.UShape;
    var r249_FShape = _r249_t5.FShape;
    var r249_LongSShape = _r249_t5.LongSShape;
    var r249_EShape = _r249_t5.EShape;
    var r249_SmallEShape = _r249_t5.SmallEShape;
    var r249_RevSmallEShape = _r249_t5.RevSmallEShape;
    (function _r249_t9() {
        var _r252_t0 = this;
        var r252_currentGlyph = _r252_t0;
        if (!r252_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.1')
            r249_glyphList.pop();
        r252_currentGlyph.include(r249_markset.e);
        var r252_middle = r1_mix(r249_SB, r249_RIGHTSB, 0.42);
        var r252_fine = r249_adviceBlackness(3.25);
        var r252_k1 = 0.25;
        var r252_k2 = 0.5;
        var r252_k3 = 0.35;
        r252_currentGlyph.include(r249_dispiro(r249_widths.rhs(r252_fine), r249_g4(r249_RIGHTSB - r249_OX * 1.75, r249_XH, r249_heading(r249_DOWNWARD)), r249_bezcontrols(r252_k1, r252_k2, r252_k3, 1, 6), r249_g4.left.mid(r252_middle + r249_CORRECTION_OMIDS, r249_O, r249_widths(0, r249_STROKE)), r249_archv(), r249_flat.ai(r249_SB + r249_OX * 2, r249_SMALLSMOOTHB), r249_curl.ai(r249_SB + r249_OX * 2, r249_XH - r249_SMALLSMOOTHA), r249_arcvh(), r249_g4.right.mid(r252_middle - r249_CORRECTION_OMIDS, r249_XO, r249_widths(0, r249_STROKE)), r249_bezcontrols(1 - r252_k3, 0, 1 - r252_k1, 1 - r252_k2, 6), r249_g4(r249_RIGHTSB - r249_OX * 2, 0, r249_widths.heading(0, r252_fine, r249_DOWNWARD))));
        r252_currentGlyph['set-anchor']('overlay', r249_BASE, r252_middle - r249_OX, r249_XH * r249_OVERLAYPOS);
        r249_xn$save$2Lrc5.call(r252_currentGlyph, 'alpha', 945);
        r249_xn$save$2Lrc5.call(r252_currentGlyph, 'latinalpha', 43876);
        r249_dependencyProfile[r252_currentGlyph.name] = r249_getDependencyProfile(r252_currentGlyph);
        return r252_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.1', r249_xn$donothing$2Lrc0b)));
    var r249_GammaShape = function _r249_t10(r258_top) {
        return function _r258_t2() {
            var _r260_t0 = this;
            var r260_currentGlyph = _r260_t0;
            r260_currentGlyph.include(r249_VBarLeft(r249_SB * 1.5, 0, r258_top));
            r260_currentGlyph.include(r249_HBarTop(r249_SB * 1.5 - r249_O, r249_RIGHTSB - r249_OX, r258_top));
            if (r249_SLAB) {
                r260_currentGlyph.include(r249_LeftwardTopSerif(r249_SB * 1.5, r258_top, r249_SIDEJUT));
                r260_currentGlyph.include(r249_CenterBottomSerif(r249_SB * 1.5 + r249_HVCONTRAST * r249_HALFSTROKE, 0, r249_JUT));
                r260_currentGlyph.include(r249_tagged('serifRT', r249_DownwardRightSerif(r249_RIGHTSB - r249_OX, r258_top, r249_VJUT)));
            }
            return void 0;
        };
    };
    (function _r249_t11() {
        var _r267_t0 = this;
        var r267_currentGlyph = _r267_t0;
        if (!r267_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.2')
            r249_glyphList.pop();
        r267_currentGlyph.include(r249_markset.capital);
        r267_currentGlyph.include(r249_GammaShape(r249_CAP));
        r249_xn$save$2Lrc5.call(r267_currentGlyph, 'Gamma', 915);
        r249_xn$save$2Lrc5.call(r267_currentGlyph, 'cyrGhe', 1043);
        r249_dependencyProfile[r267_currentGlyph.name] = r249_getDependencyProfile(r267_currentGlyph);
        return r267_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.2', r249_xn$donothing$2Lrc0b)));
    (function _r249_t12() {
        var _r273_t0 = this;
        var r273_currentGlyph = _r273_t0;
        if (!r273_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.3')
            r249_glyphList.pop();
        r273_currentGlyph.include(r249_markset.e);
        r273_currentGlyph.include(r249_GammaShape(r249_XH));
        r249_xn$save$2Lrc5.call(r273_currentGlyph, 'cyrghe.upright');
        r249_dependencyProfile[r273_currentGlyph.name] = r249_getDependencyProfile(r273_currentGlyph);
        return r273_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.3', r249_xn$donothing$2Lrc0b)));
    (function _r249_t13() {
        var _r278_t0 = this;
        var r278_currentGlyph = _r278_t0;
        if (!r278_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.4')
            r249_glyphList.pop();
        r249_includeGlyphPart(r278_currentGlyph, r249_glyphs, 'dotlessi', r249_AS_BASE);
        r249_includeGlyphPart(r278_currentGlyph, r249_glyphs, 'macronAbove');
        r249_xn$save$2Lrc5.call(r278_currentGlyph, 'cyrghe.serbian');
        r249_dependencyProfile[r278_currentGlyph.name] = r249_getDependencyProfile(r278_currentGlyph);
        return r278_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.4', r249_xn$donothing$2Lrc0b)));
    r249_xn$italicvariant$7Hrq('cyrghe', 1075);
    var r249_CyrGeShape = function _r249_t14(r282_top) {
        return function _r282_t2() {
            var _r284_t0 = this;
            var r284_currentGlyph = _r284_t0;
            r284_currentGlyph.include(r249_GammaShape(r282_top));
            r284_currentGlyph['eject-contour']('serifRT');
            r284_currentGlyph.include(r249_VBarRight(r249_RIGHTSB - r249_OX, r282_top, r282_top + r249_ACCENT));
            return void 0;
        };
    };
    (function _r249_t15() {
        var _r289_t0 = this;
        var r289_currentGlyph = _r289_t0;
        if (!r289_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.5')
            r249_glyphList.pop();
        r289_currentGlyph.include(r249_markset.capital);
        r289_currentGlyph.include(r249_CyrGeShape(r249_CAP));
        r249_xn$save$2Lrc5.call(r289_currentGlyph, 'cyrGe', 1168);
        r249_dependencyProfile[r289_currentGlyph.name] = r249_getDependencyProfile(r289_currentGlyph);
        return r289_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.5', r249_xn$donothing$2Lrc0b)));
    (function _r249_t16() {
        var _r294_t0 = this;
        var r294_currentGlyph = _r294_t0;
        if (!r294_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.6')
            r249_glyphList.pop();
        r294_currentGlyph.include(r249_markset.e);
        r294_currentGlyph.include(r249_CyrGeShape(r249_XH));
        r249_xn$save$2Lrc5.call(r294_currentGlyph, 'cyrge', 1169);
        r249_dependencyProfile[r294_currentGlyph.name] = r249_getDependencyProfile(r294_currentGlyph);
        return r294_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.6', r249_xn$donothing$2Lrc0b)));
    (function _r249_t17() {
        var _r299_t0 = this;
        var r299_currentGlyph = _r299_t0;
        if (!r299_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.7')
            r249_glyphList.pop();
        r249_includeGlyphPart(r299_currentGlyph, r249_glyphs, 'cyrGhe', r249_AS_BASE);
        r299_currentGlyph.include(r249_HOverlayBar(r249_SB * 0.3, r1_mix(r249_SB + r249_STROKE, r249_RIGHTSB - r249_STROKE, 0.55), r249_CAP * (1 - r249_OVERLAYPOS)));
        r249_xn$save$2Lrc5.call(r299_currentGlyph, 'cyrGhayn', 1170);
        r249_dependencyProfile[r299_currentGlyph.name] = r249_getDependencyProfile(r299_currentGlyph);
        return r299_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.7', r249_xn$donothing$2Lrc0b)));
    (function _r249_t18() {
        var _r304_t0 = this;
        var r304_currentGlyph = _r304_t0;
        if (!r304_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.8')
            r249_glyphList.pop();
        r249_includeGlyphPart(r304_currentGlyph, r249_glyphs, 'cyrghe.upright', r249_AS_BASE);
        r304_currentGlyph.include(r249_HOverlayBar(r249_SB * 0.3, r1_mix(r249_SB + r249_STROKE, r249_RIGHTSB - r249_STROKE, 0.55), r249_XH * (1 - r249_OVERLAYPOS)));
        r249_xn$save$2Lrc5.call(r304_currentGlyph, 'cyrghayn.upright');
        r249_dependencyProfile[r304_currentGlyph.name] = r249_getDependencyProfile(r304_currentGlyph);
        return r304_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.8', r249_xn$donothing$2Lrc0b)));
    (function _r249_t19() {
        var _r309_t0 = this;
        var r309_currentGlyph = _r309_t0;
        if (!r309_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.9')
            r249_glyphList.pop();
        r249_includeGlyphPart(r309_currentGlyph, r249_glyphs, 'cyrghe.italic', r249_AS_BASE);
        r309_currentGlyph.include(r249_FlatSlashShape(r249_MIDDLE, r249_XH / 2, r249_OVERLAYSTROKE / 2, -0.2, 0.75));
        r249_xn$save$2Lrc5.call(r309_currentGlyph, 'cyrghayn.italic');
        r249_xn$save$2Lrc5.call(r309_currentGlyph, 'voicedlaryngenalspirant', 7460);
        r249_dependencyProfile[r309_currentGlyph.name] = r249_getDependencyProfile(r309_currentGlyph);
        return r309_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.9', r249_xn$donothing$2Lrc0b)));
    r249_xn$italicvariant$7Hrq('cyrghayn', 1171);
    (function _r249_t20() {
        var _r315_t0 = this;
        var r315_currentGlyph = _r315_t0;
        if (!r315_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.10')
            r249_glyphList.pop();
        r315_currentGlyph.include(r249_markset.p);
        var r315_xmid = r1_mix(r249_SB, r249_RIGHTSB, 0.46) + r249_HALFSTROKE;
        r315_currentGlyph.include(r249_dispiro(r249_g4(r249_SB + 0.4 * r249_STROKE * r249_HVCONTRAST, r249_XH - r249_O, r249_widths.rhs()), r249_bezcontrols(0.33, 0.17, 1, 0.62, 6, r249_important), r249_flat(r315_xmid, 0), r249_curl(r315_xmid, r249_DESCENDER, r249_heading(r249_DOWNWARD))));
        r315_currentGlyph.include(r249_dispiro(r249_widths.rhs(), r249_flat(r249_RIGHTSB, r249_XH, r249_heading(r249_DOWNWARD)), r249_curl(r249_RIGHTSB, r249_XH * 0.9, r249_heading(r249_DOWNWARD)), r249_quadcontrols(0, 0.3, 6), r249_g4(r315_xmid, 0, r249_widths.rhs(r249_STROKE * 0.9))));
        r249_xn$save$2Lrc5.call(r315_currentGlyph, 'gamma', 947);
        r249_dependencyProfile[r315_currentGlyph.name] = r249_getDependencyProfile(r315_currentGlyph);
        return r315_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.10', r249_xn$donothing$2Lrc0b)));
    var r249_LambdaShape = function _r249_t21(r320_top, r320_sw, r320_barStraight, r320_div) {
        return function _r320_t2() {
            var _r322_t0 = this;
            var r322_currentGlyph = _r322_t0;
            var r322_df = r249_DivFrame(r1_fallback(r320_div, 1));
            r322_currentGlyph.include(r249_VShape(r320_top, r320_sw, r320_barStraight, r320_div));
            r322_currentGlyph.include(r249_FlipAround(r322_df.middle, r320_top / 2));
            if (r249_SLAB) {
                r322_currentGlyph.include(r249_CenterBottomSerif(r249_SB + r320_sw / 2 * r249_HVCONTRAST, 0, r249_JUT));
                r322_currentGlyph['tag-contour']('serif');
                r322_currentGlyph.include(r249_CenterBottomSerif(r249_RIGHTSB - r320_sw / 2 * r249_HVCONTRAST, 0, r249_JUT));
                r322_currentGlyph['tag-contour']('serif');
            }
            return void 0;
        };
    };
    var r249_DeltaMaskShape = function _r249_t22(r329_top, r329_sw, r329_barStraight, r329_div) {
        var r329_df = r249_DivFrame(r1_fallback(r329_div, 1));
        var r329_sbCor = r329_barStraight ? r329_top / r249_CAP * (r249_OX * (r249_SLAB ? 1 : 4)) : 0;
        return r249_xn$spirooutline$1aao(r249_corner(r249_SB + r329_sbCor, 0), r249_corner(r329_df.rightSB - r329_sbCor, 0), r249_corner(r329_df.middle, r249_CAP));
    };
    var r249_DeltaShape = function _r249_t23(r330_top, r330_sw, r330_barStraight, r330_div) {
        return function _r330_t2() {
            var _r332_t0 = this;
            var r332_currentGlyph = _r332_t0;
            r332_currentGlyph.include(r249_LambdaShape(r330_top, r330_sw, r330_barStraight, r330_div));
            r332_currentGlyph['eject-contour']('serif');
            r332_currentGlyph.include(r249_intersection(r249_HBarBottom(0, r249_WIDTH, 0, r330_sw), r249_DeltaMaskShape(r330_top, r330_sw, r330_barStraight, r330_div)));
            return void 0;
        };
    };
    (function _r249_t24() {
        var _r337_t0 = this;
        var r337_currentGlyph = _r337_t0;
        if (!r337_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.11')
            r249_glyphList.pop();
        r337_currentGlyph.include(r249_markset.capital);
        r337_currentGlyph.include(r249_LambdaShape(r249_CAP, r249_STROKE, r249_para.straightBar));
        r249_xn$save$2Lrc5.call(r337_currentGlyph, 'Lambda', 923);
        r249_xn$save$2Lrc5.call(r337_currentGlyph, 'latinLambda', 581);
        r249_dependencyProfile[r337_currentGlyph.name] = r249_getDependencyProfile(r337_currentGlyph);
        return r337_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.11', r249_xn$donothing$2Lrc0b)));
    (function _r249_t25() {
        var _r343_t0 = this;
        var r343_currentGlyph = _r343_t0;
        if (!r343_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.12')
            r249_glyphList.pop();
        r343_currentGlyph.include(r249_markset.capital);
        r343_currentGlyph.include(r249_DeltaShape(r249_CAP, r249_STROKE, r249_para.straightBar));
        r249_xn$save$2Lrc5.call(r343_currentGlyph, 'Delta', 916);
        r249_dependencyProfile[r343_currentGlyph.name] = r249_getDependencyProfile(r343_currentGlyph);
        return r343_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.12', r249_xn$donothing$2Lrc0b)));
    (function _r249_t26() {
        var _r348_t0 = this;
        var r348_currentGlyph = _r348_t0;
        if (!r348_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.13')
            r249_glyphList.pop();
        r348_currentGlyph.include(r249_markset.b);
        var r348_xNeck = r1_mix(r249_SB, r249_RIGHTSB, 0.07);
        var r348_bar = r1_mix(0, r249_XH, 0.96);
        var r348_xOTLeft = r1_mix(r249_SB, r249_RIGHTSB, 0.5);
        var r348_fine = r249_STROKE * 0.5;
        var r348_sma = r249_SMALLSMOOTHA * r348_bar / r249_XH;
        var r348_smb = r249_SMALLSMOOTHB * r348_bar / r249_XH;
        r348_currentGlyph.include(r249_dispiro(r249_widths.rhs(), r249_g4(r1_mix(r249_MIDDLE, r249_RIGHTSB, 0.85), r1_mix(r249_XH, r249_CAP, 0.8) - r249_STROKE, r249_heading(r249_LEFTWARD)), r249_alsothru(0.5, 0.7), r249_g4(r249_MIDDLE, r249_CAPO - r249_STROKE), r249_archv(2), r249_g4(r348_xNeck + r249_STROKE, r1_mix(r249_CAPO - r249_STROKE, r348_bar, 0.5)), r249_arcvh(2), r249_g4(r348_xOTLeft, r348_bar, r249_heading(r249_RIGHTWARD)), r249_alsothruthem([
            [
                0.25,
                0.05
            ],
            [
                0.5,
                0.13
            ]
        ]), r249_flat.ai(r249_RIGHTSB - r249_OX, r348_bar - r348_smb), r249_curl.ai(r249_RIGHTSB - r249_OX, r348_sma), r249_arcvh(), r249_g4.left.mid(r249_MIDDLE + r249_CORRECTION_OMIDS, r249_O), r249_archv(), r249_flat.ai(r249_SB + r249_OX, r348_smb), r249_curl.ai(r249_SB + r249_OX, r348_bar - r348_sma), r249_arcvh(), r249_g4(r348_xOTLeft, r348_bar - (r249_STROKE - r348_fine) / 2, r249_widths(0, r348_fine))));
        r249_xn$save$2Lrc5.call(r348_currentGlyph, 'delta', 948);
        r249_xn$save$2Lrc5.call(r348_currentGlyph, 'cyrbe.serbian');
        r249_xn$save$2Lrc5.call(r348_currentGlyph, 'latindelta', 7839);
        r249_dependencyProfile[r348_currentGlyph.name] = r249_getDependencyProfile(r348_currentGlyph);
        return r348_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.13', r249_xn$donothing$2Lrc0b)));
    r249_turned('turndelta', 397, 'delta', r249_MIDDLE, r249_XH / 2, r249_markset.p);
    (function _r249_t27() {
        var _r355_t0 = this;
        var r355_currentGlyph = _r355_t0;
        if (!r355_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.14')
            r249_glyphList.pop();
        r355_currentGlyph.include(r249_markset.b);
        r355_currentGlyph.include(r249_dispiro(r249_widths.rhs(r249_STROKE * r249_CTHINB), r249_flat(r249_SB + r249_OX + r249_STROKE * (1 - r249_CTHINB) * r249_HVCONTRAST, r249_SMALLSMOOTHB), r249_curl(r249_SB + r249_OX + r249_STROKE * (1 - r249_CTHINB) * r249_HVCONTRAST, r249_XH - r249_SMALLSMOOTHA), r249_arcvh(), r249_g4(r249_MIDDLE - r249_CORRECTION_OMIDS, r249_CAP * 0.7 - r249_O, r249_widths.rhs(r249_STROKE)), r249_archv(), r249_flat.ai(r249_RIGHTSB - r249_OX, r249_XH - r249_SMALLSMOOTHB), r249_curl.ai(r249_RIGHTSB - r249_OX, r249_SMALLSMOOTHA), r249_arcvh(), r249_g4(r249_MIDDLE + r249_CORRECTION_OMIDS, r249_O), r249_archv(), r249_flat(r249_SB + r249_OX, r249_SMALLSMOOTHB), r249_curl(r249_SB + r249_OX, r249_XH - r249_SMALLSMOOTHA), r249_alsothruthem([
            [
                0.25,
                0.79
            ],
            [
                0.5,
                0.87
            ]
        ], r249_important), r249_g4(r249_RIGHTSB - r249_HALFSTROKE * r249_HVCONTRAST, r249_CAP)));
        r249_xn$save$2Lrc5.call(r355_currentGlyph, 'cyrbe', 1073);
        r249_dependencyProfile[r355_currentGlyph.name] = r249_getDependencyProfile(r355_currentGlyph);
        return r355_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.14', r249_xn$donothing$2Lrc0b)));
    var r249_SmallEpsilonShape = function _r249_t28(r359_top, r359_hook) {
        return function _r359_t2() {
            var _r361_t0 = this;
            var r361_currentGlyph = _r361_t0;
            var r361_stroke = r249_adviceBlackness2(2.875, 2, r359_top);
            var r361_midx = r1_mix(r249_SB, r249_RIGHTSB, 0.65);
            var r361_midy = r359_top * r249_OVERLAYPOS;
            var r361_sma = r359_top - r1_mix(r361_midy + r361_stroke / 2, r359_top - r249_O - r361_stroke, r249_SMOOTHB / (r249_SMOOTHA + r249_SMOOTHB)) - r249_TANSLANT * r249_HVCONTRAST * r249_STROKE;
            var r361_smb = r1_mix(r249_STROKE + r249_O, r361_midy - r361_stroke / 2, r249_SMOOTHB / (r249_SMOOTHA + r249_SMOOTHB)) + r249_TANSLANT * r249_HVCONTRAST * r361_stroke;
            var r361_fine = r361_stroke * r249_CTHIN;
            r361_currentGlyph.include(r249_dispiro(r249_widths.lhs(), r249_g4(r249_RIGHTSB + r249_O, r359_top - r1_fallback(r359_hook, r249_SHOOK)), r249_hookstart(r359_top - r249_O), r249_g4(r249_SB + r249_OXE, r359_top - r361_sma), r249_arcvh(), r249_flat(r249_MIDDLE, r361_midy - (r361_fine - r361_stroke / 2), r249_widths.heading(r361_fine, 0, r249_RIGHTWARD)), r249_curl(r361_midx, r361_midy - (r361_fine - r361_stroke / 2), r249_heading(r249_RIGHTWARD))));
            r361_currentGlyph.include(r249_dispiro(r249_widths.rhs(), r249_g4(r249_RIGHTSB - r249_O, r1_fallback(r359_hook, r249_SHOOK)), r249_hookstart(r249_O), r249_g4(r249_SB + r249_OXE + r249_O * 2, r361_smb), r249_arcvh(), r249_flat(r249_MIDDLE, r361_midy + (r361_fine - r361_stroke / 2), r249_widths.heading(0, r361_fine, r249_RIGHTWARD)), r249_curl(r361_midx, r361_midy + (r361_fine - r361_stroke / 2), r249_heading(r249_RIGHTWARD))));
            return void 0;
        };
    };
    (function _r249_t29() {
        var _r365_t0 = this;
        var r365_currentGlyph = _r365_t0;
        if (!r365_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.15')
            r249_glyphList.pop();
        r365_currentGlyph.include(r249_markset.e);
        r365_currentGlyph.include(r249_SmallEpsilonShape(r249_XH));
        r249_xn$save$2Lrc5.call(r365_currentGlyph, 'epsilon', 949);
        r249_xn$save$2Lrc5.call(r365_currentGlyph, 'latinepsilon', 603);
        r249_dependencyProfile[r365_currentGlyph.name] = r249_getDependencyProfile(r365_currentGlyph);
        return r365_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.15', r249_xn$donothing$2Lrc0b)));
    (function _r249_t30() {
        var _r371_t0 = this;
        var r371_currentGlyph = _r371_t0;
        if (!r371_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.16')
            r249_glyphList.pop();
        r371_currentGlyph.include(r249_markset.capital);
        r371_currentGlyph.include(r249_SmallEpsilonShape(r249_CAP));
        r249_xn$save$2Lrc5.call(r371_currentGlyph, 'latinEpsilon', 400);
        r249_dependencyProfile[r371_currentGlyph.name] = r249_getDependencyProfile(r371_currentGlyph);
        return r371_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.16', r249_xn$donothing$2Lrc0b)));
    var r249_CyrZeShape = function _r249_t31(r375_top, r375_hook) {
        return function _r375_t2() {
            var _r377_t0 = this;
            var r377_currentGlyph = _r377_t0;
            var r377_stroke = r249_adviceBlackness2(2.875, 2, r375_top);
            var r377_midx = r1_mix(r249_RIGHTSB, r249_SB, 0.65);
            var r377_midy = r375_top * r249_OVERLAYPOS;
            var r377_smb = r375_top - r1_mix(r377_midy + r377_stroke / 2, r375_top - r249_O - r377_stroke, r249_SMOOTHA / (r249_SMOOTHA + r249_SMOOTHB)) + r249_TANSLANT * r249_HVCONTRAST * r377_stroke;
            var r377_sma = r1_mix(r377_stroke + r249_O, r377_midy - r377_stroke / 2, r249_SMOOTHA / (r249_SMOOTHA + r249_SMOOTHB)) - r249_TANSLANT * r249_HVCONTRAST * r377_stroke;
            var r377_fine = r377_stroke * r249_CTHIN;
            r377_currentGlyph.include(r249_dispiro(r249_widths.rhs(), r249_g4(r249_SB - r249_O, r375_top - r1_fallback(r375_hook, r249_SHOOK)), r249_hookstart(r375_top - r249_O), r249_g4(r249_RIGHTSB - r249_OXE, r375_top - r377_smb), r249_arcvh(), r249_flat(r249_MIDDLE, r377_midy - (r377_fine - r377_stroke / 2), r249_widths.heading(0, r377_fine, r249_LEFTWARD)), r249_curl(r377_midx, r377_midy - (r377_fine - r377_stroke / 2), r249_heading(r249_LEFTWARD))));
            r377_currentGlyph.include(r249_dispiro(r249_widths.lhs(), r249_g4(r249_SB + r249_O, r1_fallback(r375_hook, r249_SHOOK)), r249_hookstart(r249_O), r249_g4(r249_RIGHTSB - r249_OXE - r249_O * 2, r377_sma), r249_arcvh(), r249_flat(r249_MIDDLE, r377_midy + (r377_fine - r377_stroke / 2), r249_widths.heading(r377_fine, 0, r249_LEFTWARD)), r249_curl(r377_midx, r377_midy + (r377_fine - r377_stroke / 2), r249_heading(r249_LEFTWARD))));
            return void 0;
        };
    };
    (function _r249_t32() {
        var _r381_t0 = this;
        var r381_currentGlyph = _r381_t0;
        if (!r381_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.17')
            r249_glyphList.pop();
        r381_currentGlyph.include(r249_markset.capital);
        r381_currentGlyph.include(r249_CyrZeShape(r249_CAP, r249_HOOK));
        r249_xn$save$2Lrc5.call(r381_currentGlyph, 'cyrZe', 1047);
        r249_dependencyProfile[r381_currentGlyph.name] = r249_getDependencyProfile(r381_currentGlyph);
        return r381_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.17', r249_xn$donothing$2Lrc0b)));
    (function _r249_t33() {
        var _r386_t0 = this;
        var r386_currentGlyph = _r386_t0;
        if (!r386_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.18')
            r249_glyphList.pop();
        r386_currentGlyph.include(r249_markset.p);
        r386_currentGlyph.include(r249_CyrZeShape(r249_CAP, r249_HOOK));
        r386_currentGlyph['apply-transform'](r249_Upright());
        r386_currentGlyph['apply-transform'](r249_Translate(0, r249_XH - r249_CAP));
        r386_currentGlyph['apply-transform'](r249_Italify());
        r249_xn$save$2Lrc5.call(r386_currentGlyph, 'cyrze.BGR');
        r249_dependencyProfile[r386_currentGlyph.name] = r249_getDependencyProfile(r386_currentGlyph);
        return r386_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.18', r249_xn$donothing$2Lrc0b)));
    (function _r249_t34() {
        var _r394_t0 = this;
        var r394_currentGlyph = _r394_t0;
        if (!r394_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.19')
            r249_glyphList.pop();
        r394_currentGlyph.include(r249_markset.e);
        r394_currentGlyph.include(r249_CyrZeShape(r249_XH));
        r249_xn$save$2Lrc5.call(r394_currentGlyph, 'cyrze', 1079);
        r249_xn$save$2Lrc5.call(r394_currentGlyph, 'revlatinepsilon', 604);
        r249_dependencyProfile[r394_currentGlyph.name] = r249_getDependencyProfile(r394_currentGlyph);
        return r394_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.19', r249_xn$donothing$2Lrc0b)));
    r249_turned('closeepsilon', 666, 'closeturnepsilon', r249_MIDDLE, r249_XH / 2);
    (function _r249_t35() {
        var _r400_t0 = this;
        var r400_currentGlyph = _r400_t0;
        if (!r400_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.20')
            r249_glyphList.pop();
        r400_currentGlyph.include(r249_markset.capital);
        r249_includeGlyphPart(r400_currentGlyph, r249_glyphs, 'O', r249_AS_BASE);
        r400_currentGlyph.include(r249_HBar(r249_SB + r249_STROKE * r249_HVCONTRAST - r249_O * 3, r249_RIGHTSB - r249_STROKE * r249_HVCONTRAST + r249_O * 3, r249_CAPMIDDLE));
        r249_xn$save$2Lrc5.call(r400_currentGlyph, 'Theta', 920);
        r249_dependencyProfile[r400_currentGlyph.name] = r249_getDependencyProfile(r400_currentGlyph);
        return r400_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.20', r249_xn$donothing$2Lrc0b)));
    (function _r249_t36() {
        var _r406_t0 = this;
        var r406_currentGlyph = _r406_t0;
        if (!r406_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.21')
            r249_glyphList.pop();
        r406_currentGlyph.include(r249_markset.b);
        r406_currentGlyph.include(r249_OShape(r249_CAP, 0, r249_SB - r249_O, r249_RIGHTSB + r249_O, r249_STROKE, r249_SMALLSMOOTHA * 100, r249_SMALLSMOOTHB * 100));
        r406_currentGlyph.include(r249_HBar(r249_SB + r249_HALFSTROKE, r249_RIGHTSB - r249_HALFSTROKE, r249_CAPMIDDLE));
        r249_xn$save$2Lrc5.call(r406_currentGlyph, 'theta', 952);
        r249_dependencyProfile[r406_currentGlyph.name] = r249_getDependencyProfile(r406_currentGlyph);
        return r406_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.21', r249_xn$donothing$2Lrc0b)));
    (function _r249_t37() {
        var _r412_t0 = this;
        var r412_currentGlyph = _r412_t0;
        if (!r412_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.22')
            r249_glyphList.pop();
        r412_currentGlyph.include(r249_markset.if);
        r412_currentGlyph.include(r249_HBar(r249_SB, r249_RIGHTSB + r249_O, r249_CAP - r249_HALFSTROKE));
        r412_currentGlyph.include(r249_dispiro(r249_widths.rhs(), r249_g4(r249_RIGHTSB + r249_O, r249_CAP - r249_STROKE), r249_bezcontrols(0.7, 0.35, 1, 0.64, 12), r249_g4.down.mid(r249_SB + r249_STROKE * r249_HVCONTRAST, r1_mix(0, r249_CAP, 0.54 * r249_SMALLSMOOTHB / (r249_SMALLSMOOTHA + r249_SMALLSMOOTHB))), r249_arcvh(), r249_g4(r1_mix(r249_SB, r249_RIGHTSB, 0.55), r249_STROKE, r249_heading(r249_RIGHTWARD)), r249_archv(12), r249_g4.down.mid(r249_RIGHTSB, r1_mix(r249_DESCENDER, r249_STROKE, 0.5), r249_heading(r249_DOWNWARD)), r249_arcvh(12), r249_flat(r249_RIGHTSB - (r249_STROKE - r1_mix(r249_DESCENDER, r249_STROKE, 0.5)) * 1.1, r249_DESCENDER, r249_heading(r249_LEFTWARD)), r249_curl(Math.min(r249_RIGHTSB - (r249_STROKE - r1_mix(r249_DESCENDER, r249_STROKE, 0.5)) * 1.1 - 1, r1_mix(r249_SB, r249_RIGHTSB, 0.5)), r249_DESCENDER, r249_heading(r249_LEFTWARD))));
        r249_xn$save$2Lrc5.call(r412_currentGlyph, 'zeta', 950);
        r249_dependencyProfile[r412_currentGlyph.name] = r249_getDependencyProfile(r412_currentGlyph);
        return r412_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.22', r249_xn$donothing$2Lrc0b)));
    (function _r249_t38() {
        var _r418_t0 = this;
        var r418_currentGlyph = _r418_t0;
        if (!r418_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.23')
            r249_glyphList.pop();
        r418_currentGlyph.include(r249_markset.if);
        r418_currentGlyph.include(r249_HBar(r249_SB, r249_RIGHTSB + r249_O, r249_CAP - r249_HALFSTROKE));
        var r418_xbar = r1_mix(r249_SB, r249_RIGHTSB, 0.85);
        var r418_ybar = r1_mix(0, r249_CAP, 0.55);
        r418_currentGlyph.include(r249_dispiro(r249_widths.rhs(), r249_g4.left.start(r418_xbar, r249_CAP - r249_STROKE), r249_archv(), r249_g4(r249_SB - r249_O * 2 + r249_STROKE * r249_HVCONTRAST, r1_mix(r249_CAP - r249_STROKE, r418_ybar, 0.6)), r249_arcvh(), r249_g4.right.end(r418_xbar - r249_HALFSTROKE * r249_TANSLANT, r418_ybar, r249_widths.rhs(r249_STROKE * r1_mix(r249_CTHIN, 1, 0.5)))));
        r418_currentGlyph.include(r249_dispiro(r249_widths.rhs(r249_STROKE * r1_mix(r249_CTHIN, 1, 0.5)), r249_g4.left.start(r418_xbar + r249_HALFSTROKE * r249_TANSLANT, r418_ybar - r249_STROKE), r249_bezcontrols(0.7, 0, 1, 0.6), r249_g4(r249_SB + r249_STROKE * r249_HVCONTRAST, r1_mix(0, r418_ybar, 0.45), r249_widths.rhs()), r249_arcvh(), r249_g4(r1_mix(r249_SB, r249_RIGHTSB, 0.5), r249_STROKE), r249_archv(), r249_g4.down.mid(r249_RIGHTSB, r1_mix(r249_DESCENDER, r249_STROKE, 0.5), r249_heading(r249_DOWNWARD)), r249_arcvh(), r249_flat(r249_RIGHTSB - (r249_STROKE - r1_mix(r249_DESCENDER, r249_STROKE, 0.5)) * 1.1, r249_DESCENDER, r249_heading(r249_LEFTWARD)), r249_curl(Math.min(r249_RIGHTSB - (r249_STROKE - r1_mix(r249_DESCENDER, r249_STROKE, 0.5)) * 1.1 - 1, r1_mix(r249_SB, r249_RIGHTSB, 0.5)), r249_DESCENDER, r249_heading(r249_LEFTWARD))));
        r249_xn$save$2Lrc5.call(r418_currentGlyph, 'xi', 958);
        r249_dependencyProfile[r418_currentGlyph.name] = r249_getDependencyProfile(r418_currentGlyph);
        return r418_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.23', r249_xn$donothing$2Lrc0b)));
    (function _r249_t39() {
        var _r425_t0 = this;
        var r425_currentGlyph = _r425_t0;
        if (!r425_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.24')
            r249_glyphList.pop();
        r425_currentGlyph.include(r249_markset.p);
        r249_includeGlyphPart(r425_currentGlyph, r249_glyphs, 'u');
        r425_currentGlyph.include(r249_dispiro(r249_widths.rhs(), r249_flat(r249_SB, r249_DESCENDER, r249_heading(r249_UPWARD)), r249_curl(r249_SB, r249_DESCENDER / 2, r249_heading(r249_UPWARD)), r249_straight.up.end(r249_SB, r249_SMALLSMOOTHB, r249_widths.heading(0, r249_adviceBlackness(4), r249_UPWARD))));
        if (r249_SLAB)
            r425_currentGlyph.include(r249_LeftwardTopSerif(r249_SB, r249_XH, r249_SIDEJUT));
        r249_xn$save$2Lrc5.call(r425_currentGlyph, 'mu', 956);
        r249_dependencyProfile[r425_currentGlyph.name] = r249_getDependencyProfile(r425_currentGlyph);
        return r425_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.24', r249_xn$donothing$2Lrc0b)));
    (function _r249_t40() {
        var _r432_t0 = this;
        var r432_currentGlyph = _r432_t0;
        if (!r432_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.25')
            r249_glyphList.pop();
        r432_currentGlyph.include(r249_markset.capital);
        r432_currentGlyph.include(r249_HBar(r1_mix(r249_SB, r249_RIGHTSB, 0.125), r1_mix(r249_RIGHTSB, r249_SB, 0.125), r1_mix(0, r249_CAP, 0.54)));
        r432_currentGlyph.include(r249_HBar(r249_SB + r249_OX, r249_RIGHTSB - r249_OX, r249_CAP - r249_HALFSTROKE));
        r432_currentGlyph.include(r249_HBar(r249_SB + r249_OX, r249_RIGHTSB - r249_OX, 0 + r249_HALFSTROKE));
        if (r249_SLAB) {
            r432_currentGlyph.include(r249_DownwardLeftSerif(r249_SB + r249_OX, r249_CAP, r249_VJUT));
            r432_currentGlyph.include(r249_DownwardRightSerif(r249_RIGHTSB - r249_OX, r249_CAP, r249_VJUT));
            r432_currentGlyph.include(r249_UpwardLeftSerif(r249_SB + r249_OX, 0, r249_VJUT));
            r432_currentGlyph.include(r249_UpwardRightSerif(r249_RIGHTSB - r249_OX, 0, r249_VJUT));
        }
        r249_xn$save$2Lrc5.call(r432_currentGlyph, 'Xi', 926);
        r249_dependencyProfile[r432_currentGlyph.name] = r249_getDependencyProfile(r432_currentGlyph);
        return r432_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.25', r249_xn$donothing$2Lrc0b)));
    var r249_PiShape = function _r249_t41() {
        var _r442_t7 = arguments;
        var _r442_t0 = [].slice.call(_r442_t7, 0);
        var _r442_t1 = [];
        var _r442_t2 = 0;
        for (; _r442_t2 < _r442_t0.length; _r442_t2 = _r442_t2 + 1)
            if (!(_r442_t0[_r442_t2] instanceof r249_xn$NamedParameterPair$2Lrc9b))
                _r442_t1.push(_r442_t0[_r442_t2]);
        var r442_top = r1_fallback(r442_top, _r442_t1[0]);
        var r442_bottom = r1_fallback(r442_bottom, _r442_t1[1]);
        var r442_shrinkrate = r1_fallback(r442_shrinkrate, _r442_t1[2], 0.05);
        var r442__fine = r1_fallback(r442__fine, _r442_t1[3]);
        var r442_noserif = r1_fallback(r442_noserif, _r442_t1[4]);
        var r442_endShrink = r1_fallback(r442_endShrink, _r442_t1[5], 0);
        var r442_div = r1_fallback(r442_div, _r442_t1[6], 1);
        var _r442_t3 = _r442_t0;
        var _r442_t4 = _r442_t3.length;
        var _r442_t5 = 0;
        for (; _r442_t5 < _r442_t4; _r442_t5 = _r442_t5 + 1) {
            _r442_t2 = _r442_t3[_r442_t5];
            if (_r442_t2 && _r442_t2 instanceof r249_xn$NamedParameterPair$2Lrc9b && _r442_t2.left === 'top')
                r442_top = _r442_t2.right;
            if (_r442_t2 && _r442_t2 instanceof r249_xn$NamedParameterPair$2Lrc9b && _r442_t2.left === 'bottom')
                r442_bottom = _r442_t2.right;
            if (_r442_t2 && _r442_t2 instanceof r249_xn$NamedParameterPair$2Lrc9b && _r442_t2.left === 'shrinkrate')
                r442_shrinkrate = _r442_t2.right;
            if (_r442_t2 && _r442_t2 instanceof r249_xn$NamedParameterPair$2Lrc9b && _r442_t2.left === '_fine')
                r442__fine = _r442_t2.right;
            if (_r442_t2 && _r442_t2 instanceof r249_xn$NamedParameterPair$2Lrc9b && _r442_t2.left === 'noserif')
                r442_noserif = _r442_t2.right;
            if (_r442_t2 && _r442_t2 instanceof r249_xn$NamedParameterPair$2Lrc9b && _r442_t2.left === 'endShrink')
                r442_endShrink = _r442_t2.right;
            if (_r442_t2 && _r442_t2 instanceof r249_xn$NamedParameterPair$2Lrc9b && _r442_t2.left === 'div')
                r442_div = _r442_t2.right;
        }
        return function _r442_t8() {
            var _r447_t0 = this;
            var r447_currentGlyph = _r447_t0;
            var r447_df = r249_DivFrame(r442_div || 1);
            var r447_fine = r1_fallback(r442__fine, r249_STROKE);
            var r447_shrink = !r442_noserif && r249_SLAB ? 0 : r442_shrinkrate * (r447_df.rightSB - r249_SB);
            var r447_endexpand = !r442_noserif && r249_SLAB ? 0 : -r442_endShrink * (r447_df.rightSB - r249_SB) || r447_shrink / 2;
            r447_currentGlyph.include(r249_HBarTop(r249_SB - r447_endexpand, r447_df.rightSB + r447_endexpand, r442_top, r447_fine));
            r447_currentGlyph.include(r249_VBarLeft(r249_SB + r447_shrink, r442_bottom, r442_top - r447_fine / 2, r447_fine));
            r447_currentGlyph.include(r249_VBarRight(r447_df.rightSB - r447_shrink, r442_bottom, r442_top - r447_fine / 2, r447_fine));
            if (!r442_noserif && r249_SLAB) {
                r447_currentGlyph.include(r249_CenterBottomSerif(r249_SB + r447_shrink + r447_fine * 0.5 * r249_HVCONTRAST, r442_bottom, r249_JUT, r447_fine));
                r447_currentGlyph.include(r249_CenterBottomSerif(r447_df.rightSB - r447_shrink - r447_fine * 0.5 * r249_HVCONTRAST, r442_bottom, r249_JUT, r447_fine));
                r447_currentGlyph.include(r249_CenterTopSerif(r249_SB + r447_shrink + r447_fine * 0.5 * r249_HVCONTRAST, r442_top, r249_JUT, r447_fine));
                r447_currentGlyph.include(r249_CenterTopSerif(r447_df.rightSB - r447_shrink - r447_fine * 0.5 * r249_HVCONTRAST, r442_top, r249_JUT, r447_fine));
            }
            return void 0;
        };
    };
    (function _r249_t42() {
        var _r456_t0 = this;
        var r456_currentGlyph = _r456_t0;
        if (!r456_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.26')
            r249_glyphList.pop();
        r456_currentGlyph.include(r249_markset.capital);
        r456_currentGlyph.include(r249_PiShape(r249_CAP, 0, new r249_xn$NamedParameterPair$2Lrc9b('shrinkrate', 0)));
        r249_xn$save$2Lrc5.call(r456_currentGlyph, 'Pi', 928);
        r249_xn$save$2Lrc5.call(r456_currentGlyph, 'cyrPe', 1055);
        r249_dependencyProfile[r456_currentGlyph.name] = r249_getDependencyProfile(r456_currentGlyph);
        return r456_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.26', r249_xn$donothing$2Lrc0b)));
    (function _r249_t43() {
        var _r463_t0 = this;
        var r463_currentGlyph = _r463_t0;
        if (!r463_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.27')
            r249_glyphList.pop();
        r463_currentGlyph.include(r249_markset.e);
        r463_currentGlyph.include(r249_PiShape(r249_XH, 0, new r249_xn$NamedParameterPair$2Lrc9b('shrinkrate', 0.05), new r249_xn$NamedParameterPair$2Lrc9b('endShrink', 0.05)));
        r249_xn$save$2Lrc5.call(r463_currentGlyph, 'cyrpe.upright');
        r249_dependencyProfile[r463_currentGlyph.name] = r249_getDependencyProfile(r463_currentGlyph);
        return r463_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.27', r249_xn$donothing$2Lrc0b)));
    (function _r249_t44() {
        var _r470_t0 = this;
        var r470_currentGlyph = _r470_t0;
        if (!r470_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.28')
            r249_glyphList.pop();
        r249_includeGlyphPart(r470_currentGlyph, r249_glyphs, 'u', r249_AS_BASE);
        r249_includeGlyphPart(r470_currentGlyph, r249_glyphs, 'macronAbove');
        r249_xn$save$2Lrc5.call(r470_currentGlyph, 'cyrpe.serbian');
        r249_dependencyProfile[r470_currentGlyph.name] = r249_getDependencyProfile(r470_currentGlyph);
        return r470_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.28', r249_xn$donothing$2Lrc0b)));
    r249_xn$italicvariant$7Hrq('cyrpe', 1087);
    (function _r249_t45() {
        var _r475_t0 = this;
        var r475_currentGlyph = _r475_t0;
        if (!r475_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.29')
            r249_glyphList.pop();
        r475_currentGlyph.include(r249_markset.e);
        r475_currentGlyph.include(r249_PiShape(r249_XH, 0, new r249_xn$NamedParameterPair$2Lrc9b('noserif', true), new r249_xn$NamedParameterPair$2Lrc9b('shrinkrate', 0.06)));
        r249_xn$save$2Lrc5.call(r475_currentGlyph, 'pi', 960);
        r249_dependencyProfile[r475_currentGlyph.name] = r249_getDependencyProfile(r475_currentGlyph);
        return r475_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.29', r249_xn$donothing$2Lrc0b)));
    var r249_SigmaShape = function _r249_t46(r481_top, r481_bottom, r481__fine, r481_div) {
        return function _r481_t2() {
            var _r483_t0 = this;
            var r483_currentGlyph = _r483_t0;
            var r483_cor = 1.15;
            var r483_fine = r1_fallback(r481__fine, r249_STROKE);
            var r483_df = r249_DivFrame(r481_div || 1);
            r483_currentGlyph.include(r249_HBarTop(r249_SB, r483_df.rightSB, r481_top, r483_fine));
            r483_currentGlyph.include(r249_HBarBottom(r249_SB, r483_df.rightSB, r481_bottom, r483_fine));
            var r483_midx = r1_mix(r249_SB, r483_df.rightSB, 0.4);
            r483_currentGlyph['start-from'](r249_SB, r481_bottom + r483_fine);
            r483_currentGlyph['line-to'](r249_SB + r483_fine * r483_cor, r481_bottom + r483_fine);
            r483_currentGlyph['line-to'](r483_midx + r483_fine * r483_cor, r1_mix(r481_bottom, r481_top, 0.5));
            r483_currentGlyph['line-to'](r249_SB + r483_fine * r483_cor, r481_top - r483_fine);
            r483_currentGlyph['line-to'](r249_SB, r481_top - r483_fine);
            r483_currentGlyph['line-to'](r483_midx, r1_mix(r481_bottom, r481_top, 0.5));
            r483_currentGlyph['reverse-last']();
            if (r249_SLAB) {
                r483_currentGlyph.include(r249_DownwardRightSerif(r483_df.rightSB, r481_top, r249_VJUT));
                r483_currentGlyph.include(r249_UpwardRightSerif(r483_df.rightSB, r481_bottom, r249_VJUT));
            }
            return void 0;
        };
    };
    (function _r249_t47() {
        var _r496_t0 = this;
        var r496_currentGlyph = _r496_t0;
        if (!r496_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.30')
            r249_glyphList.pop();
        r496_currentGlyph['set-width'](r249_WIDTH);
        r496_currentGlyph.include(r249_markset.capital);
        r496_currentGlyph.include(r249_SigmaShape(r249_CAP, 0));
        r249_xn$save$2Lrc5.call(r496_currentGlyph, 'Sigma', 931);
        r249_xn$save$2Lrc5.call(r496_currentGlyph, 'latinSigma', 425);
        r249_dependencyProfile[r496_currentGlyph.name] = r249_getDependencyProfile(r496_currentGlyph);
        return r496_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.30', r249_xn$donothing$2Lrc0b)));
    (function _r249_t48() {
        var _r503_t0 = this;
        var r503_currentGlyph = _r503_t0;
        if (!r503_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.31')
            r249_glyphList.pop();
        var r503_df = r249_DivFrame(r249_para.diversityM, 3);
        r503_currentGlyph['set-width'](r503_df.width);
        r503_currentGlyph.include(r503_df.markSet.capital);
        var r503_y1 = r249_CAP * (r249_SLAB ? 0.175 : 0.125);
        var r503_y2 = r249_CAP * (r249_SLAB ? 0.825 : 0.875);
        r503_currentGlyph.include(r249_VBar(r503_df.middle, 0, r503_y1 + r249_HALFSTROKE));
        r503_currentGlyph.include(r249_OShape(r503_y2, r503_y1, r503_df.leftSB + r249_O, r503_df.rightSB - r249_O, r503_df.mvs, r249_SMOOTHA * r503_df.div, r249_SMOOTHB * r503_df.div));
        r503_currentGlyph.include(r249_VBar(r503_df.middle, r503_y1, r503_y2, r503_df.mvs));
        r503_currentGlyph.include(r249_VBar(r503_df.middle, r503_y2 - r249_HALFSTROKE, r249_CAP));
        if (r249_SLAB) {
            r503_currentGlyph.include(r249_tagged('serifMT', r249_CenterTopSerif(r503_df.middle, r249_CAP, r249_JUT)));
            r503_currentGlyph.include(r249_tagged('serifMB', r249_CenterBottomSerif(r503_df.middle, 0, r249_JUT)));
        }
        r249_xn$save$2Lrc5.call(r503_currentGlyph, 'Phi', 934);
        r249_xn$save$2Lrc5.call(r503_currentGlyph, 'cyrEf', 1060);
        r249_dependencyProfile[r503_currentGlyph.name] = r249_getDependencyProfile(r503_currentGlyph);
        return r503_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.31', r249_xn$donothing$2Lrc0b)));
    (function _r249_t49() {
        var _r515_t0 = this;
        var r515_currentGlyph = _r515_t0;
        if (!r515_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.32')
            r249_glyphList.pop();
        var r515_df = r249_DivFrame(r249_para.diversityM, 3);
        r515_currentGlyph['set-width'](r515_df.width);
        r515_currentGlyph.include(r515_df.markSet.e);
        var r515_x0 = r1_mix(r515_df.leftSB, r515_df.rightSB, 0.1);
        var r515_y1 = r1_mix(0, r249_XH, 0.75);
        var r515_x1 = r515_df.leftSB + r249_OX * 2;
        var r515_y3 = r249_XH * 0.66;
        var r515_y4 = r249_XH * 0.65;
        r515_currentGlyph.include(r249_dispiro(r249_widths.lhs(r515_df.mvs), r249_g4(r515_x0, r249_XH), r249_g4(r515_x1, r249_XH * 0.55), r249_arcvh(), r249_g4(r515_df.middle + r249_CORRECTION_OMIDS, r249_O), r249_archv(), r249_g4(r515_df.width - r515_x1, r249_XH * 0.55), r249_arcvh(8), r249_g4.left.mid(r1_mix(r515_df.width - r515_x1, r515_df.middle - r515_df.mvs / 2 * r249_HVCONTRAST, 0.525), r249_XH, r249_heading(r249_LEFTWARD)), r249_archv(), r249_flat(r515_df.middle - r515_df.mvs / 2 * r249_HVCONTRAST, r515_y3), r249_curl(r515_df.middle - r515_df.mvs / 2 * r249_HVCONTRAST, r515_df.mvs * 0.2, r249_heading(r249_DOWNWARD))));
        r249_xn$save$2Lrc5.call(r515_currentGlyph, 'taillessphi', 11383);
        r249_dependencyProfile[r515_currentGlyph.name] = r249_getDependencyProfile(r515_currentGlyph);
        return r515_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.32', r249_xn$donothing$2Lrc0b)));
    (function _r249_t50() {
        var _r521_t0 = this;
        var r521_currentGlyph = _r521_t0;
        if (!r521_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.33')
            r249_glyphList.pop();
        var r521_df = r249_DivFrame(r249_para.diversityM, 3);
        r521_currentGlyph['set-width'](r521_df.width);
        r521_currentGlyph.include(r521_df.markSet.p);
        r249_includeGlyphPart(r521_currentGlyph, r249_glyphs, 'taillessphi');
        r521_currentGlyph.include(r249_VBar(r521_df.middle, r249_DESCENDER, r521_df.mvs * 0.2));
        r249_xn$save$2Lrc5.call(r521_currentGlyph, 'phi', 966);
        r249_dependencyProfile[r521_currentGlyph.name] = r249_getDependencyProfile(r521_currentGlyph);
        return r521_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.33', r249_xn$donothing$2Lrc0b)));
    (function _r249_t51() {
        var _r528_t0 = this;
        var r528_currentGlyph = _r528_t0;
        if (!r528_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.34')
            r249_glyphList.pop();
        var r528_df = r249_DivFrame(r249_para.diversityM, 3);
        r528_currentGlyph['set-width'](r528_df.width);
        r528_currentGlyph.include(r528_df.markSet.if);
        var r528_y1 = 0;
        var r528_y2 = r249_XH;
        r528_currentGlyph.include(r249_VBar(r528_df.middle, r249_DESCENDER, r528_y1 + r249_HALFSTROKE));
        r528_currentGlyph.include(r249_OShape(r528_y2, r528_y1, r528_df.leftSB, r528_df.rightSB, r528_df.mvs, r249_SMOOTHA * r528_df.div, r249_SMOOTHB * r528_df.div, void 0, true));
        r528_currentGlyph.include(r249_VBar(r528_df.middle, r528_y1, r528_y2, r528_df.mvs));
        r528_currentGlyph.include(r249_VBar(r528_df.middle, r528_y2 - r249_HALFSTROKE, r249_CAP));
        r249_xn$save$2Lrc5.call(r528_currentGlyph, 'varphi', 981);
        r249_dependencyProfile[r528_currentGlyph.name] = r249_getDependencyProfile(r528_currentGlyph);
        return r528_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.34', r249_xn$donothing$2Lrc0b)));
    (function _r249_t52() {
        var _r537_t0 = this;
        var r537_currentGlyph = _r537_t0;
        if (!r537_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.35')
            r249_glyphList.pop();
        var r537_df = r249_DivFrame(r249_para.diversityM, 3);
        r249_includeGlyphPart(r537_currentGlyph, r249_glyphs, 'varphi', r249_AS_BASE, r249_ALSO_METRICS);
        if (r249_SLAB) {
            r537_currentGlyph.include(r249_tagged('serifMT', r249_CenterTopSerif(r537_df.middle, r249_CAP, r249_JUT)));
            r537_currentGlyph.include(r249_tagged('serifMB', r249_CenterBottomSerif(r537_df.middle, r249_DESCENDER, r249_JUT)));
        }
        r249_xn$save$2Lrc5.call(r537_currentGlyph, 'cyref', 1092);
        r249_xn$save$2Lrc5.call(r537_currentGlyph, 'latinphi', 632);
        r249_dependencyProfile[r537_currentGlyph.name] = r249_getDependencyProfile(r537_currentGlyph);
        return r537_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.35', r249_xn$donothing$2Lrc0b)));
    (function _r249_t53() {
        var _r544_t0 = this;
        var r544_currentGlyph = _r544_t0;
        if (!r544_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.36')
            r249_glyphList.pop();
        var r544_df = r249_DivFrame(r249_para.diversityM, 3);
        r544_currentGlyph['set-width'](r544_df.width);
        r544_currentGlyph.include(r544_df.markSet.capital);
        var r544_y = r249_CAP * 0.2;
        var r544_y2 = r249_CAP * (1 - 0.2 / r544_df.div);
        r544_currentGlyph.include(r249_dispiro(r249_widths.lhs(r544_df.mvs), r249_flat(r544_df.leftSB, r544_y2, r249_heading(r249_DOWNWARD)), r249_curl(r544_df.leftSB, r544_y + r249_SMOOTHB * r544_df.div), r249_arcvh(), r249_g4(r544_df.middle, r544_y, r249_heading(r249_RIGHTWARD)), r249_archv(), r249_flat(r544_df.rightSB, r544_y + r249_SMOOTHA * r544_df.div), r249_curl(r544_df.rightSB, r544_y2, r249_heading(r249_UPWARD))));
        r544_currentGlyph.include(r249_VBar(r544_df.middle, r544_y, r249_CAP, r544_df.mvs));
        r544_currentGlyph.include(r249_VBar(r544_df.middle, 0, r544_y + r249_HALFSTROKE));
        if (r249_SLAB) {
            r544_currentGlyph.include(r249_tagged('serifLT', r249_LeftwardTopSerif(r544_df.leftSB, r544_y2, r249_SIDEJUT)));
            r544_currentGlyph.include(r249_tagged('serifRT', r249_RightwardTopSerif(r544_df.rightSB, r544_y2, r249_SIDEJUT)));
            r544_currentGlyph.include(r249_tagged('serifMT', r249_CenterTopSerif(r544_df.middle, r249_CAP, r249_JUT)));
            r544_currentGlyph.include(r249_tagged('serifMB', r249_CenterBottomSerif(r544_df.middle, 0, r249_JUT)));
        }
        r249_xn$save$2Lrc5.call(r544_currentGlyph, 'Psi', 936);
        r249_dependencyProfile[r544_currentGlyph.name] = r249_getDependencyProfile(r544_currentGlyph);
        return r544_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.36', r249_xn$donothing$2Lrc0b)));
    (function _r249_t54() {
        var _r556_t0 = this;
        var r556_currentGlyph = _r556_t0;
        if (!r556_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.37')
            r249_glyphList.pop();
        var r556_df = r249_DivFrame(r249_para.diversityM, 3);
        r556_currentGlyph['set-width'](r556_df.width);
        r556_currentGlyph.include(r556_df.markSet.e);
        var r556_y = r249_XH * 0.3;
        var r556_y2 = r249_XH;
        r556_currentGlyph.include(r249_dispiro(r249_widths.lhs(r556_df.mvs), r249_flat(r556_df.leftSB, r556_y2, r249_heading(r249_DOWNWARD)), r249_curl(r556_df.leftSB, r556_y + r249_SMOOTHB * r556_df.div), r249_arcvh(), r249_g4(r556_df.middle, r556_y, r249_heading(r249_RIGHTWARD)), r249_archv(), r249_flat(r556_df.rightSB, r556_y + r249_SMOOTHA * r556_df.div), r249_curl(r556_df.rightSB, r556_y2, r249_heading(r249_UPWARD))));
        r556_currentGlyph.include(r249_VBar(r556_df.middle, r556_y, r249_XH, r556_df.mvs));
        r556_currentGlyph.include(r249_VBar(r556_df.middle, 0, r556_y + r249_HALFSTROKE));
        if (r249_SLAB) {
            r556_currentGlyph.include(r249_tagged('serifLT', r249_LeftwardTopSerif(r556_df.leftSB, r556_y2, r249_SIDEJUT)));
            r556_currentGlyph.include(r249_tagged('serifRT', r249_RightwardTopSerif(r556_df.rightSB, r556_y2, r249_SIDEJUT)));
            r556_currentGlyph.include(r249_tagged('serifMB', r249_CenterBottomSerif(r556_df.middle, 0, r249_JUT)));
        }
        r249_xn$save$2Lrc5.call(r556_currentGlyph, 'smcpPsi', 7466);
        r249_dependencyProfile[r556_currentGlyph.name] = r249_getDependencyProfile(r556_currentGlyph);
        return r556_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.37', r249_xn$donothing$2Lrc0b)));
    (function _r249_t55() {
        var _r567_t0 = this;
        var r567_currentGlyph = _r567_t0;
        if (!r567_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.38')
            r249_glyphList.pop();
        var r567_df = r249_DivFrame(r249_para.diversityM, 3);
        r567_currentGlyph['set-width'](r567_df.width);
        r567_currentGlyph.include(r567_df.markSet.if);
        r567_currentGlyph.include(r249_dispiro(r249_widths.lhs(r567_df.mvs), r249_flat(r567_df.leftSB, r249_XH, r249_heading(r249_DOWNWARD)), r249_curl(r567_df.leftSB, r249_SMALLSMOOTHB), r249_arcvh(), r249_g4(r567_df.middle, r249_O, r249_heading(r249_RIGHTWARD)), r249_archv(), r249_flat(r567_df.rightSB, r249_SMALLSMOOTHA), r249_curl(r567_df.rightSB, r249_XH, r249_heading(r249_UPWARD))));
        r567_currentGlyph.include(r249_VBar(r567_df.middle, 0, r249_CAP, r567_df.mvs));
        r567_currentGlyph.include(r249_VBar(r567_df.middle, r249_DESCENDER, r249_HALFSTROKE));
        if (r249_SLAB) {
            r567_currentGlyph.include(r249_LeftwardTopSerif(r567_df.leftSB, r249_XH, r249_SIDEJUT));
            r567_currentGlyph['tag-contour']('serifLT');
            if (!r249_para.isItalic)
                r567_currentGlyph.include(r249_tagged('serifRT', r249_RightwardTopSerif(r567_df.rightSB, r249_XH, r249_SIDEJUT)));
        }
        r249_xn$save$2Lrc5.call(r567_currentGlyph, 'psi', 968);
        r249_dependencyProfile[r567_currentGlyph.name] = r249_getDependencyProfile(r567_currentGlyph);
        return r567_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.38', r249_xn$donothing$2Lrc0b)));
    var r249_OmegaShape = function _r249_t56(r577_top, r577_extend, r577_sma, r577_smb) {
        return function _r577_t2() {
            var _r579_t0 = this;
            var r579_currentGlyph = _r579_t0;
            var r579_fine = r249_STROKE * r249_CTHIN;
            var r579_x1 = r1_mix(r249_SB, r249_RIGHTSB, 0.4);
            var r579_x2 = r249_WIDTH - r579_x1;
            var r579_yattach = r577_top * r577_extend + r249_STROKE;
            r579_currentGlyph.include(r249_dispiro(r249_g4(r579_x1, r579_yattach - r579_fine, r249_widths.heading(0, r579_fine, r249_LEFTWARD)), r249_archv(), r249_flat(r249_SB, r579_yattach - r249_STROKE + r577_smb, r249_widths(0, r249_STROKE)), r249_curl(r249_SB, r577_top - r577_sma), r249_arcvh(), r249_g4(r249_MIDDLE - r249_CORRECTION_OMIDS, r577_top - r249_O), r249_archv(), r249_flat(r249_RIGHTSB, r577_top - r577_smb), r249_curl(r249_RIGHTSB, r579_yattach - r249_STROKE + r577_sma), r249_arcvh(), r249_g4(r579_x2, r579_yattach - r579_fine, r249_widths.heading(0, r579_fine, r249_LEFTWARD))));
            r579_currentGlyph.include(r249_VBarRight(r579_x1, 0, r579_yattach, r579_fine));
            r579_currentGlyph.include(r249_HBar(r249_SB, r579_x1, r249_HALFSTROKE));
            r579_currentGlyph.include(r249_VBarLeft(r579_x2, 0, r579_yattach, r579_fine));
            r579_currentGlyph.include(r249_HBar(r579_x2, r249_RIGHTSB, r249_HALFSTROKE));
            return void 0;
        };
    };
    (function _r249_t57() {
        var _r586_t0 = this;
        var r586_currentGlyph = _r586_t0;
        if (!r586_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.39')
            r249_glyphList.pop();
        r586_currentGlyph.include(r249_markset.capital);
        r586_currentGlyph.include(r249_OmegaShape(r249_CAP, 0.08, r249_SMOOTHA, r249_SMOOTHB));
        r249_xn$save$2Lrc5.call(r586_currentGlyph, 'Omega', 937);
        r586_currentGlyph.include(r249_FlipAround(r249_MIDDLE, r249_CAP / 2));
        r249_xn$save$2Lrc5.call(r586_currentGlyph, 'latinUpsilon1', 433);
        r249_dependencyProfile[r586_currentGlyph.name] = r249_getDependencyProfile(r586_currentGlyph);
        return r586_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.39', r249_xn$donothing$2Lrc0b)));
    (function _r249_t58() {
        var _r593_t0 = this;
        var r593_currentGlyph = _r593_t0;
        if (!r593_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.40')
            r249_glyphList.pop();
        r593_currentGlyph.include(r249_markset.e);
        r593_currentGlyph.include(r249_OmegaShape(r249_XH, 0.08, r249_SMALLSMOOTHA, r249_SMALLSMOOTHB));
        r249_xn$save$2Lrc5.call(r593_currentGlyph, 'latinomega', 43877);
        r593_currentGlyph.include(r249_FlipAround(r249_MIDDLE, r249_XH / 2));
        r249_xn$save$2Lrc5.call(r593_currentGlyph, 'latinupsilon1', 650);
        r249_dependencyProfile[r593_currentGlyph.name] = r249_getDependencyProfile(r593_currentGlyph);
        return r593_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.40', r249_xn$donothing$2Lrc0b)));
    (function _r249_t59() {
        var _r600_t0 = this;
        var r600_currentGlyph = _r600_t0;
        if (!r600_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.41')
            r249_glyphList.pop();
        var r600_df = r249_DivFrame(r249_para.diversityM, 3);
        r600_currentGlyph['set-width'](r600_df.width);
        r600_currentGlyph.include(r249_MarksetDiv(r600_df.div).e);
        var r600_fine = r249_adviceBlackness(3.25, r600_df.div);
        var r600_mfine = r600_fine * r249_CTHIN;
        var r600_x0 = r1_mix(r600_df.leftSB, r600_df.rightSB, 0.1);
        var r600_y0 = r249_XH - r249_STROKE * 0.2;
        var r600_y1 = r1_mix(0, r249_XH, 0.8);
        var r600_x1 = r600_df.leftSB + r249_OX;
        var r600_y3 = r249_XH / 2;
        var r600_y4 = r249_XH * 0.65;
        r600_currentGlyph.include(r249_dispiro(r249_widths.lhs(r600_fine), r249_g4(r600_x0, r600_y0), r249_g4(r600_x1, r249_XH / 2), r249_arcvh(8), r249_g4(r1_mix(r600_x1, r600_df.middle + r600_fine / 2 * r249_HVCONTRAST, 0.5), r249_O, r249_heading(r249_RIGHTWARD)), r249_archv(8), r249_flat(r600_df.middle + (r600_mfine - r600_fine / 2) * r249_HVCONTRAST, r600_y3, r249_widths.heading(r600_mfine, 0, r249_UPWARD)), r249_curl(r600_df.middle + (r600_mfine - r600_fine / 2) * r249_HVCONTRAST, r600_y4, r249_heading(r249_UPWARD)), r249_end(function _r600_t2() {
            var _r604_t0 = this;
            return _r604_t0.angles = 4;
        })));
        r600_currentGlyph.include(r249_dispiro(r249_widths.rhs(r600_fine), r249_g4(r600_df.width - r600_x0, r600_y0), r249_g4(r600_df.width - r600_x1, r249_XH / 2), r249_arcvh(8), r249_g4(r1_mix(r600_df.width - r600_x1, r600_df.middle - r600_fine / 2 * r249_HVCONTRAST, 0.5), r249_O, r249_heading(r249_LEFTWARD)), r249_archv(8), r249_flat(r600_df.middle - (r600_mfine - r600_fine / 2) * r249_HVCONTRAST, r600_y3, r249_widths.heading(0, r600_mfine, r249_UPWARD)), r249_curl(r600_df.middle - (r600_mfine - r600_fine / 2) * r249_HVCONTRAST, r600_y4, r249_heading(r249_UPWARD)), r249_end(function _r600_t3() {
            var _r606_t0 = this;
            return _r606_t0.angles = 4;
        })));
        r249_xn$save$2Lrc5.call(r600_currentGlyph, 'omega', 969);
        r249_dependencyProfile[r600_currentGlyph.name] = r249_getDependencyProfile(r600_currentGlyph);
        return r600_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.41', r249_xn$donothing$2Lrc0b)));
    (function _r249_t60() {
        var _r609_t0 = this;
        var r609_currentGlyph = _r609_t0;
        if (!r609_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.42')
            r249_glyphList.pop();
        var r609_df = r249_DivFrame(r249_para.diversityM, 3);
        r609_currentGlyph['set-width'](r609_df.width);
        r249_includeGlyphPart(r609_currentGlyph, r249_glyphs, 'omega', r249_AS_BASE);
        r609_currentGlyph.include(r249_HBar(r609_df.leftSB, r609_df.rightSB, r249_XH - r249_HALFSTROKE));
        r249_xn$save$2Lrc5.call(r609_currentGlyph, 'pomega', 982);
        r249_dependencyProfile[r609_currentGlyph.name] = r249_getDependencyProfile(r609_currentGlyph);
        return r609_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.42', r249_xn$donothing$2Lrc0b)));
    (function _r249_t61() {
        var _r615_t0 = this;
        var r615_currentGlyph = _r615_t0;
        if (!r615_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.43')
            r249_glyphList.pop();
        var r615_df = r249_DivFrame(r249_para.diversityM, 3);
        r615_currentGlyph['set-width'](r615_df.width);
        r615_currentGlyph.include(r249_MarksetDiv(r615_df.div).e);
        var r615_fine = r249_adviceBlackness(3.25);
        var r615_mfine = r615_fine * r249_CTHIN;
        var r615_x0 = r615_df.middle - r249_CORRECTION_OMIDS;
        var r615_y0 = r249_XH - r249_O;
        var r615_y1 = r1_mix(0, r249_XH, 0.45);
        var r615_x1 = r615_df.leftSB + r249_OX;
        var r615_y3 = r249_XH / 2;
        var r615_y4 = r249_XH * 0.65;
        r615_currentGlyph.include(r249_dispiro(r249_widths.rhs(r615_mfine), r249_flat(r615_df.middle + (r615_mfine - r615_fine / 2) * r249_HVCONTRAST, r615_y4, r249_heading(r249_DOWNWARD)), r249_curl(r615_df.middle + (r615_mfine - r615_fine / 2) * r249_HVCONTRAST, r615_y3, r249_heading(r249_DOWNWARD)), r249_arcvh(8), r249_g4(r1_mix(r615_x1, r615_df.middle + r615_fine / 2 * r249_HVCONTRAST, 0.5), r249_O, r249_widths.heading(0, r615_fine, r249_LEFTWARD)), r249_archv(8), r249_g4(r615_x1, r615_y1), r249_arcvh(), r249_g4(r615_x0, r615_y0), r249_archv(), r249_g4(r615_df.width - r615_x1, r615_y1), r249_arcvh(8), r249_g4(r1_mix(r615_df.width - r615_x1, r615_df.middle - r615_fine / 2 * r249_HVCONTRAST, 0.5), r249_O, r249_heading(r249_LEFTWARD)), r249_archv(8), r249_flat(r615_df.middle - (r615_mfine - r615_fine / 2) * r249_HVCONTRAST, r615_y3, r249_widths.heading(0, r615_mfine, r249_UPWARD)), r249_curl(r615_df.middle - (r615_mfine - r615_fine / 2) * r249_HVCONTRAST, r615_y4, r249_heading(r249_UPWARD)), r249_end(function _r615_t2() {
            var _r619_t0 = this;
            return _r619_t0.angles = 4;
        })));
        r249_xn$save$2Lrc5.call(r615_currentGlyph, 'closeomega', 631);
        r249_dependencyProfile[r615_currentGlyph.name] = r249_getDependencyProfile(r615_currentGlyph);
        return r615_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.43', r249_xn$donothing$2Lrc0b)));
    var r249_CyrYeriShape = function _r249_t62(r621_top, r621__left, r621__right, r621__fine, r621__jut) {
        return function _r621_t2() {
            var _r623_t0 = this;
            var r623_currentGlyph = _r623_t0;
            var r623_fine = r1_fallback(r621__fine, r249_STROKE);
            var r623_left = r1_fallback(r621__left, r249_SB);
            var r623_right = r1_fallback(r621__right, r249_RIGHTSB);
            var r623_jut = r1_fallback(r621__jut, r249_JUT);
            var r623_bowl = r621_top * 0.55 + r249_HALFSTROKE;
            var r623_turnRadius = r623_bowl * 0.45;
            var r623_turnbottom = r1_mix(0, r623_bowl, r249_SMOOTHA / (r249_SMOOTHA + r249_SMOOTHB));
            var r623_trShrink = Math.pow((r623_right - r623_left) / (r249_RIGHTSB - r249_SB), 0.5);
            r623_currentGlyph.include(r249_dispiro(r249_widths.lhs(r623_fine), r249_flat(r623_left + r249_STROKE * 0.2, 0, r249_heading(r249_RIGHTWARD)), r249_curl(Math.max(r623_left + r623_fine * r249_HVCONTRAST, r623_right - r623_turnRadius * r623_trShrink) + r249_CORRECTION_OMIDX * r623_fine, 0), r249_archv(8), r249_g4(r623_right - r249_OX, r623_turnbottom), r249_arcvh(8), r249_flat(Math.max(r623_left + r623_fine * r249_HVCONTRAST, r623_right - r623_turnRadius * r623_trShrink) - r249_CORRECTION_OMIDX * r623_fine, r623_bowl), r249_curl(r623_left + r249_STROKE * 0.2, r623_bowl, r249_heading(r249_LEFTWARD))));
            r623_currentGlyph.include(r249_VBarLeft(r623_left, 0, r621_top, r623_fine));
            if (r249_SLAB) {
                r623_currentGlyph.include(r249_LeftwardBottomSerif(r623_left, 0, r623_jut - r623_fine / 2 * r249_HVCONTRAST));
                r623_currentGlyph['tag-contour']('serifYeriLB');
                r623_currentGlyph.include(r249_CenterTopSerif(r623_left + r623_fine / 2 * r249_HVCONTRAST, r621_top, r623_jut));
                r623_currentGlyph['tag-contour']('serifYeriLT');
            }
            return void 0;
        };
    };
    var r249_RevCyrYeriShape = function _r249_t63(r630_top, r630__left, r630__right, r630__fine, r630__jut) {
        return function _r630_t2() {
            var _r632_t0 = this;
            var r632_currentGlyph = _r632_t0;
            var r632_fine = r1_fallback(r630__fine, r249_STROKE);
            var r632_left = r1_fallback(r630__left, r249_SB);
            var r632_right = r1_fallback(r630__right, r249_RIGHTSB);
            var r632_jut = r1_fallback(r630__jut, r249_JUT);
            var r632_bowl = r630_top * 0.55 + r249_HALFSTROKE;
            var r632_turnRadius = r632_bowl * 0.45;
            var r632_turnbottom = r1_mix(0, r632_bowl, r249_SMOOTHB / (r249_SMOOTHA + r249_SMOOTHB));
            var r632_trShrink = Math.pow((r632_right - r632_left) / (r249_RIGHTSB - r249_SB), 0.5);
            r632_currentGlyph.include(r249_dispiro(r249_widths.rhs(), r249_flat(r632_right - r249_STROKE * 0.2, 0, r249_heading(r249_LEFTWARD)), r249_curl(r632_left + r632_turnRadius * r632_trShrink + r249_CORRECTION_OMIDX * r632_fine, 0), r249_archv(), r249_g4(r632_left + r249_O, r632_turnbottom, r249_widths.rhs(r632_fine)), r249_arcvh(), r249_flat(r632_left + r632_turnRadius * r632_trShrink - r249_CORRECTION_OMIDX * r632_fine, r632_bowl, r249_widths.rhs()), r249_curl(r632_right - r249_STROKE * 0.2, r632_bowl, r249_heading(r249_RIGHTWARD))));
            r632_currentGlyph.include(r249_VBarRight(r632_right, 0, r630_top, r632_fine));
            if (r249_SLAB) {
                r632_currentGlyph.include(r249_RightwardBottomSerif(r632_right, 0, r632_jut - r632_fine / 2 * r249_HVCONTRAST));
                r632_currentGlyph['tag-contour']('serifYeriRB');
                r632_currentGlyph.include(r249_CenterTopSerif(r632_right - r632_fine / 2 * r249_HVCONTRAST, r630_top, r632_jut));
                r632_currentGlyph['tag-contour']('serifYeriRT');
            }
            return void 0;
        };
    };
    (function _r249_t64() {
        var _r640_t0 = this;
        var r640_currentGlyph = _r640_t0;
        if (!r640_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.44')
            r249_glyphList.pop();
        r640_currentGlyph.include(r249_markset.capital);
        r640_currentGlyph.include(r249_CyrYeriShape(r249_CAP, r249_SB, r249_RIGHTSB));
        r249_xn$save$2Lrc5.call(r640_currentGlyph, 'cyrYeri', 1068);
        r249_dependencyProfile[r640_currentGlyph.name] = r249_getDependencyProfile(r640_currentGlyph);
        return r640_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.44', r249_xn$donothing$2Lrc0b)));
    (function _r249_t65() {
        var _r645_t0 = this;
        var r645_currentGlyph = _r645_t0;
        if (!r645_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.45')
            r249_glyphList.pop();
        r645_currentGlyph.include(r249_markset.e);
        r645_currentGlyph.include(r249_CyrYeriShape(r249_XH, r249_SB, r249_RIGHTSB));
        r249_xn$save$2Lrc5.call(r645_currentGlyph, 'cyryeri', 1100);
        r249_dependencyProfile[r645_currentGlyph.name] = r249_getDependencyProfile(r645_currentGlyph);
        return r645_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.45', r249_xn$donothing$2Lrc0b)));
    (function _r249_t66() {
        var _r650_t0 = this;
        var r650_currentGlyph = _r650_t0;
        if (!r650_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.46')
            r249_glyphList.pop();
        r249_includeGlyphPart(r650_currentGlyph, r249_glyphs, 'cyrYeri', r249_AS_BASE);
        r650_currentGlyph.include(r249_HBar(r249_SB, r1_mix(r249_SB, r249_RIGHTSB, 0.9), r249_CAP - r249_HALFSTROKE));
        if (r249_SLAB)
            r650_currentGlyph.include(r249_DownwardRightSerif(r1_mix(r249_SB, r249_RIGHTSB, 0.9), r249_CAP, r249_VJUT));
        r249_xn$save$2Lrc5.call(r650_currentGlyph, 'cyrBe', 1041);
        r249_xn$save$2Lrc5.call(r650_currentGlyph, 'latinBe', 386);
        r249_dependencyProfile[r650_currentGlyph.name] = r249_getDependencyProfile(r650_currentGlyph);
        return r650_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.46', r249_xn$donothing$2Lrc0b)));
    (function _r249_t67() {
        var _r657_t0 = this;
        var r657_currentGlyph = _r657_t0;
        if (!r657_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.47')
            r249_glyphList.pop();
        r249_includeGlyphPart(r657_currentGlyph, r249_glyphs, 'cyrYeri', r249_AS_BASE);
        r657_currentGlyph['eject-contour']('serifYeriLT');
        var r657_s = Math.max(r249_STROKE, r249_XH * 0.1);
        r657_currentGlyph['start-from'](r249_SB - r249_O, r249_CAP);
        r657_currentGlyph['line-to'](r249_SB, r249_CAP);
        r657_currentGlyph['line-to'](r249_SB - r657_s, r249_CAP - r657_s);
        r657_currentGlyph['line-to'](r249_SB, r249_CAP - r657_s * 2);
        r657_currentGlyph['line-to'](r249_SB - r249_O, r249_CAP - r657_s * 2);
        r657_currentGlyph['reverse-last']();
        r249_xn$save$2Lrc5.call(r657_currentGlyph, 'ZhuangToneSix', 388);
        r249_dependencyProfile[r657_currentGlyph.name] = r249_getDependencyProfile(r657_currentGlyph);
        return r657_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.47', r249_xn$donothing$2Lrc0b)));
    (function _r249_t68() {
        var _r668_t0 = this;
        var r668_currentGlyph = _r668_t0;
        if (!r668_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.48')
            r249_glyphList.pop();
        r668_currentGlyph.include(r249_markset.capital);
        r668_currentGlyph.include(r249_RevCyrYeriShape(r249_CAP));
        r668_currentGlyph.include(r249_HBarTop(r1_mix(r249_RIGHTSB, r249_SB, 0.9), r249_RIGHTSB + r249_O, r249_CAP));
        if (r249_SLAB)
            r668_currentGlyph.include(r249_DownwardLeftSerif(r1_mix(r249_RIGHTSB, r249_SB, 0.9), r249_CAP, r249_VJUT));
        r249_xn$save$2Lrc5.call(r668_currentGlyph, 'latinDe', 395);
        r249_dependencyProfile[r668_currentGlyph.name] = r249_getDependencyProfile(r668_currentGlyph);
        return r668_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.48', r249_xn$donothing$2Lrc0b)));
    var r249_CyrYerShape = function _r249_t69(r674_top) {
        return function _r674_t2() {
            var _r676_t0 = this;
            var r676_currentGlyph = _r676_t0;
            var r676_left = r249_SLAB ? r1_mix(r249_SB, r249_RIGHTSB, 0.35) - r249_MVERTSTROKE / 2 * r249_HVCONTRAST : r1_mix(r249_SB, r249_RIGHTSB, 0.2);
            var r676_barleft = r1_mix(0, r249_SB, r249_SLAB ? 0.25 : 0.375);
            r676_currentGlyph.include(r249_CyrYeriShape(r674_top, r676_left, r249_RIGHTSB - r249_O * 2));
            r676_currentGlyph.include(r249_HBarTop(r676_barleft, r249_STROKE * 0.1 + r676_left, r674_top));
            if (r249_SLAB)
                r676_currentGlyph.include(r249_DownwardLeftSerif(r676_barleft, r674_top, r249_VJUT, r249_MVERTSTROKE / r249_HVCONTRAST));
            return void 0;
        };
    };
    (function _r249_t70() {
        var _r681_t0 = this;
        var r681_currentGlyph = _r681_t0;
        if (!r681_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.49')
            r249_glyphList.pop();
        r681_currentGlyph.include(r249_markset.capital);
        r681_currentGlyph.include(r249_CyrYerShape(r249_CAP));
        r249_xn$save$2Lrc5.call(r681_currentGlyph, 'cyrYer', 1066);
        r249_dependencyProfile[r681_currentGlyph.name] = r249_getDependencyProfile(r681_currentGlyph);
        return r681_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.49', r249_xn$donothing$2Lrc0b)));
    (function _r249_t71() {
        var _r686_t0 = this;
        var r686_currentGlyph = _r686_t0;
        if (!r686_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.50')
            r249_glyphList.pop();
        r686_currentGlyph.include(r249_markset.e);
        r686_currentGlyph.include(r249_CyrYerShape(r249_XH));
        r249_xn$save$2Lrc5.call(r686_currentGlyph, 'cyryer', 1098);
        r249_dependencyProfile[r686_currentGlyph.name] = r249_getDependencyProfile(r686_currentGlyph);
        return r686_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.50', r249_xn$donothing$2Lrc0b)));
    var r249_CyrYeryShape = function _r249_t72(r690_top, r690_df) {
        return function _r690_t2() {
            var _r692_t0 = this;
            var r692_currentGlyph = _r692_t0;
            var r692_overshoot = r249_O * 2;
            r692_currentGlyph.include(r249_CyrYeriShape(r690_top, r690_df.leftSB + r692_overshoot, r1_mix(r690_df.rightSB - r690_df.mvs * r249_HVCONTRAST, r249_MIDDLE + r690_df.mvs / 2 * r249_HVCONTRAST, 0.75 / r690_df.div), r690_df.mvs, r249_JUT * 0.75));
            r692_currentGlyph.include(r249_VBarRight(r690_df.rightSB - r692_overshoot, 0, r690_top, r690_df.mvs));
            if (r249_SLAB) {
                r692_currentGlyph.include(r249_CenterTopSerif(r690_df.rightSB - r692_overshoot - r690_df.mvs / 2 * r249_HVCONTRAST, r690_top, r249_JUT * 0.75));
                r692_currentGlyph.include(r249_CenterBottomSerif(r690_df.rightSB - r692_overshoot - r690_df.mvs / 2 * r249_HVCONTRAST, 0, r249_JUT * 0.75));
            }
            return void 0;
        };
    };
    (function _r249_t73() {
        var _r698_t0 = this;
        var r698_currentGlyph = _r698_t0;
        if (!r698_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.51')
            r249_glyphList.pop();
        var r698_df = r249_DivFrame(r249_para.diversityM, 3);
        r698_currentGlyph['set-width'](r698_df.width);
        r698_currentGlyph.include(r698_df.markSet.capital);
        r698_currentGlyph.include(r249_CyrYeryShape(r249_CAP, r698_df));
        r249_xn$save$2Lrc5.call(r698_currentGlyph, 'cyrYery', 1067);
        r249_dependencyProfile[r698_currentGlyph.name] = r249_getDependencyProfile(r698_currentGlyph);
        return r698_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.51', r249_xn$donothing$2Lrc0b)));
    (function _r249_t74() {
        var _r704_t0 = this;
        var r704_currentGlyph = _r704_t0;
        if (!r704_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.52')
            r249_glyphList.pop();
        var r704_df = r249_DivFrame(r249_para.diversityM, 3);
        r704_currentGlyph['set-width'](r704_df.width);
        r704_currentGlyph.include(r704_df.markSet.e);
        r704_currentGlyph.include(r249_CyrYeryShape(r249_XH, r704_df));
        r249_xn$save$2Lrc5.call(r704_currentGlyph, 'cyryery', 1099);
        r249_dependencyProfile[r704_currentGlyph.name] = r249_getDependencyProfile(r704_currentGlyph);
        return r704_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.52', r249_xn$donothing$2Lrc0b)));
    var r249_CyrIShape = function _r249_t75(r709_top) {
        return function _r709_t2() {
            var _r711_t0 = this;
            var r711_currentGlyph = _r711_t0;
            var r711_topstroke = r249_adviceBlackness(4);
            var r711_halftopstroke = r711_topstroke / 2;
            r711_currentGlyph.include(r249_dispiro(r249_widths.lhs(), r249_flat(r249_RIGHTSB, 0, r249_heading(r249_UPWARD)), r249_curl(r249_RIGHTSB, r709_top * 0.4, r249_heading(r249_UPWARD)), r249_straight.up.end(r249_RIGHTSB, r709_top, r249_widths.heading(r711_topstroke, 0, r249_UPWARD))));
            r711_currentGlyph.include(r249_dispiro(r249_widths.lhs(), r249_flat(r249_SB, r709_top, r249_heading(r249_DOWNWARD)), r249_curl(r249_SB, r709_top * 0.6, r249_heading(r249_DOWNWARD)), r249_straight.down.end(r249_SB, 0, r249_widths.heading(r711_topstroke, 0, r249_DOWNWARD))));
            r711_currentGlyph.include(r249_dispiro(r249_flat(r249_RIGHTSB - r711_halftopstroke, r709_top, r249_widths.heading(0, r711_topstroke, r249_DOWNWARD)), r249_curl(r249_SB + r711_halftopstroke, 0, r249_widths.heading(r711_topstroke, 0, r249_DOWNWARD))));
            r711_currentGlyph.include(r249_AICyrISerifs(r709_top));
            return void 0;
        };
    };
    (function _r249_t76() {
        var _r717_t0 = this;
        var r717_currentGlyph = _r717_t0;
        if (!r717_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.53')
            r249_glyphList.pop();
        r717_currentGlyph.include(r249_markset.capital);
        r717_currentGlyph.include(r249_CyrIShape(r249_CAP));
        r249_xn$save$2Lrc5.call(r717_currentGlyph, 'cyrI', 1048);
        r249_dependencyProfile[r717_currentGlyph.name] = r249_getDependencyProfile(r717_currentGlyph);
        return r717_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.53', r249_xn$donothing$2Lrc0b)));
    (function _r249_t77() {
        var _r722_t0 = this;
        var r722_currentGlyph = _r722_t0;
        if (!r722_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.54')
            r249_glyphList.pop();
        r722_currentGlyph.include(r249_markset.e);
        r722_currentGlyph.include(r249_CyrIShape(r249_XH));
        r249_xn$save$2Lrc5.call(r722_currentGlyph, 'cyri.upright');
        r249_dependencyProfile[r722_currentGlyph.name] = r249_getDependencyProfile(r722_currentGlyph);
        return r722_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.54', r249_xn$donothing$2Lrc0b)));
    (function _r249_t78() {
        var _r727_t0 = this;
        var r727_currentGlyph = _r727_t0;
        if (!r727_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.55')
            r249_glyphList.pop();
        r249_includeGlyphPart(r727_currentGlyph, r249_glyphs, 'u', r249_AS_BASE);
        r249_xn$save$2Lrc5.call(r727_currentGlyph, 'cyri.italic');
        r249_dependencyProfile[r727_currentGlyph.name] = r249_getDependencyProfile(r727_currentGlyph);
        return r727_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.55', r249_xn$donothing$2Lrc0b)));
    r249_xn$italicvariant$7Hrq('cyri', 1080);
    var r249_CyrTseShape = function _r249_t79(r730_top) {
        return function _r730_t2() {
            var _r732_t0 = this;
            var r732_currentGlyph = _r732_t0;
            r732_currentGlyph.include(r249_VBarLeft(r249_SB, 0, r730_top));
            r732_currentGlyph.include(r249_HBarBottom(r249_SB, r249_RIGHTSB, 0));
            r732_currentGlyph.include(r249_VBarRight(r249_RIGHTSB, 0, r730_top));
            r732_currentGlyph.include(r249_CyrDescender(r249_RIGHTSB, 0.05));
            if (r249_SLAB) {
                r732_currentGlyph.include(r249_AIVSerifs(r730_top));
                r732_currentGlyph.include(r249_LeftwardBottomSerif(r249_SB, 0, r249_SIDEJUT));
                r732_currentGlyph.include(r249_RightwardBottomSerif(r249_RIGHTSB, 0, r249_SIDEJUT));
            }
            return void 0;
        };
    };
    (function _r249_t80() {
        var _r741_t0 = this;
        var r741_currentGlyph = _r741_t0;
        if (!r741_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.56')
            r249_glyphList.pop();
        r741_currentGlyph.include(r249_markset.capital);
        r741_currentGlyph.include(r249_CyrTseShape(r249_CAP));
        r249_xn$save$2Lrc5.call(r741_currentGlyph, 'cyrTse', 1062);
        r249_dependencyProfile[r741_currentGlyph.name] = r249_getDependencyProfile(r741_currentGlyph);
        return r741_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.56', r249_xn$donothing$2Lrc0b)));
    (function _r249_t81() {
        var _r746_t0 = this;
        var r746_currentGlyph = _r746_t0;
        if (!r746_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.57')
            r249_glyphList.pop();
        r746_currentGlyph.include(r249_markset.e);
        r746_currentGlyph.include(r249_CyrTseShape(r249_XH));
        r249_xn$save$2Lrc5.call(r746_currentGlyph, 'cyrtse.upright');
        r249_dependencyProfile[r746_currentGlyph.name] = r249_getDependencyProfile(r746_currentGlyph);
        return r746_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.57', r249_xn$donothing$2Lrc0b)));
    (function _r249_t82() {
        var _r751_t0 = this;
        var r751_currentGlyph = _r751_t0;
        if (!r751_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.58')
            r249_glyphList.pop();
        r751_currentGlyph.include(r249_markset.e);
        r249_includeGlyphPart(r751_currentGlyph, r249_glyphs, 'u');
        r751_currentGlyph['eject-contour']('serifLT');
        r751_currentGlyph.include(r249_CyrDescender(r249_RIGHTSB, 0.05));
        r249_xn$save$2Lrc5.call(r751_currentGlyph, 'cyrtse.italic');
        r249_dependencyProfile[r751_currentGlyph.name] = r249_getDependencyProfile(r751_currentGlyph);
        return r751_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.58', r249_xn$donothing$2Lrc0b)));
    r249_xn$italicvariant$7Hrq('cyrtse', 1094);
    var r249_CyrDzheShape = function _r249_t83(r757_top) {
        return function _r757_t2() {
            var _r759_t0 = this;
            var r759_currentGlyph = _r759_t0;
            r759_currentGlyph.include(r249_VBarLeft(r249_SB, 0, r757_top));
            r759_currentGlyph.include(r249_HBarBottom(r249_SB, r249_RIGHTSB, 0));
            r759_currentGlyph.include(r249_VBarRight(r249_RIGHTSB, 0, r757_top));
            r759_currentGlyph.include(r249_VBar(r249_MIDDLE, r249_DESCENDER, r249_STROKE));
            if (r249_SLAB) {
                r759_currentGlyph.include(r249_AIVSerifs(r757_top));
                r759_currentGlyph.include(r249_LeftwardBottomSerif(r249_SB, 0, r249_SIDEJUT));
                r759_currentGlyph.include(r249_RightwardBottomSerif(r249_RIGHTSB, 0, r249_SIDEJUT));
            }
            return void 0;
        };
    };
    (function _r249_t84() {
        var _r768_t0 = this;
        var r768_currentGlyph = _r768_t0;
        if (!r768_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.59')
            r249_glyphList.pop();
        r768_currentGlyph.include(r249_markset.if);
        r768_currentGlyph.include(r249_CyrDzheShape(r249_CAP));
        r249_xn$save$2Lrc5.call(r768_currentGlyph, 'cyrDzhe', 1039);
        r249_dependencyProfile[r768_currentGlyph.name] = r249_getDependencyProfile(r768_currentGlyph);
        return r768_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.59', r249_xn$donothing$2Lrc0b)));
    (function _r249_t85() {
        var _r773_t0 = this;
        var r773_currentGlyph = _r773_t0;
        if (!r773_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.60')
            r249_glyphList.pop();
        r773_currentGlyph.include(r249_markset.p);
        r773_currentGlyph.include(r249_CyrDzheShape(r249_XH));
        r249_xn$save$2Lrc5.call(r773_currentGlyph, 'cyrdzhe.upright');
        r249_dependencyProfile[r773_currentGlyph.name] = r249_getDependencyProfile(r773_currentGlyph);
        return r773_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.60', r249_xn$donothing$2Lrc0b)));
    (function _r249_t86() {
        var _r778_t0 = this;
        var r778_currentGlyph = _r778_t0;
        if (!r778_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.61')
            r249_glyphList.pop();
        r249_includeGlyphPart(r778_currentGlyph, r249_glyphs, 'u', r249_AS_BASE);
        r249_includeGlyphPart(r778_currentGlyph, r249_glyphs, 'barBelow');
        r249_xn$save$2Lrc5.call(r778_currentGlyph, 'cyrdzhe.italic');
        r249_dependencyProfile[r778_currentGlyph.name] = r249_getDependencyProfile(r778_currentGlyph);
        return r778_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.61', r249_xn$donothing$2Lrc0b)));
    r249_xn$italicvariant$7Hrq('cyrdzhe', 1119);
    var r249_CyrDeShape = function _r249_t87(r782_top) {
        return function _r782_t2() {
            var _r784_t0 = this;
            var r784_currentGlyph = _r784_t0;
            var r784_descenderOverflow = r249_SLAB ? r249_SIDEJUT : (r249_RIGHTSB - r249_SB) * 0.075;
            var r784_cutleft = r249_SB;
            var r784_cutright = r249_RIGHTSB;
            var r784_topleft = r1_mix(r784_cutleft, r784_cutright, 0.15);
            r784_currentGlyph.include(r249_HBarBottom(r784_cutleft - r784_descenderOverflow, r784_cutright + r784_descenderOverflow, 0));
            r784_currentGlyph.include(r249_VBarRight(r784_cutright, 0, r782_top));
            r784_currentGlyph.include(r249_halfXStrand(r784_topleft + r249_STROKE * r249_HVCONTRAST, r782_top, r784_cutleft + r249_HALFSTROKE * r249_HVCONTRAST * 0.8, r249_HALFSTROKE, 0.1, 0.75, 0.5));
            r784_currentGlyph.include(r249_VBarLeft(r784_cutleft - r784_descenderOverflow, -r249_LONGJUT + r249_HALFSTROKE, 0));
            r784_currentGlyph.include(r249_VBarRight(r784_cutright + r784_descenderOverflow, -r249_LONGJUT + r249_HALFSTROKE, 0));
            if (r249_SLAB)
                r784_currentGlyph.include(r249_dispiro(r249_widths.rhs(), r249_flat(r784_topleft - r784_descenderOverflow, r782_top), r249_curl(r784_cutright + r784_descenderOverflow, r782_top)));
            else
                r784_currentGlyph.include(r249_HBarTop(r784_topleft, r784_cutright, r782_top));
            return void 0;
        };
    };
    (function _r249_t88() {
        var _r793_t0 = this;
        var r793_currentGlyph = _r793_t0;
        if (!r793_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.62')
            r249_glyphList.pop();
        r793_currentGlyph.include(r249_markset.if);
        r793_currentGlyph.include(r249_CyrDeShape(r249_CAP));
        r249_xn$save$2Lrc5.call(r793_currentGlyph, 'cyrDe', 1044);
        r249_dependencyProfile[r793_currentGlyph.name] = r249_getDependencyProfile(r793_currentGlyph);
        return r793_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.62', r249_xn$donothing$2Lrc0b)));
    (function _r249_t89() {
        var _r798_t0 = this;
        var r798_currentGlyph = _r798_t0;
        if (!r798_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.63')
            r249_glyphList.pop();
        r798_currentGlyph.include(r249_markset.e);
        r798_currentGlyph.include(r249_CyrDeShape(r249_XH));
        r249_xn$save$2Lrc5.call(r798_currentGlyph, 'cyrde.upright');
        r249_dependencyProfile[r798_currentGlyph.name] = r249_getDependencyProfile(r798_currentGlyph);
        return r798_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.63', r249_xn$donothing$2Lrc0b)));
    (function _r249_t90() {
        var _r803_t0 = this;
        var r803_currentGlyph = _r803_t0;
        if (!r803_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.64')
            r249_glyphList.pop();
        r803_currentGlyph.include(r249_markset.b);
        r803_currentGlyph.include(r249_dispiro(r249_widths.lhs(r249_STROKE * r249_CTHINB), r249_flat(r249_RIGHTSB - r249_OX - r249_STROKE * r249_HVCONTRAST * (1 - r249_CTHINB), r249_SMALLSMOOTHA), r249_curl(r249_RIGHTSB - r249_OX - r249_STROKE * r249_HVCONTRAST * (1 - r249_CTHINB), r249_XH - r249_SMALLSMOOTHB), r249_arcvh(), r249_g4(r249_MIDDLE - r249_CORRECTION_OMIDS, r249_CAP * 0.7 - r249_O, r249_widths.lhs()), r249_archv(), r249_flat.ai(r249_SB + r249_OX, r249_XH - r249_SMALLSMOOTHA), r249_curl.ai(r249_SB + r249_OX, r249_SMALLSMOOTHB), r249_arcvh(), r249_g4(r249_MIDDLE + r249_CORRECTION_OMIDS, r249_O), r249_archv(), r249_flat(r249_RIGHTSB - r249_OX, r249_SMALLSMOOTHA), r249_curl(r249_RIGHTSB - r249_OX, r249_XH - r249_SMALLSMOOTHB), r249_quadcontrols(0, 0.8), r249_g4(r249_SB + r249_STROKE * 1.1, r249_CAP)));
        r249_xn$save$2Lrc5.call(r803_currentGlyph, 'cyrde.italic');
        r249_dependencyProfile[r803_currentGlyph.name] = r249_getDependencyProfile(r803_currentGlyph);
        return r803_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.64', r249_xn$donothing$2Lrc0b)));
    r249_xn$italicvariant$7Hrq('cyrde', 1076);
    var r249_CyrElShape = function _r249_t91(r807_top) {
        return function _r807_t2() {
            var _r809_t0 = this;
            var r809_currentGlyph = _r809_t0;
            var r809_cutleft = r1_mix(r249_SB, r249_RIGHTSB, 0.135);
            var r809_cutleft2 = r1_mix(r249_SB, r249_RIGHTSB, 0.075);
            var r809_cutright = r1_mix(r249_SB, r249_RIGHTSB, 1);
            r809_currentGlyph.include(r249_VBarRight(r809_cutright, 0, r807_top));
            r809_currentGlyph.include(r249_HBar(r809_cutleft, r809_cutright, r807_top - r249_HALFSTROKE));
            r809_currentGlyph.include(r249_LegShape(new r249_xn$NamedParameterPair$2Lrc9b('ztop', new _r1_class8(r809_cutleft, r807_top)), new r249_xn$NamedParameterPair$2Lrc9b('zbot', new _r1_class8(r1_mix(r249_SB, 0, r249_SLAB ? 1 : 0.75), 0)), new r249_xn$NamedParameterPair$2Lrc9b('xb', r809_cutleft2)));
            if (r249_SLAB) {
                r809_currentGlyph.include(r249_RightwardTopSerif(r809_cutright, r807_top, r249_SIDEJUT));
                r809_currentGlyph.include(r249_LeftwardTopSerif(r809_cutleft, r807_top, r249_SIDEJUT));
                r809_currentGlyph.include(r249_CenterBottomSerif(r809_cutright - r249_HALFSTROKE * r249_HVCONTRAST, 0, r249_JUT));
            }
            return void 0;
        };
    };
    (function _r249_t92() {
        var _r822_t0 = this;
        var r822_currentGlyph = _r822_t0;
        if (!r822_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.65')
            r249_glyphList.pop();
        r822_currentGlyph.include(r249_markset.capital);
        r822_currentGlyph.include(r249_CyrElShape(r249_CAP));
        r249_xn$save$2Lrc5.call(r822_currentGlyph, 'cyrEl', 1051);
        r249_dependencyProfile[r822_currentGlyph.name] = r249_getDependencyProfile(r822_currentGlyph);
        return r822_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.65', r249_xn$donothing$2Lrc0b)));
    (function _r249_t93() {
        var _r827_t0 = this;
        var r827_currentGlyph = _r827_t0;
        if (!r827_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.66')
            r249_glyphList.pop();
        r827_currentGlyph.include(r249_markset.e);
        r827_currentGlyph.include(r249_CyrElShape(r249_XH));
        r249_xn$save$2Lrc5.call(r827_currentGlyph, 'cyrel', 1083);
        r249_dependencyProfile[r827_currentGlyph.name] = r249_getDependencyProfile(r827_currentGlyph);
        return r827_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.66', r249_xn$donothing$2Lrc0b)));
    var r249_CyrZheShape = function _r249_t94(r831_top, r831_midtop, r831_df) {
        return function _r831_t2() {
            var r833_fineK;
            var _r833_t0 = this;
            var r833_currentGlyph = _r833_t0;
            var r833_fine = r249_adviceBlackness(3.3, r831_df.div);
            var r833_midx = r1_mix(r831_df.leftSB, r831_df.middle, 0.3);
            var r833_CyrAngleShape = function _r833_t2() {
                return function _r834_t2() {
                    var _r836_t0 = this;
                    var r836_currentGlyph = _r836_t0;
                    var r836_cor = r249_HVCONTRAST;
                    var r836_overshoot = r249_O * 3 * r831_df.div;
                    r836_currentGlyph['start-from'](r831_df.leftSB + r836_overshoot, 0);
                    r836_currentGlyph['line-to'](r831_df.leftSB + r833_fine * r836_cor + r836_overshoot, 0);
                    r836_currentGlyph['line-to'](r833_midx + r833_fine * r836_cor, r831_top / 2);
                    r836_currentGlyph['line-to'](r831_df.leftSB + r833_fine * r836_cor + r836_overshoot, r831_top);
                    r836_currentGlyph['line-to'](r831_df.leftSB + r836_overshoot, r831_top);
                    r836_currentGlyph['line-to'](r833_midx, r831_top / 2);
                    r836_currentGlyph['reverse-last']();
                    return void 0;
                };
            };
            r833_currentGlyph.include(r833_CyrAngleShape());
            r833_currentGlyph.include(r249_FlipAround(r831_df.middle, r831_top / 2));
            r833_currentGlyph.include(r833_CyrAngleShape());
            r833_currentGlyph.include(r249_VBar(r831_df.middle, 0, r831_midtop, r833_fine));
            r833_currentGlyph.include(r249_HBar(r833_midx, r831_df.width - r833_midx, r831_top / 2, r833_fine));
            if (r249_SLAB) {
                r833_fineK = 0.1;
                r833_currentGlyph.include(r249_LeftwardTopSerif(r831_df.leftSB + r833_fine * r833_fineK, r831_top, r249_SIDEJUT));
                r833_currentGlyph.include(r249_LeftwardBottomSerif(r831_df.leftSB + r833_fine * r833_fineK, 0, r249_SIDEJUT));
                r833_currentGlyph.include(r249_RightwardTopSerif(r831_df.rightSB - r833_fine * r833_fineK, r831_top, r249_SIDEJUT));
                r833_currentGlyph.include(r249_RightwardBottomSerif(r831_df.rightSB - r833_fine * r833_fineK, 0, r249_SIDEJUT));
            }
            return void 0;
        };
    };
    (function _r249_t95() {
        var _r854_t0 = this;
        var r854_currentGlyph = _r854_t0;
        if (!r854_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.67')
            r249_glyphList.pop();
        var r854_df = r249_DivFrame(r249_para.diversityM, 3);
        r854_currentGlyph['set-width'](r854_df.width);
        r854_currentGlyph.include(r854_df.markSet.capital);
        r854_currentGlyph.include(r249_CyrZheShape(r249_CAP, r249_CAP, r854_df));
        r249_xn$save$2Lrc5.call(r854_currentGlyph, 'cyrZhe', 1046);
        r249_dependencyProfile[r854_currentGlyph.name] = r249_getDependencyProfile(r854_currentGlyph);
        return r854_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.67', r249_xn$donothing$2Lrc0b)));
    r249_composite(r249_glyphs.cyrZhe, r249_CyrDescender(r249_DivFrame(r249_para.diversityM, 3).rightSB - r249_O * 2, void 0, true), r249_xn$intounicode$5sIl(1174));
    (function _r249_t96() {
        var _r860_t0 = this;
        var r860_currentGlyph = _r860_t0;
        if (!r860_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.68')
            r249_glyphList.pop();
        var r860_df = r249_DivFrame(r249_para.diversityM, 3);
        r860_currentGlyph['set-width'](r860_df.width);
        r860_currentGlyph.include(r860_df.markSet.e);
        r860_currentGlyph.include(r249_CyrZheShape(r249_XH, r249_XH, r860_df));
        r249_xn$save$2Lrc5.call(r860_currentGlyph, 'cyrzhe', 1078);
        r249_dependencyProfile[r860_currentGlyph.name] = r249_getDependencyProfile(r860_currentGlyph);
        return r860_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.68', r249_xn$donothing$2Lrc0b)));
    r249_composite(r249_glyphs.cyrzhe, r249_CyrDescender(r249_DivFrame(r249_para.diversityM, 3).rightSB - r249_O * 2, void 0, true), r249_xn$intounicode$5sIl(1175));
    (function _r249_t97() {
        var _r866_t0 = this;
        var r866_currentGlyph = _r866_t0;
        if (!r866_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.69')
            r249_glyphList.pop();
        var r866_df = r249_DivFrame(r249_para.diversityM, 3);
        r866_currentGlyph['set-width'](r866_df.width);
        r866_currentGlyph.include(r866_df.markSet.e);
        r866_currentGlyph.include(r249_CyrZheShape(r249_XH, r249_CAP, r866_df));
        r249_xn$save$2Lrc5.call(r866_currentGlyph, 'cyrzhe.BGR');
        r249_dependencyProfile[r866_currentGlyph.name] = r249_getDependencyProfile(r866_currentGlyph);
        return r866_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.69', r249_xn$donothing$2Lrc0b)));
    var r249_CyrBigYusShape = function _r249_t98(r871_top, r871_yp, r871_df) {
        return function _r871_t2() {
            var _r873_t0 = this;
            var r873_currentGlyph = _r873_t0;
            var r873_fine = r249_adviceBlackness(3.3, r871_df.div);
            var r873_cor = r249_HVCONTRAST;
            var r873_midx = r1_mix(r871_df.leftSB, r871_df.middle, 0.3);
            var r873_midx2 = Math.min(r871_df.middle - r873_fine * r873_cor, r1_mix(r871_df.leftSB, r871_df.middle, 0.75));
            var r873_yb = r871_top * r871_yp;
            var r873_tovershoot = 2;
            r873_currentGlyph['start-from'](r871_df.leftSB + r249_O * 2, 0);
            r873_currentGlyph['line-to'](r871_df.leftSB + r873_fine * r873_cor + r249_O * 2, 0);
            r873_currentGlyph['line-to'](r873_midx + r873_fine * r873_cor, r873_yb);
            r873_currentGlyph['line-to'](r873_midx, r873_yb);
            r873_currentGlyph['reverse-last']();
            r873_currentGlyph['start-from'](r873_midx2 + r873_fine * r873_cor, r873_yb);
            r873_currentGlyph['line-to'](r871_df.leftSB + r873_fine * r873_cor + r249_O * r873_tovershoot, r871_top);
            r873_currentGlyph['line-to'](r871_df.leftSB + r249_O * r873_tovershoot, r871_top);
            r873_currentGlyph['line-to'](r873_midx2, r873_yb);
            r873_currentGlyph['reverse-last']();
            r873_currentGlyph['start-from'](r871_df.width - r871_df.leftSB - r249_O * 2, 0);
            r873_currentGlyph['line-to'](r871_df.width - r871_df.leftSB - r873_fine * r873_cor - r249_O * 2, 0);
            r873_currentGlyph['line-to'](r871_df.width - r873_midx - r873_fine * r873_cor, r873_yb);
            r873_currentGlyph['line-to'](r871_df.width - r873_midx, r873_yb);
            r873_currentGlyph['start-from'](r871_df.width - r873_midx2 - r873_fine * r873_cor, r873_yb);
            r873_currentGlyph['line-to'](r871_df.width - r871_df.leftSB - r873_fine * r873_cor - r249_O * r873_tovershoot, r871_top);
            r873_currentGlyph['line-to'](r871_df.width - r871_df.leftSB - r249_O * r873_tovershoot, r871_top);
            r873_currentGlyph['line-to'](r871_df.width - r873_midx2, r873_yb);
            r873_currentGlyph.include(r249_VBar(r871_df.middle, 0, r873_yb, r873_fine));
            r873_currentGlyph.include(r249_HBarTop(r873_midx, r871_df.width - r873_midx, r873_yb, r873_fine));
            r873_currentGlyph.include(r249_HBarTop(r871_df.leftSB + r249_O * r873_tovershoot + r249_HVCONTRAST * r873_fine * 0.99, r871_df.rightSB - r249_O * r873_tovershoot - r249_HVCONTRAST * r873_fine * 0.99, r871_top, r873_fine));
            return void 0;
        };
    };
    (function _r249_t99() {
        var _r896_t0 = this;
        var r896_currentGlyph = _r896_t0;
        if (!r896_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.70')
            r249_glyphList.pop();
        var r896_df = r249_DivFrame(r249_para.diversityM, 3);
        r896_currentGlyph['set-width'](r896_df.width);
        r896_currentGlyph.include(r896_df.markSet.capital);
        r896_currentGlyph.include(r249_CyrBigYusShape(r249_CAP, 0.575, r896_df));
        r249_xn$save$2Lrc5.call(r896_currentGlyph, 'cyrbigYus', 1130);
        r249_dependencyProfile[r896_currentGlyph.name] = r249_getDependencyProfile(r896_currentGlyph);
        return r896_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.70', r249_xn$donothing$2Lrc0b)));
    (function _r249_t100() {
        var _r902_t0 = this;
        var r902_currentGlyph = _r902_t0;
        if (!r902_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.71')
            r249_glyphList.pop();
        var r902_df = r249_DivFrame(r249_para.diversityM, 3);
        r902_currentGlyph['set-width'](r902_df.width);
        r902_currentGlyph.include(r902_df.markSet.e);
        r902_currentGlyph.include(r249_CyrBigYusShape(r249_XH, 0.55, r902_df));
        r249_xn$save$2Lrc5.call(r902_currentGlyph, 'cyrbigyus', 1131);
        r249_dependencyProfile[r902_currentGlyph.name] = r249_getDependencyProfile(r902_currentGlyph);
        return r902_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.71', r249_xn$donothing$2Lrc0b)));
    var r249_CyrSmallYusShape = function _r249_t101(r907_top, r907_df) {
        return function _r907_t2() {
            var _r909_t0 = this;
            var r909_currentGlyph = _r909_t0;
            var r909_fine = r249_adviceBlackness(3.3, r907_df.div);
            r909_currentGlyph.include(r249_VShape(r907_top, r909_fine, r249_para.straightBar, r907_df.div));
            r909_currentGlyph['eject-contour']('serifLT');
            r909_currentGlyph['eject-contour']('serifRT');
            r909_currentGlyph.include(r249_FlipAround(r907_df.middle, r907_top / 2));
            var r909_p = r249_para.straightBar ? r1_linreg(18, 0.24, 108, 0.24, r249_STROKE) : r1_linreg(18, 0.16, 108, 0.16, r249_STROKE);
            var r909_bary = r907_top / 2;
            if (r249_SLAB && !r249_para.isItalic)
                r909_p = r909_p * 1.33;
            r909_currentGlyph.include(r249_HBarTop(r1_mix(r907_df.leftSB, r907_df.rightSB, r909_p), r1_mix(r907_df.rightSB, r907_df.leftSB, r909_p), r909_bary, r909_fine));
            r909_currentGlyph.include(r249_VBar(r907_df.middle, r909_bary, 0, r909_fine));
            if (r249_SLAB) {
                r909_currentGlyph.include(r249_tagged('serifLB', r249_LeftwardBottomSerif(r907_df.leftSB, 0, r249_SIDEJUT)));
                r909_currentGlyph.include(r249_tagged('serifRB', r249_RightwardBottomSerif(r907_df.rightSB, 0, r249_SIDEJUT)));
            }
            return void 0;
        };
    };
    (function _r249_t102() {
        var _r919_t0 = this;
        var r919_currentGlyph = _r919_t0;
        if (!r919_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.72')
            r249_glyphList.pop();
        var r919_df = r249_DivFrame(r249_para.diversityM, 3);
        r919_currentGlyph['set-width'](r919_df.width);
        r919_currentGlyph.include(r919_df.markSet.capital);
        r919_currentGlyph.include(r249_CyrSmallYusShape(r249_CAP, r919_df));
        r249_xn$save$2Lrc5.call(r919_currentGlyph, 'cyrsmallYus', 1126);
        r249_dependencyProfile[r919_currentGlyph.name] = r249_getDependencyProfile(r919_currentGlyph);
        return r919_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.72', r249_xn$donothing$2Lrc0b)));
    (function _r249_t103() {
        var _r925_t0 = this;
        var r925_currentGlyph = _r925_t0;
        if (!r925_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.73')
            r249_glyphList.pop();
        var r925_df = r249_DivFrame(r249_para.diversityM, 3);
        r925_currentGlyph['set-width'](r925_df.width);
        r925_currentGlyph.include(r925_df.markSet.e);
        r925_currentGlyph.include(r249_CyrSmallYusShape(r249_XH, r925_df));
        r249_xn$save$2Lrc5.call(r925_currentGlyph, 'cyrsmallyus', 1127);
        r249_dependencyProfile[r925_currentGlyph.name] = r249_getDependencyProfile(r925_currentGlyph);
        return r925_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.73', r249_xn$donothing$2Lrc0b)));
    var r249_CyrShaShape = function _r249_t104(r930_top, r930_df) {
        return function _r930_t2() {
            var r932_jut;
            var _r932_t0 = this;
            var r932_currentGlyph = _r932_t0;
            r932_currentGlyph.include(r249_union(r249_HBarBottom(r930_df.leftSB, r930_df.rightSB, 0), r249_VBarLeft(r930_df.leftSB, 0, r930_top, r930_df.mvs), r249_VBarRight(r930_df.rightSB, 0, r930_top, r930_df.mvs), r249_VBar(r930_df.middle, 0, r930_top, r930_df.mvs)));
            if (r249_SLAB) {
                r932_currentGlyph.include(r249_tagged('serifLB', r249_LeftwardBottomSerif(r930_df.leftSB, 0, r249_SIDEJUT)));
                r932_currentGlyph.include(r249_tagged('serifRB', r249_RightwardBottomSerif(r930_df.rightSB, 0, r249_SIDEJUT)));
                r932_jut = r249_JUT * r930_df.mvs / r249_STROKE + r249_O;
                if (r249_WIDTH * r930_df.div > r932_jut * 3.5) {
                    r932_currentGlyph.include(r249_tagged('serifLT', r249_CenterTopSerif(r930_df.leftSB + 0.5 * r930_df.mvs * r249_HVCONTRAST, r930_top, r932_jut, r930_df.mvs)));
                    r932_currentGlyph.include(r249_tagged('serifMT', r249_CenterTopSerif(r930_df.middle, r930_top, r932_jut, r930_df.mvs)));
                    r932_currentGlyph.include(r249_tagged('serifRT', r249_CenterTopSerif(r930_df.rightSB - 0.5 * r930_df.mvs * r249_HVCONTRAST, r930_top, r932_jut, r930_df.mvs)));
                } else {
                    r932_currentGlyph.include(r249_tagged('serifLT', r249_LeftwardTopSerif(r930_df.leftSB, r930_top, r249_SIDEJUT)));
                    r932_currentGlyph.include(r249_tagged('serifRT', r249_RightwardTopSerif(r930_df.rightSB, r930_top, r249_SIDEJUT)));
                }
            }
            return void 0;
        };
    };
    (function _r249_t105() {
        var _r942_t0 = this;
        var r942_currentGlyph = _r942_t0;
        if (!r942_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.74')
            r249_glyphList.pop();
        var r942_df = r249_DivFrame(r249_para.diversityM, 3);
        r942_currentGlyph['set-width'](r942_df.width);
        r942_currentGlyph.include(r942_df.markSet.capital);
        r942_currentGlyph.include(r249_CyrShaShape(r249_CAP, r942_df));
        r249_xn$save$2Lrc5.call(r942_currentGlyph, 'cyrSha', 1064);
        r249_dependencyProfile[r942_currentGlyph.name] = r249_getDependencyProfile(r942_currentGlyph);
        return r942_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.74', r249_xn$donothing$2Lrc0b)));
    (function _r249_t106() {
        var _r948_t0 = this;
        var r948_currentGlyph = _r948_t0;
        if (!r948_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.75')
            r249_glyphList.pop();
        var r948_df = r249_DivFrame(r249_para.diversityM, 3);
        r948_currentGlyph['set-width'](r948_df.width);
        r948_currentGlyph.include(r948_df.markSet.e);
        r948_currentGlyph.include(r249_CyrShaShape(r249_XH, r948_df));
        r249_xn$save$2Lrc5.call(r948_currentGlyph, 'cyrsha.upright');
        r249_dependencyProfile[r948_currentGlyph.name] = r249_getDependencyProfile(r948_currentGlyph);
        return r948_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.75', r249_xn$donothing$2Lrc0b)));
    r249_turned('cyrsha.italic', null, 'm', r249_DivFrame(r249_para.diversityM, 3).middle, r249_XH / 2);
    r249_xn$italicvariant$7Hrq('cyrsha', 1096);
    var r249_CyrShchaShape = function _r249_t107(r953_top, r953_df) {
        return function _r953_t2() {
            var _r955_t0 = this;
            var r955_currentGlyph = _r955_t0;
            r955_currentGlyph.include(r249_CyrShaShape(r953_top, r953_df));
            r955_currentGlyph.include(r249_CyrDescender(r953_df.rightSB, 0.05));
            return void 0;
        };
    };
    (function _r249_t108() {
        var _r959_t0 = this;
        var r959_currentGlyph = _r959_t0;
        if (!r959_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.76')
            r249_glyphList.pop();
        var r959_df = r249_DivFrame(r249_para.diversityM, 3);
        r959_currentGlyph['set-width'](r959_df.width);
        r959_currentGlyph.include(r959_df.markSet.capital);
        r959_currentGlyph.include(r249_CyrShchaShape(r249_CAP, r959_df));
        r249_xn$save$2Lrc5.call(r959_currentGlyph, 'cyrShcha', 1065);
        r249_dependencyProfile[r959_currentGlyph.name] = r249_getDependencyProfile(r959_currentGlyph);
        return r959_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.76', r249_xn$donothing$2Lrc0b)));
    (function _r249_t109() {
        var _r965_t0 = this;
        var r965_currentGlyph = _r965_t0;
        if (!r965_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.77')
            r249_glyphList.pop();
        var r965_df = r249_DivFrame(r249_para.diversityM, 3);
        r965_currentGlyph['set-width'](r965_df.width);
        r965_currentGlyph.include(r965_df.markSet.e);
        r965_currentGlyph.include(r249_CyrShchaShape(r249_XH, r965_df));
        r249_xn$save$2Lrc5.call(r965_currentGlyph, 'cyrshcha.upright');
        r249_dependencyProfile[r965_currentGlyph.name] = r249_getDependencyProfile(r965_currentGlyph);
        return r965_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.77', r249_xn$donothing$2Lrc0b)));
    (function _r249_t110() {
        var _r971_t0 = this;
        var r971_currentGlyph = _r971_t0;
        if (!r971_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.78')
            r249_glyphList.pop();
        var r971_df = r249_DivFrame(r249_para.diversityM, 3);
        r971_currentGlyph['set-width'](r971_df.width);
        r971_currentGlyph.include(r971_df.markSet.e);
        r249_includeGlyphPart(r971_currentGlyph, r249_glyphs, 'cyrsha.italic');
        r971_currentGlyph.include(r249_CyrDescender(r971_df.rightSB, 0.05));
        r249_xn$save$2Lrc5.call(r971_currentGlyph, 'cyrshcha.italic');
        r249_dependencyProfile[r971_currentGlyph.name] = r249_getDependencyProfile(r971_currentGlyph);
        return r971_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.78', r249_xn$donothing$2Lrc0b)));
    r249_xn$italicvariant$7Hrq('cyrshcha', 1097);
    (function _r249_t111() {
        var _r978_t0 = this;
        var r978_currentGlyph = _r978_t0;
        if (!r978_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.79')
            r249_glyphList.pop();
        var r978_df = r249_DivFrame(r249_para.diversityM, 3);
        r978_currentGlyph['set-width'](r978_df.width);
        r249_includeGlyphPart(r978_currentGlyph, r249_glyphs, 'cyrsha.italic', r249_AS_BASE);
        r249_includeGlyphPart(r978_currentGlyph, r249_glyphs, 'macronAbove');
        r249_xn$save$2Lrc5.call(r978_currentGlyph, 'cyrte.serbian');
        r249_dependencyProfile[r978_currentGlyph.name] = r249_getDependencyProfile(r978_currentGlyph);
        return r978_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.79', r249_xn$donothing$2Lrc0b)));
    r249_xn$italicvariant$7Hrq('cyrte', 1090);
    var r249_CyrCheShape = function _r249_t112(r983_top, r983__barp) {
        return function _r983_t2() {
            var _r985_t0 = this;
            var r985_currentGlyph = _r985_t0;
            var r985_bar = r983_top * r1_fallback(r983__barp, 0.5);
            r985_currentGlyph.include(r249_VBarRight(r249_RIGHTSB, 0, r983_top));
            r985_currentGlyph.include(r249_dispiro(r249_widths.lhs(), r249_flat(r249_SB, r983_top, r249_heading(r249_DOWNWARD)), r249_curl(r249_SB, r985_bar + r249_SMOOTHB - r249_HALFSTROKE), r249_arcvh(), r249_flat(r249_MIDDLE, r985_bar - r249_HALFSTROKE), r249_curl(r249_RIGHTSB - 1, r985_bar - r249_HALFSTROKE, r249_heading(r249_RIGHTWARD))));
            if (r249_SLAB) {
                r985_currentGlyph.include(r249_CenterTopSerif(r249_RIGHTSB - r249_HALFSTROKE * r249_HVCONTRAST, r983_top, r249_JUT));
                r985_currentGlyph.include(r249_CenterTopSerif(r249_SB + r249_HALFSTROKE * r249_HVCONTRAST, r983_top, r249_JUT));
                r985_currentGlyph.include(r249_CenterBottomSerif(r249_RIGHTSB - r249_HALFSTROKE * r249_HVCONTRAST, 0, r249_JUT));
            }
            return void 0;
        };
    };
    (function _r249_t113() {
        var _r992_t0 = this;
        var r992_currentGlyph = _r992_t0;
        if (!r992_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.80')
            r249_glyphList.pop();
        r992_currentGlyph.include(r249_markset.capital);
        r992_currentGlyph.include(r249_CyrCheShape(r249_CAP, r249_SLAB ? 0.45 : 0.35));
        r249_xn$save$2Lrc5.call(r992_currentGlyph, 'cyrChe', 1063);
        r249_dependencyProfile[r992_currentGlyph.name] = r249_getDependencyProfile(r992_currentGlyph);
        return r992_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.80', r249_xn$donothing$2Lrc0b)));
    r249_composite(r249_glyphs.cyrChe, r249_CyrDescender(r249_RIGHTSB), r249_xn$intounicode$5sIl(1206));
    (function _r249_t114() {
        var _r997_t0 = this;
        var r997_currentGlyph = _r997_t0;
        if (!r997_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.81')
            r249_glyphList.pop();
        r997_currentGlyph.include(r249_markset.e);
        r997_currentGlyph.include(r249_CyrCheShape(r249_XH, r249_SLAB ? 0.45 : 0.4));
        r249_xn$save$2Lrc5.call(r997_currentGlyph, 'cyrche', 1095);
        r249_dependencyProfile[r997_currentGlyph.name] = r249_getDependencyProfile(r997_currentGlyph);
        return r997_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.81', r249_xn$donothing$2Lrc0b)));
    r249_composite(r249_glyphs.cyrche, r249_CyrDescender(r249_RIGHTSB), r249_xn$intounicode$5sIl(1207));
    r249_turned('cyrShha', 1210, 'cyrChe', r249_MIDDLE, r249_CAP / 2);
    (function _r249_t115() {
        var _r1002_t0 = this;
        var r1002_currentGlyph = _r1002_t0;
        if (!r1002_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.82')
            r249_glyphList.pop();
        r249_includeGlyphPart(r1002_currentGlyph, r249_glyphs, 'cyrChe', r249_AS_BASE);
        var r1002_yc = r249_CAP * (r249_SLAB ? 0.45 : 0.35) + r249_STROKE * 0.1;
        r1002_currentGlyph.include(r249_VBar(r249_MIDDLE, r1002_yc + r249_LONGJUT * 0.8, r1002_yc - r249_LONGJUT * 0.8, r249_OVERLAYSTROKE));
        r249_xn$save$2Lrc5.call(r1002_currentGlyph, 'cyrChevbar', 1208);
        r249_dependencyProfile[r1002_currentGlyph.name] = r249_getDependencyProfile(r1002_currentGlyph);
        return r1002_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.82', r249_xn$donothing$2Lrc0b)));
    (function _r249_t116() {
        var _r1007_t0 = this;
        var r1007_currentGlyph = _r1007_t0;
        if (!r1007_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.83')
            r249_glyphList.pop();
        r249_includeGlyphPart(r1007_currentGlyph, r249_glyphs, 'cyrche', r249_AS_BASE);
        var r1007_yc = r249_XH * (r249_SLAB ? 0.45 : 0.35) + r249_STROKE * 0.1;
        r1007_currentGlyph.include(r249_VBar(r249_MIDDLE, r1007_yc + r249_LONGJUT * 0.8, r1007_yc - r249_LONGJUT * 0.8, r249_OVERLAYSTROKE));
        r249_xn$save$2Lrc5.call(r1007_currentGlyph, 'cyrchevbar', 1209);
        r249_dependencyProfile[r1007_currentGlyph.name] = r249_getDependencyProfile(r1007_currentGlyph);
        return r1007_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.83', r249_xn$donothing$2Lrc0b)));
    var r249_CyrYuShape = function _r249_t117(r1011_top, r1011_xtop, r1011_sma, r1011_smb, r1011_div) {
        return function _r1011_t2() {
            var _r1013_t0 = this;
            var r1013_currentGlyph = _r1013_t0;
            var r1013_df = r249_DivFrame(r1011_div, 3);
            var r1013_xm = r1_barmixL(r1013_df.leftSB, r1013_df.rightSB, r1013_df.mvs * r249_HVCONTRAST, r1_linreg(18, 0.4, 126, 0.45, r249_STROKE));
            r1013_currentGlyph.include(r249_VBarLeft(r1013_df.leftSB, 0, r1011_xtop, r1013_df.mvs));
            r1013_currentGlyph.include(r249_OShape(r1011_top, 0, r1013_xm, r1013_df.rightSB, r1013_df.mvs, r1011_sma * 0.7 * r1013_df.div, r1011_smb * 0.7 * r1013_df.div));
            r1013_currentGlyph.include(r249_HBar(r1013_df.leftSB + 1, r1013_xm, r1011_top / 2));
            if (r249_SLAB) {
                r1013_currentGlyph.include(r249_CenterTopSerif(r1013_df.leftSB + r1013_df.mvs / 2 * r249_HVCONTRAST, r1011_top, r249_JUT * 0.75));
                r1013_currentGlyph.include(r249_CenterBottomSerif(r1013_df.leftSB + r1013_df.mvs / 2 * r249_HVCONTRAST, 0, r249_JUT * 0.75));
            }
            return void 0;
        };
    };
    (function _r249_t118() {
        var _r1020_t0 = this;
        var r1020_currentGlyph = _r1020_t0;
        if (!r1020_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.84')
            r249_glyphList.pop();
        var r1020_df = r249_DivFrame(r249_para.diversityM, 3);
        r1020_currentGlyph['set-width'](r1020_df.width);
        r1020_currentGlyph.include(r1020_df.markSet.capital);
        r1020_currentGlyph.include(r249_CyrYuShape(r249_CAP, r249_CAP, r249_SMOOTHA, r249_SMOOTHB, r1020_df.div));
        r249_xn$save$2Lrc5.call(r1020_currentGlyph, 'cyrYu', 1070);
        r249_dependencyProfile[r1020_currentGlyph.name] = r249_getDependencyProfile(r1020_currentGlyph);
        return r1020_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.84', r249_xn$donothing$2Lrc0b)));
    (function _r249_t119() {
        var _r1026_t0 = this;
        var r1026_currentGlyph = _r1026_t0;
        if (!r1026_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.85')
            r249_glyphList.pop();
        var r1026_df = r249_DivFrame(r249_para.diversityM, 3);
        r1026_currentGlyph['set-width'](r1026_df.width);
        r1026_currentGlyph.include(r1026_df.markSet.e);
        r1026_currentGlyph.include(r249_CyrYuShape(r249_XH, r249_XH, r249_SMALLSMOOTHA, r249_SMALLSMOOTHB, r1026_df.div));
        r249_xn$save$2Lrc5.call(r1026_currentGlyph, 'cyryu', 1102);
        r249_dependencyProfile[r1026_currentGlyph.name] = r249_getDependencyProfile(r1026_currentGlyph);
        return r1026_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.85', r249_xn$donothing$2Lrc0b)));
    (function _r249_t120() {
        var _r1032_t0 = this;
        var r1032_currentGlyph = _r1032_t0;
        if (!r1032_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.86')
            r249_glyphList.pop();
        var r1032_df = r249_DivFrame(r249_para.diversityM, 3);
        r1032_currentGlyph['set-width'](r1032_df.width);
        r1032_currentGlyph.include(r1032_df.markSet.b);
        r1032_currentGlyph.include(r249_CyrYuShape(r249_XH, r249_CAP, r249_SMALLSMOOTHA, r249_SMALLSMOOTHB, r1032_df.div));
        r249_xn$save$2Lrc5.call(r1032_currentGlyph, 'cyryu.BGR');
        r249_dependencyProfile[r1032_currentGlyph.name] = r249_getDependencyProfile(r1032_currentGlyph);
        return r1032_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.86', r249_xn$donothing$2Lrc0b)));
    var r249_CyrLjeShape = function _r249_t121(r1037_top, r1037_df) {
        return function _r1037_t2() {
            var _r1039_t0 = this;
            var r1039_currentGlyph = _r1039_t0;
            var r1039_rightSB = r1037_df.width - r1037_df.leftSB;
            var r1039_l = r1037_df.leftSB + r249_O;
            var r1039_r = r1039_rightSB - r249_O;
            var r1039_middle = r1037_df.width / 2;
            var r1039_xlefttop = r1_mix(r1039_l, r1039_r, 0.075);
            var r1039_jut = r249_JUT * 0.72;
            r1039_currentGlyph['set-width'](r1037_df.width);
            r1039_currentGlyph.include(r249_LegShape(new r249_xn$NamedParameterPair$2Lrc9b('ztop', new _r1_class8(r1039_xlefttop, r1037_top)), new r249_xn$NamedParameterPair$2Lrc9b('zbot', new _r1_class8(r1_mix(r1039_l, 0, r249_SLAB ? 1 : 0.75), 0)), new r249_xn$NamedParameterPair$2Lrc9b('xb', r1_mix(r1039_l, r1039_r, 0.025)), new r249_xn$NamedParameterPair$2Lrc9b('fine', r249_MVERTSTROKE)));
            r1039_currentGlyph.include(r249_CyrYeriShape(r1037_top, r1039_middle - r249_MVERTSTROKE / 2 * r249_HVCONTRAST, r1039_r - r249_O, r249_MVERTSTROKE, r1039_jut));
            r1039_currentGlyph.include(r249_HBarTop(r1039_xlefttop, r1039_middle, r1037_top));
            if (r249_SLAB)
                r1039_currentGlyph.include(r249_LeftwardTopSerif(r1039_xlefttop, r1037_top, r1039_jut - r249_MVERTSTROKE / 2 * r249_HVCONTRAST));
            return void 0;
        };
    };
    (function _r249_t122() {
        var _r1052_t0 = this;
        var r1052_currentGlyph = _r1052_t0;
        if (!r1052_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.87')
            r249_glyphList.pop();
        var r1052_df = r249_DivFrame(r249_para.diversityM, 3);
        r1052_currentGlyph['set-width'](r1052_df.width);
        r1052_currentGlyph.include(r1052_df.markSet.capital);
        r1052_currentGlyph.include(r249_CyrLjeShape(r249_CAP, r1052_df));
        r249_xn$save$2Lrc5.call(r1052_currentGlyph, 'cyrLje', 1033);
        r249_dependencyProfile[r1052_currentGlyph.name] = r249_getDependencyProfile(r1052_currentGlyph);
        return r1052_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.87', r249_xn$donothing$2Lrc0b)));
    (function _r249_t123() {
        var _r1058_t0 = this;
        var r1058_currentGlyph = _r1058_t0;
        if (!r1058_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.88')
            r249_glyphList.pop();
        var r1058_df = r249_DivFrame(r249_para.diversityM, 3);
        r1058_currentGlyph['set-width'](r1058_df.width);
        r1058_currentGlyph.include(r1058_df.markSet.e);
        r1058_currentGlyph.include(r249_CyrLjeShape(r249_XH, r1058_df));
        r249_xn$save$2Lrc5.call(r1058_currentGlyph, 'cyrlje', 1113);
        r249_dependencyProfile[r1058_currentGlyph.name] = r249_getDependencyProfile(r1058_currentGlyph);
        return r1058_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.88', r249_xn$donothing$2Lrc0b)));
    var r249_CyrNjeShape = function _r249_t124(r1063_top, r1063_df) {
        return function _r1063_t2() {
            var _r1065_t0 = this;
            var r1065_currentGlyph = _r1065_t0;
            var r1065_rightSB = r1063_df.width - r1063_df.leftSB;
            var r1065_xlefttop = r1_mix(r1063_df.leftSB, r1063_df.rightSB, 0.075);
            var r1065_jut = r249_JUT * 0.72;
            var r1065_l = r1063_df.leftSB + r249_O;
            var r1065_r = r1065_rightSB - r249_O;
            var r1065_middle = r1063_df.width / 2;
            r1065_currentGlyph['set-width'](r1063_df.width);
            r1065_currentGlyph.include(r249_VBarLeft(r1065_l, 0, r1063_top, r249_MVERTSTROKE));
            r1065_currentGlyph.include(r249_CyrYeriShape(r1063_top, r1065_middle - r249_MVERTSTROKE / 2 * r249_HVCONTRAST, r1065_r - r249_O, r249_MVERTSTROKE, r1065_jut));
            r1065_currentGlyph.include(r249_HBar(r1063_df.leftSB + r249_MVERTSTROKE * 0.1, r1065_middle, r1063_top / 2));
            if (r249_SLAB) {
                r1065_currentGlyph.include(r249_CenterTopSerif(r1065_l + r249_MVERTSTROKE / 2 * r249_HVCONTRAST, r1063_top, r1065_jut));
                r1065_currentGlyph.include(r249_CenterBottomSerif(r1065_l + r249_MVERTSTROKE / 2 * r249_HVCONTRAST, 0, r1065_jut));
            }
            return void 0;
        };
    };
    (function _r249_t125() {
        var _r1073_t0 = this;
        var r1073_currentGlyph = _r1073_t0;
        if (!r1073_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.89')
            r249_glyphList.pop();
        var r1073_df = r249_DivFrame(r249_para.diversityM, 3);
        r1073_currentGlyph['set-width'](r1073_df.width);
        r1073_currentGlyph.include(r1073_df.markSet.capital);
        r1073_currentGlyph.include(r249_CyrNjeShape(r249_CAP, r1073_df));
        r249_xn$save$2Lrc5.call(r1073_currentGlyph, 'cyrNje', 1034);
        r249_dependencyProfile[r1073_currentGlyph.name] = r249_getDependencyProfile(r1073_currentGlyph);
        return r1073_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.89', r249_xn$donothing$2Lrc0b)));
    (function _r249_t126() {
        var _r1079_t0 = this;
        var r1079_currentGlyph = _r1079_t0;
        if (!r1079_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.90')
            r249_glyphList.pop();
        var r1079_df = r249_DivFrame(r249_para.diversityM, 3);
        r1079_currentGlyph['set-width'](r1079_df.width);
        r1079_currentGlyph.include(r1079_df.markSet.e);
        r1079_currentGlyph.include(r249_CyrNjeShape(r249_XH, r1079_df));
        r249_xn$save$2Lrc5.call(r1079_currentGlyph, 'cyrnje', 1114);
        r249_dependencyProfile[r1079_currentGlyph.name] = r249_getDependencyProfile(r1079_currentGlyph);
        return r1079_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.90', r249_xn$donothing$2Lrc0b)));
    (function _r249_t127() {
        var _r1085_t0 = this;
        var r1085_currentGlyph = _r1085_t0;
        if (!r1085_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.91')
            r249_glyphList.pop();
        r1085_currentGlyph.include(r249_markset.capital);
        var r1085_left = r1_mix(r249_SB, r249_RIGHTSB, 0.15) + r249_OX;
        var r1085_right = r249_RIGHTSB - r249_OX;
        r1085_currentGlyph.include(r249_nShoulder(new r249_xn$NamedParameterPair$2Lrc9b('left', r1085_left + r249_STROKE * r249_HVCONTRAST), new r249_xn$NamedParameterPair$2Lrc9b('right', r1085_right)));
        r1085_currentGlyph.include(r249_VBarLeft(r1085_left, 0, r249_CAP));
        r1085_currentGlyph.include(r249_dispiro(r249_widths.rhs(), r249_flat(r249_SB + r249_OX, r249_CAP), r249_curl(r1_mix(r1085_left, r249_RIGHTSB, 0.475), r249_CAP)));
        if (r249_SLAB) {
            r1085_currentGlyph.include(r249_CenterBottomSerif(r1085_left + r249_HVCONTRAST * r249_HALFSTROKE, 0, r249_JUT));
            r1085_currentGlyph.include(r249_CenterBottomSerif(r1085_right - r249_HVCONTRAST * r249_HALFSTROKE, 0, r249_JUT));
        }
        r249_xn$save$2Lrc5.call(r1085_currentGlyph, 'cyrTshe', 1035);
        r249_dependencyProfile[r1085_currentGlyph.name] = r249_getDependencyProfile(r1085_currentGlyph);
        return r1085_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.91', r249_xn$donothing$2Lrc0b)));
    (function _r249_t128() {
        var _r1096_t0 = this;
        var r1096_currentGlyph = _r1096_t0;
        if (!r1096_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.92')
            r249_glyphList.pop();
        r1096_currentGlyph.include(r249_markset.capital);
        var r1096_left = r1_mix(r249_SB, r249_RIGHTSB, 0.15) + r249_OX;
        var r1096_right = r249_RIGHTSB - r249_OX * 1.5;
        r1096_currentGlyph.include(r249_nShoulder(new r249_xn$NamedParameterPair$2Lrc9b('left', r1096_left + r249_STROKE * r249_HVCONTRAST), new r249_xn$NamedParameterPair$2Lrc9b('right', r1096_right), new r249_xn$NamedParameterPair$2Lrc9b('top', r249_XH), new r249_xn$NamedParameterPair$2Lrc9b('bottom', r249_HOOK + r249_HALFSTROKE + r249_O), new r249_xn$NamedParameterPair$2Lrc9b('sma', r249_SMOOTHA), new r249_xn$NamedParameterPair$2Lrc9b('smb', r249_SMOOTHB)));
        r1096_currentGlyph.include(r249_VBarLeft(r1096_left, 0, r249_CAP));
        r1096_currentGlyph.include(r249_dispiro(r249_widths.rhs(), r249_flat(r249_SB + r249_OX, r249_CAP), r249_curl(r1_mix(r1096_left, r249_RIGHTSB, 0.475), r249_CAP)));
        r1096_currentGlyph.include(r249_VerticalHook(r1096_right - r249_HALFSTROKE * r249_HVCONTRAST, r249_HOOK + r249_HALFSTROKE + r249_O, Math.max((r1096_left - r1096_right) / 2 + r249_HALFSTROKE, -r249_HOOK * 1.2), r249_HOOK));
        if (r249_SLAB)
            r1096_currentGlyph.include(r249_LeftwardBottomSerif(r1096_left, 0, r249_SIDEJUT));
        r249_xn$save$2Lrc5.call(r1096_currentGlyph, 'cyrDje', 1026);
        r249_dependencyProfile[r1096_currentGlyph.name] = r249_getDependencyProfile(r1096_currentGlyph);
        return r1096_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.92', r249_xn$donothing$2Lrc0b)));
    (function _r249_t129() {
        var _r1111_t0 = this;
        var r1111_currentGlyph = _r1111_t0;
        if (!r1111_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.93')
            r249_glyphList.pop();
        r1111_currentGlyph.include(r249_markset.if);
        r249_includeGlyphPart(r1111_currentGlyph, r249_glyphs, 'cyrtshe');
        r1111_currentGlyph['eject-contour']('serifRB');
        r1111_currentGlyph.include(r249_VerticalHook(r249_RIGHTSB - r249_HALFSTROKE * r249_HVCONTRAST, 0, -r249_HOOK * 1.2, r249_HOOK));
        r249_xn$save$2Lrc5.call(r1111_currentGlyph, 'cyrdje', 1106);
        r249_dependencyProfile[r1111_currentGlyph.name] = r249_getDependencyProfile(r1111_currentGlyph);
        return r1111_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.93', r249_xn$donothing$2Lrc0b)));
    (function () {
        var r1118_ymiddle = r1_mix(0, r249_CAP, 0.5) - r249_HALFSTROKE;
        var r1118_ymiddleCap = r1_mix(0, r249_CAP, 0.54) - r249_HALFSTROKE;
        var r1118_xmiddle = r249_RIGHTSB - r1118_ymiddle / 2 - r249_STROKE * 0.75;
        var r1118_xmiddleBot = r249_RIGHTSB - r1118_ymiddle / 2 - r249_STROKE * 0.75;
        var r1118_xfinal = Math.min(r1118_xmiddle - 1 - r249_STROKE * r249_TANSLANT, Math.max(r249_SB + r249_STROKE * 2, r1_mix(r249_SB, r249_RIGHTSB, 1 / 4)));
        (function _r1118_t0() {
            var _r1120_t0 = this;
            var r1120_currentGlyph = _r1120_t0;
            if (!r1120_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.94')
                r249_glyphList.pop();
            r1120_currentGlyph['set-width'](r249_WIDTH);
            r1120_currentGlyph.include(r249_markset.if);
            var r1120_l = r249_SB * 1;
            r1120_currentGlyph.include(r249_dispiro(r249_widths.lhs(), r249_g4(r1_mix(r249_SB, r249_RIGHTSB, 0.75) + r249_HALFSTROKE * r249_HVCONTRAST, r249_CAP - r249_HOOK), r249_hookstart(r249_CAP - r249_O), r249_flat(r1120_l, r249_XH), r249_curl(r1120_l, 0, r249_heading(r249_DOWNWARD))));
            var r1120_t = r1_mix(0, r249_CAP, 0.7);
            var r1120_tm = r1_mix(r249_DESCENDER, r1120_t, 0.625) + r249_HALFSTROKE;
            var r1120_tl = r1_mix(r1120_l, r249_RIGHTSB, 0.35) + r249_HALFSTROKE * r249_HVCONTRAST;
            r1120_currentGlyph.include(r249_HBarTop(r1120_l + 1, r249_RIGHTSB - r249_HALFSTROKE * 1.2 - r249_OX, r1120_t));
            r1120_currentGlyph.include(r249_dispiro(r249_widths.rhs(), r249_flat(r1120_tl, r1120_tm, r249_heading(r249_RIGHTWARD)), r249_curl(r1120_tl + 1, r1120_tm, r249_heading(r249_RIGHTWARD)), r249_g2(r249_RIGHTSB - r249_OX * 1.5, r1_mix(r249_DESCENDER, r1120_tm, 0.7)), r249_g2(r249_RIGHTSB - r249_OX * 1.5, r1_mix(r249_DESCENDER, r1120_tm, 0.67)), r249_alsothru(0.5, 0.75), r249_g4(r1_mix(r249_SB, r249_RIGHTSB, 0.35), r249_DESCENDER)));
            r1120_currentGlyph.include(r249_dispiro(r249_widths.center(r249_STROKE * 1.1), r249_corner(r1120_tl, r1120_tm - r249_STROKE, r249_heading(r249_UPWARD)), r249_corner(r249_RIGHTSB - r249_HALFSTROKE * 1.2 - r249_OX, r1120_t, r249_heading(r249_UPWARD))));
            if (r249_para.isItalic)
                r1120_currentGlyph.include(r249_VerticalHook(r1120_l + r249_HALFSTROKE * r249_HVCONTRAST, 0, -r249_HOOK * 1.2, r249_HOOK));
            else if (r249_SLAB)
                r1120_currentGlyph.include(r249_LeftwardBottomSerif(r249_SB, 0, r249_SIDEJUT));
            r249_xn$save$2Lrc5.call(r1120_currentGlyph, 'eszet.traditional');
            r249_dependencyProfile[r1120_currentGlyph.name] = r249_getDependencyProfile(r1120_currentGlyph);
            return r1120_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.94', r249_xn$donothing$2Lrc0b)));
        (function _r1118_t1() {
            var _r1131_t0 = this;
            var r1131_currentGlyph = _r1131_t0;
            if (!r1131_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.95')
                r249_glyphList.pop();
            r1131_currentGlyph.include(r249_markset.capital);
            r1131_currentGlyph.include(r249_dispiro(r249_widths.rhs(), r249_flat(r249_SB, 0, r249_heading(r249_UPWARD)), r249_curl(r249_SB, r249_XH), r249_arcvh(), r249_g4(r249_MIDDLE + r249_O, r249_CAP - r249_O), r249_archv(), r249_g4(r249_RIGHTSB + r249_O * 2, r1_mix(r249_CAP, r1118_ymiddle, 0.47)), r249_g4.left.end(r1118_xmiddle, r1118_ymiddle, r249_heading(r249_LEFTWARD))));
            r1131_currentGlyph.include(r249_dispiro(r249_widths.rhs(), r249_g4.right.start(r1118_xmiddle, r1118_ymiddle + r249_STROKE, r249_heading(r249_RIGHTWARD)), r249_archv(), r249_g4(r249_RIGHTSB - r249_O, r1_mix(0, r1118_ymiddle + r249_STROKE, 0.5)), r249_arcvh(), r249_flat(r1118_xmiddleBot, 0), r249_curl(r1118_xfinal, 0, r249_heading(r249_LEFTWARD))));
            if (r249_para.isItalic)
                r1131_currentGlyph.include(r249_VerticalHook(r249_SB + r249_HALFSTROKE * r249_HVCONTRAST, 0, -r249_HOOK * 1.2, r249_HOOK));
            else if (r249_SLAB)
                r1131_currentGlyph.include(r249_LeftwardBottomSerif(r249_SB, 0, r249_SIDEJUT));
            r249_xn$save$2Lrc5.call(r1131_currentGlyph, 'eszet.sulzbacher');
            r249_dependencyProfile[r1131_currentGlyph.name] = r249_getDependencyProfile(r1131_currentGlyph);
            return r1131_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.95', r249_xn$donothing$2Lrc0b)));
        r249_xn$selectvariant$7Hrq('eszet', 223);
        return function _r1118_t2() {
            var _r1139_t0 = this;
            var r1139_currentGlyph = _r1139_t0;
            if (!r1139_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.96')
                r249_glyphList.pop();
            r1139_currentGlyph.include(r249_markset.capital);
            var r1139_rightTopX = r249_RIGHTSB + r249_O * 4;
            r1139_currentGlyph.include(r249_dispiro(r249_widths.lhs(), r249_flat(r1139_rightTopX, r249_CAP), r249_curl(r249_MIDDLE, r249_CAP), r249_archv(), r249_flat(r249_SB, r249_XH), r249_curl(r249_SB, 0, r249_heading(r249_DOWNWARD))));
            r1139_currentGlyph.include(r249_dispiro(r249_widths.rhs(), r249_g4(r1118_xmiddle, r1118_ymiddleCap + r249_STROKE, r249_heading(r249_RIGHTWARD)), r249_archv(), r249_g4(r249_RIGHTSB - r249_O * 2, r1_mix(0, r1118_ymiddleCap + r249_STROKE, 0.5)), r249_arcvh(), r249_flat(r1118_xmiddleBot, 0), r249_curl(r1118_xfinal, 0, r249_heading(r249_LEFTWARD))));
            r1139_currentGlyph.include(r249_dispiro(r249_widths.rhs(), r249_g4(r1139_rightTopX, r249_CAP - r249_STROKE), r249_g4(r1118_xmiddle, r1118_ymiddleCap + r249_STROKE, r249_widths(r249_STROKE, 0))));
            if (r249_SLAB)
                r1139_currentGlyph.include(r249_LeftwardBottomSerif(r249_SB, 0, r249_SIDEJUT));
            r249_xn$save$2Lrc5.call(r1139_currentGlyph, 'Eszet', 7838);
            r249_dependencyProfile[r1139_currentGlyph.name] = r249_getDependencyProfile(r1139_currentGlyph);
            return r1139_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.96', r249_xn$donothing$2Lrc0b));
    }());
    (function _r249_t132() {
        var _r1147_t0 = this;
        var r1147_currentGlyph = _r1147_t0;
        if (!r1147_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.97')
            r249_glyphList.pop();
        var r1147_df = r249_DivFrame(r249_para.diversityM, 3);
        r1147_currentGlyph['set-width'](r1147_df.width);
        r1147_currentGlyph.include(r1147_df.markSet.capital);
        var r1147_eleft = r1147_df.middle - r1147_df.mvs * 0.25;
        var r1147_turn = r249_XH * 0.1;
        r1147_currentGlyph.include(r249_dispiro(r249_widths.rhs(r1147_df.mvs), r249_flat(r1147_df.leftSB, 0, r249_heading(r249_UPWARD)), r249_curl(r1147_df.leftSB, r249_CAP * 0.1, r249_heading(r249_UPWARD)), r249_quadcontrols(0, 0.3, 6, r249_unimportant), r249_g4(r1147_eleft - r249_HALFSTROKE, r249_CAP, r249_widths.rhs(r1147_df.mvs * 0.8))));
        r1147_currentGlyph['start-from'](r1147_eleft - r249_HALFSTROKE, r249_CAP);
        r1147_currentGlyph['line-to'](r1147_eleft, r249_CAP);
        r1147_currentGlyph['line-to'](r1147_eleft, r249_CAP - r1147_df.mvs);
        r1147_currentGlyph.include(r249_HBarTop(r1_mix(r1147_df.leftSB, r1147_eleft - r249_HALFSTROKE, 1 / 6) + r1147_df.mvs * 0.5 * r249_HVCONTRAST, r1147_eleft + r1147_df.mvs / 2, r249_XH / 2, r1147_df.mvs));
        r1147_currentGlyph.include(r249_VBarLeft(r1147_eleft, 0, r249_CAP, r1147_df.mvs));
        r1147_currentGlyph.include(r249_HBarTop(r1147_eleft - r249_O, r1147_df.rightSB, r249_CAP));
        r1147_currentGlyph.include(r249_HBar(r1147_eleft - r249_O, r1147_df.rightSB - r1147_df.mvs / 4, r249_CAP * 0.54));
        r1147_currentGlyph.include(r249_HBarBottom(r1147_eleft - r249_O, r1147_df.rightSB, 0));
        if (r249_SLAB) {
            r1147_currentGlyph.include(r249_CenterBottomSerif(r1147_df.leftSB + r1147_df.mvs / 2 * r249_HVCONTRAST, 0, r249_JUT, r1147_df.mvs));
            r1147_currentGlyph.include(r249_DownwardRightSerif(r1147_df.rightSB, r249_CAP, r249_VJUT, r1147_df.mvs));
            r1147_currentGlyph.include(r249_UpwardRightSerif(r1147_df.rightSB, 0, r249_VJUT, r1147_df.mvs));
        }
        r249_xn$save$2Lrc5.call(r1147_currentGlyph, 'AE', 198);
        r249_xn$save$2Lrc5.call(r1147_currentGlyph, 'cyrAE', 1236);
        r249_dependencyProfile[r1147_currentGlyph.name] = r249_getDependencyProfile(r1147_currentGlyph);
        return r1147_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.97', r249_xn$donothing$2Lrc0b)));
    var r249_OEShape = function _r249_t133(r1164_top, r1164_df) {
        return function _r1164_t2() {
            var _r1166_t0 = this;
            var r1166_currentGlyph = _r1166_t0;
            var r1166_eleft = r1164_df.middle;
            r1166_currentGlyph.include(r249_dispiro(r249_widths.lhs(r1164_df.mvs, 0), r249_straight.left.start(r1166_eleft, r1164_top, r249_heading(r249_LEFTWARD)), r249_archv(), r249_flat(r1164_df.leftSB, r1164_top - r249_SMOOTHA), r249_curl(r1164_df.leftSB, r249_SMOOTHB), r249_arcvh(), r249_straight.right.end(r1166_eleft, 0, r249_heading(r249_RIGHTWARD))));
            r1166_currentGlyph.include(r249_VBarLeft(r1166_eleft, 0, r1164_top, r1164_df.mvs));
            r1166_currentGlyph.include(r249_HBarTop(r1166_eleft - r249_O, r1164_df.rightSB, r1164_top));
            r1166_currentGlyph.include(r249_HBar(r1166_eleft - r249_O, r1164_df.rightSB - r1164_df.mvs / 4, r1164_top * 0.54));
            r1166_currentGlyph.include(r249_HBarBottom(r1166_eleft - r249_O, r1164_df.rightSB, 0));
            if (r249_SLAB) {
                r1166_currentGlyph.include(r249_DownwardRightSerif(r1164_df.rightSB, r1164_top, r249_VJUT, r1164_df.mvs));
                r1166_currentGlyph.include(r249_UpwardRightSerif(r1164_df.rightSB, 0, r249_VJUT, r1164_df.mvs));
            }
            return void 0;
        };
    };
    (function _r249_t134() {
        var _r1175_t0 = this;
        var r1175_currentGlyph = _r1175_t0;
        if (!r1175_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.98')
            r249_glyphList.pop();
        var r1175_df = r249_DivFrame(r249_para.diversityM, 3);
        r1175_currentGlyph['set-width'](r1175_df.width);
        r1175_currentGlyph.include(r1175_df.markSet.capital);
        r1175_currentGlyph.include(r249_OEShape(r249_CAP, r1175_df));
        r249_xn$save$2Lrc5.call(r1175_currentGlyph, 'OE', 338);
        r249_dependencyProfile[r1175_currentGlyph.name] = r249_getDependencyProfile(r1175_currentGlyph);
        return r1175_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.98', r249_xn$donothing$2Lrc0b)));
    (function _r249_t135() {
        var _r1181_t0 = this;
        var r1181_currentGlyph = _r1181_t0;
        if (!r1181_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.99')
            r249_glyphList.pop();
        var r1181_df = r249_DivFrame(r249_para.diversityM, 3);
        r1181_currentGlyph['set-width'](r1181_df.width);
        r1181_currentGlyph.include(r1181_df.markSet.e);
        r1181_currentGlyph.include(r249_OEShape(r249_XH, r1181_df));
        r249_xn$save$2Lrc5.call(r1181_currentGlyph, 'smcpOE', 630);
        r249_dependencyProfile[r1181_currentGlyph.name] = r249_getDependencyProfile(r1181_currentGlyph);
        return r1181_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.99', r249_xn$donothing$2Lrc0b)));
    var r249_aeepart = function _r249_t136(r1186_df) {
        return function _r1186_t2() {
            var _r1188_t0 = this;
            var r1188_currentGlyph = _r1188_t0;
            var r1188_stroke = r249_adviceBlackness2(2.875, 3, r249_XH, r1186_df.div);
            var r1188_eLeft = r1186_df.middle - r1188_stroke / 2 * r249_HVCONTRAST + 0.1;
            var r1188_eMiddle = r1_mix(r1188_eLeft, r1186_df.rightSB - r249_OX * 2, 0.5) - r1188_stroke * r249_TANSLANT;
            var r1188_barbottom = r249_XH * r249_EBARPOS - r1188_stroke / 2;
            var r1188_sma = r249_SMALLSMOOTHA * 0.6 * r1186_df.div;
            var r1188_smb = r249_SMALLSMOOTHB * 0.6 * r1186_df.div;
            r1188_currentGlyph.include(r249_dispiro(r249_widths.lhs(r1188_stroke), r249_flat(r1186_df.rightSB - r249_OX * 2, r1188_barbottom, r249_heading(r249_UPWARD)), r249_curl(r1186_df.rightSB - r249_OX * 2, r249_XH - r1188_smb), r249_arcvh(), r249_g4(r1188_eMiddle, r249_XO), r249_archv(), r249_flat(r1188_eLeft, r249_XH - r1188_sma), r249_curl(r1188_eLeft, r1188_smb), r249_hookend(r249_O, true, r1188_stroke), r249_g4(r1186_df.rightSB - r249_OX * 2, r249_AHOOK + r1188_stroke * r249_TANSLANT, r249_heading(r249_UPWARD))));
            r1188_currentGlyph.include(r249_HBarBottom(r1188_eLeft + r1188_stroke / 2, r1186_df.rightSB - r249_OX * 2 - r1188_stroke / 2, r1188_barbottom, r1188_stroke));
            return void 0;
        };
    };
    var r249_aeapart = function _r249_t137(r1191_df) {
        return function _r1191_t2() {
            var _r1193_t0 = this;
            var r1193_currentGlyph = _r1193_t0;
            var r1193_stroke = r249_adviceBlackness2(2.875, 3, r249_XH, r1191_df.div);
            var r1193_bartop = r249_XH * r249_OVERLAYPOS * 1.02 + r1193_stroke / 2;
            var r1193_abarRight = r1191_df.middle + r1193_stroke / 2 * r249_HVCONTRAST - 0.1;
            var r1193_lowmiddle = r1_mix(r1191_df.leftSB + r249_OX * 2, r1193_abarRight, 0.5);
            var r1193_barsmooth = r1_mix(r1191_df.leftSB, r1193_abarRight, 0.7);
            var r1193_sma = r249_SMALLSMOOTHA * 0.6 * r1191_df.div;
            var r1193_smb = r249_SMALLSMOOTHB * 0.6 * r1191_df.div;
            r1193_currentGlyph.include(r249_dispiro(r249_widths.rhs(r1193_stroke), r249_g4(r1191_df.leftSB + r249_OX, r249_XH - r249_AHOOK - r1193_stroke * r249_TANSLANT, r249_heading(r249_UPWARD)), r249_hookstart(r249_XO, true, r1193_stroke), r249_flat(r1193_abarRight, r249_XH - r1193_smb), r249_curl(r1193_abarRight, r1193_smb), r249_arcvh(), r249_g4(r1193_lowmiddle, r249_O, r249_heading(r249_LEFTWARD)), r249_archv(), r249_g4(r1191_df.leftSB + r249_OX * 2, r1_mix(0, r1193_bartop, 0.45)), r249_arcvh(), r249_flat(r1193_barsmooth, r1193_bartop), r249_curl(r1193_abarRight - 1, r1193_bartop, r249_heading(r249_RIGHTWARD))));
            return void 0;
        };
    };
    var r249_oeopart = function _r249_t138(r1195_df) {
        return function _r1195_t2() {
            var _r1197_t0 = this;
            var r1197_currentGlyph = _r1197_t0;
            var r1197_stroke = r249_adviceBlackness2(2.875, 3, r249_XH, r1195_df.div);
            var r1197_abarRight = r1195_df.middle + r1197_stroke / 2 * r249_HVCONTRAST;
            r1197_currentGlyph.include(r249_OShape(r249_XH, 0, r1195_df.leftSB + r249_OX, r1197_abarRight + r249_OX, r1197_stroke, r249_SMALLSMOOTHA * 0.6 * r1195_df.div, r249_SMALLSMOOTHB * 0.6 * r1195_df.div));
            return void 0;
        };
    };
    (function _r249_t139() {
        var _r1200_t0 = this;
        var r1200_currentGlyph = _r1200_t0;
        if (!r1200_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.100')
            r249_glyphList.pop();
        var r1200_df = r249_DivFrame(r249_para.diversityM, 3);
        r1200_currentGlyph['set-width'](r1200_df.width);
        r1200_currentGlyph.include(r1200_df.markSet.e);
        r1200_currentGlyph.include(r249_aeepart(r1200_df));
        r1200_currentGlyph.include(r249_aeapart(r1200_df));
        r249_xn$save$2Lrc5.call(r1200_currentGlyph, 'ae', 230);
        r249_xn$save$2Lrc5.call(r1200_currentGlyph, 'cyrae', 1237);
        r249_dependencyProfile[r1200_currentGlyph.name] = r249_getDependencyProfile(r1200_currentGlyph);
        return r1200_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.100', r249_xn$donothing$2Lrc0b)));
    r249_turned(void 0, 7426, 'ae', r249_DivFrame(r249_para.diversityM).middle, r249_XH / 2);
    (function _r249_t140() {
        var _r1208_t0 = this;
        var r1208_currentGlyph = _r1208_t0;
        if (!r1208_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.101')
            r249_glyphList.pop();
        var r1208_df = r249_DivFrame(r249_para.diversityM, 3);
        r1208_currentGlyph['set-width'](r1208_df.width);
        r1208_currentGlyph.include(r1208_df.markSet.e);
        r1208_currentGlyph.include(r249_aeepart(r1208_df));
        r1208_currentGlyph.include(r249_oeopart(r1208_df));
        r249_xn$save$2Lrc5.call(r1208_currentGlyph, 'oe', 339);
        r249_dependencyProfile[r1208_currentGlyph.name] = r249_getDependencyProfile(r1208_currentGlyph);
        return r1208_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.101', r249_xn$donothing$2Lrc0b)));
    r249_turned(void 0, 7444, 'oe', r249_DivFrame(r249_para.diversityM).middle, r249_XH / 2);
    (function _r249_t141() {
        var _r1215_t0 = this;
        var r1215_currentGlyph = _r1215_t0;
        if (!r1215_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.102')
            r249_glyphList.pop();
        var r1215_df = r249_DivFrame(r249_para.diversityM, 3);
        r1215_currentGlyph['set-width'](r1215_df.width);
        r1215_currentGlyph.include(r1215_df.markSet.b);
        r1215_currentGlyph.include(r249_oeopart(r1215_df));
        r1215_currentGlyph.include(r249_FlipAround(r1215_df.middle, r249_XH / 2));
        r1215_currentGlyph.include(r249_oeopart(r1215_df));
        r1215_currentGlyph.include(r249_VBar(r1215_df.middle, r249_XH / 2, r249_CAP, r249_MVERTSTROKE));
        if (r249_SLAB)
            r1215_currentGlyph.include(r249_LeftwardTopSerif(r1215_df.middle - r249_MVERTSTROKE / 2 * r249_HVCONTRAST, r249_CAP, r249_SIDEJUT));
        r249_xn$save$2Lrc5.call(r1215_currentGlyph, 'db', 568);
        r249_dependencyProfile[r1215_currentGlyph.name] = r249_getDependencyProfile(r1215_currentGlyph);
        return r1215_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.102', r249_xn$donothing$2Lrc0b)));
    (function _r249_t142() {
        var _r1225_t0 = this;
        var r1225_currentGlyph = _r1225_t0;
        if (!r1225_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.103')
            r249_glyphList.pop();
        var r1225_df = r249_DivFrame(r249_para.diversityM, 3);
        r1225_currentGlyph['set-width'](r1225_df.width);
        r1225_currentGlyph.include(r1225_df.markSet.p);
        r1225_currentGlyph.include(r249_oeopart(r1225_df));
        r1225_currentGlyph.include(r249_FlipAround(r1225_df.middle, r249_XH / 2));
        r1225_currentGlyph.include(r249_oeopart(r1225_df));
        r1225_currentGlyph.include(r249_VBar(r1225_df.middle, r249_DESCENDER, r249_XH / 2, r249_MVERTSTROKE));
        if (r249_SLAB)
            r1225_currentGlyph.include(r249_CenterBottomSerif(r1225_df.middle, r249_DESCENDER, r249_JUT));
        r249_xn$save$2Lrc5.call(r1225_currentGlyph, 'qp', 569);
        r249_dependencyProfile[r1225_currentGlyph.name] = r249_getDependencyProfile(r1225_currentGlyph);
        return r1225_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.103', r249_xn$donothing$2Lrc0b)));
    (function _r249_t143() {
        var _r1235_t0 = this;
        var r1235_currentGlyph = _r1235_t0;
        if (!r1235_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.104')
            r249_glyphList.pop();
        r1235_currentGlyph.include(r249_markset.capital);
        r1235_currentGlyph.include(r249_OShape(r249_CAP * r249_BARPOS + r249_HALFSTROKE, 0, r249_SB, r249_RIGHTSB, void 0, r249_SMOOTHA, r249_SMOOTHB));
        r1235_currentGlyph.include(r249_dispiro(r249_widths.lhs(), r249_flat(r249_SB, r249_CAP, r249_heading(r249_DOWNWARD)), r249_curl(r249_SB, r249_CAP * r249_BARPOS - r249_O - r249_HALFSTROKE + r249_SMOOTHB), r249_arcvh(), r249_g4(r249_MIDDLE + r249_CORRECTION_OMIDS, r249_CAP * r249_BARPOS - r249_O - r249_HALFSTROKE + r249_STROKE * (1 - r249_CTHIN), r249_widths.lhs(r249_STROKE * r249_CTHIN)), r249_archv(), r249_flat(r249_RIGHTSB, r249_CAP * r249_BARPOS - r249_O - r249_HALFSTROKE + r249_SMOOTHA, r249_widths.lhs()), r249_curl(r249_RIGHTSB, r249_CAP, r249_heading(r249_UPWARD))));
        r249_xn$save$2Lrc5.call(r1235_currentGlyph, 'OU', 546);
        r249_dependencyProfile[r1235_currentGlyph.name] = r249_getDependencyProfile(r1235_currentGlyph);
        return r1235_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.104', r249_xn$donothing$2Lrc0b)));
    (function _r249_t144() {
        var _r1241_t0 = this;
        var r1241_currentGlyph = _r1241_t0;
        if (!r1241_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.105')
            r249_glyphList.pop();
        r1241_currentGlyph.include(r249_markset.b);
        var r1241_bar = r1_linreg(18, r249_XH * 0.9, 108, r249_XH, r249_STROKE);
        r1241_currentGlyph.include(r249_OShape(r1241_bar, 0, r249_SB, r249_RIGHTSB));
        r1241_currentGlyph.include(r249_dispiro(r249_widths.lhs(), r249_flat(r249_SB, r249_CAP, r249_heading(r249_DOWNWARD)), r249_curl(r249_SB, r1241_bar - r249_O - r249_STROKE + r249_SMOOTHB), r249_arcvh(), r249_g4(r249_MIDDLE + r249_CORRECTION_OMIDS, r1241_bar - r249_O - r249_STROKE + r249_STROKE * (1 - r249_CTHIN), r249_widths.lhs(r249_STROKE * r249_CTHIN)), r249_archv(), r249_flat(r249_RIGHTSB, r1241_bar - r249_O - r249_STROKE + r249_SMOOTHA, r249_widths.lhs()), r249_curl(r249_RIGHTSB, r249_CAP, r249_heading(r249_UPWARD))));
        r249_xn$save$2Lrc5.call(r1241_currentGlyph, 'ou', 547);
        r249_dependencyProfile[r1241_currentGlyph.name] = r249_getDependencyProfile(r1241_currentGlyph);
        return r1241_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.105', r249_xn$donothing$2Lrc0b)));
    (function _r249_t145() {
        var _r1247_t0 = this;
        var r1247_currentGlyph = _r1247_t0;
        if (!r1247_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.106')
            r249_glyphList.pop();
        r1247_currentGlyph.include(r249_markset.capital);
        r1247_currentGlyph.include(r249_xn$createglyph$7Hrq(function _r1247_t2() {
            var _r1251_t0 = this;
            var r1251_currentGlyph = _r1251_t0;
            r249_includeGlyphPart(r1251_currentGlyph, r249_glyphs, 'I.straight');
            r1251_currentGlyph['apply-transform'](r249_Translate(r249_SB - r249_MIDDLE + r249_HALFSTROKE * r249_HVCONTRAST, 0));
            return void 0;
        }));
        r1247_currentGlyph.include(r249_xn$createglyph$7Hrq(function _r1247_t3() {
            var _r1256_t0 = this;
            var r1256_currentGlyph = _r1256_t0;
            r249_includeGlyphPart(r1256_currentGlyph, r249_glyphs, 'J.shorthook');
            r1256_currentGlyph['apply-transform'](r249_Translate(r249_JBALANCE2, 0));
            return void 0;
        }));
        r249_xn$save$2Lrc5.call(r1247_currentGlyph, 'IJ', 306);
        r249_dependencyProfile[r1247_currentGlyph.name] = r249_getDependencyProfile(r1247_currentGlyph);
        return r1247_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.106', r249_xn$donothing$2Lrc0b)));
    (function _r249_t146() {
        var _r1261_t0 = this;
        var r1261_currentGlyph = _r1261_t0;
        if (!r1261_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.107')
            r249_glyphList.pop();
        r1261_currentGlyph.include(r249_markset.if);
        r1261_currentGlyph.include(r249_xn$createglyph$7Hrq(function _r1261_t2() {
            var _r1265_t0 = this;
            var r1265_currentGlyph = _r1265_t0;
            r249_includeGlyphPart(r1265_currentGlyph, r249_glyphs, 'dotlessi.straight', r249_AS_BASE);
            r249_includeGlyphPart(r1265_currentGlyph, r249_glyphs, 'dotAbove');
            r1265_currentGlyph['apply-transform'](r249_Translate(r249_SB * 1.5 - r249_MIDDLE + r249_HALFSTROKE * r249_HVCONTRAST, 0));
            return void 0;
        }));
        r1261_currentGlyph.include(r249_xn$createglyph$7Hrq(function _r1261_t3() {
            var _r1271_t0 = this;
            var r1271_currentGlyph = _r1271_t0;
            r249_includeGlyphPart(r1271_currentGlyph, r249_glyphs, 'dotlessj.straight', r249_AS_BASE);
            r249_includeGlyphPart(r1271_currentGlyph, r249_glyphs, 'dotAbove');
            r1271_currentGlyph['apply-transform'](r249_Translate(r249_RIGHTSB - r249_SB * 0.5 - r249_MIDDLE - r249_JBALANCE - r249_HALFSTROKE * r249_HVCONTRAST, 0));
            return void 0;
        }));
        r249_xn$save$2Lrc5.call(r1261_currentGlyph, 'ij', 307);
        r249_dependencyProfile[r1261_currentGlyph.name] = r249_getDependencyProfile(r1261_currentGlyph);
        return r1261_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.107', r249_xn$donothing$2Lrc0b)));
    var r249_EzhShape = function _r249_t147(r1276_top, r1276_bot, r1276_pleft, r1276_pright, r1276_hookless) {
        return function _r1276_t2() {
            var _r1278_t0 = this;
            var r1278_currentGlyph = _r1278_t0;
            var r1278_cor = 1.2 * r249_HVCONTRAST;
            var r1278_yMidBar = r1_mix(r1276_bot, r1276_top, 0.6);
            var r1278_ezhLeft = r1_mix(r249_SB, r249_RIGHTSB, r1_fallback(r1276_pleft, 0.2));
            var r1278_ezhRight = r1_mix(r249_SB, r249_RIGHTSB, r1_fallback(r1276_pright, 0.925));
            r1278_currentGlyph.include(r249_HBarTop(r249_SB, r1278_ezhRight, r1276_top));
            r1278_currentGlyph['start-from'](r1278_ezhLeft, r1278_yMidBar);
            r1278_currentGlyph['line-to'](r1278_ezhLeft + r249_STROKE * r1278_cor, r1278_yMidBar - r249_HALFSTROKE);
            r1278_currentGlyph['line-to'](r1278_ezhLeft + r249_STROKE * r1278_cor, r1278_yMidBar);
            r1278_currentGlyph['line-to'](r1278_ezhRight, r1276_top - r249_STROKE);
            r1278_currentGlyph['line-to'](r1278_ezhRight - r249_STROKE * r1278_cor, r1276_top - r249_STROKE);
            r1278_currentGlyph['reverse-last']();
            r1278_currentGlyph.include(r249_dispiro(r249_widths.rhs(), r249_flat(r1278_ezhLeft, r1278_yMidBar, r249_heading(r249_RIGHTWARD)), r249_curl(r249_MIDDLE - r249_CORRECTION_OMIDS, r1278_yMidBar), r249_archv(), r1276_hookless ? [
                r249_g4(r249_RIGHTSB - r249_OX, r1_mix(r1278_yMidBar, r1276_bot, r1276_hookless), r249_heading(r249_DOWNWARD)),
                r249_g4(r249_RIGHTSB - r249_OX, r1_mix(r1278_yMidBar, r1276_bot, r1276_hookless) - 1, r249_heading(r249_DOWNWARD))
            ] : [
                r249_g4(r249_RIGHTSB - r249_OX, r1_mix(r1278_yMidBar, r1276_bot, r249_SMALLSMOOTHB / (r249_SMALLSMOOTHA + r249_SMALLSMOOTHB))),
                r249_hookend(r1276_bot),
                r249_g4(r249_SB, r1276_bot + r249_HOOK * (r1276_top - r1276_bot) / r1_fallback(r249_para.cap0, r249_CAP))
            ]));
            if (r249_SLAB)
                r1278_currentGlyph.include(r249_DownwardLeftSerif(r249_SB, r1276_top, r249_VJUT));
            return void 0;
        };
    };
    var r249_RevEzhShape = function _r249_t148(r1288_top, r1288_bot, r1288_pleft, r1288_pright, r1288_hookless) {
        return function _r1288_t2() {
            var _r1290_t0 = this;
            var r1290_currentGlyph = _r1290_t0;
            var r1290_cor = 1.2 * r249_HVCONTRAST;
            var r1290_yMidBar = r1_mix(r1288_bot, r1288_top, 0.6);
            var r1290_ezhRight = r1_mix(r249_RIGHTSB, r249_SB, r1_fallback(r1288_pleft, 0.2));
            var r1290_ezhLeft = r1_mix(r249_RIGHTSB, r249_SB, r1_fallback(r1288_pright, 0.925));
            r1290_currentGlyph.include(r249_HBarTop(r1290_ezhLeft, r249_RIGHTSB, r1288_top));
            r1290_currentGlyph['start-from'](r1290_ezhRight, r1290_yMidBar);
            r1290_currentGlyph['line-to'](r1290_ezhRight - r249_STROKE * r1290_cor, r1290_yMidBar - r249_HALFSTROKE);
            r1290_currentGlyph['line-to'](r1290_ezhRight - r249_STROKE * r1290_cor, r1290_yMidBar);
            r1290_currentGlyph['line-to'](r1290_ezhLeft, r1288_top - r249_STROKE);
            r1290_currentGlyph['line-to'](r1290_ezhLeft + r249_STROKE * r1290_cor, r1288_top - r249_STROKE);
            r1290_currentGlyph.include(r249_dispiro(r249_widths.lhs(), r249_flat(r1290_ezhRight, r1290_yMidBar, r249_heading(r249_LEFTWARD)), r249_curl(r249_MIDDLE + r249_CORRECTION_OMIDS, r1290_yMidBar), r249_archv(), r249_g4(r249_SB + r249_OX, r1_mix(r1290_yMidBar, r1288_bot, r249_SMALLSMOOTHA / (r249_SMALLSMOOTHA + r249_SMALLSMOOTHB)), !r1288_hookless ? r249_important : r249_heading(r249_DOWNWARD)), r1288_hookless ? [] : [
                r249_hookend(r1288_bot),
                r249_g4(r249_RIGHTSB, r1288_bot + r249_HOOK * ((r1288_top - r1288_bot) / r249_CAP))
            ]));
            if (r249_SLAB)
                r1290_currentGlyph.include(r249_DownwardRightSerif(r249_RIGHTSB, r1288_top, r249_VJUT));
            return void 0;
        };
    };
    (function _r249_t149() {
        var _r1300_t0 = this;
        var r1300_currentGlyph = _r1300_t0;
        if (!r1300_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.108')
            r249_glyphList.pop();
        r1300_currentGlyph['set-width'](r249_WIDTH);
        r1300_currentGlyph.include(r249_markset.capital);
        r1300_currentGlyph.include(r249_EzhShape(r249_CAP, 0));
        r249_xn$save$2Lrc5.call(r1300_currentGlyph, 'Ezh', 439);
        r249_xn$save$2Lrc5.call(r1300_currentGlyph, 'cyrEzh', 1248);
        r249_dependencyProfile[r1300_currentGlyph.name] = r249_getDependencyProfile(r1300_currentGlyph);
        return r1300_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.108', r249_xn$donothing$2Lrc0b)));
    (function _r249_t150() {
        var _r1307_t0 = this;
        var r1307_currentGlyph = _r1307_t0;
        if (!r1307_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.109')
            r249_glyphList.pop();
        r1307_currentGlyph['set-width'](r249_WIDTH);
        r1307_currentGlyph.include(r249_markset.p);
        r1307_currentGlyph.include(r249_EzhShape(r249_XH, r249_DESCENDER));
        r249_xn$save$2Lrc5.call(r1307_currentGlyph, 'ezh', 658);
        r249_xn$save$2Lrc5.call(r1307_currentGlyph, 'cyrezh', 1249);
        r249_dependencyProfile[r1307_currentGlyph.name] = r249_getDependencyProfile(r1307_currentGlyph);
        return r1307_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.109', r249_xn$donothing$2Lrc0b)));
    (function _r249_t151() {
        var _r1314_t0 = this;
        var r1314_currentGlyph = _r1314_t0;
        if (!r1314_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.110')
            r249_glyphList.pop();
        r1314_currentGlyph.include(r249_markset.capital);
        r1314_currentGlyph.include(r249_RevEzhShape(r249_CAP, 0));
        r249_xn$save$2Lrc5.call(r1314_currentGlyph, 'revEzh', 440);
        r249_dependencyProfile[r1314_currentGlyph.name] = r249_getDependencyProfile(r1314_currentGlyph);
        return r1314_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.110', r249_xn$donothing$2Lrc0b)));
    (function _r249_t152() {
        var _r1319_t0 = this;
        var r1319_currentGlyph = _r1319_t0;
        if (!r1319_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.111')
            r249_glyphList.pop();
        r1319_currentGlyph.include(r249_markset.p);
        r1319_currentGlyph.include(r249_RevEzhShape(r249_XH, r249_DESCENDER));
        r249_xn$save$2Lrc5.call(r1319_currentGlyph, 'revezh', 441);
        r249_dependencyProfile[r1319_currentGlyph.name] = r249_getDependencyProfile(r1319_currentGlyph);
        return r1319_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.111', r249_xn$donothing$2Lrc0b)));
    (function _r249_t153() {
        var _r1324_t0 = this;
        var r1324_currentGlyph = _r1324_t0;
        if (!r1324_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.112')
            r249_glyphList.pop();
        r1324_currentGlyph.include(r249_markset.if);
        r1324_currentGlyph.include(r249_EzhShape(r249_XH, r249_DESCENDER, 0.4));
        r1324_currentGlyph.include(r249_VBarLeft(r249_SB, r249_XH * 0.1, r249_CAP));
        r249_xn$save$2Lrc5.call(r1324_currentGlyph, 'lyogh', 622);
        r249_dependencyProfile[r1324_currentGlyph.name] = r249_getDependencyProfile(r1324_currentGlyph);
        return r1324_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.112', r249_xn$donothing$2Lrc0b)));
    (function _r249_t154() {
        var _r1330_t0 = this;
        var r1330_currentGlyph = _r1330_t0;
        if (!r1330_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.113')
            r249_glyphList.pop();
        var r1330_b = r1_mix(r249_DESCENDER, r249_XH, 0.25);
        r1330_currentGlyph.include(r249_EzhShape(r249_XH, r1330_b, void 0, void 0, 0.5));
        var r1330_y = r1_mix(r1_mix(r1330_b, r249_XH, 0.6), r1330_b, 0.5);
        r1330_currentGlyph.include(r249_dispiro(r249_widths.rhs(), r249_g4(r249_RIGHTSB - r249_OX, r1330_y, r249_heading(r249_DOWNWARD)), r249_g4(r249_RIGHTSB - r249_OX, r1330_y - 1, r249_heading(r249_DOWNWARD)), r249_arcvh(), r249_flat(r1_mix(r249_SB, r249_RIGHTSB, 0.45), r1330_b), r249_curl(r1_mix(r249_SB, r249_RIGHTSB, 0.4), r1330_b), r249_archv(), r249_g4(r249_SB + r249_STROKE * r249_HVCONTRAST, r1_mix(r249_DESCENDER + r249_STROKE, r1330_b, 0.5)), r249_arcvh(), r249_flat(r1_mix(r249_SB, r249_RIGHTSB, 0.4), r249_DESCENDER + r249_STROKE), r249_curl(r249_RIGHTSB, r249_DESCENDER + r249_STROKE)));
        r249_xn$save$2Lrc5.call(r1330_currentGlyph, 'ezhtail', 442);
        r249_dependencyProfile[r1330_currentGlyph.name] = r249_getDependencyProfile(r1330_currentGlyph);
        return r1330_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.113', r249_xn$donothing$2Lrc0b)));
    (function _r249_t155() {
        var _r1335_t0 = this;
        var r1335_currentGlyph = _r1335_t0;
        if (!r1335_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.114')
            r249_glyphList.pop();
        r1335_currentGlyph.include(r249_markset.e);
        var r1335_p = r249_SMALLSMOOTHB / (r249_SMALLSMOOTHA + r249_SMALLSMOOTHB);
        r1335_currentGlyph.include(r249_EzhShape(r249_XH, r249_DESCENDER, void 0, void 0, r1335_p));
        var r1335_fine = r249_adviceBlackness(3);
        var r1335_rinner = (r249_XH * 0.4 - r1335_fine * 1.5) / 2;
        var r1335_m1 = r249_RIGHTSB - r249_STROKE * r249_HVCONTRAST - r249_OX;
        var r1335_x2 = r249_RIGHTSB - r249_HALFSTROKE;
        var r1335_y2 = r249_DESCENDER;
        r1335_currentGlyph.include(r249_dispiro(r249_widths.lhs(), r249_g4(r1335_m1, r1_mix(r1_mix(r249_DESCENDER, r249_XH, 0.6), r249_DESCENDER, r1335_p), r249_heading(r249_DOWNWARD)), r249_g4(r1335_m1, r1_mix(r1_mix(r249_DESCENDER, r249_XH, 0.6), r249_DESCENDER, r1335_p) - 1, r249_heading(r249_DOWNWARD)), r249_CurlyTail(r1335_fine, r1335_rinner, r1335_m1, r249_DESCENDER, r249_SB, r1335_x2, r1335_y2)));
        r249_xn$save$2Lrc5.call(r1335_currentGlyph, 'ezhcurlytail', 659);
        r249_dependencyProfile[r1335_currentGlyph.name] = r249_getDependencyProfile(r1335_currentGlyph);
        return r1335_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.114', r249_xn$donothing$2Lrc0b)));
    (function _r249_t156() {
        var _r1341_t0 = this;
        var r1341_currentGlyph = _r1341_t0;
        if (!r1341_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.115')
            r249_glyphList.pop();
        r1341_currentGlyph.include(r249_markset.b);
        r1341_currentGlyph.include(r249_dispiro(r249_widths.rhs(), r249_g4(r249_SB, r249_CAP - r249_HOOK), r249_hookstart(r249_CAPO), r249_g4(r249_RIGHTSB, r249_CAP - r249_adviceGlottalStopSmooth(r249_CAP, 1)), r249_alsothru(0.5, 0.5, r249_important), r249_flat(r249_MIDDLE + r249_HALFSTROKE * r249_HVCONTRAST, r249_XH * 0.3), r249_curl(r249_MIDDLE + r249_HALFSTROKE * r249_HVCONTRAST, 0, r249_heading(r249_DOWNWARD))));
        if (r249_SLAB)
            r1341_currentGlyph.include(r249_CenterBottomSerif(r249_MIDDLE, 0, r249_JUT));
        r249_xn$save$2Lrc5.call(r1341_currentGlyph, 'glottalstop', 660);
        r249_xn$save$2Lrc5.call(r1341_currentGlyph, 'capglottalstop', 577);
        r249_dependencyProfile[r1341_currentGlyph.name] = r249_getDependencyProfile(r1341_currentGlyph);
        return r1341_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.115', r249_xn$donothing$2Lrc0b)));
    (function _r249_t157() {
        var _r1348_t0 = this;
        var r1348_currentGlyph = _r1348_t0;
        if (!r1348_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.116')
            r249_glyphList.pop();
        r1348_currentGlyph.include(r249_markset.b);
        r1348_currentGlyph.include(r249_dispiro(r249_widths.lhs(), r249_g4(r249_RIGHTSB, r249_CAP - r249_HOOK), r249_hookstart(r249_CAPO), r249_g4(r249_SB, r249_CAP - r249_adviceGlottalStopSmooth(r249_CAP, -1)), r249_alsothru(0.5, 0.5, r249_important), r249_flat(r249_MIDDLE - r249_HALFSTROKE * r249_HVCONTRAST, r249_XH * 0.3), r249_curl(r249_MIDDLE - r249_HALFSTROKE * r249_HVCONTRAST, 0, r249_heading(r249_DOWNWARD))));
        if (r249_SLAB)
            r1348_currentGlyph.include(r249_CenterBottomSerif(r249_MIDDLE, 0, r249_JUT));
        r249_xn$save$2Lrc5.call(r1348_currentGlyph, 'revglottalstop', 661);
        r249_dependencyProfile[r1348_currentGlyph.name] = r249_getDependencyProfile(r1348_currentGlyph);
        return r1348_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.116', r249_xn$donothing$2Lrc0b)));
    (function _r249_t158() {
        var _r1354_t0 = this;
        var r1354_currentGlyph = _r1354_t0;
        if (!r1354_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.117')
            r249_glyphList.pop();
        r1354_currentGlyph.include(r249_markset.b);
        r1354_currentGlyph.include(r249_dispiro(r249_widths.rhs(), r249_g4(r249_SB, r249_XH - r249_HOOK), r249_hookstart(r249_XO), r249_g4(r249_RIGHTSB, r249_XH - r249_adviceGlottalStopSmooth(r249_XH, 1)), r249_alsothru(0.5, 0.5, r249_important), r249_flat(r249_MIDDLE + r249_HALFSTROKE * r249_HVCONTRAST, r249_XH * 0.15), r249_curl(r249_MIDDLE + r249_HALFSTROKE * r249_HVCONTRAST, 0, r249_heading(r249_DOWNWARD))));
        if (r249_SLAB)
            r1354_currentGlyph.include(r249_CenterBottomSerif(r249_MIDDLE, 0, r249_JUT));
        r249_xn$save$2Lrc5.call(r1354_currentGlyph, 'smallglottalstop', 578);
        r249_dependencyProfile[r1354_currentGlyph.name] = r249_getDependencyProfile(r1354_currentGlyph);
        return r1354_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.117', r249_xn$donothing$2Lrc0b)));
    (function _r249_t159() {
        var _r1360_t0 = this;
        var r1360_currentGlyph = _r1360_t0;
        if (!r1360_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.118')
            r249_glyphList.pop();
        r1360_currentGlyph.include(r249_markset.e);
        var r1360_smooth = r249_adviceGlottalStopSmooth(r249_XH, -1 - r249_TANSLANT * (15 - r249_WIDTH / 500 * 12) * r1_clamp(0, 1, r1_linreg(126, 1, 135, 0.5, r249_STROKE)));
        r1360_currentGlyph.include(r249_dispiro(r249_widths.lhs(), r249_g4(r249_RIGHTSB, r249_XH - r249_HOOK), r249_hookstart(r249_XO), r249_g4.down.mid(r249_SB, r249_XH - r1360_smooth), r249_alsothru(0.5, 0.5, r249_important), r249_flat(r249_MIDDLE - r249_HALFSTROKE * r249_HVCONTRAST, r249_XH * 0.15), r249_curl(r249_MIDDLE - r249_HALFSTROKE * r249_HVCONTRAST, 0, r249_heading(r249_DOWNWARD))));
        r1360_currentGlyph.include(r249_HOverlayBar(r249_MIDDLE - r249_LONGJUT * 0.6, r249_MIDDLE + r249_LONGJUT * 0.6, r249_XH * 0.25));
        r1360_currentGlyph.include(r249_FlipAround(r249_MIDDLE, r249_XH / 2));
        r249_xn$save$2Lrc5.call(r1360_currentGlyph, 'invglottalstopbar', 446);
        r249_dependencyProfile[r1360_currentGlyph.name] = r249_getDependencyProfile(r1360_currentGlyph);
        return r1360_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.118', r249_xn$donothing$2Lrc0b)));
    (function _r249_t160() {
        var _r1367_t0 = this;
        var r1367_currentGlyph = _r1367_t0;
        if (!r1367_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.119')
            r249_glyphList.pop();
        r1367_currentGlyph.include(r249_markset.b);
        var r1367_fine = r249_markHalfStroke * 2;
        r1367_currentGlyph.include(r249_dispiro(r249_widths.rhs(r1367_fine), r249_g4(r249_SB, r249_CAP - r249_HOOK), r249_hookstart(r249_CAPO), r249_g4(r249_RIGHTSB, r249_CAP - r249_adviceGlottalStopSmooth(r249_CAP, 1)), r249_alsothru(0.5, 0.5, r249_important), r249_flat(r249_MIDDLE + r1367_fine / 2 * r249_HVCONTRAST, r249_XH * 0.3), r249_curl(r249_MIDDLE + r1367_fine / 2 * r249_HVCONTRAST, 0, r249_heading(r249_DOWNWARD))));
        if (r249_SLAB)
            r1367_currentGlyph.include(r249_CenterBottomSerif(r249_MIDDLE, 0, r249_JUT, r1367_fine));
        r249_xn$save$2Lrc5.call(r1367_currentGlyph, 'fineglottalstop');
        r249_dependencyProfile[r1367_currentGlyph.name] = r249_getDependencyProfile(r1367_currentGlyph);
        return r1367_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.119', r249_xn$donothing$2Lrc0b)));
    (function _r249_t161() {
        var _r1373_t0 = this;
        var r1373_currentGlyph = _r1373_t0;
        if (!r1373_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.120')
            r249_glyphList.pop();
        r1373_currentGlyph.include(r249_markset.b);
        var r1373_fine = r249_markHalfStroke * 2;
        r1373_currentGlyph.include(r249_dispiro(r249_widths.lhs(r1373_fine), r249_g4(r249_RIGHTSB, r249_CAP - r249_HOOK), r249_hookstart(r249_CAPO), r249_g4(r249_SB, r249_CAP - r249_adviceGlottalStopSmooth(r249_CAP, -1)), r249_alsothru(0.5, 0.5, r249_important), r249_flat(r249_MIDDLE - r1373_fine / 2 * r249_HVCONTRAST, r249_XH * 0.3), r249_curl(r249_MIDDLE - r1373_fine / 2 * r249_HVCONTRAST, 0, r249_heading(r249_DOWNWARD))));
        if (r249_SLAB)
            r1373_currentGlyph.include(r249_CenterBottomSerif(r249_MIDDLE, 0, r249_JUT, r1373_fine));
        r249_xn$save$2Lrc5.call(r1373_currentGlyph, 'finerevglottalstop');
        r249_dependencyProfile[r1373_currentGlyph.name] = r249_getDependencyProfile(r1373_currentGlyph);
        return r1373_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.120', r249_xn$donothing$2Lrc0b)));
    r249_turned('invglottalstop', 662, 'revglottalstop', r249_MIDDLE, r249_CAP / 2);
    (function _r249_t162() {
        var _r1379_t0 = this;
        var r1379_currentGlyph = _r1379_t0;
        if (!r1379_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.121')
            r249_glyphList.pop();
        r249_includeGlyphPart(r1379_currentGlyph, r249_glyphs, 'glottalstop', r249_AS_BASE);
        r1379_currentGlyph.include(r249_HOverlayBar(r249_MIDDLE - r249_LONGJUT * 0.6, r249_MIDDLE + r249_LONGJUT * 0.6, r249_CAP * 0.25));
        r249_xn$save$2Lrc5.call(r1379_currentGlyph, 'glottalstopbar', 673);
        r249_dependencyProfile[r1379_currentGlyph.name] = r249_getDependencyProfile(r1379_currentGlyph);
        return r1379_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.121', r249_xn$donothing$2Lrc0b)));
    (function _r249_t163() {
        var _r1384_t0 = this;
        var r1384_currentGlyph = _r1384_t0;
        if (!r1384_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.122')
            r249_glyphList.pop();
        r249_includeGlyphPart(r1384_currentGlyph, r249_glyphs, 'revglottalstop', r249_AS_BASE);
        r1384_currentGlyph.include(r249_HOverlayBar(r249_MIDDLE - r249_LONGJUT * 0.6, r249_MIDDLE + r249_LONGJUT * 0.6, r249_CAP * 0.25));
        r249_xn$save$2Lrc5.call(r1384_currentGlyph, 'revglottalstopbar', 674);
        r249_dependencyProfile[r1384_currentGlyph.name] = r249_getDependencyProfile(r1384_currentGlyph);
        return r1384_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.122', r249_xn$donothing$2Lrc0b)));
    (function _r249_t164() {
        var _r1389_t0 = this;
        var r1389_currentGlyph = _r1389_t0;
        if (!r1389_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.123')
            r249_glyphList.pop();
        r1389_currentGlyph.include(r249_markset.b);
        r1389_currentGlyph.include(r249_OShape(r249_CAP * 0.6, 0, r249_SB, r249_RIGHTSB));
        var r1389_ymiddlea = (r249_CAP * 0.6 + r249_SMALLSMOOTHA - r249_SMALLSMOOTHB) / 2;
        r1389_currentGlyph.include(r249_dispiro(r249_widths.lhs(), r249_g4.up.start(r249_RIGHTSB - r249_OX, r1389_ymiddlea), r249_quadcontrols(0, 0.8), r249_g4(r249_SB + r249_STROKE * 1.1, r249_CAP)));
        r1389_currentGlyph.include(r249_dispiro(r249_widths.center(r249_OVERLAYSTROKE), r249_flat(r1_mix(r249_SB, r249_RIGHTSB, 0.1), r1_mix(r249_XH, r249_CAP, -0.1)), r249_curl(r1_mix(r249_SB, r249_RIGHTSB, 0.95), r1_mix(r249_XH, r249_CAP, 0.3))));
        r249_xn$save$2Lrc5.call(r1389_currentGlyph, 'eth', 240);
        r249_dependencyProfile[r1389_currentGlyph.name] = r249_getDependencyProfile(r1389_currentGlyph);
        return r1389_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.123', r249_xn$donothing$2Lrc0b)));
    (function _r249_t165() {
        var _r1396_t0 = this;
        var r1396_currentGlyph = _r1396_t0;
        if (!r1396_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.124')
            r249_glyphList.pop();
        r1396_currentGlyph['set-width'](r249_WIDTH);
        r1396_currentGlyph.include(r249_markset.capital);
        var r1396_bowlTop = r249_CAP * 0.81;
        var r1396_bowlBottom = r249_CAP * 0.19;
        var r1396_turn = r1_mix(r1396_bowlTop, r1396_bowlBottom, r249_SMOOTHB / (r249_SMOOTHA + r249_SMOOTHB));
        var r1396_turnRadius = (r1396_bowlTop - r1396_bowlBottom) / 2;
        r1396_currentGlyph.include(r249_dispiro(r249_widths.rhs(), r249_flat(r249_SB * 1.25 + 1, r1396_bowlTop, r249_heading(r249_RIGHTWARD)), r249_curl(r249_RIGHTSB - r1396_turnRadius - r249_CORRECTION_OMIDS, r1396_bowlTop), r249_archv(), r249_g4(r249_RIGHTSB - r249_O, r1396_turn), r249_arcvh(), r249_flat(r249_RIGHTSB - r1396_turnRadius + r249_CORRECTION_OMIDS, r1396_bowlBottom), r249_curl(r249_SB * 1.25 + 1, r1396_bowlBottom, r249_heading(r249_LEFTWARD))));
        r1396_currentGlyph.include(r249_VBarLeft(r249_SB * 1.25, 0, r249_CAP));
        if (r249_SLAB) {
            r1396_currentGlyph.include(r249_CenterBottomSerif(r249_SB * 1.25 + r249_HALFSTROKE * r249_HVCONTRAST, 0, r249_JUT));
            r1396_currentGlyph.include(r249_CenterTopSerif(r249_SB * 1.25 + r249_HALFSTROKE * r249_HVCONTRAST, r249_CAP, r249_JUT));
        }
        r249_xn$save$2Lrc5.call(r1396_currentGlyph, 'Thorn', 222);
        r249_xn$save$2Lrc5.call(r1396_currentGlyph, 'Sho', 1015);
        r249_dependencyProfile[r1396_currentGlyph.name] = r249_getDependencyProfile(r1396_currentGlyph);
        return r1396_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.124', r249_xn$donothing$2Lrc0b)));
    (function _r249_t166() {
        var _r1406_t0 = this;
        var r1406_currentGlyph = _r1406_t0;
        if (!r1406_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.125')
            r249_glyphList.pop();
        r1406_currentGlyph.include(r249_xn$createglyph$7Hrq(function _r1406_t2() {
            var _r1409_t0 = this;
            var r1409_currentGlyph = _r1409_t0;
            r249_includeGlyphPart(r1409_currentGlyph, r249_glyphs, 'b');
            r1409_currentGlyph['eject-contour']('serifLB');
            return void 0;
        }));
        r1406_currentGlyph.include(r249_xn$createglyph$7Hrq(function _r1406_t3() {
            var _r1414_t0 = this;
            var r1414_currentGlyph = _r1414_t0;
            r249_includeGlyphPart(r1414_currentGlyph, r249_glyphs, 'p');
            r1414_currentGlyph['eject-contour']('bowl');
            r1414_currentGlyph['eject-contour']('serifLT');
            return void 0;
        }));
        r1406_currentGlyph.include(r249_markset.if);
        r249_xn$save$2Lrc5.call(r1406_currentGlyph, 'thorn', 254);
        r249_xn$save$2Lrc5.call(r1406_currentGlyph, 'sho', 1016);
        r249_dependencyProfile[r1406_currentGlyph.name] = r249_getDependencyProfile(r1406_currentGlyph);
        return r1406_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.125', r249_xn$donothing$2Lrc0b)));
    (function _r249_t167() {
        var r1422_jut;
        var _r1422_t0 = this;
        var r1422_currentGlyph = _r1422_t0;
        if (!r1422_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.126')
            r249_glyphList.pop();
        var r1422_df = r249_DivFrame(r249_para.diversityM, 3);
        r1422_currentGlyph['set-width'](r1422_df.width);
        r1422_currentGlyph.include(r1422_df.markSet.capital);
        r1422_currentGlyph.include(r249_VBarLeft(r1422_df.leftSB, 0, r249_CAP, r1422_df.mvs));
        r1422_currentGlyph.include(r249_HBar(r249_SB, r1422_df.middle, r249_CAP / 2));
        r1422_currentGlyph.include(r249_dispiro(r249_widths.lhs(r1422_df.mvs), r249_flat(r1422_df.middle - r1422_df.mvs * 0.5 * r249_HVCONTRAST, r249_CAP, r249_heading(r249_DOWNWARD)), r249_curl(r1422_df.middle - r1422_df.mvs * 0.5 * r249_HVCONTRAST, r249_SMALLSMOOTHB * 0.6 * r1422_df.div), r249_arcvh(), r249_g4(r1_mix(r1422_df.middle - r1422_df.mvs * 0.5 * r249_HVCONTRAST, r1422_df.rightSB, 0.5), r249_O, r249_heading(r249_RIGHTWARD)), r249_archv(), r249_flat(r1422_df.rightSB, r249_SMALLSMOOTHA * 0.6 * r1422_df.div), r249_curl(r1422_df.rightSB, r249_XH, r249_heading(r249_UPWARD))));
        if (r249_SLAB) {
            r1422_jut = r249_JUT * 0.75;
            r1422_currentGlyph.include(r249_CenterTopSerif(r1422_df.leftSB + r1422_df.mvs / 2 * r249_HVCONTRAST, r249_CAP, r1422_jut));
            r1422_currentGlyph.include(r249_CenterBottomSerif(r1422_df.leftSB + r1422_df.mvs / 2 * r249_HVCONTRAST, 0, r1422_jut));
            r1422_currentGlyph.include(r249_CenterTopSerif(r1422_df.middle, r249_CAP, r1422_jut));
        }
        r249_xn$save$2Lrc5.call(r1422_currentGlyph, 'Hwair', 502);
        r249_dependencyProfile[r1422_currentGlyph.name] = r249_getDependencyProfile(r1422_currentGlyph);
        return r1422_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.126', r249_xn$donothing$2Lrc0b)));
    (function _r249_t168() {
        var r1433_jut;
        var _r1433_t0 = this;
        var r1433_currentGlyph = _r1433_t0;
        if (!r1433_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.127')
            r249_glyphList.pop();
        var r1433_df = r249_DivFrame(r249_para.diversityM, 3);
        r1433_currentGlyph['set-width'](r1433_df.width);
        r1433_currentGlyph.include(r1433_df.markSet.b);
        r1433_currentGlyph.include(r249_VBarLeft(r1433_df.leftSB, 0, r249_CAP, r1433_df.mvs));
        r1433_currentGlyph.include(r249_dispiro(r249_nShoulderKnots(r1433_df.leftSB + r1433_df.mvs * r249_HVCONTRAST, r1433_df.middle + r1433_df.mvs * 0.5 * r249_HVCONTRAST, r1433_df.mvs * 0.4, void 0, r249_XH * 0.51, r249_SMALLSMOOTHA * 0.6 * r1433_df.div, r249_SMALLSMOOTHB * 0.6 * r1433_df.div, r1433_df.mvs), r249_flat(r1433_df.middle + r1433_df.mvs * 0.5 * r249_HVCONTRAST, r249_XH * 0.5, r249_heading(r249_DOWNWARD)), r249_curl(r1433_df.middle + r1433_df.mvs * 0.5 * r249_HVCONTRAST, r249_SMALLSMOOTHB * 0.6 * r1433_df.div), r249_arcvh(), r249_g4(r1_mix(r1433_df.middle - r1433_df.mvs * 0.5 * r249_HVCONTRAST, r1433_df.rightSB, 0.5), r249_O, r249_widths.heading(r1433_df.mvs, 0, r249_RIGHTWARD)), r249_archv(), r249_flat(r1433_df.rightSB, r249_SMALLSMOOTHA * 0.6 * r1433_df.div), r249_curl(r1433_df.rightSB, r249_XH, r249_heading(r249_UPWARD))));
        if (r249_SLAB) {
            r1433_jut = r249_JUT * 0.75;
            r1433_currentGlyph.include(r249_LeftwardTopSerif(r1433_df.leftSB, r249_CAP, r1433_jut - r1433_df.mvs / 2 * r249_HVCONTRAST));
            if (!r249_para.isItalic) {
                r1433_currentGlyph.include(r249_CenterBottomSerif(r1433_df.leftSB + r1433_df.mvs / 2 * r249_HVCONTRAST, 0, r1433_jut));
                r1433_currentGlyph['tag-contour']('serifLB');
            }
        }
        r249_xn$save$2Lrc5.call(r1433_currentGlyph, 'hwair', 405);
        r249_dependencyProfile[r1433_currentGlyph.name] = r249_getDependencyProfile(r1433_currentGlyph);
        return r1433_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.127', r249_xn$donothing$2Lrc0b)));
    (function _r249_t169() {
        var _r1443_t0 = this;
        var r1443_currentGlyph = _r1443_t0;
        if (!r1443_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.128')
            r249_glyphList.pop();
        var r1443_df = r249_DivFrame(r249_para.diversityM, 3);
        r1443_currentGlyph['set-width'](r1443_df.width);
        r1443_currentGlyph.include(r1443_df.markSet.capital);
        var r1443_abarRight = r1443_df.middle + r1443_df.mvs / 2 * r249_HVCONTRAST;
        r1443_currentGlyph.include(r249_OShape(r249_CAP, 0, r1443_df.leftSB, r1443_abarRight, r1443_df.mvs, r249_SMALLSMOOTHA * r1443_df.div * 0.6, r249_SMALLSMOOTHB * r1443_df.div * 0.6));
        r1443_currentGlyph.include(r249_VBarRight(r1443_df.rightSB - r249_O, r249_DESCENDER, r249_CAP, r1443_df.mvs));
        r1443_currentGlyph.include(r249_dispiro(r249_widths.lhs(r1443_df.mvs), r249_flat(r1443_df.middle, r249_CAP - r249_SMALLSMOOTHB * 0.6 * r1443_df.div, r249_heading(r249_RIGHTWARD)), r249_curl(r1443_df.middle + 1, r249_CAP - r249_SMALLSMOOTHB * 0.6 * r1443_df.div, r249_heading(r249_RIGHTWARD)), r249_alsothru(0.5, 0.15), r249_g4(r1443_df.rightSB - r249_O - r1443_df.mvs * r249_HVCONTRAST, r249_CAP, r249_widths(0, r1443_df.mvs))));
        r249_xn$save$2Lrc5.call(r1443_currentGlyph, 'Gha', 418);
        r249_dependencyProfile[r1443_currentGlyph.name] = r249_getDependencyProfile(r1443_currentGlyph);
        return r1443_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.128', r249_xn$donothing$2Lrc0b)));
    (function _r249_t170() {
        var _r1451_t0 = this;
        var r1451_currentGlyph = _r1451_t0;
        if (!r1451_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.129')
            r249_glyphList.pop();
        var r1451_df = r249_DivFrame(r249_para.diversityM, 3);
        r1451_currentGlyph['set-width'](r1451_df.width);
        r1451_currentGlyph.include(r1451_df.markSet.p);
        var r1451_abarRight = r1451_df.middle + r1451_df.mvs / 2 * r249_HVCONTRAST;
        r1451_currentGlyph.include(r249_OShape(r249_XH, 0, r1451_df.leftSB, r1451_abarRight, r1451_df.mvs, r249_SMALLSMOOTHA * r1451_df.div * 0.6, r249_SMALLSMOOTHB * r1451_df.div * 0.6));
        r1451_currentGlyph.include(r249_VBarRight(r1451_df.rightSB - r249_O, r249_DESCENDER, r249_XH, r1451_df.mvs));
        r1451_currentGlyph.include(r249_dispiro(r249_widths.lhs(r1451_df.mvs), r249_flat(r1451_df.middle, r249_XH - r249_SMALLSMOOTHB * 0.6 * r1451_df.div, r249_heading(r249_RIGHTWARD)), r249_curl(r1451_df.middle + 1, r249_XH - r249_SMALLSMOOTHB * 0.6 * r1451_df.div, r249_heading(r249_RIGHTWARD)), r249_alsothru(0.5, 0.15), r249_g4(r1451_df.rightSB - r249_O - r1451_df.mvs * r249_HVCONTRAST, r249_XH, r249_widths(0, r1451_df.mvs))));
        r249_xn$save$2Lrc5.call(r1451_currentGlyph, 'gha', 419);
        r249_dependencyProfile[r1451_currentGlyph.name] = r249_getDependencyProfile(r1451_currentGlyph);
        return r1451_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.129', r249_xn$donothing$2Lrc0b)));
    var r249_WynnShape = function _r249_t171(r1458_bot, r1458_top) {
        return function _r1458_t2() {
            var _r1460_t0 = this;
            var r1460_currentGlyph = _r1460_t0;
            r1460_currentGlyph.include(r249_VBarLeft(r249_SB, r1458_bot, r1458_top));
            r1460_currentGlyph.include(r249_dispiro(r249_widths.rhs(r249_STROKE * r249_CTHIN), r249_g4(r249_SB + r249_HVCONTRAST * r249_STROKE * (1 - r249_CTHIN), r1_mix(r1458_bot, r1458_top, 0.8)), r249_alsothru(0.55, 0.85), r249_g4(r249_MIDDLE, r1458_top - r249_O, r249_widths.heading(0, r249_STROKE, r249_RIGHTWARD)), r249_archv(), r249_g4(r249_RIGHTSB - r249_O, r1_mix(r1458_bot, r1458_top, 0.7)), r249_alsothru(0.25, 0.45), r249_g4(r249_SB + r249_STROKE * r249_HVCONTRAST, r1_mix(r1458_bot, r1458_top, 0.1))));
            return void 0;
        };
    };
    (function _r249_t172() {
        var _r1464_t0 = this;
        var r1464_currentGlyph = _r1464_t0;
        if (!r1464_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.130')
            r249_glyphList.pop();
        r1464_currentGlyph.include(r249_markset.capital);
        r1464_currentGlyph.include(r249_WynnShape(0, r249_CAP));
        r249_xn$save$2Lrc5.call(r1464_currentGlyph, 'Wynn', 503);
        r249_dependencyProfile[r1464_currentGlyph.name] = r249_getDependencyProfile(r1464_currentGlyph);
        return r1464_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.130', r249_xn$donothing$2Lrc0b)));
    (function _r249_t173() {
        var _r1469_t0 = this;
        var r1469_currentGlyph = _r1469_t0;
        if (!r1469_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.131')
            r249_glyphList.pop();
        r1469_currentGlyph.include(r249_markset.p);
        r1469_currentGlyph.include(r249_WynnShape(r249_DESCENDER, r249_XH));
        r249_xn$save$2Lrc5.call(r1469_currentGlyph, 'wynn', 447);
        r249_dependencyProfile[r1469_currentGlyph.name] = r249_getDependencyProfile(r1469_currentGlyph);
        return r1469_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.131', r249_xn$donothing$2Lrc0b)));
    var r249_YoghShape = function _r249_t174(r1473_top, r1473_bot) {
        return function _r1473_t2() {
            var _r1475_t0 = this;
            var r1475_currentGlyph = _r1475_t0;
            r1475_currentGlyph.include(r249_dispiro(r249_widths.rhs(), r249_g4(r249_SB, r1473_top - r249_HOOK), r249_hookstart(r1473_top - r249_O), r249_g4(r249_RIGHTSB, r1473_top - r249_SMOOTHB), r249_alsothruthem([[
                    0.5,
                    0.75
                ]]), r249_g4(r1_mix(r249_SB, r249_RIGHTSB, 0.1) + r249_STROKE * 0.25, r1_mix(r1473_bot, r1473_top, 0.425) - r249_HALFSTROKE)));
            r1475_currentGlyph.include(r249_dispiro(r249_widths.rhs(), r249_g4(r1_mix(r249_SB, r249_RIGHTSB, 0.75), r1_mix(r1473_bot, r1473_top - r249_SMOOTHB, 0.758) + r249_HALFSTROKE), r249_g4(r249_RIGHTSB, r1_mix(r1473_bot, r1473_top - r249_SMOOTHB, 0.475)), r249_alsothruthem([
                [
                    0.25,
                    0.6
                ],
                [
                    0.5,
                    0.81
                ]
            ]), r249_g4(r249_SB, r1473_bot + r249_O)));
            return void 0;
        };
    };
    (function _r249_t175() {
        var _r1479_t0 = this;
        var r1479_currentGlyph = _r1479_t0;
        if (!r1479_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.132')
            r249_glyphList.pop();
        r1479_currentGlyph.include(r249_markset.capital);
        r1479_currentGlyph.include(r249_YoghShape(r249_CAP, 0));
        r249_xn$save$2Lrc5.call(r1479_currentGlyph, 'Yogh', 540);
        r249_dependencyProfile[r1479_currentGlyph.name] = r249_getDependencyProfile(r1479_currentGlyph);
        return r1479_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.132', r249_xn$donothing$2Lrc0b)));
    (function _r249_t176() {
        var _r1484_t0 = this;
        var r1484_currentGlyph = _r1484_t0;
        if (!r1484_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.133')
            r249_glyphList.pop();
        r1484_currentGlyph.include(r249_markset.p);
        r1484_currentGlyph.include(r249_YoghShape(r249_XH, r249_DESCENDER));
        r249_xn$save$2Lrc5.call(r1484_currentGlyph, 'yogh', 541);
        r249_dependencyProfile[r1484_currentGlyph.name] = r249_getDependencyProfile(r1484_currentGlyph);
        return r1484_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.133', r249_xn$donothing$2Lrc0b)));
    var r249_RamsHornShape = function _r249_t177(r1488_bottom, r1488_top) {
        return function _r1488_t2() {
            var _r1490_t0 = this;
            var r1490_currentGlyph = _r1490_t0;
            var r1490_hf = r249_adviceBlackness(4) / 2;
            var r1490_d = r1490_hf * 2 + r249_WIDTH * 0.05;
            r1490_currentGlyph.include(r249_dispiro(r249_widths.center(), r249_g4(r249_SB + r249_HALFSTROKE * r249_HVCONTRAST + r249_O, r1488_top, r249_heading(r249_DOWNWARD)), r249_quadcontrols(1, 0.7, 16), r249_g4(r249_MIDDLE + r1490_d - r1490_hf, r1488_bottom + r1490_d * (1 - r249_TANSLANT * 0.5), r249_widths(r1490_hf, r1490_hf)), r249_arcvh(), r249_g4(r249_MIDDLE + r249_CORRECTION_OMIDX * r1490_hf * 2, r1488_bottom + r1490_hf), r249_archv(), r249_g4(r249_MIDDLE - r1490_d + r1490_hf, r1488_bottom + r1490_d * (1 + r249_TANSLANT * 0.5)), r249_quadcontrols(0, 0.3, 16), r249_g4(r249_RIGHTSB - r249_HALFSTROKE * r249_HVCONTRAST - r249_O, r1488_top, r249_widths.heading(r249_HALFSTROKE, r249_HALFSTROKE, r249_UPWARD))));
            return void 0;
        };
    };
    (function _r249_t178() {
        var _r1493_t0 = this;
        var r1493_currentGlyph = _r1493_t0;
        if (!r1493_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.134')
            r249_glyphList.pop();
        r1493_currentGlyph.include(r249_markset.p);
        r1493_currentGlyph.include(r249_RamsHornShape(r249_DESCENDER, r249_XH));
        r249_xn$save$2Lrc5.call(r1493_currentGlyph, 'latingamma', 611);
        r249_dependencyProfile[r1493_currentGlyph.name] = r249_getDependencyProfile(r1493_currentGlyph);
        return r1493_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.134', r249_xn$donothing$2Lrc0b)));
    (function _r249_t179() {
        var _r1498_t0 = this;
        var r1498_currentGlyph = _r1498_t0;
        if (!r1498_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.135')
            r249_glyphList.pop();
        r1498_currentGlyph.include(r249_markset.if);
        r1498_currentGlyph.include(r249_RamsHornShape(r249_DESCENDER, r249_CAP));
        r249_xn$save$2Lrc5.call(r1498_currentGlyph, 'latinGamma', 404);
        r249_dependencyProfile[r1498_currentGlyph.name] = r249_getDependencyProfile(r1498_currentGlyph);
        return r1498_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.135', r249_xn$donothing$2Lrc0b)));
    (function _r249_t180() {
        var _r1503_t0 = this;
        var r1503_currentGlyph = _r1503_t0;
        if (!r1503_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.136')
            r249_glyphList.pop();
        r1503_currentGlyph.include(r249_markset.e);
        r1503_currentGlyph.include(r249_RamsHornShape(0, r249_XH));
        r249_xn$save$2Lrc5.call(r1503_currentGlyph, 'ramshorn', 612);
        r249_dependencyProfile[r1503_currentGlyph.name] = r249_getDependencyProfile(r1503_currentGlyph);
        return r1503_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.136', r249_xn$donothing$2Lrc0b)));
    (function _r249_t181() {
        var _r1508_t0 = this;
        var r1508_currentGlyph = _r1508_t0;
        if (!r1508_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.137')
            r249_glyphList.pop();
        r1508_currentGlyph.include(r249_markset.e);
        var r1508_k1 = 0.65;
        var r1508_k2 = 0.7;
        var r1508_zmidy = r249_XH * 0.15;
        r1508_currentGlyph.include(r249_dispiro(r249_widths.lhs(), r249_g4.right.start(r249_SB, 0, r249_heading(r249_RIGHTWARD)), r249_g4(r249_MIDDLE, r1508_zmidy), r249_g4.up.mid(r1_mix(r249_MIDDLE, r249_RIGHTSB, r1508_k1), r249_XH * r1508_k2, r249_heading(r249_UPWARD)), r249_arcvh(), r249_g4.left.mid(r249_MIDDLE, r249_XH - r249_O, r249_heading(r249_LEFTWARD)), r249_archv(), r249_g4.down.mid(r1_mix(r249_MIDDLE, r249_SB, r1508_k1), r249_XH * r1508_k2, r249_heading(r249_DOWNWARD)), r249_g4(r249_MIDDLE, r1508_zmidy), r249_g4.right.end(r249_RIGHTSB, 0, r249_heading(r249_RIGHTWARD))));
        r1508_currentGlyph.include(r249_xn$spirooutline$1aao(r249_corner(r249_MIDDLE, r1508_zmidy + 1), r249_g4.up.mid(r1_mix(r249_MIDDLE, r249_RIGHTSB, r1508_k1) - 1, r249_XH * r1508_k2), r249_g4.left.mid(r249_MIDDLE, r249_XH), r249_g4.down.mid(r1_mix(r249_MIDDLE, r249_SB, r1508_k1) + 1, r249_XH * r1508_k2), r249_close()));
        r1508_currentGlyph['reverse-last']();
        r249_xn$save$2Lrc5.call(r1508_currentGlyph, 'latinayin', 7461);
        r249_dependencyProfile[r1508_currentGlyph.name] = r249_getDependencyProfile(r1508_currentGlyph);
        return r1508_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.137', r249_xn$donothing$2Lrc0b)));
    var r249_ErTail = function _r249_t182(r1514_left, r1514_w, r1514_dohook) {
        return function _r1514_t2() {
            var _r1516_t0 = this;
            var r1516_currentGlyph = _r1516_t0;
            var r1516_right = r249_WIDTH;
            var r1516_mid = r1_mix(r1514_left, r1516_right, 0.5);
            var r1516_rise = (r249_WIDTH - r1514_left) * 0.3;
            var r1516_sw = r1_fallback(r1514_w, r249_markFine * 2);
            r1516_currentGlyph.include(r249_dispiro(r249_widths.rhs(r1516_sw), r249_g2(r1514_left - r1516_sw / 2 * r249_HVCONTRAST, r249_XH * 0.5), r249_g2(r1516_mid - r1516_sw * r249_HVCONTRAST, r249_XH * 0.5 + r1516_rise)));
            r1516_currentGlyph.include(r249_dispiro(r249_widths.rhs(r1516_sw), r249_flat(r1516_mid, r249_XH * 0.5 + r1516_rise, r249_heading(r249_DOWNWARD)), r249_curl(r1516_mid, r249_XH * 0.5 + (r1514_dohook ? 0 : r1516_rise - 1), r249_heading(r249_DOWNWARD)), r1514_dohook ? [r249_hookend(r249_XH * 0.5 - r1516_rise)] : [r249_arcvh()], r249_g4(r1516_right - (r1514_dohook ? r249_markFine * 2 : 0), r249_XH * 0.5 - (r1514_dohook ? r1516_rise * 0.5 : r1516_rise), r1514_dohook ? void 0 : r249_heading(r249_RIGHTWARD))));
            return void 0;
        };
    };
    (function _r249_t183() {
        var _r1520_t0 = this;
        var r1520_currentGlyph = _r1520_t0;
        if (!r1520_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.138')
            r249_glyphList.pop();
        r1520_currentGlyph.include(r249_ErTail(-r249_STROKE * r249_HVCONTRAST, r249_STROKE, true));
        r249_xn$save$2Lrc5.call(r1520_currentGlyph, 'rhotichook', 734);
        r249_dependencyProfile[r1520_currentGlyph.name] = r249_getDependencyProfile(r1520_currentGlyph);
        return r1520_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.138', r249_xn$donothing$2Lrc0b)));
    if (!r249_recursive) {
        _r249_t184 = r249_Widen([
            'schwa',
            'revlatinepsilon'
        ], 0.85, 1);
        (function (_r249_leti6) {
            var r1523_thinfont = _r249_leti6;
            (function _r1523_t0() {
                var _r1525_t0 = this;
                var r1525_currentGlyph = _r1525_t0;
                if (!r1525_currentGlyph)
                    return void 0;
                if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.139')
                    r249_glyphList.pop();
                r1525_currentGlyph.include(r249_markset.e);
                r1525_currentGlyph.include(r1523_thinfont.schwa);
                r1525_currentGlyph.include(r249_ErTail(r249_WIDTH * 0.85 - r249_SB - r249_markFine * r249_HVCONTRAST * 1.25));
                r249_xn$save$2Lrc5.call(r1525_currentGlyph, 'er', 602);
                r249_dependencyProfile[r1525_currentGlyph.name] = r249_getDependencyProfile(r1525_currentGlyph);
                return r1525_currentGlyph;
            }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.139', r249_xn$donothing$2Lrc0b)));
            return function _r1523_t1() {
                var _r1531_t0 = this;
                var r1531_currentGlyph = _r1531_t0;
                if (!r1531_currentGlyph)
                    return void 0;
                if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.140')
                    r249_glyphList.pop();
                r1531_currentGlyph.include(r249_markset.e);
                r1531_currentGlyph.include(r1523_thinfont.revlatinepsilon);
                r1531_currentGlyph.include(r249_ErTail(r249_WIDTH * 0.85 - r249_SB - r249_markFine * r249_HVCONTRAST * 1.25));
                r249_xn$save$2Lrc5.call(r1531_currentGlyph, 'revlatinepsiloner', 605);
                r249_dependencyProfile[r1531_currentGlyph.name] = r249_getDependencyProfile(r1531_currentGlyph);
                return r1531_currentGlyph;
            }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.140', r249_xn$donothing$2Lrc0b));
        }(_r249_t184));
    }
    (function _r249_t187() {
        var _r1537_t0 = this;
        var r1537_currentGlyph = _r1537_t0;
        if (!r1537_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/letters-unified-extended.ptl.141')
            r249_glyphList.pop();
        var r1537_g = r249_xn$createglyph$7Hrq(function _r1537_t2() {
            var _r1539_t0 = this;
            var r1539_currentGlyph = _r1539_t0;
            r1539_currentGlyph.include(r249_HBarTop(r249_SB, r249_RIGHTSB, r249_CAP * 0.4));
            r1539_currentGlyph.include(r249_VBarLeft(r249_SB, r249_CAP * 0.1, r249_CAP * 0.4));
            r1539_currentGlyph.include(r249_VBarRight(r249_RIGHTSB, r249_CAP * 0.1, r249_CAP * 0.4));
            return void 0;
        });
        r1537_currentGlyph.include(r1537_g);
        r1537_currentGlyph['apply-transform'](r249_Upright());
        r1537_currentGlyph['apply-transform'](r249_Translate(0, r249_CAP / 2));
        r1537_currentGlyph['apply-transform'](r249_Italify());
        r1537_currentGlyph.include(r1537_g);
        r249_xn$save$2Lrc5.call(r1537_currentGlyph, 'bidentalpercussive', 685);
        r249_dependencyProfile[r1537_currentGlyph.name] = r249_getDependencyProfile(r1537_currentGlyph);
        return r1537_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/letters-unified-extended.ptl.141', r249_xn$donothing$2Lrc0b)));
    return {
        'LambdaShape': r249_LambdaShape,
        'DeltaMaskShape': r249_DeltaMaskShape,
        'DeltaShape': r249_DeltaShape,
        'SigmaShape': r249_SigmaShape,
        'PiShape': r249_PiShape,
        'EzhShape': r249_EzhShape
    };
};
