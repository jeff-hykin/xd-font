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
    var _r249_t4 = this;
    var r249_xn$capture$2Lrc = _r249_t4;
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
    var r249_markExtend = r249_ACCENTX * 0.5;
    var r249_markHalfStroke = 0.5 * r249_adviceBlackness(3.375);
    var r249_markStress = r249_markHalfStroke * 1.1;
    var r249_markFine = r249_markHalfStroke * 0.9;
    var r249_markMiddle = -r249_MIDDLE;
    var r249_markDotsRadius = r249_DOTRADIUS * Math.min(1, r249_markStress / r249_HALFSTROKE);
    var r249_aboveMarkTop = r249_XH + r249_ACCENT * 1.38;
    var r249_aboveMarkBot = r249_XH + r249_ACCENT * 0.35;
    var r249_aboveMarkMid = r1_mix(r249_aboveMarkBot, r249_aboveMarkTop, 0.5);
    var r249_belowMarkBot = 0 - r249_ACCENT * 1.38;
    var r249_belowMarkTop = 0 - r249_ACCENT * 0.35;
    var r249_commaOvershoot = r249_O * r1_linreg(16, 0, 90, -1, r249_markHalfStroke * 2);
    var r249_commaOvershoot2 = r249_O * r1_linreg(16, 1, 90, -1, r249_markHalfStroke * 2);
    var r249_commaAboveRadius = 0.85 * r249_DOTRADIUS * r249_markHalfStroke / r249_HALFSTROKE;
    var r249_asciiMarkZoom = (r249_RIGHTSB - r249_SB) / (r249_markExtend * 3);
    (function _r249_t6() {
        var _r252_t0 = this;
        var r252_currentGlyph = _r252_t0;
        if (!r252_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.1')
            r249_glyphList.pop();
        r252_currentGlyph['set-width'](0);
        r252_currentGlyph.shortName = 'dot';
        r252_currentGlyph['set-anchor']('above', r249_MARK, r249_markMiddle, r249_XH, r249_markMiddle, r249_aboveMarkTop);
        r252_currentGlyph.include(r249_Ring(r249_XH + r249_ACCENT + r249_DOTRADIUS, r249_XH + r249_ACCENT - r249_DOTRADIUS, r249_markMiddle - r249_DOTRADIUS, r249_markMiddle + r249_DOTRADIUS, true));
        r249_xn$save$2Lrc5.call(r252_currentGlyph, 'dotAbove', 775);
        r249_dependencyProfile[r252_currentGlyph.name] = r249_getDependencyProfile(r252_currentGlyph);
        return r252_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.1', r249_xn$donothing$2Lrc0b)));
    (function _r249_t7() {
        var _r258_t0 = this;
        var r258_currentGlyph = _r258_t0;
        if (!r258_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.2')
            r249_glyphList.pop();
        r258_currentGlyph['set-width'](0);
        r258_currentGlyph.shortName = 'dieresis';
        r258_currentGlyph['set-anchor']('above', r249_MARK, r249_markMiddle, r249_XH, r249_markMiddle, r249_aboveMarkTop);
        r258_currentGlyph.include(r249_Ring(r249_XH + r249_ACCENT + r249_markDotsRadius, r249_XH + r249_ACCENT - r249_markDotsRadius, r249_markMiddle - r249_markDotsRadius - r249_markExtend, r249_markMiddle + r249_markDotsRadius - r249_markExtend, true));
        r258_currentGlyph.include(r249_Ring(r249_XH + r249_ACCENT + r249_markDotsRadius, r249_XH + r249_ACCENT - r249_markDotsRadius, r249_markMiddle - r249_markDotsRadius + r249_markExtend, r249_markMiddle + r249_markDotsRadius + r249_markExtend, true));
        r249_xn$save$2Lrc5.call(r258_currentGlyph, 'dieresisAbove', 776);
        r249_dependencyProfile[r258_currentGlyph.name] = r249_getDependencyProfile(r258_currentGlyph);
        return r258_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.2', r249_xn$donothing$2Lrc0b)));
    (function _r249_t8() {
        var _r265_t0 = this;
        var r265_currentGlyph = _r265_t0;
        if (!r265_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.3')
            r249_glyphList.pop();
        r265_currentGlyph['set-width'](0);
        r265_currentGlyph.shortName = 'ring';
        r265_currentGlyph['set-anchor']('above', r249_MARK, r249_markMiddle, r249_XH, r249_markMiddle, r249_aboveMarkTop);
        var r265_radiusIn = r249_ACCENT * 0.24;
        var r265_radiusOut = r265_radiusIn + r249_markFine * r1_linreg(16, 2, 90, 1.75, r249_markHalfStroke * 2);
        r265_currentGlyph.include(r249_Ring(r249_XH + r249_ACCENT + r265_radiusOut, r249_XH + r249_ACCENT - r265_radiusOut, r249_markMiddle - r265_radiusOut, r249_markMiddle + r265_radiusOut, true));
        r265_currentGlyph.include(r249_Ring(r249_XH + r249_ACCENT + r265_radiusIn, r249_XH + r249_ACCENT - r265_radiusIn, r249_markMiddle - r265_radiusIn, r249_markMiddle + r265_radiusIn, true));
        r265_currentGlyph['reverse-last']();
        r265_currentGlyph['apply-transform'](r249_Upright());
        r265_currentGlyph['apply-transform'](r249_Translate(0, -r249_markFine * 0.75));
        r265_currentGlyph['apply-transform'](r249_Italify());
        r249_xn$save$2Lrc5.call(r265_currentGlyph, 'ringAbove', 778);
        var r265_g = function _r265_t2() {
            var _r276_t0 = this;
            var r276_currentGlyph = _r276_t0;
            if (!r276_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.4')
                r249_glyphList.pop();
            r249_dependencyProfile[r276_currentGlyph.name] = r249_getDependencyProfile(r276_currentGlyph);
            return r276_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.4', function _r265_t3() {
            var _r277_t0 = this;
            _r277_t0.include(r265_currentGlyph, true);
            return _r277_t0.advanceWidth = r265_currentGlyph.advanceWidth;
        }));
        (function _r265_t4() {
            var _r279_t0 = this;
            var r279_currentGlyph = _r279_t0;
            if (!r279_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.5')
                r249_glyphList.pop();
            r279_currentGlyph.anchors = {};
            var r279_k = 2 * (r265_radiusOut - (r265_radiusOut - r265_radiusIn) * 0.25);
            r279_currentGlyph['apply-transform'](r249_Translate(r279_k, 0));
            r279_currentGlyph.include(r265_g);
            r279_currentGlyph.include(r249_Translate(-r279_k / 2, 0));
            r279_currentGlyph['set-anchor']('above', r249_MARK, r249_markMiddle, r249_XH, r249_markMiddle, r249_aboveMarkTop);
            r249_xn$save$2Lrc5.call(r279_currentGlyph, 'dblRingAbove', 6834);
            r249_dependencyProfile[r279_currentGlyph.name] = r249_getDependencyProfile(r279_currentGlyph);
            return r279_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.5', function _r265_t5() {
            var _r285_t0 = this;
            _r285_t0.include(r265_currentGlyph, true);
            return _r285_t0.advanceWidth = r265_currentGlyph.advanceWidth;
        })));
        r249_dependencyProfile[r265_currentGlyph.name] = r249_getDependencyProfile(r265_currentGlyph);
        return r265_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.3', r249_xn$donothing$2Lrc0b)));
    (function _r249_t9() {
        var _r287_t0 = this;
        var r287_currentGlyph = _r287_t0;
        if (!r287_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.6')
            r249_glyphList.pop();
        r287_currentGlyph['set-width'](0);
        r287_currentGlyph.shortName = 'grave';
        r287_currentGlyph['set-anchor']('above', r249_MARK, r249_markMiddle, r249_XH, r249_markMiddle, r249_aboveMarkTop);
        r287_currentGlyph.include(r249_dispiro(r249_flat(r249_markMiddle + r249_markStress, r249_aboveMarkBot, r249_widths(r249_markFine, r249_markFine)), r249_curl(r249_markMiddle - r249_markExtend, r249_aboveMarkTop, r249_widths(r249_markStress, r249_markStress))));
        r249_xn$save$2Lrc5.call(r287_currentGlyph, 'graveAbove', 768);
        r249_dependencyProfile[r287_currentGlyph.name] = r249_getDependencyProfile(r287_currentGlyph);
        return r287_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.6', r249_xn$donothing$2Lrc0b)));
    (function _r249_t10() {
        var _r293_t0 = this;
        var r293_currentGlyph = _r293_t0;
        if (!r293_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.7')
            r249_glyphList.pop();
        r293_currentGlyph.include(r249_dispiro(r249_flat(r249_MIDDLE + r249_HALFSTROKE * 1.1 * r249_asciiMarkZoom, r1_mix(r249_XH + r249_ACCENT, r249_aboveMarkBot, r249_asciiMarkZoom), r249_widths.center(r249_STROKE * 0.9)), r249_curl(r249_MIDDLE - r249_markExtend * r249_asciiMarkZoom, r1_mix(r249_XH + r249_ACCENT, r249_aboveMarkTop, r249_asciiMarkZoom), r249_widths.center(r249_STROKE * 1.1))));
        r249_xn$save$2Lrc5.call(r293_currentGlyph, 'asciigrave', '`');
        r249_dependencyProfile[r293_currentGlyph.name] = r249_getDependencyProfile(r293_currentGlyph);
        return r293_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.7', r249_xn$donothing$2Lrc0b)));
    (function _r249_t11() {
        var _r297_t0 = this;
        var r297_currentGlyph = _r297_t0;
        if (!r297_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.8')
            r249_glyphList.pop();
        r297_currentGlyph['set-width'](0);
        r297_currentGlyph.shortName = 'acute';
        r297_currentGlyph['set-anchor']('above', r249_MARK, r249_markMiddle, r249_XH, r249_markMiddle, r249_aboveMarkTop);
        r297_currentGlyph.include(r249_dispiro(r249_flat(r249_markMiddle - r249_markStress, r249_aboveMarkBot, r249_widths(r249_markFine, r249_markFine)), r249_curl(r249_markMiddle + r249_markExtend, r249_aboveMarkTop, r249_widths(r249_markStress, r249_markStress))));
        r249_xn$save$2Lrc5.call(r297_currentGlyph, 'acuteAbove', 769);
        r249_dependencyProfile[r297_currentGlyph.name] = r249_getDependencyProfile(r297_currentGlyph);
        return r297_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.8', r249_xn$donothing$2Lrc0b)));
    (function _r249_t12() {
        var _r303_t0 = this;
        var r303_currentGlyph = _r303_t0;
        if (!r303_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.9')
            r249_glyphList.pop();
        r303_currentGlyph.include(r249_dispiro(r249_flat(r249_MIDDLE - r249_HALFSTROKE * 1.1 * r249_asciiMarkZoom, r1_mix(r249_XH + r249_ACCENT, r249_aboveMarkBot, r249_asciiMarkZoom), r249_widths.center(r249_STROKE * 0.9)), r249_curl(r249_MIDDLE + r249_markExtend * r249_asciiMarkZoom, r1_mix(r249_XH + r249_ACCENT, r249_aboveMarkTop, r249_asciiMarkZoom), r249_widths.center(r249_STROKE * 1.1))));
        r249_xn$save$2Lrc5.call(r303_currentGlyph, 'latin1acute', 180);
        r249_dependencyProfile[r303_currentGlyph.name] = r249_getDependencyProfile(r303_currentGlyph);
        return r303_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.9', r249_xn$donothing$2Lrc0b)));
    (function _r249_t13() {
        var _r307_t0 = this;
        var r307_currentGlyph = _r307_t0;
        if (!r307_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.10')
            r249_glyphList.pop();
        r307_currentGlyph['set-width'](0);
        r307_currentGlyph.shortName = 'circum';
        r307_currentGlyph['set-anchor']('above', r249_MARK, r249_markMiddle, r249_XH, r249_markMiddle, r249_aboveMarkTop);
        r307_currentGlyph.include(r249_dispiro(r249_flat(r249_markMiddle - r249_markExtend - r249_markStress, r249_aboveMarkBot + r249_markStress - r249_markFine, r249_widths(r249_markStress, r249_markStress)), r249_curl(r249_markMiddle, r249_aboveMarkTop + r249_markFine * 0.7, r249_heading(r249_UPWARD))));
        r307_currentGlyph.include(r249_dispiro(r249_flat(r249_markMiddle + r249_markExtend + r249_markStress, r249_aboveMarkBot + r249_markStress - r249_markFine, r249_widths(r249_markStress, r249_markStress)), r249_curl(r249_markMiddle, r249_aboveMarkTop + r249_markFine * 0.7, r249_heading(r249_UPWARD))));
        r249_xn$save$2Lrc5.call(r307_currentGlyph, 'circumflexAbove', 770);
        r249_dependencyProfile[r307_currentGlyph.name] = r249_getDependencyProfile(r307_currentGlyph);
        return r307_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.10', r249_xn$donothing$2Lrc0b)));
    (function _r249_t14() {
        var _r314_t0 = this;
        var r314_currentGlyph = _r314_t0;
        if (!r314_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.11')
            r249_glyphList.pop();
        r314_currentGlyph['set-width'](0);
        r314_currentGlyph['set-anchor']('above', r249_MARK, r249_markMiddle, r249_XH, r249_markMiddle, r249_aboveMarkTop);
        r314_currentGlyph.include(r249_dispiro(r249_widths.rhs(r249_markHalfStroke * 2), r249_flat(r249_markMiddle - r249_markExtend * 1.5, r249_aboveMarkTop + r249_markFine * 0.7), r249_curl(r249_markMiddle + r249_markStress * r249_HVCONTRAST, r249_aboveMarkTop + r249_markFine * 0.7)));
        r314_currentGlyph.include(r249_dispiro(r249_flat(r249_markMiddle + r249_markExtend + r249_markStress, r249_aboveMarkBot + r249_markStress - r249_markFine, r249_widths(r249_markStress, r249_markStress)), r249_curl(r249_markMiddle, r249_aboveMarkTop + r249_markFine * 0.7, r249_heading(r249_UPWARD))));
        r249_xn$save$2Lrc5.call(r314_currentGlyph, 'bardownAbove', 7622);
        r249_dependencyProfile[r314_currentGlyph.name] = r249_getDependencyProfile(r314_currentGlyph);
        return r314_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.11', r249_xn$donothing$2Lrc0b)));
    (function _r249_t15() {
        var _r321_t0 = this;
        var r321_currentGlyph = _r321_t0;
        if (!r321_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.12')
            r249_glyphList.pop();
        r321_currentGlyph['set-width'](0);
        r321_currentGlyph['set-anchor']('above', r249_MARK, r249_markMiddle, r249_XH, r249_markMiddle, r249_aboveMarkTop);
        r321_currentGlyph.include(r249_dispiro(r249_flat(r249_markMiddle - r249_markExtend - r249_markStress, r249_aboveMarkBot + r249_markStress - r249_markFine, r249_widths(r249_markStress, r249_markStress)), r249_curl(r249_markMiddle, r249_aboveMarkTop + r249_markFine * 0.7, r249_heading(r249_UPWARD))));
        r321_currentGlyph.include(r249_dispiro(r249_widths.rhs(r249_markHalfStroke * 2), r249_flat(r249_markMiddle - r249_markStress * r249_HVCONTRAST, r249_aboveMarkTop + r249_markFine * 0.7), r249_curl(r249_markMiddle + r249_markExtend * 1.5, r249_aboveMarkTop + r249_markFine * 0.7)));
        r249_xn$save$2Lrc5.call(r321_currentGlyph, 'upbarAbove', 7623);
        r249_dependencyProfile[r321_currentGlyph.name] = r249_getDependencyProfile(r321_currentGlyph);
        return r321_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.12', r249_xn$donothing$2Lrc0b)));
    (function _r249_t16() {
        var _r328_t0 = this;
        var r328_currentGlyph = _r328_t0;
        if (!r328_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.13')
            r249_glyphList.pop();
        r328_currentGlyph.include(r249_dispiro(r249_flat(r249_MIDDLE - r249_markExtend * r249_asciiMarkZoom - r249_HALFSTROKE, r1_mix(r249_XH + r249_ACCENT, r249_aboveMarkBot, r249_asciiMarkZoom) + r249_HALFSTROKE * 0.1, r249_widths.center(r249_STROKE * 1.05)), r249_curl(r249_MIDDLE, r1_mix(r249_XH + r249_ACCENT, r249_aboveMarkTop, r249_asciiMarkZoom) + r249_HALFSTROKE * 0.5, r249_heading(r249_UPWARD))));
        r328_currentGlyph.include(r249_dispiro(r249_flat(r249_MIDDLE + r249_markExtend * r249_asciiMarkZoom + r249_HALFSTROKE, r1_mix(r249_XH + r249_ACCENT, r249_aboveMarkBot, r249_asciiMarkZoom) + r249_HALFSTROKE * 0.1, r249_widths.center(r249_STROKE * 1.05)), r249_curl(r249_MIDDLE, r1_mix(r249_XH + r249_ACCENT, r249_aboveMarkTop, r249_asciiMarkZoom) + r249_HALFSTROKE * 0.5, r249_heading(r249_UPWARD))));
        r249_xn$save$2Lrc5.call(r328_currentGlyph, 'asciicaret.high');
        r249_dependencyProfile[r328_currentGlyph.name] = r249_getDependencyProfile(r328_currentGlyph);
        return r328_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.13', r249_xn$donothing$2Lrc0b)));
    (function _r249_t17() {
        var _r333_t0 = this;
        var r333_currentGlyph = _r333_t0;
        if (!r333_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.14')
            r249_glyphList.pop();
        r333_currentGlyph['set-width'](0);
        r333_currentGlyph.shortName = 'caron';
        r333_currentGlyph['set-anchor']('above', r249_MARK, r249_markMiddle, r249_XH, r249_markMiddle, r249_aboveMarkTop);
        r333_currentGlyph.include(r249_dispiro(r249_flat(r249_markMiddle - r249_markExtend - r249_markStress, r249_aboveMarkTop, r249_widths(r249_markStress, r249_markStress)), r249_curl(r249_markMiddle, r249_aboveMarkBot - r249_markFine * 1.7 + r249_markStress, r249_heading(r249_DOWNWARD))));
        r333_currentGlyph.include(r249_dispiro(r249_flat(r249_markMiddle + r249_markExtend + r249_markStress, r249_aboveMarkTop, r249_widths(r249_markStress, r249_markStress)), r249_curl(r249_markMiddle, r249_aboveMarkBot - r249_markFine * 1.7 + r249_markStress, r249_heading(r249_DOWNWARD))));
        r249_xn$save$2Lrc5.call(r333_currentGlyph, 'caronAbove', 780);
        r249_dependencyProfile[r333_currentGlyph.name] = r249_getDependencyProfile(r333_currentGlyph);
        return r333_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.14', r249_xn$donothing$2Lrc0b)));
    (function _r249_t18() {
        var _r340_t0 = this;
        var r340_currentGlyph = _r340_t0;
        if (!r340_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.15')
            r249_glyphList.pop();
        r340_currentGlyph['set-width'](0);
        r340_currentGlyph['set-anchor']('above', r249_MARK, r249_markMiddle, r249_XH, r249_markMiddle, r249_aboveMarkTop);
        r340_currentGlyph.include(r249_dispiro(r249_widths.lhs(r249_markHalfStroke * 2), r249_flat(r249_markMiddle - r249_markExtend * 1.5, r249_aboveMarkBot - r249_markFine * 1.7 + r249_markStress), r249_curl(r249_markMiddle + r249_markStress * r249_HVCONTRAST, r249_aboveMarkBot - r249_markFine * 1.7 + r249_markStress)));
        r340_currentGlyph.include(r249_dispiro(r249_flat(r249_markMiddle + r249_markExtend + r249_markStress, r249_aboveMarkTop, r249_widths(r249_markStress, r249_markStress)), r249_curl(r249_markMiddle, r249_aboveMarkBot - r249_markFine * 1.7 + r249_markStress, r249_heading(r249_DOWNWARD))));
        r249_xn$save$2Lrc5.call(r340_currentGlyph, 'barupAbove', 7620);
        r249_dependencyProfile[r340_currentGlyph.name] = r249_getDependencyProfile(r340_currentGlyph);
        return r340_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.15', r249_xn$donothing$2Lrc0b)));
    (function _r249_t19() {
        var _r347_t0 = this;
        var r347_currentGlyph = _r347_t0;
        if (!r347_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.16')
            r249_glyphList.pop();
        r347_currentGlyph['set-width'](0);
        r347_currentGlyph['set-anchor']('above', r249_MARK, r249_markMiddle, r249_XH, r249_markMiddle, r249_aboveMarkTop);
        r347_currentGlyph.include(r249_dispiro(r249_flat(r249_markMiddle - r249_markExtend - r249_markStress, r249_aboveMarkTop, r249_widths(r249_markStress, r249_markStress)), r249_curl(r249_markMiddle, r249_aboveMarkBot - r249_markFine * 1.7 + r249_markStress, r249_heading(r249_DOWNWARD))));
        r347_currentGlyph.include(r249_dispiro(r249_widths.lhs(r249_markHalfStroke * 2), r249_flat(r249_markMiddle - r249_markStress * r249_HVCONTRAST, r249_aboveMarkBot - r249_markFine * 1.7 + r249_markStress), r249_curl(r249_markMiddle + r249_markExtend * 1.5, r249_aboveMarkBot - r249_markFine * 1.7 + r249_markStress)));
        r249_xn$save$2Lrc5.call(r347_currentGlyph, 'downbarAbove', 7621);
        r249_dependencyProfile[r347_currentGlyph.name] = r249_getDependencyProfile(r347_currentGlyph);
        return r347_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.16', r249_xn$donothing$2Lrc0b)));
    var r249_TildeShape = function _r249_t20() {
        var _r353_t7 = arguments;
        var _r353_t0 = [].slice.call(_r353_t7, 0);
        var _r353_t1 = [];
        var _r353_t2 = 0;
        for (; _r353_t2 < _r353_t0.length; _r353_t2 = _r353_t2 + 1)
            if (!(_r353_t0[_r353_t2] instanceof r249_xn$NamedParameterPair$2Lrc9b))
                _r353_t1.push(_r353_t0[_r353_t2]);
        var r353_ttop = r1_fallback(r353_ttop, _r353_t1[0]);
        var r353_tbot = r1_fallback(r353_tbot, _r353_t1[1]);
        var r353_leftEnd = r1_fallback(r353_leftEnd, _r353_t1[2]);
        var r353_rightEnd = r1_fallback(r353_rightEnd, _r353_t1[3]);
        var r353_hs = r1_fallback(r353_hs, _r353_t1[4]);
        var _r353_t3 = _r353_t0;
        var _r353_t4 = _r353_t3.length;
        var _r353_t5 = 0;
        for (; _r353_t5 < _r353_t4; _r353_t5 = _r353_t5 + 1) {
            _r353_t2 = _r353_t3[_r353_t5];
            if (_r353_t2 && _r353_t2 instanceof r249_xn$NamedParameterPair$2Lrc9b && _r353_t2.left === 'ttop')
                r353_ttop = _r353_t2.right;
            if (_r353_t2 && _r353_t2 instanceof r249_xn$NamedParameterPair$2Lrc9b && _r353_t2.left === 'tbot')
                r353_tbot = _r353_t2.right;
            if (_r353_t2 && _r353_t2 instanceof r249_xn$NamedParameterPair$2Lrc9b && _r353_t2.left === 'leftEnd')
                r353_leftEnd = _r353_t2.right;
            if (_r353_t2 && _r353_t2 instanceof r249_xn$NamedParameterPair$2Lrc9b && _r353_t2.left === 'rightEnd')
                r353_rightEnd = _r353_t2.right;
            if (_r353_t2 && _r353_t2 instanceof r249_xn$NamedParameterPair$2Lrc9b && _r353_t2.left === 'hs')
                r353_hs = _r353_t2.right;
        }
        return function _r353_t8() {
            var _r358_t0 = this;
            var r358_currentGlyph = _r358_t0;
            var r358_fine = r353_hs * 8 / 9;
            var r358_hsvh = r353_hs * 2 / Math.abs(r353_ttop - r353_tbot);
            var r358_hvc = (r353_rightEnd - r353_leftEnd) / Math.abs(r353_ttop - r353_tbot);
            var r358_defaultHvc = r249_markExtend * 3 / (r249_aboveMarkTop - r249_aboveMarkBot - r249_markFine / 2);
            var r358_hsvhThin = 0.116;
            var r358_hsvhHeav = 0.732;
            var r358_tildeWave = r1_linreg(r358_hsvhThin, 2.925, r358_hsvhHeav, 2.375, r358_hsvh) * r1_linreg(r358_defaultHvc, 1, 4.35, 1.1, r358_hvc);
            var r358_tildeWaveX = 0.51;
            r358_currentGlyph.include(r249_dispiro(r249_widths.center(r353_hs * 2 / r249_CONTRAST), r249_g2(r353_leftEnd, r353_tbot), r249_bezcontrols.absolute(r1_mix(r353_leftEnd, r353_rightEnd, r358_tildeWaveX), r1_mix(r353_tbot, r353_ttop, r358_tildeWave), r1_mix(r353_leftEnd, r353_rightEnd, 1 - r358_tildeWaveX), r1_mix(r353_tbot, r353_ttop, 1 - r358_tildeWave), 256, r249_important, r249_g2), r249_g2(r353_rightEnd, r353_ttop)));
            return void 0;
        };
    };
    (function _r249_t21() {
        var _r361_t0 = this;
        var r361_currentGlyph = _r361_t0;
        if (!r361_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.17')
            r249_glyphList.pop();
        r361_currentGlyph['set-width'](0);
        r361_currentGlyph.shortName = 'tilde';
        r361_currentGlyph['set-anchor']('above', r249_MARK, r249_markMiddle, r249_XH, r249_markMiddle, r249_aboveMarkTop);
        r361_currentGlyph.include(r249_TildeShape(new r249_xn$NamedParameterPair$2Lrc9b('ttop', r249_aboveMarkTop), new r249_xn$NamedParameterPair$2Lrc9b('tbot', r249_aboveMarkBot + r249_markFine / 2), new r249_xn$NamedParameterPair$2Lrc9b('leftEnd', r249_markMiddle - r249_markExtend * 1.5), new r249_xn$NamedParameterPair$2Lrc9b('rightEnd', r249_markMiddle + r249_markExtend * 1.5), new r249_xn$NamedParameterPair$2Lrc9b('hs', r249_markHalfStroke)));
        r249_xn$save$2Lrc5.call(r361_currentGlyph, 'tildeAbove', 771);
        r249_dependencyProfile[r361_currentGlyph.name] = r249_getDependencyProfile(r361_currentGlyph);
        return r361_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.17', r249_xn$donothing$2Lrc0b)));
    (function _r249_t22() {
        var _r372_t0 = this;
        var r372_currentGlyph = _r372_t0;
        if (!r372_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.18')
            r249_glyphList.pop();
        r372_currentGlyph.include(r249_TildeShape(new r249_xn$NamedParameterPair$2Lrc9b('ttop', r1_mix(r249_XH + r249_ACCENT, r249_aboveMarkTop, (r249_RIGHTSB - r249_SB) / (r249_markExtend * 3))), new r249_xn$NamedParameterPair$2Lrc9b('tbot', r1_mix(r249_XH + r249_ACCENT, r249_aboveMarkBot + r249_markFine / 2, (r249_RIGHTSB - r249_SB) / (r249_markExtend * 3))), new r249_xn$NamedParameterPair$2Lrc9b('leftEnd', r249_SB), new r249_xn$NamedParameterPair$2Lrc9b('rightEnd', r249_RIGHTSB), new r249_xn$NamedParameterPair$2Lrc9b('hs', r249_OPERATORSTROKE / 2)));
        r249_xn$save$2Lrc5.call(r372_currentGlyph, 'asciitilde.high');
        r249_dependencyProfile[r372_currentGlyph.name] = r249_getDependencyProfile(r372_currentGlyph);
        return r372_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.18', r249_xn$donothing$2Lrc0b)));
    (function _r249_t23() {
        var _r381_t0 = this;
        var r381_currentGlyph = _r381_t0;
        if (!r381_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.19')
            r249_glyphList.pop();
        var r381_t = r1_mix(r249_XH + r249_ACCENT, r249_aboveMarkTop, (r249_RIGHTSB - r249_SB) / (r249_markExtend * 3));
        var r381_b = r1_mix(r249_XH + r249_ACCENT, r249_aboveMarkBot + r249_markFine / 2, (r249_RIGHTSB - r249_SB) / (r249_markExtend * 3));
        r381_currentGlyph.include(r249_TildeShape(new r249_xn$NamedParameterPair$2Lrc9b('ttop', r381_t), new r249_xn$NamedParameterPair$2Lrc9b('tbot', r381_b), new r249_xn$NamedParameterPair$2Lrc9b('leftEnd', r1_mix(0, r249_SB, 1 / 3)), new r249_xn$NamedParameterPair$2Lrc9b('rightEnd', r1_mix(r249_WIDTH, r249_RIGHTSB, 1 / 3)), new r249_xn$NamedParameterPair$2Lrc9b('hs', r249_adviceBlackness(4.5) / 2)));
        r381_currentGlyph.include(r249_Realign(r249_MIDDLE, r1_mix(r381_t, r381_b, 1 / 2), r249_MIDDLE, r249_symbolMid));
        r249_xn$save$2Lrc5.call(r381_currentGlyph, 'overlaytilde');
        r249_dependencyProfile[r381_currentGlyph.name] = r249_getDependencyProfile(r381_currentGlyph);
        return r381_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.19', r249_xn$donothing$2Lrc0b)));
    (function _r249_t24() {
        var _r391_t0 = this;
        var r391_currentGlyph = _r391_t0;
        if (!r391_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.20')
            r249_glyphList.pop();
        r391_currentGlyph['set-width'](0);
        r391_currentGlyph['set-anchor']('above', r249_MARK, r249_markMiddle, r249_XH, r249_markMiddle, r249_aboveMarkTop);
        var r391_m = r1_mix(r249_aboveMarkBot, r249_aboveMarkTop, 0.4);
        var r391_ttop = r1_mix(r391_m, r249_aboveMarkTop, 0.7);
        var r391_tbot = r1_mix(r391_m, r249_aboveMarkBot + r249_markFine / 2, 0.7);
        var r391_fine = r249_adviceBlackness(4.5) / 2;
        r391_currentGlyph.include(r249_TildeShape(new r249_xn$NamedParameterPair$2Lrc9b('ttop', r391_ttop), new r249_xn$NamedParameterPair$2Lrc9b('tbot', r391_tbot), new r249_xn$NamedParameterPair$2Lrc9b('leftEnd', r249_markMiddle - r249_markExtend * 1.5), new r249_xn$NamedParameterPair$2Lrc9b('rightEnd', r249_markMiddle + r249_markExtend * 1.5), new r249_xn$NamedParameterPair$2Lrc9b('hs', r391_fine)));
        (function _r391_t2() {
            var _r401_t0 = this;
            var r401_currentGlyph = _r401_t0;
            if (!r401_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.21')
                r249_glyphList.pop();
            r401_currentGlyph.include(r249_dispiro(r249_widths.center(r391_fine * 2), r249_flat(r249_markMiddle + r249_markExtend * 0.2, r1_mix(r391_tbot, r391_ttop, 1.5)), r249_curl(r249_markMiddle - r249_markExtend * 0.2, r1_mix(r391_ttop, r391_tbot, 1.5))));
            r249_xn$save$2Lrc5.call(r401_currentGlyph, 'tildeSlashAbove', 842);
            r249_dependencyProfile[r401_currentGlyph.name] = r249_getDependencyProfile(r401_currentGlyph);
            return r401_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.21', function _r391_t3() {
            var _r404_t0 = this;
            _r404_t0.include(r391_currentGlyph, true);
            return _r404_t0.advanceWidth = r391_currentGlyph.advanceWidth;
        })));
        (function _r391_t4() {
            var _r406_t0 = this;
            var r406_currentGlyph = _r406_t0;
            if (!r406_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.22')
                r249_glyphList.pop();
            var r406_r = 0.75 * r249_DOTRADIUS * r391_fine / r249_HALFSTROKE;
            r406_currentGlyph.include(r249_DotAt(r249_markMiddle, r1_mix(r391_tbot, r391_ttop, 1.5), r406_r));
            r406_currentGlyph.include(r249_DotAt(r249_markMiddle, r1_mix(r391_ttop, r391_tbot, 1.5), r406_r));
            r249_xn$save$2Lrc5.call(r406_currentGlyph, 'tildedotdotAbove', 843);
            r249_dependencyProfile[r406_currentGlyph.name] = r249_getDependencyProfile(r406_currentGlyph);
            return r406_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.22', function _r391_t5() {
            var _r410_t0 = this;
            _r410_t0.include(r391_currentGlyph, true);
            return _r410_t0.advanceWidth = r391_currentGlyph.advanceWidth;
        })));
        r249_dependencyProfile[r391_currentGlyph.name] = r249_getDependencyProfile(r391_currentGlyph);
        return r391_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.20', r249_xn$donothing$2Lrc0b)));
    (function _r249_t25() {
        var _r412_t0 = this;
        var r412_currentGlyph = _r412_t0;
        if (!r412_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.23')
            r249_glyphList.pop();
        r412_currentGlyph['set-width'](0);
        r412_currentGlyph['set-anchor']('above', r249_MARK, r249_markMiddle, r249_XH, r249_markMiddle, r249_aboveMarkTop);
        var r412_m = r249_aboveMarkBot;
        var r412_ttop = r1_mix(r412_m, r249_aboveMarkTop, 0.7);
        var r412_tbot = r1_mix(r412_m, r249_aboveMarkBot + r249_markFine / 2, 0.7);
        r412_currentGlyph.include(r249_TildeShape(new r249_xn$NamedParameterPair$2Lrc9b('ttop', r412_ttop), new r249_xn$NamedParameterPair$2Lrc9b('tbot', r412_tbot), new r249_xn$NamedParameterPair$2Lrc9b('leftEnd', r249_markMiddle - r249_markExtend * 1.5), new r249_xn$NamedParameterPair$2Lrc9b('rightEnd', r249_markMiddle + r249_markExtend * 1.5), new r249_xn$NamedParameterPair$2Lrc9b('hs', r249_adviceBlackness(4.5) / 2)));
        var r412_k = function _r412_t2() {
            var _r422_t0 = this;
            var r422_currentGlyph = _r422_t0;
            if (!r422_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.24')
                r249_glyphList.pop();
            r249_dependencyProfile[r422_currentGlyph.name] = r249_getDependencyProfile(r422_currentGlyph);
            return r422_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.24', function _r412_t3() {
            var _r423_t0 = this;
            _r423_t0.include(r412_currentGlyph, true);
            return _r423_t0.advanceWidth = r412_currentGlyph.advanceWidth;
        }));
        (function _r412_t4() {
            var _r425_t0 = this;
            var r425_currentGlyph = _r425_t0;
            if (!r425_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.25')
                r249_glyphList.pop();
            var r425_shift = (r412_ttop - r412_tbot) * 1.2;
            r425_currentGlyph.anchors = {};
            r425_currentGlyph['apply-transform'](r249_Upright());
            r425_currentGlyph['apply-transform'](r249_Translate(0, r425_shift));
            r425_currentGlyph['apply-transform'](r249_Italify());
            r425_currentGlyph.include(r412_k);
            r425_currentGlyph['apply-transform'](r249_Upright());
            r425_currentGlyph['apply-transform'](r249_Translate(0, -0.5 * r425_shift));
            r425_currentGlyph['apply-transform'](r249_Italify());
            r425_currentGlyph['set-anchor']('above', r249_MARK, r249_markMiddle, r249_XH, r249_markMiddle, r249_aboveMarkTop);
            r249_xn$save$2Lrc5.call(r425_currentGlyph, 'dblTildeAbove', 844);
            r249_dependencyProfile[r425_currentGlyph.name] = r249_getDependencyProfile(r425_currentGlyph);
            return r425_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.25', function _r412_t5() {
            var _r435_t0 = this;
            _r435_t0.include(r412_currentGlyph, true);
            return _r435_t0.advanceWidth = r412_currentGlyph.advanceWidth;
        })));
        r249_dependencyProfile[r412_currentGlyph.name] = r249_getDependencyProfile(r412_currentGlyph);
        return r412_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.23', r249_xn$donothing$2Lrc0b)));
    (function _r249_t26() {
        var _r437_t0 = this;
        var r437_currentGlyph = _r437_t0;
        if (!r437_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.26')
            r249_glyphList.pop();
        r437_currentGlyph['set-width'](0);
        r437_currentGlyph.shortName = 'macron';
        r437_currentGlyph['set-anchor']('above', r249_MARK, r249_markMiddle, r249_XH, r249_markMiddle, r249_aboveMarkTop);
        var r437_leftEnd = r249_markMiddle - r249_markExtend * 1.5;
        var r437_rightEnd = r249_markMiddle + r249_markExtend * 1.5;
        r437_currentGlyph.include(r249_dispiro(r249_flat(r437_leftEnd, r249_XH + r249_ACCENT, r249_widths(r249_markHalfStroke, r249_markHalfStroke)), r249_curl(r437_rightEnd, r249_XH + r249_ACCENT)));
        r249_xn$save$2Lrc5.call(r437_currentGlyph, 'macronAbove', 772);
        r249_dependencyProfile[r437_currentGlyph.name] = r249_getDependencyProfile(r437_currentGlyph);
        return r437_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.26', r249_xn$donothing$2Lrc0b)));
    (function _r249_t27() {
        var _r443_t0 = this;
        var r443_currentGlyph = _r443_t0;
        if (!r443_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.27')
            r249_glyphList.pop();
        r443_currentGlyph['set-width'](0);
        r443_currentGlyph.shortName = 'overline';
        r443_currentGlyph['set-anchor']('above', r249_MARK, r249_markMiddle, r249_XH, r249_markMiddle, r249_aboveMarkTop);
        r443_currentGlyph.include(r249_dispiro(r249_flat(r249_SB - r249_WIDTH, r249_XH + r249_ACCENT, r249_widths(r249_markHalfStroke, r249_markHalfStroke)), r249_curl(r249_RIGHTSB - r249_WIDTH, r249_XH + r249_ACCENT)));
        r249_xn$save$2Lrc5.call(r443_currentGlyph, 'overlineAbove', 773);
        r249_dependencyProfile[r443_currentGlyph.name] = r249_getDependencyProfile(r443_currentGlyph);
        return r443_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.27', r249_xn$donothing$2Lrc0b)));
    (function _r249_t28() {
        var _r449_t0 = this;
        var r449_currentGlyph = _r449_t0;
        if (!r449_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.28')
            r249_glyphList.pop();
        r449_currentGlyph['set-width'](0);
        r449_currentGlyph['set-anchor']('above', r249_MARK, r249_markMiddle, r249_XH, r249_markMiddle, r249_aboveMarkTop);
        var r449_boxsw = Math.min(r249_markFine * 2, (r249_aboveMarkTop - r249_aboveMarkBot) / 3);
        r449_currentGlyph.include(r249_HBarBottom(r249_SB - r249_WIDTH, r249_RIGHTSB - r249_WIDTH, r249_aboveMarkBot, r449_boxsw));
        r449_currentGlyph.include(r249_HBarTop(r249_SB - r249_WIDTH, r249_RIGHTSB - r249_WIDTH, r249_aboveMarkTop, r449_boxsw));
        r249_xn$save$2Lrc5.call(r449_currentGlyph, 'dblOverlineAbove', 831);
        r249_dependencyProfile[r449_currentGlyph.name] = r249_getDependencyProfile(r449_currentGlyph);
        return r449_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.28', r249_xn$donothing$2Lrc0b)));
    (function _r249_t29() {
        var _r456_t0 = this;
        var r456_currentGlyph = _r456_t0;
        if (!r456_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.29')
            r249_glyphList.pop();
        r456_currentGlyph['set-width'](0);
        r456_currentGlyph.shortName = 'breve';
        r456_currentGlyph['set-anchor']('above', r249_MARK, r249_markMiddle, r249_XH, r249_markMiddle, r249_aboveMarkTop);
        var r456_leftEnd = r249_markMiddle - r249_markExtend * 1.2;
        var r456_rightEnd = r249_markMiddle + r249_markExtend * 1.2;
        r456_currentGlyph.include(r249_dispiro(r249_g4.down.start(r456_leftEnd, r249_aboveMarkTop, r249_widths.heading(r249_markHalfStroke, r249_markHalfStroke, r249_DOWNWARD)), r249_arcvh(), r249_g4.right.mid(r249_markMiddle, r249_aboveMarkBot + r249_markHalfStroke, r249_heading(r249_RIGHTWARD)), r249_archv(), r249_g4.up.end(r456_rightEnd, r249_aboveMarkTop, r249_heading(r249_UPWARD))));
        r249_xn$save$2Lrc5.call(r456_currentGlyph, 'breveAbove', 774);
        r249_dependencyProfile[r456_currentGlyph.name] = r249_getDependencyProfile(r456_currentGlyph);
        return r456_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.29', r249_xn$donothing$2Lrc0b)));
    (function _r249_t30() {
        var _r462_t0 = this;
        var r462_currentGlyph = _r462_t0;
        if (!r462_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.30')
            r249_glyphList.pop();
        r462_currentGlyph['set-width'](0);
        r462_currentGlyph.shortName = 'arch';
        r462_currentGlyph['set-anchor']('above', r249_MARK, r249_markMiddle, r249_XH, r249_markMiddle, r249_aboveMarkTop);
        var r462_leftEnd = r249_markMiddle - r249_markExtend * 1.2;
        var r462_rightEnd = r249_markMiddle + r249_markExtend * 1.2;
        r462_currentGlyph.include(r249_dispiro(r249_g4.up.start(r462_leftEnd, r249_aboveMarkBot, r249_widths.heading(r249_markHalfStroke, r249_markHalfStroke, r249_UPWARD)), r249_arcvh(), r249_g4.right.mid(r249_markMiddle, r249_aboveMarkTop - r249_markHalfStroke, r249_heading(r249_RIGHTWARD)), r249_archv(), r249_g4.down.end(r462_rightEnd, r249_aboveMarkBot, r249_heading(r249_DOWNWARD))));
        r249_xn$save$2Lrc5.call(r462_currentGlyph, 'archAbove', 785);
        r249_dependencyProfile[r462_currentGlyph.name] = r249_getDependencyProfile(r462_currentGlyph);
        return r462_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.30', r249_xn$donothing$2Lrc0b)));
    (function _r249_t31() {
        var _r468_t0 = this;
        var r468_currentGlyph = _r468_t0;
        if (!r468_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.31')
            r249_glyphList.pop();
        r468_currentGlyph['set-width'](0);
        r468_currentGlyph.shortName = 'hook';
        r468_currentGlyph['set-anchor']('above', r249_MARK, r249_markMiddle, r249_XH, r249_markMiddle, r249_aboveMarkTop);
        var r468_fine = Math.min(r249_markFine, (r249_aboveMarkTop - r249_aboveMarkBot) * 0.2);
        var r468_hookBot = r249_aboveMarkBot - r468_fine / 2;
        var r468_hookTop = r1_mix(r249_aboveMarkBot, r249_aboveMarkTop, 0.9) + r468_fine / 2;
        r468_currentGlyph.include(r249_dispiro(r249_widths.lhs(r468_fine * 2), r249_flat(r249_markMiddle - r468_fine * r249_HVCONTRAST, r468_hookBot, r249_heading(r249_RIGHTWARD)), r249_curl(r249_markMiddle + r468_fine * 0.4, r468_hookBot, r249_heading(r249_RIGHTWARD)), r249_archv(), r249_g4.up.mid(r249_markMiddle + r249_markExtend - r249_O, r1_mix(r468_hookBot, r468_hookTop, r249_SMOOTHB / (r249_SMOOTHB + r249_SMOOTHA)), r249_heading(r249_UPWARD)), r249_arcvh(), r249_flat(r249_markMiddle + r468_fine * 0.4, r468_hookTop, r249_heading(r249_LEFTWARD)), r249_curl(r249_markMiddle - r249_markExtend + r468_fine, r468_hookTop, r249_heading(r249_LEFTWARD))));
        r249_xn$save$2Lrc5.call(r468_currentGlyph, 'hookAbove', 777);
        r249_dependencyProfile[r468_currentGlyph.name] = r249_getDependencyProfile(r468_currentGlyph);
        return r468_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.31', r249_xn$donothing$2Lrc0b)));
    (function _r249_t32() {
        var _r474_t0 = this;
        var r474_currentGlyph = _r474_t0;
        if (!r474_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.32')
            r249_glyphList.pop();
        r474_currentGlyph['set-width'](0);
        r474_currentGlyph.shortName = 'dblgrave';
        r474_currentGlyph['set-anchor']('above', r249_MARK, r249_markMiddle, r249_XH, r249_markMiddle, r249_aboveMarkTop);
        var r474_m1 = r249_markMiddle - r249_markExtend * 0.85;
        var r474_m2 = r249_markMiddle + r249_markExtend * 0.85;
        r474_currentGlyph.include(r249_dispiro(r249_flat(r474_m1 + r249_markStress, r249_aboveMarkBot, r249_widths(r249_markFine, r249_markFine)), r249_curl(r474_m1 - r249_markExtend, r249_aboveMarkTop, r249_widths(r249_markStress, r249_markStress))));
        r474_currentGlyph.include(r249_dispiro(r249_flat(r474_m2 + r249_markStress, r249_aboveMarkBot, r249_widths(r249_markFine, r249_markFine)), r249_curl(r474_m2 - r249_markExtend, r249_aboveMarkTop, r249_widths(r249_markStress, r249_markStress))));
        r249_xn$save$2Lrc5.call(r474_currentGlyph, 'doubleGraveAbove', 783);
        r249_dependencyProfile[r474_currentGlyph.name] = r249_getDependencyProfile(r474_currentGlyph);
        return r474_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.32', r249_xn$donothing$2Lrc0b)));
    (function _r249_t33() {
        var _r481_t0 = this;
        var r481_currentGlyph = _r481_t0;
        if (!r481_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.33')
            r249_glyphList.pop();
        r481_currentGlyph['set-width'](0);
        r481_currentGlyph.shortName = 'dblacute';
        r481_currentGlyph['set-anchor']('above', r249_MARK, r249_markMiddle, r249_XH, r249_markMiddle, r249_aboveMarkTop);
        var r481_m1 = r249_markMiddle - r249_markExtend * 0.85;
        var r481_m2 = r249_markMiddle + r249_markExtend * 0.85;
        r481_currentGlyph.include(r249_dispiro(r249_flat(r481_m1 - r249_markStress, r249_aboveMarkBot, r249_widths(r249_markFine, r249_markFine)), r249_curl(r481_m1 + r249_markExtend, r249_aboveMarkTop, r249_widths(r249_markStress, r249_markStress))));
        r481_currentGlyph.include(r249_dispiro(r249_flat(r481_m2 - r249_markStress, r249_aboveMarkBot, r249_widths(r249_markFine, r249_markFine)), r249_curl(r481_m2 + r249_markExtend, r249_aboveMarkTop, r249_widths(r249_markStress, r249_markStress))));
        r249_xn$save$2Lrc5.call(r481_currentGlyph, 'doubleAcuteAbove', 779);
        r249_dependencyProfile[r481_currentGlyph.name] = r249_getDependencyProfile(r481_currentGlyph);
        return r481_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.33', r249_xn$donothing$2Lrc0b)));
    (function _r249_t34() {
        var _r488_t0 = this;
        var r488_currentGlyph = _r488_t0;
        if (!r488_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.34')
            r249_glyphList.pop();
        r488_currentGlyph['set-width'](0);
        r488_currentGlyph.shortName = 'comma';
        r488_currentGlyph['set-anchor']('above', r249_MARK, r249_markMiddle, r249_XH, r249_markMiddle, r249_aboveMarkTop);
        var r488_radius = r249_commaAboveRadius;
        r488_currentGlyph.include(r249_Ring(r249_aboveMarkTop + r249_commaOvershoot, r249_aboveMarkTop - r488_radius * 2 + r249_commaOvershoot, r249_markMiddle - r488_radius, r249_markMiddle + r488_radius));
        r488_currentGlyph.include(r249_dispiro(r249_widths.rhs(Math.min(r488_radius, r249_markFine * r1_linreg(16, 2, 90, 1.75, r249_markHalfStroke * 2))), r249_straight.down.start(r249_markMiddle + r488_radius, r249_aboveMarkTop - r488_radius + r249_commaOvershoot), r249_quadcontrols(0, 0.6), r249_g4(r1_mix(r249_markMiddle, r249_markMiddle - r488_radius, 0.2), r249_aboveMarkBot - r488_radius - r249_commaOvershoot2)));
        r488_currentGlyph['apply-transform'](r249_Upright());
        r488_currentGlyph['apply-transform'](r249_Translate(0, r249_DOTRADIUS * 0.3));
        r488_currentGlyph['apply-transform'](r249_Italify());
        r249_xn$save$2Lrc5.call(r488_currentGlyph, 'commaAbove', 787);
        r249_dependencyProfile[r488_currentGlyph.name] = r249_getDependencyProfile(r488_currentGlyph);
        return r488_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.34', r249_xn$donothing$2Lrc0b)));
    (function _r249_t35() {
        var _r498_t0 = this;
        var r498_currentGlyph = _r498_t0;
        if (!r498_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.35')
            r249_glyphList.pop();
        r498_currentGlyph['set-width'](0);
        r498_currentGlyph.shortName = 'turnComma';
        r249_includeGlyphPart(r498_currentGlyph, r249_glyphs, 'commaAbove');
        r498_currentGlyph.include(r249_FlipAround(r249_markMiddle, r1_mix(r249_aboveMarkTop, r249_aboveMarkBot - r249_commaAboveRadius, 0.5) + r249_DOTRADIUS * 0.3 + r249_commaOvershoot / 2));
        r498_currentGlyph['set-anchor']('above', r249_MARK, r249_markMiddle, r249_XH, r249_markMiddle, r249_aboveMarkTop);
        r249_xn$save$2Lrc5.call(r498_currentGlyph, 'turnCommaAbove', 786);
        r249_dependencyProfile[r498_currentGlyph.name] = r249_getDependencyProfile(r498_currentGlyph);
        return r498_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.35', r249_xn$donothing$2Lrc0b)));
    (function _r249_t36() {
        var _r505_t0 = this;
        var r505_currentGlyph = _r505_t0;
        if (!r505_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.36')
            r249_glyphList.pop();
        r505_currentGlyph['set-width'](0);
        r505_currentGlyph.shortName = 'revComma';
        r505_currentGlyph['set-anchor']('above', r249_MARK, r249_markMiddle, r249_XH, r249_markMiddle, r249_aboveMarkTop);
        var r505_radius = r249_commaAboveRadius;
        r505_currentGlyph.include(r249_Ring(r249_aboveMarkTop + r249_commaOvershoot, r249_aboveMarkTop - r505_radius * 2 + r249_commaOvershoot, r249_markMiddle - r505_radius, r249_markMiddle + r505_radius));
        r505_currentGlyph.include(r249_dispiro(r249_widths.lhs(Math.min(r505_radius, r249_markFine * r1_linreg(16, 2, 90, 1.75, r249_markHalfStroke * 2))), r249_straight.down.start(r249_markMiddle - r505_radius, r249_aboveMarkTop - r505_radius + r249_commaOvershoot), r249_quadcontrols(0, 0.6), r249_g4(r1_mix(r249_markMiddle, r249_markMiddle + r505_radius, 0.2), r249_aboveMarkBot - r505_radius - r249_commaOvershoot2)));
        r505_currentGlyph['apply-transform'](r249_Upright());
        r505_currentGlyph['apply-transform'](r249_Translate(0, r249_DOTRADIUS * 0.3));
        r505_currentGlyph['apply-transform'](r249_Italify());
        r249_xn$save$2Lrc5.call(r505_currentGlyph, 'revCommaAbove', 788);
        r249_dependencyProfile[r505_currentGlyph.name] = r249_getDependencyProfile(r505_currentGlyph);
        return r505_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.36', r249_xn$donothing$2Lrc0b)));
    (function _r249_t37() {
        var _r515_t0 = this;
        var r515_currentGlyph = _r515_t0;
        if (!r515_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.37')
            r249_glyphList.pop();
        r515_currentGlyph['set-width'](0);
        r515_currentGlyph['set-anchor']('above', r249_MARK, r249_markMiddle, r249_XH, r249_markMiddle, r249_aboveMarkTop);
        r515_currentGlyph.include(r249_VBar(r249_markMiddle, r249_aboveMarkBot, r249_aboveMarkTop, r249_markHalfStroke * 2));
        r249_xn$save$2Lrc5.call(r515_currentGlyph, 'barAbove', 781);
        r249_dependencyProfile[r515_currentGlyph.name] = r249_getDependencyProfile(r515_currentGlyph);
        return r515_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.37', r249_xn$donothing$2Lrc0b)));
    (function _r249_t38() {
        var _r521_t0 = this;
        var r521_currentGlyph = _r521_t0;
        if (!r521_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.38')
            r249_glyphList.pop();
        r521_currentGlyph['set-width'](0);
        r521_currentGlyph['set-anchor']('above', r249_MARK, r249_markMiddle, r249_XH, r249_markMiddle, r249_aboveMarkTop);
        r521_currentGlyph.include(r249_VBar(r249_markMiddle - r249_markExtend * 0.75, r249_aboveMarkBot, r249_aboveMarkTop, r249_markHalfStroke * 2));
        r521_currentGlyph.include(r249_VBar(r249_markMiddle + r249_markExtend * 0.75, r249_aboveMarkBot, r249_aboveMarkTop, r249_markHalfStroke * 2));
        r249_xn$save$2Lrc5.call(r521_currentGlyph, 'dblBarAbove', 782);
        r249_dependencyProfile[r521_currentGlyph.name] = r249_getDependencyProfile(r521_currentGlyph);
        return r521_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.38', r249_xn$donothing$2Lrc0b)));
    (function _r249_t39() {
        var _r528_t0 = this;
        var r528_currentGlyph = _r528_t0;
        if (!r528_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.39')
            r249_glyphList.pop();
        r528_currentGlyph['set-width'](0);
        r528_currentGlyph['set-anchor']('above', r249_MARK, r249_markMiddle, r249_XH, r249_markMiddle, r249_aboveMarkTop);
        r528_currentGlyph.include(r249_VBar(r249_markMiddle - r249_markExtend, r249_aboveMarkBot, r249_aboveMarkTop, r249_markFine * 2));
        r528_currentGlyph.include(r249_VBar(r249_markMiddle + r249_markExtend, r249_aboveMarkBot, r249_aboveMarkTop, r249_markFine * 2));
        r528_currentGlyph.include(r249_HBarTop(r249_markMiddle - r249_markExtend, r249_markMiddle + r249_markExtend, r249_aboveMarkTop, r249_markFine * 2));
        r249_xn$save$2Lrc5.call(r528_currentGlyph, 'bridgeAbove', 838);
        r249_dependencyProfile[r528_currentGlyph.name] = r249_getDependencyProfile(r528_currentGlyph);
        return r528_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.39', r249_xn$donothing$2Lrc0b)));
    (function _r249_t40() {
        var _r536_t0 = this;
        var r536_currentGlyph = _r536_t0;
        if (!r536_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.40')
            r249_glyphList.pop();
        r536_currentGlyph['set-width'](0);
        r536_currentGlyph['set-anchor']('above', r249_MARK, r249_markMiddle, r249_XH, r249_markMiddle, r249_aboveMarkTop);
        r536_currentGlyph.include(r249_dispiro(r249_widths.center(r249_markFine * 2), r249_g2(r249_markMiddle - r249_markFine * 0.5, r249_aboveMarkBot, r249_heading(r249_UPWARD)), r249_alsothruthem([
            [
                0.9,
                0.36
            ],
            [
                0.1,
                0.64
            ]
        ], r249_heading(r249_UPWARD)), r249_g2(r249_markMiddle + r249_markFine * 0.5, r249_aboveMarkTop, r249_heading(r249_UPWARD))));
        r249_xn$save$2Lrc5.call(r536_currentGlyph, 'yerikAbove', 830);
        r249_dependencyProfile[r536_currentGlyph.name] = r249_getDependencyProfile(r536_currentGlyph);
        return r536_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.40', r249_xn$donothing$2Lrc0b)));
    (function _r249_t41() {
        var _r542_t0 = this;
        var r542_currentGlyph = _r542_t0;
        if (!r542_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.41')
            r249_glyphList.pop();
        r542_currentGlyph['set-width'](0);
        var r542_fine = r249_adviceBlackness(6.5);
        var r542_yc = r249_XH + r249_ACCENT;
        var r542_radius = Math.max(r249_markExtend - r249_DOTRADIUS, r542_fine * 1.35);
        r542_currentGlyph.include(r249_dispiro(r249_widths.rhs(Math.min(r249_markHalfStroke * 2, r542_fine * 1.25)), r249_g4.down.start(r249_markMiddle - r542_radius, r542_yc, r249_heading(r249_DOWNWARD)), r249_arcvh(), r249_g4.right.mid(r249_markMiddle, r542_yc - r542_radius), r249_archv(), r249_g4.up.end(r249_markMiddle + r542_radius, r542_yc, r249_heading(r249_UPWARD))));
        r542_currentGlyph.include(r249_DotAt(r249_markMiddle, r249_XH + r249_ACCENT, r542_fine));
        r542_currentGlyph['apply-transform'](r249_Upright());
        r542_currentGlyph['apply-transform'](r249_Translate(0, r542_fine * 0.5));
        r542_currentGlyph['apply-transform'](r249_Italify());
        r542_currentGlyph['set-anchor']('above', r249_MARK, r249_markMiddle, r249_XH, r249_markMiddle, r249_aboveMarkTop);
        r249_xn$save$2Lrc5.call(r542_currentGlyph, 'candrabinduAbove', 784);
        r542_currentGlyph.include(r249_FlipAround(r249_markMiddle, r249_XH + r249_ACCENT));
        r249_xn$save$2Lrc5.call(r542_currentGlyph, 'turncandrabinduAbove', 850);
        r249_dependencyProfile[r542_currentGlyph.name] = r249_getDependencyProfile(r542_currentGlyph);
        return r542_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.41', r249_xn$donothing$2Lrc0b)));
    (function _r249_t42() {
        var _r554_t0 = this;
        var r554_currentGlyph = _r554_t0;
        if (!r554_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.42')
            r249_glyphList.pop();
        r554_currentGlyph['set-width'](0);
        r554_currentGlyph['set-anchor']('above', r249_MARK, r249_markMiddle, r249_XH, r249_markMiddle, r249_aboveMarkTop);
        r554_currentGlyph.include(r249_dispiro(r249_flat(r249_markMiddle + r249_markStress, r249_aboveMarkBot - r249_markFine * 0.5, r249_widths(r249_markFine, r249_markFine)), r249_curl(r249_markMiddle - r249_markExtend * 0.5, r249_aboveMarkTop + r249_markStress * 0.25, r249_widths(r249_markStress, r249_markStress))));
        r249_xn$save$2Lrc5.call(r554_currentGlyph, 'variaAbove', 832);
        r249_dependencyProfile[r554_currentGlyph.name] = r249_getDependencyProfile(r554_currentGlyph);
        return r554_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.42', r249_xn$donothing$2Lrc0b)));
    (function _r249_t43() {
        var _r560_t0 = this;
        var r560_currentGlyph = _r560_t0;
        if (!r560_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.43')
            r249_glyphList.pop();
        r560_currentGlyph['set-width'](0);
        r560_currentGlyph['set-anchor']('above', r249_MARK, r249_markMiddle, r249_XH, r249_markMiddle, r249_aboveMarkTop);
        r560_currentGlyph.include(r249_dispiro(r249_flat(r249_markMiddle - r249_markStress, r249_aboveMarkBot - r249_markFine * 0.5, r249_widths(r249_markFine, r249_markFine)), r249_curl(r249_markMiddle + r249_markExtend * 0.5, r249_aboveMarkTop + r249_markStress * 0.25, r249_widths(r249_markStress, r249_markStress))));
        r249_xn$save$2Lrc5.call(r560_currentGlyph, 'oxiaAbove', 833);
        r249_dependencyProfile[r560_currentGlyph.name] = r249_getDependencyProfile(r560_currentGlyph);
        return r560_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.43', r249_xn$donothing$2Lrc0b)));
    (function _r249_t44() {
        var _r566_t0 = this;
        var r566_currentGlyph = _r566_t0;
        if (!r566_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.44')
            r249_glyphList.pop();
        r566_currentGlyph['set-width'](0);
        r566_currentGlyph.shortName = 'perisp';
        r249_includeGlyphPart(r566_currentGlyph, r249_glyphs, 'archAbove');
        r566_currentGlyph['set-anchor']('above', r249_MARK, r249_markMiddle, r249_XH, r249_markMiddle, r249_aboveMarkTop);
        r249_xn$save$2Lrc5.call(r566_currentGlyph, 'perispomeniAbove', 834);
        r249_dependencyProfile[r566_currentGlyph.name] = r249_getDependencyProfile(r566_currentGlyph);
        return r566_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.44', r249_xn$donothing$2Lrc0b)));
    r249_alias('koronisAbove', 835, 'commaAbove');
    (function _r249_t45() {
        var _r572_t0 = this;
        var r572_currentGlyph = _r572_t0;
        if (!r572_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.45')
            r249_glyphList.pop();
        r572_currentGlyph['set-width'](0);
        r572_currentGlyph['set-anchor']('above', r249_MARK, r249_markMiddle, r249_XH, r249_markMiddle, r249_aboveMarkTop);
        r572_currentGlyph.include(r249_dispiro(r249_flat(r249_markMiddle - r249_markExtend, r249_aboveMarkTop, r249_widths(r249_markFine, r249_markFine)), r249_curl(r249_markMiddle + r249_markExtend, r249_aboveMarkBot)));
        r572_currentGlyph.include(r249_dispiro(r249_flat(r249_markMiddle - r249_markExtend, r249_aboveMarkBot, r249_widths(r249_markFine, r249_markFine)), r249_curl(r249_markMiddle + r249_markExtend, r249_aboveMarkTop)));
        r249_xn$save$2Lrc5.call(r572_currentGlyph, 'crossAbove', 829);
        r249_dependencyProfile[r572_currentGlyph.name] = r249_getDependencyProfile(r572_currentGlyph);
        return r572_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.45', r249_xn$donothing$2Lrc0b)));
    (function _r249_t46() {
        var _r579_t0 = this;
        var r579_currentGlyph = _r579_t0;
        if (!r579_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.46')
            r249_glyphList.pop();
        r579_currentGlyph['set-width'](0);
        r579_currentGlyph['set-anchor']('above', r249_MARK, r249_markMiddle, r249_XH, r249_markMiddle, r249_aboveMarkTop);
        var r579_top = r249_aboveMarkTop;
        var r579_bot = r249_aboveMarkBot;
        var r579_exp = Math.sqrt(1 + (r579_top - r579_bot) / r249_markExtend * (r579_top - r579_bot) / r249_markExtend);
        r579_currentGlyph.include(r249_dispiro(r249_widths.center(r249_markFine * 2), r249_flat(r249_markMiddle + r249_markExtend, r579_top), r249_curl(r249_markMiddle - r249_markExtend, r1_mix(r579_top, r579_bot, 0.5), r249_widths.heading(r249_markFine / 2 * r579_exp, r249_markFine / 2 * r579_exp, r249_LEFTWARD))));
        r579_currentGlyph.include(r249_dispiro(r249_widths.center(r249_markFine * 2), r249_flat(r249_markMiddle + r249_markExtend, r579_bot), r249_curl(r249_markMiddle - r249_markExtend, r1_mix(r579_top, r579_bot, 0.5), r249_widths.heading(r249_markFine / 2 * r579_exp, r249_markFine / 2 * r579_exp, r249_LEFTWARD))));
        r249_xn$save$2Lrc5.call(r579_currentGlyph, 'lessAbove', 7678);
        r579_currentGlyph.include(r249_FlipAround(r249_markMiddle, r1_mix(r579_top, r579_bot, 0.5)));
        r249_xn$save$2Lrc5.call(r579_currentGlyph, 'greaterAbove', 848);
        r249_dependencyProfile[r579_currentGlyph.name] = r249_getDependencyProfile(r579_currentGlyph);
        return r579_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.46', r249_xn$donothing$2Lrc0b)));
    (function _r249_t47() {
        var _r588_t0 = this;
        var r588_currentGlyph = _r588_t0;
        if (!r588_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.47')
            r249_glyphList.pop();
        r588_currentGlyph['set-width'](0);
        r588_currentGlyph['set-anchor']('below', r249_MARK, r249_markMiddle, 0, r249_markMiddle, r249_belowMarkBot);
        var r588_fine = Math.min(r249_markHalfStroke, (r249_belowMarkTop - r249_belowMarkBot) * 0.25);
        var r588_cedillaTop = r249_belowMarkTop + r588_fine * 0.85;
        var r588_cedillaBot = r249_belowMarkBot;
        r588_currentGlyph.include(r249_dispiro(r249_flat(r249_markMiddle - r588_fine * r249_HVCONTRAST, r588_cedillaTop, r249_widths.heading(0, r588_fine * 2, r249_RIGHTWARD)), r249_curl(r249_markMiddle, r588_cedillaTop, r249_heading(r249_RIGHTWARD)), r249_archv(), r249_g4(r249_markMiddle + r249_markExtend - r249_O, r1_mix(r588_cedillaTop, r588_cedillaBot, 0.5), r249_heading(r249_DOWNWARD)), r249_arcvh(), r249_flat(r249_markMiddle, r588_cedillaBot, r249_heading(r249_LEFTWARD)), r249_curl(r249_markMiddle - r249_markExtend, r588_cedillaBot, r249_heading(r249_LEFTWARD))));
        r588_currentGlyph.include(r249_VBar(r249_markMiddle, 0, r588_cedillaTop - r588_fine, r588_fine * 2));
        r249_xn$save$2Lrc5.call(r588_currentGlyph, 'cedillaBelow', 807);
        r249_dependencyProfile[r588_currentGlyph.name] = r249_getDependencyProfile(r588_currentGlyph);
        return r588_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.47', r249_xn$donothing$2Lrc0b)));
    (function _r249_t48() {
        var _r595_t0 = this;
        var r595_currentGlyph = _r595_t0;
        if (!r595_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.48')
            r249_glyphList.pop();
        r595_currentGlyph['set-width'](0);
        var r595_fine = r249_markHalfStroke * r1_linreg(16, 1, 90, 0.25, r249_markHalfStroke * 2);
        var r595_ogonekBot = r1_mix(r249_belowMarkTop, r249_belowMarkBot, 0.75) + r249_markStress * 2;
        var r595_ogonekLeft = r249_markMiddle + r595_ogonekBot * 0.5;
        var r595_ogonekRight = r249_markMiddle + r249_markExtend * 0.85;
        r595_currentGlyph['set-anchor']('below', r249_MARK, r249_markMiddle, 0, r249_markMiddle, r249_belowMarkBot);
        r595_currentGlyph.include(r249_dispiro(r249_g4.left.start(r249_markMiddle, r249_O, r249_widths(0, r595_fine * 2)), r249_g4(r595_ogonekLeft, r1_mix(r249_O, r595_ogonekBot, 0.5), r249_widths(0, r1_mix(r595_fine, r249_markStress, 0.75) * 2)), r249_flat(r249_markMiddle + r249_markExtend * 0.25, r595_ogonekBot, r249_widths(0, r249_markStress * 2)), r249_curl(r595_ogonekRight, r595_ogonekBot, r249_heading(r249_RIGHTWARD))));
        r249_xn$save$2Lrc5.call(r595_currentGlyph, 'ogonekBelow', 808);
        r249_dependencyProfile[r595_currentGlyph.name] = r249_getDependencyProfile(r595_currentGlyph);
        return r595_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.48', r249_xn$donothing$2Lrc0b)));
    (function _r249_t49() {
        var _r601_t0 = this;
        var r601_currentGlyph = _r601_t0;
        if (!r601_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.49')
            r249_glyphList.pop();
        r601_currentGlyph['set-width'](0);
        r249_includeGlyphPart(r601_currentGlyph, r249_glyphs, 'ogonekBelow');
        var r601_ogonekBot = r1_mix(r249_belowMarkTop, r249_belowMarkBot, 0.75) + r249_markStress * 2;
        var r601_ogonekRight = r249_markMiddle + r249_markExtend * 0.85;
        r601_currentGlyph['set-anchor']('trailing', r249_MARK, r249_markMiddle, 0, r601_ogonekRight, r601_ogonekBot);
        r249_xn$save$2Lrc5.call(r601_currentGlyph, 'ogonekTR');
        r249_dependencyProfile[r601_currentGlyph.name] = r249_getDependencyProfile(r601_currentGlyph);
        return r601_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.49', r249_xn$donothing$2Lrc0b)));
    (function _r249_t50() {
        var _r607_t0 = this;
        var r607_currentGlyph = _r607_t0;
        if (!r607_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.50')
            r249_glyphList.pop();
        r607_currentGlyph['set-width'](0);
        r607_currentGlyph.shortName = 'iota';
        r607_currentGlyph['set-anchor']('below', r249_MARK, r249_markMiddle, 0, r249_markMiddle, r249_belowMarkBot);
        r607_currentGlyph.include(r249_VBar(r249_markMiddle, r249_belowMarkBot, r249_belowMarkTop, r249_markHalfStroke * 2));
        r249_xn$save$2Lrc5.call(r607_currentGlyph, 'iotaBelow', 837);
        r249_dependencyProfile[r607_currentGlyph.name] = r249_getDependencyProfile(r607_currentGlyph);
        return r607_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.50', r249_xn$donothing$2Lrc0b)));
    (function _r249_t51() {
        var _r613_t0 = this;
        var r613_currentGlyph = _r613_t0;
        if (!r613_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.51')
            r249_glyphList.pop();
        r613_currentGlyph['set-width'](0);
        r613_currentGlyph['set-anchor']('lf', r249_MARK, r249_markMiddle, 0, r249_markMiddle, r249_belowMarkBot);
        r613_currentGlyph.include(r249_VBar(r249_markMiddle, r249_belowMarkBot, r249_belowMarkTop, r249_markHalfStroke * 2));
        r249_xn$save$2Lrc5.call(r613_currentGlyph, 'iotaLF');
        r249_dependencyProfile[r613_currentGlyph.name] = r249_getDependencyProfile(r613_currentGlyph);
        return r613_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.51', r249_xn$donothing$2Lrc0b)));
    (function _r249_t52() {
        var _r619_t0 = this;
        var r619_currentGlyph = _r619_t0;
        if (!r619_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.52')
            r249_glyphList.pop();
        r619_currentGlyph['set-width'](0);
        r619_currentGlyph['set-anchor']('below', r249_MARK, r249_markMiddle, 0, r249_markMiddle, r249_belowMarkBot);
        r619_currentGlyph.include(r249_VBar(r249_markMiddle, r249_belowMarkBot, r249_belowMarkTop, r249_markFine * 2));
        r619_currentGlyph.include(r249_HBarBottom(r249_markMiddle - r249_markExtend, r249_markMiddle + r249_markExtend, r249_belowMarkBot, r249_markFine * 2));
        r249_xn$save$2Lrc5.call(r619_currentGlyph, 'uptackBelow', 797);
        r249_dependencyProfile[r619_currentGlyph.name] = r249_getDependencyProfile(r619_currentGlyph);
        return r619_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.52', r249_xn$donothing$2Lrc0b)));
    (function _r249_t53() {
        var _r626_t0 = this;
        var r626_currentGlyph = _r626_t0;
        if (!r626_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.53')
            r249_glyphList.pop();
        r626_currentGlyph['set-width'](0);
        r626_currentGlyph['set-anchor']('below', r249_MARK, r249_markMiddle, 0, r249_markMiddle, r249_belowMarkBot);
        r626_currentGlyph.include(r249_VBar(r249_markMiddle, r249_belowMarkBot, r249_belowMarkTop, r249_markFine * 2));
        r626_currentGlyph.include(r249_HBarTop(r249_markMiddle - r249_markExtend, r249_markMiddle + r249_markExtend, r249_belowMarkTop, r249_markFine * 2));
        r249_xn$save$2Lrc5.call(r626_currentGlyph, 'downtackBelow', 798);
        r249_dependencyProfile[r626_currentGlyph.name] = r249_getDependencyProfile(r626_currentGlyph);
        return r626_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.53', r249_xn$donothing$2Lrc0b)));
    (function _r249_t54() {
        var _r633_t0 = this;
        var r633_currentGlyph = _r633_t0;
        if (!r633_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.54')
            r249_glyphList.pop();
        r633_currentGlyph['set-width'](0);
        r633_currentGlyph['set-anchor']('below', r249_MARK, r249_markMiddle, 0, r249_markMiddle, r249_belowMarkBot);
        r633_currentGlyph.include(r249_VBar(r249_markMiddle + r249_markExtend, r249_belowMarkBot, r249_belowMarkTop, r249_markFine * 2));
        r633_currentGlyph.include(r249_HBar(r249_markMiddle - r249_markExtend, r249_markMiddle + r249_markExtend, r1_mix(r249_belowMarkTop, r249_belowMarkBot, 0.5), r249_markFine * 2));
        r249_xn$save$2Lrc5.call(r633_currentGlyph, 'lefttackBelow', 792);
        r249_dependencyProfile[r633_currentGlyph.name] = r249_getDependencyProfile(r633_currentGlyph);
        return r633_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.54', r249_xn$donothing$2Lrc0b)));
    (function _r249_t55() {
        var _r640_t0 = this;
        var r640_currentGlyph = _r640_t0;
        if (!r640_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.55')
            r249_glyphList.pop();
        r640_currentGlyph['set-width'](0);
        r640_currentGlyph['set-anchor']('below', r249_MARK, r249_markMiddle, 0, r249_markMiddle, r249_belowMarkBot);
        r640_currentGlyph.include(r249_VBar(r249_markMiddle - r249_markExtend, r249_belowMarkBot, r249_belowMarkTop, r249_markFine * 2));
        r640_currentGlyph.include(r249_HBar(r249_markMiddle - r249_markExtend, r249_markMiddle + r249_markExtend, r1_mix(r249_belowMarkTop, r249_belowMarkBot, 0.5), r249_markFine * 2));
        r249_xn$save$2Lrc5.call(r640_currentGlyph, 'righttackBelow', 793);
        r249_dependencyProfile[r640_currentGlyph.name] = r249_getDependencyProfile(r640_currentGlyph);
        return r640_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.55', r249_xn$donothing$2Lrc0b)));
    (function _r249_t56() {
        var _r647_t0 = this;
        var r647_currentGlyph = _r647_t0;
        if (!r647_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.56')
            r249_glyphList.pop();
        r647_currentGlyph['set-width'](0);
        r647_currentGlyph['set-anchor']('below', r249_MARK, r249_markMiddle, 0, r249_markMiddle, r249_belowMarkBot);
        r647_currentGlyph.include(r249_VBar(r249_markMiddle + r249_markExtend, r249_belowMarkBot, r249_belowMarkTop, r249_markFine * 2));
        r647_currentGlyph.include(r249_HBarTop(r249_markMiddle - r249_markExtend, r249_markMiddle + r249_markExtend, r249_belowMarkTop, r249_markFine * 2));
        r249_xn$save$2Lrc5.call(r647_currentGlyph, 'leftAngleBelow', 841);
        r249_dependencyProfile[r647_currentGlyph.name] = r249_getDependencyProfile(r647_currentGlyph);
        return r647_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.56', r249_xn$donothing$2Lrc0b)));
    (function _r249_t57() {
        var _r654_t0 = this;
        var r654_currentGlyph = _r654_t0;
        if (!r654_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.57')
            r249_glyphList.pop();
        r654_currentGlyph['set-width'](0);
        r654_currentGlyph['set-anchor']('below', r249_MARK, r249_markMiddle, 0, r249_markMiddle, r249_belowMarkBot);
        r654_currentGlyph.include(r249_VBar(r249_markMiddle, r249_belowMarkBot, r249_belowMarkTop, r249_markFine * 2));
        r654_currentGlyph.include(r249_HBar(r249_markMiddle - r249_markExtend, r249_markMiddle + r249_markExtend, r1_mix(r249_belowMarkTop, r249_belowMarkBot, 0.5), r249_markFine * 2));
        r249_xn$save$2Lrc5.call(r654_currentGlyph, 'plusBelow', 799);
        r249_dependencyProfile[r654_currentGlyph.name] = r249_getDependencyProfile(r654_currentGlyph);
        return r654_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.57', r249_xn$donothing$2Lrc0b)));
    (function _r249_t58() {
        var _r661_t0 = this;
        var r661_currentGlyph = _r661_t0;
        if (!r661_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.58')
            r249_glyphList.pop();
        r661_currentGlyph['set-width'](0);
        r661_currentGlyph['set-anchor']('below', r249_MARK, r249_markMiddle, 0, r249_markMiddle, r249_belowMarkBot);
        r661_currentGlyph.include(r249_VBar(r249_markMiddle - r249_markExtend, r249_belowMarkBot, r249_belowMarkTop, r249_markFine * 2));
        r661_currentGlyph.include(r249_VBar(r249_markMiddle + r249_markExtend, r249_belowMarkBot, r249_belowMarkTop, r249_markFine * 2));
        r661_currentGlyph.include(r249_HBar(r249_markMiddle - r249_markExtend, r249_markMiddle + r249_markExtend, r1_mix(r249_belowMarkTop, r249_belowMarkBot, 0.5), r249_markFine * 2));
        r249_xn$save$2Lrc5.call(r661_currentGlyph, 'minusBelow', 800);
        r249_dependencyProfile[r661_currentGlyph.name] = r249_getDependencyProfile(r661_currentGlyph);
        return r661_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.58', r249_xn$donothing$2Lrc0b)));
    (function _r249_t59() {
        var _r669_t0 = this;
        var r669_currentGlyph = _r669_t0;
        if (!r669_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.59')
            r249_glyphList.pop();
        r669_currentGlyph['set-width'](0);
        r669_currentGlyph['set-anchor']('below', r249_MARK, r249_markMiddle, 0, r249_markMiddle, r249_belowMarkBot);
        r669_currentGlyph.include(r249_VBar(r249_markMiddle - r249_markExtend, r249_belowMarkBot, r249_belowMarkTop, r249_markFine * 2));
        r669_currentGlyph.include(r249_VBar(r249_markMiddle + r249_markExtend, r249_belowMarkBot, r249_belowMarkTop, r249_markFine * 2));
        r669_currentGlyph.include(r249_HBarTop(r249_markMiddle - r249_markExtend, r249_markMiddle + r249_markExtend, r249_belowMarkTop, r249_markFine * 2));
        r249_xn$save$2Lrc5.call(r669_currentGlyph, 'bridgeBelow', 810);
        r249_dependencyProfile[r669_currentGlyph.name] = r249_getDependencyProfile(r669_currentGlyph);
        return r669_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.59', r249_xn$donothing$2Lrc0b)));
    (function _r249_t60() {
        var _r677_t0 = this;
        var r677_currentGlyph = _r677_t0;
        if (!r677_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.60')
            r249_glyphList.pop();
        r677_currentGlyph['set-width'](0);
        r677_currentGlyph['set-anchor']('below', r249_MARK, r249_markMiddle, 0, r249_markMiddle, r249_belowMarkBot);
        var r677_boxsw = Math.min(r249_markFine * 2, (r249_belowMarkTop - r249_belowMarkBot) / 3);
        r677_currentGlyph.include(r249_VBar(r249_markMiddle - r249_markExtend, r249_belowMarkBot, r249_belowMarkTop, r249_markFine * 2));
        r677_currentGlyph.include(r249_VBar(r249_markMiddle + r249_markExtend, r249_belowMarkBot, r249_belowMarkTop, r249_markFine * 2));
        r677_currentGlyph.include(r249_HBarBottom(r249_markMiddle - r249_markExtend, r249_markMiddle + r249_markExtend, r249_belowMarkBot, r677_boxsw));
        r677_currentGlyph.include(r249_HBarTop(r249_markMiddle - r249_markExtend, r249_markMiddle + r249_markExtend, r249_belowMarkTop, r677_boxsw));
        r249_xn$save$2Lrc5.call(r677_currentGlyph, 'boxBelow', 827);
        r249_dependencyProfile[r677_currentGlyph.name] = r249_getDependencyProfile(r677_currentGlyph);
        return r677_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.60', r249_xn$donothing$2Lrc0b)));
    (function _r249_t61() {
        var _r686_t0 = this;
        var r686_currentGlyph = _r686_t0;
        if (!r686_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.61')
            r249_glyphList.pop();
        r686_currentGlyph['set-width'](0);
        r686_currentGlyph['set-anchor']('below', r249_MARK, r249_markMiddle, 0, r249_markMiddle, r249_belowMarkBot);
        var r686_boxsw = Math.min(r249_markFine * 2, (r249_belowMarkTop - r249_belowMarkBot) / 3);
        r686_currentGlyph.include(r249_HBarBottom(r249_markMiddle - r249_markExtend, r249_markMiddle + r249_markExtend, r249_belowMarkBot, r686_boxsw));
        r686_currentGlyph.include(r249_HBarTop(r249_markMiddle - r249_markExtend, r249_markMiddle + r249_markExtend, r249_belowMarkTop, r686_boxsw));
        r249_xn$save$2Lrc5.call(r686_currentGlyph, 'equalBelow', 839);
        r249_dependencyProfile[r686_currentGlyph.name] = r249_getDependencyProfile(r686_currentGlyph);
        return r686_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.61', r249_xn$donothing$2Lrc0b)));
    (function _r249_t62() {
        var _r693_t0 = this;
        var r693_currentGlyph = _r693_t0;
        if (!r693_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.62')
            r249_glyphList.pop();
        r693_currentGlyph['set-width'](0);
        r693_currentGlyph['set-anchor']('below', r249_MARK, r249_markMiddle, 0, r249_markMiddle, r249_belowMarkBot);
        var r693_hsw = r249_adviceBlackness(3.5) / r249_STROKE * r249_markHalfStroke;
        var r693_extend = (r249_belowMarkTop - r249_belowMarkBot - r249_markHalfStroke) * 1.25;
        r693_currentGlyph.include(r249_dispiro(r249_g4.down.start(r249_markMiddle - r693_extend, r249_belowMarkTop, r249_widths.heading(r693_hsw, r693_hsw, r249_DOWNWARD)), r249_arcvh(), r249_g4.right.mid(r1_mix(r249_markMiddle, r249_markMiddle - r693_extend, 0.5), r249_belowMarkBot + r693_hsw, r249_heading(r249_RIGHTWARD)), r249_archv(), r249_g4.up.end(r249_markMiddle, r249_belowMarkTop, r249_heading(r249_UPWARD))));
        r693_currentGlyph.include(r249_dispiro(r249_g4.down.start(r249_markMiddle, r249_belowMarkTop, r249_widths.heading(r693_hsw, r693_hsw, r249_DOWNWARD)), r249_arcvh(), r249_g4.right.mid(r1_mix(r249_markMiddle, r249_markMiddle + r693_extend, 0.5), r249_belowMarkBot + r693_hsw, r249_heading(r249_RIGHTWARD)), r249_archv(), r249_g4.up.end(r249_markMiddle + r693_extend, r249_belowMarkTop, r249_heading(r249_UPWARD))));
        r249_xn$save$2Lrc5.call(r693_currentGlyph, 'dblBreveBelow', 811);
        r249_dependencyProfile[r693_currentGlyph.name] = r249_getDependencyProfile(r693_currentGlyph);
        return r693_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.62', r249_xn$donothing$2Lrc0b)));
    (function _r249_t63() {
        var _r700_t0 = this;
        var r700_currentGlyph = _r700_t0;
        if (!r700_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.63')
            r249_glyphList.pop();
        r700_currentGlyph['set-width'](0);
        r249_includeGlyphPart(r700_currentGlyph, r249_glyphs, 'dblBreveBelow');
        r700_currentGlyph.include(r249_FlipAround(r249_markMiddle, r1_mix(r249_belowMarkTop, r249_belowMarkBot, 0.5)));
        r700_currentGlyph['set-anchor']('below', r249_MARK, r249_markMiddle, 0, r249_markMiddle, r249_belowMarkBot);
        r249_xn$save$2Lrc5.call(r700_currentGlyph, 'dblArchBelow', 828);
        r249_dependencyProfile[r700_currentGlyph.name] = r249_getDependencyProfile(r700_currentGlyph);
        return r700_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.63', r249_xn$donothing$2Lrc0b)));
    (function _r249_t64() {
        var _r707_t0 = this;
        var r707_currentGlyph = _r707_t0;
        if (!r707_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.64')
            r249_glyphList.pop();
        r707_currentGlyph['set-width'](0);
        r707_currentGlyph['set-anchor']('below', r249_MARK, r249_markMiddle, 0, r249_markMiddle, r249_belowMarkBot);
        r707_currentGlyph.include(r249_dispiro(r249_g4.left.start(r249_markMiddle, r249_belowMarkTop, r249_widths.heading(r249_markFine, r249_markFine, r249_LEFTWARD)), r249_archv(), r249_g4.down.mid(r249_markMiddle - (r249_belowMarkTop - r249_belowMarkBot) / 2, r1_mix(r249_belowMarkTop, r249_belowMarkBot, 0.5), r249_heading(r249_DOWNWARD)), r249_arcvh(), r249_g4.right.end(r249_markMiddle, r249_belowMarkBot, r249_heading(r249_RIGHTWARD))));
        r707_currentGlyph['apply-transform'](r249_Translate((r249_belowMarkTop - r249_belowMarkBot) / 4, 0));
        r249_xn$save$2Lrc5.call(r707_currentGlyph, 'leftHalfCircleBelow', 796);
        r249_dependencyProfile[r707_currentGlyph.name] = r249_getDependencyProfile(r707_currentGlyph);
        return r707_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.64', r249_xn$donothing$2Lrc0b)));
    (function _r249_t65() {
        var _r714_t0 = this;
        var r714_currentGlyph = _r714_t0;
        if (!r714_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.65')
            r249_glyphList.pop();
        r714_currentGlyph['set-width'](0);
        r249_includeGlyphPart(r714_currentGlyph, r249_glyphs, 'leftHalfCircleBelow');
        r714_currentGlyph.include(r249_FlipAround(r249_markMiddle, r1_mix(r249_belowMarkTop, r249_belowMarkBot, 0.5)));
        r714_currentGlyph['set-anchor']('below', r249_MARK, r249_markMiddle, 0, r249_markMiddle, r249_belowMarkBot);
        r249_xn$save$2Lrc5.call(r714_currentGlyph, 'rightHalfCircleBelow', 825);
        r249_dependencyProfile[r714_currentGlyph.name] = r249_getDependencyProfile(r714_currentGlyph);
        return r714_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.65', r249_xn$donothing$2Lrc0b)));
    (function _r249_t66() {
        var _r721_t0 = this;
        var r721_currentGlyph = _r721_t0;
        if (!r721_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.66')
            r249_glyphList.pop();
        r721_currentGlyph['set-width'](0);
        r721_currentGlyph['set-anchor']('above', r249_MARK, r249_markMiddle, r249_XH, r249_markMiddle, r249_aboveMarkTop);
        r249_includeGlyphPart(r721_currentGlyph, r249_glyphs, 'rightHalfCircleBelow');
        r721_currentGlyph.include(r249_FlipAround(r249_markMiddle, r249_XH / 2));
        r249_xn$save$2Lrc5.call(r721_currentGlyph, 'leftHalfCircleAbove', 849);
        r249_dependencyProfile[r721_currentGlyph.name] = r249_getDependencyProfile(r721_currentGlyph);
        return r721_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.66', r249_xn$donothing$2Lrc0b)));
    (function _r249_t67() {
        var _r728_t0 = this;
        var r728_currentGlyph = _r728_t0;
        if (!r728_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.67')
            r249_glyphList.pop();
        r728_currentGlyph['set-width'](0);
        r728_currentGlyph['set-anchor']('above', r249_MARK, r249_markMiddle, r249_XH, r249_markMiddle, r249_aboveMarkTop);
        r249_includeGlyphPart(r728_currentGlyph, r249_glyphs, 'leftHalfCircleBelow');
        r728_currentGlyph.include(r249_FlipAround(r249_markMiddle, r249_XH / 2));
        r249_xn$save$2Lrc5.call(r728_currentGlyph, 'rightHalfCircleAbove', 855);
        r249_dependencyProfile[r728_currentGlyph.name] = r249_getDependencyProfile(r728_currentGlyph);
        return r728_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.67', r249_xn$donothing$2Lrc0b)));
    (function _r249_t68() {
        var _r735_t0 = this;
        var r735_currentGlyph = _r735_t0;
        if (!r735_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.68')
            r249_glyphList.pop();
        r735_currentGlyph['set-width'](0);
        r735_currentGlyph['set-anchor']('below', r249_MARK, r249_markMiddle, 0, r249_markMiddle, r249_belowMarkBot);
        r249_includeGlyphPart(r735_currentGlyph, r249_glyphs, 'graveAbove');
        r735_currentGlyph.include(r249_FlipAround(r249_markMiddle, r249_XH / 2));
        r249_xn$save$2Lrc5.call(r735_currentGlyph, 'graveBelow', 790);
        r249_dependencyProfile[r735_currentGlyph.name] = r249_getDependencyProfile(r735_currentGlyph);
        return r735_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.68', r249_xn$donothing$2Lrc0b)));
    (function _r249_t69() {
        var _r742_t0 = this;
        var r742_currentGlyph = _r742_t0;
        if (!r742_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.69')
            r249_glyphList.pop();
        r742_currentGlyph['set-width'](0);
        r742_currentGlyph['set-anchor']('below', r249_MARK, r249_markMiddle, 0, r249_markMiddle, r249_belowMarkBot);
        r249_includeGlyphPart(r742_currentGlyph, r249_glyphs, 'acuteAbove');
        r742_currentGlyph.include(r249_FlipAround(r249_markMiddle, r249_XH / 2));
        r249_xn$save$2Lrc5.call(r742_currentGlyph, 'acuteBelow', 791);
        r249_dependencyProfile[r742_currentGlyph.name] = r249_getDependencyProfile(r742_currentGlyph);
        return r742_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.69', r249_xn$donothing$2Lrc0b)));
    (function _r249_t70() {
        var _r749_t0 = this;
        var r749_currentGlyph = _r749_t0;
        if (!r749_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.70')
            r249_glyphList.pop();
        r749_currentGlyph['set-width'](0);
        r749_currentGlyph['set-anchor']('below', r249_MARK, r249_markMiddle, 0, r249_markMiddle, r249_belowMarkBot);
        r249_includeGlyphPart(r749_currentGlyph, r249_glyphs, 'dotAbove');
        r749_currentGlyph.include(r249_FlipAround(r249_markMiddle, r249_XH / 2));
        r249_xn$save$2Lrc5.call(r749_currentGlyph, 'dotBelow', 803);
        r249_dependencyProfile[r749_currentGlyph.name] = r249_getDependencyProfile(r749_currentGlyph);
        return r749_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.70', r249_xn$donothing$2Lrc0b)));
    (function _r249_t71() {
        var _r756_t0 = this;
        var r756_currentGlyph = _r756_t0;
        if (!r756_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.71')
            r249_glyphList.pop();
        r756_currentGlyph['set-width'](0);
        r756_currentGlyph['set-anchor']('below', r249_MARK, r249_markMiddle, 0, r249_markMiddle, r249_belowMarkBot);
        r249_includeGlyphPart(r756_currentGlyph, r249_glyphs, 'dieresisAbove');
        r756_currentGlyph.include(r249_FlipAround(r249_markMiddle, r249_XH / 2));
        r249_xn$save$2Lrc5.call(r756_currentGlyph, 'dieresisBelow', 804);
        r249_dependencyProfile[r756_currentGlyph.name] = r249_getDependencyProfile(r756_currentGlyph);
        return r756_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.71', r249_xn$donothing$2Lrc0b)));
    (function _r249_t72() {
        var _r763_t0 = this;
        var r763_currentGlyph = _r763_t0;
        if (!r763_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.72')
            r249_glyphList.pop();
        r763_currentGlyph['set-width'](0);
        r763_currentGlyph['set-anchor']('below', r249_MARK, r249_markMiddle, 0, r249_markMiddle, r249_belowMarkBot);
        r249_includeGlyphPart(r763_currentGlyph, r249_glyphs, 'tildeAbove');
        r763_currentGlyph.include(r249_FlipAround(r249_markMiddle, r249_XH / 2));
        r249_xn$save$2Lrc5.call(r763_currentGlyph, 'tildeBelow', 816);
        r249_dependencyProfile[r763_currentGlyph.name] = r249_getDependencyProfile(r763_currentGlyph);
        return r763_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.72', r249_xn$donothing$2Lrc0b)));
    (function _r249_t73() {
        var _r770_t0 = this;
        var r770_currentGlyph = _r770_t0;
        if (!r770_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.73')
            r249_glyphList.pop();
        r770_currentGlyph['set-width'](0);
        r770_currentGlyph['set-anchor']('below', r249_MARK, r249_markMiddle, 0, r249_markMiddle, r249_belowMarkBot);
        r249_includeGlyphPart(r770_currentGlyph, r249_glyphs, 'ringAbove');
        r770_currentGlyph.include(r249_FlipAround(r249_markMiddle, r249_XH / 2));
        r249_xn$save$2Lrc5.call(r770_currentGlyph, 'ringBelow', 805);
        r249_dependencyProfile[r770_currentGlyph.name] = r249_getDependencyProfile(r770_currentGlyph);
        return r770_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.73', r249_xn$donothing$2Lrc0b)));
    (function _r249_t74() {
        var _r777_t0 = this;
        var r777_currentGlyph = _r777_t0;
        if (!r777_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.74')
            r249_glyphList.pop();
        r777_currentGlyph['set-width'](0);
        r777_currentGlyph['set-anchor']('below', r249_MARK, r249_markMiddle, 0, r249_markMiddle, r249_belowMarkBot);
        r249_includeGlyphPart(r777_currentGlyph, r249_glyphs, 'macronAbove');
        r777_currentGlyph.include(r249_FlipAround(r249_markMiddle, r249_XH / 2));
        r249_xn$save$2Lrc5.call(r777_currentGlyph, 'macronBelow', 817);
        r249_dependencyProfile[r777_currentGlyph.name] = r249_getDependencyProfile(r777_currentGlyph);
        return r777_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.74', r249_xn$donothing$2Lrc0b)));
    (function _r249_t75() {
        var _r784_t0 = this;
        var r784_currentGlyph = _r784_t0;
        if (!r784_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.75')
            r249_glyphList.pop();
        r784_currentGlyph['set-width'](0);
        r784_currentGlyph['set-anchor']('below', r249_MARK, r249_markMiddle, 0, r249_markMiddle, r249_belowMarkBot);
        r249_includeGlyphPart(r784_currentGlyph, r249_glyphs, 'bridgeAbove');
        r784_currentGlyph.include(r249_FlipAround(r249_markMiddle, r249_XH / 2));
        r249_xn$save$2Lrc5.call(r784_currentGlyph, 'invBridgeBelow', 826);
        r249_dependencyProfile[r784_currentGlyph.name] = r249_getDependencyProfile(r784_currentGlyph);
        return r784_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.75', r249_xn$donothing$2Lrc0b)));
    (function _r249_t76() {
        var _r791_t0 = this;
        var r791_currentGlyph = _r791_t0;
        if (!r791_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.76')
            r249_glyphList.pop();
        r791_currentGlyph['set-width'](0);
        r791_currentGlyph['set-anchor']('below', r249_MARK, r249_markMiddle, 0, r249_markMiddle, r249_belowMarkBot);
        r249_includeGlyphPart(r791_currentGlyph, r249_glyphs, 'overlineAbove');
        r791_currentGlyph.include(r249_FlipAround(r249_markMiddle, r249_XH / 2));
        r249_xn$save$2Lrc5.call(r791_currentGlyph, 'underlineBelow', 818);
        r249_dependencyProfile[r791_currentGlyph.name] = r249_getDependencyProfile(r791_currentGlyph);
        return r791_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.76', r249_xn$donothing$2Lrc0b)));
    (function _r249_t77() {
        var _r798_t0 = this;
        var r798_currentGlyph = _r798_t0;
        if (!r798_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.77')
            r249_glyphList.pop();
        r798_currentGlyph['set-width'](0);
        r798_currentGlyph['set-anchor']('below', r249_MARK, r249_markMiddle, 0, r249_markMiddle, r249_belowMarkBot);
        r249_includeGlyphPart(r798_currentGlyph, r249_glyphs, 'dblOverlineAbove');
        r798_currentGlyph.include(r249_FlipAround(r249_markMiddle, r249_XH / 2));
        r249_xn$save$2Lrc5.call(r798_currentGlyph, 'dblUnderlineBelow', 819);
        r249_dependencyProfile[r798_currentGlyph.name] = r249_getDependencyProfile(r798_currentGlyph);
        return r798_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.77', r249_xn$donothing$2Lrc0b)));
    (function _r249_t78() {
        var _r805_t0 = this;
        var r805_currentGlyph = _r805_t0;
        if (!r805_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.78')
            r249_glyphList.pop();
        r805_currentGlyph['set-width'](0);
        r805_currentGlyph['set-anchor']('below', r249_MARK, r249_markMiddle, 0, r249_markMiddle, r249_belowMarkBot);
        r249_includeGlyphPart(r805_currentGlyph, r249_glyphs, 'caronAbove');
        r805_currentGlyph.include(r249_FlipAround(r249_markMiddle, r249_XH / 2));
        r249_xn$save$2Lrc5.call(r805_currentGlyph, 'circumflexBelow', 813);
        r249_dependencyProfile[r805_currentGlyph.name] = r249_getDependencyProfile(r805_currentGlyph);
        return r805_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.78', r249_xn$donothing$2Lrc0b)));
    (function _r249_t79() {
        var _r812_t0 = this;
        var r812_currentGlyph = _r812_t0;
        if (!r812_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.79')
            r249_glyphList.pop();
        r812_currentGlyph['set-width'](0);
        r812_currentGlyph['set-anchor']('below', r249_MARK, r249_markMiddle, 0, r249_markMiddle, r249_belowMarkBot);
        r249_includeGlyphPart(r812_currentGlyph, r249_glyphs, 'circumflexAbove');
        r812_currentGlyph.include(r249_FlipAround(r249_markMiddle, r249_XH / 2));
        r249_xn$save$2Lrc5.call(r812_currentGlyph, 'caronBelow', 812);
        r249_dependencyProfile[r812_currentGlyph.name] = r249_getDependencyProfile(r812_currentGlyph);
        return r812_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.79', r249_xn$donothing$2Lrc0b)));
    (function _r249_t80() {
        var _r819_t0 = this;
        var r819_currentGlyph = _r819_t0;
        if (!r819_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.80')
            r249_glyphList.pop();
        r819_currentGlyph['set-width'](0);
        r819_currentGlyph['set-anchor']('below', r249_MARK, r249_markMiddle, 0, r249_markMiddle, r249_belowMarkBot);
        r249_includeGlyphPart(r819_currentGlyph, r249_glyphs, 'archAbove');
        r819_currentGlyph.include(r249_FlipAround(r249_markMiddle, r249_XH / 2));
        r249_xn$save$2Lrc5.call(r819_currentGlyph, 'breveBelow', 814);
        r249_dependencyProfile[r819_currentGlyph.name] = r249_getDependencyProfile(r819_currentGlyph);
        return r819_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.80', r249_xn$donothing$2Lrc0b)));
    (function _r249_t81() {
        var _r826_t0 = this;
        var r826_currentGlyph = _r826_t0;
        if (!r826_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.81')
            r249_glyphList.pop();
        r826_currentGlyph['set-width'](0);
        r826_currentGlyph['set-anchor']('below', r249_MARK, r249_markMiddle, 0, r249_markMiddle, r249_belowMarkBot);
        r249_includeGlyphPart(r826_currentGlyph, r249_glyphs, 'breveAbove');
        r826_currentGlyph.include(r249_FlipAround(r249_markMiddle, r249_XH / 2));
        r249_xn$save$2Lrc5.call(r826_currentGlyph, 'archBelow', 815);
        r249_dependencyProfile[r826_currentGlyph.name] = r249_getDependencyProfile(r826_currentGlyph);
        return r826_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.81', r249_xn$donothing$2Lrc0b)));
    (function _r249_t82() {
        var _r833_t0 = this;
        var r833_currentGlyph = _r833_t0;
        if (!r833_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.82')
            r249_glyphList.pop();
        r833_currentGlyph['set-width'](0);
        r833_currentGlyph['set-anchor']('below', r249_MARK, r249_markMiddle, 0, r249_markMiddle, r249_belowMarkBot);
        r249_includeGlyphPart(r833_currentGlyph, r249_glyphs, 'turnCommaAbove');
        r833_currentGlyph.include(r249_FlipAround(r249_markMiddle, r249_XH / 2));
        r249_xn$save$2Lrc5.call(r833_currentGlyph, 'commaBelow', 806);
        r249_dependencyProfile[r833_currentGlyph.name] = r249_getDependencyProfile(r833_currentGlyph);
        return r833_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.82', r249_xn$donothing$2Lrc0b)));
    (function _r249_t83() {
        var _r840_t0 = this;
        var r840_currentGlyph = _r840_t0;
        if (!r840_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.83')
            r249_glyphList.pop();
        r840_currentGlyph['set-width'](0);
        r840_currentGlyph['set-anchor']('below', r249_MARK, r249_markMiddle, 0, r249_markMiddle, r249_belowMarkBot);
        r249_includeGlyphPart(r840_currentGlyph, r249_glyphs, 'barAbove');
        r840_currentGlyph.include(r249_FlipAround(r249_markMiddle, r249_XH / 2));
        r249_xn$save$2Lrc5.call(r840_currentGlyph, 'barBelow', 809);
        r249_dependencyProfile[r840_currentGlyph.name] = r249_getDependencyProfile(r840_currentGlyph);
        return r840_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.83', r249_xn$donothing$2Lrc0b)));
    (function _r249_t84() {
        var _r847_t0 = this;
        var r847_currentGlyph = _r847_t0;
        if (!r847_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.84')
            r249_glyphList.pop();
        r847_currentGlyph['set-width'](0);
        r847_currentGlyph['set-anchor']('below', r249_MARK, r249_markMiddle, 0, r249_markMiddle, r249_belowMarkBot);
        r249_includeGlyphPart(r847_currentGlyph, r249_glyphs, 'dblBarAbove');
        r847_currentGlyph.include(r249_FlipAround(r249_markMiddle, r249_XH / 2));
        r249_xn$save$2Lrc5.call(r847_currentGlyph, 'dblBarBelow', 840);
        r249_dependencyProfile[r847_currentGlyph.name] = r249_getDependencyProfile(r847_currentGlyph);
        return r847_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.84', r249_xn$donothing$2Lrc0b)));
    (function _r249_t85() {
        var _r854_t0 = this;
        var r854_currentGlyph = _r854_t0;
        if (!r854_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.85')
            r249_glyphList.pop();
        r854_currentGlyph['set-width'](0);
        r854_currentGlyph['set-anchor']('below', r249_MARK, r249_markMiddle, 0, r249_markMiddle, r249_belowMarkBot);
        r249_includeGlyphPart(r854_currentGlyph, r249_glyphs, 'crossAbove');
        r854_currentGlyph.include(r249_FlipAround(r249_markMiddle, r249_XH / 2));
        r249_xn$save$2Lrc5.call(r854_currentGlyph, 'crossBelow', 851);
        r249_dependencyProfile[r854_currentGlyph.name] = r249_getDependencyProfile(r854_currentGlyph);
        return r854_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.85', r249_xn$donothing$2Lrc0b)));
    (function _r249_t86() {
        var _r861_t0 = this;
        var r861_currentGlyph = _r861_t0;
        if (!r861_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.86')
            r249_glyphList.pop();
        r861_currentGlyph['set-width'](0);
        r861_currentGlyph['set-anchor']('below', r249_MARK, r249_markMiddle, 0, r249_markMiddle, r249_belowMarkBot);
        r249_includeGlyphPart(r861_currentGlyph, r249_glyphs, 'greaterAbove');
        r861_currentGlyph.include(r249_FlipAround(r249_markMiddle, r249_XH / 2));
        r249_xn$save$2Lrc5.call(r861_currentGlyph, 'lessBelow', 852);
        r249_dependencyProfile[r861_currentGlyph.name] = r249_getDependencyProfile(r861_currentGlyph);
        return r861_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.86', r249_xn$donothing$2Lrc0b)));
    (function _r249_t87() {
        var _r868_t0 = this;
        var r868_currentGlyph = _r868_t0;
        if (!r868_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.87')
            r249_glyphList.pop();
        r868_currentGlyph['set-width'](0);
        r868_currentGlyph['set-anchor']('below', r249_MARK, r249_markMiddle, 0, r249_markMiddle, r249_belowMarkBot);
        r249_includeGlyphPart(r868_currentGlyph, r249_glyphs, 'lessAbove');
        r868_currentGlyph.include(r249_FlipAround(r249_markMiddle, r249_XH / 2));
        r249_xn$save$2Lrc5.call(r868_currentGlyph, 'greaterBelow', 853);
        r249_dependencyProfile[r868_currentGlyph.name] = r249_getDependencyProfile(r868_currentGlyph);
        return r868_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.87', r249_xn$donothing$2Lrc0b)));
    (function _r249_t88() {
        var _r875_t0 = this;
        var r875_currentGlyph = _r875_t0;
        if (!r875_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.88')
            r249_glyphList.pop();
        r875_currentGlyph['set-width'](0);
        r875_currentGlyph['set-anchor']('below', r249_MARK, r249_markMiddle, 0, r249_markMiddle, r249_belowMarkBot);
        r249_includeGlyphPart(r875_currentGlyph, r249_glyphs, 'dblRingAbove');
        r875_currentGlyph.include(r249_FlipAround(r249_markMiddle, r249_XH / 2));
        r249_xn$save$2Lrc5.call(r875_currentGlyph, 'dblRingBelow', 858);
        r249_dependencyProfile[r875_currentGlyph.name] = r249_getDependencyProfile(r875_currentGlyph);
        return r875_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.88', r249_xn$donothing$2Lrc0b)));
    (function _r249_t89() {
        var _r882_t0 = this;
        var r882_currentGlyph = _r882_t0;
        if (!r882_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.89')
            r249_glyphList.pop();
        r882_currentGlyph['set-width'](0);
        var r882_fine = r249_adviceBlackness(5.75) / 2;
        var r882_h = function _r882_t2() {
            var _r885_t0 = this;
            var r885_currentGlyph = _r885_t0;
            if (!r885_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.90')
                r249_glyphList.pop();
            var r885_top = r249_belowMarkTop;
            var r885_bot = r249_belowMarkBot;
            var r885_left = r249_markMiddle - r249_markExtend * 1.5;
            var r885_right = r249_markMiddle - r249_markExtend * 0.5;
            var r885_exp = Math.sqrt(1 + (r885_top - r885_bot) / (2 * (r885_right - r885_left)) * (r885_top - r885_bot) / (2 * (r885_right - r885_left)));
            r885_currentGlyph.include(r249_dispiro(r249_widths.center(r882_fine * 2), r249_flat(r885_right, r885_top), r249_curl(r885_left, r1_mix(r885_top, r885_bot, 0.5), r249_widths.heading(r882_fine * r885_exp, r882_fine * r885_exp, r249_DOWNWARD))));
            r885_currentGlyph.include(r249_dispiro(r249_widths.center(r882_fine * 2), r249_flat(r885_right, r885_bot), r249_curl(r885_left, r1_mix(r885_top, r885_bot, 0.5), r249_widths.heading(r882_fine * r885_exp, r882_fine * r885_exp, r249_UPWARD))));
            r249_dependencyProfile[r885_currentGlyph.name] = r249_getDependencyProfile(r885_currentGlyph);
            return r885_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.90', function _r882_t3() {
            var _r888_t0 = this;
            _r888_t0.include(r882_currentGlyph, true);
            return _r888_t0.advanceWidth = r882_currentGlyph.advanceWidth;
        }));
        r882_currentGlyph.include(r882_h);
        r882_currentGlyph.include(r249_FlipAround(r249_markMiddle, r1_mix(r249_belowMarkTop, r249_belowMarkBot, 0.5)));
        r882_currentGlyph.include(r882_h);
        r882_currentGlyph.include(r249_HBar(r249_markMiddle - r249_markExtend * 1.5, r249_markMiddle + r249_markExtend * 1.5, r1_mix(r249_belowMarkTop, r249_belowMarkBot, 0.5), r882_fine * 2));
        r882_currentGlyph['set-anchor']('below', r249_MARK, r249_markMiddle, 0, r249_markMiddle, r249_belowMarkBot);
        r249_xn$save$2Lrc5.call(r882_currentGlyph, 'lrArrowBelow', 845);
        r249_dependencyProfile[r882_currentGlyph.name] = r249_getDependencyProfile(r882_currentGlyph);
        return r882_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.89', r249_xn$donothing$2Lrc0b)));
    (function _r249_t90() {
        var _r896_t0 = this;
        var r896_currentGlyph = _r896_t0;
        if (!r896_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.91')
            r249_glyphList.pop();
        r896_currentGlyph['set-width'](0);
        var r896_fine = r249_adviceBlackness(6) / 2;
        var r896_top = r249_belowMarkTop;
        var r896_bot = r1_mix(r249_belowMarkBot, r249_belowMarkTop, 0.5);
        var r896_left = r249_markMiddle - r249_markExtend * 0.75;
        var r896_right = r249_markMiddle + r249_markExtend * 0.75;
        var r896_exp = Math.sqrt(1 + 2 * (r896_top - r896_bot) / (r896_right - r896_left) * (2 * (r896_top - r896_bot)) / (r896_right - r896_left));
        r896_currentGlyph.include(r249_dispiro(r249_widths.center(r896_fine * 2), r249_flat(r896_left, r896_bot), r249_curl(r1_mix(r896_left, r896_right, 0.5), r896_top, r249_widths.heading(r896_fine * r896_exp, r896_fine * r896_exp, r249_RIGHTWARD))));
        r896_currentGlyph.include(r249_dispiro(r249_widths.center(r896_fine * 2), r249_flat(r896_right, r896_bot), r249_curl(r1_mix(r896_left, r896_right, 0.5), r896_top, r249_widths.heading(r896_fine * r896_exp, r896_fine * r896_exp, r249_LEFTWARD))));
        r896_currentGlyph.include(r249_VBar(r249_markMiddle, r249_belowMarkBot, r896_top, r896_fine * 2));
        r896_currentGlyph['set-anchor']('below', r249_MARK, r249_markMiddle, 0, r249_markMiddle, r249_belowMarkBot);
        r249_xn$save$2Lrc5.call(r896_currentGlyph, 'lrArrowBelow', 846);
        r249_dependencyProfile[r896_currentGlyph.name] = r249_getDependencyProfile(r896_currentGlyph);
        return r896_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.91', r249_xn$donothing$2Lrc0b)));
    (function _r249_t91() {
        var _r904_t0 = this;
        var r904_currentGlyph = _r904_t0;
        if (!r904_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.92')
            r249_glyphList.pop();
        r904_currentGlyph['set-width'](0);
        var r904_radius = r249_markHalfStroke * 1.5;
        r904_currentGlyph.include(r249_Ring(r249_XH + r249_ACCENT + r904_radius, r249_XH + r249_ACCENT - r904_radius, r249_markMiddle - r904_radius, r249_markMiddle + r904_radius));
        r904_currentGlyph.include(r249_dispiro(r249_g4(r249_markMiddle + r904_radius, r249_XH + r249_ACCENT, r249_widths(0, r249_markFine * 1.75)), r249_quadcontrols(0, 0.75, 5, r249_important), r249_g4(r249_markMiddle - r904_radius - r249_markHalfStroke, r249_aboveMarkBot - r904_radius)));
        r904_currentGlyph['apply-transform'](r249_Upright());
        r904_currentGlyph['apply-transform'](r249_Translate(-r249_markMiddle + r904_radius * 0.35, 0));
        r904_currentGlyph['apply-transform'](r249_Italify());
        r904_currentGlyph['set-anchor']('topright', r249_MARK, 0, r249_aboveMarkBot + r249_markFine * 0.75, 0, r249_aboveMarkTop);
        r249_xn$save$2Lrc5.call(r904_currentGlyph, 'horn', 795);
        r249_dependencyProfile[r904_currentGlyph.name] = r249_getDependencyProfile(r904_currentGlyph);
        return r904_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.92', r249_xn$donothing$2Lrc0b)));
    (function _r249_t92() {
        var _r914_t0 = this;
        var r914_currentGlyph = _r914_t0;
        if (!r914_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.93')
            r249_glyphList.pop();
        r914_currentGlyph['set-width'](0);
        r914_currentGlyph.include(r249_VBarLeft(0, r249_aboveMarkBot, r249_aboveMarkTop, r249_markFine * 2));
        r914_currentGlyph.include(r249_HBarTop(-r249_markExtend * 1.5, 0, r249_aboveMarkTop, r249_markFine * 2));
        r914_currentGlyph['set-anchor']('topright', r249_MARK, 0, r249_XH, 0, r249_aboveMarkTop);
        r249_xn$save$2Lrc5.call(r914_currentGlyph, 'leftangleTR', 794);
        r249_dependencyProfile[r914_currentGlyph.name] = r249_getDependencyProfile(r914_currentGlyph);
        return r914_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.93', r249_xn$donothing$2Lrc0b)));
    (function _r249_t93() {
        var _r921_t0 = this;
        var r921_currentGlyph = _r921_t0;
        if (!r921_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.94')
            r249_glyphList.pop();
        r921_currentGlyph['set-width'](0);
        r921_currentGlyph.include(r249_Ring(r249_XH + r249_ACCENT + r249_DOTRADIUS, r249_XH + r249_ACCENT - r249_DOTRADIUS, 0 - r249_DOTRADIUS, 0 + r249_DOTRADIUS, true));
        r921_currentGlyph['set-anchor']('topright', r249_MARK, 0, r249_XH, 0, r249_aboveMarkTop);
        r249_xn$save$2Lrc5.call(r921_currentGlyph, 'dotTR', 856);
        r249_dependencyProfile[r921_currentGlyph.name] = r249_getDependencyProfile(r921_currentGlyph);
        return r921_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.94', r249_xn$donothing$2Lrc0b)));
    (function _r249_t94() {
        var _r927_t0 = this;
        var r927_currentGlyph = _r927_t0;
        if (!r927_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.95')
            r249_glyphList.pop();
        r927_currentGlyph['set-width'](0);
        r249_includeGlyphPart(r927_currentGlyph, r249_glyphs, 'commaAbove');
        r927_currentGlyph['apply-transform'](r249_Upright());
        r927_currentGlyph['apply-transform'](r249_Translate(r249_RIGHTSB - r249_MIDDLE - r249_OX, r249_XH - r249_aboveMarkTop - r249_commaOvershoot));
        r927_currentGlyph['apply-transform'](r249_Italify());
        r927_currentGlyph['set-anchor']('topright', r249_MARK, 0, r249_XH, 0, r249_aboveMarkTop);
        r249_xn$save$2Lrc5.call(r927_currentGlyph, 'commaTR', 789);
        r249_dependencyProfile[r927_currentGlyph.name] = r249_getDependencyProfile(r927_currentGlyph);
        return r927_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.95', r249_xn$donothing$2Lrc0b)));
    (function _r249_t95() {
        var _r936_t0 = this;
        var r936_currentGlyph = _r936_t0;
        if (!r936_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.96')
            r249_glyphList.pop();
        r936_currentGlyph['set-width'](0);
        r936_currentGlyph['set-anchor']('bottomright', r249_MARK, 0, 0, 0, r249_belowMarkBot);
        r936_currentGlyph.include(r249_dispiro(r249_widths.rhs(), r249_flat(0, -r249_O, r249_heading(r249_DOWNWARD)), r249_curl(0, 0, r249_heading(r249_DOWNWARD)), r249_straight.right.end(r249_HOOKX - r249_HALFSTROKE * r249_HVCONTRAST, -r249_HOOK + r249_HALFSTROKE)));
        r936_currentGlyph.cmpPriority = -2;
        r249_xn$save$2Lrc5.call(r936_currentGlyph, 'rtailBR', 802);
        r249_dependencyProfile[r936_currentGlyph.name] = r249_getDependencyProfile(r936_currentGlyph);
        return r936_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.96', r249_xn$donothing$2Lrc0b)));
    (function _r249_t96() {
        var _r942_t0 = this;
        var r942_currentGlyph = _r942_t0;
        if (!r942_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.97')
            r249_glyphList.pop();
        r942_currentGlyph['set-width'](0);
        r942_currentGlyph['set-anchor']('bottomright', r249_MARK, 0, 0, 0, r249_belowMarkBot);
        r942_currentGlyph.include(r249_dispiro(r249_widths.rhs(), r249_flat(0, -r249_O, r249_heading(r249_DOWNWARD)), r249_curl(0, 0, r249_heading(r249_DOWNWARD)), r249_straight.left.end(-r249_HOOKX - r249_HALFSTROKE * r249_HVCONTRAST, -r249_HOOK - r249_HALFSTROKE)));
        r942_currentGlyph.cmpPriority = -2;
        r249_xn$save$2Lrc5.call(r942_currentGlyph, 'ltailBR', 801);
        r249_dependencyProfile[r942_currentGlyph.name] = r249_getDependencyProfile(r942_currentGlyph);
        return r942_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.97', r249_xn$donothing$2Lrc0b)));
    (function _r249_t97() {
        var _r948_t0 = this;
        var r948_currentGlyph = _r948_t0;
        if (!r948_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.98')
            r249_glyphList.pop();
        r948_currentGlyph['set-width'](0);
        r948_currentGlyph['set-anchor']('overlay', r249_MARK, r249_markMiddle, r249_XH / 2, r249_markMiddle, r249_XH / 2);
        r249_includeGlyphPart(r948_currentGlyph, r249_glyphs, 'tildeAbove');
        r948_currentGlyph['apply-transform'](r249_Upright());
        r948_currentGlyph['apply-transform'](r249_Translate(0, r249_XH / 2 - r1_mix(r249_aboveMarkTop, r249_aboveMarkBot, 0.5)));
        r948_currentGlyph['apply-transform'](r249_Italify());
        r249_xn$save$2Lrc5.call(r948_currentGlyph, 'tildeOver', 820);
        r249_dependencyProfile[r948_currentGlyph.name] = r249_getDependencyProfile(r948_currentGlyph);
        return r948_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.98', r249_xn$donothing$2Lrc0b)));
    (function _r249_t98() {
        var _r957_t0 = this;
        var r957_currentGlyph = _r957_t0;
        if (!r957_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.99')
            r249_glyphList.pop();
        r957_currentGlyph['set-width'](0);
        r957_currentGlyph['set-anchor']('overlay', r249_MARK, r249_markMiddle, r249_XH / 2, r249_markMiddle, r249_XH / 2);
        r957_currentGlyph.include(r249_HOverlayBar(r249_markMiddle - r249_LONGJUT * 0.75, r249_markMiddle + r249_LONGJUT * 0.75, r249_XH / 2));
        r249_xn$save$2Lrc5.call(r957_currentGlyph, 'barOver', 821);
        r249_dependencyProfile[r957_currentGlyph.name] = r249_getDependencyProfile(r957_currentGlyph);
        return r957_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.99', r249_xn$donothing$2Lrc0b)));
    (function _r249_t99() {
        var _r963_t0 = this;
        var r963_currentGlyph = _r963_t0;
        if (!r963_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.100')
            r249_glyphList.pop();
        r963_currentGlyph['set-width'](0);
        r963_currentGlyph['set-anchor']('overlay', r249_MARK, r249_markMiddle, r249_XH / 2, r249_markMiddle, r249_XH / 2);
        r963_currentGlyph.include(r249_HOverlayBar(r1_mix(0, r249_SB, 0.5) - r249_WIDTH, r1_mix(r249_WIDTH, r249_RIGHTSB, 0.5) - r249_WIDTH, r249_XH / 2));
        r249_xn$save$2Lrc5.call(r963_currentGlyph, 'longBarOver', 57489);
        r249_dependencyProfile[r963_currentGlyph.name] = r249_getDependencyProfile(r963_currentGlyph);
        return r963_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.100', r249_xn$donothing$2Lrc0b)));
    (function _r249_t100() {
        var _r969_t0 = this;
        var r969_currentGlyph = _r969_t0;
        if (!r969_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.101')
            r249_glyphList.pop();
        r969_currentGlyph['set-width'](0);
        r969_currentGlyph['set-anchor']('strike', r249_MARK, r249_markMiddle, r249_XH / 2, r249_markMiddle, r249_XH / 2);
        r969_currentGlyph.include(r249_HOverlayBar(0 - r249_WIDTH, 0, r249_XH / 2));
        r249_xn$save$2Lrc5.call(r969_currentGlyph, 'strikeThrough', 822);
        r249_dependencyProfile[r969_currentGlyph.name] = r249_getDependencyProfile(r969_currentGlyph);
        return r969_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.101', r249_xn$donothing$2Lrc0b)));
    (function _r249_t101() {
        var _r975_t0 = this;
        var r975_currentGlyph = _r975_t0;
        if (!r975_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.102')
            r249_glyphList.pop();
        r975_currentGlyph['set-width'](0);
        r975_currentGlyph['set-anchor']('overlay', r249_MARK, r249_markMiddle, r249_XH / 2, r249_markMiddle, r249_XH / 2);
        r975_currentGlyph.include(r249_FlatSlashShape(r249_markMiddle, r249_XH / 2, 0.5 * r249_OVERLAYSTROKE));
        r249_xn$save$2Lrc5.call(r975_currentGlyph, 'shortSlashOver', 57488);
        r249_dependencyProfile[r975_currentGlyph.name] = r249_getDependencyProfile(r975_currentGlyph);
        return r975_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.102', r249_xn$donothing$2Lrc0b)));
    (function _r249_t102() {
        var _r981_t0 = this;
        var r981_currentGlyph = _r981_t0;
        if (!r981_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.103')
            r249_glyphList.pop();
        r981_currentGlyph['set-width'](0);
        var r981_fine = 0.375 * r249_OVERLAYSTROKE;
        var r981_dx = r249_WIDTH * 0.1;
        var r981_dy = r249_WIDTH * 0.4;
        r981_currentGlyph['set-anchor']('slash', r249_MARK, r249_markMiddle, r249_XH / 2, r249_markMiddle, r249_XH / 2);
        r981_currentGlyph.include(r249_dispiro(r249_flat(r249_MIDDLE - r981_dx - r249_WIDTH, r249_XH / 2 - r981_dy, r249_widths(r981_fine, r981_fine)), r249_curl(r249_MIDDLE + r981_dx - r249_WIDTH, r249_XH / 2 + r981_dy)));
        r249_xn$save$2Lrc5.call(r981_currentGlyph, 'arrSlashOver');
        r249_dependencyProfile[r981_currentGlyph.name] = r249_getDependencyProfile(r981_currentGlyph);
        return r981_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.103', r249_xn$donothing$2Lrc0b)));
    (function _r249_t103() {
        var _r987_t0 = this;
        var r987_currentGlyph = _r987_t0;
        if (!r987_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.104')
            r249_glyphList.pop();
        r987_currentGlyph.include(r249_ForceUpright());
        r987_currentGlyph['set-width'](0);
        var r987_fine = 0.375 * r249_OVERLAYSTROKE;
        var r987_dx = r249_WIDTH * 0;
        var r987_dy = r249_WIDTH * 0.3;
        r987_currentGlyph['set-anchor']('slash', r249_MARK, r249_markMiddle, r249_XH / 2, r249_markMiddle, r249_XH / 2);
        r987_currentGlyph.include(r249_dispiro(r249_flat(r249_MIDDLE - r987_dx - r249_WIDTH, r249_XH / 2 - r987_dy, r249_widths(r987_fine, r987_fine)), r249_curl(r249_MIDDLE + r987_dx - r249_WIDTH, r249_XH / 2 + r987_dy)));
        r249_xn$save$2Lrc5.call(r987_currentGlyph, 'arrVStrokeOver');
        r249_dependencyProfile[r987_currentGlyph.name] = r249_getDependencyProfile(r987_currentGlyph);
        return r987_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.104', r249_xn$donothing$2Lrc0b)));
    (function _r249_t104() {
        var _r994_t0 = this;
        var r994_currentGlyph = _r994_t0;
        if (!r994_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.105')
            r249_glyphList.pop();
        r994_currentGlyph.include(r249_ForceUpright());
        r994_currentGlyph['set-width'](0);
        var r994_fine = 0.3 * r249_OVERLAYSTROKE;
        var r994_dx = r249_WIDTH * 0;
        var r994_dy = r249_WIDTH * 0.3;
        var r994_gap = Math.max(r994_fine * 2, r249_WIDTH / 8);
        r994_currentGlyph['set-anchor']('slash', r249_MARK, r249_markMiddle, r249_XH / 2, r249_markMiddle, r249_XH / 2);
        r994_currentGlyph.include(r249_dispiro(r249_flat(r249_MIDDLE - r994_dx - r249_WIDTH - r994_gap, r249_XH / 2 - r994_dy, r249_widths(r994_fine, r994_fine)), r249_curl(r249_MIDDLE + r994_dx - r249_WIDTH - r994_gap, r249_XH / 2 + r994_dy)));
        r994_currentGlyph.include(r249_dispiro(r249_flat(r249_MIDDLE - r994_dx - r249_WIDTH + r994_gap, r249_XH / 2 - r994_dy, r249_widths(r994_fine, r994_fine)), r249_curl(r249_MIDDLE + r994_dx - r249_WIDTH + r994_gap, r249_XH / 2 + r994_dy)));
        r249_xn$save$2Lrc5.call(r994_currentGlyph, 'arrDblVStrokeOver');
        r249_dependencyProfile[r994_currentGlyph.name] = r249_getDependencyProfile(r994_currentGlyph);
        return r994_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.105', r249_xn$donothing$2Lrc0b)));
    (function _r249_t105() {
        var _r1002_t0 = this;
        var r1002_currentGlyph = _r1002_t0;
        if (!r1002_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.106')
            r249_glyphList.pop();
        r1002_currentGlyph['set-width'](0);
        var r1002_fine = 0.375 * r249_OVERLAYSTROKE;
        r1002_currentGlyph['set-anchor']('slash', r249_MARK, r249_markMiddle, r249_XH / 2, r249_markMiddle, r249_XH / 2);
        r1002_currentGlyph.include(r249_dispiro(r249_flat(r249_SB - r249_O * 3 + r1002_fine - r249_WIDTH, r249_XH * -0.1, r249_widths(r1002_fine, r1002_fine)), r249_curl(r249_RIGHTSB + r249_O * 3 - r1002_fine - r249_WIDTH, r249_XH * 1.1)));
        r249_xn$save$2Lrc5.call(r1002_currentGlyph, 'slashOver', 823);
        r249_dependencyProfile[r1002_currentGlyph.name] = r249_getDependencyProfile(r1002_currentGlyph);
        return r1002_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.106', r249_xn$donothing$2Lrc0b)));
    (function _r249_t106() {
        var _r1008_t0 = this;
        var r1008_currentGlyph = _r1008_t0;
        if (!r1008_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.107')
            r249_glyphList.pop();
        r1008_currentGlyph['set-width'](0);
        var r1008_fine = 0.375 * r249_OVERLAYSTROKE;
        r1008_currentGlyph['set-anchor']('slash', r249_MARK, r249_markMiddle, r249_XH / 2, r249_markMiddle, r249_XH / 2);
        r1008_currentGlyph.include(r249_dispiro(r249_flat(r249_SB - r249_O * 3 + r1008_fine - r249_WIDTH, r249_XH * 0.5 - r249_CAP * 0.6, r249_widths(r1008_fine, r1008_fine)), r249_curl(r249_RIGHTSB + r249_O * 3 - r1008_fine - r249_WIDTH, r249_XH * 0.5 + r249_CAP * 0.6)));
        r249_xn$save$2Lrc5.call(r1008_currentGlyph, 'longSlashOver', 824);
        r249_dependencyProfile[r1008_currentGlyph.name] = r249_getDependencyProfile(r1008_currentGlyph);
        return r1008_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.107', r249_xn$donothing$2Lrc0b)));
    var r249_tieLeft = r1_mix(0, r249_markMiddle, 1.25);
    var r249_tieRight = -r249_tieLeft;
    (function _r249_t107() {
        var _r1014_t0 = this;
        var r1014_currentGlyph = _r1014_t0;
        if (!r1014_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.108')
            r249_glyphList.pop();
        r1014_currentGlyph['set-width'](0);
        r1014_currentGlyph.include(r249_dispiro(r249_widths.rhs(r249_markHalfStroke * 2), r249_g4(r249_tieLeft, r249_aboveMarkBot), r249_quadcontrols(0.5, 1), r249_g4.right.mid(0, r249_aboveMarkTop, r249_heading(r249_RIGHTWARD)), r249_quadcontrols(0.5, 0), r249_g4(r249_tieRight, r249_aboveMarkBot)));
        r1014_currentGlyph['apply-transform'](r249_Upright());
        r1014_currentGlyph['apply-transform'](r249_Translate(0, r249_CAP - r249_XH));
        r1014_currentGlyph['apply-transform'](r249_Italify());
        r249_xn$save$2Lrc5.call(r1014_currentGlyph, 'tieAbove', 865);
        r249_dependencyProfile[r1014_currentGlyph.name] = r249_getDependencyProfile(r1014_currentGlyph);
        return r1014_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.108', r249_xn$donothing$2Lrc0b)));
    (function _r249_t108() {
        var _r1022_t0 = this;
        var r1022_currentGlyph = _r1022_t0;
        if (!r1022_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.109')
            r249_glyphList.pop();
        r1022_currentGlyph['set-width'](0);
        r1022_currentGlyph.include(r249_dispiro(r249_widths.lhs(r249_markHalfStroke * 2), r249_g4(r249_tieLeft, r249_aboveMarkTop), r249_quadcontrols(0.5, 1), r249_g4.right.mid(0, r249_aboveMarkBot, r249_heading(r249_RIGHTWARD)), r249_quadcontrols(0.5, 0), r249_g4(r249_tieRight, r249_aboveMarkTop)));
        r1022_currentGlyph['apply-transform'](r249_Upright());
        r1022_currentGlyph['apply-transform'](r249_Translate(0, r249_CAP - r249_XH));
        r1022_currentGlyph['apply-transform'](r249_Italify());
        r249_xn$save$2Lrc5.call(r1022_currentGlyph, 'turnTieAbove', 861);
        r249_dependencyProfile[r1022_currentGlyph.name] = r249_getDependencyProfile(r1022_currentGlyph);
        return r1022_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.109', r249_xn$donothing$2Lrc0b)));
    r249_turned('tieBelow', 860, 'tieAbove', 0, r249_XH / 2);
    (function _r249_t109() {
        var _r1030_t0 = this;
        var r1030_currentGlyph = _r1030_t0;
        if (!r1030_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.110')
            r249_glyphList.pop();
        r1030_currentGlyph['set-width'](0);
        r1030_currentGlyph.include(r249_dispiro(r249_widths.center(r249_markHalfStroke * 2), r249_flat(r249_tieLeft, r249_XH + r249_ACCENT), r249_curl(r249_tieRight, r249_XH + r249_ACCENT)));
        r1030_currentGlyph['apply-transform'](r249_Upright());
        r1030_currentGlyph['apply-transform'](r249_Translate(0, r249_CAP - r249_XH));
        r1030_currentGlyph['apply-transform'](r249_Italify());
        r249_xn$save$2Lrc5.call(r1030_currentGlyph, 'overlineTieAbove', 862);
        r249_dependencyProfile[r1030_currentGlyph.name] = r249_getDependencyProfile(r1030_currentGlyph);
        return r1030_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.110', r249_xn$donothing$2Lrc0b)));
    r249_composite('underlineTieBelow', r249_glyphs.overlineTieAbove, r249_FlipAround(0, r249_XH / 2), r249_xn$intounicode$5sIl(863));
    (function _r249_t110() {
        var _r1038_t0 = this;
        var r1038_currentGlyph = _r1038_t0;
        if (!r1038_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.111')
            r249_glyphList.pop();
        r1038_currentGlyph['set-width'](0);
        var r1038_fine = r249_markFine;
        var r1038_h = function _r1038_t2() {
            var _r1041_t0 = this;
            var r1041_currentGlyph = _r1041_t0;
            if (!r1041_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.112')
                r249_glyphList.pop();
            var r1041_top = r249_DESCENDER - r249_ACCENT + (r249_belowMarkTop - r249_belowMarkBot) / 2 * 1.5;
            var r1041_bot = r249_DESCENDER - r249_ACCENT - (r249_belowMarkTop - r249_belowMarkBot) / 2 * 1.5;
            var r1041_left = r249_tieRight - r249_markExtend * 1.5;
            var r1041_right = r249_tieRight;
            var r1041_exp = Math.sqrt(1 + (r1041_top - r1041_bot) / (2 * (r1041_right - r1041_left)) * (r1041_top - r1041_bot) / (2 * (r1041_right - r1041_left)));
            r1041_currentGlyph.include(r249_dispiro(r249_widths.center(r1038_fine * 2), r249_flat(r1041_left, r1041_top), r249_curl(r1041_right, r1_mix(r1041_top, r1041_bot, 0.5), r249_widths.heading(r1038_fine * r1041_exp, r1038_fine * r1041_exp, r249_DOWNWARD))));
            r1041_currentGlyph.include(r249_dispiro(r249_widths.center(r1038_fine * 2), r249_flat(r1041_left, r1041_bot), r249_curl(r1041_right, r1_mix(r1041_top, r1041_bot, 0.5), r249_widths.heading(r1038_fine * r1041_exp, r1038_fine * r1041_exp, r249_UPWARD))));
            r249_dependencyProfile[r1041_currentGlyph.name] = r249_getDependencyProfile(r1041_currentGlyph);
            return r1041_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.112', function _r1038_t3() {
            var _r1044_t0 = this;
            _r1044_t0.include(r1038_currentGlyph, true);
            return _r1044_t0.advanceWidth = r1038_currentGlyph.advanceWidth;
        }));
        r1038_currentGlyph.include(r1038_h);
        r1038_currentGlyph.include(r249_HBar(r249_tieLeft, r249_tieRight, r249_DESCENDER - r249_ACCENT, r1038_fine * 2));
        r249_xn$save$2Lrc5.call(r1038_currentGlyph, 'arrowTieBelow', 866);
        r249_dependencyProfile[r1038_currentGlyph.name] = r249_getDependencyProfile(r1038_currentGlyph);
        return r1038_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.111', r249_xn$donothing$2Lrc0b)));
    (function _r249_t111() {
        var _r1049_t0 = this;
        var r1049_currentGlyph = _r1049_t0;
        if (!r1049_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.113')
            r249_glyphList.pop();
        r1049_currentGlyph['set-width'](0);
        r1049_currentGlyph.include(r249_TildeShape(new r249_xn$NamedParameterPair$2Lrc9b('ttop', r249_aboveMarkTop + (r249_CAP - r249_XH)), new r249_xn$NamedParameterPair$2Lrc9b('tbot', r249_aboveMarkBot + (r249_CAP - r249_XH)), new r249_xn$NamedParameterPair$2Lrc9b('leftEnd', r249_tieLeft), new r249_xn$NamedParameterPair$2Lrc9b('rightEnd', r249_tieRight), new r249_xn$NamedParameterPair$2Lrc9b('hs', r249_markHalfStroke)));
        r249_xn$save$2Lrc5.call(r1049_currentGlyph, 'tildeTieAbove', 864);
        r249_dependencyProfile[r1049_currentGlyph.name] = r249_getDependencyProfile(r1049_currentGlyph);
        return r1049_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.113', r249_xn$donothing$2Lrc0b)));
    var r249_GreekLRDoubleMark = function _r249_t112(r1058_id, r1058_unicode, r1058_leftGlyph, r1058_rightGlyph) {
        (function _r1058_t2() {
            var _r1060_t0 = this;
            var r1060_currentGlyph = _r1060_t0;
            if (!r1060_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.114')
                r249_glyphList.pop();
            r1060_currentGlyph['set-width'](0);
            var r1060_k = -r249_WIDTH * 0.15;
            r1060_currentGlyph.include(r1058_leftGlyph);
            r1060_currentGlyph['apply-transform'](r249_Translate(2 * r1060_k, 0));
            r1060_currentGlyph.include(r1058_rightGlyph);
            r1060_currentGlyph['apply-transform'](r249_Translate(0 - r1060_k, 0));
            r1060_currentGlyph['set-anchor']('above', r249_MARK, r249_markMiddle, r249_XH, r249_markMiddle, r249_aboveMarkTop);
            r1060_currentGlyph.cmpPriority = 50;
            r249_xn$save$2Lrc5.call(r1060_currentGlyph, r1058_id);
            r249_dependencyProfile[r1060_currentGlyph.name] = r249_getDependencyProfile(r1060_currentGlyph);
            return r1060_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.114', r249_xn$donothing$2Lrc0b)));
        return function _r1058_t3() {
            var _r1069_t0 = this;
            var r1069_currentGlyph = _r1069_t0;
            if (!r1069_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.115')
                r249_glyphList.pop();
            r249_includeGlyphPart(r1069_currentGlyph, r249_glyphs, 'space', r249_AS_BASE);
            r249_includeGlyphPart(r1069_currentGlyph, r249_glyphs, r1058_id);
            r249_xn$save$2Lrc5.call(r1069_currentGlyph, 'spaced' + r1058_id, r1058_unicode);
            r249_dependencyProfile[r1069_currentGlyph.name] = r249_getDependencyProfile(r1069_currentGlyph);
            return r1069_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.115', r249_xn$donothing$2Lrc0b));
    };
    r249_GreekLRDoubleMark('psilivaria', 8141, r249_glyphs.commaAbove, r249_glyphs.variaAbove);
    r249_GreekLRDoubleMark('psilioxia', 8142, r249_glyphs.commaAbove, r249_glyphs.oxiaAbove);
    r249_GreekLRDoubleMark('dasiavaria', 8157, r249_glyphs.revCommaAbove, r249_glyphs.variaAbove);
    r249_GreekLRDoubleMark('dasiaoxia', 8158, r249_glyphs.revCommaAbove, r249_glyphs.oxiaAbove);
    var r249_yc = r249_aboveMarkTop - r249_commaAboveRadius + r249_DOTRADIUS * 0.3 + r249_commaOvershoot;
    (function _r249_t113() {
        var _r1074_t0 = this;
        var r1074_currentGlyph = _r1074_t0;
        if (!r1074_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.116')
            r249_glyphList.pop();
        r1074_currentGlyph['set-width'](0);
        r249_includeGlyphPart(r1074_currentGlyph, r249_glyphs, 'commaAbove');
        var r1074_radius = Math.max(r249_markExtend - r249_commaAboveRadius, r249_commaAboveRadius * 1.25);
        r1074_currentGlyph.include(r249_dispiro(r249_widths.lhs(Math.min(r249_markHalfStroke * 2, r249_adviceBlackness(6.5) * 1.25)), r249_g4.up.start(r249_markMiddle - r1074_radius, r249_yc, r249_heading(r249_UPWARD)), r249_arcvh(), r249_g4.right.mid(r249_markMiddle, r249_yc + r1074_radius), r249_archv(), r249_g4.down.end(r249_markMiddle + r1074_radius, r249_yc, r249_heading(r249_DOWNWARD))));
        r1074_currentGlyph['set-anchor']('above', r249_MARK, r249_markMiddle, r249_XH, r249_markMiddle, r249_aboveMarkTop + r249_markHalfStroke * 2);
        r1074_currentGlyph.cmpPriority = 50;
        r249_xn$save$2Lrc5.call(r1074_currentGlyph, 'psiliperispomeni');
        r249_dependencyProfile[r1074_currentGlyph.name] = r249_getDependencyProfile(r1074_currentGlyph);
        return r1074_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.116', r249_xn$donothing$2Lrc0b)));
    (function _r249_t114() {
        var _r1081_t0 = this;
        var r1081_currentGlyph = _r1081_t0;
        if (!r1081_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.117')
            r249_glyphList.pop();
        r249_includeGlyphPart(r1081_currentGlyph, r249_glyphs, 'space', r249_AS_BASE);
        r249_includeGlyphPart(r1081_currentGlyph, r249_glyphs, 'psiliperispomeni');
        r249_xn$save$2Lrc5.call(r1081_currentGlyph, 'spaced_psiliperispomeni', 8143);
        r249_dependencyProfile[r1081_currentGlyph.name] = r249_getDependencyProfile(r1081_currentGlyph);
        return r1081_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.117', r249_xn$donothing$2Lrc0b)));
    (function _r249_t115() {
        var _r1086_t0 = this;
        var r1086_currentGlyph = _r1086_t0;
        if (!r1086_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.118')
            r249_glyphList.pop();
        r1086_currentGlyph['set-width'](0);
        r249_includeGlyphPart(r1086_currentGlyph, r249_glyphs, 'revCommaAbove');
        var r1086_radius = Math.max(r249_markExtend - r249_commaAboveRadius, r249_commaAboveRadius * 1.25);
        r1086_currentGlyph.include(r249_dispiro(r249_widths.lhs(Math.min(r249_markHalfStroke * 2, r249_adviceBlackness(6.5) * 1.25)), r249_g4.up.start(r249_markMiddle - r1086_radius, r249_yc, r249_heading(r249_UPWARD)), r249_arcvh(), r249_g4.right.mid(r249_markMiddle, r249_yc + r1086_radius), r249_archv(), r249_g4.down.end(r249_markMiddle + r1086_radius, r249_yc, r249_heading(r249_DOWNWARD))));
        r1086_currentGlyph['set-anchor']('above', r249_MARK, r249_markMiddle, r249_XH, r249_markMiddle, r249_aboveMarkTop + r249_markHalfStroke * 2);
        r1086_currentGlyph.cmpPriority = 50;
        r249_xn$save$2Lrc5.call(r1086_currentGlyph, 'dasiaperispomeni');
        r249_dependencyProfile[r1086_currentGlyph.name] = r249_getDependencyProfile(r1086_currentGlyph);
        return r1086_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.118', r249_xn$donothing$2Lrc0b)));
    (function _r249_t116() {
        var _r1093_t0 = this;
        var r1093_currentGlyph = _r1093_t0;
        if (!r1093_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/overmarks.ptl.119')
            r249_glyphList.pop();
        r249_includeGlyphPart(r1093_currentGlyph, r249_glyphs, 'space', r249_AS_BASE);
        r249_includeGlyphPart(r1093_currentGlyph, r249_glyphs, 'dasiaperispomeni');
        r249_xn$save$2Lrc5.call(r1093_currentGlyph, 'spaced_dasiaperispomeni', 8159);
        r249_dependencyProfile[r1093_currentGlyph.name] = r249_getDependencyProfile(r1093_currentGlyph);
        return r1093_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/overmarks.ptl.119', r249_xn$donothing$2Lrc0b)));
    return {
        'markExtend': r249_markExtend,
        'markHalfStroke': r249_markHalfStroke,
        'markStress': r249_markStress,
        'markFine': r249_markFine,
        'markMiddle': r249_markMiddle,
        'markDotsRadius': r249_markDotsRadius,
        'aboveMarkTop': r249_aboveMarkTop,
        'aboveMarkBot': r249_aboveMarkBot,
        'aboveMarkMid': r249_aboveMarkMid,
        'belowMarkBot': r249_belowMarkBot,
        'belowMarkTop': r249_belowMarkTop,
        'commaOvershoot': r249_commaOvershoot,
        'commaOvershoot2': r249_commaOvershoot2,
        'commaAboveRadius': r249_commaAboveRadius,
        'TildeShape': r249_TildeShape
    };
};
