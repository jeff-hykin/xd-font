'use strict';
var r1_progLigNameMap, r1_buildLigations, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t8, _r1_t9, _r1_t10, _r1_t11, _r1_t12, _r1_t13, _r1_t14, _r1_t15, _r1_t16, _r1_t17, _r1_t18, _r1_t19, _r1_t20, _r1_t21, _r1_t22;
var _r1_t2 = function _r1_t8(r167_t) {
    var r167_n, r167_i, r167_a, _r167_t3, _r167_t4, _r167_t7, _r167_t9, _r167_t10, _r167_t11, _r167_t12, _r167_t13, _r167_t16, _r167_t18, _r167_t19, _r167_t20, _r167_t21, _r167_t22, _r167_t25;
    var _r167_t0 = function () {
        _r167_t7 = function (_r167_t8) {
            _r167_t0 = function () {
                throw 'Iteration Stopped';
            };
            return {
                'done': true,
                'value': _r167_t8
            };
        };
        _r167_t9 = r167_t instanceof Array;
        if (_r167_t9) {
            _r167_t10 = r167_n = r167_t.length;
            _r167_t11 = r167_i = 0;
            _r167_t12 = function (_r167_t14) {
                return _r167_t7(_r167_t14);
            };
            _r167_t13 = function (_r167_t15) {
                _r167_t16 = r167_i < r167_n;
                if (_r167_t16) {
                    _r167_t0 = function (_r167_t17) {
                        return _r167_t13(r167_i = r167_i + 1);
                    };
                    return {
                        'value': [
                            r167_i,
                            r167_t[r167_i]
                        ],
                        'done': false
                    };
                } else
                    return _r167_t12(_r167_t15);
            };
            return _r167_t13();
        } else {
            _r167_t18 = r167_a = Object.keys(r167_t);
            _r167_t19 = r167_n = r167_a.length;
            _r167_t20 = r167_i = 0;
            _r167_t21 = function (_r167_t23) {
                return _r167_t7(_r167_t23);
            };
            _r167_t22 = function (_r167_t24) {
                _r167_t25 = r167_i < r167_n;
                if (_r167_t25) {
                    _r167_t0 = function (_r167_t26) {
                        return _r167_t22(r167_i = r167_i + 1);
                    };
                    return {
                        'value': [
                            r167_a[r167_i],
                            r167_t[r167_a[r167_i]]
                        ],
                        'done': false
                    };
                } else
                    return _r167_t21(_r167_t24);
            };
            return _r167_t22();
        }
    };
    var _r167_t1 = function (x) {
        try {
            return _r167_t0(x);
        } catch (ex) {
            return _r167_t2(ex);
        }
    };
    var _r167_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t8)
        _r167_t3 = this;
    else {
        _r167_t4 = function () {
        };
        _r167_t4.prototype = _r1_t8.prototype;
        _r167_t3 = new _r167_t4();
    }
    _r167_t3[Symbol.iterator] = function () {
        return _r167_t3;
    };
    _r167_t3.next = _r167_t1;
    _r167_t3.throw = function (x) {
        return _r167_t2(x);
    };
    return _r167_t3;
};
exports.progLigNameMap = r1_progLigNameMap = function _r1_t9() {
    return {
        'XML_': [
            'center-ops',
            'arrow',
            'trig',
            'eqeq',
            'ineq',
            'exeq',
            'brst',
            'plusplus',
            'logic',
            'ml'
        ],
        'XML0': [
            'center-ops',
            'arrow',
            'trig',
            'eqeq',
            'ineq',
            'exeq',
            'brst',
            'plusplus',
            'logic',
            'ml'
        ],
        'XFS_': [
            'center-ops',
            'arrow',
            'trig',
            'eqeq',
            'ineq',
            'exeq',
            'brst',
            'plusplus',
            'logic',
            'fsharp'
        ],
        'XFS0': [
            'center-ops',
            'arrow',
            'trig',
            'eqeq',
            'ineq',
            'exeq',
            'brst',
            'plusplus',
            'logic',
            'fsharp'
        ],
        'XFST': [
            'center-ops',
            'arrow',
            'trig',
            'eqeq',
            'ineq',
            'exeq',
            'brst',
            'plusplus',
            'logic',
            'fstar'
        ],
        'XHS_': [
            'center-ops',
            'arrow',
            'arrow2',
            'trig',
            'llgg',
            'eqeq',
            'ineq',
            'slasheq',
            'plusplus',
            'dotoper',
            'logic',
            'haskell'
        ],
        'XHS0': [
            'center-ops',
            'arrow',
            'arrow2',
            'trig',
            'llgg',
            'eqeq',
            'ineq',
            'slasheq',
            'plusplus',
            'dotoper',
            'logic',
            'haskell'
        ],
        'XIDR': [
            'center-ops',
            'arrow',
            'arrow2',
            'trig',
            'llgg',
            'eqeq',
            'ineq',
            'slasheq',
            'plusplus',
            'dotoper',
            'logic',
            'idris'
        ],
        'XELM': [
            'center-ops',
            'arrow',
            'arrow2',
            'trig',
            'llgg',
            'eqeq',
            'ineq',
            'slasheq',
            'plusplus',
            'dotoper',
            'logic',
            'elm'
        ],
        'PURS': [
            'center-ops',
            'arrow',
            'arrow2',
            'trig',
            'llgg',
            'eqeq',
            'ineq',
            'slasheq',
            'plusplus',
            'dotoper',
            'logic',
            'purescript'
        ],
        'XPTL': [
            'center-ops',
            'arrow',
            'arrow2',
            'trig',
            'llgg',
            'eqeq',
            'ineq',
            'exeq',
            'plusplus',
            'patel'
        ],
        'SWFT': [
            'center-ops',
            'arrow',
            'arrow2',
            'trig',
            'llgg',
            'eqeq',
            'ineq',
            'exeq',
            'plusplus',
            'swift'
        ],
        'XV__': [
            'center-ops',
            'arrow',
            'arrow2',
            'trig',
            'llgg',
            'eqeq',
            'ineq',
            'exeq',
            'plusplus',
            'dotoper',
            'logic',
            'brst',
            'coq'
        ],
        'XV00': [
            'center-ops',
            'arrow',
            'arrow2',
            'trig',
            'llgg',
            'eqeq',
            'ineq',
            'exeq',
            'plusplus',
            'dotoper',
            'logic',
            'brst',
            'coq'
        ],
        'dlig': [
            'center-ops',
            'arrow',
            'html-comment',
            'trig',
            'arrow2',
            'llgg',
            'eqeq',
            'ineq',
            'exeq',
            'plusplus',
            'colons',
            'dotoper',
            'logic',
            'brst',
            'dlig'
        ],
        'calt': [
            'center-ops',
            'arrow',
            'html-comment',
            'trig',
            'llgg',
            'eqeq',
            'ineq',
            'exeq',
            'plusplus',
            'colons'
        ]
    };
};
var r1_lsx = function _r1_t10(r133_s) {
    return function _r133_t2(r134_t) {
        return r134_t.map(function _r134_t2(r135_x) {
            return 'lig' + r135_x + '.' + r133_s;
        });
    };
};
var r1_arrowStick = [
    'hyphen',
    'equal'
];
var r1_stick = function _r1_t11(r136_style) {
    return {
        'left': [
            'hyphen',
            'equal'
        ],
        'right': r1_lsx(r136_style)
    };
};
var r1_stickClass = function _r1_t12(r138_style) {
    return r1_lsx(r138_style)([
        'hyphen',
        'equal'
    ]);
};
var r1_less = ['less'];
var r1_hyphen = ['hyphen'];
var r1_equal = ['equal'];
var r1_exclam = ['exclam'];
var r1_greater = ['greater'];
var r1_alphabetRaw = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'underscore'
];
var r1_acops = function _r1_t13() {
    return [
        'less',
        'greater',
        'hyphen',
        'equal',
        'plus'
    ];
};
var r1_acskip = function _r1_t14() {
    return [
        'slash',
        'bar',
        'at',
        'ampersand',
        'percent',
        'numbersign',
        'numbersign.upright',
        'numbersign.slanted'
    ];
};
var r1_asterisk_center = function _r1_t15() {
    return {
        'left': [
            'asterisk',
            'asterisk.high',
            'asterisk.low',
            'asterisk.hexhigh',
            'asterisk.hexlow'
        ],
        'right': [
            'asterisk.dfltlow',
            'asterisk.low',
            'asterisk.low',
            'asterisk.hexlow',
            'asterisk.hexlow'
        ]
    };
};
var r1_colon_center = function _r1_t16() {
    return {
        'left': [
            'colon',
            'colon.mid'
        ],
        'right': [
            'colon.mid',
            'colon.mid'
        ]
    };
};
var r1_caret_center = function _r1_t17() {
    return {
        'left': [
            'asciicaret',
            'asciicaret.high',
            'asciicaret.low'
        ],
        'right': [
            'asciicaret.low',
            'asciicaret.low',
            'asciicaret.low'
        ]
    };
};
var r1_tilde_center = function _r1_t18() {
    return {
        'left': [
            'asciitilde',
            'asciitilde.high',
            'asciitilde.low'
        ],
        'right': [
            'asciitilde.low',
            'asciitilde.low',
            'asciitilde.low'
        ]
    };
};
var r1_period_center = function _r1_t19() {
    return {
        'left': ['period'],
        'right': ['period.center']
    };
};
var r1_no_period_center = function _r1_t20() {
    return {
        'left': ['period.center'],
        'right': ['period']
    };
};
var r1_preserved = null;
var r1_advance = function _r1_t21(r153_t) {
    return r153_t.map(function _r153_t2(r154_x) {
        return r154_x;
    });
};
exports.buildLigations = r1_buildLigations = function _r1_t22(r156_xn$chainrule$1aao, r156_lookupOrder, r156_commonList, r156_features, r156_lookups, r156_plm, r156_glyphs) {
    var r156_ligationFeatureName, _r156_t6;
    var _r156_t0 = Object.keys(r156_plm);
    var _r156_t1 = _r156_t0.length;
    var _r156_t2 = 0;
    var _r156_t5 = _r156_t2 < _r156_t1;
    for (; _r156_t5; _r156_t5 = _r156_t2 < _r156_t1) {
        r156_ligationFeatureName = _r156_t0[_r156_t2];
        (function () {
            var r160_alphabet = function () {
                var r162_gid, r162_k, r162_v, _r162_t3, _r162_t4, _r162_t5;
                var r162_g = [];
                var _r162_t0 = r1_alphabetRaw;
                var _r162_t1 = _r162_t0.length;
                var _r162_t2 = 0;
                for (; _r162_t2 < _r162_t1; _r162_t2 = _r162_t2 + 1) {
                    r162_gid = _r162_t0[_r162_t2];
                    r162_g.push(r162_gid);
                    if (r156_glyphs[r162_gid] && r156_glyphs[r162_gid].featureSelector) {
                        _r162_t3 = _r1_t2(r156_glyphs[r162_gid].featureSelector)[Symbol.iterator]();
                        _r162_t4 = void 0;
                        for (; !(_r162_t4 = _r162_t3.next()).done; r162_g.push(r162_v)) {
                            _r162_t5 = _r162_t4.value;
                            r162_k = _r162_t5[0];
                            r162_v = _r162_t5[1];
                        }
                    }
                }
                return r162_g;
            }();
            var r160_mappedFeature = r156_plm[r156_ligationFeatureName] || [];
            var r160_ligationLookupName = 'lig_' + r156_ligationFeatureName + '-' + r160_mappedFeature;
            var r160_hasLG = function _r160_t2(r169_ln) {
                return r160_mappedFeature.indexOf(r169_ln) >= 0;
            };
            var r160_only = function _r160_t3(r170_ln, r170_f, r170_g) {
                return function _r170_t2(r171_left) {
                    if (!r160_hasLG(r170_ln))
                        if (r170_g)
                            if (r170_g instanceof Function)
                                return r170_g(r171_left);
                            else
                                return r170_g;
                        else
                            return null;
                    else if (r170_f instanceof Function)
                        return r170_f(r171_left);
                    else
                        return r170_f;
                };
            };
            r156_commonList.push(r156_ligationFeatureName);
            var r160_featLookups = [];
            var r160_lastLookupName = null;
            var r160_dedup = function _r160_t4(r172_ln0, r172_obj) {
                var r172_name, r172_lookup, r172_h1, _r172_t2;
                var r172_h = JSON.stringify(r172_obj);
                var _r172_t0 = _r1_t2(r156_lookups)[Symbol.iterator]();
                var _r172_t1 = void 0;
                for (; !(_r172_t1 = _r172_t0.next()).done;) {
                    _r172_t2 = _r172_t1.value;
                    r172_name = _r172_t2[0];
                    r172_lookup = _r172_t2[1];
                    r172_h1 = JSON.stringify(r172_lookup);
                    if (r172_h === r172_h1)
                        return r172_name;
                }
                return r172_ln0;
            };
            var r160_includeLookup = function _r160_t5(r176_obj) {
                var r176_ln = r160_dedup(r160_ligationLookupName + r160_featLookups.length, r176_obj);
                if (!r156_lookups[r176_ln])
                    r156_lookups[r176_ln] = r176_obj;
                r160_featLookups.push(r176_ln);
                if (r160_lastLookupName)
                    r156_lookupOrder.push([
                        r160_lastLookupName,
                        r176_ln
                    ]);
                return r160_lastLookupName = r176_ln;
            };
            r156_features[r156_ligationFeatureName] = r160_featLookups;
            (function () {
                var r178_centerizeGroups, r178_xn$centerizestandard$5Frx, r178_g, r178_centerizeL, r178_centerizeR, _r178_t0, _r178_t1, _r178_t2, _r178_t3;
                if (r160_hasLG('center-ops')) {
                    r178_centerizeGroups = [
                        r1_asterisk_center,
                        r1_caret_center,
                        r1_tilde_center,
                        r1_colon_center,
                        r160_hasLG('dotoper') ? r1_period_center : void 0
                    ].filter(function _r178_t4(r179_x) {
                        return r179_x;
                    });
                    r178_xn$centerizestandard$5Frx = function _r178_t5(r180_g) {
                        return r160_includeLookup({
                            'type': 'gsub_chaining',
                            'subtables': [
                                r156_xn$chainrule$1aao(r180_g(), r180_g(), r1_acskip(), r1_acskip(), r1_acops()),
                                r156_xn$chainrule$1aao(r180_g(), r180_g(), r1_acskip(), r1_acops()),
                                r156_xn$chainrule$1aao(r180_g(), r180_g(), r1_acops()),
                                r156_xn$chainrule$1aao(r180_g(), r1_acskip(), r1_acskip(), r1_acops()),
                                r156_xn$chainrule$1aao(r180_g(), r1_acskip(), r1_acops()),
                                r156_xn$chainrule$1aao(r180_g(), r1_acops()),
                                r156_xn$chainrule$1aao(r1_acops(), r1_acskip(), r1_acskip(), r180_g()),
                                r156_xn$chainrule$1aao(r1_acops(), r1_acskip(), r180_g()),
                                r156_xn$chainrule$1aao(r1_acops(), r180_g())
                            ]
                        });
                    };
                    r160_includeLookup({
                        'type': 'gsub_chaining',
                        'subtables': [
                            r156_xn$chainrule$1aao({
                                'left': ['parenLeft'],
                                'right': r1_preserved
                            }, {
                                'left': ['asterisk'],
                                'right': r160_only('brst', ['asterisk.dfltlow'])
                            }),
                            r156_xn$chainrule$1aao({
                                'left': ['asterisk'],
                                'right': r160_only('brst', ['asterisk.dfltlow'])
                            }, {
                                'left': ['parenRight'],
                                'right': r1_preserved
                            })
                        ]
                    });
                    r160_includeLookup({
                        'type': 'gsub_chaining',
                        'subtables': [
                            r156_xn$chainrule$1aao({
                                'left': [
                                    'parenLeft',
                                    'bracketLeft',
                                    'braceLeft'
                                ],
                                'right': r1_preserved
                            }, r1_colon_center()),
                            r156_xn$chainrule$1aao(r1_colon_center(), {
                                'left': [
                                    'parenRight',
                                    'bracketRight',
                                    'braceRight'
                                ],
                                'right': r1_preserved
                            })
                        ]
                    });
                    _r178_t0 = r178_centerizeGroups;
                    _r178_t1 = _r178_t0.length;
                    _r178_t2 = 0;
                    for (; _r178_t2 < _r178_t1; _r178_t2 = _r178_t2 + 1) {
                        r178_g = _r178_t0[_r178_t2];
                        r178_xn$centerizestandard$5Frx(r178_g);
                    }
                    r178_centerizeL = r178_centerizeGroups.map(function _r178_t7(r190_x) {
                        return r190_x().left[0];
                    });
                    r178_centerizeR = r178_centerizeGroups.map(function _r178_t8(r191_x) {
                        var r191_left = r191_x().left;
                        var r191_right = r191_x().right;
                        for (; r191_right instanceof Function;)
                            r191_right = r191_right(r191_left);
                        return r191_right ? r191_right[0] || r191_left[0] : r191_left[0];
                    });
                    r160_includeLookup({
                        'type': 'gsub_chaining',
                        'subtables': [
                            r156_xn$chainrule$1aao(r178_centerizeR, r1_acskip(), r1_acskip(), {
                                'left': r178_centerizeL,
                                'right': r178_centerizeR
                            }),
                            r156_xn$chainrule$1aao(r178_centerizeR, r1_acskip(), {
                                'left': r178_centerizeL,
                                'right': r178_centerizeR
                            }),
                            r156_xn$chainrule$1aao(r178_centerizeR, {
                                'left': r178_centerizeL,
                                'right': r178_centerizeR
                            })
                        ]
                    });
                    r160_includeLookup({
                        'type': 'gsub_reverse',
                        'subtables': [
                            {
                                'match': [
                                    r178_centerizeL,
                                    r1_acskip(),
                                    r1_acskip(),
                                    r178_centerizeR
                                ],
                                'to': r178_centerizeR,
                                'inputIndex': 0
                            },
                            {
                                'match': [
                                    r178_centerizeL,
                                    r1_acskip(),
                                    r178_centerizeR
                                ],
                                'to': r178_centerizeR,
                                'inputIndex': 0
                            },
                            {
                                'match': [
                                    r178_centerizeL,
                                    r178_centerizeR
                                ],
                                'to': r178_centerizeR,
                                'inputIndex': 0
                            }
                        ]
                    });
                    _r178_t3 = r160_includeLookup({
                        'type': 'gsub_chaining',
                        'subtables': [
                            r156_xn$chainrule$1aao(r160_alphabet, r1_no_period_center()),
                            r156_xn$chainrule$1aao(r1_no_period_center(), r160_alphabet)
                        ]
                    });
                }
                return _r178_t3;
            }());
            (function () {
                return r160_includeLookup({
                    'type': 'gsub_chaining',
                    'subtables': [
                        r156_xn$chainrule$1aao({
                            'left': [
                                'colon.dright',
                                'colon.dmid'
                            ],
                            'right': r1_preserved
                        }, {
                            'left': ['colon'],
                            'right': r160_only('colons', ['colon.dmid'])
                        }, {
                            'left': ['colon'],
                            'right': r1_preserved
                        }),
                        r156_xn$chainrule$1aao({
                            'left': [
                                'colon.dright',
                                'colon.dmid'
                            ],
                            'right': r1_preserved
                        }, {
                            'left': ['colon'],
                            'right': r160_only('colons', ['colon.dleft'])
                        }),
                        r156_xn$chainrule$1aao({
                            'left': ['colon'],
                            'right': r160_only('colons', ['colon.dright'])
                        }, {
                            'left': ['colon'],
                            'right': r1_preserved
                        })
                    ]
                });
            }());
            (function () {
                r160_includeLookup({
                    'type': 'gsub_chaining',
                    'subtables': [
                        r156_xn$chainrule$1aao({
                            'left': [
                                'ligplus.cr',
                                'ligplus.jr'
                            ],
                            'right': r1_preserved
                        }, {
                            'left': ['plus'],
                            'right': r160_only('plusplus', r1_lsx('jr'))
                        }),
                        r156_xn$chainrule$1aao({
                            'left': ['plus'],
                            'right': r160_only('plusplus', r1_lsx('lc'))
                        }, {
                            'left': ['plus'],
                            'right': r160_only('plusplus', r1_lsx('cc'))
                        }, {
                            'left': ['plus'],
                            'right': r160_only('plusplus', r1_lsx('cc'))
                        }, {
                            'left': ['plus'],
                            'right': r160_only('plusplus', r1_lsx('cr'))
                        }),
                        r156_xn$chainrule$1aao({
                            'left': ['plus'],
                            'right': r160_only('plusplus', r1_lsx('lc'))
                        }, {
                            'left': ['plus'],
                            'right': r160_only('plusplus', r1_lsx('cc'))
                        }, {
                            'left': ['plus'],
                            'right': r160_only('plusplus', r1_lsx('cr'))
                        }),
                        r156_xn$chainrule$1aao({
                            'left': ['plus'],
                            'right': r160_only('plusplus', r1_lsx('lc'))
                        }, {
                            'left': ['plus'],
                            'right': r160_only('plusplus', r1_lsx('cr'))
                        })
                    ]
                });
                return r160_includeLookup({
                    'type': 'gsub_chaining',
                    'subtables': [
                        r156_xn$chainrule$1aao({
                            'left': ['ligplus.lc'],
                            'right': r160_only('plusplus', ['ligplus.lc.s'])
                        }, {
                            'left': ['ligplus.cc'],
                            'right': r1_preserved
                        }, {
                            'left': ['ligplus.cr'],
                            'right': r160_only('plusplus', ['ligplus.cr.s'])
                        }),
                        r156_xn$chainrule$1aao({
                            'left': ['ligplus.lc'],
                            'right': r160_only('plusplus', ['ligplus.lc.s'])
                        }, {
                            'left': ['ligplus.cr'],
                            'right': r160_only('plusplus', ['ligplus.cr.s'])
                        })
                    ]
                });
            }());
            (function () {
                r160_includeLookup({
                    'type': 'gsub_chaining',
                    'subtables': [
                        r156_xn$chainrule$1aao({
                            'left': r1_less,
                            'right': r160_only('trig', r1_lsx('trig'))
                        }, {
                            'left': ['bar'],
                            'right': r160_only('trig', r1_lsx('trig'))
                        }),
                        r156_xn$chainrule$1aao({
                            'left': ['bar'],
                            'right': r160_only('trig', r1_lsx('trig'))
                        }, {
                            'left': r1_greater,
                            'right': r160_only('trig', r1_lsx('trig'))
                        }),
                        r156_xn$chainrule$1aao({
                            'left': r1_lsx('trig')(['bar']),
                            'right': r1_preserved
                        }, {
                            'left': r1_greater,
                            'right': r160_only('trig', r1_lsx('trig'))
                        }),
                        r156_xn$chainrule$1aao({
                            'left': r1_lsx('trig')(['bar']),
                            'right': r1_preserved
                        }, {
                            'left': ['bar'],
                            'right': r160_only('trig', r1_lsx('trig'))
                        })
                    ]
                });
                return r160_includeLookup({
                    'type': 'gsub_reverse',
                    'subtables': [{
                            'match': [
                                ['bar'],
                                r1_lsx('trig')(['bar'])
                            ],
                            'to': r1_lsx('trig')(['bar']),
                            'inputIndex': 0
                        }]
                });
            }());
            (function () {
                r160_includeLookup({
                    'type': 'gsub_chaining',
                    'subtables': [
                        r156_xn$chainrule$1aao({
                            'left': r1_less,
                            'right': r1_preserved
                        }, {
                            'left': r1_arrowStick,
                            'right': r160_only('arrow', r1_lsx('lc'))
                        }, {
                            'left': r1_arrowStick,
                            'right': r160_only('arrow', r1_lsx('cc'))
                        }, {
                            'left': r1_arrowStick,
                            'right': r160_only('arrow', r1_lsx('cc'))
                        }, {
                            'left': r1_arrowStick,
                            'right': r160_only('arrow', r1_lsx('cr'))
                        }, {
                            'left': r1_greater,
                            'right': r1_preserved
                        }),
                        r156_xn$chainrule$1aao({
                            'left': r1_less,
                            'right': r1_preserved
                        }, {
                            'left': r1_arrowStick,
                            'right': r160_only('arrow', r1_lsx('lc'))
                        }, {
                            'left': r1_arrowStick,
                            'right': r160_only('arrow', r1_lsx('cc'))
                        }, {
                            'left': r1_arrowStick,
                            'right': r160_only('arrow', r1_lsx('cr'))
                        }, {
                            'left': r1_greater,
                            'right': r1_preserved
                        }),
                        r156_xn$chainrule$1aao({
                            'left': r1_less,
                            'right': r1_preserved
                        }, {
                            'left': r1_arrowStick,
                            'right': r160_only('arrow', r1_lsx('lc'))
                        }, {
                            'left': r1_arrowStick,
                            'right': r160_only('arrow', r1_lsx('cr'))
                        }, {
                            'left': r1_greater,
                            'right': r1_preserved
                        }),
                        r156_xn$chainrule$1aao({
                            'left': r1_less,
                            'right': r1_preserved
                        }, {
                            'left': r1_arrowStick,
                            'right': r1_lsx('lr')
                        }, {
                            'left': r1_greater,
                            'right': r1_preserved
                        }),
                        r156_xn$chainrule$1aao({
                            'left': r1_less,
                            'right': r1_preserved
                        }, {
                            'left': r1_arrowStick,
                            'right': r160_only('arrow2', r1_lsx('lc'))
                        }, {
                            'left': r1_arrowStick,
                            'right': r160_only('arrow2', r1_lsx('cj'))
                        }, {
                            'left': r1_less,
                            'right': r1_preserved
                        }),
                        r156_xn$chainrule$1aao({
                            'left': r1_less,
                            'right': r1_preserved
                        }, {
                            'left': r1_arrowStick,
                            'right': r160_only('arrow2', r1_lsx('lj'))
                        }, {
                            'left': r1_less,
                            'right': r1_preserved
                        }),
                        r156_xn$chainrule$1aao({
                            'left': r1_less,
                            'right': r1_preserved
                        }, {
                            'left': r1_arrowStick,
                            'right': r160_only('arrow', r1_lsx('lc'))
                        }, {
                            'left': r1_arrowStick,
                            'right': r160_only('arrow', r1_lsx('cc'))
                        }, {
                            'left': r1_arrowStick,
                            'right': r160_only('arrow', r1_lsx('cf'))
                        }),
                        r156_xn$chainrule$1aao({
                            'left': r1_less,
                            'right': r1_preserved
                        }, {
                            'left': r1_arrowStick,
                            'right': r160_only('arrow', r1_lsx('lc'))
                        }, {
                            'left': r1_arrowStick,
                            'right': r160_only('arrow', r1_lsx('cf'))
                        }),
                        r156_xn$chainrule$1aao({
                            'left': r1_less,
                            'right': r1_preserved
                        }, {
                            'left': r1_less,
                            'right': r160_only('arrow2', r1_lsx('shift1'))
                        }, {
                            'left': r1_arrowStick,
                            'right': r160_only('arrow2', r1_lsx('l1f'), r1_lsx('lf'))
                        }),
                        r156_xn$chainrule$1aao({
                            'left': r1_less,
                            'right': r1_preserved
                        }, {
                            'left': r1_hyphen,
                            'right': r160_only('arrow', r1_lsx('lf'))
                        }),
                        r156_xn$chainrule$1aao({
                            'left': r1_less,
                            'right': r1_preserved
                        }, {
                            'left': r1_equal,
                            'right': r160_only('arrowZALE', r1_lsx('lf'))
                        }),
                        r156_xn$chainrule$1aao({
                            'left': r1_less,
                            'right': r1_preserved
                        }, {
                            'left': r1_exclam,
                            'right': r160_only('html-comment', r1_lsx('htmlcommentstart'))
                        }, {
                            'left': r1_hyphen,
                            'right': r160_only('html-comment', r1_lsx('lxc'))
                        }, {
                            'left': r1_hyphen,
                            'right': r160_only('html-comment', r1_lsx('cc'))
                        }, {
                            'left': r1_hyphen,
                            'right': r160_only('html-comment', r1_lsx('cf'))
                        }),
                        r156_xn$chainrule$1aao({
                            'left': r1_less,
                            'right': r1_preserved
                        }, {
                            'left': r1_exclam,
                            'right': r160_only('html-comment', r1_lsx('htmlcommentstart'))
                        }, {
                            'left': r1_hyphen,
                            'right': r160_only('html-comment', r1_lsx('lxc'))
                        }, {
                            'left': r1_hyphen,
                            'right': r160_only('html-comment', r1_lsx('cf'))
                        }),
                        r156_xn$chainrule$1aao({
                            'left': r1_greater,
                            'right': r1_preserved
                        }, {
                            'left': r1_greater,
                            'right': r160_only('arrow2', r1_lsx('shiftN1'))
                        }, {
                            'left': r1_arrowStick,
                            'right': r160_only('arrow2', r1_lsx('j1f'))
                        }),
                        r156_xn$chainrule$1aao({
                            'left': r1_greater,
                            'right': r1_preserved
                        }, {
                            'left': r1_arrowStick,
                            'right': r160_only('arrow2', r1_lsx('jc'))
                        }, {
                            'left': r1_arrowStick,
                            'right': r160_only('arrow2', r1_lsx('cr'))
                        }, {
                            'left': r1_greater,
                            'right': r1_preserved
                        }),
                        r156_xn$chainrule$1aao({
                            'left': r1_greater,
                            'right': r1_preserved
                        }, {
                            'left': r1_arrowStick,
                            'right': r160_only('arrow2', r1_lsx('jr'))
                        }, {
                            'left': r1_greater,
                            'right': r1_preserved
                        }),
                        r156_xn$chainrule$1aao({
                            'left': r1_greater,
                            'right': r1_preserved
                        }, {
                            'left': r1_hyphen,
                            'right': r160_only('arrow2', r1_lsx('jf'))
                        }),
                        r156_xn$chainrule$1aao({
                            'left': r1_arrowStick,
                            'right': r160_only('arrow', r1_lsx('fc'))
                        }, {
                            'left': r1_arrowStick,
                            'right': r160_only('arrow', r1_lsx('cc'))
                        }, {
                            'left': r1_arrowStick,
                            'right': r160_only('arrow', r1_lsx('cr'))
                        }, {
                            'left': r1_greater,
                            'right': r1_preserved
                        }),
                        r156_xn$chainrule$1aao({
                            'left': r1_arrowStick,
                            'right': r160_only('arrow', r1_lsx('fc'))
                        }, {
                            'left': r1_arrowStick,
                            'right': r160_only('arrow', r1_lsx('cr'))
                        }, {
                            'left': r1_greater,
                            'right': r1_preserved
                        }),
                        r156_xn$chainrule$1aao({
                            'left': r1_arrowStick,
                            'right': r160_only('arrow2', r1_lsx('fr'))
                        }, {
                            'left': r1_greater,
                            'right': r1_preserved
                        }, {
                            'left': r1_arrowStick,
                            'right': r160_only('arrow2', r1_lsx('jf'))
                        }),
                        r156_xn$chainrule$1aao({
                            'left': r1_arrowStick,
                            'right': r160_only('arrow2', r1_lsx('fr1'), r1_lsx('fr'))
                        }, {
                            'left': r1_greater,
                            'right': r160_only('arrow2', r1_lsx('shift1'))
                        }, {
                            'left': r1_greater,
                            'right': r1_preserved
                        }),
                        r156_xn$chainrule$1aao({
                            'left': r1_arrowStick,
                            'right': r160_only('arrow', r1_lsx('fr'))
                        }, {
                            'left': r1_greater,
                            'right': r1_preserved
                        }),
                        r156_xn$chainrule$1aao({
                            'left': r1_arrowStick,
                            'right': r160_only('arrow2', r1_lsx('fj'))
                        }, {
                            'left': r1_less,
                            'right': r1_preserved
                        }, {
                            'left': r1_arrowStick,
                            'right': r160_only('arrow2', r1_lsx('lf'))
                        }),
                        r156_xn$chainrule$1aao({
                            'left': r1_arrowStick,
                            'right': r160_only('arrow2', r1_lsx('fj1'))
                        }, {
                            'left': r1_less,
                            'right': r160_only('arrow2', r1_lsx('shiftN1'))
                        }, {
                            'left': r1_less,
                            'right': r1_preserved
                        }),
                        r156_xn$chainrule$1aao({
                            'left': r1_arrowStick,
                            'right': r160_only('arrow2', r1_lsx('fj'))
                        }, {
                            'left': r1_less,
                            'right': r1_preserved
                        }),
                        r156_xn$chainrule$1aao({
                            'left': r1_greater,
                            'right': r1_preserved
                        }, {
                            'left': r1_equal,
                            'right': r160_only('arrowZAGE', r1_lsx('jf'))
                        })
                    ]
                });
                r160_includeLookup({
                    'type': 'gsub_chaining',
                    'subtables': [
                        r156_xn$chainrule$1aao({
                            'left': r1_less,
                            'right': r160_only('llgg', r1_lsx('shiftN0t'))
                        }, {
                            'left': r1_less,
                            'right': r1_preserved
                        }, {
                            'left': r1_less,
                            'right': r160_only('llgg', r1_lsx('shift0t'))
                        }),
                        r156_xn$chainrule$1aao({
                            'left': r1_greater,
                            'right': r160_only('llgg', r1_lsx('shift0t'))
                        }, {
                            'left': r1_greater,
                            'right': r1_preserved
                        }, {
                            'left': r1_greater,
                            'right': r160_only('llgg', r1_lsx('shiftN0t'))
                        }),
                        r156_xn$chainrule$1aao({
                            'left': r1_less,
                            'right': r160_only('llgg', r1_lsx('shiftN0t'))
                        }, {
                            'left': r1_less,
                            'right': r160_only('llgg', r1_lsx('shift0t'))
                        }),
                        r156_xn$chainrule$1aao({
                            'left': r1_greater,
                            'right': r160_only('llgg', r1_lsx('shift0t'))
                        }, {
                            'left': r1_greater,
                            'right': r160_only('llgg', r1_lsx('shiftN0t'))
                        })
                    ]
                });
                var r233_lAll = [
                    'less',
                    'ligless.shift0t',
                    'ligless.shiftN0t'
                ];
                var r233_lNeut = [
                    'less',
                    'less',
                    'less'
                ];
                var r233_gAll = [
                    'greater',
                    'liggreater.shift0t',
                    'liggreater.shiftN0t'
                ];
                var r233_gNeut = [
                    'greater',
                    'greater',
                    'greater'
                ];
                var r233_lgAll = r233_lAll.concat(r233_gAll);
                var r233_lgNeut = r233_lNeut.concat(r233_gNeut);
                r160_includeLookup({
                    'type': 'gsub_chaining',
                    'subtables': [r156_xn$chainrule$1aao({
                            'left': r233_lgAll,
                            'right': r160_only('llgg', r233_lgNeut)
                        }, {
                            'left': r233_lgAll,
                            'right': r160_only('llgg', r233_lgNeut)
                        }, {
                            'left': r233_lgAll,
                            'right': r160_only('llgg', r233_lgNeut)
                        }, {
                            'left': r233_lgAll,
                            'right': r1_preserved
                        })]
                });
                r160_includeLookup({
                    'type': 'gsub_chaining',
                    'subtables': [r156_xn$chainrule$1aao({
                            'left': r233_lgAll,
                            'right': r1_preserved
                        }, {
                            'left': r233_lgAll,
                            'right': r1_preserved
                        }, {
                            'left': r233_lgAll,
                            'right': r1_preserved
                        }, {
                            'left': r233_lgAll,
                            'right': r160_only('llgg', r233_lgNeut)
                        })]
                });
                r160_includeLookup({
                    'type': 'gsub_chaining',
                    'subtables': [
                        r156_xn$chainrule$1aao({
                            'left': r233_lAll,
                            'right': r160_only('llgg', r233_lNeut)
                        }, {
                            'left': r233_lAll,
                            'right': r160_only('llgg', r233_lNeut)
                        }, {
                            'left': r233_gAll,
                            'right': r160_only('llgg', r233_gNeut)
                        }),
                        r156_xn$chainrule$1aao({
                            'left': r233_gAll,
                            'right': r160_only('llgg', r233_gNeut)
                        }, {
                            'left': r233_gAll,
                            'right': r160_only('llgg', r233_gNeut)
                        }, {
                            'left': r233_lAll,
                            'right': r160_only('llgg', r233_lNeut)
                        }),
                        r156_xn$chainrule$1aao({
                            'left': r233_lAll,
                            'right': r160_only('llgg', r233_lNeut)
                        }, {
                            'left': r233_gAll,
                            'right': r160_only('llgg', r233_gNeut)
                        }, {
                            'left': r233_gAll,
                            'right': r160_only('llgg', r233_gNeut)
                        }),
                        r156_xn$chainrule$1aao({
                            'left': r233_gAll,
                            'right': r160_only('llgg', r233_gNeut)
                        }, {
                            'left': r233_lAll,
                            'right': r160_only('llgg', r233_lNeut)
                        }, {
                            'left': r233_lAll,
                            'right': r160_only('llgg', r233_lNeut)
                        })
                    ]
                });
                r160_includeLookup({
                    'type': 'gsub_reverse',
                    'subtables': [
                        {
                            'match': [
                                [
                                    'hyphen',
                                    'equal'
                                ],
                                r1_stickClass('fr')
                            ],
                            'to': r1_stickClass('fz'),
                            'inputIndex': 0
                        },
                        {
                            'match': [
                                [
                                    'hyphen',
                                    'equal'
                                ],
                                r1_stickClass('fc')
                            ],
                            'to': r1_stickClass('fz'),
                            'inputIndex': 0
                        },
                        {
                            'match': [
                                [
                                    'hyphen',
                                    'equal'
                                ],
                                r1_stickClass('fz')
                            ],
                            'to': r1_stickClass('fz'),
                            'inputIndex': 0
                        }
                    ]
                });
                return r160_includeLookup({
                    'type': 'gsub_chaining',
                    'subtables': [
                        r156_xn$chainrule$1aao({
                            'left': r1_stickClass('cf'),
                            'right': r1_stickClass('cc')
                        }, {
                            'left': r1_stickClass('fc'),
                            'right': r1_stickClass('cc')
                        }),
                        r156_xn$chainrule$1aao({
                            'left': r1_stickClass('zf'),
                            'right': r1_stickClass('zc')
                        }, {
                            'left': r1_stickClass('fr'),
                            'right': r1_stickClass('cr')
                        }),
                        r156_xn$chainrule$1aao({
                            'left': r1_stickClass('zf'),
                            'right': r1_stickClass('zc')
                        }, {
                            'left': r1_stickClass('fc'),
                            'right': r1_stickClass('cc')
                        }),
                        r156_xn$chainrule$1aao({
                            'left': r1_stickClass('lf'),
                            'right': r1_stickClass('lc')
                        }, {
                            'left': r1_stickClass('fz'),
                            'right': r1_stickClass('cz')
                        }),
                        r156_xn$chainrule$1aao({
                            'left': r1_stickClass('cf'),
                            'right': r1_stickClass('cc')
                        }, {
                            'left': r1_stickClass('fz'),
                            'right': r1_stickClass('cz')
                        }),
                        r156_xn$chainrule$1aao({
                            'left': r1_stickClass('zf'),
                            'right': r1_stickClass('zc')
                        }, {
                            'left': r1_stickClass('fz'),
                            'right': r1_stickClass('cz')
                        }),
                        r156_xn$chainrule$1aao(r1_stickClass('lf'), r1_stick('zf')),
                        r156_xn$chainrule$1aao(r1_stickClass('cf'), r1_stick('zf')),
                        r156_xn$chainrule$1aao(r1_stickClass('zf'), r1_stick('zf'))
                    ]
                });
            }());
            (function () {
                return r160_includeLookup({
                    'type': 'gsub_chaining',
                    'subtables': [
                        r156_xn$chainrule$1aao({
                            'left': ['slash'],
                            'right': r160_only('logic', ['slash.left'])
                        }, {
                            'left': ['backslash'],
                            'right': r160_only('logic', ['backslash.right'])
                        }),
                        r156_xn$chainrule$1aao({
                            'left': ['backslash'],
                            'right': r160_only('logic', ['backslash.left'])
                        }, {
                            'left': ['slash'],
                            'right': r160_only('logic', ['slash.right'])
                        }),
                        r156_xn$chainrule$1aao({
                            'left': ['bar'],
                            'right': r1_preserved
                        }, {
                            'left': [
                                'hyphen',
                                'minus'
                            ],
                            'right': r160_only('logic', r1_lsx('preTurnstile'))
                        })
                    ]
                });
            }());
            (function () {
                return r160_includeLookup({
                    'type': 'gsub_chaining',
                    'subtables': [
                        r156_xn$chainrule$1aao({
                            'left': [
                                'equal.cf',
                                'equal.jf'
                            ],
                            'right': r1_preserved
                        }, {
                            'left': ['equal'],
                            'right': r160_only('eqeq', ['equal.jf'])
                        }),
                        r156_xn$chainrule$1aao({
                            'left': ['exclam'],
                            'right': r160_only('exeq', ['equal.fc.neg3'])
                        }, {
                            'left': ['equal'],
                            'right': r160_only('exeq', ['equal.cc'])
                        }, {
                            'left': ['equal'],
                            'right': r160_only('exeq', ['equal.cf'])
                        }),
                        r156_xn$chainrule$1aao({
                            'left': ['equal'],
                            'right': r160_only('slasheq', ['equal.fc.neg3'])
                        }, {
                            'left': ['slash'],
                            'right': r160_only('slasheq', ['equal.cc'])
                        }, {
                            'left': ['equal'],
                            'right': r160_only('slasheq', ['equal.cf'])
                        }),
                        r156_xn$chainrule$1aao({
                            'left': ['equal'],
                            'right': r160_only('eqeq', ['equal.fc'])
                        }, {
                            'left': ['equal'],
                            'right': r160_only('eqeq', ['equal.cc'])
                        }, {
                            'left': ['equal'],
                            'right': r160_only('eqeq', ['equal.cf'])
                        }),
                        r156_xn$chainrule$1aao({
                            'left': ['exclam'],
                            'right': r160_only('exeq', ['equal.fc.neg'])
                        }, {
                            'left': ['equal'],
                            'right': r160_only('exeq', ['equal.cf'])
                        }),
                        r156_xn$chainrule$1aao({
                            'left': ['slash'],
                            'right': r160_only('slasheq', ['equal.fc.neg'])
                        }, {
                            'left': ['equal'],
                            'right': r160_only('slasheq', ['equal.cf'])
                        }),
                        r156_xn$chainrule$1aao({
                            'left': ['equal'],
                            'right': r160_only('eqeq', ['equal.fc'])
                        }, {
                            'left': ['equal'],
                            'right': r160_only('eqeq', ['equal.cf'])
                        })
                    ]
                });
            }());
            return function () {
                return r160_includeLookup({
                    'type': 'gsub_chaining',
                    'subtables': [
                        r156_xn$chainrule$1aao({
                            'left': r1_acops(),
                            'right': r1_preserved
                        }, {
                            'left': [
                                'less',
                                'greater'
                            ],
                            'right': r1_advance
                        }, {
                            'left': ['equal'],
                            'right': r1_advance
                        }),
                        r156_xn$chainrule$1aao({
                            'left': [
                                'less',
                                'greater'
                            ],
                            'right': r1_advance
                        }, {
                            'left': ['equal'],
                            'right': r1_advance
                        }, {
                            'left': r1_acops(),
                            'right': r1_preserved
                        }),
                        r156_xn$chainrule$1aao({
                            'left': ['less'],
                            'right': r160_only('ineq', ['less.lig2'])
                        }, {
                            'left': ['equal'],
                            'right': r160_only('ineq', ['eq.at-ltgteq.lig2'])
                        }),
                        r156_xn$chainrule$1aao({
                            'left': ['greater'],
                            'right': r160_only('ineq', ['greater.lig2'])
                        }, {
                            'left': ['equal'],
                            'right': r160_only('ineq', ['eq.at-ltgteq.lig2'])
                        })
                    ]
                });
            }();
        }());
        _r156_t6 = _r156_t2 = _r156_t2 + 1;
    }
    return _r156_t6;
};
