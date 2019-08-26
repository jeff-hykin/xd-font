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
exports.apply = r1_apply = function _r1_t12() {
    var _r249_t6 = this;
    var r249_xn$capture$2Lrc = _r249_t6;
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
    (function () {
        r249_alias('enquad', 8192, 'space');
        r249_alias('ensp', 8194, 'space');
        r249_alias('threePerEmsp', 8196, 'space');
        r249_alias('fourPerEmsp', 8197, 'space');
        r249_alias('sixPerEmsp', 8198, 'space');
        r249_alias('fgsp', 8199, 'space');
        (function _r252_t0() {
            var _r254_t0 = this;
            var r254_currentGlyph = _r254_t0;
            if (!r254_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.1')
                r249_glyphList.pop();
            r254_currentGlyph['set-width'](0);
            r254_currentGlyph.cmpPriority = -9999;
            r249_xn$save$2Lrc5.call(r254_currentGlyph, 'zwsp', 8203);
            r249_dependencyProfile[r254_currentGlyph.name] = r249_getDependencyProfile(r254_currentGlyph);
            return r254_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.1', r249_xn$donothing$2Lrc0b)));
        (function _r252_t1() {
            var _r258_t0 = this;
            var r258_currentGlyph = _r258_t0;
            if (!r258_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.2')
                r249_glyphList.pop();
            r249_includeGlyphPart(r258_currentGlyph, r249_glyphs, 'space');
            r258_currentGlyph.include(r249_markset.e);
            r258_currentGlyph.cmpPriority = -100;
            r249_xn$save$2Lrc5.call(r258_currentGlyph, 'nbsp', 160);
            r249_dependencyProfile[r258_currentGlyph.name] = r249_getDependencyProfile(r258_currentGlyph);
            return r258_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.2', r249_xn$donothing$2Lrc0b)));
        return function _r252_t2() {
            var _r263_t0 = this;
            var r263_currentGlyph = _r263_t0;
            if (!r263_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.3')
                r249_glyphList.pop();
            r263_currentGlyph['set-width'](r249_FULLWIDTH);
            r249_xn$save$2Lrc5.call(r263_currentGlyph, 'emquad', 8193);
            r249_xn$save$2Lrc5.call(r263_currentGlyph, 'emsp', 8195);
            r249_dependencyProfile[r263_currentGlyph.name] = r249_getDependencyProfile(r263_currentGlyph);
            return r263_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.3', r249_xn$donothing$2Lrc0b));
    }());
    (function () {
        (function _r268_t0() {
            var _r270_t0 = this;
            var r270_currentGlyph = _r270_t0;
            if (!r270_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.4')
                r249_glyphList.pop();
            r270_currentGlyph.include(r249_dispiro(r249_widths.lhs(), r249_g4(r1_mix(r249_SB, r249_RIGHTSB, r1_designParameters.parenInside), r1_mix(r249_symbolMid, r249_parenTop, 1 + r1_designParameters.parenOvershoot)), r249_quadcontrols(1, 1 - r1_designParameters.parenCurliness), r249_g4(r1_mix(r249_SB, r249_RIGHTSB, r1_designParameters.parenOutside), r249_symbolMid), r249_quadcontrols(0, r1_designParameters.parenCurliness), r249_g4(r1_mix(r249_SB, r249_RIGHTSB, r1_designParameters.parenInside), r1_mix(r249_symbolMid, r249_parenBot, 1 + r1_designParameters.parenOvershoot))));
            r249_xn$save$2Lrc5.call(r270_currentGlyph, 'parenLeft', '(');
            r249_dependencyProfile[r270_currentGlyph.name] = r249_getDependencyProfile(r270_currentGlyph);
            return r270_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.4', r249_xn$donothing$2Lrc0b)));
        (function _r268_t1() {
            var _r274_t0 = this;
            var r274_currentGlyph = _r274_t0;
            if (!r274_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.5')
                r249_glyphList.pop();
            r249_includeGlyphPart(r274_currentGlyph, r249_glyphs, 'parenLeft');
            r274_currentGlyph.include(r249_FlipAround(r249_MIDDLE, r249_symbolMid));
            r249_xn$save$2Lrc5.call(r274_currentGlyph, 'parenRight', ')');
            r249_dependencyProfile[r274_currentGlyph.name] = r249_getDependencyProfile(r274_currentGlyph);
            return r274_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.5', r249_xn$donothing$2Lrc0b)));
        (function _r268_t2() {
            var _r279_t0 = this;
            var r279_currentGlyph = _r279_t0;
            if (!r279_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.6')
                r249_glyphList.pop();
            var r279_l = r1_mix(r249_SB, r249_RIGHTSB, r1_designParameters.bracketOutside);
            var r279_r = r1_mix(r249_SB, r249_RIGHTSB, r1_designParameters.bracketInside);
            r279_currentGlyph.include(r249_HBarBottom(r279_l, r279_r, r249_parenBot));
            r279_currentGlyph.include(r249_HBarTop(r279_l, r279_r, r249_parenTop));
            r279_currentGlyph.include(r249_VBarLeft(r279_l, r249_parenBot, r249_parenTop));
            r249_xn$save$2Lrc5.call(r279_currentGlyph, 'bracketLeft', '[');
            r249_dependencyProfile[r279_currentGlyph.name] = r249_getDependencyProfile(r279_currentGlyph);
            return r279_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.6', r249_xn$donothing$2Lrc0b)));
        (function _r268_t3() {
            var _r285_t0 = this;
            var r285_currentGlyph = _r285_t0;
            if (!r285_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.7')
                r249_glyphList.pop();
            r249_includeGlyphPart(r285_currentGlyph, r249_glyphs, 'bracketLeft');
            r285_currentGlyph.include(r249_FlipAround(r249_MIDDLE, r249_symbolMid));
            r249_xn$save$2Lrc5.call(r285_currentGlyph, 'bracketRight', ']');
            r249_dependencyProfile[r285_currentGlyph.name] = r249_getDependencyProfile(r285_currentGlyph);
            return r285_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.7', r249_xn$donothing$2Lrc0b)));
        (function _r268_t4() {
            var _r290_t0 = this;
            var r290_currentGlyph = _r290_t0;
            if (!r290_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.8')
                r249_glyphList.pop();
            var r290_parenCenter = r1_mix(r249_SB, r249_RIGHTSB, r1_mix(r1_designParameters.braceInside, r1_designParameters.braceOutside, 0.5));
            var r290_radius = r1_mix(r249_SB, r249_RIGHTSB, r1_designParameters.braceInside) - r290_parenCenter;
            var r290_top = r1_mix(r249_symbolMid, r249_parenTop, 1 + r1_designParameters.braceOvershoot);
            var r290_bot = r1_mix(r249_symbolMid, r249_parenBot, 1 + r1_designParameters.braceOvershoot);
            r290_currentGlyph.include(r249_dispiro(r249_straight.left.start(r1_mix(r249_SB, r249_RIGHTSB, r1_designParameters.braceInside), r290_top - r249_HALFSTROKE, r249_widths.heading(r249_HALFSTROKE, r249_HALFSTROKE, r249_LEFTWARD)), r249_archv(), r249_flat(r290_parenCenter, r290_top - r290_radius, r249_heading(r249_DOWNWARD)), r249_curl(r290_parenCenter, r249_symbolMid + r290_radius, r249_heading(r249_DOWNWARD)), r249_arcvh(), r249_straight.left.end(r1_mix(r249_SB, r249_RIGHTSB, r1_designParameters.braceOutside), r249_symbolMid, r249_heading(r249_LEFTWARD))));
            r290_currentGlyph.include(r249_dispiro(r249_straight.left.start(r1_mix(r249_SB, r249_RIGHTSB, r1_designParameters.braceInside), r290_bot + r249_HALFSTROKE, r249_widths.heading(r249_HALFSTROKE, r249_HALFSTROKE, r249_LEFTWARD)), r249_archv(), r249_flat(r290_parenCenter, r290_bot + r290_radius, r249_heading(r249_UPWARD)), r249_curl(r290_parenCenter, r249_symbolMid - r290_radius, r249_heading(r249_UPWARD)), r249_arcvh(), r249_straight.left.end(r1_mix(r249_SB, r249_RIGHTSB, r1_designParameters.braceOutside), r249_symbolMid, r249_heading(r249_LEFTWARD))));
            r249_xn$save$2Lrc5.call(r290_currentGlyph, 'braceLeft.straight');
            r249_dependencyProfile[r290_currentGlyph.name] = r249_getDependencyProfile(r290_currentGlyph);
            return r290_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.8', r249_xn$donothing$2Lrc0b)));
        (function _r268_t5() {
            var _r295_t0 = this;
            var r295_currentGlyph = _r295_t0;
            if (!r295_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.9')
                r249_glyphList.pop();
            var r295_xIns = r1_mix(r249_SB, r249_RIGHTSB, r1_mix(r1_designParameters.braceOutside, r1_designParameters.braceInside, 1));
            var r295_xOus = r1_mix(r249_SB, r249_RIGHTSB, r1_mix(r1_designParameters.braceInside, r1_designParameters.braceOutside, 1));
            var r295_m1 = r1_mix(r249_SB, r249_RIGHTSB, r1_mix(r1_designParameters.braceInside, r1_designParameters.braceOutside, r1_designParameters.braceCurlyM1));
            var r295_m2 = r1_mix(r249_SB, r249_RIGHTSB, r1_mix(r1_designParameters.braceInside, r1_designParameters.braceOutside, r1_designParameters.braceCurlyM2));
            var r295_braceRadiusLowLimit = (r249_parenTop - r249_symbolMid - r249_STROKE) * (1 / 3) + r249_HALFSTROKE;
            var r295_radius1 = Math.min(r295_xIns - r295_m1, r295_braceRadiusLowLimit);
            var r295_radius2 = Math.min(r295_m2 - r295_xOus, r295_braceRadiusLowLimit) - r249_HALFSTROKE;
            var r295_ess = r1_mix(r249_STROKE, r249_ESS, 0.25);
            var r295_top = r1_mix(r249_symbolMid, r249_parenTop, 1 + r1_designParameters.braceOvershoot);
            var r295_bot = r1_mix(r249_symbolMid, r249_parenBot, 1 + r1_designParameters.braceOvershoot);
            r295_currentGlyph.include(r249_dispiro(r249_straight.left.start(r295_xIns, r295_top - r249_HALFSTROKE, r249_widths.heading(r249_HALFSTROKE, r249_HALFSTROKE, r249_LEFTWARD)), r249_archv(), r249_g4.down.mid(r295_m1, r295_top - r295_radius1, r249_heading(r249_DOWNWARD)), r249_alsothru(0.5, 0.5, r249_widths(r295_ess / 2, r295_ess / 2)), r249_g4.down.mid(r295_m2, r249_symbolMid + r295_radius2, r249_widths.heading(r249_HALFSTROKE, r249_HALFSTROKE, r249_DOWNWARD)), r249_arcvh(), r249_straight.left.end(r295_xOus, r249_symbolMid, r249_heading(r249_LEFTWARD))));
            r295_currentGlyph.include(r249_dispiro(r249_straight.left.start(r295_xIns, r295_bot + r249_HALFSTROKE, r249_widths.heading(r249_HALFSTROKE, r249_HALFSTROKE, r249_LEFTWARD)), r249_archv(), r249_g4.up.mid(r295_m1, r295_bot + r295_radius1, r249_heading(r249_UPWARD)), r249_alsothru(0.5, 0.5, r249_widths(r295_ess / 2, r295_ess / 2)), r249_g4.up.mid(r295_m2, r249_symbolMid - r295_radius2, r249_widths.heading(r249_HALFSTROKE, r249_HALFSTROKE, r249_UPWARD)), r249_arcvh(), r249_straight.left.end(r295_xOus, r249_symbolMid, r249_heading(r249_LEFTWARD))));
            r249_xn$save$2Lrc5.call(r295_currentGlyph, 'braceLeft.curly');
            r249_dependencyProfile[r295_currentGlyph.name] = r249_getDependencyProfile(r295_currentGlyph);
            return r295_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.9', r249_xn$donothing$2Lrc0b)));
        r249_composite('braceRight.straight', r249_glyphs['braceLeft.straight'], r249_FlipAround(r249_MIDDLE, r249_symbolMid));
        r249_composite('braceRight.curly', r249_glyphs['braceLeft.curly'], r249_FlipAround(r249_MIDDLE, r249_symbolMid));
        r249_xn$selectvariant$7Hrq('braceLeft', '{');
        r249_xn$selectvariant$7Hrq('braceRight', '}');
        (function _r268_t6() {
            var _r300_t0 = this;
            var r300_currentGlyph = _r300_t0;
            if (!r300_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.10')
                r249_glyphList.pop();
            var r300_fatten = Math.hypot(1, (r1_mix(r249_SB, r249_RIGHTSB, r1_designParameters.parenInside - r1_designParameters.parenOutside) - r249_O) / (r249_parenTop - r249_symbolMid));
            r300_currentGlyph.include(r249_dispiro(r249_widths.lhs(r249_OPERATORSTROKE), r249_flat(r1_mix(r249_SB, r249_RIGHTSB, r1_designParameters.parenInside), r249_parenTop), r249_curl(r1_mix(r249_SB, r249_RIGHTSB, r1_designParameters.parenOutside) + r249_O, r249_symbolMid, r249_widths.heading(r249_OPERATORSTROKE * r300_fatten, 0, r249_DOWNWARD))));
            r300_currentGlyph.include(r249_dispiro(r249_widths.rhs(r249_OPERATORSTROKE), r249_flat(r1_mix(r249_SB, r249_RIGHTSB, r1_designParameters.parenInside), r249_parenBot), r249_curl(r1_mix(r249_SB, r249_RIGHTSB, r1_designParameters.parenOutside) + r249_O, r249_symbolMid, r249_widths.heading(0, r249_OPERATORSTROKE * r300_fatten, r249_UPWARD))));
            r249_xn$save$2Lrc5.call(r300_currentGlyph, 'angleLeft', 9001);
            r249_dependencyProfile[r300_currentGlyph.name] = r249_getDependencyProfile(r300_currentGlyph);
            return r300_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.10', r249_xn$donothing$2Lrc0b)));
        r249_alias('mangleLeft', 10216, 'angleLeft');
        r249_turned('angleRight', 9002, 'angleLeft', r249_MIDDLE, r249_symbolMid);
        r249_alias('mangleRight', 10217, 'angleRight');
        r249_dual('dblangleLeft', 10218, 'angleLeft', r249_WIDTH * 0.35);
        r249_dual('dblangleRight', 10219, 'angleRight', r249_WIDTH * 0.35);
        (function _r268_t7() {
            var _r305_t0 = this;
            var r305_currentGlyph = _r305_t0;
            if (!r305_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.11')
                r249_glyphList.pop();
            r305_currentGlyph.include(r249_HBarTop(r1_mix(r249_SB, r249_RIGHTSB, r1_designParameters.bracketOutside), r1_mix(r249_SB, r249_RIGHTSB, r1_designParameters.bracketInside), r249_parenTop));
            r305_currentGlyph.include(r249_VBarLeft(r1_mix(r249_SB, r249_RIGHTSB, r1_designParameters.bracketOutside), r249_parenBot, r249_parenTop));
            r249_xn$save$2Lrc5.call(r305_currentGlyph, 'ceilingLeft', 8968);
            r249_dependencyProfile[r305_currentGlyph.name] = r249_getDependencyProfile(r305_currentGlyph);
            return r305_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.11', r249_xn$donothing$2Lrc0b)));
        (function _r268_t8() {
            var _r310_t0 = this;
            var r310_currentGlyph = _r310_t0;
            if (!r310_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.12')
                r249_glyphList.pop();
            r310_currentGlyph.include(r249_HBarBottom(r1_mix(r249_SB, r249_RIGHTSB, r1_designParameters.bracketOutside), r1_mix(r249_SB, r249_RIGHTSB, r1_designParameters.bracketInside), r249_parenBot));
            r310_currentGlyph.include(r249_VBarLeft(r1_mix(r249_SB, r249_RIGHTSB, r1_designParameters.bracketOutside), r249_parenBot, r249_parenTop));
            r249_xn$save$2Lrc5.call(r310_currentGlyph, 'floorLeft', 8970);
            r249_dependencyProfile[r310_currentGlyph.name] = r249_getDependencyProfile(r310_currentGlyph);
            return r310_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.12', r249_xn$donothing$2Lrc0b)));
        r249_turned('floorRight', 8971, 'ceilingLeft', r249_MIDDLE, r249_symbolMid);
        return r249_turned('ceilingRight', 8969, 'floorLeft', r249_MIDDLE, r249_symbolMid);
    }());
    (function () {
        (function _r315_t0() {
            var _r317_t0 = this;
            var r317_currentGlyph = _r317_t0;
            if (!r317_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.13')
                r249_glyphList.pop();
            r317_currentGlyph['set-width'](r249_WIDTH);
            r317_currentGlyph.include(r249_Ring(r249_PERIODSIZE - r249_O, r249_O, r249_MIDDLE - r249_PERIODRADIUS + r249_O, r249_MIDDLE + r249_PERIODRADIUS - r249_O, true));
            r249_xn$save$2Lrc5.call(r317_currentGlyph, 'period', '.');
            r249_dependencyProfile[r317_currentGlyph.name] = r249_getDependencyProfile(r317_currentGlyph);
            return r317_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.13', r249_xn$donothing$2Lrc0b)));
        (function _r315_t1() {
            var _r322_t0 = this;
            var r322_currentGlyph = _r322_t0;
            if (!r322_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.14')
                r249_glyphList.pop();
            r322_currentGlyph['set-width'](r249_WIDTH);
            r322_currentGlyph.include(r249_Ring(r249_XH - r249_O, r249_XH - r249_PERIODSIZE + r249_O, r249_MIDDLE - r249_PERIODRADIUS + r249_O, r249_MIDDLE + r249_PERIODRADIUS - r249_O, true));
            r249_xn$save$2Lrc5.call(r322_currentGlyph, 'xhdot');
            r249_dependencyProfile[r322_currentGlyph.name] = r249_getDependencyProfile(r322_currentGlyph);
            return r322_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.14', r249_xn$donothing$2Lrc0b)));
        (function _r315_t2() {
            var _r327_t0 = this;
            var r327_currentGlyph = _r327_t0;
            if (!r327_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.15')
                r249_glyphList.pop();
            r327_currentGlyph['set-width'](r249_WIDTH);
            r249_includeGlyphPart(r327_currentGlyph, r249_glyphs, 'period');
            var r327_sw = Math.min(r249_STROKE, r249_PERIODSIZE * 0.5);
            r327_currentGlyph.include(r249_dispiro(r249_widths.rhs(r327_sw), r249_g4(r249_MIDDLE + r249_PERIODRADIUS - r249_O, r1_mix(r249_O, r249_PERIODSIZE - r249_O, 0.5)), r249_g4(r249_MIDDLE + r249_PERIODRADIUS - r249_O + 0.1 * r249_TANSLANT, r1_mix(r249_O, r249_PERIODSIZE - r249_O, 0.5) - 0.1), r249_quadcontrols(0.9 * r249_TANSLANT * r249_DESCENDER / (1.7 * r249_PERIODRADIUS - r249_O), 0.5, 12), r249_g4(r1_mix(r249_MIDDLE, r249_MIDDLE - r249_PERIODRADIUS, 0.3), r249_DESCENDER)));
            r249_xn$save$2Lrc5.call(r327_currentGlyph, 'comma', ',');
            r249_dependencyProfile[r327_currentGlyph.name] = r249_getDependencyProfile(r327_currentGlyph);
            return r327_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.15', r249_xn$donothing$2Lrc0b)));
        (function _r315_t3() {
            var _r333_t0 = this;
            var r333_currentGlyph = _r333_t0;
            if (!r333_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.16')
                r249_glyphList.pop();
            r333_currentGlyph['set-width'](r249_WIDTH);
            r249_includeGlyphPart(r333_currentGlyph, r249_glyphs, 'period');
            var r333_sw = Math.min(r249_STROKE, r249_PERIODSIZE * 0.5);
            r333_currentGlyph.include(r249_dispiro(r249_widths.lhs(r333_sw), r249_g4(r249_MIDDLE - r249_PERIODRADIUS + r249_O, r1_mix(r249_O, r249_PERIODSIZE - r249_O, 0.5)), r249_g4(r249_MIDDLE - r249_PERIODRADIUS + r249_O + 0.1 * r249_TANSLANT, r1_mix(r249_O, r249_PERIODSIZE - r249_O, 0.5) - 0.1), r249_quadcontrols(-0.3 * r249_TANSLANT * r249_DESCENDER / ((1.3 + r249_TANSLANT * 2) * r249_PERIODRADIUS - r249_O), 0.5, 12), r249_g4(r1_mix(r249_MIDDLE, r249_MIDDLE + r249_PERIODRADIUS, 0.3 + r249_TANSLANT * 2), r249_DESCENDER)));
            r249_xn$save$2Lrc5.call(r333_currentGlyph, 'invertComma');
            r249_dependencyProfile[r333_currentGlyph.name] = r249_getDependencyProfile(r333_currentGlyph);
            return r333_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.16', r249_xn$donothing$2Lrc0b)));
        (function _r315_t4() {
            var _r339_t0 = this;
            var r339_currentGlyph = _r339_t0;
            if (!r339_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.17')
                r249_glyphList.pop();
            r339_currentGlyph['set-width'](r249_WIDTH);
            r249_includeGlyphPart(r339_currentGlyph, r249_glyphs, 'period');
            r249_includeGlyphPart(r339_currentGlyph, r249_glyphs, 'xhdot');
            r249_xn$save$2Lrc5.call(r339_currentGlyph, 'colon', ':');
            r249_xn$save$2Lrc5.call(r339_currentGlyph, 'colon.dmid');
            (function _r339_t2() {
                var _r346_t0 = this;
                var r346_currentGlyph = _r346_t0;
                if (!r346_currentGlyph)
                    return void 0;
                if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.18')
                    r249_glyphList.pop();
                r346_currentGlyph['apply-transform'](r249_Upright());
                r346_currentGlyph['apply-transform'](r249_Translate(0, r249_symbolMid - r249_XH / 2));
                r346_currentGlyph['apply-transform'](r249_Italify());
                r249_xn$save$2Lrc5.call(r346_currentGlyph, 'colon.mid');
                r249_dependencyProfile[r346_currentGlyph.name] = r249_getDependencyProfile(r346_currentGlyph);
                return r346_currentGlyph;
            }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.18', function _r339_t3() {
                var _r351_t0 = this;
                _r351_t0.include(r339_currentGlyph, true);
                return _r351_t0.advanceWidth = r339_currentGlyph.advanceWidth;
            })));
            (function _r339_t4() {
                var _r353_t0 = this;
                var r353_currentGlyph = _r353_t0;
                if (!r353_currentGlyph)
                    return void 0;
                if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.19')
                    r249_glyphList.pop();
                var r353_delta = Math.max(0, r249_WIDTH / 2 - (r249_XH - r249_PERIODSIZE) / 2);
                r353_currentGlyph['apply-transform'](r249_Translate(r353_delta, 0));
                r249_xn$save$2Lrc5.call(r353_currentGlyph, 'colon.dright');
                r353_currentGlyph['apply-transform'](r249_Translate(-2 * r353_delta, 0));
                r249_xn$save$2Lrc5.call(r353_currentGlyph, 'colon.dleft');
                r249_dependencyProfile[r353_currentGlyph.name] = r249_getDependencyProfile(r353_currentGlyph);
                return r353_currentGlyph;
            }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.19', function _r339_t5() {
                var _r358_t0 = this;
                _r358_t0.include(r339_currentGlyph, true);
                return _r358_t0.advanceWidth = r339_currentGlyph.advanceWidth;
            })));
            r249_dependencyProfile[r339_currentGlyph.name] = r249_getDependencyProfile(r339_currentGlyph);
            return r339_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.17', r249_xn$donothing$2Lrc0b)));
        return function _r315_t5() {
            var _r360_t0 = this;
            var r360_currentGlyph = _r360_t0;
            if (!r360_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.20')
                r249_glyphList.pop();
            r249_includeGlyphPart(r360_currentGlyph, r249_glyphs, 'comma');
            r249_includeGlyphPart(r360_currentGlyph, r249_glyphs, 'xhdot');
            r249_xn$save$2Lrc5.call(r360_currentGlyph, 'semicolon', ';');
            r249_xn$save$2Lrc5.call(r360_currentGlyph, 'greekquestion', 894);
            r249_dependencyProfile[r360_currentGlyph.name] = r249_getDependencyProfile(r360_currentGlyph);
            return r360_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.20', r249_xn$donothing$2Lrc0b));
    }());
    (function () {
        var r366_questionBottom = Math.max(r249_CAP * 0.3, r249_DOTSIZE * 1.5);
        var r366_QuestionShape = function _r366_t0(r367_top, r367_questionBottom, r367_left, r367_right) {
            return function _r367_t2() {
                var _r369_t0 = this;
                var r369_currentGlyph = _r369_t0;
                r369_currentGlyph.include(r249_dispiro(r249_widths.rhs(), r249_g4(r367_left, r367_top - r249_HOOK), r249_hookstart(r367_top - r249_O), r249_g4(r367_right, r367_top - r249_SMOOTHB * 0.9), r249_alsothru(0.5, 0.45, r249_widths.center(r249_ESSQUESTION)), r249_straight.down.end(r1_mix(r367_left, r367_right, 0.5) - r249_HALFSTROKE * r249_HVCONTRAST, r367_questionBottom, r249_widths(r249_STROKE, 0))));
                return void 0;
            };
        };
        (function _r366_t1() {
            var _r372_t0 = this;
            var r372_currentGlyph = _r372_t0;
            if (!r372_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.21')
                r249_glyphList.pop();
            r372_currentGlyph['set-width'](r249_WIDTH);
            r372_currentGlyph.include(r366_QuestionShape(r249_CAP, r366_questionBottom, r249_SB, r249_RIGHTSB));
            r372_currentGlyph.include(r249_Ring(r249_DOTSIZE - r249_O, r249_O, r249_MIDDLE - r249_DOTRADIUS + r249_O, r249_MIDDLE + r249_DOTRADIUS - r249_O, true));
            r249_xn$save$2Lrc5.call(r372_currentGlyph, 'question', '?');
            r249_dependencyProfile[r372_currentGlyph.name] = r249_getDependencyProfile(r372_currentGlyph);
            return r372_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.21', r249_xn$donothing$2Lrc0b)));
        (function _r366_t2() {
            var _r378_t0 = this;
            var r378_currentGlyph = _r378_t0;
            if (!r378_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.22')
                r249_glyphList.pop();
            r378_currentGlyph['set-width'](r249_WIDTH);
            var r378_angle = 12 / 180 * Math.PI;
            r378_currentGlyph.include(r366_QuestionShape(r249_CAP, r366_questionBottom, r1_mix(r249_MIDDLE, r249_SB, 0.75), r249_RIGHTSB));
            r378_currentGlyph.include(r249_Translate(-r249_MIDDLE, -r249_DOTRADIUS));
            r378_currentGlyph.include(r249_Rotate(-2 * r378_angle));
            r378_currentGlyph.include(r249_Translate(r249_MIDDLE, r249_DOTRADIUS));
            r378_currentGlyph.include(r249_VBar(r249_MIDDLE, r366_questionBottom, r249_CAP));
            r378_currentGlyph.include(r249_Translate(-r249_MIDDLE, -r249_DOTRADIUS));
            r378_currentGlyph.include(r249_Rotate(1.2 * r378_angle));
            r378_currentGlyph.include(r249_Translate(r249_MIDDLE, r249_DOTRADIUS));
            r378_currentGlyph.include(r249_Ring(r249_DOTSIZE - r249_O, r249_O, r249_MIDDLE - r249_DOTRADIUS + r249_O, r249_MIDDLE + r249_DOTRADIUS - r249_O, true));
            r249_xn$save$2Lrc5.call(r378_currentGlyph, 'interrobang', 8253);
            r249_dependencyProfile[r378_currentGlyph.name] = r249_getDependencyProfile(r378_currentGlyph);
            return r378_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.22', r249_xn$donothing$2Lrc0b)));
        (function _r366_t3() {
            var _r391_t0 = this;
            var r391_currentGlyph = _r391_t0;
            if (!r391_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.23')
                r249_glyphList.pop();
            r391_currentGlyph['set-width'](r249_WIDTH);
            r249_includeGlyphPart(r391_currentGlyph, r249_glyphs, 'interrobang');
            r391_currentGlyph.include(r249_FlipAround(r249_MIDDLE, r249_CAP / 2));
            r249_xn$save$2Lrc5.call(r391_currentGlyph, 'gnaborretni', 11800);
            r249_dependencyProfile[r391_currentGlyph.name] = r249_getDependencyProfile(r391_currentGlyph);
            return r391_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.23', r249_xn$donothing$2Lrc0b)));
        (function _r366_t4() {
            var _r397_t0 = this;
            var r397_currentGlyph = _r397_t0;
            if (!r397_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.24')
                r249_glyphList.pop();
            r397_currentGlyph['set-width'](r249_WIDTH);
            r249_includeGlyphPart(r397_currentGlyph, r249_glyphs, 'question');
            r397_currentGlyph.include(r249_FlipAround(r249_MIDDLE, r249_XH / 2));
            r249_xn$save$2Lrc5.call(r397_currentGlyph, 'questionDown', 191);
            r249_dependencyProfile[r397_currentGlyph.name] = r249_getDependencyProfile(r397_currentGlyph);
            return r397_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.24', r249_xn$donothing$2Lrc0b)));
        (function _r366_t5() {
            var _r403_t0 = this;
            var r403_currentGlyph = _r403_t0;
            if (!r403_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.25')
                r249_glyphList.pop();
            r403_currentGlyph['set-width'](r249_WIDTH);
            r403_currentGlyph.include(r249_markset.capital);
            r403_currentGlyph.include(r249_VBar(r249_MIDDLE, r1_clamp(0, r249_CAP * 0.4, r366_questionBottom * 1.18), r249_CAP));
            r403_currentGlyph.include(r249_Ring(r249_DOTSIZE - r249_O, r249_O, r249_MIDDLE - r249_DOTRADIUS + r249_O, r249_MIDDLE + r249_DOTRADIUS - r249_O, true));
            r249_xn$save$2Lrc5.call(r403_currentGlyph, 'exclam', '!');
            r249_dependencyProfile[r403_currentGlyph.name] = r249_getDependencyProfile(r403_currentGlyph);
            return r403_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.25', r249_xn$donothing$2Lrc0b)));
        (function _r366_t6() {
            var _r410_t0 = this;
            var r410_currentGlyph = _r410_t0;
            if (!r410_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.26')
                r249_glyphList.pop();
            r410_currentGlyph['set-width'](r249_WIDTH);
            r249_includeGlyphPart(r410_currentGlyph, r249_glyphs, 'exclam');
            r410_currentGlyph.include(r249_FlipAround(r249_MIDDLE, r249_XH / 2));
            r249_xn$save$2Lrc5.call(r410_currentGlyph, 'exclamDown', 161);
            r249_dependencyProfile[r410_currentGlyph.name] = r249_getDependencyProfile(r410_currentGlyph);
            return r410_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.26', r249_xn$donothing$2Lrc0b)));
        (function _r366_t7() {
            var _r416_t0 = this;
            var r416_currentGlyph = _r416_t0;
            if (!r416_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.27')
                r249_glyphList.pop();
            var r416_d = 0.25 * r249_WIDTH;
            r249_includeGlyphPart(r416_currentGlyph, r249_glyphs, 'exclam');
            r416_currentGlyph['apply-transform'](r249_Translate(-r416_d * 2, 0));
            r249_includeGlyphPart(r416_currentGlyph, r249_glyphs, 'exclam');
            r416_currentGlyph['apply-transform'](r249_Translate(r416_d, 0));
            r249_xn$save$2Lrc5.call(r416_currentGlyph, 'doubleexclam', 8252);
            r249_dependencyProfile[r416_currentGlyph.name] = r249_getDependencyProfile(r416_currentGlyph);
            return r416_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.27', r249_xn$donothing$2Lrc0b)));
        (function _r366_t8() {
            var _r423_t0 = this;
            var r423_currentGlyph = _r423_t0;
            if (!r423_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.28')
                r249_glyphList.pop();
            r423_currentGlyph['set-width'](r249_WIDTH);
            r423_currentGlyph.anchors.above = {
                'type': r249_BASE,
                'x': r249_MIDDLE,
                'y': r249_parenTop
            };
            r423_currentGlyph.anchors.below = {
                'type': r249_BASE,
                'x': r249_MIDDLE,
                'y': r249_parenBot
            };
            r423_currentGlyph.include(r249_VBar(r249_MIDDLE, r249_parenBot, r249_parenTop));
            r249_xn$save$2Lrc5.call(r423_currentGlyph, 'bar', '|');
            r249_dependencyProfile[r423_currentGlyph.name] = r249_getDependencyProfile(r423_currentGlyph);
            return r423_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.28', r249_xn$donothing$2Lrc0b)));
        (function _r366_t9() {
            var _r428_t0 = this;
            var r428_currentGlyph = _r428_t0;
            if (!r428_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.29')
                r249_glyphList.pop();
            var r428_breakDist = Math.max(r249_STROKE, r249_CAP / 8);
            r428_currentGlyph.include(r249_VBar(r249_MIDDLE, r249_symbolMid + r428_breakDist / 2, r249_parenTop));
            r428_currentGlyph.include(r249_VBar(r249_MIDDLE, r249_parenBot, r249_symbolMid - r428_breakDist / 2));
            r249_xn$save$2Lrc5.call(r428_currentGlyph, 'brokenbar', 166);
            r249_dependencyProfile[r428_currentGlyph.name] = r249_getDependencyProfile(r428_currentGlyph);
            return r428_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.29', r249_xn$donothing$2Lrc0b)));
        r249_alias('dentalclick', 448, 'bar');
        r249_dual('alveolarlateralclick', 449, 'bar', r249_WIDTH * 0.35);
        r249_alias('alveolarclick', 451, 'exclam');
        return function _r366_t10() {
            var _r433_t0 = this;
            var r433_currentGlyph = _r433_t0;
            if (!r433_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.30')
                r249_glyphList.pop();
            r249_includeGlyphPart(r433_currentGlyph, r249_glyphs, 'bar', r249_AS_BASE);
            r433_currentGlyph.include(r249_HBarBottom(r249_SB, r249_RIGHTSB, r249_symbolMid + r249_XH * 0.1, r249_OPERATORSTROKE));
            r433_currentGlyph.include(r249_HBarTop(r249_SB, r249_RIGHTSB, r249_symbolMid - r249_XH * 0.1, r249_OPERATORSTROKE));
            r249_xn$save$2Lrc5.call(r433_currentGlyph, 'palatoalveolarclick', 450);
            r249_dependencyProfile[r433_currentGlyph.name] = r249_getDependencyProfile(r433_currentGlyph);
            return r433_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.30', r249_xn$donothing$2Lrc0b));
    }());
    (function () {
        (function _r439_t0() {
            var _r441_t0 = this;
            var r441_currentGlyph = _r441_t0;
            if (!r441_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.31')
                r249_glyphList.pop();
            r441_currentGlyph['set-width'](r249_WIDTH);
            var r441_fine = r249_adviceBlackness(3);
            var r441_p = 0.875;
            var r441_l = 0.05;
            var r441_pr = r1_linreg(500, 0.82, 700, 0.85, r249_WIDTH);
            var r441_r = 1.1;
            r441_currentGlyph.include(r249_dispiro(r249_widths.rhs(r441_fine), r249_flat(r249_RIGHTSB - r249_O, r249_CAPMIDDLE, r249_heading(r249_DOWNWARD)), r249_curl(r249_RIGHTSB - r249_O, r249_SMOOTHA), r249_arcvh(), r249_g4(r249_MIDDLE + r249_CORRECTION_OMIDX * r441_fine, r249_O), r249_archv(), r249_g4(r249_SB + r249_O, r249_SMOOTHB), r249_alsothru(0.5, 0.5, r249_widths.center(r441_fine)), r249_g4(r1_mix(r249_SB, r249_RIGHTSB, r441_p), r249_CAP - r249_SMOOTHB * r441_pr, r249_widths.lhs(r441_fine)), r249_arcvh(), r249_g4(r1_mix(r249_SB, r249_RIGHTSB, r1_mix(r441_p, r441_l, 0.5)) - r249_CORRECTION_OMIDX * r441_fine, r249_CAP - r249_O), r249_archv(), r249_g4(r1_mix(r249_SB, r249_RIGHTSB, r441_l), r249_CAP - r249_SMOOTHA * r441_pr), r249_alsothru(0.5, 0.5, r249_widths.center(r441_fine)), r249_g4.down.end(r1_mix(r249_SB, r249_RIGHTSB, r441_r), 0, r249_widths.heading(0, r441_fine, r249_DOWNWARD))));
            r249_xn$save$2Lrc5.call(r441_currentGlyph, 'ampersand', '&');
            r249_dependencyProfile[r441_currentGlyph.name] = r249_getDependencyProfile(r441_currentGlyph);
            return r441_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.31', r249_xn$donothing$2Lrc0b)));
        (function _r439_t1() {
            var _r446_t0 = this;
            var r446_currentGlyph = _r446_t0;
            if (!r446_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.32')
                r249_glyphList.pop();
            r446_currentGlyph['set-width'](r249_WIDTH);
            var r446_top = r1_mix(r249_operTop, r249_parenTop, 0.4);
            var r446_bot = r1_mix(r249_operBot, r249_parenBot, 0.4);
            var r446_otop = r1_mix(r446_bot, r446_top, 0.75);
            var r446_obot = r1_mix(r446_top, r446_bot, 0.8);
            var r446_sw = r249_adviceBlackness(3.5);
            var r446_m1 = r1_mix(r249_SB + r446_sw, r249_RIGHTSB - r446_sw, 0.47) - r446_sw / 2;
            var r446_m2 = r1_mix(r446_m1, r249_RIGHTSB, 0.52) + r249_TANSLANT * r446_sw;
            var r446_sma = r249_SMOOTHA * ((r249_RIGHTSB - r446_m1) / (r249_RIGHTSB - r249_SB) * 1.1);
            var r446_smb = r249_SMOOTHB * ((r249_RIGHTSB - r446_m1) / (r249_RIGHTSB - r249_SB) * 1.1);
            r446_currentGlyph.include(r249_dispiro(r249_widths.lhs(r446_sw), r249_flat(r249_RIGHTSB, r446_otop - r249_O, r249_heading(r249_LEFTWARD)), r249_curl(r446_m2, r446_otop - r249_O), r249_archv(), r249_flat(r446_m1, r446_otop - r446_sma), r249_curl(r446_m1, r446_obot + r446_smb), r249_arcvh(), r249_g4(r446_m2, r446_obot + r249_O), r249_archv(), r249_flat(r249_RIGHTSB, r446_obot + r446_sma), r249_curl(r249_RIGHTSB, r446_top - r249_SMOOTHB), r249_arcvh(), r249_g4(r249_MIDDLE - r249_CORRECTION_OMIDS, r446_top - r249_O, r249_widths(r249_STROKE, 0)), r249_archv(), r249_flat(r249_SB, r446_top - r249_SMOOTHA, r249_widths(r446_sw, 0)), r249_curl(r249_SB, r446_bot + r249_SMOOTHB), r249_arcvh(), r249_flat(r249_MIDDLE + r249_CORRECTION_OMIDS, r446_bot + r249_O, r249_widths(r249_STROKE, 0)), r249_curl(r249_RIGHTSB - r249_HALFSTROKE + r249_TANSLANT * r446_sw, r446_bot + r249_O)));
            r249_xn$save$2Lrc5.call(r446_currentGlyph, 'at.threefold');
            r249_dependencyProfile[r446_currentGlyph.name] = r249_getDependencyProfile(r446_currentGlyph);
            return r446_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.32', r249_xn$donothing$2Lrc0b)));
        (function _r439_t2() {
            var _r451_t0 = this;
            var r451_currentGlyph = _r451_t0;
            if (!r451_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.33')
                r249_glyphList.pop();
            var r451_div = r249_para.diversityM;
            r451_currentGlyph['set-width'](r249_WIDTH * r451_div);
            var r451_top = r1_mix(r249_operTop, r249_parenTop, 0.4);
            var r451_bot = r1_mix(r249_operBot, r249_parenBot, 0.4);
            var r451_otop = r1_mix(r451_bot, r451_top, 0.75);
            var r451_obot = r1_mix(r451_top, r451_bot, 0.8);
            var r451_sw = r249_adviceBlackness(4, r451_div);
            var r451_swh = r249_adviceBlackness(3.75, r451_div);
            var r451_left = r249_SB * r451_div - r451_sw * r249_HVCONTRAST / 3;
            var r451_right = r249_WIDTH * r451_div - r249_SB * r451_div + r451_sw * r249_HVCONTRAST / 3;
            var r451_middle = r249_MIDDLE * r451_div;
            var r451_m1 = r1_mix(r451_left + r451_sw / 2, r451_right - r451_sw / 2, 1 / 3) - r451_sw * r249_HVCONTRAST / 2;
            var r451_m2 = r1_mix(r451_left + r451_sw / 2, r451_right - r451_sw / 2, 2 / 3) + r451_sw * r249_HVCONTRAST / 2;
            var r451_sma = r249_SMOOTHA * ((r451_m2 - r451_m1) / (r249_WIDTH - r249_SB * 2) * 1.1);
            var r451_smb = r249_SMOOTHB * ((r451_m2 - r451_m1) / (r249_WIDTH - r249_SB * 2) * 1.1);
            r451_currentGlyph.include(r249_dispiro(r249_widths.lhs(r451_sw), r249_flat(r451_m2, r451_obot - r249_O, r249_heading(r249_UPWARD)), r249_curl(r451_m2, r451_otop - r451_smb), r249_arcvh(), r249_g4(r451_middle - r249_CORRECTION_OMIDX * r451_sw, r451_otop - r249_O), r249_archv(), r249_flat(r451_m1, r451_otop - r451_sma), r249_curl(r451_m1, r451_obot + r451_smb), r249_arcvh(), r249_flat(r451_middle, r451_obot), r249_curl(r451_right - (r451_m2 - r451_m1) / 2, r451_obot), r249_archv(), r249_flat(r451_right, r451_obot + r451_sma), r249_curl(r451_right, r451_top - r249_SMOOTHB * r451_div), r249_arcvh(), r249_g4(r451_middle - r249_CORRECTION_OMIDS, r451_top - r249_O, r249_widths(r451_swh, 0)), r249_archv(), r249_flat(r451_left, r451_top - r249_SMOOTHA * r451_div, r249_widths(r451_sw, 0)), r249_curl(r451_left, r451_bot + r249_SMOOTHB * r451_div), r249_arcvh(), r249_flat(r451_middle + r249_CORRECTION_OMIDS, r451_bot + r249_O, r249_widths(r451_swh, 0)), r249_curl(r451_right - r249_HALFSTROKE + r249_TANSLANT * r451_sw, r451_bot + r249_O)));
            r249_xn$save$2Lrc5.call(r451_currentGlyph, 'at.fourfold');
            r249_dependencyProfile[r451_currentGlyph.name] = r249_getDependencyProfile(r451_currentGlyph);
            return r451_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.33', r249_xn$donothing$2Lrc0b)));
        (function _r439_t3() {
            var _r456_t0 = this;
            var r456_currentGlyph = _r456_t0;
            if (!r456_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.34')
                r249_glyphList.pop();
            r456_currentGlyph['set-width'](r249_WIDTH);
            var r456_top = r249_operTop;
            var r456_obot = r249_operBot;
            var r456_otop = r1_mix(r456_obot, r456_top, 0.675);
            var r456_sw = r249_adviceBlackness(3.5);
            var r456_m1 = r1_mix(r249_SB + r456_sw, r249_RIGHTSB - r456_sw, 0.53) + r456_sw / 2;
            var r456_m2 = r1_mix(r249_SB, r456_m1, 0.5) + r249_TANSLANT * r456_sw;
            var r456_sma = r249_SMOOTHA * ((r456_m1 - r249_SB) / (r249_RIGHTSB - r249_SB) * 1.1);
            var r456_smb = r249_SMOOTHB * ((r456_m1 - r249_SB) / (r249_RIGHTSB - r249_SB) * 1.1);
            var r456_atTurnBot = r456_obot - r456_sma / 4;
            var r456_shrink = 0.6;
            r456_currentGlyph.include(r249_dispiro(r249_straight.up.start(r456_m1 - r456_sw * (1 - r456_shrink) * r249_HVCONTRAST, r456_otop - r456_smb, r249_widths.heading(r456_sw * r456_shrink, 0, r249_UPWARD)), r249_arcvh(), r249_g4(r456_m2 - r456_sw * r249_TANSLANT, r456_otop - r249_O, r249_widths.heading(r456_sw, 0, r249_LEFTWARD)), r249_archv(), r249_flat(r249_SB, r456_otop - r456_sma), r249_curl(r249_SB, r456_obot + r456_smb), r249_arcvh(), r249_g4(r456_m2 - r456_sw * r249_TANSLANT, r456_obot + r249_O, r249_heading(r249_RIGHTWARD)), r249_archv(), r249_straight.up.end(r456_m1 - r456_sw * (1 - r456_shrink) * r249_HVCONTRAST, r456_obot + r456_sma, r249_widths.heading(r456_sw * r456_shrink, 0, r249_UPWARD))));
            r456_currentGlyph.include(r249_dispiro(r249_widths.lhs(r456_sw), r249_corner(r456_m1, r456_atTurnBot + r456_sma, r249_heading(r249_UPWARD)), r249_corner(r456_m1, r456_otop - r456_smb, r249_heading(r249_UPWARD)), r249_corner(r456_m1, r456_otop, r249_widths.heading(r456_sw * r456_shrink, 0, r249_UPWARD))));
            r456_currentGlyph.include(r249_dispiro(r249_widths.lhs(r456_sw * r456_shrink), r249_straight.down.start(r456_m1 - r456_sw * r456_shrink * r249_HVCONTRAST, r456_atTurnBot + r456_sma, r249_heading(r249_DOWNWARD)), r249_arcvh(), r249_g4(r1_mix(r456_m1 - r456_sw * r249_HVCONTRAST, r249_RIGHTSB, 0.5) + r249_CORRECTION_OMIDX * r456_sw, r456_atTurnBot + r249_O, r249_widths.lhs(r456_sw)), r249_archv(), r249_flat(r249_RIGHTSB, r456_atTurnBot + r456_sma), r249_curl(r249_RIGHTSB, r456_top - r249_SMOOTHB), r249_hookend(r456_top - r249_O), r249_g4(r249_SB, r456_top - r249_HOOK)));
            r249_xn$save$2Lrc5.call(r456_currentGlyph, 'at.short');
            r249_dependencyProfile[r456_currentGlyph.name] = r249_getDependencyProfile(r456_currentGlyph);
            return r456_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.34', r249_xn$donothing$2Lrc0b)));
        r249_xn$selectvariant$7Hrq('at', '@');
        (function _r439_t4() {
            var _r463_t0 = this;
            var r463_currentGlyph = _r463_t0;
            if (!r463_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.35')
                r249_glyphList.pop();
            r463_currentGlyph['set-width'](r249_WIDTH);
            var r463_sw = r249_adviceBlackness(3.6);
            r463_currentGlyph.include(r249_dispiro(r249_widths.center(r463_sw), r249_straight.left.start(r249_MIDDLE - r463_sw / 4, r249_CAP - r463_sw / 2, r249_heading(r249_LEFTWARD)), r249_archv(), r249_g4.down.mid(r249_SB + r463_sw / 2, r1_mix(r249_CAP * 0.5, r249_CAP - r463_sw / 2, 0.5), r249_heading(r249_DOWNWARD)), r249_arcvh(), r249_straight.right.end(r249_MIDDLE - r463_sw / 4, r249_CAP * 0.5, r249_heading(r249_RIGHTWARD))));
            (function _r463_t2() {
                var _r467_t0 = this;
                var r467_currentGlyph = _r467_t0;
                if (!r467_currentGlyph)
                    return void 0;
                if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.36')
                    r249_glyphList.pop();
                r467_currentGlyph.include(r249_VBar(r249_MIDDLE + r463_sw / 4, 0, r249_CAP, r463_sw));
                r467_currentGlyph.include(r249_VBar(r249_RIGHTSB - r463_sw / 2, 0, r249_CAP, r463_sw));
                r249_xn$save$2Lrc5.call(r467_currentGlyph, 'paragraph.high');
                r249_dependencyProfile[r467_currentGlyph.name] = r249_getDependencyProfile(r467_currentGlyph);
                return r467_currentGlyph;
            }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.36', function _r463_t3() {
                var _r471_t0 = this;
                _r471_t0.include(r463_currentGlyph, true);
                return _r471_t0.advanceWidth = r463_currentGlyph.advanceWidth;
            })));
            (function _r463_t4() {
                var _r473_t0 = this;
                var r473_currentGlyph = _r473_t0;
                if (!r473_currentGlyph)
                    return void 0;
                if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.37')
                    r249_glyphList.pop();
                r473_currentGlyph.include(r249_VBar(r249_MIDDLE + r463_sw / 4, r249_DESCENDER, r249_CAP, r463_sw));
                r473_currentGlyph.include(r249_VBar(r249_RIGHTSB - r463_sw / 2, r249_DESCENDER, r249_CAP, r463_sw));
                r249_xn$save$2Lrc5.call(r473_currentGlyph, 'paragraph.low');
                r249_dependencyProfile[r473_currentGlyph.name] = r249_getDependencyProfile(r473_currentGlyph);
                return r473_currentGlyph;
            }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.37', function _r463_t5() {
                var _r477_t0 = this;
                _r477_t0.include(r463_currentGlyph, true);
                return _r477_t0.advanceWidth = r463_currentGlyph.advanceWidth;
            })));
            r249_dependencyProfile[r463_currentGlyph.name] = r249_getDependencyProfile(r463_currentGlyph);
            return r463_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.35', r249_xn$donothing$2Lrc0b)));
        r249_xn$selectvariant$7Hrq('paragraph', 182);
        (function _r439_t5() {
            var _r479_t0 = this;
            var r479_currentGlyph = _r479_t0;
            if (!r479_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.38')
                r249_glyphList.pop();
            (function _r479_t2() {
                var _r481_t0 = this;
                var r481_currentGlyph = _r481_t0;
                if (!r481_currentGlyph)
                    return void 0;
                if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.39')
                    r249_glyphList.pop();
                r249_includeGlyphPart(r481_currentGlyph, r249_glyphs, 'paragraph.high', r249_AS_BASE);
                r481_currentGlyph.include(r249_FlipAround(r249_MIDDLE, r249_CAP / 2, -1, 1));
                r249_xn$save$2Lrc5.call(r481_currentGlyph, 'revertParagraph.high');
                r249_dependencyProfile[r481_currentGlyph.name] = r249_getDependencyProfile(r481_currentGlyph);
                return r481_currentGlyph;
            }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.39', function _r479_t3() {
                var _r485_t0 = this;
                _r485_t0.include(r479_currentGlyph, true);
                return _r485_t0.advanceWidth = r479_currentGlyph.advanceWidth;
            })));
            (function _r479_t4() {
                var _r487_t0 = this;
                var r487_currentGlyph = _r487_t0;
                if (!r487_currentGlyph)
                    return void 0;
                if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.40')
                    r249_glyphList.pop();
                r249_includeGlyphPart(r487_currentGlyph, r249_glyphs, 'paragraph.low', r249_AS_BASE);
                r487_currentGlyph.include(r249_FlipAround(r249_MIDDLE, r249_CAP / 2, -1, 1));
                r249_xn$save$2Lrc5.call(r487_currentGlyph, 'revertParagraph.low');
                r249_dependencyProfile[r487_currentGlyph.name] = r249_getDependencyProfile(r487_currentGlyph);
                return r487_currentGlyph;
            }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.40', function _r479_t5() {
                var _r491_t0 = this;
                _r491_t0.include(r479_currentGlyph, true);
                return _r491_t0.advanceWidth = r479_currentGlyph.advanceWidth;
            })));
            r249_dependencyProfile[r479_currentGlyph.name] = r249_getDependencyProfile(r479_currentGlyph);
            return r479_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.38', r249_xn$donothing$2Lrc0b)));
        r249_xn$selectvariant$7Hrq('revertParagraph', 8267);
        return function _r439_t6() {
            var _r493_t0 = this;
            var r493_currentGlyph = _r493_t0;
            if (!r493_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.41')
                r249_glyphList.pop();
            var r493_top = r249_parenTop;
            var r493_bot = r249_parenBot;
            var r493_sma = r249_SMOOTHA;
            var r493_s = r249_dispiro(r249_widths.lhs(), r249_g4(r249_RIGHTSB, r493_top - r249_HOOK), r249_hookstart(r493_top), r249_g4(r249_SB, r493_top - r493_sma), r249_alsothru(0.5, 0.5, r249_widths(r249_HALFSTROKE, r249_HALFSTROKE)), r249_g4(r249_RIGHTSB, r1_mix(r493_bot, r493_top, 0.501), r249_widths(0, r249_STROKE)), r249_g4(r249_RIGHTSB, r1_mix(r493_bot, r493_top, 0.5), r249_widths(0, r249_STROKE)), r249_g4(r1_mix(r249_SB, r249_RIGHTSB, 0.6), r1_mix(r493_bot, r493_top, r1_linreg(18, 0.325, 108, 0.3, r249_STROKE) * (1 - r249_TANSLANT * 0.1))));
            r493_currentGlyph.include(r493_s);
            r493_currentGlyph.include(r249_FlipAround(r249_MIDDLE, r249_symbolMid));
            r493_currentGlyph.include(r493_s);
            r249_xn$save$2Lrc5.call(r493_currentGlyph, 'section', 167);
            r249_dependencyProfile[r493_currentGlyph.name] = r249_getDependencyProfile(r493_currentGlyph);
            return r493_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.41', r249_xn$donothing$2Lrc0b));
    }());
    (function () {
        var r499_sides, r499_size, r499_stroke, r499_name, r499_high, r499_low, _r499_t3;
        var r499_asteriskCenterY = r249_parenTop - r249_LONGJUT * 1.5;
        var r499_asteriskKinds = [
            [
                5,
                1.2,
                r249_STROKE,
                'asterisk',
                'high',
                'low'
            ],
            [
                5,
                0.85,
                r249_STROKE,
                'smallasterisk',
                'high',
                'low'
            ],
            [
                5,
                1,
                r249_GEOMETRYSTROKE,
                'opAsterisk',
                'high',
                'low'
            ],
            [
                6,
                1.2,
                r249_STROKE,
                'asterisk',
                'hexhigh',
                'hexlow'
            ]
        ];
        var _r499_t0 = r499_asteriskKinds;
        var _r499_t1 = _r499_t0.length;
        var _r499_t2 = 0;
        for (; _r499_t2 < _r499_t1; _r499_t2 = _r499_t2 + 1) {
            _r499_t3 = _r499_t0[_r499_t2];
            r499_sides = _r499_t3[0];
            r499_size = _r499_t3[1];
            r499_stroke = _r499_t3[2];
            r499_name = _r499_t3[3];
            r499_high = _r499_t3[4];
            r499_low = _r499_t3[5];
            (function _r499_t4() {
                var r503_s, r503_c;
                var _r503_t2 = this;
                var r503_currentGlyph = _r503_t2;
                if (!r503_currentGlyph)
                    return void 0;
                if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.42')
                    r249_glyphList.pop();
                var r503_radius = r249_LONGJUT * r499_size;
                var r503_fine = r499_stroke * 0.4;
                var r503_final = 0.5 * Math.min(r499_stroke, r503_radius * Math.PI / r499_sides);
                var _r503_t0 = 0;
                var _r503_t1 = r499_sides;
                var r503_j = _r503_t0;
                for (; r503_j < _r503_t1; r503_j = r503_j + 1) {
                    r503_s = Math.sin(r503_j / r499_sides * Math.PI * 2);
                    r503_c = Math.cos(r503_j / r499_sides * Math.PI * 2);
                    r503_currentGlyph.include(r249_dispiro(r249_flat(r249_MIDDLE, r499_asteriskCenterY, r249_widths(r503_fine, r503_fine)), r249_curl(r249_MIDDLE + r503_radius * r503_s, r499_asteriskCenterY + r503_radius * r503_c, r249_widths(r503_final, r503_final))));
                }
                r249_xn$save$2Lrc5.call(r503_currentGlyph, r499_name + '.' + r499_high);
                r249_dependencyProfile[r503_currentGlyph.name] = r249_getDependencyProfile(r503_currentGlyph);
                return r503_currentGlyph;
            }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.42', r249_xn$donothing$2Lrc0b)));
            r249_composite(r499_name + '.' + r499_low, r249_glyphs[r499_name + '.' + r499_high], r249_Upright(), r249_Translate(0, r249_symbolMid - r499_asteriskCenterY), r249_markset.plus, r249_Italify());
        }
        r249_xn$selectvariant$7Hrq('asterisk', '*');
        return r249_xn$selectvariant$7Hrq('asterisk', void 0, new r249_xn$NamedParameterPair$2Lrc9b('to-name', 'asterisk.dfltlow'), new r249_xn$NamedParameterPair$2Lrc9b('transform', {
            'high': 'low',
            'hexhigh': 'hexlow'
        }));
    }());
    (function () {
        var r510_slashDefautLeft = r249_SB + r249_HALFSTROKE;
        var r510_slashDefaultRight = r249_RIGHTSB - r249_HALFSTROKE;
        var r510_SlashShape = function _r510_t0(r511_l, r511_r, r511__t, r511__b, r511__w) {
            return function _r511_t2() {
                var _r513_t0 = this;
                var r513_currentGlyph = _r513_t0;
                var r513_w = r1_fallback(r511__w, r249_STROKE);
                var r513_t = r1_fallback(r511__t, r249_parenTop);
                var r513_b = r1_fallback(r511__b, r249_parenBot);
                var r513_cor = 1 / 2 * r249_HVCONTRAST / Math.sqrt(1 - Math.pow((r511_r - r511_l - r249_STROKE) / (r513_t - r513_b), 2));
                r513_currentGlyph['start-from'](r511_l - r513_w * r513_cor, r513_b);
                r513_currentGlyph['line-to'](r511_l + r513_w * r513_cor, r513_b);
                r513_currentGlyph['line-to'](r511_r + r513_w * r513_cor, r513_t);
                r513_currentGlyph['line-to'](r511_r - r513_w * r513_cor, r513_t);
                r513_currentGlyph['reverse-last']();
                return void 0;
            };
        };
        (function () {
            var r520_nsTop = r1_mix(r249_symbolMid, r249_parenTop, 0.85);
            var r520_nsBot = r1_mix(r249_symbolMid, r249_parenBot, 0.85);
            var r520_fine = r249_adviceBlackness(3.5);
            var r520_l = r249_SB - r520_fine / 2;
            var r520_r = r249_RIGHTSB + r520_fine / 2;
            var r520_hsp = (r520_r - r520_l - r520_fine * 2 * r249_HVCONTRAST) * 0.3;
            (function _r520_t0() {
                var _r522_t0 = this;
                var r522_currentGlyph = _r522_t0;
                if (!r522_currentGlyph)
                    return void 0;
                if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.43')
                    r249_glyphList.pop();
                r522_currentGlyph.include(r249_HBar(r520_l, r520_r, r1_mix(r520_nsTop, r520_nsBot, 0.3)));
                r522_currentGlyph.include(r249_HBar(r520_l, r520_r, r1_mix(r520_nsTop, r520_nsBot, 0.7)));
                r522_currentGlyph.include(r249_VBarLeft(r520_l + r520_hsp, r520_nsBot, r520_nsTop, r520_fine));
                r522_currentGlyph.include(r249_VBarRight(r520_r - r520_hsp, r520_nsBot, r520_nsTop, r520_fine));
                r249_xn$save$2Lrc5.call(r522_currentGlyph, 'numbersign.upright');
                r249_dependencyProfile[r522_currentGlyph.name] = r249_getDependencyProfile(r522_currentGlyph);
                return r522_currentGlyph;
            }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.43', r249_xn$donothing$2Lrc0b)));
            (function _r520_t1() {
                var _r529_t0 = this;
                var r529_currentGlyph = _r529_t0;
                if (!r529_currentGlyph)
                    return void 0;
                if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.44')
                    r249_glyphList.pop();
                var r529_x = r520_hsp + r520_fine / 2 * r249_HVCONTRAST;
                var r529_w = (r520_r - r520_l) * 0.15;
                var r529_shift = r529_w / 3;
                r529_currentGlyph.include(r249_HBar(r520_l + r529_shift, r520_r + r529_shift, r1_mix(r520_nsTop, r520_nsBot, 0.3)));
                r529_currentGlyph.include(r249_HBar(r520_l - r529_shift, r520_r - r529_shift, r1_mix(r520_nsTop, r520_nsBot, 0.7)));
                r529_currentGlyph.include(r510_SlashShape(r520_l + r529_x - r529_w, r520_l + r529_x + r529_w, r520_nsTop, r520_nsBot, r520_fine));
                r529_currentGlyph.include(r510_SlashShape(r520_r - r529_x - r529_w, r520_r - r529_x + r529_w, r520_nsTop, r520_nsBot, r520_fine));
                r249_xn$save$2Lrc5.call(r529_currentGlyph, 'numbersign.slanted');
                r249_dependencyProfile[r529_currentGlyph.name] = r249_getDependencyProfile(r529_currentGlyph);
                return r529_currentGlyph;
            }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.44', r249_xn$donothing$2Lrc0b)));
            return r249_xn$selectvariant$7Hrq('numbersign', '#');
        }());
        (function _r510_t3() {
            var _r536_t0 = this;
            var r536_currentGlyph = _r536_t0;
            if (!r536_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.45')
                r249_glyphList.pop();
            r536_currentGlyph.include(r510_SlashShape(r510_slashDefautLeft, r510_slashDefaultRight));
            r249_xn$save$2Lrc5.call(r536_currentGlyph, 'slash', '/');
            r249_xn$save$2Lrc5.call(r536_currentGlyph, 'solidus', 8260);
            r249_dependencyProfile[r536_currentGlyph.name] = r249_getDependencyProfile(r536_currentGlyph);
            return r536_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.45', r249_xn$donothing$2Lrc0b)));
        (function _r510_t4() {
            var _r541_t0 = this;
            var r541_currentGlyph = _r541_t0;
            if (!r541_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.46')
                r249_glyphList.pop();
            r541_currentGlyph.include(r510_SlashShape(r510_slashDefautLeft, r249_WIDTH));
            r249_xn$save$2Lrc5.call(r541_currentGlyph, 'slash.left');
            r249_dependencyProfile[r541_currentGlyph.name] = r249_getDependencyProfile(r541_currentGlyph);
            return r541_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.46', r249_xn$donothing$2Lrc0b)));
        (function _r510_t5() {
            var _r545_t0 = this;
            var r545_currentGlyph = _r545_t0;
            if (!r545_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.47')
                r249_glyphList.pop();
            r545_currentGlyph.include(r510_SlashShape(0, r510_slashDefaultRight));
            r249_xn$save$2Lrc5.call(r545_currentGlyph, 'slash.right');
            r249_dependencyProfile[r545_currentGlyph.name] = r249_getDependencyProfile(r545_currentGlyph);
            return r545_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.47', r249_xn$donothing$2Lrc0b)));
        var r510_BackslashShape = function _r510_t6(r548_l, r548_r) {
            return function _r548_t2() {
                var _r550_t0 = this;
                var r550_currentGlyph = _r550_t0;
                var r550_cor = 1 / 2 * r249_HVCONTRAST / Math.sqrt(1 - Math.pow((r548_r - r548_l - r249_STROKE) / (r249_parenTop - r249_parenBot), 2));
                r550_currentGlyph['start-from'](r548_l - r249_STROKE * r550_cor, r249_parenTop);
                r550_currentGlyph['line-to'](r548_l + r249_STROKE * r550_cor, r249_parenTop);
                r550_currentGlyph['line-to'](r548_r + r249_STROKE * r550_cor, r249_parenBot);
                r550_currentGlyph['line-to'](r548_r - r249_STROKE * r550_cor, r249_parenBot);
                return void 0;
            };
        };
        var r510_backslashWidth = (r510_slashDefaultRight - r510_slashDefautLeft) * (1 + r249_TANSLANT * 2);
        (function _r510_t7() {
            var _r556_t0 = this;
            var r556_currentGlyph = _r556_t0;
            if (!r556_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.48')
                r249_glyphList.pop();
            r556_currentGlyph.include(r510_BackslashShape(r249_MIDDLE - r510_backslashWidth / 2, r249_MIDDLE + r510_backslashWidth / 2));
            r249_xn$save$2Lrc5.call(r556_currentGlyph, 'backslash', '\\');
            r249_dependencyProfile[r556_currentGlyph.name] = r249_getDependencyProfile(r556_currentGlyph);
            return r556_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.48', r249_xn$donothing$2Lrc0b)));
        (function _r510_t8() {
            var _r560_t0 = this;
            var r560_currentGlyph = _r560_t0;
            if (!r560_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.49')
                r249_glyphList.pop();
            r560_currentGlyph.include(r510_BackslashShape(r249_MIDDLE - r510_backslashWidth / 2, r249_WIDTH));
            r249_xn$save$2Lrc5.call(r560_currentGlyph, 'backslash.left');
            r249_dependencyProfile[r560_currentGlyph.name] = r249_getDependencyProfile(r560_currentGlyph);
            return r560_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.49', r249_xn$donothing$2Lrc0b)));
        return function _r510_t9() {
            var _r564_t0 = this;
            var r564_currentGlyph = _r564_t0;
            if (!r564_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.50')
                r249_glyphList.pop();
            r564_currentGlyph.include(r510_BackslashShape(0, r249_MIDDLE + r510_backslashWidth / 2));
            r249_xn$save$2Lrc5.call(r564_currentGlyph, 'backslash.right');
            r249_dependencyProfile[r564_currentGlyph.name] = r249_getDependencyProfile(r564_currentGlyph);
            return r564_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.50', r249_xn$donothing$2Lrc0b));
    }());
    (function () {
        (function _r568_t0() {
            var _r570_t0 = this;
            var r570_currentGlyph = _r570_t0;
            if (!r570_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.51')
                r249_glyphList.pop();
            r570_currentGlyph['set-width'](r249_WIDTH);
            r570_currentGlyph.include(r249_HBarBottom(r249_SB, r249_RIGHTSB, 0));
            r249_xn$save$2Lrc5.call(r570_currentGlyph, 'underscore.high');
            r249_dependencyProfile[r570_currentGlyph.name] = r249_getDependencyProfile(r570_currentGlyph);
            return r570_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.51', r249_xn$donothing$2Lrc0b)));
        (function _r568_t1() {
            var _r575_t0 = this;
            var r575_currentGlyph = _r575_t0;
            if (!r575_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.52')
                r249_glyphList.pop();
            r575_currentGlyph['set-width'](r249_WIDTH);
            r575_currentGlyph.include(r249_HBarTop(r249_SB, r249_RIGHTSB, 0));
            r249_xn$save$2Lrc5.call(r575_currentGlyph, 'underscore.belowBaseline');
            r249_dependencyProfile[r575_currentGlyph.name] = r249_getDependencyProfile(r575_currentGlyph);
            return r575_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.52', r249_xn$donothing$2Lrc0b)));
        r249_composite('underscore.low', r249_glyphs['underscore.high'], r249_Upright(), r249_Translate(0, r249_DESCENDER * 0.9), r249_Italify());
        r249_xn$selectvariant$7Hrq('underscore', '_');
        (function _r568_t2() {
            var _r580_t0 = this;
            var r580_currentGlyph = _r580_t0;
            if (!r580_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.53')
                r249_glyphList.pop();
            r580_currentGlyph.include(r249_HBarTop(r249_SB, r249_RIGHTSB, r249_CAP));
            r249_xn$save$2Lrc5.call(r580_currentGlyph, 'overline', 8254);
            r249_dependencyProfile[r580_currentGlyph.name] = r249_getDependencyProfile(r580_currentGlyph);
            return r580_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.53', r249_xn$donothing$2Lrc0b)));
        (function _r568_t3() {
            var _r584_t0 = this;
            var r584_currentGlyph = _r584_t0;
            if (!r584_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.54')
                r249_glyphList.pop();
            r584_currentGlyph['set-width'](r249_WIDTH);
            r584_currentGlyph.include(r249_HBar(r249_SB, r249_RIGHTSB, r249_symbolMid));
            r249_xn$save$2Lrc5.call(r584_currentGlyph, 'hyphen', '-');
            r249_dependencyProfile[r584_currentGlyph.name] = r249_getDependencyProfile(r584_currentGlyph);
            return r584_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.54', r249_xn$donothing$2Lrc0b)));
        (function _r568_t4() {
            var _r589_t0 = this;
            var r589_currentGlyph = _r589_t0;
            if (!r589_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.55')
                r249_glyphList.pop();
            r249_includeGlyphPart(r589_currentGlyph, r249_glyphs, 'hyphen', r249_AS_BASE);
            r249_xn$save$2Lrc5.call(r589_currentGlyph, 'softhyphen', 173);
            r249_dependencyProfile[r589_currentGlyph.name] = r249_getDependencyProfile(r589_currentGlyph);
            return r589_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.55', r249_xn$donothing$2Lrc0b)));
        r249_alias('gpHyphen', 8208, 'hyphen');
        r249_alias('nbHyphen', 8209, 'hyphen');
        r249_alias('figureDash', 8210, 'hyphen');
        (function _r568_t5() {
            var _r593_t0 = this;
            var r593_currentGlyph = _r593_t0;
            if (!r593_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.56')
                r249_glyphList.pop();
            r593_currentGlyph['set-width'](r249_WIDTH);
            r593_currentGlyph.include(r249_HBar(r1_mix(0, r249_SB, 0.5), r1_mix(r249_WIDTH, r249_RIGHTSB, 0.5), r249_symbolMid));
            r249_xn$save$2Lrc5.call(r593_currentGlyph, 'enDash', 8211);
            r249_dependencyProfile[r593_currentGlyph.name] = r249_getDependencyProfile(r593_currentGlyph);
            return r593_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.56', r249_xn$donothing$2Lrc0b)));
        (function _r568_t6() {
            var _r598_t0 = this;
            var r598_currentGlyph = _r598_t0;
            if (!r598_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.57')
                r249_glyphList.pop();
            r598_currentGlyph['set-width'](r249_FULLWIDTH);
            r598_currentGlyph.include(r249_HBar(0, r249_FULLWIDTH, r249_symbolMid));
            r249_xn$save$2Lrc5.call(r598_currentGlyph, 'emDash', 8212);
            r249_dependencyProfile[r598_currentGlyph.name] = r249_getDependencyProfile(r598_currentGlyph);
            return r598_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.57', r249_xn$donothing$2Lrc0b)));
        (function _r568_t7() {
            var _r603_t0 = this;
            var r603_currentGlyph = _r603_t0;
            if (!r603_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.58')
                r249_glyphList.pop();
            r603_currentGlyph['set-width'](r249_FULLWIDTH * 2);
            r603_currentGlyph.include(r249_HBar(0, r249_FULLWIDTH * 2, r249_symbolMid));
            r249_xn$save$2Lrc5.call(r603_currentGlyph, 'doubleEmDash');
            r249_dependencyProfile[r603_currentGlyph.name] = r249_getDependencyProfile(r603_currentGlyph);
            return r603_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.58', r249_xn$donothing$2Lrc0b)));
        return r249_alias('horizontalBar', 8213, 'emDash');
    }());
    (function () {
        (function _r608_t0() {
            var _r610_t0 = this;
            var r610_currentGlyph = _r610_t0;
            if (!r610_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.59')
                r249_glyphList.pop();
            r610_currentGlyph['set-width'](r249_FULLWIDTH3);
            r610_currentGlyph.include(r249_Ring(r249_symbolMid + r249_PERIODRADIUS - r249_O, r249_symbolMid - r249_PERIODRADIUS + r249_O, r249_FULLWIDTH3 / 2 - r249_PERIODRADIUS + r249_O, r249_FULLWIDTH3 / 2 + r249_PERIODRADIUS - r249_O, true));
            r249_xn$save$2Lrc5.call(r610_currentGlyph, 'period.center');
            r249_xn$save$2Lrc5.call(r610_currentGlyph, 'interpunct', 183);
            r249_xn$save$2Lrc5.call(r610_currentGlyph, 'greekbullet', 903);
            r249_xn$save$2Lrc5.call(r610_currentGlyph, 'bullet', 8226);
            r249_xn$save$2Lrc5.call(r610_currentGlyph, 'hyphenpoint', 8231);
            r249_dependencyProfile[r610_currentGlyph.name] = r249_getDependencyProfile(r610_currentGlyph);
            return r610_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.59', r249_xn$donothing$2Lrc0b)));
        return function _r608_t1() {
            var _r619_t0 = this;
            var r619_currentGlyph = _r619_t0;
            if (!r619_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.60')
                r249_glyphList.pop();
            r619_currentGlyph['set-width'](r249_FULLWIDTH);
            var r619_s = r249_adviceBlackness(5) * 0.75;
            r619_currentGlyph.include(r249_Ring(r249_symbolMid + r249_PERIODRADIUS - r249_O, r249_symbolMid - r249_PERIODRADIUS + r249_O, r249_FWMIDDLE - r249_PERIODRADIUS + r249_O, r249_FWMIDDLE + r249_PERIODRADIUS - r249_O, true));
            r619_currentGlyph.include(r249_Ring(r249_symbolMid + r249_PERIODRADIUS - r249_O - r619_s, r249_symbolMid - r249_PERIODRADIUS + r249_O + r619_s, r249_FWMIDDLE - r249_PERIODRADIUS + r249_O + r619_s, r249_FWMIDDLE + r249_PERIODRADIUS - r249_O - r619_s, true));
            r619_currentGlyph['reverse-last']();
            r249_xn$save$2Lrc5.call(r619_currentGlyph, 'whitebullet', 9702);
            r249_dependencyProfile[r619_currentGlyph.name] = r249_getDependencyProfile(r619_currentGlyph);
            return r619_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.60', r249_xn$donothing$2Lrc0b));
    }());
    (function () {
        var r626_quoteTop = r249_CAP * 1.05;
        var r626_quoteBottom = r249_XH * 0.85;
        (function _r626_t0() {
            var _r628_t0 = this;
            var r628_currentGlyph = _r628_t0;
            if (!r628_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.61')
                r249_glyphList.pop();
            r628_currentGlyph['set-width'](r249_WIDTH);
            r628_currentGlyph.include(r249_dispiro(r249_widths.center(r249_STROKE * 1.1), r249_g4.down.start(r249_MIDDLE, r626_quoteTop, r249_heading(r249_DOWNWARD)), r249_g4(r249_MIDDLE, r626_quoteBottom, r249_widths.heading(r249_HALFSTROKE * 0.95, r249_HALFSTROKE * 0.95, r249_DOWNWARD))));
            r249_xn$save$2Lrc5.call(r628_currentGlyph, 'singleQuote', 39);
            r249_dependencyProfile[r628_currentGlyph.name] = r249_getDependencyProfile(r628_currentGlyph);
            return r628_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.61', r249_xn$donothing$2Lrc0b)));
        (function _r626_t1() {
            var _r633_t0 = this;
            var r633_currentGlyph = _r633_t0;
            if (!r633_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.62')
                r249_glyphList.pop();
            r633_currentGlyph['set-width'](r249_WIDTH);
            var r633_dist = 0.2 * r249_WIDTH;
            r249_includeGlyphPart(r633_currentGlyph, r249_glyphs, 'singleQuote');
            r633_currentGlyph['apply-transform'](r249_Translate(-r633_dist * 2, 0));
            r249_includeGlyphPart(r633_currentGlyph, r249_glyphs, 'singleQuote');
            r633_currentGlyph['apply-transform'](r249_Translate(r633_dist, 0));
            r249_xn$save$2Lrc5.call(r633_currentGlyph, 'doubleQuote', 34);
            r249_dependencyProfile[r633_currentGlyph.name] = r249_getDependencyProfile(r633_currentGlyph);
            return r633_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.62', r249_xn$donothing$2Lrc0b)));
        var r626_yCurlyQuotes = r1_mix(r626_quoteBottom, r626_quoteTop, 0.5);
        var r626_commaLow = r249_DESCENDER * 0.9;
        var r626_ratio = Math.min(1, (r626_quoteTop - r626_quoteBottom) / (r249_PERIODSIZE - r626_commaLow));
        (function _r626_t2() {
            var _r641_t0 = this;
            var r641_currentGlyph = _r641_t0;
            if (!r641_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.63')
                r249_glyphList.pop();
            r249_includeGlyphPart(r641_currentGlyph, r249_glyphs, 'comma');
            r641_currentGlyph.include(r249_FlipAround(r249_MIDDLE, 0, r626_ratio, r626_ratio));
            r249_xn$save$2Lrc5.call(r641_currentGlyph, 'lowSingleQuote');
            r249_dependencyProfile[r641_currentGlyph.name] = r249_getDependencyProfile(r641_currentGlyph);
            return r641_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.63', r249_xn$donothing$2Lrc0b)));
        (function _r626_t3() {
            var _r646_t0 = this;
            var r646_currentGlyph = _r646_t0;
            if (!r646_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.64')
                r249_glyphList.pop();
            r249_includeGlyphPart(r646_currentGlyph, r249_glyphs, 'lowSingleQuote');
            r646_currentGlyph.include(r249_FlipAround(r249_MIDDLE, r1_mix(r1_mix(r249_PERIODSIZE, r626_commaLow, 0.5), r626_yCurlyQuotes, 0.5)));
            r249_xn$save$2Lrc5.call(r646_currentGlyph, 'openSingleQuote');
            r249_dependencyProfile[r646_currentGlyph.name] = r249_getDependencyProfile(r646_currentGlyph);
            return r646_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.64', r249_xn$donothing$2Lrc0b)));
        (function _r626_t4() {
            var _r651_t0 = this;
            var r651_currentGlyph = _r651_t0;
            if (!r651_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.65')
                r249_glyphList.pop();
            r249_includeGlyphPart(r651_currentGlyph, r249_glyphs, 'openSingleQuote');
            r651_currentGlyph.include(r249_FlipAround(r249_MIDDLE, r626_yCurlyQuotes));
            r249_xn$save$2Lrc5.call(r651_currentGlyph, 'closeSingleQuote');
            r249_dependencyProfile[r651_currentGlyph.name] = r249_getDependencyProfile(r651_currentGlyph);
            return r651_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.65', r249_xn$donothing$2Lrc0b)));
        (function _r626_t5() {
            var _r656_t0 = this;
            var r656_currentGlyph = _r656_t0;
            if (!r656_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.66')
                r249_glyphList.pop();
            r249_includeGlyphPart(r656_currentGlyph, r249_glyphs, 'invertComma');
            r656_currentGlyph.include(r249_FlipAround(r249_MIDDLE, 0, r626_ratio, r626_ratio));
            r656_currentGlyph.include(r249_FlipAround(r249_MIDDLE, r1_mix(r1_mix(r249_PERIODSIZE, r626_commaLow, 0.5), r626_yCurlyQuotes, 0.5)));
            r656_currentGlyph.include(r249_FlipAround(r249_MIDDLE, r626_yCurlyQuotes));
            r249_xn$save$2Lrc5.call(r656_currentGlyph, 'revertSingleQuote');
            r249_dependencyProfile[r656_currentGlyph.name] = r249_getDependencyProfile(r656_currentGlyph);
            return r656_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.66', r249_xn$donothing$2Lrc0b)));
        (function _r626_t6() {
            var _r663_t0 = this;
            var r663_currentGlyph = _r663_t0;
            if (!r663_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.67')
                r249_glyphList.pop();
            var r663_dist = r249_WIDTH * 0.225;
            r249_includeGlyphPart(r663_currentGlyph, r249_glyphs, 'lowSingleQuote');
            r663_currentGlyph['apply-transform'](r249_Translate(-r663_dist * 2, 0));
            r249_includeGlyphPart(r663_currentGlyph, r249_glyphs, 'lowSingleQuote');
            r663_currentGlyph['apply-transform'](r249_Translate(r663_dist, 0));
            r249_xn$save$2Lrc5.call(r663_currentGlyph, 'lowDoubleQuote');
            r249_dependencyProfile[r663_currentGlyph.name] = r249_getDependencyProfile(r663_currentGlyph);
            return r663_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.67', r249_xn$donothing$2Lrc0b)));
        (function _r626_t7() {
            var _r670_t0 = this;
            var r670_currentGlyph = _r670_t0;
            if (!r670_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.68')
                r249_glyphList.pop();
            r249_includeGlyphPart(r670_currentGlyph, r249_glyphs, 'lowDoubleQuote');
            r670_currentGlyph.include(r249_FlipAround(r249_MIDDLE, r1_mix(r1_mix(r249_PERIODSIZE, r626_commaLow, 0.5), r626_yCurlyQuotes, 0.5)));
            r249_xn$save$2Lrc5.call(r670_currentGlyph, 'openDoubleQuote');
            r249_dependencyProfile[r670_currentGlyph.name] = r249_getDependencyProfile(r670_currentGlyph);
            return r670_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.68', r249_xn$donothing$2Lrc0b)));
        (function _r626_t8() {
            var _r675_t0 = this;
            var r675_currentGlyph = _r675_t0;
            if (!r675_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.69')
                r249_glyphList.pop();
            r249_includeGlyphPart(r675_currentGlyph, r249_glyphs, 'openDoubleQuote');
            r675_currentGlyph.include(r249_FlipAround(r249_MIDDLE, r626_yCurlyQuotes));
            r249_xn$save$2Lrc5.call(r675_currentGlyph, 'closeDoubleQuote');
            r249_dependencyProfile[r675_currentGlyph.name] = r249_getDependencyProfile(r675_currentGlyph);
            return r675_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.69', r249_xn$donothing$2Lrc0b)));
        (function _r626_t9() {
            var _r680_t0 = this;
            var r680_currentGlyph = _r680_t0;
            if (!r680_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.70')
                r249_glyphList.pop();
            var r680_dist = r249_WIDTH * 0.225;
            r249_includeGlyphPart(r680_currentGlyph, r249_glyphs, 'revertSingleQuote');
            r680_currentGlyph['apply-transform'](r249_Translate(-r680_dist * 2, 0));
            r249_includeGlyphPart(r680_currentGlyph, r249_glyphs, 'revertSingleQuote');
            r680_currentGlyph['apply-transform'](r249_Translate(r680_dist, 0));
            r249_xn$save$2Lrc5.call(r680_currentGlyph, 'revertDoubleQuote');
            r249_dependencyProfile[r680_currentGlyph.name] = r249_getDependencyProfile(r680_currentGlyph);
            return r680_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.70', r249_xn$donothing$2Lrc0b)));
        r249_fwr(void 0, 8218, 'lowSingleQuote', 0, r249_FULLWIDTH3);
        r249_fwr(void 0, 8216, 'openSingleQuote', 0, r249_FULLWIDTH3);
        r249_fwl(void 0, 8217, 'closeSingleQuote', 0, r249_FULLWIDTH3);
        r249_fwr(void 0, 8219, 'revertSingleQuote', 0, r249_FULLWIDTH3);
        r249_fwr(void 0, 8222, 'lowDoubleQuote', 0, r249_FULLWIDTH3);
        r249_fwr(void 0, 8220, 'openDoubleQuote', 0, r249_FULLWIDTH3);
        r249_fwl(void 0, 8221, 'closeDoubleQuote', 0, r249_FULLWIDTH3);
        r249_fwr(void 0, 8223, 'revertDoubleQuote', 0, r249_FULLWIDTH3);
        (function _r626_t10() {
            var _r687_t0 = this;
            var r687_currentGlyph = _r687_t0;
            if (!r687_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.71')
                r249_glyphList.pop();
            var r687_wide = r249_WIDTH * 0.1;
            r687_currentGlyph.include(r249_dispiro(r249_widths.center(r249_STROKE * 1.2), r249_flat(r249_MIDDLE + r687_wide, r626_quoteTop, r249_heading(r249_DOWNWARD)), r249_curl(r249_MIDDLE - r687_wide, r626_quoteBottom, r249_widths.heading(r249_HALFSTROKE, r249_HALFSTROKE, r249_DOWNWARD))));
            r249_xn$save$2Lrc5.call(r687_currentGlyph, 'prime', 8242);
            r249_dependencyProfile[r687_currentGlyph.name] = r249_getDependencyProfile(r687_currentGlyph);
            return r687_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.71', r249_xn$donothing$2Lrc0b)));
        (function _r626_t11() {
            var _r691_t0 = this;
            var r691_currentGlyph = _r691_t0;
            if (!r691_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.72')
                r249_glyphList.pop();
            var r691_d = 0.25 * (r249_RIGHTSB - r249_SB);
            r249_includeGlyphPart(r691_currentGlyph, r249_glyphs, 'prime');
            r691_currentGlyph['apply-transform'](r249_Translate(-r691_d * 2, 0));
            r249_includeGlyphPart(r691_currentGlyph, r249_glyphs, 'prime');
            r691_currentGlyph['apply-transform'](r249_Translate(r691_d, 0));
            r249_xn$save$2Lrc5.call(r691_currentGlyph, 'doubleprime', 8243);
            r249_dependencyProfile[r691_currentGlyph.name] = r249_getDependencyProfile(r691_currentGlyph);
            return r691_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.72', r249_xn$donothing$2Lrc0b)));
        (function _r626_t12() {
            var _r698_t0 = this;
            var r698_currentGlyph = _r698_t0;
            if (!r698_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.73')
                r249_glyphList.pop();
            var r698_wide = r249_WIDTH * 0.1;
            var r698_d = r249_WIDTH * 0.3;
            var r698_fine = 0.5 * r249_adviceBlackness(3.5);
            r698_currentGlyph.include(r249_dispiro(r249_widths.center(r698_fine * 2 * 1.2), r249_flat(r249_MIDDLE + r698_wide, r626_quoteTop, r249_heading(r249_DOWNWARD)), r249_curl(r249_MIDDLE - r698_wide, r626_quoteBottom, r249_widths.heading(r698_fine, r698_fine, r249_DOWNWARD))));
            r698_currentGlyph.include(r249_dispiro(r249_widths.center(r698_fine * 2 * 1.2), r249_flat(r249_MIDDLE - r698_d + r698_wide, r626_quoteTop, r249_heading(r249_DOWNWARD)), r249_curl(r249_MIDDLE - r698_d - r698_wide, r626_quoteBottom, r249_widths.heading(r698_fine, r698_fine, r249_DOWNWARD))));
            r698_currentGlyph.include(r249_dispiro(r249_widths.center(r698_fine * 2 * 1.2), r249_flat(r249_MIDDLE + r698_d + r698_wide, r626_quoteTop, r249_heading(r249_DOWNWARD)), r249_curl(r249_MIDDLE + r698_d - r698_wide, r626_quoteBottom, r249_widths.heading(r698_fine, r698_fine, r249_DOWNWARD))));
            r249_xn$save$2Lrc5.call(r698_currentGlyph, 'tripleprime', 8244);
            r249_dependencyProfile[r698_currentGlyph.name] = r249_getDependencyProfile(r698_currentGlyph);
            return r698_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.73', r249_xn$donothing$2Lrc0b)));
        (function _r626_t13() {
            var _r704_t0 = this;
            var r704_currentGlyph = _r704_t0;
            if (!r704_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.74')
                r249_glyphList.pop();
            var r704_wide = -r249_WIDTH * 0.1;
            r704_currentGlyph.include(r249_dispiro(r249_widths.center(r249_STROKE * 1.2), r249_flat(r249_MIDDLE + r704_wide, r626_quoteTop, r249_heading(r249_DOWNWARD)), r249_curl(r249_MIDDLE - r704_wide, r626_quoteBottom, r249_widths.heading(r249_HALFSTROKE, r249_HALFSTROKE, r249_DOWNWARD))));
            r249_xn$save$2Lrc5.call(r704_currentGlyph, 'revprime', 8245);
            r249_dependencyProfile[r704_currentGlyph.name] = r249_getDependencyProfile(r704_currentGlyph);
            return r704_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.74', r249_xn$donothing$2Lrc0b)));
        (function _r626_t14() {
            var _r708_t0 = this;
            var r708_currentGlyph = _r708_t0;
            if (!r708_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.75')
                r249_glyphList.pop();
            var r708_d = 0.25 * (r249_RIGHTSB - r249_SB);
            r249_includeGlyphPart(r708_currentGlyph, r249_glyphs, 'revprime');
            r708_currentGlyph['apply-transform'](r249_Translate(-r708_d * 2, 0));
            r249_includeGlyphPart(r708_currentGlyph, r249_glyphs, 'revprime');
            r708_currentGlyph['apply-transform'](r249_Translate(r708_d, 0));
            r249_xn$save$2Lrc5.call(r708_currentGlyph, 'revdoubleprime', 8246);
            r249_dependencyProfile[r708_currentGlyph.name] = r249_getDependencyProfile(r708_currentGlyph);
            return r708_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.75', r249_xn$donothing$2Lrc0b)));
        return function _r626_t15() {
            var _r715_t0 = this;
            var r715_currentGlyph = _r715_t0;
            if (!r715_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.76')
                r249_glyphList.pop();
            var r715_wide = -r249_WIDTH * 0.1;
            var r715_d = r249_WIDTH * 0.3;
            var r715_fine = 0.5 * r249_adviceBlackness(3.5);
            r715_currentGlyph.include(r249_dispiro(r249_widths.center(r715_fine * 2 * 1.2), r249_flat(r249_MIDDLE + r715_wide, r626_quoteTop, r249_heading(r249_DOWNWARD)), r249_curl(r249_MIDDLE - r715_wide, r626_quoteBottom, r249_widths.heading(r715_fine, r715_fine, r249_DOWNWARD))));
            r715_currentGlyph.include(r249_dispiro(r249_widths.center(r715_fine * 2 * 1.2), r249_flat(r249_MIDDLE - r715_d + r715_wide, r626_quoteTop, r249_heading(r249_DOWNWARD)), r249_curl(r249_MIDDLE - r715_d - r715_wide, r626_quoteBottom, r249_widths.heading(r715_fine, r715_fine, r249_DOWNWARD))));
            r715_currentGlyph.include(r249_dispiro(r249_widths.center(r715_fine * 2 * 1.2), r249_flat(r249_MIDDLE + r715_d + r715_wide, r626_quoteTop, r249_heading(r249_DOWNWARD)), r249_curl(r249_MIDDLE + r715_d - r715_wide, r626_quoteBottom, r249_widths.heading(r715_fine, r715_fine, r249_DOWNWARD))));
            r249_xn$save$2Lrc5.call(r715_currentGlyph, 'revtripleprime', 8247);
            r249_dependencyProfile[r715_currentGlyph.name] = r249_getDependencyProfile(r715_currentGlyph);
            return r715_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.76', r249_xn$donothing$2Lrc0b));
    }());
    (function () {
        (function _r721_t0() {
            var _r723_t0 = this;
            var r723_currentGlyph = _r723_t0;
            if (!r723_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.77')
                r249_glyphList.pop();
            var r723_top = r1_mix(r249_symbolMid, r249_parenTop, 0.5);
            var r723_bot = r1_mix(r249_symbolMid, r249_parenBot, 0.5);
            var r723_extension = 0.55;
            var r723_cor = 1;
            var r723_sw = r249_adviceBlackness(3.5);
            r723_currentGlyph.include(r249_dispiro(r249_widths.center(r723_sw), r249_g4(r1_mix(r249_MIDDLE, r249_RIGHTSB, r723_extension), r723_top), r249_quadcontrols(0.4, 0.75), r249_g4(r1_mix(r249_MIDDLE, r249_SB, r723_extension), r1_mix(r723_top, r723_bot, 0.5), r249_widths.center.heading(r723_cor * r723_sw, r249_LEFTWARD))));
            r723_currentGlyph.include(r249_dispiro(r249_widths.center(r723_sw * r723_cor), r249_g4(r1_mix(r249_MIDDLE, r249_SB, r723_extension), r1_mix(r723_top, r723_bot, 0.5), r249_heading(r249_RIGHTWARD)), r249_quadcontrols(1 - 0.4, 1 - 0.75), r249_g4(r1_mix(r249_MIDDLE, r249_RIGHTSB, r723_extension), r723_bot, r249_widths.center(r723_sw))));
            r723_currentGlyph['apply-transform'](r249_Translate(-(r249_RIGHTSB - r249_SB) * 0.05, 0));
            r249_xn$save$2Lrc5.call(r723_currentGlyph, 'singleGuillemetLeft', 8249);
            r249_dependencyProfile[r723_currentGlyph.name] = r249_getDependencyProfile(r723_currentGlyph);
            return r723_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.77', r249_xn$donothing$2Lrc0b)));
        (function _r721_t1() {
            var _r729_t0 = this;
            var r729_currentGlyph = _r729_t0;
            if (!r729_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.78')
                r249_glyphList.pop();
            r249_includeGlyphPart(r729_currentGlyph, r249_glyphs, 'singleGuillemetLeft');
            r729_currentGlyph['apply-transform'](r249_Translate((r249_RIGHTSB - r249_SB) * 0.5, 0));
            r249_includeGlyphPart(r729_currentGlyph, r249_glyphs, 'singleGuillemetLeft');
            r729_currentGlyph['apply-transform'](r249_Translate(-(r249_RIGHTSB - r249_SB) * 0.25, 0));
            r249_xn$save$2Lrc5.call(r729_currentGlyph, 'guillemetLeft', 171);
            r249_dependencyProfile[r729_currentGlyph.name] = r249_getDependencyProfile(r729_currentGlyph);
            return r729_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.78', r249_xn$donothing$2Lrc0b)));
        (function _r721_t2() {
            var _r736_t0 = this;
            var r736_currentGlyph = _r736_t0;
            if (!r736_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.79')
                r249_glyphList.pop();
            r249_includeGlyphPart(r736_currentGlyph, r249_glyphs, 'singleGuillemetLeft');
            r736_currentGlyph.include(r249_FlipAround(r249_MIDDLE, r249_symbolMid));
            r249_xn$save$2Lrc5.call(r736_currentGlyph, 'singleGuillemetRight', 8250);
            r249_dependencyProfile[r736_currentGlyph.name] = r249_getDependencyProfile(r736_currentGlyph);
            return r736_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.79', r249_xn$donothing$2Lrc0b)));
        return function _r721_t3() {
            var _r741_t0 = this;
            var r741_currentGlyph = _r741_t0;
            if (!r741_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.80')
                r249_glyphList.pop();
            r249_includeGlyphPart(r741_currentGlyph, r249_glyphs, 'guillemetLeft');
            r741_currentGlyph.include(r249_FlipAround(r249_MIDDLE, r249_symbolMid));
            r249_xn$save$2Lrc5.call(r741_currentGlyph, 'guillemetRight', 187);
            r249_dependencyProfile[r741_currentGlyph.name] = r249_getDependencyProfile(r741_currentGlyph);
            return r741_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.80', r249_xn$donothing$2Lrc0b));
    }());
    (function () {
        (function _r746_t0() {
            var _r748_t0 = this;
            var r748_currentGlyph = _r748_t0;
            if (!r748_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.81')
                r249_glyphList.pop();
            r748_currentGlyph.include(r249_HBar(r249_SB, r249_RIGHTSB, r1_mix(r249_parenTop, r249_parenBot, 0.33)));
            r748_currentGlyph.include(r249_VBar(r249_MIDDLE, r249_parenBot, r249_parenTop));
            r249_xn$save$2Lrc5.call(r748_currentGlyph, 'dagger', 8224);
            r249_dependencyProfile[r748_currentGlyph.name] = r249_getDependencyProfile(r748_currentGlyph);
            return r748_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.81', r249_xn$donothing$2Lrc0b)));
        return function _r746_t1() {
            var _r753_t0 = this;
            var r753_currentGlyph = _r753_t0;
            if (!r753_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.82')
                r249_glyphList.pop();
            r249_includeGlyphPart(r753_currentGlyph, r249_glyphs, 'dagger');
            r753_currentGlyph.include(r249_HBar(r249_SB, r249_RIGHTSB, r1_mix(r249_parenTop, r249_parenBot, 0.67)));
            r249_xn$save$2Lrc5.call(r753_currentGlyph, 'doubledagger', 8225);
            r249_dependencyProfile[r753_currentGlyph.name] = r249_getDependencyProfile(r753_currentGlyph);
            return r753_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.82', r249_xn$donothing$2Lrc0b));
    }());
    (function () {
        (function _r758_t0() {
            var _r760_t0 = this;
            var r760_currentGlyph = _r760_t0;
            if (!r760_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.83')
                r249_glyphList.pop();
            r760_currentGlyph['set-width'](r249_FULLWIDTH);
            var r760_radius = Math.min(r249_PERIODRADIUS, r1_linreg(r249_WIDTH, 0.5 * r249_adviceBlackness(3.5) * r249_PERIODSIZE / r249_STROKE, r249_UPM, r249_PERIODRADIUS, r249_FULLWIDTH));
            r760_currentGlyph.include(r249_Ring(r760_radius * 2 - r249_O, r249_O, r249_FULLWIDTH / 2 - r760_radius + r249_O, r249_FULLWIDTH / 2 + r760_radius - r249_O, true));
            r249_xn$save$2Lrc5.call(r760_currentGlyph, 'onedotLeader', 8228);
            r249_dependencyProfile[r760_currentGlyph.name] = r249_getDependencyProfile(r760_currentGlyph);
            return r760_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.83', r249_xn$donothing$2Lrc0b)));
        (function _r758_t1() {
            var _r765_t0 = this;
            var r765_currentGlyph = _r765_t0;
            if (!r765_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.84')
                r249_glyphList.pop();
            r765_currentGlyph['set-width'](r249_FULLWIDTH);
            var r765_radius = Math.min(r249_PERIODRADIUS, r1_linreg(r249_WIDTH, 0.5 * r249_adviceBlackness(3.5) * r249_PERIODSIZE / r249_STROKE, r249_UPM, r249_PERIODRADIUS, r249_FULLWIDTH));
            var r765_left = r1_mix(0, r249_FULLWIDTH, 1 / 4);
            var r765_right = r1_mix(0, r249_FULLWIDTH, 3 / 4);
            r765_currentGlyph.include(r249_Ring(r765_radius * 2 - r249_O, r249_O, r765_left - r765_radius + r249_O, r765_left + r765_radius - r249_O, true));
            r765_currentGlyph.include(r249_Ring(r765_radius * 2 - r249_O, r249_O, r765_right - r765_radius + r249_O, r765_right + r765_radius - r249_O, true));
            r249_xn$save$2Lrc5.call(r765_currentGlyph, 'twodotsLEader', 8229);
            r249_dependencyProfile[r765_currentGlyph.name] = r249_getDependencyProfile(r765_currentGlyph);
            return r765_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.84', r249_xn$donothing$2Lrc0b)));
        return function _r758_t2() {
            var _r771_t0 = this;
            var r771_currentGlyph = _r771_t0;
            if (!r771_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.85')
                r249_glyphList.pop();
            r771_currentGlyph['set-width'](r249_FULLWIDTH);
            var r771_radius = Math.min(r249_PERIODRADIUS, r1_linreg(r249_WIDTH, 0.5 * r249_adviceBlackness(5) * r249_PERIODSIZE / r249_STROKE, r249_UPM, r249_PERIODRADIUS, r249_FULLWIDTH));
            var r771_left = r1_mix(0, r249_FULLWIDTH, 1 / 6);
            var r771_right = r1_mix(0, r249_FULLWIDTH, 5 / 6);
            r771_currentGlyph.include(r249_Ring(r771_radius * 2 - r249_O, r249_O, r771_left - r771_radius + r249_O, r771_left + r771_radius - r249_O, true));
            r771_currentGlyph.include(r249_Ring(r771_radius * 2 - r249_O, r249_O, r249_FULLWIDTH / 2 - r771_radius + r249_O, r249_FULLWIDTH / 2 + r771_radius - r249_O, true));
            r771_currentGlyph.include(r249_Ring(r771_radius * 2 - r249_O, r249_O, r771_right - r771_radius + r249_O, r771_right + r771_radius - r249_O, true));
            r249_xn$save$2Lrc5.call(r771_currentGlyph, 'ellipsis', 8230);
            r249_dependencyProfile[r771_currentGlyph.name] = r249_getDependencyProfile(r771_currentGlyph);
            return r771_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.85', r249_xn$donothing$2Lrc0b));
    }());
    (function () {
        (function _r778_t0() {
            var _r780_t0 = this;
            var r780_currentGlyph = _r780_t0;
            if (!r780_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.86')
                r249_glyphList.pop();
            r780_currentGlyph['set-width'](r249_WIDTH);
            var r780_dotwidth = r249_adviceBlackness(4) * 1.5;
            var r780_cor = r249_HVCONTRAST / Math.sqrt(1 - Math.pow((r249_RIGHTSB - r249_SB - r249_STROKE) / (r249_CAP - 0), 2));
            r780_currentGlyph['start-from'](r249_SB, 0);
            r780_currentGlyph['line-to'](r249_SB + r249_STROKE * r780_cor, 0);
            r780_currentGlyph['line-to'](r249_RIGHTSB, r249_CAP);
            r780_currentGlyph['line-to'](r249_RIGHTSB - r249_STROKE * r780_cor, r249_CAP);
            r780_currentGlyph.include(r249_VBarLeft(r249_SB, r1_mix(r249_CAP, 0, 0.3), r249_CAP, r780_dotwidth));
            r780_currentGlyph.include(r249_VBarRight(r249_RIGHTSB, 0, r1_mix(0, r249_CAP, 0.3), r780_dotwidth));
            r249_xn$save$2Lrc5.call(r780_currentGlyph, 'percent.dots');
            r249_dependencyProfile[r780_currentGlyph.name] = r249_getDependencyProfile(r780_currentGlyph);
            return r780_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.86', r249_xn$donothing$2Lrc0b)));
        (function _r778_t1() {
            var _r790_t0 = this;
            var r790_currentGlyph = _r790_t0;
            if (!r790_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.87')
                r249_glyphList.pop();
            var r790_width = r249_WIDTH * r249_para.diversityM;
            var r790_rightSB = r790_width - r249_SB;
            r790_currentGlyph['set-width'](r790_width);
            var r790_dotwidth = r249_adviceBlackness(4) * 1.5;
            r790_currentGlyph.include(r249_dispiro(r249_widths.center(), r249_flat(r249_SB, r249_CAP * 0.2), r249_curl(r1_mix(r249_SB, r790_rightSB, 0.85), r249_CAP * 0.9)));
            r790_currentGlyph.include(r249_VBarLeft(r1_mix(r249_SB, r790_rightSB, 0.075), r1_mix(r249_CAP, 0, 0.3), r249_CAP, r790_dotwidth));
            r790_currentGlyph.include(r249_VBarRight(r790_rightSB, 0, r1_mix(0, r249_CAP, 0.3), r790_dotwidth));
            r790_currentGlyph.include(r249_VBarRight(r790_rightSB - Math.max(r249_WIDTH * 0.25, r790_dotwidth * 1.5), 0, r1_mix(0, r249_CAP, 0.3), r790_dotwidth));
            r249_xn$save$2Lrc5.call(r790_currentGlyph, 'permille.dots');
            r249_dependencyProfile[r790_currentGlyph.name] = r249_getDependencyProfile(r790_currentGlyph);
            return r790_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.87', r249_xn$donothing$2Lrc0b)));
        (function _r778_t2() {
            var _r798_t0 = this;
            var r798_currentGlyph = _r798_t0;
            if (!r798_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.88')
                r249_glyphList.pop();
            var r798_width = r249_WIDTH * r249_para.diversityM;
            var r798_rightSB = r798_width - r249_SB;
            r798_currentGlyph['set-width'](r798_width);
            var r798_dotwidth = r249_adviceBlackness(4) * 1.5;
            var r798_dotfine = r249_adviceBlackness(3.5);
            r798_currentGlyph.include(r249_dispiro(r249_widths.center(), r249_flat(r249_SB, r249_CAP * 0.2), r249_curl(r1_mix(r249_SB, r798_rightSB, 0.85), r249_CAP * 0.9)));
            r798_currentGlyph.include(r249_VBarLeft(r249_SB, r1_mix(r249_CAP, 0, 0.3), r249_CAP, r798_dotwidth));
            r798_currentGlyph.include(r249_VBarRight(r798_rightSB, 0, r1_mix(0, r249_CAP, 0.3), r798_dotfine));
            r798_currentGlyph.include(r249_VBar(r1_mix(r1_mix(r249_SB, r798_rightSB, 0.1), r798_rightSB, 0.5), 0, r1_mix(0, r249_CAP, 0.3), r798_dotfine));
            r798_currentGlyph.include(r249_VBarLeft(r1_mix(r249_SB, r798_rightSB, 0.1), 0, r1_mix(0, r249_CAP, 0.3), r798_dotfine));
            r249_xn$save$2Lrc5.call(r798_currentGlyph, 'basepoint.dots');
            r249_dependencyProfile[r798_currentGlyph.name] = r249_getDependencyProfile(r798_currentGlyph);
            return r798_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.88', r249_xn$donothing$2Lrc0b)));
        (function _r778_t3() {
            var _r807_t0 = this;
            var r807_currentGlyph = _r807_t0;
            if (!r807_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.89')
                r249_glyphList.pop();
            r807_currentGlyph['set-width'](r249_WIDTH);
            var r807_l = r249_SB / 2;
            var r807_r = r249_WIDTH - r807_l;
            var r807_m = r1_mix(r807_l, r807_r, 1 / 2);
            var r807_sma = r249_SMOOTHA * 0.5;
            var r807_smb = r249_SMOOTHB * 0.5;
            var r807_sw = r249_adviceBlackness(4);
            var r807_fine = r249_adviceBlackness(5);
            var r807_cor = r249_HVCONTRAST / Math.sqrt(1 - Math.pow((r807_r - r807_l - r807_sw) / (r249_CAP - 0), 2));
            var r807_pTerm = r807_fine / 2 / Math.hypot(r249_CAP, r807_r - r807_l);
            var r807_pFine = 1 / 2 - Math.max(r249_CAP / 10, r249_STROKE / 2) / Math.hypot(r249_CAP, r807_r - r807_l);
            r807_currentGlyph.include(r249_OShape(r249_CAP, r249_CAP / 2, r807_l, r807_m, r807_sw, r807_sma, r807_smb));
            r807_currentGlyph.include(r249_OShape(r249_CAP / 2, 0, r807_m, r807_r, r807_sw, r807_sma, r807_smb));
            r807_currentGlyph.include(r249_dispiro(r249_widths.rhs(r807_sw * r807_cor), r249_flat(r807_r, r249_CAP, r249_heading(r249_DOWNWARD)), r249_curl(r1_mix(r807_r, r807_l, r807_pFine), r1_mix(r249_CAP, 0, r807_pFine), r249_widths.heading(r807_fine * r807_cor, 0, r249_DOWNWARD))));
            r807_currentGlyph.include(r249_dispiro(r249_widths.rhs(r807_sw * r807_cor), r249_flat(r807_l, 0, r249_heading(r249_UPWARD)), r249_curl(r1_mix(r807_l, r807_r, r807_pFine), r1_mix(0, r249_CAP, r807_pFine), r249_widths.heading(r807_fine * r807_cor, 0, r249_UPWARD))));
            r249_xn$save$2Lrc5.call(r807_currentGlyph, 'percent.rings');
            r249_dependencyProfile[r807_currentGlyph.name] = r249_getDependencyProfile(r807_currentGlyph);
            return r807_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.89', r249_xn$donothing$2Lrc0b)));
        (function _r778_t4() {
            var _r815_t0 = this;
            var r815_currentGlyph = _r815_t0;
            if (!r815_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.90')
                r249_glyphList.pop();
            var r815_width = r249_WIDTH * r249_para.diversityM;
            var r815_rightSB = r815_width - r249_SB;
            r815_currentGlyph['set-width'](r815_width);
            var r815_l = r249_SB / 2;
            var r815_r = r815_width - r815_l;
            var r815_m = r1_mix(r815_l, r815_r, 1 / 2);
            var r815_sma = r249_SMOOTHA * 0.5 * r249_para.diversityM;
            var r815_smb = r249_SMOOTHB * 0.5 * r249_para.diversityM;
            var r815_sw = r249_adviceBlackness2(5, 4, r249_CAP, r249_para.diversityM);
            var r815_fine = r249_adviceBlackness2(5, 5, r249_CAP, r249_para.diversityM);
            var r815_cor = r249_HVCONTRAST / Math.sqrt(1 - Math.pow((r815_r - r815_l - r815_sw) / (r249_CAP - 0), 2));
            var r815_pTerm = r815_fine / 2 / Math.hypot(r249_CAP, r815_r - r815_l);
            var r815_pFine = 1 / 2 - r249_STROKE / 2 / Math.hypot(r249_CAP, r815_r - r815_l);
            var r815_otop = r249_CAP / 2 - Math.max(r249_CAP / 5, r815_fine * 2) / 2;
            var r815_coOtop = r249_CAP - r815_otop;
            r815_currentGlyph.include(r249_OShape(r249_CAP, r249_CAP - r815_otop, r815_l, r815_m, r815_sw, r815_sma, r815_smb));
            r815_currentGlyph.include(r249_dispiro(r249_flat(r815_l, r1_mix(r815_otop, r815_coOtop, 0.3), r249_widths.center(r815_fine)), r249_curl(r815_r, r249_CAP - r815_otop, r249_widths.center(r815_sw))));
            (function _r815_t2() {
                var _r820_t0 = this;
                var r820_currentGlyph = _r820_t0;
                if (!r820_currentGlyph)
                    return void 0;
                if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.91')
                    r249_glyphList.pop();
                var r820_l1 = r815_l - r249_O;
                var r820_r2 = r815_r;
                var r820_gap = (r249_SB / 2 - r249_O * 2) * r249_para.diversityM;
                var r820_fill = (r820_r2 - r820_l1 - r820_gap) / 2;
                var r820_r1 = r820_l1 + r820_fill;
                var r820_l2 = r820_r1 + r820_gap;
                var r820_swp = r249_adviceBlackness(4);
                r820_currentGlyph.include(r249_OShape(r815_otop, 0, r820_l1, r820_r1, r820_swp, r815_sma, r815_smb));
                r820_currentGlyph.include(r249_OShape(r815_otop, 0, r820_l2, r820_r2, r820_swp, r815_sma, r815_smb));
                r249_xn$save$2Lrc5.call(r820_currentGlyph, 'permille.rings');
                r249_dependencyProfile[r820_currentGlyph.name] = r249_getDependencyProfile(r820_currentGlyph);
                return r820_currentGlyph;
            }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.91', function _r815_t3() {
                var _r824_t0 = this;
                _r824_t0.include(r815_currentGlyph, true);
                return _r824_t0.advanceWidth = r815_currentGlyph.advanceWidth;
            })));
            (function _r815_t4() {
                var _r826_t0 = this;
                var r826_currentGlyph = _r826_t0;
                if (!r826_currentGlyph)
                    return void 0;
                if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-punctuation.ptl.92')
                    r249_glyphList.pop();
                var r826_l1 = r815_l - r249_O;
                var r826_r3 = r815_r;
                var r826_gap = (r249_SB / 2 - r249_O) * r249_para.diversityM;
                var r826_fill = (r826_r3 - r826_l1 - 2 * r826_gap) / 3;
                var r826_r1 = r826_l1 + r826_fill;
                var r826_l2 = r826_r1 + r826_gap;
                var r826_r2 = r826_l2 + r826_fill;
                var r826_l3 = r826_r2 + r826_gap;
                var r826_swp = r249_adviceBlackness2(5, 6.5, r249_CAP, r249_para.diversityM);
                var r826_smap = r249_SMOOTHA * (1 / 3) * r249_para.diversityM;
                var r826_smbp = r249_SMOOTHB * (1 / 3) * r249_para.diversityM;
                r826_currentGlyph.include(r249_OShape(r815_otop, 0, r826_l1, r826_r1, r826_swp, r826_smap, r826_smbp));
                r826_currentGlyph.include(r249_OShape(r815_otop, 0, r826_l2, r826_r2, r826_swp, r826_smap, r826_smbp));
                r826_currentGlyph.include(r249_OShape(r815_otop, 0, r826_l3, r826_r3, r826_swp, r826_smap, r826_smbp));
                r249_xn$save$2Lrc5.call(r826_currentGlyph, 'basepoint.rings');
                r249_dependencyProfile[r826_currentGlyph.name] = r249_getDependencyProfile(r826_currentGlyph);
                return r826_currentGlyph;
            }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.92', function _r815_t5() {
                var _r831_t0 = this;
                _r831_t0.include(r815_currentGlyph, true);
                return _r831_t0.advanceWidth = r815_currentGlyph.advanceWidth;
            })));
            r249_dependencyProfile[r815_currentGlyph.name] = r249_getDependencyProfile(r815_currentGlyph);
            return r815_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-punctuation.ptl.90', r249_xn$donothing$2Lrc0b)));
        r249_xn$selectvariant$7Hrq('percent', '%');
        r249_xn$selectvariant$7Hrq('permille', 8240);
        return r249_xn$selectvariant$7Hrq('basepoint', 8241);
    }());
    return function () {
        var r833_MarkZoom = function _r833_t0() {
            var _r835_t0 = this;
            var r835_currentGlyph = _r835_t0;
            r835_currentGlyph['apply-transform'](r249_Upright());
            r835_currentGlyph['apply-transform'](r249_Translate(-r249_MIDDLE, -r249_XH - r249_ACCENT));
            r835_currentGlyph['apply-transform'](r249_Scale((r249_RIGHTSB - r249_SB) / (r249_markExtend * 3)));
            r835_currentGlyph['apply-transform'](r249_Translate(r249_MIDDLE, r249_XH + r249_ACCENT));
            r835_currentGlyph['apply-transform'](r249_Italify());
            return void 0;
        };
        r249_composite('asciitilde.low', r249_glyphs['asciitilde.high'], r249_Upright(), r249_Translate(0, r249_symbolMid - r249_XH - r249_ACCENT), r249_Italify(), r249_markset.plus);
        r249_xn$selectvariant$7Hrq('asciitilde', '~');
        r249_composite('asciicaret.low', r249_glyphs['asciicaret.high'], r249_Upright(), r249_Translate(0, r249_symbolMid - r249_XH - r249_ACCENT), r249_Italify(), r249_markset.plus);
        r249_xn$selectvariant$7Hrq('asciicaret', '^');
        r249_composite('degree', r249_glyphs.space, r249_glyphs.ringAbove, r833_MarkZoom, r249_xn$intounicode$5sIl(176));
        r249_alias('mdfPrime', 697, 'prime');
        r249_alias('mdfDoublePrime', 698, 'doubleprime');
        r249_alias('mdfTurncomma', 699, 'openSingleQuote');
        r249_alias('mdfApostrophe', 700, 'closeSingleQuote');
        r249_alias('mdfRevComma', 701, 'revertSingleQuote');
        r249_alias('mdfStress', 712, 'singleQuote');
        return r249_turned('mdfSecondaryStress', 716, 'singleQuote', r249_MIDDLE, r249_XH / 2);
    }();
};
