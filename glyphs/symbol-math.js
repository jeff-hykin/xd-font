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
    var _r249_t6 = r249_xn$capture$2Lrc.letterExt;
    var r249_LambdaShape = _r249_t6.LambdaShape;
    var r249_DeltaShape = _r249_t6.DeltaShape;
    var r249_DeltaMaskShape = _r249_t6.DeltaMaskShape;
    var r249_SigmaShape = _r249_t6.SigmaShape;
    var r249_PiShape = _r249_t6.PiShape;
    var r249_EzhShape = _r249_t6.EzhShape;
    (function () {
        (function _r252_t0() {
            var _r254_t0 = this;
            var r254_currentGlyph = _r254_t0;
            if (!r254_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.1')
                r249_glyphList.pop();
            r249_includeGlyphPart(r254_currentGlyph, r249_glyphs, 'mu', r249_AS_BASE);
            if (r249_SLAB)
                if (!r249_para.isItalic) {
                    r254_currentGlyph.include(r249_CenterBottomSerif(r249_SB + r249_HALFSTROKE * r249_HVCONTRAST, r249_DESCENDER, r249_JUT));
                    r254_currentGlyph['tag-contour']('serifLB');
                }
            r249_xn$save$2Lrc5.call(r254_currentGlyph, 'micro', 181);
            r249_dependencyProfile[r254_currentGlyph.name] = r249_getDependencyProfile(r254_currentGlyph);
            return r254_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.1', r249_xn$donothing$2Lrc0b)));
        (function _r252_t1() {
            var _r260_t0 = this;
            var r260_currentGlyph = _r260_t0;
            if (!r260_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.2')
                r249_glyphList.pop();
            r260_currentGlyph.include(r249_LambdaShape(r249_CAP, r249_OPERATORSTROKE, r249_para.straightBar));
            r260_currentGlyph['eject-contour']('serif');
            r260_currentGlyph.include(r249_intersection(r249_DeltaMaskShape(r249_CAP, r249_OPERATORSTROKE, r249_para.straightBar), r249_HBar(0, r249_WIDTH, r249_XH / 2, r249_OPERATORSTROKE)));
            r260_currentGlyph.include(r249_FlipAround(r249_MIDDLE, r249_CAP / 2));
            r249_xn$save$2Lrc5.call(r260_currentGlyph, 'forall', 8704);
            r249_dependencyProfile[r260_currentGlyph.name] = r249_getDependencyProfile(r260_currentGlyph);
            return r260_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.2', r249_xn$donothing$2Lrc0b)));
        (function _r252_t2() {
            var _r267_t0 = this;
            var r267_currentGlyph = _r267_t0;
            if (!r267_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.3')
                r249_glyphList.pop();
            r267_currentGlyph.include(r249_HBarTop(r249_SB * 1.5 - r249_O, r249_RIGHTSB, r249_CAP, r249_OPERATORSTROKE));
            r267_currentGlyph.include(r249_HBarBottom(r249_SB * 1.5 - r249_O, r249_RIGHTSB, 0, r249_OPERATORSTROKE));
            r267_currentGlyph.include(r249_HBar(r249_SB * 1.5 - r249_O, r249_RIGHTSB - r249_HALFSTROKE, r249_CAP * 0.5, r249_OPERATORSTROKE));
            r267_currentGlyph.include(r249_VBarLeft(r249_SB * 1.5, 0, r249_CAP, r249_OPERATORSTROKE));
            r267_currentGlyph.include(r249_FlipAround(r249_MIDDLE, r249_CAP / 2));
            r249_xn$save$2Lrc5.call(r267_currentGlyph, 'exists', 8707);
            r249_dependencyProfile[r267_currentGlyph.name] = r249_getDependencyProfile(r267_currentGlyph);
            return r267_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.3', r249_xn$donothing$2Lrc0b)));
        (function _r252_t3() {
            var _r275_t0 = this;
            var r275_currentGlyph = _r275_t0;
            if (!r275_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.4')
                r249_glyphList.pop();
            r275_currentGlyph.include(r249_OShape(r249_CAP, 0, r249_SB, r249_RIGHTSB, r249_OPERATORSTROKE));
            var r275_fine = r249_OPERATORSTROKE / 2;
            r275_currentGlyph.include(r249_dispiro(r249_widths.center(r249_OPERATORSTROKE), r249_flat(r249_SB + r249_O + r275_fine, r1_mix(r249_CAP, 0, 1.05)), r249_curl(r249_RIGHTSB - r249_O - r275_fine, r1_mix(0, r249_CAP, 1.05))));
            r249_xn$save$2Lrc5.call(r275_currentGlyph, 'emptyset', 8709);
            r249_dependencyProfile[r275_currentGlyph.name] = r249_getDependencyProfile(r275_currentGlyph);
            return r275_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.4', r249_xn$donothing$2Lrc0b)));
        (function _r252_t4() {
            var _r280_t0 = this;
            var r280_currentGlyph = _r280_t0;
            if (!r280_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.5')
                r249_glyphList.pop();
            r280_currentGlyph.include(r249_markset.capital);
            r280_currentGlyph.include(r249_DeltaShape(r249_CAP, r249_OPERATORSTROKE, r249_para.straightBar));
            r249_xn$save$2Lrc5.call(r280_currentGlyph, 'increment', 8710);
            r249_dependencyProfile[r280_currentGlyph.name] = r249_getDependencyProfile(r280_currentGlyph);
            return r280_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.5', r249_xn$donothing$2Lrc0b)));
        r249_turned('nabla', 8711, 'increment', r249_MIDDLE, r249_CAP / 2);
        if (!r249_recursive)
            (function () {
                var r284_fullWidth = r249_FULLWIDTH2;
                var r284_s = (r249_RIGHTSB - r249_SB - r249_O * 4 + (r284_fullWidth - r249_WIDTH) * 0.5) / r249_CAP;
                var r284_df = r249_Miniature(new r249_xn$NamedParameterPair$2Lrc9b('glyphs', [
                    'eight',
                    'rotetedpropto'
                ]), new r249_xn$NamedParameterPair$2Lrc9b('crowd', 4), new r249_xn$NamedParameterPair$2Lrc9b('scale', r284_s), new r249_xn$NamedParameterPair$2Lrc9b('slantAngle', 0), new r249_xn$NamedParameterPair$2Lrc9b('unfair', true));
                (function _r284_t0() {
                    var _r291_t0 = this;
                    var r291_currentGlyph = _r291_t0;
                    if (!r291_currentGlyph)
                        return void 0;
                    if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.6')
                        r249_glyphList.pop();
                    r291_currentGlyph['set-width'](r284_fullWidth);
                    r291_currentGlyph.include(r284_df.eight);
                    r291_currentGlyph['apply-transform'](r249_Translate(-(r284_fullWidth / 2), -r249_CAP / 2));
                    r291_currentGlyph['apply-transform'](r249_Rotate(Math.PI / 2));
                    r291_currentGlyph['apply-transform'](r249_Scale(r284_s));
                    r291_currentGlyph['apply-transform'](r249_Translate(r284_fullWidth / 2, r249_symbolMid));
                    r291_currentGlyph['apply-transform'](r249_Italify());
                    r249_refair(_r291_t0);
                    r249_xn$save$2Lrc5.call(r291_currentGlyph, 'infty', 8734);
                    r249_dependencyProfile[r291_currentGlyph.name] = r249_getDependencyProfile(r291_currentGlyph);
                    return r291_currentGlyph;
                }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.6', r249_xn$donothing$2Lrc0b)));
                return function _r284_t1() {
                    var _r301_t0 = this;
                    var r301_currentGlyph = _r301_t0;
                    if (!r301_currentGlyph)
                        return void 0;
                    if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.7')
                        r249_glyphList.pop();
                    r301_currentGlyph['set-width'](r284_fullWidth);
                    r301_currentGlyph.include(r284_df.rotetedpropto);
                    r301_currentGlyph['apply-transform'](r249_Translate(-(r284_fullWidth / 2), -r249_CAP / 2));
                    r301_currentGlyph['apply-transform'](r249_Rotate(Math.PI / 2));
                    r301_currentGlyph['apply-transform'](r249_Scale(r284_s));
                    r301_currentGlyph['apply-transform'](r249_Translate(r284_fullWidth / 2, r249_symbolMid));
                    r301_currentGlyph['apply-transform'](r249_Italify());
                    r249_refair(_r301_t0);
                    r249_xn$save$2Lrc5.call(r301_currentGlyph, 'propto', 8733);
                    r249_dependencyProfile[r301_currentGlyph.name] = r249_getDependencyProfile(r301_currentGlyph);
                    return r301_currentGlyph;
                }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.7', r249_xn$donothing$2Lrc0b));
            }());
        return function _r252_t7() {
            var _r311_t0 = this;
            var r311_currentGlyph = _r311_t0;
            if (!r311_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.8')
                r249_glyphList.pop();
            r311_currentGlyph.include(r249_markset.b);
            r311_currentGlyph.include(r249_OShape(r249_CAP * 0.65, 0, r249_SB, r249_RIGHTSB, r249_OPERATORSTROKE));
            r311_currentGlyph.include(r249_dispiro(r249_widths.lhs(r249_OPERATORSTROKE), r249_flat(r249_RIGHTSB - r249_OX, r249_SMALLSMOOTHA), r249_curl(r249_RIGHTSB - r249_OX, r249_CAP - r249_SMALLSMOOTHB), r249_hookend(r249_CAPO), r249_g4(r249_SB, r249_CAP - r249_HOOK)));
            r249_xn$save$2Lrc5.call(r311_currentGlyph, 'partial', 8706);
            r249_dependencyProfile[r311_currentGlyph.name] = r249_getDependencyProfile(r311_currentGlyph);
            return r311_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.8', r249_xn$donothing$2Lrc0b));
    }());
    (function () {
        var r317_sw = r249_GEOMETRYSTROKE;
        var r317_k = 2 / 3;
        var r317_top = r249_symbolMid + (r249_RIGHTSB - r249_SB) * 0.5 + r317_sw * r317_k;
        var r317_bottom = r249_symbolMid - (r249_RIGHTSB - r249_SB) * 0.5 - r317_sw * r317_k;
        var r317_left = r249_SB - r317_sw * r317_k;
        var r317_right = r249_RIGHTSB + r317_sw * r317_k;
        (function _r317_t0() {
            var _r319_t0 = this;
            var r319_currentGlyph = _r319_t0;
            if (!r319_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.9')
                r249_glyphList.pop();
            r249_includeGlyphPart(r319_currentGlyph, r249_glyphs, 'hwwhitecircle');
            r249_xn$save$2Lrc5.call(r319_currentGlyph, 'mathO');
            r249_dependencyProfile[r319_currentGlyph.name] = r249_getDependencyProfile(r319_currentGlyph);
            return r319_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.9', r249_xn$donothing$2Lrc0b)));
        (function _r317_t1() {
            var _r323_t0 = this;
            var r323_currentGlyph = _r323_t0;
            if (!r323_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.10')
                r249_glyphList.pop();
            r249_includeGlyphPart(r323_currentGlyph, r249_glyphs, 'hwblackcircleO');
            r249_xn$save$2Lrc5.call(r323_currentGlyph, 'mathOOutline');
            r249_dependencyProfile[r323_currentGlyph.name] = r249_getDependencyProfile(r323_currentGlyph);
            return r323_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.10', r249_xn$donothing$2Lrc0b)));
        (function _r317_t2() {
            var _r327_t0 = this;
            var r327_currentGlyph = _r327_t0;
            if (!r327_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.11')
                r249_glyphList.pop();
            r327_currentGlyph.include(r249_xn$spirooutline$1aao(r249_corner(r317_left, r317_top), r249_corner(r317_left, r317_bottom), r249_corner(r317_right, r317_bottom), r249_corner(r317_right, r317_top)));
            r249_xn$save$2Lrc5.call(r327_currentGlyph, 'mathBoxOutline');
            r249_dependencyProfile[r327_currentGlyph.name] = r249_getDependencyProfile(r327_currentGlyph);
            return r327_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.11', r249_xn$donothing$2Lrc0b)));
        (function _r317_t3() {
            var _r331_t0 = this;
            var r331_currentGlyph = _r331_t0;
            if (!r331_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.12')
                r249_glyphList.pop();
            r331_currentGlyph.include(r249_intersection(r249_glyphs.mathBoxOutline, r249_union(r249_dispiro(r249_widths.lhs(r317_sw), r249_flat(r317_left, r317_top), r249_curl(r317_left, r317_bottom)), r249_dispiro(r249_widths.lhs(r317_sw), r249_flat(r317_left, r317_bottom), r249_curl(r317_right, r317_bottom)), r249_dispiro(r249_widths.lhs(r317_sw), r249_flat(r317_right, r317_bottom), r249_curl(r317_right, r317_top)), r249_dispiro(r249_widths.lhs(r317_sw), r249_flat(r317_right, r317_top), r249_curl(r317_left, r317_top)))));
            r249_xn$save$2Lrc5.call(r331_currentGlyph, 'mathBox');
            r249_dependencyProfile[r331_currentGlyph.name] = r249_getDependencyProfile(r331_currentGlyph);
            return r331_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.12', r249_xn$donothing$2Lrc0b)));
        return function () {
            (function _r335_t0() {
                var _r337_t0 = this;
                var r337_currentGlyph = _r337_t0;
                if (!r337_currentGlyph)
                    return void 0;
                if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.13')
                    r249_glyphList.pop();
                r337_currentGlyph.include(r249_intersection(r249_xn$spirooutline$1aao(r249_corner(r317_left, r317_bottom), r249_corner(r317_right, r317_bottom), r249_corner(r317_right, r317_top)), r249_union(r249_dispiro(r249_widths.lhs(r317_sw), r249_flat(r317_left, r317_bottom), r249_curl(r317_right, r317_bottom)), r249_dispiro(r249_widths.lhs(r317_sw), r249_flat(r317_right, r317_bottom), r249_curl(r317_right, r317_top)), r249_dispiro(r249_widths.lhs(r317_sw), r249_flat(r317_right, r317_top), r249_curl(r317_left, r317_bottom)))));
                r249_xn$save$2Lrc5.call(r337_currentGlyph, 'mathRightTriangle', 8895);
                r249_dependencyProfile[r337_currentGlyph.name] = r249_getDependencyProfile(r337_currentGlyph);
                return r337_currentGlyph;
            }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.13', r249_xn$donothing$2Lrc0b)));
            return function _r335_t1() {
                var _r341_t0 = this;
                var r341_currentGlyph = _r341_t0;
                if (!r341_currentGlyph)
                    return void 0;
                if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.14')
                    r249_glyphList.pop();
                r341_currentGlyph.include(r249_intersection(r249_xn$spirooutline$1aao(r249_corner(r317_left, r317_bottom), r249_corner(r317_right, r317_bottom), r249_corner(r317_right, r317_top)), r249_union(r249_dispiro(r249_widths.lhs(r317_sw), r249_flat(r317_left, r317_bottom), r249_curl(r317_right, r317_bottom)), r249_dispiro(r249_widths.lhs(r317_sw), r249_flat(r317_right, r317_top), r249_curl(r317_left, r317_bottom)))));
                r249_xn$save$2Lrc5.call(r341_currentGlyph, 'angle', 8736);
                r249_dependencyProfile[r341_currentGlyph.name] = r249_getDependencyProfile(r341_currentGlyph);
                return r341_currentGlyph;
            }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.14', r249_xn$donothing$2Lrc0b));
        }();
    }());
    (function () {
        (function _r345_t0() {
            var _r347_t0 = this;
            var r347_currentGlyph = _r347_t0;
            if (!r347_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.15')
                r249_glyphList.pop();
            r347_currentGlyph.include(r249_markset.plus);
            r347_currentGlyph.include(r249_HBar(r249_SB, r249_RIGHTSB, r249_symbolMid, r249_OPERATORSTROKE));
            r347_currentGlyph.include(r249_VBar(r249_MIDDLE, r249_plusTop, r249_plusBot, r249_OPERATORSTROKE));
            r249_xn$save$2Lrc5.call(r347_currentGlyph, 'plus', '+');
            r249_dependencyProfile[r347_currentGlyph.name] = r249_getDependencyProfile(r347_currentGlyph);
            return r347_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.15', r249_xn$donothing$2Lrc0b)));
        (function _r345_t1() {
            var _r353_t0 = this;
            var r353_currentGlyph = _r353_t0;
            if (!r353_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.16')
                r249_glyphList.pop();
            r353_currentGlyph.include(r249_markset.plus);
            r353_currentGlyph.include(r249_HBar(r249_SB, r249_RIGHTSB, r249_symbolMid, r249_GEOMETRYSTROKE));
            r353_currentGlyph.include(r249_VBar(r249_MIDDLE, r249_plusTop, r249_plusBot, r249_GEOMETRYSTROKE));
            r249_xn$save$2Lrc5.call(r353_currentGlyph, 'innerPlus');
            r249_dependencyProfile[r353_currentGlyph.name] = r249_getDependencyProfile(r353_currentGlyph);
            return r353_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.16', r249_xn$donothing$2Lrc0b)));
        (function _r345_t2() {
            var _r359_t0 = this;
            var r359_currentGlyph = _r359_t0;
            if (!r359_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.17')
                r249_glyphList.pop();
            r359_currentGlyph.include(r249_markset.plus);
            r359_currentGlyph.include(r249_HBar(r249_SB, r249_WIDTH - r249_O, r249_symbolMid, r249_OPERATORSTROKE));
            r359_currentGlyph.include(r249_VBar(r249_MIDDLE, r249_plusTop, r249_plusBot, r249_OPERATORSTROKE));
            r249_xn$save$2Lrc5.call(r359_currentGlyph, 'ligplus.lc');
            r249_dependencyProfile[r359_currentGlyph.name] = r249_getDependencyProfile(r359_currentGlyph);
            return r359_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.17', r249_xn$donothing$2Lrc0b)));
        (function _r345_t3() {
            var _r365_t0 = this;
            var r365_currentGlyph = _r365_t0;
            if (!r365_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.18')
                r249_glyphList.pop();
            r365_currentGlyph.include(r249_markset.plus);
            r365_currentGlyph.include(r249_HBar(r249_SB, r249_WIDTH - r249_O, r249_symbolMid, r249_OPERATORSTROKE));
            r365_currentGlyph.include(r249_VBar(r249_MIDDLE + r249_SB, r249_plusTop, r249_plusBot, r249_OPERATORSTROKE));
            r249_xn$save$2Lrc5.call(r365_currentGlyph, 'ligplus.lc.s');
            r249_dependencyProfile[r365_currentGlyph.name] = r249_getDependencyProfile(r365_currentGlyph);
            return r365_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.18', r249_xn$donothing$2Lrc0b)));
        (function _r345_t4() {
            var _r371_t0 = this;
            var r371_currentGlyph = _r371_t0;
            if (!r371_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.19')
                r249_glyphList.pop();
            r371_currentGlyph.include(r249_markset.plus);
            r371_currentGlyph.include(r249_HBar(r249_O, r249_WIDTH - r249_O, r249_symbolMid, r249_OPERATORSTROKE));
            r371_currentGlyph.include(r249_VBar(r249_MIDDLE, r249_plusTop, r249_plusBot, r249_OPERATORSTROKE));
            r249_xn$save$2Lrc5.call(r371_currentGlyph, 'ligplus.cc');
            r249_dependencyProfile[r371_currentGlyph.name] = r249_getDependencyProfile(r371_currentGlyph);
            return r371_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.19', r249_xn$donothing$2Lrc0b)));
        (function _r345_t5() {
            var _r377_t0 = this;
            var r377_currentGlyph = _r377_t0;
            if (!r377_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.20')
                r249_glyphList.pop();
            r377_currentGlyph.include(r249_markset.plus);
            r377_currentGlyph.include(r249_HBar(r249_O, r249_RIGHTSB, r249_symbolMid, r249_OPERATORSTROKE));
            r377_currentGlyph.include(r249_VBar(r249_MIDDLE, r249_plusTop, r249_plusBot, r249_OPERATORSTROKE));
            r249_xn$save$2Lrc5.call(r377_currentGlyph, 'ligplus.cr');
            r249_dependencyProfile[r377_currentGlyph.name] = r249_getDependencyProfile(r377_currentGlyph);
            return r377_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.20', r249_xn$donothing$2Lrc0b)));
        (function _r345_t6() {
            var _r383_t0 = this;
            var r383_currentGlyph = _r383_t0;
            if (!r383_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.21')
                r249_glyphList.pop();
            r383_currentGlyph.include(r249_markset.plus);
            r383_currentGlyph.include(r249_HBar(r249_O, r249_RIGHTSB, r249_symbolMid, r249_OPERATORSTROKE));
            r383_currentGlyph.include(r249_VBar(r249_MIDDLE - r249_SB, r249_plusTop, r249_plusBot, r249_OPERATORSTROKE));
            r249_xn$save$2Lrc5.call(r383_currentGlyph, 'ligplus.cr.s');
            r249_dependencyProfile[r383_currentGlyph.name] = r249_getDependencyProfile(r383_currentGlyph);
            return r383_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.21', r249_xn$donothing$2Lrc0b)));
        (function _r345_t7() {
            var _r389_t0 = this;
            var r389_currentGlyph = _r389_t0;
            if (!r389_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.22')
                r249_glyphList.pop();
            r389_currentGlyph.include(r249_markset.plus);
            r389_currentGlyph.include(r249_HBar(-r249_SB + r249_O, r249_RIGHTSB, r249_symbolMid, r249_OPERATORSTROKE));
            r389_currentGlyph.include(r249_VBar(r249_MIDDLE, r249_plusTop, r249_plusBot, r249_OPERATORSTROKE));
            r249_xn$save$2Lrc5.call(r389_currentGlyph, 'ligplus.jr');
            r249_dependencyProfile[r389_currentGlyph.name] = r249_getDependencyProfile(r389_currentGlyph);
            return r389_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.22', r249_xn$donothing$2Lrc0b)));
        (function _r345_t8() {
            var _r395_t0 = this;
            var r395_currentGlyph = _r395_t0;
            if (!r395_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.23')
                r249_glyphList.pop();
            r395_currentGlyph.include(r249_markset.plus);
            r395_currentGlyph.include(r249_HBar(r249_SB, r249_RIGHTSB, r249_symbolMid, r249_OPERATORSTROKE));
            r249_xn$save$2Lrc5.call(r395_currentGlyph, 'minus', 8722);
            r249_dependencyProfile[r395_currentGlyph.name] = r249_getDependencyProfile(r395_currentGlyph);
            return r395_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.23', r249_xn$donothing$2Lrc0b)));
        (function _r345_t9() {
            var _r400_t0 = this;
            var r400_currentGlyph = _r400_t0;
            if (!r400_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.24')
                r249_glyphList.pop();
            r400_currentGlyph.include(r249_markset.plus);
            r400_currentGlyph.include(r249_HBar(-r249_SB, r249_RIGHTSB, r249_symbolMid, r249_OPERATORSTROKE));
            r249_xn$save$2Lrc5.call(r400_currentGlyph, 'ligminus.preTurnstile');
            r249_xn$save$2Lrc5.call(r400_currentGlyph, 'lighyphen.preTurnstile');
            r249_dependencyProfile[r400_currentGlyph.name] = r249_getDependencyProfile(r400_currentGlyph);
            return r400_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.24', r249_xn$donothing$2Lrc0b)));
        (function _r345_t10() {
            var _r406_t0 = this;
            var r406_currentGlyph = _r406_t0;
            if (!r406_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.25')
                r249_glyphList.pop();
            r406_currentGlyph.include(r249_markset.plus);
            r406_currentGlyph.include(r249_HBar(r249_SB, r249_RIGHTSB, r249_symbolMid, r249_GEOMETRYSTROKE));
            r249_xn$save$2Lrc5.call(r406_currentGlyph, 'innerMinus');
            r249_dependencyProfile[r406_currentGlyph.name] = r249_getDependencyProfile(r406_currentGlyph);
            return r406_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.25', r249_xn$donothing$2Lrc0b)));
        (function _r345_t11() {
            var _r411_t0 = this;
            var r411_currentGlyph = _r411_t0;
            if (!r411_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.26')
                r249_glyphList.pop();
            r411_currentGlyph.include(r249_markset.plus);
            r411_currentGlyph.include(r249_HBarBottom(r249_SB, r249_RIGHTSB, 0, r249_OPERATORSTROKE));
            r249_includeGlyphPart(r411_currentGlyph, r249_glyphs, 'plus');
            r249_xn$save$2Lrc5.call(r411_currentGlyph, 'plusminus', 177);
            r249_dependencyProfile[r411_currentGlyph.name] = r249_getDependencyProfile(r411_currentGlyph);
            return r411_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.26', r249_xn$donothing$2Lrc0b)));
        r249_turned('minusplus', 8723, 'plusminus', r249_MIDDLE, r249_symbolMid);
        (function _r345_t12() {
            var _r417_t0 = this;
            var r417_currentGlyph = _r417_t0;
            if (!r417_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.27')
                r249_glyphList.pop();
            r417_currentGlyph.include(r249_markset.plus);
            var r417_radius = (r249_RIGHTSB - r249_SB) / 2;
            r417_currentGlyph.include(r249_dispiro(r249_widths.center(r249_OPERATORSTROKE), r249_flat(r249_MIDDLE - r417_radius, r249_symbolMid - r417_radius), r249_curl(r249_MIDDLE + r417_radius, r249_symbolMid + r417_radius)));
            r249_xn$save$2Lrc5.call(r417_currentGlyph, 'multiplyStroke1');
            r249_dependencyProfile[r417_currentGlyph.name] = r249_getDependencyProfile(r417_currentGlyph);
            return r417_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.27', r249_xn$donothing$2Lrc0b)));
        (function _r345_t13() {
            var _r422_t0 = this;
            var r422_currentGlyph = _r422_t0;
            if (!r422_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.28')
                r249_glyphList.pop();
            r422_currentGlyph.include(r249_markset.plus);
            var r422_radius = (r249_RIGHTSB - r249_SB) / 2;
            r422_currentGlyph.include(r249_dispiro(r249_widths.center(r249_OPERATORSTROKE), r249_flat(r249_MIDDLE + r422_radius, r249_symbolMid - r422_radius), r249_curl(r249_MIDDLE - r422_radius, r249_symbolMid + r422_radius)));
            r249_xn$save$2Lrc5.call(r422_currentGlyph, 'multiplyStroke2');
            r249_dependencyProfile[r422_currentGlyph.name] = r249_getDependencyProfile(r422_currentGlyph);
            return r422_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.28', r249_xn$donothing$2Lrc0b)));
        (function _r345_t14() {
            var _r427_t0 = this;
            var r427_currentGlyph = _r427_t0;
            if (!r427_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.29')
                r249_glyphList.pop();
            r427_currentGlyph.include(r249_markset.plus);
            var r427_radius = (r249_RIGHTSB - r249_SB) / 2;
            r427_currentGlyph.include(r249_dispiro(r249_widths.center(r249_GEOMETRYSTROKE), r249_flat(r249_MIDDLE - r427_radius, r249_symbolMid - r427_radius), r249_curl(r249_MIDDLE + r427_radius, r249_symbolMid + r427_radius)));
            r249_xn$save$2Lrc5.call(r427_currentGlyph, 'innerMultiplyStroke1');
            r249_dependencyProfile[r427_currentGlyph.name] = r249_getDependencyProfile(r427_currentGlyph);
            return r427_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.29', r249_xn$donothing$2Lrc0b)));
        (function _r345_t15() {
            var _r432_t0 = this;
            var r432_currentGlyph = _r432_t0;
            if (!r432_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.30')
                r249_glyphList.pop();
            r432_currentGlyph.include(r249_markset.plus);
            var r432_radius = (r249_RIGHTSB - r249_SB) / 2;
            r432_currentGlyph.include(r249_dispiro(r249_widths.center(r249_GEOMETRYSTROKE), r249_flat(r249_MIDDLE + r432_radius, r249_symbolMid - r432_radius), r249_curl(r249_MIDDLE - r432_radius, r249_symbolMid + r432_radius)));
            r249_xn$save$2Lrc5.call(r432_currentGlyph, 'innerMultiplyStroke2');
            r249_dependencyProfile[r432_currentGlyph.name] = r249_getDependencyProfile(r432_currentGlyph);
            return r432_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.30', r249_xn$donothing$2Lrc0b)));
        (function _r345_t16() {
            var _r437_t0 = this;
            var r437_currentGlyph = _r437_t0;
            if (!r437_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.31')
                r249_glyphList.pop();
            r437_currentGlyph.include(r249_markset.plus);
            r249_includeGlyphPart(r437_currentGlyph, r249_glyphs, 'multiplyStroke1');
            r249_includeGlyphPart(r437_currentGlyph, r249_glyphs, 'multiplyStroke2');
            r249_xn$save$2Lrc5.call(r437_currentGlyph, 'multiply', 215);
            r249_dependencyProfile[r437_currentGlyph.name] = r249_getDependencyProfile(r437_currentGlyph);
            return r437_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.31', r249_xn$donothing$2Lrc0b)));
        (function _r345_t17() {
            var _r443_t0 = this;
            var r443_currentGlyph = _r443_t0;
            if (!r443_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.32')
                r249_glyphList.pop();
            r443_currentGlyph.include(r249_markset.plus);
            r249_includeGlyphPart(r443_currentGlyph, r249_glyphs, 'innerMultiplyStroke1');
            r249_includeGlyphPart(r443_currentGlyph, r249_glyphs, 'innerMultiplyStroke2');
            r249_xn$save$2Lrc5.call(r443_currentGlyph, 'innerMultiply');
            r249_dependencyProfile[r443_currentGlyph.name] = r249_getDependencyProfile(r443_currentGlyph);
            return r443_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.32', r249_xn$donothing$2Lrc0b)));
        return function _r345_t18() {
            var _r449_t0 = this;
            var r449_currentGlyph = _r449_t0;
            if (!r449_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.33')
                r249_glyphList.pop();
            r449_currentGlyph.include(r249_markset.plus);
            r249_includeGlyphPart(r449_currentGlyph, r249_glyphs, 'minus');
            var r449_radius = (r249_RIGHTSB - r249_SB) / 2;
            r449_currentGlyph.include(r249_Ring(r249_symbolMid + r449_radius + r249_DOTRADIUS, r249_symbolMid + r449_radius - r249_DOTRADIUS, r249_MIDDLE - r249_DOTRADIUS + r249_O, r249_MIDDLE + r249_DOTRADIUS - r249_O, true));
            r449_currentGlyph.include(r249_Ring(r249_symbolMid - r449_radius + r249_DOTRADIUS, r249_symbolMid - r449_radius - r249_DOTRADIUS, r249_MIDDLE - r249_DOTRADIUS + r249_O, r249_MIDDLE + r249_DOTRADIUS - r249_O, true));
            r249_xn$save$2Lrc5.call(r449_currentGlyph, 'divide', 247);
            r249_dependencyProfile[r449_currentGlyph.name] = r249_getDependencyProfile(r449_currentGlyph);
            return r449_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.33', r249_xn$donothing$2Lrc0b));
    }());
    var r249_equalHalfSpace = (r249_operTop - r249_operBot) * 1.25 * r1_designParameters.equal_wideness;
    (function () {
        (function _r456_t0() {
            var _r458_t0 = this;
            var r458_currentGlyph = _r458_t0;
            if (!r458_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.34')
                r249_glyphList.pop();
            r458_currentGlyph.include(r249_markset.plus);
            r458_currentGlyph.include(r249_HBar(r249_SB, r249_RIGHTSB, r249_symbolMid + r249_equalHalfSpace, r249_OPERATORSTROKE));
            r458_currentGlyph.include(r249_HBar(r249_SB, r249_RIGHTSB, r249_symbolMid - r249_equalHalfSpace, r249_OPERATORSTROKE));
            r249_xn$save$2Lrc5.call(r458_currentGlyph, 'equal', '=');
            (function _r458_t2() {
                var _r464_t0 = this;
                var r464_currentGlyph = _r464_t0;
                if (!r464_currentGlyph)
                    return void 0;
                if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.35')
                    r249_glyphList.pop();
                r464_currentGlyph.include(r249_DotAt(r1_mix(r249_SB, r249_RIGHTSB, 1 / 6), r249_symbolMid + r249_equalHalfSpace * 2.5, r249_DOTRADIUS));
                r464_currentGlyph.include(r249_DotAt(r1_mix(r249_SB, r249_RIGHTSB, 5 / 6), r249_symbolMid - r249_equalHalfSpace * 2.5, r249_DOTRADIUS));
                r249_xn$save$2Lrc5.call(r464_currentGlyph, 'twodotapproxeq', 8786);
                r249_dependencyProfile[r464_currentGlyph.name] = r249_getDependencyProfile(r464_currentGlyph);
                return r464_currentGlyph;
            }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.35', function _r458_t3() {
                var _r468_t0 = this;
                _r468_t0.include(r458_currentGlyph, true);
                return _r468_t0.advanceWidth = r458_currentGlyph.advanceWidth;
            })));
            r249_dependencyProfile[r458_currentGlyph.name] = r249_getDependencyProfile(r458_currentGlyph);
            return r458_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.34', r249_xn$donothing$2Lrc0b)));
        var r456_equalHole = function _r456_t1(r469_x) {
            return r249_VBar(r469_x, r249_symbolMid - r249_equalHalfSpace, r249_symbolMid + r249_equalHalfSpace, r249_adviceBlackness(6));
        };
        (function _r456_t2() {
            var _r471_t0 = this;
            var r471_currentGlyph = _r471_t0;
            if (!r471_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.36')
                r249_glyphList.pop();
            r471_currentGlyph.include(r249_markset.plus);
            r471_currentGlyph.include(r249_difference(r249_union(r249_HBar(r249_SB, r249_WIDTH - r249_O, r249_symbolMid + r249_equalHalfSpace, r249_OPERATORSTROKE), r249_HBar(r249_SB, r249_WIDTH - r249_O, r249_symbolMid - r249_equalHalfSpace, r249_OPERATORSTROKE)), r456_equalHole(r249_WIDTH)));
            r249_xn$save$2Lrc5.call(r471_currentGlyph, 'equal.fc');
            r249_dependencyProfile[r471_currentGlyph.name] = r249_getDependencyProfile(r471_currentGlyph);
            return r471_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.36', r249_xn$donothing$2Lrc0b)));
        (function _r456_t3() {
            var _r476_t0 = this;
            var r476_currentGlyph = _r476_t0;
            if (!r476_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.37')
                r249_glyphList.pop();
            r476_currentGlyph.include(r249_markset.plus);
            r476_currentGlyph.include(r249_difference(r249_union(r249_HBar(r249_O, r249_RIGHTSB, r249_symbolMid + r249_equalHalfSpace, r249_OPERATORSTROKE), r249_HBar(r249_O, r249_RIGHTSB, r249_symbolMid - r249_equalHalfSpace, r249_OPERATORSTROKE)), r456_equalHole(0)));
            r249_xn$save$2Lrc5.call(r476_currentGlyph, 'equal.cf');
            r249_dependencyProfile[r476_currentGlyph.name] = r249_getDependencyProfile(r476_currentGlyph);
            return r476_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.37', r249_xn$donothing$2Lrc0b)));
        (function _r456_t4() {
            var _r481_t0 = this;
            var r481_currentGlyph = _r481_t0;
            if (!r481_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.38')
                r249_glyphList.pop();
            r481_currentGlyph.include(r249_markset.plus);
            r481_currentGlyph.include(r249_difference(r249_union(r249_HBar(r249_RIGHTSB - r249_WIDTH + r249_O, r249_RIGHTSB, r249_symbolMid + r249_equalHalfSpace, r249_OPERATORSTROKE), r249_HBar(r249_RIGHTSB - r249_WIDTH + r249_O, r249_RIGHTSB, r249_symbolMid - r249_equalHalfSpace, r249_OPERATORSTROKE)), r456_equalHole(0)));
            r249_xn$save$2Lrc5.call(r481_currentGlyph, 'equal.jf');
            r249_dependencyProfile[r481_currentGlyph.name] = r249_getDependencyProfile(r481_currentGlyph);
            return r481_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.38', r249_xn$donothing$2Lrc0b)));
        return function _r456_t5() {
            var _r486_t0 = this;
            var r486_currentGlyph = _r486_t0;
            if (!r486_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.39')
                r249_glyphList.pop();
            r486_currentGlyph.include(r249_markset.plus);
            r486_currentGlyph.include(r249_difference(r249_union(r249_HBar(r249_O, r249_WIDTH - r249_O, r249_symbolMid + r249_equalHalfSpace, r249_OPERATORSTROKE), r249_HBar(r249_O, r249_WIDTH - r249_O, r249_symbolMid - r249_equalHalfSpace, r249_OPERATORSTROKE)), r249_union(r456_equalHole(0), r456_equalHole(r249_WIDTH))));
            r249_xn$save$2Lrc5.call(r486_currentGlyph, 'equal.cc');
            r249_dependencyProfile[r486_currentGlyph.name] = r249_getDependencyProfile(r486_currentGlyph);
            return r486_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.39', r249_xn$donothing$2Lrc0b));
    }());
    (function () {
        var r491_radius = Math.min(r249_PERIODRADIUS, r1_linreg(r249_WIDTH, 0.5 * r249_adviceBlackness(3.5) * r249_PERIODSIZE / r249_STROKE, r249_UPM, r249_PERIODRADIUS, r249_FULLWIDTH3));
        var r491_left = r1_mix(0, r249_FULLWIDTH3, 1 / 4);
        var r491_right = r1_mix(0, r249_FULLWIDTH3, 3 / 4);
        (function _r491_t0() {
            var _r493_t0 = this;
            var r493_currentGlyph = _r493_t0;
            if (!r493_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.40')
                r249_glyphList.pop();
            r493_currentGlyph['set-width'](r249_FULLWIDTH3);
            r493_currentGlyph.include(r249_Ring(r249_XH - r249_O, r249_XH - r491_radius * 2 + r249_O, r249_FULLWIDTH3 / 2 - r491_radius + r249_O, r249_FULLWIDTH3 / 2 + r491_radius - r249_O, true));
            r493_currentGlyph.include(r249_Ring(r491_radius * 2 - r249_O, r249_O, r491_left - r491_radius + r249_O, r491_left + r491_radius - r249_O, true));
            r493_currentGlyph.include(r249_Ring(r491_radius * 2 - r249_O, r249_O, r491_right - r491_radius + r249_O, r491_right + r491_radius - r249_O, true));
            r249_xn$save$2Lrc5.call(r493_currentGlyph, 'therefore', 8756);
            r249_dependencyProfile[r493_currentGlyph.name] = r249_getDependencyProfile(r493_currentGlyph);
            return r493_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.40', r249_xn$donothing$2Lrc0b)));
        (function _r491_t1() {
            var _r500_t0 = this;
            var r500_currentGlyph = _r500_t0;
            if (!r500_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.41')
                r249_glyphList.pop();
            r500_currentGlyph['set-width'](r249_FULLWIDTH3);
            r500_currentGlyph.include(r249_Ring(r249_XH - r249_O, r249_XH - r491_radius * 2 + r249_O, r491_left - r491_radius + r249_O, r491_left + r491_radius - r249_O, true));
            r500_currentGlyph.include(r249_Ring(r249_XH - r249_O, r249_XH - r491_radius * 2 + r249_O, r491_right - r491_radius + r249_O, r491_right + r491_radius - r249_O, true));
            r500_currentGlyph.include(r249_Ring(r491_radius * 2 - r249_O, r249_O, r249_FULLWIDTH3 / 2 - r491_radius + r249_O, r249_FULLWIDTH3 / 2 + r491_radius - r249_O, true));
            r249_xn$save$2Lrc5.call(r500_currentGlyph, 'because', 8757);
            r249_dependencyProfile[r500_currentGlyph.name] = r249_getDependencyProfile(r500_currentGlyph);
            return r500_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.41', r249_xn$donothing$2Lrc0b)));
        (function _r491_t2() {
            var _r507_t0 = this;
            var r507_currentGlyph = _r507_t0;
            if (!r507_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.42')
                r249_glyphList.pop();
            r507_currentGlyph['set-width'](r249_FULLWIDTH3);
            r507_currentGlyph.include(r249_Ring(r249_PERIODRADIUS * 2 - r249_O, r249_O, r249_FULLWIDTH3 / 2 - r249_PERIODRADIUS + r249_O, r249_FULLWIDTH3 / 2 + r249_PERIODRADIUS - r249_O, true));
            r507_currentGlyph.include(r249_Ring(r249_XH - r249_O, r249_XH - r249_PERIODRADIUS * 2 + r249_O, r249_FULLWIDTH3 / 2 - r249_PERIODRADIUS + r249_O, r249_FULLWIDTH3 / 2 + r249_PERIODRADIUS - r249_O, true));
            r249_xn$save$2Lrc5.call(r507_currentGlyph, 'mathcolon', 8758);
            r249_dependencyProfile[r507_currentGlyph.name] = r249_getDependencyProfile(r507_currentGlyph);
            return r507_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.42', r249_xn$donothing$2Lrc0b)));
        (function _r491_t3() {
            var _r513_t0 = this;
            var r513_currentGlyph = _r513_t0;
            if (!r513_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.43')
                r249_glyphList.pop();
            r513_currentGlyph['set-width'](r249_FULLWIDTH3);
            r513_currentGlyph.include(r249_Ring(r491_radius * 2 - r249_O, r249_O, r491_left - r491_radius + r249_O, r491_left + r491_radius - r249_O, true));
            r513_currentGlyph.include(r249_Ring(r491_radius * 2 - r249_O, r249_O, r491_right - r491_radius + r249_O, r491_right + r491_radius - r249_O, true));
            r513_currentGlyph.include(r249_Ring(r249_XH - r249_O, r249_XH - r491_radius * 2 + r249_O, r491_left - r491_radius + r249_O, r491_left + r491_radius - r249_O, true));
            r513_currentGlyph.include(r249_Ring(r249_XH - r249_O, r249_XH - r491_radius * 2 + r249_O, r491_right - r491_radius + r249_O, r491_right + r491_radius - r249_O, true));
            r249_xn$save$2Lrc5.call(r513_currentGlyph, 'coloncolon', 8759);
            r249_dependencyProfile[r513_currentGlyph.name] = r249_getDependencyProfile(r513_currentGlyph);
            return r513_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.43', r249_xn$donothing$2Lrc0b)));
        (function _r491_t4() {
            var _r521_t0 = this;
            var r521_currentGlyph = _r521_t0;
            if (!r521_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.44')
                r249_glyphList.pop();
            r521_currentGlyph.include(r249_Ring(r249_symbolMid + r249_PERIODRADIUS - r249_O, r249_symbolMid - r249_PERIODRADIUS + r249_O, r249_MIDDLE - r249_PERIODRADIUS + r249_O, r249_MIDDLE + r249_PERIODRADIUS - r249_O, true));
            r249_xn$save$2Lrc5.call(r521_currentGlyph, 'mathcdot');
            r249_dependencyProfile[r521_currentGlyph.name] = r249_getDependencyProfile(r521_currentGlyph);
            return r521_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.44', r249_xn$donothing$2Lrc0b)));
        return r249_composite('mathAsterisk', r249_glyphs['opAsterisk.low'], r249_xn$intounicode$5sIl(8727));
    }());
    (function () {
        r249_composite(r249_glyphs.mathO, r249_intersection(r249_glyphs.mathOOutline, r249_glyphs.innerPlus), r249_xn$intounicode$5sIl(8853));
        r249_composite(r249_glyphs.mathO, r249_intersection(r249_glyphs.mathOOutline, r249_glyphs.innerMinus), r249_xn$intounicode$5sIl(8854));
        r249_composite(r249_glyphs.mathO, r249_intersection(r249_glyphs.mathOOutline, r249_glyphs.innerMultiply), r249_xn$intounicode$5sIl(8855));
        r249_composite(r249_glyphs.mathO, r249_intersection(r249_glyphs.mathOOutline, r249_glyphs.innerMultiplyStroke1), r249_xn$intounicode$5sIl(8856));
        r249_composite(r249_glyphs.mathO, r249_intersection(r249_glyphs.mathOOutline, r249_glyphs.mathcdot), r249_xn$intounicode$5sIl(8857));
        r249_composite(r249_glyphs.mathO, r249_intersection(r249_glyphs.mathOOutline, r249_glyphs.hwsmallwhitecircle), r249_xn$intounicode$5sIl(8858));
        r249_composite(r249_glyphs.mathO, r249_intersection(r249_glyphs.mathOOutline, r249_glyphs.mathAsterisk), r249_xn$intounicode$5sIl(8859));
        r249_composite(r249_glyphs.mathO, r249_intersection(r249_glyphs.mathOOutline, r249_HBar(r249_SB + r249_GEOMETRYSTROKE, r249_RIGHTSB - r249_GEOMETRYSTROKE, r249_symbolMid, r249_GEOMETRYSTROKE)), r249_xn$intounicode$5sIl(8861));
        var r525_eqS = Math.min(r249_GEOMETRYSTROKE, (r249_RIGHTSB - r249_SB) / 8);
        var r525_eqD = Math.max(r525_eqS, (r249_RIGHTSB - r249_SB) / 6);
        return r249_composite(r249_glyphs.mathO, r249_intersection(r249_glyphs.mathOOutline, r249_union(r249_HBar(r249_SB + r525_eqS, r249_RIGHTSB - r525_eqS, r249_symbolMid + r525_eqD, r525_eqS), r249_HBar(r249_SB + r525_eqS, r249_RIGHTSB - r525_eqS, r249_symbolMid - r525_eqD, r525_eqS))), r249_xn$intounicode$5sIl(8860));
    }());
    (function () {
        r249_composite(r249_glyphs.mathBox, r249_intersection(r249_glyphs.mathBoxOutline, r249_glyphs.innerPlus), r249_xn$intounicode$5sIl(8862));
        r249_composite(r249_glyphs.mathBox, r249_intersection(r249_glyphs.mathBoxOutline, r249_glyphs.innerMinus), r249_xn$intounicode$5sIl(8863));
        r249_composite(r249_glyphs.mathBox, r249_intersection(r249_glyphs.mathBoxOutline, r249_glyphs.innerMultiply), r249_xn$intounicode$5sIl(8864));
        return r249_composite(r249_glyphs.mathBox, r249_intersection(r249_glyphs.mathBoxOutline, r249_glyphs.mathcdot), r249_xn$intounicode$5sIl(8865));
    }());
    (function () {
        (function _r529_t0() {
            var _r531_t0 = this;
            var r531_currentGlyph = _r531_t0;
            if (!r531_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.45')
                r249_glyphList.pop();
            r531_currentGlyph.include(r249_dispiro(r249_widths.center(r249_OPERATORSTROKE), r249_flat(r249_SB, r249_operTop), r249_curl(r249_MIDDLE, r249_operBot, r249_heading(r249_DOWNWARD))));
            r531_currentGlyph.include(r249_dispiro(r249_widths.center(r249_OPERATORSTROKE), r249_flat(r249_RIGHTSB, r249_operTop), r249_curl(r249_MIDDLE, r249_operBot, r249_heading(r249_DOWNWARD))));
            r249_xn$save$2Lrc5.call(r531_currentGlyph, 'vee', 8744);
            r249_dependencyProfile[r531_currentGlyph.name] = r249_getDependencyProfile(r531_currentGlyph);
            return r531_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.45', r249_xn$donothing$2Lrc0b)));
        r249_turned('wedge', 8743, 'vee', r249_MIDDLE, r249_symbolMid);
        (function _r529_t1() {
            var _r536_t0 = this;
            var r536_currentGlyph = _r536_t0;
            if (!r536_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.46')
                r249_glyphList.pop();
            r536_currentGlyph.include(r249_UShape(r249_operTop, r249_operBot, r249_OPERATORSTROKE, true));
            r249_xn$save$2Lrc5.call(r536_currentGlyph, 'cup', 8746);
            r249_dependencyProfile[r536_currentGlyph.name] = r249_getDependencyProfile(r536_currentGlyph);
            return r536_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.46', r249_xn$donothing$2Lrc0b)));
        return r249_turned('cap', 8745, 'cup', r249_MIDDLE, r249_symbolMid);
    }());
    (function () {
        (function _r540_t0() {
            var _r542_t0 = this;
            var r542_currentGlyph = _r542_t0;
            if (!r542_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.47')
                r249_glyphList.pop();
            r249_includeGlyphPart(r542_currentGlyph, r249_glyphs, 'minus');
            r542_currentGlyph.include(r249_VBarRight(r249_RIGHTSB, r249_symbolMid - (r249_RIGHTSB - r249_SB) * 0.55, r249_symbolMid, r249_OPERATORSTROKE));
            r249_xn$save$2Lrc5.call(r542_currentGlyph, 'negate', 172);
            r249_dependencyProfile[r542_currentGlyph.name] = r249_getDependencyProfile(r542_currentGlyph);
            return r542_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.47', r249_xn$donothing$2Lrc0b)));
        var r540_top = r249_tackTop;
        var r540_bot = r249_tackBot;
        (function _r540_t1() {
            var _r547_t0 = this;
            var r547_currentGlyph = _r547_t0;
            if (!r547_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.48')
                r249_glyphList.pop();
            r547_currentGlyph.include(r249_markset.tack);
            r547_currentGlyph.include(r249_HBar(r249_SB, r249_RIGHTSB, r249_symbolMid, r249_OPERATORSTROKE));
            r547_currentGlyph.include(r249_VBarLeft(r249_SB, r540_top, r540_bot, r249_OPERATORSTROKE));
            r249_xn$save$2Lrc5.call(r547_currentGlyph, 'vdash', 8866);
            r249_dependencyProfile[r547_currentGlyph.name] = r249_getDependencyProfile(r547_currentGlyph);
            return r547_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.48', r249_xn$donothing$2Lrc0b)));
        r249_turned('dashv', 8867, 'vdash', r249_MIDDLE, r249_symbolMid);
        (function _r540_t2() {
            var _r553_t0 = this;
            var r553_currentGlyph = _r553_t0;
            if (!r553_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.49')
                r249_glyphList.pop();
            r553_currentGlyph.include(r249_markset.tack);
            var r553_l = r1_mix(r249_MIDDLE, r249_SB, r1_designParameters.logic_narrow_shrink);
            var r553_r = r1_mix(r249_MIDDLE, r249_RIGHTSB, r1_designParameters.logic_narrow_shrink);
            r553_currentGlyph.include(r249_HBar(r553_l, r553_r, r249_symbolMid, r249_OPERATORSTROKE));
            r553_currentGlyph.include(r249_VBarLeft(r553_l, r540_top, r540_bot, r249_OPERATORSTROKE));
            r249_xn$save$2Lrc5.call(r553_currentGlyph, 'assert', 8870);
            r249_dependencyProfile[r553_currentGlyph.name] = r249_getDependencyProfile(r553_currentGlyph);
            return r553_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.49', r249_xn$donothing$2Lrc0b)));
        (function _r540_t3() {
            var _r559_t0 = this;
            var r559_currentGlyph = _r559_t0;
            if (!r559_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.50')
                r249_glyphList.pop();
            r559_currentGlyph.include(r249_markset.tack);
            var r559_l = r1_mix(r249_MIDDLE, r249_SB, r1_designParameters.logic_narrow_shrink);
            var r559_r = r1_mix(r249_MIDDLE, r249_RIGHTSB, r1_designParameters.logic_narrow_shrink);
            r559_currentGlyph.include(r249_HBar(r559_l, r559_r, r1_mix(r249_symbolMid, r540_top, 1 / 3), r249_OPERATORSTROKE));
            r559_currentGlyph.include(r249_HBar(r559_l, r559_r, r1_mix(r249_symbolMid, r540_bot, 1 / 3), r249_OPERATORSTROKE));
            r559_currentGlyph.include(r249_VBarLeft(r559_l, r540_top, r540_bot, r249_OPERATORSTROKE));
            r249_xn$save$2Lrc5.call(r559_currentGlyph, 'models', 8871);
            r249_dependencyProfile[r559_currentGlyph.name] = r249_getDependencyProfile(r559_currentGlyph);
            return r559_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.50', r249_xn$donothing$2Lrc0b)));
        (function _r540_t4() {
            var _r566_t0 = this;
            var r566_currentGlyph = _r566_t0;
            if (!r566_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.51')
                r249_glyphList.pop();
            r566_currentGlyph.include(r249_markset.tack);
            var r566_l = r1_mix(r249_MIDDLE, r249_SB, 1);
            var r566_r = r1_mix(r249_MIDDLE, r249_RIGHTSB, 1);
            r566_currentGlyph.include(r249_HBar(r566_l, r566_r, r1_mix(r249_symbolMid, r540_top, 1 / 3), r249_OPERATORSTROKE));
            r566_currentGlyph.include(r249_HBar(r566_l, r566_r, r1_mix(r249_symbolMid, r540_bot, 1 / 3), r249_OPERATORSTROKE));
            r566_currentGlyph.include(r249_VBarLeft(r566_l, r540_top, r540_bot, r249_OPERATORSTROKE));
            r249_xn$save$2Lrc5.call(r566_currentGlyph, 'tautology', 8872);
            r249_dependencyProfile[r566_currentGlyph.name] = r249_getDependencyProfile(r566_currentGlyph);
            return r566_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.51', r249_xn$donothing$2Lrc0b)));
        (function _r540_t5() {
            var _r573_t0 = this;
            var r573_currentGlyph = _r573_t0;
            if (!r573_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.52')
                r249_glyphList.pop();
            r573_currentGlyph.include(r249_markset.tack);
            r573_currentGlyph.include(r249_HBarTop(r249_SB, r249_RIGHTSB, r540_top, r249_OPERATORSTROKE));
            r573_currentGlyph.include(r249_VBar(r249_MIDDLE, r540_top, r540_bot, r249_OPERATORSTROKE));
            r249_xn$save$2Lrc5.call(r573_currentGlyph, 'top', 8868);
            r249_dependencyProfile[r573_currentGlyph.name] = r249_getDependencyProfile(r573_currentGlyph);
            return r573_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.52', r249_xn$donothing$2Lrc0b)));
        r249_composite('bot', r249_glyphs.top, r249_FlipAround(r249_MIDDLE, r249_symbolMid), r249_xn$intounicode$5sIl(8869));
        (function _r540_t6() {
            var _r579_t0 = this;
            var r579_currentGlyph = _r579_t0;
            if (!r579_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.53')
                r249_glyphList.pop();
            var r579_mid = r1_mix(r540_bot, r540_top - r249_OPERATORSTROKE / 2, 0.5);
            var r579_w = (r249_RIGHTSB - r249_SB) * 0.4;
            var r579_fine = Math.min(r579_w / 2.5, r249_adviceBlackness(5));
            r579_currentGlyph.include(r249_HBarTop(r249_SB, r249_RIGHTSB, r540_top, r249_OPERATORSTROKE));
            r579_currentGlyph.include(r249_VBar(r249_MIDDLE, r540_top, r579_mid + r579_w, r249_OPERATORSTROKE));
            r579_currentGlyph.include(r249_VBar(r249_MIDDLE, r579_mid - r579_w, r540_bot, r249_OPERATORSTROKE));
            r579_currentGlyph.include(r249_VBar(r249_MIDDLE, r579_mid + r579_w, r579_mid - r579_w, r579_fine));
            r579_currentGlyph.include(r249_OShape(r579_mid + r579_w, r579_mid - r579_w, r249_MIDDLE - r579_w, r249_MIDDLE + r579_w, r579_fine));
            r249_xn$save$2Lrc5.call(r579_currentGlyph, 'topring', 9045);
            r249_dependencyProfile[r579_currentGlyph.name] = r249_getDependencyProfile(r579_currentGlyph);
            return r579_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.53', r249_xn$donothing$2Lrc0b)));
        r249_composite('botring', r249_glyphs.topring, r249_FlipAround(r249_MIDDLE, r249_symbolMid), r249_xn$intounicode$5sIl(9038));
        return function _r540_t7() {
            var _r587_t0 = this;
            var r587_currentGlyph = _r587_t0;
            if (!r587_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.54')
                r249_glyphList.pop();
            r587_currentGlyph.include(r249_markset.tack);
            r587_currentGlyph.include(r249_HBarBottom(r249_SB, r249_RIGHTSB, 0, r249_OPERATORSTROKE));
            r587_currentGlyph.include(r249_VBar(r249_MIDDLE, r249_symbolMid * 2, 0, r249_OPERATORSTROKE));
            r249_xn$save$2Lrc5.call(r587_currentGlyph, 'perpendicular', 10178);
            r249_dependencyProfile[r587_currentGlyph.name] = r249_getDependencyProfile(r587_currentGlyph);
            return r587_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.54', r249_xn$donothing$2Lrc0b));
    }());
    (function () {
        var r593_lessSlantness = 1 / 4 * (r249_operTop - r249_operBot) / (r249_RIGHTSB - r249_SB);
        var r593_dH = r593_lessSlantness * (r249_RIGHTSB - r249_SB);
        var r593_lessEqDist = Math.max(r249_adviceBlackness(4), r249_XH * 0.1);
        var r593_LessShapeA = function _r593_t0(r594_top, r594_bot, r594_l, r594_r, r594_s) {
            var r594_exp = Math.sqrt(1 + (r594_top - r594_bot) / (2 * (r594_r - r594_l)) * (r594_top - r594_bot) / (2 * (r594_r - r594_l)));
            return r249_dispiro(r249_widths.center(r594_s), r249_flat(r594_r, r594_top), r249_curl(r594_l, r1_mix(r594_top, r594_bot, 0.5), r249_widths.heading(r594_s / 2 * r594_exp, r594_s / 2 * r594_exp, r249_LEFTWARD)));
        };
        var r593_LessShapeB = function _r593_t1(r595_top, r595_bot, r595_l, r595_r, r595_s) {
            var r595_exp = Math.sqrt(1 + (r595_top - r595_bot) / (2 * (r595_r - r595_l)) * (r595_top - r595_bot) / (2 * (r595_r - r595_l)));
            return r249_dispiro(r249_widths.center(r595_s), r249_flat(r595_r, r595_bot), r249_curl(r595_l, r1_mix(r595_top, r595_bot, 0.5), r249_widths.heading(r595_s / 2 * r595_exp, r595_s / 2 * r595_exp, r249_LEFTWARD)));
        };
        var r593_GreaterShapeA = function _r593_t2(r596_top, r596_bot, r596_l, r596_r, r596_s) {
            var r596_exp = Math.sqrt(1 + (r596_top - r596_bot) / (2 * (r596_r - r596_l)) * (r596_top - r596_bot) / (2 * (r596_r - r596_l)));
            return r249_dispiro(r249_widths.center(r596_s), r249_flat(r596_l, r596_top), r249_curl(r596_r, r1_mix(r596_top, r596_bot, 0.5), r249_widths.heading(r596_s / 2 * r596_exp, r596_s / 2 * r596_exp, r249_RIGHTWARD)));
        };
        var r593_GreaterShapeB = function _r593_t3(r597_top, r597_bot, r597_l, r597_r, r597_s) {
            var r597_exp = Math.sqrt(1 + (r597_top - r597_bot) / (2 * (r597_r - r597_l)) * (r597_top - r597_bot) / (2 * (r597_r - r597_l)));
            return r249_dispiro(r249_widths.center(r597_s), r249_flat(r597_l, r597_bot), r249_curl(r597_r, r1_mix(r597_top, r597_bot, 0.5), r249_widths.heading(r597_s / 2 * r597_exp, r597_s / 2 * r597_exp, r249_RIGHTWARD)));
        };
        var r593_LessShape = function _r593_t4(r598_top, r598_bot, r598_l, r598_r, r598_s) {
            return function _r598_t2() {
                var _r600_t0 = this;
                var r600_currentGlyph = _r600_t0;
                r600_currentGlyph.include(r593_LessShapeA(r598_top, r598_bot, r598_l, r598_r, r1_fallback(r598_s, r249_OPERATORSTROKE)));
                r600_currentGlyph.include(r593_LessShapeB(r598_top, r598_bot, r598_l, r598_r, r1_fallback(r598_s, r249_OPERATORSTROKE)));
                return void 0;
            };
        };
        var r593_GreaterShape = function _r593_t5(r603_top, r603_bot, r603_l, r603_r, r603_s) {
            return function _r603_t2() {
                var _r605_t0 = this;
                var r605_currentGlyph = _r605_t0;
                r605_currentGlyph.include(r593_GreaterShapeA(r603_top, r603_bot, r603_l, r603_r, r1_fallback(r603_s, r249_OPERATORSTROKE)));
                r605_currentGlyph.include(r593_GreaterShapeB(r603_top, r603_bot, r603_l, r603_r, r1_fallback(r603_s, r249_OPERATORSTROKE)));
                return void 0;
            };
        };
        var r593_approxDist = r249_equalHalfSpace * 1.75;
        var r593_symMag = (r249_operTop - r249_symbolMid) * 0.17;
        var r593_symWave = function _r593_t6(r608_height, r608_mul) {
            return r249_TildeShape(new r249_xn$NamedParameterPair$2Lrc9b('ttop', r608_height + r593_symMag * r608_mul), new r249_xn$NamedParameterPair$2Lrc9b('tbot', r608_height - r593_symMag * r608_mul), new r249_xn$NamedParameterPair$2Lrc9b('leftEnd', r249_SB), new r249_xn$NamedParameterPair$2Lrc9b('rightEnd', r249_RIGHTSB), new r249_xn$NamedParameterPair$2Lrc9b('hs', r249_OPERATORSTROKE / 2));
        };
        (function _r593_t7() {
            var _r615_t0 = this;
            var r615_currentGlyph = _r615_t0;
            if (!r615_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.55')
                r249_glyphList.pop();
            r615_currentGlyph.include(r249_markset.plus);
            r615_currentGlyph.include(r593_LessShape(r249_symbolMid + r593_dH, r249_symbolMid - r593_dH, r249_SB, r249_RIGHTSB));
            r249_xn$save$2Lrc5.call(r615_currentGlyph, 'less', '<');
            r249_dependencyProfile[r615_currentGlyph.name] = r249_getDependencyProfile(r615_currentGlyph);
            return r615_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.55', r249_xn$donothing$2Lrc0b)));
        (function _r593_t8() {
            var _r620_t0 = this;
            var r620_currentGlyph = _r620_t0;
            if (!r620_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.56')
                r249_glyphList.pop();
            r249_includeGlyphPart(r620_currentGlyph, r249_glyphs, 'less', r249_AS_BASE);
            r620_currentGlyph.include(r249_FlipAround(r249_MIDDLE, r249_symbolMid));
            r249_xn$save$2Lrc5.call(r620_currentGlyph, 'greater', '>');
            r249_dependencyProfile[r620_currentGlyph.name] = r249_getDependencyProfile(r620_currentGlyph);
            return r620_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.56', r249_xn$donothing$2Lrc0b)));
        (function () {
            var r625_trigLeft = r1_mix(r249_SB, r249_RIGHTSB, 1 / 6);
            var r625_trigRight = r249_WIDTH * 1.5 - r249_OPERATORSTROKE * 1.5 * r249_HVCONTRAST;
            var r625_dHTriangle = r593_lessSlantness * (r625_trigRight - r625_trigLeft);
            (function _r625_t0() {
                var _r627_t0 = this;
                var r627_currentGlyph = _r627_t0;
                if (!r627_currentGlyph)
                    return void 0;
                if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.57')
                    r249_glyphList.pop();
                r627_currentGlyph.include(r249_markset.plus);
                r627_currentGlyph.include(r593_LessShape(r249_symbolMid + r625_dHTriangle, r249_symbolMid - r625_dHTriangle, r625_trigLeft, r625_trigRight));
                r249_xn$save$2Lrc5.call(r627_currentGlyph, 'ligless.trig');
                r249_dependencyProfile[r627_currentGlyph.name] = r249_getDependencyProfile(r627_currentGlyph);
                return r627_currentGlyph;
            }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.57', r249_xn$donothing$2Lrc0b)));
            (function _r625_t1() {
                var _r632_t0 = this;
                var r632_currentGlyph = _r632_t0;
                if (!r632_currentGlyph)
                    return void 0;
                if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.58')
                    r249_glyphList.pop();
                r632_currentGlyph.include(r249_VBar(r249_MIDDLE, r249_symbolMid + r625_dHTriangle + r249_OPERATORSTROKE, r249_symbolMid - r625_dHTriangle - r249_OPERATORSTROKE, r249_OPERATORSTROKE));
                r249_xn$save$2Lrc5.call(r632_currentGlyph, 'ligbar.trig');
                r249_dependencyProfile[r632_currentGlyph.name] = r249_getDependencyProfile(r632_currentGlyph);
                return r632_currentGlyph;
            }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.58', r249_xn$donothing$2Lrc0b)));
            return function _r625_t2() {
                var _r636_t0 = this;
                var r636_currentGlyph = _r636_t0;
                if (!r636_currentGlyph)
                    return void 0;
                if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.59')
                    r249_glyphList.pop();
                r249_includeGlyphPart(r636_currentGlyph, r249_glyphs, 'ligless.trig', r249_AS_BASE);
                r636_currentGlyph.include(r249_FlipAround(r249_MIDDLE, r249_symbolMid));
                r249_xn$save$2Lrc5.call(r636_currentGlyph, 'liggreater.trig');
                r249_dependencyProfile[r636_currentGlyph.name] = r249_getDependencyProfile(r636_currentGlyph);
                return r636_currentGlyph;
            }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.59', r249_xn$donothing$2Lrc0b));
        }());
        (function _r593_t11() {
            var _r641_t0 = this;
            var r641_currentGlyph = _r641_t0;
            if (!r641_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.60')
                r249_glyphList.pop();
            r641_currentGlyph.include(r249_markset.plus);
            r641_currentGlyph.include(r593_LessShape(r249_symbolMid + r593_dH + r593_lessEqDist, r249_symbolMid - r593_dH + r593_lessEqDist, r249_SB, r249_RIGHTSB));
            (function _r641_t2() {
                var _r645_t0 = this;
                var r645_currentGlyph = _r645_t0;
                if (!r645_currentGlyph)
                    return void 0;
                if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.61')
                    r249_glyphList.pop();
                r645_currentGlyph.include(r249_Upright());
                r645_currentGlyph.include(r249_Translate(0, -r593_lessEqDist));
                r645_currentGlyph.include(r249_Italify());
                r249_xn$save$2Lrc5.call(r645_currentGlyph, 'less.narrow');
                r249_dependencyProfile[r645_currentGlyph.name] = r249_getDependencyProfile(r645_currentGlyph);
                return r645_currentGlyph;
            }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.61', function _r641_t3() {
                var _r650_t0 = this;
                _r650_t0.include(r641_currentGlyph, true);
                return _r650_t0.advanceWidth = r641_currentGlyph.advanceWidth;
            })));
            (function _r641_t4() {
                var _r652_t0 = this;
                var r652_currentGlyph = _r652_t0;
                if (!r652_currentGlyph)
                    return void 0;
                if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.62')
                    r249_glyphList.pop();
                r652_currentGlyph.include(r249_HBar(r249_SB, r249_RIGHTSB, r249_symbolMid - r593_dH - r593_lessEqDist, r249_OPERATORSTROKE));
                r249_xn$save$2Lrc5.call(r652_currentGlyph, 'lesseq', 8804);
                r249_dependencyProfile[r652_currentGlyph.name] = r249_getDependencyProfile(r652_currentGlyph);
                return r652_currentGlyph;
            }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.62', function _r641_t5() {
                var _r655_t0 = this;
                _r655_t0.include(r641_currentGlyph, true);
                return _r655_t0.advanceWidth = r641_currentGlyph.advanceWidth;
            })));
            (function _r641_t6() {
                var _r657_t0 = this;
                var r657_currentGlyph = _r657_t0;
                if (!r657_currentGlyph)
                    return void 0;
                if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.63')
                    r249_glyphList.pop();
                r657_currentGlyph.include(r593_symWave(r249_symbolMid - r593_dH - r593_lessEqDist, 1));
                r249_xn$save$2Lrc5.call(r657_currentGlyph, 'lesssym', 8818);
                r249_dependencyProfile[r657_currentGlyph.name] = r249_getDependencyProfile(r657_currentGlyph);
                return r657_currentGlyph;
            }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.63', function _r641_t7() {
                var _r660_t0 = this;
                _r660_t0.include(r641_currentGlyph, true);
                return _r660_t0.advanceWidth = r641_currentGlyph.advanceWidth;
            })));
            (function _r641_t8() {
                var _r662_t0 = this;
                var r662_currentGlyph = _r662_t0;
                if (!r662_currentGlyph)
                    return void 0;
                if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.64')
                    r249_glyphList.pop();
                r662_currentGlyph.include(r593_LessShapeB(r249_symbolMid + r593_dH - r593_lessEqDist, r249_symbolMid - r593_dH - r593_lessEqDist, r249_SB, r249_RIGHTSB, r249_OPERATORSTROKE));
                r249_xn$save$2Lrc5.call(r662_currentGlyph, 'lesseqslant', 10877);
                r249_dependencyProfile[r662_currentGlyph.name] = r249_getDependencyProfile(r662_currentGlyph);
                return r662_currentGlyph;
            }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.64', function _r641_t9() {
                var _r665_t0 = this;
                _r665_t0.include(r641_currentGlyph, true);
                return _r665_t0.advanceWidth = r641_currentGlyph.advanceWidth;
            })));
            r249_dependencyProfile[r641_currentGlyph.name] = r249_getDependencyProfile(r641_currentGlyph);
            return r641_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.60', r249_xn$donothing$2Lrc0b)));
        (function _r593_t12() {
            var _r667_t0 = this;
            var r667_currentGlyph = _r667_t0;
            if (!r667_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.65')
                r249_glyphList.pop();
            r667_currentGlyph.include(r249_markset.plus);
            r667_currentGlyph.include(r593_GreaterShape(r249_symbolMid + r593_dH + r593_lessEqDist, r249_symbolMid - r593_dH + r593_lessEqDist, r249_SB, r249_RIGHTSB));
            (function _r667_t2() {
                var _r671_t0 = this;
                var r671_currentGlyph = _r671_t0;
                if (!r671_currentGlyph)
                    return void 0;
                if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.66')
                    r249_glyphList.pop();
                r671_currentGlyph.include(r249_Upright());
                r671_currentGlyph.include(r249_Translate(0, -r593_lessEqDist));
                r671_currentGlyph.include(r249_Italify());
                r249_xn$save$2Lrc5.call(r671_currentGlyph, 'greater.narrow');
                r249_dependencyProfile[r671_currentGlyph.name] = r249_getDependencyProfile(r671_currentGlyph);
                return r671_currentGlyph;
            }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.66', function _r667_t3() {
                var _r676_t0 = this;
                _r676_t0.include(r667_currentGlyph, true);
                return _r676_t0.advanceWidth = r667_currentGlyph.advanceWidth;
            })));
            (function _r667_t4() {
                var _r678_t0 = this;
                var r678_currentGlyph = _r678_t0;
                if (!r678_currentGlyph)
                    return void 0;
                if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.67')
                    r249_glyphList.pop();
                r678_currentGlyph.include(r249_HBar(r249_SB, r249_RIGHTSB, r249_symbolMid - r593_dH - r593_lessEqDist, r249_OPERATORSTROKE));
                r249_xn$save$2Lrc5.call(r678_currentGlyph, 'greatereq', 8805);
                r249_dependencyProfile[r678_currentGlyph.name] = r249_getDependencyProfile(r678_currentGlyph);
                return r678_currentGlyph;
            }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.67', function _r667_t5() {
                var _r681_t0 = this;
                _r681_t0.include(r667_currentGlyph, true);
                return _r681_t0.advanceWidth = r667_currentGlyph.advanceWidth;
            })));
            (function _r667_t6() {
                var _r683_t0 = this;
                var r683_currentGlyph = _r683_t0;
                if (!r683_currentGlyph)
                    return void 0;
                if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.68')
                    r249_glyphList.pop();
                r683_currentGlyph.include(r593_symWave(r249_symbolMid - r593_dH - r593_lessEqDist, 1));
                r249_xn$save$2Lrc5.call(r683_currentGlyph, 'greatersym', 8819);
                r249_dependencyProfile[r683_currentGlyph.name] = r249_getDependencyProfile(r683_currentGlyph);
                return r683_currentGlyph;
            }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.68', function _r667_t7() {
                var _r686_t0 = this;
                _r686_t0.include(r667_currentGlyph, true);
                return _r686_t0.advanceWidth = r667_currentGlyph.advanceWidth;
            })));
            (function _r667_t8() {
                var _r688_t0 = this;
                var r688_currentGlyph = _r688_t0;
                if (!r688_currentGlyph)
                    return void 0;
                if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.69')
                    r249_glyphList.pop();
                r688_currentGlyph.include(r593_GreaterShapeB(r249_symbolMid + r593_dH - r593_lessEqDist, r249_symbolMid - r593_dH - r593_lessEqDist, r249_SB, r249_RIGHTSB, r249_OPERATORSTROKE));
                r249_xn$save$2Lrc5.call(r688_currentGlyph, 'greatereqslant', 10878);
                r249_dependencyProfile[r688_currentGlyph.name] = r249_getDependencyProfile(r688_currentGlyph);
                return r688_currentGlyph;
            }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.69', function _r667_t9() {
                var _r691_t0 = this;
                _r691_t0.include(r667_currentGlyph, true);
                return _r691_t0.advanceWidth = r667_currentGlyph.advanceWidth;
            })));
            r249_dependencyProfile[r667_currentGlyph.name] = r249_getDependencyProfile(r667_currentGlyph);
            return r667_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.65', r249_xn$donothing$2Lrc0b)));
        (function _r593_t13() {
            var _r693_t0 = this;
            var r693_currentGlyph = _r693_t0;
            if (!r693_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.70')
                r249_glyphList.pop();
            var r693_l = 0.3 * r249_WIDTH;
            var r693_r = 2 * r249_WIDTH - r693_l;
            r693_currentGlyph.include(r249_markset.plus);
            (function _r693_t2() {
                var _r696_t0 = this;
                var r696_currentGlyph = _r696_t0;
                if (!r696_currentGlyph)
                    return void 0;
                if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.71')
                    r249_glyphList.pop();
                r696_currentGlyph.include(r593_LessShape(r249_symbolMid + r593_dH + r593_lessEqDist, r249_symbolMid - r593_dH + r593_lessEqDist, r693_l, r693_r));
                r249_xn$save$2Lrc5.call(r696_currentGlyph, 'less.lig2');
                r249_dependencyProfile[r696_currentGlyph.name] = r249_getDependencyProfile(r696_currentGlyph);
                return r696_currentGlyph;
            }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.71', function _r693_t3() {
                var _r699_t0 = this;
                _r699_t0.include(r693_currentGlyph, true);
                return _r699_t0.advanceWidth = r693_currentGlyph.advanceWidth;
            })));
            (function _r693_t4() {
                var _r701_t0 = this;
                var r701_currentGlyph = _r701_t0;
                if (!r701_currentGlyph)
                    return void 0;
                if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.72')
                    r249_glyphList.pop();
                r701_currentGlyph.include(r249_HBar(r693_l - r249_WIDTH, r693_r - r249_WIDTH, r249_symbolMid - r593_dH - r593_lessEqDist, r249_OPERATORSTROKE));
                r249_xn$save$2Lrc5.call(r701_currentGlyph, 'eq.at-ltgteq.lig2');
                r249_dependencyProfile[r701_currentGlyph.name] = r249_getDependencyProfile(r701_currentGlyph);
                return r701_currentGlyph;
            }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.72', function _r693_t5() {
                var _r704_t0 = this;
                _r704_t0.include(r693_currentGlyph, true);
                return _r704_t0.advanceWidth = r693_currentGlyph.advanceWidth;
            })));
            (function _r693_t6() {
                var _r706_t0 = this;
                var r706_currentGlyph = _r706_t0;
                if (!r706_currentGlyph)
                    return void 0;
                if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.73')
                    r249_glyphList.pop();
                r706_currentGlyph.include(r593_GreaterShape(r249_symbolMid + r593_dH + r593_lessEqDist, r249_symbolMid - r593_dH + r593_lessEqDist, r693_l, r693_r));
                r249_xn$save$2Lrc5.call(r706_currentGlyph, 'greater.lig2');
                r249_dependencyProfile[r706_currentGlyph.name] = r249_getDependencyProfile(r706_currentGlyph);
                return r706_currentGlyph;
            }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.73', function _r693_t7() {
                var _r709_t0 = this;
                _r709_t0.include(r693_currentGlyph, true);
                return _r709_t0.advanceWidth = r693_currentGlyph.advanceWidth;
            })));
            r249_dependencyProfile[r693_currentGlyph.name] = r249_getDependencyProfile(r693_currentGlyph);
            return r693_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.70', r249_xn$donothing$2Lrc0b)));
        (function () {
            var r711_lesslessSW = r249_adviceBlackness(4);
            var r711_lesslessSWO = Math.max(r711_lesslessSW, r593_lessEqDist);
            var r711_llggHeight = r593_dH * 2 + r593_lessEqDist * 2;
            (function _r711_t0() {
                var _r713_t0 = this;
                var r713_currentGlyph = _r713_t0;
                if (!r713_currentGlyph)
                    return void 0;
                if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.74')
                    r249_glyphList.pop();
                r713_currentGlyph.include(r249_markset.plus);
                (function _r713_t2() {
                    var _r716_t0 = this;
                    var r716_currentGlyph = _r716_t0;
                    if (!r716_currentGlyph)
                        return void 0;
                    if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.75')
                        r249_glyphList.pop();
                    r716_currentGlyph.include(r593_GreaterShape(r249_symbolMid + r593_dH + r593_lessEqDist, r249_symbolMid - r593_dH + r593_lessEqDist * 1.75, r249_SB, r249_RIGHTSB, r711_lesslessSW));
                    r716_currentGlyph.include(r249_HBar(r249_SB, r249_RIGHTSB, r249_symbolMid - r593_dH + r593_lessEqDist * 2 / 3, r711_lesslessSW));
                    r716_currentGlyph.include(r249_HBar(r249_SB, r249_RIGHTSB, r249_symbolMid - r593_dH - r593_lessEqDist, r711_lesslessSW));
                    r249_xn$save$2Lrc5.call(r716_currentGlyph, 'greatereqeq', 8807);
                    r716_currentGlyph.include(r249_dispiro(r249_widths.center(r711_lesslessSW), r249_flat(r249_MIDDLE + r593_lessEqDist, r249_symbolMid - r593_dH + r593_lessEqDist * 2 / 3 + r711_lesslessSWO, r249_heading(r249_DOWNWARD)), r249_flat(r249_MIDDLE - r593_lessEqDist, r249_symbolMid - r593_dH - r593_lessEqDist - r711_lesslessSWO, r249_heading(r249_DOWNWARD))));
                    r249_xn$save$2Lrc5.call(r716_currentGlyph, void 0, 8809);
                    r249_dependencyProfile[r716_currentGlyph.name] = r249_getDependencyProfile(r716_currentGlyph);
                    return r716_currentGlyph;
                }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.75', function _r713_t3() {
                    var _r723_t0 = this;
                    _r723_t0.include(r713_currentGlyph, true);
                    return _r723_t0.advanceWidth = r713_currentGlyph.advanceWidth;
                })));
                (function _r713_t4() {
                    var _r725_t0 = this;
                    var r725_currentGlyph = _r725_t0;
                    if (!r725_currentGlyph)
                        return void 0;
                    if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.76')
                        r249_glyphList.pop();
                    r725_currentGlyph.include(r593_GreaterShape(r249_symbolMid + r711_llggHeight / 2, r249_symbolMid - r711_llggHeight / 6 + r593_lessEqDist, r249_SB, r249_RIGHTSB, r711_lesslessSW));
                    r725_currentGlyph.include(r593_LessShape(r249_symbolMid + r711_llggHeight / 6 - r593_lessEqDist, r249_symbolMid - r711_llggHeight / 2, r249_SB, r249_RIGHTSB, r711_lesslessSW));
                    r249_xn$save$2Lrc5.call(r725_currentGlyph, 'greaterless', 8823);
                    r249_dependencyProfile[r725_currentGlyph.name] = r249_getDependencyProfile(r725_currentGlyph);
                    return r725_currentGlyph;
                }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.76', function _r713_t5() {
                    var _r729_t0 = this;
                    _r729_t0.include(r713_currentGlyph, true);
                    return _r729_t0.advanceWidth = r713_currentGlyph.advanceWidth;
                })));
                r249_dependencyProfile[r713_currentGlyph.name] = r249_getDependencyProfile(r713_currentGlyph);
                return r713_currentGlyph;
            }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.74', r249_xn$donothing$2Lrc0b)));
            (function _r711_t1() {
                var _r731_t0 = this;
                var r731_currentGlyph = _r731_t0;
                if (!r731_currentGlyph)
                    return void 0;
                if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.77')
                    r249_glyphList.pop();
                r731_currentGlyph.include(r249_markset.plus);
                (function _r731_t2() {
                    var _r734_t0 = this;
                    var r734_currentGlyph = _r734_t0;
                    if (!r734_currentGlyph)
                        return void 0;
                    if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.78')
                        r249_glyphList.pop();
                    r734_currentGlyph.include(r593_LessShape(r249_symbolMid + r593_dH + r593_lessEqDist, r249_symbolMid - r593_dH + r593_lessEqDist * 1.75, r249_SB, r249_RIGHTSB, r711_lesslessSW));
                    r734_currentGlyph.include(r249_HBar(r249_SB, r249_RIGHTSB, r249_symbolMid - r593_dH + r593_lessEqDist * 2 / 3, r711_lesslessSW));
                    r734_currentGlyph.include(r249_HBar(r249_SB, r249_RIGHTSB, r249_symbolMid - r593_dH - r593_lessEqDist, r711_lesslessSW));
                    r249_xn$save$2Lrc5.call(r734_currentGlyph, 'lesseqeq', 8806);
                    r734_currentGlyph.include(r249_dispiro(r249_widths.center(r711_lesslessSW), r249_flat(r249_MIDDLE + r593_lessEqDist, r249_symbolMid - r593_dH + r593_lessEqDist * 2 / 3 + r711_lesslessSWO, r249_heading(r249_DOWNWARD)), r249_flat(r249_MIDDLE - r593_lessEqDist, r249_symbolMid - r593_dH - r593_lessEqDist - r711_lesslessSWO, r249_heading(r249_DOWNWARD))));
                    r249_xn$save$2Lrc5.call(r734_currentGlyph, void 0, 8808);
                    r249_dependencyProfile[r734_currentGlyph.name] = r249_getDependencyProfile(r734_currentGlyph);
                    return r734_currentGlyph;
                }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.78', function _r731_t3() {
                    var _r741_t0 = this;
                    _r741_t0.include(r731_currentGlyph, true);
                    return _r741_t0.advanceWidth = r731_currentGlyph.advanceWidth;
                })));
                (function _r731_t4() {
                    var _r743_t0 = this;
                    var r743_currentGlyph = _r743_t0;
                    if (!r743_currentGlyph)
                        return void 0;
                    if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.79')
                        r249_glyphList.pop();
                    r743_currentGlyph.include(r593_LessShape(r249_symbolMid + r711_llggHeight / 2, r249_symbolMid - r711_llggHeight / 6 + r593_lessEqDist, r249_SB, r249_RIGHTSB, r711_lesslessSW));
                    r743_currentGlyph.include(r593_GreaterShape(r249_symbolMid + r711_llggHeight / 6 - r593_lessEqDist, r249_symbolMid - r711_llggHeight / 2, r249_SB, r249_RIGHTSB, r711_lesslessSW));
                    r249_xn$save$2Lrc5.call(r743_currentGlyph, 'lessgreater', 8822);
                    r249_dependencyProfile[r743_currentGlyph.name] = r249_getDependencyProfile(r743_currentGlyph);
                    return r743_currentGlyph;
                }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.79', function _r731_t5() {
                    var _r747_t0 = this;
                    _r747_t0.include(r731_currentGlyph, true);
                    return _r747_t0.advanceWidth = r731_currentGlyph.advanceWidth;
                })));
                r249_dependencyProfile[r731_currentGlyph.name] = r249_getDependencyProfile(r731_currentGlyph);
                return r731_currentGlyph;
            }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.77', r249_xn$donothing$2Lrc0b)));
            (function _r711_t2() {
                var _r749_t0 = this;
                var r749_currentGlyph = _r749_t0;
                if (!r749_currentGlyph)
                    return void 0;
                if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.80')
                    r249_glyphList.pop();
                r749_currentGlyph.include(r249_markset.plus);
                r749_currentGlyph.include(r593_LessShape(r249_symbolMid + r593_dH, r249_symbolMid - r593_dH, r249_SB - r593_lessEqDist / 2, r249_RIGHTSB - r593_lessEqDist * 2, r711_lesslessSW));
                r749_currentGlyph.include(r593_LessShape(r249_symbolMid + r593_dH, r249_symbolMid - r593_dH, r249_SB + r593_lessEqDist * 2, r249_RIGHTSB + r593_lessEqDist / 2, r711_lesslessSW));
                r249_xn$save$2Lrc5.call(r749_currentGlyph, 'lessless', 8810);
                r249_dependencyProfile[r749_currentGlyph.name] = r249_getDependencyProfile(r749_currentGlyph);
                return r749_currentGlyph;
            }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.80', r249_xn$donothing$2Lrc0b)));
            return function _r711_t3() {
                var _r755_t0 = this;
                var r755_currentGlyph = _r755_t0;
                if (!r755_currentGlyph)
                    return void 0;
                if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.81')
                    r249_glyphList.pop();
                r755_currentGlyph.include(r249_markset.plus);
                r755_currentGlyph.include(r593_GreaterShape(r249_symbolMid + r593_dH, r249_symbolMid - r593_dH, r249_SB - r593_lessEqDist / 2, r249_RIGHTSB - r593_lessEqDist * 2, r711_lesslessSW));
                r755_currentGlyph.include(r593_GreaterShape(r249_symbolMid + r593_dH, r249_symbolMid - r593_dH, r249_SB + r593_lessEqDist * 2, r249_RIGHTSB + r593_lessEqDist / 2, r711_lesslessSW));
                r249_xn$save$2Lrc5.call(r755_currentGlyph, 'greatergreater', 8811);
                r249_dependencyProfile[r755_currentGlyph.name] = r249_getDependencyProfile(r755_currentGlyph);
                return r755_currentGlyph;
            }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.81', r249_xn$donothing$2Lrc0b));
        }());
        (function _r593_t16() {
            var _r761_t0 = this;
            var r761_currentGlyph = _r761_t0;
            if (!r761_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.82')
                r249_glyphList.pop();
            r761_currentGlyph.include(r249_markset.plus);
            r761_currentGlyph.include(r593_symWave(r249_symbolMid, 1));
            r249_xn$save$2Lrc5.call(r761_currentGlyph, 'sym', 8764);
            r249_dependencyProfile[r761_currentGlyph.name] = r249_getDependencyProfile(r761_currentGlyph);
            return r761_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.82', r249_xn$donothing$2Lrc0b)));
        (function _r593_t17() {
            var _r766_t0 = this;
            var r766_currentGlyph = _r766_t0;
            if (!r766_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.83')
                r249_glyphList.pop();
            r766_currentGlyph.include(r249_markset.plus);
            r766_currentGlyph.include(r593_symWave(r249_symbolMid, -1));
            r249_xn$save$2Lrc5.call(r766_currentGlyph, 'flipsym', 8765);
            r249_dependencyProfile[r766_currentGlyph.name] = r249_getDependencyProfile(r766_currentGlyph);
            return r766_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.83', r249_xn$donothing$2Lrc0b)));
        (function _r593_t18() {
            var _r771_t0 = this;
            var r771_currentGlyph = _r771_t0;
            if (!r771_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.84')
                r249_glyphList.pop();
            r771_currentGlyph.include(r249_markset.plus);
            r771_currentGlyph.include(r249_HBar(r249_SB, r249_RIGHTSB, r249_symbolMid + r249_equalHalfSpace * 1.5, r249_OPERATORSTROKE));
            r771_currentGlyph.include(r249_HBar(r249_SB, r249_RIGHTSB, r249_symbolMid, r249_OPERATORSTROKE));
            r771_currentGlyph.include(r249_HBar(r249_SB, r249_RIGHTSB, r249_symbolMid - r249_equalHalfSpace * 1.5, r249_OPERATORSTROKE));
            r249_xn$save$2Lrc5.call(r771_currentGlyph, 'ident', 8801);
            r249_dependencyProfile[r771_currentGlyph.name] = r249_getDependencyProfile(r771_currentGlyph);
            return r771_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.84', r249_xn$donothing$2Lrc0b)));
        (function _r593_t19() {
            var _r778_t0 = this;
            var r778_currentGlyph = _r778_t0;
            if (!r778_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.85')
                r249_glyphList.pop();
            r778_currentGlyph.include(r249_markset.plus);
            r778_currentGlyph.include(r249_HBar(r249_SB, r249_RIGHTSB, r249_symbolMid + r249_equalHalfSpace * 2.25, r249_OPERATORSTROKE));
            r778_currentGlyph.include(r249_HBar(r249_SB, r249_RIGHTSB, r249_symbolMid + r249_equalHalfSpace * 0.75, r249_OPERATORSTROKE));
            r778_currentGlyph.include(r249_HBar(r249_SB, r249_RIGHTSB, r249_symbolMid - r249_equalHalfSpace * 0.75, r249_OPERATORSTROKE));
            r778_currentGlyph.include(r249_HBar(r249_SB, r249_RIGHTSB, r249_symbolMid - r249_equalHalfSpace * 2.25, r249_OPERATORSTROKE));
            r249_xn$save$2Lrc5.call(r778_currentGlyph, 'iiiident', 8803);
            r249_dependencyProfile[r778_currentGlyph.name] = r249_getDependencyProfile(r778_currentGlyph);
            return r778_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.85', r249_xn$donothing$2Lrc0b)));
        r249_vdual('approx', 8776, 'sym', r593_approxDist);
        (function _r593_t20() {
            var _r786_t0 = this;
            var r786_currentGlyph = _r786_t0;
            if (!r786_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.86')
                r249_glyphList.pop();
            r786_currentGlyph.include(r249_markset.plus);
            r786_currentGlyph.include(r593_symWave(r249_symbolMid + r593_approxDist, 1));
            r786_currentGlyph.include(r593_symWave(r249_symbolMid, 1));
            (function _r786_t2() {
                var _r791_t0 = this;
                var r791_currentGlyph = _r791_t0;
                if (!r791_currentGlyph)
                    return void 0;
                if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.87')
                    r249_glyphList.pop();
                r791_currentGlyph.include(r593_symWave(r249_symbolMid - r593_approxDist, 1));
                r249_xn$save$2Lrc5.call(r791_currentGlyph, 'aapprox', 8779);
                r249_dependencyProfile[r791_currentGlyph.name] = r249_getDependencyProfile(r791_currentGlyph);
                return r791_currentGlyph;
            }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.87', function _r786_t3() {
                var _r794_t0 = this;
                _r794_t0.include(r786_currentGlyph, true);
                return _r794_t0.advanceWidth = r786_currentGlyph.advanceWidth;
            })));
            (function _r786_t4() {
                var _r796_t0 = this;
                var r796_currentGlyph = _r796_t0;
                if (!r796_currentGlyph)
                    return void 0;
                if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.88')
                    r249_glyphList.pop();
                r796_currentGlyph.include(r249_HBar(r249_SB, r249_RIGHTSB, r249_symbolMid - r593_approxDist, r249_OPERATORSTROKE));
                r249_xn$save$2Lrc5.call(r796_currentGlyph, 'approxBar', 8778);
                r249_dependencyProfile[r796_currentGlyph.name] = r249_getDependencyProfile(r796_currentGlyph);
                return r796_currentGlyph;
            }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.88', function _r786_t5() {
                var _r799_t0 = this;
                _r799_t0.include(r786_currentGlyph, true);
                return _r799_t0.advanceWidth = r786_currentGlyph.advanceWidth;
            })));
            r249_dependencyProfile[r786_currentGlyph.name] = r249_getDependencyProfile(r786_currentGlyph);
            return r786_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.86', r249_xn$donothing$2Lrc0b)));
        (function _r593_t21() {
            var _r801_t0 = this;
            var r801_currentGlyph = _r801_t0;
            if (!r801_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.89')
                r249_glyphList.pop();
            r249_includeGlyphPart(r801_currentGlyph, r249_glyphs, 'sym', r249_AS_BASE);
            r801_currentGlyph.include(r249_Upright());
            r801_currentGlyph.include(r249_Translate(0, r593_approxDist / 2));
            r801_currentGlyph.include(r249_Italify());
            r801_currentGlyph.include(r249_HBar(r249_SB, r249_RIGHTSB, r249_symbolMid - r593_approxDist / 2, r249_OPERATORSTROKE));
            r249_xn$save$2Lrc5.call(r801_currentGlyph, 'symBar', 8771);
            r249_dependencyProfile[r801_currentGlyph.name] = r249_getDependencyProfile(r801_currentGlyph);
            return r801_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.89', r249_xn$donothing$2Lrc0b)));
        (function _r593_t22() {
            var _r809_t0 = this;
            var r809_currentGlyph = _r809_t0;
            if (!r809_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.90')
                r249_glyphList.pop();
            var r809_sympShift = r593_approxDist + r249_equalHalfSpace * 1.5;
            r249_includeGlyphPart(r809_currentGlyph, r249_glyphs, 'sym', r249_AS_BASE);
            r809_currentGlyph.include(r249_Upright());
            r809_currentGlyph.include(r249_Translate(0, r809_sympShift / 2));
            r809_currentGlyph.include(r249_Italify());
            r809_currentGlyph.include(r249_HBar(r249_SB, r249_RIGHTSB, r249_symbolMid - r809_sympShift / 2 + r249_equalHalfSpace * 1.5, r249_OPERATORSTROKE));
            r809_currentGlyph.include(r249_HBar(r249_SB, r249_RIGHTSB, r249_symbolMid - r809_sympShift / 2, r249_OPERATORSTROKE));
            r249_xn$save$2Lrc5.call(r809_currentGlyph, 'symBarBar', 8773);
            r249_dependencyProfile[r809_currentGlyph.name] = r249_getDependencyProfile(r809_currentGlyph);
            return r809_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.90', r249_xn$donothing$2Lrc0b)));
        (function _r593_t23() {
            var _r818_t0 = this;
            var r818_currentGlyph = _r818_t0;
            if (!r818_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.91')
                r249_glyphList.pop();
            var r818_sympShift = r593_approxDist + r249_equalHalfSpace * 1.5;
            r249_includeGlyphPart(r818_currentGlyph, r249_glyphs, 'flipsym', r249_AS_BASE);
            r818_currentGlyph.include(r249_Upright());
            r818_currentGlyph.include(r249_Translate(0, r818_sympShift / 2));
            r818_currentGlyph.include(r249_Italify());
            r818_currentGlyph.include(r249_HBar(r249_SB, r249_RIGHTSB, r249_symbolMid - r818_sympShift / 2 + r249_equalHalfSpace * 1.5, r249_OPERATORSTROKE));
            r818_currentGlyph.include(r249_HBar(r249_SB, r249_RIGHTSB, r249_symbolMid - r818_sympShift / 2, r249_OPERATORSTROKE));
            r249_xn$save$2Lrc5.call(r818_currentGlyph, 'flipsymBarBar', 8780);
            r249_dependencyProfile[r818_currentGlyph.name] = r249_getDependencyProfile(r818_currentGlyph);
            return r818_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.91', r249_xn$donothing$2Lrc0b)));
        var r593_SubsetShape = function _r593_t24(r826_top, r826_bot, r826_sw) {
            return r249_dispiro(r249_widths.lhs(r1_fallback(r826_sw, r249_OPERATORSTROKE)), r249_flat(r249_RIGHTSB, r826_top, r249_heading(r249_LEFTWARD)), r249_curl(r249_SB + (r826_top - r826_bot) / 2, r826_top), r249_archv(), r249_g4(r249_SB, r1_mix(r826_top, r826_bot, 0.5)), r249_arcvh(), r249_flat(r249_SB + (r826_top - r826_bot) / 2, r826_bot), r249_curl(r249_RIGHTSB, r826_bot, r249_heading(r249_RIGHTWARD)));
        };
        var r593_SupsetShape = function _r593_t25(r827_top, r827_bot) {
            return function _r827_t2() {
                var _r829_t0 = this;
                var r829_currentGlyph = _r829_t0;
                r829_currentGlyph.include(r593_SubsetShape(r827_top, r827_bot));
                r829_currentGlyph.include(r249_FlipAround(r249_MIDDLE, r1_mix(r827_top, r827_bot, 0.5)));
                return void 0;
            };
        };
        (function _r593_t26() {
            var _r833_t0 = this;
            var r833_currentGlyph = _r833_t0;
            if (!r833_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.92')
                r249_glyphList.pop();
            r833_currentGlyph.include(r249_markset.plus);
            r833_currentGlyph.include(r593_SubsetShape(r249_symbolMid + r593_dH, r249_symbolMid - r593_dH));
            r249_xn$save$2Lrc5.call(r833_currentGlyph, 'subst', 8834);
            r249_dependencyProfile[r833_currentGlyph.name] = r249_getDependencyProfile(r833_currentGlyph);
            return r833_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.92', r249_xn$donothing$2Lrc0b)));
        (function _r593_t27() {
            var _r838_t0 = this;
            var r838_currentGlyph = _r838_t0;
            if (!r838_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.93')
                r249_glyphList.pop();
            r838_currentGlyph.include(r249_markset.plus);
            r838_currentGlyph.include(r593_SupsetShape(r249_symbolMid + r593_dH, r249_symbolMid - r593_dH));
            r249_xn$save$2Lrc5.call(r838_currentGlyph, 'supst', 8835);
            r249_dependencyProfile[r838_currentGlyph.name] = r249_getDependencyProfile(r838_currentGlyph);
            return r838_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.93', r249_xn$donothing$2Lrc0b)));
        (function _r593_t28() {
            var _r843_t0 = this;
            var r843_currentGlyph = _r843_t0;
            if (!r843_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.94')
                r249_glyphList.pop();
            var r843_swo = Math.max(r249_OPERATORSTROKE * 1.5, r593_lessEqDist * 1.5);
            r843_currentGlyph.include(r249_markset.plus);
            r843_currentGlyph.include(r593_SubsetShape(r249_symbolMid + r593_dH + r593_lessEqDist, r249_symbolMid - r593_dH + r593_lessEqDist));
            (function _r843_t2() {
                var _r847_t0 = this;
                var r847_currentGlyph = _r847_t0;
                if (!r847_currentGlyph)
                    return void 0;
                if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.95')
                    r249_glyphList.pop();
                r249_xn$save$2Lrc5.call(r847_currentGlyph, 'smallSubst');
                r249_dependencyProfile[r847_currentGlyph.name] = r249_getDependencyProfile(r847_currentGlyph);
                return r847_currentGlyph;
            }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.95', function _r843_t3() {
                var _r849_t0 = this;
                _r849_t0.include(r843_currentGlyph, true);
                return _r849_t0.advanceWidth = r843_currentGlyph.advanceWidth;
            })));
            (function _r843_t4() {
                var _r851_t0 = this;
                var r851_currentGlyph = _r851_t0;
                if (!r851_currentGlyph)
                    return void 0;
                if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.96')
                    r249_glyphList.pop();
                r851_currentGlyph.include(r249_HBar(r249_SB, r249_RIGHTSB, r249_symbolMid - r593_dH - r593_lessEqDist, r249_OPERATORSTROKE));
                r249_xn$save$2Lrc5.call(r851_currentGlyph, 'substBar', 8838);
                r851_currentGlyph.include(r249_dispiro(r249_widths.center(r249_OPERATORSTROKE), r249_flat(r249_MIDDLE + r593_lessEqDist, r249_symbolMid - r593_dH - r593_lessEqDist + r843_swo, r249_heading(r249_DOWNWARD)), r249_flat(r249_MIDDLE - r593_lessEqDist, r249_symbolMid - r593_dH - r593_lessEqDist - r843_swo, r249_heading(r249_DOWNWARD))));
                r249_xn$save$2Lrc5.call(r851_currentGlyph, void 0, 8842);
                r249_dependencyProfile[r851_currentGlyph.name] = r249_getDependencyProfile(r851_currentGlyph);
                return r851_currentGlyph;
            }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.96', function _r843_t5() {
                var _r856_t0 = this;
                _r856_t0.include(r843_currentGlyph, true);
                return _r856_t0.advanceWidth = r843_currentGlyph.advanceWidth;
            })));
            (function _r843_t6() {
                var _r858_t0 = this;
                var r858_currentGlyph = _r858_t0;
                if (!r858_currentGlyph)
                    return void 0;
                if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.97')
                    r249_glyphList.pop();
                r858_currentGlyph.include(r249_FlipAround(r249_MIDDLE, r249_symbolMid + r593_lessEqDist));
                r858_currentGlyph.include(r249_HBar(r249_SB, r249_RIGHTSB, r249_symbolMid - r593_dH - r593_lessEqDist, r249_OPERATORSTROKE));
                r249_xn$save$2Lrc5.call(r858_currentGlyph, 'supstBar', 8839);
                r858_currentGlyph.include(r249_dispiro(r249_widths.center(r249_OPERATORSTROKE), r249_flat(r249_MIDDLE + r593_lessEqDist, r249_symbolMid - r593_dH - r593_lessEqDist + r843_swo, r249_heading(r249_DOWNWARD)), r249_flat(r249_MIDDLE - r593_lessEqDist, r249_symbolMid - r593_dH - r593_lessEqDist - r843_swo, r249_heading(r249_DOWNWARD))));
                r249_xn$save$2Lrc5.call(r858_currentGlyph, void 0, 8843);
                r249_dependencyProfile[r858_currentGlyph.name] = r249_getDependencyProfile(r858_currentGlyph);
                return r858_currentGlyph;
            }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.97', function _r843_t7() {
                var _r864_t0 = this;
                _r864_t0.include(r843_currentGlyph, true);
                return _r864_t0.advanceWidth = r843_currentGlyph.advanceWidth;
            })));
            r249_dependencyProfile[r843_currentGlyph.name] = r249_getDependencyProfile(r843_currentGlyph);
            return r843_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.94', r249_xn$donothing$2Lrc0b)));
        (function _r593_t29() {
            var _r866_t0 = this;
            var r866_currentGlyph = _r866_t0;
            if (!r866_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.98')
                r249_glyphList.pop();
            r249_includeGlyphPart(r866_currentGlyph, r249_glyphs, 'subst', r249_AS_BASE);
            r866_currentGlyph.include(r249_HBar(r249_SB + r249_HALFSTROKE, r249_RIGHTSB, r249_symbolMid, r249_OPERATORSTROKE));
            r249_xn$save$2Lrc5.call(r866_currentGlyph, 'element', 8712);
            r249_dependencyProfile[r866_currentGlyph.name] = r249_getDependencyProfile(r866_currentGlyph);
            return r866_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.98', r249_xn$donothing$2Lrc0b)));
        r249_turned(void 0, 8715, 'element', r249_MIDDLE, r249_symbolMid);
        (function _r593_t30() {
            var _r871_t0 = this;
            var r871_currentGlyph = _r871_t0;
            if (!r871_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.99')
                r249_glyphList.pop();
            r871_currentGlyph.include(r249_markset.plus);
            var r871_sw = Math.min(r593_dH * 4 / (3 * 5), r249_OPERATORSTROKE);
            r871_currentGlyph.include(r593_SubsetShape(r249_symbolMid + r593_dH * 2 / 3, r249_symbolMid - r593_dH * 2 / 3, r871_sw));
            r871_currentGlyph.include(r249_HBar(r249_SB + r249_HALFSTROKE, r249_RIGHTSB, r249_symbolMid, r871_sw));
            r249_xn$save$2Lrc5.call(r871_currentGlyph, 'smallElement', 8714);
            r249_dependencyProfile[r871_currentGlyph.name] = r249_getDependencyProfile(r871_currentGlyph);
            return r871_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.99', r249_xn$donothing$2Lrc0b)));
        return function _r593_t31() {
            var _r877_t0 = this;
            var r877_currentGlyph = _r877_t0;
            if (!r877_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.100')
                r249_glyphList.pop();
            r877_currentGlyph.include(r249_markset.plus);
            r877_currentGlyph.include(r593_SubsetShape(r249_symbolMid + r593_dH + r593_lessEqDist, r249_symbolMid - r593_dH + r593_lessEqDist));
            r877_currentGlyph.include(r249_HBar(r249_SB + r249_HALFSTROKE, r249_RIGHTSB, r249_symbolMid + r593_lessEqDist, r249_OPERATORSTROKE));
            r249_xn$save$2Lrc5.call(r877_currentGlyph, 'elementBar', 8952);
            r249_dependencyProfile[r877_currentGlyph.name] = r249_getDependencyProfile(r877_currentGlyph);
            return r877_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.100', r249_xn$donothing$2Lrc0b));
    }());
    var r249_notGlyph = function _r249_t29(r882_unicode, r882_oldid, r882_top, r882_bot, r882_prop, r882_shift, r882_newid) {
        return r249_xn$createglyph$7Hrq(r1_fallback(r882_newid, 'not' + r882_oldid), function _r882_t2() {
            var _r884_t0 = this;
            var r884_currentGlyph = _r884_t0;
            if (r882_unicode) {
                r884_currentGlyph['assign-unicode'](r882_unicode);
                r249_unicodeGlyphs[r884_currentGlyph.unicode[r884_currentGlyph.unicode.length - 1]] = r884_currentGlyph;
            }
            r249_includeGlyphPart(r884_currentGlyph, r249_glyphs, r882_oldid);
            r884_currentGlyph.include(r249_dispiro(r249_widths.center(r249_adviceBlackness(4)), r249_flat(r1_fallback(r882_shift, 0) + r1_mix(r249_SB, r249_RIGHTSB, r1_fallback(r882_prop, 0.25)), r1_fallback(r882_bot, r249_operBot)), r249_curl(r1_fallback(r882_shift, 0) + r1_mix(r249_RIGHTSB, r249_SB, r1_fallback(r882_prop, 0.25)), r1_fallback(r882_top, r249_operTop))));
            return void 0;
        });
    };
    r249_notGlyph.right = function _r249_t30(r888_unicode, r888_oldid, r888_top, r888_bot, r888_prop, r888_shift) {
        return r249_notGlyph(r888_unicode, r888_oldid, r888_top, r888_bot, r888_prop, -r249_OPERATORSTROKE * 0.5);
    };
    r249_notGlyph.left = function _r249_t31(r889_unicode, r889_oldid, r889_top, r889_bot, r889_prop, r889_shift) {
        return r249_notGlyph(r889_unicode, r889_oldid, r889_top, r889_bot, r889_prop, r249_OPERATORSTROKE * 0.5);
    };
    (function () {
        r249_notGlyph(8800, 'equal');
        r249_notGlyph(8802, 'ident');
        r249_notGlyph(8876, 'vdash');
        r249_notGlyph(8877, 'tautology');
        r249_notGlyph.left(8814, 'less');
        r249_notGlyph.right(8815, 'greater');
        r249_notGlyph(8769, 'sym', r1_mix(r249_symbolMid, r249_operTop, 0.75), r1_mix(r249_symbolMid, r249_operBot, 0.75));
        r249_notGlyph(8772, 'symBar', r1_mix(r249_symbolMid, r249_operTop, 0.75), r1_mix(r249_symbolMid, r249_operBot, 0.75));
        r249_notGlyph(8775, 'symBarBar');
        r249_notGlyph(8777, 'approx', r1_mix(r249_symbolMid, r249_operTop, 0.75), r1_mix(r249_symbolMid, r249_operBot, 0.75));
        r249_notGlyph.left(8836, 'subst');
        r249_notGlyph.right(8837, 'supst');
        r249_notGlyph.left(8840, 'substBar');
        r249_notGlyph.right(8841, 'supstBar');
        r249_notGlyph.left(8713, 'element');
        r249_notGlyph.right(8716, 'turnelement');
        r249_notGlyph.left(8816, 'lesseq');
        r249_notGlyph.right(8817, 'greatereq');
        r249_notGlyph.left(8820, 'lesssym');
        r249_notGlyph.right(8821, 'greatersym');
        r249_notGlyph(8824, 'lessgreater');
        r249_notGlyph(8825, 'greaterless');
        return r249_notGlyph.right(8708, 'exists', r249_CAP - r249_DESCENDER / 2, r249_DESCENDER / 2, 0.4);
    }());
    (function () {
        r249_notGlyph(null, 'equal.fc', void 0, void 0, void 0, r249_WIDTH * 0.5, 'equal.fc.neg');
        r249_notGlyph(null, 'equal.fc', void 0, void 0, void 0, r249_WIDTH * 1, 'equal.fc.neg3');
        return r249_notGlyph(null, 'equal.fc', void 0, void 0, void 0, r249_WIDTH * 1.5, 'equal.fc.neg4');
    }());
    (function () {
        var r895_largeOperTop = r1_mix(r249_symbolMid, r249_operTop, 1.25);
        var r895_largeOperBot = r1_mix(r249_symbolMid, r249_operBot, 1.25);
        (function _r895_t0() {
            var _r897_t0 = this;
            var r897_currentGlyph = _r897_t0;
            if (!r897_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.101')
                r249_glyphList.pop();
            var r897_df = r249_DivFrame(r249_para.diversityM);
            r897_currentGlyph['set-width'](r897_df.width);
            r897_currentGlyph.include(r249_SigmaShape(r895_largeOperTop, r895_largeOperBot, r249_OPERATORSTROKE, r249_para.diversityM));
            r249_xn$save$2Lrc5.call(r897_currentGlyph, 'sum', 8721);
            r249_dependencyProfile[r897_currentGlyph.name] = r249_getDependencyProfile(r897_currentGlyph);
            return r897_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.101', r249_xn$donothing$2Lrc0b)));
        (function _r895_t1() {
            var _r902_t0 = this;
            var r902_currentGlyph = _r902_t0;
            if (!r902_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.102')
                r249_glyphList.pop();
            var r902_df = r249_DivFrame(r249_para.diversityM);
            r902_currentGlyph['set-width'](r902_df.width);
            r902_currentGlyph.include(r249_PiShape(r895_largeOperTop, r895_largeOperBot, new r249_xn$NamedParameterPair$2Lrc9b('shrinkrate', 0), new r249_xn$NamedParameterPair$2Lrc9b('_fine', r249_OPERATORSTROKE), new r249_xn$NamedParameterPair$2Lrc9b('div', r249_para.diversityM)));
            r249_xn$save$2Lrc5.call(r902_currentGlyph, 'product', 8719);
            r249_dependencyProfile[r902_currentGlyph.name] = r249_getDependencyProfile(r902_currentGlyph);
            return r902_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.102', r249_xn$donothing$2Lrc0b)));
        r249_turned('coproduct', 8720, 'product', r249_MIDDLE * r249_para.diversityM, r249_symbolMid);
        (function _r895_t2() {
            var _r910_t0 = this;
            var r910_currentGlyph = _r910_t0;
            if (!r910_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.103')
                r249_glyphList.pop();
            r910_currentGlyph.include(r249_LongSShape(r895_largeOperTop, r895_largeOperBot, r249_HOOK, r249_HOOK * 0.75, r249_OPERATORSTROKE));
            r249_xn$save$2Lrc5.call(r910_currentGlyph, 'integrate', 8747);
            r249_dependencyProfile[r910_currentGlyph.name] = r249_getDependencyProfile(r910_currentGlyph);
            return r910_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.103', r249_xn$donothing$2Lrc0b)));
        r249_dual('doubleintegrate', 8748, 'integrate', 0.5 * r249_WIDTH);
        (function _r895_t3() {
            var _r914_t0 = this;
            var r914_currentGlyph = _r914_t0;
            if (!r914_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.104')
                r249_glyphList.pop();
            var r914_shape = function _r914_t2() {
                return r249_LongSShape(r895_largeOperTop, r895_largeOperBot, r249_HOOK, r249_HOOK * 0.75, r249_adviceBlackness(3.75));
            };
            r914_currentGlyph.include(r914_shape());
            r914_currentGlyph.include(r249_Translate(-r249_WIDTH / 3, 0));
            r914_currentGlyph.include(r914_shape());
            r914_currentGlyph.include(r249_Translate(-r249_WIDTH / 3, 0));
            r914_currentGlyph.include(r914_shape());
            r914_currentGlyph.include(r249_Translate(r249_WIDTH / 3, 0));
            r249_xn$save$2Lrc5.call(r914_currentGlyph, 'tripleintegrate', 8749);
            r249_dependencyProfile[r914_currentGlyph.name] = r249_getDependencyProfile(r914_currentGlyph);
            return r914_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.104', r249_xn$donothing$2Lrc0b)));
        (function _r895_t4() {
            var _r924_t0 = this;
            var r924_currentGlyph = _r924_t0;
            if (!r924_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.105')
                r249_glyphList.pop();
            r249_includeGlyphPart(r924_currentGlyph, r249_glyphs, 'integrate');
            r924_currentGlyph.include(r249_OShape(r249_symbolMid + (r249_RIGHTSB - r249_SB) / 2, r249_symbolMid - (r249_RIGHTSB - r249_SB) / 2, r249_SB, r249_RIGHTSB, r249_OPERATORSTROKE));
            r249_xn$save$2Lrc5.call(r924_currentGlyph, 'ringintegrate', 8750);
            r249_dependencyProfile[r924_currentGlyph.name] = r249_getDependencyProfile(r924_currentGlyph);
            return r924_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.105', r249_xn$donothing$2Lrc0b)));
        (function _r895_t5() {
            var _r929_t0 = this;
            var r929_currentGlyph = _r929_t0;
            if (!r929_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.106')
                r249_glyphList.pop();
            r929_currentGlyph.include(r249_dispiro(r249_widths.center(r249_OPERATORSTROKE), r249_flat(r249_SB, r895_largeOperTop), r249_curl(r249_MIDDLE, r895_largeOperBot, r249_heading(r249_DOWNWARD))));
            r929_currentGlyph.include(r249_dispiro(r249_widths.center(r249_OPERATORSTROKE), r249_flat(r249_RIGHTSB, r895_largeOperTop), r249_curl(r249_MIDDLE, r895_largeOperBot, r249_heading(r249_DOWNWARD))));
            r249_xn$save$2Lrc5.call(r929_currentGlyph, 'Vee', 8897);
            r249_dependencyProfile[r929_currentGlyph.name] = r249_getDependencyProfile(r929_currentGlyph);
            return r929_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.106', r249_xn$donothing$2Lrc0b)));
        r249_turned('Wedge', 8896, 'Vee', r249_MIDDLE, r249_symbolMid);
        (function _r895_t6() {
            var _r934_t0 = this;
            var r934_currentGlyph = _r934_t0;
            if (!r934_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.107')
                r249_glyphList.pop();
            r934_currentGlyph.include(r249_UShape(r895_largeOperTop, r895_largeOperBot, r249_OPERATORSTROKE, true));
            r249_xn$save$2Lrc5.call(r934_currentGlyph, 'Cup', 8899);
            r249_dependencyProfile[r934_currentGlyph.name] = r249_getDependencyProfile(r934_currentGlyph);
            return r934_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.107', r249_xn$donothing$2Lrc0b)));
        return r249_turned('Cap', 8898, 'Cup', r249_MIDDLE, r249_symbolMid);
    }());
    (function () {
        var r938_aplBoxSW = r249_adviceBlackness(4.5);
        var r938_aplBoxTop = r1_mix(r249_symbolMid, r249_operTop, 1.1);
        var r938_aplBoxBot = r1_mix(r249_symbolMid, r249_operBot, 1.1);
        (function _r938_t0() {
            var _r940_t0 = this;
            var r940_currentGlyph = _r940_t0;
            if (!r940_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.108')
                r249_glyphList.pop();
            var r940_l = r1_mix(0, r249_SB, 1 / 3);
            var r940_r = r1_mix(r249_WIDTH, r249_RIGHTSB, 1 / 3);
            r940_currentGlyph.include(r249_HBarTop(r940_l, r940_r, r938_aplBoxTop, r938_aplBoxSW));
            r940_currentGlyph.include(r249_HBarBottom(r940_l, r940_r, r938_aplBoxBot, r938_aplBoxSW));
            r940_currentGlyph.include(r249_VBarLeft(r940_l, r938_aplBoxTop, r938_aplBoxBot, r938_aplBoxSW));
            r940_currentGlyph.include(r249_VBarRight(r940_r, r938_aplBoxTop, r938_aplBoxBot, r938_aplBoxSW));
            r249_xn$save$2Lrc5.call(r940_currentGlyph, 'aplsquare', 9109);
            r249_dependencyProfile[r940_currentGlyph.name] = r249_getDependencyProfile(r940_currentGlyph);
            return r940_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.108', r249_xn$donothing$2Lrc0b)));
        (function _r938_t1() {
            var _r947_t0 = this;
            var r947_currentGlyph = _r947_t0;
            if (!r947_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.109')
                r249_glyphList.pop();
            var r947_l = r1_mix(0, r249_SB, 1 / 3);
            var r947_r = r1_mix(r249_WIDTH, r249_RIGHTSB, 1 / 3);
            r947_currentGlyph['start-from'](r947_l, r938_aplBoxTop);
            r947_currentGlyph['line-to'](r947_r, r938_aplBoxTop);
            r947_currentGlyph['line-to'](r947_r, r938_aplBoxBot);
            r947_currentGlyph['line-to'](r947_l, r938_aplBoxBot);
            r249_xn$save$2Lrc5.call(r947_currentGlyph, 'aplsquareShadow');
            r249_dependencyProfile[r947_currentGlyph.name] = r249_getDependencyProfile(r947_currentGlyph);
            return r947_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.109', r249_xn$donothing$2Lrc0b)));
        (function _r938_t2() {
            var _r954_t0 = this;
            var r954_currentGlyph = _r954_t0;
            if (!r954_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.110')
                r249_glyphList.pop();
            var r954_l = r1_mix(0, r249_SB, 1 / 3);
            var r954_r = r1_mix(r249_WIDTH, r249_RIGHTSB, 1 / 3);
            r954_currentGlyph.include(r249_HBarTop(r954_l, r954_r, r249_operTop, r938_aplBoxSW));
            r954_currentGlyph.include(r249_HBarBottom(r954_l, r954_r, r249_operBot, r938_aplBoxSW));
            r954_currentGlyph.include(r249_VBar(r249_MIDDLE, r249_operTop, r249_operBot, r938_aplBoxSW));
            r249_xn$save$2Lrc5.call(r954_currentGlyph, 'aplibar', 9014);
            r249_dependencyProfile[r954_currentGlyph.name] = r249_getDependencyProfile(r954_currentGlyph);
            return r954_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.110', r249_xn$donothing$2Lrc0b)));
        (function _r938_t3() {
            var _r960_t0 = this;
            var r960_currentGlyph = _r960_t0;
            if (!r960_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.111')
                r249_glyphList.pop();
            var r960_l = r249_SB;
            var r960_r = r249_RIGHTSB;
            r960_currentGlyph.include(r249_HBarTop(r960_l, r960_r, r249_operTop, r938_aplBoxSW));
            r960_currentGlyph.include(r249_HBarBottom(r960_l, r960_r, r249_operBot, r938_aplBoxSW));
            r960_currentGlyph.include(r249_VBarLeft(r960_l, r249_operTop, r249_operBot, r938_aplBoxSW));
            r960_currentGlyph.include(r249_VBarRight(r960_r, r249_operTop, r249_operBot, r938_aplBoxSW));
            r249_xn$save$2Lrc5.call(r960_currentGlyph, 'aplsquish', 9015);
            r249_dependencyProfile[r960_currentGlyph.name] = r249_getDependencyProfile(r960_currentGlyph);
            return r960_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.111', r249_xn$donothing$2Lrc0b)));
        (function _r938_t4() {
            var _r967_t0 = this;
            var r967_currentGlyph = _r967_t0;
            if (!r967_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.112')
                r249_glyphList.pop();
            r967_currentGlyph.include(r249_VBar(r249_MIDDLE, r249_parenTop, r249_parenBot, r938_aplBoxSW));
            r249_xn$save$2Lrc5.call(r967_currentGlyph, 'aplbar');
            r249_dependencyProfile[r967_currentGlyph.name] = r249_getDependencyProfile(r967_currentGlyph);
            return r967_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.112', r249_xn$donothing$2Lrc0b)));
        (function _r938_t5() {
            var _r971_t0 = this;
            var r971_currentGlyph = _r971_t0;
            if (!r971_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.113')
                r249_glyphList.pop();
            r971_currentGlyph.include(r249_dispiro(r249_widths.center(r938_aplBoxSW), r249_flat(r249_RIGHTSB, r1_mix(r249_operTop, r249_operBot, 0.5)), r249_curl(r249_SB, r1_mix(r249_operTop, r249_operBot, 0.5))));
            r249_xn$save$2Lrc5.call(r971_currentGlyph, 'aplminus');
            r249_dependencyProfile[r971_currentGlyph.name] = r249_getDependencyProfile(r971_currentGlyph);
            return r971_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.113', r249_xn$donothing$2Lrc0b)));
        (function _r938_t6() {
            var _r975_t0 = this;
            var r975_currentGlyph = _r975_t0;
            if (!r975_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.114')
                r249_glyphList.pop();
            r975_currentGlyph.include(r249_dispiro(r249_widths.center(r938_aplBoxSW), r249_flat(r249_RIGHTSB, r249_operTop), r249_curl(r249_SB, r249_operBot)));
            r249_xn$save$2Lrc5.call(r975_currentGlyph, 'aplslash');
            r249_dependencyProfile[r975_currentGlyph.name] = r249_getDependencyProfile(r975_currentGlyph);
            return r975_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.114', r249_xn$donothing$2Lrc0b)));
        (function _r938_t7() {
            var _r979_t0 = this;
            var r979_currentGlyph = _r979_t0;
            if (!r979_currentGlyph)
                return void 0;
            if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.115')
                r249_glyphList.pop();
            r979_currentGlyph.include(r249_dispiro(r249_widths.center(r938_aplBoxSW), r249_flat(r249_SB, r249_operTop), r249_curl(r249_RIGHTSB, r249_operBot)));
            r249_xn$save$2Lrc5.call(r979_currentGlyph, 'aplbackslash');
            r249_dependencyProfile[r979_currentGlyph.name] = r249_getDependencyProfile(r979_currentGlyph);
            return r979_currentGlyph;
        }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.115', r249_xn$donothing$2Lrc0b)));
        var r938_aplBoxed = function _r938_t8(r982_shape) {
            return r249_Overlay(r249_glyphs.aplsquare, function _r982_t2() {
                var _r984_t0 = this;
                var r984_currentGlyph = _r984_t0;
                r984_currentGlyph.include(r249_intersection(r249_glyphs.aplsquareShadow, r982_shape));
                r984_currentGlyph.include(r249_ScaleAround(r249_MIDDLE, r249_symbolMid, Math.min((r249_WIDTH - r938_aplBoxSW * 1.75) / r249_WIDTH, (r249_operTop - r249_operBot) / (r249_parenTop - r249_parenBot))));
                return void 0;
            });
        };
        r249_composite(r249_glyphs.space, r938_aplBoxed(r249_glyphs.equal), r249_xn$intounicode$5sIl(9016));
        r249_composite(r249_glyphs.space, r938_aplBoxed(r249_glyphs.divide), r249_xn$intounicode$5sIl(9017));
        r249_composite(r249_glyphs.space, r938_aplBoxed(r249_glyphs.hwwhitediamond), r249_xn$intounicode$5sIl(9018));
        r249_composite(r249_glyphs.space, r938_aplBoxed(r249_glyphs.hwsmallwhitecircle), r249_xn$intounicode$5sIl(9019));
        r249_composite(r249_glyphs.space, r938_aplBoxed(r249_glyphs.hwwhitecircle), r249_xn$intounicode$5sIl(9020));
        r249_composite(r249_glyphs.space, r249_Overlay(r249_glyphs.aplbar, r249_glyphs.hwwhitecircle), r249_xn$intounicode$5sIl(9021));
        r249_composite(r249_glyphs.hwwhitecircle, r249_glyphs.hwsmallwhitecircle, r249_xn$intounicode$5sIl(9022));
        r249_composite(r249_glyphs.space, r249_Overlay(r249_glyphs.aplminus, r249_glyphs.slash), r249_xn$intounicode$5sIl(9023));
        r249_composite(r249_glyphs.space, r249_Overlay(r249_glyphs.aplminus, r249_glyphs.backslash), r249_xn$intounicode$5sIl(9024));
        r249_composite(r249_glyphs.space, r938_aplBoxed(r249_glyphs.slash), r249_xn$intounicode$5sIl(9025));
        r249_composite(r249_glyphs.space, r938_aplBoxed(r249_glyphs.backslash), r249_xn$intounicode$5sIl(9026));
        r249_composite(r249_glyphs.space, r938_aplBoxed(r249_glyphs.less), r249_xn$intounicode$5sIl(9027));
        r249_composite(r249_glyphs.space, r938_aplBoxed(r249_glyphs.greater), r249_xn$intounicode$5sIl(9028));
        r249_composite(r249_glyphs.space, r249_Overlay(r249_glyphs.hwarrowleft, r249_glyphs.aplbar), r249_xn$intounicode$5sIl(9029));
        r249_composite(r249_glyphs.space, r249_Overlay(r249_glyphs.hwarrowright, r249_glyphs.aplbar), r249_xn$intounicode$5sIl(9030));
        r249_composite(r249_glyphs.space, r938_aplBoxed(r249_glyphs.hwarrowleft), r249_xn$intounicode$5sIl(9031));
        r249_composite(r249_glyphs.space, r938_aplBoxed(r249_glyphs.hwarrowright), r249_xn$intounicode$5sIl(9032));
        r249_composite(r249_glyphs.space, r249_Overlay(r249_glyphs.aplbackslash, r249_glyphs.hwwhitecircle), r249_xn$intounicode$5sIl(9033));
        r249_composite(r249_glyphs.bot, r249_glyphs.underlineBelow, r249_xn$intounicode$5sIl(9034));
        r249_composite(r249_glyphs.space, r249_Overlay(r249_glyphs.increment, r249_glyphs.aplbar), r249_xn$intounicode$5sIl(9035));
        r249_composite(r249_glyphs.space, r938_aplBoxed(r249_glyphs.vee), r249_xn$intounicode$5sIl(9036));
        r249_composite(r249_glyphs.space, r938_aplBoxed(r249_glyphs.increment), r249_xn$intounicode$5sIl(9037));
        r249_composite(r249_glyphs.space, r249_Overlay(r249_glyphs.hwarrowup, r249_glyphs.minus), r249_xn$intounicode$5sIl(9039));
        r249_composite(r249_glyphs.space, r938_aplBoxed(r249_glyphs.hwarrowup), r249_xn$intounicode$5sIl(9040));
        r249_composite(r249_glyphs.top, r249_glyphs.overlineAbove, r249_xn$intounicode$5sIl(9041));
        r249_composite(r249_glyphs.space, r249_Overlay(r249_glyphs.nabla, r249_glyphs.aplbar), r249_xn$intounicode$5sIl(9042));
        r249_composite(r249_glyphs.space, r938_aplBoxed(r249_glyphs.wedge), r249_xn$intounicode$5sIl(9043));
        r249_composite(r249_glyphs.space, r938_aplBoxed(r249_glyphs.nabla), r249_xn$intounicode$5sIl(9044));
        r249_composite(r249_glyphs.space, r249_Overlay(r249_glyphs.hwarrowdown, r249_glyphs.minus), r249_xn$intounicode$5sIl(9046));
        r249_composite(r249_glyphs.space, r938_aplBoxed(r249_glyphs.hwarrowdown), r249_xn$intounicode$5sIl(9047));
        r249_composite(r249_glyphs.singleQuote, r249_markset.plus, r249_glyphs.underlineBelow, r249_xn$intounicode$5sIl(9048));
        r249_composite(r249_glyphs.increment, r249_glyphs.underlineBelow, r249_xn$intounicode$5sIl(9049));
        r249_composite(r249_glyphs.hwwhitediamond, r249_markset.plus, r249_glyphs.underlineBelow, r249_xn$intounicode$5sIl(9050));
        r249_composite(r249_glyphs.hwsmallwhitecircle, r249_markset.plus, r249_glyphs.underlineBelow, r249_xn$intounicode$5sIl(9051));
        r249_composite(r249_glyphs.hwwhitecircle, r249_markset.plus, r249_glyphs.underlineBelow, r249_xn$intounicode$5sIl(9052));
        r249_composite(r249_glyphs.hwsmallwhitecircle, r249_ScaleAround(r249_MIDDLE, r249_symbolMid, 0.75), r249_Realign(r249_MIDDLE, r249_symbolMid, r249_MIDDLE, r249_operBot + r249_SMOOTH), r249_UShape(r249_operTop, r249_operBot, r249_adviceBlackness(5), true), r249_FlipAround(r249_MIDDLE, r249_symbolMid), r249_xn$intounicode$5sIl(9053));
        r249_composite(r249_glyphs.space, r938_aplBoxed(r249_glyphs.singleQuote), r249_xn$intounicode$5sIl(9054));
        r249_composite(r249_glyphs.space, r249_intersection(r249_glyphs.mathOOutline, r249_glyphs['opAsterisk.low']), r249_glyphs.mathO, r249_xn$intounicode$5sIl(9055));
        r249_composite(r249_glyphs.space, r938_aplBoxed(r249_composite(r249_glyphs.colon, r249_Realign(r249_MIDDLE, r249_XH / 2, r249_MIDDLE, r249_symbolMid))), r249_xn$intounicode$5sIl(9056));
        r249_composite(r249_glyphs.top, r249_glyphs.dieresisAbove, r249_xn$intounicode$5sIl(9057));
        r249_composite(r249_glyphs.nabla, r249_glyphs.dieresisAbove, r249_xn$intounicode$5sIl(9058));
        r249_composite(r249_glyphs['asterisk.low'], r249_glyphs.dieresisAbove, r249_xn$intounicode$5sIl(9059));
        r249_composite(r249_glyphs.hwsmallwhitecircle, r249_markset.plus, r249_glyphs.dieresisAbove, r249_xn$intounicode$5sIl(9060));
        r249_composite(r249_glyphs.hwwhitecircle, r249_markset.plus, r249_glyphs.dieresisAbove, r249_xn$intounicode$5sIl(9061));
        r249_composite(r249_glyphs.space, r249_Overlay(r249_glyphs.cup, r249_glyphs.aplbar), r249_xn$intounicode$5sIl(9062));
        r249_composite(r249_glyphs.space, r249_Overlay(r249_glyphs.subst, r249_glyphs.aplbar), r249_xn$intounicode$5sIl(9063));
        r249_composite(r249_glyphs['asciitilde.low'], r249_glyphs.dieresisAbove, r249_xn$intounicode$5sIl(9064));
        r249_composite(r249_glyphs['greater.narrow'], r249_glyphs.dieresisAbove, r249_xn$intounicode$5sIl(9065));
        r249_composite(r249_glyphs.minus, r249_glyphs.comma, r249_xn$intounicode$5sIl(9066));
        r249_composite(r249_glyphs.space, r249_Overlay(r249_glyphs.overlaytilde, r249_glyphs.nabla), r249_xn$intounicode$5sIl(9067));
        r249_composite(r249_glyphs.space, r249_Overlay(r249_glyphs.overlaytilde, r249_glyphs['zero.unslashed']), r249_xn$intounicode$5sIl(9068));
        r249_composite(r249_glyphs.space, r249_Overlay(r249_glyphs.overlaytilde, r249_glyphs.bar), r249_xn$intounicode$5sIl(9069));
        r249_composite(r249_Overlay(r249_glyphs.semicolon, r249_glyphs['underscore.belowBaseline']), r249_xn$intounicode$5sIl(9070));
        r249_composite(r249_glyphs.space, r938_aplBoxed(r249_glyphs.notequal), r249_xn$intounicode$5sIl(9071));
        r249_composite(r249_glyphs.space, r938_aplBoxed(r249_glyphs.question), r249_xn$intounicode$5sIl(9072));
        r249_composite(r249_glyphs.space, r249_Overlay(r249_glyphs.overlaytilde, r249_glyphs.vee), r249_xn$intounicode$5sIl(9073));
        r249_composite(r249_glyphs.space, r249_Overlay(r249_glyphs.overlaytilde, r249_glyphs.wedge), r249_xn$intounicode$5sIl(9074));
        r249_alias('apliota', 9075, 'iota');
        r249_alias('aplrho', 9076, 'rho');
        r249_alias('aplomega', 9077, 'omega');
        r249_composite(r249_glyphs.alpha, r249_glyphs.underlineBelow, r249_xn$intounicode$5sIl(9078));
        r249_composite(r249_glyphs.epsilon, r249_glyphs.underlineBelow, r249_xn$intounicode$5sIl(9079));
        r249_composite(r249_glyphs.iota, r249_glyphs.underlineBelow, r249_xn$intounicode$5sIl(9080));
        r249_composite(r249_glyphs.omega, r249_glyphs.underlineBelow, r249_xn$intounicode$5sIl(9081));
        return r249_alias('aplalpha', 9082, 'alpha');
    }());
    r249_alias('mathbullet', 8729, 'bullet');
    r249_alias('mathbar', 8739, 'bar');
    r249_notGlyph(8740, 'mathbar', r1_mix(r249_symbolMid, r249_operTop, 0.5), r1_mix(r249_symbolMid, r249_operBot, 0.5), 0.1);
    r249_dual('parallel', 8741, 'bar', r249_WIDTH * 0.35);
    r249_notGlyph(8742, 'parallel', r1_mix(r249_symbolMid, r249_operTop, 0.5), r1_mix(r249_symbolMid, r249_operBot, 0.5), 0);
    r249_alias('mathsmallcircle', 8728, 'hwsmallwhitecircle');
    r249_alias('mathstar', 8902, 'hwblackstar');
    r249_turned('amalg', 10815, 'Pi', r249_MIDDLE, r249_CAP / 2);
    return function _r249_t40() {
        var _r988_t0 = this;
        var r988_currentGlyph = _r988_t0;
        if (!r988_currentGlyph)
            return void 0;
        if (r249_glyphList[r249_glyphList.length - 1].name === '.WF.glyphs/symbol-math.ptl.116')
            r249_glyphList.pop();
        r988_currentGlyph.include(r249_dispiro(r249_widths.center(r249_OPERATORSTROKE), r249_flat(r249_SB, r1_mix(r249_parenBot, r249_parenTop, 0.45)), r249_curl(r249_MIDDLE, r249_parenBot, r249_heading(r249_DOWNWARD))));
        r988_currentGlyph.include(r249_dispiro(r249_widths.center(r249_OPERATORSTROKE), r249_flat(r249_WIDTH, r249_parenTop), r249_curl(r249_MIDDLE, r249_parenBot, r249_heading(r249_DOWNWARD))));
        r249_xn$save$2Lrc5.call(r988_currentGlyph, 'sqrt', 8730);
        r249_dependencyProfile[r988_currentGlyph.name] = r249_getDependencyProfile(r988_currentGlyph);
        return r988_currentGlyph;
    }.call(r249_xn$createglyph$7Hrq('.WF.glyphs/symbol-math.ptl.116', r249_xn$donothing$2Lrc0b));
};
