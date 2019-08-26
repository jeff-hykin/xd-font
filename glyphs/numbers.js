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
    var _r249_t5 = this;
    var r249_xn$capture$2Lrc = _r249_t5;
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
    var _r249_t4 = r249_xn$capture$2Lrc.letterExt;
    var r249_LambdaShape = _r249_t4.LambdaShape;
    var r249_DeltaShape = _r249_t4.DeltaShape;
    var r249_DeltaMaskShape = _r249_t4.DeltaMaskShape;
    var r249_SigmaShape = _r249_t4.SigmaShape;
    var r249_PiShape = _r249_t4.PiShape;
    var r249_EzhShape = _r249_t4.EzhShape;
    (function _r249_t7() {
        var _r252_t0 = this;
        var r252_currentGlyph = _r252_t0;
        if (!r252_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/numbers.ptl.1')
            r249_glyphList.pop();
        r252_currentGlyph.include(r249_markset.capital);
        r252_currentGlyph.include(r249_OShape(r249_CAP, 0, r249_SB, r249_RIGHTSB));
        r249_xn$save$2Lrc5.call(r252_currentGlyph, 'zero.unslashed');
        r249_dependencyProfile[r252_currentGlyph.name] = r249_getDependencyProfile(r252_currentGlyph);
        return r252_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/numbers.ptl.1', r249_xn$donothing$2Lrc0b)));
    (function _r249_t8() {
        var _r257_t0 = this;
        var r257_currentGlyph = _r257_t0;
        if (!r257_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/numbers.ptl.2')
            r249_glyphList.pop();
        r257_currentGlyph.include(r249_markset.capital);
        r249_includeGlyphPart(r257_currentGlyph, r249_glyphs, 'zero.unslashed');
        var r257_fine = 0.5 * r249_OVERLAYSTROKE;
        r257_currentGlyph.include(r249_dispiro(r249_flat(r249_SB + r249_STROKE / 2, r249_CAP * (1 - 0.77), r249_widths(r257_fine, r257_fine)), r249_curl(r249_RIGHTSB - r249_STROKE / 2, r249_CAP * 0.77)));
        r249_xn$save$2Lrc5.call(r257_currentGlyph, 'zero.slashed');
        r249_dependencyProfile[r257_currentGlyph.name] = r249_getDependencyProfile(r257_currentGlyph);
        return r257_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/numbers.ptl.2', r249_xn$donothing$2Lrc0b)));
    (function _r249_t9() {
        var _r263_t0 = this;
        var r263_currentGlyph = _r263_t0;
        if (!r263_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/numbers.ptl.3')
            r249_glyphList.pop();
        r263_currentGlyph.include(r249_markset.capital);
        r249_includeGlyphPart(r263_currentGlyph, r249_glyphs, 'zero.unslashed');
        var r263_radius = Math.min(r249_DOTRADIUS, (r249_RIGHTSB - r249_SB - r249_STROKE * 2) / 4);
        r263_currentGlyph.include(r249_Ring(r249_CAPMIDDLE + r263_radius, r249_CAPMIDDLE - r263_radius, r249_MIDDLE + r263_radius, r249_MIDDLE - r263_radius));
        r249_xn$save$2Lrc5.call(r263_currentGlyph, 'zero.dotted');
        r249_dependencyProfile[r263_currentGlyph.name] = r249_getDependencyProfile(r263_currentGlyph);
        return r263_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/numbers.ptl.3', r249_xn$donothing$2Lrc0b)));
    r249_xn$selectvariant$7Hrq('zero', '0');
    (function _r249_t10() {
        var _r269_t0 = this;
        var r269_currentGlyph = _r269_t0;
        if (!r269_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/numbers.ptl.4')
            r249_glyphList.pop();
        r269_currentGlyph.include(r249_markset.capital);
        r269_currentGlyph.include(r249_VBar(r249_MIDDLE + r249_ONEBALANCE, 0, r249_CAP));
        r269_currentGlyph.include(r249_dispiro(r249_flat(r249_MIDDLE - r249_HALFSTROKE * r249_HVCONTRAST + r249_ONEBALANCE, r249_CAP, r249_widths(r249_STROKE, 0)), r249_curl(r249_MIDDLE - r249_HOOKX * 1.25 + r249_ONEBALANCE, r249_CAP - r249_HOOK * 0.75)));
        r249_xn$save$2Lrc5.call(r269_currentGlyph, 'one.hooky');
        r249_dependencyProfile[r269_currentGlyph.name] = r249_getDependencyProfile(r269_currentGlyph);
        return r269_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/numbers.ptl.4', r249_xn$donothing$2Lrc0b)));
    (function _r249_t11() {
        var _r275_t0 = this;
        var r275_currentGlyph = _r275_t0;
        if (!r275_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/numbers.ptl.5')
            r249_glyphList.pop();
        r249_includeGlyphPart(r275_currentGlyph, r249_glyphs, 'one.hooky', r249_AS_BASE);
        r275_currentGlyph.include(r249_CenterBottomSerif(r249_MIDDLE + r249_ONEBALANCE, 0, r249_LONGJUT));
        r249_xn$save$2Lrc5.call(r275_currentGlyph, 'one.serifed');
        r249_dependencyProfile[r275_currentGlyph.name] = r249_getDependencyProfile(r275_currentGlyph);
        return r275_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/numbers.ptl.5', r249_xn$donothing$2Lrc0b)));
    r249_xn$selectvariant$7Hrq('one', '1');
    (function _r249_t12() {
        var _r280_t0 = this;
        var r280_currentGlyph = _r280_t0;
        if (!r280_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/numbers.ptl.6')
            r249_glyphList.pop();
        r280_currentGlyph.include(r249_markset.capital);
        var r280_smooth = r249_adviceGlottalStopSmooth(r249_CAP, 1) * 0.95;
        r280_currentGlyph.include(r249_dispiro(r249_widths.rhs(), r249_g4(r249_SB, r249_CAP - r249_HOOK), r249_hookstart(r249_CAP - r249_O), r249_g4(r249_RIGHTSB - r249_OX / 2, r249_CAP - r280_smooth), r249_alsothru(0.5, r1_linreg(18, 0.425, 120, 0.4, r249_STROKE) * r1_linreg(500, 1, 700, 0.95, r249_WIDTH), r249_widths.center()), r249_flat(r249_SB, 1, r249_widths.heading(r249_STROKE, 0, r249_DOWNWARD)), r249_curl(r249_SB, 0, r249_heading(r249_DOWNWARD))));
        r280_currentGlyph.include(r249_HBarBottom(r249_SB + r249_HALFSTROKE, r249_RIGHTSB, 0));
        if (r249_SLAB)
            r280_currentGlyph.include(r249_UpwardRightSerif(r249_RIGHTSB, 0, r249_VJUT));
        r249_xn$save$2Lrc5.call(r280_currentGlyph, 'two', '2');
        r249_dependencyProfile[r280_currentGlyph.name] = r249_getDependencyProfile(r280_currentGlyph);
        return r280_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/numbers.ptl.6', r249_xn$donothing$2Lrc0b)));
    (function _r249_t13() {
        var _r287_t0 = this;
        var r287_currentGlyph = _r287_t0;
        if (!r287_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/numbers.ptl.7')
            r249_glyphList.pop();
        r287_currentGlyph.include(r249_markset.capital);
        var r287_barcenter = r249_CAP * r249_BARPOS;
        var r287_threeRadius = (r249_CAPMIDDLE + r249_HALFSTROKE - r249_SMOOTH) * 1.25;
        var r287_fine = r249_STROKE * r249_CTHIN;
        r287_currentGlyph.include(r249_dispiro(r249_widths.rhs(), r249_g4(r249_SB - r249_O, r249_CAP - r249_HOOK), r249_hookstart(r249_CAPO), r249_g4(r249_RIGHTSB, r249_CAP - r249_SMOOTHB * (r249_CAP - r287_barcenter) / r249_CAPMIDDLE), r249_flat(r249_RIGHTSB - r287_threeRadius + 0.01, r287_barcenter - (r287_fine - r249_HALFSTROKE), r249_widths.heading(0, r287_fine, r249_LEFTWARD)), r249_curl(r249_RIGHTSB - r287_threeRadius, r287_barcenter - (r287_fine - r249_HALFSTROKE), r249_heading(r249_LEFTWARD))));
        r287_currentGlyph.include(r249_dispiro(r249_widths.lhs(), r249_g4(r249_SB + r249_O, r249_HOOK), r249_hookstart(r249_O), r249_g4(r249_RIGHTSB - r249_O * 2, r249_SMOOTHA * r287_barcenter / r249_CAPMIDDLE), r249_flat(r249_RIGHTSB - r287_threeRadius + 0.01, r287_barcenter + (r287_fine - r249_HALFSTROKE), r249_widths.heading(r287_fine, 0, r249_LEFTWARD)), r249_curl(r249_RIGHTSB - r287_threeRadius, r287_barcenter + (r287_fine - r249_HALFSTROKE), r249_heading(r249_LEFTWARD))));
        r249_xn$save$2Lrc5.call(r287_currentGlyph, 'three.twoarcs');
        r249_dependencyProfile[r287_currentGlyph.name] = r249_getDependencyProfile(r287_currentGlyph);
        return r287_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/numbers.ptl.7', r249_xn$donothing$2Lrc0b)));
    (function _r249_t14() {
        var _r293_t0 = this;
        var r293_currentGlyph = _r293_t0;
        if (!r293_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/numbers.ptl.8')
            r249_glyphList.pop();
        r293_currentGlyph.include(r249_markset.capital);
        r293_currentGlyph.include(r249_EzhShape(r249_CAP, 0, 0.25, 0.975));
        r249_xn$save$2Lrc5.call(r293_currentGlyph, 'three.flattop');
        r249_dependencyProfile[r293_currentGlyph.name] = r249_getDependencyProfile(r293_currentGlyph);
        return r293_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/numbers.ptl.8', r249_xn$donothing$2Lrc0b)));
    r249_xn$selectvariant$7Hrq('three', '3');
    (function _r249_t15() {
        var _r298_t0 = this;
        var r298_currentGlyph = _r298_t0;
        if (!r298_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/numbers.ptl.9')
            r249_glyphList.pop();
        r298_currentGlyph.include(r249_markset.capital);
        var r298_bar = r249_CAP * 0.4;
        var r298_vert = r1_mix(r249_SB, r249_RIGHTSB, 0.825) - r249_HVCONTRAST * r249_STROKE;
        var r298_p = 0.25;
        var r298_fine = r249_STROKE * 0.9;
        r298_currentGlyph.include(r249_HBarTop(r249_SB + r249_OX, r249_RIGHTSB, r298_bar));
        r298_currentGlyph.include(r249_VBarLeft(r298_vert, 0, r249_CAP));
        var r298_slope = (r249_CAP - r298_bar) / (r298_vert - r298_fine * r298_p * r249_HVCONTRAST - (r249_SB + r249_OX));
        r298_currentGlyph.include(r249_dispiro(r249_g4(r249_SB + r249_OX, r298_bar, r249_widths(0, r298_fine)), r249_g4(r298_vert - r298_fine * r298_p * r249_HVCONTRAST, r249_CAP, r249_widths.heading(0, Math.hypot(r298_fine, r298_fine / r298_slope), r249_UPWARD))));
        if (r249_SLAB)
            r298_currentGlyph.include(r249_CenterBottomSerif(r298_vert + r249_HALFSTROKE * r249_HVCONTRAST, 0, r249_JUT));
        r249_xn$save$2Lrc5.call(r298_currentGlyph, 'four', '4');
        r249_dependencyProfile[r298_currentGlyph.name] = r249_getDependencyProfile(r298_currentGlyph);
        return r298_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/numbers.ptl.9', r249_xn$donothing$2Lrc0b)));
    var r249_FiveShape = function _r249_t16(r305_top, r305_bp) {
        return function _r305_t2() {
            var _r307_t0 = this;
            var r307_currentGlyph = _r307_t0;
            var r307_t1 = r305_top * r305_bp * 0.8;
            var r307_t2 = r305_top * r305_bp;
            var r307_ycurly = r1_mix(0, r307_t2, r249_SMOOTHA / (r249_SMOOTHA + r249_SMOOTHB));
            var r307_xleft = r1_mix(r249_SB, r249_RIGHTSB, 0.025);
            var r307_xright = r1_mix(r249_RIGHTSB, r249_SB, 0.05) - r249_OXE;
            r307_currentGlyph.include(r249_dispiro(r249_widths.rhs(), r249_g4(r307_xleft - r249_OXHOOK, r307_t2 - r249_AHOOK * r305_top / r249_CAP), r249_hookstart(r307_t2 - r249_O), r249_g4(r249_RIGHTSB - r249_OX, r307_ycurly), r249_hookend(r249_O), r249_g4(r249_SB, r249_HOOK)));
            r307_currentGlyph.include(r249_VBarLeft(r307_xleft, r307_t2 - r249_AHOOK * r305_top / r249_CAP, r305_top));
            r307_currentGlyph.include(r249_HBarTop(r307_xleft, r307_xright, r305_top));
            if (r249_SLAB)
                r307_currentGlyph.include(r249_DownwardRightSerif(r307_xright, r305_top, r249_VJUT));
            return void 0;
        };
    };
    (function _r249_t17() {
        var _r313_t0 = this;
        var r313_currentGlyph = _r313_t0;
        if (!r313_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/numbers.ptl.10')
            r249_glyphList.pop();
        r313_currentGlyph.include(r249_markset.capital);
        r313_currentGlyph.include(r249_FiveShape(r249_CAP, r249_FIVEBARPOS));
        r249_xn$save$2Lrc5.call(r313_currentGlyph, 'five', '5');
        r249_dependencyProfile[r313_currentGlyph.name] = r249_getDependencyProfile(r313_currentGlyph);
        return r313_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/numbers.ptl.10', r249_xn$donothing$2Lrc0b)));
    (function _r249_t18() {
        var _r318_t0 = this;
        var r318_currentGlyph = _r318_t0;
        if (!r318_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/numbers.ptl.11')
            r249_glyphList.pop();
        r318_currentGlyph.include(r249_markset.capital);
        r318_currentGlyph.include(r249_FiveShape(r249_CAP, r249_FIVEBARPOS));
        r249_xn$save$2Lrc5.call(r318_currentGlyph, 'zhuangToneFive', 444);
        r249_dependencyProfile[r318_currentGlyph.name] = r249_getDependencyProfile(r318_currentGlyph);
        return r318_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/numbers.ptl.11', r249_xn$donothing$2Lrc0b)));
    (function _r249_t19() {
        var _r323_t0 = this;
        var r323_currentGlyph = _r323_t0;
        if (!r323_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/numbers.ptl.12')
            r249_glyphList.pop();
        r323_currentGlyph.include(r249_markset.e);
        r323_currentGlyph.include(r249_FiveShape(r249_XH, r249_FIVEBARPOS));
        r249_xn$save$2Lrc5.call(r323_currentGlyph, 'zhuangtonefive', 445);
        r249_dependencyProfile[r323_currentGlyph.name] = r249_getDependencyProfile(r323_currentGlyph);
        return r323_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/numbers.ptl.12', r249_xn$donothing$2Lrc0b)));
    (function _r249_t20() {
        var _r328_t0 = this;
        var r328_currentGlyph = _r328_t0;
        if (!r328_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/numbers.ptl.13')
            r249_glyphList.pop();
        r328_currentGlyph.include(r249_markset.capital);
        var r328_top = r249_CAP * 0.6;
        var r328_ymiddlea = (r328_top - r249_SMALLSMOOTHA + r249_SMALLSMOOTHB) / 2;
        var r328_ymiddleb = (r328_top - r249_SMALLSMOOTHB + r249_SMALLSMOOTHA) / 2;
        r328_currentGlyph.include(r249_dispiro(r249_widths.rhs(), r249_g4.up.start(r249_SB + r249_OX + r249_STROKE * 0.5 * r249_HVCONTRAST, r328_ymiddlea, r249_widths.heading(0, r249_STROKE * 0.5, r249_UPWARD)), r249_arcvh(), r249_g4(r249_MIDDLE - r249_CORRECTION_OMIDS, r328_top - r249_O, r249_widths.rhs()), r249_archv(), r249_g4.down.mid(r249_RIGHTSB - r249_OX, r328_ymiddleb), r249_arcvh(), r249_g4(r249_MIDDLE + r249_CORRECTION_OMIDS, r249_O), r249_archv(), r249_g4.up.mid(r249_SB + r249_OX, r328_ymiddlea), r249_quadcontrols(0, 0.8), r249_g4(r1_mix(r249_SB, r249_RIGHTSB, 0.85) - r249_HALFSTROKE * r249_HVCONTRAST, r249_CAP)));
        r249_xn$save$2Lrc5.call(r328_currentGlyph, 'six', '6');
        r249_dependencyProfile[r328_currentGlyph.name] = r249_getDependencyProfile(r328_currentGlyph);
        return r328_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/numbers.ptl.13', r249_xn$donothing$2Lrc0b)));
    (function _r249_t21() {
        var _r333_t0 = this;
        var r333_currentGlyph = _r333_t0;
        if (!r333_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/numbers.ptl.14')
            r249_glyphList.pop();
        r333_currentGlyph.include(r249_markset.capital);
        r333_currentGlyph.include(r249_HBarTop(r249_SB + r249_OXE, r249_RIGHTSB, r249_CAP));
        var r333_x = r1_mix(r249_SB, r249_RIGHTSB, 0.28);
        var r333_cor = Math.hypot(1, (r249_RIGHTSB - r333_x - r249_HALFSTROKE) / (r249_CAP - r249_STROKE)) * r249_HVCONTRAST;
        r333_currentGlyph['start-from'](r333_x - r249_STROKE * r333_cor / 2, 0);
        r333_currentGlyph['line-to'](r333_x + r249_STROKE * r333_cor / 2, 0);
        r333_currentGlyph['line-to'](r249_RIGHTSB, r249_CAP - r249_STROKE);
        r333_currentGlyph['line-to'](r249_RIGHTSB - r249_STROKE * r333_cor, r249_CAP - r249_STROKE);
        r333_currentGlyph['reverse-last']();
        if (r249_SLAB)
            r333_currentGlyph.include(r249_DownwardLeftSerif(r249_SB + r249_OXE, r249_CAP, r249_VJUT));
        r249_xn$save$2Lrc5.call(r333_currentGlyph, 'seven', '7');
        r249_dependencyProfile[r333_currentGlyph.name] = r249_getDependencyProfile(r333_currentGlyph);
        return r333_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/numbers.ptl.14', r249_xn$donothing$2Lrc0b)));
    var r249_pr = r1_linreg(18, 0.85, 120, 0.975, r249_STROKE);
    (function _r249_t22() {
        var _r344_t0 = this;
        var r344_currentGlyph = _r344_t0;
        if (!r344_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/numbers.ptl.15')
            r249_glyphList.pop();
        r344_currentGlyph.include(r249_markset.capital);
        var r344_p = 0.96;
        var r344_l = r249_SB + r249_OX;
        var r344_r = r249_RIGHTSB - r249_OX;
        r344_currentGlyph.include(r249_dispiro(r249_widths.rhs(), r249_g4.right.mid(r249_MIDDLE - r249_CORRECTION_OMIDS, r249_CAP - r249_O), r249_archv(), r249_g4(r1_mix(r344_l, r344_r, r344_p), r249_CAP - r249_SMOOTHB * r249_pr * r344_p), r249_alsothru(0.5, 0.5, r249_widths.center()), r249_g4(r344_l, r249_SMOOTHB * r249_pr, r249_widths.lhs()), r249_arcvh(), r249_g4.right.mid(r249_MIDDLE + r249_CORRECTION_OMIDS, r249_O), r249_archv(), r249_g4(r344_r, r249_SMOOTHA * r249_pr, r249_widths.lhs()), r249_alsothru(0.5, 0.5, r249_widths.center()), r249_g4(r1_mix(r344_r, r344_l, r344_p), r249_CAP - r249_SMOOTHA * r249_pr * r344_p, r249_widths.rhs()), r249_arcvh(), r249_close()));
        r249_xn$save$2Lrc5.call(r344_currentGlyph, 'eight', '8');
        r249_dependencyProfile[r344_currentGlyph.name] = r249_getDependencyProfile(r344_currentGlyph);
        return r344_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/numbers.ptl.15', r249_xn$donothing$2Lrc0b)));
    (function _r249_t23() {
        var _r349_t0 = this;
        var r349_currentGlyph = _r349_t0;
        if (!r349_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/numbers.ptl.16')
            r249_glyphList.pop();
        var r349_p = 0.96;
        var r349_py = 0.4;
        var r349_l = r249_SB + r249_OX;
        var r349_r = r249_RIGHTSB - r249_OX;
        r349_currentGlyph.include(r249_dispiro(r249_widths.lhs(), r249_straight.up.start(r349_r, 0, r249_heading(r249_UPWARD)), r249_alsothru(0.5, 1 - r349_py, r249_widths(r249_STROKE * r349_py, r249_STROKE * (1 - r349_py))), r249_g4(r1_mix(r349_r, r349_l, r349_p), r249_CAP - r249_SMOOTHA * r349_p * r249_pr, r249_widths.rhs()), r249_arcvh(), r249_g4(r249_MIDDLE - r249_CORRECTION_OMIDS, r249_CAP - r249_O), r249_archv(), r249_g4(r1_mix(r349_l, r349_r, r349_p), r249_CAP - r249_SMOOTHB * r349_p * r249_pr), r249_alsothru(0.5, r349_py, r249_widths(r249_STROKE * r349_py, r249_STROKE * (1 - r349_py))), r249_straight.down.end(r349_l, 0, r249_widths.heading(r249_STROKE, 0, r249_DOWNWARD))));
        r249_xn$save$2Lrc5.call(r349_currentGlyph, 'rotetedpropto');
        r249_dependencyProfile[r349_currentGlyph.name] = r249_getDependencyProfile(r349_currentGlyph);
        return r349_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/numbers.ptl.16', r249_xn$donothing$2Lrc0b)));
    (function _r249_t24() {
        var _r353_t0 = this;
        var r353_currentGlyph = _r353_t0;
        if (!r353_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/numbers.ptl.17')
            r249_glyphList.pop();
        r353_currentGlyph.include(r249_markset.capital);
        r353_currentGlyph['set-width'](r249_WIDTH);
        var r353_u = r249_CAP;
        var r353_d = Math.min(r353_u - r249_SMALLSMOOTHA - r249_SMALLSMOOTHB - 0.1, r249_CAP * 0.425 - r249_HALFSTROKE);
        var r353_l = r249_SB + r249_OX;
        var r353_r = r249_RIGHTSB - r249_OX;
        var r353_ymiddlea = r1_mix(r353_u, r353_d, 0.5);
        r353_currentGlyph.include(r249_dispiro(r249_widths.rhs(r249_STROKE * r249_CTHINB), r249_flat(r353_r - r249_STROKE * (1 - r249_CTHINB) * r249_HVCONTRAST, r353_ymiddlea), r249_curl(r353_r - r249_STROKE * (1 - r249_CTHINB) * r249_HVCONTRAST, r353_d + r249_SMALLSMOOTHA), r249_arcvh(), r249_g4(r1_mix(r353_l, r353_r, 0.5) + r249_CORRECTION_OMIDS, r353_d + r249_O, r249_widths(0, r249_STROKE)), r249_archv(), r249_flat(r353_l, r353_d + r249_SMALLSMOOTHB), r249_curl(r353_l, r353_u - r249_SMALLSMOOTHA), r249_arcvh(), r249_g4(r1_mix(r353_l, r353_r, 0.5) - r249_CORRECTION_OMIDS, r353_u - r249_O), r249_archv(), r249_flat(r353_r, r353_ymiddlea), r249_curl(r353_r, r249_CAP * 0.35), r249_hookend(r249_O), r249_g4(r249_SB, r249_HOOK)));
        r249_xn$save$2Lrc5.call(r353_currentGlyph, 'nine', '9');
        r249_dependencyProfile[r353_currentGlyph.name] = r249_getDependencyProfile(r353_currentGlyph);
        return r353_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/numbers.ptl.17', r249_xn$donothing$2Lrc0b)));
    return function _r249_t25() {
        var _r359_t0 = this;
        var r359_currentGlyph = _r359_t0;
        if (!r359_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/numbers.ptl.18')
            r249_glyphList.pop();
        r359_currentGlyph.include(r249_markset.capital);
        r359_currentGlyph['set-width'](r249_WIDTH * 2);
        r249_includeGlyphPart(r359_currentGlyph, r249_glyphs, 'one');
        r359_currentGlyph['apply-transform'](r249_Translate(-r249_WIDTH, 0));
        r249_includeGlyphPart(r359_currentGlyph, r249_glyphs, 'zero');
        r359_currentGlyph['apply-transform'](r249_Translate(r249_WIDTH, 0));
        r249_xn$save$2Lrc5.call(r359_currentGlyph, 'ten');
        r249_dependencyProfile[r359_currentGlyph.name] = r249_getDependencyProfile(r359_currentGlyph);
        return r359_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/numbers.ptl.18', r249_xn$donothing$2Lrc0b));
};
