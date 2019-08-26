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
var r1_Transform = require('../support/transform');
var r1_maskBit = require('../support/mask-bit');
exports.apply = r1_apply = function _r1_t12() {
    var r251_subclass, r251_left, r251_right, _r251_t11, _r251_t15;
    var _r251_t16 = this;
    var r251_xn$capture$2Lrc = _r251_t16;
    var _r251_t0 = r251_xn$capture$2Lrc;
    var r251_metrics = _r251_t0.metrics;
    var r251_xn$NamedParameterPair$2Lrc9b = _r251_t0['$NamedParameterPair$'];
    var r251_xn$donothing$2Lrc0b = _r251_t0['$donothing$'];
    var r251_para = _r251_t0.para;
    var r251_recursive = _r251_t0.recursive;
    var r251_recursiveCodes = _r251_t0.recursiveCodes;
    var r251_variantSelector = _r251_t0.variantSelector;
    var r251_font = _r251_t0.font;
    var r251_glyphs = _r251_t0.glyphs;
    var r251_glyphList = _r251_t0.glyphList;
    var r251_unicodeGlyphs = _r251_t0.unicodeGlyphs;
    var r251_xn$createglyph$7Hrq = _r251_t0['create-glyph'];
    var r251_xn$save$2Lrc5 = _r251_t0['$save$'];
    var r251_xn$saveglyph$5sIl = _r251_t0['save-glyph'];
    var r251_spirofns = _r251_t0.spirofns;
    var r251_markset = _r251_t0.markset;
    var r251_MARK = _r251_t0.MARK;
    var r251_BASE = _r251_t0.BASE;
    var r251_AS_BASE = _r251_t0.AS_BASE;
    var r251_ALSO_METRICS = _r251_t0.ALSO_METRICS;
    var r251_pickHash = _r251_t0.pickHash;
    var r251_dependencyProfile = _r251_t0.dependencyProfile;
    var r251_getDependencyProfile = _r251_t0.getDependencyProfile;
    var r251_buildFont = _r251_t0.buildFont;
    var r251_newtemp = _r251_t0.newtemp;
    var r251_tagged = _r251_t0.tagged;
    var r251_TempFont = _r251_t0.TempFont;
    var r251_includeGlyphPart = _r251_t0.includeGlyphPart;
    var r251_compsiteMarkSet = _r251_t0.compsiteMarkSet;
    var r251_MarksetDiv = _r251_t0.MarksetDiv;
    var r251_DivFrame = _r251_t0.DivFrame;
    var _r251_t1 = r251_metrics;
    var r251_UPM = _r251_t1.UPM;
    var r251_WIDTH = _r251_t1.WIDTH;
    var r251_SB = _r251_t1.SB;
    var r251_CAP = _r251_t1.CAP;
    var r251_XH = _r251_t1.XH;
    var r251_DESCENDER = _r251_t1.DESCENDER;
    var r251_CONTRAST = _r251_t1.CONTRAST;
    var r251_symbolMid = _r251_t1.symbolMid;
    var r251_parenTop = _r251_t1.parenTop;
    var r251_parenBot = _r251_t1.parenBot;
    var r251_operTop = _r251_t1.operTop;
    var r251_operBot = _r251_t1.operBot;
    var r251_tackTop = _r251_t1.tackTop;
    var r251_tackBot = _r251_t1.tackBot;
    var r251_plusTop = _r251_t1.plusTop;
    var r251_plusBot = _r251_t1.plusBot;
    var r251_Italify = _r251_t1.Italify;
    var r251_Upright = _r251_t1.Upright;
    var r251_Scale = _r251_t1.Scale;
    var r251_Translate = _r251_t1.Translate;
    var r251_Rotate = _r251_t1.Rotate;
    var r251_globalTransform = _r251_t1.globalTransform;
    var r251_TANSLANT = _r251_t1.TANSLANT;
    var r251_SINSLANT = _r251_t1.SINSLANT;
    var r251_COSSLANT = _r251_t1.COSSLANT;
    var r251_HVCONTRAST = _r251_t1.HVCONTRAST;
    var r251_UPWARD = _r251_t1.UPWARD;
    var r251_DOWNWARD = _r251_t1.DOWNWARD;
    var r251_RIGHTWARD = _r251_t1.RIGHTWARD;
    var r251_LEFTWARD = _r251_t1.LEFTWARD;
    var r251_Upward = _r251_t1.Upward;
    var r251_Downward = _r251_t1.Downward;
    var r251_Leftward = _r251_t1.Leftward;
    var r251_Rightward = _r251_t1.Rightward;
    var r251_O = _r251_t1.O;
    var r251_OX = _r251_t1.OX;
    var r251_OXHOOK = _r251_t1.OXHOOK;
    var r251_HOOK = _r251_t1.HOOK;
    var r251_AHOOK = _r251_t1.AHOOK;
    var r251_SHOOK = _r251_t1.SHOOK;
    var r251_RHOOK = _r251_t1.RHOOK;
    var r251_JHOOK = _r251_t1.JHOOK;
    var r251_FHOOK = _r251_t1.FHOOK;
    var r251_HOOKX = _r251_t1.HOOKX;
    var r251_SMOOTH = _r251_t1.SMOOTH;
    var r251_SMALLSMOOTH = _r251_t1.SMALLSMOOTH;
    var r251_STROKE = _r251_t1.STROKE;
    var r251_DOTSIZE = _r251_t1.DOTSIZE;
    var r251_PERIODSIZE = _r251_t1.PERIODSIZE;
    var r251_BARPOS = _r251_t1.BARPOS;
    var r251_GBARPOS = _r251_t1.GBARPOS;
    var r251_PBARPOS = _r251_t1.PBARPOS;
    var r251_EBARPOS = _r251_t1.EBARPOS;
    var r251_OVERLAYPOS = _r251_t1.OVERLAYPOS;
    var r251_FIVEBARPOS = _r251_t1.FIVEBARPOS;
    var r251_LONGJUT = _r251_t1.LONGJUT;
    var r251_JUT = _r251_t1.JUT;
    var r251_VJUT = _r251_t1.VJUT;
    var r251_ACCENT = _r251_t1.ACCENT;
    var r251_ACCENTX = _r251_t1.ACCENTX;
    var r251_CTHIN = _r251_t1.CTHIN;
    var r251_CTHINB = _r251_t1.CTHINB;
    var r251_SLAB = _r251_t1.SLAB;
    var r251_TAILADJX = _r251_t1.TAILADJX;
    var r251_TAILADJY = _r251_t1.TAILADJY;
    var r251_LBALANCE = _r251_t1.LBALANCE;
    var r251_IBALANCE = _r251_t1.IBALANCE;
    var r251_LBALANCE2 = _r251_t1.LBALANCE2;
    var r251_IBALANCE2 = _r251_t1.IBALANCE2;
    var r251_JBALANCE = _r251_t1.JBALANCE;
    var r251_JBALANCE2 = _r251_t1.JBALANCE2;
    var r251_TBALANCE = _r251_t1.TBALANCE;
    var r251_TBALANCE2 = _r251_t1.TBALANCE2;
    var r251_RBALANCE = _r251_t1.RBALANCE;
    var r251_RBALANCE2 = _r251_t1.RBALANCE2;
    var r251_FBALANCE = _r251_t1.FBALANCE;
    var r251_ONEBALANCE = _r251_t1.ONEBALANCE;
    var r251_FULLWIDTH = _r251_t1.FULLWIDTH;
    var r251_FULLWIDTH1 = _r251_t1.FULLWIDTH1;
    var r251_FULLWIDTH2 = _r251_t1.FULLWIDTH2;
    var r251_FULLWIDTH3 = _r251_t1.FULLWIDTH3;
    var r251_OXE = _r251_t1.OXE;
    var r251_ESS = _r251_t1.ESS;
    var r251_ESSQUESTION = _r251_t1.ESSQUESTION;
    var r251_XO = _r251_t1.XO;
    var r251_CAPO = _r251_t1.CAPO;
    var r251_HALFSTROKE = _r251_t1.HALFSTROKE;
    var r251_RIGHTSB = _r251_t1.RIGHTSB;
    var r251_FWRSB = _r251_t1.FWRSB;
    var r251_MIDDLE = _r251_t1.MIDDLE;
    var r251_FWMIDDLE = _r251_t1.FWMIDDLE;
    var r251_CAPMIDDLE = _r251_t1.CAPMIDDLE;
    var r251_CAP_SMOOTH = _r251_t1.CAP_SMOOTH;
    var r251_DOTRADIUS = _r251_t1.DOTRADIUS;
    var r251_PERIODRADIUS = _r251_t1.PERIODRADIUS;
    var r251_SIDEJUT = _r251_t1.SIDEJUT;
    var r251_SMOOTHA = _r251_t1.SMOOTHA;
    var r251_SMOOTHB = _r251_t1.SMOOTHB;
    var r251_SMALLSMOOTHA = _r251_t1.SMALLSMOOTHA;
    var r251_SMALLSMOOTHB = _r251_t1.SMALLSMOOTHB;
    var r251_CORRECTION_OMIDX = _r251_t1.CORRECTION_OMIDX;
    var r251_CORRECTION_OMIDS = _r251_t1.CORRECTION_OMIDS;
    var r251_WHITENESS = _r251_t1.WHITENESS;
    var r251_adviceBlackness = _r251_t1.adviceBlackness;
    var r251_adviceBlackness2 = _r251_t1.adviceBlackness2;
    var r251_MVERTSTROKE = _r251_t1.MVERTSTROKE;
    var r251_MVERTSTROKE_D = _r251_t1.MVERTSTROKE_D;
    var r251_OVERLAYSTROKE = _r251_t1.OVERLAYSTROKE;
    var r251_OPERATORSTROKE = _r251_t1.OPERATORSTROKE;
    var r251_GEOMETRYSTROKE = _r251_t1.GEOMETRYSTROKE;
    var r251_SHOULDERFINE = _r251_t1.SHOULDERFINE;
    var r251_SUPERNESS = _r251_t1.SUPERNESS;
    var r251_superxy = _r251_t1.superxy;
    var r251_adviceSSmooth = _r251_t1.adviceSSmooth;
    var r251_adviceGlottalStopSmooth = _r251_t1.adviceGlottalStopSmooth;
    var r251_shoulderMidSlope = _r251_t1.shoulderMidSlope;
    var _r251_t2 = r251_spirofns;
    var r251_g4 = _r251_t2.g4;
    var r251_g2 = _r251_t2.g2;
    var r251_corner = _r251_t2.corner;
    var r251_flat = _r251_t2.flat;
    var r251_curl = _r251_t2.curl;
    var r251_close = _r251_t2.close;
    var r251_end = _r251_t2.end;
    var r251_straight = _r251_t2.straight;
    var r251_widths = _r251_t2.widths;
    var r251_xn$disablegizmo$3qIs = _r251_t2['disable-gizmo'];
    var r251_xn$disablecontrast$3qIs = _r251_t2['disable-contrast'];
    var r251_heading = _r251_t2.heading;
    var r251_unimportant = _r251_t2.unimportant;
    var r251_important = _r251_t2.important;
    var r251_alsothru = _r251_t2.alsothru;
    var r251_alsothruthem = _r251_t2.alsothruthem;
    var r251_bezcontrols = _r251_t2.bezcontrols;
    var r251_quadcontrols = _r251_t2.quadcontrols;
    var r251_archv = _r251_t2.archv;
    var r251_arcvh = _r251_t2.arcvh;
    var r251_complexThru = _r251_t2.complexThru;
    var r251_dispiro = _r251_t2.dispiro;
    var r251_xn$spirooutline$1aao = _r251_t2['spiro-outline'];
    var r251_union = _r251_t2.union;
    var r251_intersection = _r251_t2.intersection;
    var r251_difference = _r251_t2.difference;
    var _r251_t3 = r251_xn$capture$2Lrc.commonShapes;
    var r251_queryFeatureSelector = _r251_t3.queryFeatureSelector;
    var r251_xn$selectvariant$7Hrq = _r251_t3['select-variant'];
    var r251_xn$italicvariant$7Hrq = _r251_t3['italic-variant'];
    var r251_alias = _r251_t3.alias;
    var r251_composite = _r251_t3.composite;
    var r251_xn$intounicode$5sIl = _r251_t3['into-unicode'];
    var r251_turned = _r251_t3.turned;
    var r251_hcombine = _r251_t3.hcombine;
    var r251_vcombine = _r251_t3.vcombine;
    var r251_dual = _r251_t3.dual;
    var r251_vdual = _r251_t3.vdual;
    var r251_fwl = _r251_t3.fwl;
    var r251_fwr = _r251_t3.fwr;
    var r251_dwl = _r251_t3.dwl;
    var r251_dwr = _r251_t3.dwr;
    var r251_dwc = _r251_t3.dwc;
    var r251_Rect = _r251_t3.Rect;
    var r251_Ring = _r251_t3.Ring;
    var r251_RingAt = _r251_t3.RingAt;
    var r251_DotAt = _r251_t3.DotAt;
    var r251_CircleRing = _r251_t3.CircleRing;
    var r251_CircleRingAt = _r251_t3.CircleRingAt;
    var r251_CircleDotAt = _r251_t3.CircleDotAt;
    var r251_OShape = _r251_t3.OShape;
    var r251_OShapeOutline = _r251_t3.OShapeOutline;
    var r251_OBarLeftShape = _r251_t3.OBarLeftShape;
    var r251_OBarRightShape = _r251_t3.OBarRightShape;
    var r251_LeftwardTopSerif = _r251_t3.LeftwardTopSerif;
    var r251_LeftwardBottomSerif = _r251_t3.LeftwardBottomSerif;
    var r251_RightwardTopSerif = _r251_t3.RightwardTopSerif;
    var r251_RightwardBottomSerif = _r251_t3.RightwardBottomSerif;
    var r251_CenterTopSerif = _r251_t3.CenterTopSerif;
    var r251_CenterBottomSerif = _r251_t3.CenterBottomSerif;
    var r251_DownwardRightSerif = _r251_t3.DownwardRightSerif;
    var r251_UpwardRightSerif = _r251_t3.UpwardRightSerif;
    var r251_DownwardLeftSerif = _r251_t3.DownwardLeftSerif;
    var r251_UpwardLeftSerif = _r251_t3.UpwardLeftSerif;
    var r251_AIVSerifs = _r251_t3.AIVSerifs;
    var r251_AIHSerifs = _r251_t3.AIHSerifs;
    var r251_AINSerifs = _r251_t3.AINSerifs;
    var r251_AICyrISerifs = _r251_t3.AICyrISerifs;
    var r251_AIMSerifs = _r251_t3.AIMSerifs;
    var r251_halfXStrand = _r251_t3.halfXStrand;
    var r251_xStrand = _r251_t3.xStrand;
    var r251_nShoulderKnots = _r251_t3.nShoulderKnots;
    var r251_nShoulder = _r251_t3.nShoulder;
    var r251_mShoulderSpiro = _r251_t3.mShoulderSpiro;
    var r251_HBar = _r251_t3.HBar;
    var r251_HBarTop = _r251_t3.HBarTop;
    var r251_HBarBottom = _r251_t3.HBarBottom;
    var r251_HOverlayBar = _r251_t3.HOverlayBar;
    var r251_VBar = _r251_t3.VBar;
    var r251_VBarLeft = _r251_t3.VBarLeft;
    var r251_VBarRight = _r251_t3.VBarRight;
    var r251_VerticalHook = _r251_t3.VerticalHook;
    var r251_LegShape = _r251_t3.LegShape;
    var r251_LeftHook = _r251_t3.LeftHook;
    var r251_HooktopLeftBar = _r251_t3.HooktopLeftBar;
    var r251_CurlyTail = _r251_t3.CurlyTail;
    var r251_HCurlyTail = _r251_t3.HCurlyTail;
    var r251_FlatSlashShape = _r251_t3.FlatSlashShape;
    var r251_determineMixR = _r251_t3.determineMixR;
    var r251_HookShape = _r251_t3.HookShape;
    var r251_hookstart = _r251_t3.hookstart;
    var r251_hookend = _r251_t3.hookend;
    var r251_CyrDescender = _r251_t3.CyrDescender;
    var r251_refair = _r251_t3.refair;
    var r251_Fork = _r251_t3.Fork;
    var r251_Miniature = _r251_t3.Miniature;
    var r251_Thinner = _r251_t3.Thinner;
    var r251_Widen = _r251_t3.Widen;
    var r251_FlipAround = _r251_t3.FlipAround;
    var r251_ScaleAround = _r251_t3.ScaleAround;
    var r251_Realign = _r251_t3.Realign;
    var r251_ForceUpright = _r251_t3.ForceUpright;
    var r251_Overlay = _r251_t3.Overlay;
    var r251_diagCor = _r251_t3.diagCor;
    var _r251_t4 = r251_xn$capture$2Lrc.overmarks;
    var r251_markExtend = _r251_t4.markExtend;
    var r251_markHalfStroke = _r251_t4.markHalfStroke;
    var r251_markStress = _r251_t4.markStress;
    var r251_markFine = _r251_t4.markFine;
    var r251_markMiddle = _r251_t4.markMiddle;
    var r251_markDotsRadius = _r251_t4.markDotsRadius;
    var r251_aboveMarkTop = _r251_t4.aboveMarkTop;
    var r251_aboveMarkBot = _r251_t4.aboveMarkBot;
    var r251_aboveMarkMid = _r251_t4.aboveMarkMid;
    var r251_belowMarkBot = _r251_t4.belowMarkBot;
    var r251_belowMarkTop = _r251_t4.belowMarkTop;
    var r251_commaOvershoot = _r251_t4.commaOvershoot;
    var r251_commaOvershoot2 = _r251_t4.commaOvershoot2;
    var r251_commaAboveRadius = _r251_t4.commaAboveRadius;
    var r251_TildeShape = _r251_t4.TildeShape;
    var _r251_t5 = r251_xn$capture$2Lrc.geometricSymbols;
    var r251_ArrowShape = _r251_t5.ArrowShape;
    var r251_triangleSize = Math.min(r251_PERIODRADIUS, r251_XH / 5);
    (function _r251_t18() {
        var _r254_t0 = this;
        var r254_currentGlyph = _r254_t0;
        if (!r254_currentGlyph)
            return void 0;
        if (r251_glyphList[r251_glyphList.length - 1].name === '.WF.glyphs/symbol-other.ptl.1')
            r251_glyphList.pop();
        r254_currentGlyph['start-from'](r251_MIDDLE - r251_triangleSize * 1.35, r251_XH);
        r254_currentGlyph['line-to'](r251_MIDDLE, r251_XH - r251_triangleSize * 2.75);
        r254_currentGlyph['line-to'](r251_MIDDLE + r251_triangleSize * 1.35, r251_XH);
        r254_currentGlyph['start-from'](r251_MIDDLE - r251_triangleSize * 1.35, 0);
        r254_currentGlyph['line-to'](r251_MIDDLE, 0 + r251_triangleSize * 2.75);
        r254_currentGlyph['line-to'](r251_MIDDLE + r251_triangleSize * 1.35, 0);
        r251_xn$save$2Lrc5.call(r254_currentGlyph, 'trianglecolon', 720);
        r251_dependencyProfile[r254_currentGlyph.name] = r251_getDependencyProfile(r254_currentGlyph);
        return r254_currentGlyph;
    }.call(r251_xn$createglyph$7Hrq('.WF.glyphs/symbol-other.ptl.1', r251_xn$donothing$2Lrc0b)));
    (function _r251_t19() {
        var _r263_t0 = this;
        var r263_currentGlyph = _r263_t0;
        if (!r263_currentGlyph)
            return void 0;
        if (r251_glyphList[r251_glyphList.length - 1].name === '.WF.glyphs/symbol-other.ptl.2')
            r251_glyphList.pop();
        r263_currentGlyph['start-from'](r251_MIDDLE - r251_triangleSize * 1.35, r251_XH);
        r263_currentGlyph['line-to'](r251_MIDDLE, r251_XH - r251_triangleSize * 2.75);
        r263_currentGlyph['line-to'](r251_MIDDLE + r251_triangleSize * 1.35, r251_XH);
        r251_xn$save$2Lrc5.call(r263_currentGlyph, 'halftrianglecolon', 721);
        r251_dependencyProfile[r263_currentGlyph.name] = r251_getDependencyProfile(r263_currentGlyph);
        return r263_currentGlyph;
    }.call(r251_xn$createglyph$7Hrq('.WF.glyphs/symbol-other.ptl.2', r251_xn$donothing$2Lrc0b)));
    var _r251_t6 = 4;
    var _r251_t7 = 0;
    var r251_tone = _r251_t6;
    for (; r251_tone >= _r251_t7; r251_tone = r251_tone - 1)
        r251_xn$createglyph$7Hrq('tone' + r251_tone, function _r251_t20() {
            var _r270_t0 = this;
            var r270_currentGlyph = _r270_t0;
            r270_currentGlyph['assign-unicode'](741 + 4 - r251_tone);
            r251_unicodeGlyphs[r270_currentGlyph.unicode[r270_currentGlyph.unicode.length - 1]] = r270_currentGlyph;
            r270_currentGlyph.include(r251_VBarRight(r1_mix(r251_SB, r251_RIGHTSB, 0.9), 0, r251_CAP, r251_OPERATORSTROKE));
            r270_currentGlyph.include(r251_HBar(r1_mix(r251_SB, r251_RIGHTSB, 0.1), r1_mix(r251_SB, r251_RIGHTSB, 0.9) - 1, r1_mix(r251_OPERATORSTROKE / 2, r251_CAP - r251_OPERATORSTROKE / 2, r251_tone / 4), r251_OPERATORSTROKE));
            return void 0;
        });
    (function () {
        var r275_df = r251_DivFrame(r251_para.diversityM);
        var r275_heartTop = r1_mix(r251_symbolMid, r251_operTop, 0.75);
        var r275_heartBot = r1_mix(r251_symbolMid, r251_operBot, 0.75);
        var r275_heartRight = r275_df.middle + r1_mix(r251_RIGHTSB, r251_WIDTH, 1 / 2) - r251_MIDDLE;
        var r275_heartLeft = r275_df.middle - (r275_heartRight - r275_df.middle);
        var r275_sw = r251_adviceBlackness(4.25);
        var r275_y1 = r1_mix(r275_heartBot, r275_heartTop, 0.5);
        var r275_y2 = r1_mix(r275_heartBot, r275_heartTop, 0.75);
        var r275_y3 = r1_mix(r275_heartBot, r275_heartTop, 0.75);
        var r275_wrap = function _r275_t0(r276_g) {
            return function _r276_t2() {
                var _r278_t0 = this;
                var r278_currentGlyph = _r278_t0;
                r278_currentGlyph['set-width'](r275_df.width);
                r278_currentGlyph.include(r276_g, r251_AS_BASE);
                return void 0;
            };
        };
        var r275_HeartInnerShape = function _r275_t1(r281_sw, r281_tip, r281_ext) {
            return r251_xn$spirooutline$1aao(r251_corner(r275_df.middle, r275_heartBot + r281_sw * r281_tip), r251_quadcontrols(1, 2 / 3), r251_g4(r275_heartRight - r251_O - r281_sw, r275_y2), r251_arcvh(), r251_g4(r1_mix(r275_df.middle, r275_heartRight, 0.5), r275_heartTop - r281_sw * r281_tip / 1.75), r251_archv(), r281_sw ? [
                r251_corner(r275_df.middle + r281_sw / 3, r275_y3 - r281_sw * r281_ext),
                r251_corner(r275_df.middle - r281_sw / 3, r275_y3 - r281_sw * r281_ext)
            ] : r251_corner(r275_df.middle, r275_y3 - r281_sw), r251_arcvh(), r251_g4(r1_mix(r275_df.middle, r275_heartLeft, 0.5), r275_heartTop - r281_sw * r281_tip / 1.75), r251_archv(), r251_g4(r275_heartLeft + r251_O + r281_sw, r275_y2), r251_quadcontrols(0, 1 / 3), r251_close());
        };
        r251_xn$saveglyph$5sIl('heartSuit', 9829, r275_wrap(r275_HeartInnerShape(0, 0, 0)));
        r251_xn$saveglyph$5sIl('whiteHeartSuit', 9825, r275_wrap(r251_difference(r251_glyphs.heartSuit, r275_HeartInnerShape(r275_sw, 1.75, 0.8))));
        r251_xn$saveglyph$5sIl('spadeSuit', 9824, r275_wrap(r251_union(function _r275_t2() {
            var _r283_t0 = this;
            var r283_currentGlyph = _r283_t0;
            if (!r283_currentGlyph)
                return void 0;
            if (r251_glyphList[r251_glyphList.length - 1].name === '.WF.glyphs/symbol-other.ptl.3')
                r251_glyphList.pop();
            r251_includeGlyphPart(r283_currentGlyph, r251_glyphs, 'heartSuit');
            r283_currentGlyph['apply-transform'](r251_Upright());
            r283_currentGlyph['apply-transform'](r251_Translate(-r275_df.middle, -r275_heartBot));
            r283_currentGlyph['apply-transform'](r251_Scale(1, -0.75));
            r283_currentGlyph['apply-transform'](r251_Translate(r275_df.middle, r275_heartTop));
            r283_currentGlyph['apply-transform'](r251_Italify());
            r251_dependencyProfile[r283_currentGlyph.name] = r251_getDependencyProfile(r283_currentGlyph);
            return r283_currentGlyph;
        }.call(r251_xn$createglyph$7Hrq('.WF.glyphs/symbol-other.ptl.3', r251_xn$donothing$2Lrc0b)), r251_HBarBottom(r1_mix(r251_SB, r275_df.rightSB, 0.25), r1_mix(r275_df.rightSB, r251_SB, 0.25), r275_heartBot, r275_sw), r251_VBar(r275_df.middle, r275_heartBot, r1_mix(r275_heartBot, r275_heartTop, 1 - 0.75 * 0.75), r275_sw))));
        r251_xn$saveglyph$5sIl('whiteSpadeSuit', 9828, r275_wrap(r251_difference(r251_glyphs.spadeSuit, function _r275_t3() {
            var _r291_t0 = this;
            var r291_currentGlyph = _r291_t0;
            if (!r291_currentGlyph)
                return void 0;
            if (r251_glyphList[r251_glyphList.length - 1].name === '.WF.glyphs/symbol-other.ptl.4')
                r251_glyphList.pop();
            r291_currentGlyph.include(r275_HeartInnerShape(r275_sw, 2, 0));
            r291_currentGlyph['apply-transform'](r251_Upright());
            r291_currentGlyph['apply-transform'](r251_Translate(-r275_df.middle, -r275_heartBot));
            r291_currentGlyph['apply-transform'](r251_Scale(1, -0.75));
            r291_currentGlyph['apply-transform'](r251_Translate(r275_df.middle, r275_heartTop));
            r291_currentGlyph['apply-transform'](r251_Italify());
            r251_dependencyProfile[r291_currentGlyph.name] = r251_getDependencyProfile(r291_currentGlyph);
            return r291_currentGlyph;
        }.call(r251_xn$createglyph$7Hrq('.WF.glyphs/symbol-other.ptl.4', r251_xn$donothing$2Lrc0b)))));
        var r275_clubTopY = r1_mix(r275_heartTop, r275_heartBot, 0.22);
        var r275_clubTriangleHeight = (r275_heartTop - r275_heartBot) * 0.3;
        var r275_ClubTriangles = function _r275_t4(r298_r) {
            return r251_union(r251_RingAt(r275_df.middle, r275_clubTopY, r298_r), r251_RingAt(r275_df.middle - r275_clubTriangleHeight / Math.sqrt(3), r275_clubTopY - r275_clubTriangleHeight, r298_r), r251_RingAt(r275_df.middle + r275_clubTriangleHeight / Math.sqrt(3), r275_clubTopY - r275_clubTriangleHeight, r298_r), r251_xn$spirooutline$1aao(r251_corner(r275_df.middle, r275_clubTopY), r251_corner(r275_df.middle - r275_clubTriangleHeight / Math.sqrt(3), r275_clubTopY - r275_clubTriangleHeight), r251_corner(r275_df.middle + r275_clubTriangleHeight / Math.sqrt(3), r275_clubTopY - r275_clubTriangleHeight)));
        };
        var r275_ClubShape = function _r275_t5(r299_r) {
            return function _r299_t2() {
                var _r301_t0 = this;
                var r301_currentGlyph = _r301_t0;
                if (!r301_currentGlyph)
                    return void 0;
                if (r251_glyphList[r251_glyphList.length - 1].name === '.WF.glyphs/symbol-other.ptl.5')
                    r251_glyphList.pop();
                r301_currentGlyph.include(r275_ClubTriangles(r299_r));
                r301_currentGlyph.include(r251_HBarBottom(r1_mix(r251_SB, r275_df.rightSB, 0.25), r1_mix(r275_df.rightSB, r251_SB, 0.25), r275_heartBot, r275_sw));
                r301_currentGlyph.include(r251_VBar(r275_df.middle, r275_heartBot, r1_mix(r275_heartBot, r275_heartTop, 0.45), r275_sw));
                r251_dependencyProfile[r301_currentGlyph.name] = r251_getDependencyProfile(r301_currentGlyph);
                return r301_currentGlyph;
            }.call(r251_xn$createglyph$7Hrq('.WF.glyphs/symbol-other.ptl.5', r251_xn$donothing$2Lrc0b));
        };
        var r275_circleRadius = (r275_heartTop - r275_heartBot) * 0.18;
        r251_xn$saveglyph$5sIl('clubSuit', 9827, r275_wrap(r275_ClubShape(r275_circleRadius)));
        r251_xn$saveglyph$5sIl('whiteClubSuit', 9831, r275_wrap(function _r275_t6() {
            var _r306_t0 = this;
            var r306_currentGlyph = _r306_t0;
            if (!r306_currentGlyph)
                return void 0;
            if (r251_glyphList[r251_glyphList.length - 1].name === '.WF.glyphs/symbol-other.ptl.6')
                r251_glyphList.pop();
            var r306_ro = r275_circleRadius + r275_sw / 2;
            var r306_ri = r275_circleRadius - r275_sw / 2;
            r306_currentGlyph.include(r251_difference(r275_ClubShape(r306_ro), r275_ClubTriangles(r306_ri)));
            r251_dependencyProfile[r306_currentGlyph.name] = r251_getDependencyProfile(r306_currentGlyph);
            return r306_currentGlyph;
        }.call(r251_xn$createglyph$7Hrq('.WF.glyphs/symbol-other.ptl.6', r251_xn$donothing$2Lrc0b))));
        r251_xn$saveglyph$5sIl('diamondSuit', 9830, r275_wrap(function _r275_t7() {
            var _r309_t0 = this;
            var r309_currentGlyph = _r309_t0;
            if (!r309_currentGlyph)
                return void 0;
            if (r251_glyphList[r251_glyphList.length - 1].name === '.WF.glyphs/symbol-other.ptl.7')
                r251_glyphList.pop();
            r309_currentGlyph['start-from'](r275_df.middle, r275_heartTop);
            r309_currentGlyph['line-to'](r275_heartRight - r251_O, r251_symbolMid);
            r309_currentGlyph['line-to'](r275_df.middle, r275_heartBot);
            r309_currentGlyph['line-to'](r275_heartLeft + r251_O, r251_symbolMid);
            r251_dependencyProfile[r309_currentGlyph.name] = r251_getDependencyProfile(r309_currentGlyph);
            return r309_currentGlyph;
        }.call(r251_xn$createglyph$7Hrq('.WF.glyphs/symbol-other.ptl.7', r251_xn$donothing$2Lrc0b))));
        return r251_xn$saveglyph$5sIl('whiteDiamondSuit', 9826, r275_wrap(r251_intersection(r251_glyphs.diamondSuit, r251_union(r251_dispiro(r251_widths.rhs(r275_sw), r251_flat(r275_df.middle, r275_heartTop), r251_curl(r275_heartRight - r251_O, r251_symbolMid)), r251_dispiro(r251_widths.rhs(r275_sw), r251_flat(r275_heartRight - r251_O, r251_symbolMid), r251_curl(r275_df.middle, r275_heartBot)), r251_dispiro(r251_widths.rhs(r275_sw), r251_flat(r275_df.middle, r275_heartBot), r251_curl(r275_heartLeft + r251_O, r251_symbolMid)), r251_dispiro(r251_widths.rhs(r275_sw), r251_flat(r275_heartLeft + r251_O, r251_symbolMid), r251_curl(r275_df.middle, r275_heartTop))))));
    }());
    (function _r251_t23() {
        var _r315_t0 = this;
        var r315_currentGlyph = _r315_t0;
        if (!r315_currentGlyph)
            return void 0;
        if (r251_glyphList[r251_glyphList.length - 1].name === '.WF.glyphs/symbol-other.ptl.8')
            r251_glyphList.pop();
        var r315_obot = r251_operTop - r251_RIGHTSB + r251_SB;
        r315_currentGlyph.include(r251_OShape(r251_operTop, r315_obot, r251_SB, r251_RIGHTSB, r251_OPERATORSTROKE));
        r315_currentGlyph.include(r251_VBar(r251_MIDDLE, r251_operBot, r315_obot, r251_OPERATORSTROKE));
        r315_currentGlyph.include(r251_HBar(r251_SB, r251_RIGHTSB, r1_mix(r251_operBot, r315_obot + r251_OPERATORSTROKE, 0.5), r251_OPERATORSTROKE));
        r251_xn$save$2Lrc5.call(r315_currentGlyph, 'venus', 9792);
        r251_dependencyProfile[r315_currentGlyph.name] = r251_getDependencyProfile(r315_currentGlyph);
        return r315_currentGlyph;
    }.call(r251_xn$createglyph$7Hrq('.WF.glyphs/symbol-other.ptl.8', r251_xn$donothing$2Lrc0b)));
    r251_turned('earth', 9793, 'venus', r251_MIDDLE, r251_symbolMid);
    (function _r251_t24() {
        var _r321_t0 = this;
        var r321_currentGlyph = _r321_t0;
        if (!r321_currentGlyph)
            return void 0;
        if (r251_glyphList[r251_glyphList.length - 1].name === '.WF.glyphs/symbol-other.ptl.9')
            r251_glyphList.pop();
        var r321_otop = r251_operBot + r251_RIGHTSB - r251_SB;
        r321_currentGlyph.include(r251_OShape(r321_otop, r251_operBot, r251_SB, r251_RIGHTSB, r251_OPERATORSTROKE));
        r321_currentGlyph.include(r251_ArrowShape(r251_MIDDLE, r321_otop - r251_OPERATORSTROKE / 3, r251_MIDDLE, r251_operTop, (r251_RIGHTSB - r251_SB) * 0.4));
        r251_xn$save$2Lrc5.call(r321_currentGlyph, 'mars', 9794);
        r251_dependencyProfile[r321_currentGlyph.name] = r251_getDependencyProfile(r321_currentGlyph);
        return r321_currentGlyph;
    }.call(r251_xn$createglyph$7Hrq('.WF.glyphs/symbol-other.ptl.9', r251_xn$donothing$2Lrc0b)));
    (function () {
        var r326_fine = r251_adviceBlackness(6);
        var r326_noteSize = r251_WIDTH * 0.4 + r326_fine / 2;
        var r326_noteCompress = 0.8;
        var r326_commonNoteBottom = r251_operBot + r326_noteCompress / 2 * r326_noteSize;
        var r326_BandShape = function _r326_t0(r327_z1, r327_z2, r327_l, r327_r, r327_h) {
            var r327_slope = (r327_z2.y - r327_z1.y) / (r327_z2.x - r327_z1.x);
            var r327_yl = r327_z1.y + (r327_l - r327_z1.x) * r327_slope;
            var r327_yr = r327_z1.y + (r327_r - r327_z1.x) * r327_slope;
            return r251_xn$spirooutline$1aao(r251_corner(r327_l, r327_yl), r251_corner(r327_r, r327_yr), r251_corner(r327_r, r327_yr + r327_h), r251_corner(r327_l, r327_yl + r327_h));
        };
        var r326_MusicalNoteAt = function _r326_t1(r328_size, r328_x, r328_y) {
            return function _r328_t2() {
                var _r330_t0 = this;
                var r330_currentGlyph = _r330_t0;
                if (!r330_currentGlyph)
                    return void 0;
                if (r251_glyphList[r251_glyphList.length - 1].name === '.WF.glyphs/symbol-other.ptl.10')
                    r251_glyphList.pop();
                r330_currentGlyph.include(r251_Ring(-r326_noteCompress / 2 * r328_size, r326_noteCompress / 2 * r328_size, -r328_size, 0));
                r330_currentGlyph.include(r251_Upright());
                r330_currentGlyph.include(new r1_Transform(1, 0, 0.15, 1, 0, 0));
                r330_currentGlyph.include(r251_Translate(r328_x, r328_y));
                r330_currentGlyph.include(r251_Italify());
                r251_dependencyProfile[r330_currentGlyph.name] = r251_getDependencyProfile(r330_currentGlyph);
                return r330_currentGlyph;
            }.call(r251_xn$createglyph$7Hrq('.WF.glyphs/symbol-other.ptl.10', r251_xn$donothing$2Lrc0b));
        };
        r251_xn$saveglyph$5sIl('crotchet', 9833, r251_union(r326_MusicalNoteAt(r326_noteSize, r251_MIDDLE + r326_noteSize / 6 + r326_fine / 2 * r251_HVCONTRAST, r326_commonNoteBottom), r251_VBar(r251_MIDDLE + r326_noteSize / 6, r326_commonNoteBottom, r251_operTop, r326_fine)));
        r251_xn$saveglyph$5sIl('quaver', 9834, function _r326_t2() {
            var _r337_t0 = this;
            var r337_currentGlyph = _r337_t0;
            if (!r337_currentGlyph)
                return void 0;
            if (r251_glyphList[r251_glyphList.length - 1].name === '.WF.glyphs/symbol-other.ptl.11')
                r251_glyphList.pop();
            var r337_x3 = r1_mix(r251_MIDDLE, r251_RIGHTSB, 0.35);
            var r337_y3 = r1_mix(r251_operBot, r251_operTop, 0.25);
            var r337_y2 = r1_mix(r337_y3, r251_operTop, 0.25);
            r337_currentGlyph.include(r251_union(r326_MusicalNoteAt(r326_noteSize, r251_MIDDLE, r326_commonNoteBottom), r251_VBarRight(r251_MIDDLE, r326_commonNoteBottom, r251_operTop, r326_fine), r251_dispiro(r251_widths.rhs(r326_fine), r251_g4.down.start(r251_MIDDLE, r251_operTop), r251_g4.down.mid(r251_RIGHTSB, r337_y2), r251_g4(r337_x3, r337_y3))));
            r251_dependencyProfile[r337_currentGlyph.name] = r251_getDependencyProfile(r337_currentGlyph);
            return r337_currentGlyph;
        }.call(r251_xn$createglyph$7Hrq('.WF.glyphs/symbol-other.ptl.11', r251_xn$donothing$2Lrc0b)));
        (function () {
            var r340_x1 = r251_MIDDLE - r326_noteSize / 6;
            var r340_x2 = r340_x1 + r326_noteSize * 7 / 6;
            var r340_deltaY = r326_noteCompress * r326_noteSize / 2;
            var r340_lb1 = r251_operBot + r326_noteCompress / 2 * r326_noteSize;
            var r340_bandWidth = r326_noteSize * r326_noteCompress * 0.75;
            r251_xn$saveglyph$5sIl('beamQuaver', 9835, r251_difference(r251_union(r326_MusicalNoteAt(r326_noteSize, r340_x1, r326_commonNoteBottom), r251_VBarRight(r340_x1, r326_commonNoteBottom, r251_operTop - r340_deltaY, r326_fine), r326_MusicalNoteAt(r326_noteSize, r340_x2, r326_commonNoteBottom + r340_deltaY), r251_VBarRight(r340_x2, r326_commonNoteBottom + r340_deltaY, r251_operTop, r326_fine), r326_BandShape({
                'x': r340_x1,
                'y': r251_operTop - r340_deltaY
            }, {
                'x': r340_x2,
                'y': r251_operTop
            }, r340_x1 - r326_fine * r251_HVCONTRAST, r340_x2 + 0, 0 - r340_bandWidth)), r326_BandShape({
                'x': r340_x1,
                'y': r251_operTop - r340_deltaY
            }, {
                'x': r340_x2,
                'y': r251_operTop
            }, r340_x1 - r326_fine * r251_HVCONTRAST, r340_x2 + 0, 0 + r340_bandWidth)));
            return r251_xn$saveglyph$5sIl('beamSemiQuaver', 9836, r251_union(r251_glyphs.beamQuaver, r326_BandShape({
                'x': r340_x1,
                'y': r251_operTop - r340_deltaY - 1.5 * r340_bandWidth
            }, {
                'x': r340_x2,
                'y': r251_operTop - 1.5 * r340_bandWidth
            }, r340_x1 - r326_fine * r251_HVCONTRAST, r340_x2 + 0, 0 - r340_bandWidth)));
        }());
        return function () {
            var r342_nsTop = r251_operTop;
            var r342_nsBot = r251_operBot;
            var r342_fine = r251_adviceBlackness(3.5);
            var r342_fine2 = r251_adviceBlackness(4);
            var r342_l = r251_SB - r342_fine / 2;
            var r342_r = r251_RIGHTSB + r342_fine / 2;
            var r342_hsp = (r342_r - r342_l - r342_fine * 2 * r251_HVCONTRAST) * 0.3;
            var r342_skew = 0.2;
            r251_xn$saveglyph$5sIl('sharpTone', 9839, function _r342_t0() {
                var _r344_t0 = this;
                var r344_currentGlyph = _r344_t0;
                if (!r344_currentGlyph)
                    return void 0;
                if (r251_glyphList[r251_glyphList.length - 1].name === '.WF.glyphs/symbol-other.ptl.12')
                    r251_glyphList.pop();
                r344_currentGlyph.include(r251_dispiro(r251_widths.center(), r251_flat(r342_l, r1_mix(r342_nsTop, r342_nsBot, 0.3) - (r251_MIDDLE - r342_l) * r342_skew, r251_heading(r251_RIGHTWARD)), r251_curl(r342_r, r1_mix(r342_nsTop, r342_nsBot, 0.3) - (r251_MIDDLE - r342_r) * r342_skew, r251_heading(r251_RIGHTWARD))));
                r344_currentGlyph.include(r251_dispiro(r251_widths.center(), r251_flat(r342_l, r1_mix(r342_nsTop, r342_nsBot, 0.7) - (r251_MIDDLE - r342_l) * r342_skew, r251_heading(r251_RIGHTWARD)), r251_curl(r342_r, r1_mix(r342_nsTop, r342_nsBot, 0.7) - (r251_MIDDLE - r342_r) * r342_skew, r251_heading(r251_RIGHTWARD))));
                r344_currentGlyph.include(r251_VBarLeft(r342_l + r342_hsp, r342_nsBot - (r251_MIDDLE - r342_l - r342_hsp) * r342_skew, r342_nsTop - (r251_MIDDLE - r342_l - r342_hsp) * r342_skew, r342_fine));
                r344_currentGlyph.include(r251_VBarRight(r342_r - r342_hsp, r342_nsBot - (r251_MIDDLE - r342_r + r342_hsp) * r342_skew, r342_nsTop - (r251_MIDDLE - r342_r + r342_hsp) * r342_skew, r342_fine));
                r251_dependencyProfile[r344_currentGlyph.name] = r251_getDependencyProfile(r344_currentGlyph);
                return r344_currentGlyph;
            }.call(r251_xn$createglyph$7Hrq('.WF.glyphs/symbol-other.ptl.12', r251_xn$donothing$2Lrc0b)));
            r251_xn$saveglyph$5sIl('flatTone', 9837, function _r342_t1() {
                var _r350_t0 = this;
                var r350_currentGlyph = _r350_t0;
                if (!r350_currentGlyph)
                    return void 0;
                if (r251_glyphList[r251_glyphList.length - 1].name === '.WF.glyphs/symbol-other.ptl.13')
                    r251_glyphList.pop();
                var r350_yTerminal = r1_mix(r342_nsBot, r342_nsTop, 0.55);
                var r350_curly = 0.65;
                var r350_curly2 = 1.1;
                var r350_curly3 = 0.3;
                var r350_l = r1_mix(r251_SB, r251_RIGHTSB, 0.07);
                var r350_r = r1_mix(r251_RIGHTSB, r251_SB, 0.07);
                r350_currentGlyph.include(r251_difference(r251_union(r251_VBarLeft(r350_l, r342_nsBot, r342_nsTop, r342_fine), r251_dispiro(r251_widths.lhs(r342_fine), r251_g4(r350_l, r342_nsBot - 1), r251_alsothru(0.5, r350_curly3), r251_g4.up.mid(r350_r - r251_O + 1, r1_mix(r342_nsBot, r350_yTerminal, r350_curly) + (r350_r - r350_l) * r342_skew - r251_TANSLANT * r251_para.smoothadjust, r251_widths.lhs(r342_fine + 1)), r251_g4.left.mid(r1_mix(r350_l, r350_r, 0.5) - r251_CORRECTION_OMIDX * r342_fine, r1_mix(r342_nsBot, r350_yTerminal, r350_curly2) + (r350_r - r350_l) * r342_skew / 2 + 1), r251_g4(r350_l, r350_yTerminal + 1))), r251_difference(r251_xn$spirooutline$1aao(r251_corner(r350_l, r342_nsBot - r251_UPM), r251_corner(r350_l, r342_nsBot), r251_alsothru(0.5, r350_curly3), r251_g4.up.mid(r350_r - r251_O, r1_mix(r342_nsBot, r350_yTerminal, r350_curly) + (r350_r - r350_l) * r342_skew - r251_TANSLANT * r251_para.smoothadjust), r251_g4.left.mid(r1_mix(r350_l, r350_r, 0.5) - r251_CORRECTION_OMIDX * r342_fine, r1_mix(r342_nsBot, r350_yTerminal, r350_curly2) + (r350_r - r350_l) * r342_skew / 2), r251_corner(r350_l, r350_yTerminal), r251_corner(r350_l, r350_yTerminal + 1), r251_corner(r350_l, r342_nsTop), r251_corner(r251_WIDTH, r342_nsTop), r251_corner(r251_WIDTH, r342_nsBot - r251_UPM)), r251_xn$spirooutline$1aao(r251_corner(0, r350_yTerminal), r251_corner(0, r342_nsTop), r251_corner(r350_l + r342_fine * r251_HVCONTRAST, r342_nsTop), r251_corner(r350_l + r342_fine * r251_HVCONTRAST, r350_yTerminal))), r251_xn$spirooutline$1aao(r251_corner(r350_l, r342_nsBot - r251_UPM), r251_corner(r350_l, r342_nsTop), r251_corner(r350_l - r251_UPM, r342_nsTop), r251_corner(r350_l - r251_UPM, r342_nsBot - r251_UPM))));
                r251_dependencyProfile[r350_currentGlyph.name] = r251_getDependencyProfile(r350_currentGlyph);
                return r350_currentGlyph;
            }.call(r251_xn$createglyph$7Hrq('.WF.glyphs/symbol-other.ptl.13', r251_xn$donothing$2Lrc0b)));
            return r251_xn$saveglyph$5sIl('neutralTone', 9838, function _r342_t2() {
                var _r353_t0 = this;
                var r353_currentGlyph = _r353_t0;
                if (!r353_currentGlyph)
                    return void 0;
                if (r251_glyphList[r251_glyphList.length - 1].name === '.WF.glyphs/symbol-other.ptl.14')
                    r251_glyphList.pop();
                var r353_k = 0.25 - r251_STROKE * 0.25 / (r342_nsTop - r342_nsBot);
                var r353_kr = 0.5;
                var r353_ll = r342_l + r342_hsp * r353_kr;
                var r353_rr = r342_r - r342_hsp * r353_kr;
                var r353_barLeft = r251_VBarLeft(r353_ll, r1_mix(r342_nsBot, r342_nsTop, r353_k), r342_nsTop, r342_fine);
                var r353_barRight = r251_VBarRight(r353_rr, r342_nsBot, r1_mix(r342_nsBot, r342_nsTop, 1 - r353_k), r342_fine);
                var r353_diagLow = r251_dispiro(r251_widths.lhs(r342_fine), r251_flat(r353_ll, r1_mix(r342_nsBot, r342_nsTop, r353_k)), r251_curl(r353_rr, r1_mix(r342_nsBot, r342_nsTop, r353_k) + (r353_rr - r353_ll) * r342_skew));
                var r353_belowDiagLow = r251_xn$spirooutline$1aao(r251_corner(r353_ll, r1_mix(r342_nsBot, r342_nsTop, r353_k)), r251_corner(r353_rr, r1_mix(r342_nsBot, r342_nsTop, r353_k) + (r353_rr - r353_ll) * r342_skew), r251_corner(r353_rr, r342_nsBot), r251_corner(r353_ll, r342_nsBot));
                var r353_diagHigh = r251_dispiro(r251_widths.lhs(r342_fine), r251_flat(r353_rr, r1_mix(r342_nsBot, r342_nsTop, 1 - r353_k)), r251_curl(r353_ll, r1_mix(r342_nsBot, r342_nsTop, 1 - r353_k) - (r353_rr - r353_ll) * r342_skew));
                var r353_aboveDiagHigh = r251_xn$spirooutline$1aao(r251_corner(r353_rr, r1_mix(r342_nsBot, r342_nsTop, 1 - r353_k)), r251_corner(r353_ll, r1_mix(r342_nsBot, r342_nsTop, 1 - r353_k) - (r353_rr - r353_ll) * r342_skew), r251_corner(r353_ll, r342_nsTop), r251_corner(r353_rr, r342_nsTop));
                var r353_outsideBars = r251_difference(r251_xn$spirooutline$1aao(r251_corner(r353_ll - r251_UPM, r342_nsBot - r251_UPM), r251_corner(r353_ll - r251_UPM, r342_nsTop + r251_UPM), r251_corner(r353_rr + r251_UPM, r342_nsTop + r251_UPM), r251_corner(r353_rr + r251_UPM, r342_nsBot - r251_UPM)), r251_xn$spirooutline$1aao(r251_corner(r353_ll, r342_nsBot), r251_corner(r353_ll, r342_nsTop), r251_corner(r353_rr, r342_nsTop), r251_corner(r353_rr, r342_nsBot)));
                r353_currentGlyph.include(r251_union(r251_difference(r353_barLeft, r353_belowDiagLow), r251_difference(r353_barRight, r353_aboveDiagHigh), r251_difference(r353_diagLow, r353_barLeft, r353_barRight, r353_outsideBars), r251_difference(r353_diagHigh, r353_barLeft, r353_barRight, r353_outsideBars)));
                r251_dependencyProfile[r353_currentGlyph.name] = r251_getDependencyProfile(r353_currentGlyph);
                return r353_currentGlyph;
            }.call(r251_xn$createglyph$7Hrq('.WF.glyphs/symbol-other.ptl.14', r251_xn$donothing$2Lrc0b)));
        }();
    }());
    (function _r251_t27() {
        var _r356_t0 = this;
        var r356_currentGlyph = _r356_t0;
        if (!r356_currentGlyph)
            return void 0;
        if (r251_glyphList[r251_glyphList.length - 1].name === '.WF.glyphs/symbol-other.ptl.15')
            r251_glyphList.pop();
        r356_currentGlyph.include(r251_VBar(r251_MIDDLE, -r251_font.OS_2.usWinDescent, r251_font.OS_2.usWinAscent, r251_SHOULDERFINE));
        r356_currentGlyph.include(r251_HBar(r251_MIDDLE, r251_WIDTH, 0, r251_SHOULDERFINE));
        r356_currentGlyph.include(r251_HBar(r251_MIDDLE, r251_WIDTH, r251_CAP, r251_SHOULDERFINE));
        r356_currentGlyph.include(r251_HBar(r251_MIDDLE, r251_WIDTH, r251_XH, r251_SHOULDERFINE));
        r356_currentGlyph.include(r251_HBar(r251_MIDDLE, r251_WIDTH, r251_DESCENDER, r251_SHOULDERFINE));
        r356_currentGlyph.include(r251_HBar(0, r251_MIDDLE, r251_symbolMid, r251_SHOULDERFINE));
        r356_currentGlyph.include(r251_HBar(0, r251_MIDDLE, r251_parenTop, r251_SHOULDERFINE));
        r356_currentGlyph.include(r251_HBar(0, r251_MIDDLE, r251_parenBot, r251_SHOULDERFINE));
        r251_xn$save$2Lrc5.call(r356_currentGlyph, 'metmark', 57503);
        r251_dependencyProfile[r356_currentGlyph.name] = r251_getDependencyProfile(r356_currentGlyph);
        return r356_currentGlyph;
    }.call(r251_xn$createglyph$7Hrq('.WF.glyphs/symbol-other.ptl.15', r251_xn$donothing$2Lrc0b)));
    (function () {
        var r367_sw = r251_adviceBlackness(5);
        var r367_flagDown = 0.07 * (r251_parenTop - r251_parenBot);
        var r367_delta = 1;
        var r367_curliness = 0.85;
        var r367_FlagBar = function _r367_t0() {
            return r251_VBar(r251_SB, r251_operBot, r251_operTop, r367_sw);
        };
        (function _r367_t1() {
            var _r370_t0 = this;
            var r370_currentGlyph = _r370_t0;
            if (!r370_currentGlyph)
                return void 0;
            if (r251_glyphList[r251_glyphList.length - 1].name === '.WF.glyphs/symbol-other.ptl.16')
                r251_glyphList.pop();
            r370_currentGlyph.include(r251_xn$spirooutline$1aao(r251_corner(r251_SB, r251_operTop), r251_curl(r251_SB + r367_delta, r251_operTop), r251_alsothru(0.5, 1 - r367_curliness), r251_g4(r251_MIDDLE, r251_operTop - r367_flagDown / 2), r251_alsothru(0.5, r367_curliness), r251_flat(r251_RIGHTSB - r367_delta, r251_operTop - r367_flagDown), r251_corner(r251_RIGHTSB, r251_operTop - r367_flagDown), r251_corner(r251_RIGHTSB, r251_symbolMid - r367_flagDown), r251_curl(r251_RIGHTSB - r367_delta, r251_symbolMid - r367_flagDown), r251_alsothru(0.5, 1 - r367_curliness), r251_g4(r251_MIDDLE, r251_symbolMid - r367_flagDown / 2), r251_alsothru(0.5, r367_curliness), r251_flat(r251_SB + r367_delta, r251_symbolMid), r251_corner(r251_SB, r251_symbolMid), r251_close()));
            r370_currentGlyph.include(r251_Translate(r367_sw / 2 * r251_HVCONTRAST, 0));
            r370_currentGlyph.include(r367_FlagBar());
            r251_xn$save$2Lrc5.call(r370_currentGlyph, 'blackflag', 9873);
            r251_dependencyProfile[r370_currentGlyph.name] = r251_getDependencyProfile(r370_currentGlyph);
            return r370_currentGlyph;
        }.call(r251_xn$createglyph$7Hrq('.WF.glyphs/symbol-other.ptl.16', r251_xn$donothing$2Lrc0b)));
        return function _r367_t2() {
            var _r376_t0 = this;
            var r376_currentGlyph = _r376_t0;
            if (!r376_currentGlyph)
                return void 0;
            if (r251_glyphList[r251_glyphList.length - 1].name === '.WF.glyphs/symbol-other.ptl.17')
                r251_glyphList.pop();
            r376_currentGlyph.include(r251_VBarRight(r251_RIGHTSB, r251_symbolMid - r367_flagDown, r251_operTop - r367_flagDown, r367_sw));
            r376_currentGlyph.include(r251_dispiro(r251_widths.rhs(r367_sw), r251_flat(r251_SB, r251_operTop, r251_heading(r251_RIGHTWARD)), r251_curl(r251_SB + r367_delta, r251_operTop, r251_heading(r251_RIGHTWARD)), r251_alsothru(0.5, 1 - r367_curliness), r251_g4(r251_MIDDLE, r251_operTop - r367_flagDown / 2), r251_alsothru(0.5, r367_curliness), r251_flat(r251_RIGHTSB - r367_delta, r251_operTop - r367_flagDown, r251_heading(r251_RIGHTWARD)), r251_curl(r251_RIGHTSB, r251_operTop - r367_flagDown, r251_heading(r251_RIGHTWARD))));
            r376_currentGlyph.include(r251_dispiro(r251_widths.rhs(r367_sw), r251_flat(r251_RIGHTSB, r251_symbolMid - r367_sw / 2 - r367_flagDown, r251_heading(r251_LEFTWARD)), r251_curl(r251_RIGHTSB - r367_delta, r251_symbolMid - r367_sw / 2 - r367_flagDown, r251_heading(r251_LEFTWARD)), r251_alsothru(0.5, 1 - r367_curliness), r251_g4(r251_MIDDLE, r251_symbolMid - r367_sw / 2 - r367_flagDown / 2), r251_alsothru(0.5, r367_curliness), r251_flat(r251_SB + r367_delta, r251_symbolMid - r367_sw / 2, r251_heading(r251_LEFTWARD)), r251_curl(r251_SB, r251_symbolMid - r367_sw / 2, r251_heading(r251_LEFTWARD))));
            r376_currentGlyph.include(r251_Translate(r367_sw / 2 * r251_HVCONTRAST, 0));
            r376_currentGlyph.include(r367_FlagBar());
            r251_xn$save$2Lrc5.call(r376_currentGlyph, 'whiteflag', 9872);
            r251_dependencyProfile[r376_currentGlyph.name] = r251_getDependencyProfile(r376_currentGlyph);
            return r376_currentGlyph;
        }.call(r251_xn$createglyph$7Hrq('.WF.glyphs/symbol-other.ptl.17', r251_xn$donothing$2Lrc0b));
    }());
    (function _r251_t30() {
        var _r384_t0 = this;
        var r384_currentGlyph = _r384_t0;
        if (!r384_currentGlyph)
            return void 0;
        if (r251_glyphList[r251_glyphList.length - 1].name === '.WF.glyphs/symbol-other.ptl.18')
            r251_glyphList.pop();
        var r384_sw = r251_adviceBlackness(3.75);
        var r384_radius = (r251_RIGHTSB - r251_SB) / 2;
        r384_currentGlyph.include(r251_dispiro(r251_widths.center(r384_sw), r251_flat(r251_MIDDLE - r384_radius, r251_symbolMid - r384_radius), r251_curl(r251_MIDDLE + r384_radius, r251_symbolMid + r384_radius)));
        r384_currentGlyph.include(r251_dispiro(r251_widths.center(r384_sw), r251_flat(r251_MIDDLE + r384_radius, r251_symbolMid - r384_radius), r251_curl(r251_MIDDLE - r384_radius, r251_symbolMid + r384_radius)));
        var r384_r0 = Math.min((r251_RIGHTSB - r251_SB + r384_sw / Math.sqrt(2) - r384_sw * 3) / 4, r251_DOTRADIUS);
        var r384_r = r384_radius - r384_r0 + r384_sw / 2 / Math.sqrt(2);
        r384_currentGlyph.include(r251_RingAt(r251_MIDDLE + r384_r, r251_symbolMid, r384_r0));
        r384_currentGlyph.include(r251_RingAt(r251_MIDDLE - r384_r, r251_symbolMid, r384_r0));
        r384_currentGlyph.include(r251_RingAt(r251_MIDDLE, r251_symbolMid + r384_r, r384_r0));
        r384_currentGlyph.include(r251_RingAt(r251_MIDDLE, r251_symbolMid - r384_r, r384_r0));
        r251_xn$save$2Lrc5.call(r384_currentGlyph, 'kome', 8251);
        r251_dependencyProfile[r384_currentGlyph.name] = r251_getDependencyProfile(r384_currentGlyph);
        return r384_currentGlyph;
    }.call(r251_xn$createglyph$7Hrq('.WF.glyphs/symbol-other.ptl.18', r251_xn$donothing$2Lrc0b)));
    (function _r251_t31() {
        var _r393_t0 = this;
        var r393_currentGlyph = _r393_t0;
        if (!r393_currentGlyph)
            return void 0;
        if (r251_glyphList[r251_glyphList.length - 1].name === '.WF.glyphs/symbol-other.ptl.19')
            r251_glyphList.pop();
        var r393_sw = r251_adviceBlackness(3) / 2;
        var r393_kInside = 0.5;
        var r393_kOutside = 2.5;
        var r393_l = r1_mix(r251_SB, r251_RIGHTSB, 0.1);
        var r393_r = r1_mix(r251_RIGHTSB, r251_SB, 0.1);
        r393_currentGlyph['start-from'](r1_mix(r393_l, r393_r, 0.6), r251_operTop);
        r393_currentGlyph['line-to'](r393_l - r393_sw * r393_kInside, r251_symbolMid - r393_sw);
        r393_currentGlyph['line-to'](r393_r - r393_sw * r393_kOutside, r251_symbolMid - r393_sw);
        r393_currentGlyph['line-to'](r1_mix(r393_r, r393_l, 0.6), r251_operBot);
        r393_currentGlyph['line-to'](r393_r + r393_sw * r393_kInside, r251_symbolMid + r393_sw);
        r393_currentGlyph['line-to'](r393_l + r393_sw * r393_kOutside, r251_symbolMid + r393_sw);
        r251_xn$save$2Lrc5.call(r393_currentGlyph, 'boltSymbol', 9889);
        r251_dependencyProfile[r393_currentGlyph.name] = r251_getDependencyProfile(r393_currentGlyph);
        return r393_currentGlyph;
    }.call(r251_xn$createglyph$7Hrq('.WF.glyphs/symbol-other.ptl.19', r251_xn$donothing$2Lrc0b)));
    (function () {
        var r402_unicode, r402_sw, r402_op, _r402_t3, _r402_t7, _r402_t11, _r402_t15, _r402_t19, _r402_t25;
        var r402_light = r251_adviceBlackness(4.5);
        var r402_medium = Math.max(r402_light * 1.75, r251_WIDTH * 0.2);
        var r402_heavy = Math.max(r402_light * 2.5, r251_WIDTH * 0.3);
        var r402_shapesize = 0.8;
        var r402_shapesizeCheck = r402_shapesize * 1.1;
        var _r402_t0 = [
            [
                10003,
                r402_light
            ],
            [
                10004,
                r402_medium
            ]
        ];
        var _r402_t1 = _r402_t0.length;
        var _r402_t2 = 0;
        for (; _r402_t2 < _r402_t1; _r402_t2 = _r402_t2 + 1) {
            _r402_t3 = _r402_t0[_r402_t2];
            r402_unicode = _r402_t3[0];
            r402_sw = _r402_t3[1];
            (function _r402_t20() {
                var _r406_t0 = this;
                var r406_currentGlyph = _r406_t0;
                if (!r406_currentGlyph)
                    return void 0;
                if (r251_glyphList[r251_glyphList.length - 1].name === '.WF.glyphs/symbol-other.ptl.20')
                    r251_glyphList.pop();
                r406_currentGlyph.include(r251_dispiro(r251_widths.center(r402_sw), r251_g4(r251_SB, r1_mix(r251_symbolMid, r1_mix(r251_operBot, r251_operTop, 0.46), r402_shapesizeCheck)), r251_alsothru(0.5, 0.4), r251_g4(r1_mix(r251_SB, r251_RIGHTSB, 0.4), r1_mix(r251_symbolMid, r1_mix(r251_operBot, r251_operTop, 0.05), r402_shapesizeCheck), r251_heading(r251_DOWNWARD))));
                r406_currentGlyph.include(r251_dispiro(r251_widths.center(r402_sw), r251_g4(r1_mix(r251_SB, r251_RIGHTSB, 0.4), r1_mix(r251_symbolMid, r1_mix(r251_operBot, r251_operTop, 0.05), r402_shapesizeCheck), r251_heading(r251_UPWARD)), r251_alsothru(0.5, 0.6), r251_g4(r251_RIGHTSB, r1_mix(r251_symbolMid, r1_mix(r251_operBot, r251_operTop, 0.9), r402_shapesizeCheck))));
                r251_xn$save$2Lrc5.call(r406_currentGlyph, null, r402_unicode);
                r251_dependencyProfile[r406_currentGlyph.name] = r251_getDependencyProfile(r406_currentGlyph);
                return r406_currentGlyph;
            }.call(r251_xn$createglyph$7Hrq('.WF.glyphs/symbol-other.ptl.20', r251_xn$donothing$2Lrc0b)));
        }
        var _r402_t4 = [[
                10010,
                r402_medium
            ]];
        var _r402_t5 = _r402_t4.length;
        var _r402_t6 = 0;
        for (; _r402_t6 < _r402_t5; _r402_t6 = _r402_t6 + 1) {
            _r402_t7 = _r402_t4[_r402_t6];
            r402_unicode = _r402_t7[0];
            r402_sw = _r402_t7[1];
            (function _r402_t21() {
                var _r413_t0 = this;
                var r413_currentGlyph = _r413_t0;
                if (!r413_currentGlyph)
                    return void 0;
                if (r251_glyphList[r251_glyphList.length - 1].name === '.WF.glyphs/symbol-other.ptl.21')
                    r251_glyphList.pop();
                r413_currentGlyph.include(r251_dispiro(r251_widths.center(r402_sw), r251_g4(r1_mix(r251_WIDTH, r251_RIGHTSB, 0.5), r251_symbolMid), r251_g4(r1_mix(0, r251_SB, 0.5), r251_symbolMid)));
                r413_currentGlyph.include(r251_dispiro(r251_widths.center(r402_sw), r251_g4(r251_MIDDLE, r1_mix(r251_symbolMid, r251_operTop, 0.8 * r402_shapesize * 7 / 8)), r251_g4(r251_MIDDLE, r1_mix(r251_symbolMid, r251_operBot, 0.9 * r402_shapesize * 7 / 8))));
                r251_xn$save$2Lrc5.call(r413_currentGlyph, null, r402_unicode);
                r251_dependencyProfile[r413_currentGlyph.name] = r251_getDependencyProfile(r413_currentGlyph);
                return r413_currentGlyph;
            }.call(r251_xn$createglyph$7Hrq('.WF.glyphs/symbol-other.ptl.21', r251_xn$donothing$2Lrc0b)));
        }
        var _r402_t8 = [
            [
                10005,
                r402_light
            ],
            [
                10006,
                r402_medium
            ]
        ];
        var _r402_t9 = _r402_t8.length;
        var _r402_t10 = 0;
        for (; _r402_t10 < _r402_t9; _r402_t10 = _r402_t10 + 1) {
            _r402_t11 = _r402_t8[_r402_t10];
            r402_unicode = _r402_t11[0];
            r402_sw = _r402_t11[1];
            (function _r402_t22() {
                var _r420_t0 = this;
                var r420_currentGlyph = _r420_t0;
                if (!r420_currentGlyph)
                    return void 0;
                if (r251_glyphList[r251_glyphList.length - 1].name === '.WF.glyphs/symbol-other.ptl.22')
                    r251_glyphList.pop();
                r420_currentGlyph.include(r251_dispiro(r251_widths.center(r402_sw), r251_g4(r251_RIGHTSB, r1_mix(r251_symbolMid, r251_operTop, 0.8 * r402_shapesize)), r251_g4(r251_SB, r1_mix(r251_symbolMid, r251_operBot, 0.9 * r402_shapesize))));
                r420_currentGlyph.include(r251_dispiro(r251_widths.center(r402_sw), r251_g4(r251_SB, r1_mix(r251_symbolMid, r251_operTop, 0.8 * r402_shapesize)), r251_g4(r251_RIGHTSB, r1_mix(r251_symbolMid, r251_operBot, 0.9 * r402_shapesize))));
                r251_xn$save$2Lrc5.call(r420_currentGlyph, null, r402_unicode);
                r251_dependencyProfile[r420_currentGlyph.name] = r251_getDependencyProfile(r420_currentGlyph);
                return r420_currentGlyph;
            }.call(r251_xn$createglyph$7Hrq('.WF.glyphs/symbol-other.ptl.22', r251_xn$donothing$2Lrc0b)));
        }
        var _r402_t12 = [
            [
                10007,
                r402_light
            ],
            [
                10008,
                r402_medium
            ]
        ];
        var _r402_t13 = _r402_t12.length;
        var _r402_t14 = 0;
        for (; _r402_t14 < _r402_t13; _r402_t14 = _r402_t14 + 1) {
            _r402_t15 = _r402_t12[_r402_t14];
            r402_unicode = _r402_t15[0];
            r402_sw = _r402_t15[1];
            (function _r402_t23() {
                var _r427_t0 = this;
                var r427_currentGlyph = _r427_t0;
                if (!r427_currentGlyph)
                    return void 0;
                if (r251_glyphList[r251_glyphList.length - 1].name === '.WF.glyphs/symbol-other.ptl.23')
                    r251_glyphList.pop();
                r427_currentGlyph.include(r251_dispiro(r251_widths.center(r402_sw), r251_g4(r251_RIGHTSB, r1_mix(r251_symbolMid, r1_mix(r251_operBot, r251_operTop, 0.9), r402_shapesize)), r251_alsothru(0.53, 0.45), r251_g4(r251_SB, r1_mix(r251_symbolMid, r251_operBot, 1.05 * r402_shapesize))));
                r427_currentGlyph.include(r251_dispiro(r251_widths.center(r402_sw), r251_g4(r1_mix(r251_SB, r251_RIGHTSB, 0.1), r1_mix(r251_symbolMid, r1_mix(r251_operBot, r251_operTop, 0.86), r402_shapesize)), r251_alsothru(0.47, 0.5), r251_g4(r1_mix(r251_SB, r251_RIGHTSB, 0.9), r1_mix(r251_symbolMid, r1_mix(r251_operBot, r251_operTop, 0.05), r402_shapesize))));
                r251_xn$save$2Lrc5.call(r427_currentGlyph, null, r402_unicode);
                r251_dependencyProfile[r427_currentGlyph.name] = r251_getDependencyProfile(r427_currentGlyph);
                return r427_currentGlyph;
            }.call(r251_xn$createglyph$7Hrq('.WF.glyphs/symbol-other.ptl.23', r251_xn$donothing$2Lrc0b)));
        }
        var _r402_t16 = [
            [
                10092,
                r402_light,
                1
            ],
            [
                10093,
                r402_light,
                0
            ],
            [
                10094,
                r402_medium,
                1
            ],
            [
                10095,
                r402_medium,
                0
            ],
            [
                10096,
                r402_heavy,
                1
            ],
            [
                10097,
                r402_heavy,
                0
            ]
        ];
        var _r402_t17 = _r402_t16.length;
        var _r402_t18 = 0;
        var _r402_t24 = _r402_t18 < _r402_t17;
        for (; _r402_t24; _r402_t24 = _r402_t18 < _r402_t17)
            _r402_t25 = (_r402_t19 = _r402_t16[_r402_t18], r402_unicode = _r402_t19[0], r402_sw = _r402_t19[1], r402_op = _r402_t19[2], function _r402_t26() {
                var _r434_t0 = this;
                var r434_currentGlyph = _r434_t0;
                if (!r434_currentGlyph)
                    return void 0;
                if (r251_glyphList[r251_glyphList.length - 1].name === '.WF.glyphs/symbol-other.ptl.24')
                    r251_glyphList.pop();
                r434_currentGlyph.include(r251_dispiro(r251_widths.center(r402_sw), r251_corner(r1_mix(r251_SB + r402_sw / 2, r251_RIGHTSB - r402_sw / 2, r402_op), r251_operTop, r251_heading(r251_DOWNWARD)), r251_corner(r1_mix(r251_SB + r402_sw / 2, r251_RIGHTSB - r402_sw / 2, 1 - r402_op), r251_symbolMid, r251_heading(r251_DOWNWARD)), r251_corner(r1_mix(r251_SB + r402_sw / 2, r251_RIGHTSB - r402_sw / 2, r402_op), r251_operBot, r251_heading(r251_DOWNWARD))));
                r251_xn$save$2Lrc5.call(r434_currentGlyph, null, r402_unicode);
                r251_dependencyProfile[r434_currentGlyph.name] = r251_getDependencyProfile(r434_currentGlyph);
                return r434_currentGlyph;
            }.call(r251_xn$createglyph$7Hrq('.WF.glyphs/symbol-other.ptl.24', r251_xn$donothing$2Lrc0b)), _r402_t18 = _r402_t18 + 1);
        return _r402_t25;
    }());
    (function () {
        var r438_yin = function _r438_t0(r439_m, r439_n) {
            return function _r439_t2() {
                var _r441_t0 = this;
                var r441_currentGlyph = _r441_t0;
                var r441_offsetY = 2 / 3 * (r251_operBot - r251_operTop) / r439_n;
                var r441_startY = r251_symbolMid - r441_offsetY * (r439_n - 1) / 2;
                var r441_bar = r251_adviceBlackness(r439_n);
                var r441_fine = r251_adviceBlackness(5);
                var r441_gap = Math.max(r251_WIDTH / 8, r441_fine);
                r441_currentGlyph.include(r251_HBar(r251_SB, r251_MIDDLE - r441_gap / 2 * r251_HVCONTRAST, r441_startY + r441_offsetY * r439_m, r441_bar));
                r441_currentGlyph.include(r251_HBar(r251_MIDDLE + r441_gap / 2 * r251_HVCONTRAST, r251_RIGHTSB, r441_startY + r441_offsetY * r439_m, r441_bar));
                return void 0;
            };
        };
        var r438_yang = function _r438_t1(r444_m, r444_n) {
            return function _r444_t2() {
                var _r446_t0 = this;
                var r446_currentGlyph = _r446_t0;
                var r446_offsetY = 2 / 3 * (r251_operBot - r251_operTop) / r444_n;
                var r446_startY = r251_symbolMid - r446_offsetY * (r444_n - 1) / 2;
                var r446_bar = r251_adviceBlackness(r444_n);
                r446_currentGlyph.include(r251_HBar(r251_SB, r251_RIGHTSB, r446_startY + r446_offsetY * r444_m, r446_bar));
                return void 0;
            };
        };
        var r438_patterns = function _r438_t2(r448_n, r448_su) {
            var _r448_t5;
            var _r448_t0 = 0;
            var _r448_t1 = Math.pow(2, r448_n);
            var r448_offset = _r448_t0;
            var _r448_t4 = r448_offset < _r448_t1;
            for (; _r448_t4; _r448_t4 = r448_offset < _r448_t1)
                _r448_t5 = (function _r448_t6() {
                    var _r452_t2 = this;
                    var r452_currentGlyph = _r452_t2;
                    if (!r452_currentGlyph)
                        return void 0;
                    if (r251_glyphList[r251_glyphList.length - 1].name === '.WF.glyphs/symbol-other.ptl.25')
                        r251_glyphList.pop();
                    var _r452_t0 = 0;
                    var _r452_t1 = r448_n;
                    var r452_bit = _r452_t0;
                    for (; r452_bit < _r452_t1; r452_bit = r452_bit + 1)
                        if (r1_maskBit(r448_offset, r452_bit))
                            r452_currentGlyph.include(r438_yin(r452_bit, r448_n));
                        else
                            r452_currentGlyph.include(r438_yang(r452_bit, r448_n));
                    r251_xn$save$2Lrc5.call(r452_currentGlyph, null, r448_su + r448_offset);
                    r251_dependencyProfile[r452_currentGlyph.name] = r251_getDependencyProfile(r452_currentGlyph);
                    return r452_currentGlyph;
                }.call(r251_xn$createglyph$7Hrq('.WF.glyphs/symbol-other.ptl.25', r251_xn$donothing$2Lrc0b)), r448_offset = r448_offset + 1);
            return _r448_t5;
        };
        r438_patterns(1, 9866);
        r438_patterns(2, 9868);
        return r438_patterns(3, 9776);
    }());
    var r251_arrowheadsKern = r1_clamp(0, r251_WIDTH * 0.4, r251_WIDTH - r251_OPERATORSTROKE * 3);
    (function _r251_t36() {
        var _r459_t0 = this;
        var r459_currentGlyph = _r459_t0;
        if (!r459_currentGlyph)
            return void 0;
        if (r251_glyphList[r251_glyphList.length - 1].name === '.WF.glyphs/symbol-other.ptl.26')
            r251_glyphList.pop();
        r251_includeGlyphPart(r459_currentGlyph, r251_glyphs, 'greater', r251_AS_BASE, r251_ALSO_METRICS);
        r459_currentGlyph.include(r251_Translate(r251_arrowheadsKern / 3, 0));
        r251_xn$save$2Lrc5.call(r459_currentGlyph, 'liggreater.shift0t');
        r459_currentGlyph.include(r251_Translate(r251_arrowheadsKern / 6, 0));
        r251_xn$save$2Lrc5.call(r459_currentGlyph, 'liggreater.shift0h');
        r459_currentGlyph.include(r251_Translate(r251_arrowheadsKern / 2, 0));
        r251_xn$save$2Lrc5.call(r459_currentGlyph, 'liggreater.shift1');
        r459_currentGlyph.include(r251_Translate(r251_arrowheadsKern / 2, 0));
        r251_xn$save$2Lrc5.call(r459_currentGlyph, 'liggreater.shift1h');
        r459_currentGlyph.include(r251_Translate(r251_arrowheadsKern / 2, 0));
        r251_xn$save$2Lrc5.call(r459_currentGlyph, 'liggreater.shift2');
        r251_dependencyProfile[r459_currentGlyph.name] = r251_getDependencyProfile(r459_currentGlyph);
        return r459_currentGlyph;
    }.call(r251_xn$createglyph$7Hrq('.WF.glyphs/symbol-other.ptl.26', r251_xn$donothing$2Lrc0b)));
    (function _r251_t37() {
        var _r472_t0 = this;
        var r472_currentGlyph = _r472_t0;
        if (!r472_currentGlyph)
            return void 0;
        if (r251_glyphList[r251_glyphList.length - 1].name === '.WF.glyphs/symbol-other.ptl.27')
            r251_glyphList.pop();
        r251_includeGlyphPart(r472_currentGlyph, r251_glyphs, 'greater', r251_AS_BASE, r251_ALSO_METRICS);
        r472_currentGlyph.include(r251_Translate(-r251_arrowheadsKern / 3, 0));
        r251_xn$save$2Lrc5.call(r472_currentGlyph, 'liggreater.shiftN0t');
        r472_currentGlyph.include(r251_Translate(-r251_arrowheadsKern / 6, 0));
        r251_xn$save$2Lrc5.call(r472_currentGlyph, 'liggreater.shiftN0h');
        r472_currentGlyph.include(r251_Translate(-r251_arrowheadsKern / 2, 0));
        r251_xn$save$2Lrc5.call(r472_currentGlyph, 'liggreater.shiftN1');
        r472_currentGlyph.include(r251_Translate(-r251_arrowheadsKern / 2, 0));
        r251_xn$save$2Lrc5.call(r472_currentGlyph, 'liggreater.shiftN1h');
        r472_currentGlyph.include(r251_Translate(-r251_arrowheadsKern / 2, 0));
        r251_xn$save$2Lrc5.call(r472_currentGlyph, 'liggreater.shiftN2');
        r251_dependencyProfile[r472_currentGlyph.name] = r251_getDependencyProfile(r472_currentGlyph);
        return r472_currentGlyph;
    }.call(r251_xn$createglyph$7Hrq('.WF.glyphs/symbol-other.ptl.27', r251_xn$donothing$2Lrc0b)));
    (function _r251_t38() {
        var _r485_t0 = this;
        var r485_currentGlyph = _r485_t0;
        if (!r485_currentGlyph)
            return void 0;
        if (r251_glyphList[r251_glyphList.length - 1].name === '.WF.glyphs/symbol-other.ptl.28')
            r251_glyphList.pop();
        r251_includeGlyphPart(r485_currentGlyph, r251_glyphs, 'less', r251_AS_BASE, r251_ALSO_METRICS);
        r485_currentGlyph.include(r251_Translate(-r251_arrowheadsKern / 3, 0));
        r251_xn$save$2Lrc5.call(r485_currentGlyph, 'ligless.shift0t');
        r485_currentGlyph.include(r251_Translate(-r251_arrowheadsKern / 6, 0));
        r251_xn$save$2Lrc5.call(r485_currentGlyph, 'ligless.shift0h');
        r485_currentGlyph.include(r251_Translate(-r251_arrowheadsKern / 2, 0));
        r251_xn$save$2Lrc5.call(r485_currentGlyph, 'ligless.shift1');
        r485_currentGlyph.include(r251_Translate(-r251_arrowheadsKern / 2, 0));
        r251_xn$save$2Lrc5.call(r485_currentGlyph, 'ligless.shift1h');
        r485_currentGlyph.include(r251_Translate(-r251_arrowheadsKern / 2, 0));
        r251_xn$save$2Lrc5.call(r485_currentGlyph, 'ligless.shift2');
        r251_dependencyProfile[r485_currentGlyph.name] = r251_getDependencyProfile(r485_currentGlyph);
        return r485_currentGlyph;
    }.call(r251_xn$createglyph$7Hrq('.WF.glyphs/symbol-other.ptl.28', r251_xn$donothing$2Lrc0b)));
    (function _r251_t39() {
        var _r498_t0 = this;
        var r498_currentGlyph = _r498_t0;
        if (!r498_currentGlyph)
            return void 0;
        if (r251_glyphList[r251_glyphList.length - 1].name === '.WF.glyphs/symbol-other.ptl.29')
            r251_glyphList.pop();
        r251_includeGlyphPart(r498_currentGlyph, r251_glyphs, 'less', r251_AS_BASE, r251_ALSO_METRICS);
        r498_currentGlyph.include(r251_Translate(r251_arrowheadsKern / 3, 0));
        r251_xn$save$2Lrc5.call(r498_currentGlyph, 'ligless.shiftN0t');
        r498_currentGlyph.include(r251_Translate(r251_arrowheadsKern / 6, 0));
        r251_xn$save$2Lrc5.call(r498_currentGlyph, 'ligless.shiftN0h');
        r498_currentGlyph.include(r251_Translate(r251_arrowheadsKern / 2, 0));
        r251_xn$save$2Lrc5.call(r498_currentGlyph, 'ligless.shiftN1');
        r498_currentGlyph.include(r251_Translate(r251_arrowheadsKern / 2, 0));
        r251_xn$save$2Lrc5.call(r498_currentGlyph, 'ligless.shiftN1h');
        r498_currentGlyph.include(r251_Translate(r251_arrowheadsKern / 2, 0));
        r251_xn$save$2Lrc5.call(r498_currentGlyph, 'ligless.shiftN2');
        r251_dependencyProfile[r498_currentGlyph.name] = r251_getDependencyProfile(r498_currentGlyph);
        return r498_currentGlyph;
    }.call(r251_xn$createglyph$7Hrq('.WF.glyphs/symbol-other.ptl.29', r251_xn$donothing$2Lrc0b)));
    var r251_arrowheadSlope = (r251_RIGHTSB - r251_SB) / (r251_parenTop - r251_parenBot) * 5;
    var r251_ArrowBarConfig = function _r251_t40(r510_extend, r510_kern, r510_join) {
        var _r510_t6 = r251_O;
        var _r510_t7 = r251_WIDTH - r251_O;
        var _r510_t8 = r251_WIDTH + r510_extend;
        var _r510_t9 = 0 - r510_extend;
        return function (_r510_leti0, _r510_leti1, _r510_leti2, _r510_leti3) {
            var r511_cleft = _r510_leti0;
            var r511_cright = _r510_leti1;
            var r511_arrowr = _r510_leti2;
            var r511_arrowl = _r510_leti3;
            return [
                [
                    'fr',
                    r251_SB,
                    r511_arrowr
                ],
                [
                    'lf',
                    r511_arrowl,
                    r251_RIGHTSB
                ],
                [
                    'cr',
                    r511_cleft,
                    r511_arrowr
                ],
                [
                    'lc',
                    r511_arrowl,
                    r511_cright
                ],
                [
                    'lxc',
                    r1_mix(r511_arrowl, 0, 0.5),
                    r511_cright
                ],
                [
                    'fr1',
                    r251_SB,
                    r511_arrowr + r510_kern
                ],
                [
                    'l1f',
                    r511_arrowl - r510_kern,
                    r251_RIGHTSB
                ],
                [
                    'cr1',
                    r511_cleft,
                    r511_arrowr + r510_kern
                ],
                [
                    'l1c',
                    r511_arrowl - r510_kern,
                    r511_cright
                ],
                [
                    'fr2',
                    r251_SB,
                    r511_arrowr + r510_kern * 2
                ],
                [
                    'l2f',
                    r511_arrowl - r510_kern * 2,
                    r251_RIGHTSB
                ],
                [
                    'cr2',
                    r511_cleft,
                    r511_arrowr + r510_kern * 2
                ],
                [
                    'l2c',
                    r511_arrowl - r510_kern * 2,
                    r511_cright
                ],
                [
                    'cf',
                    r511_cleft,
                    r251_RIGHTSB
                ],
                [
                    'fc',
                    r251_SB,
                    r511_cright
                ],
                [
                    'jf',
                    -r510_join,
                    r251_RIGHTSB
                ],
                [
                    'fj',
                    r251_SB,
                    r251_WIDTH + r510_join
                ],
                [
                    'jr',
                    -r510_join,
                    r511_arrowr
                ],
                [
                    'jc',
                    -r510_join,
                    r511_cright
                ],
                [
                    'lj',
                    r511_arrowl,
                    r251_WIDTH + r510_join
                ],
                [
                    'cj',
                    r511_cleft,
                    r251_WIDTH + r510_join
                ],
                [
                    'j1f',
                    -r510_join - r510_kern,
                    r251_RIGHTSB
                ],
                [
                    'fj1',
                    r251_SB,
                    r251_WIDTH + r510_join + r510_kern
                ],
                [
                    'lr',
                    r511_arrowl,
                    r511_arrowr
                ],
                [
                    'cc',
                    r511_cleft,
                    r511_cright
                ],
                [
                    'zf',
                    r511_cleft - r251_WIDTH + r251_RIGHTSB,
                    r251_RIGHTSB
                ],
                [
                    'zc',
                    r511_cleft - r251_WIDTH + r251_RIGHTSB,
                    r511_cright
                ],
                [
                    'fz',
                    r251_SB,
                    r511_cright + r251_SB
                ],
                [
                    'cz',
                    r511_cleft,
                    r511_cright + r251_SB
                ]
            ];
        }(_r510_t6, _r510_t7, _r510_t8, _r510_t9);
    };
    var r251_arrowextend = r1_clamp(0, r251_WIDTH, r251_RIGHTSB - r251_OPERATORSTROKE / 2 * r251_arrowheadSlope);
    var r251_arrowj = r1_clamp(0, r251_WIDTH, r251_SB + r251_OPERATORSTROKE / 2 * r251_arrowheadSlope);
    var _r251_t8 = r251_ArrowBarConfig(r251_arrowextend, r251_arrowheadsKern, r251_arrowj);
    var _r251_t9 = _r251_t8.length;
    var _r251_t10 = 0;
    for (; _r251_t10 < _r251_t9; _r251_t10 = _r251_t10 + 1) {
        _r251_t11 = _r251_t8[_r251_t10];
        r251_subclass = _r251_t11[0];
        r251_left = _r251_t11[1];
        r251_right = _r251_t11[2];
        (function _r251_t41() {
            var _r515_t0 = this;
            var r515_currentGlyph = _r515_t0;
            if (!r515_currentGlyph)
                return void 0;
            if (r251_glyphList[r251_glyphList.length - 1].name === '.WF.glyphs/symbol-other.ptl.30')
                r251_glyphList.pop();
            r515_currentGlyph.include(r251_HBar(r251_left, r251_right, r251_symbolMid, r251_OPERATORSTROKE));
            r515_currentGlyph.cmpPriority = -3;
            r251_xn$save$2Lrc5.call(r515_currentGlyph, 'lighyphen.' + r251_subclass);
            r251_dependencyProfile[r515_currentGlyph.name] = r251_getDependencyProfile(r515_currentGlyph);
            return r515_currentGlyph;
        }.call(r251_xn$createglyph$7Hrq('.WF.glyphs/symbol-other.ptl.30', r251_xn$donothing$2Lrc0b)));
    }
    var r251_sw = r251_OPERATORSTROKE;
    var r251_dblarrowd = (r251_parenTop - r251_parenBot) * r1_designParameters.equal_wideness + r251_sw / 2;
    var r251_dblextend = r1_clamp(0, r251_WIDTH, r251_RIGHTSB - (r251_dblarrowd - r251_sw / 2) * r251_arrowheadSlope);
    var r251_dblarrowj = r1_clamp(0, r251_WIDTH, r251_SB + (r251_dblarrowd - r251_sw / 2) * r251_arrowheadSlope);
    var _r251_t12 = r251_ArrowBarConfig(r251_dblextend, r251_arrowheadsKern, r251_dblarrowj);
    var _r251_t13 = _r251_t12.length;
    var _r251_t14 = 0;
    for (; _r251_t14 < _r251_t13; _r251_t14 = _r251_t14 + 1) {
        _r251_t15 = _r251_t12[_r251_t14];
        r251_subclass = _r251_t15[0];
        r251_left = _r251_t15[1];
        r251_right = _r251_t15[2];
        (function _r251_t43() {
            var _r521_t0 = this;
            var r521_currentGlyph = _r521_t0;
            if (!r521_currentGlyph)
                return void 0;
            if (r251_glyphList[r251_glyphList.length - 1].name === '.WF.glyphs/symbol-other.ptl.31')
                r251_glyphList.pop();
            r521_currentGlyph.include(r251_HBarTop(r251_left, r251_right, r251_symbolMid + r251_dblarrowd, r251_sw));
            r521_currentGlyph.include(r251_HBarBottom(r251_left, r251_right, r251_symbolMid - r251_dblarrowd, r251_sw));
            r521_currentGlyph.cmpPriority = -3;
            r251_xn$save$2Lrc5.call(r521_currentGlyph, 'ligequal.' + r251_subclass);
            r251_dependencyProfile[r521_currentGlyph.name] = r251_getDependencyProfile(r521_currentGlyph);
            return r521_currentGlyph;
        }.call(r251_xn$createglyph$7Hrq('.WF.glyphs/symbol-other.ptl.31', r251_xn$donothing$2Lrc0b)));
    }
    return function _r251_t42() {
        var _r526_t0 = this;
        var r526_currentGlyph = _r526_t0;
        if (!r526_currentGlyph)
            return void 0;
        if (r251_glyphList[r251_glyphList.length - 1].name === '.WF.glyphs/symbol-other.ptl.32')
            r251_glyphList.pop();
        r251_includeGlyphPart(r526_currentGlyph, r251_glyphs, 'exclam');
        r526_currentGlyph.include(r251_Translate((r251_RIGHTSB - r251_WIDTH + (r251_WIDTH - r251_arrowextend / 2)) / 2 - r251_MIDDLE, 0));
        r526_currentGlyph.include(r251_HBar(-r251_arrowextend, r251_RIGHTSB - r251_WIDTH, r251_symbolMid, r251_OPERATORSTROKE));
        r251_xn$save$2Lrc5.call(r526_currentGlyph, 'ligexclam.htmlcommentstart');
        r251_dependencyProfile[r526_currentGlyph.name] = r251_getDependencyProfile(r526_currentGlyph);
        return r526_currentGlyph;
    }.call(r251_xn$createglyph$7Hrq('.WF.glyphs/symbol-other.ptl.32', r251_xn$donothing$2Lrc0b));
};
