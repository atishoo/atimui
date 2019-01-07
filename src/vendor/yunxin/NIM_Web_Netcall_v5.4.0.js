!(function(e, t) {
  typeof exports === 'object' && typeof module === 'object'
    ? (module.exports = t())
    : typeof define === 'function' && define.amd
      ? define([], t)
      : typeof exports === 'object'
        ? (exports.Netcall = t())
        : (e.Netcall = t());
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
      n((n.s = 381))
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

        let d;

        const h = e & c.F;

        const f = e & c.G;

        const p = e & c.S;

        const m = e & c.P;

        const v = e & c.B;

        const g = e & c.W;

        const _ = f ? o : o[t] || (o[t] = {});

        const y = _.prototype;

        const b = f ? i : p ? i[t] : (i[t] || {}).prototype;
        for (u in (f && (n = t), n))
          ((l = !h && b && void 0 !== b[u]) && s(_, u)) ||
            ((d = l ? b[u] : n[u]),
            (_[u] =
              f && typeof b[u] !== 'function'
                ? n[u]
                : v && l
                  ? r(d, i)
                  : g && b[u] == d
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
                      })(d)
                    : m && typeof d === 'function'
                      ? r(Function.call, d)
                      : d),
            m && (((_.virtual || (_.virtual = {}))[u] = d), e & c.R && y && !y[u] && a(y, u, d)));
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
            return (e = p(e)), /^(?:webOS|i(?:OS|P))/.test(e) ? e : c(e);
          }
          function l(e, t) {
            for (const n in e) a.call(e, n) && t(e[n], n, e);
          }
          function d(e) {
            return e == null ? c(e) : s.call(e).slice(8, -1);
          }
          function h(e) {
            return String(e).replace(/([ -])(?!$)/g, '$1?');
          }
          function f(e, t) {
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
          function p(e) {
            return String(e).replace(/^ +| +$/g, '');
          }
          return (function t(n) {
            let r = e;

            const a =
              n &&
              (void 0 === n ? 'undefined' : (0, i.default)(n)) === 'object' &&
              d(n) != 'String';
            a && ((r = n), (n = null));
            const c = r.navigator || {};

            const m = c.userAgent || '';
            n || (n = m);
            let v;

            let g;

            const _ = a
              ? !!c.likeChrome
              : /\bChrome\b/.test(n) && !/internal|\n/i.test(s.toString());

            const y = a ? 'Object' : 'ScriptBridgingProxyObject';

            const b = a ? 'Object' : 'Environment';

            const S = a && r.java ? 'JavaPackage' : d(r.java);

            const C = a ? 'Object' : 'RuntimeObject';

            const A = /\bJava/.test(S) && r.java;

            const T = A && d(r.environment) == b;

            const O = A ? 'a' : 'α';

            const E = A ? 'b' : 'β';

            const I = r.document || {};

            let x = r.operamini || r.opera;

            var M = o.test((M = a && x ? x['[[Class]]'] : d(x))) ? M : (x = null);

            let k = n;

            let w = [];

            let L = null;

            const N = n == m;

            let P = N && x && typeof x.version === 'function' && x.version();

            let R = (function(e) {
              return f(e, (e, t) => {
                return e || (RegExp(`\\b${t.pattern || h(t)}\\b`, 'i').exec(n) && (t.label || t));
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

            let D = (function(e) {
              return f(e, (e, t) => {
                return e || (RegExp(`\\b${t.pattern || h(t)}\\b`, 'i').exec(n) && (t.label || t));
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

            let j = F([
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

            let U = (function(e) {
              return f(e, (e, t, i) => {
                return (
                  e ||
                  ((t[j] ||
                    t[/^[a-z]+(?: +[a-z]+\b)*/i.exec(j)] ||
                    RegExp(`\\b${h(i)}(?:\\b|\\w*\\d)`, 'i').exec(n)) &&
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

            let V = (function(e) {
              return f(e, (e, t) => {
                const i = t.pattern || h(t);
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
            function F(e) {
              return f(e, (e, t) => {
                const i = t.pattern || h(t);
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
              (R && (R = [R]),
              U && !j && (j = F([U])),
              (v = /\bGoogle TV\b/.exec(j)) && (j = v[0]),
              /\bSimulator\b/i.test(n) && (j = `${j ? `${j} ` : ''}Simulator`),
              D == 'Opera Mini' &&
                /\bOPiOS\b/.test(n) &&
                w.push('running in Turbo/Uncompressed mode'),
              D == 'IE' && /\blike iPhone OS\b/.test(n)
                ? ((U = (v = t(n.replace(/like iPhone OS/, ''))).manufacturer), (j = v.product))
                : /^iP/.test(j)
                  ? (D || (D = 'Safari'),
                    (V = `iOS${
                      (v = / OS ([\d_]+)/i.exec(n)) ? ` ${v[1].replace(/_/g, '.')}` : ''
                    }`))
                  : D != 'Konqueror' || /buntu/i.test(V)
                    ? (U &&
                        U != 'Google' &&
                        ((/Chrome/.test(D) && !/\bMobile Safari\b/i.test(n)) ||
                          /\bVita\b/.test(j))) ||
                      (/\bAndroid\b/.test(V) && /^Chrome/.test(D) && /\bVersion\//i.test(n))
                      ? ((D = 'Android Browser'), (V = /\bAndroid\b/.test(V) ? V : 'Android'))
                      : D == 'Silk'
                        ? (/\bMobi/i.test(n) || ((V = 'Android'), w.unshift('desktop mode')),
                          /Accelerated *= *true/i.test(n) && w.unshift('accelerated'))
                        : D == 'PaleMoon' && (v = /\bFirefox\/([\d.]+)\b/.exec(n))
                          ? w.push(`identifying as Firefox ${v[1]}`)
                          : D == 'Firefox' && (v = /\b(Mobile|Tablet|TV)\b/i.exec(n))
                            ? (V || (V = 'Firefox OS'), j || (j = v[1]))
                            : !D ||
                              (v = !/\bMinefield\b/i.test(n) && /\b(?:Firefox|Safari)\b/.exec(D))
                              ? (D &&
                                  !j &&
                                  /[\/,]|^[^(]+?\)/.test(n.slice(n.indexOf(`${v}/`) + 8)) &&
                                  (D = null),
                                (v = j || U || V) &&
                                  (j ||
                                    U ||
                                    /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(V)) &&
                                  (D = `${/[a-z]+(?: Hat)?/i.exec(
                                    /\bAndroid\b/.test(V) ? V : v
                                  )} Browser`))
                              : D == 'Electron' &&
                                (v = (/\bChrome\/([\d.]+)\b/.exec(n) || 0)[1]) &&
                                w.push(`Chromium ${v}`)
                    : (V = 'Kubuntu'),
              P ||
                (P = (function(e) {
                  return f(e, (e, t) => {
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
                  h(D),
                  '(?:Firefox|Minefield|NetFront)',
                ])),
              (v =
                (R == 'iCab' && parseFloat(P) > 3
                  ? 'WebKit'
                  : /\bOpera\b/.test(D) && (/\bOPR\b/.test(n) ? 'Blink' : 'Presto')) ||
                (/\b(?:Midori|Nook|Safari)\b/i.test(n) &&
                  !/^(?:Trident|EdgeHTML)$/.test(R) &&
                  'WebKit') ||
                (!R && /\bMSIE\b/i.test(n) && (V == 'Mac OS' ? 'Tasman' : 'Trident')) ||
                (R == 'WebKit' && /\bPlayStation\b(?! Vita\b)/i.test(D) && 'NetFront')) &&
                (R = [v]),
              D == 'IE' && (v = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(n) || 0)[1])
                ? ((D += ' Mobile'),
                  (V = `Windows Phone ${/\+$/.test(v) ? v : `${v}.x`}`),
                  w.unshift('desktop mode'))
                : /\bWPDesktop\b/i.test(n)
                  ? ((D = 'IE Mobile'),
                    (V = 'Windows Phone 8.x'),
                    w.unshift('desktop mode'),
                    P || (P = (/\brv:([\d.]+)/.exec(n) || 0)[1]))
                  : D != 'IE' &&
                    R == 'Trident' &&
                    (v = /\brv:([\d.]+)/.exec(n)) &&
                    (D && w.push(`identifying as ${D}${P ? ` ${P}` : ''}`), (D = 'IE'), (P = v[1])),
              N)
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
                  (A &&
                    ((k = (v = A.lang.System).getProperty('os.arch')),
                    (V = V || `${v.getProperty('os.name')} ${v.getProperty('os.version')}`)),
                  T)
                ) {
                  try {
                    (P = r.require('ringo/engine').version.join('.')), (D = 'RingoJS');
                  } catch (e) {
                    (v = r.system) &&
                      v.global.system == r.system &&
                      ((D = 'Narwhal'), V || (V = v[0].os || null));
                  }
                  D || (D = 'Rhino');
                } else
                  (0, i.default)(r.process) === 'object' &&
                    !r.process.browser &&
                    (v = r.process) &&
                    ((0, i.default)(v.versions) === 'object' &&
                      (typeof v.versions.electron === 'string'
                        ? (w.push(`Node ${v.versions.node}`),
                          (D = 'Electron'),
                          (P = v.versions.electron))
                        : typeof v.versions.nw === 'string' &&
                          (w.push(`Chromium ${P}`, `Node ${v.versions.node}`),
                          (D = 'NW.js'),
                          (P = v.versions.nw))),
                    D ||
                      ((D = 'Node.js'),
                      (k = v.arch),
                      (V = v.platform),
                      (P = (P = /[\d.]+/.exec(v.version)) ? P[0] : null)));
              else
                d((v = r.runtime)) == y
                  ? ((D = 'Adobe AIR'), (V = v.flash.system.Capabilities.os))
                  : d((v = r.phantom)) == C
                    ? ((D = 'PhantomJS'),
                      (P = (v = v.version || null) && `${v.major}.${v.minor}.${v.patch}`))
                    : typeof I.documentMode === 'number' && (v = /\bTrident\/(\d+)/i.exec(n))
                      ? ((P = [P, I.documentMode]),
                        (v = +v[1] + 4) != P[1] &&
                          (w.push(`IE ${P[1]} mode`), R && (R[1] = ''), (P[1] = v)),
                        (P = D == 'IE' ? String(P[1].toFixed(1)) : P[0]))
                      : typeof I.documentMode === 'number' &&
                        /^(?:Chrome|Firefox)\b/.test(D) &&
                        (w.push(`masking as ${D} ${P}`),
                        (D = 'IE'),
                        (P = '11.0'),
                        (R = ['Trident']),
                        (V = 'Windows'));
              V = V && u(V);
            }
            if (
              (P &&
                (v =
                  /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(P) ||
                  /(?:alpha|beta)(?: ?\d)?/i.exec(`${n};${N && c.appMinorVersion}`) ||
                  (/\bMinefield\b/i.test(n) && 'a')) &&
                ((L = /b/i.test(v) ? 'beta' : 'alpha'),
                (P =
                  P.replace(RegExp(`${v}\\+?$`), '') +
                  (L == 'beta' ? E : O) +
                  (/\d+\+?/.exec(v) || ''))),
              D == 'Fennec' || (D == 'Firefox' && /\b(?:Android|Firefox OS)\b/.test(V)))
            )
              D = 'Firefox Mobile';
            else if (D == 'Maxthon' && P) P = P.replace(/\.[\d.]+/, '.x');
            else if (/\bXbox\b/i.test(j))
              j == 'Xbox 360' && (V = null),
                j == 'Xbox 360' && /\bIEMobile\b/.test(n) && w.unshift('mobile mode');
            else if (
              (!/^(?:Chrome|IE|Opera)$/.test(D) && (!D || j || /Browser|Mobi/.test(D))) ||
              (V != 'Windows CE' && !/Mobi/i.test(n))
            )
              if (D == 'IE' && N)
                try {
                  r.external === null && w.unshift('platform preview');
                } catch (e) {
                  w.unshift('embedded');
                }
              else
                (/\bBlackBerry\b/.test(j) || /\bBB10\b/.test(n)) &&
                (v = (RegExp(`${j.replace(/ +/g, ' *')}/([.\\d]+)`, 'i').exec(n) || 0)[1] || P)
                  ? ((V = `${
                      (v = [v, /BB10/.test(n)])[1]
                        ? ((j = null), (U = 'BlackBerry'))
                        : 'Device Software'
                    } ${v[0]}`),
                    (P = null))
                  : this != l &&
                    j != 'Wii' &&
                    ((N && x) ||
                      (/Opera/.test(D) && /\b(?:MSIE|Firefox)\b/i.test(n)) ||
                      (D == 'Firefox' && /\bOS X (?:\d+\.){2,}/.test(V)) ||
                      (D == 'IE' &&
                        ((V && !/^Win/.test(V) && P > 5.5) ||
                          (/\bWindows XP\b/.test(V) && P > 8) ||
                          (P == 8 && !/\bTrident\b/.test(n))))) &&
                    !o.test((v = t.call(l, `${n.replace(o, '')};`))) &&
                    v.name &&
                    ((v = `ing as ${v.name}${(v = v.version) ? ` ${v}` : ''}`),
                    o.test(D)
                      ? (/\bIE\b/.test(v) && V == 'Mac OS' && (V = null), (v = `identify${v}`))
                      : ((v = `mask${v}`),
                        (D = M ? u(M.replace(/([a-z])([A-Z])/g, '$1 $2')) : 'Opera'),
                        /\bIE\b/.test(v) && (V = null),
                        N || (P = null)),
                    (R = ['Presto']),
                    w.push(v));
            else D += ' Mobile';
            (v = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(n) || 0)[1]) &&
              ((v = [parseFloat(v.replace(/\.(\d)$/, '.0$1')), v]),
              D == 'Safari' && v[1].slice(-1) == '+'
                ? ((D = 'WebKit Nightly'), (L = 'alpha'), (P = v[1].slice(0, -1)))
                : (P != v[1] && P != (v[2] = (/\bSafari\/([\d.]+\+?)/i.exec(n) || 0)[1])) ||
                  (P = null),
              (v[1] = (/\bChrome\/([\d.]+)/i.exec(n) || 0)[1]),
              v[0] == 537.36 &&
                v[2] == 537.36 &&
                parseFloat(v[1]) >= 28 &&
                R == 'WebKit' &&
                (R = ['Blink']),
              N && (_ || v[1])
                ? (R && (R[1] = 'like Chrome'),
                  (v =
                    v[1] ||
                    ((v = v[0]) < 530
                      ? 1
                      : v < 532
                        ? 2
                        : v < 532.05
                          ? 3
                          : v < 533
                            ? 4
                            : v < 534.03
                              ? 5
                              : v < 534.07
                                ? 6
                                : v < 534.1
                                  ? 7
                                  : v < 534.13
                                    ? 8
                                    : v < 534.16
                                      ? 9
                                      : v < 534.24
                                        ? 10
                                        : v < 534.3
                                          ? 11
                                          : v < 535.01
                                            ? 12
                                            : v < 535.02
                                              ? '13+'
                                              : v < 535.07
                                                ? 15
                                                : v < 535.11
                                                  ? 16
                                                  : v < 535.19
                                                    ? 17
                                                    : v < 536.05
                                                      ? 18
                                                      : v < 536.1
                                                        ? 19
                                                        : v < 537.01
                                                          ? 20
                                                          : v < 537.11
                                                            ? '21+'
                                                            : v < 537.13
                                                              ? 23
                                                              : v < 537.18
                                                                ? 24
                                                                : v < 537.24
                                                                  ? 25
                                                                  : v < 537.36
                                                                    ? 26
                                                                    : R != 'Blink'
                                                                      ? '27'
                                                                      : '28')))
                : (R && (R[1] = 'like Safari'),
                  (v =
                    (v = v[0]) < 400
                      ? 1
                      : v < 500
                        ? 2
                        : v < 526
                          ? 3
                          : v < 533
                            ? 4
                            : v < 534
                              ? '4+'
                              : v < 535
                                ? 5
                                : v < 537
                                  ? 6
                                  : v < 538
                                    ? 7
                                    : v < 601
                                      ? 8
                                      : '8')),
              R && (R[1] += ` ${(v += typeof v === 'number' ? '.x' : /[.+]/.test(v) ? '' : '+')}`),
              D == 'Safari' && (!P || parseInt(P) > 45) && (P = v)),
              D == 'Opera' && (v = /\bzbov|zvav$/.exec(V))
                ? ((D += ' '),
                  w.unshift('desktop mode'),
                  v == 'zvav' ? ((D += 'Mini'), (P = null)) : (D += 'Mobile'),
                  (V = V.replace(RegExp(` *${v}$`), '')))
                : D == 'Safari' &&
                  /\bChrome\b/.exec(R && R[1]) &&
                  (w.unshift('desktop mode'),
                  (D = 'Chrome Mobile'),
                  (P = null),
                  /\bOS X\b/.test(V) ? ((U = 'Apple'), (V = 'iOS 4.3+')) : (V = null)),
              P &&
                P.indexOf((v = /[\d.]+$/.exec(V))) == 0 &&
                n.indexOf(`/${v}-`) > -1 &&
                (V = p(V.replace(v, ''))),
              R &&
                !/\b(?:Avant|Nook)\b/.test(D) &&
                (/Browser|Lunascape|Maxthon/.test(D) ||
                  (D != 'Safari' && /^iOS/.test(V) && /\bSafari\b/.test(R[1])) ||
                  (/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(
                    D
                  ) &&
                    R[1])) &&
                (v = R[R.length - 1]) &&
                w.push(v),
              w.length && (w = [`(${w.join('; ')})`]),
              U && j && j.indexOf(U) < 0 && w.push(`on ${U}`),
              j && w.push((/^on /.test(w[w.length - 1]) ? '' : 'on ') + j),
              V &&
                ((v = / ([\d.+]+)$/.exec(V)),
                (g = v && V.charAt(V.length - v[0].length - 1) == '/'),
                (V = {
                  architecture: 32,
                  family: v && !g ? V.replace(v[0], '') : V,
                  version: v ? v[1] : null,
                  toString() {
                    const e = this.version;
                    return (
                      this.family +
                      (e && !g ? ` ${e}` : '') +
                      (this.architecture == 64 ? ' 64-bit' : '')
                    );
                  },
                })),
              (v = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(k)) && !/\bi686\b/i.test(k)
                ? (V &&
                    ((V.architecture = 64), (V.family = V.family.replace(RegExp(` *${v}`), ''))),
                  D &&
                    (/\bWOW64\b/i.test(n) ||
                      (N &&
                        /\w(?:86|32)$/.test(c.cpuClass || c.platform) &&
                        !/\bWin64; x64\b/i.test(n))) &&
                    w.unshift('32-bit'))
                : V &&
                  /^OS X/.test(V.family) &&
                  D == 'Chrome' &&
                  parseFloat(P) >= 39 &&
                  (V.architecture = 64),
              n || (n = null);
            const W = {};
            return (
              (W.description = n),
              (W.layout = R && R[0]),
              (W.manufacturer = U),
              (W.name = D),
              (W.prerelease = L),
              (W.product = j),
              (W.ua = n),
              (W.version = D && P),
              (W.os = V || {
                architecture: null,
                family: null,
                version: null,
                toString() {
                  return 'null';
                },
              }),
              (W.parse = t),
              (W.toString = function() {
                return this.description || '';
              }),
              W.version && w.unshift(P),
              W.name && w.unshift(D),
              V &&
                D &&
                (V != String(V).split(' ')[0] || (V != D.split(' ')[0] && !j)) &&
                w.push(j ? `(${V})` : `on ${V}`),
              w.length && (W.description = w.join(' ')),
              W
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
          (t.getSecondStr = d),
          (t.getMillisecondStr = h),
          (t.dateFromDateTimeLocal = function(e) {
            return (e = `${e}`), new Date(e.replace(/-/g, '/').replace('T', ' '));
          }),
          (t.getClass = f),
          (t.typeOf = p),
          (t.isString = m),
          (t.isNumber = function(e) {
            return p(e) === 'number';
          }),
          (t.isBoolean = function(e) {
            return p(e) === 'boolean';
          }),
          (t.isArray = v),
          (t.isFunction = g),
          (t.isDate = _),
          (t.isRegExp = function(e) {
            return p(e) === 'regexp';
          }),
          (t.isError = function(e) {
            return p(e) === 'error';
          }),
          (t.isnull = y),
          (t.notnull = b),
          (t.undef = S),
          (t.notundef = C),
          (t.exist = A),
          (t.notexist = T),
          (t.isObject = O),
          (t.isEmpty = function(e) {
            return T(e) || ((m(e) || v(e)) && e.length === 0);
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
            if (!A(n)) return e.getAttribute(`data-${t}`);
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
            g(e.onload) &&
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
            A(e) && (document.documentElement.scrollTop = document.body.scrollTop = e);
            return (
              window.pageYOffset ||
              document.documentElement.scrollTop ||
              document.body.scrollTop ||
              0
            );
          }),
          (t.forOwn = k),
          (t.mixin = w),
          (t.isJSON = L),
          (t.parseJSON = function e(t) {
            try {
              L(t) && (t = JSON.parse(t)),
                O(t) &&
                  k(t, (n, i) => {
                    switch (p(i)) {
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
                w(e, t);
              }),
              e
            );
          }),
          (t.fillUndef = function(e, t) {
            return (
              k(t, (t, n) => {
                S(e[t]) && (e[t] = n);
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
              k(e, (n, i) => {
                A(t[n]) && (e[n] = t[n]);
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
          (t.object2string = N),
          (t.genUrlSep = function(e) {
            return e.indexOf('?') < 0 ? '?' : '&';
          }),
          (t.object2query = function(e) {
            return N(e, '&', !0);
          }),
          (t.isFileInput = P),
          (t.getKeys = function(e, t) {
            const n = Object.keys(e);
            t &&
              n.sort((t, n) => {
                const i = P(e[t]);

                const o = P(e[n]);
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
        function d(e) {
          return r(e.getSeconds());
        }
        function h(e) {
          return r(e.getMilliseconds(), 3);
        }
        t.format = (function() {
          const e = /yyyy|MM|dd|hh|mm|ss|SSS/g;

          const t = { yyyy: a, MM: s, dd: c, hh: u, mm: l, ss: d, SSS: h };
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
        function f(e) {
          return Object.prototype.toString.call(e).slice(8, -1);
        }
        function p(e) {
          return f(e).toLowerCase();
        }
        function m(e) {
          return p(e) === 'string';
        }
        function v(e) {
          return p(e) === 'array';
        }
        function g(e) {
          return p(e) === 'function';
        }
        function _(e) {
          return p(e) === 'date';
        }
        function y(e) {
          return e === null;
        }
        function b(e) {
          return e !== null;
        }
        function S(e) {
          return void 0 === e;
        }
        function C(e) {
          return void 0 !== e;
        }
        function A(e) {
          return C(e) && b(e);
        }
        function T(e) {
          return S(e) || y(e);
        }
        function O(e) {
          return A(e) && p(e) === 'object';
        }
        const E = (t.addEventListener = function(e, t, n) {
          e.addEventListener
            ? e.addEventListener(t, n, !1)
            : e.attachEvent && e.attachEvent(`on${t}`, n);
        });

        var I = (t.on = E);

        const x = (t.removeEventListener = function(e, t, n) {
          e.removeEventListener
            ? e.removeEventListener(t, n, !1)
            : e.detachEvent && e.detachEvent(`on${t}`, n);
        });

        var M = (t.off = x);
        function k() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

          const t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {};

          const n = arguments[2];
          for (const i in e) e.hasOwnProperty(i) && t.call(n, i, e[i]);
        }
        function w(e, t) {
          k(t, (t, n) => {
            e[t] = n;
          });
        }
        t.uniqueID = (function() {
          let e = 0;
          return function() {
            return `${e++}`;
          };
        })();
        function L(e) {
          return m(e) && e.indexOf('{') === 0 && e.lastIndexOf('}') === e.length - 1;
        }
        function N(e, t, n) {
          if (!e) return '';
          const i = [];
          return (
            k(e, (e, t) => {
              g(t) ||
                (_(t)
                  ? (t = t.getTime())
                  : v(t)
                    ? (t = t.join(','))
                    : O(t) && (t = JSON.stringify(t)),
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
        function P(e) {
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

          const d = arguments.length;
          if (l.fn) {
            switch ((l.once && this.removeListener(e, l.fn, void 0, !0), d)) {
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
            for (u = 1, c = new Array(d - 1); u < d; u++) c[u - 1] = arguments[u];
            l.fn.apply(l.context, c);
          } else {
            let h;

            const f = l.length;
            for (u = 0; u < f; u++)
              switch ((l[u].once && this.removeListener(e, l[u].fn, void 0, !0), d)) {
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
                  if (!c) for (h = 1, c = new Array(d - 1); h < d; h++) c[h - 1] = arguments[h];
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
    ,
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

      const d = n(2)('iterator');

      const h = !([].keys && 'next' in [].keys());

      const f = function() {
        return this;
      };
      e.exports = function(e, t, n, p, m, v, g) {
        c(n, t, p);
        let _;

        let y;

        let b;

        const S = function(e) {
          if (!h && e in O) return O[e];
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

        const C = `${t} Iterator`;

        const A = m == 'values';

        let T = !1;

        var O = e.prototype;

        const E = O[d] || O['@@iterator'] || (m && O[m]);

        let I = E || S(m);

        const x = m ? (A ? S('entries') : I) : void 0;

        const M = (t == 'Array' && O.entries) || E;
        if (
          (M &&
            (b = l(M.call(new e()))) !== Object.prototype &&
            b.next &&
            (u(b, C, !0), i || typeof b[d] === 'function' || a(b, d, f)),
          A &&
            E &&
            E.name !== 'values' &&
            ((T = !0),
            (I = function() {
              return E.call(this);
            })),
          (i && !g) || (!h && !T && O[d]) || a(O, d, I),
          (s[t] = I),
          (s[C] = f),
          m)
        )
          if (((_ = { values: A ? I : S('values'), keys: v ? I : S('keys'), entries: x }), g))
            for (y in _) y in O || r(O, y, _[y]);
          else o(o.P + o.F * (h || T), t, _);
        return _;
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

        const d = l && l.prototype;
        d && !d[a] && o(d, a, u), (r[u] = r.Array);
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
    ,
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
              for (var n = a(e), c = arguments.length, u = 1, l = o.f, d = r.f; c > u; )
                for (
                  var h,
                    f = s(arguments[u++]),
                    p = l ? i(f).concat(l(f)) : i(f),
                    m = p.length,
                    v = 0;
                  m > v;

                )
                  d.call(f, (h = p[v++])) && (n[h] = f[h]);
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

      var d = (e.exports = {
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
          return u && d.NEED && c(e) && !r(e, i) && l(e), e;
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

      const d = n(31);

      const h = n(27);

      const f = n(2);

      const p = n(35);

      const m = n(34);

      const v = n(84);

      const g = n(83);

      const _ = n(9);

      const y = n(11);

      const b = n(12);

      const S = n(39);

      const C = n(19);

      const A = n(45);

      const T = n(82);

      const O = n(68);

      const E = n(6);

      const I = n(28);

      const x = O.f;

      const M = E.f;

      const k = T.f;

      let w = i.Symbol;

      const L = i.JSON;

      const N = L && L.stringify;

      const P = f('_hidden');

      const R = f('toPrimitive');

      const D = {}.propertyIsEnumerable;

      const j = l('symbol-registry');

      const U = l('symbols');

      const V = l('op-symbols');

      const F = Object.prototype;

      const W = typeof w === 'function';

      const H = i.QObject;

      let B = !H || !H.prototype || !H.prototype.findChild;

      const Y =
        r &&
        u(() => {
          return (
            A(
              M({}, 'a', {
                get() {
                  return M(this, 'a', { value: 7 }).a;
                },
              })
            ).a != 7
          );
        })
          ? function(e, t, n) {
              const i = x(F, t);
              i && delete F[t], M(e, t, n), i && e !== F && M(F, t, i);
            }
          : M;

      const G = function(e) {
        const t = (U[e] = A(w.prototype));
        return (t._k = e), t;
      };

      const q =
        W && typeof w.iterator === 'symbol'
          ? function(e) {
              return typeof e === 'symbol';
            }
          : function(e) {
              return e instanceof w;
            };

      var z = function(e, t, n) {
        return (
          e === F && z(V, t, n),
          _(e),
          (t = S(t, !0)),
          _(n),
          o(U, t)
            ? (n.enumerable
                ? (o(e, P) && e[P][t] && (e[P][t] = !1), (n = A(n, { enumerable: C(0, !1) })))
                : (o(e, P) || M(e, P, C(1, {})), (e[P][t] = !0)),
              Y(e, t, n))
            : M(e, t, n)
        );
      };

      const Q = function(e, t) {
        _(e);
        for (var n, i = v((t = b(t))), o = 0, r = i.length; r > o; ) z(e, (n = i[o++]), t[n]);
        return e;
      };

      const J = function(e) {
        const t = D.call(this, (e = S(e, !0)));
        return (
          !(this === F && o(U, e) && !o(V, e)) &&
          (!(t || !o(this, e) || !o(U, e) || (o(this, P) && this[P][e])) || t)
        );
      };

      const X = function(e, t) {
        if (((e = b(e)), (t = S(t, !0)), e !== F || !o(U, t) || o(V, t))) {
          const n = x(e, t);
          return !n || !o(U, t) || (o(e, P) && e[P][t]) || (n.enumerable = !0), n;
        }
      };

      const K = function(e) {
        for (var t, n = k(b(e)), i = [], r = 0; n.length > r; )
          o(U, (t = n[r++])) || t == P || t == c || i.push(t);
        return i;
      };

      const $ = function(e) {
        for (var t, n = e === F, i = k(n ? V : b(e)), r = [], a = 0; i.length > a; )
          !o(U, (t = i[a++])) || (n && !o(F, t)) || r.push(U[t]);
        return r;
      };
      W ||
        (s(
          (w = function() {
            if (this instanceof w) throw TypeError('Symbol is not a constructor!');
            const e = h(arguments.length > 0 ? arguments[0] : void 0);

            var t = function(n) {
              this === F && t.call(V, n),
                o(this, P) && o(this[P], e) && (this[P][e] = !1),
                Y(this, e, C(1, n));
            };
            return r && B && Y(F, e, { configurable: !0, set: t }), G(e);
          }).prototype,
          'toString',
          function() {
            return this._k;
          }
        ),
        (O.f = X),
        (E.f = z),
        (n(53).f = T.f = K),
        (n(26).f = J),
        (n(33).f = $),
        r && !n(20) && s(F, 'propertyIsEnumerable', J, !0),
        (p.f = function(e) {
          return G(f(e));
        })),
        a(a.G + a.W + a.F * !W, { Symbol: w });
      for (
        let Z = 'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(
            ','
          ),
          ee = 0;
        Z.length > ee;

      )
        f(Z[ee++]);
      for (let te = I(f.store), ne = 0; te.length > ne; ) m(te[ne++]);
      a(a.S + a.F * !W, 'Symbol', {
        for(e) {
          return o(j, (e += '')) ? j[e] : (j[e] = w(e));
        },
        keyFor(e) {
          if (!q(e)) throw TypeError(`${e} is not a symbol!`);
          for (const t in j) if (j[t] === e) return t;
        },
        useSetter() {
          B = !0;
        },
        useSimple() {
          B = !1;
        },
      }),
        a(a.S + a.F * !W, 'Object', {
          create(e, t) {
            return void 0 === t ? A(e) : Q(A(e), t);
          },
          defineProperty: z,
          defineProperties: Q,
          getOwnPropertyDescriptor: X,
          getOwnPropertyNames: K,
          getOwnPropertySymbols: $,
        }),
        L &&
          a(
            a.S +
              a.F *
                (!W ||
                  u(() => {
                    const e = w();
                    return N([e]) != '[null]' || N({ a: e }) != '{}' || N(Object(e)) != '{}';
                  })),
            'JSON',
            {
              stringify(e) {
                for (var t, n, i = [e], o = 1; arguments.length > o; ) i.push(arguments[o++]);
                if (((n = t = i[1]), (y(t) || void 0 !== e) && !q(e)))
                  return (
                    g(t) ||
                      (t = function(e, t) {
                        if ((typeof n === 'function' && (t = n.call(this, e, t)), !q(t))) return t;
                      }),
                    (i[1] = t),
                    N.apply(L, i)
                  );
              },
            }
          ),
        w.prototype[R] || n(10)(w.prototype, R, w.prototype.valueOf),
        d(w, 'Symbol'),
        d(Math, 'Math', !0),
        d(i.JSON, 'JSON', !0);
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
    function(e, t) {
      function n(e) {
        (e = e || {}),
          (this.ms = e.min || 100),
          (this.max = e.max || 1e4),
          (this.factor = e.factor || 2),
          (this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0),
          (this.attempts = 0);
      }
      (e.exports = n),
        (n.prototype.duration = function() {
          let e = this.ms * Math.pow(this.factor, this.attempts++);
          if (this.jitter) {
            const t = Math.random();

            const n = Math.floor(t * this.jitter * e);
            e = (1 & Math.floor(10 * t)) == 0 ? e - n : e + n;
          }
          return 0 | Math.min(e, this.max);
        }),
        (n.prototype.reset = function() {
          this.attempts = 0;
        }),
        (n.prototype.setMin = function(e) {
          this.ms = e;
        }),
        (n.prototype.setMax = function(e) {
          this.max = e;
        }),
        (n.prototype.setJitter = function(e) {
          this.jitter = e;
        });
    },
    ,
    ,
    ,
    ,
    function(e, t, n) {
      Object.defineProperty(t, '__esModule', { value: !0 });
      const i = a(n(114));

      const o = a(n(166));

      const r = a(n(165));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      (t.default = {
        DataApi(e) {
          return new i.default(e);
        },
        DataRtc(e) {
          return new o.default(e);
        },
        DataStats(e) {
          return new r.default(e);
        },
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
    ,
    ,
    function(e, t, n) {
      Object.defineProperty(t, '__esModule', { value: !0 });
      const i = a(n(14));

      const o = a(n(48));

      const r = n(42);
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      const s = n(4).info.nrtcVersion;

      const c = n(15);

      const u = (function() {
        function e() {
          const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          (0, i.default)(this, e);
          const n = t.appkey;
          (this.infos = {}), this.init(n), this.resetStatus();
        }
        return (
          (0, o.default)(e, [
            { key: 'resetStatus', value() {} },
            {
              key: 'init',
              value(e) {
                this.infos = Object.assign(this.infos, {
                  interval: 30,
                  ver: 2,
                  platform: `${l.convertPlatform(c.os.family)}-${c.os.version}`,
                  browser: `${c.name}-${c.version}`,
                  sdk_ver: s || '3.6.0',
                  uid: null,
                  appkey: e,
                  time: null,
                  data: {},
                });
              },
            },
            {
              key: 'clear',
              value() {
                this.infos.data = {};
              },
            },
            {
              key: 'start',
              value() {
                const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                (this.infos.appkey = e.appKey || e.appkey || this.infos.appkey),
                  (this.infos.cid = e.cid),
                  (this.infos.uid = e.uid);
              },
            },
            {
              key: 'stop',
              value() {
                this.clear();
              },
            },
            {
              key: 'update',
              value(e) {
                (this.infos.data[`stat_${Date.now()}`] = e),
                  Object.keys(this.infos.data).length === this.infos.interval && this.send();
              },
            },
            {
              key: 'send',
              value() {
                const e = this;
                Object.keys(this.infos.data).length !== 0 &&
                  ((this.infos.time = Date.now()),
                  (0, r.ajax)({
                    type: 'post',
                    url: '//statistic.live.126.net/webrtc/stat',
                    data: this.infos,
                  })
                    .then(t => {
                      e.clear();
                    })
                    .catch(e => {
                      console.log('err', e);
                    }));
              },
            },
          ]),
          e
        );
      })();
      t.default = u;
      var l = {
        convertNetwork(e) {
          return { wlan: 'wifi', lan: 'ethernet' }[e] || 'unknown';
        },
        convertPlatform(e) {
          let t = void 0;
          return (t = /Windows/i.test(e) ? 'Win' : e), (t = /OS X/i.test(t) ? 'Mac' : t);
        },
      };
      e.exports = t.default;
    },
    function(e, t, n) {
      Object.defineProperty(t, '__esModule', { value: !0 });
      const i = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n(14));

      const o = n(42);
      const r = n(4).info.nrtcVersion;

      const a = n(15);

      const s = function e() {
        const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        (0, i.default)(this, e);
        const n = t.appkey;
        (this.infos = {}),
          (this.userlist = []),
          (this.localVolumn = 0),
          (this.local = {}),
          (this.remote = {}),
          this.init(n),
          this.resetStatus();
      };
      t.default = s;
      const c = s.prototype;
      (c.init = function(e) {
        this.infos = Object.assign(this.infos, {
          ver: 2,
          device: -1,
          isp: -1,
          platform: `${u.convertPlatform(a.os.family)}-${a.os.version}`,
          browser: `${a.name}-${a.version}`,
          sdk_ver: r || '3.6.0',
          appkey: e,
          interval: 60,
          samples: 30,
          time: null,
          qos_algorithm: -1,
          fec_algorithm: -1,
          qos_scene: -1,
          qos_strategy: -1,
        });
      }),
        (c.resetStatus = function() {
          (this.infos = Object.assign(this.infos, {
            uid: null,
            cid: null,
            push_url: null,
            turn_ip: null,
            proxy_ip: null,
            meeting: !1,
            live: !1,
          })),
            this.clearInfoData(),
            (this.uidSsrcMap = {}),
            (this.userlist = []);
        }),
        (c.initInfoData = function(e) {
          const t = {
            uid: e,
            cid: (this.imInfo && this.imInfo.cid) || -1,
            push_url: (this.sessionConfig && this.sessionConfig.rtmpUrl) || -1,
            turn_ip: (this.imInfo && this.imInfo.turnMap) || -1,
            proxy_ip: (this.imInfo && this.imInfo.turnMap) || -1,
            meeting: /^meeting$/gi.test(this.imInfo.sessionMode),
            live: (this.sessionConfig && this.sessionConfig.liveEnable) || !1,
            p2p: !1,
            isp: -1,
            net: -1,
            connect_state: (this.imInfo && this.imInfo.code) || 200,
            signalling_time:
              ((this.sessionConfig && this.sessionConfig.signalEndTime) || 0) -
              ((this.sessionConfig && this.sessionConfig.signalStartTime) || 0),
            connect_time:
              ((this.sessionConfig && this.sessionConfig.rtcEndTime) || 0) -
              ((this.sessionConfig && this.sessionConfig.rtcStartTime) || 0),
          };
          this.infos = Object.assign(this.infos, t);
        }),
        (c.clearInfoData = function() {
          (this.localVolumn = 0),
            (this.infos = Object.assign(this.infos, {
              rx: { audio: [], video: [] },
              tx: {
                a_lost: [],
                v_lost: [],
                rtt: [],
                rtt_mdev: [],
                set_v_fps: [],
                qos_v_fps: [],
                v_fps: [],
                set_v_quality: [],
                real_v_res: [],
                real_v_kbps: [],
                real_v_kbps_n: [],
                real_a_kbps: [],
                real_a_kbps_n: [],
                set_v_kbps: [],
                qos_v_kbps: [],
                tx_bw_kbps: [],
                a_volume: [],
              },
            }));
        }),
        (c.start = function(e) {
          const t = e.info;

          const n = e.imInfo;

          const i = e.sessionConfig;

          const o = e.videoConfig;
          n &&
            ((this.infos.appkey = t.appKey || this.infos.appkey),
            (this.imInfo = n || {}),
            (this.infos.cid = this.imInfo.cid),
            (this.infos.uid = this.imInfo.uid),
            (this.sessionConfig = i || {}),
            (this.videoConfig = o || {}),
            this.clearSecond(),
            this.getTurnMap(),
            this.initInfoData(this.infos.uid));
        }),
        (c.stop = function() {
          this.statsTimer &&
            (clearInterval(this.statsTimer), (this.statsTimer = null), this.resetStatus());
        }),
        (c.clearSecond = function() {
          this.paramSecond = {
            packetsLostAudio: '',
            packetsLostAudioList: [],
            packetsSentPerSecondAudio: [],
            packetsLostVideo: '',
            packetsLostVideoList: [],
            packetsSentPerSecondVideo: [],
            googInterframeDelayMaxList: [],
            vrdolr: '',
            vrdohr: '',
          };
        }),
        (c.update = function(e, t) {
          const n = [];

          const i = [];

          const o = [];

          const r = [];
          for (const a in e)
            a.indexOf('_send_') !== -1 && a.indexOf('_audio') !== -1
              ? n.push(e[a])
              : a.indexOf('_send_') !== -1 && a.indexOf('_video') !== -1
                ? i.push(e[a])
                : a.indexOf('_recv_') !== -1 && a.indexOf('_audio') !== -1
                  ? o.push(e[a])
                  : a.indexOf('_recv_') !== -1 && a.indexOf('_video') !== -1
                    ? r.push(e[a])
                    : (this.network = e[a] && e[a].network);
          if (
            (this.paramSecond.packetsLostAudioList.length === 3 &&
              this.paramSecond.packetsLostAudioList.shift(),
            this.paramSecond.packetsLostVideoList.length === 3 &&
              this.paramSecond.packetsLostVideoList.shift(),
            this.paramSecond.packetsSentPerSecondAudio.length === 3 &&
              this.paramSecond.packetsSentPerSecondAudio.shift(),
            this.paramSecond.packetsSentPerSecondVideo.length === 3 &&
              this.paramSecond.packetsSentPerSecondVideo.shift(),
            this.paramSecond.googInterframeDelayMaxList.length === 3 &&
              this.paramSecond.googInterframeDelayMaxList.shift(),
            this.paramSecond.packetsLostAudioList.push(parseFloat((n[0] && n[0].packetsLost) || 0)),
            this.paramSecond.packetsLostVideoList.push(parseFloat((i[0] && i[0].packetsLost) || 0)),
            this.paramSecond.packetsSentPerSecondAudio.push(
              parseFloat((n[0] && n[0].packetsSentPerSecond) || 0)
            ),
            this.paramSecond.packetsSentPerSecondVideo.push(
              parseFloat((i[0] && i[0].packetsSentPerSecond) || 0)
            ),
            this.paramSecond.googInterframeDelayMaxList.push(
              parseFloat((r[0] && r[0].googInterframeDelayMax) || 0)
            ),
            t !== 1)
          ) {
            if (t === 2) {
              (this.paramSecond.packetsLostAudio =
                ((this.paramSecond.packetsLostAudioList[1] -
                  this.paramSecond.packetsLostAudioList[0]) /
                  (this.paramSecond.packetsSentPerSecondAudio[0] +
                    this.paramSecond.packetsSentPerSecondAudio[1]) /
                  2) *
                100),
                (this.paramSecond.packetsLostVideo =
                  ((this.paramSecond.packetsLostVideoList[1] -
                    this.paramSecond.packetsLostVideoList[0]) /
                    (this.paramSecond.packetsSentPerSecondVideo[0] +
                      this.paramSecond.packetsSentPerSecondVideo[1]) /
                    2) *
                  100);
              let s = 0;

              let c = 0;

              let u = 0;

              let l = 0;
              this.paramSecond.googInterframeDelayMaxList[0] > 200 &&
                this.paramSecond.googInterframeDelayMaxList[0] < 400 &&
                (s = this.paramSecond.googInterframeDelayMaxList[0] / 2e3),
                this.paramSecond.googInterframeDelayMaxList[1] > 200 &&
                  this.paramSecond.googInterframeDelayMaxList[1] < 400 &&
                  (c = this.paramSecond.googInterframeDelayMaxList[1] / 2e3),
                this.paramSecond.googInterframeDelayMaxList[0] > 400 &&
                  (u = this.paramSecond.googInterframeDelayMaxList[0] / 2e3),
                this.paramSecond.googInterframeDelayMaxList[1] > 400 &&
                  (l = this.paramSecond.googInterframeDelayMaxList[0] / 2e3),
                (this.paramSecond.vrdolr = s + c),
                (this.paramSecond.vrdohr = u + l);
            } else if (t % 2 == 1) {
              (this.paramSecond.packetsLostAudio =
                ((this.paramSecond.packetsLostAudioList[2] -
                  this.paramSecond.packetsLostAudioList[0]) /
                  (this.paramSecond.packetsSentPerSecondAudio[1] +
                    this.paramSecond.packetsSentPerSecondAudio[2]) /
                  2) *
                  100 || 0),
                (this.paramSecond.packetsLostVideo =
                  ((this.paramSecond.packetsLostVideoList[2] -
                    this.paramSecond.packetsLostVideoList[0]) /
                    (this.paramSecond.packetsSentPerSecondVideo[1] +
                      this.paramSecond.packetsSentPerSecondVideo[2]) /
                    2) *
                    100 || 0);
              let d = 0;

              let h = 0;

              let f = 0;

              let p = 0;
              this.paramSecond.googInterframeDelayMaxList[1] > 200 &&
                this.paramSecond.googInterframeDelayMaxList[1] < 400 &&
                (d = this.paramSecond.googInterframeDelayMaxList[1] / 2e3),
                this.paramSecond.googInterframeDelayMaxList[2] > 200 &&
                  this.paramSecond.googInterframeDelayMaxList[2] < 400 &&
                  (h = this.paramSecond.googInterframeDelayMaxList[2] / 2e3),
                this.paramSecond.googInterframeDelayMaxList[1] > 400 &&
                  (f = this.paramSecond.googInterframeDelayMaxList[1] / 2e3),
                this.paramSecond.googInterframeDelayMaxList[2] > 400 &&
                  (p = this.paramSecond.googInterframeDelayMaxList[2] / 2e3),
                (this.paramSecond.vrdolr = d + h),
                (this.paramSecond.vrdohr = f + p);
            }
            t % 2 == 0 &&
              (this.updateTxMediaInfo(n, i),
              this.updateRxMediaInfo(o, r),
              Object.keys(this.infos.rx.audio).length === this.infos.interval / 2 && this.send());
          }
        }),
        (c.updateOnce = function(e) {
          const t = e.imInfo;

          const n = e.sessionConfig;

          const i = e.rtcConnection;
          t &&
            ((this.imInfo = t || {}),
            (this.sessionConfig = n || {}),
            (this.rtcConnection = i || {}),
            (this.videoConfig = e.videoConfig || {}),
            this.getTurnMap(),
            this.initInfoData(),
            this.send());
        }),
        (c.updateLocalVolumn = function(e) {
          this.localVolumn = e;
        }),
        (c.updateRxMediaInfo = function(e, t) {
          const n = this;

          const i = { u: [], g: [], c: [], bn: [], bc: [] };

          const o = { u: [], i: [], bn: [], bc: [], r: [], f: [], vrdolr: [], vrdohr: [] };
          e.map(e => {
            i.u.push(parseFloat(e.id.split('_')[1])),
              i.g.push(-1),
              i.c.push(-1),
              i.bn.push(parseFloat((e.bitsReceivedPerSecond / 1024).toFixed(1)) || 0),
              i.bc.push(-1);
          }),
            t.map(e => {
              o.u.push(parseFloat(e.id.split('_')[1])),
                o.i.push(parseFloat(e.googInterframeDelayMax)),
                o.bn.push(parseFloat((e.bitsReceivedPerSecond / 1024).toFixed(1)) || 0),
                o.bc.push(-1),
                o.r.push(`${e.googFrameWidthReceived || 0}x${e.googFrameHeightReceived || 0}`),
                o.f.push(parseFloat(e.googFrameRateReceived)),
                o.vrdolr.push(n.paramSecond.vrdolr || -1),
                o.vrdohr.push(n.paramSecond.vrdohr || -1);
            }),
            this.infos.rx.audio.push(i),
            this.infos.rx.video.push(o);
        }),
        (c.getLocalMediaStats = function(e, t) {
          return {
            a_lost: this.paramSecond.packetsLostAudio || 0,
            v_lost: this.paramSecond.packetsLostVideo || 0,
            rtt: parseFloat((e[0] && e[0].googRtt) || 0) || 0,
            rtt_mdev: -1,
            set_v_fps: this.videoConfig.frameRate || 0,
            qos_v_fps: parseFloat((t[0] && t[0].googFrameRateInput) || 0) || 0,
            v_fps: parseFloat((t[0] && t[0].googFrameRateSent) || 0) || 0,
            set_v_quality: this.sessionConfig.videoQuality,
            real_v_res: `${(t[0] && t[0].googFrameWidthSent) || 0}x${(t[0] &&
              t[0].googFrameHeightSent) ||
              0}`,
            real_v_kbps: parseFloat((t[0] && t[0].googEncodeUsagePercent) || 0) || 0,
            real_v_kbps_n:
              parseFloat((((t[0] && t[0].bitsSentPerSecond) || 0) / 1024).toFixed(1)) || 0,
            real_a_kbps: -1,
            real_a_kbps_n:
              parseFloat((((e[0] && e[0].bitsSentPerSecond) || 0) / 1024).toFixed(1)) || 0,
            set_v_kbps: -1,
            qos_v_kbps: 0,
            tx_bw_kbps:
              parseFloat((((t[0] && t[0].bitsSentPerSecond) || 0) / 1024).toFixed(1)) || 0,
            a_volume: parseFloat(this.localVolumn) || 0,
          };
        }),
        (c.updateTxMediaInfo = function(e, t) {
          const n = this.getLocalMediaStats(e, t);
          for (const i in n) this.infos.tx[i].push(n[i]);
          const o = ((navigator.connection || {}).type || 'unknown').toString().toLowerCase();
          this.infos.net = u.convertNetwork(this.network || o);
        }),
        (c.getTurnMap = function() {
          if (this.imInfo) {
            const e = this.imInfo;
            e.serverMap &&
              (e.serverMap.constructor === Object
                ? (e.turnMap = e.serverMap || null)
                : (e.turnMap = JSON.parse(e.serverMap || null)),
              (e.turnMap = e.turnMap && e.turnMap.turnaddrs),
              (e.turnMap = e.turnMap && e.turnMap[0]),
              (e.turnMap = e.turnMap.constructor === Array ? e.turnMap[0] : e.turnMap),
              (e.turnMap = e.turnMap && e.turnMap.match(/\d+\.\d+.\d+\.\d+/)),
              (e.turnMap = e.turnMap[0]));
          } else console.warn('尚未连接网关，不统计');
        }),
        (c.send = function() {
          const e = this;
          this.infos.uid &&
            this.infos.cid &&
            ((this.infos.time = Date.now()),
            (this.infos.samples = this.infos.rx.audio.length),
            (0, o.ajax)({
              type: 'post',
              url: 'https://statistic.live.126.net/statistic/realtime/sdkinfo',
              data: this.infos,
            })
              .then(t => {
                e.clearInfoData();
              })
              .catch(t => {
                e.clearInfoData();
              }));
        });
      var u = {
        convertNetwork(e) {
          return { wlan: 'wifi', lan: 'ethernet' }[e] || 'unknown';
        },
        convertPlatform(e) {
          let t = void 0;
          return (t = /Windows/i.test(e) ? 'Win' : e), (t = /OS X/i.test(t) ? 'Mac' : t);
        },
      };
      e.exports = t.default;
    },
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
    function(e, t, n) {
      Object.defineProperty(t, '__esModule', { value: !0 });
      let i;

      let o;

      const r = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n(109));
      const a = {
        NETCALL_TYPE_AUDIO: 1,
        NETCALL_TYPE_VIDEO: 2,
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
        DEVICE_TYPE_AUDIO_IN: 0,
        DEVICE_TYPE_AUDIO_OUT_LOCAL: 1,
        DEVICE_TYPE_AUDIO_OUT_CHAT: 2,
        DEVICE_TYPE_VIDEO: 3,
        DEVICE_STATUS_NO_CHANGE: 0,
        DEVICE_STATUS_CHANGE: 1,
        DEVICE_STATUS_WORK_REMOVE: 2,
        DEVICE_STATUS_RESET: 4,
        DEVICE_STATUS_START: 8,
        DEVICE_STATUS_END: 16,
        CHAT_VIDEO_QUALITY_NORMAL: 0,
        CHAT_VIDEO_QUALITY_LOW: 1,
        CHAT_VIDEO_QUALITY_MEDIUM: 2,
        CHAT_VIDEO_QUALITY_HIGH: 3,
        CHAT_VIDEO_QUALITY_480P: 4,
        CHAT_VIDEO_QUALITY_720P: 5,
        CHAT_VIDEO_QUALITY_540P: 6,
        CHAT_VIDEO_ENCODEMODE_NORMAL: 0,
        CHAT_VIDEO_ENCODEMODE_SMOOTH: 1,
        CHAT_VIDEO_ENCODEMODE_QUALITY: 2,
        CHAT_VIDEO_ENCODEMODE_SCREEN: 3,
        CHAT_VIDEO_FRAME_RATE_NORMAL: 0,
        CHAT_VIDEO_FRAME_RATE_5: 1,
        CHAT_VIDEO_FRAME_RATE_10: 2,
        CHAT_VIDEO_FRAME_RATE_15: 3,
        CHAT_VIDEO_FRAME_RATE_20: 4,
        CHAT_VIDEO_FRAME_RATE_25: 5,
        CHAT_VIDEO_SCALE_None: 0,
        CHAT_VIDEO_SCALE_1x1: 1,
        CHAT_VIDEO_SCALE_4x3: 2,
        CHAT_VIDEO_SCALE_16x9: 3,
        CHAT_USER_LEFT_TIMEOUT: -1,
        CHAT_USER_LEFT_NORMAL: 0,
        CHAT_NET_STATUS_VERY_GOOD: 0,
        CHAT_NET_STATUS_GOOD: 1,
        CHAT_NET_STATUS_POOR: 2,
        CHAT_NET_STATUS_BAD: 3,
        CHAT_NET_STATUS_VERY_BAD: 4,
        CHAT_NET_STATUS_VERY_BAD_VIDEO_CLOSE: -1,
        CLIENT_TYPE_AOS: 1,
        CLIENT_TYPE_IOS: 2,
        CLIENT_TYPE_PC: 4,
        CLIENT_TYPE_WINPHONE: 8,
        CLIENT_TYPE_WEB: 16,
        CLIENT_TYPE_REST: 32,
        LAYOUT_SPLITBOTTOMHORFLOATING: 0,
        LAYOUT_SPLITTOPHORFLOATING: 1,
        LAYOUT_SPLITLATTICETILE: 2,
        LAYOUT_SPLITLATTICECUTTINGTILE: 3,
        LAYOUT_SPLITCUSTOMLAYOUT: 4,
        LAYOUT_SPLITAUDIOLAYOUT: 5,
        NETDETECT_AUDIO: 0,
        NETDETECT_VIDEO: 1,
      };
      (a.deviceTypeMap = ((i = {}),
      (0, r.default)(i, a.DEVICE_TYPE_AUDIO_IN, 'audioIn'),
      (0, r.default)(i, a.DEVICE_TYPE_AUDIO_OUT_CHAT, 'audioOut'),
      (0, r.default)(i, a.DEVICE_TYPE_VIDEO, 'video'),
      i)),
        (a.getDeviceTypeStr = function(e) {
          return a.deviceTypeMap[e];
        }),
        (a.deviceStatusMap = ((o = {}),
        (0, r.default)(o, a.DEVICE_STATUS_NO_CHANGE, 'noChange'),
        (0, r.default)(o, a.DEVICE_STATUS_CHANGE, 'change'),
        (0, r.default)(o, a.DEVICE_STATUS_WORK_REMOVE, 'workRemove'),
        (0, r.default)(o, a.DEVICE_STATUS_RESET, 'reset'),
        (0, r.default)(o, a.DEVICE_STATUS_START, 'start'),
        (0, r.default)(o, a.DEVICE_STATUS_END, 'end'),
        o)),
        (a.getDeviceStatusStr = function(e) {
          return a.deviceStatusMap[e];
        }),
        (t.default = a),
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
      e.exports = {
        pushConfig: {
          1: 'enable',
          2: 'needBadge',
          3: 'needPushNick',
          4: 'pushContent',
          5: 'custom',
          6: 'pushPayload',
          7: 'sound',
          9: 'forceKeepCalling',
          10: 'webrtcEnable',
        },
        liveOption: { 1: 'liveEnable', 2: 'webrtcEnable' },
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
          forceKeepCalling: 9,
          webrtcEnable: 10,
        },
        liveOption: { liveEnable: 1, webrtcEnable: 2 },
      };
    },
    function(e, t, n) {
      const i = {
        netcall: {
          id: 9,
          initNetcall: 1,
          keepCalling: 3,
          calleeAck: 4,
          notifyCalleeAck: 5,
          hangup: 6,
          notifyHangup: 7,
          netcallControl: 8,
          notifyNetcallControl: 9,
          verifyChannelId: 10,
          createChannel: 13,
          joinChannel: 14,
          queryAccountUidMap: 16,
        },
      };

      const o = {
        initNetcall: {
          sid: 9,
          cid: i.netcall.initNetcall,
          params: [
            { type: 'byte', name: 'type' },
            { type: 'StrArray', name: 'accounts' },
            { type: 'String', name: 'pushContent' },
            { type: 'String', name: 'custom' },
            { type: 'Property', name: 'pushConfig' },
          ],
        },
        keepCalling: {
          sid: 9,
          cid: i.netcall.keepCalling,
          params: [
            { type: 'byte', name: 'type' },
            { type: 'StrArray', name: 'accounts' },
            { type: 'long', name: 'channelId' },
          ],
        },
        calleeAck: {
          sid: 9,
          cid: i.netcall.calleeAck,
          params: [
            { type: 'string', name: 'account' },
            { type: 'long', name: 'channelId' },
            { type: 'byte', name: 'type' },
            { type: 'bool', name: 'accepted' },
          ],
        },
        hangup: { sid: 9, cid: i.netcall.hangup, params: [{ type: 'long', name: 'channelId' }] },
        netcallControl: {
          sid: 9,
          cid: i.netcall.netcallControl,
          params: [{ type: 'long', name: 'channelId' }, { type: 'byte', name: 'type' }],
        },
        verifyChannelId: {
          sid: 9,
          cid: i.netcall.verifyChannelId,
          params: [{ type: 'long', name: 'channelId' }, { type: 'String', name: 'account' }],
        },
        createChannel: {
          sid: 9,
          cid: i.netcall.createChannel,
          params: [
            { type: 'String', name: 'channelName' },
            { type: 'String', name: 'custom' },
            { type: 'String', name: 'webrtcEnable' },
          ],
        },
        joinChannel: {
          sid: 9,
          cid: i.netcall.joinChannel,
          params: [
            { type: 'String', name: 'channelName' },
            { type: 'Property', name: 'liveOption' },
          ],
        },
        queryAccountUidMap: {
          sid: 9,
          cid: i.netcall.queryAccountUidMap,
          params: [{ type: 'String', name: 'channelName' }, { type: 'LongArray', name: 'uids' }],
        },
      };

      const r = {
        '9_1': {
          service: 'netcall',
          cmd: 'initNetcall',
          response: [
            { type: 'Number', name: 'timetag' },
            { type: 'Number', name: 'uid' },
            { type: 'Number', name: 'channelId' },
            { type: 'StrArray', name: 'turnServerList' },
            { type: 'StrArray', name: 'sturnServerList' },
            { type: 'StrArray', name: 'proxyServerList' },
            { type: 'StrArray', name: 'keepCallingAccounts' },
            { type: 'StrLongMap', name: 'accountUidMap' },
            { type: 'String', name: 'clientConfig' },
            { type: 'String', name: 'serverMap' },
          ],
        },
        '9_2': {
          service: 'netcall',
          cmd: 'beCalled',
          response: [
            { type: 'Number', name: 'timetag' },
            { type: 'Number', name: 'type' },
            { type: 'Number', name: 'channelId' },
            { type: 'String', name: 'account' },
            { type: 'Number', name: 'uid' },
            { type: 'StrArray', name: 'turnServerList' },
            { type: 'StrArray', name: 'sturnServerList' },
            { type: 'StrArray', name: 'proxyServerList' },
            { type: 'StrLongMap', name: 'accountUidMap' },
            { type: 'String', name: 'clientConfig' },
            { type: 'String', name: 'custom' },
            { type: 'Property', name: 'pushConfig' },
            { type: 'String', name: 'serverMap' },
          ],
        },
        '9_3': {
          service: 'netcall',
          cmd: 'keepCalling',
          response: [{ type: 'StrArr', name: 'accounts' }],
        },
        '9_4': { service: 'netcall', cmd: 'calleeAck', response: [] },
        '9_5': {
          service: 'netcall',
          cmd: 'notifyCalleeAck',
          response: [
            { type: 'String', name: 'account' },
            { type: 'long', name: 'channelId' },
            { type: 'byte', name: 'type' },
            { type: 'bool', name: 'accepted' },
          ],
        },
        '9_6': { service: 'netcall', cmd: 'hangup', response: [] },
        '9_7': {
          service: 'netcall',
          cmd: 'notifyHangup',
          response: [
            { type: 'long', name: 'channelId' },
            { type: 'String', name: 'account' },
            { type: 'long', name: 'timetag' },
          ],
        },
        '9_8': { service: 'netcall', cmd: 'netcallControl', response: [] },
        '9_9': {
          service: 'netcall',
          cmd: 'notifyNetcallControl',
          response: [
            { type: 'String', name: 'account' },
            { type: 'byte', name: 'type' },
            { type: 'long', name: 'channelId' },
          ],
        },
        '9_10': { service: 'netcall', cmd: 'verifyChannelId', response: [] },
        '9_11': {
          service: 'netcall',
          cmd: 'notifyNetcallRecord',
          response: [{ type: 'Property', name: 'msg' }],
        },
        '9_12': {
          service: 'netcall',
          cmd: 'notifyCalleeAckSync',
          response: [
            { type: 'String', name: 'timetag' },
            { type: 'long', name: 'channelId' },
            { type: 'byte', name: 'type' },
            { type: 'bool', name: 'accepted' },
            { type: 'byte', name: 'fromClientType' },
          ],
        },
        '9_13': {
          service: 'netcall',
          cmd: 'createChannel',
          response: [{ type: 'long', name: 'timetag' }],
        },
        '9_14': {
          service: 'netcall',
          cmd: 'joinChannel',
          response: [
            { type: 'long', name: 'timetag' },
            { type: 'long', name: 'channelId' },
            { type: 'StrLongMap', name: 'accountUidMap' },
            { type: 'String', name: 'serverMap' },
            { type: 'String', name: 'clientConfig' },
            { type: 'String', name: 'custom' },
          ],
        },
        '9_15': {
          service: 'netcall',
          cmd: 'notifyJoin',
          response: [
            { type: 'Long', name: 'channelId' },
            { type: 'StrLongMap', name: 'accountUidMap' },
          ],
        },
        '9_16': { service: 'netcall', cmd: 'queryAccountUidMap', response: [] },
      };
      e.exports = { idMap: i, cmdConfig: o, packetConfig: r };
    },
    function(e, t, n) {
      const i = {
        install(e) {
          const t = e.Protocol.fn;
          (t.processNetcall = function(e) {
            switch (e.cmd) {
              case 'initNetcall':
                this.onInitNetcall(e);
                break;
              case 'beCalled':
                this.onBeCalled(e);
                break;
              case 'keepCalling':
                this.onKeepCalling(e);
                break;
              case 'calleeAck':
                break;
              case 'notifyCalleeAck':
                this.onNotifyCalleeAck(e);
                break;
              case 'hangup':
                break;
              case 'notifyHangup':
                this.onNotifyHangup(e);
                break;
              case 'notifyNetcallControl':
                this.onNetcallControl(e);
                break;
              case 'notifyCalleeAckSync':
                this.onNotifyCalleeAckSync(e);
                break;
              case 'notifyNetcallRecord':
                this.onMsg(e);
                break;
              case 'createChannel':
                break;
              case 'joinChannel':
                this.joinChannel(e);
                break;
              case 'notifyJoin':
                this.notifyJoin(e);
            }
          }),
            (t.onInitNetcall = function(e) {
              if (!e.error) {
                const t = e.obj.type;
                (e.obj = e.content),
                  (e.obj.type = t),
                  (e.obj.accounts = e.obj.keepCallingAccounts),
                  this.setCurrentNetcall(e.obj.channelId),
                  this.keepCalling(e);
              }
            }),
            (t.setCurrentNetcall = function(e) {
              this.currentNetcallChannelId = e;
            }),
            (t.onKeepCalling = function(e) {
              e.error || (e.content.accounts.length && this.keepCalling(e));
            }),
            (t.keepCalling = function(e) {
              const t = this;

              const n = e.obj;

              const i = n.type;

              const o = n.accounts;

              const r = n.channelId;
              o &&
                o.length &&
                setTimeout(() => {
                  t.currentNetcallChannelId &&
                    t.currentNetcallChannelId === r &&
                    t.api.keepCalling({ type: i, accounts: o, channelId: r }).catch(() => {});
                }, 3e3);
            }),
            (t.onBeCalled = function(e) {
              e.error || this.emitAPI({ type: 'beCalled', obj: e.content });
            }),
            (t.onNotifyCalleeAck = function(e) {
              e.error || this.emitAPI({ type: 'notifyCalleeAck', obj: e.content });
            }),
            (t.onNotifyHangup = function(e) {
              e.error || this.emitAPI({ type: 'notifyHangup', obj: e.content });
            }),
            (t.onNetcallControl = function(e) {
              e.error || this.emitAPI({ type: 'netcallControl', obj: e.content });
            }),
            (t.onNotifyCalleeAckSync = function(e) {
              e.error || this.emitAPI({ type: 'notifyCalleeAckSync', obj: e.content });
            }),
            (t.notifyJoin = function(e) {
              e.error || this.emitAPI({ type: 'notifyJoin', obj: e.content });
            }),
            (t.joinChannel = function(e) {
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
          (t.initNetcall = function(e) {
            return (
              n.verifyOptions(e, 'type accounts', 'netcall::initNetcall'),
              (e.pushContent = ''),
              (e.custom = ''),
              e.pushConfig || (e.pushConfig = {}),
              (e.pushConfig.webrtcEnable = e.webrtcEnable),
              (e.pushConfig = new o(e.pushConfig)),
              this.cbAndSendCmd('initNetcall', e)
            );
          }),
            (t.keepCalling = function(e) {
              return (
                n.verifyOptions(e, 'type accounts channelId', 'netcall::keepCalling'),
                this.cbAndSendCmd('keepCalling', e)
              );
            }),
            (t.calleeAck = function(e) {
              return (
                n.verifyOptions(e, 'account channelId type accepted', 'netcall::calleeAck'),
                this.cbAndSendCmd('calleeAck', e)
              );
            }),
            (t.hangup = function(e) {
              return (
                n.verifyOptions(e, 'channelId', 'netcall::hangup'), this.cbAndSendCmd('hangup', e)
              );
            }),
            (t.netcallControl = function(e) {
              return (
                n.verifyOptions(e, 'channelId type', 'netcall::netcallControl'),
                this.cbAndSendCmd('netcallControl', e)
              );
            }),
            (t.createChannel = function(e) {
              return this.cbAndSendCmd('createChannel', e);
            }),
            (t.joinChannel = function(e) {
              return (
                n.verifyOptions(e, 'channelName', 'netcall::joinChannel'),
                n.verifyBooleanWithDefault(e, 'liveEnable', !1, '', 'netcall::joinChannel'),
                n.verifyBooleanWithDefault(e, 'webrtcEnable', !1, '', 'netcall::joinChannel'),
                this.cbAndSendCmd('joinChannel', {
                  channelName: e.channelName,
                  liveOption: {
                    liveEnable: e.liveEnable ? 1 : 0,
                    webrtcEnable: e.webrtcEnable ? 1 : 0,
                  },
                })
              );
            }),
            (t.queryAccountUidMap = function(e, t) {
              return this.cbAndSendCmd('queryAccountUidMap', { channelName: e, uids: t });
            });
        },
      };
      e.exports = o;
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
    function(e, t, n) {
      const i = a(n(14));

      const o = a(n(22));

      const r = a(n(21));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      let s = void 0;

      const c = n(25);

      const u = n(356);

      const l = n(375);

      const d = n(374);

      const h = (function(e) {
        function t(e) {
          (0, i.default)(this, t);
          const n = (0, o.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
          return s.merge(n, e), n.init(), n;
        }
        return (0, r.default)(t, e), t;
      })(c);
      h.install = function(e) {
        s = e.util;
      };
      const f = h.prototype;
      (f.init = function() {
        this.reset();
      }),
        (f.reset = function() {
          (this.width = 0), (this.height = 0);
        }),
        (f.initCanvas = function(e) {
          s.merge(this, e);
          const t = this.container || document.body;

          let n = this.canvas;
          n || ((n = this.canvas = document.createElement('canvas')), t.appendChild(n)),
            (n.width = this.width),
            (n.height = this.height);
          let i = this.gl;
          if ((i || (i = this.gl = u.getWebGLContext(n)), i))
            i.viewport(0, 0, this.width, this.height),
              i.clearColor(0, 0, 0, 1),
              i.clear(i.COLOR_BUFFER_BIT),
              u.initShaders(i, l, d),
              this.initBuffer(i),
              this.initTextures(i);
          else {
            this.emit('error', { code: 'notSupportWebGl' });
          }
        }),
        (f.initBuffer = function(e) {
          (this.positionLocation = e.getAttribLocation(e.program, 'a_position')),
            (this.texCoordLocation = e.getAttribLocation(e.program, 'a_texCoord')),
            (this.texCoordBuffer = e.createBuffer());
        }),
        (f.initTextures = function(e) {
          (this.yTexture = this.createTexture(e.TEXTURE0)),
            (this.uTexture = this.createTexture(e.TEXTURE1)),
            (this.vTexture = this.createTexture(e.TEXTURE2));
          const t = e.getUniformLocation(e.program, 'Ytex');
          e.uniform1i(t, 0);
          const n = e.getUniformLocation(e.program, 'Utex');
          e.uniform1i(n, 1);
          const i = e.getUniformLocation(e.program, 'Vtex');
          e.uniform1i(i, 2);
        }),
        (f.createTexture = function(e) {
          const t = this.gl;

          const n = t.createTexture();
          return (
            t.activeTexture(e),
            t.bindTexture(t.TEXTURE_2D, n),
            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE),
            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE),
            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.NEAREST),
            t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.NEAREST),
            n
          );
        }),
        (f.destroyTextures = function() {
          const e = this.gl;
          e &&
            (e.deleteTexture(this.yTexture),
            e.deleteTexture(this.uTexture),
            e.deleteTexture(this.vTexture)),
            (this.yTexture = null),
            (this.uTexture = null),
            (this.vTexture = null);
        }),
        (f.destroyBuffer = function() {
          const e = this.gl;
          e && this.texCoordBuffer && e.deleteBuffer(this.texCoordBuffer),
            (this.texCoordBuffer = null);
        }),
        (f.updateShaders = function() {
          const e = this.gl;

          let t = void 0;
          (t = this.mirror
            ? new Float32Array([-1, 1, 1, 0, -1, -1, 1, 1, 1, 1, 0, 0, 1, -1, 0, 1])
            : new Float32Array([-1, 1, 0, 0, -1, -1, 0, 1, 1, 1, 1, 0, 1, -1, 1, 1])),
            e.bindBuffer(e.ARRAY_BUFFER, this.texCoordBuffer),
            e.bufferData(e.ARRAY_BUFFER, t, e.STATIC_DRAW);
          const n = t.BYTES_PER_ELEMENT;
          e.vertexAttribPointer(this.positionLocation, 2, e.FLOAT, !1, 4 * n, 0),
            e.vertexAttribPointer(this.texCoordLocation, 2, e.FLOAT, !1, 4 * n, 2 * n),
            e.enableVertexAttribArray(this.positionLocation),
            e.enableVertexAttribArray(this.texCoordLocation);
        }),
        (f.updateTextures = function(e) {
          const t = e.y;

          const n = e.u;

          const i = e.v;

          const o = this.gl;

          const r = this.width;

          const a = this.height;
          this.updateTexture(o.TEXTURE0, this.yTexture, t, r, a),
            this.updateTexture(o.TEXTURE1, this.uTexture, n, r / 2, a / 2),
            this.updateTexture(o.TEXTURE2, this.vTexture, i, r / 2, a / 2),
            o.finish();
        }),
        (f.updateTexture = function(e, t, n, i, o) {
          const r = this.gl;
          r.activeTexture(e),
            r.bindTexture(r.TEXTURE_2D, t),
            r.texImage2D(r.TEXTURE_2D, 0, r.LUMINANCE, i, o, 0, r.LUMINANCE, r.UNSIGNED_BYTE, n);
        }),
        (f.drawImage = function(e) {
          if (!this.destroyed) {
            const t = e.width;

            const n = e.height;

            const i = e.y;

            const o = e.u;

            const r = e.v;
            (t === this.width && n === this.height) ||
              ((this.width = t),
              (this.height = n),
              this.clean(),
              this.initCanvas({ width: t, height: n }),
              this.emit('resize', {
                width: t,
                height: n,
                isRemote: this.isRemote,
                container: this.container,
              })),
              this.updateShaders(),
              this.updateTextures({ y: i, u: o, v: r });
            const a = this.gl;
            a.drawArrays(a.TRIANGLE_STRIP, 0, 4);
          }
        }),
        (f.destroy = function() {
          this.destroyed || ((this.destroyed = !0), this.clean(), this.reset());
        }),
        (f.clean = function() {
          this.destroyTextures(), this.destroyBuffer(), this.removeGl();
        }),
        (f.removeGl = function() {
          this.canvas && this.canvas.parentNode && this.canvas.parentNode.removeChild(this.canvas),
            (this.canvas = null),
            (this.canvasInited = !1),
            (this.gl = null);
        }),
        (e.exports = h);
    },
    function(e, t, n) {
      const i = l(n(67));

      const o = l(n(14));

      const r = l(n(22));

      const a = l(n(21));

      const s = n(42);

      const c = n(153);

      const u = l(n(380));
      function l(e) {
        return e && e.__esModule ? e : { default: e };
      }
      let d = void 0;

      const h = n(25);

      const f = n(379);

      const p = n(4);

      const m = n(378);

      const v = n(376);

      const g = n(354);

      const _ = n(209);

      const y = p.agentVersion;

      const b = (function(e) {
        function t(e) {
          (0, o.default)(this, t);
          const n = (0, r.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
          return (
            (e.container = s.element.n2node(e.container)),
            (e.remoteContainer = s.element.n2node(e.remoteContainer)),
            n.setUtil(d),
            d.undef(e.heartbeat) && (e.heartbeat = !0),
            d.merge(n, e),
            n.init(),
            n
          );
        }
        return (0, a.default)(t, e), t;
      })(h);
      b.install = function(e) {
        (d = e.util), m.install(e), v.install(e), g.install(e);
      };
      let S = b.prototype;
      (S.init = function() {
        (this.signal = null),
          (this.signalInited = !1),
          (this.localStreamInfo = null),
          this.resetStatus(),
          this.initProtocol(),
          (this.dataApi = (0, c.DataApi)({
            appkey: this.nim.options.appKey,
            platform: 'PC-Agent',
          }));
      }),
        (S.resetStatus = function() {
          (this.channelId = null),
            (this.channelName = null),
            (this.type = null),
            (this.target = null),
            (this.sessionMode = null),
            (this.sessionConfig = {}),
            (this.isCaller = !1),
            (this.callee = null),
            (this.remoteStreamInfo = {}),
            (this.calling = !1),
            (this.callAccepted = !1),
            (this.callerInfo = null),
            this.nim.protocol.setCurrentNetcall(),
            (this.needQueryAccountMap = {});
        }),
        (S.initProtocol = function() {
          const e = this.nim;
          (this.account = this.nim.account),
            e.on('beCalled', this.onBeCalled.bind(this)),
            e.on('notifyCalleeAck', this.onCalleeAck.bind(this)),
            e.on('notifyHangup', this.onHangup.bind(this)),
            e.on('notifyUploadLog', this.uploadLog.bind(this)),
            e.on('netcallControl', this.onNetcallControl.bind(this)),
            e.on('notifyCalleeAckSync', this.onCalleeAckSync.bind(this)),
            e.on('notifyJoin', this.onNotifyJoin.bind(this));
        }),
        (S.getAccount = function() {
          return this.nim.account;
        }),
        (S.getUid = function() {
          return (this.accountUidMap && this.accountUidMap[this.nim.account]) || '-1';
        }),
        (S.isCurrentChannelId = function() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return this.channelId && this.channelId === e.channelId;
        }),
        (S.notCurrentChannelId = function(e) {
          return !this.isCurrentChannelId(e);
        }),
        (S.rejectWithNoSignal = function() {
          return this.resetWhenHangup(), Promise.reject({ code: 'noConnection' });
        }),
        (S.initSignal = function() {
          const e = this;
          return this.signal
            ? this.stopSignal().then(() => {
                return e._initSignal();
              })
            : this._initSignal();
        }),
        (S._initSignal = function() {
          const e = this;
          return new Promise((t, n) => {
            const i = (e.signal = new m({
              url: f.signalUrl,
              client: e,
              kickLast: e.kickLast,
              account: e.getAccount(),
              heartbeat: e.heartbeat,
              appkey: e.nim.options.appKey,
            }));
            i.on('init', i => {
              if ((e.log(i), !e.checkAgentVersion(i.version)))
                return (
                  e.log('插件版本有更新，请下载最新的插件再使用音视频功能'),
                  e.stopSignal(),
                  (i.error = '请安装最新版插件，方可使用视频功能'),
                  (i.errorType = 'agent_update'),
                  void n(i)
                );
              (e.localStreamInfo = i), (e.signalInited = !0), t();
            }),
              i.on('initError', t => {
                e.log(t),
                  (t = t || {}).code === 417 &&
                    ((t.error = '设备被别的程序占用中, 请检查重试'), (t.errorType = 'device_busy')),
                  t.code === 'noPC' &&
                    ((t.error = '请安装插件PC Agent，方可使用音视频功能'),
                    (t.errorType = 'agent_empty')),
                  n(t),
                  e.rejectWithNoSignal();
              }),
              i.on('close', () => {
                e.emit('signalClosed'), e.stopSignal();
              }),
              i.on('devices', t => {
                e.emit('devices', t);
              }),
              i.on('login', t => {
                e.emit('sessionStarted', t);
              }),
              i.on('deviceStatus', t => {
                e.emit('deviceStatus', t);
              }),
              i.on('userJoined', e.onUserJoin.bind(e)),
              i.on('userLeft', e.onUserLeft.bind(e)),
              i.on('logUploaded', e.onLogUploaded.bind(e)),
              i.on('netStatus', t => {
                const n = t.id;

                const i = t.status;
                e.emit('netStatus', { account: e.getAccountWithUid(n), status: i });
              }),
              i.on('statistics', t => {
                e.emit('statistics', t);
              }),
              i.on('audioVolume', t => {
                const n = t.self;

                const i = t.receiver;

                const o = { self: n };
                i &&
                  i.forEach(t => {
                    const n = t.id;

                    const i = t.status;
                    o[e.getAccountWithUid(n)] = { status: i };
                  }),
                  e.emit('audioVolume', o);
              }),
              i.on('error', e.onError.bind(e)),
              i.on('recordMp4', e.onRecordMp4.bind(e)),
              i.on('heartBeatError', e.onError.bind(e));
          });
        }),
        (S.checkAgentVersion = function() {
          for (
            let e = (arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : '0.0.0.0'
              ).split('.'),
              t = y.split('.'),
              n = 0;
            n < e.length;
            n++
          ) {
            if (+e[n] > +t[n]) return !0;
            if (+e[n] < +t[n]) return !1;
          }
          return !0;
        }),
        (S.stopSignal = function() {
          const e = this;
          return (
            this.stopLocalStream(),
            this.stopRemoteStream(),
            this.signal
              ? this.signal.stopSession().then(() => {
                  e.signal.destroy(), (e.signal = null), (e.signalInited = !1);
                })
              : Promise.resolve()
          );
        }),
        (S.initNetcall = function() {
          const e = this;

          const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

          const n = t.type;

          const i = t.pushConfig;
          return (
            (this.type = n),
            (this.sessionMode = 'p2p'),
            this.nim
              .initNetcall({ type: n, accounts: [this.callee], webrtcEnable: !0, pushConfig: i })
              .then(
                t => {
                  return (e.callerInfo = t), (e.channelId = t.channelId), Promise.resolve(t);
                },
                t => {
                  throw (e.resetWhenHangup(), t);
                }
              )
          );
        }),
        (S.initSession = function() {
          const e = this;

          const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          if (this.signalInited) {
            const n = this.isCaller ? this.callerInfo : t.beCalledInfo;
            this.parseAccountUidMap(n.accountUidMap);
            const o = this.sessionConfig || {};
            return (
              o.awc && this.dataApi.update({ key: 'awc' }),
              o.ans && this.dataApi.update({ key: 'ans' }),
              o.aec && this.dataApi.update({ key: 'aec' }),
              this.signal.startSession((0, i.default)({}, n, o)).then(() => {
                return { channelId: e.channelId };
              })
            );
          }
          return this.rejectWithNoSignal();
        }),
        (S.call = function() {
          const e = this;

          const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (
            this.dataApi.update('p2p'),
            new Promise((n, i) => {
              if (!e.signalInited || e.calling)
                return (
                  e.resetStatus(),
                  i({
                    type: 'statusNotMatch',
                    error: '呼叫失败: 当前正在通话中或者Agent唤起失败，请排查',
                  })
                );
              const o = t.account;

              const r = t.type;

              const a = t.pushConfig;

              const s = t.sessionConfig;

              const c = void 0 === s ? {} : s;
              if (
                ((e.calling = !0),
                (e.isCaller = !0),
                (e.callee = e.target = o),
                (e.sessionConfig = c),
                c.highAudio && e.dataApi.update('hd_audio'),
                void 0 !== c.videoFrameRate &&
                  e.dataApi.update('fps', +c.videoFrameRate == 0 ? 0 : +c.videoFrameRate + 1),
                void 0 !== c.videoEncodeMode &&
                  e.dataApi.update('video_adaptive_strategy', c.videoEncodeMode || 0),
                void 0 !== c.videoBitrate &&
                  e.dataApi.update('video_max_encode_bitrate', c.videoBitrate || ''),
                void 0 !== c.videoQuality)
              ) {
                let u = c.videoQuality;
                u === _.CHAT_VIDEO_QUALITY_540P
                  ? (u = _.CHAT_VIDEO_QUALITY_720P)
                  : u === _.CHAT_VIDEO_QUALITY_720P && (u = _.CHAT_VIDEO_QUALITY_540P),
                  e.dataApi.update('video_quality', u || 0);
              }
              if (o)
                return e
                  .initNetcall({ type: r, pushConfig: a })
                  .then(e => {
                    n(e);
                  })
                  .catch(e => {
                    i(e);
                  });
              e.resetStatus(), i({ code: 'noCalleeAccount' });
            })
          );
        }),
        (S.onBeCalled = function(e) {
          this.log('beCalling', e), this.emit('beCalling', e);
        }),
        (S.response = function() {
          const e = this;

          const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.dataApi.update('p2p');
          const n = t.beCalledInfo;
          if (!n) return Promise.resolve();
          const i = (n.accepted = !1 !== t.accepted);

          const o = (this.sessionConfig = t.sessionConfig || {});
          if (
            (o.highAudio && this.dataApi.update('hd_audio'),
            void 0 !== o.videoFrameRate &&
              this.dataApi.update('fps', +o.videoFrameRate == 0 ? 0 : +o.videoFrameRate + 1),
            void 0 !== o.videoEncodeMode &&
              this.dataApi.update('video_adaptive_strategy', o.videoEncodeMode || 0),
            void 0 !== o.videoBitrate &&
              this.dataApi.update('video_max_encode_bitrate', o.videoBitrate || ''),
            void 0 !== o.videoQuality)
          ) {
            let r = o.videoQuality;
            r === _.CHAT_VIDEO_QUALITY_540P
              ? (r = _.CHAT_VIDEO_QUALITY_720P)
              : r === _.CHAT_VIDEO_QUALITY_720P && (r = _.CHAT_VIDEO_QUALITY_540P),
              this.dataApi.update('video_quality', r || 0);
          }
          return (
            i
              ? ((this.type = n.type),
                (this.channelId = n.channelId),
                (this.target = n.account),
                (this.calling = !0))
              : (this.log('rejectNetcall', n),
                this.packNetcallRecord({
                  type: n.type,
                  channelId: n.channelId,
                  isCaller: !1,
                  target: n.account,
                  recordType: 'rejectNetcall',
                })),
            (this.sessionMode = 'p2p'),
            this.nim.calleeAck(n).then(
              () => {
                if (i) return e.initSession({ beCalledInfo: n });
              },
              t => {
                throw (e.log(t), t);
              }
            )
          );
        }),
        (S.onCalleeAck = function(e) {
          if (!this.notCurrentChannelId(e))
            return e.accepted
              ? this.initSession({ type: e.type })
              : (this.log('netcallRejected', e),
                this.packNetcallRecord({
                  type: e.type,
                  channelId: e.channelId,
                  isCaller: !0,
                  target: e.account,
                  recordType: 'netcallRejected',
                }),
                this.resetWhenHangup(),
                void this.emit('callRejected', e));
        }),
        (S.onUserJoin = function(e) {
          this.log('onUserJoin ', e);
          let t = e.account;

          const n = e.uid;
          !t && n && (e.account = t = this.getAccountWithUid(n)),
            t
              ? this.emitUserJoin(e)
              : ((this.needQueryAccountMap[n] = e),
                this.nim.queryAccountUidMap(this.channelName, [n]));
        }),
        (S.emitUserJoin = function(e) {
          const t = e.uid;

          const n = e.isMeeting;
          (this.remoteStreamInfo[t] = e),
            this.dataApi.start({ uid: this.getUid() }),
            n
              ? this.emit('joinChannel', { type: e.type, uid: e.uid, account: e.account })
              : (this.callAccepted || (this.callAccepted = !0),
                this.emit('callAccepted', { type: e.type, account: e.account, uid: e.uid }));
        }),
        (S.onUserLeft = function(e) {
          const t = this;

          const n = e.account;

          const i = e.uid;
          e.isMeeting
            ? (!n && i && (e.account = this.getAccountWithUid(i)),
              this.emit('leaveChannel', { account: e.account }))
            : (this.log('on user left', e),
              this.calling &&
                setTimeout(() => {
                  (e.account = t.getAccountWithUid(e.uid)), t.onHangup(e);
                }, 1e3));
        }),
        (S.onNetcallControl = function(e) {
          this.emit('control', e);
        }),
        (S.onCalleeAckSync = function(e) {
          this.emit('callerAckSync', e), this.isCurrentChannelId(e) && this.resetWhenHangup();
        }),
        (S.onNotifyJoin = function(e) {
          const t = e.accountUidMap;

          const n = this.needQueryAccountMap;
          for (const i in (this.parseAccountUidMap(t), t)) {
            const o = i;

            const r = t[i];
            if (r in n) {
              const a = n[r];
              (a.account = o), this.emitUserJoin(a), delete n[r];
            }
          }
        }),
        (S.onHangup = function(e) {
          this.dataApi.send(),
            this.emit('hangup', e),
            this.isCurrentChannelId(e) && this.resetWhenHangup();
        }),
        (S.hangup = function() {
          let e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).channelId;
          !e && this.calling && this.channelId && (e = this.channelId),
            e && (this.dataApi.send(), this.nim.hangup({ channelId: e })),
            e === this.channelId &&
              (this.isCaller &&
                !this.callAccepted &&
                (this.log('cancelNetcallBeforeAccept', { channelId: e }),
                this.packNetcallRecord({ recordType: 'cancelNetcallBeforeAccept' })),
              this.resetWhenHangup());
        }),
        (S.packNetcallRecord = function() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

          const t = e.recordType;

          const n = d.exist(e.type) ? e.type : this.type;

          const i = d.exist(e.channelId) ? e.channelId : this.channelId;

          const o = d.exist(e.duration) ? e.duration : 0;

          const r = d.exist(e.isCaller) ? e.isCaller : this.isCaller;

          const a = d.exist(e.target) ? e.target : this.target;

          const s = this.getAccount();

          const c = r ? s : a;

          const u = r ? a : s;

          const l = +new Date();
          this.nim.protocol.onMsg({
            content: {
              msg: {
                attach: JSON.stringify({
                  data: { calltype: n, channel: i, duration: o, ids: [s, a], time: l },
                  id: t,
                }),
                from: c,
                fromClientType: r ? 16 : 0,
                fromDeviceId: '',
                fromNick: '',
                idClient: d.guid(),
                idServer: d.guid(),
                scene: 0,
                time: l,
                to: u,
                type: 5,
              },
            },
          });
        }),
        (S.resetWhenHangup = function() {
          this.resetStatus(), this.signalInited && this.signal.stopSession();
        }),
        (S.control = function() {
          const e = this;

          const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

          const n = t.command;

          let i = t.channelId;
          if ((i || (i = this.channelId), n && i))
            return (
              this.dataApi.update('call_control_type'),
              this.nim.netcallControl({ channelId: i, type: n }).catch(t => {
                throw (e.log(t), t);
              })
            );
        }),
        (S.setVideoViewSize = function(e) {
          return (
            this.dataApi.update('video_crop'),
            this.signalInited ? this.signal.setVideoViewSize(e) : this.rejectWithNoSignal()
          );
        }),
        (S.setVideoViewRemoteSize = function() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return this.signalInited
            ? (e.account && (e.id = this.getUidWithAccount(e.account)),
              this.signal.setVideoViewRemoteSize(e))
            : this.rejectWithNoSignal();
        }),
        (S.setVideoScale = function() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return this.signalInited
            ? (e.account && (e.id = this.getUidWithAccount(e.account)),
              this.signal.setVideoScale(e))
            : this.rejectWithNoSignal();
        }),
        (S.startLocalStream = function(e) {
          const t = this;
          if (
            (this.dataApi.update('display'),
            this.signalInited && !this.stream && this.localStreamInfo)
          ) {
            const n = e || this.container;

            const i = this.localStreamInfo.port;
            (this.stream = new v({
              client: this,
              url: f.genStreamUrl(i),
              container: n,
              mirror: this.mirror,
            })),
              this.stream.on('resize', e => {
                t.emit('streamResize', e);
              }),
              this.stream.on('error', e => {
                t.emit('error', e);
              });
          }
        }),
        (S.stopLocalStream = function() {
          this.stream && (this.stream.destroy(), (this.stream = null));
        }),
        (S.startRemoteStream = function() {
          let e;

          const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.sessionMode === 'p2p'
            ? ((e = this.getUidWithAccount(this.target)),
              this.remoteContainer ||
                this.target ||
                this.nim.logger.error(
                  '不传参数且点对点模式实例化Netcall必须设置remoteContainer与target；传参数必须包含account，node'
                ),
              !this.getRemoteStream(e) &&
                this.remoteStreamInfo[e] &&
                this.addRemoteStream(this.remoteStreamInfo[e]))
            : ((e = t.uid || this.getUidWithAccount(t.account)),
              (t.node = s.element.n2node(t.node)),
              e && t.node
                ? this.addRemoteStream(this.remoteStreamInfo[e], t.node)
                : this.nim.logger.error(
                    '不传参数且点对点模式实例化Netcall必须设置remoteContainer与target；传参数必须包含account，node'
                  ));
        }),
        (S.stopRemoteStream = function(e) {
          return e ? this.removeRemoteStream(e) : this.removeRemoteStreams();
        }),
        (S.addRemoteStream = function(e, t) {
          const n = this;

          const i = e.uid;

          const o = e.port;
          this.remoteStreams || (this.remoteStreams = {});
          let r = this.remoteStreams[i];
          r && r.destroy(),
            (r = this.remoteStreams[i] = new v({
              client: this,
              isRemote: !0,
              url: f.genStreamUrl(o),
              container: t || this.remoteContainer,
              mirror: this.mirrorRemote,
            })).on('resize', e => {
              n.emit('remoteStreamResize', e);
            }),
            r.on('error', e => {
              n.emit('error', e);
            });
        }),
        (S.removeRemoteStreams = function() {
          const e = this;
          this.remoteStreams &&
            Object.keys(this.remoteStreams).forEach(t => {
              e.remoteStreams[t].destroy();
            }),
            (this.remoteStreams = {});
        }),
        (S.removeRemoteStream = function(e) {
          const t = this.getUidWithAccount(e);
          if (!this.remoteStreams[t]) {
            throw { code: 'accountNotMatch' };
          }
          this.remoteStreams[t].destroy();
        }),
        (S.getRemoteStream = function(e) {
          const t = this.getUidWithAccount(e);
          return this.remoteStreams && this.remoteStreams[t];
        }),
        (S.suspendLocalStream = function() {
          this.stream && this.stream.suspend();
        }),
        (S.resumeLocalStream = function() {
          this.stream && this.stream.resume();
        }),
        (S.suspendRemoteStream = function(e) {
          const t = this.getRemoteStream(e || this.target);
          t && t.suspend();
        }),
        (S.resumeRemoteStream = function(e) {
          const t = this.getRemoteStream(e || this.target);
          t && t.resume();
        }),
        (S.switchVideoToAudio = function() {
          const e = this;
          return this.signalInited
            ? (this.dataApi.update('switch_p2p_type'),
              this.signal.switchVideoToAudio().then(() => {
                e.type = _.NETCALL_TYPE_AUDIO;
              }))
            : this.rejectWithNoSignal();
        }),
        (S.switchAudioToVideo = function() {
          const e = this;
          return this.signalInited
            ? (this.dataApi.update('switch_p2p_type'),
              this.signal.switchAudioToVideo().then(() => {
                e.type = _.NETCALL_TYPE_VIDEO;
              }))
            : this.rejectWithNoSignal();
        }),
        (S.getDevicesOfType = function(e) {
          return this.signalInited ? this.signal.getDevicesOfType(e) : this.rejectWithNoSignal();
        }),
        (S.getStoredDevicesOfType = function(e) {
          if (this.signalInited)
            return (
              (e = +e) === _.DEVICE_TYPE_AUDIO_OUT_LOCAL && (e = _.DEVICE_TYPE_AUDIO_OUT_CHAT),
              this.signal.devicesMap[e]
            );
          this.rejectWithNoSignal();
        }),
        (S.hasDevicesOfType = function(e) {
          return this.getStoredDevicesOfType(e);
        }),
        (S.getStartedDeviceOfType = function(e) {
          return this.signalInited ? this.signal.deviceMap[e] : this.rejectWithNoSignal();
        }),
        (S.hasStartedDeviceOfType = function(e) {
          return this.getStartedDeviceOfType(e);
        }),
        (S.stopDevice = function(e) {
          return this.signalInited
            ? this.hasStartedDeviceOfType(e)
              ? this.signal.stopDevice(e)
              : Promise.resolve()
            : this.rejectWithNoSignal();
        }),
        (S.startDevice = function(e) {
          const t = e.type;

          let n = e.device;
          if (this.signalInited) {
            if (d.exist(t) && !n) {
              if (this.hasStartedDeviceOfType(t)) return Promise.resolve();
              this.hasDevicesOfType(t) && (n = e.device = this.getStoredDevicesOfType(t)[0]);
            }
            return n
              ? this.signal.startDevice(e)
              : Promise.reject((0, i.default)({ type: 'noDevice' }, e));
          }
          return this.rejectWithNoSignal();
        }),
        (S.setSessionVideoQuality = function(e) {
          if (this.signalInited) {
            if (void 0 !== e) {
              let t = e;
              t === _.CHAT_VIDEO_QUALITY_540P
                ? (t = _.CHAT_VIDEO_QUALITY_720P)
                : t === _.CHAT_VIDEO_QUALITY_720P && (t = _.CHAT_VIDEO_QUALITY_540P),
                this.dataApi.update('video_quality', t || 0);
            }
            return this.signal.setVideoQuality(e);
          }
          return this.rejectWithNoSignal();
        }),
        (S.setSessionVideoFrameRate = function(e) {
          return this.signalInited
            ? (this.dataApi.update('fps', void 0 !== e ? +e + 1 : 0),
              this.signal.setVideoFrameRate(e))
            : this.rejectWithNoSignal();
        }),
        (S.setSessionVideoBitrate = function(e) {
          return this.signalInited
            ? (this.dataApi.update('video_max_encode_bitrate', e || ''),
              this.signal.setVideoBitrate(e))
            : this.rejectWithNoSignal();
        }),
        (S.setCaptureVolume = function(e) {
          return (
            (e = void 0 === e ? 255 : e).constructor === String && (e = +e || 255),
            this.signalInited ? this.signal.setCaptureVolume(e) : this.rejectWithNoSignal()
          );
        }),
        (S.setPlayVolume = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          /(Number|String)/.test(e.constructor) && (e = { volume: e });
          let t = e.volume;
          return (
            (t = void 0 === t ? 255 : t),
            this.signalInited ? this.signal.setPlayVolume(t) : this.rejectWithNoSignal()
          );
        }),
        (S.netDetect = function(e, t) {
          return (
            this.dataApi.update({ key: 'net_detect' }),
            (e = void 0 === e ? _.NETDETECT_AUDIO : e),
            (t = t || _.CHAT_VIDEO_QUALITY_480P),
            this.signalInited
              ? this.signal.netDetect({ appKey: this.nim.options.appKey, type: e, quality: t })
              : this.rejectWithNoSignal()
          );
        }),
        (S.uploadLog = function() {
          const e = this;
          this.signalInited &&
            this.nim.getSimpleNosToken().then(
              t => {
                e.signal.uploadLog(t);
              },
              t => {
                e.log(t);
              }
            );
        }),
        (S.onLogUploaded = function(e) {
          this.nim.uploadSdkLogUrl(e);
        }),
        (S.log = function() {
          const e = this.nim.logger;
          e.log(...arguments);
        }),
        (S.info = function() {
          const e = this.nim.logger;
          e.info(...arguments);
        }),
        (S.destroy = function() {}),
        (S = Object.assign(S, u.default)),
        (e.exports = b),
        n(372);
    },
    function(e, t, n) {
      const i = {};

      const o = (i.create3DContext = function(e, t) {
        for (
          var n = ['webgl', 'experimental-webgl', 'webkit-3d', 'moz-webgl'], i = null, o = 0;
          o < n.length;
          ++o
        ) {
          try {
            i = e.getContext(n[o], t);
          } catch (e) {}
          if (i) {
            console.log('use', n[o]);
            break;
          }
        }
        return i;
      });
      i.initShaders = function(e, t, n) {
        const i = r(e, t, n);
        return i
          ? (e.useProgram(i), (e.program = i), !0)
          : (console.log('Failed to create program'), !1);
      };
      var r = (i.createProgram = function(e, t, n) {
        const i = a(e, e.VERTEX_SHADER, t);

        const o = a(e, e.FRAGMENT_SHADER, n);
        if (!i || !o) return null;
        const r = e.createProgram();
        if (!r) return null;
        if (
          (e.attachShader(r, i),
          e.attachShader(r, o),
          e.linkProgram(r),
          !e.getProgramParameter(r, e.LINK_STATUS))
        ) {
          const s = e.getProgramInfoLog(r);
          return (
            console.log(`Failed to link program: ${s}`),
            e.deleteProgram(r),
            e.deleteShader(o),
            e.deleteShader(i),
            null
          );
        }
        return r;
      });

      var a = (i.loadShader = function(e, t, n) {
        const i = e.createShader(t);
        return i == null
          ? (console.log('unable to create shader'), null)
          : (e.shaderSource(i, n), e.compileShader(i), i);
      });
      (i.getWebGLContext = function(e, t) {
        const n = o(e);
        return n || null;
      }),
        window.requestAnimationFrame ||
          (window.requestAnimationFrame =
            window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function(e) {
              window.setTimeout(e, 1e3 / 60);
            }),
        window.cancelAnimationFrame ||
          (window.cancelAnimationFrame =
            window.cancelRequestAnimationFrame ||
            window.webkitCancelAnimationFrame ||
            window.webkitCancelRequestAnimationFrame ||
            window.mozCancelAnimationFrame ||
            window.mozCancelRequestAnimationFrame ||
            window.msCancelAnimationFrame ||
            window.msCancelRequestAnimationFrame ||
            window.oCancelAnimationFrame ||
            window.oCancelRequestAnimationFrame ||
            window.clearTimeout),
        (e.exports = i);
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
    function(e, t, n) {
      const i = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n(67));
      const o = n(355);

      const r = n(209);

      const a = o.prototype;

      let s = void 0;
      (a.setUtil = function(e) {
        s = e;
      }),
        (a.createChannel = function(e) {
          return (
            s.verifyOptions(e, 'channelName'),
            (e.custom = e.custom || ''),
            this.dataApi.update('meeting'),
            (e.webrtcEnable = !0),
            this.nim.createChannel(e)
          );
        }),
        (a.joinChannel = function(e) {
          const t = this;
          this.dataApi.update('meeting'), s.verifyOptions(e, 'channelName type');
          const n = e.type;

          const o = e.sessionConfig;

          const a = void 0 === o ? {} : o;
          if (
            ((a.bypassRtmp = e.liveEnable),
            (a.customLayout = e.sessionConfig.layout || e.sessionConfig.customLayout),
            (a.singleRecord = e.sessionConfig.singleRecord ? 1 : 0),
            e.liveEnable &&
              this.dataApi.update('bypass', void 0 !== a.splitMode ? +a.splitMode + 1 : 0),
            a.highAudio && this.dataApi.update('hd_audio'),
            void 0 !== a.videoFrameRate &&
              this.dataApi.update('fps', +a.videoFrameRate == 0 ? 0 : +a.videoFrameRate + 1),
            void 0 !== a.videoEncodeMode &&
              this.dataApi.update('video_adaptive_strategy', a.videoEncodeMode || 0),
            void 0 !== a.videoBitrate &&
              this.dataApi.update('video_max_encode_bitrate', a.videoBitrate || ''),
            void 0 !== a.videoQuality)
          ) {
            let c = a.videoQuality;
            c === r.CHAT_VIDEO_QUALITY_540P
              ? (c = r.CHAT_VIDEO_QUALITY_720P)
              : c === r.CHAT_VIDEO_QUALITY_720P && (c = r.CHAT_VIDEO_QUALITY_540P),
              this.dataApi.update('video_quality', c || 0);
          }
          if (
            (a.awc && this.dataApi.update({ key: 'awc' }),
            a.ans && this.dataApi.update({ key: 'ans' }),
            a.aec && this.dataApi.update({ key: 'aec' }),
            this.signalInited)
          )
            return this.nim
              .joinChannel({
                channelName: e.channelName,
                liveEnable: e.liveEnable,
                webrtcEnable: !0,
              })
              .then(o => {
                return (
                  (o.serverInfo = JSON.parse(o.serverMap)),
                  (t.callerInfo = o),
                  (t.channelId = o.channelId),
                  (t.channelName = e.channelName),
                  (t.sessionMode = 'meeting'),
                  t.parseAccountUidMap(o.accountUidMap),
                  (o.uid = t.getUidWithAccount(t.account)),
                  t.dataApi.start({ uid: o.uid }),
                  t.signal
                    .startSession((0, i.default)({}, o, { type: n }, e.sessionConfig), !0)
                    .then(e => {
                      return (e.custom = o.custom), e;
                    })
                );
              });
          return Promise.reject({ code: 'noConnection' });
        }),
        (a.leaveChannel = function() {
          if (this.signalInited) return this.dataApi.send(), this.signal.stopSession();
          return Promise.reject({ code: 'noConnection' });
        }),
        (a.changeRoleToPlayer = function() {
          return this.dataApi.update('actor'), this.signal.setRole(0);
        }),
        (a.changeRoleToAudience = function() {
          return this.signal.setRole(1);
        }),
        (a.updateRtmpUrl = function(e) {
          return this.signal.updateRtmpUrl(e);
        });
    },
    function(e, t) {
      e.exports =
        "'use strict';\n\n/* 该web worker 职能为向 websocket 发送指令及数据*/\n\nvar that = {};\n\nthat.init = function (data) {\n  if (!that.socket) {\n    var url = that.url = data.info.url;\n    var socket = that.socket = new WebSocket(url);\n    socket.onopen = function (event) {\n      postMessage({\n        cmd: 'open'\n      });\n    };\n    socket.onmessage = function (event) {\n      postMessage({\n        cmd: 'message',\n        data: event.data\n      }, [event.data]);\n    };\n    socket.onerror = function (event) {\n      postMessage({\n        cmd: 'error'\n      });\n    };\n    socket.onclose = function (event) {\n      postMessage({ // web 端被动结束\n        cmd: 'close'\n      });\n    };\n    socket.binaryType = 'arraybuffer';\n  }\n};\n\nthat.close = function () {\n  if (that.socket) {\n    that.socket.onopen = null;\n    that.socket.onmessage = null;\n    that.socket.onerror = null;\n    that.socket.onclose = null;\n    that.socket.close(); // 结束socket\n    that.socket = null;\n  }\n  self.close(); // 结束worker，web端主动\n};\n\nthat.send = function (obj) {\n  if (that.socket && that.socket.readyState === WebSocket.OPEN) {\n    that.socket.send(JSON.stringify(obj));\n  }\n};\n// 侦听主线程的worker消息\nself.addEventListener('message', function (event) {\n  var data = event.data;\n  switch (data.cmd) {\n    case 'init':\n      // worker第一步2\n      that.init(data);\n      break;\n    case 'close':\n      // web发起，结束worker及相应socket\n      that.send(data.info);\n      that.close(data);\n      break;\n    case 'msg':\n      that.send(data.info);\n      break;\n  }\n});";
    },
    function(e, t) {
      e.exports =
        'precision mediump float;\nuniform sampler2D Ytex, Utex, Vtex;\nvarying vec2 v_texCoord;\nvoid main(void) {\n  float r, g, b, y, u, v;\n  vec4 yuv, rgb;\n  y = texture2D(Ytex, v_texCoord).r;\n  u = texture2D(Utex, v_texCoord).r;\n  v = texture2D(Vtex, v_texCoord).r;\n  yuv = vec4(y, u, v, 1.0);\n  yuv = yuv - vec4(0.0625, 0.5, 0.5, 0.0);\n  yuv = mat4(\n    1.1643, 0.0, 0.0, 0.0,\n    0.0, 1.0, 0.0, 0.0,\n    0.0, 0.0, 1.0, 0.0,\n    0.0, 0.0, 0.0, 1.0\n  ) * yuv;\n  rgb = mat4(\n    1.0, 1.0, 1.0, 0.0,\n    0.0, -0.3917, 2.017, 0.0,\n    1.5958, -0.8129, 0.0, 0.0,\n    0.0, 0.0, 0.0, 1.0\n  ) * yuv;\n  gl_FragColor = rgb;\n  // y = 1.1643 * (y - 0.0625);\n  // u = u - 0.5;\n  // v = v - 0.5;\n  // r = y + 1.5958 * v;\n  // g = y - 0.39173 * u - 0.81290 * v;\n  // b = y + 2.017 * u;\n  // gl_FragColor = vec4(r, g, b, 1.0);\n}\n';
    },
    function(e, t) {
      e.exports =
        'attribute vec4 a_position;\nattribute vec2 a_texCoord;\nvarying vec2 v_texCoord;\nvoid main () {\n  gl_Position = a_position;\n  v_texCoord = a_texCoord;\n}\n';
    },
    function(e, t, n) {
      const i = a(n(14));

      const o = a(n(22));

      const r = a(n(21));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      let s = void 0;

      const c = n(25);

      const u = n(354);

      const l = n(373);

      const d = (function(e) {
        function t(e) {
          (0, i.default)(this, t);
          const n = (0, o.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
          return s.merge(n, e), n.init(), n;
        }
        return (0, r.default)(t, e), t;
      })(c);
      d.install = function(e) {
        s = e.util;
      };
      const h = d.prototype;
      (h.init = function() {
        this.reset(),
          this.initRender(),
          this.initWorker(),
          window.addEventListener('beforeunload', this.destroy.bind(this));
      }),
        (h.initRender = function() {
          const e = this;
          (this.render = new u({
            client: this.client,
            stream: this,
            isRemote: this.isRemote,
            container: this.container,
            mirror: this.mirror,
          })),
            this.render.on('resize', t => {
              e.emit('resize', t);
            }),
            this.render.on('error', t => {
              e.emit('error', t);
            });
        }),
        (h.reset = function() {
          (this.currFrameCount = 0),
            (this.width = 0),
            (this.height = 0),
            (this.timetag = 0),
            (this.worker = null),
            (this.render = null);
        }),
        (h.initWorker = function() {
          const e = this;

          const t = new Blob([l], { type: 'application/javascript' });
          (this.worker = new Worker(URL.createObjectURL(t))).addEventListener('message', t => {
            const n = t.data;
            switch (n.cmd) {
              case 'open':
                e.onOpen();
                break;
              case 'error':
                e.onError();
                break;
              case 'close':
                e.onClose();
                break;
              case 'message':
                e.onMessage(n);
            }
          }),
            this.sendWorkerCmd({ cmd: 'init', info: { url: this.url } });
        }),
        (h.destroyWorker = function() {
          this.worker && this.worker.terminate();
        }),
        (h.sendWorkerCmd = function(e) {
          this.worker && this.worker.postMessage(e);
        }),
        (h.getName = function() {
          return `${this.isRemote ? 'remote ' : ''}stream socket ${this.url}`;
        }),
        (h.onOpen = function(e) {
          const t = `${this.getName()} open -> stream.js`;
          this.logToConsole(t), this.logToPC(t);
        }),
        (h.startStatisticsTimer = function() {
          const e = this;
          this.statisticsTimer = setInterval(() => {
            const t = e.currFrameCount - e.lastFrameCount;
            e.sendWorkerCmd({
              cmd: 'msg',
              info: {
                cmd: 'statistics',
                info: { lastFrameCount: e.lastFrameCount, fps: t, latency: e.latency },
              },
            }),
              (e.lastFrameCount = e.currFrameCount),
              (e.latency = 0);
          }, 1e3);
        }),
        (h.onError = function(e) {
          if (!this.destroyed) {
            const t = `${this.getName()} error -> stream.js`;
            this.logToConsole(t), this.logToPC(t), this.destroy();
          }
        }),
        (h.onClose = function(e) {
          this.destroy(e);
        }),
        (h.onMessage = function(e) {
          const t = e.data;
          if (!this.destroyed && t instanceof ArrayBuffer) {
            const n = t.byteLength;
            this.render && !this.suspended && this.renderFrame(t, n);
          }
        }),
        (h.renderFrame = function(e, t) {
          const n = new DataView(e);

          const i = (this.width = n.getUint32(0));

          const o = (this.height = n.getUint32(4));

          const r = n.getUint32(8);

          const a = n.getUint32(12);
          this.timetag = 1e3 * r + a;
          const s = i * o;

          const c = s / 4;

          const u = s / 4;
          if (16 + s + c + u !== t) {
            const l = `yuv数据长度不匹配: total ${t}, meta 16, width ${i}, height ${o}, yLength ${s} uLength ${c} vLength ${u}`;
            return this.logToConsole(l), void this.logToPC(l);
          }
          this.currFrameCount++,
            this.scheduleRender({
              id: this.currFrameCount,
              width: i,
              height: o,
              y: new Uint8Array(e, 16, s),
              u: new Uint8Array(e, 16 + s, c),
              v: new Uint8Array(e, 16 + s + c),
            });
        }),
        (h.scheduleRender = function(e) {
          this.render && !this.suspended && this.render.drawImage(e);
        }),
        (h.suspend = function() {
          this.suspended = !0;
        }),
        (h.resume = function() {
          this.suspended = !1;
        }),
        (h.destroy = function(e) {
          this.sendWorkerCmd({ cmd: 'close', info: { cmd_type: 'on_clear_media' } }),
            (this.destroyed = !0),
            this.render && this.render.destroy(),
            this.reset();
          const t = e && e.constructor === Object ? e.code : '';

          const n = `${this.getName()} destroy: code - ${t} -> stream.js`;
          this.logToConsole(n), this.logToPC(n);
        }),
        (h.logToConsole = function() {
          const e = this.client;
          e && e.log(...arguments);
        }),
        (h.logToPC = function() {
          const e = this.client;
          if (e) {
            const t = e.signal;
            t && t.log(...arguments);
          }
        }),
        (e.exports = d);
    },
    function(e, t, n) {
      const i = {
        sortDevices(e) {
          e &&
            e.length > 1 &&
            e.sort((e, t) => {
              const n = e.name.toLowerCase().indexOf('virtual') !== -1;

              const i = e.path.toLowerCase().indexOf('virtual') !== -1;

              const o = t.name.toLowerCase().indexOf('virtual') !== -1;

              const r = t.path.toLowerCase().indexOf('virtual') !== -1;
              return i ? 1 : r ? -1 : n && o ? 0 : n ? 1 : o ? -1 : 0;
            });
        },
      };
      e.exports = i;
    },
    function(e, t, n) {
      const i = s(n(67));

      const o = s(n(14));

      const r = s(n(22));

      const a = s(n(21));
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      let c = void 0;

      const u = n(25);

      const l = n(209);

      const d = n(377);

      const h = n(148);

      const f = (function(e) {
        function t(e) {
          (0, o.default)(this, t);
          const n = (0, r.default)(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
          return (
            c.merge(n, e),
            n.reset(),
            window.addEventListener('beforeunload', () => {
              n.destroy();
            }),
            n
          );
        }
        return (0, a.default)(t, e), t;
      })(u);
      f.install = function(e) {
        c = e.util;
      };
      const p = f.prototype;
      (p.reset = function() {
        (this.inited = !1),
          (this.isMeeting = !1),
          (this.hasInvokePC = !1),
          (this.cmdId = 1),
          (this.cmdTasksMap = {}),
          (this.sessionStopped = !1),
          (this.devicesMap = {}),
          (this.deviceMap = {}),
          this.initSocket(),
          (this.audioGroup = { aec: 1, ns: 1, vad: 1, awc: 0 });
      }),
        (p.initSocket = function() {
          const e = (this.socket = new WebSocket(this.url));
          (e.onopen = this.onOpen.bind(this)),
            (e.onmessage = this.onMessage.bind(this)),
            (e.onerror = this.onError.bind(this)),
            (e.onclose = this.onClose.bind(this));
        }),
        (p.onOpen = function(e) {
          const t = this;

          const n = this.heartbeat ? 1 : 0;

          const i = `${this.getName()} open -> signal.js`;
          (this.inited = !0),
            this.logToConsole(i),
            this.log(i),
            this.emit('open'),
            this.sendCmd({
              type: 'on_init',
              info: {
                account: this.account,
                type: this.kickLast ? 1 : 0,
                heartbeat: n,
                app_key: this.appkey,
              },
            })
              .then(this.onInit.bind(this))
              .catch(e => {
                t.logToConsole('init error -> signal.js', e), t.emit('initError', e);
              });
        }),
        (p.onError = function(e) {
          if (!this.destroyed && this.inited) {
            const t = `${this.getName()} error -> signal.js`;
            this.logToConsole(t);
          }
        }),
        (p.onClose = function(e) {
          const t = this;
          if (!this.destroyed)
            if (this.inited) {
              const n = `${this.getName()} close -> signal.js : ${e.code}`;
              this.logToConsole(n), (this.inited = !1), this.emit('close');
            } else {
              this.hasInvokePC || ((this.hasInvokePC = !0), this.invokePC());
              let i = this.backoff;
              i || (i = this.backoff = new h({ min: 1e3, max: 2e3 })),
                i.attempts === 3
                  ? this.emit('initError', { code: 'noPC' })
                  : setTimeout(() => {
                      t.initSocket();
                    }, i.duration());
            }
        }),
        (p.invokePC = function() {
          const e = document.createElement('iframe');
          (e.src = 'NIMWebAgent:invokePC'),
            document.body.appendChild(e),
            setTimeout(() => {
              e.parentNode && e.parentNode.removeChild(e);
            }, 0);
        }),
        (p.onMessage = function(e) {
          if (!this.destroyed) {
            const t = JSON.parse(e.data);

            const n = t.cmd_id;

            const i = t.cmd_type;

            const o = t.cmd_info;
            this.shouldPrintMsg({ cmdType: i, cmdInfo: o }) &&
              i !== 'on_heartbeat_notify' &&
              this.client.info('signal socket msg', t);
            const r = this.cmdTasksMap[n];
            if (r) delete this.cmdTasksMap[n], o.code === 200 ? r.resolve(o) : r.reject(o);
            else
              switch (i) {
                case 'device_status_notify':
                  this.onDeviceStatus(o);
                  break;
                case 'session_notify':
                  this.onSessionNotify(o);
                  break;
                case 'upload_log_notify':
                  this.onUploadLogNotify(o);
              }
          }
        }),
        (p.shouldPrintMsg = function(e) {
          const t = e.cmdType;

          const n = e.cmdInfo;
          return t !== 'session_notify' || (!n.audio_volume && !n.net && !n.static_info);
        }),
        (p.sendCmd = function(e) {
          const t = this;
          return new Promise((n, o) => {
            const r = e.type === 'on_heartbeat' ? 0 : t.cmdId++;

            const a = (0, i.default)(
              { cmd_id: r, cmd_type: e.type, cmd_info: e.info || {} },
              e.extra
            );
            t.socket && t.socket.readyState === WebSocket.OPEN
              ? (e.type !== 'on_heartbeat' && t.logToConsole('send signal cmd', a),
                (t.cmdTasksMap[r] = { resolve: n, reject: o }),
                t.socket.send(JSON.stringify(a)))
              : o({ code: 'noConnection' });
          });
        }),
        (p.onInit = function(e) {
          const t = e.code;

          const n = e.version;

          const i = e.port;

          const o = e.device_list_notify;
          t === 200 &&
            (o.forEach(this.onDevices, this),
            this.emit('init', { port: i, version: n, code: t }),
            this.startHeartBeat());
        }),
        (p.startHeartBeat = function() {
          const e = this;
          this.heartBeatTimer && this.stopHeartBeat(),
            (this.heartBeatTimer = setInterval(() => {
              e.sendCmd({ type: 'on_heartbeat', info: {} }).catch(() => {
                e.emit('heartBeatError', { type: 'heartbeatError' });
              });
            }, 15e3));
        }),
        (p.stopHeartBeat = function() {
          clearInterval(this.heartBeatTimer), (this.heartBeatTimer = null);
        }),
        (p.setVideoViewSize = function() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

          const t = parseInt(e.width) || 0;

          const n = parseInt(e.height) || 0;

          const i = void 0 === e.cut ? 1 : ~~e.cut;
          return this.sendCmd({
            type: 'on_capture_video_size',
            info: { width: t, height: n, cut: i },
          });
        }),
        (p.setVideoViewRemoteSize = function(e) {
          const t = parseInt(e.width) || 0;

          const n = parseInt(e.height) || 0;

          const i = e.id || 0;

          const o = void 0 === e.cut ? 1 : ~~e.cut;
          return this.sendCmd({
            type: 'on_rec_video_size',
            info: { id: i, width: t, height: n, cut: o },
          });
        }),
        (p.setVideoScale = function(e) {
          const t = e.type;

          const n = void 0 === t ? l.CHAT_VIDEO_SCALE_None : t;

          const i = e.id;
          return this.sendCmd({ type: 'on_send_video_Scale', info: { id: i, type: n } });
        }),
        (p.getDevicesOfType = function(e) {
          const t = this;
          return this.sendCmd({ type: 'on_get_devices', info: { type: e } })
            .then(e => {
              return (e.devices = e.devices || []), t.onDevices(e), e;
            })
            .catch(e => {
              throw e;
            });
        }),
        (p.onDevices = function(e) {
          const t = e.type;

          const n = e.devices;
          if (n && n.length) {
            d.sortDevices(n);
            const i = l.getDeviceTypeStr(t);
            i &&
              ((this.devicesMap[t] = n), this.emit('devices', { type: t, typeStr: i, devices: n }));
          }
        }),
        (p.startAllDevices = function() {
          const e = this;

          const t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

          const n = t.videoQuality;

          const i = t.audioOutType;
          Object.keys(this.devicesMap).forEach(t => {
            (t = +t) === l.DEVICE_TYPE_AUDIO_OUT_CHAT &&
              i === l.DEVICE_TYPE_AUDIO_OUT_LOCAL &&
              (t = i);
            const o = e.devicesMap[t];
            e.startDevice({ device: o[0], type: t, videoQuality: n });
          });
        }),
        (p.startDevice = function(e) {
          const t = this;

          const n = e.device;

          let i = e.type;

          const o = e.width;

          const r = e.height;
          if (n) {
            const a = { type: (i = +i), path: n.path };
            return (
              i === l.DEVICE_TYPE_VIDEO &&
                ((a.width = parseInt(o) || 0), (a.height = parseInt(r) || 0)),
              (this.deviceMap[i] = n),
              this.sendCmd({ type: 'on_start_device', info: a }).catch(() => {
                throw (delete t.deviceMap[i], a);
              })
            );
          }
        }),
        (p.stopDevice = function(e) {
          const t = this;

          const n = this.deviceMap[e];
          return (
            delete this.deviceMap[e],
            this.sendCmd({ type: 'on_stop_device', info: { type: e } }).catch(() => {
              t.deviceMap[e] = n;
            })
          );
        }),
        (p.onDeviceStatus = function(e) {
          const t = e.type;

          const n = e.status;

          const o = (1 & n) == 1;

          const r = (4 & n) == 4;

          const a = (16 & n) == 16;
          (8 & n) == 8 &&
            ((this.deviceMap[t] = e),
            this.emit('deviceStatus', (0, i.default)({}, e, { status: 'started' }))),
            a &&
              (delete this.deviceMap[t],
              this.emit('deviceStatus', (0, i.default)({}, e, { status: 'stopped' }))),
            r &&
              ((this.deviceMap[t] = e),
              this.emit('deviceStatus', (0, i.default)({}, e, { status: 'reset' }))),
            o && this.emit('deviceStatus', (0, i.default)({}, e, { status: 'change' }));
        }),
        (p.startSession = function(e, t) {
          const n = this;
          this.sessionStopped = !1;
          const i = c.guid();
          this.sessionId = i;
          const o = e.type;
          this.type = o;
          const r = {
            id: e.uid,
            cid: e.channelId,
            type: o,
            p2p_connect: 1,
            dispatch: e.serverMap,
            config: e.clientConfig,
            v_encode_mode: this.normalizeVideoEncodeMode(e.videoEncodeMode),
            video_quality: this.normalizeVideoQuality(e.videoQuality),
            video_record: e.recordVideo ? 1 : 0,
            record: e.recordAudio ? 1 : 0,
            high_rate: e.highAudio ? 1 : 0,
            frame_rate: this.normalizeVideoFrameRate(e.videoFrameRate),
            max_video_rate: this.normalizeVideoBitrate(e.videoBitrate),
            custom_layout: e.customLayout,
          };
          return (
            t &&
              ((r.meeting_mode = 1),
              (r.bypass_rtmp = e.bypassRtmp ? 1 : 0),
              (r.rtmp_url = e.rtmpUrl || ''),
              (r.rtmp_record = e.rtmpRecord ? 1 : 0),
              (r.split_mode = e.splitMode || 0),
              (r.single_record = e.singleRecord || 0)),
            r.dispatch &&
              r.dispatch.constructor !== String &&
              (r.dispatch = JSON.stringify(r.dispatch)),
            this.sendCmd({ type: 'on_start_chat', info: r, extra: { session_id: i } }).then(i => {
              const o = i.login;

              const r = i.error;
              if (r) throw r;
              return (
                (n.isMeeting = t),
                void 0 !== e.ns && n.audioControl({ ns: e.ns }),
                void 0 !== e.vad && n.audioControl({ vad: e.vad }),
                void 0 !== e.aec && n.audioControl({ aec: e.aec }),
                void 0 !== e.awc && n.awc(e.awc),
                { login: o }
              );
            })
          );
        }),
        (p.stopSession = function() {
          return this.sessionStopped
            ? Promise.resolve()
            : ((this.sessionStopped = !0),
              (this.isMeeting = !1),
              this.sendCmd({ type: 'on_stop_chat' }));
        }),
        (p.clear = function() {
          this.sendCmd({ type: 'on_clear' });
        }),
        (p.switchVideoToAudio = function() {
          return this.sendCmd({ type: 'on_set_chat_mode', info: { type: l.NETCALL_TYPE_AUDIO } });
        }),
        (p.switchAudioToVideo = function() {
          return this.sendCmd({ type: 'on_set_chat_mode', info: { type: l.NETCALL_TYPE_VIDEO } });
        }),
        (p.logToConsole = function() {
          const e = this.client;
          e && e.log(...arguments);
        }),
        (p.log = function(e) {
          e && this.doLog({ msg: e, level: 3 });
        }),
        (p.warn = function(e) {
          e && this.doLog({ msg: e, level: 2 });
        }),
        (p.err = function(e) {
          e && this.doLog({ msg: e, level: 1 });
        }),
        (p.doLog = function() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

          const t = e.msg;

          const n = e.level;
          return this.sendCmd({ type: 'on_log', info: { type: n, content: `${t}` } }).catch(
            () => {}
          );
        }),
        (p.uploadLog = function(e) {
          const t = e.bucket;

          const n = e.objectName;

          const i = e.token;
          return this.sendCmd({
            type: 'on_upload_log',
            info: { nos_bucket: t, nos_object: n, nos_header_token: i },
          }).catch(() => {});
        }),
        (p.normalizeVideoEncodeMode = function(e) {
          return parseInt(e) || l.CHAT_VIDEO_ENCODEMODE_NORMAL;
        }),
        (p.normalizeVideoQuality = function(e) {
          return parseInt(e) || l.CHAT_VIDEO_QUALITY_480P;
        }),
        (p.setVideoQuality = function(e) {
          return this.sendCmd({
            type: 'on_set_video_quality',
            info: { type: this.normalizeVideoQuality(e) },
          });
        }),
        (p.normalizeVideoFrameRate = function(e) {
          return parseInt(e) || l.CHAT_VIDEO_FRAME_RATE_NORMAL;
        }),
        (p.setVideoFrameRate = function(e) {
          return this.sendCmd({
            type: 'on_set_video_frame_rate',
            info: { type: this.normalizeVideoFrameRate(e) },
          });
        }),
        (p.normalizeVideoBitrate = function(e) {
          return parseInt(e) || 0;
        }),
        (p.setVideoBitrate = function(e) {
          return this.sendCmd({
            type: 'on_set_video_bitrate',
            info: { code: this.normalizeVideoBitrate(e) },
          });
        }),
        (p.netDetect = function() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

          const t = e.appKey;

          const n = e.type;

          const i = e.quality;

          const o = void 0 === i ? 0 : i;
          return this.sendCmd({ type: 'on_net_detect', info: { app_key: t, type: n, quality: o } });
        }),
        (p.normalizeVolumn = function(e) {
          return (
            (e = +e),
            (c.isNumber(e) && !isNaN(e)) || (e = 255),
            e < 0 && (e = 0),
            e > 255 && (e = 255),
            e
          );
        }),
        (p.setCaptureVolume = function(e) {
          return (
            (e = this.normalizeVolumn(e)),
            this.sendCmd({ type: 'on_capture_volume', info: { status: e } })
          );
        }),
        (p.setPlayVolume = function(e) {
          return (
            (e = this.normalizeVolumn(e)),
            this.sendCmd({ type: 'on_play_volume', info: { status: e } })
          );
        }),
        (p.setRole = function(e) {
          return this.sendCmd({ type: 'on_set_viewer', info: { status: e } });
        }),
        (p.setAudioBlack = function(e, t) {
          return this.sendCmd({ type: 'on_set_audio_black', info: { id: e, status: t } });
        }),
        (p.setVideoBlack = function(e, t) {
          return this.sendCmd({ type: 'on_set_video_black', info: { id: e, status: t } });
        }),
        (p.updateRtmpUrl = function(e) {
          return this.sendCmd({ type: 'on_update_rtmp_url', info: { content: e } });
        }),
        (p.startRecordMp4 = function() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

          const t = e.path;

          const n = e.id;

          const i = void 0 === n ? '' : n;

          const o = e.aac;

          const r = void 0 !== o && o;

          const a = e.recode;

          const s = void 0 === a || a;

          const c = e.width;

          const u = void 0 === c ? 0 : c;

          const l = e.height;

          const d = void 0 === l ? 0 : l;
          return (
            console.log('startRecordMp4', r, s, u, d),
            this.sendCmd({
              type: 'on_record_mp4',
              info: {
                path: t,
                id: i,
                mp4_audio: ~~r,
                mp4_recode: !!s,
                mp4_width: +u,
                mp4_height: +d,
              },
            })
          );
        }),
        (p.stopRecordMp4 = function(e) {
          const t = e.id;

          const n = void 0 === t ? 0 : t;
          return this.sendCmd({ type: 'on_stop_record_mp4', info: { id: n } });
        }),
        (p.startRecordAac = function(e) {
          const t = e.path;
          return this.sendCmd({ type: 'on_record_aac', info: { path: t } });
        }),
        (p.stopRecordAac = function() {
          return this.sendCmd({ type: 'on_stop_record_aac', info: {} });
        }),
        (p.onSessionNotify = function(e) {
          e &&
            (e.user_joined
              ? (console.log('onSessionNotify ', e),
                this.emit('userJoined', {
                  uid: e.user_joined.id,
                  port: e.user_joined.port,
                  type: this.type,
                  isMeeting: this.isMeeting,
                }))
              : e.user_left
                ? this.emit('userLeft', {
                    uid: e.user_left.id,
                    type: e.user_left.status,
                    isMeeting: this.isMeeting,
                  })
                : e.net
                  ? this.emit('netStatus', e.net)
                  : e.static_info
                    ? this.emit('statistics', e.static_info)
                    : e.audio_volume
                      ? this.emit('audioVolume', e.audio_volume)
                      : e.error
                        ? this.emit('error', e.error)
                        : e.mp4_start
                          ? this.emit('recordMp4', e.mp4_start, 'start')
                          : e.mp4_close && this.emit('recordMp4', e.mp4_close, 'close'));
        }),
        (p.onUploadLogNotify = function(e) {
          const t = e.code;

          const n = e.url;
          t === 200 && this.emit('logUploaded', { url: n });
        }),
        (p.getName = function() {
          return `signal socket ${this.url}`;
        }),
        (p.destroy = function() {
          (this.destroyed = !0), this.stopHeartBeat();
          this.logToConsole('signal close -> signal.js'),
            this.socket &&
              ((this.socket.onopen = null),
              (this.socket.onmessage = null),
              (this.socket.onerror = null),
              (this.socket.onclose = null),
              this.socket.readyState === WebSocket.OPEN && (this.clear(), this.socket.close()),
              (this.socket = null));
        }),
        (p.audioControl = function() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (
            c.merge(this.audioGroup, e),
            this.sendCmd({ type: 'on_audio_process', info: this.audioGroup, id: ++this.cmdId })
          );
        }),
        (p.awc = function(e) {
          return this.sendCmd({
            type: 'on_audio_howling',
            info: { status: ~~e },
            id: ++this.cmdId,
          });
        }),
        (e.exports = f);
    },
    function(e, t, n) {
      const i = 'wss://localhost.netease.im:';

      const o = {
        baseUrl: i,
        signalUrl: `${i}30000`,
        streamUrl: `${i}40000`,
        genStreamUrl(e) {
          return `${i}${e}`;
        },
      };
      e.exports = o;
    },
    function(e, t, n) {
      Object.defineProperty(t, '__esModule', { value: !0 });
      const i = a(n(67));

      const o = a(n(121));

      const r = a(n(120));
      function a(e) {
        return e && e.__esModule ? e : { default: e };
      }
      const s = `//${a(n(4)).default.roomserver}/v1/sdk/command/rooms/`;
      (t.default = {
        parseAccountUidMap(e) {
          const t = this;
          Object.keys(e).forEach(n => {
            t.addAccountUidMap({ account: n, uid: e[n] });
          });
        },
        addAccountUidMap(e) {
          const t = e.account;

          const n = e.uid;
          this.uidAccountMap || (this.uidAccountMap = {}),
            (this.uidAccountMap[n] = t),
            this.accountUidMap || (this.accountUidMap = {}),
            (this.accountUidMap[t] = n);
        },
        getAccountWithUid(e) {
          if (this.uidAccountMap) return this.uidAccountMap[e];
        },
        getUidWithAccount(e) {
          if (this.accountUidMap) return this.accountUidMap[e];
        },
        onError(e) {
          this.emit('error', e);
        },
        setAudioBlack(e) {
          if (this.getUidWithAccount(e))
            return this.signal.setAudioBlack(this.getUidWithAccount(e), 1);
          return Promise.reject({ code: 'accountNotMatch' });
        },
        setAudioStart(e) {
          if (this.getUidWithAccount(e))
            return this.signal.setAudioBlack(this.getUidWithAccount(e), 0);
          return Promise.reject({ code: 'accountNotMatch' });
        },
        setVideoBlack(e) {
          return this.signal.setVideoBlack(this.getUidWithAccount(e), 1);
        },
        setVideoShow(e) {
          return this.signal.setVideoBlack(this.getUidWithAccount(e), 0);
        },
        startRecordMp4() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (
            this.dataApi.update({ key: 'record' }),
            r.default.verifyOptions(e, 'path'),
            e.account &&
              (e.id = e.account === this.account ? 0 : this.getUidWithAccount(e.account)),
            this.signal.startRecordMp4(e)
          );
        },
        stopRecordMp4() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (
            e.account &&
              (e.id = e.account === this.account ? 0 : this.getUidWithAccount(e.account)),
            this.signal.stopRecordMp4(e)
          );
        },
        startRecordAac() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return (
            this.dataApi.update({ key: 'audio_record' }),
            r.default.verifyOptions(e, 'path'),
            this.signal.startRecordAac(e)
          );
        },
        stopRecordAac() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return this.signal.stopRecordAac(e);
        },
        onRecordMp4(e, t) {
          (e.type = t), this.emit('recordMp4', e);
        },
        setNetcallSession(e) {
          return this.calling
            ? Promise.reject({ type: 'statusNotMatch', error: '开启会话失败: 当前正在通话中' })
            : ((this.calling = !0),
              (this.channelId = e.channelId),
              (this.type = +e.netcallType),
              (this.imInfo = e),
              (this.imInfo.rtcUrls = e.rtcServerMap),
              (this.beCalledInfo = this.imInfo),
              (this.target = e.target.account),
              this.parseAccountUidMap(e.accountUidMap),
              this.signal.startSession(
                (0, i.default)({}, this.imInfo, { type: this.type }, this.imInfo.sessionConfig),
                !1
              ));
        },
        ans(e) {
          return this.signal
            ? (this.dataApi.update({ key: 'ans' }),
              (this.sessionConfig.ns = ~~e),
              this.signal.audioControl({ ns: this.sessionConfig.ns }))
            : Promise.reject({ code: 'noConnection' });
        },
        aec(e) {
          return this.signal
            ? (this.dataApi.update({ key: 'aec' }),
              (this.sessionConfig.aec = ~~e),
              this.signal.audioControl({ aec: this.sessionConfig.aec }))
            : Promise.reject({ code: 'noConnection' });
        },
        voiceDetection(e) {
          return this.signal
            ? ((this.sessionConfig.vad = ~~e),
              this.signal.audioControl({ vad: this.sessionConfig.vad }))
            : Promise.reject({ code: 'noConnection' });
        },
        awc(e) {
          return this.signal
            ? (this.dataApi.update({ key: 'awc' }),
              (this.sessionConfig.awc = ~~e),
              this.signal.awc(this.sessionConfig.awc))
            : Promise.reject({ code: 'noConnection' });
        },
        updateRtmpHostVideo(e) {
          const t = e.account;

          let n = e.uid;
          if ((t && (n = this.getUidWithAccount(t)), !n))
            return Promise.reject('账号不在房间中，无法进行操作');
          const i = s + this.channelId;

          const r =
            (this.callerInfo && this.callerInfo.serverInfo && this.callerInfo.serverInfo.token) ||
            '';
          return (0, o.default)({
            type: 'post',
            url: i,
            data: { suid: this.getUid(), cid: this.channelId, uid: +n, cmd: 10001 },
            header: { Token: r },
          }).then(e => {
            if (e.code === 200) return Promise.resolve();
            let t = void 0;
            switch (e.code) {
              case 404:
                t = '房间不存在';
                break;
              case 405:
                t = '目标用户不在房间中';
                break;
              case 406:
                t = '没有权限';
                break;
              case 417:
                t = '请求数据不对';
                break;
              case 600:
                t = '服务器内部错误';
                break;
              default:
                t = '请求参数不正确';
            }
            return Promise.reject(t);
          });
        },
      }),
        (e.exports = t.default);
    },
    function(e, t, n) {
      const i = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n(67));
      n(140);
      const o = n(356);

      const r = n(268);

      const a = n(267);

      const s = n(355);

      const c = n(209);

      const u = n(266);

      const l = n(265);

      const d = n(264);

      let h = void 0;

      const f = (0, i.default)({ version: '5.4.0', versionAgent: '2.7.0.710' }, c, {
        webgl: o,
        install(e, t) {
          r.install(e, t),
            a.install(e, t),
            e.parser.mixin({ configMap: u, serializeMap: l, unserializeMap: d }),
            s.install(e, t);
        },
        getInstance(e) {
          return h || (h = new s(e)), h;
        },
        destroy() {
          h && (h.destroy(), (h = null));
        },
      });
      e.exports = f;
    },
  ]);
});
