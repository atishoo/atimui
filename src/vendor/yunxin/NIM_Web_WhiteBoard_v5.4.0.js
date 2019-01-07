!(function(e, t) {
  typeof exports === 'object' && typeof module === 'object'
    ? (module.exports = t())
    : typeof define === 'function' && define.amd
      ? define([], t)
      : typeof exports === 'object'
        ? (exports.WhiteBoard = t())
        : (e.WhiteBoard = t());
})(window, () => {
  return (function(e) {
    const t = {};
    function n(i) {
      if (t[i]) return t[i].exports;
      const o = (t[i] = { i, l: !1, exports: {} });
      return e[i].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function(e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
      }),
      (n.r = function(e) {
        typeof Symbol !== 'undefined' &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
          Object.defineProperty(e, '__esModule', { value: !0 });
      }),
      (n.t = function(e, t) {
        if ((1 & t && (e = n(e)), 8 & t)) return e;
        if (4 & t && typeof e === 'object' && e && e.__esModule) return e;
        const i = Object.create(null);
        if (
          (n.r(i),
          Object.defineProperty(i, 'default', { enumerable: !0, value: e }),
          2 & t && typeof e !== 'string')
        )
          for (const o in e)
            n.d(
              i,
              o,
              (t => {
                return e[t];
              }).bind(null, o)
            );
        return i;
      }),
      (n.n = function(e) {
        const t =
          e && e.__esModule
            ? function() {
                return e.default;
              }
            : function() {
                return e;
              };
        return n.d(t, 'a', t), t;
      }),
      (n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (n.p = ''),
      n((n.s = 371))
    );
  })([
    ,
    function(e, t) {
      const n = (e.exports =
        typeof window !== 'undefined' && window.Math == Math
          ? window
          : typeof self !== 'undefined' && self.Math == Math
            ? self
            : Function('return this')());
      typeof __g === 'number' && (__g = n);
    },
    function(e, t, n) {
      const i = n(37)('wks');

      const o = n(27);

      const r = n(1).Symbol;

      const a = typeof r === 'function';
      (e.exports = function(e) {
        return i[e] || (i[e] = (a && r[e]) || (a ? r : o)(`Symbol.${e}`));
      }).store = i;
    },
    function(e, t) {
      const n = (e.exports = { version: '2.5.7' });
      typeof __e === 'number' && (__e = n);
    },
    function(e, t, n) {
      var i = {
        info: {
          hash: 'd75fc9e26c6472abae34a52a027f01559400411c',
          shortHash: 'd75fc9e2',
          version: '5.4.0',
          sdkVersion: '50',
          nrtcVersion: '4.1.0',
          nrtcSdkVersion: '1',
          protocolVersion: 1,
        },
        agentVersion: '2.7.0.710',
        lbsUrl: 'https://lbs.netease.im/lbs/webconf.jsp',
        roomserver: 'roomserver.netease.im',
        connectTimeout: 1e4,
        xhrTimeout: 1e4,
        socketTimeout: 1e4,
        reconnectionDelay: 800,
        reconnectionDelayMax: 1e4,
        reconnectionJitter: 0.01,
        heartbeatInterval: 3e4,
        cmdTimeout: 1e4,
        defaultReportUrl: 'https://dr.netease.im/1.gif',
        isWeixinApp: !1,
        isNodejs: !1,
        isRN: !1,
        PUSHTOKEN: '',
        PUSHCONFIG: {},
        CLIENTTYPE: 16,
        formatSocketUrl(e) {
          const t = e.url;

          const n = e.secure ? 'https' : 'http';
          return t.indexOf('http') === -1 ? `${n}://${t}` : t;
        },
        uploadUrl: 'https://nos.netease.com',
        replaceUrl: 'https://{bucket}.nosdn.127.net/{object}',
        downloadHost: 'nos.netease.com',
        downloadUrl: 'https://{bucket}.nosdn.127.net/{object}',
        httpsEnabled: !1,
        genUploadUrl(e) {
          return `${i.uploadUrl}/${e}`;
        },
        genDownloadUrl(e, t) {
          let n = i.replaceUrl;
          return (
            /^http/.test(n)
              ? i.httpsEnabled && (n = n.replace('http', 'https'))
              : (n = i.httpsEnabled ? `https://${n}` : `http://${n}`),
            n.replace('{bucket}', e).replace('{object}', t)
          );
        },
      };
      e.exports = i;
    },
    function(e, t, n) {
      t.__esModule = !0;
      const i = a(n(99));

      const o = a(n(88));

      const r =
        typeof o.default === 'function' && typeof i.default === 'symbol'
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                typeof o.default === 'function' &&
                e.constructor === o.default &&
                e !== o.default.prototype
                ? 'symbol'
                : typeof e;
            };
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      t.default =
        typeof o.default === 'function' && r(i.default) === 'symbol'
          ? function(e) {
              return void 0 === e ? 'undefined' : r(e);
            }
          : function(e) {
              return e &&
                typeof o.default === 'function' &&
                e.constructor === o.default &&
                e !== o.default.prototype
                ? 'symbol'
                : void 0 === e
                  ? 'undefined'
                  : r(e);
            };
    },
    function(e, t, n) {
      const i = n(9);

      const o = n(57);

      const r = n(39);

      const a = Object.defineProperty;
      t.f = n(8)
        ? Object.defineProperty
        : function(e, t, n) {
            if ((i(e), (t = r(t, !0)), i(n), o))
              try {
                return a(e, t, n);
              } catch (e) {}
            if ('get' in n || 'set' in n) throw TypeError('Accessors not supported!');
            return 'value' in n && (e[t] = n.value), e;
          };
    },
    function(e, t) {
      const n = {}.hasOwnProperty;
      e.exports = function(e, t) {
        return n.call(e, t);
      };
    },
    function(e, t, n) {
      e.exports = !n(16)(() => {
        return (
          Object.defineProperty({}, 'a', {
            get() {
              return 7;
            },
          }).a != 7
        );
      });
    },
    function(e, t, n) {
      const i = n(11);
      e.exports = function(e) {
        if (!i(e)) throw TypeError(`${e} is not an object!`);
        return e;
      };
    },
    function(e, t, n) {
      const i = n(6);

      const o = n(19);
      e.exports = n(8)
        ? function(e, t, n) {
            return i.f(e, t, o(1, n));
          }
        : function(e, t, n) {
            return (e[t] = n), e;
          };
    },
    function(e, t) {
      e.exports = function(e) {
        return typeof e === 'object' ? e !== null : typeof e === 'function';
      };
    },
    function(e, t, n) {
      const i = n(54);

      const o = n(40);
      e.exports = function(e) {
        return i(o(e));
      };
    },
    function(e, t, n) {
      const i = n(1);

      const o = n(3);

      const r = n(44);

      const a = n(10);

      const s = n(7);

      var c = function(e, t, n) {
        let u;

        let l;

        let f;

        const d = e & c.F;

        const p = e & c.G;

        const h = e & c.S;

        const b = e & c.P;

        const g = e & c.B;

        const v = e & c.W;

        const y = p ? o : o[t] || (o[t] = {});

        const m = y.prototype;

        const _ = p ? i : h ? i[t] : (i[t] || {}).prototype;
        for (u in (p && (n = t), n))
          ((l = !d && _ && void 0 !== _[u]) && s(y, u)) ||
            ((f = l ? _[u] : n[u]),
            (y[u] =
              p && typeof _[u] !== 'function'
                ? n[u]
                : g && l
                  ? r(f, i)
                  : v && _[u] == f
                    ? (function(e) {
                        const t = function(t, n, i) {
                          if (this instanceof e) {
                            switch (arguments.length) {
                              case 0:
                                return new e();
                              case 1:
                                return new e(t);
                              case 2:
                                return new e(t, n);
                            }
                            return new e(t, n, i);
                          }
                          return e.apply(this, arguments);
                        };
                        return (t.prototype = e.prototype), t;
                      })(f)
                    : b && typeof f === 'function'
                      ? r(Function.call, f)
                      : f),
            b && (((y.virtual || (y.virtual = {}))[u] = f), e & c.R && m && !m[u] && a(m, u, f)));
      };
      (c.F = 1),
        (c.G = 2),
        (c.S = 4),
        (c.P = 8),
        (c.B = 16),
        (c.W = 32),
        (c.U = 64),
        (c.R = 128),
        (e.exports = c);
    },
    function(e, t, n) {
      (t.__esModule = !0),
        (t.default = function(e, t) {
          if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
        });
    },
    function(e, t, n) {
      (function(t) {
        const i = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(n(5));
        const o = (function() {
          const e = (void 0 === t ? 'undefined' : (0, i.default)(t)) === 'object' ? t : window;

          const n = Math.pow(2, 53) - 1;

          const o = /\bOpera/;

          const r = Object.prototype;

          const a = r.hasOwnProperty;

          const s = r.toString;
          function c(e) {
            return (e = String(e)).charAt(0).toUpperCase() + e.slice(1);
          }
          function u(e) {
            return (e = h(e)), /^(?:webOS|i(?:OS|P))/.test(e) ? e : c(e);
          }
          function l(e, t) {
            for (const n in e) a.call(e, n) && t(e[n], n, e);
          }
          function f(e) {
            return e == null ? c(e) : s.call(e).slice(8, -1);
          }
          function d(e) {
            return String(e).replace(/([ -])(?!$)/g, '$1?');
          }
          function p(e, t) {
            let i = null;
            return (
              (function(e, t) {
                let i = -1;

                const o = e ? e.length : 0;
                if (typeof o === 'number' && o > -1 && o <= n) for (; ++i < o; ) t(e[i], i, e);
                else l(e, t);
              })(e, (n, o) => {
                i = t(i, n, o, e);
              }),
              i
            );
          }
          function h(e) {
            return String(e).replace(/^ +| +$/g, '');
          }
          return (function t(n) {
            let r = e;

            const a =
              n &&
              (void 0 === n ? 'undefined' : (0, i.default)(n)) === 'object' &&
              f(n) != 'String';
            a && ((r = n), (n = null));
            const c = r.navigator || {};

            const b = c.userAgent || '';
            n || (n = b);
            let g;

            let v;

            const y = a
              ? !!c.likeChrome
              : /\bChrome\b/.test(n) && !/internal|\n/i.test(s.toString());

            const m = a ? 'Object' : 'ScriptBridgingProxyObject';

            const _ = a ? 'Object' : 'Environment';

            const C = a && r.java ? 'JavaPackage' : f(r.java);

            const S = a ? 'Object' : 'RuntimeObject';

            const O = /\bJava/.test(C) && r.java;

            const T = O && f(r.environment) == _;

            const w = O ? 'a' : 'α';

            const E = O ? 'b' : 'β';

            const I = r.document || {};

            let A = r.operamini || r.opera;

            var M = o.test((M = a && A ? A['[[Class]]'] : f(A))) ? M : (A = null);

            let N = n;

            let x = [];

            let P = null;

            const D = n == b;

            let k = D && A && typeof A.version === 'function' && A.version();

            let L = (function(e) {
              return p(e, (e, t) => {
                return e || (RegExp(`\\b${t.pattern || d(t)}\\b`, 'i').exec(n) && (t.label || t));
              });
            })([
              { label: 'EdgeHTML', pattern: 'Edge' },
              'Trident',
              { label: 'WebKit', pattern: 'AppleWebKit' },
              'iCab',
              'Presto',
              'NetFront',
              'Tasman',
              'KHTML',
              'Gecko',
            ]);

            let R = (function(e) {
              return p(e, (e, t) => {
                return e || (RegExp(`\\b${t.pattern || d(t)}\\b`, 'i').exec(n) && (t.label || t));
              });
            })([
              'Adobe AIR',
              'Arora',
              'Avant Browser',
              'Breach',
              'Camino',
              'Electron',
              'Epiphany',
              'Fennec',
              'Flock',
              'Galeon',
              'GreenBrowser',
              'iCab',
              'Iceweasel',
              'K-Meleon',
              'Konqueror',
              'Lunascape',
              'Maxthon',
              { label: 'Microsoft Edge', pattern: 'Edge' },
              'Midori',
              'Nook Browser',
              'PaleMoon',
              'PhantomJS',
              'Raven',
              'Rekonq',
              'RockMelt',
              { label: 'Samsung Internet', pattern: 'SamsungBrowser' },
              'SeaMonkey',
              { label: 'Silk', pattern: '(?:Cloud9|Silk-Accelerated)' },
              'Sleipnir',
              'SlimBrowser',
              { label: 'SRWare Iron', pattern: 'Iron' },
              'Sunrise',
              'Swiftfox',
              'Waterfox',
              'WebPositive',
              'Opera Mini',
              { label: 'Opera Mini', pattern: 'OPiOS' },
              'Opera',
              { label: 'Opera', pattern: 'OPR' },
              'Chrome',
              { label: 'Chrome Mobile', pattern: '(?:CriOS|CrMo)' },
              { label: 'Firefox', pattern: '(?:Firefox|Minefield)' },
              { label: 'Firefox for iOS', pattern: 'FxiOS' },
              { label: 'IE', pattern: 'IEMobile' },
              { label: 'IE', pattern: 'MSIE' },
              'Safari',
            ]);

            let j = B([
              { label: 'BlackBerry', pattern: 'BB10' },
              'BlackBerry',
              { label: 'Galaxy S', pattern: 'GT-I9000' },
              { label: 'Galaxy S2', pattern: 'GT-I9100' },
              { label: 'Galaxy S3', pattern: 'GT-I9300' },
              { label: 'Galaxy S4', pattern: 'GT-I9500' },
              { label: 'Galaxy S5', pattern: 'SM-G900' },
              { label: 'Galaxy S6', pattern: 'SM-G920' },
              { label: 'Galaxy S6 Edge', pattern: 'SM-G925' },
              { label: 'Galaxy S7', pattern: 'SM-G930' },
              { label: 'Galaxy S7 Edge', pattern: 'SM-G935' },
              'Google TV',
              'Lumia',
              'iPad',
              'iPod',
              'iPhone',
              'Kindle',
              { label: 'Kindle Fire', pattern: '(?:Cloud9|Silk-Accelerated)' },
              'Nexus',
              'Nook',
              'PlayBook',
              'PlayStation Vita',
              'PlayStation',
              'TouchPad',
              'Transformer',
              { label: 'Wii U', pattern: 'WiiU' },
              'Wii',
              'Xbox One',
              { label: 'Xbox 360', pattern: 'Xbox' },
              'Xoom',
            ]);

            let W = (function(e) {
              return p(e, (e, t, i) => {
                return (
                  e ||
                  ((t[j] ||
                    t[/^[a-z]+(?: +[a-z]+\b)*/i.exec(j)] ||
                    RegExp(`\\b${d(i)}(?:\\b|\\w*\\d)`, 'i').exec(n)) &&
                    i)
                );
              });
            })({
              Apple: { iPad: 1, iPhone: 1, iPod: 1 },
              Archos: {},
              Amazon: { Kindle: 1, 'Kindle Fire': 1 },
              Asus: { Transformer: 1 },
              'Barnes & Noble': { Nook: 1 },
              BlackBerry: { PlayBook: 1 },
              Google: { 'Google TV': 1, Nexus: 1 },
              HP: { TouchPad: 1 },
              HTC: {},
              LG: {},
              Microsoft: { Xbox: 1, 'Xbox One': 1 },
              Motorola: { Xoom: 1 },
              Nintendo: { 'Wii U': 1, Wii: 1 },
              Nokia: { Lumia: 1 },
              Samsung: { 'Galaxy S': 1, 'Galaxy S2': 1, 'Galaxy S3': 1, 'Galaxy S4': 1 },
              Sony: { PlayStation: 1, 'PlayStation Vita': 1 },
            });

            let U = (function(e) {
              return p(e, (e, t) => {
                const i = t.pattern || d(t);
                return (
                  !e &&
                    (e = RegExp(`\\b${i}(?:/[\\d.]+|[ \\w.]*)`, 'i').exec(n)) &&
                    (e = (function(e, t, n) {
                      let i = {
                        '10.0': '10',
                        6.4: '10 Technical Preview',
                        6.3: '8.1',
                        6.2: '8',
                        6.1: 'Server 2008 R2 / 7',
                        '6.0': 'Server 2008 / Vista',
                        5.2: 'Server 2003 / XP 64-bit',
                        5.1: 'XP',
                        5.01: '2000 SP1',
                        '5.0': '2000',
                        '4.0': 'NT',
                        '4.90': 'ME',
                      };
                      return (
                        t &&
                          n &&
                          /^Win/i.test(e) &&
                          !/^Windows Phone /i.test(e) &&
                          (i = i[/[\d.]+$/.exec(e)]) &&
                          (e = `Windows ${i}`),
                        (e = String(e)),
                        t && n && (e = e.replace(RegExp(t, 'i'), n)),
                        (e = u(
                          e
                            .replace(/ ce$/i, ' CE')
                            .replace(/\bhpw/i, 'web')
                            .replace(/\bMacintosh\b/, 'Mac OS')
                            .replace(/_PowerPC\b/i, ' OS')
                            .replace(/\b(OS X) [^ \d]+/i, '$1')
                            .replace(/\bMac (OS X)\b/, '$1')
                            .replace(/\/(\d)/, ' $1')
                            .replace(/_/g, '.')
                            .replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, '')
                            .replace(/\bx86\.64\b/gi, 'x86_64')
                            .replace(/\b(Windows Phone) OS\b/, '$1')
                            .replace(/\b(Chrome OS \w+) [\d.]+\b/, '$1')
                            .split(' on ')[0]
                        ))
                      );
                    })(e, i, t.label || t)),
                  e
                );
              });
            })([
              'Windows Phone',
              'Android',
              'CentOS',
              { label: 'Chrome OS', pattern: 'CrOS' },
              'Debian',
              'Fedora',
              'FreeBSD',
              'Gentoo',
              'Haiku',
              'Kubuntu',
              'Linux Mint',
              'OpenBSD',
              'Red Hat',
              'SuSE',
              'Ubuntu',
              'Xubuntu',
              'Cygwin',
              'Symbian OS',
              'hpwOS',
              'webOS ',
              'webOS',
              'Tablet OS',
              'Tizen',
              'Linux',
              'Mac OS X',
              'Macintosh',
              'Mac',
              'Windows 98;',
              'Windows ',
            ]);
            function B(e) {
              return p(e, (e, t) => {
                const i = t.pattern || d(t);
                return (
                  !e &&
                    (e =
                      RegExp(`\\b${i} *\\d+[.\\w_]*`, 'i').exec(n) ||
                      RegExp(`\\b${i} *\\w+-[\\w]*`, 'i').exec(n) ||
                      RegExp(`\\b${i}(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)`, 'i').exec(n)) &&
                    ((e = String(t.label && !RegExp(i, 'i').test(t.label) ? t.label : e).split(
                      '/'
                    ))[1] &&
                      !/[\d.]+/.test(e[0]) &&
                      (e[0] += ` ${e[1]}`),
                    (t = t.label || t),
                    (e = u(
                      e[0]
                        .replace(RegExp(i, 'i'), t)
                        .replace(RegExp(`; *(?:${t}[_-])?`, 'i'), ' ')
                        .replace(RegExp(`(${t})[-_.]?(\\w)`, 'i'), '$1 $2')
                    ))),
                  e
                );
              });
            }
            if (
              (L && (L = [L]),
              W && !j && (j = B([W])),
              (g = /\bGoogle TV\b/.exec(j)) && (j = g[0]),
              /\bSimulator\b/i.test(n) && (j = `${j ? `${j} ` : ''}Simulator`),
              R == 'Opera Mini' &&
                /\bOPiOS\b/.test(n) &&
                x.push('running in Turbo/Uncompressed mode'),
              R == 'IE' && /\blike iPhone OS\b/.test(n)
                ? ((W = (g = t(n.replace(/like iPhone OS/, ''))).manufacturer), (j = g.product))
                : /^iP/.test(j)
                  ? (R || (R = 'Safari'),
                    (U = `iOS${
                      (g = / OS ([\d_]+)/i.exec(n)) ? ` ${g[1].replace(/_/g, '.')}` : ''
                    }`))
                  : R != 'Konqueror' || /buntu/i.test(U)
                    ? (W &&
                        W != 'Google' &&
                        ((/Chrome/.test(R) && !/\bMobile Safari\b/i.test(n)) ||
                          /\bVita\b/.test(j))) ||
                      (/\bAndroid\b/.test(U) && /^Chrome/.test(R) && /\bVersion\//i.test(n))
                      ? ((R = 'Android Browser'), (U = /\bAndroid\b/.test(U) ? U : 'Android'))
                      : R == 'Silk'
                        ? (/\bMobi/i.test(n) || ((U = 'Android'), x.unshift('desktop mode')),
                          /Accelerated *= *true/i.test(n) && x.unshift('accelerated'))
                        : R == 'PaleMoon' && (g = /\bFirefox\/([\d.]+)\b/.exec(n))
                          ? x.push(`identifying as Firefox ${g[1]}`)
                          : R == 'Firefox' && (g = /\b(Mobile|Tablet|TV)\b/i.exec(n))
                            ? (U || (U = 'Firefox OS'), j || (j = g[1]))
                            : !R ||
                              (g = !/\bMinefield\b/i.test(n) && /\b(?:Firefox|Safari)\b/.exec(R))
                              ? (R &&
                                  !j &&
                                  /[\/,]|^[^(]+?\)/.test(n.slice(n.indexOf(`${g}/`) + 8)) &&
                                  (R = null),
                                (g = j || W || U) &&
                                  (j ||
                                    W ||
                                    /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(U)) &&
                                  (R = `${/[a-z]+(?: Hat)?/i.exec(
                                    /\bAndroid\b/.test(U) ? U : g
                                  )} Browser`))
                              : R == 'Electron' &&
                                (g = (/\bChrome\/([\d.]+)\b/.exec(n) || 0)[1]) &&
                                x.push(`Chromium ${g}`)
                    : (U = 'Kubuntu'),
              k ||
                (k = (function(e) {
                  return p(e, (e, t) => {
                    return (
                      e ||
                      (RegExp(
                        `${t}(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)`,
                        'i'
                      ).exec(n) || 0)[1] ||
                      null
                    );
                  });
                })([
                  '(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))',
                  'Version',
                  d(R),
                  '(?:Firefox|Minefield|NetFront)',
                ])),
              (g =
                (L == 'iCab' && parseFloat(k) > 3
                  ? 'WebKit'
                  : /\bOpera\b/.test(R) && (/\bOPR\b/.test(n) ? 'Blink' : 'Presto')) ||
                (/\b(?:Midori|Nook|Safari)\b/i.test(n) &&
                  !/^(?:Trident|EdgeHTML)$/.test(L) &&
                  'WebKit') ||
                (!L && /\bMSIE\b/i.test(n) && (U == 'Mac OS' ? 'Tasman' : 'Trident')) ||
                (L == 'WebKit' && /\bPlayStation\b(?! Vita\b)/i.test(R) && 'NetFront')) &&
                (L = [g]),
              R == 'IE' && (g = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(n) || 0)[1])
                ? ((R += ' Mobile'),
                  (U = `Windows Phone ${/\+$/.test(g) ? g : `${g}.x`}`),
                  x.unshift('desktop mode'))
                : /\bWPDesktop\b/i.test(n)
                  ? ((R = 'IE Mobile'),
                    (U = 'Windows Phone 8.x'),
                    x.unshift('desktop mode'),
                    k || (k = (/\brv:([\d.]+)/.exec(n) || 0)[1]))
                  : R != 'IE' &&
                    L == 'Trident' &&
                    (g = /\brv:([\d.]+)/.exec(n)) &&
                    (R && x.push(`identifying as ${R}${k ? ` ${k}` : ''}`), (R = 'IE'), (k = g[1])),
              D)
            ) {
              if (
                (function(e, t) {
                  const n = e != null ? (0, i.default)(e[t]) : 'number';
                  return !(
                    /^(?:boolean|number|string|undefined)$/.test(n) ||
                    (n == 'object' && !e[t])
                  );
                })(r, 'global')
              )
                if (
                  (O &&
                    ((N = (g = O.lang.System).getProperty('os.arch')),
                    (U = U || `${g.getProperty('os.name')} ${g.getProperty('os.version')}`)),
                  T)
                ) {
                  try {
                    (k = r.require('ringo/engine').version.join('.')), (R = 'RingoJS');
                  } catch (e) {
                    (g = r.system) &&
                      g.global.system == r.system &&
                      ((R = 'Narwhal'), U || (U = g[0].os || null));
                  }
                  R || (R = 'Rhino');
                } else
                  (0, i.default)(r.process) === 'object' &&
                    !r.process.browser &&
                    (g = r.process) &&
                    ((0, i.default)(g.versions) === 'object' &&
                      (typeof g.versions.electron === 'string'
                        ? (x.push(`Node ${g.versions.node}`),
                          (R = 'Electron'),
                          (k = g.versions.electron))
                        : typeof g.versions.nw === 'string' &&
                          (x.push(`Chromium ${k}`, `Node ${g.versions.node}`),
                          (R = 'NW.js'),
                          (k = g.versions.nw))),
                    R ||
                      ((R = 'Node.js'),
                      (N = g.arch),
                      (U = g.platform),
                      (k = (k = /[\d.]+/.exec(g.version)) ? k[0] : null)));
              else
                f((g = r.runtime)) == m
                  ? ((R = 'Adobe AIR'), (U = g.flash.system.Capabilities.os))
                  : f((g = r.phantom)) == S
                    ? ((R = 'PhantomJS'),
                      (k = (g = g.version || null) && `${g.major}.${g.minor}.${g.patch}`))
                    : typeof I.documentMode === 'number' && (g = /\bTrident\/(\d+)/i.exec(n))
                      ? ((k = [k, I.documentMode]),
                        (g = +g[1] + 4) != k[1] &&
                          (x.push(`IE ${k[1]} mode`), L && (L[1] = ''), (k[1] = g)),
                        (k = R == 'IE' ? String(k[1].toFixed(1)) : k[0]))
                      : typeof I.documentMode === 'number' &&
                        /^(?:Chrome|Firefox)\b/.test(R) &&
                        (x.push(`masking as ${R} ${k}`),
                        (R = 'IE'),
                        (k = '11.0'),
                        (L = ['Trident']),
                        (U = 'Windows'));
              U = U && u(U);
            }
            if (
              (k &&
                (g =
                  /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(k) ||
                  /(?:alpha|beta)(?: ?\d)?/i.exec(`${n};${D && c.appMinorVersion}`) ||
                  (/\bMinefield\b/i.test(n) && 'a')) &&
                ((P = /b/i.test(g) ? 'beta' : 'alpha'),
                (k =
                  k.replace(RegExp(`${g}\\+?$`), '') +
                  (P == 'beta' ? E : w) +
                  (/\d+\+?/.exec(g) || ''))),
              R == 'Fennec' || (R == 'Firefox' && /\b(?:Android|Firefox OS)\b/.test(U)))
            )
              R = 'Firefox Mobile';
            else if (R == 'Maxthon' && k) k = k.replace(/\.[\d.]+/, '.x');
            else if (/\bXbox\b/i.test(j))
              j == 'Xbox 360' && (U = null),
                j == 'Xbox 360' && /\bIEMobile\b/.test(n) && x.unshift('mobile mode');
            else if (
              (!/^(?:Chrome|IE|Opera)$/.test(R) && (!R || j || /Browser|Mobi/.test(R))) ||
              (U != 'Windows CE' && !/Mobi/i.test(n))
            )
              if (R == 'IE' && D)
                try {
                  r.external === null && x.unshift('platform preview');
                } catch (e) {
                  x.unshift('embedded');
                }
              else
                (/\bBlackBerry\b/.test(j) || /\bBB10\b/.test(n)) &&
                (g = (RegExp(`${j.replace(/ +/g, ' *')}/([.\\d]+)`, 'i').exec(n) || 0)[1] || k)
                  ? ((U = `${
                      (g = [g, /BB10/.test(n)])[1]
                        ? ((j = null), (W = 'BlackBerry'))
                        : 'Device Software'
                    } ${g[0]}`),
                    (k = null))
                  : this != l &&
                    j != 'Wii' &&
                    ((D && A) ||
                      (/Opera/.test(R) && /\b(?:MSIE|Firefox)\b/i.test(n)) ||
                      (R == 'Firefox' && /\bOS X (?:\d+\.){2,}/.test(U)) ||
                      (R == 'IE' &&
                        ((U && !/^Win/.test(U) && k > 5.5) ||
                          (/\bWindows XP\b/.test(U) && k > 8) ||
                          (k == 8 && !/\bTrident\b/.test(n))))) &&
                    !o.test((g = t.call(l, `${n.replace(o, '')};`))) &&
                    g.name &&
                    ((g = `ing as ${g.name}${(g = g.version) ? ` ${g}` : ''}`),
                    o.test(R)
                      ? (/\bIE\b/.test(g) && U == 'Mac OS' && (U = null), (g = `identify${g}`))
                      : ((g = `mask${g}`),
                        (R = M ? u(M.replace(/([a-z])([A-Z])/g, '$1 $2')) : 'Opera'),
                        /\bIE\b/.test(g) && (U = null),
                        D || (k = null)),
                    (L = ['Presto']),
                    x.push(g));
            else R += ' Mobile';
            (g = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(n) || 0)[1]) &&
              ((g = [parseFloat(g.replace(/\.(\d)$/, '.0$1')), g]),
              R == 'Safari' && g[1].slice(-1) == '+'
                ? ((R = 'WebKit Nightly'), (P = 'alpha'), (k = g[1].slice(0, -1)))
                : (k != g[1] && k != (g[2] = (/\bSafari\/([\d.]+\+?)/i.exec(n) || 0)[1])) ||
                  (k = null),
              (g[1] = (/\bChrome\/([\d.]+)/i.exec(n) || 0)[1]),
              g[0] == 537.36 &&
                g[2] == 537.36 &&
                parseFloat(g[1]) >= 28 &&
                L == 'WebKit' &&
                (L = ['Blink']),
              D && (y || g[1])
                ? (L && (L[1] = 'like Chrome'),
                  (g =
                    g[1] ||
                    ((g = g[0]) < 530
                      ? 1
                      : g < 532
                        ? 2
                        : g < 532.05
                          ? 3
                          : g < 533
                            ? 4
                            : g < 534.03
                              ? 5
                              : g < 534.07
                                ? 6
                                : g < 534.1
                                  ? 7
                                  : g < 534.13
                                    ? 8
                                    : g < 534.16
                                      ? 9
                                      : g < 534.24
                                        ? 10
                                        : g < 534.3
                                          ? 11
                                          : g < 535.01
                                            ? 12
                                            : g < 535.02
                                              ? '13+'
                                              : g < 535.07
                                                ? 15
                                                : g < 535.11
                                                  ? 16
                                                  : g < 535.19
                                                    ? 17
                                                    : g < 536.05
                                                      ? 18
                                                      : g < 536.1
                                                        ? 19
                                                        : g < 537.01
                                                          ? 20
                                                          : g < 537.11
                                                            ? '21+'
                                                            : g < 537.13
                                                              ? 23
                                                              : g < 537.18
                                                                ? 24
                                                                : g < 537.24
                                                                  ? 25
                                                                  : g < 537.36
                                                                    ? 26
                                                                    : L != 'Blink'
                                                                      ? '27'
                                                                      : '28')))
                : (L && (L[1] = 'like Safari'),
                  (g =
                    (g = g[0]) < 400
                      ? 1
                      : g < 500
                        ? 2
                        : g < 526
                          ? 3
                          : g < 533
                            ? 4
                            : g < 534
                              ? '4+'
                              : g < 535
                                ? 5
                                : g < 537
                                  ? 6
                                  : g < 538
                                    ? 7
                                    : g < 601
                                      ? 8
                                      : '8')),
              L && (L[1] += ` ${(g += typeof g === 'number' ? '.x' : /[.+]/.test(g) ? '' : '+')}`),
              R == 'Safari' && (!k || parseInt(k) > 45) && (k = g)),
              R == 'Opera' && (g = /\bzbov|zvav$/.exec(U))
                ? ((R += ' '),
                  x.unshift('desktop mode'),
                  g == 'zvav' ? ((R += 'Mini'), (k = null)) : (R += 'Mobile'),
                  (U = U.replace(RegExp(` *${g}$`), '')))
                : R == 'Safari' &&
                  /\bChrome\b/.exec(L && L[1]) &&
                  (x.unshift('desktop mode'),
                  (R = 'Chrome Mobile'),
                  (k = null),
                  /\bOS X\b/.test(U) ? ((W = 'Apple'), (U = 'iOS 4.3+')) : (U = null)),
              k &&
                k.indexOf((g = /[\d.]+$/.exec(U))) == 0 &&
                n.indexOf(`/${g}-`) > -1 &&
                (U = h(U.replace(g, ''))),
              L &&
                !/\b(?:Avant|Nook)\b/.test(R) &&
                (/Browser|Lunascape|Maxthon/.test(R) ||
                  (R != 'Safari' && /^iOS/.test(U) && /\bSafari\b/.test(L[1])) ||
                  (/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(
                    R
                  ) &&
                    L[1])) &&
                (g = L[L.length - 1]) &&
                x.push(g),
              x.length && (x = [`(${x.join('; ')})`]),
              W && j && j.indexOf(W) < 0 && x.push(`on ${W}`),
              j && x.push((/^on /.test(x[x.length - 1]) ? '' : 'on ') + j),
              U &&
                ((g = / ([\d.+]+)$/.exec(U)),
                (v = g && U.charAt(U.length - g[0].length - 1) == '/'),
                (U = {
                  architecture: 32,
                  family: g && !v ? U.replace(g[0], '') : U,
                  version: g ? g[1] : null,
                  toString() {
                    const e = this.version;
                    return (
                      this.family +
                      (e && !v ? ` ${e}` : '') +
                      (this.architecture == 64 ? ' 64-bit' : '')
                    );
                  },
                })),
              (g = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(N)) && !/\bi686\b/i.test(N)
                ? (U &&
                    ((U.architecture = 64), (U.family = U.family.replace(RegExp(` *${g}`), ''))),
                  R &&
                    (/\bWOW64\b/i.test(n) ||
                      (D &&
                        /\w(?:86|32)$/.test(c.cpuClass || c.platform) &&
                        !/\bWin64; x64\b/i.test(n))) &&
                    x.unshift('32-bit'))
                : U &&
                  /^OS X/.test(U.family) &&
                  R == 'Chrome' &&
                  parseFloat(k) >= 39 &&
                  (U.architecture = 64),
              n || (n = null);
            const H = {};
            return (
              (H.description = n),
              (H.layout = L && L[0]),
              (H.manufacturer = W),
              (H.name = R),
              (H.prerelease = P),
              (H.product = j),
              (H.ua = n),
              (H.version = R && k),
              (H.os = U || {
                architecture: null,
                family: null,
                version: null,
                toString() {
                  return 'null';
                },
              }),
              (H.parse = t),
              (H.toString = function() {
                return this.description || '';
              }),
              H.version && x.unshift(k),
              H.name && x.unshift(R),
              U &&
                R &&
                (U != String(U).split(' ')[0] || (U != R.split(' ')[0] && !j)) &&
                x.push(j ? `(${U})` : `on ${U}`),
              x.length && (H.description = x.join(' ')),
              H
            );
          })();
        })();
        e.exports = o;
      }.call(this, n(30)));
    },
    function(e, t) {
      e.exports = function(e) {
        try {
          return !!e();
        } catch (e) {
          return !0;
        }
      };
    },
    ,
    function(e, t) {
      e.exports = {};
    },
    function(e, t) {
      e.exports = function(e, t) {
        return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t };
      };
    },
    function(e, t) {
      e.exports = !0;
    },
    function(e, t, n) {
      t.__esModule = !0;
      const i = a(n(139));

      const o = a(n(135));

      const r = a(n(5));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      t.default = function(e, t) {
        if (typeof t !== 'function' && t !== null)
          throw new TypeError(
            `Super expression must either be null or a function, not ${
              void 0 === t ? 'undefined' : (0, r.default)(t)
            }`
          );
        (e.prototype = (0, o.default)(t && t.prototype, {
          constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
        })),
          t && (i.default ? (0, i.default)(e, t) : (e.__proto__ = t));
      };
    },
    function(e, t, n) {
      t.__esModule = !0;
      const i = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n(5));
      t.default = function(e, t) {
        if (!e)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t ||
          ((void 0 === t ? 'undefined' : (0, i.default)(t)) !== 'object' && typeof t !== 'function')
          ? e
          : t;
      };
    },
    ,
    function(e, t, n) {
      (function(e) {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.url2origin = t.uniqueID = t.off = t.removeEventListener = t.on = t.addEventListener = t.format = t.regWhiteSpace = t.regBlank = t.emptyFunc = t.f = t.emptyObj = t.o = void 0);
        const i = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(n(5));
        (t.getGlobal = o),
          (t.detectCSSFeature = function(e) {
            let t = !1;

            const n = 'Webkit Moz ms O'.split(' ');

            const i = document.createElement('div');

            let o = null;
            (e = e.toLowerCase()), void 0 !== i.style[e] && (t = !0);
            if (!1 === t) {
              o = e.charAt(0).toUpperCase() + e.substr(1);
              for (let r = 0; r < n.length; r++)
                if (void 0 !== i.style[n[r] + o]) {
                  t = !0;
                  break;
                }
            }
            return t;
          }),
          (t.fix = r),
          (t.getYearStr = a),
          (t.getMonthStr = s),
          (t.getDayStr = c),
          (t.getHourStr = u),
          (t.getMinuteStr = l),
          (t.getSecondStr = f),
          (t.getMillisecondStr = d),
          (t.dateFromDateTimeLocal = function(e) {
            return (e = `${e}`), new Date(e.replace(/-/g, '/').replace('T', ' '));
          }),
          (t.getClass = p),
          (t.typeOf = h),
          (t.isString = b),
          (t.isNumber = function(e) {
            return h(e) === 'number';
          }),
          (t.isBoolean = function(e) {
            return h(e) === 'boolean';
          }),
          (t.isArray = g),
          (t.isFunction = v),
          (t.isDate = y),
          (t.isRegExp = function(e) {
            return h(e) === 'regexp';
          }),
          (t.isError = function(e) {
            return h(e) === 'error';
          }),
          (t.isnull = m),
          (t.notnull = _),
          (t.undef = C),
          (t.notundef = S),
          (t.exist = O),
          (t.notexist = T),
          (t.isObject = w),
          (t.isEmpty = function(e) {
            return T(e) || ((b(e) || g(e)) && e.length === 0);
          }),
          (t.containsNode = function(e, t) {
            if (e === t) return !0;
            for (; t.parentNode; ) {
              if (t.parentNode === e) return !0;
              t = t.parentNode;
            }
            return !1;
          }),
          (t.calcHeight = function(e) {
            const t = e.parentNode || document.body;
            ((e = e.cloneNode(!0)).style.display = 'block'),
              (e.style.opacity = 0),
              (e.style.height = 'auto'),
              t.appendChild(e);
            const n = e.offsetHeight;
            return t.removeChild(e), n;
          }),
          (t.remove = function(e) {
            e.parentNode && e.parentNode.removeChild(e);
          }),
          (t.dataset = function(e, t, n) {
            if (!O(n)) return e.getAttribute(`data-${t}`);
            e.setAttribute(`data-${t}`, n);
          }),
          (t.target = function(e) {
            return e.target || e.srcElement;
          }),
          (t.createIframe = function(e) {
            let t;
            if ((e = e || {}).name)
              try {
                (t = document.createElement(`<iframe name="${e.name}"></iframe>`)).frameBorder = 0;
              } catch (n) {
                (t = document.createElement('iframe')).name = e.name;
              }
            else t = document.createElement('iframe');
            e.visible || (t.style.display = 'none');
            v(e.onload) &&
              I(t, 'load', function n(i) {
                if (!t.src) return;
                e.multi || M(t, 'load', n);
                e.onload(i);
              });
            (e.parent || document.body).appendChild(t);
            const n = e.src || 'about:blank';
            return (
              setTimeout(() => {
                t.src = n;
              }, 0),
              t
            );
          }),
          (t.html2node = function(e) {
            const t = document.createElement('div');
            t.innerHTML = e;
            const n = [];

            let i = void 0;

            let o = void 0;
            if (t.children) for (i = 0, o = t.children.length; i < o; i++) n.push(t.children[i]);
            else
              for (i = 0, o = t.childNodes.length; i < o; i++) {
                const r = t.childNodes[i];
                r.nodeType === 1 && n.push(r);
              }
            return n.length > 1 ? t : n[0];
          }),
          (t.scrollTop = function(e) {
            O(e) && (document.documentElement.scrollTop = document.body.scrollTop = e);
            return (
              window.pageYOffset ||
              document.documentElement.scrollTop ||
              document.body.scrollTop ||
              0
            );
          }),
          (t.forOwn = N),
          (t.mixin = x),
          (t.isJSON = P),
          (t.parseJSON = function e(t) {
            try {
              P(t) && (t = JSON.parse(t)),
                w(t) &&
                  N(t, (n, i) => {
                    switch (h(i)) {
                      case 'string':
                      case 'object':
                        t[n] = e(i);
                    }
                  });
            } catch (e) {
              console.error(e);
            }
            return t;
          }),
          (t.simpleClone = function(e) {
            const t = [];

            const n = JSON.stringify(e, (e, n) => {
              if ((void 0 === n ? 'undefined' : (0, i.default)(n)) === 'object' && n !== null) {
                if (t.indexOf(n) !== -1) return;
                t.push(n);
              }
              return n;
            });
            return JSON.parse(n);
          }),
          (t.merge = function() {
            for (
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = arguments.length,
                n = Array(t > 1 ? t - 1 : 0),
                i = 1;
              i < t;
              i++
            )
              n[i - 1] = arguments[i];
            return (
              n.forEach(t => {
                x(e, t);
              }),
              e
            );
          }),
          (t.fillUndef = function(e, t) {
            return (
              N(t, (t, n) => {
                C(e[t]) && (e[t] = n);
              }),
              e
            );
          }),
          (t.checkWithDefault = function(e, t, n) {
            let i = e[t] || e[t.toLowerCase()];
            T(i) && ((i = n), (e[t] = i));
            return i;
          }),
          (t.fetch = function(e, t) {
            return (
              N(e, (n, i) => {
                O(t[n]) && (e[n] = t[n]);
              }),
              e
            );
          }),
          (t.string2object = function() {
            const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '';

            const t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ',';

            const n = {};
            return (
              e.split(t).forEach(e => {
                const t = e.split('=');

                const i = t.shift();
                i && (n[decodeURIComponent(i)] = decodeURIComponent(t.join('=')));
              }),
              n
            );
          }),
          (t.object2string = D),
          (t.genUrlSep = function(e) {
            return e.indexOf('?') < 0 ? '?' : '&';
          }),
          (t.object2query = function(e) {
            return D(e, '&', !0);
          }),
          (t.isFileInput = k),
          (t.getKeys = function(e, t) {
            const n = Object.keys(e);
            t &&
              n.sort((t, n) => {
                const i = k(e[t]);

                const o = k(e[n]);
                return i === o ? 0 : i ? 1 : -1;
              });
            return n;
          });
        (t.o = {}),
          (t.emptyObj = {}),
          (t.f = function() {}),
          (t.emptyFunc = function() {}),
          (t.regBlank = /\s+/gi),
          (t.regWhiteSpace = /\s+/gi);
        function o() {
          return typeof window !== 'undefined' ? window : void 0 !== e ? e : {};
        }
        function r(e, t) {
          t = t || 2;
          for (var n = `${e}`; n.length < t; ) n = `0${n}`;
          return n;
        }
        function a(e) {
          return `${e.getFullYear()}`;
        }
        function s(e) {
          return r(e.getMonth() + 1);
        }
        function c(e) {
          return r(e.getDate());
        }
        function u(e) {
          return r(e.getHours());
        }
        function l(e) {
          return r(e.getMinutes());
        }
        function f(e) {
          return r(e.getSeconds());
        }
        function d(e) {
          return r(e.getMilliseconds(), 3);
        }
        t.format = (function() {
          const e = /yyyy|MM|dd|hh|mm|ss|SSS/g;

          const t = { yyyy: a, MM: s, dd: c, hh: u, mm: l, ss: f, SSS: d };
          return function(n, i) {
            return (
              (n = new Date(n)),
              isNaN(+n)
                ? 'invalid date'
                : (i = i || 'yyyy-MM-dd').replace(e, e => {
                    return t[e](n);
                  })
            );
          };
        })();
        function p(e) {
          return Object.prototype.toString.call(e).slice(8, -1);
        }
        function h(e) {
          return p(e).toLowerCase();
        }
        function b(e) {
          return h(e) === 'string';
        }
        function g(e) {
          return h(e) === 'array';
        }
        function v(e) {
          return h(e) === 'function';
        }
        function y(e) {
          return h(e) === 'date';
        }
        function m(e) {
          return e === null;
        }
        function _(e) {
          return e !== null;
        }
        function C(e) {
          return void 0 === e;
        }
        function S(e) {
          return void 0 !== e;
        }
        function O(e) {
          return S(e) && _(e);
        }
        function T(e) {
          return C(e) || m(e);
        }
        function w(e) {
          return O(e) && h(e) === 'object';
        }
        const E = (t.addEventListener = function(e, t, n) {
          e.addEventListener
            ? e.addEventListener(t, n, !1)
            : e.attachEvent && e.attachEvent(`on${t}`, n);
        });

        var I = (t.on = E);

        const A = (t.removeEventListener = function(e, t, n) {
          e.removeEventListener
            ? e.removeEventListener(t, n, !1)
            : e.detachEvent && e.detachEvent(`on${t}`, n);
        });

        var M = (t.off = A);
        function N() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

          const t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {};

          const n = arguments[2];
          for (const i in e) e.hasOwnProperty(i) && t.call(n, i, e[i]);
        }
        function x(e, t) {
          N(t, (t, n) => {
            e[t] = n;
          });
        }
        t.uniqueID = (function() {
          let e = 0;
          return function() {
            return `${e++}`;
          };
        })();
        function P(e) {
          return b(e) && e.indexOf('{') === 0 && e.lastIndexOf('}') === e.length - 1;
        }
        function D(e, t, n) {
          if (!e) return '';
          const i = [];
          return (
            N(e, (e, t) => {
              v(t) ||
                (y(t)
                  ? (t = t.getTime())
                  : g(t)
                    ? (t = t.join(','))
                    : w(t) && (t = JSON.stringify(t)),
                n && (t = encodeURIComponent(t)),
                i.push(`${encodeURIComponent(e)}=${t}`));
            }),
            i.join(t || ',')
          );
        }
        t.url2origin = (function() {
          const e = /^([\w]+?:\/\/.*?(?=\/|$))/i;
          return function(t) {
            return e.test(t || '') ? RegExp.$1.toLowerCase() : '';
          };
        })();
        function k(e) {
          const t = o();
          return (
            (e.tagName && e.tagName.toUpperCase() === 'INPUT') || (t.Blob && e instanceof t.Blob)
          );
        }
      }.call(this, n(30)));
    },
    function(e, t, n) {
      const i = Object.prototype.hasOwnProperty;

      let o = '~';
      function r() {}
      function a(e, t, n) {
        (this.fn = e), (this.context = t), (this.once = n || !1);
      }
      function s() {
        (this._events = new r()), (this._eventsCount = 0);
      }
      Object.create && ((r.prototype = Object.create(null)), new r().__proto__ || (o = !1)),
        (s.prototype.eventNames = function() {
          let e;

          let t;

          const n = [];
          if (this._eventsCount === 0) return n;
          for (t in (e = this._events)) i.call(e, t) && n.push(o ? t.slice(1) : t);
          return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(e)) : n;
        }),
        (s.prototype.listeners = function(e, t) {
          const n = o ? o + e : e;

          const i = this._events[n];
          if (t) return !!i;
          if (!i) return [];
          if (i.fn) return [i.fn];
          for (var r = 0, a = i.length, s = new Array(a); r < a; r++) s[r] = i[r].fn;
          return s;
        }),
        (s.prototype.emit = function(e, t, n, i, r, a) {
          const s = o ? o + e : e;
          if (!this._events[s]) return !1;
          let c;

          let u;

          const l = this._events[s];

          const f = arguments.length;
          if (l.fn) {
            switch ((l.once && this.removeListener(e, l.fn, void 0, !0), f)) {
              case 1:
                return l.fn.call(l.context), !0;
              case 2:
                return l.fn.call(l.context, t), !0;
              case 3:
                return l.fn.call(l.context, t, n), !0;
              case 4:
                return l.fn.call(l.context, t, n, i), !0;
              case 5:
                return l.fn.call(l.context, t, n, i, r), !0;
              case 6:
                return l.fn.call(l.context, t, n, i, r, a), !0;
            }
            for (u = 1, c = new Array(f - 1); u < f; u++) c[u - 1] = arguments[u];
            l.fn.apply(l.context, c);
          } else {
            let d;

            const p = l.length;
            for (u = 0; u < p; u++)
              switch ((l[u].once && this.removeListener(e, l[u].fn, void 0, !0), f)) {
                case 1:
                  l[u].fn.call(l[u].context);
                  break;
                case 2:
                  l[u].fn.call(l[u].context, t);
                  break;
                case 3:
                  l[u].fn.call(l[u].context, t, n);
                  break;
                case 4:
                  l[u].fn.call(l[u].context, t, n, i);
                  break;
                default:
                  if (!c) for (d = 1, c = new Array(f - 1); d < f; d++) c[d - 1] = arguments[d];
                  l[u].fn.apply(l[u].context, c);
              }
          }
          return !0;
        }),
        (s.prototype.on = function(e, t, n) {
          const i = new a(t, n || this);

          const r = o ? o + e : e;
          return (
            this._events[r]
              ? this._events[r].fn
                ? (this._events[r] = [this._events[r], i])
                : this._events[r].push(i)
              : ((this._events[r] = i), this._eventsCount++),
            this
          );
        }),
        (s.prototype.once = function(e, t, n) {
          const i = new a(t, n || this, !0);

          const r = o ? o + e : e;
          return (
            this._events[r]
              ? this._events[r].fn
                ? (this._events[r] = [this._events[r], i])
                : this._events[r].push(i)
              : ((this._events[r] = i), this._eventsCount++),
            this
          );
        }),
        (s.prototype.removeListener = function(e, t, n, i) {
          const a = o ? o + e : e;
          if (!this._events[a]) return this;
          if (!t)
            return (
              --this._eventsCount == 0 ? (this._events = new r()) : delete this._events[a], this
            );
          const s = this._events[a];
          if (s.fn)
            s.fn !== t ||
              (i && !s.once) ||
              (n && s.context !== n) ||
              (--this._eventsCount == 0 ? (this._events = new r()) : delete this._events[a]);
          else {
            for (var c = 0, u = [], l = s.length; c < l; c++)
              (s[c].fn !== t || (i && !s[c].once) || (n && s[c].context !== n)) && u.push(s[c]);
            u.length
              ? (this._events[a] = u.length === 1 ? u[0] : u)
              : --this._eventsCount == 0
                ? (this._events = new r())
                : delete this._events[a];
          }
          return this;
        }),
        (s.prototype.removeAllListeners = function(e) {
          let t;
          return (
            e
              ? ((t = o ? o + e : e),
                this._events[t] &&
                  (--this._eventsCount == 0 ? (this._events = new r()) : delete this._events[t]))
              : ((this._events = new r()), (this._eventsCount = 0)),
            this
          );
        }),
        (s.prototype.off = s.prototype.removeListener),
        (s.prototype.addListener = s.prototype.on),
        (s.prototype.setMaxListeners = function() {
          return this;
        }),
        (s.prefixed = o),
        (s.EventEmitter = s),
        (e.exports = s);
    },
    function(e, t) {
      t.f = {}.propertyIsEnumerable;
    },
    function(e, t) {
      let n = 0;

      const i = Math.random();
      e.exports = function(e) {
        return 'Symbol('.concat(void 0 === e ? '' : e, ')_', (++n + i).toString(36));
      };
    },
    function(e, t, n) {
      const i = n(55);

      const o = n(36);
      e.exports =
        Object.keys ||
        function(e) {
          return i(e, o);
        };
    },
    ,
    function(e, t) {
      let n;
      n = (function() {
        return this;
      })();
      try {
        n = n || Function('return this')() || (0, eval)('this');
      } catch (e) {
        typeof window === 'object' && (n = window);
      }
      e.exports = n;
    },
    function(e, t, n) {
      const i = n(6).f;

      const o = n(7);

      const r = n(2)('toStringTag');
      e.exports = function(e, t, n) {
        e && !o((e = n ? e : e.prototype), r) && i(e, r, { configurable: !0, value: t });
      };
    },
    function(e, t) {
      const n = {}.toString;
      e.exports = function(e) {
        return n.call(e).slice(8, -1);
      };
    },
    function(e, t) {
      t.f = Object.getOwnPropertySymbols;
    },
    function(e, t, n) {
      const i = n(1);

      const o = n(3);

      const r = n(20);

      const a = n(35);

      const s = n(6).f;
      e.exports = function(e) {
        const t = o.Symbol || (o.Symbol = r ? {} : i.Symbol || {});
        e.charAt(0) == '_' || e in t || s(t, e, { value: a.f(e) });
      };
    },
    function(e, t, n) {
      t.f = n(2);
    },
    function(e, t) {
      e.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(
        ','
      );
    },
    function(e, t, n) {
      const i = n(3);

      const o = n(1);

      const r = o['__core-js_shared__'] || (o['__core-js_shared__'] = {});
      (e.exports = function(e, t) {
        return r[e] || (r[e] = void 0 !== t ? t : {});
      })('versions', []).push({
        version: i.version,
        mode: n(20) ? 'pure' : 'global',
        copyright: '© 2018 Denis Pushkarev (zloirock.ru)',
      });
    },
    function(e, t, n) {
      const i = n(37)('keys');

      const o = n(27);
      e.exports = function(e) {
        return i[e] || (i[e] = o(e));
      };
    },
    function(e, t, n) {
      const i = n(11);
      e.exports = function(e, t) {
        if (!i(e)) return e;
        let n;
        let o;
        if (t && typeof (n = e.toString) === 'function' && !i((o = n.call(e)))) return o;
        if (typeof (n = e.valueOf) === 'function' && !i((o = n.call(e)))) return o;
        if (!t && typeof (n = e.toString) === 'function' && !i((o = n.call(e)))) return o;
        throw TypeError("Can't convert object to primitive value");
      };
    },
    function(e, t) {
      e.exports = function(e) {
        if (void 0 == e) throw TypeError(`Can't call method on  ${e}`);
        return e;
      };
    },
    function(e, t) {
      const n = Math.ceil;

      const i = Math.floor;
      e.exports = function(e) {
        return isNaN((e = +e)) ? 0 : (e > 0 ? i : n)(e);
      };
    },
    function(e, t, n) {
      Object.defineProperty(t, '__esModule', { value: !0 });
      const i = n(121);
      Object.defineProperty(t, 'ajax', {
        enumerable: !0,
        get() {
          return a(i).default;
        },
      });
      const o = n(132);
      Object.defineProperty(t, 'element', {
        enumerable: !0,
        get() {
          return a(o).default;
        },
      });
      const r = n(120);
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      Object.defineProperty(t, 'tool', {
        enumerable: !0,
        get() {
          return a(r).default;
        },
      });
    },
    ,
    function(e, t, n) {
      const i = n(61);
      e.exports = function(e, t, n) {
        if ((i(e), void 0 === t)) return e;
        switch (n) {
          case 1:
            return function(n) {
              return e.call(t, n);
            };
          case 2:
            return function(n, i) {
              return e.call(t, n, i);
            };
          case 3:
            return function(n, i, o) {
              return e.call(t, n, i, o);
            };
        }
        return function() {
          return e.apply(t, arguments);
        };
      };
    },
    function(e, t, n) {
      const i = n(9);

      const o = n(95);

      const r = n(36);

      const a = n(38)('IE_PROTO');

      const s = function() {};

      var c = function() {
        let e;

        const t = n(50)('iframe');

        let i = r.length;
        for (
          t.style.display = 'none',
            n(73).appendChild(t),
            t.src = 'javascript:',
            (e = t.contentWindow.document).open(),
            e.write('<script>document.F=Object</script>'),
            e.close(),
            c = e.F;
          i--;

        )
          delete c.prototype[r[i]];
        return c();
      };
      e.exports =
        Object.create ||
        function(e, t) {
          let n;
          return (
            e !== null
              ? ((s.prototype = i(e)), (n = new s()), (s.prototype = null), (n[a] = e))
              : (n = c()),
            void 0 === t ? n : o(n, t)
          );
        };
    },
    ,
    ,
    function(e, t, n) {
      t.__esModule = !0;
      const i = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n(100));
      t.default = (function() {
        function e(e, t) {
          for (let n = 0; n < t.length; n++) {
            const o = t[n];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              'value' in o && (o.writable = !0),
              (0, i.default)(e, o.key, o);
          }
        }
        return function(t, n, i) {
          return n && e(t.prototype, n), i && e(t, i), t;
        };
      })();
    },
    function(e, t, n) {
      const i = n(40);
      e.exports = function(e) {
        return Object(i(e));
      };
    },
    function(e, t, n) {
      const i = n(11);

      const o = n(1).document;

      const r = i(o) && i(o.createElement);
      e.exports = function(e) {
        return r ? o.createElement(e) : {};
      };
    },
    function(e, t, n) {
      const i = n(97)(!0);
      n(58)(
        String,
        'String',
        function(e) {
          (this._t = String(e)), (this._i = 0);
        },
        function() {
          let e;

          const t = this._t;

          const n = this._i;
          return n >= t.length
            ? { value: void 0, done: !0 }
            : ((e = i(t, n)), (this._i += e.length), { value: e, done: !1 });
        }
      );
    },
    function(e, t, n) {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.constantBB = t.constantRtc = t.constantTool = void 0);
      let i;

      let o;

      let r;

      let a;

      const s = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n(109));
      const c = { HANGUP_TYPE_NORMAL: 0, HANGUP_TYPE_TIMEOUT: -1 };

      const u = {
        NETCALL_TYPE_AUDIO: 1,
        NETCALL_TYPE_VIDEO: 2,
        DEVICE_TYPE_AUDIO_IN: 0,
        DEVICE_TYPE_AUDIO_OUT_LOCAL: 1,
        DEVICE_TYPE_AUDIO_OUT_CHAT: 2,
        DEVICE_TYPE_VIDEO: 3,
        DEVICE_TYPE_DESKTOP_SCREEN: 4,
        DEVICE_TYPE_DESKTOP_WINDOW: 5,
        DEVICE_TYPE_DESKTOP_CHROME_SCREEN: 6,
        CHAT_VIDEO_QUALITY_NORMAL: 0,
        CHAT_VIDEO_QUALITY_LOW: 1,
        CHAT_VIDEO_QUALITY_MEDIUM: 2,
        CHAT_VIDEO_QUALITY_HIGH: 3,
        CHAT_VIDEO_QUALITY_480P: 4,
        CHAT_VIDEO_QUALITY_540P: 5,
        CHAT_VIDEO_QUALITY_720P: 6,
        CHAT_VIDEO_FRAME_RATE_NORMAL: 0,
        CHAT_VIDEO_FRAME_RATE_5: 1,
        CHAT_VIDEO_FRAME_RATE_10: 2,
        CHAT_VIDEO_FRAME_RATE_15: 3,
        CHAT_VIDEO_FRAME_RATE_20: 4,
        CHAT_VIDEO_FRAME_RATE_25: 5,
        LAYOUT_SPLITBOTTOMHORFLOATING: 0,
        LAYOUT_SPLITTOPHORFLOATING: 1,
        LAYOUT_SPLITLATTICETILE: 2,
        LAYOUT_SPLITLATTICECUTTINGTILE: 3,
        LAYOUT_SPLITCUSTOM: 4,
        ROLE_PLAYER: 0,
        ROLE_AUDIENCE: 1,
      };
      (u.deviceTypeMap = ((i = {}),
      (0, s.default)(i, u.DEVICE_TYPE_AUDIO_IN, 'audioIn'),
      (0, s.default)(i, u.DEVICE_TYPE_AUDIO_OUT_CHAT, 'audioOut'),
      (0, s.default)(i, u.DEVICE_TYPE_VIDEO, 'video'),
      i)),
        (u.deviceTypeMap = ((o = {}),
        (0, s.default)(o, u.DEVICE_TYPE_AUDIO_IN, 'audioIn'),
        (0, s.default)(o, u.DEVICE_TYPE_AUDIO_OUT_LOCAL, 'audioOut'),
        (0, s.default)(o, u.DEVICE_TYPE_AUDIO_OUT_CHAT, 'audioOut'),
        (0, s.default)(o, u.DEVICE_TYPE_VIDEO, 'video'),
        o)),
        (u.videoMap = {
          frame: ((r = {}),
          (0, s.default)(r, u.CHAT_VIDEO_QUALITY_NORMAL, '480x320'),
          (0, s.default)(r, u.CHAT_VIDEO_QUALITY_LOW, '176x144'),
          (0, s.default)(r, u.CHAT_VIDEO_QUALITY_MEDIUM, '352x288'),
          (0, s.default)(r, u.CHAT_VIDEO_QUALITY_HIGH, '480x320'),
          (0, s.default)(r, u.CHAT_VIDEO_QUALITY_480P, '640x480'),
          (0, s.default)(r, u.CHAT_VIDEO_QUALITY_540P, '960x540'),
          (0, s.default)(r, u.CHAT_VIDEO_QUALITY_720P, '1280x720'),
          r),
          frameRate: ((a = {}),
          (0, s.default)(a, u.CHAT_VIDEO_FRAME_RATE_NORMAL, 15),
          (0, s.default)(a, u.CHAT_VIDEO_FRAME_RATE_5, 5),
          (0, s.default)(a, u.CHAT_VIDEO_FRAME_RATE_10, 10),
          (0, s.default)(a, u.CHAT_VIDEO_FRAME_RATE_15, 15),
          (0, s.default)(a, u.CHAT_VIDEO_FRAME_RATE_20, 20),
          (0, s.default)(a, u.CHAT_VIDEO_FRAME_RATE_25, 25),
          a),
        });
      const l = {
        getVideoSessionConfig() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

          const t = e.quality;

          const n = void 0 === t ? u.CHAT_VIDEO_QUALITY_NORMAL : t;

          const i = e.frameRate;

          const o = void 0 === i ? u.CHAT_VIDEO_FRAME_RATE_NORMAL : i;

          const r = {};

          const a = u.videoMap.frame[n];
          return (
            (r.frameRate = u.videoMap.frameRate[o]),
            (r.width = +a.split('x')[0]),
            (r.height = +a.split('x')[1]),
            r
          );
        },
        getDeviceTypeStr(e) {
          return u.deviceTypeMap[e];
        },
        getDeviceTypeMap(e) {
          return u.deviceTypeMap[e];
        },
      };

      const f = Object.assign(
        u,
        {
          NETCALL_CONTROL_COMMAND_NOTIFY_AUDIO_ON: 1,
          NETCALL_CONTROL_COMMAND_NOTIFY_AUDIO_OFF: 2,
          NETCALL_CONTROL_COMMAND_NOTIFY_VIDEO_ON: 3,
          NETCALL_CONTROL_COMMAND_NOTIFY_VIDEO_OFF: 4,
          NETCALL_CONTROL_COMMAND_SWITCH_AUDIO_TO_VIDEO: 5,
          NETCALL_CONTROL_COMMAND_SWITCH_AUDIO_TO_VIDEO_AGREE: 6,
          NETCALL_CONTROL_COMMAND_SWITCH_AUDIO_TO_VIDEO_REJECT: 7,
          NETCALL_CONTROL_COMMAND_SWITCH_VIDEO_TO_AUDIO: 8,
          NETCALL_CONTROL_COMMAND_BUSY: 9,
          NETCALL_CONTROL_COMMAND_SELF_CAMERA_INVALID: 10,
          NETCALL_CONTROL_COMMAND_SELF_AUDIO_INVALID: 11,
          NETCALL_CONTROL_COMMAND_SELF_ON_BACKGROUND: 12,
          NETCALL_CONTROL_COMMAND_START_NOTIFY_RECEIVED: 13,
          NETCALL_CONTROL_COMMAND_NOTIFY_RECORD_START: 14,
          NETCALL_CONTROL_COMMAND_NOTIFY_RECORD_STOP: 15,
        },
        c
      );

      const d = Object.assign(
        {
          WB_TYPE_TCP: 2,
          WB_TYPE_UDP: 3,
          CALL_TYPE_NONE: 0,
          CALL_TYPE_AUDIO: 1,
          HANGUP_TYPE_NORMAL: 0,
          HANGUP_TYPE_TIMEOUT: -1,
        },
        {
          CONTROL_COMMAND_BUSY: 9,
          CONTROL_COMMAND_SELF_ON_BACKGROUND: 12,
          CONTROL_COMMAND_START_NOTIFY_RECEIVED: 13,
        },
        c
      );
      (t.constantTool = l), (t.constantRtc = f), (t.constantBB = d);
    },
    function(e, t, n) {
      const i = n(55);

      const o = n(36).concat('length', 'prototype');
      t.f =
        Object.getOwnPropertyNames ||
        function(e) {
          return i(e, o);
        };
    },
    function(e, t, n) {
      const i = n(32);
      e.exports = Object('z').propertyIsEnumerable(0)
        ? Object
        : function(e) {
            return i(e) == 'String' ? e.split('') : Object(e);
          };
    },
    function(e, t, n) {
      const i = n(7);

      const o = n(12);

      const r = n(94)(!1);

      const a = n(38)('IE_PROTO');
      e.exports = function(e, t) {
        let n;

        const s = o(e);

        let c = 0;

        const u = [];
        for (n in s) n != a && i(s, n) && u.push(n);
        for (; t.length > c; ) i(s, (n = t[c++])) && (~r(u, n) || u.push(n));
        return u;
      };
    },
    function(e, t, n) {
      e.exports = n(10);
    },
    function(e, t, n) {
      e.exports =
        !n(8) &&
        !n(16)(() => {
          return (
            Object.defineProperty(n(50)('div'), 'a', {
              get() {
                return 7;
              },
            }).a != 7
          );
        });
    },
    function(e, t, n) {
      const i = n(20);

      const o = n(13);

      const r = n(56);

      const a = n(10);

      const s = n(18);

      const c = n(96);

      const u = n(31);

      const l = n(92);

      const f = n(2)('iterator');

      const d = !([].keys && 'next' in [].keys());

      const p = function() {
        return this;
      };
      e.exports = function(e, t, n, h, b, g, v) {
        c(n, t, h);
        let y;

        let m;

        let _;

        const C = function(e) {
          if (!d && e in w) return w[e];
          switch (e) {
            case 'keys':
            case 'values':
              return function() {
                return new n(this, e);
              };
          }
          return function() {
            return new n(this, e);
          };
        };

        const S = `${t} Iterator`;

        const O = b == 'values';

        let T = !1;

        var w = e.prototype;

        const E = w[f] || w['@@iterator'] || (b && w[b]);

        let I = E || C(b);

        const A = b ? (O ? C('entries') : I) : void 0;

        const M = (t == 'Array' && w.entries) || E;
        if (
          (M &&
            (_ = l(M.call(new e()))) !== Object.prototype &&
            _.next &&
            (u(_, S, !0), i || typeof _[f] === 'function' || a(_, f, p)),
          O &&
            E &&
            E.name !== 'values' &&
            ((T = !0),
            (I = function() {
              return E.call(this);
            })),
          (i && !v) || (!d && !T && w[f]) || a(w, f, I),
          (s[t] = I),
          (s[S] = p),
          b)
        )
          if (((y = { values: O ? I : C('values'), keys: g ? I : C('keys'), entries: A }), v))
            for (m in y) m in w || r(w, m, y[m]);
          else o(o.P + o.F * (d || T), t, y);
        return y;
      };
    },
    ,
    function(e, t, n) {
      n(91);
      for (
        let i = n(1),
          o = n(10),
          r = n(18),
          a = n(2)('toStringTag'),
          s = 'CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList'.split(
            ','
          ),
          c = 0;
        c < s.length;
        c++
      ) {
        const u = s[c];

        const l = i[u];

        const f = l && l.prototype;
        f && !f[a] && o(f, a, u), (r[u] = r.Array);
      }
    },
    function(e, t) {
      e.exports = function(e) {
        if (typeof e !== 'function') throw TypeError(`${e} is not a function!`);
        return e;
      };
    },
    ,
    ,
    ,
    ,
    ,
    function(e, t, n) {
      t.__esModule = !0;
      const i = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n(78));
      t.default =
        i.default ||
        function(e) {
          for (let t = 1; t < arguments.length; t++) {
            const n = arguments[t];
            for (const i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
          }
          return e;
        };
    },
    function(e, t, n) {
      const i = n(26);

      const o = n(19);

      const r = n(12);

      const a = n(39);

      const s = n(7);

      const c = n(57);

      const u = Object.getOwnPropertyDescriptor;
      t.f = n(8)
        ? u
        : function(e, t) {
            if (((e = r(e)), (t = a(t, !0)), c))
              try {
                return u(e, t);
              } catch (e) {}
            if (s(e, t)) return o(!i.f.call(e, t), e[t]);
          };
    },
    function(e, t, n) {
      const i = n(41);

      const o = Math.min;
      e.exports = function(e) {
        return e > 0 ? o(i(e), 9007199254740991) : 0;
      };
    },
    function(e, t, n) {
      Object.defineProperty(t, '__esModule', { value: !0 });
      let i;

      let o;

      const r = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n(109));
      const a = {
        CURRENT: { SDK_TYPE: null },
        SDK_TYPE: { NETCALL: 1, WEBRTC: 2, WHITEBOARD: 3, NRTC: 4 },
        SDK_NAME: { 1: 'Netcall', 2: 'WebRTC', 3: 'WhiteBoard', 4: 'NRTC' },
      };
      (a.STATS_FUN = ((i = {}),
      (0, r.default)(i, a.SDK_TYPE.NETCALL, 1),
      (0, r.default)(i, a.SDK_TYPE.WEBRTC, 1),
      (0, r.default)(i, a.SDK_TYPE.NRTC, 1),
      (0, r.default)(i, a.SDK_TYPE.WHITEBOARD, 0),
      i)),
        (a.STATS_RTC = ((o = {}),
        (0, r.default)(o, a.SDK_TYPE.WEBRTC, 1),
        (0, r.default)(o, a.SDK_TYPE.NRTC, 1),
        (0, r.default)(o, a.SDK_TYPE.WHITEBOARD, 0),
        o)),
        (t.default = a),
        (e.exports = t.default);
    },
    ,
    function(e, t) {},
    function(e, t, n) {
      const i = n(1).document;
      e.exports = i && i.documentElement;
    },
    ,
    function(e, t, n) {
      const i = n(28);

      const o = n(33);

      const r = n(26);

      const a = n(49);

      const s = n(54);

      const c = Object.assign;
      e.exports =
        !c ||
        n(16)(() => {
          const e = {};

          const t = {};

          const n = Symbol();

          const i = 'abcdefghijklmnopqrst';
          return (
            (e[n] = 7),
            i.split('').forEach(e => {
              t[e] = e;
            }),
            c({}, e)[n] != 7 || Object.keys(c({}, t)).join('') != i
          );
        })
          ? function(e, t) {
              for (var n = a(e), c = arguments.length, u = 1, l = o.f, f = r.f; c > u; )
                for (
                  var d,
                    p = s(arguments[u++]),
                    h = l ? i(p).concat(l(p)) : i(p),
                    b = h.length,
                    g = 0;
                  b > g;

                )
                  f.call(p, (d = h[g++])) && (n[d] = p[d]);
              return n;
            }
          : c;
    },
    function(e, t, n) {
      const i = n(13);
      i(i.S + i.F, 'Object', { assign: n(75) });
    },
    function(e, t, n) {
      n(76), (e.exports = n(3).Object.assign);
    },
    function(e, t, n) {
      e.exports = { default: n(77), __esModule: !0 };
    },
    ,
    function(e, t, n) {
      n(34)('observable');
    },
    function(e, t, n) {
      n(34)('asyncIterator');
    },
    function(e, t, n) {
      const i = n(12);

      const o = n(53).f;

      const r = {}.toString;

      const a =
        typeof window === 'object' && window && Object.getOwnPropertyNames
          ? Object.getOwnPropertyNames(window)
          : [];
      e.exports.f = function(e) {
        return a && r.call(e) == '[object Window]'
          ? (function(e) {
              try {
                return o(e);
              } catch (e) {
                return a.slice();
              }
            })(e)
          : o(i(e));
      };
    },
    function(e, t, n) {
      const i = n(32);
      e.exports =
        Array.isArray ||
        function(e) {
          return i(e) == 'Array';
        };
    },
    function(e, t, n) {
      const i = n(28);

      const o = n(33);

      const r = n(26);
      e.exports = function(e) {
        const t = i(e);

        const n = o.f;
        if (n)
          for (var a, s = n(e), c = r.f, u = 0; s.length > u; )
            c.call(e, (a = s[u++])) && t.push(a);
        return t;
      };
    },
    function(e, t, n) {
      const i = n(27)('meta');

      const o = n(11);

      const r = n(7);

      const a = n(6).f;

      let s = 0;

      const c =
        Object.isExtensible ||
        function() {
          return !0;
        };

      const u = !n(16)(() => {
        return c(Object.preventExtensions({}));
      });

      const l = function(e) {
        a(e, i, { value: { i: `O${++s}`, w: {} } });
      };

      var f = (e.exports = {
        KEY: i,
        NEED: !1,
        fastKey(e, t) {
          if (!o(e)) return typeof e === 'symbol' ? e : (typeof e === 'string' ? 'S' : 'P') + e;
          if (!r(e, i)) {
            if (!c(e)) return 'F';
            if (!t) return 'E';
            l(e);
          }
          return e[i].i;
        },
        getWeak(e, t) {
          if (!r(e, i)) {
            if (!c(e)) return !0;
            if (!t) return !1;
            l(e);
          }
          return e[i].w;
        },
        onFreeze(e) {
          return u && f.NEED && c(e) && !r(e, i) && l(e), e;
        },
      });
    },
    function(e, t, n) {
      const i = n(1);

      const o = n(7);

      const r = n(8);

      const a = n(13);

      const s = n(56);

      const c = n(85).KEY;

      const u = n(16);

      const l = n(37);

      const f = n(31);

      const d = n(27);

      const p = n(2);

      const h = n(35);

      const b = n(34);

      const g = n(84);

      const v = n(83);

      const y = n(9);

      const m = n(11);

      const _ = n(12);

      const C = n(39);

      const S = n(19);

      const O = n(45);

      const T = n(82);

      const w = n(68);

      const E = n(6);

      const I = n(28);

      const A = w.f;

      const M = E.f;

      const N = T.f;

      let x = i.Symbol;

      const P = i.JSON;

      const D = P && P.stringify;

      const k = p('_hidden');

      const L = p('toPrimitive');

      const R = {}.propertyIsEnumerable;

      const j = l('symbol-registry');

      const W = l('symbols');

      const U = l('op-symbols');

      const B = Object.prototype;

      const H = typeof x === 'function';

      const F = i.QObject;

      let Y = !F || !F.prototype || !F.prototype.findChild;

      const V =
        r &&
        u(() => {
          return (
            O(
              M({}, 'a', {
                get() {
                  return M(this, 'a', { value: 7 }).a;
                },
              })
            ).a != 7
          );
        })
          ? function(e, t, n) {
              const i = A(B, t);
              i && delete B[t], M(e, t, n), i && e !== B && M(B, t, i);
            }
          : M;

      const K = function(e) {
        const t = (W[e] = O(x.prototype));
        return (t._k = e), t;
      };

      const J =
        H && typeof x.iterator === 'symbol'
          ? function(e) {
              return typeof e === 'symbol';
            }
          : function(e) {
              return e instanceof x;
            };

      var G = function(e, t, n) {
        return (
          e === B && G(U, t, n),
          y(e),
          (t = C(t, !0)),
          y(n),
          o(W, t)
            ? (n.enumerable
                ? (o(e, k) && e[k][t] && (e[k][t] = !1), (n = O(n, { enumerable: S(0, !1) })))
                : (o(e, k) || M(e, k, S(1, {})), (e[k][t] = !0)),
              V(e, t, n))
            : M(e, t, n)
        );
      };

      const $ = function(e, t) {
        y(e);
        for (var n, i = g((t = _(t))), o = 0, r = i.length; r > o; ) G(e, (n = i[o++]), t[n]);
        return e;
      };

      const z = function(e) {
        const t = R.call(this, (e = C(e, !0)));
        return (
          !(this === B && o(W, e) && !o(U, e)) &&
          (!(t || !o(this, e) || !o(W, e) || (o(this, k) && this[k][e])) || t)
        );
      };

      const Q = function(e, t) {
        if (((e = _(e)), (t = C(t, !0)), e !== B || !o(W, t) || o(U, t))) {
          const n = A(e, t);
          return !n || !o(W, t) || (o(e, k) && e[k][t]) || (n.enumerable = !0), n;
        }
      };

      const X = function(e) {
        for (var t, n = N(_(e)), i = [], r = 0; n.length > r; )
          o(W, (t = n[r++])) || t == k || t == c || i.push(t);
        return i;
      };

      const q = function(e) {
        for (var t, n = e === B, i = N(n ? U : _(e)), r = [], a = 0; i.length > a; )
          !o(W, (t = i[a++])) || (n && !o(B, t)) || r.push(W[t]);
        return r;
      };
      H ||
        (s(
          (x = function() {
            if (this instanceof x) throw TypeError('Symbol is not a constructor!');
            const e = d(arguments.length > 0 ? arguments[0] : void 0);

            var t = function(n) {
              this === B && t.call(U, n),
                o(this, k) && o(this[k], e) && (this[k][e] = !1),
                V(this, e, S(1, n));
            };
            return r && Y && V(B, e, { configurable: !0, set: t }), K(e);
          }).prototype,
          'toString',
          function() {
            return this._k;
          }
        ),
        (w.f = Q),
        (E.f = G),
        (n(53).f = T.f = X),
        (n(26).f = z),
        (n(33).f = q),
        r && !n(20) && s(B, 'propertyIsEnumerable', z, !0),
        (h.f = function(e) {
          return K(p(e));
        })),
        a(a.G + a.W + a.F * !H, { Symbol: x });
      for (
        let Z = 'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(
            ','
          ),
          ee = 0;
        Z.length > ee;

      )
        p(Z[ee++]);
      for (let te = I(p.store), ne = 0; te.length > ne; ) b(te[ne++]);
      a(a.S + a.F * !H, 'Symbol', {
        for(e) {
          return o(j, (e += '')) ? j[e] : (j[e] = x(e));
        },
        keyFor(e) {
          if (!J(e)) throw TypeError(`${e} is not a symbol!`);
          for (const t in j) if (j[t] === e) return t;
        },
        useSetter() {
          Y = !0;
        },
        useSimple() {
          Y = !1;
        },
      }),
        a(a.S + a.F * !H, 'Object', {
          create(e, t) {
            return void 0 === t ? O(e) : $(O(e), t);
          },
          defineProperty: G,
          defineProperties: $,
          getOwnPropertyDescriptor: Q,
          getOwnPropertyNames: X,
          getOwnPropertySymbols: q,
        }),
        P &&
          a(
            a.S +
              a.F *
                (!H ||
                  u(() => {
                    const e = x();
                    return D([e]) != '[null]' || D({ a: e }) != '{}' || D(Object(e)) != '{}';
                  })),
            'JSON',
            {
              stringify(e) {
                for (var t, n, i = [e], o = 1; arguments.length > o; ) i.push(arguments[o++]);
                if (((n = t = i[1]), (m(t) || void 0 !== e) && !J(e)))
                  return (
                    v(t) ||
                      (t = function(e, t) {
                        if ((typeof n === 'function' && (t = n.call(this, e, t)), !J(t))) return t;
                      }),
                    (i[1] = t),
                    D.apply(P, i)
                  );
              },
            }
          ),
        x.prototype[L] || n(10)(x.prototype, L, x.prototype.valueOf),
        f(x, 'Symbol'),
        f(Math, 'Math', !0),
        f(i.JSON, 'JSON', !0);
    },
    function(e, t, n) {
      n(86), n(72), n(81), n(80), (e.exports = n(3).Symbol);
    },
    function(e, t, n) {
      e.exports = { default: n(87), __esModule: !0 };
    },
    function(e, t) {
      e.exports = function(e, t) {
        return { value: t, done: !!e };
      };
    },
    function(e, t) {
      e.exports = function() {};
    },
    function(e, t, n) {
      const i = n(90);

      const o = n(89);

      const r = n(18);

      const a = n(12);
      (e.exports = n(58)(
        Array,
        'Array',
        function(e, t) {
          (this._t = a(e)), (this._i = 0), (this._k = t);
        },
        function() {
          const e = this._t;

          const t = this._k;

          const n = this._i++;
          return !e || n >= e.length
            ? ((this._t = void 0), o(1))
            : o(0, t == 'keys' ? n : t == 'values' ? e[n] : [n, e[n]]);
        },
        'values'
      )),
        (r.Arguments = r.Array),
        i('keys'),
        i('values'),
        i('entries');
    },
    function(e, t, n) {
      const i = n(7);

      const o = n(49);

      const r = n(38)('IE_PROTO');

      const a = Object.prototype;
      e.exports =
        Object.getPrototypeOf ||
        function(e) {
          return (
            (e = o(e)),
            i(e, r)
              ? e[r]
              : typeof e.constructor === 'function' && e instanceof e.constructor
                ? e.constructor.prototype
                : e instanceof Object
                  ? a
                  : null
          );
        };
    },
    function(e, t, n) {
      const i = n(41);

      const o = Math.max;

      const r = Math.min;
      e.exports = function(e, t) {
        return (e = i(e)) < 0 ? o(e + t, 0) : r(e, t);
      };
    },
    function(e, t, n) {
      const i = n(12);

      const o = n(69);

      const r = n(93);
      e.exports = function(e) {
        return function(t, n, a) {
          let s;

          const c = i(t);

          const u = o(c.length);

          let l = r(a, u);
          if (e && n != n) {
            for (; u > l; ) if ((s = c[l++]) != s) return !0;
          } else for (; u > l; l++) if ((e || l in c) && c[l] === n) return e || l || 0;
          return !e && -1;
        };
      };
    },
    function(e, t, n) {
      const i = n(6);

      const o = n(9);

      const r = n(28);
      e.exports = n(8)
        ? Object.defineProperties
        : function(e, t) {
            o(e);
            for (var n, a = r(t), s = a.length, c = 0; s > c; ) i.f(e, (n = a[c++]), t[n]);
            return e;
          };
    },
    function(e, t, n) {
      const i = n(45);

      const o = n(19);

      const r = n(31);

      const a = {};
      n(10)(a, n(2)('iterator'), function() {
        return this;
      }),
        (e.exports = function(e, t, n) {
          (e.prototype = i(a, { next: o(1, n) })), r(e, `${t} Iterator`);
        });
    },
    function(e, t, n) {
      const i = n(41);

      const o = n(40);
      e.exports = function(e) {
        return function(t, n) {
          let r;

          let a;

          const s = String(o(t));

          const c = i(n);

          const u = s.length;
          return c < 0 || c >= u
            ? e
              ? ''
              : void 0
            : (r = s.charCodeAt(c)) < 55296 ||
              r > 56319 ||
              c + 1 === u ||
              (a = s.charCodeAt(c + 1)) < 56320 ||
              a > 57343
              ? e
                ? s.charAt(c)
                : r
              : e
                ? s.slice(c, c + 2)
                : a - 56320 + ((r - 55296) << 10) + 65536;
        };
      };
    },
    function(e, t, n) {
      n(51), n(60), (e.exports = n(35).f('iterator'));
    },
    function(e, t, n) {
      e.exports = { default: n(98), __esModule: !0 };
    },
    function(e, t, n) {
      e.exports = { default: n(131), __esModule: !0 };
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(e, t, n) {
      t.__esModule = !0;
      const i = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n(100));
      t.default = function(e, t, n) {
        return (
          t in e
            ? (0, i.default)(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        );
      };
    },
    ,
    ,
    ,
    ,
    function(e, t, n) {
      Object.defineProperty(t, '__esModule', { value: !0 });
      const i = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n(14));

      const o = n(42);
      const r = n(4).info.nrtcVersion;

      const a = function e() {
        const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        (0, i.default)(this, e);
        const n = t.appkey;

        const o = t.platform;
        (this.apis = {}), (this.isRtc = /WebRTC/.test(o)), this.init(n, o), this.resetStatus();
      };
      t.default = a;
      const s = a.prototype;
      (s.init = function(e, t) {
        this.apis = Object.assign(this.apis, {
          ver: 2,
          platform: t,
          sdk_ver: r || 'v4.4.0',
          uid: null,
          appkey: e,
          time: null,
        });
      }),
        (s.start = function(e) {
          (this.calling = !0), (this.apis = Object.assign(this.apis, e));
        }),
        (s.resetStatus = function() {
          (this.calling = !1),
            (this.apis = Object.assign(this.apis, {
              p2p: { value: 0 },
              meeting: { value: 0 },
              bypass: { value: 0 },
              call_control_type: { value: 0 },
              self_mute: { value: -1 },
              self_mic_mute: { value: -1 },
              switch_p2p_type: { value: 0 },
              set_speaker: { value: -1 },
              net_detect: { value: this.isRtc ? -1 : 0 },
              beautify: { value: -1 },
              water_mark: { value: -1 },
              audio_samples: { value: -1 },
              video_samples: { value: -1 },
              pre_view_mirror: { value: -1 },
              code_mirror: { value: -1 },
              custom_audio: { value: -1 },
              custom_video: { value: -1 },
              audio_mix: { value: -1 },
              snap_shot: { value: -1 },
              record: { value: 0 },
              audio_record: { value: 0 },
              display: { value: 0 },
              android_compatibility: { value: -1 },
              hd_audio: { value: 0 },
              video_quality: { value: 0 },
              fps: { value: 0 },
              prefered_video_encoder: { value: -1 },
              prefered_video_decoder: { value: -1 },
              video_max_encode_bitrate: { value: this.isRtc ? -1 : 0 },
              audio_scene: { value: -1 },
              video_adaptive_strategy: { value: this.isRtc ? -1 : 0 },
              ans: { value: this.isRtc ? -1 : 0 },
              agc: { value: -1 },
              dtx: { value: -1 },
              aec: { value: this.isRtc ? -1 : 0 },
              awc: { value: this.isRtc ? -1 : 0 },
              video_crop: { value: 0 },
              set_all_user_audio_mute: { value: 0 },
              server_record_audio: { value: 0 },
              server_record_video: { value: 0 },
              server_record_single_user: { value: 0 },
              always_keep_calling: { value: 0 },
              actor: { value: 0 },
              pure_video: { value: -1 },
              screen_sharing_module: { value: 0 },
            }));
        }),
        (s.update = function() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

          const t = arguments[1];

          let n = e.key;

          let i = e.ext;
          e.constructor === String && (n = e),
            (i = i || t),
            this.apis[n] &&
              ((this.apis[n].value = 1),
              void 0 !== i && (this.apis[n].ext = i),
              /(p2p|meeting)/.test(n) && (this.calling = !0));
        }),
        (s.send = function() {
          const e = this;
          this.calling &&
            ((this.calling = !1),
            (this.apis.time = Date.now()),
            (0, o.ajax)({
              type: 'post',
              url: 'https://statistic.live.126.net/statistic/realtime/sdkFunctioninfo',
              data: this.apis,
            })
              .then(t => {
                e.resetStatus();
              })
              .catch(t => {
                console.log('err', t), e.resetStatus();
              }));
        }),
        (e.exports = t.default);
    },
    ,
    ,
    ,
    ,
    ,
    function(e, t, n) {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = {
          merge() {
            const e = arguments;
            return (e[0] = Object.assign.apply(Object.assign, arguments)), e[0];
          },
          verifyOptions() {
            const e = arguments;
            if (e[0] && e[0].constructor === Object)
              for (let t = 1; t < arguments.length; t++) {
                let n = e[t];
                (n = n.split(' ')).map(t => {
                  if (!e[0][t]) throw Error(`参数缺失 ${t}`);
                });
              }
          },
          guid: (function() {
            const e = function() {
              return ((65536 * (1 + Math.random())) | 0).toString(16).substring(1);
            };
            return function() {
              return e() + e() + e() + e() + e() + e() + e() + e();
            };
          })(),
        }),
        (e.exports = t.default);
    },
    function(e, t, n) {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e) {
          if (!e.url || !e.data) return Promise.reject('参数不完整，无法发起请求');
          e.dataType = e.dataType || 'json';
          const t = new XMLHttpRequest();
          return (
            t.open(e.type || 'GET', e.url, !0),
            (t.responseType = `${e.dataType}`),
            t.setRequestHeader('Content-type', 'application/json;charset=UTF-8'),
            e.header &&
              Object.keys(e.header).map(n => {
                t.setRequestHeader(n, e.header[n]);
              }),
            new Promise((n, i) => {
              (t.onload = function() {
                const e = t.response;
                n(e);
              }),
                (t.onerror = function(e) {
                  i(e);
                }),
                t.send(JSON.stringify(e.data));
            })
          );
        });
      e.exports = t.default;
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(e, t, n) {
      const i = n(13);
      i(i.S + i.F * !n(8), 'Object', { defineProperty: n(6).f });
    },
    function(e, t, n) {
      n(130);
      const i = n(3).Object;
      e.exports = function(e, t, n) {
        return i.defineProperty(e, t, n);
      };
    },
    function(e, t, n) {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = {
          html2node(e) {
            const t = document.createElement('div');
            t.innerHTML = e;
            let n;

            let i;

            const o = [];
            if (t.children) for (n = 0, i = t.children.length; n < i; n++) o.push(t.children[n]);
            else
              for (n = 0, i = t.childNodes.length; n < i; n++) {
                const r = t.childNodes[n];
                r.nodeType === 1 && o.push(r);
              }
            return o.length > 1 ? t : o[0];
          },
          n2node(e) {
            return e
              ? /HTML.+Element/gi.test(e)
                ? e
                : e[0] && /HTML.+Element/gi.test(e[0])
                  ? e[0]
                  : null
              : null;
          },
        }),
        (e.exports = t.default);
    },
    function(e, t, n) {
      const i = n(13);
      i(i.S, 'Object', { create: n(45) });
    },
    function(e, t, n) {
      n(133);
      const i = n(3).Object;
      e.exports = function(e, t) {
        return i.create(e, t);
      };
    },
    function(e, t, n) {
      e.exports = { default: n(134), __esModule: !0 };
    },
    function(e, t, n) {
      const i = n(11);

      const o = n(9);

      const r = function(e, t) {
        if ((o(e), !i(t) && t !== null)) throw TypeError(`${t}: can't set as prototype!`);
      };
      e.exports = {
        set:
          Object.setPrototypeOf ||
          ('__proto__' in {}
            ? (function(e, t, i) {
                try {
                  (i = n(44)(Function.call, n(68).f(Object.prototype, '__proto__').set, 2))(e, []),
                    (t = !(e instanceof Array));
                } catch (e) {
                  t = !0;
                }
                return function(e, n) {
                  return r(e, n), t ? (e.__proto__ = n) : i(e, n), e;
                };
              })({}, !1)
            : void 0),
        check: r,
      };
    },
    function(e, t, n) {
      const i = n(13);
      i(i.S, 'Object', { setPrototypeOf: n(136).set });
    },
    function(e, t, n) {
      n(137), (e.exports = n(3).Object.setPrototypeOf);
    },
    function(e, t, n) {
      e.exports = { default: n(138), __esModule: !0 };
    },
    function(e, t, n) {
      const i = n(24);

      const o = n(15);

      const r = i.getGlobal();
      function a(e, t) {
        for (const n in t) e[n] = t[n];
        return e;
      }
      r.Object.assign ||
        (console.log('Object.assign polyfill'),
        (r.Object.assign = function() {
          for (var e = arguments, t = 1; t < e.length; t++) e[0] = a(e[0], e[t]);
          return e[0];
        })),
        (r.platform = o);
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(e, t, n) {
      Object.defineProperty(t, '__esModule', { value: !0 });
      (t.serializeWb = {
        gateWay: {
          login: 1,
          loginAck: 2,
          join: 3,
          keep_alive: 4,
          keep_alive_ack: 5,
          keep_alive_node: 6,
          broadcast: 7,
          toUser: 8,
          logout: 9,
        },
      }),
        (t.unserializeWb = {
          gateWay: {
            1: 'login',
            2: 'loginAck',
            3: 'join',
            4: 'keep_alive',
            5: 'keep_alive_ack',
            6: 'keep_alive_node',
            7: 'broadcast',
            8: 'toUser',
            9: 'logout',
          },
        });
    },
    function(e, t, n) {
      Object.defineProperty(t, '__esModule', { value: !0 });
      const i = c(n(14));

      const o = c(n(22));

      const r = c(n(21));

      const a = c(n(70));

      const s = n(151);
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      const u = n(25);

      const l = n(15);

      const f = (function(e) {
        function t() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          (0, i.default)(this, t);
          const n = (0, o.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
          return (
            (n.info = Object.assign({}, e)),
            n.init(),
            (n.logger = e.logger || window.console),
            (n.autoReconnect = e.autoReconnect || !0),
            (n.isDestroy = !1),
            (n.reConnectCount = 0),
            (n.wssUrl = null),
            n
          );
        }
        return (0, r.default)(t, e), t;
      })(u);

      const d = f.prototype;
      (d.init = function() {
        this.reset();
      }),
        (d.reset = function() {
          this.imInfo = {};
        }),
        (d.connect = function() {
          const e = this;

          const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

          const n = t.url;

          const i = void 0 === n ? this.wssUrl : n;

          const o = t.imInfo;
          return (
            (this.imInfo = o || this.imInfo),
            i
              ? new Promise((t, n) => {
                  e.url = i;
                  let o = void 0;
                  try {
                    o = e.ws = new WebSocket(`wss://${i}`);
                    const r = e;
                    (o.onopen = function(n) {
                      (e.wssUrl = i),
                        r.initSignal(),
                        (r.signalConnected = !0),
                        console.log('signalConnected', i),
                        r.emit('signalConnected'),
                        t(r),
                        e.heartbeat();
                    }),
                      (o.onclose = o.onerror = function(e) {
                        (r.signalConnected = !1), n(e);
                      });
                  } catch (t) {
                    e.logger.error('信令连接建立失败', t), n(t);
                  }
                })
              : Promise.reject('信令地址缺失')
          );
        }),
        (d.initSignal = function() {
          const e = this;

          const t = this.ws;

          const n = t.send;
          (t.send = function(e) {
            n.call(this, JSON.stringify(e));
          }),
            (t.onmessage = function(t) {
              const n = JSON.parse(t.data || null);
              n &&
                (!e.isHeartBeating ||
                (n.type !== 'keep_alive_ack' && n.type !== s.serializeWb.gateWay.keep_alive_ack)
                  ? e.emit('message', n)
                  : e.onHeartBeat(n));
            }),
            (t.onclose = function(t) {
              (e.signalConnected = !1), e.emit('signalTimeout', t);
            }),
            (t.onerror = function(t) {
              (e.signalConnected = !1), e.emit('signalTimeout', event);
            });
        }),
        (d.send = function(e) {
          const t = this;
          e.type,
            this.ws && this.signalConnected && this.ws.readyState === this.ws.OPEN
              ? ((e.browser = {}),
                (e.browser.name = l.name),
                (e.browser.version = l.version),
                this.ws.send(e))
              : this.once('signalConnected', () => {
                  t.send(e);
                });
        }),
        (d.heartbeat = function() {
          (this.socketData = this.socketData || { uid: this.imInfo.uid, cid: this.imInfo.cid }),
            (this.heartBeatList = []),
            this.bindHearBeat(5);
        }),
        (d.onHeartBeat = function(e) {
          this.heartBeatList.shift(), this.bindHearBeat(5);
        }),
        (d.heartBeatHandler = function() {
          const e = this.socketData;

          const t = this.heartBeatList;
          if (t) {
            const n = Date.now();

            let i = n;
            if (
              (a.default.CURRENT.SDK_TYPE === a.default.SDK_TYPE.WHITEBOARD &&
                (i = +n.toString().slice(0, -3)),
              t.constructor === Array && t.length === 0)
            ) {
              t.push(n);
              const o = this.getContentData(
                {
                  type: 'keep_alive',
                  uid:
                    a.default.CURRENT.SDK_TYPE === a.default.SDK_TYPE.WHITEBOARD
                      ? +e.uid
                      : `${e.uid}`,
                  cid:
                    a.default.CURRENT.SDK_TYPE === a.default.SDK_TYPE.WHITEBOARD
                      ? +e.cid
                      : `${e.cid}`,
                },
                i
              );
              return this.send(o), void this.bindHearBeat(5);
            }
            const r = Date.now() - t[0];
            if (r > 3e4)
              this.logger.error('socket error: heartbeat timeout'), this.emit('signalTimeout');
            else if (r > 2e3 && r < 3e4) {
              this.logger.warn('socket error: no response, keep heartbeat'), t.push(n);
              const s = this.getContentData({ type: 'keep_alive', uid: e.uid, cid: e.cid }, i);
              this.send(s), this.bindHearBeat(2);
            }
          }
        }),
        (d.getContentData = function() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

          const t = arguments[1];
          return (
            a.default.CURRENT.SDK_TYPE === a.default.SDK_TYPE.WHITEBOARD
              ? ((e.version = 31),
                (e.type = s.serializeWb.gateWay[e.type]),
                (e.content = { params: { timestamp: +t } }))
              : (e.params = { content: { timestamp: `${t}` } }),
            e
          );
        }),
        (d.bindHearBeat = function(e) {
          this.isHeartBeating && clearTimeout(this.isHeartBeating),
            (this.isHeartBeating = setTimeout(this.heartBeatHandler.bind(this), 1e3 * e));
        }),
        (d.stopHeartBeat = function() {
          this.isHeartBeating &&
            (this.isHeartBeating && clearTimeout(this.isHeartBeating),
            this.heartBeatTimer && clearInterval(this.heartBeatTimer),
            (this.isHeartBeating = null),
            (this.heartBeatTimer = null),
            (this.heartBeatList = null),
            (this.heartBeatCount = 0));
        }),
        (d.logout = function() {
          const e = this.socketData;

          const t = Date.now().toString();

          const n = this.getContentData({ type: 'logout', uid: e.uid, cid: e.cid }, t);
          this.send(n);
        }),
        (d.destroy = function() {
          this.logger.log('signal close -> signal.js'),
            this.stopHeartBeat(),
            (this.isDestroy = !0),
            this.ws &&
              ((this.ws.onopen = null),
              (this.ws.onmessage = null),
              (this.ws.onerror = null),
              (this.ws.onclose = null),
              this.ws.readyState === WebSocket.OPEN && this.ws.close(),
              (this.ws = null));
        }),
        (t.default = f),
        (e.exports = t.default);
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(e, t, n) {
      Object.defineProperty(t, '__esModule', { value: !0 });
      const i = l(n(14));

      const o = l(n(48));

      const r = l(n(22));

      const a = l(n(21));

      const s = l(n(152));

      const c = l(n(70));

      const u = l(n(114));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      const f = (function(e) {
        function t(e) {
          (0, i.default)(this, t);
          const n = (0, r.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return (n.info = {}), n._init(e), n._reset(), n;
        }
        return (
          (0, a.default)(t, e),
          (0, o.default)(t, [
            {
              key: '_init',
              value(e) {
                (this.info = Object.assign(this.info, e)),
                  (this.logger = e.logger || window.console),
                  c.default.STATS_RTC[c.default.CURRENT.SDK_TYPE] &&
                    (this.dataApi = (function(e) {
                      return new u.default(e);
                    })({
                      appkey: this.info.appKey,
                      platform: c.default.SDK_NAME[c.default.CURRENT.SDK_TYPE],
                    }));
              },
            },
            {
              key: '_reset',
              value() {
                this.signal && (this.signal.destroy(), (this.signal = null)),
                  (this.sessionConfig = {}),
                  (this.imInfo = {}),
                  (this.target = {}),
                  (this.userJoinTimeoutId = 0),
                  (this.remoteNodeStatus = {});
              },
            },
            {
              key: 'resetStatus',
              value() {
                this._reset();
              },
            },
            {
              key: '_startSession',
              value() {
                const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

                const t = this.imInfo || e;
                (t.uid = +t.uid), (t.cid = +t.cid), this.setSessionConfig(t.sessionConfig);
                const n = t.serverMap || {};
                t.urlArray = (t.serverAddrs && JSON.parse(JSON.stringify(t.serverAddrs))) ||
                  (n.webrtcarray && JSON.parse(JSON.stringify(n.webrtcarray))) || [n.webrtc];
                return this.signal ? Promise.resolve(this.signal) : this._initSignal();
              },
            },
            {
              key: '_initSignal',
              value() {
                const e = this;
                if (this.signal) return Promise.resolve();
                const t = new s.default({ logger: this.logger });

                const n = this.imInfo.urlArray;
                if (n) {
                  const i = n.shift();
                  return i
                    ? t
                        .connect({ url: i, imInfo: this.imInfo })
                        .then(t => {
                          return (
                            (e.signal = t),
                            e._initSignalEvent(),
                            t.emit('connected'),
                            Promise.resolve(t.url)
                          );
                        })
                        .catch(t => {
                          return e._initSignal();
                        })
                    : Promise.reject(
                        '无可用的网关服务器地址, 如果当前应用是WebRTC音视频, 请确保对方打开了WebRTC兼容开关'
                      );
                }
              },
            },
            {
              key: '_initSignalEvent',
              value() {
                const e = this;

                const t = this.signal;
                t.on('signalTimeout', this.onSignalTimeout.bind(this)),
                  t.on('message', this.onSignalMessage.bind(this)),
                  t.on('connected', () => {
                    e.emit('connected');
                  }),
                  t.on('signalClosed', () => {
                    e.emit('signalClosed'), e.resetStatus();
                  }),
                  this.signal.on('signalError', t => {
                    e.emit('signalClosed'), e._stopSignal();
                  });
              },
            },
            {
              key: '_stopSignal',
              value() {
                this.signal && (this.signal.destroy(), (this.signal = null));
              },
            },
            {
              key: '_stopSession',
              value() {
                this._stopSignal(), this._reset();
              },
            },
            {
              key: '_logout',
              value() {
                this.signal && this.signal.logout();
              },
            },
            {
              key: 'setAppKey',
              value(e) {
                e && (this.info.appKey = e);
              },
            },
            {
              key: 'setSessionConfig',
              value() {
                const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.sessionConfig = Object.assign(this.sessionConfig, e);
              },
            },
            { key: 'onSignalMessage', value(e) {} },
            { key: 'onSignalTimeout', value(e) {} },
            {
              key: 'uploadDataApi',
              value(e, t) {
                c.default.STATS_FUN[c.default.CURRENT.SDK_TYPE] &&
                  this.info.appKey &&
                  (e === 'start' && (t.appkey = this.info.appKey),
                  this.dataApi[e] && this.dataApi[e](t));
              },
            },
          ]),
          t
        );
      })(n(25));
      (t.default = f), (e.exports = t.default);
    },
    function(e, t, n) {
      const i = s(n(14));

      const o = s(n(22));

      const r = s(n(21));

      const a = n(42);
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      const c = n(25);

      const u = n(15);

      const l = (function(e) {
        function t(e) {
          (0, i.default)(this, t);
          const n = (0, o.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
          return (
            (e.container = a.element.n2node(e.container)),
            (e.remoteContainer = a.element.n2node(e.remoteContainer)),
            a.tool.merge(n, e),
            n.init(),
            n
          );
        }
        return (0, r.default)(t, e), t;
      })(c);

      const f = l.prototype;
      (f.init = function() {
        const e = this;
        this.resetStatus(),
          /safari/gi.test(u.name)
            ? window.addEventListener('pagehide', this.beforeunload.bind(this))
            : window.addEventListener('beforeunload', this.beforeunload.bind(this));
        const t = (this.nim && this.nim.logger) || window.console;
        this.logger = {
          log() {
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            e.debug && t.log(...arguments);
          },
          error() {
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            e.debug && t.error(...arguments);
          },
          warn() {
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            e.debug && t.warn(...arguments);
          },
        };
      }),
        (f.resetStatus = function() {
          (this.signalInited = !1),
            (this.channelId = null),
            (this.type = null),
            (this.target = { account: null, uid: null }),
            (this.sessionConfig = {}),
            (this.sessionMode = null),
            (this.imInfo = {}),
            (this.calling = !1),
            (this.isCaller = !1),
            (this.callee = null),
            (this.callAccepted = !1),
            (this.callerInfo = null),
            (this.beCalledInfo = null),
            this.nim &&
              (this.nim.protocol &&
                this.nim.protocol.setCurrentNetcall &&
                this.nim.protocol.setCurrentNetcall(),
              this.nim.protocol &&
                this.nim.protocol.setCurrentWhiteBoard &&
                this.nim.protocol.setCurrentWhiteBoard()),
            (this.needQueryAccountMap = {}),
            (this.accountUidMap = {}),
            (this.uidAccountMap = {}),
            (this.isOnHangup = !1);
        }),
        (f.beforeunload = function() {
          this.signalInited &&
            (this.callerInfo || this.beCalledInfo ? this.hangup() : this.leaveChannel());
        }),
        (f.baseGetAccount = function() {
          return this.nim && this.nim.account;
        }),
        (f.baseGetUid = function() {
          return (this.accountUidMap && this.accountUidMap[this.nim.account]) || '-1';
        }),
        (f.parseAccountUidMap = function(e) {
          const t = this;
          Object.keys(e).forEach(n => {
            t.addAccountUidMap({ account: n, uid: e[n] });
          });
        }),
        (f.addAccountUidMap = function(e) {
          const t = e.account;

          const n = e.uid;
          this.uidAccountMap || (this.uidAccountMap = {}),
            (this.uidAccountMap[n] = t),
            this.accountUidMap || (this.accountUidMap = {}),
            (this.accountUidMap[t] = n);
        }),
        (f.getAccountWithUid = function(e) {
          if (this.uidAccountMap) return this.uidAccountMap[e];
        }),
        (f.getUidWithAccount = function(e) {
          if (this.accountUidMap) return this.accountUidMap[e];
        }),
        (f.baseIsCurrentChannelId = function() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return this.channelId && this.channelId === e.channelId;
        }),
        (f.baseNotCurrentChannelId = function(e) {
          return !this.baseIsCurrentChannelId(e);
        }),
        (f.baseResponse = function() {
          const e = this;

          const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

          const n = t.fn || 'calleeAck';

          const i = t.beCalledInfo || this.beCalledInfo;

          const o = (i.accepted = !1 !== t.accepted);
          return (
            o
              ? ((this.sessionMode = 'p2p'),
                (this.type = i.type),
                (this.channelId = i.channelId),
                (this.target.account = i.account),
                (this.calling = !0),
                (this.imInfo = i),
                (this.imInfo.sessionMode = this.sessionMode),
                (this.imInfo.role = 0),
                this.setSessionConfig({ signalStartTime: Date.now() }))
              : (this.logger.log('reject call', i),
                this.packNetcallRecord({
                  type: i.type,
                  channelId: i.channelId,
                  isCaller: !1,
                  target: i.account,
                  recordType: 'rejectNetcall',
                })),
            this.nim[n](i).then(
              () => {
                o &&
                  (t.sessionConfig && e.setSessionConfig(t.sessionConfig),
                  (e.beCalledInfo = i),
                  e.initSession({ beCalledInfo: i }));
              },
              t => {
                throw (e.logger.log(t), t);
              }
            )
          );
        }),
        (f.baseControl = function() {
          const e = this;

          const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          if (((t.channelId = t.channelId || this.channelId), t.command && t.channelId)) {
            this.controller.uploadDataApi('update', { key: 'call_control_type' });
            const n = t.fn || 'netcallControl';
            return (
              (t.type = t.command),
              this.nim[n](t).catch(t => {
                e.logger.log(t);
              })
            );
          }
        }),
        (f.baseHangup = function() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.controller.uploadDataApi('send');
          const t = e.channelId;

          const n = void 0 === t ? this.channelId : t;

          const i = e.recordType;
          if (n) {
            const o = e.fn || 'hangup';
            this.nim[o]({ channelId: n });
          }
          n === this.channelId &&
            (this.isCaller &&
              !this.callAccepted &&
              (this.logger.log(i, { channelId: n }), this.packNetcallRecord({ recordType: i })),
            this.resetWhenHangup());
        }),
        (f.baseStartSession = function() {
          this.imInfo.cid = this.imInfo.cid || this.imInfo.channelId;
          const e = (this.sessionMode = this.sessionMode || 'p2p');
          (this.imInfo.sessionMode = e),
            (this.imInfo.sessionConfig = this.sessionConfig),
            this.imInfo.serverMap &&
              this.imInfo.serverMap.constructor === String &&
              (this.imInfo.serverMap = JSON.parse(this.imInfo.serverMap));
        }),
        (f.packNetcallRecord = function() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

          const t = e.recordType;

          const n = e.type || this.type;

          const i = e.channelId || this.channelId;

          const o = e.duration || 0;

          const r = e.isCaller || this.isCaller;

          const s = e.target || this.target.account;

          const c = this.baseGetAccount();

          const u = r ? c : s;

          const l = r ? s : c;

          const f = +new Date();
          this.nim.protocol.onMsg({
            content: {
              msg: {
                attach: JSON.stringify({
                  data: { calltype: n, channel: i, duration: o, ids: [c, s], time: f },
                  id: t,
                }),
                from: u,
                fromClientType: r ? 16 : 0,
                fromDeviceId: '',
                fromNick: '',
                idClient: a.tool.guid(),
                idServer: a.tool.guid(),
                scene: 0,
                time: f,
                to: l,
                type: 5,
              },
            },
          });
        }),
        (f.setSessionConfig = function() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          a.tool.merge(this.sessionConfig, e);
        }),
        (f.initSignal = function() {
          return Promise.resolve();
        }),
        (f.initSession = function() {
          const e = this;

          const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.sessionMode = 'p2p';
          const n = this.isCaller ? this.callerInfo : t.beCalledInfo;
          this.parseAccountUidMap(n.accountUidMap),
            !n.account && n.uid && (n.account = this.getAccountWithUid(n.uid)),
            (this.callAccepted = !0),
            (this.signalInited = !0),
            this.setSessionConfig({ signalEndTime: Date.now() }),
            this.controller.uploadDataApi('start', { uid: n.uid }),
            (this.target.uid = this.getUidWithAccount(this.target.account));
          const i = {
            type: n.type,
            account: (this.target && this.target.account) || n.account,
            channelId: n.channelId,
          };
          n.netcallType && (i.netcallType = n.netcallType),
            (this.imInfo.target = this.target),
            setTimeout(() => {
              e.emit('callAccepted', i);
            }, 1);
        }),
        (f.onBeCalled = function(e) {
          (this.signalInited = !0),
            (this.channelId = e.channelId),
            (this.beCalledInfo = e),
            this.logger.log('beCalling', e),
            this.emit('beCalling', e);
        }),
        (f.onUserJoin = function(e) {
          if (
            (this.logger.log('client on userJoined', e),
            (e.type = e.type || this.type),
            (e.account = this.getAccountWithUid(e.uid)),
            (e.mode = this.sessionMode),
            e.account !== this.baseGetAccount())
          ) {
            if (e.account)
              return (
                this.logger.log('userjoin ----\x3e from signal', e),
                void this.emit('joinChannel', e)
              );
            (this.needQueryAccountMap[e.uid] = e),
              (this.nim.queryAccountUidMap || this.nim.wbQueryAccountUidMap).call(
                this.nim,
                this.channelName,
                [e.uid]
              );
          }
        }),
        (f.onUserLeft = function(e) {
          const t = this;
          this.imInfo.channelId &&
            (this.logger.log('leave channel from signal'),
            this.imInfo.sessionMode === 'p2p'
              ? (this.controller.uploadDataApi('send'),
                setTimeout(() => {
                  t.logger.log('超时处理 onUserLeft'), t.resetWhenHangup();
                }, 1e3),
                this.emit('hangup', {
                  channelId: e.channelId || e.cid,
                  account: this.target.account,
                  type: e.type || 0,
                }))
              : this.emit('leaveChannel', {
                  channelId: e.channelId || e.cid,
                  account: this.getAccountWithUid(e.uid),
                  type: e.type || 0,
                }));
        }),
        (f.onNotifyJoin = function(e) {
          if (this.logger) {
            this.logger.log('join channel from IM');
            const t = e.accountUidMap;

            const n = this.needQueryAccountMap;
            for (const i in (this.parseAccountUidMap(t), t)) {
              const o = i;

              const r = t[i];
              if (r in n) {
                const a = n[r];
                (a.account = o),
                  delete n[r],
                  this.logger.log('userjoin ----\x3e from IM', e),
                  this.emit('joinChannel', a);
              }
            }
          }
        }),
        (f.onCalleeAck = function(e) {
          if ((this.logger.log('收到被叫的通知', e), !this.baseNotCurrentChannelId(e))) {
            const t = e.account;

            const n = this.beCalledInfo || this.callerInfo;
            (this.target.account = t),
              this.setSessionConfig({ signalEndTime: Date.now() }),
              e.accepted
                ? ((this.callAccepted = !0), this.initSession())
                : (this.logger.log('call Rejected', e),
                  this.packNetcallRecord({
                    type: e.type,
                    channelId: e.channelId,
                    isCaller: !0,
                    target: e.account,
                    recordType: 'netcallRejected',
                  }),
                  this.resetWhenHangup(),
                  this.emit('callRejected', { type: n.type, account: t }));
          }
        }),
        (f.onHangup = function(e) {
          const t = this;
          this.channelId &&
            this.sessionMode === 'p2p' &&
            (this.logger.log('on hangup from IM'),
            this.controller.uploadDataApi('send'),
            setTimeout(() => {
              t.logger.log('超时处理 onHangup'), t.resetWhenHangup();
            }, 1e3),
            this.emit('hangup', { channelId: e.channelId, account: e.account, type: 0 }));
        }),
        (f.onControl = function(e) {
          this.emit('control', e);
        }),
        (f.onCalleeAckSync = function(e) {
          this.emit('callerAckSync', e), this.baseIsCurrentChannelId(e) && this.resetWhenHangup();
        }),
        (f.baseCreateChannel = function(e) {
          const t = this;

          const n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return (
            a.tool.verifyOptions(n, 'channelName'),
            (n.custom = n.custom || ''),
            this.setSessionConfig({ signalStartTime: Date.now() }),
            this.nim[e](n)
              .then(e => {
                return Promise.resolve(e);
              })
              .catch(e => {
                return t.setSessionConfig({ signalEndTime: Date.now() }), Promise.reject(e);
              })
          );
        }),
        (f.baseJoinChannel = function(e) {
          const t = this;

          const n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return this.nim[e](n)
            .then(e => {
              return (
                t.setSessionConfig({ signalEndTime: Date.now() }),
                (t.signalInited = !0),
                (t.sessionMode = e.sessionMode = 'meeting'),
                t.parseAccountUidMap(e.accountUidMap),
                (e.uid = t.getUidWithAccount(t.nim.account)),
                Promise.resolve(e)
              );
            })
            .catch(e => {
              return t.setSessionConfig({ signalEndTime: Date.now() }), Promise.reject(e);
            });
        }),
        (f.format = function(e) {
          return (
            e.rtcServerMap &&
              ((e.rtcServerMap = JSON.parse(e.rtcServerMap)),
              (e.rtcServerMap =
                e.rtcServerMap.webrtcarray || [e.rtcServerMap.webrtc] || e.rtcServerMap)),
            e.wbServerMap &&
              ((e.wbServerMap = JSON.parse(e.wbServerMap)),
              (e.wbServerMap =
                e.wbServerMap.webrtcarray || [e.wbServerMap.webrtc] || e.wbServerMap)),
            e
          );
        }),
        (f.resetWhenHangup = function() {}),
        (e.exports = l);
    },
    ,
    ,
    function(e, t, n) {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e) {
          const t = e.util;
          return (i = t.notundef), o;
        });
      var i = void 0;
      function o(e) {
        i(e.enable) && (this.enable = e.enable ? 1 : 0),
          i(e.needBadge) && (this.needBadge = e.needBadge ? 1 : 0),
          i(e.needPushNick) && (this.needPushNick = e.needPushNick ? 1 : 0),
          i(e.pushContent) && (this.pushContent = `${e.pushContent}`),
          i(e.custom) && (this.custom = `${e.custom}`),
          i(e.pushPayload) && (this.pushPayload = `${e.pushPayload}`),
          i(e.sound) && (this.sound = `${e.sound}`),
          i(e.webrtcEnable) && (this.webrtcEnable = e.webrtcEnable ? 1 : 0),
          i(e.forceKeepCalling) && (this.forceKeepCalling = e.forceKeepCalling ? 1 : 0);
      }
      e.exports = t.default;
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(e, t, n) {
      Object.defineProperty(t, '__esModule', { value: !0 });
      const i = l(n(14));

      const o = l(n(22));

      const r = l(n(21));

      const a = l(n(163));

      const s = n(151);

      const c = n(52);

      const u = n(42);
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      let f = null;

      const d = (function(e) {
        function t(e) {
          (0, i.default)(this, t);
          const n = (0, o.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return (n.logger = e.logger || {}), n.resetStatus(), n;
        }
        return (0, r.default)(t, e), t;
      })(a.default);
      t.default = d;
      const p = d.prototype;
      (p.resetStatus = function() {
        this.nodeTimer && (clearInterval(this.nodeTimer), (this.nodeTimer = null)),
          (this.reConnectCount = 0),
          (this.recv_bytes = 0),
          (this.send_bytes = 0);
      }),
        (p.startSession = function(e) {
          return (this.imInfo = e || this.imInfo), this.connect();
        }),
        (p.connect = function() {
          const e = this;
          return this._startSession().then(t => {
            return (
              (f = t),
              (e.reConnectCount = 0),
              new Promise((t, n) => {
                e.wbLogin(),
                  e.once('LoginSuccess', n => {
                    e.logger.log('once LoginSuccess--\x3e', n), t(f);
                  }),
                  e.once('LoginFailed', t => {
                    e.logger.log('once LoginFailed--\x3e', t), n(t);
                  });
              })
            );
          });
        }),
        (p.destroy = function() {
          this.stopSession();
        }),
        (p.stopSession = function() {
          return this.wbLogout(), this._stopSession(), this.resetStatus(), Promise.resolve();
        }),
        (p.setSessionConfig = function() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          u.tool.merge(this.sessionConfig, e);
        }),
        (p.wbLogin = function() {
          const e = {
            token: this.imInfo.cid,
            client_type: 2,
            client_net: 2,
            client_os: 6,
            client_support_record: ~~this.sessionConfig.record,
          };
          this.sendMsg(s.serializeWb.gateWay.login, e);
        }),
        (p.wbLogout = function() {
          const e = {
            timestamp: Date.now(),
            recv_bytes: this.recv_bytes,
            send_bytes: this.send_bytes,
          };
          this.sendMsg(s.serializeWb.gateWay.logout, e);
        }),
        (p.sendData = function(e) {
          const t = e.data;

          const n = e.toAccount;

          let i = void 0 === n ? 0 : n;
          if (t) {
            this.sendStats(t);
            const o = { data: t };
            i === '0' && (i = +i),
              this.imInfo.sessionMode === 'p2p'
                ? (o.dst_client_id = (this.target && this.target.uid) || 0)
                : i && (o.dst_client_id = this.info.client.getUidWithAccount(i));
            const r = o.dst_client_id
              ? s.serializeWb.gateWay.toUser
              : s.serializeWb.gateWay.broadcast;
            this.sendMsg(r, o);
          }
        }),
        (p.sendMsg = function(e, t) {
          const n = {
            type: e,
            uid: +this.imInfo.uid,
            cid: +this.imInfo.cid,
            version: 31,
            content: { params: t },
          };
          this.signal && this.signal.send(n);
        }),
        (p.onSignalMessage = function(e) {
          if (
            (e && e.cid && e.uid && ((e.cid = +e.cid), (e.uid = +e.uid)), e.cid !== this.imInfo.cid)
          )
            return console.error('websocket message not belong to this session');
          const t = s.unserializeWb.gateWay[e.type];
          this[`on${t}`] && this[`on${t}`](e);
        }),
        (p.onloginAck = function(e) {
          const t = this;

          const n = e.content.params.auth_result - 0;
          if (n !== 200)
            return (
              this.logger.error('服务器验证不通过, 断开连接'),
              void this.emit('LoginFailed', { code: n, error: '服务器验证不通过, 断开连接' })
            );
          this.logger.log('白板服务器登录成功', e),
            this.emit('LoginSuccess'),
            this.imInfo.sessionMode === 'p2p' &&
              (this.logger.log('45s之内等待对方加入'),
              (this.userJoinTimeoutId = setTimeout(() => {
                t.userJoinTimeoutId &&
                  Object.keys(t.remoteNodeStatus).length === 0 &&
                  t.emit('error', { error: '点对点对方登录超时, 断开连接' });
              }, 45e3)));
        }),
        (p.onjoin = function(e) {
          this.logger.log(e);
          const t = e.content && e.content.params && e.content.params.client_id;
          this.startNodeMonitor(t),
            this.imInfo.sessionMode === 'p2p' &&
              ((this.target = { uid: t }),
              this.userJoinTimeoutId && clearTimeout(this.userJoinTimeoutId),
              (this.userJoinTimeoutId = 0)),
            this.emit('userJoined', { uid: t, cid: e.cid });
        }),
        (p.onkeep_alive_node = function(e) {
          const t = e.uid;

          const n = this.remoteNodeStatus;
          (n[t] = n[t] || { now: Date.now(), total: 45 }),
            (n[t].now = Date.now()),
            (n[t].total = 45);
        }),
        (p.onlogout = function(e) {
          this.logger.log('onlogout', e),
            this.emit('leaveChannel', { uid: e.uid, channelId: e.cid }),
            delete this.remoteNodeStatus[e.uid];
        }),
        (p.ontoUser = function(e) {
          this.onData(e);
        }),
        (p.onbroadcast = function(e) {
          this.onData(e);
        }),
        (p.onData = function(e) {
          const t = e.content && e.content.params && e.content.params.data;

          const n = e.uid;
          this.receiveStats(t);
          let i = void 0;
          try {
            i = JSON.parse(t || null);
          } catch (e) {
            i = t;
          }
          this.onkeep_alive_node({ uid: n }), this.emit('data', { uid: n, data: i });
        }),
        (p.startNodeMonitor = function(e) {
          const t = this;

          const n = this.remoteNodeStatus;
          (n[e] = n[e] || { now: Date.now(), total: 45 }),
            (n[e].now = Date.now()),
            this.nodeTimer ||
              (this.nodeTimer = setInterval(() => {
                const i = Date.now();
                Object.keys(n).map(o => {
                  if (i - n[o].now > 5e4 || n[o].total <= 0)
                    return (
                      t.logger.warn('节点45s超时离开:', o),
                      t.emit('leaveChannel', {
                        uid: o,
                        type: c.constantBB.HANGUP_TYPE_TIMEOUT,
                        channelId: t.imInfo.cid,
                      }),
                      delete t.remoteNodeStatus[e],
                      void delete n[o]
                    );
                  i - n[o].now > 5e3 && (n[o].total -= 5);
                });
              }, 5e3));
        }),
        (p.onSignalTimeout = function() {
          const e = this;
          this.emit('disconnected'),
            this.reConnectCount >= 3
              ? this.emit('signalClosed')
              : (this.reConnectCount++,
                this.emit('willReconnect', this.reConnectCount),
                this.logger.log(`3s后尝试第${this.reConnectCount}次重连服务器`),
                this._stopSignal(),
                setTimeout(() => {
                  e.imInfo &&
                    e.imInfo.serverAddrs &&
                    (e.logger.log(`开始第${e.reConnectCount}次重连服务器`),
                    f && e.imInfo.serverAddrs.unshift(f),
                    e
                      .connect()
                      .then(() => {
                        e.emit('connected', e.reConnectCount);
                      })
                      .catch(t => {
                        e.logger.error('reconnect error', t), e.onSignalTimeout();
                      }));
                }, 3e3));
        }),
        (p.sendStats = function(e) {
          this.send_bytes += e.length;
        }),
        (p.receiveStats = function(e) {
          this.recv_bytes += e.length;
        }),
        (e.exports = t.default);
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    function(e, t, n) {
      e.exports = {
        pushConfig: {
          1: 'enable',
          2: 'needBadge',
          3: 'needPushNick',
          4: 'pushContent',
          5: 'custom',
          6: 'pushPayload',
          7: 'sound',
          10: 'webrtcEnable',
        },
        liveOption: { 1: 'liveEnable', 2: 'webrtcEnable' },
        turnInfoTag: {
          0: 'channelId',
          1: 'tunnelServer',
          2: 'proxyServer',
          3: 'stunServer',
          4: 'type',
          5: 'dispatchServer',
        },
      };
    },
    function(e, t, n) {
      e.exports = {
        pushConfig: {
          enable: 1,
          needBadge: 2,
          needPushNick: 3,
          pushContent: 4,
          custom: 5,
          pushPayload: 6,
          sound: 7,
          webrtcEnable: 10,
        },
        liveOption: { liveEnable: 1, webrtcEnable: 2 },
        turnInfoTag: {
          channelId: 0,
          tunnelServer: 1,
          proxyServer: 2,
          stunServer: 3,
          type: 4,
          dispatchServer: 5,
        },
      };
    },
    function(e, t, n) {
      const i = {
        wb: {
          id: 11,
          initWhiteBoard: 1,
          wbKeepCalling: 2,
          wbCalleeAck: 4,
          wbNotifyCalleeAck: 5,
          wbHangup: 8,
          wbNotifyHangup: 9,
          wbControl: 10,
          wbNotifyControl: 11,
          wbNotifyRecord: 12,
          wbCreateChannel: 13,
          wbJoinChannel: 14,
          wbNotifyJoin: 15,
          wbQueryAccountUidMap: 16,
        },
      };

      const o = {
        initWhiteBoard: {
          sid: 11,
          cid: i.wb.initWhiteBoard,
          params: [
            { type: 'StrArray', name: 'type' },
            { type: 'StrArray', name: 'accounts' },
            { type: 'String', name: 'pushContent' },
            { type: 'String', name: 'custom' },
            { type: 'Property', name: 'pushConfig' },
          ],
        },
        wbKeepCalling: {
          sid: 11,
          cid: i.wb.wbKeepCalling,
          params: [{ type: 'StrArray', name: 'accounts' }, { type: 'long', name: 'channelId' }],
        },
        wbCalleeAck: {
          sid: 11,
          cid: i.wb.wbCalleeAck,
          params: [{ type: 'long', name: 'channelId' }, { type: 'bool', name: 'accepted' }],
        },
        wbHangup: { sid: 11, cid: i.wb.wbHangup, params: [{ type: 'long', name: 'channelId' }] },
        wbControl: {
          sid: 11,
          cid: i.wb.wbControl,
          params: [
            { type: 'long', name: 'channelId' },
            { type: 'byte', name: 'type' },
            { type: 'string', name: 'info' },
          ],
        },
        wbCreateChannel: {
          sid: 11,
          cid: i.wb.wbCreateChannel,
          params: [
            { type: 'String', name: 'channelName' },
            { type: 'String', name: 'custom' },
            { type: 'String', name: 'webrtcEnable' },
          ],
        },
        wbJoinChannel: {
          sid: 11,
          cid: i.wb.wbJoinChannel,
          params: [
            { type: 'String', name: 'channelName' },
            { type: 'Property', name: 'liveOption' },
          ],
        },
        wbQueryAccountUidMap: {
          sid: 11,
          cid: i.wb.wbQueryAccountUidMap,
          params: [{ type: 'String', name: 'channelName' }, { type: 'LongArray', name: 'uids' }],
        },
      };

      const r = {
        '11_1': {
          service: 'datatun',
          cmd: 'initWhiteBoard',
          response: [
            { type: 'Number', name: 'timetag' },
            { type: 'Number', name: 'uid' },
            { type: 'Number', name: 'channelId' },
            { type: 'PropertyArray', name: 'turnInfoTag' },
            { type: 'StrArray', name: 'keepCallingAccounts' },
            { type: 'StrLongMap', name: 'accountUidMap' },
            { type: 'bool', name: 'p2p' },
            { type: 'String', name: 'clientConfig' },
          ],
        },
        '11_2': {
          service: 'datatun',
          cmd: 'wbKeepCalling',
          response: [{ type: 'StrArr', name: 'accounts' }],
        },
        '11_3': {
          service: 'datatun',
          cmd: 'wbBeCalled',
          response: [
            { type: 'Number', name: 'timetag' },
            { type: 'String', name: 'account' },
            { type: 'Number', name: 'channelId' },
            { type: 'PropertyArray', name: 'turnInfoTag' },
            { type: 'StrLongMap', name: 'accountUidMap' },
            { type: 'bool', name: 'p2p' },
            { type: 'String', name: 'custom' },
            { type: 'Number', name: 'uid' },
            { type: 'String', name: 'clientConfig' },
            { type: 'Property', name: 'pushConfig' },
          ],
        },
        '11_4': { service: 'datatun', cmd: 'wbCalleeAck', response: [] },
        '11_5': {
          service: 'datatun',
          cmd: 'wbNotifyCalleeAck',
          response: [
            { type: 'long', name: 'channelId' },
            { type: 'String', name: 'account' },
            { type: 'bool', name: 'accepted' },
          ],
        },
        '11_6': {
          service: 'datatun',
          cmd: 'wbNotifyCalleeAckSync',
          response: [
            { type: 'String', name: 'timetag' },
            { type: 'long', name: 'channelId' },
            { type: 'byte', name: 'type' },
            { type: 'bool', name: 'accepted' },
            { type: 'byte', name: 'fromClientType' },
          ],
        },
        '11_7': { service: 'datatun', cmd: 'xxxx', response: [] },
        '11_8': { service: 'datatun', cmd: 'wbHangup', response: [] },
        '11_9': {
          service: 'datatun',
          cmd: 'wbNotifyHangup',
          response: [
            { type: 'long', name: 'timetag' },
            { type: 'long', name: 'channelId' },
            { type: 'String', name: 'account' },
          ],
        },
        '11_10': { service: 'datatun', cmd: 'wbControl', response: [] },
        '11_11': {
          service: 'datatun',
          cmd: 'wbNotifyControl',
          response: [
            { type: 'String', name: 'account' },
            { type: 'byte', name: 'type' },
            { type: 'string', name: 'info' },
            { type: 'long', name: 'channelId' },
          ],
        },
        '11_12': {
          service: 'datatun',
          cmd: 'wbNotifyRecord',
          response: [{ type: 'Property', name: 'msg' }],
        },
        '11_13': {
          service: 'datatun',
          cmd: 'wbCreateChannel',
          response: [{ type: 'long', name: 'timetag' }],
        },
        '11_14': {
          service: 'datatun',
          cmd: 'wbJoinChannel',
          response: [
            { type: 'long', name: 'timetag' },
            { type: 'long', name: 'channelId' },
            { type: 'StrLongMap', name: 'accountUidMap' },
            { type: 'Property', name: 'turnInfoTag' },
            { type: 'String', name: 'custom' },
          ],
        },
        '11_15': {
          service: 'datatun',
          cmd: 'wbNotifyJoin',
          response: [
            { type: 'Long', name: 'channelId' },
            { type: 'StrLongMap', name: 'accountUidMap' },
          ],
        },
        '11_16': { service: 'datatun', cmd: 'wbQueryAccountUidMap', response: [] },
      };
      e.exports = { idMap: i, cmdConfig: o, packetConfig: r };
    },
    function(e, t, n) {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = {
          getAccount() {
            return this.baseGetAccount();
          },
          getUid() {
            return this.baseGetUid();
          },
          isCurrentChannelId() {
            const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return this.baseIsCurrentChannelId(e);
          },
          notCurrentChannelId(e) {
            return !this.isCurrentChannelId(e);
          },
          startSession() {
            const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return this.sessionStarted
              ? Promise.resolve()
              : ((this.sessionStarted = !0),
                e.wssArr &&
                  (this.imInfo.serverAddrs =
                    e.wssArr.constructor === Array ? e.wssArr : [e.wssArr]),
                this.baseStartSession(),
                this.controller.startSession(this.imInfo));
          },
          stopSession() {
            return this.resetWhenHangup(), Promise.resolve();
          },
          leaveChannel() {
            this.stopSession();
          },
          sendData(e) {
            const t = e.data;

            const n = e.toAccount;

            const i = void 0 === n ? 0 : n;
            this.controller.sendData({ data: t, toAccount: i });
          },
        }),
        (e.exports = t.default);
    },
    function(e, t, n) {
      Object.defineProperty(t, '__esModule', { value: !0 });
      const i = p(n(14));

      const o = p(n(48));

      const r = p(n(22));

      const a = p(n(21));

      const s = p(n(70));

      const c = p(n(164));

      const u = p(n(353));

      const l = n(42);

      const f = n(52);

      const d = p(n(366));
      function p(e) {
        return e && e.__esModule ? e : { default: e };
      }
      s.default.CURRENT.SDK_TYPE = s.default.SDK_TYPE.WHITEBOARD;
      const h = (function(e) {
        function t(e) {
          (0, i.default)(this, t);
          const n = (0, r.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return n.initWB(), n;
        }
        return (
          (0, a.default)(t, e),
          (0, o.default)(t, [
            {
              key: 'initWB',
              value() {
                if (!this.nim) throw new Error({ error: '请传入nim实例' });
                this.initProtocol(), this.initController();
              },
            },
            {
              key: 'initProtocol',
              value() {
                const e = this.nim;
                e.on('wbBeCalled', this.onBeCalled.bind(this)),
                  e.on('wbNotifyCalleeAck', this.onCalleeAck.bind(this)),
                  e.on('wbNotifyHangup', this.onHangup.bind(this)),
                  e.on('wbControl', this.onControl.bind(this)),
                  e.on('wbNotifyCalleeAckSync', this.onCalleeAckSync.bind(this)),
                  e.on('wbNotifyJoin', this.onNotifyJoin.bind(this));
              },
            },
            {
              key: 'initController',
              value() {
                const e = this;
                (window.myWbContrl = this.controller = new u.default({
                  appKey: this.nim && this.nim.options.appKey,
                  debug: this.debug,
                  container: this.container,
                  logger: this.logger,
                  client: this,
                  isCustom: this.isCustom,
                })),
                  this.controller.on('userJoined', this.onUserJoin.bind(this)),
                  this.controller.on('signalClosed', t => {
                    e.emit('signalClosed', t);
                  }),
                  this.controller.on('willReconnect', t => {
                    e.emit('willReconnect', t);
                  }),
                  this.controller.on('disconnected', t => {
                    e.emit('disconnected', t);
                  }),
                  this.controller.on('connected', t => {
                    e.emit('connected', t);
                  }),
                  this.controller.on('leaveChannel', this.onUserLeft.bind(this)),
                  this.controller.on('error', t => {
                    e.emit('error', t);
                  }),
                  this.controller.on('customData', t => {
                    e.emit('customData', t);
                  }),
                  this.controller.on('data', t => {
                    e.emit('data', { account: e.getAccountWithUid(t.uid), data: t.data });
                  }),
                  window.addEventListener('beforeunload', this.beforeunload.bind(this));
              },
            },
            {
              key: 'destroy',
              value() {
                const e = this;
                this.controller.destroy(),
                  (this.controller = null),
                  (this.nim = null),
                  Object.keys(this).map(t => {
                    (e[t] = null), delete e[t];
                  });
              },
            },
            {
              key: 'serializeType',
              value(e, t) {
                return t && t !== f.constantBB.CALL_TYPE_NONE
                  ? t !== f.constantBB.CALL_TYPE_AUDIO
                    ? [e]
                    : [t, e]
                  : [e];
              },
            },
            {
              key: 'unserializeType',
              value(e) {
                const t = {};

                let n = -1;
                return (
                  e.map((e, i) => {
                    e === f.constantBB.CALL_TYPE_AUDIO &&
                      ((t.netcallType = f.constantBB.CALL_TYPE_AUDIO), (n = i));
                  }),
                  n !== -1 && e.splice(t.i, 1),
                  (t.type = e[0]),
                  t
                );
              },
            },
            {
              key: 'call',
              value() {
                const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

                const t = e.account;

                const n = e.type;

                const i = e.netcallType;

                const o = e.pushConfig;

                const r = e.sessionConfig;
                return (
                  (this.calling = !0),
                  (this.isCaller = !0),
                  (this.callee = t),
                  (this.target.account = t),
                  r && ((r.signalStartTime = Date.now()), this.controller.setSessionConfig(r)),
                  this.initWhiteBoard({ type: n, netcallType: i, pushConfig: o })
                );
              },
            },
            {
              key: 'initWhiteBoard',
              value() {
                const e = this;

                const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

                const n = t.type;

                const i = t.netcallType;

                const o = t.pushConfig;
                (this.type = n),
                  (this.netcallType = i || f.constantBB.CALL_TYPE_NONE),
                  this.controller.setSessionConfig({ signalStartTime: Date.now() });
                const r = {
                  type: this.serializeType(this.type, this.netcallType),
                  accounts: [this.callee],
                  pushConfig: o,
                  webrtcEnable: !0,
                };
                return this.nim
                  .initWhiteBoard(r)
                  .then(t => {
                    (e.signalInited = !0),
                      (e.sessionMode = 'p2p'),
                      e.logger.log('initWhiteBoard:', t),
                      (e.callerInfo = e.wbFormat(t)),
                      (e.imInfo = e.callerInfo),
                      (e.imInfo.sessionMode = e.sessionMode),
                      (e.channelId = t.channelId),
                      (e.imInfo.role = 0);
                  })
                  .catch(t => {
                    return (
                      e.controller.setSessionConfig({ signalEndTime: Date.now() }),
                      e.resetWhenHangup(),
                      Promise.reject(t)
                    );
                  });
              },
            },
            {
              key: 'response',
              value() {
                const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return (e.fn = 'wbCalleeAck'), this.baseResponse(e);
              },
            },
            {
              key: 'control',
              value() {
                const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return (e.fn = 'wbControl'), this.baseControl(e);
              },
            },
            {
              key: 'hangup',
              value() {
                const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (e.fn = 'wbHangup'),
                  (e.recordType = 'cancelWhiteBoardBeforeAccept'),
                  this.baseHangup(e);
              },
            },
            {
              key: 'createChannel',
              value(e) {
                return e.channelName
                  ? ((e.custom = e.custom || ''),
                    this.baseCreateChannel('wbCreateChannel', e)
                      .then(e => {
                        return Promise.resolve(e);
                      })
                      .catch(e => {
                        return Promise.reject(e);
                      }))
                  : Promise.reject('缺少参数 channelName');
              },
            },
            {
              key: 'joinChannel',
              value(e) {
                const t = this;
                if (this.signalInited) return Promise.reject('已经加入房间');
                if (!e.channelName) return Promise.reject('缺少参数 channelName');
                const n = e.sessionConfig;
                return (
                  n &&
                    (l.tool.merge(this, { sessionConfig: n }),
                    this.controller.setSessionConfig(n),
                    this.controller.setSessionConfig({ signalStartTime: Date.now() })),
                  this.baseJoinChannel('wbJoinChannel', { channelName: e.channelName })
                    .then(i => {
                      let o = void 0;
                      return (
                        i.turnInfoTag &&
                          (o =
                            (i.turnInfoTag.dispatchServer &&
                              JSON.parse(i.turnInfoTag.dispatchServer)) ||
                            i.turnInfoTag.tunnelServer),
                        o && o.constructor === String && (o = o.split(';')),
                        o && o.constructor === Object && (o = o.webrtcarray),
                        (i.serverAddrs = o || []),
                        (t.type = i.type = i.type),
                        (i.account = t.nim.account),
                        (i.sessionConfig = n),
                        (t.imInfo = i),
                        (t.imInfo.role = void 0 === e.role ? 0 : e.role),
                        setTimeout(() => {
                          t.sessionStarted || t.startSession(e);
                        }, 200),
                        Promise.resolve({ uid: i.uid, account: t.nim.account, type: i.type })
                      );
                    })
                    .catch(e => {
                      return Promise.reject(e);
                    })
                );
              },
            },
            {
              key: 'onBeCalled',
              value(e) {
                (e = this.wbFormat(e)),
                  this.channelId ||
                    ((this.signalInited = !0),
                    (this.channelId = e.channelId),
                    (this.beCalledInfo = e),
                    this.logger.log('beCalling', e)),
                  this.emit('beCalling', e);
              },
            },
            {
              key: 'wbFormat',
              value(e) {
                const t = e.turnInfoTag;
                return t && t.constructor === Array
                  ? (t.map(t => {
                      /[01]/.test(t.type)
                        ? ((e.netcallType = t.type),
                          (e.rtcServerMap = t.dispatchServer),
                          (e.serverMap = JSON.parse(JSON.stringify(t.dispatchServer))))
                        : ((e.type = t.type), (e.wbServerMap = t.dispatchServer));
                    }),
                    (e.netcallType = e.netcallType || f.constantBB.CALL_TYPE_NONE),
                    ((e = this.format(e)).serverAddrs =
                      JSON.parse(JSON.stringify(e.wbServerMap)) || []),
                    e)
                  : e;
              },
            },
            {
              key: 'resetWhenHangup',
              value() {
                this.controller.stopSession(), this.resetStatus(), (this.sessionStarted = !1);
              },
            },
          ]),
          t
        );
      })(c.default);

      let b = h.prototype;
      (b = Object.assign(b, d.default)), (t.default = h), (e.exports = t.default);
    },
    function(e, t, n) {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function() {
          return !!WebSocket;
        }),
        (e.exports = t.default);
    },
    function(e, t, n) {
      const i = {
        install(e) {
          const t = e.Protocol.fn;
          (t.processDatatun = function(e) {
            switch (e.cmd) {
              case 'initWhiteBoard':
                this.onWbInit(e);
                break;
              case 'wbBeCalled':
                this.onWbBeCalled(e);
                break;
              case 'wbKeepCalling':
                this.onWbKeepCalling(e);
                break;
              case 'wbCalleeAck':
                break;
              case 'wbNotifyCalleeAck':
                this.onWbNotifyCalleeAck(e);
                break;
              case 'wbHangup':
                break;
              case 'wbNotifyHangup':
                this.onWbNotifyHangup(e);
                break;
              case 'wbNotifyControl':
                this.onWbControl(e);
                break;
              case 'wbNotifyCalleeAckSync':
                this.onWbNotifyCalleeAckSync(e);
                break;
              case 'wbNotifyRecord':
              case 'wbCreateChannel':
                break;
              case 'wbJoinChannel':
                this.wbJoinChannel(e);
                break;
              case 'wbNotifyJoin':
                this.onWbNotifyJoin(e);
            }
          }),
            (t.onWbInit = function(e) {
              if (!e.error) {
                const t = e.obj.type;
                (e.obj = e.content),
                  (e.obj.type = t),
                  (e.obj.accounts = e.obj.keepCallingAccounts),
                  this.setCurrentWhiteBoard(e.obj.channelId),
                  this.wbKeepCalling(e);
              }
            }),
            (t.setCurrentWhiteBoard = function(e) {
              this.currentWhiteBoardChannelId = e;
            }),
            (t.onWbKeepCalling = function(e) {
              e.error || (e.content.accounts.length && this.wbKeepCalling(e));
            }),
            (t.wbKeepCalling = function(e) {
              const t = this;

              const n = e.obj;

              const i = n.type;

              const o = n.accounts;

              const r = n.channelId;
              o &&
                o.length &&
                setTimeout(() => {
                  t.currentWhiteBoardChannelId &&
                    t.currentWhiteBoardChannelId === r &&
                    t.api.wbKeepCalling({ type: i, accounts: o, channelId: r }).catch(() => {});
                }, 3e3);
            }),
            (t.onWbBeCalled = function(e) {
              e.error || this.emitAPI({ type: 'wbBeCalled', obj: e.content });
            }),
            (t.onWbNotifyCalleeAck = function(e) {
              e.error || this.emitAPI({ type: 'wbNotifyCalleeAck', obj: e.content });
            }),
            (t.onWbNotifyHangup = function(e) {
              e.error || this.emitAPI({ type: 'wbNotifyHangup', obj: e.content });
            }),
            (t.onWbControl = function(e) {
              e.error || this.emitAPI({ type: 'wbControl', obj: e.content });
            }),
            (t.onWbNotifyCalleeAckSync = function(e) {
              e.error || this.emitAPI({ type: 'wbNotifyCalleeAckSync', obj: e.content });
            }),
            (t.onWbNotifyJoin = function(e) {
              e.error || this.emitAPI({ type: 'wbNotifyJoin', obj: e.content });
            }),
            (t.wbJoinChannel = function(e) {
              e.obj = e.content;
            });
        },
      };
      e.exports = i;
    },
    function(e, t, n) {
      const i = n(167);

      const o = {
        install(e) {
          const t = e.fn;

          const n = e.util;

          const o = i({ util: n });
          (t.initWhiteBoard = function(e) {
            return (
              n.verifyOptions(e, 'type accounts', 'wb::initWhiteBoard'),
              (e.pushContent = ''),
              (e.custom = ''),
              e.pushConfig || (e.pushConfig = {}),
              (e.pushConfig.webrtcEnable = e.webrtcEnable),
              (e.pushConfig = new o(e.pushConfig)),
              this.cbAndSendCmd('initWhiteBoard', e)
            );
          }),
            (t.wbKeepCalling = function(e) {
              return (
                n.verifyOptions(e, 'type accounts channelId', 'wb::wbKeepCalling'),
                this.cbAndSendCmd('wbKeepCalling', e)
              );
            }),
            (t.wbCalleeAck = function(e) {
              return (
                n.verifyOptions(e, 'account channelId type accepted', 'wb::wbCalleeAck'),
                this.cbAndSendCmd('wbCalleeAck', e)
              );
            }),
            (t.wbHangup = function(e) {
              return (
                n.verifyOptions(e, 'channelId', 'wb::wbHangup'), this.cbAndSendCmd('wbHangup', e)
              );
            }),
            (t.wbControl = function(e) {
              return (
                n.verifyOptions(e, 'channelId type', 'wb::wbControl'),
                (e.info = e.info || ''),
                this.cbAndSendCmd('wbControl', e)
              );
            }),
            (t.wbCreateChannel = function(e) {
              return this.cbAndSendCmd('wbCreateChannel', e);
            }),
            (t.wbJoinChannel = function(e) {
              return (
                n.verifyOptions(e, 'channelName', 'wb::wbJoinChannel'),
                n.verifyBooleanWithDefault(e, 'liveEnable', !1, '', 'wb::wbJoinChannel'),
                n.verifyBooleanWithDefault(e, 'webrtcEnable', !1, '', 'wb::wbJoinChannel'),
                this.cbAndSendCmd('wbJoinChannel', {
                  channelName: e.channelName,
                  liveOption: {
                    liveEnable: e.liveEnable ? 1 : 0,
                    webrtcEnable: e.webrtcEnable ? 1 : 0,
                  },
                })
              );
            }),
            (t.wbQueryAccountUidMap = function(e, t) {
              return this.cbAndSendCmd('wbQueryAccountUidMap', { channelName: e, uids: t });
            });
        },
      };
      e.exports = o;
    },
    function(e, t, n) {
      const i = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n(67));
      n(140);
      const o = n(370);

      const r = n(369);

      const a = n(368);

      const s = n(367);

      const c = (n(353), n(52));

      const u = n(365);

      const l = n(364);

      const f = n(363);

      const d = (0, i.default)({}, c.constantBB, {
        install(e, t) {
          o.install(e, t),
            r.install(e, t),
            e.parser.mixin({ configMap: u, serializeMap: l, unserializeMap: f });
        },
        getInstance(e) {
          return new s(e);
        },
        destroy(e) {
          e && (e.destroy(), (e = null));
        },
        checkCompatibility() {
          return a();
        },
      });
      e.exports = d;
    },
  ]);
});
