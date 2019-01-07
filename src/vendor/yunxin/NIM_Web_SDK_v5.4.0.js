!(function(e, t) {
  typeof exports === 'object' && typeof module === 'object'
    ? (module.exports = t())
    : typeof define === 'function' && define.amd
      ? define([], t)
      : typeof exports === 'object'
        ? (exports.SDK = t())
        : (e.SDK = t());
})(window, () => {
  return (function(e) {
    const t = {};
    function n(r) {
      if (t[r]) return t[r].exports;
      const s = (t[r] = { i: r, l: !1, exports: {} });
      return e[r].call(s.exports, s, s.exports, n), (s.l = !0), s.exports;
    }
    return (
      (n.m = e),
      (n.c = t),
      (n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
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
        const r = Object.create(null);
        if (
          (n.r(r),
          Object.defineProperty(r, 'default', { enumerable: !0, value: e }),
          2 & t && typeof e !== 'string')
        )
          for (const s in e)
            n.d(
              r,
              s,
              (t => {
                return e[t];
              }).bind(null, s)
            );
        return r;
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
      n((n.s = 382))
    );
  })([
    function(e, t, n) {
      const r = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n(5));
      n(15);
      const s = n(127);

      const o = n(110);
      n(206);
      const i = n(24);

      const a = i.getGlobal();

      const c = /\s+/;
      (i.deduplicate = function(e) {
        const t = [];
        return (
          e.forEach(e => {
            t.indexOf(e) === -1 && t.push(e);
          }),
          t
        );
      }),
        (i.capFirstLetter = function(e) {
          return e ? (e = `${e}`).slice(0, 1).toUpperCase() + e.slice(1) : '';
        }),
        (i.guid = (function() {
          const e = function() {
            return ((65536 * (1 + Math.random())) | 0).toString(16).substring(1);
          };
          return function() {
            return e() + e() + e() + e() + e() + e() + e() + e();
          };
        })()),
        (i.extend = function(e, t, n) {
          for (const r in t) (void 0 !== e[r] && !0 !== n) || (e[r] = t[r]);
        }),
        (i.filterObj = function(e, t) {
          const n = {};
          return (
            i.isString(t) && (t = t.split(c)),
            t.forEach(t => {
              e.hasOwnProperty(t) && (n[t] = e[t]);
            }),
            n
          );
        }),
        (i.copy = function(e, t) {
          return (
            (t = t || {}),
            e
              ? (Object.keys(e).forEach(n => {
                  i.exist(e[n]) && (t[n] = e[n]);
                }),
                t)
              : t
          );
        }),
        (i.copyWithNull = function(e, t) {
          return (
            (t = t || {}),
            e
              ? (Object.keys(e).forEach(n => {
                  (i.exist(e[n]) || i.isnull(e[n])) && (t[n] = e[n]);
                }),
                t)
              : t
          );
        }),
        (i.findObjIndexInArray = function(e, t) {
          e = e || [];
          const n = t.keyPath || 'id';

          let r = -1;
          return (
            e.some((e, s) => {
              if (o(e, n) === t.value) return (r = s), !0;
            }),
            r
          );
        }),
        (i.findObjInArray = function(e, t) {
          const n = i.findObjIndexInArray(e, t);
          return n === -1 ? null : e[n];
        }),
        (i.mergeObjArray = function() {
          let e = [];

          const t = [].slice.call(arguments, 0, -1);

          let n = arguments[arguments.length - 1];
          i.isArray(n) && (t.push(n), (n = {}));
          let r;

          const s = (n.keyPath = n.keyPath || 'id');
          for (n.sortPath = n.sortPath || s; !e.length && t.length; )
            e = (e = t.shift() || []).slice(0);
          return (
            t.forEach(t => {
              t &&
                t.forEach(t => {
                  (r = i.findObjIndexInArray(e, { keyPath: s, value: o(t, s) })) !== -1
                    ? (e[r] = i.merge({}, e[r], t))
                    : e.push(t);
                });
            }),
            n.notSort || (e = i.sortObjArray(e, n)),
            e
          );
        }),
        (i.cutObjArray = function(e) {
          const t = e.slice(0);

          const n = arguments.length;

          const r = [].slice.call(arguments, 1, n - 1);

          let s = arguments[n - 1];
          i.isObject(s) || (r.push(s), (s = {}));
          let a;

          const c = (s.keyPath = s.keyPath || 'id');
          return (
            r.forEach(e => {
              i.isArray(e) || (e = [e]),
                e.forEach(e => {
                  e &&
                    ((s.value = o(e, c)),
                    (a = i.findObjIndexInArray(t, s)) !== -1 && t.splice(a, 1));
                });
            }),
            t
          );
        }),
        (i.sortObjArray = function(e, t) {
          const n = (t = t || {}).sortPath || 'id';
          s.insensitive = !!t.insensitive;
          let r;

          let a;

          let c;

          const u = !!t.desc;
          return (
            (c = i.isFunction(t.compare)
              ? t.compare
              : function(e, t) {
                  return (r = o(e, n)), (a = o(t, n)), u ? s(a, r) : s(r, a);
                }),
            e.sort(c)
          );
        }),
        (i.emptyFunc = function() {}),
        (i.isEmptyFunc = function(e) {
          return e === i.emptyFunc;
        }),
        (i.notEmptyFunc = function(e) {
          return e !== i.emptyFunc;
        }),
        (i.splice = function(e, t, n) {
          return [].splice.call(e, t, n);
        }),
        (i.reshape2d = function(e, t) {
          if (Array.isArray(e)) {
            i.verifyParamType('type', t, 'number', 'util::reshape2d');
            const n = e.length;
            if (n <= t) return [e];
            for (var r = Math.ceil(n / t), s = [], o = 0; o < r; o++)
              s.push(e.slice(o * t, (o + 1) * t));
            return s;
          }
          return e;
        }),
        (i.flatten2d = function(e) {
          if (Array.isArray(e)) {
            let t = [];
            return (
              e.forEach(e => {
                t = t.concat(e);
              }),
              t
            );
          }
          return e;
        }),
        (i.dropArrayDuplicates = function(e) {
          if (Array.isArray(e)) {
            for (var t = {}, n = []; e.length > 0; ) {
              t[e.shift()] = !0;
            }
            for (const r in t) !0 === t[r] && n.push(r);
            return n;
          }
          return e;
        }),
        (i.onError = function(e) {
          throw new function(e) {
            (void 0 === e ? 'undefined' : (0, r.default)(e)) === 'object'
              ? ((this.callFunc = e.callFunc || null), (this.message = e.message || 'UNKNOW ERROR'))
              : (this.message = e),
              (this.time = new Date()),
              (this.timetag = +this.time);
          }(e);
        }),
        (i.verifyParamPresent = function(e, t, n, r) {
          n = n || '';
          let s = !1;
          switch (i.typeOf(t)) {
            case 'undefined':
            case 'null':
              s = !0;
              break;
            case 'string':
              t === '' && (s = !0);
              break;
            case 'object':
              Object.keys(t).length || (s = !0);
              break;
            case 'array':
              t.length
                ? t.some(e => {
                    if (i.notexist(e)) return (s = !0), !0;
                  })
                : (s = !0);
          }
          s && i.onParamAbsent(n + e, r);
        }),
        (i.onParamAbsent = function(e, t) {
          i.onParamError(
            `缺少参数 ${e}, 请确保参数不是 空字符串、空对象、空数组、null或undefined, 或数组的内容不是 null/undefined`,
            t
          );
        }),
        (i.verifyParamAbsent = function(e, t, n, r) {
          (n = n || ''), void 0 !== t && i.onParamPresent(n + e, r);
        }),
        (i.onParamPresent = function(e, t) {
          i.onParamError(`多余的参数 ${e}`, t);
        }),
        (i.verifyParamType = function(e, t, n, r) {
          const s = i.typeOf(t).toLowerCase();
          i.isArray(n) || (n = [n]);
          let o = !0;
          switch (
            ((n = n.map(e => {
              return e.toLowerCase();
            })).indexOf(s) === -1 && (o = !1),
            s)
          ) {
            case 'number':
              isNaN(t) && (o = !1);
          }
          o || i.onParamInvalidType(e, n, '', r);
        }),
        (i.onParamInvalidType = function(e, t, n, r) {
          (n = n || ''),
            (t = i.isArray(t)
              ? (t = t.map(e => {
                  return `"${e}"`;
                })).join(', ')
              : `"${t}"`),
            i.onParamError(`参数"${n}${e}"类型错误, 合法的类型包括: [${t}]`, r);
        }),
        (i.verifyParamValid = function(e, t, n, r) {
          i.isArray(n) || (n = [n]), n.indexOf(t) === -1 && i.onParamInvalidValue(e, n, r);
        }),
        (i.onParamInvalidValue = function(e, t, n) {
          i.isArray(t) || (t = [t]),
            (t = t.map(e => {
              return `"${e}"`;
            })),
            i.isArray(t) && (t = t.join(', ')),
            i.onParamError(`参数 ${e}值错误, 合法的值包括: [${JSON.stringify(t)}]`, n);
        }),
        (i.verifyParamMin = function(e, t, n, r) {
          t < n && i.onParamError(`参数${e}的值不能小于${n}`, r);
        }),
        (i.verifyParamMax = function(e, t, n, r) {
          t > n && i.onParamError(`参数${e}的值不能大于${n}`, r);
        }),
        (i.verifyArrayMax = function(e, t, n, r) {
          t.length > n && i.onParamError(`参数${e}的长度不能大于${n}`, r);
        }),
        (i.verifyEmail = (function() {
          const e = /^\S+@\S+$/;
          return function(t, n, r) {
            e.test(n) ||
              i.onParamError(
                `参数${t}邮箱格式错误, 合法格式必须包含@符号, @符号前后至少要各有一个字符`,
                r
              );
          };
        })()),
        (i.verifyTel = (function() {
          const e = /^[+\-()\d]+$/;
          return function(t, n, r) {
            e.test(n) ||
              i.onParamError(`参数${t}电话号码格式错误, 合法字符包括+、-、英文括号和数字`, r);
          };
        })()),
        (i.verifyBirth = (function() {
          const e = /^(\d{4})-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;
          return function(t, n, r) {
            e.test(n) || i.onParamError(`参数${t}生日格式错误, 合法为"yyyy-MM-dd"`, r);
          };
        })()),
        (i.onParamError = function(e, t) {
          i.onError({ message: e, callFunc: t });
        }),
        (i.verifyOptions = function(e, t, n, r, s) {
          if (((e = e || {}), t && (i.isString(t) && (t = t.split(c)), i.isArray(t)))) {
            typeof n !== 'boolean' && ((s = n || null), (n = !0), (r = ''));
            const o = n ? i.verifyParamPresent : i.verifyParamAbsent;
            t.forEach(t => {
              o.call(i, t, e[t], r, s);
            });
          }
          return e;
        }),
        (i.verifyParamAtLeastPresentOne = function(e, t, n) {
          t &&
            (i.isString(t) && (t = t.split(c)),
            i.isArray(t) &&
              (t.some(t => {
                return i.exist(e[t]);
              }) ||
                i.onParamError(`以下参数[${t.join(', ')}]至少需要传入一个`, n)));
        }),
        (i.verifyParamPresentJustOne = function(e, t, n) {
          t &&
            (i.isString(t) && (t = t.split(c)),
            i.isArray(t) &&
              t.reduce((t, n) => {
                return i.exist(e[n]) && t++, t;
              }, 0) !== 1 &&
              i.onParamError(`以下参数[${t.join(', ')}]必须且只能传入一个`, n));
        }),
        (i.verifyBooleanWithDefault = function(e, t, n, r, s) {
          i.undef(n) && (n = !0),
            c.test(t) && (t = t.split(c)),
            i.isArray(t)
              ? t.forEach(t => {
                  i.verifyBooleanWithDefault(e, t, n, r, s);
                })
              : void 0 === e[t]
                ? (e[t] = n)
                : i.isBoolean(e[t]) || i.onParamInvalidType(t, 'boolean', r, s);
        }),
        (i.verifyFileInput = function(e, t) {
          return (
            i.verifyParamPresent('fileInput', e, '', t),
            i.isString(e) &&
              ((e = document.getElementById(e)) ||
                i.onParamError(`找不到要上传的文件对应的input, 请检查fileInput id ${e}`, t)),
            (e.tagName && e.tagName.toLowerCase() === 'input' && e.type.toLowerCase() === 'file') ||
              i.onParamError(
                `请提供正确的 fileInput, 必须为 file 类型的 input 节点 tagname:${
                  e.tagName
                }, filetype:${e.type}`,
                t
              ),
            e
          );
        }),
        (i.verifyFileType = function(e, t) {
          i.verifyParamValid('type', e, i.validFileTypes, t);
        }),
        (i.verifyCallback = function(e, t, n) {
          c.test(t) && (t = t.split(c)),
            i.isArray(t)
              ? t.forEach(t => {
                  i.verifyCallback(e, t, n);
                })
              : e[t]
                ? i.isFunction(e[t]) || i.onParamInvalidType(t, 'function', '', n)
                : (e[t] = i.emptyFunc);
        }),
        (i.verifyFileUploadCallback = function(e, t) {
          i.verifyCallback(e, 'uploadprogress uploaddone uploaderror uploadcancel', t);
        }),
        (i.validFileTypes = ['image', 'audio', 'video', 'file']),
        (i.validFileExts = {
          image: ['bmp', 'gif', 'jpg', 'jpeg', 'jng', 'png', 'webp'],
          audio: ['mp3', 'wav', 'aac', 'wma', 'wmv', 'amr', 'mp2', 'flac', 'vorbis', 'ac3'],
          video: ['mp4', 'rm', 'rmvb', 'wmv', 'avi', 'mpg', 'mpeg'],
        }),
        (i.filterFiles = function(e, t) {
          let n;

          let r;

          const s = (t = t.toLowerCase()) === 'file';

          const o = [];
          return (
            [].forEach.call(e, e => {
              if (s) o.push(e);
              else if (
                ((n = e.name.slice(e.name.lastIndexOf('.') + 1)),
                (r = e.type.split('/'))[0] && r[1])
              ) {
                (r[0].toLowerCase() === t || i.validFileExts[t].indexOf(n) !== -1) && o.push(e);
              }
            }),
            o
          );
        });
      const u = (i.supportFormData = i.notundef(a.FormData));
      (i.getFileName = function(e) {
        return (
          (e = i.verifyFileInput(e)),
          u ? e.files[0].name : e.value.slice(e.value.lastIndexOf('\\') + 1)
        );
      }),
        (i.getFileInfo = (function() {
          const e = { ppt: 1, pptx: 2, pdf: 3 };
          return function(t) {
            const n = {};
            if (!(t = i.verifyFileInput(t)).files) return n;
            const r = t.files[0];
            return (
              u &&
                ((n.name = r.name),
                (n.size = r.size),
                (n.type = r.name.match(/\.(\w+)$/)),
                (n.type = n.type && n.type[1].toLowerCase()),
                (n.transcodeType = e[n.type] || 0)),
              n
            );
          };
        })()),
        (i.sizeText = (function() {
          const e = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'BB'];
          return function(t) {
            let n;

            let r = 0;
            do {
              (n = (t = Math.floor(100 * t) / 100) + e[r]), (t /= 1024), r++;
            } while (t > 1);
            return n;
          };
        })()),
        (i.promises2cmds = function(e) {
          return e.map(e => {
            return e.cmd;
          });
        }),
        (i.objs2accounts = function(e) {
          return e.map(e => {
            return e.account;
          });
        }),
        (i.teams2ids = function(e) {
          return e.map(e => {
            return e.teamId;
          });
        }),
        (i.objs2ids = function(e) {
          return e.map(e => {
            return e.id;
          });
        }),
        (i.getMaxUpdateTime = function(e) {
          const t = e.map(e => {
            return +e.updateTime;
          });
          return Math.max(...t);
        }),
        (i.genCheckUniqueFunc = function(e, t) {
          return (
            (e = e || 'id'),
            (t = t || 1e3),
            function(t) {
              (this.uniqueSet = this.uniqueSet || {}),
                (this.uniqueSet[e] = this.uniqueSet[e] || {});
              const n = this.uniqueSet[e];

              const r = t[e];
              return !n[r] && ((n[r] = !0), !0);
            }
          );
        }),
        (i.fillPropertyWithDefault = function(e, t, n) {
          return !!i.undef(e[t]) && ((e[t] = n), !0);
        }),
        (e.exports = i);
    },
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
      const r = n(37)('wks');

      const s = n(27);

      const o = n(1).Symbol;

      const i = typeof o === 'function';
      (e.exports = function(e) {
        return r[e] || (r[e] = (i && o[e]) || (i ? o : s)(`Symbol.${e}`));
      }).store = r;
    },
    function(e, t) {
      const n = (e.exports = { version: '2.5.7' });
      typeof __e === 'number' && (__e = n);
    },
    function(e, t, n) {
      var r = {
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
          return `${r.uploadUrl}/${e}`;
        },
        genDownloadUrl(e, t) {
          let n = r.replaceUrl;
          return (
            /^http/.test(n)
              ? r.httpsEnabled && (n = n.replace('http', 'https'))
              : (n = r.httpsEnabled ? `https://${n}` : `http://${n}`),
            n.replace('{bucket}', e).replace('{object}', t)
          );
        },
      };
      e.exports = r;
    },
    function(e, t, n) {
      t.__esModule = !0;
      const r = i(n(99));

      const s = i(n(88));

      const o =
        typeof s.default === 'function' && typeof r.default === 'symbol'
          ? function(e) {
              return typeof e;
            }
          : function(e) {
              return e &&
                typeof s.default === 'function' &&
                e.constructor === s.default &&
                e !== s.default.prototype
                ? 'symbol'
                : typeof e;
            };
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      t.default =
        typeof s.default === 'function' && o(r.default) === 'symbol'
          ? function(e) {
              return void 0 === e ? 'undefined' : o(e);
            }
          : function(e) {
              return e &&
                typeof s.default === 'function' &&
                e.constructor === s.default &&
                e !== s.default.prototype
                ? 'symbol'
                : void 0 === e
                  ? 'undefined'
                  : o(e);
            };
    },
    function(e, t, n) {
      const r = n(9);

      const s = n(57);

      const o = n(39);

      const i = Object.defineProperty;
      t.f = n(8)
        ? Object.defineProperty
        : function(e, t, n) {
            if ((r(e), (t = o(t, !0)), r(n), s))
              try {
                return i(e, t, n);
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
      const r = n(11);
      e.exports = function(e) {
        if (!r(e)) throw TypeError(`${e} is not an object!`);
        return e;
      };
    },
    function(e, t, n) {
      const r = n(6);

      const s = n(19);
      e.exports = n(8)
        ? function(e, t, n) {
            return r.f(e, t, s(1, n));
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
      const r = n(54);

      const s = n(40);
      e.exports = function(e) {
        return r(s(e));
      };
    },
    function(e, t, n) {
      const r = n(1);

      const s = n(3);

      const o = n(44);

      const i = n(10);

      const a = n(7);

      var c = function(e, t, n) {
        let u;

        let l;

        let m;

        const d = e & c.F;

        const p = e & c.G;

        const f = e & c.S;

        const g = e & c.P;

        const h = e & c.B;

        const y = e & c.W;

        const v = p ? s : s[t] || (s[t] = {});

        const b = v.prototype;

        const M = p ? r : f ? r[t] : (r[t] || {}).prototype;
        for (u in (p && (n = t), n))
          ((l = !d && M && void 0 !== M[u]) && a(v, u)) ||
            ((m = l ? M[u] : n[u]),
            (v[u] =
              p && typeof M[u] !== 'function'
                ? n[u]
                : h && l
                  ? o(m, r)
                  : y && M[u] == m
                    ? (function(e) {
                        const t = function(t, n, r) {
                          if (this instanceof e) {
                            switch (arguments.length) {
                              case 0:
                                return new e();
                              case 1:
                                return new e(t);
                              case 2:
                                return new e(t, n);
                            }
                            return new e(t, n, r);
                          }
                          return e.apply(this, arguments);
                        };
                        return (t.prototype = e.prototype), t;
                      })(m)
                    : g && typeof m === 'function'
                      ? o(Function.call, m)
                      : m),
            g && (((v.virtual || (v.virtual = {}))[u] = m), e & c.R && b && !b[u] && i(b, u, m)));
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
    ,
    function(e, t, n) {
      (function(t) {
        const r = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(n(5));
        const s = (function() {
          const e = (void 0 === t ? 'undefined' : (0, r.default)(t)) === 'object' ? t : window;

          const n = Math.pow(2, 53) - 1;

          const s = /\bOpera/;

          const o = Object.prototype;

          const i = o.hasOwnProperty;

          const a = o.toString;
          function c(e) {
            return (e = String(e)).charAt(0).toUpperCase() + e.slice(1);
          }
          function u(e) {
            return (e = f(e)), /^(?:webOS|i(?:OS|P))/.test(e) ? e : c(e);
          }
          function l(e, t) {
            for (const n in e) i.call(e, n) && t(e[n], n, e);
          }
          function m(e) {
            return e == null ? c(e) : a.call(e).slice(8, -1);
          }
          function d(e) {
            return String(e).replace(/([ -])(?!$)/g, '$1?');
          }
          function p(e, t) {
            let r = null;
            return (
              (function(e, t) {
                let r = -1;

                const s = e ? e.length : 0;
                if (typeof s === 'number' && s > -1 && s <= n) for (; ++r < s; ) t(e[r], r, e);
                else l(e, t);
              })(e, (n, s) => {
                r = t(r, n, s, e);
              }),
              r
            );
          }
          function f(e) {
            return String(e).replace(/^ +| +$/g, '');
          }
          return (function t(n) {
            let o = e;

            const i =
              n &&
              (void 0 === n ? 'undefined' : (0, r.default)(n)) === 'object' &&
              m(n) != 'String';
            i && ((o = n), (n = null));
            const c = o.navigator || {};

            const g = c.userAgent || '';
            n || (n = g);
            let h;

            let y;

            const v = i
              ? !!c.likeChrome
              : /\bChrome\b/.test(n) && !/internal|\n/i.test(a.toString());

            const b = i ? 'Object' : 'ScriptBridgingProxyObject';

            const M = i ? 'Object' : 'Environment';

            const T = i && o.java ? 'JavaPackage' : m(o.java);

            const k = i ? 'Object' : 'RuntimeObject';

            const S = /\bJava/.test(T) && o.java;

            const C = S && m(o.environment) == M;

            const P = S ? 'a' : 'α';

            const I = S ? 'b' : 'β';

            const O = o.document || {};

            let w = o.operamini || o.opera;

            var x = s.test((x = i && w ? w['[[Class]]'] : m(w))) ? x : (w = null);

            let A = n;

            let _ = [];

            let E = null;

            const R = n == g;

            let F = R && w && typeof w.version === 'function' && w.version();

            let j = (function(e) {
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

            let U = (function(e) {
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

            let N = B([
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

            let D = (function(e) {
              return p(e, (e, t, r) => {
                return (
                  e ||
                  ((t[N] ||
                    t[/^[a-z]+(?: +[a-z]+\b)*/i.exec(N)] ||
                    RegExp(`\\b${d(r)}(?:\\b|\\w*\\d)`, 'i').exec(n)) &&
                    r)
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

            let L = (function(e) {
              return p(e, (e, t) => {
                const r = t.pattern || d(t);
                return (
                  !e &&
                    (e = RegExp(`\\b${r}(?:/[\\d.]+|[ \\w.]*)`, 'i').exec(n)) &&
                    (e = (function(e, t, n) {
                      let r = {
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
                          (r = r[/[\d.]+$/.exec(e)]) &&
                          (e = `Windows ${r}`),
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
                    })(e, r, t.label || t)),
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
                const r = t.pattern || d(t);
                return (
                  !e &&
                    (e =
                      RegExp(`\\b${r} *\\d+[.\\w_]*`, 'i').exec(n) ||
                      RegExp(`\\b${r} *\\w+-[\\w]*`, 'i').exec(n) ||
                      RegExp(`\\b${r}(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)`, 'i').exec(n)) &&
                    ((e = String(t.label && !RegExp(r, 'i').test(t.label) ? t.label : e).split(
                      '/'
                    ))[1] &&
                      !/[\d.]+/.test(e[0]) &&
                      (e[0] += ` ${e[1]}`),
                    (t = t.label || t),
                    (e = u(
                      e[0]
                        .replace(RegExp(r, 'i'), t)
                        .replace(RegExp(`; *(?:${t}[_-])?`, 'i'), ' ')
                        .replace(RegExp(`(${t})[-_.]?(\\w)`, 'i'), '$1 $2')
                    ))),
                  e
                );
              });
            }
            if (
              (j && (j = [j]),
              D && !N && (N = B([D])),
              (h = /\bGoogle TV\b/.exec(N)) && (N = h[0]),
              /\bSimulator\b/i.test(n) && (N = `${N ? `${N} ` : ''}Simulator`),
              U == 'Opera Mini' &&
                /\bOPiOS\b/.test(n) &&
                _.push('running in Turbo/Uncompressed mode'),
              U == 'IE' && /\blike iPhone OS\b/.test(n)
                ? ((D = (h = t(n.replace(/like iPhone OS/, ''))).manufacturer), (N = h.product))
                : /^iP/.test(N)
                  ? (U || (U = 'Safari'),
                    (L = `iOS${
                      (h = / OS ([\d_]+)/i.exec(n)) ? ` ${h[1].replace(/_/g, '.')}` : ''
                    }`))
                  : U != 'Konqueror' || /buntu/i.test(L)
                    ? (D &&
                        D != 'Google' &&
                        ((/Chrome/.test(U) && !/\bMobile Safari\b/i.test(n)) ||
                          /\bVita\b/.test(N))) ||
                      (/\bAndroid\b/.test(L) && /^Chrome/.test(U) && /\bVersion\//i.test(n))
                      ? ((U = 'Android Browser'), (L = /\bAndroid\b/.test(L) ? L : 'Android'))
                      : U == 'Silk'
                        ? (/\bMobi/i.test(n) || ((L = 'Android'), _.unshift('desktop mode')),
                          /Accelerated *= *true/i.test(n) && _.unshift('accelerated'))
                        : U == 'PaleMoon' && (h = /\bFirefox\/([\d.]+)\b/.exec(n))
                          ? _.push(`identifying as Firefox ${h[1]}`)
                          : U == 'Firefox' && (h = /\b(Mobile|Tablet|TV)\b/i.exec(n))
                            ? (L || (L = 'Firefox OS'), N || (N = h[1]))
                            : !U ||
                              (h = !/\bMinefield\b/i.test(n) && /\b(?:Firefox|Safari)\b/.exec(U))
                              ? (U &&
                                  !N &&
                                  /[\/,]|^[^(]+?\)/.test(n.slice(n.indexOf(`${h}/`) + 8)) &&
                                  (U = null),
                                (h = N || D || L) &&
                                  (N ||
                                    D ||
                                    /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(L)) &&
                                  (U = `${/[a-z]+(?: Hat)?/i.exec(
                                    /\bAndroid\b/.test(L) ? L : h
                                  )} Browser`))
                              : U == 'Electron' &&
                                (h = (/\bChrome\/([\d.]+)\b/.exec(n) || 0)[1]) &&
                                _.push(`Chromium ${h}`)
                    : (L = 'Kubuntu'),
              F ||
                (F = (function(e) {
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
                  d(U),
                  '(?:Firefox|Minefield|NetFront)',
                ])),
              (h =
                (j == 'iCab' && parseFloat(F) > 3
                  ? 'WebKit'
                  : /\bOpera\b/.test(U) && (/\bOPR\b/.test(n) ? 'Blink' : 'Presto')) ||
                (/\b(?:Midori|Nook|Safari)\b/i.test(n) &&
                  !/^(?:Trident|EdgeHTML)$/.test(j) &&
                  'WebKit') ||
                (!j && /\bMSIE\b/i.test(n) && (L == 'Mac OS' ? 'Tasman' : 'Trident')) ||
                (j == 'WebKit' && /\bPlayStation\b(?! Vita\b)/i.test(U) && 'NetFront')) &&
                (j = [h]),
              U == 'IE' && (h = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(n) || 0)[1])
                ? ((U += ' Mobile'),
                  (L = `Windows Phone ${/\+$/.test(h) ? h : `${h}.x`}`),
                  _.unshift('desktop mode'))
                : /\bWPDesktop\b/i.test(n)
                  ? ((U = 'IE Mobile'),
                    (L = 'Windows Phone 8.x'),
                    _.unshift('desktop mode'),
                    F || (F = (/\brv:([\d.]+)/.exec(n) || 0)[1]))
                  : U != 'IE' &&
                    j == 'Trident' &&
                    (h = /\brv:([\d.]+)/.exec(n)) &&
                    (U && _.push(`identifying as ${U}${F ? ` ${F}` : ''}`), (U = 'IE'), (F = h[1])),
              R)
            ) {
              if (
                (function(e, t) {
                  const n = e != null ? (0, r.default)(e[t]) : 'number';
                  return !(
                    /^(?:boolean|number|string|undefined)$/.test(n) ||
                    (n == 'object' && !e[t])
                  );
                })(o, 'global')
              )
                if (
                  (S &&
                    ((A = (h = S.lang.System).getProperty('os.arch')),
                    (L = L || `${h.getProperty('os.name')} ${h.getProperty('os.version')}`)),
                  C)
                ) {
                  try {
                    (F = o.require('ringo/engine').version.join('.')), (U = 'RingoJS');
                  } catch (e) {
                    (h = o.system) &&
                      h.global.system == o.system &&
                      ((U = 'Narwhal'), L || (L = h[0].os || null));
                  }
                  U || (U = 'Rhino');
                } else
                  (0, r.default)(o.process) === 'object' &&
                    !o.process.browser &&
                    (h = o.process) &&
                    ((0, r.default)(h.versions) === 'object' &&
                      (typeof h.versions.electron === 'string'
                        ? (_.push(`Node ${h.versions.node}`),
                          (U = 'Electron'),
                          (F = h.versions.electron))
                        : typeof h.versions.nw === 'string' &&
                          (_.push(`Chromium ${F}`, `Node ${h.versions.node}`),
                          (U = 'NW.js'),
                          (F = h.versions.nw))),
                    U ||
                      ((U = 'Node.js'),
                      (A = h.arch),
                      (L = h.platform),
                      (F = (F = /[\d.]+/.exec(h.version)) ? F[0] : null)));
              else
                m((h = o.runtime)) == b
                  ? ((U = 'Adobe AIR'), (L = h.flash.system.Capabilities.os))
                  : m((h = o.phantom)) == k
                    ? ((U = 'PhantomJS'),
                      (F = (h = h.version || null) && `${h.major}.${h.minor}.${h.patch}`))
                    : typeof O.documentMode === 'number' && (h = /\bTrident\/(\d+)/i.exec(n))
                      ? ((F = [F, O.documentMode]),
                        (h = +h[1] + 4) != F[1] &&
                          (_.push(`IE ${F[1]} mode`), j && (j[1] = ''), (F[1] = h)),
                        (F = U == 'IE' ? String(F[1].toFixed(1)) : F[0]))
                      : typeof O.documentMode === 'number' &&
                        /^(?:Chrome|Firefox)\b/.test(U) &&
                        (_.push(`masking as ${U} ${F}`),
                        (U = 'IE'),
                        (F = '11.0'),
                        (j = ['Trident']),
                        (L = 'Windows'));
              L = L && u(L);
            }
            if (
              (F &&
                (h =
                  /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(F) ||
                  /(?:alpha|beta)(?: ?\d)?/i.exec(`${n};${R && c.appMinorVersion}`) ||
                  (/\bMinefield\b/i.test(n) && 'a')) &&
                ((E = /b/i.test(h) ? 'beta' : 'alpha'),
                (F =
                  F.replace(RegExp(`${h}\\+?$`), '') +
                  (E == 'beta' ? I : P) +
                  (/\d+\+?/.exec(h) || ''))),
              U == 'Fennec' || (U == 'Firefox' && /\b(?:Android|Firefox OS)\b/.test(L)))
            )
              U = 'Firefox Mobile';
            else if (U == 'Maxthon' && F) F = F.replace(/\.[\d.]+/, '.x');
            else if (/\bXbox\b/i.test(N))
              N == 'Xbox 360' && (L = null),
                N == 'Xbox 360' && /\bIEMobile\b/.test(n) && _.unshift('mobile mode');
            else if (
              (!/^(?:Chrome|IE|Opera)$/.test(U) && (!U || N || /Browser|Mobi/.test(U))) ||
              (L != 'Windows CE' && !/Mobi/i.test(n))
            )
              if (U == 'IE' && R)
                try {
                  o.external === null && _.unshift('platform preview');
                } catch (e) {
                  _.unshift('embedded');
                }
              else
                (/\bBlackBerry\b/.test(N) || /\bBB10\b/.test(n)) &&
                (h = (RegExp(`${N.replace(/ +/g, ' *')}/([.\\d]+)`, 'i').exec(n) || 0)[1] || F)
                  ? ((L = `${
                      (h = [h, /BB10/.test(n)])[1]
                        ? ((N = null), (D = 'BlackBerry'))
                        : 'Device Software'
                    } ${h[0]}`),
                    (F = null))
                  : this != l &&
                    N != 'Wii' &&
                    ((R && w) ||
                      (/Opera/.test(U) && /\b(?:MSIE|Firefox)\b/i.test(n)) ||
                      (U == 'Firefox' && /\bOS X (?:\d+\.){2,}/.test(L)) ||
                      (U == 'IE' &&
                        ((L && !/^Win/.test(L) && F > 5.5) ||
                          (/\bWindows XP\b/.test(L) && F > 8) ||
                          (F == 8 && !/\bTrident\b/.test(n))))) &&
                    !s.test((h = t.call(l, `${n.replace(s, '')};`))) &&
                    h.name &&
                    ((h = `ing as ${h.name}${(h = h.version) ? ` ${h}` : ''}`),
                    s.test(U)
                      ? (/\bIE\b/.test(h) && L == 'Mac OS' && (L = null), (h = `identify${h}`))
                      : ((h = `mask${h}`),
                        (U = x ? u(x.replace(/([a-z])([A-Z])/g, '$1 $2')) : 'Opera'),
                        /\bIE\b/.test(h) && (L = null),
                        R || (F = null)),
                    (j = ['Presto']),
                    _.push(h));
            else U += ' Mobile';
            (h = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(n) || 0)[1]) &&
              ((h = [parseFloat(h.replace(/\.(\d)$/, '.0$1')), h]),
              U == 'Safari' && h[1].slice(-1) == '+'
                ? ((U = 'WebKit Nightly'), (E = 'alpha'), (F = h[1].slice(0, -1)))
                : (F != h[1] && F != (h[2] = (/\bSafari\/([\d.]+\+?)/i.exec(n) || 0)[1])) ||
                  (F = null),
              (h[1] = (/\bChrome\/([\d.]+)/i.exec(n) || 0)[1]),
              h[0] == 537.36 &&
                h[2] == 537.36 &&
                parseFloat(h[1]) >= 28 &&
                j == 'WebKit' &&
                (j = ['Blink']),
              R && (v || h[1])
                ? (j && (j[1] = 'like Chrome'),
                  (h =
                    h[1] ||
                    ((h = h[0]) < 530
                      ? 1
                      : h < 532
                        ? 2
                        : h < 532.05
                          ? 3
                          : h < 533
                            ? 4
                            : h < 534.03
                              ? 5
                              : h < 534.07
                                ? 6
                                : h < 534.1
                                  ? 7
                                  : h < 534.13
                                    ? 8
                                    : h < 534.16
                                      ? 9
                                      : h < 534.24
                                        ? 10
                                        : h < 534.3
                                          ? 11
                                          : h < 535.01
                                            ? 12
                                            : h < 535.02
                                              ? '13+'
                                              : h < 535.07
                                                ? 15
                                                : h < 535.11
                                                  ? 16
                                                  : h < 535.19
                                                    ? 17
                                                    : h < 536.05
                                                      ? 18
                                                      : h < 536.1
                                                        ? 19
                                                        : h < 537.01
                                                          ? 20
                                                          : h < 537.11
                                                            ? '21+'
                                                            : h < 537.13
                                                              ? 23
                                                              : h < 537.18
                                                                ? 24
                                                                : h < 537.24
                                                                  ? 25
                                                                  : h < 537.36
                                                                    ? 26
                                                                    : j != 'Blink'
                                                                      ? '27'
                                                                      : '28')))
                : (j && (j[1] = 'like Safari'),
                  (h =
                    (h = h[0]) < 400
                      ? 1
                      : h < 500
                        ? 2
                        : h < 526
                          ? 3
                          : h < 533
                            ? 4
                            : h < 534
                              ? '4+'
                              : h < 535
                                ? 5
                                : h < 537
                                  ? 6
                                  : h < 538
                                    ? 7
                                    : h < 601
                                      ? 8
                                      : '8')),
              j && (j[1] += ` ${(h += typeof h === 'number' ? '.x' : /[.+]/.test(h) ? '' : '+')}`),
              U == 'Safari' && (!F || parseInt(F) > 45) && (F = h)),
              U == 'Opera' && (h = /\bzbov|zvav$/.exec(L))
                ? ((U += ' '),
                  _.unshift('desktop mode'),
                  h == 'zvav' ? ((U += 'Mini'), (F = null)) : (U += 'Mobile'),
                  (L = L.replace(RegExp(` *${h}$`), '')))
                : U == 'Safari' &&
                  /\bChrome\b/.exec(j && j[1]) &&
                  (_.unshift('desktop mode'),
                  (U = 'Chrome Mobile'),
                  (F = null),
                  /\bOS X\b/.test(L) ? ((D = 'Apple'), (L = 'iOS 4.3+')) : (L = null)),
              F &&
                F.indexOf((h = /[\d.]+$/.exec(L))) == 0 &&
                n.indexOf(`/${h}-`) > -1 &&
                (L = f(L.replace(h, ''))),
              j &&
                !/\b(?:Avant|Nook)\b/.test(U) &&
                (/Browser|Lunascape|Maxthon/.test(U) ||
                  (U != 'Safari' && /^iOS/.test(L) && /\bSafari\b/.test(j[1])) ||
                  (/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(
                    U
                  ) &&
                    j[1])) &&
                (h = j[j.length - 1]) &&
                _.push(h),
              _.length && (_ = [`(${_.join('; ')})`]),
              D && N && N.indexOf(D) < 0 && _.push(`on ${D}`),
              N && _.push((/^on /.test(_[_.length - 1]) ? '' : 'on ') + N),
              L &&
                ((h = / ([\d.+]+)$/.exec(L)),
                (y = h && L.charAt(L.length - h[0].length - 1) == '/'),
                (L = {
                  architecture: 32,
                  family: h && !y ? L.replace(h[0], '') : L,
                  version: h ? h[1] : null,
                  toString() {
                    const e = this.version;
                    return (
                      this.family +
                      (e && !y ? ` ${e}` : '') +
                      (this.architecture == 64 ? ' 64-bit' : '')
                    );
                  },
                })),
              (h = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(A)) && !/\bi686\b/i.test(A)
                ? (L &&
                    ((L.architecture = 64), (L.family = L.family.replace(RegExp(` *${h}`), ''))),
                  U &&
                    (/\bWOW64\b/i.test(n) ||
                      (R &&
                        /\w(?:86|32)$/.test(c.cpuClass || c.platform) &&
                        !/\bWin64; x64\b/i.test(n))) &&
                    _.unshift('32-bit'))
                : L &&
                  /^OS X/.test(L.family) &&
                  U == 'Chrome' &&
                  parseFloat(F) >= 39 &&
                  (L.architecture = 64),
              n || (n = null);
            const q = {};
            return (
              (q.description = n),
              (q.layout = j && j[0]),
              (q.manufacturer = D),
              (q.name = U),
              (q.prerelease = E),
              (q.product = N),
              (q.ua = n),
              (q.version = U && F),
              (q.os = L || {
                architecture: null,
                family: null,
                version: null,
                toString() {
                  return 'null';
                },
              }),
              (q.parse = t),
              (q.toString = function() {
                return this.description || '';
              }),
              q.version && _.unshift(F),
              q.name && _.unshift(U),
              L &&
                U &&
                (L != String(L).split(' ')[0] || (L != U.split(' ')[0] && !N)) &&
                _.push(N ? `(${L})` : `on ${L}`),
              _.length && (q.description = _.join(' ')),
              q
            );
          })();
        })();
        e.exports = s;
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
    function(e, t, n) {
      const r = n(47);

      const s = n(62);

      const o = n(23);

      const i = n(4);

      const a = n(0);

      const c = a.undef;

      const u = n(147);

      const l = n(74).getInstance('IM');

      const m = n(104);
      function d(e) {
        a.verifyOptions(e, 'appKey account token', 'protocol::IMProtocol'),
          a.verifyCallback(
            e,
            [
              'onconnect',
              'onerror',
              'onwillreconnect',
              'ondisconnect',
              'onloginportschange',
              'onmyinfo',
              'onblacklist',
              'onmutelist',
              'onfriends',
              'onusers',
              'onrobots',
              'onteams',
              'onsessions',
              'onroamingmsgs',
              'onofflinemsgs',
              'onofflinefiltermsgs',
              'onroamingsysmsgs',
              'onofflinesysmsgs',
              'onofflinefiltersysmsgs',
              'onofflinecustomsysmsgs',
              'onofflinefiltercustomsysmsgs',
              'onbroadcastmsg',
              'onbroadcastmsgs',
              'onsysmsgunread',
              'onsyncdone',
              'onteammembers',
              'onsyncteammembersdone',
              'onmsg',
              'onsysmsg',
              'oncustomsysmsg',
              'onupdatemyinfo',
              'onupdateuser',
              'onupdateteammember',
              'onCreateTeam',
              'onUpdateTeam',
              'onAddTeamMembers',
              'onRemoveTeamMembers',
              'onUpdateTeamManagers',
              'onDismissTeam',
              'onTransferTeam',
              'onUpdateTeamMembersMute',
              'onTeamMsgReceipt',
              'onupdatesession',
              'onupdatesysmsgunread',
              'onupdatesysmsg',
              'onsynccreateteam',
              'onsyncmarkinblacklist',
              'onsyncmarkinmutelist',
              'onsyncfriendaction',
              'shouldIgnoreNotification',
              'shouldCountNotifyUnread',
              'onPushNotificationMultiportConfig',
              'onPushNotificationMultiportConfigUpdate',
              'onpushevents',
            ],
            'protocol::IMProtocol'
          ),
          (this.db = e.api.db = new r({ logger: e.logger })),
          s.call(this, e);
      }
      const p = s.fn;

      const f = (d.fn = d.prototype = Object.create(p));
      (f.init = function() {
        p.init.call(this),
          (this.socketUrls = []),
          (this.parser = l),
          (this.syncing = !0),
          (this.hasSynced = !1),
          (this.hasSyncedTeamMembers = !1),
          (this.syncPromiseArray = []),
          (this.syncResult = {}),
          (this.syncTeamMembersPromiseArray = []),
          (this.syncTeamMembersResult = {}),
          (this.timetags = {}),
          (this.sysMsgUnread = m.completeUnread({})),
          this.resetUnsettledMsgs(),
          this.resetUnsettledSysMsgs(),
          (this.msgPromise = Promise.resolve()),
          (this.sysMsgPromise = Promise.resolve()),
          (this.sessionSet = {}),
          (this.msgReceiptTasks = {}),
          (this.userSet = {}),
          (this.pushNotificationMultiportConfig = u.getDefaultConfig());
      }),
        (f.reset = function() {
          p.reset.call(this);
          const e = this.options;
          this.db.reset(e.db), c(e.lbsUrl) && (e.lbsUrl = i.lbsUrl), this.resetAutoMarkRead();
        }),
        (f.resetAutoMarkRead = function() {
          const e = this.options;
          a.verifyBooleanWithDefault(e, 'autoMarkRead', !0, '', 'protocol::resetAutoMarkRead');
        }),
        (f.resetUnsettledMsgs = function() {
          (this.unhandledMsgs = []), (this.unupdatedMsgs = []);
        }),
        (f.resetUnsettledSysMsgs = function() {
          (this.unhandledSysMsgs = []), (this.unupdatedSysMsgs = []);
        }),
        (f.packetFromSync = function(e) {
          return !e.obj || !!e.obj.sync;
        }),
        (f.onCustomError = function(e, t) {
          const n = o.customError(e, t);

          const r = t.message || '未知错误';
          this.onMiscError(r, n);
        }),
        (e.exports = d),
        n(338),
        n(337),
        n(336),
        n(330),
        n(328),
        n(327),
        n(326),
        n(325),
        n(324),
        n(323),
        n(322),
        n(321),
        n(320),
        n(319),
        n(318),
        n(317),
        n(316);
    },
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
    ,
    ,
    function(e, t, n) {
      const r = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n(5));
      function s(e, t) {
        const n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        (this.message = e || n.message || ''),
          (void 0 === t ? 'undefined' : (0, r.default)(t)) === 'object'
            ? ((this.event = t), (this.code = 'Other_Error'))
            : void 0 !== t && (this.code = t),
          (this.timetag = +new Date()),
          void 0 !== n && (this.event = n),
          this.event && ((this.callFunc = this.event.callFunc || null), delete this.event.callFunc);
      }
      (s.prototype = Object.create(Error.prototype)), (s.prototype.name = 'NIMError');
      const o = {
        201: '客户端版本不对, 需升级sdk',
        302: '用户名或密码错误, 请检查appKey和token是否有效, account和token是否匹配',
        403: '非法操作或没有权限',
        404: '对象(用户/群/聊天室)不存在',
        405: '参数长度过长',
        408: '客户端请求超时',
        414: '参数错误',
        415: '服务不可用/没有聊天室服务器可分配',
        416: '频率控制',
        417: '重复操作',
        422: '帐号被禁用',
        500: '服务器内部错误',
        501: '数据库操作失败',
        503: '服务器繁忙',
        508: '删除有效期过了',
        509: '已失效',
        7101: '被拉黑',
        801: '群人数达到上限',
        802: '没有权限',
        803: '群不存在或未发生变化',
        804: '用户不在群里面',
        805: '群类型不匹配',
        806: '创建群数量达到限制',
        807: '群成员状态不对',
        809: '已经在群里',
        811: '强推列表中帐号数量超限',
        812: '群被禁言',
        813: '因群数量限制，部分拉人成功',
        997: '协议已失效',
        998: '解包错误',
        999: '打包错误',
        9102: '通道失效',
        9103: '已经在其他端接听/拒绝过这通电话',
        11001: '对方离线, 通话不可送达',
        13002: '聊天室状态异常',
        13003: '在黑名单中',
        13004: '在禁言名单中',
        13006: '聊天室处于整体禁言状态,只有管理员能发言',
        Connect_Failed:
          '无法建立连接, 请确保能 ping/telnet 到云信服务器; 如果是IE8/9, 请确保项目部署在 HTTPS 环境下',
        Error_Internet_Disconnected: '网断了',
        Error_Connection_is_not_Established: '连接未建立',
        Error_Connection_Socket_State_not_Match: 'socket状态不对',
        Error_Timeout: '超时',
        Param_Error: '参数错误',
        No_File_Selected: '请选择文件',
        Wrong_File_Type: '文件类型错误',
        File_Too_Large: '文件过大',
        Cross_Origin_Iframe: '不能获取跨域Iframe的内容',
        Not_Support: '不支持',
        NO_DB: '无数据库',
        DB: '数据库错误',
        Still_In_Team: '还在群里',
        Session_Exist: '会话已存在',
        Session_Not_Exist: '会话不存在',
        Error_Unknown: '未知错误',
        Operation_Canceled: '操作取消',
      };
      [200, 406, 808, 810].forEach(e => {
        o[e] = null;
      }),
        (s.genError = function(e) {
          let t = o[e];
          return void 0 === t && (t = '操作失败'), t === null ? null : new s(t, e);
        }),
        (s.multiInstance = function(e) {
          return new s('不允许初始化多个实例', 'Not_Allow_Multi_Instance', e);
        }),
        (s.newNetworkError = function(e) {
          const t = 'Error_Internet_Disconnected';
          return new s(o[t], t, e);
        }),
        (s.newConnectError = function(e) {
          const t = 'Connect_Failed';
          return new s(o[t] || null, t, e);
        }),
        (s.newConnectionError = function(e) {
          const t = 'Error_Connection_is_not_Established';
          return new s(o[t], t, e);
        }),
        (s.newSocketStateError = function(e) {
          const t = 'Error_Connection_Socket_State_not_Match';
          return new s(o[t], t, e);
        }),
        (s.newTimeoutError = function(e) {
          const t = 'Error_Timeout';
          return new s(o[t], t, e);
        }),
        (s.newFrequencyControlError = function(e) {
          const t = new s(o[416], 416, e);
          return (t.from = 'local'), t;
        }),
        (s.newParamError = function(e, t) {
          return new s(e || o.Param_Error, 'Param_Error', t);
        }),
        (s.newNoFileError = function(e, t) {
          const n = 'No_File_Selected';
          return new s(e || o[n], n, t);
        }),
        (s.newWrongFileTypeError = function(e, t) {
          const n = 'Wrong_File_Type';
          return new s(e || o[n], n, t);
        }),
        (s.newFileTooLargeError = function(e, t) {
          const n = 'File_Too_Large';
          return new s(e || o[n], n, t);
        }),
        (s.newCORSIframeError = function(e) {
          const t = 'Cross_Origin_Iframe';
          return new s(o[t], t, e);
        }),
        (s.newSupportError = function(e, t, n) {
          return new s(`不支持${e}`, `Not_Support_${t}`, n);
        }),
        (s.newSupportDBError = function(e) {
          return s.newSupportError('数据库', 'DB', e);
        }),
        (s.noDBError = function(e) {
          return new s(o.NO_DB, 'NO_DB', e);
        }),
        (s.newDBError = function(e) {
          return new s(o.DB, 'DB', e);
        }),
        (s.newUnknownError = function(e) {
          const t = 'Error_Unknown';
          return new s(o[t], t, e);
        }),
        (s.stillInTeamError = function(e) {
          const t = 'Still_In_Team';
          return new s(o[t], t, e);
        }),
        (s.sessionExist = function(e) {
          const t = 'Session_Exist';
          return new s(o[t], t, e);
        }),
        (s.sessionNotExist = function(e) {
          const t = 'Session_Not_Exist';
          return new s(o[t], t, e);
        }),
        (s.cancel = function(e) {
          const t = 'Operation_Canceled';
          return new s(o[t], t, e);
        }),
        (s.customError = function(e, t) {
          e = e || 'Other_Error';
          let n = '';
          return (
            (t = t || {}).message || (n = o[e] || e),
            (void 0 === e ? 'undefined' : (0, r.default)(e)) !== 'object'
              ? new s(n, e, t)
              : new s(n, 'Other_Error', void 0 === t ? e : t)
          );
        }),
        (e.exports = s);
    },
    function(e, t, n) {
      (function(e) {
        Object.defineProperty(t, '__esModule', { value: !0 }),
          (t.url2origin = t.uniqueID = t.off = t.removeEventListener = t.on = t.addEventListener = t.format = t.regWhiteSpace = t.regBlank = t.emptyFunc = t.f = t.emptyObj = t.o = void 0);
        const r = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(n(5));
        (t.getGlobal = s),
          (t.detectCSSFeature = function(e) {
            let t = !1;

            const n = 'Webkit Moz ms O'.split(' ');

            const r = document.createElement('div');

            let s = null;
            (e = e.toLowerCase()), void 0 !== r.style[e] && (t = !0);
            if (!1 === t) {
              s = e.charAt(0).toUpperCase() + e.substr(1);
              for (let o = 0; o < n.length; o++)
                if (void 0 !== r.style[n[o] + s]) {
                  t = !0;
                  break;
                }
            }
            return t;
          }),
          (t.fix = o),
          (t.getYearStr = i),
          (t.getMonthStr = a),
          (t.getDayStr = c),
          (t.getHourStr = u),
          (t.getMinuteStr = l),
          (t.getSecondStr = m),
          (t.getMillisecondStr = d),
          (t.dateFromDateTimeLocal = function(e) {
            return (e = `${e}`), new Date(e.replace(/-/g, '/').replace('T', ' '));
          }),
          (t.getClass = p),
          (t.typeOf = f),
          (t.isString = g),
          (t.isNumber = function(e) {
            return f(e) === 'number';
          }),
          (t.isBoolean = function(e) {
            return f(e) === 'boolean';
          }),
          (t.isArray = h),
          (t.isFunction = y),
          (t.isDate = v),
          (t.isRegExp = function(e) {
            return f(e) === 'regexp';
          }),
          (t.isError = function(e) {
            return f(e) === 'error';
          }),
          (t.isnull = b),
          (t.notnull = M),
          (t.undef = T),
          (t.notundef = k),
          (t.exist = S),
          (t.notexist = C),
          (t.isObject = P),
          (t.isEmpty = function(e) {
            return C(e) || ((g(e) || h(e)) && e.length === 0);
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
            if (!S(n)) return e.getAttribute(`data-${t}`);
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
            y(e.onload) &&
              O(t, 'load', function n(r) {
                if (!t.src) return;
                e.multi || x(t, 'load', n);
                e.onload(r);
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

            let r = void 0;

            let s = void 0;
            if (t.children) for (r = 0, s = t.children.length; r < s; r++) n.push(t.children[r]);
            else
              for (r = 0, s = t.childNodes.length; r < s; r++) {
                const o = t.childNodes[r];
                o.nodeType === 1 && n.push(o);
              }
            return n.length > 1 ? t : n[0];
          }),
          (t.scrollTop = function(e) {
            S(e) && (document.documentElement.scrollTop = document.body.scrollTop = e);
            return (
              window.pageYOffset ||
              document.documentElement.scrollTop ||
              document.body.scrollTop ||
              0
            );
          }),
          (t.forOwn = A),
          (t.mixin = _),
          (t.isJSON = E),
          (t.parseJSON = function e(t) {
            try {
              E(t) && (t = JSON.parse(t)),
                P(t) &&
                  A(t, (n, r) => {
                    switch (f(r)) {
                      case 'string':
                      case 'object':
                        t[n] = e(r);
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
              if ((void 0 === n ? 'undefined' : (0, r.default)(n)) === 'object' && n !== null) {
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
                r = 1;
              r < t;
              r++
            )
              n[r - 1] = arguments[r];
            return (
              n.forEach(t => {
                _(e, t);
              }),
              e
            );
          }),
          (t.fillUndef = function(e, t) {
            return (
              A(t, (t, n) => {
                T(e[t]) && (e[t] = n);
              }),
              e
            );
          }),
          (t.checkWithDefault = function(e, t, n) {
            let r = e[t] || e[t.toLowerCase()];
            C(r) && ((r = n), (e[t] = r));
            return r;
          }),
          (t.fetch = function(e, t) {
            return (
              A(e, (n, r) => {
                S(t[n]) && (e[n] = t[n]);
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

                const r = t.shift();
                r && (n[decodeURIComponent(r)] = decodeURIComponent(t.join('=')));
              }),
              n
            );
          }),
          (t.object2string = R),
          (t.genUrlSep = function(e) {
            return e.indexOf('?') < 0 ? '?' : '&';
          }),
          (t.object2query = function(e) {
            return R(e, '&', !0);
          }),
          (t.isFileInput = F),
          (t.getKeys = function(e, t) {
            const n = Object.keys(e);
            t &&
              n.sort((t, n) => {
                const r = F(e[t]);

                const s = F(e[n]);
                return r === s ? 0 : r ? 1 : -1;
              });
            return n;
          });
        (t.o = {}),
          (t.emptyObj = {}),
          (t.f = function() {}),
          (t.emptyFunc = function() {}),
          (t.regBlank = /\s+/gi),
          (t.regWhiteSpace = /\s+/gi);
        function s() {
          return typeof window !== 'undefined' ? window : void 0 !== e ? e : {};
        }
        function o(e, t) {
          t = t || 2;
          for (var n = `${e}`; n.length < t; ) n = `0${n}`;
          return n;
        }
        function i(e) {
          return `${e.getFullYear()}`;
        }
        function a(e) {
          return o(e.getMonth() + 1);
        }
        function c(e) {
          return o(e.getDate());
        }
        function u(e) {
          return o(e.getHours());
        }
        function l(e) {
          return o(e.getMinutes());
        }
        function m(e) {
          return o(e.getSeconds());
        }
        function d(e) {
          return o(e.getMilliseconds(), 3);
        }
        t.format = (function() {
          const e = /yyyy|MM|dd|hh|mm|ss|SSS/g;

          const t = { yyyy: i, MM: a, dd: c, hh: u, mm: l, ss: m, SSS: d };
          return function(n, r) {
            return (
              (n = new Date(n)),
              isNaN(+n)
                ? 'invalid date'
                : (r = r || 'yyyy-MM-dd').replace(e, e => {
                    return t[e](n);
                  })
            );
          };
        })();
        function p(e) {
          return Object.prototype.toString.call(e).slice(8, -1);
        }
        function f(e) {
          return p(e).toLowerCase();
        }
        function g(e) {
          return f(e) === 'string';
        }
        function h(e) {
          return f(e) === 'array';
        }
        function y(e) {
          return f(e) === 'function';
        }
        function v(e) {
          return f(e) === 'date';
        }
        function b(e) {
          return e === null;
        }
        function M(e) {
          return e !== null;
        }
        function T(e) {
          return void 0 === e;
        }
        function k(e) {
          return void 0 !== e;
        }
        function S(e) {
          return k(e) && M(e);
        }
        function C(e) {
          return T(e) || b(e);
        }
        function P(e) {
          return S(e) && f(e) === 'object';
        }
        const I = (t.addEventListener = function(e, t, n) {
          e.addEventListener
            ? e.addEventListener(t, n, !1)
            : e.attachEvent && e.attachEvent(`on${t}`, n);
        });

        var O = (t.on = I);

        const w = (t.removeEventListener = function(e, t, n) {
          e.removeEventListener
            ? e.removeEventListener(t, n, !1)
            : e.detachEvent && e.detachEvent(`on${t}`, n);
        });

        var x = (t.off = w);
        function A() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

          const t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {};

          const n = arguments[2];
          for (const r in e) e.hasOwnProperty(r) && t.call(n, r, e[r]);
        }
        function _(e, t) {
          A(t, (t, n) => {
            e[t] = n;
          });
        }
        t.uniqueID = (function() {
          let e = 0;
          return function() {
            return `${e++}`;
          };
        })();
        function E(e) {
          return g(e) && e.indexOf('{') === 0 && e.lastIndexOf('}') === e.length - 1;
        }
        function R(e, t, n) {
          if (!e) return '';
          const r = [];
          return (
            A(e, (e, t) => {
              y(t) ||
                (v(t)
                  ? (t = t.getTime())
                  : h(t)
                    ? (t = t.join(','))
                    : P(t) && (t = JSON.stringify(t)),
                n && (t = encodeURIComponent(t)),
                r.push(`${encodeURIComponent(e)}=${t}`));
            }),
            r.join(t || ',')
          );
        }
        t.url2origin = (function() {
          const e = /^([\w]+?:\/\/.*?(?=\/|$))/i;
          return function(t) {
            return e.test(t || '') ? RegExp.$1.toLowerCase() : '';
          };
        })();
        function F(e) {
          const t = s();
          return (
            (e.tagName && e.tagName.toUpperCase() === 'INPUT') || (t.Blob && e instanceof t.Blob)
          );
        }
      }.call(this, n(30)));
    },
    function(e, t, n) {
      const r = Object.prototype.hasOwnProperty;

      let s = '~';
      function o() {}
      function i(e, t, n) {
        (this.fn = e), (this.context = t), (this.once = n || !1);
      }
      function a() {
        (this._events = new o()), (this._eventsCount = 0);
      }
      Object.create && ((o.prototype = Object.create(null)), new o().__proto__ || (s = !1)),
        (a.prototype.eventNames = function() {
          let e;

          let t;

          const n = [];
          if (this._eventsCount === 0) return n;
          for (t in (e = this._events)) r.call(e, t) && n.push(s ? t.slice(1) : t);
          return Object.getOwnPropertySymbols ? n.concat(Object.getOwnPropertySymbols(e)) : n;
        }),
        (a.prototype.listeners = function(e, t) {
          const n = s ? s + e : e;

          const r = this._events[n];
          if (t) return !!r;
          if (!r) return [];
          if (r.fn) return [r.fn];
          for (var o = 0, i = r.length, a = new Array(i); o < i; o++) a[o] = r[o].fn;
          return a;
        }),
        (a.prototype.emit = function(e, t, n, r, o, i) {
          const a = s ? s + e : e;
          if (!this._events[a]) return !1;
          let c;

          let u;

          const l = this._events[a];

          const m = arguments.length;
          if (l.fn) {
            switch ((l.once && this.removeListener(e, l.fn, void 0, !0), m)) {
              case 1:
                return l.fn.call(l.context), !0;
              case 2:
                return l.fn.call(l.context, t), !0;
              case 3:
                return l.fn.call(l.context, t, n), !0;
              case 4:
                return l.fn.call(l.context, t, n, r), !0;
              case 5:
                return l.fn.call(l.context, t, n, r, o), !0;
              case 6:
                return l.fn.call(l.context, t, n, r, o, i), !0;
            }
            for (u = 1, c = new Array(m - 1); u < m; u++) c[u - 1] = arguments[u];
            l.fn.apply(l.context, c);
          } else {
            let d;

            const p = l.length;
            for (u = 0; u < p; u++)
              switch ((l[u].once && this.removeListener(e, l[u].fn, void 0, !0), m)) {
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
                  l[u].fn.call(l[u].context, t, n, r);
                  break;
                default:
                  if (!c) for (d = 1, c = new Array(m - 1); d < m; d++) c[d - 1] = arguments[d];
                  l[u].fn.apply(l[u].context, c);
              }
          }
          return !0;
        }),
        (a.prototype.on = function(e, t, n) {
          const r = new i(t, n || this);

          const o = s ? s + e : e;
          return (
            this._events[o]
              ? this._events[o].fn
                ? (this._events[o] = [this._events[o], r])
                : this._events[o].push(r)
              : ((this._events[o] = r), this._eventsCount++),
            this
          );
        }),
        (a.prototype.once = function(e, t, n) {
          const r = new i(t, n || this, !0);

          const o = s ? s + e : e;
          return (
            this._events[o]
              ? this._events[o].fn
                ? (this._events[o] = [this._events[o], r])
                : this._events[o].push(r)
              : ((this._events[o] = r), this._eventsCount++),
            this
          );
        }),
        (a.prototype.removeListener = function(e, t, n, r) {
          const i = s ? s + e : e;
          if (!this._events[i]) return this;
          if (!t)
            return (
              --this._eventsCount == 0 ? (this._events = new o()) : delete this._events[i], this
            );
          const a = this._events[i];
          if (a.fn)
            a.fn !== t ||
              (r && !a.once) ||
              (n && a.context !== n) ||
              (--this._eventsCount == 0 ? (this._events = new o()) : delete this._events[i]);
          else {
            for (var c = 0, u = [], l = a.length; c < l; c++)
              (a[c].fn !== t || (r && !a[c].once) || (n && a[c].context !== n)) && u.push(a[c]);
            u.length
              ? (this._events[i] = u.length === 1 ? u[0] : u)
              : --this._eventsCount == 0
                ? (this._events = new o())
                : delete this._events[i];
          }
          return this;
        }),
        (a.prototype.removeAllListeners = function(e) {
          let t;
          return (
            e
              ? ((t = s ? s + e : e),
                this._events[t] &&
                  (--this._eventsCount == 0 ? (this._events = new o()) : delete this._events[t]))
              : ((this._events = new o()), (this._eventsCount = 0)),
            this
          );
        }),
        (a.prototype.off = a.prototype.removeListener),
        (a.prototype.addListener = a.prototype.on),
        (a.prototype.setMaxListeners = function() {
          return this;
        }),
        (a.prefixed = s),
        (a.EventEmitter = a),
        (e.exports = a);
    },
    function(e, t) {
      t.f = {}.propertyIsEnumerable;
    },
    function(e, t) {
      let n = 0;

      const r = Math.random();
      e.exports = function(e) {
        return 'Symbol('.concat(void 0 === e ? '' : e, ')_', (++n + r).toString(36));
      };
    },
    function(e, t, n) {
      const r = n(55);

      const s = n(36);
      e.exports =
        Object.keys ||
        function(e) {
          return r(e, s);
        };
    },
    function(e, t, n) {
      const r = n(46);

      const s = n(17);

      const o = n(4);

      const i = n(315);

      const a = n(74).getInstance('IM');
      function c(e) {
        return (
          (this.subType = 'im'),
          (e.Protocol = s),
          (e.Message = i),
          (e.constructor = c),
          this.init(e)
        );
      }
      (c.Protocol = s),
        (c.parser = a),
        (c.use = r.use),
        (c.getInstance = r.getInstance),
        (c.rmAllInstances = r.rmAllInstances),
        (c.genInstanceName = function(e) {
          return `NIM-account-${e.account}`;
        });
      const u = (c.fn = c.prototype = Object.create(r.prototype));
      (c.info = u.info = o.info),
        (e.exports = c),
        n(305),
        n(304),
        n(303),
        n(302),
        n(301),
        n(300),
        n(299),
        n(298),
        n(297),
        n(296),
        n(295),
        n(294),
        n(293),
        n(292),
        n(291),
        n(290),
        n(289);
    },
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
      const r = n(6).f;

      const s = n(7);

      const o = n(2)('toStringTag');
      e.exports = function(e, t, n) {
        e && !s((e = n ? e : e.prototype), o) && r(e, o, { configurable: !0, value: t });
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
      const r = n(1);

      const s = n(3);

      const o = n(20);

      const i = n(35);

      const a = n(6).f;
      e.exports = function(e) {
        const t = s.Symbol || (s.Symbol = o ? {} : r.Symbol || {});
        e.charAt(0) == '_' || e in t || a(t, e, { value: i.f(e) });
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
      const r = n(3);

      const s = n(1);

      const o = s['__core-js_shared__'] || (s['__core-js_shared__'] = {});
      (e.exports = function(e, t) {
        return o[e] || (o[e] = void 0 !== t ? t : {});
      })('versions', []).push({
        version: r.version,
        mode: n(20) ? 'pure' : 'global',
        copyright: '© 2018 Denis Pushkarev (zloirock.ru)',
      });
    },
    function(e, t, n) {
      const r = n(37)('keys');

      const s = n(27);
      e.exports = function(e) {
        return r[e] || (r[e] = s(e));
      };
    },
    function(e, t, n) {
      const r = n(11);
      e.exports = function(e, t) {
        if (!r(e)) return e;
        let n;
        let s;
        if (t && typeof (n = e.toString) === 'function' && !r((s = n.call(e)))) return s;
        if (typeof (n = e.valueOf) === 'function' && !r((s = n.call(e)))) return s;
        if (!t && typeof (n = e.toString) === 'function' && !r((s = n.call(e)))) return s;
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

      const r = Math.floor;
      e.exports = function(e) {
        return isNaN((e = +e)) ? 0 : (e > 0 ? r : n)(e);
      };
    },
    ,
    function(e, t, n) {
      const r = n(0);

      var s = {
        init() {
          s.deviceId = r.guid();
        },
      };
      s.init(),
        (s.clientTypeMap = {
          1: 'Android',
          2: 'iOS',
          4: 'PC',
          8: 'WindowsPhone',
          16: 'Web',
          32: 'Server',
          64: 'Mac',
        }),
        (s.db = { open() {} }),
        (e.exports = s);
    },
    function(e, t, n) {
      const r = n(61);
      e.exports = function(e, t, n) {
        if ((r(e), void 0 === t)) return e;
        switch (n) {
          case 1:
            return function(n) {
              return e.call(t, n);
            };
          case 2:
            return function(n, r) {
              return e.call(t, n, r);
            };
          case 3:
            return function(n, r, s) {
              return e.call(t, n, r, s);
            };
        }
        return function() {
          return e.apply(t, arguments);
        };
      };
    },
    function(e, t, n) {
      const r = n(9);

      const s = n(95);

      const o = n(36);

      const i = n(38)('IE_PROTO');

      const a = function() {};

      var c = function() {
        let e;

        const t = n(50)('iframe');

        let r = o.length;
        for (
          t.style.display = 'none',
            n(73).appendChild(t),
            t.src = 'javascript:',
            (e = t.contentWindow.document).open(),
            e.write('<script>document.F=Object</script>'),
            e.close(),
            c = e.F;
          r--;

        )
          delete c.prototype[o[r]];
        return c();
      };
      e.exports =
        Object.create ||
        function(e, t) {
          let n;
          return (
            e !== null
              ? ((a.prototype = r(e)), (n = new a()), (a.prototype = null), (n[i] = e))
              : (n = c()),
            void 0 === t ? n : s(n, t)
          );
        };
    },
    function(e, t, n) {
      const r = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n(5));
      const s = n(25);

      const o = n(0);

      const i = o.notundef;

      const a = n(205);

      const c = n(4);
      n(43);
      function u() {}
      let l = {};
      (u.getInstance = function(e) {
        o.verifyOptions(e, 'account', 'api::Base.getInstance');
        const t = this.genInstanceName(e);

        let n = l[t];
        return n ? u.updateInstance(n, e) : (n = l[t] = new this(e)), n;
      }),
        (u.updateInstance = function(e, t) {
          e.setOptions(t), e.connect();
        });
      const m = (u.fn = u.prototype = Object.create(new s()));
      (m.updatePrivateConf = function(e) {
        if (e && (0, r.default)(e.privateConf) === 'object') {
          const t = e.privateConf;
          typeof t.lbs_web === 'string' && (e.lbsUrl = t.lbs_web),
            typeof t.link_ssl_web === 'boolean' && (e.secure = t.link_ssl_web),
            typeof t.https_enabled === 'boolean' && (e.httpsEnabled = t.https_enabled),
            (e.uploadUrl = t.nos_uploader_web ? t.nos_uploader_web : null),
            (e.replaceUrl = t.nos_downloader ? t.nos_downloader : null),
            (e.downloadUrl = t.nos_accelerate ? t.nos_accelerate : null),
            (e.downloadHost = t.nos_accelerate_host ? t.nos_accelerate_host : null),
            (e.ntServerAddress = t.nt_server);
        }
        return (
          e.ntServerAddress === null || e.ntServerAddress === ''
            ? (c.ntServerAddress = null)
            : (c.ntServerAddress = e.ntServerAddress || c.defaultReportUrl),
          (c.uploadUrl = e.uploadUrl || c.uploadUrl),
          (c.downloadUrl = e.downloadUrl || c.downloadUrl),
          (c.downloadHost = e.downloadHost || c.downloadHost),
          (c.replaceUrl = e.replaceUrl || c.replaceUrl),
          (c.httpsEnabled = e.httpsEnabled || c.httpsEnabled),
          e
        );
      }),
        (m.init = function(e) {
          o.verifyOptions(e, 'account', 'api::Base.init'), (e = this.updatePrivateConf(e));
          const t = (this.account = e.account += '');

          const n = e.constructor.genInstanceName(e);

          let r = l[n];
          if ((e._disableSingleton && (r = null), r)) return u.updateInstance(r, e), r;
          (this.name = n),
            (l[n] = this),
            (this.logger = e.logger = new a({
              debug: e.debug,
              logFunc: e.logFunc,
              prefix: this.subType,
            })),
            (e.api = this);
          const s = (this.protocol = new e.Protocol(e));
          return (
            (s.name = `Protocol-${n}`),
            (s.account = t),
            (s.api = this),
            (s.message = this.message = new e.Message({ account: t })),
            (this.options = o.copy(e)),
            this.reset(),
            this
          );
        }),
        (m.destroy = function(e) {
          e = e || {};
          const t = this.name;
          this.protocol && this.protocol.resetPush && this.protocol.resetPush();
          const n = this;
          function r(r) {
            n.logger.warn('ApiBase::destroy: instance destroyed ...'),
              Object.getOwnPropertyNames(n).forEach(e => {
                delete n[e];
              }),
              l && (delete l[t], (l[t] = null)),
              e.done instanceof Function && e.done(r);
          }
          this.isConnected && this.isConnected() ? this.disconnect({ done: r }) : r(null);
        }),
        (m.reset = function() {
          const e = this.updatePrivateConf(this.options);
          o.verifyBooleanWithDefault(e, 'exifOrientation', !0, '', 'api::Base.reset');
        }),
        (m.setOptions = function(e) {
          this.reset(), this.protocol.setOptions(e);
        }),
        (m.processCallback = function(e, t) {
          d(e, t);
        }),
        (m.processCallbackPromise = function(e, t) {
          return new Promise((n, r) => {
            d(e, t, !0, n, r);
          });
        });
      var d = function(e, t, n, r, s) {
        let a = 'api::processCallback';
        n && (a = 'api::processCallbackPromise'),
          o.verifyCallback(e, 'done', a),
          (e.callback = function(c, u, l) {
            const m = e.callback.options;
            if (((u = u || m), t && (u = m), o.isFunction(e.cbaop))) {
              const d = e.cbaop(c, u);
              i(d) && (u = d);
            }
            const p = e.done;
            o.isObject(u) && (delete u.done, delete u.cb, delete u.callback),
              n
                ? c
                  ? s({ message: '生成接口回调错误', callFunc: a, event: c })
                  : r(u)
                : p(c, u, l);
          }),
          (e.callback.options = o.copy(e));
      };
      (m.processPs = function(e) {
        o.notexist(e.ps) && (e.ps = '');
      }),
        (m.processCustom = function(e) {
          o.notexist(e.custom) && (e.custom = '');
        }),
        (m.sendCmd = function() {
          this.protocol.sendCmd.apply(this.protocol, arguments);
        }),
        (m.sendCmdWithResp = function(e, t, n) {
          this.sendCmd(e, t, (e, t, r) => {
            o.isFunction(n) && (e ? n(e, t) : n(null, r));
          });
        }),
        (m.cbAndSendCmd = function(e, t) {
          const n = this.processCallbackPromise(t);
          return this.sendCmd(e, t), n;
        }),
        (u.use = function(e, t) {
          e && e.install && o.isFunction(e.install) && e.install(this, t);
        }),
        (u.rmAllInstances = function() {
          for (const e in l) l[e].destroy();
          l = {};
        }),
        (m.logout = function(e) {
          (this.protocol.shouldReconnect = !1),
            (this.protocol.doLogout = !0),
            this.processCallback(e),
            this.sendCmd('logout', e, e.callback);
        }),
        (e.exports = u),
        n(198),
        n(197),
        n(193),
        n(192),
        n(191),
        n(190);
    },
    function(e, t, n) {
      const r = n(351);
      (r.fn = r.prototype),
        (e.exports = r),
        n(348),
        n(347),
        n(346),
        n(345),
        n(344),
        n(343),
        n(342),
        n(341),
        n(340),
        n(339);
    },
    ,
    function(e, t, n) {
      const r = n(40);
      e.exports = function(e) {
        return Object(r(e));
      };
    },
    function(e, t, n) {
      const r = n(11);

      const s = n(1).document;

      const o = r(s) && r(s.createElement);
      e.exports = function(e) {
        return o ? s.createElement(e) : {};
      };
    },
    function(e, t, n) {
      const r = n(97)(!0);
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
            : ((e = r(t, n)), (this._i += e.length), { value: e, done: !1 });
        }
      );
    },
    ,
    function(e, t, n) {
      const r = n(55);

      const s = n(36).concat('length', 'prototype');
      t.f =
        Object.getOwnPropertyNames ||
        function(e) {
          return r(e, s);
        };
    },
    function(e, t, n) {
      const r = n(32);
      e.exports = Object('z').propertyIsEnumerable(0)
        ? Object
        : function(e) {
            return r(e) == 'String' ? e.split('') : Object(e);
          };
    },
    function(e, t, n) {
      const r = n(7);

      const s = n(12);

      const o = n(94)(!1);

      const i = n(38)('IE_PROTO');
      e.exports = function(e, t) {
        let n;

        const a = s(e);

        let c = 0;

        const u = [];
        for (n in a) n != i && r(a, n) && u.push(n);
        for (; t.length > c; ) r(a, (n = t[c++])) && (~o(u, n) || u.push(n));
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
      const r = n(20);

      const s = n(13);

      const o = n(56);

      const i = n(10);

      const a = n(18);

      const c = n(96);

      const u = n(31);

      const l = n(92);

      const m = n(2)('iterator');

      const d = !([].keys && 'next' in [].keys());

      const p = function() {
        return this;
      };
      e.exports = function(e, t, n, f, g, h, y) {
        c(n, t, f);
        let v;

        let b;

        let M;

        const T = function(e) {
          if (!d && e in P) return P[e];
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

        const k = `${t} Iterator`;

        const S = g == 'values';

        let C = !1;

        var P = e.prototype;

        const I = P[m] || P['@@iterator'] || (g && P[g]);

        let O = I || T(g);

        const w = g ? (S ? T('entries') : O) : void 0;

        const x = (t == 'Array' && P.entries) || I;
        if (
          (x &&
            (M = l(x.call(new e()))) !== Object.prototype &&
            M.next &&
            (u(M, k, !0), r || typeof M[m] === 'function' || i(M, m, p)),
          S &&
            I &&
            I.name !== 'values' &&
            ((C = !0),
            (O = function() {
              return I.call(this);
            })),
          (r && !y) || (!d && !C && P[m]) || i(P, m, O),
          (a[t] = O),
          (a[k] = p),
          g)
        )
          if (((v = { values: S ? O : T('values'), keys: h ? O : T('keys'), entries: w }), y))
            for (b in v) b in P || o(P, b, v[b]);
          else s(s.P + s.F * (d || C), t, v);
        return v;
      };
    },
    function(e, t, n) {
      const r = n(108);

      const s = n(200);

      const o = n(199);
      (r.json = s), (r.upload = o), (e.exports = r);
    },
    function(e, t, n) {
      n(91);
      for (
        let r = n(1),
          s = n(10),
          o = n(18),
          i = n(2)('toStringTag'),
          a = 'CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList'.split(
            ','
          ),
          c = 0;
        c < a.length;
        c++
      ) {
        const u = a[c];

        const l = r[u];

        const m = l && l.prototype;
        m && !m[i] && s(m, i, u), (o[u] = o.Array);
      }
    },
    function(e, t) {
      e.exports = function(e) {
        if (typeof e !== 'function') throw TypeError(`${e} is not a function!`);
        return e;
      };
    },
    function(e, t, n) {
      const r = n(0);

      const s = n(4);

      const o = n(23);
      function i(e) {
        r.undef(e.secure) && (e.secure = !0),
          (this.options = r.copy(e)),
          this.init(),
          this.connect();
      }
      const a = (i.fn = i.prototype);
      (a.init = function() {
        (this.logger = this.options.logger),
          (this.cmdTaskArray = []),
          (this.timerMap = {}),
          (this.cmdCallbackMap = {}),
          (this.cmdContentMap = {}),
          this.initConnect(),
          this.reset();
      }),
        (a.reset = function() {
          this.resetConnect();
        }),
        (a.setOptions = function(e) {
          const t = this.options;

          const n = Object.keys(t);

          const s = n.indexOf('account');
          s !== -1 && n.splice(s, 1),
            (e = r.filterObj(e, n)),
            (this.options = r.merge(t, e)),
            this.reset();
        }),
        (a.sendCmd = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '';

          let n = arguments[2];
          this.heartbeat(), e !== 'heartbeat' && this.logger.warn(`protocol::sendCmd: ${e}`, t);
          let r;

          const s = e;

          const o = (e = this.parser.createCmd(e, t)).SER;
          (t = t || {}),
            (this.cmdContentMap[o] = t),
            t.single &&
              (delete t.single,
              (r = Object.keys(t)).length === 1 && (this.cmdContentMap[o] = t[r[0]])),
            t.NOTSTORE &&
              ((r = t.NOTSTORE.split(' ')).forEach(e => {
                delete t[e];
              }),
              delete t.NOTSTORE),
            (n = n || t.callback) && (this.cmdCallbackMap[o] = n),
            this.cmdTaskArray.push({ cmdName: s, cmd: JSON.stringify(e) }),
            this.startCmdTaskTimer();
        }),
        (a.startCmdTaskTimer = function() {
          const e = this;
          e.cmdTaskTimer ||
            (e.cmdTaskTimer = setTimeout(() => {
              const t = e.cmdTaskArray.shift();
              (e.cmdTaskTimer = null),
                t && e.executeCmdTask(t),
                e.cmdTaskArray.length && e.startCmdTaskTimer();
            }, 0));
        }),
        (a.executeCmdTask = function(e) {
          const t = e.cmdName;

          let n = e.cmd;

          const r = (n = JSON.parse(n)).SER;
          this.isFrequencyControlled(t)
            ? (this.logger.warn(`protocol::executeCmdTask: ${t} hit freq control`),
              this.markCallbackInvalid(
                r,
                o.newFrequencyControlError({
                  callFunc: 'protocol::executeCmdTask',
                  message: `${t} hit freq control`,
                })
              ))
            : this.isConnected()
              ? (this.logger.log(`protocol::sendCmd: ${t} ${JSON.stringify(n)}`), this.doSendCmd(n))
              : (this.logger.warn(`protocol::executeCmdTask: ${t} not connected`),
                this.markCallbackInvalid(
                  r,
                  o.newSocketStateError({
                    callFunc: 'protocol::executeCmdTask',
                    message: `${t} not connected`,
                  })
                ));
        }),
        (a.isFrequencyControlled = function(e) {
          const t = this.frequencyControlMap && this.frequencyControlMap[e];
          if (t) {
            if (Date.now() < t.from + t.duration) return !0;
            delete this.frequencyControlMap[e];
          }
        }),
        (a.doSendCmd = function(e) {
          const t = this;

          const n = e.SER;
          t.timerMap[n] = setTimeout(() => {
            t.markCallbackInvalid(
              n,
              o.newTimeoutError({
                callFunc: 'protocol::doSendCmd',
                message: `ser ${n} Timeout Error`,
              })
            );
          }, s.cmdTimeout);
          try {
            t.socket.send(JSON.stringify(e));
          } catch (e) {
            t.markCallbackInvalid(
              n,
              o.newSocketStateError({
                callFunc: 'protocol::doSendCmd',
                message: `ser ${n} socketSendJson Error`,
              })
            ),
              t.onDisconnect(!0, 'protocol::doSendCmd:socketSendJson');
          }
        }),
        (a.getObjWithSer = function(e) {
          const t = this.cmdContentMap[e];
          return delete this.cmdContentMap[e], t && r.copy(t);
        }),
        (a.getCallbackWithSer = function(e) {
          const t = this.cmdCallbackMap[e];
          return delete this.cmdCallbackMap[e], t;
        }),
        (a.getTimerWithSer = function(e) {
          const t = this.timerMap[e];
          return delete this.timerMap[e], t;
        }),
        (a.clearTimerWithSer = function(e) {
          const t = this.getTimerWithSer(e);
          t && clearTimeout(t);
        }),
        (a.markCallbackInvalid = function(e, t) {
          this.getObjWithSer(e), this.clearTimerWithSer(e);
          const n = this.getCallbackWithSer(e);
          if (n) {
            const r = n.options;
            setTimeout(() => {
              n(t || o.newUnknownError({ ser: e }), r);
            }, 0);
          }
        }),
        (a.markAllCallbackInvalid = function(e) {
          const t = this;
          Object.keys(this.cmdCallbackMap).forEach(n => {
            t.markCallbackInvalid(n, e);
          });
        }),
        (a.getPacketObj = function(e) {
          let t = null;
          if (e && e.raw) {
            const n = e.raw.ser;
            r.notundef(n) && (t = this.getObjWithSer(n));
          }
          return t;
        }),
        (a.callPacketAckCallback = function(e) {
          const t = this;
          if (e && e.raw) {
            const n = e.raw.ser;
            if (r.notundef(n)) {
              t.clearTimerWithSer(n);
              const s = t.getCallbackWithSer(n);
              s &&
                (e.promise
                  ? e.promise.then(
                      () => {
                        s(e.error, e.obj);
                      },
                      r => {
                        (r.callFunc = 'protocol::callPacketAckCallback'),
                          (r.message = `Resp Promoise Error: cmd: ${e.cmd}, ser: ${n}`);
                        const i = o.customError('CALLBACK_ACK_ERR', r);
                        t.logger.error(
                          `protocol::callPacketAckCallback: promise error ${JSON.stringify(r)}`
                        ),
                          s(i, e.obj, e.content);
                      }
                    )
                  : s(e.error, e.obj, e.content));
            }
          }
        }),
        (a.onMessage = function(e) {
          this.heartbeat();
          const t = this.parser.parseResponse(e);
          t.notFound &&
            this.logger.warn(`protocol::onMessage: packet not found ${JSON.stringify(t)}`),
            t.error
              ? ((t.error.message = `${t.cmd} error: ${t.error.message}`),
                this.logger.error(`protocol::onMessage: packet error ${JSON.stringify(t.error)}`))
              : t.content ||
                t.cmd === 'heartbeat' ||
                this.logger.warn(
                  `protocol::onMessage: packet.content undefined ${JSON.stringify(t)}`
                ),
            t.frequencyControlDuration &&
              (this.logger.error(
                `protocol::onMessage: server freq control ${JSON.stringify(t.cmd)}`
              ),
              (this.frequencyControlMap = this.frequencyControlMap || {}),
              (this.frequencyControlMap[t.cmd] = {
                from: +new Date(),
                duration: t.frequencyControlDuration,
              })),
            (t.obj = this.getPacketObj(t)),
            t.cmd !== 'heartbeat' &&
              t.cmd !== 'getClientAntispam' &&
              this.logger.log(`protocol::recvCmd: ${t.cmd} ${t.rawStr}`);
          const n = `process${r.capFirstLetter(t.service)}`;
          this[n]
            ? (this.logger.warn(`protocol::recvCmd: ${t.cmd} ${n}`, t.content), this[n](t))
            : this.logger.warn(`protocol::onMessage: ${n} not found`),
            this.callPacketAckCallback(t);
        }),
        (a.onMiscError = function(e, t, n) {
          t && this.notifyError(e, t, n);
        }),
        (a.notifyError = function(e, t, n) {
          this.isConnected() &&
            (this.logger.error(`${e || ''} ${this.name}`, t, n), this.options.onerror(t, n));
        }),
        (a.emitAPI = function(e) {
          const t = e.type;

          const n = e.obj;
          this.api.emit(t, n);
        }),
        (e.exports = i),
        n(189),
        n(187),
        n(186),
        n(185);
    },
    ,
    ,
    function(e, t, n) {
      const r = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n(5));

      const s = n(71);
      const o = n(0);

      const i = o.notundef;

      const a = o.exist;

      const c = n(105);

      const u = n(154);

      const l = u.typeMap;
      function m(e) {
        e.resend
          ? (o.verifyOptions(e, 'idClient', 'msg::Message'), (this.idClient = e.idClient))
          : (this.idClient = o.guid()),
          (this.type = l[e.type]),
          (this.resend = e.resend ? 1 : 0),
          i(e.custom) &&
            ((0, r.default)(e.custom) === 'object'
              ? (this.logger.info('model::Message: custom should be JsonString, auto transfer'),
                (this.custom = JSON.stringify(e.custom)))
              : (this.custom = `${e.custom}`)),
          i(e.text) && (this.body = `${e.text}`),
          i(e.body) && (this.body = `${e.body}`),
          i(e.yidunEnable) && (this.yidunEnable = e.yidunEnable ? 1 : 0),
          i(e.antiSpamUsingYidun) && (this.antiSpamUsingYidun = e.antiSpamUsingYidun ? 1 : 0),
          i(e.antiSpamContent) &&
            ((0, r.default)(e.antiSpamContent) === 'object'
              ? (this.logger.info(
                  'model::Message: antiSpamContent should be JsonString, auto transfer'
                ),
                (this.antiSpamContent = JSON.stringify(e.antiSpamContent)))
              : (this.antiSpamContent = `${e.antiSpamContent}`)),
          i(e.antiSpamBusinessId) &&
            ((0, r.default)(e.antiSpamBusinessId) === 'object'
              ? (this.logger.info(
                  'model::Message: antiSpamBusinessId should be JsonString, auto transfer'
                ),
                (this.antiSpamBusinessId = JSON.stringify(e.antiSpamBusinessId)))
              : (this.antiSpamBusinessId = `${e.antiSpamBusinessId}`)),
          i(e.skipHistory) && (this.skipHistory = e.skipHistory ? 1 : 0),
          i(e.highPriority) && (this.highPriority = e.highPriority ? 1 : 0),
          i(e.clientAntiSpam) && (this.clientAntiSpam = e.clientAntiSpam ? 1 : 0);
      }
      (m.validTypes = u.validTypes),
        o.merge(m.prototype, u.prototype),
        (m.getType = u.getType),
        (m.reverse = function(e) {
          let t = o.filterObj(
            e,
            'chatroomId idClient from fromNick fromAvatar fromCustom userUpdateTime custom status'
          );
          return (
            i(t.fromAvatar) && (t.fromAvatar = (0, s.genPrivateUrl)(t.fromAvatar)),
            (t = o.merge(t, {
              fromClientType: c.reverseType(e.fromClientType),
              time: +e.time,
              type: m.getType(e),
              text: a(e.body) ? e.body : '',
              resend: +e.resend == 1,
            })),
            i(t.userUpdateTime) && (t.userUpdateTime = +t.userUpdateTime),
            (t.status = t.status || 'success'),
            t
          );
        }),
        (m.setExtra = function(e, t) {
          u.setFlow(e, t);
        }),
        (e.exports = m);
    },
    function(e, t, n) {
      const r = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n(5));
      const s = n(0);

      const o = s.undef;

      const i = s.notundef;

      const a = s.exist;

      const c = n(105);

      const u = n(154);

      const l = '#%@all@%#';

      const m = { p2p: 0, team: 1 };

      const d = { 0: 'p2p', 1: 'team' };

      const p = Object.keys(m);

      const f = u.typeMap;

      const g = u.validTypes;
      function h(e) {
        s.verifyOptions(e, 'scene to type', 'msg::Message'),
          s.verifyParamValid('scene', e.scene, p, 'msg::Message');
        (this.scene = m[e.scene]),
          (this.to = `${e.to}`),
          (this.type = f[e.type]),
          (this.resend = e.resend ? 1 : 0),
          e.resend
            ? (s.verifyOptions(e, 'idClient', 'msg::Message'), (this.idClient = e.idClient))
            : (this.idClient = s.guid()),
          i(e.text) && (this.body = `${e.text}`),
          i(e.custom) &&
            ((0, r.default)(e.custom) === 'object'
              ? (this.logger.warn('model::Message: custom should be JsonString, auto transfer'),
                (this.custom = JSON.stringify(e.custom)))
              : (this.custom = `${e.custom}`)),
          i(e.body) && (this.body = `${e.body}`),
          i(e.pushContent) && (this.pushContent = `${e.pushContent}`),
          i(e.pushPayload) && (this.pushPayload = `${e.pushPayload}`);
        const t = e.apns;
        if (i(t) && e.scene === 'team') {
          const n = t.accounts;
          i(n) && s.verifyParamType('apns.accounts', n, 'array', 'msg::Message'),
            (this.apnsAccounts = n ? JSON.stringify(n) : l),
            (this.apnsContent = t.content || e.pushContent || ''),
            s.verifyBooleanWithDefault(t, 'forcePush', !0, 'options.apns', 'msg::Message'),
            (this.apnsForcePush = t.forcePush ? 1 : 0);
        }
        i(e.isHistoryable) && (this.isHistoryable = e.isHistoryable ? 1 : 0),
          i(e.isRoamingable) && (this.isRoamingable = e.isRoamingable ? 1 : 0),
          i(e.isSyncable) && (this.isSyncable = e.isSyncable ? 1 : 0),
          i(e.cc) && (this.cc = e.cc ? 1 : 0),
          i(e.isPushable) && (this.isPushable = e.isPushable ? 1 : 0),
          i(e.isOfflinable) && (this.isOfflinable = e.isOfflinable ? 1 : 0),
          i(e.isUnreadable) && (this.isUnreadable = e.isUnreadable ? 1 : 0),
          i(e.needPushNick) && (this.needPushNick = e.needPushNick ? 1 : 0),
          i(e.needMsgReceipt) && (this.needMsgReceipt = e.needMsgReceipt ? 1 : 0),
          i(e.yidunEnable) && (this.yidunEnable = e.yidunEnable ? 1 : 0),
          i(e.antiSpamUsingYidun) && (this.antiSpamUsingYidun = e.antiSpamUsingYidun ? 1 : 0),
          i(e.clientAntiSpam) && (this.clientAntiSpam = e.clientAntiSpam ? 1 : 0),
          i(e.antiSpamContent) &&
            ((0, r.default)(e.antiSpamContent) === 'object'
              ? (this.logger.warn(
                  'model::Message: antiSpamContent should be JsonString, auto transfer'
                ),
                (this.antiSpamContent = JSON.stringify(e.antiSpamContent)))
              : (this.antiSpamContent = `${e.antiSpamContent}`)),
          i(e.antiSpamBusinessId) &&
            ((0, r.default)(e.antiSpamBusinessId) === 'object'
              ? (this.logger.warn(
                  'model::Message: antiSpamBusinessId should be JsonString, auto transfer'
                ),
                (this.antiSpamBusinessId = JSON.stringify(e.antiSpamBusinessId)))
              : (this.antiSpamBusinessId = `${e.antiSpamBusinessId}`));
      }
      s.merge(h.prototype, u.prototype),
        (h.prototype.getScene = function() {
          return d[this.scene];
        }),
        (h.getType = u.getType),
        (h.reverse = function(e) {
          const t = {
            scene: d[e.scene] || e.scene,
            from: e.from,
            fromNick: e.fromNick,
            fromClientType: c.reverseType(e.fromClientType),
            fromDeviceId: e.fromDeviceId,
            to: `${e.to}`,
            time: +e.time,
            type: h.getType(e),
            text: a(e.body) ? e.body : '',
            isHistoryable: o(e.isHistoryable) || +e.isHistoryable == 1,
            isRoamingable: o(e.isRoamingable) || +e.isRoamingable == 1,
            isSyncable: o(e.isSyncable) || +e.isSyncable == 1,
            cc: o(e.cc) || +e.cc == 1,
            isPushable: o(e.isPushable) || +e.isPushable == 1,
            isOfflinable: o(e.isOfflinable) || +e.isOfflinable == 1,
            isUnreadable: o(e.isUnreadable) || +e.isUnreadable == 1,
            isReplyMsg: o(e.isReplyMsg) || +e.isReplyMsg == 1,
            needPushNick: o(e.needPushNick) || +e.needPushNick == 1,
            needMsgReceipt: +e.needMsgReceipt == 1,
            isLocal: !1,
          };
          if (
            (i(e.isMuted) && (t.isMuted = +e.isMuted == 1),
            i(e.resend) && (t.resend = +e.resend == 1),
            i(e.idClient) && (t.idClient = e.idClient),
            i(e.idServer) && (t.idServer = `${e.idServer}`),
            i(e.userUpdateTime) && (t.userUpdateTime = +e.userUpdateTime),
            i(e.custom) && (t.custom = e.custom),
            i(e.pushContent) && (t.pushContent = e.pushContent),
            i(e.pushPayload) && (t.pushPayload = e.pushPayload),
            i(e.tempTeamMemberCount) && (t.tempTeamMemberCount = +e.tempTeamMemberCount),
            i(e.apnsAccounts))
          ) {
            if (((t.apns = {}), e.apnsAccounts !== l)) {
              const n = e.apnsAccounts;
              try {
                t.apns.accounts = JSON.parse(n);
              } catch (e) {
                t.apns.accounts = [];
              }
            }
            (t.apns.content = e.apnsContent || ''), (t.apns.forcePush = +e.apnsForcePush == 1);
          }
          return (t.status = e.status || 'success'), i(e.filter) && (t.filter = e.filter), t;
        }),
        (h.setExtra = function(e, t) {
          (e.target = h.getMsgTarget(e, t)),
            (e.sessionId = `${e.scene}-${e.target}`),
            u.setFlow(e, t);
        }),
        (h.getMsgTarget = function(e, t) {
          return e.scene === 'p2p'
            ? e.to === t
              ? e.from
              : e.to
            : e.scene === 'team'
              ? e.to
              : void 0;
        }),
        (h.deduplication = function(e) {
          let t;

          const n = {};

          const r = [];
          return (
            e.forEach(e => {
              (t = e.idClient), n[t] || ((n[t] = !0), r.push(e));
            }),
            r
          );
        }),
        (h.sortMsgs = function(e) {
          return (e = e.slice(0)), s.sortObjArray(e, { sortPath: 'time' }), e;
        }),
        (h.getLastMsg = function(e) {
          return (e = h.sortMsgs(e))[e.length - 1];
        }),
        (h.getLastNotIgnoredMsg = function(e) {
          for (let t = null, n = (e = h.sortMsgs(e)).length - 1; n >= 0; n--)
            if (!(t = e[n]).ignore) return t;
          return null;
        }),
        (h.getMaxTimetag = function(e) {
          return h.getLastMsg(e).time;
        }),
        (h.validScenes = p),
        (h.validTypes = g),
        (e.exports = h);
    },
    function(e, t, n) {
      t.__esModule = !0;
      const r = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n(78));
      t.default =
        r.default ||
        function(e) {
          for (let t = 1; t < arguments.length; t++) {
            const n = arguments[t];
            for (const r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        };
    },
    function(e, t, n) {
      const r = n(26);

      const s = n(19);

      const o = n(12);

      const i = n(39);

      const a = n(7);

      const c = n(57);

      const u = Object.getOwnPropertyDescriptor;
      t.f = n(8)
        ? u
        : function(e, t) {
            if (((e = o(e)), (t = i(t, !0)), c))
              try {
                return u(e, t);
              } catch (e) {}
            if (a(e, t)) return s(!r.f.call(e, t), e[t]);
          };
    },
    function(e, t, n) {
      const r = n(41);

      const s = Math.min;
      e.exports = function(e) {
        return e > 0 ? s(r(e), 9007199254740991) : 0;
      };
    },
    ,
    function(e, t, n) {
      const r = n(4);

      var s = {
        genUrlSep(e) {
          return (e = `${e}`).indexOf('?') === -1 ? '?imageView&' : '&';
        },
        url2object(e) {
          const t = (e = e || '').indexOf('https') >= 0 ? 'https://' : 'http://';

          let n = e.replace(t, '');
          n.indexOf('?') >= 0 && (n = n.substring(0, n.indexOf('?')));
          const r = n.split('/');
          n = r[0];
          let s = '';
          if ((r.length > 0 && (s = r.slice(1).join('/')), e.indexOf('?') === -1))
            return { protocol: t, hostname: n, path: s, query: {} };
          const o = {};
          return (
            e
              .substr(e.indexOf('?') + 1)
              .split('&')
              .forEach(e => {
                if (e.indexOf('=') > 0) {
                  const t = e.split('=');
                  o[t[0]] = decodeURIComponent(t[1]);
                } else o[e] = '';
              }),
            { protocol: t, hostname: n, path: s, query: o }
          );
        },
        object2url(e) {
          let t = e.protocol;

          let n = e.hostname;

          const r = e.path;

          let s = e.query;
          (t = t || 'http://'), (n = n || ''), r && (n = `${n}/${r}`), (s = s || {});
          const o = [];
          for (const i in s) i !== 'imageView' && o.push(`${i}=${encodeURIComponent(s[i])}`);
          return o.length > 0 ? `${t}${n}?imageView&${o.join('&')}` : `${t}${n}`;
        },
        genPrivateUrl(e) {
          const t = s.url2object(e);

          const n = t.hostname;

          const o = t.path;

          const i = r.downloadHost;

          const a = r.downloadUrl;
          if (n === i) {
            const c = o.indexOf('/');
            if (c !== -1) {
              const u = o.substring(0, c);

              const l = o.substring(c + 1);
              return a.replace('{bucket}', u).replace('{object}', l);
            }
          } else if (n.indexOf(i) !== -1) {
            const m = t.path;

            const d = m.indexOf('.');
            if (d !== -1) {
              const p = m.substring(0, d);

              const f = m;
              return a.replace('{bucket}', p).replace('{object}', f);
            }
          }
          return e;
        },
      };
      e.exports = s;
    },
    function(e, t) {},
    function(e, t, n) {
      const r = n(1).document;
      e.exports = r && r.documentElement;
    },
    function(e, t, n) {
      const r = n(0);

      const s = r.undef;

      const o = n(23);

      const i = n(146);

      const a = n(184);

      const c = n(183);

      const u = n(182);

      const l = n(181);

      const m = n(180);
      function d(e) {
        this.mixin(e);
      }
      d.prototype.mixin = function(e) {
        const t = this;
        (this.configMap = this.configMap || {}),
          ['idMap', 'cmdConfig', 'packetConfig'].forEach(n => {
            t.configMap[n] = r.merge({}, t.configMap[n], e.configMap && e.configMap[n]);
          }),
          ['serializeMap', 'unserializeMap'].forEach(n => {
            t[n] = r.merge({}, t[n], e[n]);
          });
      };
      const p = new d({ configMap: i, serializeMap: a, unserializeMap: c });

      const f = new d({ configMap: u, serializeMap: l, unserializeMap: m });
      (d.getInstance = function(e) {
        switch (e) {
          case 'IM':
            return p;
          case 'Chatroom':
            return f;
        }
      }),
        (d.prototype.createCmd = (function() {
          let e = 1;
          return function(t, n) {
            const r = this;

            const o = this.configMap.cmdConfig[t];
            return (
              (t = { SID: o.sid, CID: o.cid, SER: t === 'heartbeat' ? 0 : e++ }),
              o.params &&
                ((t.Q = []),
                o.params.forEach(e => {
                  let o = e.type;

                  const i = e.name;

                  const a = e.entity;

                  let c = n[i];
                  if (!s(c)) {
                    switch (o) {
                      case 'PropertyArray':
                        (o = 'ArrayMable'),
                          (c = c.map(e => {
                            return { t: 'Property', v: r.serialize(e, a) };
                          }));
                        break;
                      case 'Property':
                        c = r.serialize(c, i);
                        break;
                      case 'bool':
                        c = c ? 'true' : 'false';
                    }
                    t.Q.push({ t: o, v: c });
                  }
                })),
              t
            );
          };
        })()),
        (d.prototype.parseResponse = function(e) {
          const t = this;

          const n = JSON.parse(e);

          const s = { raw: n, rawStr: e, error: o.genError(n.code) };

          let i = t.configMap.packetConfig[`${n.sid}_${n.cid}`];
          if (!i) return (s.notFound = { sid: n.sid, cid: n.cid }), s;
          let a = n.r;

          const c = i.service === 'notify' && !i.cmd;
          if (((s.isNotify = c), c)) {
            var u = n.r[1].headerPacket;
            if (((i = t.configMap.packetConfig[`${u.sid}_${u.cid}`]), (a = n.r[1].body), !i))
              return (s.notFound = { sid: u.sid, cid: u.cid }), s;
          }
          if (((s.service = i.service), (s.cmd = i.cmd), s.error)) {
            let l = `${n.sid}_${n.cid}`;
            if (
              (c && (l = `${u.sid}_${u.cid}`),
              (s.error.cmd = s.cmd),
              (s.error.callFunc = `protocol::parseResponse: ${l}`),
              s.error.code === 416)
            ) {
              const m = a[0];
              m && (s.frequencyControlDuration = 1e3 * m);
            }
          }
          let d = !1;
          return (
            s.error &&
              i.trivialErrorCodes &&
              (d = i.trivialErrorCodes.indexOf(s.error.code) !== -1),
            (s.error && !d) ||
              !i.response ||
              ((s.content = {}),
              i.response.forEach((e, o) => {
                const i = a[o];
                if (!r.undef(i)) {
                  const u = e.type;

                  const l = e.name;

                  const m = e.entity || l;
                  switch (u) {
                    case 'Property':
                      s.content[l] = t.unserialize(i, m);
                      break;
                    case 'PropertyArray':
                      (s.content[l] = []),
                        i.forEach(e => {
                          s.content[l].push(t.unserialize(e, m));
                        });
                      break;
                    case 'KVArray':
                      s.content[l] = i;
                      break;
                    case 'long':
                    case 'Long':
                    case 'byte':
                    case 'Byte':
                    case 'Number':
                      s.content[l] = +i;
                      break;
                    default:
                      s.content[l] = i;
                  }
                  if ((c && l === 'msg') || l === 'sysMsg') {
                    const d = s.content[l];
                    r.isObject(d) &&
                      !d.idServer &&
                      ((d.idServer = `${n.r[0]}`),
                      d.type &&
                        d.type === '8' &&
                        d.deletedIdClient &&
                        (d.idServer = d.deletedIdClient));
                  }
                }
              })),
            s
          );
        }),
        (d.prototype.serialize = function(e, t) {
          const n = this.serializeMap[t];

          const r = {};
          for (const s in n) e.hasOwnProperty(s) && (r[n[s]] = e[s]);
          return r;
        }),
        (d.prototype.unserialize = function(e, t) {
          const n = this.unserializeMap[t];

          const r = {};
          if (e) for (const s in n) e.hasOwnProperty(s) && (r[n[s]] = e[s]);
          return r;
        }),
        (e.exports = d);
    },
    function(e, t, n) {
      const r = n(28);

      const s = n(33);

      const o = n(26);

      const i = n(49);

      const a = n(54);

      const c = Object.assign;
      e.exports =
        !c ||
        n(16)(() => {
          const e = {};

          const t = {};

          const n = Symbol();

          const r = 'abcdefghijklmnopqrst';
          return (
            (e[n] = 7),
            r.split('').forEach(e => {
              t[e] = e;
            }),
            c({}, e)[n] != 7 || Object.keys(c({}, t)).join('') != r
          );
        })
          ? function(e, t) {
              for (var n = i(e), c = arguments.length, u = 1, l = s.f, m = o.f; c > u; )
                for (
                  var d,
                    p = a(arguments[u++]),
                    f = l ? r(p).concat(l(p)) : r(p),
                    g = f.length,
                    h = 0;
                  g > h;

                )
                  m.call(p, (d = f[h++])) && (n[d] = p[d]);
              return n;
            }
          : c;
    },
    function(e, t, n) {
      const r = n(13);
      r(r.S + r.F, 'Object', { assign: n(75) });
    },
    function(e, t, n) {
      n(76), (e.exports = n(3).Object.assign);
    },
    function(e, t, n) {
      e.exports = { default: n(77), __esModule: !0 };
    },
    function(e, t, n) {
      const r = n(0);

      const s = r.notundef;

      const o = r.fillPropertyWithDefault;

      const i = { 0: 'normal', 1: 'owner', 2: 'manager' };
      function a(e) {
        r.verifyOptions(e, 'teamId', 'team::TeamMember'),
          r.verifyParamAtLeastPresentOne(
            e,
            'nickInTeam muteTeam muteNotiType custom',
            'team::TeamMember'
          ),
          (this.teamId = e.teamId),
          s(e.account) && (this.account = e.account),
          s(e.nickInTeam) && (this.nickInTeam = e.nickInTeam),
          s(e.muteNotiType)
            ? (this.bits = e.muteNotiType)
            : s(e.muteTeam) && ((this.bits = 0), e.muteTeam && (this.bits += 1)),
          s(e.mute) && (this.mute = e.mute ? 1 : 0),
          s(e.custom) && (this.custom = `${e.custom}`);
      }
      (a.reverse = function(e) {
        const t = r.copy(e);
        if (
          (s(t.teamId) && (t.teamId = `${t.teamId}`),
          s(t.type) && (t.type = i[t.type]),
          s(t.active) && (t.active = +t.active == 1),
          s(t.valid) && (t.valid = +t.valid == 1),
          s(t.mute) && (t.mute = +t.mute == 1),
          s(t.joinTime) && (t.joinTime = +t.joinTime),
          s(t.updateTime) && (t.updateTime = +t.updateTime),
          s(t.bits))
        ) {
          const n = t.bits;
          delete t.bits, (t.muteTeam = !!(1 & n)), (t.muteNotiType = n);
        }
        return s(t.teamId) && s(t.account) && (t.id = a.genId(t.teamId, t.account)), t;
      }),
        (a.reverseMembers = function(e) {
          return e.map(e => {
            return a.reverse(e);
          });
        }),
        (a.fillProperties = function(e) {
          const t = o(e, 'mute', !1);

          const n = o(e, 'custom', '');
          return t || n;
        }),
        (a.genId = function(e, t) {
          return `${e}-${t}`;
        }),
        (a.accounts2ids = function(e, t) {
          return t.map(t => {
            return a.genId(e, t);
          });
        }),
        (a.assembleMembers = function(e, t) {
          return (
            r.isArray(t) || (t = [t]),
            t.map(t => {
              return a.assembleMember(e, t);
            })
          );
        }),
        (a.assembleMember = function(e, t) {
          return {
            id: a.genId(e.teamId, t),
            account: t,
            teamId: e.teamId,
            type: 'normal',
            nickInTeam: '',
            muteTeam: !1,
            mute: !1,
            joinTime: e.memberUpdateTime,
            updateTime: e.memberUpdateTime,
            active: !0,
            valid: !0,
          };
        }),
        (a.assembleOwner = function(e) {
          const t = a.assembleMember(e, e.owner);
          return (t.type = 'owner'), t;
        }),
        (e.exports = a);
    },
    function(e, t, n) {
      n(34)('observable');
    },
    function(e, t, n) {
      n(34)('asyncIterator');
    },
    function(e, t, n) {
      const r = n(12);

      const s = n(53).f;

      const o = {}.toString;

      const i =
        typeof window === 'object' && window && Object.getOwnPropertyNames
          ? Object.getOwnPropertyNames(window)
          : [];
      e.exports.f = function(e) {
        return i && o.call(e) == '[object Window]'
          ? (function(e) {
              try {
                return s(e);
              } catch (e) {
                return i.slice();
              }
            })(e)
          : s(r(e));
      };
    },
    function(e, t, n) {
      const r = n(32);
      e.exports =
        Array.isArray ||
        function(e) {
          return r(e) == 'Array';
        };
    },
    function(e, t, n) {
      const r = n(28);

      const s = n(33);

      const o = n(26);
      e.exports = function(e) {
        const t = r(e);

        const n = s.f;
        if (n)
          for (var i, a = n(e), c = o.f, u = 0; a.length > u; )
            c.call(e, (i = a[u++])) && t.push(i);
        return t;
      };
    },
    function(e, t, n) {
      const r = n(27)('meta');

      const s = n(11);

      const o = n(7);

      const i = n(6).f;

      let a = 0;

      const c =
        Object.isExtensible ||
        function() {
          return !0;
        };

      const u = !n(16)(() => {
        return c(Object.preventExtensions({}));
      });

      const l = function(e) {
        i(e, r, { value: { i: `O${++a}`, w: {} } });
      };

      var m = (e.exports = {
        KEY: r,
        NEED: !1,
        fastKey(e, t) {
          if (!s(e)) return typeof e === 'symbol' ? e : (typeof e === 'string' ? 'S' : 'P') + e;
          if (!o(e, r)) {
            if (!c(e)) return 'F';
            if (!t) return 'E';
            l(e);
          }
          return e[r].i;
        },
        getWeak(e, t) {
          if (!o(e, r)) {
            if (!c(e)) return !0;
            if (!t) return !1;
            l(e);
          }
          return e[r].w;
        },
        onFreeze(e) {
          return u && m.NEED && c(e) && !o(e, r) && l(e), e;
        },
      });
    },
    function(e, t, n) {
      const r = n(1);

      const s = n(7);

      const o = n(8);

      const i = n(13);

      const a = n(56);

      const c = n(85).KEY;

      const u = n(16);

      const l = n(37);

      const m = n(31);

      const d = n(27);

      const p = n(2);

      const f = n(35);

      const g = n(34);

      const h = n(84);

      const y = n(83);

      const v = n(9);

      const b = n(11);

      const M = n(12);

      const T = n(39);

      const k = n(19);

      const S = n(45);

      const C = n(82);

      const P = n(68);

      const I = n(6);

      const O = n(28);

      const w = P.f;

      const x = I.f;

      const A = C.f;

      let _ = r.Symbol;

      const E = r.JSON;

      const R = E && E.stringify;

      const F = p('_hidden');

      const j = p('toPrimitive');

      const U = {}.propertyIsEnumerable;

      const N = l('symbol-registry');

      const D = l('symbols');

      const L = l('op-symbols');

      const B = Object.prototype;

      const q = typeof _ === 'function';

      const H = r.QObject;

      let W = !H || !H.prototype || !H.prototype.findChild;

      const J =
        o &&
        u(() => {
          return (
            S(
              x({}, 'a', {
                get() {
                  return x(this, 'a', { value: 7 }).a;
                },
              })
            ).a != 7
          );
        })
          ? function(e, t, n) {
              const r = w(B, t);
              r && delete B[t], x(e, t, n), r && e !== B && x(B, t, r);
            }
          : x;

      const $ = function(e) {
        const t = (D[e] = S(_.prototype));
        return (t._k = e), t;
      };

      const V =
        q && typeof _.iterator === 'symbol'
          ? function(e) {
              return typeof e === 'symbol';
            }
          : function(e) {
              return e instanceof _;
            };

      var K = function(e, t, n) {
        return (
          e === B && K(L, t, n),
          v(e),
          (t = T(t, !0)),
          v(n),
          s(D, t)
            ? (n.enumerable
                ? (s(e, F) && e[F][t] && (e[F][t] = !1), (n = S(n, { enumerable: k(0, !1) })))
                : (s(e, F) || x(e, F, k(1, {})), (e[F][t] = !0)),
              J(e, t, n))
            : x(e, t, n)
        );
      };

      const X = function(e, t) {
        v(e);
        for (var n, r = h((t = M(t))), s = 0, o = r.length; o > s; ) K(e, (n = r[s++]), t[n]);
        return e;
      };

      const G = function(e) {
        const t = U.call(this, (e = T(e, !0)));
        return (
          !(this === B && s(D, e) && !s(L, e)) &&
          (!(t || !s(this, e) || !s(D, e) || (s(this, F) && this[F][e])) || t)
        );
      };

      const z = function(e, t) {
        if (((e = M(e)), (t = T(t, !0)), e !== B || !s(D, t) || s(L, t))) {
          const n = w(e, t);
          return !n || !s(D, t) || (s(e, F) && e[F][t]) || (n.enumerable = !0), n;
        }
      };

      const Y = function(e) {
        for (var t, n = A(M(e)), r = [], o = 0; n.length > o; )
          s(D, (t = n[o++])) || t == F || t == c || r.push(t);
        return r;
      };

      const Q = function(e) {
        for (var t, n = e === B, r = A(n ? L : M(e)), o = [], i = 0; r.length > i; )
          !s(D, (t = r[i++])) || (n && !s(B, t)) || o.push(D[t]);
        return o;
      };
      q ||
        (a(
          (_ = function() {
            if (this instanceof _) throw TypeError('Symbol is not a constructor!');
            const e = d(arguments.length > 0 ? arguments[0] : void 0);

            var t = function(n) {
              this === B && t.call(L, n),
                s(this, F) && s(this[F], e) && (this[F][e] = !1),
                J(this, e, k(1, n));
            };
            return o && W && J(B, e, { configurable: !0, set: t }), $(e);
          }).prototype,
          'toString',
          function() {
            return this._k;
          }
        ),
        (P.f = z),
        (I.f = K),
        (n(53).f = C.f = Y),
        (n(26).f = G),
        (n(33).f = Q),
        o && !n(20) && a(B, 'propertyIsEnumerable', G, !0),
        (f.f = function(e) {
          return $(p(e));
        })),
        i(i.G + i.W + i.F * !q, { Symbol: _ });
      for (
        let Z = 'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(
            ','
          ),
          ee = 0;
        Z.length > ee;

      )
        p(Z[ee++]);
      for (let te = O(p.store), ne = 0; te.length > ne; ) g(te[ne++]);
      i(i.S + i.F * !q, 'Symbol', {
        for(e) {
          return s(N, (e += '')) ? N[e] : (N[e] = _(e));
        },
        keyFor(e) {
          if (!V(e)) throw TypeError(`${e} is not a symbol!`);
          for (const t in N) if (N[t] === e) return t;
        },
        useSetter() {
          W = !0;
        },
        useSimple() {
          W = !1;
        },
      }),
        i(i.S + i.F * !q, 'Object', {
          create(e, t) {
            return void 0 === t ? S(e) : X(S(e), t);
          },
          defineProperty: K,
          defineProperties: X,
          getOwnPropertyDescriptor: z,
          getOwnPropertyNames: Y,
          getOwnPropertySymbols: Q,
        }),
        E &&
          i(
            i.S +
              i.F *
                (!q ||
                  u(() => {
                    const e = _();
                    return R([e]) != '[null]' || R({ a: e }) != '{}' || R(Object(e)) != '{}';
                  })),
            'JSON',
            {
              stringify(e) {
                for (var t, n, r = [e], s = 1; arguments.length > s; ) r.push(arguments[s++]);
                if (((n = t = r[1]), (b(t) || void 0 !== e) && !V(e)))
                  return (
                    y(t) ||
                      (t = function(e, t) {
                        if ((typeof n === 'function' && (t = n.call(this, e, t)), !V(t))) return t;
                      }),
                    (r[1] = t),
                    R.apply(E, r)
                  );
              },
            }
          ),
        _.prototype[j] || n(10)(_.prototype, j, _.prototype.valueOf),
        m(_, 'Symbol'),
        m(Math, 'Math', !0),
        m(r.JSON, 'JSON', !0);
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
      const r = n(90);

      const s = n(89);

      const o = n(18);

      const i = n(12);
      (e.exports = n(58)(
        Array,
        'Array',
        function(e, t) {
          (this._t = i(e)), (this._i = 0), (this._k = t);
        },
        function() {
          const e = this._t;

          const t = this._k;

          const n = this._i++;
          return !e || n >= e.length
            ? ((this._t = void 0), s(1))
            : s(0, t == 'keys' ? n : t == 'values' ? e[n] : [n, e[n]]);
        },
        'values'
      )),
        (o.Arguments = o.Array),
        r('keys'),
        r('values'),
        r('entries');
    },
    function(e, t, n) {
      const r = n(7);

      const s = n(49);

      const o = n(38)('IE_PROTO');

      const i = Object.prototype;
      e.exports =
        Object.getPrototypeOf ||
        function(e) {
          return (
            (e = s(e)),
            r(e, o)
              ? e[o]
              : typeof e.constructor === 'function' && e instanceof e.constructor
                ? e.constructor.prototype
                : e instanceof Object
                  ? i
                  : null
          );
        };
    },
    function(e, t, n) {
      const r = n(41);

      const s = Math.max;

      const o = Math.min;
      e.exports = function(e, t) {
        return (e = r(e)) < 0 ? s(e + t, 0) : o(e, t);
      };
    },
    function(e, t, n) {
      const r = n(12);

      const s = n(69);

      const o = n(93);
      e.exports = function(e) {
        return function(t, n, i) {
          let a;

          const c = r(t);

          const u = s(c.length);

          let l = o(i, u);
          if (e && n != n) {
            for (; u > l; ) if ((a = c[l++]) != a) return !0;
          } else for (; u > l; l++) if ((e || l in c) && c[l] === n) return e || l || 0;
          return !e && -1;
        };
      };
    },
    function(e, t, n) {
      const r = n(6);

      const s = n(9);

      const o = n(28);
      e.exports = n(8)
        ? Object.defineProperties
        : function(e, t) {
            s(e);
            for (var n, i = o(t), a = i.length, c = 0; a > c; ) r.f(e, (n = i[c++]), t[n]);
            return e;
          };
    },
    function(e, t, n) {
      const r = n(45);

      const s = n(19);

      const o = n(31);

      const i = {};
      n(10)(i, n(2)('iterator'), function() {
        return this;
      }),
        (e.exports = function(e, t, n) {
          (e.prototype = r(i, { next: s(1, n) })), o(e, `${t} Iterator`);
        });
    },
    function(e, t, n) {
      const r = n(41);

      const s = n(40);
      e.exports = function(e) {
        return function(t, n) {
          let o;

          let i;

          const a = String(s(t));

          const c = r(n);

          const u = a.length;
          return c < 0 || c >= u
            ? e
              ? ''
              : void 0
            : (o = a.charCodeAt(c)) < 55296 ||
              o > 56319 ||
              c + 1 === u ||
              (i = a.charCodeAt(c + 1)) < 56320 ||
              i > 57343
              ? e
                ? a.charAt(c)
                : o
              : e
                ? a.slice(c, c + 2)
                : i - 56320 + ((o - 55296) << 10) + 65536;
        };
      };
    },
    function(e, t, n) {
      n(51), n(60), (e.exports = n(35).f('iterator'));
    },
    function(e, t, n) {
      e.exports = { default: n(98), __esModule: !0 };
    },
    ,
    function(e, t, n) {
      const r = n(62);

      const s = n(0);

      const o = s.undef;

      const i = s.notundef;

      const a = n(4);

      const c = n(74).getInstance('Chatroom');

      const u = n(168);

      const l = n(141);
      function m(e) {
        s.verifyOptions(
          e,
          'appKey account chatroomId chatroomAddresses',
          'protocol::ChatroomProtocol'
        ),
          e.isAnonymous || s.verifyOptions(e, 'token', 'protocol::ChatroomProtocol'),
          s.verifyParamType(
            'chatroomAddresses',
            e.chatroomAddresses,
            'array',
            'protocol::ChatroomProtocol'
          ),
          s.verifyCallback(
            e,
            'onconnect onerror onwillreconnect ondisconnect onmsg onmsgs onrobots',
            'protocol::ChatroomProtocol'
          ),
          r.call(this, e);
      }
      const d = r.fn;

      const p = (m.fn = m.prototype = Object.create(d));
      (p.init = function() {
        d.init.call(this),
          (this.parser = c),
          (this.syncResult = {}),
          (this.timetags = {}),
          (this.msgBuffer = []);
      }),
        (p.reset = function() {
          const e = this;
          d.reset.call(e);
          const t = e.options;
          o(t.msgBufferInterval) && (t.msgBufferInterval = 300),
            s.verifyParamType(
              'msgBufferInterval',
              t.msgBufferInterval,
              'number',
              'protocol::ChatroomProtocol.reset'
            ),
            o(t.msgBufferSize) && (t.msgBufferSize = 500),
            s.verifyParamType(
              'msgBufferSize',
              t.msgBufferSize,
              'number',
              'protocol::ChatroomProtocol.reset'
            ),
            i(t.chatroomAddresses) &&
              ((e.socketUrls = t.chatroomAddresses.map(t => {
                return a.formatSocketUrl({ url: t, secure: e.options.secure });
              })),
              (e.socketUrlsBackup = e.socketUrls.slice(0)));
        }),
        (p.processChatroom = function(e) {
          switch (e.cmd) {
            case 'login':
              e.error ||
                (e.obj = {
                  chatroom: u.reverse(e.content.chatroom),
                  member: l.reverse(e.content.chatroomMember),
                });
              break;
            case 'kicked':
              this.onKicked(e);
              break;
            case 'logout':
              break;
            case 'sendMsg':
              this.onSendMsg(e);
              break;
            case 'msg':
              this.onMsg(e);
              break;
            case 'getChatroomMembers':
              this.onChatroomMembers(e);
              break;
            case 'getHistoryMsgs':
              this.onHistoryMsgs(e);
              break;
            case 'markChatroomMember':
              this.onMarkChatroomMember(e);
              break;
            case 'closeChatroom':
              break;
            case 'getChatroom':
              this.onChatroom(e);
              break;
            case 'updateChatroom':
              break;
            case 'updateMyChatroomMemberInfo':
              delete e.obj.chatroomMember;
              break;
            case 'getChatroomMembersInfo':
              this.onChatroomMembersInfo(e);
              break;
            case 'kickChatroomMember':
            case 'updateChatroomMemberTempMute':
              break;
            case 'queueList':
              e.error || (e.obj = e.content);
              break;
            case 'syncRobot':
              this.onSyncRobot(e);
          }
        }),
        (p.onChatroom = function(e) {
          e.error || (e.obj.chatroom = u.reverse(e.content.chatroom));
        }),
        (e.exports = m),
        n(285),
        n(284),
        n(283),
        n(282);
    },
    function(e, t, n) {
      const r = n(0);
      function s() {}
      (s.parse = function(e) {
        const t = e.split('|');
        return { scene: t[0], to: t[1] };
      }),
        (s.genSessionByMsg = function(e) {
          return { id: e.sessionId, scene: e.scene, to: e.target, updateTime: e.time, lastMsg: e };
        }),
        (s.appendLastMsg = function(e) {
          const t = e.lastMsg;
          (e[`last${r.capFirstLetter(t.type)}Msg`] = t),
            (e[`last${r.capFirstLetter(t.flow)}Msg`] = t);
        }),
        (s.genSessionByMsgs = function(e, t) {
          const n = e.getLastNotIgnoredMsg(t);
          return n ? s.genSessionByMsg(n) : null;
        }),
        (s.trim = function(e) {
          delete e.msgReceiptSendTime,
            delete e.msgReceiptServerTime,
            delete e.ack,
            delete e.unreadMsgs;
        }),
        (s.isComplete = function(e) {
          return e.id && e.scene && e.to;
        }),
        (e.exports = s);
    },
    function(e, t, n) {
      const r = n(32);

      const s = n(2)('toStringTag');

      const o =
        r(
          (function() {
            return arguments;
          })()
        ) == 'Arguments';
      e.exports = function(e) {
        let t;
        let n;
        let i;
        return void 0 === e
          ? 'Undefined'
          : e === null
            ? 'Null'
            : typeof (n = (function(e, t) {
                try {
                  return e[t];
                } catch (e) {}
              })((t = Object(e)), s)) === 'string'
              ? n
              : o
                ? r(t)
                : (i = r(t)) == 'Object' && typeof t.callee === 'function'
                  ? 'Arguments'
                  : i;
      };
    },
    function(e, t, n) {
      const r = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n(5));
      const s = n(0);

      const o = s.undef;

      const i = s.notundef;

      const a = n(74).getInstance('IM');

      const c = n(106);

      const u = n(79);

      const l = { customP2p: 100, customTeam: 101, deleteMsgP2p: 7, deleteMsgTeam: 8 };

      const m = {
        0: 'applyTeam',
        1: 'rejectTeamApply',
        2: 'teamInvite',
        3: 'rejectTeamInvite',
        5: 'friendRequest',
        6: 'deleteFriend',
        7: 'deleteMsgP2p',
        8: 'deleteMsgTeam',
        100: 'customP2p',
        101: 'customTeam',
        102: 'customP2p',
      };

      const d = { 1: 'addFriend', 2: 'applyFriend', 3: 'passFriendApply', 4: 'rejectFriendApply' };

      const p = ['team', 'friend', 'msg'];

      const f = {
        applyTeam: 'team',
        rejectTeamApply: 'team',
        teamInvite: 'team',
        rejectTeamInvite: 'team',
        addFriend: 'friend',
        applyFriend: 'friend',
        passFriendApply: 'friend',
        rejectFriendApply: 'friend',
        deleteFriend: 'friend',
        deleteMsg: 'msg',
      };
      function g(e) {
        s.verifyOptions(e, 'type to', 'sysmsg::SystemMessage'),
          s.verifyParamValid('type', e.type, g.validTypes, 'sysmsg::SystemMessage'),
          e.type.indexOf('custom') !== -1 &&
            (s.verifyOptions(e, 'content', 'sysmsg::SystemMessage'),
            (this.attach = e.content),
            i(e.apnsText) && (this.apnsText = `${e.apnsText}`),
            i(e.pushPayload) &&
              ((0, r.default)(e.pushPayload) === 'object'
                ? (this.logger.warn(
                    'model::Message: pushPayload should be JsonString, auto transfer'
                  ),
                  (this.pushPayload = JSON.stringify(e.pushPayload)))
                : (this.pushPayload = `${e.pushPayload}`)),
            i(e.sendToOnlineUsersOnly) &&
              (this.sendToOnlineUsersOnly = e.sendToOnlineUsersOnly ? 0 : 1),
            i(e.cc) && (this.cc = e.cc ? 1 : 0),
            i(e.isPushable) && (this.isPushable = e.isPushable ? 1 : 0),
            i(e.isUnreadable) && (this.isUnreadable = e.isUnreadable ? 1 : 0),
            i(e.needPushNick) && (this.needPushNick = e.needPushNick ? 1 : 0)),
          (this.time = e.time || +new Date()),
          (this.type = l[e.type]),
          (this.to = e.to),
          i(e.from) && (this.from = e.from),
          i(e.ps) && (this.ps = e.ps),
          i(e.deletedIdClient) && (this.deletedIdClient = e.deletedIdClient),
          i(e.deletedIdServer) && (this.deletedIdServer = e.deletedIdServer),
          i(e.opeAccount) && (this.opeAccount = e.opeAccount),
          i(e.yidunEnable) && (this.yidunEnable = e.yidunEnable ? 1 : 0),
          i(e.antiSpamContent) &&
            ((0, r.default)(e.antiSpamContent) === 'object'
              ? (this.logger.warn(
                  'model::Message: antiSpamContent should be JsonString, auto transfer'
                ),
                (this.antiSpamContent = JSON.stringify(e.antiSpamContent)))
              : (this.antiSpamContent = `${e.antiSpamContent}`)),
          i(e.antiSpamBusinessId) &&
            ((0, r.default)(e.antiSpamBusinessId) === 'object'
              ? (this.logger.warn(
                  'model::Message: antiSpamBusinessId should be JsonString, auto transfer'
                ),
                (this.antiSpamBusinessId = JSON.stringify(e.antiSpamBusinessId)))
              : (this.antiSpamBusinessId = `${e.antiSpamBusinessId}`)),
          (this.idClient = e.idClient || s.guid());
      }
      (g.validTypes = Object.keys(l).concat(Object.keys(f))),
        (g.validCategories = ['team', 'friend']),
        (g.isCustom = function(e) {
          return e.type === 'custom';
        }),
        (g.reverse = function(e) {
          const t = { time: +e.time, to: e.to, type: m[e.type] };
          if (
            (i(e.from) && (t.from = e.from),
            i(e.idServer) && (t.idServer = `${e.idServer}`),
            i(e.deletedIdClient) && (t.deletedIdClient = e.deletedIdClient),
            i(e.deletedIdServer) && (t.deletedIdServer = `${e.deletedIdServer}`),
            i(e.deletedMsgTime) && (t.deletedMsgTime = +e.deletedMsgTime),
            i(e.deletedMsgFromNick) && (t.deletedMsgFromNick = `${e.deletedMsgFromNick}`),
            i(e.opeAccount) && (t.opeAccount = e.opeAccount),
            i(e.ps) && (t.ps = e.ps),
            (e.attach = e.attach ? `${e.attach}` : ''),
            t.type === 'customP2p' || t.type === 'customTeam')
          )
            (t.content = e.attach),
              i(e.apnsText) && (t.apnsText = e.apnsText),
              i(e.pushPayload) && (t.pushPayload = e.pushPayload),
              s.merge(t, {
                sendToOnlineUsersOnly: o(e.sendToOnlineUsersOnly) || +e.sendToOnlineUsersOnly == 0,
                cc: o(e.cc) || +e.cc == 1,
                isPushable: o(e.isPushable) || +e.isPushable == 1,
                isUnreadable: o(e.isUnreadable) || +e.isUnreadable == 1,
                needPushNick: i(e.needPushNick) && +e.needPushNick == 1,
              }),
              (t.scene = t.type.slice(6).toLowerCase()),
              (t.type = 'custom');
          else if (t.type === 'deleteMsgP2p' || t.type === 'deleteMsgTeam')
            (t.scene = t.type.slice(9).toLowerCase()), (t.type = 'deleteMsg');
          else {
            if (e.attach) {
              t.attach = {};
              const n = JSON.parse(e.attach);
              i(n.vt)
                ? ((t.type = d[n.vt]), delete t.attach)
                : (i(n.tinfo) && (t.attach.team = c.reverse(a.unserialize(n.tinfo, 'team'))),
                  i(n.tlist) && (t.attach.member = u.reverse(a.unserialize(n.tlist, 'teamMember'))),
                  i(n.attach) && (t.attach.custom = n.attach));
            }
            (t.category = f[t.type]), (t.read = !1), (t.state = 'init');
          }
          return (
            i(e.cc) && (t.cc = +e.cc == 1),
            (t.status = e.status || 'success'),
            i(e.filter) && (t.filter = e.filter),
            t
          );
        }),
        (g.reverseSysMsgs = function(e, t) {
          const n = (t = t || {}).mapper;

          const r = s.isFunction(n);
          return e.map(e => {
            return (e = g.reverse(e)), r && (e = n(e)), e;
          });
        }),
        (g.completeUnread = function(e) {
          let t;
          return (
            (e = e || {}),
            p.forEach(t => {
              delete e[t];
            }),
            Object.keys(f).forEach(n => {
              (e[n] = e[n] || 0),
                e[n] < 0 && (e[n] = 0),
                (e[(t = f[n])] = e[t] || 0),
                (e[t] = e[t] + e[n]);
            }),
            (e.total = 0),
            p.forEach(t => {
              e.total += e[t];
            }),
            e
          );
        }),
        (e.exports = g);
    },
    function(e, t, n) {
      const r = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n(43)).default.clientTypeMap;
      function s() {}
      (s.reverse = function(e) {
        const t = e;
        return (t.type = r[t.type]), t;
      }),
        (s.reverseType = function(e) {
          return r[e] || e;
        }),
        (e.exports = s);
    },
    function(e, t, n) {
      const r = n(0);

      const s = r.notundef;

      const o = r.fillPropertyWithDefault;

      const i = Object.keys;

      const a = {};

      const c = {};

      const u = [];

      const l = {};

      const m = { normal: 0, advanced: 1 };

      const d = { 0: 'normal', 1: 'advanced' };

      const p = i(m);

      const f = (a.joinMode = { noVerify: 0, needVerify: 1, rejectAll: 2 });
      (c.joinMode = { 0: 'noVerify', 1: 'needVerify', 2: 'rejectAll' }),
        u.push('join'),
        (l.joinMode = i(f));
      const g = (a.beInviteMode = { needVerify: 0, noVerify: 1 });
      (c.beInviteMode = { 0: 'needVerify', 1: 'noVerify' }),
        u.push('beInvite'),
        (l.beInviteMode = i(g));
      const h = (a.inviteMode = { manager: 0, all: 1 });
      (c.inviteMode = { 0: 'manager', 1: 'all' }), u.push('invite'), (l.inviteMode = i(h));
      const y = (a.updateTeamMode = { manager: 0, all: 1 });
      (c.updateTeamMode = { 0: 'manager', 1: 'all' }),
        u.push('updateTeam'),
        (l.updateTeamMode = i(y));
      const v = (a.updateCustomMode = { manager: 0, all: 1 });
      function b(e) {
        switch ((r.verifyOptions(e, 'action', 'team::Team'), e.action)) {
          case 'create':
            r.verifyOptions(e, 'teamId', !1, 'team::Team'),
              r.verifyOptions(e, 'type name', 'team::Team'),
              r.verifyParamValid('type', e.type, p, 'team::Team');
            break;
          case 'update':
            r.verifyOptions(e, 'teamId', 'team::Team'),
              r.verifyOptions(e, 'type', !1, 'team::Team');
        }
        s(e.teamId) && (this.teamId = e.teamId),
          s(e.type) && (this.type = m[e.type]),
          s(e.avatar) && (this.avatar = `${e.avatar}`),
          s(e.name) && (this.name = `${e.name}`),
          s(e.intro) && (this.intro = `${e.intro}`),
          s(e.announcement) && (this.announcement = `${e.announcement}`),
          u.forEach(this.setMode.bind(this, e)),
          s(e.custom) && (this.custom = `${e.custom}`);
      }
      (c.updateCustomMode = { 0: 'manager', 1: 'all' }),
        u.push('updateCustom'),
        (l.updateCustomMode = i(v)),
        (b.prototype.setMode = function(e, t) {
          s(e[(t += 'Mode')]) &&
            (r.verifyParamValid(t, e[t], l[t], 'team::Team'), (this[t] = a[t][e[t]]));
        }),
        (b.reverse = function(e, t) {
          const n = r.copy(e);
          if (
            (s(n.teamId) && (n.teamId = `${n.teamId}`),
            s(n.type) && (n.type = d[n.type]),
            s(n.level) && (n.level = +n.level),
            s(n.valid) && (n.valid = +n.valid == 1),
            s(n.memberNum) && (n.memberNum = +n.memberNum),
            s(n.memberUpdateTime) && (n.memberUpdateTime = +n.memberUpdateTime),
            s(n.createTime) && (n.createTime = +n.createTime),
            s(n.updateTime) && (n.updateTime = +n.updateTime),
            s(n.validToCurrentUser) && (n.validToCurrentUser = n.validToCurrentUser === '1'),
            s(n.mute) && (n.mute = n.mute === '1'),
            s(n.muteType))
          )
            switch (n.muteType) {
              case '0':
                (n.mute = !1), (n.muteType = 'none');
                break;
              case '1':
                (n.mute = !0), (n.muteType = 'normal');
                break;
              case '2':
                (n.mute = !0), (n.muteType = 'all');
            }
          else
            s(n.mute) &&
              (n.mute === 1
                ? ((n.mute = !0), (n.muteType = 'normal'))
                : ((n.mute = !1), (n.muteType = 'none')));
          return (
            u.forEach(
              ((e, t) => {
                s(e[(t += 'Mode')]) && (e[t] = c[t][e[t]]);
              }).bind(null, n)
            ),
            delete n.bits,
            t || b.fillProperties(n),
            n
          );
        }),
        (b.fillProperties = function(e) {
          const t = o(e, 'beInviteMode', 'needVerify');

          const n = o(e, 'inviteMode', 'manager');

          const r = o(e, 'updateTeamMode', 'manager');

          const s = o(e, 'updateCustomMode', 'manager');

          const i = o(e, 'avatar', '');
          return t || n || r || s || i;
        }),
        (e.exports = b);
    },
    function(e, t, n) {
      const r = n(24);

      const s = r.f;

      const o = n(203);
      function i(e) {
        e.onload && this.once('load', e.onload),
          e.onerror && this.once('error', e.onerror),
          e.onbeforesend && this.once('beforesend', e.onbeforesend),
          e.onaftersend && this.once('aftersend', e.onaftersend);
        const t = (e = this.options = r.fetch(
          {
            method: 'GET',
            url: '',
            sync: !1,
            data: null,
            headers: {},
            cookie: !1,
            timeout: 6e4,
            type: 'text',
            form: null,
            input: null,
            putFileAtEnd: !1,
            proxyUrl: '',
          },
          e
        )).headers;
        r.notexist(t['Content-Type']) && (t['Content-Type'] = 'application/x-www-form-urlencoded'),
          this.send();
      }
      const a = (i.prototype = Object.create(o.prototype));
      (a.send = function() {
        const e = this;

        const t = e.options;
        setTimeout(() => {
          try {
            try {
              e.emit('beforesend', t);
            } catch (e) {
              console.error('ignore error ajax beforesend,', e);
            }
            e.doSend();
          } catch (t) {
            console.error('ignore error server error,', t),
              e.onError('serverError', `请求失败:${t.message}`);
          }
        }, 0);
      }),
        (a.doSend = s),
        (a.afterSend = function() {
          const e = this;
          setTimeout(() => {
            e.emit('aftersend', e.options);
          }, 0);
        }),
        (a.onLoad = function(e) {
          const t = this.options;

          const n = e.status;

          let r = e.result;
          if (`${n}`.indexOf('2') === 0) {
            if (t.type === 'json')
              try {
                r = JSON.parse(r);
              } catch (e) {
                return (
                  console.error('ignore error parse json,', e), void this.onError('parseError', r)
                );
              }
            this.emit('load', r);
          } else this.onError('serverError', '服务器返回异常状态', { status: n, result: r });
        }),
        (a.onError = function(e, t, n) {
          const s = r.isObject(n) ? n : {};
          (s.code = e || 'error'), (s.message = t || '发生错误'), this.emit('error', s);
        }),
        (a.onTimeout = function() {
          this.onError('timeout', '请求超时');
        }),
        (a.abort = function() {
          this.onError('abort', '客户端中止');
        }),
        (a.header = function(e) {
          const t = this;
          if (!r.isArray(e)) return t.getResponseHeader(e || '');
          const n = {};
          return (
            e.forEach(e => {
              n[e] = t.header(e);
            }),
            n
          );
        }),
        (a.getResponseHeader = s),
        (a.destroy = s),
        (e.exports = i);
    },
    function(e, t, n) {
      const r = n(24);

      const s = n(204);

      const o = n(202);

      const i = n(201);

      const a = {};

      let c = r.f;
      function u(e) {
        const t = (e.upload = (e.headers || r.o)['Content-Type'] === 'multipart/form-data');

        let n = !1;
        try {
          n = `${location.protocol}//${location.host}`.toLowerCase() !== r.url2origin(e.url);
        } catch (e) {}
        return (
          (e.cors = n),
          t || n || e.mode
            ? (function(e) {
                let t = e.mode;

                let n = s;

                const a = r.getGlobal();
                return (
                  !a.FormData && a.document && (t = 'iframe'),
                  t === 'iframe' && (n = e.upload ? o : i),
                  new n(e)
                );
              })(e)
            : new s(e)
        );
      }
      function l(e, t, n) {
        const r = a[e];
        if (r) {
          t === 'onload' &&
            r.result &&
            (n = (function(e, t) {
              t = { data: t };
              const n = e.result.headers;
              return n && (t.headers = e.req.header(n)), t;
            })(r, n)),
            (function(e) {
              const t = a[e];
              t && (t.req.destroy(), delete a[e]);
            })(e);
          const s = { type: t, result: n };
          c(s), s.stopped || r[t](s.result);
        }
      }
      function m(e, t) {
        const n = r.genUrlSep(e);
        return (t = t || ''), r.isObject(t) && (t = r.object2query(t)), t && (e += n + t), e;
      }
      function d(e, t) {
        t = t || {};
        const n = r.uniqueID();

        const s = { result: t.result, onload: t.onload || r.f, onerror: t.onerror || r.f };
        (a[n] = s),
          (t.onload = function(e, t) {
            l(e, 'onload', t);
          }.bind(null, n)),
          (t.onerror = function(e, t) {
            l(e, 'onerror', t);
          }.bind(null, n)),
          t.query && (e = m(e, t.query));
        const o = t.method || '';
        return (
          (o && !/get/i.test(o)) || !t.data || ((e = m(e, t.data)), (t.data = null)),
          (t.url = e),
          (s.req = u(t)),
          n
        );
      }
      (d.filter = function(e) {
        r.isFunction(e) && (c = e);
      }),
        (d.abort = function(e) {
          const t = a[e];
          t && t.req.abort();
        }),
        (e.exports = d);
    },
    ,
    function(e, t) {
      e.exports = function(e, t) {
        const n = t.split('.');
        for (; n.length; ) {
          let r = n.shift();

          let s = !1;
          if ((r[r.length - 1] == '?' && ((r = r.slice(0, -1)), (s = !0)), !(e = e[r]) && s))
            return e;
        }
        return e;
      };
    },
    ,
    ,
    ,
    ,
    function(e, t, n) {
      const r = n(71);

      const s = n(65);

      const o = n(0);

      const i = n(4);
      function a(e) {
        switch (
          (o.notundef(e.type) ? o.verifyFileType(e.type, 'msg::FileMessage') : (e.type = 'file'),
          o.verifyOptions(e, 'file', 'msg::FileMessage'),
          o.verifyOptions(e.file, 'url ext size md5', !0, 'file.', 'msg::FileMessage'),
          e.type)
        ) {
          case 'image':
            c.verifyFile(e.file, 'msg::FileMessage');
            break;
          case 'audio':
            u.verifyFile(e.file, 'msg::FileMessage');
            break;
          case 'video':
            l.verifyFile(e.file, 'msg::FileMessage');
        }
        s.call(this, e), (this.attach = JSON.stringify(e.file));
      }
      (a.prototype = Object.create(s.prototype)),
        (a.reverse = function(e) {
          const t = s.reverse(e);
          return (
            (e.attach = e.attach ? `${e.attach}` : ''),
            (t.file = e.attach ? JSON.parse(e.attach) : {}),
            (t.file.url = (0, r.genPrivateUrl)(t.file.url)),
            t.type === 'audio' && (t.file.mp3Url = `${t.file.url}?audioTrans&type=mp3`),
            i.httpsEnabled && (t.file.url = t.file.url.replace('http', 'https')),
            t
          );
        }),
        (e.exports = a);
      var c = n(279);

      var u = n(278);

      var l = n(277);
    },
    function(e, t, n) {
      const r = n(46);

      const s = n(101);

      const o = n(4);

      const i = n(168);

      const a = n(281);

      const c = n(0);

      const u = c.verifyOptions;

      const l = c.verifyParamType;

      const m = n(74).getInstance('Chatroom');
      function d(e) {
        return (
          (this.subType = 'chatroom'),
          (e.Protocol = s),
          (e.Message = a),
          (e.constructor = d),
          e.isAnonymous &&
            ((e.account = e.account || `nimanon_${c.guid()}`),
            (e.isAnonymous = 1),
            c.verifyOptions(e, 'chatroomNick', 'api::Chatroom'),
            (e.chatroomAvatar = e.chatroomAvatar || ' ')),
          this.init(e)
        );
      }
      (d.Protocol = s),
        (d.parser = m),
        (d.use = r.use),
        (d.getInstance = function(e) {
          return (
            e.isAnonymous &&
              ((e.account = e.account || `nimanon_${c.guid()}`),
              (e.isAnonymous = 1),
              c.verifyOptions(e, 'chatroomNick', 'api::Chatroom.getInstance'),
              (e.chatroomAvatar = e.chatroomAvatar || ' ')),
            r.getInstance.call(this, e)
          );
        }),
        (d.genInstanceName = function(e) {
          return (
            c.verifyOptions(e, 'chatroomId', 'api::Chatroom.genInstanceName'),
            `Chatroom-account-${e.account}-chatroomId-${e.chatroomId}`
          );
        });
      const p = (d.fn = d.prototype = Object.create(r.prototype));
      (d.info = p.info = o.info),
        (p.getChatroom = function(e) {
          this.processCallback(e), this.sendCmd('getChatroom', e);
        }),
        (p.updateChatroom = function(e) {
          u(e, 'chatroom needNotify', 'api::updateChatroom'),
            l('needNotify', e.needNotify, 'boolean'),
            this.processCustom(e),
            this.processCallback(e),
            (e.chatroom = new i(e.chatroom)),
            this.sendCmd('updateChatroom', e);
        }),
        (p.closeChatroom = function(e) {
          this.processCustom(e), this.processCallback(e), this.sendCmd('closeChatroom', e);
        }),
        (e.exports = d),
        n(271),
        n(270),
        n(269);
    },
    function(e, t, n) {
      const r = n(71);

      const s = n(66);

      const o = n(0);

      const i = n(4);
      function a(e) {
        switch (
          (o.notundef(e.type) ? o.verifyFileType(e.type, 'msg::FileMessage') : (e.type = 'file'),
          o.verifyOptions(e, 'file', 'msg::FileMessage'),
          o.verifyOptions(e.file, 'url ext size md5', !0, 'file.', 'msg::FileMessage'),
          e.type)
        ) {
          case 'image':
            c.verifyFile(e.file, 'msg::FileMessage');
            break;
          case 'audio':
            u.verifyFile(e.file, 'msg::FileMessage');
            break;
          case 'video':
            l.verifyFile(e.file, 'msg::FileMessage');
        }
        s.call(this, e), (this.attach = JSON.stringify(e.file));
      }
      (a.prototype = Object.create(s.prototype)),
        (a.reverse = function(e) {
          const t = s.reverse(e);
          return (
            (e.attach = e.attach ? `${e.attach}` : ''),
            (t.file = e.attach ? JSON.parse(e.attach) : {}),
            (t.file.url = (0, r.genPrivateUrl)(t.file.url)),
            t.type === 'audio' && (t.file.mp3Url = `${t.file.url}?audioTrans&type=mp3`),
            i.httpsEnabled && (t.file.url = t.file.url.replace('http', 'https')),
            t
          );
        }),
        (e.exports = a);
      var c = n(313);

      var u = n(312);

      var l = n(311);
    },
    function(e, t, n) {
      const r = n(71);

      const s = n(0);

      const o = { unknown: 0, male: 1, female: 2 };

      const i = { 0: 'unknown', 1: 'male', 2: 'female' };
      function a(e) {
        s.merge(this, e),
          s.notundef(this.gender) &&
            (s.verifyParamValid('gender', this.gender, a.validGenders, 'user::User'),
            (this.gender = o[this.gender])),
          s.notundef(this.email) &&
            this.email !== '' &&
            s.verifyEmail('email', this.email, 'user::User'),
          s.notundef(this.birth) &&
            this.birth !== '' &&
            s.verifyBirth('birth', this.birth, 'user::User'),
          s.notundef(this.tel) && this.tel !== '' && s.verifyTel('tel', this.tel, 'user::User');
      }
      (a.reverse = function(e) {
        const t = s.filterObj(
          e,
          'account nick avatar sign gender email birth tel custom createTime updateTime'
        );
        return (
          s.notundef(t.avatar) && (t.avatar = (0, r.genPrivateUrl)(t.avatar)),
          s.notundef(t.gender) && (t.gender = i[t.gender]),
          s.notundef(t.createTime) && (t.createTime = +t.createTime),
          s.notundef(t.updateTime) && (t.updateTime = +t.updateTime),
          t
        );
      }),
        (a.reverseUsers = function(e) {
          return e.map(e => {
            return a.reverse(e);
          });
        }),
        (a.validGenders = Object.keys(o)),
        (e.exports = a);
    },
    function(e, t, n) {
      const r = n(103);

      const s = n(2)('iterator');

      const o = n(18);
      e.exports = n(3).getIteratorMethod = function(e) {
        if (void 0 != e) return e[s] || e['@@iterator'] || o[r(e)];
      };
    },
    ,
    ,
    function(e, t, n) {
      const r = {
        link: { id: 1, heartbeat: 2 },
        misc: {
          id: 6,
          getSimpleNosToken: 1,
          getNosToken: 2,
          notifyUploadLog: 3,
          uploadSdkLogUrl: 4,
          audioToText: 5,
          processImage: 6,
          getClientAntispam: 17,
          getNosTokenTrans: 7,
          notifyTransLog: 8,
          fetchFile: 9,
          fetchFileList: 10,
          removeFile: 11,
        },
      };

      const s = {
        heartbeat: { sid: r.link.id, cid: r.link.heartbeat },
        getSimpleNosToken: {
          sid: r.misc.id,
          cid: r.misc.getSimpleNosToken,
          params: [{ type: 'int', name: 'num' }],
        },
        getNosToken: {
          sid: r.misc.id,
          cid: r.misc.getNosToken,
          params: [{ type: 'String', name: 'responseBody' }],
        },
        uploadSdkLogUrl: {
          sid: r.misc.id,
          cid: r.misc.uploadSdkLogUrl,
          params: [{ type: 'string', name: 'url' }],
        },
        audioToText: {
          sid: r.misc.id,
          cid: r.misc.audioToText,
          params: [{ type: 'Property', name: 'audioToText' }],
        },
        processImage: {
          sid: r.misc.id,
          cid: r.misc.processImage,
          params: [
            { type: 'String', name: 'url' },
            { type: 'PropertyArray', name: 'imageOps', entity: 'imageOp' },
          ],
        },
        getClientAntispam: {
          sid: r.misc.id,
          cid: r.misc.getClientAntispam,
          params: [{ type: 'Property', name: 'clientAntispam' }],
        },
        getNosTokenTrans: {
          sid: r.misc.id,
          cid: r.misc.getNosTokenTrans,
          params: [{ type: 'Property', name: 'transToken' }],
        },
        fetchFile: {
          sid: r.misc.id,
          cid: r.misc.fetchFile,
          params: [{ type: 'String', name: 'docId' }],
        },
        fetchFileList: {
          sid: r.misc.id,
          cid: r.misc.fetchFileList,
          params: [{ type: 'Property', name: 'fileListParam' }],
        },
        removeFile: {
          sid: r.misc.id,
          cid: r.misc.removeFile,
          params: [{ type: 'String', name: 'docId' }],
        },
      };
      e.exports = {
        idMap: r,
        cmdConfig: s,
        packetConfig: {
          '1_2': { service: 'link', cmd: 'heartbeat' },
          '6_1': {
            service: 'misc',
            cmd: 'getSimpleNosToken',
            response: [{ type: 'PropertyArray', name: 'nosTokens', entity: 'nosToken' }],
          },
          '6_2': {
            service: 'misc',
            cmd: 'getNosToken',
            response: [{ type: 'Property', name: 'nosToken' }],
          },
          '6_3': { service: 'misc', cmd: 'notifyUploadLog' },
          '6_5': {
            service: 'misc',
            cmd: 'audioToText',
            response: [{ type: 'String', name: 'text' }],
          },
          '6_6': {
            service: 'misc',
            cmd: 'processImage',
            response: [{ type: 'String', name: 'url' }],
          },
          '6_17': {
            service: 'misc',
            cmd: 'getClientAntispam',
            response: [{ type: 'Property', name: 'clientAntispam' }],
          },
          '6_7': {
            service: 'misc',
            cmd: 'getNosTokenTrans',
            response: [{ type: 'Property', name: 'nosToken' }, { type: 'String', name: 'docId' }],
          },
          '6_8': {
            service: 'misc',
            cmd: 'notifyTransLog',
            response: [{ type: 'Property', name: 'transInfo' }],
          },
          '6_9': {
            service: 'misc',
            cmd: 'fetchFile',
            response: [{ type: 'Property', name: 'info', entity: 'transInfo' }],
          },
          '6_10': {
            service: 'misc',
            cmd: 'fetchFileList',
            response: [
              { type: 'PropertyArray', name: 'list', entity: 'transInfo' },
              { type: 'Number', name: 'totalCount' },
            ],
          },
          '6_11': {
            service: 'misc',
            cmd: 'removeFile',
            response: [{ type: 'String', name: 'res' }],
          },
        },
      };
    },
    function(module, exports, __webpack_require__) {
      (function(global, module) {
        let __WEBPACK_AMD_DEFINE_ARRAY__;
        let __WEBPACK_AMD_DEFINE_RESULT__;
        /*! Socket.IO.js build:0.9.11, development. Copyright(c) 2011 LearnBoost <dev@learnboost.com> MIT Licensed */ function getGlobal() {
          return typeof window !== 'undefined'
            ? window
            : typeof self !== 'undefined'
              ? self
              : void 0 !== global
                ? global
                : {};
        }
        const root = getGlobal();

        let io = module.exports;
        void 0 === root.location && (root.location = null),
          root.io ? module && (module.exports = io = root.io) : (root.io = io),
          (function() {
            !(function(e, t) {
              const n = e;
              (n.version = '0.9.11'),
                (n.protocol = 1),
                (n.transports = []),
                (n.j = []),
                (n.sockets = {}),
                (n.connect = function(e, r) {
                  let s;

                  let o;

                  const i = n.util.parseUri(e);
                  t &&
                    t.location &&
                    ((i.protocol = i.protocol || t.location.protocol.slice(0, -1)),
                    (i.host = i.host || (t.document ? t.document.domain : t.location.hostname)),
                    (i.port = i.port || t.location.port)),
                    (s = n.util.uniqueUri(i));
                  const a = {
                    host: i.host,
                    secure: i.protocol === 'https',
                    port: i.port || (i.protocol === 'https' ? 443 : 80),
                    query: i.query || '',
                  };
                  return (
                    n.util.merge(a, r),
                    (!a['force new connection'] && n.sockets[s]) || (o = new n.Socket(a)),
                    !a['force new connection'] && o && (n.sockets[s] = o),
                    (o = o || n.sockets[s]).of(i.path.length > 1 ? i.path : '')
                  );
                });
            })(module.exports, root),
              (function(e, t) {
                const n = (e.util = {});

                const r = /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;

                const s = [
                  'source',
                  'protocol',
                  'authority',
                  'userInfo',
                  'user',
                  'password',
                  'host',
                  'port',
                  'relative',
                  'path',
                  'directory',
                  'file',
                  'query',
                  'anchor',
                ];
                (n.parseUri = function(e) {
                  for (var t = r.exec(e || ''), n = {}, o = 14; o--; ) n[s[o]] = t[o] || '';
                  return n;
                }),
                  (n.uniqueUri = function(e) {
                    const n = e.protocol;

                    let r = e.host;

                    let s = e.port;
                    return (
                      'document' in t
                        ? ((r = r || document.domain),
                          (s =
                            s ||
                            (n == 'https' && document.location.protocol !== 'https:'
                              ? 443
                              : document.location.port)))
                        : ((r = r || 'localhost'), s || n != 'https' || (s = 443)),
                      `${n || 'http'}://${r}:${s || 80}`
                    );
                  }),
                  (n.query = function(e, t) {
                    const r = n.chunkQuery(e || '');

                    const s = [];
                    for (const o in (n.merge(r, n.chunkQuery(t || '')), r))
                      r.hasOwnProperty(o) && s.push(`${o}=${r[o]}`);
                    return s.length ? `?${s.join('&')}` : '';
                  }),
                  (n.chunkQuery = function(e) {
                    for (var t, n = {}, r = e.split('&'), s = 0, o = r.length; s < o; ++s)
                      (t = r[s].split('='))[0] && (n[t[0]] = t[1]);
                    return n;
                  });
                let o = !1;
                (n.load = function(e) {
                  if ((document && document.readyState === 'complete') || o) return e();
                  n.on(t, 'load', e, !1);
                }),
                  (n.on = function(e, t, n, r) {
                    e.attachEvent
                      ? e.attachEvent(`on${t}`, n)
                      : e.addEventListener && e.addEventListener(t, n, r);
                  }),
                  (n.request = function(e) {
                    if (e && typeof XDomainRequest !== 'undefined' && !n.ua.hasCORS)
                      return new XDomainRequest();
                    if (typeof XMLHttpRequest !== 'undefined' && (!e || n.ua.hasCORS))
                      return new XMLHttpRequest();
                    if (!e)
                      try {
                        return new root[(['Active'].concat('Object').join('X'))](
                          'Microsoft.XMLHTTP'
                        );
                      } catch (e) {}
                    return null;
                  }),
                  void 0 !== root &&
                    n.load(() => {
                      o = !0;
                    }),
                  (n.defer = function(e) {
                    if (!n.ua.webkit || typeof importScripts !== 'undefined') return e();
                    n.load(() => {
                      setTimeout(e, 100);
                    });
                  }),
                  (n.merge = function(e, t, r, s) {
                    let o;

                    const i = s || [];

                    const a = void 0 === r ? 2 : r;
                    for (o in t)
                      t.hasOwnProperty(o) &&
                        n.indexOf(i, o) < 0 &&
                        (typeof e[o] === 'object' && a
                          ? n.merge(e[o], t[o], a - 1, i)
                          : ((e[o] = t[o]), i.push(t[o])));
                    return e;
                  }),
                  (n.mixin = function(e, t) {
                    n.merge(e.prototype, t.prototype);
                  }),
                  (n.inherit = function(e, t) {
                    function n() {}
                    (n.prototype = t.prototype), (e.prototype = new n());
                  }),
                  (n.isArray =
                    Array.isArray ||
                    function(e) {
                      return Object.prototype.toString.call(e) === '[object Array]';
                    }),
                  (n.intersect = function(e, t) {
                    for (
                      var r = [],
                        s = e.length > t.length ? e : t,
                        o = e.length > t.length ? t : e,
                        i = 0,
                        a = o.length;
                      i < a;
                      i++
                    )
                      ~n.indexOf(s, o[i]) && r.push(o[i]);
                    return r;
                  }),
                  (n.indexOf = function(e, t, n) {
                    const r = e.length;
                    for (n = n < 0 ? (n + r < 0 ? 0 : n + r) : n || 0; n < r && e[n] !== t; n++);
                    return r <= n ? -1 : n;
                  }),
                  (n.toArray = function(e) {
                    for (var t = [], n = 0, r = e.length; n < r; n++) t.push(e[n]);
                    return t;
                  }),
                  (n.ua = {}),
                  (n.ua.hasCORS =
                    typeof XMLHttpRequest !== 'undefined' &&
                    (function() {
                      try {
                        var e = new XMLHttpRequest();
                      } catch (e) {
                        return !1;
                      }
                      return void 0 != e.withCredentials;
                    })()),
                  (n.ua.webkit =
                    typeof navigator !== 'undefined' && /webkit/i.test(navigator.userAgent)),
                  (n.ua.iDevice =
                    typeof navigator !== 'undefined' &&
                    /iPad|iPhone|iPod/i.test(navigator.userAgent));
              })(void 0 !== io ? io : module.exports, root),
              (function(e, t) {
                function n() {}
                (e.EventEmitter = n),
                  (n.prototype.on = function(e, n) {
                    return (
                      this.$events || (this.$events = {}),
                      this.$events[e]
                        ? t.util.isArray(this.$events[e])
                          ? this.$events[e].push(n)
                          : (this.$events[e] = [this.$events[e], n])
                        : (this.$events[e] = n),
                      this
                    );
                  }),
                  (n.prototype.addListener = n.prototype.on),
                  (n.prototype.once = function(e, t) {
                    const n = this;
                    function r() {
                      n.removeListener(e, r), t.apply(this, arguments);
                    }
                    return (r.listener = t), this.on(e, r), this;
                  }),
                  (n.prototype.removeListener = function(e, n) {
                    if (this.$events && this.$events[e]) {
                      const r = this.$events[e];
                      if (t.util.isArray(r)) {
                        for (var s = -1, o = 0, i = r.length; o < i; o++)
                          if (r[o] === n || (r[o].listener && r[o].listener === n)) {
                            s = o;
                            break;
                          }
                        if (s < 0) return this;
                        r.splice(s, 1), r.length || delete this.$events[e];
                      } else
                        (r === n || (r.listener && r.listener === n)) && delete this.$events[e];
                    }
                    return this;
                  }),
                  (n.prototype.removeAllListeners = function(e) {
                    return void 0 === e
                      ? ((this.$events = {}), this)
                      : (this.$events && this.$events[e] && (this.$events[e] = null), this);
                  }),
                  (n.prototype.listeners = function(e) {
                    return (
                      this.$events || (this.$events = {}),
                      this.$events[e] || (this.$events[e] = []),
                      t.util.isArray(this.$events[e]) || (this.$events[e] = [this.$events[e]]),
                      this.$events[e]
                    );
                  }),
                  (n.prototype.emit = function(e) {
                    if (!this.$events) return !1;
                    const n = this.$events[e];
                    if (!n) return !1;
                    const r = Array.prototype.slice.call(arguments, 1);
                    if (typeof n === 'function') n.apply(this, r);
                    else {
                      if (!t.util.isArray(n)) return !1;
                      for (let s = n.slice(), o = 0, i = s.length; o < i; o++) s[o].apply(this, r);
                    }
                    return !0;
                  });
              })(void 0 !== io ? io : module.exports, void 0 !== io ? io : module.parent.exports),
              (function(exports, nativeJSON) {
                if (nativeJSON && nativeJSON.parse)
                  return (exports.JSON = {
                    parse: nativeJSON.parse,
                    stringify: nativeJSON.stringify,
                  });
                const JSON = (exports.JSON = {});
                function f(e) {
                  return e < 10 ? `0${e}` : e;
                }
                function date(e, t) {
                  return isFinite(e.valueOf())
                    ? `${e.getUTCFullYear()}-${f(e.getUTCMonth() + 1)}-${f(e.getUTCDate())}T${f(
                        e.getUTCHours()
                      )}:${f(e.getUTCMinutes())}:${f(e.getUTCSeconds())}Z`
                    : null;
                }
                const cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;

                const escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;

                let gap;

                let indent;

                const meta = {
                  '\b': '\\b',
                  '\t': '\\t',
                  '\n': '\\n',
                  '\f': '\\f',
                  '\r': '\\r',
                  '"': '\\"',
                  '\\': '\\\\',
                };

                let rep;
                function quote(e) {
                  return (
                    (escapable.lastIndex = 0),
                    escapable.test(e)
                      ? `"${e.replace(escapable, e => {
                          const t = meta[e];
                          return typeof t === 'string'
                            ? t
                            : `\\u${`0000${e.charCodeAt(0).toString(16)}`.slice(-4)}`;
                        })}"`
                      : `"${e}"`
                  );
                }
                function str(e, t) {
                  let n;

                  let r;

                  let s;

                  let o;

                  let i;

                  const a = gap;

                  let c = t[e];
                  switch (
                    (c instanceof Date && (c = date(e)),
                    typeof rep === 'function' && (c = rep.call(t, e, c)),
                    typeof c)
                  ) {
                    case 'string':
                      return quote(c);
                    case 'number':
                      return isFinite(c) ? String(c) : 'null';
                    case 'boolean':
                    case 'null':
                      return String(c);
                    case 'object':
                      if (!c) return 'null';
                      if (
                        ((gap += indent),
                        (i = []),
                        Object.prototype.toString.apply(c) === '[object Array]')
                      ) {
                        for (o = c.length, n = 0; n < o; n += 1) i[n] = str(n, c) || 'null';
                        return (
                          (s =
                            i.length === 0
                              ? '[]'
                              : gap
                                ? `[\n${gap}${i.join(`,\n${gap}`)}\n${a}]`
                                : `[${i.join(',')}]`),
                          (gap = a),
                          s
                        );
                      }
                      if (rep && typeof rep === 'object')
                        for (o = rep.length, n = 0; n < o; n += 1)
                          typeof rep[n] === 'string' &&
                            (s = str((r = rep[n]), c)) &&
                            i.push(quote(r) + (gap ? ': ' : ':') + s);
                      else
                        for (r in c)
                          Object.prototype.hasOwnProperty.call(c, r) &&
                            (s = str(r, c)) &&
                            i.push(quote(r) + (gap ? ': ' : ':') + s);
                      return (
                        (s =
                          i.length === 0
                            ? '{}'
                            : gap
                              ? `{\n${gap}${i.join(`,\n${gap}`)}\n${a}}`
                              : `{${i.join(',')}}`),
                        (gap = a),
                        s
                      );
                  }
                }
                (JSON.stringify = function(e, t, n) {
                  let r;
                  if (((gap = ''), (indent = ''), typeof n === 'number'))
                    for (r = 0; r < n; r += 1) indent += ' ';
                  else typeof n === 'string' && (indent = n);
                  if (
                    ((rep = t),
                    t &&
                      typeof t !== 'function' &&
                      (typeof t !== 'object' || typeof t.length !== 'number'))
                  )
                    throw new Error('socket.io:: replacer cannot JSON.stringify');
                  return str('', { '': e });
                }),
                  (JSON.parse = function(text, reviver) {
                    let j;
                    function walk(e, t) {
                      let n;

                      let r;

                      const s = e[t];
                      if (s && typeof s === 'object')
                        for (n in s)
                          Object.prototype.hasOwnProperty.call(s, n) &&
                            (void 0 !== (r = walk(s, n)) ? (s[n] = r) : delete s[n]);
                      return reviver.call(e, t, s);
                    }
                    if (
                      ((text = String(text)),
                      (cx.lastIndex = 0),
                      cx.test(text) &&
                        (text = text.replace(cx, e => {
                          return `\\u${`0000${e.charCodeAt(0).toString(16)}`.slice(-4)}`;
                        })),
                      /^[\],:{}\s]*$/.test(
                        text
                          .replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@')
                          .replace(
                            /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                            ']'
                          )
                          .replace(/(?:^|:|,)(?:\s*\[)+/g, '')
                      ))
                    )
                      return (
                        (j = eval(`(${text})`)),
                        typeof reviver === 'function' ? walk({ '': j }, '') : j
                      );
                    throw new SyntaxError('socket.io:: reviver cannot JSON.parse');
                  });
              })(void 0 !== io ? io : module.exports, typeof JSON !== 'undefined' ? JSON : void 0),
              (function(e, t) {
                const n = (e.parser = {});

                const r = (n.packets = [
                  'disconnect',
                  'connect',
                  'heartbeat',
                  'message',
                  'json',
                  'event',
                  'ack',
                  'error',
                  'noop',
                ]);

                const s = (n.reasons = [
                  'transport not supported',
                  'client not handshaken',
                  'unauthorized',
                ]);

                const o = (n.advice = ['reconnect']);

                const i = t.JSON;

                const a = t.util.indexOf;
                (n.encodePacket = function(e) {
                  const t = a(r, e.type);

                  const n = e.id || '';

                  const c = e.endpoint || '';

                  const u = e.ack;

                  let l = null;
                  switch (e.type) {
                    case 'error':
                      var m = e.reason ? a(s, e.reason) : '';

                      var d = e.advice ? a(o, e.advice) : '';
                      (m === '' && d === '') || (l = m + (d !== '' ? `+${d}` : ''));
                      break;
                    case 'message':
                      e.data !== '' && (l = e.data);
                      break;
                    case 'event':
                      var p = { name: e.name };
                      e.args && e.args.length && (p.args = e.args), (l = i.stringify(p));
                      break;
                    case 'json':
                      l = i.stringify(e.data);
                      break;
                    case 'connect':
                      e.qs && (l = e.qs);
                      break;
                    case 'ack':
                      l = e.ackId + (e.args && e.args.length ? `+${i.stringify(e.args)}` : '');
                  }
                  const f = [t, n + (u == 'data' ? '+' : ''), c];
                  return l !== null && void 0 !== l && f.push(l), f.join(':');
                }),
                  (n.encodePayload = function(e) {
                    let t = '';
                    if (e.length == 1) return e[0];
                    for (let n = 0, r = e.length; n < r; n++) {
                      t += `�${e[n].length}�${e[n]}`;
                    }
                    return t;
                  });
                const c = /([^:]+):([0-9]+)?(\+)?:([^:]+)?:?([\s\S]*)?/;
                (n.decodePacket = function(e) {
                  if (!(a = e.match(c))) return {};
                  const t = a[2] || '';

                  const n = ((e = a[5] || ''), { type: r[a[1]], endpoint: a[4] || '' });
                  switch ((t && ((n.id = t), a[3] ? (n.ack = 'data') : (n.ack = !0)), n.type)) {
                    case 'error':
                      var a = e.split('+');
                      (n.reason = s[a[0]] || ''), (n.advice = o[a[1]] || '');
                      break;
                    case 'message':
                      n.data = e || '';
                      break;
                    case 'event':
                      try {
                        const u = i.parse(e);
                        (n.name = u.name), (n.args = u.args);
                      } catch (e) {}
                      n.args = n.args || [];
                      break;
                    case 'json':
                      try {
                        n.data = i.parse(e);
                      } catch (e) {}
                      break;
                    case 'connect':
                      n.qs = e || '';
                      break;
                    case 'ack':
                      if (
                        (a = e.match(/^([0-9]+)(\+)?(.*)/)) &&
                        ((n.ackId = a[1]), (n.args = []), a[3])
                      )
                        try {
                          n.args = a[3] ? i.parse(a[3]) : [];
                        } catch (e) {}
                  }
                  return n;
                }),
                  (n.decodePayload = function(e) {
                    const t = function(e, t) {
                      for (var n = 0, r = e; r < t.length; r++) {
                        if (t.charAt(r) == '�') return n;
                        n++;
                      }
                      return n;
                    };
                    if (e.charAt(0) == '�') {
                      for (var r = [], s = 1, o = ''; s < e.length; s++)
                        if (e.charAt(s) == '�') {
                          let i = e.substr(s + 1).substr(0, o);
                          if (e.charAt(s + 1 + Number(o)) != '�' && s + 1 + Number(o) != e.length) {
                            const a = Number(o);
                            (l = t(s + a + 1, e)), (i = e.substr(s + 1).substr(0, a + l)), (s += l);
                          }
                          r.push(n.decodePacket(i)), (s += Number(o) + 1), (o = '');
                        } else o += e.charAt(s);
                      return r;
                    }
                    return [n.decodePacket(e)];
                  });
              })(void 0 !== io ? io : module.exports, void 0 !== io ? io : module.parent.exports),
              (function(e, t) {
                function n(e, t) {
                  (this.socket = e), (this.sessid = t);
                }
                (e.Transport = n),
                  t.util.mixin(n, t.EventEmitter),
                  (n.prototype.heartbeats = function() {
                    return !0;
                  }),
                  (n.prototype.onData = function(e) {
                    if (this !== this.socket.transport) return this;
                    if (
                      (this.clearCloseTimeout(),
                      (this.socket.connected ||
                        this.socket.connecting ||
                        this.socket.reconnecting) &&
                        this.setCloseTimeout(),
                      e !== '')
                    ) {
                      const n = t.parser.decodePayload(e);
                      if (n && n.length)
                        for (let r = 0, s = n.length; r < s; r++) this.onPacket(n[r]);
                    }
                    return this;
                  }),
                  (n.prototype.onPacket = function(e) {
                    return (
                      this.socket.setHeartbeatTimeout(),
                      e.type == 'heartbeat'
                        ? this.onHeartbeat()
                        : (e.type == 'connect' && e.endpoint == '' && this.onConnect(),
                          e.type == 'error' && e.advice == 'reconnect' && (this.isOpen = !1),
                          this.socket.onPacket(e),
                          this)
                    );
                  }),
                  (n.prototype.setCloseTimeout = function() {
                    if (!this.closeTimeout) {
                      const e = this;
                      this.closeTimeout = setTimeout(() => {
                        e.onDisconnect();
                      }, this.socket.closeTimeout);
                    }
                  }),
                  (n.prototype.onDisconnect = function() {
                    return (
                      this.isOpen && this.close(),
                      this.clearTimeouts(),
                      this.socket.transport === this
                        ? this.socket.onDisconnect()
                        : this.socket.setBuffer(!1),
                      this
                    );
                  }),
                  (n.prototype.onConnect = function() {
                    return this.socket.onConnect(), this;
                  }),
                  (n.prototype.clearCloseTimeout = function() {
                    this.closeTimeout &&
                      (clearTimeout(this.closeTimeout), (this.closeTimeout = null));
                  }),
                  (n.prototype.clearTimeouts = function() {
                    this.clearCloseTimeout(),
                      this.reopenTimeout && clearTimeout(this.reopenTimeout);
                  }),
                  (n.prototype.packet = function(e) {
                    this.send(t.parser.encodePacket(e));
                  }),
                  (n.prototype.onHeartbeat = function(e) {
                    this.packet({ type: 'heartbeat' });
                  }),
                  (n.prototype.onOpen = function() {
                    (this.isOpen = !0), this.clearCloseTimeout(), this.socket.onOpen();
                  }),
                  (n.prototype.onClose = function() {
                    (this.isOpen = !1),
                      this.socket.transport === this
                        ? this.socket.onClose()
                        : this.socket.setBuffer(!1),
                      this.onDisconnect(),
                      this.onDisconnectDone instanceof Function && this.onDisconnectDone(null),
                      this.onConnectionOver instanceof Function && this.onConnectionOver(null);
                  }),
                  (n.prototype.onDisconnectDone = function() {}),
                  (n.prototype.onConnectionOver = function() {}),
                  (n.prototype.prepareUrl = function() {
                    const e = this.socket.options;
                    return `${this.scheme()}://${e.host}:${e.port}/${e.resource}/${t.protocol}/${
                      this.name
                    }/${this.sessid}`;
                  }),
                  (n.prototype.ready = function(e, t) {
                    t.call(this);
                  });
              })(void 0 !== io ? io : module.exports, void 0 !== io ? io : module.parent.exports),
              (function(e, t, n) {
                function r(e) {
                  if (
                    ((this.options = {
                      port: 80,
                      secure: !1,
                      document: 'document' in n && document,
                      resource: 'socket.io',
                      transports: e.transports || t.transports,
                      'connect timeout': 1e4,
                      'try multiple transports': !0,
                      reconnect: !0,
                      'reconnection delay': 500,
                      'reconnection limit': 1 / 0,
                      'reopen delay': 3e3,
                      'max reconnection attempts': 10,
                      'sync disconnect on unload': !1,
                      'auto connect': !0,
                      'flash policy port': 10843,
                      manualFlush: !1,
                    }),
                    t.util.merge(this.options, e),
                    (this.connected = !1),
                    (this.open = !1),
                    (this.connecting = !1),
                    (this.reconnecting = !1),
                    (this.namespaces = {}),
                    (this.buffer = []),
                    (this.doBuffer = !1),
                    this.options['sync disconnect on unload'] &&
                      (!this.isXDomain() || t.util.ua.hasCORS))
                  ) {
                    const r = this;
                    t.util.on(
                      n,
                      'beforeunload',
                      () => {
                        r.disconnectSync();
                      },
                      !1
                    );
                  }
                  this.options['auto connect'] && this.connect();
                }
                function s() {}
                (e.Socket = r),
                  t.util.mixin(r, t.EventEmitter),
                  (r.prototype.of = function(e) {
                    return (
                      this.namespaces[e] ||
                        ((this.namespaces[e] = new t.SocketNamespace(this, e)),
                        e !== '' && this.namespaces[e].packet({ type: 'connect' })),
                      this.namespaces[e]
                    );
                  }),
                  (r.prototype.publish = function() {
                    let e;
                    for (const t in (this.emit.apply(this, arguments), this.namespaces))
                      this.namespaces.hasOwnProperty(t) &&
                        (e = this.of(t)).$emit.apply(e, arguments);
                  }),
                  (r.prototype.handshake = function(e) {
                    const n = this;

                    const r = this.options;
                    function o(t) {
                      t instanceof Error
                        ? ((n.connecting = !1), n.onError(t.message))
                        : (console.log(`SocketIO handshake success ${t}`), e(...t.split(':')));
                    }
                    const i = [
                      `http${r.secure ? 's' : ''}:/`,
                      `${r.host}:${r.port}`,
                      r.resource,
                      t.protocol,
                      t.util.query(this.options.query, `t=${+new Date()}`),
                    ].join('/');
                    if (
                      this.isXDomain() &&
                      !t.util.ua.hasCORS &&
                      document &&
                      document.getElementsByTagName
                    ) {
                      const a = document.getElementsByTagName('script')[0];

                      const c = document.createElement('script');
                      (c.src = `${i}&jsonp=${t.j.length}`),
                        (c.onreadystatechange = function() {
                          this.readyState == 'loaded' &&
                            c.parentNode &&
                            (c.parentNode.removeChild(c),
                            (n.connecting = !1),
                            !n.reconnecting && n.onError('Server down or port not open'),
                            n.publish('handshake_failed'));
                        }),
                        a.parentNode.insertBefore(c, a),
                        t.j.push(e => {
                          o(e), c.parentNode.removeChild(c);
                        });
                    } else {
                      const u = t.util.request();
                      u.open('GET', i, !0),
                        (u.timeout = 1e4),
                        this.isXDomain() && (u.withCredentials = !0),
                        (u.onreadystatechange = function() {
                          u.readyState == 4 &&
                            ((u.onreadystatechange = s),
                            u.status == 200
                              ? o(u.responseText)
                              : u.status == 403
                                ? ((n.connecting = !1),
                                  n.onError(u.responseText),
                                  n.publish('handshake_failed'))
                                : ((n.connecting = !1),
                                  !n.reconnecting && n.onError(u.responseText),
                                  n.publish('handshake_failed')));
                        }),
                        (u.ontimeout = function(e) {
                          (n.connecting = !1),
                            !n.reconnecting && n.onError(u.responseText),
                            n.publish('handshake_failed');
                        }),
                        u.send(null);
                    }
                  }),
                  (r.prototype.connect = function(e) {
                    if (this.connecting) return this;
                    const n = this;
                    return (
                      (n.connecting = !0),
                      this.handshake((r, s, o, i) => {
                        (n.sessionid = r),
                          (n.closeTimeout = 1e3 * o),
                          (n.heartbeatTimeout = 1e3 * s),
                          n.transports ||
                            (n.transports = n.origTransports = i
                              ? t.util.intersect(i.split(','), n.options.transports)
                              : n.options.transports),
                          console.log(
                            `SocketIO transports: ${n.transports} opt:${n.options.transports}`
                          ),
                          n.setHeartbeatTimeout(),
                          n.once('connect', () => {
                            clearTimeout(n.connectTimeoutTimer),
                              (n.connectTimeoutTimer = null),
                              e && typeof e === 'function' && e();
                          }),
                          n.doConnect();
                      }),
                      this
                    );
                  }),
                  (r.prototype.doConnect = function() {
                    const e = this;
                    if (
                      (e.transport && e.transport.clearTimeouts(),
                      (e.transport = e.getTransport(e.transports)),
                      !e.transport)
                    )
                      return e.publish('connect_failed');
                    e.transport.ready(e, () => {
                      (e.connecting = !0),
                        e.publish('connecting', e.transport.name),
                        e.transport.open(),
                        e.options['connect timeout'] &&
                          (e.connectTimeoutTimer && clearTimeout(e.connectTimeoutTimer),
                          (e.connectTimeoutTimer = setTimeout(
                            e.tryNextTransport.bind(e),
                            e.options['connect timeout']
                          )));
                    });
                  }),
                  (r.prototype.getTransport = function(e) {
                    for (var n, r = e || this.transports, s = 0; (n = r[s]); s++) {
                      if (
                        (console.log(
                          `SocketIO check ${n} ${t.Transport[n].check(this)} , cors ${t.Transport[
                            n
                          ].xdomainCheck(this)}`
                        ),
                        t.Transport[n] &&
                          t.Transport[n].check(this) &&
                          (!this.isXDomain() || t.Transport[n].xdomainCheck(this)))
                      )
                        return new t.Transport[n](this, this.sessionid);
                    }
                    return null;
                  }),
                  (r.prototype.tryNextTransport = function() {
                    console.log('SocketIO try next transport');
                    if (
                      !this.connected &&
                      ((this.connecting = !1), this.options['try multiple transports'])
                    ) {
                      for (
                        var e = this.transports;
                        e.length > 0 && e.splice(0, 1)[0] != this.transport.name;

                      );
                      e.length ? this.doConnect() : this.publish('connect_failed');
                    }
                  }),
                  (r.prototype.setHeartbeatTimeout = function() {
                    if (
                      (clearTimeout(this.heartbeatTimeoutTimer),
                      !this.transport || this.transport.heartbeats())
                    ) {
                      const e = this;
                      this.heartbeatTimeoutTimer = setTimeout(() => {
                        e.transport && e.transport.onClose();
                      }, this.heartbeatTimeout);
                    }
                  }),
                  (r.prototype.packet = function(e) {
                    return (
                      this.connected && !this.doBuffer
                        ? this.transport.packet(e)
                        : this.buffer.push(e),
                      this
                    );
                  }),
                  (r.prototype.setBuffer = function(e) {
                    (this.doBuffer = e),
                      !e &&
                        this.connected &&
                        this.buffer.length &&
                        (this.options.manualFlush || this.flushBuffer());
                  }),
                  (r.prototype.flushBuffer = function() {
                    this.transport.payload(this.buffer), (this.buffer = []);
                  }),
                  (r.prototype.disconnect = function() {
                    return (
                      (this.connected || this.connecting) &&
                        (this.open && this.of('').packet({ type: 'disconnect' }),
                        this.onDisconnect('booted')),
                      this
                    );
                  }),
                  (r.prototype.disconnectSync = function() {
                    const e = t.util.request();

                    const n = `${[
                      `http${this.options.secure ? 's' : ''}:/`,
                      `${this.options.host}:${this.options.port}`,
                      this.options.resource,
                      t.protocol,
                      '',
                      this.sessionid,
                    ].join('/')}/?disconnect=1`;
                    e.open('GET', n, !1), e.send(null), this.onDisconnect('booted');
                  }),
                  (r.prototype.isXDomain = function() {
                    const e = n.location.port || (n.location.protocol == 'https:' ? 443 : 80);
                    return this.options.host !== n.location.hostname || this.options.port != e;
                  }),
                  (r.prototype.onConnect = function() {
                    this.connected ||
                      ((this.connected = !0),
                      (this.connecting = !1),
                      this.doBuffer || this.setBuffer(!1),
                      this.emit('connect'));
                  }),
                  (r.prototype.onOpen = function() {
                    this.open = !0;
                  }),
                  (r.prototype.onClose = function() {
                    (this.open = !1), clearTimeout(this.heartbeatTimeoutTimer);
                  }),
                  (r.prototype.onPacket = function(e) {
                    this.of(e.endpoint).onPacket(e);
                  }),
                  (r.prototype.onError = function(e) {
                    e &&
                      e.advice &&
                      e.advice === 'reconnect' &&
                      (this.connected || this.connecting) &&
                      (this.disconnect(), this.options.reconnect && this.reconnect()),
                      this.publish('error', e && e.reason ? e.reason : e);
                  }),
                  (r.prototype.onDisconnect = function(e) {
                    const t = this.connected;

                    const n = this.connecting;
                    (this.connected = !1),
                      (this.connecting = !1),
                      (this.open = !1),
                      (t || n) &&
                        (this.transport.close(),
                        this.transport.clearTimeouts(),
                        t &&
                          (this.publish('disconnect', e),
                          e != 'booted' &&
                            this.options.reconnect &&
                            !this.reconnecting &&
                            this.reconnect()),
                        n && this.tryNextTransport());
                  }),
                  (r.prototype.reconnect = function() {
                    (this.reconnecting = !0),
                      (this.reconnectionAttempts = 0),
                      (this.reconnectionDelay = this.options['reconnection delay']);
                    const e = this;

                    const t = this.options['max reconnection attempts'];

                    const n = this.options['try multiple transports'];

                    const r = this.options['reconnection limit'];
                    function s() {
                      if (e.connected) {
                        for (const t in e.namespaces)
                          e.namespaces.hasOwnProperty(t) &&
                            t !== '' &&
                            e.namespaces[t].packet({ type: 'connect' });
                        e.publish('reconnect', e.transport.name, e.reconnectionAttempts);
                      }
                      clearTimeout(e.reconnectionTimer),
                        e.removeListener('connect_failed', o),
                        e.removeListener('connect', o),
                        (e.reconnecting = !1),
                        delete e.reconnectionAttempts,
                        delete e.reconnectionDelay,
                        delete e.reconnectionTimer,
                        delete e.redoTransports,
                        (e.options['try multiple transports'] = n);
                    }
                    function o() {
                      if (e.reconnecting)
                        return e.connected
                          ? s()
                          : e.connecting && e.reconnecting
                            ? (e.reconnectionTimer = setTimeout(o, 1e3))
                            : void (e.reconnectionAttempts++ >= t
                                ? e.redoTransports
                                  ? (e.publish('reconnect_failed'), s())
                                  : (e.on('connect_failed', o),
                                    (e.options['try multiple transports'] = !0),
                                    (e.transports = e.origTransports),
                                    (e.transport = e.getTransport()),
                                    (e.redoTransports = !0),
                                    e.connect())
                                : (e.reconnectionDelay < r && (e.reconnectionDelay *= 2),
                                  e.connect(),
                                  e.publish(
                                    'reconnecting',
                                    e.reconnectionDelay,
                                    e.reconnectionAttempts
                                  ),
                                  (e.reconnectionTimer = setTimeout(o, e.reconnectionDelay))));
                    }
                    (this.options['try multiple transports'] = !1),
                      (this.reconnectionTimer = setTimeout(o, this.reconnectionDelay)),
                      this.on('connect', o);
                  });
              })(
                void 0 !== io ? io : module.exports,
                void 0 !== io ? io : module.parent.exports,
                root
              ),
              (function(e, t) {
                function n(e, t) {
                  (this.socket = e),
                    (this.name = t || ''),
                    (this.flags = {}),
                    (this.json = new r(this, 'json')),
                    (this.ackPackets = 0),
                    (this.acks = {});
                }
                function r(e, t) {
                  (this.namespace = e), (this.name = t);
                }
                (e.SocketNamespace = n),
                  t.util.mixin(n, t.EventEmitter),
                  (n.prototype.$emit = t.EventEmitter.prototype.emit),
                  (n.prototype.of = function() {
                    return this.socket.of.apply(this.socket, arguments);
                  }),
                  (n.prototype.packet = function(e) {
                    return (e.endpoint = this.name), this.socket.packet(e), (this.flags = {}), this;
                  }),
                  (n.prototype.send = function(e, t) {
                    const n = { type: this.flags.json ? 'json' : 'message', data: e };
                    return (
                      typeof t === 'function' &&
                        ((n.id = ++this.ackPackets), (n.ack = !0), (this.acks[n.id] = t)),
                      this.packet(n)
                    );
                  }),
                  (n.prototype.emit = function(e) {
                    let t = Array.prototype.slice.call(arguments, 1);

                    const n = t[t.length - 1];

                    const r = { type: 'event', name: e };
                    return (
                      typeof n === 'function' &&
                        ((r.id = ++this.ackPackets),
                        (r.ack = 'data'),
                        (this.acks[r.id] = n),
                        (t = t.slice(0, t.length - 1))),
                      (r.args = t),
                      this.packet(r)
                    );
                  }),
                  (n.prototype.disconnect = function() {
                    return (
                      this.name === ''
                        ? this.socket.disconnect()
                        : (this.packet({ type: 'disconnect' }), this.$emit('disconnect')),
                      this
                    );
                  }),
                  (n.prototype.onPacket = function(e) {
                    const n = this;
                    function r() {
                      n.packet({ type: 'ack', args: t.util.toArray(arguments), ackId: e.id });
                    }
                    switch (e.type) {
                      case 'connect':
                        this.$emit('connect');
                        break;
                      case 'disconnect':
                        this.name === ''
                          ? this.socket.onDisconnect(e.reason || 'booted')
                          : this.$emit('disconnect', e.reason);
                        break;
                      case 'message':
                      case 'json':
                        var s = ['message', e.data];
                        e.ack == 'data'
                          ? s.push(r)
                          : e.ack && this.packet({ type: 'ack', ackId: e.id }),
                          this.$emit.apply(this, s);
                        break;
                      case 'event':
                        s = [e.name].concat(e.args);
                        e.ack == 'data' && s.push(r), this.$emit.apply(this, s);
                        break;
                      case 'ack':
                        this.acks[e.ackId] &&
                          (this.acks[e.ackId].apply(this, e.args), delete this.acks[e.ackId]);
                        break;
                      case 'error':
                        e.advice
                          ? this.socket.onError(e)
                          : e.reason == 'unauthorized'
                            ? this.$emit('connect_failed', e.reason)
                            : this.$emit('error', e.reason);
                    }
                  }),
                  (r.prototype.send = function() {
                    (this.namespace.flags[this.name] = !0),
                      this.namespace.send.apply(this.namespace, arguments);
                  }),
                  (r.prototype.emit = function() {
                    (this.namespace.flags[this.name] = !0),
                      this.namespace.emit.apply(this.namespace, arguments);
                  });
              })(void 0 !== io ? io : module.exports, void 0 !== io ? io : module.parent.exports),
              (function(e, t, n) {
                function r(e) {
                  t.Transport.apply(this, arguments);
                }
                (e.websocket = r),
                  t.util.inherit(r, t.Transport),
                  (r.prototype.name = 'websocket'),
                  (r.prototype.open = function() {
                    let e;

                    const r = t.util.query(this.socket.options.query);

                    const s = this;
                    return (
                      e || (e = n.MozWebSocket || n.WebSocket),
                      (this.websocket = new e(this.prepareUrl() + r)),
                      (this.websocket.onopen = function() {
                        s.onOpen(), s.socket.setBuffer(!1);
                      }),
                      (this.websocket.onmessage = function(e) {
                        s.onData(e.data);
                      }),
                      (this.websocket.onclose = function() {
                        s.socket.setBuffer(!0), s.onClose();
                      }),
                      (this.websocket.onerror = function(e) {
                        s.onError(e);
                      }),
                      this
                    );
                  }),
                  t.util.ua.iDevice
                    ? (r.prototype.send = function(e) {
                        const t = this;
                        return (
                          setTimeout(() => {
                            t.websocket.send(e);
                          }, 0),
                          this
                        );
                      })
                    : (r.prototype.send = function(e) {
                        return this.websocket.send(e), this;
                      }),
                  (r.prototype.payload = function(e) {
                    for (let t = 0, n = e.length; t < n; t++) this.packet(e[t]);
                    return this;
                  }),
                  (r.prototype.close = function() {
                    return this.websocket.close(), this;
                  }),
                  (r.prototype.onError = function(e) {
                    this.socket.onError(e);
                  }),
                  (r.prototype.scheme = function() {
                    return this.socket.options.secure ? 'wss' : 'ws';
                  }),
                  (r.check = function() {
                    return ('WebSocket' in n && !('__addTask' in WebSocket)) || 'MozWebSocket' in n;
                  }),
                  (r.xdomainCheck = function() {
                    return !0;
                  }),
                  t.transports.push('websocket');
              })(
                void 0 !== io ? io.Transport : module.exports,
                void 0 !== io ? io : module.parent.exports,
                root
              ),
              (function(e, t, n) {
                function r(e) {
                  e && (t.Transport.apply(this, arguments), (this.sendBuffer = []));
                }
                function s() {}
                (e.XHR = r),
                  t.util.inherit(r, t.Transport),
                  (r.prototype.open = function() {
                    return (
                      this.socket.setBuffer(!1),
                      this.onOpen(),
                      this.get(),
                      this.setCloseTimeout(),
                      this
                    );
                  }),
                  (r.prototype.payload = function(e) {
                    for (var n = [], r = 0, s = e.length; r < s; r++)
                      n.push(t.parser.encodePacket(e[r]));
                    this.send(t.parser.encodePayload(n));
                  }),
                  (r.prototype.send = function(e) {
                    return this.post(e), this;
                  }),
                  (r.prototype.post = function(e) {
                    const t = this;
                    this.socket.setBuffer(!0),
                      (this.sendXHR = this.request('POST')),
                      n.XDomainRequest && this.sendXHR instanceof XDomainRequest
                        ? (this.sendXHR.onload = this.sendXHR.onerror = function() {
                            (this.onload = s), t.socket.setBuffer(!1);
                          })
                        : (this.sendXHR.onreadystatechange = function() {
                            this.readyState == 4 &&
                              ((this.onreadystatechange = s),
                              (t.posting = !1),
                              this.status == 200 ? t.socket.setBuffer(!1) : t.onClose());
                          }),
                      this.sendXHR.send(e);
                  }),
                  (r.prototype.close = function() {
                    return this.onClose(), this;
                  }),
                  (r.prototype.request = function(e) {
                    const n = t.util.request(this.socket.isXDomain());

                    const r = t.util.query(this.socket.options.query, `t=${+new Date()}`);
                    if ((n.open(e || 'GET', this.prepareUrl() + r, !0), e == 'POST'))
                      try {
                        n.setRequestHeader
                          ? n.setRequestHeader('Content-type', 'text/plain;charset=UTF-8')
                          : (n.contentType = 'text/plain');
                      } catch (e) {}
                    return n;
                  }),
                  (r.prototype.scheme = function() {
                    return this.socket.options.secure ? 'https' : 'http';
                  }),
                  (r.check = function(e, r) {
                    try {
                      const s = t.util.request(r);

                      const o = n.XDomainRequest && s instanceof XDomainRequest;

                      const i = e && e.options && e.options.secure ? 'https:' : 'http:';

                      const a = n.location && i != n.location.protocol;
                      if (s && (!o || !a)) return !0;
                    } catch (e) {}
                    return !1;
                  }),
                  (r.xdomainCheck = function(e) {
                    return r.check(e, !0);
                  });
              })(
                void 0 !== io ? io.Transport : module.exports,
                void 0 !== io ? io : module.parent.exports,
                root
              ),
              (function(e, t, n) {
                function r() {
                  t.Transport.XHR.apply(this, arguments);
                }
                function s() {}
                (e['xhr-polling'] = r),
                  t.util.inherit(r, t.Transport.XHR),
                  t.util.merge(r, t.Transport.XHR),
                  (r.prototype.name = 'xhr-polling'),
                  (r.prototype.heartbeats = function() {
                    return !1;
                  }),
                  (r.prototype.open = function() {
                    return t.Transport.XHR.prototype.open.call(this), !1;
                  }),
                  (r.prototype.get = function() {
                    if (this.isOpen) {
                      const e = this;
                      (this.xhr = this.request()),
                        n.XDomainRequest && this.xhr instanceof XDomainRequest
                          ? ((this.xhr.onload = function() {
                              (this.onload = s),
                                (this.onerror = s),
                                (e.retryCounter = 1),
                                e.onData(this.responseText),
                                e.get();
                            }),
                            (this.xhr.onerror = function() {
                              e.retryCounter++,
                                !e.retryCounter || e.retryCounter > 3 ? e.onClose() : e.get();
                            }))
                          : (this.xhr.onreadystatechange = function() {
                              this.readyState == 4 &&
                                ((this.onreadystatechange = s),
                                this.status == 200
                                  ? (e.onData(this.responseText), e.get())
                                  : e.onClose());
                            }),
                        this.xhr.send(null);
                    }
                  }),
                  (r.prototype.onClose = function() {
                    if ((t.Transport.XHR.prototype.onClose.call(this), this.xhr)) {
                      this.xhr.onreadystatechange = this.xhr.onload = this.xhr.onerror = s;
                      try {
                        this.xhr.abort();
                      } catch (e) {}
                      this.xhr = null;
                    }
                  }),
                  (r.prototype.ready = function(e, n) {
                    const r = this;
                    t.util.defer(() => {
                      n.call(r);
                    });
                  }),
                  t.transports.push('xhr-polling');
              })(
                void 0 !== io ? io.Transport : module.exports,
                void 0 !== io ? io : module.parent.exports,
                root
              ),
              (__WEBPACK_AMD_DEFINE_ARRAY__ = []),
              (__WEBPACK_AMD_DEFINE_RESULT__ = function() {
                return io;
              }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)),
              void 0 === __WEBPACK_AMD_DEFINE_RESULT__ ||
                (module.exports = __WEBPACK_AMD_DEFINE_RESULT__);
          })();
      }.call(this, __webpack_require__(30), __webpack_require__(188)(module)));
    },
    function(e, t, n) {
      const r = n(0);

      const s = {
        stripmeta: 0,
        blur: 2,
        quality: 3,
        crop: 4,
        rotate: 5,
        thumbnail: 7,
        interlace: 9,
      };

      const o = {
        0: 'stripmeta',
        1: 'type',
        2: 'blur',
        3: 'quality',
        4: 'crop',
        5: 'rotate',
        6: 'pixel',
        7: 'thumbnail',
        8: 'watermark',
        9: 'interlace',
        10: 'tmp',
      };
      function i(e) {
        r.verifyOptions(e, 'type', 'image::ImageOp'),
          r.verifyParamValid('type', e.type, i.validTypes, 'image::ImageOp'),
          r.merge(this, e),
          (this.type = s[e.type]);
      }
      (i.validTypes = Object.keys(s)),
        (i.reverse = function(e) {
          const t = r.copy(e);
          return (t.type = o[t.type]), t;
        }),
        (i.reverseImageOps = function(e) {
          return e.map(e => {
            return i.reverse(e);
          });
        }),
        (e.exports = i);
    },
    function(e, t, n) {
      const r = n(0);

      const s = {
        fromDataURL(e) {
          const t = r.getGlobal();

          let n = void 0;
          n =
            e.split(',')[0].indexOf('base64') >= 0
              ? t.atob(e.split(',')[1])
              : t.decodeURIComponent(e.split(',')[1]);
          for (
            var s = e
                .split(',')[0]
                .split(':')[1]
                .split(';')[0],
              o = new Uint8Array(n.length),
              i = 0;
            i < n.length;
            i++
          )
            o[i] = n.charCodeAt(i);
          return new t.Blob([o], { type: s });
        },
      };
      e.exports = s;
    },
    function(e, t, n) {
      const r = n(24);

      const s = r.getGlobal();

      const o = {};

      const i = s.name || '_parent';

      const a = [];

      const c = [];
      o.addMsgListener = function(e) {
        a.push(e);
      };
      const u = (function() {
        const e = /^([\w]+?:\/\/.*?(?=\/|$))/i;
        return function(t) {
          return (t = t || ''), e.test(t) ? RegExp.$1 : '*';
        };
      })();

      const l = function() {
        const e = unescape(s.name || '').trim();
        if (e && e.indexOf('MSG|') === 0) {
          s.name = '';
          const t = r.string2object(e.replace('MSG|', ''), '|');

          const n = (t.origin || '').toLowerCase();
          (n && n !== '*' && location.href.toLowerCase().indexOf(n) !== 0) ||
            (function(e) {
              for (let t = 0, n = a.length; t < n; t++)
                try {
                  a[t].call(null, e);
                } catch (e) {}
            })({
              data: JSON.parse(t.data || 'null'),
              source: s.frames[t.self] || t.self,
              origin: u(t.ref || document.referrer),
            });
        }
      };

      const m = (function() {
        let e;

        const t = function(e, t) {
          for (let n = 0, r = e.length; n < r; n++) if (e[n] === t) return !0;
          return !1;
        };
        return function() {
          if (c.length) {
            e = [];
            for (var n, r = c.length - 1; r >= 0; r--)
              (n = c[r]), t(e, n.w) || (e.push(n.w), c.splice(r, 1), (n.w.name = n.d));
            e = null;
          }
        };
      })();

      const d = (o.startTimer = (function() {
        let e = !1;
        return function() {
          e || ((e = !0), s.postMessage || (setInterval(m, 100), setInterval(l, 20)));
        };
      })());
      (o.postMessage = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if ((r.fillUndef(t, { origin: '*', source: i }), s.postMessage)) {
          let n = t.data;
          s.FormData || (n = JSON.stringify(n)), e.postMessage(n, t.origin);
        } else {
          if ((d(), r.isObject(t))) {
            const o = {};
            (o.origin = t.origin || ''),
              (o.ref = location.href),
              (o.self = t.source),
              (o.data = JSON.stringify(t.data)),
              (t = `MSG|${r.object2string(o, '|', !0)}`);
          }
          c.unshift({ w: e, d: escape(t) });
        }
      }),
        (e.exports = o);
    },
    function(e, t) {
      e.exports = function e(t, n) {
        let r;

        let s;

        const o = /(^([+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi;

        const i = /(^[ ]*|[ ]*$)/g;

        const a = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/;

        const c = /^0x[0-9a-f]+$/i;

        const u = /^0/;

        const l = function(t) {
          return (e.insensitive && `${t}`.toLowerCase()) || `${t}`;
        };

        const m = l(t).replace(i, '') || '';

        const d = l(n).replace(i, '') || '';

        const p = m
          .replace(o, '\0$1\0')
          .replace(/\0$/, '')
          .replace(/^\0/, '')
          .split('\0');

        const f = d
          .replace(o, '\0$1\0')
          .replace(/\0$/, '')
          .replace(/^\0/, '')
          .split('\0');

        const g = parseInt(m.match(c), 16) || (p.length !== 1 && m.match(a) && Date.parse(m));

        const h = parseInt(d.match(c), 16) || (g && d.match(a) && Date.parse(d)) || null;
        if (h) {
          if (g < h) return -1;
          if (g > h) return 1;
        }
        for (let y = 0, v = Math.max(p.length, f.length); y < v; y++) {
          if (
            ((r = (!(p[y] || '').match(u) && parseFloat(p[y])) || p[y] || 0),
            (s = (!(f[y] || '').match(u) && parseFloat(f[y])) || f[y] || 0),
            isNaN(r) !== isNaN(s))
          )
            return isNaN(r) ? 1 : -1;
          if ((typeof r !== typeof s && ((r += ''), (s += '')), r < s)) return -1;
          if (r > s) return 1;
        }
        return 0;
      };
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
    function(e, t, n) {
      const r = n(71);

      const s = n(0);

      const o = s.notundef;

      const i = { '-1': 'restricted', 0: 'common', 1: 'owner', 2: 'manager' };
      function a(e) {
        o(e.nick) && (this.nick = `${e.nick}`),
          o(e.avatar) && (this.avatar = `${e.avatar}`),
          o(e.custom) && (this.custom = `${e.custom}`);
      }
      (a.reverse = function(e) {
        const t = s.copy(e);
        return (
          o(t.chatroomId) && (t.chatroomId = `${t.chatroomId}`),
          o(t.avatar) && (t.avatar = (0, r.genPrivateUrl)(t.avatar)),
          o(t.type) && (t.type = i[t.type]),
          o(t.level) && (t.level = +t.level),
          o(t.online) && (t.online = +t.online == 1),
          o(t.enterTime) && (t.enterTime = +t.enterTime),
          o(t.guest) && (t.guest = +t.guest == 1),
          o(t.blacked) && (t.blacked = +t.blacked == 1),
          o(t.gaged) && (t.gaged = +t.gaged == 1),
          o(t.valid) && (t.valid = +t.valid == 1),
          o(t.updateTime) && (t.updateTime = +t.updateTime),
          o(t.tempMuted) ? (t.tempMuted = +t.tempMuted == 1) : (t.tempMuted = !1),
          o(t.tempMuteDuration)
            ? (t.tempMuteDuration = +t.tempMuteDuration)
            : (t.tempMuteDuration = 0),
          t.online || delete t.enterTime,
          t.guest && ((t.type = 'guest'), delete t.valid),
          t.type !== 'common' && delete t.level,
          delete t.guest,
          t
        );
      }),
        (a.reverseMembers = function(e) {
          return e.map(e => {
            return a.reverse(e);
          });
        }),
        (a.validTypes = Object.keys(i)),
        (e.exports = a);
    },
    function(e, t, n) {
      const r = n(15);

      const s = n(178);

      const o = n(123);

      const i = n(127);

      const a = n(110);

      const c = n(0);

      const u = n(149);

      const l = n(125);

      const m = n(59);

      const d = n(170);

      const p = n(169);
      e.exports = function(e) {
        c.merge(e, {
          platform: r,
          xhr: s,
          io: o,
          naturalSort: i,
          deepAccess: a,
          util: c,
          support: u,
          blob: l,
          ajax: m,
          LoggerPlugin: d,
          usePlugin: p,
        });
      };
    },
    function(e, t, n) {
      const r = n(2)('iterator');

      let s = !1;
      try {
        const o = [7][r]();
        (o.return = function() {
          s = !0;
        }),
          Array.from(o, () => {
            throw 2;
          });
      } catch (e) {}
      e.exports = function(e, t) {
        if (!t && !s) return !1;
        let n = !1;
        try {
          const o = [7];

          const i = o[r]();
          (i.next = function() {
            return { done: (n = !0) };
          }),
            (o[r] = function() {
              return i;
            }),
            e(o);
        } catch (e) {}
        return n;
      };
    },
    function(e, t, n) {
      const r = n(18);

      const s = n(2)('iterator');

      const o = Array.prototype;
      e.exports = function(e) {
        return void 0 !== e && (r.Array === e || o[s] === e);
      };
    },
    function(e, t, n) {
      const r = n(9);
      e.exports = function(e, t, n, s) {
        try {
          return s ? t(r(n)[0], n[1]) : t(n);
        } catch (t) {
          const o = e.return;
          throw (void 0 !== o && r(o.call(e)), t);
        }
      };
    },
    function(e, t, n) {
      const r = n(0);

      const s = n(122);

      const o = r.merge({}, s.idMap, {
        auth: { id: 2, login: 3, kicked: 5, logout: 6, multiPortLogin: 7, kick: 8 },
        user: {
          id: 3,
          updatePushToken: 1,
          appBackground: 2,
          markInBlacklist: 3,
          getBlacklist: 4,
          markInMutelist: 5,
          getMutelist: 6,
          getRelations: 8,
          getUsers: 7,
          updateMyInfo: 10,
          updateDonnop: 15,
          syncMyInfo: 109,
          syncUpdateMyInfo: 110,
        },
        notify: {
          id: 4,
          markRead: 3,
          syncOfflineMsgs: 4,
          batchMarkRead: 5,
          syncOfflineSysMsgs: 6,
          syncRoamingMsgs: 9,
          syncMsgReceipts: 12,
          syncRobots: 15,
          syncBroadcastMsgs: 16,
        },
        sync: { id: 5, sync: 1, syncTeamMembers: 2 },
        msg: {
          id: 7,
          sendMsg: 1,
          msg: 2,
          sysMsg: 3,
          getHistoryMsgs: 6,
          sendCustomSysMsg: 7,
          searchHistoryMsgs: 8,
          deleteSessions: 9,
          getSessions: 10,
          syncSendMsg: 101,
          sendMsgReceipt: 11,
          msgReceipt: 12,
          deleteMsg: 13,
          msgDeleted: 14,
          markSessionAck: 16,
          broadcastMsg: 17,
        },
        team: {
          id: 8,
          createTeam: 1,
          sendTeamMsg: 2,
          teamMsg: 3,
          teamMsgs: 4,
          addTeamMembers: 5,
          removeTeamMembers: 6,
          updateTeam: 7,
          leaveTeam: 8,
          getTeam: 9,
          getTeams: 10,
          getTeamMembers: 11,
          dismissTeam: 12,
          applyTeam: 13,
          passTeamApply: 14,
          rejectTeamApply: 15,
          addTeamManagers: 16,
          removeTeamManagers: 17,
          transferTeam: 18,
          updateInfoInTeam: 19,
          updateNickInTeam: 20,
          acceptTeamInvite: 21,
          rejectTeamInvite: 22,
          getTeamHistoryMsgs: 23,
          searchTeamHistoryMsgs: 24,
          updateMuteStateInTeam: 25,
          getMyTeamMembers: 26,
          getMutedTeamMembers: 27,
          sendTeamMsgReceipt: 28,
          getTeamMsgReads: 29,
          getTeamMsgReadAccounts: 30,
          notifyTeamMsgReads: 31,
          muteTeamAll: 32,
          syncMyTeamMembers: 126,
          syncTeams: 109,
          syncTeamMembers: 111,
          syncCreateTeam: 101,
          syncSendTeamMsg: 102,
          syncUpdateTeamMember: 119,
        },
        friend: {
          id: 12,
          friendRequest: 1,
          syncFriendRequest: 101,
          deleteFriend: 2,
          syncDeleteFriend: 102,
          updateFriend: 3,
          syncUpdateFriend: 103,
          getFriends: 4,
        },
        chatroom: { id: 13, getChatroomAddress: 1 },
        filter: {
          id: 101,
          sendFilterMsg: 1,
          filterMsg: 2,
          filterSysMsg: 3,
          sendFilterCustomSysMsg: 7,
        },
        eventService: {
          id: 14,
          publishEvent: 1,
          pushEvent: 2,
          subscribeEvent: 3,
          unSubscribeEventsByAccounts: 4,
          unSubscribeEventsByType: 5,
          querySubscribeEventsByAccounts: 6,
          querySubscribeEventsByType: 7,
          pushEvents: 9,
        },
      });

      const i = r.merge({}, s.cmdConfig, {
        login: {
          sid: o.auth.id,
          cid: o.auth.login,
          params: [{ type: 'Property', name: 'login' }],
        },
        logout: { sid: o.auth.id, cid: o.auth.logout },
        kick: {
          sid: o.auth.id,
          cid: o.auth.kick,
          params: [{ type: 'StrArray', name: 'deviceIds' }],
        },
        updatePushToken: {
          sid: o.user.id,
          cid: o.user.updatePushToken,
          params: [
            { type: 'String', name: 'tokenName' },
            { type: 'String', name: 'token' },
            { type: 'int', name: 'pushkit' },
          ],
        },
        appBackground: {
          sid: o.user.id,
          cid: o.user.appBackground,
          params: [{ type: 'bool', name: 'isBackground' }, { type: 'Int', name: 'badge' }],
        },
        markInBlacklist: {
          sid: o.user.id,
          cid: o.user.markInBlacklist,
          params: [{ type: 'String', name: 'account' }, { type: 'bool', name: 'isAdd' }],
        },
        getBlacklist: {
          sid: o.user.id,
          cid: o.user.getBlacklist,
          params: [{ type: 'long', name: 'time' }],
        },
        markInMutelist: {
          sid: o.user.id,
          cid: o.user.markInMutelist,
          params: [{ type: 'String', name: 'account' }, { type: 'bool', name: 'isAdd' }],
        },
        getMutelist: {
          sid: o.user.id,
          cid: o.user.getMutelist,
          params: [{ type: 'long', name: 'time' }],
        },
        getRelations: {
          sid: o.user.id,
          cid: o.user.getRelations,
          params: [{ type: 'long', name: 'timetag' }],
        },
        getUsers: {
          sid: o.user.id,
          cid: o.user.getUsers,
          params: [{ type: 'StrArray', name: 'accounts' }],
        },
        updateMyInfo: {
          sid: o.user.id,
          cid: o.user.updateMyInfo,
          params: [{ type: 'Property', name: 'user' }],
        },
        updateDonnop: {
          sid: o.user.id,
          cid: o.user.updateDonnop,
          params: [{ type: 'Property', name: 'donnop' }],
        },
        markRead: {
          sid: o.notify.id,
          cid: o.notify.markRead,
          params: [{ type: 'long', name: 'id' }, { type: 'ph', name: 'ph' }],
        },
        batchMarkRead: {
          sid: o.notify.id,
          cid: o.notify.batchMarkRead,
          params: [
            { type: 'byte', name: 'sid' },
            { type: 'byte', name: 'cid' },
            { type: 'LongArray', name: 'ids' },
          ],
        },
        sync: { sid: o.sync.id, cid: o.sync.sync, params: [{ type: 'Property', name: 'sync' }] },
        syncTeamMembers: {
          sid: o.sync.id,
          cid: o.sync.syncTeamMembers,
          params: [{ type: 'LongLongMap', name: 'sync' }],
        },
        sendMsg: {
          sid: o.msg.id,
          cid: o.msg.sendMsg,
          params: [{ type: 'Property', name: 'msg' }],
        },
        getHistoryMsgs: {
          sid: o.msg.id,
          cid: o.msg.getHistoryMsgs,
          params: [
            { type: 'String', name: 'to' },
            { type: 'long', name: 'beginTime' },
            { type: 'long', name: 'endTime' },
            { type: 'long', name: 'lastMsgId' },
            { type: 'int', name: 'limit' },
            { type: 'bool', name: 'reverse' },
            { type: 'LongArray', name: 'msgTypes' },
          ],
        },
        sendCustomSysMsg: {
          sid: o.msg.id,
          cid: o.msg.sendCustomSysMsg,
          params: [{ type: 'Property', name: 'sysMsg' }],
        },
        searchHistoryMsgs: {
          sid: o.msg.id,
          cid: o.msg.searchHistoryMsgs,
          params: [
            { type: 'String', name: 'to' },
            { type: 'long', name: 'beginTime' },
            { type: 'long', name: 'endTime' },
            { type: 'String', name: 'keyword' },
            { type: 'int', name: 'limit' },
            { type: 'bool', name: 'reverse' },
          ],
        },
        getSessions: {
          sid: o.msg.id,
          cid: o.msg.getSessions,
          params: [{ type: 'long', name: 'time' }],
        },
        deleteSessions: {
          sid: o.msg.id,
          cid: o.msg.deleteSessions,
          params: [{ type: 'StrArray', name: 'sessions' }],
        },
        sendMsgReceipt: {
          sid: o.msg.id,
          cid: o.msg.sendMsgReceipt,
          params: [{ type: 'Property', name: 'msgReceipt' }],
        },
        deleteMsg: {
          sid: o.msg.id,
          cid: o.msg.deleteMsg,
          params: [{ type: 'Property', name: 'sysMsg' }],
        },
        markSessionAck: {
          sid: o.msg.id,
          cid: o.msg.markSessionAck,
          params: [
            { type: 'byte', name: 'scene' },
            { type: 'String', name: 'to' },
            { type: 'long', name: 'timetag' },
          ],
        },
        createTeam: {
          sid: o.team.id,
          cid: o.team.createTeam,
          params: [
            { type: 'Property', name: 'team' },
            { type: 'StrArray', name: 'accounts' },
            { type: 'String', name: 'ps' },
          ],
        },
        sendTeamMsg: {
          sid: o.team.id,
          cid: o.team.sendTeamMsg,
          params: [{ type: 'Property', name: 'msg' }],
        },
        addTeamMembers: {
          sid: o.team.id,
          cid: o.team.addTeamMembers,
          params: [
            { type: 'long', name: 'teamId' },
            { type: 'StrArray', name: 'accounts' },
            { type: 'String', name: 'ps' },
          ],
        },
        removeTeamMembers: {
          sid: o.team.id,
          cid: o.team.removeTeamMembers,
          params: [{ type: 'long', name: 'teamId' }, { type: 'StrArray', name: 'accounts' }],
        },
        updateTeam: {
          sid: o.team.id,
          cid: o.team.updateTeam,
          params: [{ type: 'Property', name: 'team' }],
        },
        leaveTeam: {
          sid: o.team.id,
          cid: o.team.leaveTeam,
          params: [{ type: 'long', name: 'teamId' }],
        },
        getTeam: {
          sid: o.team.id,
          cid: o.team.getTeam,
          params: [{ type: 'long', name: 'teamId' }],
        },
        getTeams: {
          sid: o.team.id,
          cid: o.team.getTeams,
          params: [{ type: 'long', name: 'timetag' }],
        },
        getTeamMembers: {
          sid: o.team.id,
          cid: o.team.getTeamMembers,
          params: [{ type: 'long', name: 'teamId' }, { type: 'long', name: 'timetag' }],
        },
        dismissTeam: {
          sid: o.team.id,
          cid: o.team.dismissTeam,
          params: [{ type: 'long', name: 'teamId' }],
        },
        applyTeam: {
          sid: o.team.id,
          cid: o.team.applyTeam,
          params: [{ type: 'long', name: 'teamId' }, { type: 'String', name: 'ps' }],
        },
        passTeamApply: {
          sid: o.team.id,
          cid: o.team.passTeamApply,
          params: [{ type: 'long', name: 'teamId' }, { type: 'String', name: 'from' }],
        },
        rejectTeamApply: {
          sid: o.team.id,
          cid: o.team.rejectTeamApply,
          params: [
            { type: 'long', name: 'teamId' },
            { type: 'String', name: 'from' },
            { type: 'String', name: 'ps' },
          ],
        },
        addTeamManagers: {
          sid: o.team.id,
          cid: o.team.addTeamManagers,
          params: [{ type: 'long', name: 'teamId' }, { type: 'StrArray', name: 'accounts' }],
        },
        removeTeamManagers: {
          sid: o.team.id,
          cid: o.team.removeTeamManagers,
          params: [{ type: 'long', name: 'teamId' }, { type: 'StrArray', name: 'accounts' }],
        },
        transferTeam: {
          sid: o.team.id,
          cid: o.team.transferTeam,
          params: [
            { type: 'long', name: 'teamId' },
            { type: 'String', name: 'account' },
            { type: 'bool', name: 'leave' },
          ],
        },
        updateInfoInTeam: {
          sid: o.team.id,
          cid: o.team.updateInfoInTeam,
          params: [{ type: 'Property', name: 'teamMember' }],
        },
        updateNickInTeam: {
          sid: o.team.id,
          cid: o.team.updateNickInTeam,
          params: [{ type: 'Property', name: 'teamMember' }],
        },
        acceptTeamInvite: {
          sid: o.team.id,
          cid: o.team.acceptTeamInvite,
          params: [{ type: 'long', name: 'teamId' }, { type: 'String', name: 'from' }],
        },
        rejectTeamInvite: {
          sid: o.team.id,
          cid: o.team.rejectTeamInvite,
          params: [
            { type: 'long', name: 'teamId' },
            { type: 'String', name: 'from' },
            { type: 'String', name: 'ps' },
          ],
        },
        getTeamHistoryMsgs: {
          sid: o.team.id,
          cid: o.team.getTeamHistoryMsgs,
          params: [
            { type: 'long', name: 'to' },
            { type: 'long', name: 'beginTime' },
            { type: 'long', name: 'endTime' },
            { type: 'long', name: 'lastMsgId' },
            { type: 'int', name: 'limit' },
            { type: 'bool', name: 'reverse' },
            { type: 'LongArray', name: 'msgTypes' },
          ],
        },
        searchTeamHistoryMsgs: {
          sid: o.team.id,
          cid: o.team.searchTeamHistoryMsgs,
          params: [
            { type: 'long', name: 'to' },
            { type: 'long', name: 'beginTime' },
            { type: 'long', name: 'endTime' },
            { type: 'String', name: 'keyword' },
            { type: 'int', name: 'limit' },
            { type: 'bool', name: 'reverse' },
          ],
        },
        updateMuteStateInTeam: {
          sid: o.team.id,
          cid: o.team.updateMuteStateInTeam,
          params: [
            { type: 'long', name: 'teamId' },
            { type: 'String', name: 'account' },
            { type: 'int', name: 'mute' },
          ],
        },
        getMyTeamMembers: {
          sid: o.team.id,
          cid: o.team.getMyTeamMembers,
          params: [{ type: 'LongArray', name: 'teamIds' }],
        },
        getMutedTeamMembers: {
          sid: o.team.id,
          cid: o.team.getMutedTeamMembers,
          params: [{ type: 'long', name: 'teamId' }],
        },
        sendTeamMsgReceipt: {
          sid: o.team.id,
          cid: o.team.sendTeamMsgReceipt,
          params: [{ type: 'PropertyArray', name: 'teamMsgReceipts', entity: 'teamMsgReceipt' }],
        },
        getTeamMsgReads: {
          sid: o.team.id,
          cid: o.team.getTeamMsgReads,
          params: [{ type: 'PropertyArray', name: 'teamMsgReceipts', entity: 'teamMsgReceipt' }],
        },
        getTeamMsgReadAccounts: {
          sid: o.team.id,
          cid: o.team.getTeamMsgReadAccounts,
          params: [{ type: 'Property', name: 'teamMsgReceipt' }],
        },
        muteTeamAll: {
          sid: o.team.id,
          cid: o.team.muteTeamAll,
          params: [{ type: 'long', name: 'teamId' }, { type: 'int', name: 'muteType' }],
        },
        friendRequest: {
          sid: o.friend.id,
          cid: o.friend.friendRequest,
          params: [
            { type: 'String', name: 'account' },
            { type: 'byte', name: 'type' },
            { type: 'String', name: 'ps' },
          ],
        },
        deleteFriend: {
          sid: o.friend.id,
          cid: o.friend.deleteFriend,
          params: [{ type: 'String', name: 'account' }],
        },
        updateFriend: {
          sid: o.friend.id,
          cid: o.friend.updateFriend,
          params: [{ type: 'Property', name: 'friend' }],
        },
        getFriends: {
          sid: o.friend.id,
          cid: o.friend.getFriends,
          params: [{ type: 'long', name: 'timetag' }],
        },
        getChatroomAddress: {
          sid: o.chatroom.id,
          cid: o.chatroom.getChatroomAddress,
          params: [{ type: 'long', name: 'chatroomId' }, { type: 'bool', name: 'isWeixinApp' }],
        },
        sendFilterMsg: {
          sid: o.filter.id,
          cid: o.filter.sendFilterMsg,
          params: [{ type: 'Property', name: 'msg' }],
        },
        sendFilterCustomSysMsg: {
          sid: o.filter.id,
          cid: o.filter.sendFilterCustomSysMsg,
          params: [{ type: 'Property', name: 'sysMsg' }],
        },
        publishEvent: {
          sid: o.eventService.id,
          cid: o.eventService.publishEvent,
          params: [{ type: 'Property', name: 'msgEvent' }],
        },
        pushEvent: { sid: o.eventService.id, cid: o.eventService.pushEvent },
        subscribeEvent: {
          sid: o.eventService.id,
          cid: o.eventService.subscribeEvent,
          params: [
            { type: 'Property', name: 'msgEventSubscribe' },
            { type: 'StrArray', name: 'accounts' },
          ],
        },
        unSubscribeEventsByAccounts: {
          sid: o.eventService.id,
          cid: o.eventService.unSubscribeEventsByAccounts,
          params: [
            { type: 'Property', name: 'msgEventSubscribe' },
            { type: 'StrArray', name: 'accounts' },
          ],
        },
        unSubscribeEventsByType: {
          sid: o.eventService.id,
          cid: o.eventService.unSubscribeEventsByType,
          params: [{ type: 'Property', name: 'msgEventSubscribe' }],
        },
        querySubscribeEventsByAccounts: {
          sid: o.eventService.id,
          cid: o.eventService.querySubscribeEventsByAccounts,
          params: [
            { type: 'Property', name: 'msgEventSubscribe' },
            { type: 'StrArray', name: 'accounts' },
          ],
        },
        querySubscribeEventsByType: {
          sid: o.eventService.id,
          cid: o.eventService.querySubscribeEventsByType,
          params: [{ type: 'Property', name: 'msgEventSubscribe' }],
        },
        pushEvents: { sid: o.eventService.id, cid: o.eventService.pushEvents },
      });

      const a = r.merge({}, s.packetConfig, {
        '2_3': {
          service: 'auth',
          cmd: 'login',
          response: [
            { type: 'Property', name: 'loginRes' },
            { type: 'PropertyArray', name: 'loginPorts', entity: 'loginPort' },
            { type: 'Property', name: 'aosPushInfo' },
          ],
        },
        '2_5': {
          service: 'auth',
          cmd: 'kicked',
          response: [{ type: 'Number', name: 'from' }, { type: 'Number', name: 'reason' }],
        },
        '2_6': { service: 'auth', cmd: 'logout' },
        '2_7': {
          service: 'auth',
          cmd: 'multiPortLogin',
          response: [
            { type: 'Number', name: 'state' },
            { type: 'PropertyArray', name: 'loginPorts', entity: 'loginPort' },
          ],
        },
        '2_8': {
          service: 'auth',
          cmd: 'kick',
          response: [{ type: 'StrArray', name: 'deviceIds' }],
        },
        '3_1': { service: 'user', cmd: 'updatePushToken' },
        '3_2': { service: 'user', cmd: 'appBackground' },
        '3_3': { service: 'user', cmd: 'markInBlacklist' },
        '3_103': {
          service: 'user',
          cmd: 'syncMarkInBlacklist',
          response: [{ type: 'String', name: 'account' }, { type: 'Boolean', name: 'isAdd' }],
        },
        '3_4': {
          service: 'user',
          cmd: 'getBlacklist',
          response: [{ type: 'StrArray', name: 'blacklist' }],
        },
        '3_5': { service: 'user', cmd: 'markInMutelist' },
        '3_105': {
          service: 'user',
          cmd: 'syncMarkInMutelist',
          response: [{ type: 'String', name: 'account' }, { type: 'Boolean', name: 'isAdd' }],
        },
        '3_6': {
          service: 'user',
          cmd: 'getMutelist',
          response: [{ type: 'StrArray', name: 'mutelist' }],
        },
        '3_8': {
          service: 'user',
          cmd: 'getRelations',
          response: [
            { type: 'PropertyArray', name: 'specialRelations', entity: 'specialRelation' },
            { type: 'Number', name: 'timetag' },
          ],
        },
        '3_7': {
          service: 'user',
          cmd: 'getUsers',
          response: [{ type: 'PropertyArray', name: 'users', entity: 'user' }],
        },
        '3_10': {
          service: 'user',
          cmd: 'updateMyInfo',
          response: [{ type: 'Number', name: 'timetag' }],
        },
        '3_15': {
          service: 'user',
          cmd: 'updateDonnop',
          response: [{ type: 'Number', name: 'timetag' }],
        },
        '3_115': {
          service: 'user',
          cmd: 'syncUpdateDonnop',
          response: [{ type: 'Property', name: 'donnop' }, { type: 'Number', name: 'timetag' }],
        },
        '3_109': {
          service: 'user',
          cmd: 'syncMyInfo',
          response: [{ type: 'Property', name: 'user' }, { type: 'Number', name: 'timetag' }],
        },
        '3_110': {
          service: 'user',
          cmd: 'syncUpdateMyInfo',
          response: [{ type: 'Property', name: 'user' }],
        },
        '4_1': { service: 'notify' },
        '4_2': { service: 'notify' },
        '4_3': { service: 'notify', cmd: 'markRead' },
        '4_4': {
          service: 'notify',
          cmd: 'syncOfflineMsgs',
          response: [{ type: 'PropertyArray', name: 'msgs', entity: 'msg' }],
        },
        '4_5': { service: 'notify', cmd: 'batchMarkRead' },
        '4_6': {
          service: 'notify',
          cmd: 'syncOfflineSysMsgs',
          response: [{ type: 'PropertyArray', name: 'sysMsgs', entity: 'sysMsg' }],
        },
        '4_9': {
          service: 'notify',
          cmd: 'syncRoamingMsgs',
          response: [{ type: 'PropertyArray', name: 'msgs', entity: 'msg' }],
        },
        '4_12': {
          service: 'notify',
          cmd: 'syncMsgReceipts',
          response: [
            { type: 'PropertyArray', name: 'msgReceipts', entity: 'msgReceipt' },
            { type: 'Number', name: 'timetag' },
          ],
        },
        '4_13': {
          service: 'notify',
          cmd: 'syncDonnop',
          response: [{ type: 'Property', name: 'donnop' }, { type: 'Number', name: 'timetag' }],
        },
        '4_14': {
          service: 'notify',
          cmd: 'syncSessionAck',
          response: [
            { type: 'StrLongMap', name: 'p2p' },
            { type: 'LongLongMap', name: 'team' },
            { type: 'Number', name: 'timetag' },
          ],
        },
        '4_15': {
          service: 'notify',
          cmd: 'syncRobots',
          response: [{ type: 'PropertyArray', name: 'robots', entity: 'robot' }],
        },
        '4_16': {
          service: 'notify',
          cmd: 'syncBroadcastMsgs',
          response: [{ type: 'PropertyArray', name: 'broadcastMsgs', entity: 'broadcastMsg' }],
        },
        '4_100': {
          service: 'notify',
          cmd: 'syncOfflineFilterMsgs',
          response: [{ type: 'PropertyArray', name: 'msgs', entity: 'msg' }],
        },
        '4_101': {
          service: 'notify',
          cmd: 'syncOfflineFilterSysMsgs',
          response: [{ type: 'PropertyArray', name: 'sysMsgs', entity: 'sysMsg' }],
        },
        '5_1': {
          service: 'sync',
          cmd: 'syncDone',
          response: [{ type: 'Number', name: 'timetag' }],
        },
        '5_2': {
          service: 'sync',
          cmd: 'syncTeamMembersDone',
          response: [{ type: 'Number', name: 'timetag' }],
        },
        '7_1': {
          service: 'msg',
          cmd: 'sendMsg',
          response: [{ type: 'Property', name: 'msg' }],
          trivialErrorCodes: [7101],
        },
        '7_2': { service: 'msg', cmd: 'msg', response: [{ type: 'Property', name: 'msg' }] },
        '7_3': {
          service: 'msg',
          cmd: 'sysMsg',
          response: [{ type: 'Property', name: 'sysMsg' }],
        },
        '7_6': {
          service: 'msg',
          cmd: 'getHistoryMsgs',
          response: [{ type: 'PropertyArray', name: 'msgs', entity: 'msg' }],
        },
        '7_7': { service: 'msg', cmd: 'sendCustomSysMsg', trivialErrorCodes: [7101] },
        '7_8': {
          service: 'msg',
          cmd: 'searchHistoryMsgs',
          response: [{ type: 'PropertyArray', name: 'msgs', entity: 'msg' }],
        },
        '7_9': { service: 'msg', cmd: 'deleteSessions' },
        '7_10': {
          service: 'msg',
          cmd: 'getSessions',
          response: [{ type: 'StrArray', name: 'sessions' }],
        },
        '7_101': {
          service: 'msg',
          cmd: 'syncSendMsg',
          response: [{ type: 'Property', name: 'msg' }],
        },
        '7_11': {
          service: 'msg',
          cmd: 'sendMsgReceipt',
          response: [{ type: 'Property', name: 'msgReceipt' }],
        },
        '7_12': {
          service: 'msg',
          cmd: 'msgReceipt',
          response: [{ type: 'Property', name: 'msgReceipt' }],
        },
        '7_13': { service: 'msg', cmd: 'onDeleteMsg' },
        '7_14': {
          service: 'msg',
          cmd: 'onMsgDeleted',
          response: [{ type: 'Property', name: 'sysMsg' }],
        },
        '7_15': {
          service: 'msg',
          cmd: 'onDeleteMsgOfflineRoaming',
          response: [
            { type: 'PropertyArray', name: 'sysMsgs', entity: 'sysMsg' },
            { type: 'Number', name: 'timetag' },
            { type: 'Number', name: 'type' },
          ],
        },
        '7_16': { service: 'msg', cmd: 'onMarkSessionAck' },
        '7_17': {
          service: 'msg',
          cmd: 'broadcastMsg',
          response: [{ type: 'Property', name: 'broadcastMsg' }],
        },
        '7_116': {
          service: 'msg',
          cmd: 'syncMarkSessionAck',
          response: [
            { type: 'Number', name: 'scene' },
            { type: 'String', name: 'to' },
            { type: 'Number', name: 'timetag' },
          ],
        },
        '8_1': {
          service: 'team',
          cmd: 'createTeam',
          response: [{ type: 'Property', name: 'team' }],
        },
        '8_2': {
          service: 'team',
          cmd: 'sendTeamMsg',
          response: [{ type: 'Property', name: 'msg' }],
        },
        '8_3': { service: 'team', cmd: 'teamMsg', response: [{ type: 'Property', name: 'msg' }] },
        '8_4': {
          service: 'team',
          cmd: 'teamMsgs',
          response: [{ type: 'PropertyArray', name: 'msgs', entity: 'msg' }],
        },
        '8_5': { service: 'team', cmd: 'addTeamMembers' },
        '8_6': { service: 'team', cmd: 'removeTeamMembers' },
        '8_7': {
          service: 'team',
          cmd: 'updateTeam',
          response: [{ type: 'Number', name: 'id' }, { type: 'Number', name: 'time' }],
        },
        '8_8': { service: 'team', cmd: 'leaveTeam' },
        '8_9': {
          service: 'team',
          cmd: 'getTeam',
          response: [{ type: 'Property', name: 'team' }],
        },
        '8_10': {
          service: 'team',
          cmd: 'getTeams',
          response: [
            { type: 'PropertyArray', name: 'teams', entity: 'team' },
            { type: 'Number', name: 'timetag' },
          ],
        },
        '8_11': {
          service: 'team',
          cmd: 'getTeamMembers',
          response: [
            { type: 'Number', name: 'teamId' },
            { type: 'PropertyArray', name: 'members', entity: 'teamMember' },
            { type: 'Number', name: 'timetag' },
          ],
        },
        '8_12': { service: 'team', cmd: 'dismissTeam' },
        '8_13': {
          service: 'team',
          cmd: 'applyTeam',
          response: [{ type: 'Property', name: 'team' }],
        },
        '8_14': { service: 'team', cmd: 'passTeamApply' },
        '8_15': { service: 'team', cmd: 'rejectTeamApply' },
        '8_16': { service: 'team', cmd: 'addTeamManagers' },
        '8_17': { service: 'team', cmd: 'removeTeamManagers' },
        '8_18': { service: 'team', cmd: 'transferTeam' },
        '8_19': { service: 'team', cmd: 'updateInfoInTeam' },
        '8_20': { service: 'team', cmd: 'updateNickInTeam' },
        '8_21': {
          service: 'team',
          cmd: 'acceptTeamInvite',
          response: [{ type: 'Property', name: 'team' }],
        },
        '8_22': { service: 'team', cmd: 'rejectTeamInvite' },
        '8_23': {
          service: 'team',
          cmd: 'getTeamHistoryMsgs',
          response: [{ type: 'PropertyArray', name: 'msgs', entity: 'msg' }],
        },
        '8_24': {
          service: 'team',
          cmd: 'searchTeamHistoryMsgs',
          response: [{ type: 'PropertyArray', name: 'msgs', entity: 'msg' }],
        },
        '8_25': { service: 'team', cmd: 'updateMuteStateInTeam' },
        '8_26': {
          service: 'team',
          cmd: 'getMyTeamMembers',
          response: [{ type: 'PropertyArray', name: 'teamMembers', entity: 'teamMember' }],
        },
        '8_27': {
          service: 'team',
          cmd: 'getMutedTeamMembers',
          response: [
            { type: 'Number', name: 'teamId' },
            { type: 'PropertyArray', name: 'teamMembers', entity: 'teamMember' },
          ],
        },
        '8_28': {
          service: 'team',
          cmd: 'sendTeamMsgReceipt',
          response: [{ type: 'PropertyArray', name: 'teamMsgReceipts', entity: 'teamMsgReceipt' }],
        },
        '8_29': {
          service: 'team',
          cmd: 'getTeamMsgReads',
          response: [{ type: 'PropertyArray', name: 'teamMsgReceipts', entity: 'teamMsgReceipt' }],
        },
        '8_30': {
          service: 'team',
          cmd: 'getTeamMsgReadAccounts',
          response: [
            { type: 'String', name: 'idClient' },
            { type: 'StrArray', name: 'readAccounts' },
            { type: 'StrArray', name: 'unreadAccounts' },
          ],
        },
        '8_31': {
          service: 'team',
          cmd: 'notifyTeamMsgReads',
          response: [{ type: 'PropertyArray', name: 'teamMsgReceipts', entity: 'teamMsgReceipt' }],
        },
        '8_32': { service: 'team', cmd: 'muteTeamAll', response: [] },
        '8_126': {
          service: 'team',
          cmd: 'syncMyTeamMembers',
          response: [
            { type: 'PropertyArray', name: 'teamMembers', entity: 'teamMember' },
            { type: 'Number', name: 'timetag' },
          ],
        },
        '8_109': {
          service: 'team',
          cmd: 'syncTeams',
          response: [
            { type: 'Number', name: 'timetag' },
            { type: 'PropertyArray', name: 'teams', entity: 'team' },
          ],
        },
        '8_111': {
          service: 'team',
          cmd: 'syncTeamMembers',
          response: [
            { type: 'Number', name: 'teamId' },
            { type: 'PropertyArray', name: 'members', entity: 'teamMember' },
            { type: 'Number', name: 'timetag' },
          ],
        },
        '8_101': {
          service: 'team',
          cmd: 'syncCreateTeam',
          response: [{ type: 'Property', name: 'team' }],
        },
        '8_102': {
          service: 'team',
          cmd: 'syncSendTeamMsg',
          response: [{ type: 'Property', name: 'msg' }],
        },
        '8_119': {
          service: 'team',
          cmd: 'syncUpdateTeamMember',
          response: [{ type: 'Property', name: 'teamMember' }],
        },
        '12_1': { service: 'friend', cmd: 'friendRequest' },
        '12_101': {
          service: 'friend',
          cmd: 'syncFriendRequest',
          response: [
            { type: 'String', name: 'account' },
            { type: 'Number', name: 'type' },
            { type: 'String', name: 'ps' },
          ],
        },
        '12_2': { service: 'friend', cmd: 'deleteFriend' },
        '12_102': {
          service: 'friend',
          cmd: 'syncDeleteFriend',
          response: [{ type: 'String', name: 'account' }],
        },
        '12_3': { service: 'friend', cmd: 'updateFriend' },
        '12_103': {
          service: 'friend',
          cmd: 'syncUpdateFriend',
          response: [{ type: 'Property', name: 'friend' }],
        },
        '12_4': {
          service: 'friend',
          cmd: 'getFriends',
          response: [
            { type: 'PropertyArray', name: 'friends', entity: 'friend' },
            { type: 'Number', name: 'timetag' },
          ],
        },
        '12_5': {
          service: 'friend',
          cmd: 'syncFriends',
          response: [
            { type: 'PropertyArray', name: 'friends', entity: 'friend' },
            { type: 'Number', name: 'timetag' },
          ],
        },
        '12_6': {
          service: 'friend',
          cmd: 'syncFriendUsers',
          response: [
            { type: 'PropertyArray', name: 'users', entity: 'user' },
            { type: 'Number', name: 'timetag' },
          ],
        },
        '13_1': {
          service: 'chatroom',
          cmd: 'getChatroomAddress',
          response: [{ type: 'StrArray', name: 'address' }],
        },
        '14_1': {
          service: 'eventService',
          cmd: 'publishEvent',
          response: [{ type: 'Property', name: 'msgEvent' }],
        },
        '14_2': {
          service: 'eventService',
          cmd: 'pushEvent',
          response: [{ type: 'Property', name: 'msgEvent' }],
        },
        '14_3': {
          service: 'eventService',
          cmd: 'subscribeEvent',
          response: [{ type: 'StrArray', name: 'accounts' }],
        },
        '14_4': {
          service: 'eventService',
          cmd: 'unSubscribeEventsByAccounts',
          response: [{ type: 'StrArray', name: 'accounts' }],
        },
        '14_5': { service: 'eventService', cmd: 'unSubscribeEventsByType' },
        '14_6': {
          service: 'eventService',
          cmd: 'querySubscribeEventsByAccounts',
          response: [
            { type: 'PropertyArray', name: 'msgEventSubscribes', entity: 'msgEventSubscribe' },
          ],
        },
        '14_7': {
          service: 'eventService',
          cmd: 'querySubscribeEventsByType',
          response: [
            { type: 'PropertyArray', name: 'msgEventSubscribes', entity: 'msgEventSubscribe' },
          ],
        },
        '14_9': {
          service: 'eventService',
          cmd: 'pushEvents',
          response: [{ type: 'PropertyArray', name: 'msgEvents', entity: 'msgEvent' }],
        },
        '101_1': {
          service: 'filter',
          cmd: 'sendFilterMsg',
          response: [{ type: 'Property', name: 'msg' }],
        },
        '101_2': {
          service: 'filter',
          cmd: 'filterMsg',
          response: [{ type: 'Property', name: 'msg' }],
        },
        '101_3': {
          service: 'filter',
          cmd: 'filterSysMsg',
          response: [{ type: 'Property', name: 'sysMsg' }],
        },
        '101_7': { service: 'filter', cmd: 'sendFilterCustomSysMsg' },
      });
      e.exports = { idMap: o, cmdConfig: i, packetConfig: a };
    },
    function(e, t, n) {
      const r = n(0).notundef;
      function s(e) {
        r(e.shouldPushNotificationWhenPCOnline) &&
          (this.open = e.shouldPushNotificationWhenPCOnline ? 2 : 1);
      }
      (s.getDefaultConfig = function() {
        return { shouldPushNotificationWhenPCOnline: !0 };
      }),
        (s.reverse = function(e) {
          return { shouldPushNotificationWhenPCOnline: +e.open != 1 };
        }),
        (e.exports = s);
    },
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
    function(e, t, n) {
      var r = {
        set(e, t, n) {
          (r[e] = t), n && (n.support = t);
        },
      };
      e.exports = r;
    },
    function(e, t, n) {
      n(208).polyfill(), (n(4).isBrowser = !0);
    },
    ,
    ,
    ,
    function(e, t, n) {
      const r = n(43);
      function s() {}
      s.typeMap = {
        text: 0,
        image: 1,
        audio: 2,
        video: 3,
        geo: 4,
        notification: 5,
        file: 6,
        tip: 10,
        robot: 11,
        custom: 100,
      };
      const o = (s.typeReverseMap = {
        0: 'text',
        1: 'image',
        2: 'audio',
        3: 'video',
        4: 'geo',
        5: 'notification',
        6: 'file',
        10: 'tip',
        11: 'robot',
        100: 'custom',
      });
      (s.validTypes = Object.keys(s.typeMap)),
        (s.setFlow = function(e, t) {
          let n = t === e.from;
          n && t === e.to && (n = r.deviceId === e.fromDeviceId),
            (e.flow = n ? 'out' : 'in'),
            e.type === 'robot' && e.content && e.content.msgOut && (e.flow = 'in');
        }),
        (s.getType = function(e) {
          const t = e.type;
          return o[t] || t;
        }),
        (e.exports = s);
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
    function(e, t, n) {
      const r = n(0);

      const s = r.notundef;

      const o = r.undef;
      function i(e) {
        s(e.name) && (this.name = `${e.name}`),
          s(e.announcement) && (this.announcement = `${e.announcement}`),
          s(e.broadcastUrl) && (this.broadcastUrl = `${e.broadcastUrl}`),
          s(e.custom) && (this.custom = `${e.custom}`),
          s(e.queuelevel) && (this.queuelevel = parseInt(e.queuelevel));
      }
      (i.reverse = function(e) {
        const t = r.copy(e);
        return (
          o(t.announcement) && (t.announcement = ''),
          o(t.broadcastUrl) && (t.broadcastUrl = ''),
          o(t.custom) && (t.custom = ''),
          s(t.createTime) && (t.createTime = +t.createTime),
          s(t.updateTime) && (t.updateTime = +t.updateTime),
          s(t.onlineMemberNum) && (t.onlineMemberNum = +t.onlineMemberNum),
          s(t.mute) && (t.mute = t.mute === '1'),
          t
        );
      }),
        (e.exports = i);
    },
    function(e, t, n) {
      const r = n(43);
      e.exports = function(e) {
        e.db && (r.db = e.db);
      };
    },
    function(e, t, n) {
      const r = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n(5));
      function s(e) {
        const t = this;

        const n = e.url || null;
        (t.level = { debug: 0, log: 1, info: 2, warn: 3, error: 4 }[e.level] || 0),
          (t.logCache = []),
          (t.logNum = 1),
          (t.timeInterval = 5e3),
          (window.onerror = function(e, n, r, s, o) {
            t.error.call(t, o);
          }),
          setInterval(() => {
            t.logCache.length > 0 && n && t.postLogs(n, t.logCache);
          }, t.timeInterval);
      }
      (s.prototype.debug = function() {
        this.level > 0 ||
          (console.debug.apply(this, arguments),
          this.cacheLogs.apply(this, ['[degbug]'].concat(arguments)));
      }),
        (s.prototype.log = function() {
          this.level > 1 ||
            (console.log.apply(this, arguments),
            this.cacheLogs.apply(this, ['[log]'].concat(arguments)));
        }),
        (s.prototype.info = function() {
          this.level > 2 ||
            (console.info.apply(this, arguments),
            this.cacheLogs.apply(this, ['[info]'].concat(arguments)));
        }),
        (s.prototype.warn = function() {
          this.level > 3 ||
            (console.warn.apply(this, arguments),
            this.cacheLogs.apply(this, ['[warn]'].concat(arguments)));
        }),
        (s.prototype.error = function() {
          this.level > 4 ||
            (console.error.apply(this, arguments),
            this.cacheLogs.apply(this, ['[error]'].concat(arguments)));
        }),
        (s.prototype.cacheLogs = function(e, t) {
          for (var n = [], s = 0; s < t.length; s++) {
            const o = t[s];
            (void 0 === o ? 'undefined' : (0, r.default)(o)) === 'object'
              ? n.push(JSON.stringify(o))
              : n.push(o);
          }
          const i = `${this.logNum++} ${e} ${n.join('; ')}`;
          this.logCache.push(i.replace('%c', ''));
        }),
        (s.prototype.postLogs = function(e, t) {
          const n = this;

          const r = new XMLHttpRequest();
          (r.onreadystatechange = function() {
            r.readyState === 4 &&
              (r.status === 200
                ? (console.info('LoggerPlugin::日志上报完成'),
                  (n.logCache = []),
                  (n.timeInterval = 5e3))
                : (n.timeInterval += 5e3));
          }),
            r.open('POST', e),
            r.setRequestHeader('Content-Type', 'plain/text;charset=utf-8'),
            (r.timeout = 360),
            r.send(t.join('\n'));
        }),
        (e.exports = s);
    },
    function(e, t) {
      e.exports = function() {
        for (var e = {}, t = 0; t < arguments.length; t++) {
          const r = arguments[t];
          for (const s in r) n.call(r, s) && (e[s] = r[s]);
        }
        return e;
      };
      var n = Object.prototype.hasOwnProperty;
    },
    function(e, t, n) {
      const r = Function.prototype.toString;

      const s = /^\s*class\b/;

      const o = function(e) {
        try {
          const t = r.call(e);
          return s.test(t);
        } catch (e) {
          return !1;
        }
      };

      const i = Object.prototype.toString;

      const a = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
      e.exports = function(e) {
        if (!e) return !1;
        if (typeof e !== 'function' && typeof e !== 'object') return !1;
        if (typeof e === 'function' && !e.prototype) return !0;
        if (a)
          return (function(e) {
            try {
              return !o(e) && (r.call(e), !0);
            } catch (e) {
              return !1;
            }
          })(e);
        if (o(e)) return !1;
        const t = i.call(e);
        return t === '[object Function]' || t === '[object GeneratorFunction]';
      };
    },
    function(e, t, n) {
      const r = n(172);

      const s = Object.prototype.toString;

      const o = Object.prototype.hasOwnProperty;
      e.exports = function(e, t, n) {
        if (!r(t)) throw new TypeError('iterator must be a function');
        let i;
        arguments.length >= 3 && (i = n),
          s.call(e) === '[object Array]'
            ? (function(e, t, n) {
                for (let r = 0, s = e.length; r < s; r++)
                  o.call(e, r) && (n == null ? t(e[r], r, e) : t.call(n, e[r], r, e));
              })(e, t, i)
            : typeof e === 'string'
              ? (function(e, t, n) {
                  for (let r = 0, s = e.length; r < s; r++)
                    n == null ? t(e.charAt(r), r, e) : t.call(n, e.charAt(r), r, e);
                })(e, t, i)
              : (function(e, t, n) {
                  for (const r in e)
                    o.call(e, r) && (n == null ? t(e[r], r, e) : t.call(n, e[r], r, e));
                })(e, t, i);
      };
    },
    function(e, t) {
      ((t = e.exports = function(e) {
        return e.replace(/^\s*|\s*$/g, '');
      }).left = function(e) {
        return e.replace(/^\s*/, '');
      }),
        (t.right = function(e) {
          return e.replace(/\s*$/, '');
        });
    },
    function(e, t, n) {
      const r = n(174);

      const s = n(173);
      e.exports = function(e) {
        if (!e) return {};
        const t = {};
        return (
          s(r(e).split('\n'), e => {
            const n = e.indexOf(':');

            const s = r(e.slice(0, n)).toLowerCase();

            const o = r(e.slice(n + 1));
            void 0 === t[s]
              ? (t[s] = o)
              : !(function(e) {
                  return Object.prototype.toString.call(e) === '[object Array]';
                })(t[s])
                ? (t[s] = [t[s], o])
                : t[s].push(o);
          }),
          t
        );
      };
    },
    function(e, t) {
      e.exports = function(e) {
        const t = n.call(e);
        return (
          t === '[object Function]' ||
          (typeof e === 'function' && t !== '[object RegExp]') ||
          (typeof window !== 'undefined' &&
            (e === window.setTimeout ||
              e === window.alert ||
              e === window.confirm ||
              e === window.prompt))
        );
      };
      var n = Object.prototype.toString;
    },
    function(e, t, n) {
      (function(t) {
        let n;
        (n =
          typeof window !== 'undefined'
            ? window
            : void 0 !== t
              ? t
              : typeof self !== 'undefined'
                ? self
                : {}),
          (e.exports = n);
      }.call(this, n(30)));
    },
    function(e, t, n) {
      const r = n(177);

      const s = n(176);

      const o = n(175);

      const i = n(171);
      function a(e, t, n) {
        let r = e;
        return (
          s(t) ? ((n = t), typeof e === 'string' && (r = { uri: e })) : (r = i(t, { uri: e })),
          (r.callback = n),
          r
        );
      }
      function c(e, t, n) {
        return u((t = a(e, t, n)));
      }
      function u(e) {
        if (void 0 === e.callback) throw new Error('callback argument missing');
        let t = !1;

        const n = function(n, r, s) {
          t || ((t = !0), e.callback(n, r, s));
        };
        function r(e) {
          return (
            clearTimeout(l),
            e instanceof Error || (e = new Error(`${e || 'Unknown XMLHttpRequest Error'}`)),
            (e.statusCode = 0),
            n(e, y)
          );
        }
        function s() {
          if (!a) {
            let t;
            clearTimeout(l),
              (t = e.useXDR && void 0 === u.status ? 200 : u.status === 1223 ? 204 : u.status);
            let r = y;

            let s = null;
            return (
              t !== 0
                ? ((r = {
                    body: (function() {
                      let e = void 0;
                      if (
                        ((e = u.response
                          ? u.response
                          : u.responseText ||
                            (function(e) {
                              try {
                                if (e.responseType === 'document') return e.responseXML;
                                const t =
                                  e.responseXML &&
                                  e.responseXML.documentElement.nodeName === 'parsererror';
                                if (e.responseType === '' && !t) return e.responseXML;
                              } catch (e) {}
                              return null;
                            })(u)),
                        h)
                      )
                        try {
                          e = JSON.parse(e);
                        } catch (e) {}
                      return e;
                    })(),
                    statusCode: t,
                    method: d,
                    headers: {},
                    url: m,
                    rawRequest: u,
                  }),
                  u.getAllResponseHeaders && (r.headers = o(u.getAllResponseHeaders())))
                : (s = new Error('Internal XMLHttpRequest Error')),
              n(s, r, r.body)
            );
          }
        }
        let i;

        let a;

        var u = e.xhr || null;
        u || (u = e.cors || e.useXDR ? new c.XDomainRequest() : new c.XMLHttpRequest());
        let l;

        var m = (u.url = e.uri || e.url);

        var d = (u.method = e.method || 'GET');

        let p = e.body || e.data;

        const f = (u.headers = e.headers || {});

        const g = !!e.sync;

        var h = !1;

        var y = { body: void 0, headers: {}, statusCode: 0, method: d, url: m, rawRequest: u };
        if (
          ('json' in e &&
            !1 !== e.json &&
            ((h = !0),
            f.accept || f.Accept || (f.Accept = 'application/json'),
            d !== 'GET' &&
              d !== 'HEAD' &&
              (f['content-type'] || f['Content-Type'] || (f['Content-Type'] = 'application/json'),
              (p = JSON.stringify(!0 === e.json ? p : e.json)))),
          (u.onreadystatechange = function() {
            u.readyState === 4 && setTimeout(s, 0);
          }),
          (u.onload = s),
          (u.onerror = r),
          (u.onprogress = function() {}),
          (u.onabort = function() {
            a = !0;
          }),
          (u.ontimeout = r),
          u.open(d, m, !g, e.username, e.password),
          g || (u.withCredentials = !!e.withCredentials),
          !g &&
            e.timeout > 0 &&
            (l = setTimeout(() => {
              if (!a) {
                (a = !0), u.abort('timeout');
                const e = new Error('XMLHttpRequest timeout');
                (e.code = 'ETIMEDOUT'), r(e);
              }
            }, e.timeout)),
          u.setRequestHeader)
        )
          for (i in f) f.hasOwnProperty(i) && u.setRequestHeader(i, f[i]);
        else if (
          e.headers &&
          !(function(e) {
            for (const t in e) if (e.hasOwnProperty(t)) return !1;
            return !0;
          })(e.headers)
        )
          throw new Error('Headers cannot be set on an XDomainRequest object');
        return (
          'responseType' in e && (u.responseType = e.responseType),
          'beforeSend' in e && typeof e.beforeSend === 'function' && e.beforeSend(u),
          u.send(p || null),
          u
        );
      }
      (e.exports = c),
        (e.exports.default = c),
        (c.XMLHttpRequest = r.XMLHttpRequest || function() {}),
        (c.XDomainRequest =
          'withCredentials' in new c.XMLHttpRequest() ? c.XMLHttpRequest : r.XDomainRequest),
        (function(e, t) {
          for (let n = 0; n < e.length; n++) t(e[n]);
        })(['get', 'put', 'post', 'patch', 'head', 'delete'], e => {
          c[e === 'delete' ? 'del' : e] = function(t, n, r) {
            return ((n = a(t, n, r)).method = e.toUpperCase()), u(n);
          };
        });
    },
    function(e, t, n) {
      const r = n(0);

      const s = r.notundef;

      const o = { addFriend: 1, applyFriend: 2, passFriendApply: 3, rejectFriendApply: 4 };

      const i = { 1: 'addFriend', 2: 'applyFriend', 3: 'passFriendApply', 4: 'rejectFriendApply' };
      function a(e) {
        r.verifyOptions(e, 'account', 'friend::Friend'),
          r.verifyParamAtLeastPresentOne(e, 'alias custom', 'friend::Friend'),
          (this.account = e.account),
          s(e.alias) && (this.alias = e.alias),
          s(e.custom) && (this.custom = e.custom);
      }
      (a.reverse = function(e) {
        const t = r.filterObj(e, 'account alias custom createTime updateTime serverex');
        return (
          s(e.flag) && (t.valid = e.flag === '1'),
          s(t.createTime) && (t.createTime = +t.createTime),
          s(t.updateTime) && (t.updateTime = +t.updateTime),
          t
        );
      }),
        (a.validTypes = function() {
          return Object.keys(o);
        }),
        (a.getByteFromType = function(e) {
          return o[e];
        }),
        (a.getTypeFromByte = function(e) {
          return i[e];
        }),
        (a.assembleFriend = function(e) {
          const t = +new Date();
          return { account: e, alias: '', createTime: t, custom: '', updateTime: t, valid: !0 };
        }),
        (e.exports = a);
    },
    function(e, t, n) {
      e.exports = {
        imLogin: {
          3: 'clientType',
          4: 'os',
          6: 'sdkVersion',
          8: 'appLogin',
          9: 'protocolVersion',
          10: 'pushTokenName',
          11: 'pushToken',
          13: 'deviceId',
          18: 'appKey',
          19: 'account',
          24: 'browser',
          26: 'session',
          32: 'deviceInfo',
          112: 'isReactNative',
          1000: 'token',
        },
        nosToken: { 1: 'objectName', 2: 'token', 3: 'bucket', 4: 'expireTime' },
        audioToText: { 2: 'url' },
        imageOp: {
          0: 'type',
          1: 'stripmeta',
          2: 'typeType',
          3: 'blurRadius',
          4: 'blurSigma',
          5: 'qualityQuality',
          6: 'cropX',
          7: 'cropY',
          8: 'cropWidth',
          9: 'cropHeight',
          10: 'rotateAngle',
          11: 'pixelPixel',
          12: 'thumbnailMode',
          13: 'thumbnailWidth',
          14: 'thumbnailHeight',
          15: 'thumbnailAxisX',
          16: 'thumbnailAxisY',
          17: 'thumbnailCenterX',
          18: 'thumbnailCenterY',
          19: 'thumbnailEnlarge',
          20: 'thumbnailToStatic',
          21: 'watermarkType',
          22: 'watermarkGravity',
          23: 'watermarkDissolve',
          24: 'watermarkDx',
          25: 'watermarkDy',
          26: 'watermarkImage',
          27: 'watermarkText',
          28: 'watermarkFont',
          29: 'watermarkFontSize',
          30: 'watermarkFontColor',
          31: 'interlace',
        },
        robot: {
          4: 'account',
          5: 'nick',
          6: 'avatar',
          7: 'intro',
          8: 'config',
          9: 'valid',
          10: 'createTime',
          11: 'updateTime',
          12: 'custid',
          13: 'botid',
          14: 'bindTime',
        },
        clientAntispam: { 1: 'version', 2: 'md5', 3: 'nosurl', 4: 'thesaurus' },
        transToken: { 1: 'name', 2: 'type', 3: 'transType', 4: 'size', 5: 'extra', 6: 'body' },
        transInfo: {
          1: 'docId',
          2: 'name',
          3: 'prefix',
          4: 'size',
          5: 'type',
          6: 'state',
          7: 'transType',
          8: 'transSize',
          9: 'pageCount',
          10: 'picInfo',
          11: 'extra',
          12: 'flag',
        },
        fileListParam: { 1: 'fromDocId', 2: 'limit' },
        login: {
          1: 'appKey',
          2: 'account',
          3: 'deviceId',
          5: 'chatroomId',
          8: 'appLogin',
          20: 'chatroomNick',
          21: 'chatroomAvatar',
          22: 'chatroomCustom',
          23: 'chatroomEnterCustom',
          26: 'session',
          38: 'isAnonymous',
        },
        chatroom: {
          1: 'id',
          3: 'name',
          4: 'announcement',
          5: 'broadcastUrl',
          12: 'custom',
          14: 'createTime',
          15: 'updateTime',
          16: 'queuelevel',
          100: 'creator',
          101: 'onlineMemberNum',
          102: 'mute',
        },
        msg: {
          1: 'idClient',
          2: 'type',
          3: 'attach',
          4: 'custom',
          5: 'resend',
          6: 'userUpdateTime',
          7: 'fromNick',
          8: 'fromAvatar',
          9: 'fromCustom',
          10: 'yidunEnable',
          11: 'antiSpamContent',
          12: 'skipHistory',
          13: 'body',
          14: 'antiSpamBusinessId',
          15: 'clientAntiSpam',
          16: 'antiSpamUsingYidun',
          20: 'time',
          21: 'from',
          22: 'chatroomId',
          23: 'fromClientType',
          25: 'highPriority',
        },
        chatroomMember: {
          1: 'chatroomId',
          2: 'account',
          3: 'type',
          4: 'level',
          5: 'nick',
          6: 'avatar',
          7: 'custom',
          8: 'online',
          9: 'guest',
          10: 'enterTime',
          12: 'blacked',
          13: 'gaged',
          14: 'valid',
          15: 'updateTime',
          16: 'tempMuted',
          17: 'tempMuteDuration',
        },
      };
    },
    function(e, t, n) {
      e.exports = {
        imLogin: {
          clientType: 3,
          os: 4,
          sdkVersion: 6,
          appLogin: 8,
          protocolVersion: 9,
          pushTokenName: 10,
          pushToken: 11,
          deviceId: 13,
          appKey: 18,
          account: 19,
          browser: 24,
          session: 26,
          deviceInfo: 32,
          isReactNative: 112,
          token: 1e3,
        },
        nosToken: { objectName: 1, token: 2, bucket: 3, expireTime: 4 },
        audioToText: { url: 2 },
        imageOp: {
          type: 0,
          stripmeta: 1,
          typeType: 2,
          blurRadius: 3,
          blurSigma: 4,
          qualityQuality: 5,
          cropX: 6,
          cropY: 7,
          cropWidth: 8,
          cropHeight: 9,
          rotateAngle: 10,
          pixelPixel: 11,
          thumbnailMode: 12,
          thumbnailWidth: 13,
          thumbnailHeight: 14,
          thumbnailAxisX: 15,
          thumbnailAxisY: 16,
          thumbnailCenterX: 17,
          thumbnailCenterY: 18,
          thumbnailEnlarge: 19,
          thumbnailToStatic: 20,
          watermarkType: 21,
          watermarkGravity: 22,
          watermarkDissolve: 23,
          watermarkDx: 24,
          watermarkDy: 25,
          watermarkImage: 26,
          watermarkText: 27,
          watermarkFont: 28,
          watermarkFontSize: 29,
          watermarkFontColor: 30,
          interlace: 31,
        },
        robot: {
          account: 4,
          nick: 5,
          avatar: 6,
          intro: 7,
          config: 8,
          valid: 9,
          createTime: 10,
          updateTime: 11,
          custid: 12,
          botid: 13,
          bindTime: 14,
        },
        clientAntispam: { version: 1, md5: 2, nosurl: 3, thesaurus: 4 },
        transToken: { name: 1, type: 2, transType: 3, size: 4, extra: 5, body: 6 },
        transInfo: {
          docId: 1,
          name: 2,
          prefix: 3,
          size: 4,
          type: 5,
          state: 6,
          transType: 7,
          transSize: 8,
          pageCount: 9,
          picInfo: 10,
          extra: 11,
          flag: 12,
        },
        fileListParam: { fromDocId: 1, limit: 2 },
        login: {
          appKey: 1,
          account: 2,
          deviceId: 3,
          chatroomId: 5,
          appLogin: 8,
          chatroomNick: 20,
          chatroomAvatar: 21,
          chatroomCustom: 22,
          chatroomEnterCustom: 23,
          session: 26,
          isAnonymous: 38,
        },
        chatroom: {
          id: 1,
          name: 3,
          announcement: 4,
          broadcastUrl: 5,
          custom: 12,
          createTime: 14,
          updateTime: 15,
          queuelevel: 16,
          creator: 100,
          onlineMemberNum: 101,
          mute: 102,
        },
        msg: {
          idClient: 1,
          type: 2,
          attach: 3,
          custom: 4,
          resend: 5,
          userUpdateTime: 6,
          fromNick: 7,
          fromAvatar: 8,
          fromCustom: 9,
          yidunEnable: 10,
          antiSpamContent: 11,
          skipHistory: 12,
          body: 13,
          antiSpamBusinessId: 14,
          clientAntiSpam: 15,
          antiSpamUsingYidun: 16,
          time: 20,
          from: 21,
          chatroomId: 22,
          fromClientType: 23,
          highPriority: 25,
        },
        chatroomMember: {
          chatroomId: 1,
          account: 2,
          type: 3,
          level: 4,
          nick: 5,
          avatar: 6,
          custom: 7,
          online: 8,
          guest: 9,
          enterTime: 10,
          blacked: 12,
          gaged: 13,
          valid: 14,
          updateTime: 15,
          tempMuted: 16,
          tempMuteDuration: 17,
        },
      };
    },
    function(e, t, n) {
      const r = n(0);

      const s = n(122);

      const o = r.merge({}, s.idMap, {
        chatroom: {
          id: 13,
          login: 2,
          kicked: 3,
          logout: 4,
          sendMsg: 6,
          msg: 7,
          getChatroomMembers: 8,
          getHistoryMsgs: 9,
          markChatroomMember: 11,
          closeChatroom: 12,
          getChatroom: 13,
          updateChatroom: 14,
          updateMyChatroomMemberInfo: 15,
          getChatroomMembersInfo: 16,
          kickChatroomMember: 17,
          updateChatroomMemberTempMute: 19,
          queueOffer: 20,
          queuePoll: 21,
          queueList: 22,
          peak: 23,
          queueDrop: 24,
          queueInit: 25,
        },
        user: { id: 3, syncRobot: 16 },
      });

      const i = r.merge({}, s.cmdConfig, {
        login: {
          sid: o.chatroom.id,
          cid: o.chatroom.login,
          params: [
            { type: 'byte', name: 'type' },
            { type: 'Property', name: 'login' },
            { type: 'Property', name: 'imLogin' },
          ],
        },
        logout: { sid: o.chatroom.id, cid: o.chatroom.logout },
        sendMsg: {
          sid: o.chatroom.id,
          cid: o.chatroom.sendMsg,
          params: [{ type: 'Property', name: 'msg' }],
        },
        getChatroomMembers: {
          sid: o.chatroom.id,
          cid: o.chatroom.getChatroomMembers,
          params: [
            { type: 'byte', name: 'type' },
            { type: 'long', name: 'time' },
            { type: 'int', name: 'limit' },
          ],
        },
        getHistoryMsgs: {
          sid: o.chatroom.id,
          cid: o.chatroom.getHistoryMsgs,
          params: [
            { type: 'long', name: 'timetag' },
            { type: 'int', name: 'limit' },
            { type: 'bool', name: 'reverse' },
            { type: 'LongArray', name: 'msgTypes' },
          ],
        },
        markChatroomMember: {
          sid: o.chatroom.id,
          cid: o.chatroom.markChatroomMember,
          params: [
            { type: 'string', name: 'account' },
            { type: 'int', name: 'type' },
            { type: 'bool', name: 'isAdd' },
            { type: 'int', name: 'level' },
            { type: 'string', name: 'custom' },
          ],
        },
        closeChatroom: {
          sid: o.chatroom.id,
          cid: o.chatroom.closeChatroom,
          params: [{ type: 'string', name: 'custom' }],
        },
        getChatroom: { sid: o.chatroom.id, cid: o.chatroom.getChatroom },
        updateChatroom: {
          sid: o.chatroom.id,
          cid: o.chatroom.updateChatroom,
          params: [
            { type: 'Property', name: 'chatroom' },
            { type: 'bool', name: 'needNotify' },
            { type: 'String', name: 'custom' },
          ],
        },
        updateMyChatroomMemberInfo: {
          sid: o.chatroom.id,
          cid: o.chatroom.updateMyChatroomMemberInfo,
          params: [
            { type: 'Property', name: 'chatroomMember' },
            { type: 'bool', name: 'needNotify' },
            { type: 'String', name: 'custom' },
            { type: 'bool', name: 'needSave' },
          ],
        },
        getChatroomMembersInfo: {
          sid: o.chatroom.id,
          cid: o.chatroom.getChatroomMembersInfo,
          params: [{ type: 'StrArray', name: 'accounts' }],
        },
        kickChatroomMember: {
          sid: o.chatroom.id,
          cid: o.chatroom.kickChatroomMember,
          params: [{ type: 'string', name: 'account' }, { type: 'string', name: 'custom' }],
        },
        updateChatroomMemberTempMute: {
          sid: o.chatroom.id,
          cid: o.chatroom.updateChatroomMemberTempMute,
          params: [
            { type: 'String', name: 'account' },
            { type: 'long', name: 'duration' },
            { type: 'bool', name: 'needNotify' },
            { type: 'String', name: 'custom' },
          ],
        },
        queueOffer: {
          sid: o.chatroom.id,
          cid: o.chatroom.queueOffer,
          params: [
            { type: 'string', name: 'elementKey' },
            { type: 'string', name: 'elementValue' },
            { type: 'bool', name: 'transient' },
          ],
        },
        queuePoll: {
          sid: o.chatroom.id,
          cid: o.chatroom.queuePoll,
          params: [{ type: 'string', name: 'elementKey' }],
        },
        queueList: { sid: o.chatroom.id, cid: o.chatroom.queueList },
        peak: { sid: o.chatroom.id, cid: o.chatroom.peak },
        queueDrop: { sid: o.chatroom.id, cid: o.chatroom.queueDrop },
        queueInit: {
          sid: o.chatroom.id,
          cid: o.chatroom.queueInit,
          params: [{ type: 'int', name: 'limit' }],
        },
        syncRobot: {
          sid: o.user.id,
          cid: o.user.syncRobot,
          params: [{ type: 'long', name: 'timetag' }],
        },
      });

      const a = r.merge({}, s.packetConfig, {
        '4_10': { service: 'notify' },
        '4_11': { service: 'notify' },
        '3_16': {
          service: 'chatroom',
          cmd: 'syncRobot',
          response: [{ type: 'PropertyArray', name: 'robots', entity: 'robot' }],
        },
        '13_2': {
          service: 'chatroom',
          cmd: 'login',
          response: [
            { type: 'Property', name: 'chatroom' },
            { type: 'Property', name: 'chatroomMember' },
          ],
        },
        '13_3': {
          service: 'chatroom',
          cmd: 'kicked',
          response: [{ type: 'Number', name: 'reason' }, { type: 'String', name: 'custom' }],
        },
        '13_4': { service: 'chatroom', cmd: 'logout' },
        '13_6': {
          service: 'chatroom',
          cmd: 'sendMsg',
          response: [{ type: 'Property', name: 'msg' }],
        },
        '13_7': {
          service: 'chatroom',
          cmd: 'msg',
          response: [{ type: 'Property', name: 'msg' }],
        },
        '13_8': {
          service: 'chatroom',
          cmd: 'getChatroomMembers',
          response: [{ type: 'PropertyArray', name: 'members', entity: 'chatroomMember' }],
        },
        '13_9': {
          service: 'chatroom',
          cmd: 'getHistoryMsgs',
          response: [{ type: 'PropertyArray', name: 'msgs', entity: 'msg' }],
        },
        '13_11': {
          service: 'chatroom',
          cmd: 'markChatroomMember',
          response: [{ type: 'Property', name: 'chatroomMember' }],
        },
        '13_12': { service: 'chatroom', cmd: 'closeChatroom' },
        '13_13': {
          service: 'chatroom',
          cmd: 'getChatroom',
          response: [{ type: 'Property', name: 'chatroom' }],
        },
        '13_14': { service: 'chatroom', cmd: 'updateChatroom' },
        '13_15': { service: 'chatroom', cmd: 'updateMyChatroomMemberInfo' },
        '13_16': {
          service: 'chatroom',
          cmd: 'getChatroomMembersInfo',
          response: [{ type: 'PropertyArray', name: 'members', entity: 'chatroomMember' }],
        },
        '13_17': { service: 'chatroom', cmd: 'kickChatroomMember' },
        '13_19': { service: 'chatroom', cmd: 'updateChatroomMemberTempMute' },
        '13_20': { service: 'chatroom', cmd: 'queueOffer' },
        '13_21': {
          service: 'chatroom',
          cmd: 'queuePoll',
          response: [
            { type: 'String', name: 'elementKey' },
            { type: 'String', name: 'elementValue' },
          ],
        },
        '13_22': {
          service: 'chatroom',
          cmd: 'queueList',
          response: [{ type: 'KVArray', name: 'queueList' }],
        },
        '13_23': {
          service: 'chatroom',
          cmd: 'peak',
          response: [
            { type: 'String', name: 'elementKey' },
            { type: 'String', name: 'elementValue' },
          ],
        },
        '13_24': { service: 'chatroom', cmd: 'queueDrop' },
        '13_25': { service: 'chatroom', cmd: 'queueInit' },
      });
      e.exports = { idMap: o, cmdConfig: i, packetConfig: a };
    },
    function(e, t, n) {
      e.exports = {
        nosToken: { 1: 'objectName', 2: 'token', 3: 'bucket', 4: 'expireTime' },
        audioToText: { 2: 'url' },
        imageOp: {
          0: 'type',
          1: 'stripmeta',
          2: 'typeType',
          3: 'blurRadius',
          4: 'blurSigma',
          5: 'qualityQuality',
          6: 'cropX',
          7: 'cropY',
          8: 'cropWidth',
          9: 'cropHeight',
          10: 'rotateAngle',
          11: 'pixelPixel',
          12: 'thumbnailMode',
          13: 'thumbnailWidth',
          14: 'thumbnailHeight',
          15: 'thumbnailAxisX',
          16: 'thumbnailAxisY',
          17: 'thumbnailCenterX',
          18: 'thumbnailCenterY',
          19: 'thumbnailEnlarge',
          20: 'thumbnailToStatic',
          21: 'watermarkType',
          22: 'watermarkGravity',
          23: 'watermarkDissolve',
          24: 'watermarkDx',
          25: 'watermarkDy',
          26: 'watermarkImage',
          27: 'watermarkText',
          28: 'watermarkFont',
          29: 'watermarkFontSize',
          30: 'watermarkFontColor',
          31: 'interlace',
        },
        robot: {
          4: 'account',
          5: 'nick',
          6: 'avatar',
          7: 'intro',
          8: 'config',
          9: 'valid',
          10: 'createTime',
          11: 'updateTime',
          12: 'custid',
          13: 'botid',
          14: 'bindTime',
        },
        clientAntispam: { 1: 'version', 2: 'md5', 3: 'nosurl', 4: 'thesaurus' },
        transToken: { 1: 'name', 2: 'type', 3: 'transType', 4: 'size', 5: 'extra', 6: 'body' },
        transInfo: {
          1: 'docId',
          2: 'name',
          3: 'prefix',
          4: 'size',
          5: 'type',
          6: 'state',
          7: 'transType',
          8: 'transSize',
          9: 'pageCount',
          10: 'picInfo',
          11: 'extra',
          12: 'flag',
        },
        fileListParam: { 1: 'fromDocId', 2: 'limit' },
        login: {
          3: 'clientType',
          4: 'os',
          6: 'sdkVersion',
          8: 'appLogin',
          9: 'protocolVersion',
          10: 'pushTokenName',
          11: 'pushToken',
          13: 'deviceId',
          18: 'appKey',
          19: 'account',
          24: 'browser',
          26: 'session',
          32: 'deviceInfo',
          112: 'isReactNative',
          1000: 'token',
        },
        loginRes: {
          17: 'lastLoginDeviceId',
          102: 'connectionId',
          103: 'ip',
          104: 'port',
          106: 'country',
        },
        loginPort: {
          3: 'type',
          4: 'os',
          5: 'mac',
          13: 'deviceId',
          19: 'account',
          32: 'deviceInfo',
          102: 'connectionId',
          103: 'ip',
          109: 'time',
        },
        aosPushInfo: { 110: 'pushType', 111: 'hasTokenPreviously' },
        sync: {
          1: 'myInfo',
          2: 'offlineMsgs',
          3: 'teams',
          6: 'netcallMsgs',
          7: 'roamingMsgs',
          9: 'relations',
          11: 'friends',
          12: 'sessions',
          13: 'friendUsers',
          14: 'msgReceipts',
          15: 'myTeamMembers',
          16: 'donnop',
          17: 'deleteMsg',
          18: 'sessionAck',
          19: 'robots',
          20: 'broadcastMsgs',
          100: 'filterMsgs',
        },
        donnop: { 1: 'open' },
        team: {
          1: 'teamId',
          3: 'name',
          4: 'type',
          5: 'owner',
          6: 'level',
          7: 'selfCustom',
          8: 'valid',
          9: 'memberNum',
          10: 'memberUpdateTime',
          11: 'createTime',
          12: 'updateTime',
          13: 'validToCurrentUser',
          14: 'intro',
          15: 'announcement',
          16: 'joinMode',
          17: 'bits',
          18: 'custom',
          19: 'serverCustom',
          20: 'avatar',
          21: 'beInviteMode',
          22: 'inviteMode',
          23: 'updateTeamMode',
          24: 'updateCustomMode',
          100: 'mute',
          101: 'muteType',
        },
        teamMember: {
          1: 'teamId',
          3: 'account',
          4: 'type',
          5: 'nickInTeam',
          7: 'bits',
          8: 'active',
          9: 'valid',
          10: 'joinTime',
          11: 'updateTime',
          12: 'custom',
          13: 'mute',
        },
        msg: {
          0: 'scene',
          1: 'to',
          2: 'from',
          4: 'fromClientType',
          5: 'fromDeviceId',
          6: 'fromNick',
          7: 'time',
          8: 'type',
          9: 'body',
          10: 'attach',
          11: 'idClient',
          12: 'idServer',
          13: 'resend',
          14: 'userUpdateTime',
          15: 'custom',
          16: 'pushPayload',
          17: 'pushContent',
          18: 'apnsAccounts',
          19: 'apnsContent',
          20: 'apnsForcePush',
          21: 'yidunEnable',
          22: 'antiSpamContent',
          23: 'antiSpamBusinessId',
          24: 'clientAntiSpam',
          25: 'antiSpamUsingYidun',
          26: 'needMsgReceipt',
          100: 'isHistoryable',
          101: 'isRoamingable',
          102: 'isSyncable',
          104: 'isMuted',
          105: 'cc',
          107: 'isPushable',
          108: 'isOfflinable',
          109: 'isUnreadable',
          110: 'needPushNick',
          111: 'isReplyMsg',
          112: 'tempTeamMemberCount',
        },
        msgReceipt: { 1: 'to', 2: 'from', 7: 'time', 11: 'idClient' },
        teamMsgReceipt: {
          0: 'teamId',
          1: 'idServer',
          100: 'read',
          101: 'unread',
          102: 'idClient',
          103: 'account',
        },
        sysMsg: {
          0: 'time',
          1: 'type',
          2: 'to',
          3: 'from',
          4: 'ps',
          5: 'attach',
          6: 'idServer',
          7: 'sendToOnlineUsersOnly',
          8: 'apnsText',
          9: 'pushPayload',
          10: 'deletedIdClient',
          11: 'deletedIdServer',
          12: 'yidunEnable',
          13: 'antiSpamContent',
          14: 'deletedMsgTime',
          15: 'deletedMsgFromNick',
          16: 'opeAccount',
          105: 'cc',
          107: 'isPushable',
          109: 'isUnreadable',
          110: 'needPushNick',
        },
        broadcastMsg: { 1: 'broadcastId', 2: 'fromAccid', 3: 'fromUid', 4: 'timestamp', 5: 'body' },
        friend: {
          4: 'account',
          5: 'flag',
          6: 'beflag',
          7: 'source',
          8: 'alias',
          9: 'bits',
          10: 'custom',
          11: 'createTime',
          12: 'updateTime',
          13: 'serverex',
        },
        user: {
          1: 'account',
          3: 'nick',
          4: 'avatar',
          5: 'sign',
          6: 'gender',
          7: 'email',
          8: 'birth',
          9: 'tel',
          10: 'custom',
          12: 'createTime',
          13: 'updateTime',
        },
        specialRelation: {
          0: 'account',
          1: 'isMuted',
          2: 'isBlacked',
          3: 'createTime',
          4: 'updateTime',
        },
        msgType: {
          0: 'text',
          1: 'picture',
          2: 'audio',
          3: 'video',
          4: 'location',
          5: 'notification',
          6: 'file',
          7: 'netcall_audio',
          8: 'netcall_vedio',
          9: 'datatunnel_new',
          10: 'tips',
          11: 'robot',
          100: 'custom',
        },
        msgEvent: {
          1: 'type',
          2: 'value',
          3: 'idClient',
          4: 'custom',
          5: 'validTime',
          6: 'broadcastType',
          7: 'sync',
          8: 'validTimeType',
          9: 'durable',
          10: 'time',
          11: 'idServer',
          12: 'clientType',
          13: 'serverConfig',
          14: 'serverCustom',
          101: 'appid',
          103: 'account',
          104: 'enableMultiClient',
          106: 'consid',
        },
        msgEventSubscribe: {
          1: 'type',
          2: 'subscribeTime',
          3: 'sync',
          102: 'to',
          104: 'from',
          105: 'time',
        },
      };
    },
    function(e, t, n) {
      e.exports = {
        nosToken: { objectName: 1, token: 2, bucket: 3, expireTime: 4 },
        audioToText: { url: 2 },
        imageOp: {
          type: 0,
          stripmeta: 1,
          typeType: 2,
          blurRadius: 3,
          blurSigma: 4,
          qualityQuality: 5,
          cropX: 6,
          cropY: 7,
          cropWidth: 8,
          cropHeight: 9,
          rotateAngle: 10,
          pixelPixel: 11,
          thumbnailMode: 12,
          thumbnailWidth: 13,
          thumbnailHeight: 14,
          thumbnailAxisX: 15,
          thumbnailAxisY: 16,
          thumbnailCenterX: 17,
          thumbnailCenterY: 18,
          thumbnailEnlarge: 19,
          thumbnailToStatic: 20,
          watermarkType: 21,
          watermarkGravity: 22,
          watermarkDissolve: 23,
          watermarkDx: 24,
          watermarkDy: 25,
          watermarkImage: 26,
          watermarkText: 27,
          watermarkFont: 28,
          watermarkFontSize: 29,
          watermarkFontColor: 30,
          interlace: 31,
        },
        robot: {
          account: 4,
          nick: 5,
          avatar: 6,
          intro: 7,
          config: 8,
          valid: 9,
          createTime: 10,
          updateTime: 11,
          custid: 12,
          botid: 13,
          bindTime: 14,
        },
        clientAntispam: { version: 1, md5: 2, nosurl: 3, thesaurus: 4 },
        transToken: { name: 1, type: 2, transType: 3, size: 4, extra: 5, body: 6 },
        transInfo: {
          docId: 1,
          name: 2,
          prefix: 3,
          size: 4,
          type: 5,
          state: 6,
          transType: 7,
          transSize: 8,
          pageCount: 9,
          picInfo: 10,
          extra: 11,
          flag: 12,
        },
        fileListParam: { fromDocId: 1, limit: 2 },
        login: {
          clientType: 3,
          os: 4,
          sdkVersion: 6,
          appLogin: 8,
          protocolVersion: 9,
          pushTokenName: 10,
          pushToken: 11,
          deviceId: 13,
          appKey: 18,
          account: 19,
          browser: 24,
          session: 26,
          deviceInfo: 32,
          isReactNative: 112,
          token: 1e3,
        },
        loginRes: { lastLoginDeviceId: 17, connectionId: 102, ip: 103, port: 104, country: 106 },
        loginPort: {
          type: 3,
          os: 4,
          mac: 5,
          deviceId: 13,
          account: 19,
          deviceInfo: 32,
          connectionId: 102,
          ip: 103,
          time: 109,
        },
        aosPushInfo: { pushType: 110, hasTokenPreviously: 111 },
        sync: {
          myInfo: 1,
          offlineMsgs: 2,
          teams: 3,
          netcallMsgs: 6,
          roamingMsgs: 7,
          relations: 9,
          friends: 11,
          sessions: 12,
          friendUsers: 13,
          msgReceipts: 14,
          myTeamMembers: 15,
          donnop: 16,
          deleteMsg: 17,
          sessionAck: 18,
          robots: 19,
          broadcastMsgs: 20,
          filterMsgs: 100,
        },
        donnop: { open: 1 },
        team: {
          teamId: 1,
          name: 3,
          type: 4,
          owner: 5,
          level: 6,
          selfCustom: 7,
          valid: 8,
          memberNum: 9,
          memberUpdateTime: 10,
          createTime: 11,
          updateTime: 12,
          validToCurrentUser: 13,
          intro: 14,
          announcement: 15,
          joinMode: 16,
          bits: 17,
          custom: 18,
          serverCustom: 19,
          avatar: 20,
          beInviteMode: 21,
          inviteMode: 22,
          updateTeamMode: 23,
          updateCustomMode: 24,
          mute: 100,
          muteType: 101,
        },
        teamMember: {
          teamId: 1,
          account: 3,
          type: 4,
          nickInTeam: 5,
          bits: 7,
          active: 8,
          valid: 9,
          joinTime: 10,
          updateTime: 11,
          custom: 12,
          mute: 13,
        },
        msg: {
          scene: 0,
          to: 1,
          from: 2,
          fromClientType: 4,
          fromDeviceId: 5,
          fromNick: 6,
          time: 7,
          type: 8,
          body: 9,
          attach: 10,
          idClient: 11,
          idServer: 12,
          resend: 13,
          userUpdateTime: 14,
          custom: 15,
          pushPayload: 16,
          pushContent: 17,
          apnsAccounts: 18,
          apnsContent: 19,
          apnsForcePush: 20,
          yidunEnable: 21,
          antiSpamContent: 22,
          antiSpamBusinessId: 23,
          clientAntiSpam: 24,
          antiSpamUsingYidun: 25,
          needMsgReceipt: 26,
          isHistoryable: 100,
          isRoamingable: 101,
          isSyncable: 102,
          isMuted: 104,
          cc: 105,
          isPushable: 107,
          isOfflinable: 108,
          isUnreadable: 109,
          needPushNick: 110,
          isReplyMsg: 111,
          tempTeamMemberCount: 112,
        },
        msgReceipt: { to: 1, from: 2, time: 7, idClient: 11 },
        teamMsgReceipt: {
          teamId: 0,
          idServer: 1,
          read: 100,
          unread: 101,
          idClient: 102,
          account: 103,
        },
        sysMsg: {
          time: 0,
          type: 1,
          to: 2,
          from: 3,
          ps: 4,
          attach: 5,
          idServer: 6,
          sendToOnlineUsersOnly: 7,
          apnsText: 8,
          pushPayload: 9,
          deletedIdClient: 10,
          deletedIdServer: 11,
          yidunEnable: 12,
          antiSpamContent: 13,
          deletedMsgTime: 14,
          deletedMsgFromNick: 15,
          opeAccount: 16,
          cc: 105,
          isPushable: 107,
          isUnreadable: 109,
          needPushNick: 110,
        },
        broadcastMsg: { broadcastId: 1, fromAccid: 2, fromUid: 3, timestamp: 4, body: 5 },
        friend: {
          account: 4,
          flag: 5,
          beflag: 6,
          source: 7,
          alias: 8,
          bits: 9,
          custom: 10,
          createTime: 11,
          updateTime: 12,
          serverex: 13,
        },
        user: {
          account: 1,
          nick: 3,
          avatar: 4,
          sign: 5,
          gender: 6,
          email: 7,
          birth: 8,
          tel: 9,
          custom: 10,
          createTime: 12,
          updateTime: 13,
        },
        specialRelation: { account: 0, isMuted: 1, isBlacked: 2, createTime: 3, updateTime: 4 },
        msgType: {
          text: 0,
          picture: 1,
          audio: 2,
          video: 3,
          location: 4,
          notification: 5,
          file: 6,
          netcall_audio: 7,
          netcall_vedio: 8,
          datatunnel_new: 9,
          tips: 10,
          robot: 11,
          custom: 100,
        },
        msgEvent: {
          type: 1,
          value: 2,
          idClient: 3,
          custom: 4,
          validTime: 5,
          broadcastType: 6,
          sync: 7,
          validTimeType: 8,
          durable: 9,
          time: 10,
          idServer: 11,
          clientType: 12,
          serverConfig: 13,
          serverCustom: 14,
          appid: 101,
          account: 103,
          enableMultiClient: 104,
          consid: 106,
        },
        msgEventSubscribe: { type: 1, subscribeTime: 2, sync: 3, to: 102, from: 104, time: 105 },
      };
    },
    function(e, t, n) {
      const r = n(62).fn;

      const s = n(124);
      r.processMisc = function(e) {
        switch (e.cmd) {
          case 'getSimpleNosToken':
            e.error || (e.obj = e.content.nosTokens[0]);
            break;
          case 'getNosToken':
            e.error || (e.obj = e.content.nosToken);
            break;
          case 'notifyUploadLog':
            e.error || this.emitAPI({ type: 'notifyUploadLog' });
            break;
          case 'audioToText':
            e.error || (e.obj.text = e.content.text);
            break;
          case 'processImage':
            (e.obj.imageOps = s.reverseImageOps(e.obj.imageOps)),
              e.error || (e.obj = { url: e.content.url });
            break;
          case 'getNosTokenTrans':
            e.error || (e.obj = { nosToken: e.content.nosToken, docId: e.content.docId });
            break;
          case 'notifyTransLog':
            e.error || this.emitAPI({ type: 'notifyTransLog', obj: e.content.transInfo });
            break;
          case 'fetchFile':
          case 'fetchFileList':
          case 'removeFile':
            e.error || (e.obj = e.content);
        }
      };
    },
    function(e, t, n) {
      const r = n(62).fn;

      const s = n(4);
      (r.processLink = function(e) {
        e.cmd;
      }),
        (r.startHeartbeat = function() {
          const e = this;
          e.stopHeartbeat(),
            (e.heartbeatTimer = setTimeout(() => {
              e.sendCmd('heartbeat', null, e.onHeartbeat.bind(e));
            }, s.heartbeatInterval));
        }),
        (r.stopHeartbeat = function() {
          this.heartbeatTimer && (clearTimeout(this.heartbeatTimer), (this.heartbeatTimer = null));
        }),
        (r.onHeartbeat = function(e, t) {
          e
            ? ((e.callFunc = 'link::onHeartbeat'),
              this.api.reportLogs({ event: 'ping_timeout' }),
              this.onCustomError('heartbeat error', 'HEARTBEAT_ERROR', e))
            : this.startHeartbeat();
        }),
        (r.heartbeat = function() {});
    },
    function(e, t, n) {
      const r = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n(67));
      const s = n(62).fn;

      const o = n(23);

      const i = n(15);

      const a = n(105);

      const c = n(43);

      const u = n(4);

      const l = n(0);

      const m = l.notundef;
      (s.login = function() {
        const e = this;
        Promise.resolve()
          .then(() => {
            return e.assembleLogin();
          })
          .then(t => {
            e.sendCmd('login', (0, r.default)({}, t), e.onLogin.bind(e));
          }),
          (e.autoconnect = !1);
      }),
        (s.genSessionKey = (function() {
          const e = {};
          return function() {
            const t = this.name;
            return (e[t] = e[t] || l.guid());
          };
        })()),
        (s.assembleIMLogin = function() {
          const e = this.options;

          const t = e.account;

          const n = this.autoconnect ? 0 : 1;
          return (
            (this.sdkSession = this.genSessionKey()),
            {
              appLogin: n,
              appKey: e.appKey,
              account: t,
              token: e.token,
              sdkVersion: u.info.sdkVersion,
              protocolVersion: u.info.protocolVersion,
              os: i.os.toString(),
              browser: `${i.name} ${i.version}`,
              clientType: u.CLIENTTYPE || 16,
              session: this.sdkSession,
              deviceId: c.deviceId,
              isReactNative: u.isRN ? 1 : 0,
            }
          );
        }),
        (s.onLogin = function(e, t) {
          (this.loginResult = t),
            e ? this.onAuthError(e, 'link::onLogin') : (this.startHeartbeat(), this.afterLogin(t));
        }),
        (s.afterLogin = l.emptyFunc),
        (s.notifyLogin = function() {
          const e = this.loginResult;
          this.logger.info('link::notifyLogin: on connect', e), this.options.onconnect(e);
        }),
        (s.logout = function() {
          let e = 'done disconnect';
          if (this.doLogout)
            return (
              (this.doLogout = !1),
              (e = 'done logout'),
              void this.onAuthError(new o(e, 'logout'), 'link::logout')
            );
          if (this.isConnected()) {
            const t = new o(e, 'logout');
            this.onAuthError(t, 'link::logout');
          }
        }),
        (s.onKicked = function(e) {
          const t = e.content;

          const n = t.from;

          const r = t.reason;

          const s = t.custom;

          const i = {
            reason: this.kickedReasons[r] || 'unknown',
            message: this.kickedMessages[r] || '未知原因',
          };
          if (
            (m(n) && (i.from = a.reverseType(n)),
            m(s) && (i.custom = s),
            this.shouldNotifyKicked(i))
          ) {
            const c = new o('被踢了', 'kicked');
            l.merge(c, i), this.onAuthError(c, 'link::onKicked');
          } else
            this.logger.warn('link::onKicked: silentlyKick'),
              (this.shouldReconnect = !0),
              (this.hasNotifyDisconnected = !0),
              this.disconnectSocket();
        }),
        (s.shouldNotifyKicked = function(e) {
          return e.reason !== 'silentlyKick';
        }),
        (s.onAuthError = function(e, t) {
          (this.shouldReconnect = !1),
            ((e = e || o.newConnectionError({ callFunc: t })).callFunc = e.callFunc || t || null),
            this.markAllCallbackInvalid(e),
            this.notifyDisconnect(e);
        });
    },
    function(e, t) {
      e.exports = function(e) {
        return (
          e.webpackPolyfill ||
            ((e.deprecate = function() {}),
            (e.paths = []),
            e.children || (e.children = []),
            Object.defineProperty(e, 'loaded', {
              enumerable: !0,
              get() {
                return e.l;
              },
            }),
            Object.defineProperty(e, 'id', {
              enumerable: !0,
              get() {
                return e.i;
              },
            }),
            (e.webpackPolyfill = 1)),
          e
        );
      };
    },
    function(e, t, n) {
      const r = n(62).fn;

      const s = n(23);

      const o = n(148);

      const i = n(123);

      const a = n(4);

      const c = n(0);
      (r.initConnect = function() {
        (this.socket = null),
          (this.retryCount = 0),
          (this.connecting = !1),
          (this.shouldReconnect = !0),
          (this.hasNotifyDisconnected = !1),
          (this.doLogout = !1);
      }),
        (r.resetConnect = function() {
          const e = this.options;
          c.notundef(e.needReconnect)
            ? (c.verifyParamType('needReconnect', e.needReconnect, 'boolean', 'link::resetConnect'),
              (this.needReconnect = e.needReconnect))
            : (this.needReconnect = !0),
            this.logger.log(`link::resetConnect: needReconnect ${this.needReconnect}`),
            c.notundef(e.reconnectionAttempts) &&
              c.verifyParamType(
                'reconnectionAttempts',
                e.reconnectionAttempts,
                'number',
                'link::resetConnect'
              ),
            (this.reconnectionAttempts =
              typeof e.reconnectionAttempts === 'number' ? e.reconnectionAttempts : 1 / 0),
            (this.backoff = new o({
              min: a.reconnectionDelay,
              max: a.reconnectionDelayMax,
              jitter: a.reconnectionJitter,
            }));
        }),
        (r.connect = function() {
          if (this.isConnected()) this.logger.warn('link::connect: already connected');
          else if (this.connecting) this.logger.warn('link::connect: already connecting');
          else if (((this.connecting = !0), (this.hasNotifyDisconnected = !1), this.socket))
            this.logger.info('link::connect: try connecting...'), this.socket.socket.connect();
          else {
            const e = this.getNextSocketUrl();
            e ? this.connectToUrl(e) : this.refreshSocketUrl();
          }
        }),
        (r.getNextSocketUrl = function() {
          return this.socketUrls.shift();
        }),
        (r.isConnected = function() {
          return !!this.socket && !!this.socket.socket && this.socket.socket.connected;
        }),
        (r.connectToUrl = function(e) {
          const t = this;
          if ((t.logger.log(`link::connectToUrl: ${e}`), typeof window === 'undefined')) {
            const n = c.getGlobal();

            const r = e.split(':');
            n.location || (n.location = { protocol: r[0], hostname: r[1].slice(2), port: r[2] }),
              (this.options.transports = ['websocket']);
          }
          const s = this.options.transports || ['websocket', 'xhr-polling'];
          (t.socket = i.connect(
            e,
            {
              transports: s,
              reconnect: !1,
              'force new connection': !0,
              'connect timeout': a.connectTimeout,
            }
          )),
            t.logger.info(`link::connectToUrl: socket url: ${e}, transports: ${JSON.stringify(s)}`),
            t.socket.on('connect', t.onConnect.bind(t)),
            t.socket.on('handshake_failed', t.onHandshakeFailed.bind(t)),
            t.socket.on('connect_failed', t.onConnectFailed.bind(t)),
            t.socket.on('error', t.onError.bind(t)),
            t.socket.on('message', t.onMessage.bind(t)),
            t.socket.on('disconnect', n => {
              t.logger.warn(`link::connectToUrl: socket url: ${e}, disconnected`),
                t.doLogout ? t.logout() : t.onDisconnect(!0, 'link::socketDisconnect');
            });
        }),
        (r.disconnect = function(e) {
          const t = this;
          function n(n) {
            t.logger.info('link::disconnect: socket finally closed, ', n),
              clearTimeout(t.disconnectCallbackTimer),
              e(n);
          }
          e instanceof Function || (e = function() {}),
            clearTimeout(t.connectTimer),
            (t.disconnectCallbackTimer = setTimeout(() => {
              e.call(t, 'mark disconnected due to timeout');
            }, 1e4)),
            t.socket && t.socket.socket && t.socket.socket.transport
              ? (t.socket.socket.transport.onDisconnectDone = function(e) {
                  n(e);
                })
              : n(null),
            t.isConnected()
              ? (t.logger.log('link::disconnect: start disconnecting'), t.logout())
              : t.connecting
                ? (t.logger.log('link::disconnect: abort connecting'), t.disconnectSocket())
                : (t.logger.log('link::disconnect: start otherwise'),
                  (t.connecting = !1),
                  (t.shouldReconnect = !1),
                  (t.needReconnect = !1),
                  t.options.ondisconnect({
                    callFunc: 'link::disconnect',
                    message: 'manually disconnect status',
                  }));
        }),
        (r.onConnect = function() {
          this.backoff && this.backoff.reset(),
            (this.reconnectStatus = this.retryCount > 0 ? 1 : 0),
            (this.retryCount = 0),
            (this.connecting = !1),
            (this.shouldReconnect = !0),
            (this.hasNotifyDisconnected = !1),
            this.logger.log('link::onConnect: socket onconnected, start login'),
            this.login(),
            this.api.reportLogs({ event: 'ws_connected' });
        }),
        (r.onHandshakeFailed = function() {
          this.api.reportLogs({ event: 'ws_handshake_failed' }),
            this.onDisconnect(!1, 'link::onHandshakeFailed');
        }),
        (r.onConnectFailed = function() {
          this.api.reportLogs({ event: 'ws_connect_failed' }),
            this.onDisconnect(!1, 'link::onConnectFailed');
        }),
        (r.onError = function() {
          const e = arguments[0];
          e &&
            (this.api.reportLogs({ event: 'connect_timeout' }),
            this.onMiscError('连接错误', new s(e, 'LINK_ERROR', { callFunc: 'link::onError' }))),
            (this.connecting = !1);
        }),
        (r.onDisconnect = function() {
          const e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];

          const t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
          (this.connected = e),
            (this.connecting = !1),
            this.markAllCallbackInvalid(s.newNetworkError({ callFunc: t })),
            this.stopHeartbeat(),
            this.reconnect();
        }),
        (r.willReconnect = function() {
          return (
            this.shouldReconnect &&
            this.needReconnect &&
            this.retryCount < this.reconnectionAttempts
          );
        }),
        (r.reconnect = function() {
          const e = this;
          if (e.willReconnect())
            if (
              e.socket &&
              e.socket.socket &&
              e.socket.socket.transport &&
              e.socket.socket.transport.websocket
            ) {
              e.logger.info('link::reconnect: on socket closed');
              try {
                e.socket.socket.transport.websocket.close();
              } catch (t) {
                e.logger.warn('link::reconnect: force disconnect error:', t);
              }
              e.socket.socket.transport.onConnectionOver = function() {
                e.doReconnect();
              };
            } else e.logger.info('link::reconnect: on socket timeout'), e.doReconnect();
          else e.notifyDisconnect();
        }),
        (r.doReconnect = function() {
          const e = this;
          (e.socket = null), e.connected && (e.autoconnect = !0), e.retryCount++, (e.appLogin = 1);
          const t = e.backoff.duration();
          e.logger.info(`link::reconnect: will retry after ${t}ms, retryCount ${e.retryCount}`),
            e.options.onwillreconnect({ retryCount: e.retryCount, duration: t }),
            (e.connectTimer = setTimeout(() => {
              clearTimeout(e.connectTimer), e.connect();
            }, t));
        }),
        (r.notifyConnectError = function(e) {
          const t = s.newConnectError({ message: e, callFunc: 'link::notifyConnectError' });
          this.logger.error('link::notifyConnectError:', t), this.options.onerror(t);
        }),
        (r.notifyDisconnect = function(e) {
          const t = this;
          t.hasNotifyDisconnected ||
            ((t.hasNotifyDisconnected = !0),
            t.disconnectSocket(),
            ((e = e || new s()).retryCount = t.retryCount),
            (e.willReconnect = t.willReconnect()),
            t.backoff && t.backoff.reset(),
            (t.retryCount = 0),
            t.socket &&
            t.socket.socket &&
            t.socket.socket.transport &&
            t.socket.socket.transport.websocket
              ? (t.logger.info('link::notifyDisconnect: ondisconnected', e),
                (t.socket.socket.transport.onConnectionOver = function() {
                  (t.socket = null), t.options.ondisconnect(e);
                }))
              : (t.logger.info('link::notifyDisconnect: ondisconnected/no transport ws', e),
                t.options.ondisconnect(e)));
        }),
        (r.disconnectSocket = function() {
          if (this.isConnected() || this.connecting)
            try {
              (this.connecting = !1),
                (this.shouldReconnect = !1),
                (this.needReconnect = !1),
                this.socket.disconnect();
            } catch (e) {
              this.logger.info('link::disconnectSocket: disconnect failed, error ', e);
            }
        });
    },
    function(e, t, n) {
      const r = n(46).fn;

      const s = n(0);

      const o = n(59);

      const i = n(4);

      let a = n(15);
      ((a = a || {}).name = a.name || ''),
        (a.version = a.version || ''),
        (r.reportLogs = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};

          const t = this;

          const n = t.options;

          const r = i.ntServerAddress;
          if (r) {
            const c = i.info;
            e = s.merge(e, {
              appkey: n.appKey,
              uid: n.account,
              os: 'web',
              session: t.protocol.sdkSession || '',
              ver: c.sdkVersion,
              type: t.subType,
              platform: `${a.name.toLowerCase()}${a.version.replace(/(\.\d+)+$/, '')}`,
            });
            let u = r + s.genUrlSep(r);

            const l = [];
            for (const m in e) l.push(`${m}=${e[m]}`);
            (u += l.join('&')),
              o(u, {
                proxyUrl: `${s.url2origin(u)}/lbs/res/cors/nej_proxy_frame.html`,
                timeout: i.xhrTimeout,
                onload() {},
                onerror(e) {
                  t.logger.info('report::ajax report error', e);
                },
              });
          }
        });
    },
    function(e, t, n) {
      const r = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n(5));
      const s = n(0);

      const o = n(46).fn;
      function i(e, t, n, r) {
        let s = !1;

        let o = '';
        if (
          (n === 1
            ? e.indexOf(t) >= 0 && ((s = !0), (o = t))
            : n === 2 && (o = new RegExp(t, 'g')).test(e) && (s = !0),
          s && o !== '')
        )
          switch (r) {
            case 1:
              return e.replace(o, '**');
            case 2:
              return { code: 2 };
            case 3:
              return { code: 3 };
          }
        return e;
      }
      function a(e, t) {
        for (var n = t.match, s = t.operate, o = e, a = 0; a < t.keys.length; a++) {
          const c = t.keys[a];

          const u = c.match || n;

          const l = c.operate || s;
          try {
            if ((void 0 === (o = i(o, c.key, u, l)) ? 'undefined' : (0, r.default)(o)) === 'object')
              return o;
          } catch (e) {
            this.logger.warn('misc::filterContent: js cannot parse this regexp ', e);
          }
        }
        return o;
      }
      (o.uploadSdkLogUrl = function(e) {
        return (
          s.verifyOptions(e, 'url', 'misc::uploadSdkLogUrl'),
          this.cbAndSendCmd('uploadSdkLogUrl', e)
        );
      }),
        (o.getClientAntispamLexicon = function(e) {
          const t = this;

          let n = (e = e || {}).done;
          n instanceof Function || (n = function() {}), (e = { clientAntispam: { version: 0 } });
          const r = this;
          return this.protocol.sendCmd('getClientAntispam', e, (e, s, o) => {
            e
              ? (r.protocol.logger.error('misc::getClientAntispamLexicon:', e), n.call(t, e, {}))
              : (n.call(t, null, o), (r.antispamLexicon = o.clientAntispam || {}));
          });
        }),
        (o.filterClientAntispam = function(e) {
          const t = e.content;

          let n = e.antispamLexicon;
          if (!t) return { code: 404, errmsg: '待反垃圾文本content不存在' };
          n = n || this.antispamLexicon || {};
          let s = this.antispamLexicon && this.antispamLexicon.thesaurus;
          if (!s) return { code: 404, errmsg: '没有反垃圾词库或者词库格式不合法' };
          try {
            s = JSON.parse(s).thesaurus;
          } catch (e) {
            return (
              this.protocol.logger.error('misc::filterClientAntispam: parse thesaurus error'),
              { code: 500, errmsg: '反垃圾词库格式不合法' }
            );
          }
          for (var o = t, i = 0; i < s.length; i++)
            if (
              (void 0 === (o = a.call(this, o, s[i])) ? 'undefined' : (0, r.default)(o)) ===
              'object'
            ) {
              if (o.code === 2)
                return { code: 200, type: 2, errmsg: '建议拒绝发送', content: t, result: '' };
              if (o.code === 3)
                return {
                  code: 200,
                  type: 3,
                  errmsg: '建议服务器处理反垃圾，发消息带上字段clientAntiSpam',
                  content: t,
                  result: t,
                };
            }
          return o === t
            ? { code: 200, type: 0, errmsg: '', content: t, result: o }
            : { code: 200, type: 1, errmsg: '已对特殊字符做了过滤', content: t, result: o };
        });
    },
    function(e, t, n) {
      const r = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n(5));

      const s = n(71);
      const o = n(0);

      const i = n(46).fn;
      (i.viewImageSync = function(e) {
        const t = this.options;
        o.verifyOptions(e, 'url', 'nos::viewImageSync');
        const n = e.url;

        const i = (0, s.url2object)(n);

        const a = i.protocol;

        const c = i.hostname;

        const u = i.path;

        const l = i.query;
        if (
          (typeof e.strip === 'boolean' && (l.stripmeta = e.strip ? 1 : 0),
          typeof e.quality === 'number' &&
            (o.verifyParamMin('quality', e.quality, 0, 'nos::viewImageSync'),
            o.verifyParamMax('quality', e.quality, 100, 'nos::viewImageSync'),
            (l.quality = Math.round(e.quality))),
          typeof e.interlace === 'boolean' && (l.interlace = e.interlace ? 1 : 0),
          typeof e.rotate === 'number' && (l.rotate = Math.round(e.rotate)),
          (0, r.default)(e.thumbnail) === 'object')
        ) {
          let m = e.thumbnail.mode || 'crop';

          const d = e.thumbnail.width;

          const p = e.thumbnail.height;
          if (d >= 0 && p >= 0 && d < 4096 && p < 4096 && (d > 0 || p > 0)) {
            switch (m) {
              case 'crop':
                m = 'y';
                break;
              case 'contain':
                m = 'x';
                break;
              case 'cover':
                m = 'z';
                break;
              default:
                m = 'x';
            }
            l.thumbnail = `${d}${m}${p}`;
          }
        }
        if (t.downloadUrl) {
          const f = (0, s.url2object)(e.url);

          let g = t.downloadUrl;

          const h = f.path;

          const y = h.indexOf('/');
          if (y !== -1) {
            const v = h.substring(0, y);

            const b = h.substring(y + 1);
            g = g.replace('{bucket}', v).replace('{object}', b);
          }
          const M = (0, s.url2object)(g);
          return (0, s.object2url)({
            protocol: M.protocol,
            hostname: M.hostname,
            path: M.path,
            query: o.merge(M.query, l),
          });
        }
        return (0, s.object2url)({ protocol: a, hostname: c, path: u, query: l });
      }),
        (i.viewImageStripMeta = function(e) {
          o.verifyOptions(e, 'url strip', 'nos::viewImageStripMeta'),
            o.verifyParamType('strip', e.strip, 'boolean', 'nos::viewImageStripMeta');
          const t = `stripmeta=${e.strip ? 1 : 0}`;

          const n = (0, s.genUrlSep)(e.url);
          return e.url + n + t;
        }),
        (i.viewImageQuality = function(e) {
          o.verifyOptions(e, 'url quality', 'nos::viewImageQuality'),
            o.verifyParamType('quality', e.quality, 'number', 'nos::viewImageQuality'),
            o.verifyParamMin('quality', e.quality, 0, 'nos::viewImageQuality'),
            o.verifyParamMax('quality', e.quality, 100, 'nos::viewImageQuality');
          const t = `quality=${Math.round(e.quality)}`;

          const n = (0, s.genUrlSep)(e.url);
          return e.url + n + t;
        }),
        (i.viewImageInterlace = function(e) {
          o.verifyOptions(e, 'url', 'nos::viewImageInterlace');
          const t = (0, s.genUrlSep)(e.url);
          return `${e.url + t}interlace=1`;
        }),
        (i.viewImageRotate = function(e) {
          for (
            o.verifyOptions(e, 'url angle', 'nos::viewImageRotate'),
              o.verifyParamType('angle', e.angle, 'number', 'nos::viewImageRotate');
            e.angle < 0;

          )
            e.angle += 360;
          e.angle %= 360;
          const t = `rotate=${Math.round(e.angle)}`;

          const n = (0, s.genUrlSep)(e.url);
          return e.url + n + t;
        }),
        (i.viewImageBlur = function(e) {
          o.verifyOptions(e, 'url radius sigma', 'nos::viewImageBlur'),
            o.verifyParamType('radius', e.radius, 'number', 'nos::viewImageBlur'),
            o.verifyParamMin('radius', e.radius, 1, 'nos::viewImageBlur'),
            o.verifyParamMax('radius', e.radius, 50, 'nos::viewImageBlur'),
            o.verifyParamType('sigma', e.sigma, 'number', 'nos::viewImageBlur'),
            o.verifyParamMin('sigma', e.sigma, 0, 'nos::viewImageBlur');
          const t = `blur=${Math.round(e.radius)}x${Math.round(e.sigma)}`;

          const n = (0, s.genUrlSep)(e.url);
          return e.url + n + t;
        }),
        (i.viewImageCrop = function(e) {
          o.verifyOptions(e, 'url x y width height', 'nos::viewImageCrop'),
            o.verifyParamType('x', e.x, 'number', 'nos::viewImageCrop'),
            o.verifyParamMin('x', e.x, 0, 'nos::viewImageCrop'),
            o.verifyParamType('y', e.y, 'number', 'nos::viewImageCrop'),
            o.verifyParamMin('y', e.y, 0, 'nos::viewImageCrop'),
            o.verifyParamType('width', e.width, 'number', 'nos::viewImageCrop'),
            o.verifyParamMin('width', e.width, 0, 'nos::viewImageCrop'),
            o.verifyParamType('height', e.height, 'number', 'nos::viewImageCrop'),
            o.verifyParamMin('height', e.height, 0, 'nos::viewImageCrop');
          const t = `crop=${Math.round(e.x)}_${Math.round(e.y)}_${Math.round(e.width)}_${Math.round(
            e.height
          )}`;

          const n = (0, s.genUrlSep)(e.url);
          return e.url + n + t;
        }),
        (i.viewImageThumbnail = (function() {
          const e = { cover: 'z', contain: 'x', crop: 'y' };
          return function(t) {
            o.verifyOptions(t, 'url mode', 'nos::viewImageThumbnail'),
              o.verifyParamValid('mode', t.mode, Object.keys(e), 'nos::viewImageThumbnail'),
              t.mode === 'contain'
                ? o.verifyParamAtLeastPresentOne(t, 'width height', 'nos::viewImageThumbnail')
                : o.verifyOptions(t, 'width height', 'nos::viewImageThumbnail'),
              o.undef(t.width) && (t.width = 0),
              o.undef(t.height) && (t.height = 0),
              o.verifyParamType('width', t.width, 'number', 'nos::viewImageThumbnail'),
              o.verifyParamMin('width', t.width, 0, 'nos::viewImageThumbnail'),
              o.verifyParamType('height', t.height, 'number', 'nos::viewImageThumbnail'),
              o.verifyParamMin('height', t.height, 0, 'nos::viewImageThumbnail');
            const n = Math.round(t.width);

            const r = Math.round(t.height);

            let i = `thumbnail=${n}${e[t.mode]}${r}`;
            t.mode === 'crop' &&
              (o.notundef(t.axis) &&
                (o.undef(t.axis.x) && (t.axis.x = 5),
                o.undef(t.axis.y) && (t.axis.y = 5),
                o.verifyParamMin('axis.x', t.axis.x, 0, 'nos::viewImageThumbnail'),
                o.verifyParamMax('axis.x', t.axis.x, 10, 'nos::viewImageThumbnail'),
                o.verifyParamMin('axis.y', t.axis.y, 0, 'nos::viewImageThumbnail'),
                o.verifyParamMax('axis.y', t.axis.y, 10, 'nos::viewImageThumbnail'),
                (i = `${i}&axis=${Math.round(t.axis.x)}_${Math.round(t.axis.y)}`)));
            o.notundef(t.enlarge) &&
              (o.verifyParamType('enlarge', t.enlarge, 'boolean', 'nos::viewImageThumbnail'),
              t.enlarge && (i += '&enlarge=1'));
            const a = (0, s.genUrlSep)(t.url);
            return t.url + a + i;
          };
        })());
    },
    function(e, t, n) {
      const r = n(0);

      const s = n(46).fn;

      const o = n(124);
      (s.getSimpleNosToken = function() {
        const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (e.num = 1), r.verifyOptions(e), this.cbAndSendCmd('getSimpleNosToken', e);
      }),
        (s.getNosToken = function(e) {
          this.sendCmd('getNosToken', { responseBody: e.responseBody }, e.callback);
        }),
        (s.getNosTokenTrans = function(e) {
          this.sendCmd('getNosTokenTrans', e.responseBody, e.callback);
        }),
        (s.packFileDownloadName = function(e) {
          r.verifyOptions(e, 'url name', !0, '', 'nos::packFileDownloadName');
          const t = e.url;
          return `${t + r.genUrlSep(t)}download=${encodeURIComponent(e.name)}`;
        }),
        (s.audioToMp3 = function(e) {
          r.verifyOptions(e, 'url', 'nos::audioToMp3');
          const t = e.url;
          return `${t + r.genUrlSep(t)}audioTrans&type=mp3`;
        }),
        (s.removeFile = function(e) {
          this.sendCmd('removeFile', e, e.callback);
        }),
        (s.fetchFile = function(e) {
          this.sendCmd('fetchFile', e, e.callback);
        }),
        (s.fetchFileList = function(e) {
          this.sendCmd('fetchFileList', e, e.callback);
        }),
        (s.stripImageMeta = function(e) {
          return this.beforeProcessImage(e, 'stripmeta');
        }),
        (s.qualityImage = function(e) {
          return this.beforeProcessImage(e, 'quality');
        }),
        (s.interlaceImage = function(e) {
          return this.beforeProcessImage(e, 'interlace');
        }),
        (s.rotateImage = function(e) {
          return this.beforeProcessImage(e, 'rotate');
        }),
        (s.blurImage = function(e) {
          return this.beforeProcessImage(e, 'blur');
        }),
        (s.cropImage = function(e) {
          return this.beforeProcessImage(e, 'crop');
        }),
        (s.thumbnailImage = function(e) {
          return this.beforeProcessImage(e, 'thumbnail');
        }),
        (s.beforeProcessImage = function(e, t) {
          const n = r.copy(e);
          return (n.type = t), (e.ops = [n]), this.processImage(e);
        }),
        (s.processImage = function(e) {
          const t = this;
          r.verifyOptions(e, 'url ops', !0, '', 'nos::processImage'),
            r.verifyParamType('ops', e.ops, 'array', 'nos::processImage');
          const n = e.ops.map(e => {
            return (
              r.verifyOptions(e, 'type', !0, '', 'nos::processImage'),
              r.verifyParamValid('type', e.type, o.validTypes, 'nos::processImage'),
              t[`gen${e.type.slice(0, 1).toUpperCase()}${e.type.slice(1)}Op`](e)
            );
          });
          t.processCallback(e), t.sendCmd('processImage', { url: e.url, imageOps: n }, e.callback);
        }),
        (s.genStripmetaOp = function(e) {
          return new o({ type: e.type, stripmeta: e.strip ? 1 : 0 });
        }),
        (s.genQualityOp = function(e) {
          r.verifyOptions(e, 'quality', !0, '', 'nos::genQualityOp'),
            r.verifyParamType('quality', e.quality, 'number', 'nos::genQualityOp'),
            r.verifyParamMin('quality', e.quality, 0, 'nos::genQualityOp'),
            r.verifyParamMax('quality', e.quality, 100, 'nos::genQualityOp');
          const t = Math.round(e.quality);
          return new o({ type: e.type, qualityQuality: t });
        }),
        (s.genInterlaceOp = function(e) {
          return new o({ type: e.type });
        }),
        (s.genRotateOp = function(e) {
          for (
            r.verifyOptions(e, 'angle', !0, '', 'nos::genRotateOp'),
              r.verifyParamType('angle', e.angle, 'number', 'nos::genRotateOp');
            e.angle < 0;

          )
            e.angle += 360;
          e.angle %= 360;
          const t = Math.round(e.angle);
          return new o({ type: e.type, rotateAngle: t });
        }),
        (s.genBlurOp = function(e) {
          r.verifyOptions(e, 'radius sigma', 'nos::genBlurOp'),
            r.verifyParamType('radius', e.radius, 'number', 'nos::genBlurOp'),
            r.verifyParamMin('radius', e.radius, 1, 'nos::genBlurOp'),
            r.verifyParamMax('radius', e.radius, 50, 'nos::genBlurOp'),
            r.verifyParamType('sigma', e.sigma, 'number', 'nos::genBlurOp'),
            r.verifyParamMin('sigma', e.sigma, 0, 'nos::genBlurOp');
          const t = Math.round(e.radius);

          const n = Math.round(e.sigma);
          return new o({ type: e.type, blurRadius: t, blurSigma: n });
        }),
        (s.genCropOp = function(e) {
          r.verifyOptions(e, 'x y width height', 'nos::genCropOp'),
            r.verifyParamType('x', e.x, 'number', 'nos::genCropOp'),
            r.verifyParamMin('x', e.x, 0, 'nos::genCropOp'),
            r.verifyParamType('y', e.y, 'number', 'nos::genCropOp'),
            r.verifyParamMin('y', e.y, 0, 'nos::genCropOp'),
            r.verifyParamType('width', e.width, 'number', 'nos::genCropOp'),
            r.verifyParamMin('width', e.width, 0, 'nos::genCropOp'),
            r.verifyParamType('height', e.height, 'number', 'nos::genCropOp'),
            r.verifyParamMin('height', e.height, 0, 'nos::genCropOp');
          const t = Math.round(e.x);

          const n = Math.round(e.y);

          const s = Math.round(e.width);

          const i = Math.round(e.height);
          return new o({ type: e.type, cropX: t, cropY: n, cropWidth: s, cropHeight: i });
        }),
        (s.genThumbnailOp = (function() {
          const e = { cover: 'z', contain: 'x', crop: 'y' };
          return function(t) {
            r.verifyOptions(t, 'mode', 'nos::genThumbnailOp'),
              r.verifyParamValid('mode', t.mode, Object.keys(e), 'nos::genThumbnailOp'),
              t.mode === 'contain'
                ? r.verifyParamAtLeastPresentOne(t, 'width height', 'nos::genThumbnailOp')
                : r.verifyOptions(t, 'width height', 'nos::genThumbnailOp'),
              r.undef(t.width) && (t.width = 0),
              r.undef(t.height) && (t.height = 0),
              r.verifyParamType('width', t.width, 'number', 'nos::genThumbnailOp'),
              r.verifyParamMin('width', t.width, 0, 'nos::genThumbnailOp'),
              r.verifyParamType('height', t.height, 'number', 'nos::genThumbnailOp'),
              r.verifyParamMin('height', t.height, 0, 'nos::genThumbnailOp');
            const n = Math.round(t.width);

            const s = Math.round(t.height);

            const i = new o({
              type: t.type,
              thumbnailMode: e[t.mode],
              thumbnailWidth: n,
              thumbnailHeight: s,
            });
            if (t.mode === 'crop' && r.notundef(t.axis)) {
              r.undef(t.axis.x) && (t.axis.x = 5),
                r.undef(t.axis.y) && (t.axis.y = 5),
                r.verifyParamMin('axis.x', t.axis.x, 0, 'nos::genThumbnailOp'),
                r.verifyParamMax('axis.x', t.axis.x, 10, 'nos::genThumbnailOp'),
                r.verifyParamMin('axis.y', t.axis.y, 0, 'nos::genThumbnailOp'),
                r.verifyParamMax('axis.y', t.axis.y, 10, 'nos::genThumbnailOp');
              const a = Math.round(t.axis.x);

              const c = Math.round(t.axis.y);
              (i.thumbnailAxisX = a), (i.thumbnailAxisY = c);
            }
            return (
              r.notundef(t.enlarge) &&
                (r.verifyParamType('enlarge', t.enlarge, 'boolean', 'nos::genThumbnailOp'),
                t.enlarge && (i.thumbnailEnlarge = 1)),
              i
            );
          };
        })());
    },
    function(e, t, n) {
      const r = n(0);

      const s = n(23);

      const o = n(59).upload;

      const i = n(59).abort;

      const a = r.supportFormData;

      const c = 104857600;
      function u(e) {
        const t = this;
        (t.options = r.copy(e)),
          r.verifyOptions(e, 'url fileName'),
          r.verifyParamPresentJustOne(e, 'blob fileInput'),
          r.verifyCallback(e, 'beginupload uploadprogress uploaddone'),
          e.fileInput && (e.fileInput = r.verifyFileInput(e.fileInput)),
          e.type && r.verifyFileType(e.type),
          e.timeout ? r.verifyParamType('timeout', e.timeout, 'number') : (e.timeout = 6e5),
          r.verifyFileUploadCallback(e),
          (e.data = {});
        const n = e.fileName;

        const i = e.fileInput;
        if (a)
          if (i) {
            const u = e.type ? r.filterFiles(i.files, e.type) : [].slice.call(i.files, 0);
            if (!u || !u.length)
              return void e.uploaddone(
                s.newWrongFileTypeError(
                  `未读取到${e.type}类型的文件, 请确保文件选择节点的文件不为空, 并且请确保选择了${
                    e.type
                  }类型的文件`
                )
              );
            if (i.files[0].size > c)
              return void e.uploaddone(s.newFileTooLargeError('文件大小超过100M'));
            e.data[n] = u[0];
          } else e.blob && (e.data[n] = e.blob);
        else r.dataset(i, 'name', n), (e.data.input = i);
        e.params && r.merge(e.data, e.params);
        const l = {
          data: e.data,
          onaftersend() {
            e.beginupload(t);
          },
          onuploading(t) {
            const n = Math.floor((1e4 * t.loaded) / t.total) / 100;

            const r = {
              docId: e.docId,
              total: t.total,
              loaded: t.loaded,
              percentage: n,
              percentageText: `${n}%`,
            };
            e.fileInput && (r.fileInput = e.fileInput),
              e.blob && (r.blob = e.blob),
              e.uploadprogress(r);
          },
          onload(n) {
            (n.docId = e.docId), n.Error ? t.onError(n) : e.uploaddone(null, n);
          },
          onerror(n) {
            try {
              if (n.result) var r = JSON.parse(n.result);
              else r = n;
              t.onError(r);
            } catch (r) {
              console.error('ignore error if could not parse obj.result', r),
                e.uploaddone(new s(n.message, n.code), t.options);
            }
          },
        };
        a || (l.mode = 'iframe'), (l.putFileAtEnd = !0), (t.sn = o(e.url, l));
      }
      (u.prototype.onError = function(e) {
        let t;

        let n;

        let r;

        const o = this.options;
        (n = (t = (e = e || {}).Error || e || {}).Code || t.code || 'unknown'),
          (r = t.Message || t.message || '未知错误'),
          o.uploaddone(new s(`${n}(${r})`, n));
      }),
        (u.prototype.abort = function() {
          i(this.sn);
        }),
        (e.exports = u);
    },
    function(e, t, n) {
      const r = n(0);

      const s = {
        file: { md5: '$(Etag)', size: '$(ObjectSize)' },
        image: {
          md5: '$(Etag)',
          size: '$(ObjectSize)',
          w: '$(ImageInfo.Width)',
          h: '$(ImageInfo.Height)',
          orientation: '$(ImageInfo.Orientation)',
        },
        audio: { md5: '$(Etag)', size: '$(ObjectSize)', dur: '$(AVinfo.Audio.Duration)' },
        video: {
          md5: '$(Etag)',
          size: '$(ObjectSize)',
          dur: '$(AVinfo.Video.Duration)',
          w: '$(AVinfo.Video.Width)',
          h: '$(AVinfo.Video.Height)',
        },
      };

      const o = {
        genResponseBody(e) {
          return s[(e = e || 'file')];
        },
        parseResponse(e, t) {
          r.notundef(e.size) && (e.size = +e.size),
            r.notundef(e.w) && (e.w = +e.w),
            r.notundef(e.h) && (e.h = +e.h),
            r.notundef(e.dur) && (e.dur = +e.dur);
          const n = e.orientation;
          if (
            r.notundef(n) &&
            (delete e.orientation, t && (n === 'right, top' || n === 'left, bottom'))
          ) {
            const s = e.w;
            (e.w = e.h), (e.h = s);
          }
          return e;
        },
      };
      e.exports = o;
    },
    function(e, t, n) {
      let r;
      let s;
      let o;
      !(function(n, i) {
        (s = []),
          void 0 ===
            (o =
              typeof (r = function(e) {
                return function(t) {
                  (t = t || {}),
                    (function() {
                      (t.arrayAccessForm = t.arrayAccessForm || 'none'),
                        (t.emptyNodeForm = t.emptyNodeForm || 'text'),
                        (t.jsAttributeFilter = t.jsAttributeFilter),
                        (t.jsAttributeConverter = t.jsAttributeConverter),
                        (t.attributeConverters = t.attributeConverters || []),
                        (t.datetimeAccessFormPaths = t.datetimeAccessFormPaths || []),
                        (t.arrayAccessFormPaths = t.arrayAccessFormPaths || []),
                        void 0 === t.enableToStringFunc && (t.enableToStringFunc = !0);
                      void 0 === t.skipEmptyTextNodesForObj && (t.skipEmptyTextNodesForObj = !0);
                      void 0 === t.stripWhitespaces && (t.stripWhitespaces = !0);
                      void 0 === t.useDoubleQuotes && (t.useDoubleQuotes = !0);
                      void 0 === t.ignoreRoot && (t.ignoreRoot = !1);
                      void 0 === t.escapeMode && (t.escapeMode = !0);
                      void 0 === t.attributePrefix && (t.attributePrefix = '_');
                      void 0 === t.selfClosingElements && (t.selfClosingElements = !0);
                      void 0 === t.keepCData && (t.keepCData = !1);
                      void 0 === t.jsDateUTC && (t.jsDateUTC = !1);
                    })(),
                    (function() {
                      function e(e) {
                        let t = String(e);
                        return t.length === 1 && (t = `0${t}`), t;
                      }
                      typeof String.prototype.trim !== 'function' &&
                        (String.prototype.trim = function() {
                          return this.replace(/^\s+|^\n+|(\s|\n)+$/g, '');
                        });
                      typeof Date.prototype.toISOString !== 'function' &&
                        (Date.prototype.toISOString = function() {
                          return `${this.getUTCFullYear()}-${e(this.getUTCMonth() + 1)}-${e(
                            this.getUTCDate()
                          )}T${e(this.getUTCHours())}:${e(this.getUTCMinutes())}:${e(
                            this.getUTCSeconds()
                          )}.${String((this.getUTCMilliseconds() / 1e3).toFixed(3)).slice(2, 5)}Z`;
                        });
                    })();
                  const n = {
                    ELEMENT_NODE: 1,
                    TEXT_NODE: 3,
                    CDATA_SECTION_NODE: 4,
                    COMMENT_NODE: 8,
                    DOCUMENT_NODE: 9,
                  };
                  function r(e) {
                    let t = e.localName;
                    return (
                      t == null && (t = e.baseName), (t != null && t !== '') || (t = e.nodeName), t
                    );
                  }
                  function s(e) {
                    return typeof e === 'string'
                      ? e
                          .replace(/&/g, '&amp;')
                          .replace(/</g, '&lt;')
                          .replace(/>/g, '&gt;')
                          .replace(/"/g, '&quot;')
                          .replace(/'/g, '&#x27;')
                      : e;
                  }
                  function o(e, n, r) {
                    switch (t.arrayAccessForm) {
                      case 'property':
                        e[n] instanceof Array
                          ? (e[`${n}_asArray`] = e[n])
                          : (e[`${n}_asArray`] = [e[n]]);
                    }
                    if (!(e[n] instanceof Array) && t.arrayAccessFormPaths.length > 0) {
                      for (var s = !1, o = 0; o < t.arrayAccessFormPaths.length; o++) {
                        const i = t.arrayAccessFormPaths[o];
                        if (typeof i === 'string') {
                          if (i === r) {
                            s = !0;
                            break;
                          }
                        } else if (i instanceof RegExp) {
                          if (i.test(r)) {
                            s = !0;
                            break;
                          }
                        } else if (typeof i === 'function' && i(n, r)) {
                          s = !0;
                          break;
                        }
                      }
                      s && (e[n] = [e[n]]);
                    }
                  }
                  function i(e) {
                    const t = e.split(/[-T:+Z]/g);

                    let n = new Date(t[0], t[1] - 1, t[2]);

                    const r = t[5].split('.');
                    if (
                      (n.setHours(t[3], t[4], r[0]),
                      r.length > 1 && n.setMilliseconds(r[1]),
                      t[6] && t[7])
                    ) {
                      let s = 60 * t[6] + Number(t[7]);

                      const o = /\d\d-\d\d:\d\d$/.test(e) ? '-' : '+';
                      (s = 0 + (o === '-' ? -1 * s : s)),
                        n.setMinutes(n.getMinutes() - s - n.getTimezoneOffset());
                    } else
                      e.indexOf('Z', e.length - 1) !== -1 &&
                        (n = new Date(
                          Date.UTC(
                            n.getFullYear(),
                            n.getMonth(),
                            n.getDate(),
                            n.getHours(),
                            n.getMinutes(),
                            n.getSeconds(),
                            n.getMilliseconds()
                          )
                        ));
                    return n;
                  }
                  function a(e, s) {
                    for (var a = { __cnt: 0 }, u = e.childNodes, l = 0; l < u.length; l++) {
                      const m = u.item(l);

                      const d = r(m);
                      m.nodeType !== n.COMMENT_NODE &&
                        (a.__cnt++,
                        a[d] == null
                          ? ((a[d] = c(m, `${s}.${d}`)), o(a, d, `${s}.${d}`))
                          : (a[d] instanceof Array || ((a[d] = [a[d]]), o(a, d, `${s}.${d}`)),
                            (a[d][a[d].length] = c(m, `${s}.${d}`))));
                    }
                    for (let p = 0; p < e.attributes.length; p++) {
                      const f = e.attributes.item(p);
                      a.__cnt++;
                      for (var g = f.value, h = 0; h < t.attributeConverters.length; h++) {
                        const y = t.attributeConverters[h];
                        y.test.call(null, f.name, f.value) &&
                          (g = y.convert.call(null, f.name, f.value));
                      }
                      a[t.attributePrefix + f.name] = g;
                    }
                    const v = (function(e) {
                      return e.prefix;
                    })(e);
                    return (
                      v && (a.__cnt++, (a.__prefix = v)),
                      a['#text'] &&
                        ((a.__text = a['#text']),
                        a.__text instanceof Array && (a.__text = a.__text.join('\n')),
                        t.escapeMode &&
                          (a.__text = (function(e) {
                            return e
                              .replace(/&lt;/g, '<')
                              .replace(/&gt;/g, '>')
                              .replace(/&quot;/g, '"')
                              .replace(/&#x27;/g, "'")
                              .replace(/&amp;/g, '&');
                          })(a.__text)),
                        t.stripWhitespaces && (a.__text = a.__text.trim()),
                        delete a['#text'],
                        t.arrayAccessForm === 'property' && delete a['#text_asArray'],
                        (a.__text = (function(e, n, r) {
                          if (t.datetimeAccessFormPaths.length > 0)
                            for (
                              let s = r.split('.#')[0], o = 0;
                              o < t.datetimeAccessFormPaths.length;
                              o++
                            ) {
                              const a = t.datetimeAccessFormPaths[o];
                              if (typeof a === 'string') {
                                if (a === s) return i(e);
                              } else if (a instanceof RegExp) {
                                if (a.test(s)) return i(e);
                              } else if (typeof a === 'function' && a(s)) return i(e);
                            }
                          return e;
                        })(a.__text, 0, `${s}.#text`))),
                      a.hasOwnProperty('#cdata-section') &&
                        ((a.__cdata = a['#cdata-section']),
                        delete a['#cdata-section'],
                        t.arrayAccessForm === 'property' && delete a['#cdata-section_asArray']),
                      a.__cnt === 1 && a.__text
                        ? (a = a.__text)
                        : a.__cnt === 0 && t.emptyNodeForm === 'text'
                          ? (a = '')
                          : a.__cnt > 1 &&
                            void 0 !== a.__text &&
                            t.skipEmptyTextNodesForObj &&
                            ((t.stripWhitespaces && a.__text === '') || a.__text.trim() === '') &&
                            delete a.__text,
                      delete a.__cnt,
                      t.keepCData || a.hasOwnProperty('__text') || !a.hasOwnProperty('__cdata')
                        ? (t.enableToStringFunc &&
                            (a.__text || a.__cdata) &&
                            (a.toString = function() {
                              return (
                                (this.__text ? this.__text : '') +
                                (this.__cdata ? this.__cdata : '')
                              );
                            }),
                          a)
                        : a.__cdata
                          ? a.__cdata
                          : ''
                    );
                  }
                  function c(e, s) {
                    return e.nodeType === n.DOCUMENT_NODE
                      ? (function(e) {
                          for (var s = {}, o = e.childNodes, i = 0; i < o.length; i++) {
                            const a = o.item(i);
                            if (a.nodeType === n.ELEMENT_NODE) {
                              const u = r(a);
                              t.ignoreRoot ? (s = c(a, u)) : (s[u] = c(a, u));
                            }
                          }
                          return s;
                        })(e)
                      : e.nodeType === n.ELEMENT_NODE
                        ? a(e, s)
                        : e.nodeType === n.TEXT_NODE || e.nodeType === n.CDATA_SECTION_NODE
                          ? e.nodeValue
                          : null;
                  }
                  function u(e, n, r, o) {
                    let i = `<${e && e.__prefix ? `${e.__prefix}:` : ''}${n}`;
                    if (r)
                      for (let a = 0; a < r.length; a++) {
                        const c = r[a];

                        let u = e[c];
                        t.escapeMode && (u = s(u)),
                          (i += ` ${c.substr(t.attributePrefix.length)}=`),
                          t.useDoubleQuotes ? (i += `"${u}"`) : (i += `'${u}'`);
                      }
                    return (i += o ? ' />' : '>');
                  }
                  function l(e, t) {
                    return `</${e && e.__prefix ? `${e.__prefix}:` : ''}${t}>`;
                  }
                  function m(e, n) {
                    return !!(
                      (t.arrayAccessForm === 'property' &&
                        (function(e, t) {
                          return e.indexOf(t, e.length - t.length) !== -1;
                        })(n.toString(), '_asArray')) ||
                      n.toString().indexOf(t.attributePrefix) === 0 ||
                      n.toString().indexOf('__') === 0 ||
                      e[n] instanceof Function
                    );
                  }
                  function d(e) {
                    let t = 0;
                    if (e instanceof Object) for (const n in e) m(e, n) || t++;
                    return t;
                  }
                  function p(e) {
                    const n = [];
                    if (e instanceof Object)
                      for (const r in e)
                        r.toString().indexOf('__') === -1 &&
                          r.toString().indexOf(t.attributePrefix) === 0 &&
                          n.push(r);
                    return n;
                  }
                  function f(e) {
                    let n = '';
                    return (
                      e instanceof Object
                        ? (n += (function(e) {
                            let n = '';
                            e.__cdata && (n += `<![CDATA[${e.__cdata}]]>`);
                            e.__text && (t.escapeMode ? (n += s(e.__text)) : (n += e.__text));
                            return n;
                          })(e))
                        : e !== null && (t.escapeMode ? (n += s(e)) : (n += e)),
                      n
                    );
                  }
                  function g(e, n, r) {
                    let s = '';
                    if (t.jsAttributeFilter && t.jsAttributeFilter.call(null, n, e)) return s;
                    if (
                      (t.jsAttributeConverter && (e = t.jsAttributeConverter.call(null, n, e)),
                      (void 0 !== e && e !== null && e !== '') || !t.selfClosingElements)
                    )
                      if (typeof e === 'object')
                        if (Object.prototype.toString.call(e) === '[object Array]')
                          s += (function(e, t, n) {
                            let r = '';
                            if (e.length === 0) r += u(e, t, n, !0);
                            else for (let s = 0; s < e.length; s++) r += g(e[s], t, p(e[s]));
                            return r;
                          })(e, n, r);
                        else if (e instanceof Date)
                          (s += u(e, n, r, !1)),
                            (s += t.jsDateUTC ? e.toUTCString() : e.toISOString()),
                            (s += l(e, n));
                        else {
                          const o = d(e);
                          o > 0 || e.__text || e.__cdata
                            ? ((s += u(e, n, r, !1)), (s += h(e)), (s += l(e, n)))
                            : t.selfClosingElements
                              ? (s += u(e, n, r, !0))
                              : ((s += u(e, n, r, !1)), (s += l(e, n)));
                        }
                      else (s += u(e, n, r, !1)), (s += f(e)), (s += l(e, n));
                    else s += u(e, n, r, !0);
                    return s;
                  }
                  function h(e) {
                    let t = '';

                    const n = d(e);
                    if (n > 0)
                      for (const r in e)
                        if (!m(e, r)) {
                          const s = e[r];

                          const o = p(s);
                          t += g(s, r, o);
                        }
                    return (t += f(e));
                  }
                  function y(t) {
                    if (void 0 === t) return null;
                    if (typeof t !== 'string') return null;
                    let n = null;

                    let r = null;
                    if (e) (n = new e()), (r = n.parseFromString(t, 'text/xml'));
                    else if (window && window.DOMParser) {
                      n = new window.DOMParser();
                      let s = null;

                      const o = window.ActiveXObject || 'ActiveXObject' in window;
                      if (!o)
                        try {
                          s = n.parseFromString('INVALID', 'text/xml').childNodes[0].namespaceURI;
                        } catch (e) {
                          s = null;
                        }
                      try {
                        (r = n.parseFromString(t, 'text/xml')),
                          s !== null &&
                            r.getElementsByTagNameNS(s, 'parsererror').length > 0 &&
                            (r = null);
                      } catch (e) {
                        r = null;
                      }
                    } else
                      t.indexOf('<?') === 0 && (t = t.substr(t.indexOf('?>') + 2)),
                        ((r = new ActiveXObject('Microsoft.XMLDOM')).async = 'false'),
                        r.loadXML(t);
                    return r;
                  }
                  (this.asArray = function(e) {
                    return void 0 === e || e === null ? [] : e instanceof Array ? e : [e];
                  }),
                    (this.toXmlDateTime = function(e) {
                      return e instanceof Date
                        ? e.toISOString()
                        : typeof e === 'number'
                          ? new Date(e).toISOString()
                          : null;
                    }),
                    (this.asDateTime = function(e) {
                      return typeof e === 'string' ? i(e) : e;
                    }),
                    (this.xml2dom = function(e) {
                      return y(e);
                    }),
                    (this.dom2js = function(e) {
                      return c(e, null);
                    }),
                    (this.js2dom = function(e) {
                      const t = this.js2xml(e);
                      return y(t);
                    }),
                    (this.xml2js = function(e) {
                      const t = y(e);
                      return t != null ? this.dom2js(t) : null;
                    }),
                    (this.js2xml = function(e) {
                      return h(e);
                    }),
                    (this.getVersion = function() {
                      return '3.1.1';
                    });
                };
              }) === 'function'
                ? r.apply(t, s)
                : r) || (e.exports = o);
      })();
    },
    function(e, t, n) {
      const r = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n(5));
      const s = n(46).fn;

      const o = n(0);

      const i = n(196);

      const a = n(23);

      const c = n(4);

      const u = n(195);

      const l = n(194);

      const m = n(125);
      (s.sendText = function(e) {
        return this.processCallback(e), (e.msg = new this.message.TextMessage(e)), this.sendMsg(e);
      }),
        (s.previewFile = function(e) {
          if (
            (o.verifyOptions(e, 'done', 'msg::previewFile'),
            e.type || (e.type = 'file'),
            o.verifyParamPresentJustOne(
              e,
              'dataURL blob fileInput filePath wxFilePath fileObject',
              'msg::previewFile'
            ),
            (e.filePath = e.filePath || e.wxFilePath),
            delete e.wxFilePath,
            e.dataURL)
          )
            e.blob = m.fromDataURL(e.dataURL);
          else if (e.blob);
          else if (e.fileInput) {
            if (
              ((e.fileInput = o.verifyFileInput(e.fileInput, 'msg::previewFile')),
              e.fileInput.files)
            ) {
              if (!e.fileInput.files.length)
                return void e.done(
                  a.newNoFileError(`请选择${e.type}文件`, {
                    callFunc: 'msg::previewFile',
                    fileInput: e.fileInput,
                  }),
                  e
                );
              e.fileSize = e.fileInput.files[0].size;
            }
            (e.fileInputName = o.getFileName(e.fileInput)),
              (e.fileInfo = o.getFileInfo(e.fileInput)),
              (e.transtype = e.fileInfo.type);
          }
          this.processCallback(e);
          const t = JSON.stringify(u.genResponseBody(e.type) || {}).replace(/"/gi, '\\"');

          let n = null;

          const r = e.transcode ? 'getNosTokenTrans' : 'getNosToken';
          (n = e.transcode
            ? {
                transToken: {
                  name: e.fileInfo.name,
                  type: e.fileInfo.transcodeType,
                  transType: e.transcode === 'png' ? 11 : 10,
                  size: e.fileInfo.size,
                  body: t,
                },
              }
            : t),
            this[r]({
              responseBody: n,
              callback: function(t, n) {
                t
                  ? e.done(t, e.callback.options)
                  : (e.transcode
                      ? ((e.nosToken = n.nosToken), (e.docId = n.docId))
                      : (e.nosToken = n),
                    this._doPreviewFile(e));
              }.bind(this),
            });
        }),
        (s._doPreviewFile = function(e) {
          const t = this;

          const n = e.uploaddone;

          const s = c.genUploadUrl(e.nosToken.bucket);

          const i = this.assembleUploadParams(e.nosToken);
          function m(r, s) {
            if (((e.uploaddone = n), r)) e.done(r, e.callback.options);
            else {
              if (
                (((s = u.parseResponse(s, t.options.exifOrientation)).url = c.genDownloadUrl(
                  e.nosToken.bucket,
                  i.Object
                )),
                o.exist(e.fileInputName))
              )
                s.name = e.fileInputName;
              else if (e.blob) {
                const a = e.blob.name;
                if (((s.name = a || `blob-${s.md5}`), !a)) {
                  const l = e.blob.type;
                  s.ext = l.slice(l.lastIndexOf('/') + 1);
                }
              } else
                e.filePath
                  ? (s.name = e.filePath)
                  : e.fileObject && (s.name = e.fileObject.fileName);
              if (!s.ext) {
                const m = s.name.lastIndexOf('.');
                s.ext = m === -1 ? 'unknown' : s.name.slice(m + 1);
              }
              (s.size = s.size || 0), e.done(null, o.copy(s));
            }
          }
          if (c.isWeixinApp)
            o.verifyOptions(e, 'filePath', 'msg::_doPreviewFile'),
              wx.uploadFile({
                url: s,
                filePath: e.filePath,
                name: 'file',
                formData: i,
                fail(e) {
                  console.error('api::msg:upload file failed', e);
                },
                success(e) {
                  if (e.statusCode === 200)
                    try {
                      m(null, JSON.parse(e.data));
                    } catch (t) {
                      console.error('parse wx upload file res error', t),
                        m({ code: 'PARSE_WX_UPLOAD_FILE_RES_ERROR', str: e.data, msg: e.errMsg });
                    }
                  else m({ code: e.statusCode, msg: e.errMsg });
                },
              });
          else if (c.isNodejs) {
            const d = {
              url: s,
              name: 'file',
              formData: i,
              success(e) {
                if (e.statusCode === 200)
                  try {
                    m(null, JSON.parse(e.data));
                  } catch (t) {
                    console.error('parse nodejs upload file res error', t),
                      m({ code: 'PARSE_NODEJS_UPLOAD_FILE_RES_ERROR', str: e.data, msg: e.errMsg });
                  }
                else m({ code: e.statusCode, msg: e.errMsg });
              },
              fail(e) {
                console.error('api::msg:upload file failed', e);
              },
            };
            if (e.filePath) d.filePath = e.filePath;
            else {
              if ((0, r.default)(e.fileObject) !== 'object')
                throw new a('Nodejs上传fileObject参数类型应如 {fileName:..,fileData:..} ');
              d.fileData = e.fileObject.fileData;
            }
            l.uploadFile(d);
          } else if (c.isRN) {
            const p = {
              url: s,
              name: 'file',
              formData: i,
              filePath: e.filePath,
              success(e) {
                if (e.ok && e.status === 200)
                  try {
                    (e.md5 =
                      (e.headers.map && e.headers.map.etag && e.headers.map.etag[0]) || 'UNKNOWN'),
                      m(null, e);
                  } catch (t) {
                    console.error('parse React Native upload file res error', t),
                      m({ code: 'PARSE_React_Native_UPLOAD_FILE_RES_ERROR', res: e });
                  }
                else m({ code: e.status, msg: e.statusText });
              },
              fail(e) {
                console.error('api::msg:upload file failed', e);
              },
            };
            l.uploadFile(p);
          } else (e.uploaddone = m), (e.url = s), (e.params = i), (e.fileName = 'file'), new l(e);
        }),
        (s.sendFile = function(e) {
          if (
            (e.type || (e.type = 'file'),
            o.verifyParamPresentJustOne(
              e,
              'dataURL blob fileInput file filePath wxFilePath fileObject',
              'msg::sendFile'
            ),
            this.processCallback(e),
            (e.filePath = e.filePath || e.wxFilePath),
            delete e.wxFilePath,
            e.dataURL)
          )
            this._previewAndSendFile(e);
          else if (e.blob) this._previewAndSendFile(e);
          else if (e.fileInput) {
            if (
              ((e.fileInput = o.verifyFileInput(e.fileInput, 'msg::sendFile')),
              e.fileInput.files && !e.fileInput.files.length)
            )
              return void e.done(
                a.newNoFileError(`请选择${e.type}文件`, {
                  callFunc: 'msg::sendFile',
                  fileInput: e.fileInput,
                }),
                e.callback.options
              );
            this._previewAndSendFile(e);
          } else if (e.filePath || e.fileObject) this._previewAndSendFile(e);
          else if (e.file) return (e.msg = new this.message.FileMessage(e)), this.sendMsg(e);
        }),
        (s._previewAndSendFile = function(e) {
          const t = this;
          o.verifyCallback(e, 'uploaddone beforesend', 'msg::_previewAndSendFile');
          const n = e.done;
          (e.done = function(r, s) {
            if (((e.done = n), r)) e.uploaddone(r, e.callback.options);
            else {
              if (/chatroom/.test(e.scene)) return;
              e.uploaddone(null, o.copy(s)),
                (e.file = s),
                (e.msg = new t.message.FileMessage(e)),
                e.beforesend(t.sendMsg(e));
            }
          }),
            t.previewFile(e);
        }),
        (s.assembleUploadParams = function(e) {
          return e
            ? {
                Object: decodeURIComponent(e.objectName),
                'x-nos-token': e.token,
                'x-nos-entity-type': 'json',
              }
            : null;
        }),
        (s.deleteFile = function(e) {
          o.verifyParamPresentJustOne(e, 'docId', 'msg::deleteFile'),
            this.removeFile({
              docId: e.docId,
              callback(t, n) {
                t ? e.error && e.error(t, n) : e.success && e.success(n);
              },
            });
        }),
        (s.getFile = function(e) {
          o.verifyParamPresentJustOne(e, 'docId', 'msg::getFile'),
            this.fetchFile({
              docId: e.docId,
              callback(t, n) {
                t ? e.error && e.error(t, n) : e.success && e.success(n.info);
              },
            });
        }),
        (s.getFileList = function(e) {
          const t = e.fromDocId;

          const n = void 0 === t ? '' : t;

          const r = e.limit;

          const s = void 0 === r ? 10 : r;

          const o = { limit: s };
          n && (o.fromDocId = n),
            this.fetchFileList({
              fileListParam: o,
              callback(t, n) {
                t
                  ? (s > 30 && (t.message += '::文档条数超过限制:30'), e.error && e.error(t, n))
                  : e.success && e.success(n);
              },
            });
        }),
        (s.sendGeo = function(e) {
          return this.processCallback(e), (e.msg = new this.message.GeoMessage(e)), this.sendMsg(e);
        }),
        (s.sendTipMsg = function(e) {
          return this.processCallback(e), (e.msg = new this.message.TipMessage(e)), this.sendMsg(e);
        }),
        (s.sendCustomMsg = function(e) {
          return (
            this.processCallback(e), (e.msg = new this.message.CustomMessage(e)), this.sendMsg(e)
          );
        }),
        (s.sendRobotMsg = function(e) {
          return (
            this.processCallback(e), (e.msg = new this.message.RobotMessage(e)), this.sendMsg(e)
          );
        }),
        (s.sendMsg = function(e) {
          const t = this.protocol;

          const n = e.msg;

          const r = {};

          const s = !!e.isLocal;
          if (
            (s && e.time && (n.time = e.time),
            e.resend && (e.flow !== 'out' || e.status !== 'fail'))
          )
            return o.onError('只能重发发送失败的消息');
          (e.callback.options.idClient = n.idClient), this.beforeSendMsg(e, r);
          let i = (e.rtnMsg = this.formatReturnMsg(n));
          return (
            s && ((i.status = 'success'), (i.isLocal = !0)),
            t.storeSendMsg && (r.promise = t.storeSendMsg(i)),
            (e.cbaop = function(e) {
              if (e && e.from !== 'server')
                return (i.status = 'fail'), t.updateSendMsgError && t.updateSendMsgError(i), i;
            }),
            s || ((r.msg = n), this.sendCmd(e.cmd, r, e.callback)),
            this.afterSendMsg(e),
            s &&
              setTimeout(() => {
                (i = o.simpleClone(i)), e.done(null, i);
              }, 0),
            o.copy(i)
          );
        }),
        (s.beforeSendMsg = function() {}),
        (s.afterSendMsg = function() {}),
        (s.formatReturnMsg = function(e) {
          return (
            (e = o.copy(e)),
            this.protocol.completeMsg(e),
            (e.status = 'sending'),
            (e = this.message.reverse(e))
          );
        }),
        (s.resendMsg = function(e) {
          return (
            o.verifyOptions(e, 'msg', 'msg::resendMsg'),
            this.trimMsgFlag(e),
            (e.resend = !0),
            this._sendMsgByType(e)
          );
        }),
        (s.forwardMsg = function(e) {
          return (
            o.verifyOptions(e, 'msg', 'msg::forwardMsg'),
            this.beforeForwardMsg(e),
            this.trimMsgFlag(e),
            (e.forward = !0),
            (e.msg.idClient = o.guid()),
            this._sendMsgByType(e)
          );
        }),
        (s.trimMsgFlag = function(e) {
          e && e.msg && ((e.msg = o.copy(e.msg)), delete e.msg.resend, delete e.msg.forward);
        }),
        (s.beforeForwardMsg = function() {}),
        (s._sendMsgByType = function(e) {
          switch (
            (o.verifyOptions(e, 'msg', 'msg::_sendMsgByType'),
            o.verifyParamValid(
              'msg.type',
              e.msg.type,
              this.message.validTypes,
              'msg::_sendMsgByType'
            ),
            o.merge(e, e.msg),
            e.type)
          ) {
            case 'text':
              return this.sendText(e);
            case 'image':
            case 'audio':
            case 'video':
            case 'file':
              return this.sendFile(e);
            case 'geo':
              return this.sendGeo(e);
            case 'custom':
              return this.sendCustomMsg(e);
            case 'tip':
              return this.sendTipMsg(e);
            default:
              throw new a(`不能发送类型为 ${e.type} 的消息`);
          }
        }),
        (s.parseRobotTemplate = function(e) {
          if (/<template[^>\/]+\/>/.test(e))
            return { raw: e, json: [{ type: 'text', name: '', text: '' }] };
          if (!/<template[^>\/]+>/.test(e))
            return { raw: e, json: [{ type: 'text', name: '', text: e }] };
          const t = new i({ escapeMode: !1 });
          e = e.replace(/<template [^>]+>/, '<template>');
          let n = t.xml2js(e);
          (n = n.template.LinearLayout), Array.isArray(n) || (n = [n]);
          let r = [];
          return (
            (n = n.forEach(e => {
              e.image && (r = r.concat(o(e))),
                e.text && (r = r.concat(s(e))),
                e.link &&
                  (r = r.concat(
                    (function(e) {
                      if (e.link) {
                        let t = e.link;
                        Array.isArray(t) || (t = [t]),
                          (t = t.map(e => {
                            return (
                              e.image && (e.image = o(e)),
                              e.text && (e.text = s(e)),
                              e._type === 'url'
                                ? ((e.type = 'url'),
                                  (e.style = e._style || ''),
                                  (e.target = e._target),
                                  delete e._target,
                                  delete e._style)
                                : e._type === 'block' &&
                                  ((e.type = 'block'),
                                  (e.style = e._style || ''),
                                  (e.params = e._params || ''),
                                  (e.target = e._target),
                                  delete e._params,
                                  delete e._target,
                                  delete e._style),
                              delete e._type,
                              e
                            );
                          })),
                          (e.link = t);
                      }
                      return e.link;
                    })(e)
                  ));
            })),
            { raw: e, json: r }
          );
          function s(e) {
            return (
              Array.isArray(e.text) || (e.text = [e.text]),
              (e.text = e.text.map(e => {
                return { type: 'text', name: e._name, text: e.__text };
              })),
              e.text
            );
          }
          function o(e) {
            return (
              Array.isArray(e.image) || (e.image = [e.image]),
              (e.image = e.image.map(e => {
                return { type: 'image', name: e._name, url: e._url };
              })),
              e.image
            );
          }
        });
    },
    function(e, t, n) {
      const r = n(46).fn;
      (r.isConnected = function() {
        return !!this.protocol && this.protocol.isConnected();
      }),
        (r.connect = function() {
          (this.protocol.appLogin = 0), this.protocol.connect();
        }),
        (r.disconnect = function(e) {
          (e = e || {}), this.protocol.disconnect(e.done);
        });
    },
    function(e, t, n) {
      const r = n(108);
      e.exports = function(e, t) {
        return (
          (t.method = 'POST'),
          (t.headers = t.headers || {}),
          (t.headers['Content-Type'] = 'multipart/form-data'),
          (t.timeout = 0),
          (t.type = t.type || 'json'),
          r(e, t)
        );
      };
    },
    function(e, t, n) {
      const r = n(24);

      const s = n(108);

      const o = (function() {
        const e = /json/i;

        const t = /post/i;
        return function(n, o) {
          const i = ((o = o || {}).data = o.data || {});

          const a = (o.headers = o.headers || {});

          const c = r.checkWithDefault(a, 'Accept', 'application/json');

          const u = r.checkWithDefault(a, 'Content-Type', 'application/json');
          return (
            e.test(c) && (o.type = 'json'),
            t.test(o.method) && e.test(u) && (o.data = JSON.stringify(i)),
            s(n, o)
          );
        };
      })();
      e.exports = o;
    },
    function(e, t, n) {
      const r = n(24);

      const s = n(126);

      const o = n(107);

      const i = {};
      function a(e) {
        this.init(), o.call(this, e);
      }
      const c = o.prototype;

      const u = (a.prototype = Object.create(c));
      (u.init = (function() {
        const e = 'NEJ-AJAX-DATA:';

        let t = !1;
        function n(t) {
          let n = t.data;
          if (n.indexOf(e) === 0) {
            const r = (n = JSON.parse(n.replace(e, ''))).key;

            const s = i[r];
            s && (delete i[r], (n.result = decodeURIComponent(n.result || '')), s.onLoad(n));
          }
        }
        return function() {
          !(function() {
            if (!t) {
              t = !0;
              const e = r.getGlobal();
              e.postMessage ? r.on(e, 'message', n) : s.addMsgListener(n);
            }
          })();
        };
      })()),
        (u.doSend = function() {
          const e = this.options;

          const t = r.url2origin(e.url);

          const n = e.proxyUrl || `${t}/res/nej_proxy_frame.html`;

          const o = i[n];
          if (r.isArray(o)) o.push(this.doSend.bind(this, e));
          else {
            if (!o)
              return (
                (i[n] = [this.doSend.bind(this, e)]),
                void r.createIframe({
                  src: n,
                  onload(e) {
                    const t = i[n];
                    (i[n] = r.target(e).contentWindow),
                      t.forEach(e => {
                        try {
                          e();
                        } catch (e) {
                          console.error(e);
                        }
                      });
                  },
                })
              );
            if (!this.aborted) {
              const a = (this.key = r.uniqueID());
              i[a] = this;
              const c = r.fetch({ method: 'GET', url: '', data: null, headers: {}, timeout: 0 }, e);
              (c.key = a), s.postMessage(o, { data: c }), this.afterSend();
            }
          }
        }),
        (u.abort = function() {
          (this.aborted = !0), delete i[this.key], c.abort.call(this);
        }),
        (e.exports = a);
    },
    function(e, t, n) {
      const r = n(24);

      const s = n(107);

      const o = n(126);

      const i = 'NEJ-UPLOAD-RESULT:';

      const a = {};
      function c(e) {
        this.init(), s.call(this, e);
      }
      const u = s.prototype;

      const l = (c.prototype = Object.create(u));
      (l.init = (function() {
        let e = !1;
        function t(e) {
          let t = e.data;
          if (t.indexOf(i) === 0) {
            const n = (t = JSON.parse(t.replace(i, ''))).key;

            const r = a[n];
            r && (delete a[n], (t.result = decodeURIComponent(t.result || '')), r.onLoad(t.result));
          }
        }
        return function() {
          !(function() {
            if (!e) {
              e = !0;
              const n = r.getGlobal();
              n.postMessage ? r.on(n, 'message', t) : (o.addMsgListener(t), o.startTimer());
            }
          })();
        };
      })()),
        (l.doSend = function() {
          const e = this;

          const t = e.options;

          const n = (e.key = `zoro-ajax-upload-iframe-${r.uniqueID()}`);
          a[n] = e;
          const s = (e.form = r.html2node('<form style="display:none;"></form>'));
          document.body.appendChild(s),
            (s.target = n),
            (s.method = 'POST'),
            (s.enctype = 'multipart/form-data'),
            (s.encoding = 'multipart/form-data');
          const o = t.url;

          const i = r.genUrlSep(o);
          s.action = `${o + i}_proxy_=form`;
          const c = t.data;

          const u = [];

          const l = [];
          function m() {
            u.forEach((e, t) => {
              const n = l[t];
              n.parentNode &&
                ((e.name = n.name),
                r.isFunction(e.setAttribute) && e.setAttribute('form', n.getAttribute('form')),
                n.parentNode.replaceChild(e, n));
            });
          }
          c &&
            r.getKeys(c, t.putFileAtEnd).forEach(e => {
              const t = c[e];
              if (t.tagName && t.tagName.toUpperCase() === 'INPUT') {
                if (t.type === 'file') {
                  const n = t;

                  const o = n.cloneNode(!0);
                  n.parentNode.insertBefore(o, n);
                  const i = r.dataset(n, 'name');
                  i && (n.name = i),
                    s.appendChild(n),
                    r.isFunction(n.setAttribute) &&
                      (n.setAttribute('form', ''), n.removeAttribute('form')),
                    u.push(t),
                    l.push(o);
                }
              } else {
                const a = r.html2node('<input type="hidden"/>');
                (a.name = e), (a.value = t), s.appendChild(a);
              }
            });
          var d = (e.iframe = r.createIframe({
            name: n,
            onload() {
              e.aborted
                ? m()
                : (r.on(d, 'load', e.checkResult.bind(e)), s.submit(), m(), e.afterSend());
            },
          }));
        }),
        (l.checkResult = function() {
          let e;
          let t;
          try {
            if (
              (t = (
                (e = this.iframe.contentWindow.document.body).innerText ||
                e.textContent ||
                ''
              ).trim()).indexOf(i) >= 0 ||
              e.innerHTML.indexOf(i) >= 0
            )
              return;
          } catch (e) {
            return void console.error('ignore error if not same domain,', e);
          }
          this.onLoad(t);
        }),
        (l.onLoad = function(e) {
          u.onLoad.call(this, { status: 200, result: e }),
            r.remove(this.form),
            r.remove(this.iframe),
            u.destroy.call(this);
        }),
        (l.destroy = function() {
          r.remove(this.iframe), r.remove(this.form);
        }),
        (l.abort = function() {
          (this.aborted = !0), delete a[this.key], u.abort.call(this);
        }),
        (e.exports = c);
    },
    function(e, t, n) {
      let r;
      /*!
 * EventEmitter v5.2.5 - git.io/ee
 * Unlicense - http://unlicense.org/
 * Oliver Caldwell - http://oli.me.uk/
 * @preserve
 */ !(function(
        t
      ) {
        function s() {}
        const o = s.prototype;

        const i = t.EventEmitter;
        function a(e, t) {
          for (let n = e.length; n--; ) if (e[n].listener === t) return n;
          return -1;
        }
        function c(e) {
          return function() {
            return this[e].apply(this, arguments);
          };
        }
        (o.getListeners = function(e) {
          let t;

          let n;

          const r = this._getEvents();
          if (e instanceof RegExp)
            for (n in ((t = {}), r)) r.hasOwnProperty(n) && e.test(n) && (t[n] = r[n]);
          else t = r[e] || (r[e] = []);
          return t;
        }),
          (o.flattenListeners = function(e) {
            let t;

            const n = [];
            for (t = 0; t < e.length; t += 1) n.push(e[t].listener);
            return n;
          }),
          (o.getListenersAsObject = function(e) {
            let t;

            const n = this.getListeners(e);
            return n instanceof Array && ((t = {})[e] = n), t || n;
          }),
          (o.addListener = function(e, t) {
            if (
              !(function e(t) {
                return (
                  typeof t === 'function' ||
                  t instanceof RegExp ||
                  (!(!t || typeof t !== 'object') && e(t.listener))
                );
              })(t)
            )
              throw new TypeError('listener must be a function');
            let n;

            const r = this.getListenersAsObject(e);

            const s = typeof t === 'object';
            for (n in r)
              r.hasOwnProperty(n) &&
                a(r[n], t) === -1 &&
                r[n].push(s ? t : { listener: t, once: !1 });
            return this;
          }),
          (o.on = c('addListener')),
          (o.addOnceListener = function(e, t) {
            return this.addListener(e, { listener: t, once: !0 });
          }),
          (o.once = c('addOnceListener')),
          (o.defineEvent = function(e) {
            return this.getListeners(e), this;
          }),
          (o.defineEvents = function(e) {
            for (let t = 0; t < e.length; t += 1) this.defineEvent(e[t]);
            return this;
          }),
          (o.removeListener = function(e, t) {
            let n;

            let r;

            const s = this.getListenersAsObject(e);
            for (r in s) s.hasOwnProperty(r) && (n = a(s[r], t)) !== -1 && s[r].splice(n, 1);
            return this;
          }),
          (o.off = c('removeListener')),
          (o.addListeners = function(e, t) {
            return this.manipulateListeners(!1, e, t);
          }),
          (o.removeListeners = function(e, t) {
            return this.manipulateListeners(!0, e, t);
          }),
          (o.manipulateListeners = function(e, t, n) {
            let r;

            let s;

            const o = e ? this.removeListener : this.addListener;

            const i = e ? this.removeListeners : this.addListeners;
            if (typeof t !== 'object' || t instanceof RegExp)
              for (r = n.length; r--; ) o.call(this, t, n[r]);
            else
              for (r in t)
                t.hasOwnProperty(r) &&
                  (s = t[r]) &&
                  (typeof s === 'function' ? o.call(this, r, s) : i.call(this, r, s));
            return this;
          }),
          (o.removeEvent = function(e) {
            let t;

            const n = typeof e;

            const r = this._getEvents();
            if (n === 'string') delete r[e];
            else if (e instanceof RegExp)
              for (t in r) r.hasOwnProperty(t) && e.test(t) && delete r[t];
            else delete this._events;
            return this;
          }),
          (o.removeAllListeners = c('removeEvent')),
          (o.emitEvent = function(e, t) {
            let n;

            let r;

            let s;

            let o;

            const i = this.getListenersAsObject(e);
            for (o in i)
              if (i.hasOwnProperty(o))
                for (n = i[o].slice(0), s = 0; s < n.length; s++)
                  !0 === (r = n[s]).once && this.removeListener(e, r.listener),
                    r.listener.apply(this, t || []) === this._getOnceReturnValue() &&
                      this.removeListener(e, r.listener);
            return this;
          }),
          (o.trigger = c('emitEvent')),
          (o.emit = function(e) {
            const t = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(e, t);
          }),
          (o.setOnceReturnValue = function(e) {
            return (this._onceReturnValue = e), this;
          }),
          (o._getOnceReturnValue = function() {
            return !this.hasOwnProperty('_onceReturnValue') || this._onceReturnValue;
          }),
          (o._getEvents = function() {
            return this._events || (this._events = {});
          }),
          (s.noConflict = function() {
            return (t.EventEmitter = i), s;
          }),
          void 0 ===
            (r = function() {
              return s;
            }.call(t, n, t, e)) || (e.exports = r);
      })(typeof window !== 'undefined' ? window : this || {});
    },
    function(e, t, n) {
      const r = n(24);

      const s = n(107);
      function o(e) {
        e.onuploading && this.on('uploading', e.onuploading), s.call(this, e);
      }
      const i = s.prototype;

      const a = (o.prototype = Object.create(i));
      (a.doSend = function() {
        const e = this.options;

        const t = e.headers;

        const n = (this.xhr = new XMLHttpRequest());
        if (t['Content-Type'] === 'multipart/form-data') {
          delete t['Content-Type'],
            (n.upload.onprogress = this.onProgress.bind(this)),
            (n.upload.onload = this.onProgress.bind(this));
          const s = e.data;
          (e.data = new window.FormData()),
            s &&
              r.getKeys(s, e.putFileAtEnd).forEach(t => {
                const n = s[t];
                n.tagName && n.tagName.toUpperCase() === 'INPUT'
                  ? n.type === 'file' &&
                    [].forEach.call(n.files, t => {
                      e.data.append(
                        r.dataset(n, 'name') || n.name || t.name || `file-${r.uniqueID()}`,
                        t
                      );
                    })
                  : e.data.append(t, n);
              });
        }
        (n.onreadystatechange = this.onStateChange.bind(this)),
          e.timeout !== 0 && (this.timer = setTimeout(this.onTimeout.bind(this), e.timeout)),
          n.open(e.method, e.url, !e.sync),
          Object.keys(t).forEach(e => {
            n.setRequestHeader(e, t[e]);
          }),
          e.cookie && 'withCredentials' in n && (n.withCredentials = !0),
          n.send(e.data),
          this.afterSend();
      }),
        (a.onProgress = function(e) {
          e.lengthComputable && e.loaded <= e.total && this.emit('uploading', e);
        }),
        (a.onStateChange = function() {
          const e = this.xhr;
          e.readyState === 4 && this.onLoad({ status: e.status, result: e.responseText || '' });
        }),
        (a.getResponseHeader = function(e) {
          const t = this.xhr;
          return t ? t.getResponseHeader(e) : '';
        }),
        (a.destroy = function() {
          clearTimeout(this.timer);
          try {
            (this.xhr.onreadystatechange = r.f), this.xhr.abort();
          } catch (e) {
            console.error('ignore error ajax destroy,', e);
          }
          i.destroy.call(this);
        }),
        (e.exports = o);
    },
    function(e, t, n) {
      const r = n(15);

      const s = n(0);
      n(59);
      function o() {
        const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        s.merge(this, {
          options: e,
          debug: !1,
          api: 'log',
          style: 'color:blue;',
          log: s.emptyFunc,
          info: s.emptyFunc,
          warn: s.emptyFunc,
          error: s.emptyFunc,
        }),
          (this.prefix = e.prefix || ''),
          this.setDebug(e.debug);
      }
      const i = o.prototype;

      const a = ['Chrome', 'Safari', 'Firefox'];
      (i.setDebug = function() {
        const e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];

        const t = this;
        if (((t.debug = e), e.style && (t.style = e.style), t.debug && s.exist(console))) {
          const n = console;
          (t.debug = function() {
            const e = t.formatArgs(arguments);
            a.indexOf(r.name) !== -1 &&
              s.isString(e[0]) &&
              ((e[0] = `%c${e[0]}`), e.splice(1, 0, t.style)),
              t._log('debug', e);
          }),
            (t.log = function() {
              const e = t.formatArgs(arguments);
              a.indexOf(r.name) !== -1 &&
                s.isString(e[0]) &&
                ((e[0] = `%c${e[0]}`), e.splice(1, 0, t.style)),
                t._log('log', e);
            }),
            (t.info = function() {
              const e = t.formatArgs(arguments);
              a.indexOf(r.name) !== -1 &&
                s.isString(e[0]) &&
                ((e[0] = `%c${e[0]}`), e.splice(1, 0, t.style)),
                t._log('info', e);
            }),
            (t.warn = function() {
              const e = t.formatArgs(arguments);
              a.indexOf(r.name) !== -1 &&
                s.isString(e[0]) &&
                ((e[0] = `%c${e[0]}`), e.splice(1, 0, t.style)),
                t._log('warn', e);
            }),
            (t.error = function() {
              const e = t.formatArgs(arguments);
              a.indexOf(r.name) !== -1 &&
                s.isString(e[0]) &&
                ((e[0] = `%c${e[0]}`), e.splice(1, 0, t.style)),
                t._log('error', e);
            }),
            (t._log = function(e, r) {
              const o = t.options.logFunc;

              let i = null;
              if (o && (o[e] && (i = o[e]), s.isFunction(i))) i.apply(o, r);
              else if (n[e])
                try {
                  n[e].apply ? t.chrome(e, r) : t.ie(e, r);
                } catch (e) {}
            }),
            (t.chrome = function(e, s) {
              a.indexOf(r.name) !== -1 ? n[e](...s) : t.ie(e, s);
            }),
            (t.ie = function(e, t) {
              t.forEach(t => {
                n[e](JSON.stringify(t, null, 4));
              });
            });
        }
      }),
        (i.formatArgs = function(e) {
          e = [].slice.call(e, 0);
          const t = new Date();

          const n = `[NIM LOG ${c(t.getMonth() + 1)}-${c(t.getDate())} ${c(t.getHours())}:${c(
            t.getMinutes()
          )}:${c(t.getSeconds())}:${c(t.getMilliseconds(), 3)} ${this.prefix.toUpperCase()}]  `;
          return (
            s.isString(e[0]) ? (e[0] = n + e[0]) : e.splice(0, 0, n),
            e.forEach((t, n) => {
              (s.isArray(t) || s.isObject(t)) && (e[n] = s.simpleClone(t));
            }),
            e
          );
        });
      var c = function(e, t) {
        t = t || 2;
        for (var n = `${e}`; n.length < t; ) n = `0${n}`;
        return n;
      };
      e.exports = o;
    },
    function(e, t, n) {
      const r = n(4);
      typeof window !== 'undefined' &&
        (window.console ||
          r.isWeixinApp ||
          (window.console = {
            log() {},
            info() {},
            warn() {},
            error() {},
          }));
    },
    function(e, t) {
      let n;

      let r;

      const s = (e.exports = {});
      function o() {
        throw new Error('setTimeout has not been defined');
      }
      function i() {
        throw new Error('clearTimeout has not been defined');
      }
      function a(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === o || !n) && setTimeout) return (n = setTimeout), setTimeout(e, 0);
        try {
          return n(e, 0);
        } catch (t) {
          try {
            return n.call(null, e, 0);
          } catch (t) {
            return n.call(this, e, 0);
          }
        }
      }
      !(function() {
        try {
          n = typeof setTimeout === 'function' ? setTimeout : o;
        } catch (e) {
          n = o;
        }
        try {
          r = typeof clearTimeout === 'function' ? clearTimeout : i;
        } catch (e) {
          r = i;
        }
      })();
      let c;

      let u = [];

      let l = !1;

      let m = -1;
      function d() {
        l && c && ((l = !1), c.length ? (u = c.concat(u)) : (m = -1), u.length && p());
      }
      function p() {
        if (!l) {
          const e = a(d);
          l = !0;
          for (let t = u.length; t; ) {
            for (c = u, u = []; ++m < t; ) c && c[m].run();
            (m = -1), (t = u.length);
          }
          (c = null),
            (l = !1),
            (function(e) {
              if (r === clearTimeout) return clearTimeout(e);
              if ((r === i || !r) && clearTimeout) return (r = clearTimeout), clearTimeout(e);
              try {
                r(e);
              } catch (t) {
                try {
                  return r.call(null, e);
                } catch (t) {
                  return r.call(this, e);
                }
              }
            })(e);
        }
      }
      function f(e, t) {
        (this.fun = e), (this.array = t);
      }
      function g() {}
      (s.nextTick = function(e) {
        const t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (let n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        u.push(new f(e, t)), u.length !== 1 || l || a(p);
      }),
        (f.prototype.run = function() {
          this.fun.apply(null, this.array);
        }),
        (s.title = 'browser'),
        (s.browser = !0),
        (s.env = {}),
        (s.argv = []),
        (s.version = ''),
        (s.versions = {}),
        (s.on = g),
        (s.addListener = g),
        (s.once = g),
        (s.off = g),
        (s.removeListener = g),
        (s.removeAllListeners = g),
        (s.emit = g),
        (s.prependListener = g),
        (s.prependOnceListener = g),
        (s.listeners = function(e) {
          return [];
        }),
        (s.binding = function(e) {
          throw new Error('process.binding is not supported');
        }),
        (s.cwd = function() {
          return '/';
        }),
        (s.chdir = function(e) {
          throw new Error('process.chdir is not supported');
        }),
        (s.umask = function() {
          return 0;
        });
    },
    function(e, t, n) {
      (function(t, n) {
        /*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.4+314e4831
 */
        !(function(t, n) {
          e.exports = n();
        })(0, () => {
          function e(e) {
            return typeof e === 'function';
          }
          const r = Array.isArray
            ? Array.isArray
            : function(e) {
                return Object.prototype.toString.call(e) === '[object Array]';
              };

          let s = 0;

          let o = void 0;

          let i = void 0;

          let a = function(e, t) {
            (f[s] = e), (f[s + 1] = t), (s += 2) === 2 && (i ? i(g) : h());
          };
          const c = typeof window !== 'undefined' ? window : void 0;

          const u = c || {};

          const l = u.MutationObserver || u.WebKitMutationObserver;

          const m =
            typeof self === 'undefined' &&
            void 0 !== t &&
            {}.toString.call(t) === '[object process]';

          const d =
            typeof Uint8ClampedArray !== 'undefined' &&
            typeof importScripts !== 'undefined' &&
            typeof MessageChannel !== 'undefined';
          function p() {
            const e = setTimeout;
            return function() {
              return e(g, 1);
            };
          }
          var f = new Array(1e3);
          function g() {
            for (let e = 0; e < s; e += 2) {
              (0, f[e])(f[e + 1]), (f[e] = void 0), (f[e + 1] = void 0);
            }
            s = 0;
          }
          var h = void 0;
          function y(e, t) {
            const n = this;

            const r = new this.constructor(M);
            void 0 === r[b] && j(r);
            const s = n._state;
            if (s) {
              const o = arguments[s - 1];
              a(() => {
                return R(s, r, o, n._result);
              });
            } else _(n, r, e, t);
            return r;
          }
          function v(e) {
            if (e && typeof e === 'object' && e.constructor === this) return e;
            const t = new this(M);
            return O(t, e), t;
          }
          h = m
            ? function() {
                return t.nextTick(g);
              }
            : l
              ? (function() {
                  let e = 0;

                  const t = new l(g);

                  const n = document.createTextNode('');
                  return (
                    t.observe(n, { characterData: !0 }),
                    function() {
                      n.data = e = ++e % 2;
                    }
                  );
                })()
              : d
                ? (function() {
                    const e = new MessageChannel();
                    return (
                      (e.port1.onmessage = g),
                      function() {
                        return e.port2.postMessage(0);
                      }
                    );
                  })()
                : void 0 === c
                  ? (function() {
                      try {
                        const e = Function('return this')().require('vertx');
                        return void 0 !== (o = e.runOnLoop || e.runOnContext)
                          ? function() {
                              o(g);
                            }
                          : p();
                      } catch (e) {
                        return p();
                      }
                    })()
                  : p();
          var b = Math.random()
            .toString(36)
            .substring(2);
          function M() {}
          const T = void 0;

          const k = 1;

          const S = 2;

          const C = { error: null };
          function P(e) {
            try {
              return e.then;
            } catch (e) {
              return (C.error = e), C;
            }
          }
          function I(t, n, r) {
            n.constructor === t.constructor && r === y && n.constructor.resolve === v
              ? (function(e, t) {
                  t._state === k
                    ? x(e, t._result)
                    : t._state === S
                      ? A(e, t._result)
                      : _(
                          t,
                          void 0,
                          t => {
                            return O(e, t);
                          },
                          t => {
                            return A(e, t);
                          }
                        );
                })(t, n)
              : r === C
                ? (A(t, C.error), (C.error = null))
                : void 0 === r
                  ? x(t, n)
                  : e(r)
                    ? (function(e, t, n) {
                        a(e => {
                          let r = !1;

                          const s = (function(e, t, n, r) {
                            try {
                              e.call(t, n, r);
                            } catch (e) {
                              return e;
                            }
                          })(
                            n,
                            t,
                            n => {
                              r || ((r = !0), t !== n ? O(e, n) : x(e, n));
                            },
                            t => {
                              r || ((r = !0), A(e, t));
                            },
                            e._label
                          );
                          !r && s && ((r = !0), A(e, s));
                        }, e);
                      })(t, n, r)
                    : x(t, n);
          }
          function O(e, t) {
            e === t
              ? A(e, new TypeError('You cannot resolve a promise with itself'))
              : !(function(e) {
                  const t = typeof e;
                  return e !== null && (t === 'object' || t === 'function');
                })(t)
                ? x(e, t)
                : I(e, t, P(t));
          }
          function w(e) {
            e._onerror && e._onerror(e._result), E(e);
          }
          function x(e, t) {
            e._state === T &&
              ((e._result = t), (e._state = k), e._subscribers.length !== 0 && a(E, e));
          }
          function A(e, t) {
            e._state === T && ((e._state = S), (e._result = t), a(w, e));
          }
          function _(e, t, n, r) {
            const s = e._subscribers;

            const o = s.length;
            (e._onerror = null),
              (s[o] = t),
              (s[o + k] = n),
              (s[o + S] = r),
              o === 0 && e._state && a(E, e);
          }
          function E(e) {
            const t = e._subscribers;

            const n = e._state;
            if (t.length !== 0) {
              for (let r = void 0, s = void 0, o = e._result, i = 0; i < t.length; i += 3)
                (r = t[i]), (s = t[i + n]), r ? R(n, r, s, o) : s(o);
              e._subscribers.length = 0;
            }
          }
          function R(t, n, r, s) {
            const o = e(r);

            let i = void 0;

            let a = void 0;

            let c = void 0;

            let u = void 0;
            if (o) {
              if (
                ((i = (function(e, t) {
                  try {
                    return e(t);
                  } catch (e) {
                    return (C.error = e), C;
                  }
                })(r, s)) === C
                  ? ((u = !0), (a = i.error), (i.error = null))
                  : (c = !0),
                n === i)
              )
                return void A(
                  n,
                  new TypeError('A promises callback cannot return that same promise.')
                );
            } else (i = s), (c = !0);
            n._state !== T ||
              (o && c ? O(n, i) : u ? A(n, a) : t === k ? x(n, i) : t === S && A(n, i));
          }
          let F = 0;
          function j(e) {
            (e[b] = F++), (e._state = void 0), (e._result = void 0), (e._subscribers = []);
          }
          const U = (function() {
            function e(e, t) {
              (this._instanceConstructor = e),
                (this.promise = new e(M)),
                this.promise[b] || j(this.promise),
                r(t)
                  ? ((this.length = t.length),
                    (this._remaining = t.length),
                    (this._result = new Array(this.length)),
                    this.length === 0
                      ? x(this.promise, this._result)
                      : ((this.length = this.length || 0),
                        this._enumerate(t),
                        this._remaining === 0 && x(this.promise, this._result)))
                  : A(this.promise, new Error('Array Methods must be provided an Array'));
            }
            return (
              (e.prototype._enumerate = function(e) {
                for (let t = 0; this._state === T && t < e.length; t++) this._eachEntry(e[t], t);
              }),
              (e.prototype._eachEntry = function(e, t) {
                const n = this._instanceConstructor;

                const r = n.resolve;
                if (r === v) {
                  const s = P(e);
                  if (s === y && e._state !== T) this._settledAt(e._state, t, e._result);
                  else if (typeof s !== 'function') this._remaining--, (this._result[t] = e);
                  else if (n === N) {
                    const o = new n(M);
                    I(o, e, s), this._willSettleAt(o, t);
                  } else
                    this._willSettleAt(
                      new n(t => {
                        return t(e);
                      }),
                      t
                    );
                } else this._willSettleAt(r(e), t);
              }),
              (e.prototype._settledAt = function(e, t, n) {
                const r = this.promise;
                r._state === T && (this._remaining--, e === S ? A(r, n) : (this._result[t] = n)),
                  this._remaining === 0 && x(r, this._result);
              }),
              (e.prototype._willSettleAt = function(e, t) {
                const n = this;
                _(
                  e,
                  void 0,
                  e => {
                    return n._settledAt(k, t, e);
                  },
                  e => {
                    return n._settledAt(S, t, e);
                  }
                );
              }),
              e
            );
          })();
          var N = (function() {
            function e(t) {
              (this[b] = F++),
                (this._result = this._state = void 0),
                (this._subscribers = []),
                M !== t &&
                  (typeof t !== 'function' &&
                    (function() {
                      throw new TypeError(
                        'You must pass a resolver function as the first argument to the promise constructor'
                      );
                    })(),
                  this instanceof e
                    ? (function(e, t) {
                        try {
                          t(
                            t => {
                              O(e, t);
                            },
                            t => {
                              A(e, t);
                            }
                          );
                        } catch (t) {
                          A(e, t);
                        }
                      })(this, t)
                    : (function() {
                        throw new TypeError(
                          "Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function."
                        );
                      })());
            }
            return (
              (e.prototype.catch = function(e) {
                return this.then(null, e);
              }),
              (e.prototype.finally = function(e) {
                const t = this.constructor;
                return this.then(
                  n => {
                    return t.resolve(e()).then(() => {
                      return n;
                    });
                  },
                  n => {
                    return t.resolve(e()).then(() => {
                      throw n;
                    });
                  }
                );
              }),
              e
            );
          })();
          return (
            (N.prototype.then = y),
            (N.all = function(e) {
              return new U(this, e).promise;
            }),
            (N.race = function(e) {
              const t = this;
              return r(e)
                ? new t((n, r) => {
                    for (let s = e.length, o = 0; o < s; o++) t.resolve(e[o]).then(n, r);
                  })
                : new t((e, t) => {
                    return t(new TypeError('You must pass an array to race.'));
                  });
            }),
            (N.resolve = v),
            (N.reject = function(e) {
              const t = new this(M);
              return A(t, e), t;
            }),
            (N._setScheduler = function(e) {
              i = e;
            }),
            (N._setAsap = function(e) {
              a = e;
            }),
            (N._asap = a),
            (N.polyfill = function() {
              let e = void 0;
              if (void 0 !== n) e = n;
              else if (typeof self !== 'undefined') e = self;
              else
                try {
                  e = Function('return this')();
                } catch (e) {
                  throw new Error(
                    'polyfill failed because global object is unavailable in this environment'
                  );
                }
              const t = e.Promise;
              if (t) {
                let r = null;
                try {
                  r = Object.prototype.toString.call(t.resolve());
                } catch (e) {}
                if (r === '[object Promise]' && !t.cast) return;
              }
              e.Promise = N;
            }),
            (N.Promise = N),
            N
          );
        });
      }.call(this, n(207), n(30)));
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
    function(e, t, n) {
      const r = n(116).fn;

      const s = n(0);
      (r.queueOffer = function(e) {
        s.verifyOptions(e, 'elementKey elementValue', 'msg::queueOffer'),
          e.transient ? (e.transient = !0) : (e.transient = !1),
          this.processCallback(e),
          this.sendCmd('queueOffer', e, e.callback);
      }),
        (r.queuePoll = function() {
          const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          (e.elementKey = e.elementKey || ''),
            this.processCallback(e),
            this.sendCmd('queuePoll', e, e.callback);
        }),
        (r.queueList = function(e) {
          this.processCallback(e), this.sendCmd('queueList', e, e.callback);
        }),
        (r.peak = function(e) {
          this.processCallback(e), this.sendCmd('peak', e, e.callback);
        }),
        (r.queueDrop = function(e) {
          this.processCallback(e), this.sendCmd('queueDrop', e, e.callback);
        });
    },
    function(e, t, n) {
      const r = n(0);

      const s = r.undef;

      const o = r.verifyOptions;

      const i = r.verifyParamType;

      const a = n(141);

      const c = n(116).fn;
      (c.updateMyChatroomMemberInfo = function(e) {
        o(e, 'member needNotify', 'member::updateMyChatroomMemberInfo'),
          i('needNotify', e.needNotify, 'boolean', 'member::updateMyChatroomMemberInfo'),
          (e.needSave = e.needSave || !1),
          i('needSave', e.needSave, 'boolean', 'member::updateMyChatroomMemberInfo'),
          this.processCustom(e),
          this.processCallback(e),
          (e.chatroomMember = new a(e.member)),
          this.sendCmd('updateMyChatroomMemberInfo', e);
      }),
        (c.getChatroomMembers = function(e) {
          o(e, 'guest', 'member::getChatroomMembers'),
            i('guest', e.guest, 'boolean', 'member::getChatroomMembers'),
            s(e.time) ? (e.time = 0) : i('time', e.time, 'number', 'member::getChatroomMembers'),
            s(e.limit)
              ? (e.limit = 100)
              : i('limit', e.limit, 'number', 'member::getChatroomMembers'),
            this.processCallback(e),
            (e.type = e.guest ? 1 : 0),
            !e.guest && e.onlyOnline && (e.type = 2),
            this.sendCmd('getChatroomMembers', e);
        }),
        (c.getChatroomMembersInfo = function(e) {
          o(e, 'accounts', 'member::getChatroomMembersInfo'),
            i('accounts', e.accounts, 'array', 'member::getChatroomMembersInfo'),
            this.processCallback(e),
            this.sendCmd('getChatroomMembersInfo', e);
        }),
        (c.markChatroomManager = function(e) {
          (e.type = 1), this.markChatroomMember(e);
        }),
        (c.markChatroomCommonMember = function(e) {
          (e.type = 2), this.markChatroomMember(e);
        }),
        (c.markChatroomBlacklist = function(e) {
          (e.type = -1), this.markChatroomMember(e);
        }),
        (c.markChatroomGaglist = function(e) {
          (e.type = -2), this.markChatroomMember(e);
        }),
        (c.markChatroomMember = function(e) {
          o(e, 'account type isAdd', 'member::markChatroomMember'),
            i('isAdd', e.isAdd, 'boolean', 'member::markChatroomMember'),
            s(e.level)
              ? (e.level = 0)
              : i('level', e.level, 'number', 'member::markChatroomMember');
          this.processCustom(e), this.processCallback(e), this.sendCmd('markChatroomMember', e);
        }),
        (c.kickChatroomMember = function(e) {
          o(e, 'account', 'member::kickChatroomMember'),
            this.processCustom(e),
            this.processCallback(e),
            this.sendCmd('kickChatroomMember', e);
        }),
        (c.updateChatroomMemberTempMute = function(e) {
          o(e, 'account duration needNotify', 'member::updateChatroomMemberTempMute'),
            i('duration', e.duration, 'number', 'member::updateChatroomMemberTempMute'),
            i('needNotify', e.needNotify, 'boolean', 'member::updateChatroomMemberTempMute'),
            this.processCustom(e),
            this.processCallback(e),
            this.sendCmd('updateChatroomMemberTempMute', e);
        }),
        (c.getRobotList = function(e) {
          s(e.timetag) && (e.timetag = 0), this.processCallback(e), this.sendCmd('syncRobot', e);
        });
    },
    function(e, t, n) {
      const r = n(0);

      const s = r.undef;

      const o = n(116).fn;
      o.beforeSendMsg = function(e) {
        e.cmd = 'sendMsg';
      };
      const i = {
        text: 0,
        image: 1,
        audio: 2,
        video: 3,
        geo: 4,
        notification: 5,
        file: 6,
        tip: 10,
        robot: 11,
        custom: 100,
      };
      o.getHistoryMsgs = function(e) {
        r.verifyOptions(e),
          s(e.timetag)
            ? (e.timetag = 0)
            : r.verifyParamType('timetag', e.timetag, 'number', 'msg::getHistoryMsgs'),
          s(e.limit)
            ? (e.limit = 100)
            : r.verifyParamType('limit', e.limit, 'number', 'msg::getHistoryMsgs'),
          s(e.reverse)
            ? (e.reverse = !1)
            : r.verifyParamType('reverse', e.reverse, 'boolean', 'msg::getHistoryMsgs'),
          s(e.msgTypes)
            ? (e.msgTypes = [])
            : Array.isArray(e.msgTypes)
              ? ((e.msgTypes = e.msgTypes.map(e => {
                  return i[e];
                })),
                (e.msgTypes = e.msgTypes.filter(e => {
                  return typeof e === 'number';
                })))
              : typeof i[e.msgTypes] === 'number'
                ? (e.msgTypes = [i[e.msgTypes]])
                : (e.msgTypes = []);
        this.processCallback(e),
          this.sendCmd('getHistoryMsgs', e, (t, n, r) => {
            Array.isArray(r) &&
              (r = r.map(e => {
                return i[e.type] && (e.type = i[e.type]), e;
              })),
              e.callback(t, n, r);
          });
      };
    },
    function(e, t, n) {
      const r = n(65);

      const s = n(0);

      const o = { welcome: '00', text: '01', link: '03' };

      const i = { '01': 'text', '02': 'image', '03': 'answer', 11: 'template' };
      function a(e) {
        s.verifyOptions(e, 'content', 'msg::RobotMessage');
        let t = e.content;
        switch (t.type) {
          case 'welcome':
            s.undef(e.body) && (this.body = '欢迎消息');
            break;
          case 'text':
            s.verifyOptions(t, 'content', 'msg::RobotMessage'),
              s.undef(e.body) && (this.body = t.content);
            break;
          case 'link':
            s.verifyOptions(t, 'target', 'msg::RobotMessage');
        }
        t.type && (t.type = o[t.type]),
          (t = { param: t, robotAccid: e.robotAccid }),
          (this.attach = JSON.stringify(t)),
          (e.type = 'robot'),
          r.call(this, e);
      }
      (a.prototype = Object.create(r.prototype)),
        (a.reverse = function(e) {
          const t = r.reverse(e);
          if (t.type === 'robot') {
            let n = JSON.parse(e.attach);
            if ((n.param && (n.param.type = i[n.param.type] || 'unknown'), n.robotMsg)) {
              const o = (n = s.merge(n, n.robotMsg)).message;
              n.flag === 'bot'
                ? (n.message = o.map(e => {
                    return (e.type = i[e.type] || 'unknown'), e;
                  }))
                : n.flag,
                delete n.robotMsg;
            }
            t.content = n;
          }
          return t;
        }),
        (e.exports = a);
    },
    function(e, t, n) {
      const r = n(65);

      const s = n(0);
      function o(e) {
        s.verifyOptions(e, 'tip', 'msg::TipMessage'),
          (e.type = 'tip'),
          r.call(this, e),
          (this.attach = e.tip);
      }
      (o.prototype = Object.create(r.prototype)),
        (o.reverse = function(e) {
          const t = r.reverse(e);
          return (t.tip = e.attach), t;
        }),
        (e.exports = o);
    },
    function(e, t, n) {
      const r = n(65);

      const s = n(0);
      function o(e) {
        s.verifyOptions(e, 'content', 'msg::CustomMessage'),
          (e.type = 'custom'),
          r.call(this, e),
          typeof e.content !== 'string' && (e.content = JSON.stringify(e.content)),
          (this.attach = e.content);
      }
      (o.prototype = Object.create(r.prototype)),
        (o.reverse = function(e) {
          const t = r.reverse(e);
          return (t.content = e.attach), t;
        }),
        (e.exports = o);
    },
    function(e, t, n) {
      const r = n(0).notundef;

      const s = n(65);

      const o = {
        301: 'memberEnter',
        302: 'memberExit',
        303: 'blackMember',
        304: 'unblackMember',
        305: 'gagMember',
        306: 'ungagMember',
        307: 'addManager',
        308: 'removeManager',
        309: 'addCommon',
        310: 'removeCommon',
        311: 'closeChatroom',
        312: 'updateChatroom',
        313: 'kickMember',
        314: 'addTempMute',
        315: 'removeTempMute',
        316: 'updateMemberInfo',
        317: 'updateQueue',
        318: 'muteRoom',
        319: 'unmuteRoom',
        320: 'batchUpdateQueue',
      };
      function i() {}
      (i.prototype = Object.create(s.prototype)),
        (i.reverse = function(e) {
          const t = s.reverse(e);
          if (((e.attach = e.attach ? `${e.attach}` : ''), e.attach)) {
            const n = JSON.parse(e.attach);
            if (((t.attach = { type: o[n.id] }), r(n.data))) {
              const i = n.data;
              if (
                (r(i.operator) && (t.attach.from = i.operator),
                r(i.opeNick) && (t.attach.fromNick = i.opeNick),
                r(i.target) && (t.attach.to = i.target),
                r(i.tarNick) && (t.attach.toNick = i.tarNick),
                r(i.muteDuration) && (t.attach.duration = parseInt(i.muteDuration, 10)),
                t.attach.type === 'memberEnter' &&
                  (r(i.muted) ? (t.attach.gaged = +i.muted == 1) : (t.attach.gaged = !1),
                  r(i.tempMuted)
                    ? (t.attach.tempMuted = +i.tempMuted == 1)
                    : (t.attach.tempMuted = !1),
                  r(i.muteTtl)
                    ? (t.attach.tempMuteDuration = +i.muteTtl)
                    : (t.attach.tempMuteDuration = 0)),
                r(i.ext) && (t.attach.custom = i.ext),
                r(i.queueChange))
              ) {
                const a = JSON.parse(i.queueChange);
                switch (a._e) {
                  case 'OFFER':
                    t.attach.queueChange = {
                      type: 'OFFER',
                      elementKey: a.key,
                      elementValue: a.content,
                    };
                    break;
                  case 'POLL':
                    t.attach.queueChange = {
                      type: 'POLL',
                      elementKey: a.key,
                      elementValue: a.content,
                    };
                    break;
                  case 'DROP':
                    t.attach.queueChange = { type: 'DROP' };
                    break;
                  case 'PARTCLEAR':
                    t.attach.queueChange = { type: 'PARTCLEAR', elementKv: a.kvObject };
                }
              }
            }
          } else t.attach = {};
          return t;
        }),
        (e.exports = i);
    },
    function(e, t, n) {
      const r = n(65);

      const s = n(0);
      function o(e) {
        (e.type = 'geo'),
          s.verifyOptions(e, 'geo', 'msg::GeoMessage'),
          s.verifyOptions(e.geo, 'lng lat title', !0, 'geo.', 'msg::GeoMessage'),
          s.verifyParamType('geo.lng', e.geo.lng, 'number', 'msg::GeoMessage'),
          s.verifyParamType('geo.lat', e.geo.lat, 'number', 'msg::GeoMessage'),
          s.verifyParamType('geo.title', e.geo.title, 'string', 'msg::GeoMessage'),
          r.call(this, e),
          (this.attach = JSON.stringify(e.geo));
      }
      (o.prototype = Object.create(r.prototype)),
        (o.reverse = function(e) {
          const t = r.reverse(e);
          return (
            (e.attach = e.attach ? `${e.attach}` : ''),
            (t.geo = e.attach ? JSON.parse(e.attach) : {}),
            t
          );
        }),
        (e.exports = o);
    },
    function(e, t, n) {
      const r = n(115);

      const s = n(0);
      function o() {}
      (o.prototype = Object.create(r.prototype)),
        (o.verifyFile = function(e, t) {
          s.verifyOptions(e, 'dur w h', !0, 'file.', t);
        }),
        (e.exports = o);
    },
    function(e, t, n) {
      const r = n(115);

      const s = n(0);
      function o() {}
      (o.prototype = Object.create(r.prototype)),
        (o.verifyFile = function(e, t) {
          s.verifyOptions(e, 'dur', !0, 'file.', t);
        }),
        (e.exports = o);
    },
    function(e, t, n) {
      const r = n(0);

      const s = n(115);
      function o() {}
      (o.prototype = Object.create(s.prototype)),
        (o.verifyFile = function(e, t) {
          r.verifyOptions(e, 'w h', !0, 'file.', t);
        }),
        (e.exports = o);
    },
    function(e, t, n) {
      const r = n(65);

      const s = n(0);
      function o(e) {
        s.verifyOptions(e, 'text', 'msg::TextMessage'),
          (e.type = 'text'),
          r.call(this, e),
          (this.attach = e.text),
          (this.body = '');
      }
      (o.prototype = Object.create(r.prototype)),
        (o.reverse = function(e) {
          const t = r.reverse(e);
          return (t.text = e.attach), t;
        }),
        (e.exports = o);
    },
    function(e, t, n) {
      const r = n(0);

      const s = function(e) {
        this.account = e.account;
      };

      const o = s.prototype;

      const i = (o.Message = n(65));

      const a = (o.TextMessage = n(280));

      const c = (o.FileMessage = n(115));

      const u = (o.GeoMessage = n(276));

      const l = (o.NotificationMessage = n(275));

      const m = (o.CustomMessage = n(274));

      const d = (o.TipMessage = n(273));

      const p = (o.RobotMessage = n(272));
      (o.validTypes = i.validTypes),
        (o.reverse = function(e) {
          let t;
          switch (i.getType(e)) {
            case 'text':
              t = a.reverse(e);
              break;
            case 'image':
            case 'audio':
            case 'video':
            case 'file':
              t = c.reverse(e);
              break;
            case 'geo':
              t = u.reverse(e);
              break;
            case 'notification':
              t = l.reverse(e);
              break;
            case 'custom':
              t = m.reverse(e);
              break;
            case 'tip':
              t = d.reverse(e);
              break;
            case 'robot':
              t = p.reverse(e);
              break;
            default:
              t = i.reverse(e);
          }
          return i.setExtra(t, this.account), t;
        }),
        (o.reverseMsgs = function(e, t) {
          let n;

          let s;

          const o = this;
          return e.map(e => {
            return (
              (e = o.reverse(e)),
              t &&
                ((n = t.modifyObj) && (e = r.merge(e, n)),
                (s = t.mapper),
                r.isFunction(s) && (e = s(e))),
              e
            );
          });
        }),
        (e.exports = s);
    },
    function(e, t, n) {
      const r = n(101).fn;

      const s = n(141);
      (r.onChatroomMembersInfo = r.onChatroomMembers = function(e) {
        e.error || (e.obj.members = s.reverseMembers(e.content.members));
      }),
        (r.onMarkChatroomMember = function(e) {
          e.error || (e.obj.member = s.reverse(e.content.chatroomMember));
        }),
        (r.onSyncRobot = function(e) {
          !e.error && this.options.onrobots
            ? this.options.onrobots(null, e.content)
            : this.ontions.onrobots(e.error, {});
        });
    },
    function(e, t, n) {
      const r = n(101).fn;

      const s = n(0);
      (r.completeMsg = function(e) {
        (e.chatroomId = this.chatroom.id),
          (e.from = this.options.account),
          (e.fromClientType = 'Web'),
          e.time || (e.time = +new Date());
      }),
        (r.onMsg = function(e) {
          const t = this.message.reverse(e.content.msg);
          this.checkMsgUnique(t) &&
            (this.msgBuffer.push(t), this.msgFlushTimer || this.startMsgFlushTimer());
        }),
        (r.startMsgFlushTimer = function() {
          const e = this;

          const t = e.options;
          e.msgFlushTimer = setTimeout(() => {
            const n = e.msgBuffer.splice(0, t.msgBufferSize);
            e.options.onmsgs(n),
              e.msgBuffer.length ? e.startMsgFlushTimer() : delete e.msgFlushTimer;
          }, t.msgBufferInterval);
        }),
        (r.checkMsgUnique = s.genCheckUniqueFunc('idClient')),
        (r.onSendMsg = function(e) {
          let t = e.obj.msg;
          e.error ? (t.status = 'fail') : ((t = e.content.msg).status = 'success'),
            (t = this.message.reverse(t)),
            (e.obj = t);
        }),
        (r.onHistoryMsgs = function(e) {
          e.error || (e.obj.msgs = this.message.reverseMsgs(e.content.msgs));
        });
    },
    function(e, t, n) {
      const r = n(101).fn;

      const s = n(43);

      const o = n(0);
      (r.assembleLogin = function() {
        const e = this.options;
        this.sdkSession = this.genSessionKey();
        let t = {
          appKey: e.appKey,
          account: e.account,
          deviceId: s.deviceId,
          chatroomId: e.chatroomId,
          session: this.sdkSession,
          appLogin: this.appLogin || 0,
        };
        return {
          type: 1,
          login: (t = o.merge(
            t,
            o.filterObj(
              e,
              'chatroomNick chatroomAvatar chatroomCustom chatroomEnterCustom isAnonymous'
            )
          )),
          imLogin: this.assembleIMLogin(),
        };
      }),
        (r.afterLogin = function(e) {
          const t = e.chatroom;
          (this.chatroom = t), this.notifyLogin();
        }),
        (r.kickedReasons = [
          '',
          'chatroomClosed',
          'managerKick',
          'samePlatformKick',
          'silentlyKick',
          'blacked',
        ]),
        (r.kickedMessages = [
          '',
          '聊天室关闭了',
          '被房主或者管理员踢出',
          '不允许同一个帐号在多个地方同时登录',
          '悄悄被踢',
          '被拉黑了',
        ]);
    },
    function(e, t, n) {
      n(101).fn.refreshSocketUrl = function() {
        (this.socketUrls = this.socketUrlsBackup.slice(0)),
          this.logger.info('link::refreshSocketUrl'),
          this.connectToUrl(this.getNextSocketUrl());
      };
    },
    function(e, t, n) {
      n(150);
      const r = n(116);
      n(142)(r), (e.exports = r);
    },
    function(e, t, n) {
      const r = n(0);

      const s = r.notundef;
      function o(e) {
        r.verifyOptions(e, 'type', 'event::MsgEventSubscribe'),
          r.verifyParamType('type', e.type, 'number', 'event::MsgEventSubscribe'),
          r.findObjIndexInArray([1, 2, 3], e.type) < 0 &&
            r.verifyParamMin('type', e.type, 1e5, 'event::MsgEventSubscribe'),
          (this.type = e.type),
          s(e.subscribeTime)
            ? (r.verifyParamType(
                'subscribeTime',
                e.subscribeTime,
                'number',
                'event::MsgEventSubscribe'
              ),
              r.verifyParamMin('subscribeTime', e.subscribeTime, 60, 'event::MsgEventSubscribe'),
              r.verifyParamMax(
                'subscribeTime',
                e.subscribeTime,
                2592e3,
                'event::MsgEventSubscribe'
              ),
              (this.subscribeTime = e.subscribeTime))
            : (this.subscribeTime = 2592e3),
          s(e.sync)
            ? (r.verifyParamType('sync', e.sync, 'boolean', 'event::MsgEventSubscribe'),
              (this.sync = e.sync))
            : (this.sync = !0);
      }
      (o.prototype.assembleEvent = function(e) {
        return {
          type: this.type,
          subscribeTime: this.subscribeTime,
          sync: !0 === this.sync ? 1 : 0,
        };
      }),
        (e.exports = o);
    },
    function(e, t, n) {
      const r = n(0);

      const s = r.notundef;

      const o = n(23);
      function i(e) {
        if (
          (r.verifyOptions(e, 'type value', 'event::MsgEvent'),
          r.verifyParamType('type', e.type, 'number', 'event::MsgEvent'),
          r.verifyParamMin('type', e.type, 1e5, 'event::MsgEvent'),
          r.verifyParamType('value', e.value, 'number', 'event::MsgEvent'),
          (this.type = e.type),
          (this.value = e.value),
          (this.idClient = r.guid()),
          s(e.custom) && (this.custom = `${e.custom}`),
          (this.validTime = e.validTime || 604800),
          r.verifyParamType('validTime', this.validTime, 'number', 'event::MsgEvent'),
          r.verifyParamMin('validTime', this.validTime, 60, 'event::MsgEvent'),
          r.verifyParamMax('validTime', this.validTime, 604800, 'event::MsgEvent'),
          s(e.broadcastType))
        ) {
          if (
            (r.verifyParamType('broadcastType', e.broadcastType, 'number', 'event::MsgEvent'),
            [1, 2].indexOf(e.broadcastType) < 0)
          )
            throw new o('参数错误"broadcastType":只能为1或2');
          this.broadcastType = e.broadcastType;
        } else this.broadcastType = 2;
        s(e.sync)
          ? (r.verifyParamType('sync', e.sync, 'boolean', 'event::MsgEvent'), (this.sync = e.sync))
          : (this.sync = !1);
      }
      (i.prototype.assembleEvent = function() {
        return {
          type: this.type,
          value: this.value,
          idClient: this.idClient,
          custom: this.custom || '',
          validTime: this.validTime,
          broadcastType: this.broadcastType,
          sync: !0 === this.sync ? 1 : 0,
        };
      }),
        (e.exports = i);
    },
    function(e, t, n) {
      const r = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n(5));
      const s = n(29).fn;

      const o = n(0);

      const i = n(288);

      const a = n(287);
      function c(e) {
        return (
          (void 0 === e ? 'undefined' : (0, r.default)(e)) === 'object' &&
            (e.msgEventSubscribes
              ? (e = e.msgEventSubscribes)
              : e.msgEventSubscribe
                ? (e = e.msgEventSubscribe)
                : e.accounts
                  ? (e = e.accounts)
                  : e.msgEvent && (e = e.msgEvent).time && (e.time = +e.time),
            e.sync === 1 ? (e.sync = !0) : e.sync === 0 && (e.sync = !1)),
          e
        );
      }
      (s.batchSendEventsCmds = function(e, t, n) {
        const r = this;

        let s = o.dropArrayDuplicates(t.accounts);

        const i = [];
        (s = o.reshape2d(s, 100)).forEach(n => {
          i.push(
            new Promise((s, i) => {
              const a = o.simpleClone(t);
              (a.accounts = n),
                r.sendCmdWithResp(e, a, (e, t) => {
                  e ? i(e) : s(c(t));
                });
            })
          );
        }),
          Promise.all(i).then(
            e => {
              let t = null;
              if (e.length > 0)
                if (e[0].msgEventSubscribe) {
                  let r = e[0].msgEventSubscribe;
                  r = c(r);
                  let s = [];
                  e.forEach(e => {
                    s = s.concat(e.accounts);
                  }),
                    (t = { accounts: s, msgEventSubscribe: r });
                } else
                  (t = []),
                    e.forEach(e => {
                      t = t.concat(e);
                    });
              n(null, t);
            },
            e => {
              n(e, null);
            }
          );
      }),
        (s.publishEvent = function(e) {
          let t = new i(e);
          (t = t.assembleEvent()),
            this.processCallback(e),
            this.sendCmdWithResp('publishEvent', { msgEvent: t }, (t, n) => {
              t || (n = c(n)), e.callback(t, n);
            });
        }),
        (s.subscribeEvent = function(e) {
          o.verifyOptions(e, 'accounts', 'event::subscribeEvent');
          let t = new a(e);
          o.verifyParamType('accounts', e.accounts, 'array', 'event::subscribeEvent'),
            this.processCallback(e),
            (t = t.assembleEvent()),
            this.batchSendEventsCmds(
              'subscribeEvent',
              { msgEventSubscribe: t, accounts: e.accounts },
              (t, n) => {
                !t && n && (n = { failedAccounts: n }), e.callback(t, n);
              }
            );
        }),
        (s.unSubscribeEventsByAccounts = function(e) {
          o.verifyOptions(e, 'accounts', 'event::unSubscribeEventsByAccounts'),
            o.verifyParamType(
              'accounts',
              e.accounts,
              'array',
              'event::unSubscribeEventsByAccounts'
            );
          let t = new a(e);
          (t = t.assembleEvent()),
            this.processCallback(e),
            this.batchSendEventsCmds(
              'unSubscribeEventsByAccounts',
              { msgEventSubscribe: t, accounts: e.accounts },
              (t, n) => {
                !t && n && (n = { failedAccounts: n }), e.callback(t, n);
              }
            );
        }),
        (s.unSubscribeEventsByType = function(e) {
          let t = new a(e);
          (t = t.assembleEvent()),
            this.processCallback(e),
            this.sendCmdWithResp('unSubscribeEventsByType', { msgEventSubscribe: t }, (t, n) => {
              e.callback(t);
            });
        }),
        (s.querySubscribeEventsByAccounts = function(e) {
          o.verifyOptions(e, 'accounts', 'event::querySubscribeEventsByAccounts'),
            o.verifyParamType(
              'accounts',
              e.accounts,
              'array',
              'event::querySubscribeEventsByAccounts'
            );
          let t = new a(e);
          (t = t.assembleEvent()),
            this.processCallback(e),
            this.batchSendEventsCmds(
              'querySubscribeEventsByAccounts',
              { msgEventSubscribe: t, accounts: e.accounts },
              (t, n) => {
                !t && n && (n = { msgEventSubscribes: n }), e.callback(t, n);
              }
            );
        }),
        (s.querySubscribeEventsByType = function(e) {
          let t = new a(e);
          (t = t.assembleEvent()),
            this.processCallback(e),
            this.sendCmdWithResp('querySubscribeEventsByType', { msgEventSubscribe: t }, (t, n) => {
              t || (n = { msgEventSubscribes: c(n) }), e.callback(t, n);
            });
        });
    },
    function(e, t, n) {
      const r = n(29).fn;

      const s = n(147);

      const o = n(0);

      const i = o.undef;
      (r.getPushNotificationMultiportConfig = function() {
        return this.protocol.getPushNotificationMultiportConfig();
      }),
        (r.updatePushNotificationMultiportConfig = function(e) {
          o.verifyOptions(e),
            i(e.shouldPushNotificationWhenPCOnline) && (e.shouldPushNotificationWhenPCOnline = !0),
            (e.donnop = new s(e)),
            this.processCallback(e),
            this.sendCmd('updateDonnop', e);
        });
    },
    function(e, t, n) {
      const r = n(29).fn;
      (r.clearDB = function(e) {
        const t = this.db;
        this.processCallback(e);
        const n = e.done;
        t.enable ? t.clear().then(n, n) : n();
      }),
        (r.removeDB = function(e) {
          const t = this.db;
          this.processCallback(e);
          const n = e.done;
          t.enable ? t.destroy().then(n, n) : n();
        }),
        (r.closeDB = function(e) {
          const t = this.db;
          this.processCallback(e);
          const n = e.done;
          t.enable ? t.close().then(n, n) : n();
        });
    },
    function(e, t, n) {
      const r = n(29).fn;

      const s = n(0);
      r.audioToText = function(e) {
        s.verifyOptions(e, 'url', 'audio::audioToText'), (e.audioToText = s.filterObj(e, 'url'));
        this.processCallback(e), this.sendCmd('audioToText', e);
      };
    },
    function(e, t, n) {},
    function(e, t, n) {},
    function(e, t, n) {
      const r = n(29).fn;

      const s = n(0);

      const o = n(4);
      r.getChatroomAddress = function(e) {
        s.verifyOptions(e, 'chatroomId', 'chatroom::getChatroomAddress');
        (e.isWeixinApp = o.isWeixinApp),
          this.processCallback(e),
          this.sendCmd('getChatroomAddress', e);
      };
    },
    function(e, t, n) {
      const r = n(29).fn;

      const s = n(0);

      const o = s.undef;

      const i = s.notundef;

      const a = n(104);
      (r.markSysMsgRead = function(e) {
        let t;

        const n = this.db;

        let r = Promise.resolve();

        const o = this.protocol;
        s.verifyOptions(e, 'sysMsgs', 'sysmsg::markSysMsgRead');
        let i = e.sysMsgs;
        function a() {
          e.done(t, e);
        }
        s.isArray(i) || (i = [i]),
          n.enable
            ? (r = n.markSysMsgRead(i).then(e => {
                (i = e), o.onUpdateSysMsg(e);
              }))
            : (i = i.filter(e => {
                return !e.read;
              })).length &&
              (o.options.autoMarkRead || o.markSysMsgRead(i, !0),
              i.forEach(e => {
                e.read = !0;
              }),
              o.onUpdateSysMsg(i)),
          r
            .then(() => {
              return o.reduceSysMsgUnread(i);
            })
            .then(a, e => {
              (t = e), a();
            });
      }),
        (r.sendCustomSysMsg = function(e) {
          s.verifyOptions(e, 'scene to content', 'sysmsg::sendCustomSysMsg'),
            s.verifyParamValid(
              'scene',
              e.scene,
              this.message.validScenes,
              'sysmsg::sendCustomSysMsg'
            ),
            this.processCallback(e),
            e.scene === 'p2p' ? (e.type = 'customP2p') : (e.type = 'customTeam'),
            (e.sysMsg = new a(e));
          let t = 'sendCustomSysMsg';
          return (
            e.filter && (t = 'sendFilterCustomSysMsg'),
            this.sendCmd(t, { sysMsg: e.sysMsg, single: !0 }, e.callback),
            this.formatReturnSysMsg(e.sysMsg)
          );
        }),
        (r.formatReturnSysMsg = function(e) {
          return (
            (e = s.copy(e)),
            this.protocol.completeSysMsg(e),
            (e.status = 'sending'),
            (e = a.reverse(e))
          );
        }),
        (r.getLocalSysMsgs = function(e) {
          let t;

          const n = this.db;

          let r = [];
          function c() {
            (e.sysMsgs = r), e.done(t, e);
          }
          s.verifyOptions(e),
            e.category &&
              s.verifyParamValid(
                'category',
                e.category,
                a.validCategories,
                'sysmsg::getLocalSysMsgs'
              ),
            e.type && s.verifyParamValid('type', e.type, a.validTypes, 'sysmsg::getLocalSysMsgs'),
            o(e.limit) && (e.limit = 100),
            s.verifyParamType('limit', e.limit, 'number', 'sysmsg::getLocalSysMsgs'),
            s.verifyParamMax('limit', e.limit, 100, 'sysmsg::getLocalSysMsgs'),
            i(e.reverse)
              ? s.verifyParamType('reverse', e.reverse, 'boolean', 'sysmsg::getLocalSysMsgs')
              : (e.reverse = !1),
            this.processCallback(e),
            n.enable
              ? n.getSysMsgs(e).then(
                  e => {
                    (r = e), c();
                  },
                  e => {
                    (t = e), c();
                  }
                )
              : c();
        }),
        (r.updateLocalSysMsg = function(e) {
          let t;

          const n = this.db;

          let r = null;
          if (
            (s.verifyOptions(e, 'idServer', 'sysmsg::updateLocalSysMsg'),
            this.processCallback(e),
            n.enable)
          ) {
            const o = s.filterObj(e, 'idServer state localCustom');
            n.updateSysMsg(o).then(
              e => {
                (r = e), i();
              },
              e => {
                (t = e), i();
              }
            );
          } else i();
          function i() {
            (e.sysMsg = r), e.done(t, e);
          }
        }),
        (r.deleteLocalSysMsg = function(e) {
          let t;

          const n = this.db;
          function r() {
            e.done(t, e);
          }
          s.verifyOptions(e, 'idServer', 'sysmsg::deleteLocalSysMsg'),
            this.processCallback(e),
            n.enable
              ? n.deleteSysMsg(e.idServer).then(
                  () => {
                    r();
                  },
                  e => {
                    (t = e), r();
                  }
                )
              : r();
        }),
        (r.deleteAllLocalSysMsgs = function(e) {
          let t;

          const n = this;

          const r = n.db;
          function s() {
            n.protocol.onUpdateSysMsgUnread({}), e.done(t, e);
          }
          n.processCallback(e),
            r.enable &&
              r.deleteAllSysMsgs().then(
                () => {
                  s();
                },
                e => {
                  (t = e), s();
                }
              );
        });
    },
    function(e, t, n) {
      const r = n(29).fn;

      const s = n(0);

      const o = s.undef;

      const i = s.notundef;

      const a = n(43);

      const c = n(102);

      const u = n(104);

      const l = n(23);
      (r.beforeSendMsg = function(e) {
        let t;

        const n = this.protocol;

        const r = e.msg;
        switch (
          (r.to === this.account && (r.fromDeviceId = a.deviceId),
          (r.userUpdateTime = n.myInfo && n.myInfo.updateTime),
          r.getScene())
        ) {
          case 'p2p':
            t = 'sendMsg';
            break;
          case 'team':
            t = 'sendTeamMsg';
        }
        e.filter && ((t = 'sendFilterMsg'), (r.filter = !0)), (e.cmd = t);
      }),
        (r.afterSendMsg = function(e) {
          const t = e.rtnMsg;

          const n = c.genSessionByMsg(t);
          this.protocol.onUpdateSession(n);
        }),
        (r.beforeForwardMsg = function(e) {
          s.verifyOptions(e, 'msg scene to', 'msg::beforeForwardMsg'),
            (e.msg.scene = e.scene),
            (e.msg.to = e.to);
        }),
        (r.markMsgRead = function(e) {
          const t = this.protocol;
          !e || this.db.enable || t.options.autoMarkRead
            ? this.logger.warn(
                'api::markMsgRead: 不需要标记消息为已收到 (没有消息, 或者启用了数据库, 或者启用了自动标记已收到)'
              )
            : t.markMsgRead(e, !0);
        }),
        (r.sendMsgReceipt = function(e) {
          if ((s.verifyOptions(e), this.processCallback(e), e.msg)) {
            s.verifyOptions(e, 'msg', 'msg::sendMsgReceipt');
            const t = e.msg;
            s.verifyOptions(t, 'target idClient time', !0, 'msg.', 'msg::sendMsgReceipt'),
              this.protocol.shouldSendMsgReceipt(t)
                ? this.sendCmd(
                    'sendMsgReceipt',
                    { msgReceipt: { to: t.target, idClient: t.idClient, time: t.time } },
                    e.callback
                  )
                : e.done();
          } else e.done();
        }),
        (r.isMsgRemoteRead = function(e) {
          return this.protocol.isMsgRemoteRead(e);
        }),
        (r.deleteMsg = function(e) {
          s.verifyOptions(e, 'msg', 'msg::deleteMsg');
          const t = e.msg;
          if (
            (t.scene !== 'team' && t.flow !== 'out') ||
            t.status !== 'success' ||
            t.from === t.to ||
            t.isLocal
          )
            return e.done(
              l.newParamError('只能删除自己发送给别人的, 并且发送成功的非本地消息', {
                callFunc: 'msg::deleteMsg',
              }),
              e
            );
          s.verifyOptions(
            t,
            ['scene', 'to', 'from', 'time', 'idClient', 'idServer'],
            !0,
            'msg.',
            'msg::deleteMsg'
          ),
            s.verifyParamValid('msg.scene', t.scene, this.message.validScenes, 'msg::deleteMsg');
          let n = s.simpleClone(t);
          this.processPs(n),
            this.processCallback(e),
            i(e.opeAccount)
              ? (n.opeAccount = e.opeAccount)
              : o(n.opeAccount) && (n.opeAccount = n.from),
            n.scene === 'p2p' ? (n.type = 'deleteMsgP2p') : (n.type = 'deleteMsgTeam'),
            (n.deletedIdClient = n.idClient),
            (n.deletedIdServer = n.idServer),
            (n = new u(n)),
            this.sendCmd('deleteMsg', { sysMsg: n, msg: t }, e.callback);
        });
      const m = {
        text: 0,
        image: 1,
        audio: 2,
        video: 3,
        geo: 4,
        notification: 5,
        file: 6,
        tip: 10,
        robot: 11,
        custom: 100,
      };
      (r.getHistoryMsgs = function(e) {
        let t;
        switch (
          (s.verifyOptions(e, 'scene to', 'msg::getHistoryMsgs'),
          s.verifyParamValid('scene', e.scene, this.message.validScenes, 'msg::getHistoryMsgs'),
          void 0 === e.beginTime && (e.beginTime = 0),
          s.verifyParamType('beginTime', e.beginTime, 'number', 'msg::getHistoryMsgs'),
          void 0 === e.endTime && (e.endTime = 0),
          s.verifyParamType('endTime', e.endTime, 'number', 'msg::getHistoryMsgs'),
          (void 0 !== e.lastMsgId && e.lastMsgId !== null) || (e.lastMsgId = '0'),
          void 0 === e.limit && (e.limit = 100),
          s.verifyParamType('limit', e.limit, 'number', 'msg::getHistoryMsgs'),
          s.verifyParamMax('limit', e.limit, 100, 'msg::getHistoryMsgs'),
          i(e.reverse)
            ? s.verifyParamType('reverse', e.reverse, 'boolean', 'msg::getHistoryMsgs')
            : (e.reverse = !1),
          i(e.asc)
            ? s.verifyParamType('asc', e.asc, 'boolean', 'msg::getHistoryMsgs')
            : (e.asc = !1),
          o(e.msgTypes)
            ? (e.msgTypes = [])
            : Array.isArray(e.msgTypes)
              ? ((e.msgTypes = e.msgTypes.map(e => {
                  return m[e];
                })),
                (e.msgTypes = e.msgTypes.filter(e => {
                  return typeof e === 'number';
                })))
              : typeof m[e.msgTypes] === 'number'
                ? (e.msgTypes = [m[e.msgTypes]])
                : (e.msgTypes = []),
          this.processCallback(e),
          e.asc &&
            (e.cbaop = function(e, t) {
              e || (t.msgs = t.msgs.reverse());
            }),
          e.scene)
        ) {
          case 'p2p':
            t = 'getHistoryMsgs';
            break;
          case 'team':
            t = 'getTeamHistoryMsgs';
        }
        const n = {
          scene: e.scene,
          to: e.to,
          beginTime: e.beginTime,
          endTime: e.endTime,
          lastMsgId: e.lastMsgId,
          limit: e.limit,
          reverse: e.reverse,
          msgTypes: e.msgTypes,
        };
        this.sendCmd(t, n, e.callback);
      }),
        (r.searchHistoryMsgs = function(e) {
          let t;
          switch (
            (s.verifyOptions(e, 'scene to keyword', 'msg::searchHistoryMsgs'),
            s.verifyParamValid(
              'scene',
              e.scene,
              this.message.validScenes,
              'msg::searchHistoryMsgs'
            ),
            void 0 === e.beginTime && (e.beginTime = 0),
            s.verifyParamType('beginTime', e.beginTime, 'number', 'msg::searchHistoryMsgs'),
            void 0 === e.endTime && (e.endTime = 0),
            s.verifyParamType('endTime', e.endTime, 'number', 'msg::searchHistoryMsgs'),
            void 0 === e.limit && (e.limit = 100),
            s.verifyParamType('limit', e.limit, 'number', 'msg::searchHistoryMsgs'),
            s.verifyParamMax('limit', e.limit, 100, 'msg::searchHistoryMsgs'),
            i(e.reverse)
              ? s.verifyParamType('reverse', e.reverse, 'boolean', 'msg::searchHistoryMsgs')
              : (e.reverse = !1),
            i(e.asc)
              ? s.verifyParamType('asc', e.asc, 'boolean', 'msg::searchHistoryMsgs')
              : (e.asc = !1),
            this.processCallback(e),
            e.asc &&
              (e.cbaop = function(e, t) {
                e || (t.msgs = t.msgs.reverse());
              }),
            e.scene)
          ) {
            case 'p2p':
              t = 'searchHistoryMsgs';
              break;
            case 'team':
              t = 'searchTeamHistoryMsgs';
          }
          const n = s.filterObj(e, 'scene to beginTime endTime keyword limit reverse');
          this.sendCmd(t, n, e.callback);
        }),
        (r.getLocalMsgs = function(e) {
          const t = this.db;

          const n = null;

          let r = [];
          s.verifyOptions(e);
          let a = !1;
          i(e.start) &&
            ((a = !0), s.verifyParamType('start', e.start, 'number', 'msg::getLocalMsgs'));
          let c = !1;
          function u() {
            const t = s.simpleClone(e);
            (t.msgs = r), delete t.callback, delete t.done, e.done(n, t);
          }
          i(e.end) && ((c = !0), s.verifyParamType('end', e.end, 'number', 'msg::getLocalMsgs')),
            a && c && e.end <= e.start && s.onParamError('参数 end 必须晚于 start'),
            o(e.limit) && (e.limit = 100),
            s.verifyParamType('limit', e.limit, 'number', 'msg::getLocalMsgs'),
            s.verifyParamMin('limit', e.limit, 1, 'msg::getLocalMsgs'),
            this.processCallback(e),
            t.enable
              ? t.getMsgs(e).then(
                  e => {
                    (r = e), u();
                  },
                  e => {
                    ((e = e || {}).message = e.message || 'msg::getLocalMsgs:db error'), u();
                  }
                )
              : u();
        }),
        (r.getLocalMsgByIdClient = function(e) {
          let t;

          const n = this.db;

          let r = null;
          function o() {
            (e.msg = r), e.done(t, e);
          }
          s.verifyOptions(e, 'idClient', 'msg::getLocalMsgByIdClient'),
            this.processCallback(e),
            n.enable
              ? n.getMsgByIdClient(e.idClient).then(
                  e => {
                    e && (r = e), o();
                  },
                  e => {
                    (t = e), o();
                  }
                )
              : o();
        }),
        (r.getLocalMsgsByIdClients = function(e) {
          let t;

          const n = this.db;

          let r = [];
          function o() {
            (e.msgs = r), e.done(t, e);
          }
          s.verifyOptions(e, 'idClients', 'msg::getLocalMsgByIdClient'),
            s.verifyParamType('idClients', e.idClients, 'array', 'msg::getLocalMsgByIdClient'),
            this.processCallback(e),
            n.enable
              ? n.getMsgsByIdClients(e.idClients).then(
                  e => {
                    (r = e.filter(e => {
                      return !!e;
                    })),
                      o();
                  },
                  e => {
                    (t = e), o();
                  }
                )
              : o();
        }),
        (r.updateLocalMsg = function(e) {
          let t;

          const n = this.db;

          let r = null;
          if (
            (s.verifyOptions(e, 'idClient', 'msg::updateLocalMsg'),
            this.processCallback(e),
            n.enable)
          ) {
            const o = s.filterObj(e, 'idClient localCustom');
            n.updateMsg(o).then(
              e => {
                (r = e), i();
              },
              e => {
                (t = e), i();
              }
            );
          } else i();
          function i() {
            (e.msg = r), e.done(t, e);
          }
        }),
        (r.deleteLocalMsg = function(e) {
          let t;
          s.verifyOptions(e, 'msg', 'msg::deleteLocalMsg');
          const n = e.msg;
          function r() {
            e.done(t, e);
          }
          s.verifyOptions(n, 'idClient sessionId', !0, 'msg.', 'msg::deleteLocalMsg'),
            this.processCallback(e),
            this.protocol.deleteLocalMsg(n).then(r, e => {
              (t = e), r();
            });
        }),
        (r.deleteLocalMsgsBySession = function(e) {
          let t;

          const n = this.db;
          function r() {
            e.done(t, e);
          }
          s.verifyOptions(e, 'scene to', 'msg::deleteLocalMsgsBySession'),
            s.verifyParamValid(
              'scene',
              e.scene,
              this.message.validScenes,
              'msg::deleteLocalMsgsBySession'
            ),
            (e.sessionId = `${e.scene}-${e.to}`),
            this.processCallback(e),
            n.enable
              ? n.deleteMsgsBySessionId(e.sessionId).then(
                  () => {
                    r();
                  },
                  e => {
                    (t = e), r();
                  }
                )
              : r();
        }),
        (r.deleteAllLocalMsgs = function(e) {
          let t;

          const n = this.db;
          function r() {
            e.done(t, e);
          }
          this.processCallback(e),
            n.enable &&
              n.deleteAllMsgs().then(
                () => {
                  r();
                },
                e => {
                  (t = e), r();
                }
              );
        });
    },
    function(e, t, n) {
      const r = n(29).fn;

      const s = n(0);

      const o = s.undef;

      const i = s.notundef;
      (r.setCurrSession = function(e) {
        this.resetSessionUnread(e), this.protocol.setCurrSession(e);
      }),
        (r.resetAllSessionUnread = function() {
          for (const e in this.protocol.sessionSet)
            this.protocol.sessionSet[e].unread > 0 && this.resetSessionUnread(e);
        }),
        (r.resetSessionUnread = function(e) {
          if ((this.protocol.resetSessionUnread(e), this.options.syncSessionUnread)) {
            const t = this.protocol.findSession(e);
            if (t)
              if (t.lastMsg)
                if (t.scene && t.to) {
                  const n = t.lastMsg.time;
                  if (t && t.ack && t.ack >= n)
                    this.logger.warn(`api::resetSessionUnread: session ack not needs ${e}`);
                  else {
                    const r = { scene: t.scene === 'p2p' ? 0 : 1, to: t.to, timetag: n };
                    this.sendCmd('markSessionAck', r);
                  }
                } else this.logger.warn(`api::resetSessionUnread: session.scene|to undefined ${e}`);
              else this.logger.warn(`api::resetSessionUnread: session.lastMsg undefined ${e}`);
            else this.logger.warn(`api::resetSessionUnread: session undefined ${e}`);
          }
        }),
        (r.resetCurrSession = function() {
          this.protocol.setCurrSession('');
        }),
        (r.insertLocalSession = function(e) {
          let t;
          let n;
          function r() {
            (e.session = n), e.done(t, e);
          }
          s.verifyOptions(e, 'scene to', 'scene::insertLocalSession'),
            s.verifyParamValid(
              'scene',
              e.scene,
              this.message.validScenes,
              'scene::insertLocalSession'
            ),
            this.processCallback(e),
            this.protocol.insertLocalSession(e).then(
              e => {
                (n = e), r();
              },
              e => {
                (t = e), r();
              }
            );
        }),
        (r.getLocalSessions = function(e) {
          let t;

          const n = this;

          const r = n.db;

          let a = [];
          function c() {
            (e.sessions = a), e.done(t, e);
          }
          s.verifyOptions(e),
            o(e.limit) && (e.limit = 100),
            s.verifyParamType('limit', e.limit, 'number', 'scene::getLocalSessions'),
            s.verifyParamMax('limit', e.limit, 100, 'scene::getLocalSessions'),
            i(e.reverse)
              ? s.verifyParamType('reverse', e.reverse, 'boolean', 'scene::getLocalSessions')
              : (e.reverse = !1),
            n.processCallback(e),
            r.enable
              ? r.getSessions(e).then(
                  e => {
                    (a = e), n.protocol.mergeSessions(a), c();
                  },
                  e => {
                    (t = e), c();
                  }
                )
              : c();
        }),
        (r.updateLocalSession = function(e) {
          let t;

          const n = this;

          const r = n.db;
          s.verifyOptions(e, 'id', 'scene::updateLocalSession'), n.processCallback(e);
          let o = s.filterObj(e, 'id localCustom');
          function i() {
            n.protocol.onUpdateSession(o), (e.session = o), e.done(t, e);
          }
          r.enable
            ? r.updateSession(o).then(
                e => {
                  (o = e), i();
                },
                e => {
                  (t = e), i();
                }
              )
            : i();
        }),
        (r.deleteLocalSession = function(e) {
          let t;

          const n = this;

          const r = n.db;
          function o() {
            e.done(t, e);
          }
          s.verifyOptions(e, 'id', 'session::deleteLocalSession'),
            n.processCallback(e),
            r.enable
              ? r.deleteSession(e.id).then(
                  () => {
                    n.protocol.deleteLocalSession(e.id), o();
                  },
                  e => {
                    (t = e), o();
                  }
                )
              : o();
        }),
        (r.deleteSession = function(e) {
          s.verifyOptions(e, 'scene to', 'session::deleteSession'),
            this.processCallback(e),
            (e.sessions = [{ scene: e.scene, to: e.to }]),
            this.deleteSessions(e);
        }),
        (r.deleteSessions = function(e) {
          s.verifyOptions(e, 'sessions', 'session::deleteSessions'),
            s.verifyParamType('sessions', e.sessions, 'array', 'session::deleteSessions'),
            e.sessions.forEach((e, t) => {
              s.verifyOptions(e, 'scene to', !0, `sessions[${t}].`, 'session::deleteSessions');
            }),
            this.processCallback(e),
            this.sendCmd(
              'deleteSessions',
              {
                sessions: e.sessions.map(e => {
                  return `${e.scene}|${e.to}`;
                }),
              },
              e.callback
            );
        });
    },
    function(e, t, n) {
      const r = n(29).fn;

      const s = n(0);

      const o = s.undef;

      const i = n(106);

      const a = n(79);
      (r.createTeam = function(e) {
        s.verifyOptions(e, 'type name', 'team::createTeam'),
          o(e.accounts)
            ? (e.accounts = [])
            : s.verifyParamType('accounts', e.accounts, 'array', 'team::createTeam'),
          (e.action = 'create'),
          this.processPs(e),
          this.processCallback(e),
          (e.team = new i(e));
        const t = { team: e.team, accounts: e.accounts.slice(0), ps: e.ps };
        this.sendCmd('createTeam', t, e.callback);
      }),
        (r.updateTeam = function(e) {
          s.verifyOptions(e, 'teamId', 'team::updateTeam'),
            (e.action = 'update'),
            this.processCallback(e),
            (e.team = new i(e)),
            this.sendCmd('updateTeam', { team: e.team, single: !0 }, e.callback);
        }),
        (r.addTeamMembers = function(e) {
          s.verifyOptions(e, 'teamId accounts', 'team::addTeamMembers'),
            s.verifyParamType('accounts', e.accounts, 'array', 'team::addTeamMembers'),
            this.processPs(e),
            this.processCallback(e);
          const t = { teamId: e.teamId, accounts: e.accounts.slice(0), ps: e.ps };
          this.sendCmd('addTeamMembers', t, e.callback);
        }),
        (r.removeTeamMembers = function(e) {
          s.verifyOptions(e, 'teamId accounts', 'team::removeTeamMembers'),
            s.verifyParamType('accounts', e.accounts, 'array', 'team::removeTeamMembers'),
            this.processCallback(e);
          const t = { teamId: e.teamId, accounts: e.accounts.slice(0) };
          this.sendCmd('removeTeamMembers', t, e.callback);
        }),
        (r.acceptTeamInvite = function(e) {
          s.verifyOptions(e, 'idServer teamId from', 'team::acceptTeamInvite'),
            this.processCallback(e);
          const t = { idServer: e.idServer, teamId: e.teamId, from: e.from };
          this.sendCmd('acceptTeamInvite', t, e.callback);
        }),
        (r.rejectTeamInvite = function(e) {
          s.verifyOptions(e, 'idServer teamId from', 'team::rejectTeamInvite'),
            this.processPs(e),
            this.processCallback(e);
          const t = { idServer: e.idServer, teamId: e.teamId, from: e.from, ps: e.ps };
          this.sendCmd('rejectTeamInvite', t, e.callback);
        }),
        (r.applyTeam = function(e) {
          s.verifyOptions(e, 'teamId', 'team::applyTeam'),
            this.processPs(e),
            this.processCallback(e);
          const t = { teamId: e.teamId, ps: e.ps };
          this.sendCmd('applyTeam', t, e.callback);
        }),
        (r.passTeamApply = function(e) {
          s.verifyOptions(e, 'idServer teamId from', 'team::passTeamApply'),
            this.processCallback(e);
          const t = { idServer: e.idServer, teamId: e.teamId, from: e.from };
          this.sendCmd('passTeamApply', t, e.callback);
        }),
        (r.rejectTeamApply = function(e) {
          s.verifyOptions(e, 'idServer teamId from', 'team::rejectTeamApply'),
            this.processPs(e),
            this.processCallback(e);
          const t = { idServer: e.idServer, teamId: e.teamId, from: e.from, ps: e.ps };
          this.sendCmd('rejectTeamApply', t, e.callback);
        }),
        (r.addTeamManagers = function(e) {
          s.verifyOptions(e, 'teamId accounts', 'team::addTeamManagers'),
            s.verifyParamType('accounts', e.accounts, 'array', 'team::addTeamManagers'),
            this.processCallback(e);
          const t = { teamId: e.teamId, accounts: e.accounts.slice(0) };
          this.sendCmd('addTeamManagers', t, e.callback);
        }),
        (r.removeTeamManagers = function(e) {
          s.verifyOptions(e, 'teamId accounts', 'team::removeTeamManagers'),
            s.verifyParamType('accounts', e.accounts, 'array', 'team::removeTeamManagers'),
            this.processCallback(e);
          const t = { teamId: e.teamId, accounts: e.accounts.slice(0) };
          this.sendCmd('removeTeamManagers', t, e.callback);
        }),
        (r.updateInfoInTeam = function(e) {
          s.verifyOptions(e, 'teamId', 'team::updateInfoInTeam'),
            this.processCallback(e),
            this.sendCmd('updateInfoInTeam', { teamMember: new a(e), single: !0 }, e.callback);
        }),
        (r.updateNickInTeam = function(e) {
          s.verifyOptions(e, 'teamId account', 'team::updateNickInTeam'),
            this.processCallback(e),
            this.sendCmd('updateNickInTeam', { teamMember: new a(e), single: !0 }, e.callback);
        }),
        (r.updateMuteStateInTeam = function(e) {
          s.verifyOptions(e, 'teamId account mute', 'team::updateMuteStateInTeam'),
            this.processCallback(e),
            (e.mute = e.mute ? 1 : 0),
            this.sendCmd('updateMuteStateInTeam', e);
        }),
        (r.getMutedTeamMembers = function(e) {
          s.verifyOptions(e, 'teamId', 'team::getMutedTeamMembers'),
            this.processCallback(e),
            this.sendCmd('getMutedTeamMembers', e);
        }),
        (r.leaveTeam = function(e) {
          s.verifyOptions(e, 'teamId', 'team::leaveTeam'), this.processCallback(e);
          const t = { teamId: e.teamId };
          this.sendCmd('leaveTeam', t, e.callback);
        }),
        (r.transferTeam = function(e) {
          s.verifyOptions(e, 'teamId account leave', 'team::transferTeam'),
            s.verifyParamType('leave', e.leave, 'boolean', 'team::transferTeam'),
            this.processCallback(e);
          const t = { teamId: e.teamId, account: e.account, leave: e.leave };
          this.sendCmd('transferTeam', t, e.callback);
        }),
        (r.dismissTeam = function(e) {
          s.verifyOptions(e, 'teamId', 'team::dismissTeam'), this.processCallback(e);
          const t = { teamId: e.teamId };
          this.sendCmd('dismissTeam', t, e.callback);
        }),
        (r.getTeam = function(e) {
          let t;

          const n = this;

          const r = n.db;
          function o() {
            n.sendCmd('getTeam', { teamId: e.teamId }, e.callback);
          }
          s.verifyOptions(e, 'teamId', 'team::getTeam'),
            n.processCallback(e),
            (e.cbaop = function(e, r) {
              e || n.logger.log(`api::getTeam: cbaop ${t}`, r);
            }),
            (t = e.teamId),
            r.enable && !e.sync
              ? r.getTeam(t).then(r => {
                  r ? (n.logger.log(`api::getTeam: db.getTeam ${t}`, r), e.done(null, r)) : o();
                }, o)
              : o();
        }),
        (r.getTeams = function(e) {
          const t = this;

          const n = t.db;

          let r = 0;
          function o() {
            t.sendCmd('getTeams', { timetag: r, NOTSTORE: 'timetag' }, e.callback);
          }
          s.verifyOptions(e),
            t.processCallback(e),
            n.enable
              ? n.getTeamsTimetag().then(e => {
                  (r = e), o();
                }, o)
              : o();
        }),
        (r.getTeamMembers = function(e) {
          const t = this;

          const n = 0;
          s.verifyOptions(e, 'teamId', 'team::getTeamMembers'),
            t.processCallback(e),
            t.sendCmd(
              'getTeamMembers',
              { teamId: e.teamId, timetag: n, NOTSTORE: 'timetag' },
              e.callback
            );
        }),
        (r.notifyForNewTeamMsg = function(e) {
          s.verifyOptions(e, 'teamIds', 'team::notifyForNewTeamMsg'),
            this.protocol.notifyForNewTeamMsg(e.teamIds).then(
              t => {
                e.done(null, t);
              },
              t => {
                e.done(t);
              }
            );
        }),
        (r.getMyTeamMembers = function(e) {
          s.verifyOptions(e, 'teamIds', 'team::getMyTeamMembers');
          const t = this.processCallbackPromise(e);
          return this.sendCmd('getMyTeamMembers', e), t;
        }),
        (r.getLocalTeams = function(e) {
          let t;

          const n = this.db;

          let r = [];
          function o() {
            (e.teams = r), e.done(t, e);
          }
          s.verifyOptions(e, 'teamIds', 'team::getLocalTeams'),
            s.verifyParamType('teamIds', e.teamIds, 'array', 'team::getLocalTeams'),
            this.processCallback(e),
            n.enable
              ? n.getTeamsByTeamIds(e.teamIds).then(
                  e => {
                    (r = e.filter(e => {
                      return !!e;
                    })),
                      o();
                  },
                  e => {
                    (t = e), o();
                  }
                )
              : o();
        }),
        (r.getLocalTeamMembers = function(e) {
          let t;

          const n = this.db;

          let r = [];
          function o() {
            (e.members = r), e.done(t, e);
          }
          s.verifyOptions(e, 'teamId accounts', 'team::getLocalTeamMembers'),
            s.verifyParamType('accounts', e.accounts, 'array', 'team::getLocalTeamMembers'),
            this.processCallback(e),
            n.enable
              ? n.getInvalidTeamMembers(e.teamId, e.accounts).then(
                  e => {
                    (r = e.filter(e => {
                      return !!e;
                    })),
                      o();
                  },
                  e => {
                    (t = e), o();
                  }
                )
              : o();
        }),
        (r.deleteLocalTeam = function(e) {
          let t;

          const n = this.db;
          function r() {
            e.done(t, e);
          }
          s.verifyOptions(e, 'teamId', 'team::deleteLocalTeam'),
            this.processCallback(e),
            n.enable
              ? n.deleteTeam(e.teamId).then(
                  () => {
                    r();
                  },
                  e => {
                    (t = e), r();
                  }
                )
              : r();
        }),
        (r.muteTeamAll = function(e) {
          switch ((s.verifyOptions(e, 'teamId type', 'team::muteTeamAll'), e.type)) {
            case 'none':
              e.muteType = 0;
              break;
            case 'normal':
              e.muteType = 1;
              break;
            case 'all':
              e.muteType = 2;
              break;
            default:
              e.muteType = 1;
          }
          this.processCallback(e), this.sendCmd('muteTeamAll', e);
        }),
        (r.sendTeamMsgReceipt = function(e) {
          s.verifyOptions(e, 'teamMsgReceipts', 'team::sendTeamMsgReceipt'),
            this.processCallback(e),
            this.sendCmd('sendTeamMsgReceipt', e);
        }),
        (r.getTeamMsgReads = function(e) {
          s.verifyOptions(e, 'teamMsgReceipts', 'team::getTeamMsgReads'),
            this.processCallback(e),
            this.sendCmd('getTeamMsgReads', e);
        }),
        (r.getTeamMsgReadAccounts = function(e) {
          s.verifyOptions(e, 'teamMsgReceipt', 'team::getTeamMsgReadAccounts'),
            this.processCallback(e),
            this.sendCmd('getTeamMsgReadAccounts', e);
        });
    },
    function(e, t, n) {
      n(29).fn.getRobots = function(e) {
        ((e = e || {}).type = 'getRobots'),
          this.processCallback(e),
          this.sendCmd('sync', { sync: { robots: 0 } }, e.callback);
      };
    },
    function(e, t, n) {
      const r = n(29).fn;

      const s = n(0);

      const o = s.notundef;

      const i = n(179);
      (r.friendRequest = function(e) {
        s.verifyOptions(e, 'type account', 'friend::friendRequest'),
          s.verifyParamValid('type', e.type, i.validTypes(), 'friend::friendRequest'),
          this.processPs(e),
          this.processCallback(e);
        const t = { account: e.account, type: i.getByteFromType(e.type), ps: e.ps };
        o(e.idServer) && (t.idServer = e.idServer), this.sendCmd('friendRequest', t, e.callback);
      }),
        (r.addFriend = function(e) {
          (e.type = 'addFriend'), this.friendRequest(e);
        }),
        (r.applyFriend = function(e) {
          (e.type = 'applyFriend'), this.friendRequest(e);
        }),
        (r.passFriendApply = function(e) {
          s.verifyOptions(e, 'idServer', 'friend::passFriendApply'),
            (e.type = 'passFriendApply'),
            this.friendRequest(e);
        }),
        (r.rejectFriendApply = function(e) {
          s.verifyOptions(e, 'idServer', 'friend::rejectFriendApply'),
            (e.type = 'rejectFriendApply'),
            this.friendRequest(e);
        }),
        (r.deleteFriend = function(e) {
          s.verifyOptions(e, 'account', 'friend::deleteFriend'),
            this.processCallback(e),
            this.sendCmd('deleteFriend', { account: e.account }, e.callback);
        }),
        (r.updateFriend = function(e) {
          this.processCallback(e);
          const t = new i(e);
          this.sendCmd('updateFriend', { friend: t, single: !0 }, e.callback);
        }),
        (r.getFriends = function(e) {
          const t = this;

          const n = t.db;

          let r = 0;
          function o() {
            t.sendCmd('getFriends', { timetag: r, NOTSTORE: 'timetag' }, e.callback);
          }
          s.verifyOptions(e),
            t.processCallback(e),
            n.enable
              ? n.getFriendsTimetag().then(e => {
                  (r = e), o();
                }, o)
              : o();
        });
    },
    function(e, t, n) {
      const r = n(29).fn;

      const s = n(0);

      const o = s.objs2accounts;

      const i = n(118);
      (r.updateMyInfo = function(e) {
        s.verifyOptions(e),
          this.processCallback(e),
          (e.user = new i(e)),
          delete e.user.account,
          this.sendCmd('updateMyInfo', { user: e.user, single: !0 }, e.callback);
      }),
        (r.getMyInfo = function(e) {
          return ((e = e || {}).account = this.account), this.getUser(e);
        }),
        (r.getUser = function(e) {
          let t;

          const n = this;

          const r = n.db;
          function o() {
            n.sendCmd('getUsers', { accounts: [t], single: !0 }, e.callback);
          }
          s.verifyOptions(e, 'account', 'user::getUser'),
            n.processCallback(e),
            (e.cbaop = function(e, r) {
              if (!e) return (r = r[0] || null), n.logger.log(`api::getUser: cbaop ${t}`, r), r;
            }),
            (t = e.account),
            e.sync
              ? o()
              : r.enable
                ? r.getUser(t).then(r => {
                    r ? (n.logger.log(`api::getUser: db.getUser ${t}`, r), e.done(null, r)) : o();
                  }, o)
                : o();
        }),
        (r.getUsers = function(e) {
          let t;

          const n = this;

          const r = n.db;

          let i = [];
          function a() {
            n.sendCmd('getUsers', { accounts: t, single: !0 }, e.callback);
          }
          s.verifyOptions(e, 'accounts', 'user::getUsers'),
            s.verifyParamType('accounts', e.accounts, 'array', 'user::getUsers'),
            n.processCallback(e),
            (e.cbaop = function(e, r) {
              if (!e) return (r = r.concat(i)), n.logger.log(`api::getUsers: cbaop ${t}`, r), r;
            }),
            (t = s.deduplicate(e.accounts)),
            s.verifyArrayMax('accounts', e.accounts, 150, 'user::getUsers'),
            e.sync
              ? a()
              : r.enable
                ? r.getUsers(t).then(r => {
                    if (r && r.length === t.length)
                      n.logger.log('api::getUsers: db.getUsers', r), e.done(null, r);
                    else {
                      i = r;
                      const s = o(r);

                      const c = [];
                      t.forEach(e => {
                        s.indexOf(e) === -1 && c.push(e);
                      }),
                        (t = c),
                        a();
                    }
                  }, a)
                : a();
        });
    },
    function(e, t, n) {
      const r = n(29).fn;

      const s = n(0);
      (r.markInBlacklist = function(e) {
        s.verifyOptions(e, 'account isAdd', 'relation::markInBlacklist'),
          s.verifyParamType('isAdd', e.isAdd, 'boolean', 'relation::markInBlacklist'),
          this.processCallback(e),
          this.sendCmd('markInBlacklist', { account: e.account, isAdd: e.isAdd }, e.callback);
      }),
        (r.addToBlacklist = function(e) {
          return (e.isAdd = !0), this.markInBlacklist(e);
        }),
        (r.removeFromBlacklist = function(e) {
          return (e.isAdd = !1), this.markInBlacklist(e);
        }),
        (r.markInMutelist = function(e) {
          s.verifyOptions(e, 'account', 'relation::markInMutelist'),
            s.verifyParamType('isAdd', e.isAdd, 'boolean', 'relation::markInMutelist'),
            this.processCallback(e),
            this.sendCmd('markInMutelist', { account: e.account, isAdd: e.isAdd }, e.callback);
        }),
        (r.addToMutelist = function(e) {
          return (e.isAdd = !0), this.markInMutelist(e);
        }),
        (r.removeFromMutelist = function(e) {
          return (e.isAdd = !1), this.markInMutelist(e);
        }),
        (r.getRelations = function(e) {
          const t = this;

          const n = t.db;

          let r = 0;
          function o() {
            t.sendCmd('getRelations', { timetag: r, NOTSTORE: 'timetag' }, e.callback);
          }
          (e = s.verifyOptions(e)),
            t.processCallback(e),
            n.enable
              ? n.getRelationsTimetag().then(e => {
                  (r = e), o();
                }, o)
              : o();
        });
    },
    function(e, t, n) {
      const r = n(29).fn;

      const s = n(0);
      r.kick = function(e) {
        s.verifyOptions(e, 'deviceIds', 'link::kick'),
          this.processCallback(e),
          this.sendCmd('kick', { deviceIds: e.deviceIds.slice(0) }, e.callback);
      };
    },
    function(e, t, n) {
      const r = n(29).fn;

      const s = n(0);

      const o = s.isArray;

      const i = n(79);
      (r.mergeObjArray = function(e, t, n) {
        return (
          e || (e = []),
          t ? (o(t) || (t = [t]), t.length ? ((n = n || {}), s.mergeObjArray(e, t, n)) : e) : e
        );
      }),
        (r.cutObjArray = function(e, t, n) {
          return e && t
            ? (o(t) || (t = [t]), t.length ? ((n = n || {}), s.cutObjArray(e, t, n)) : e)
            : e;
        }),
        (r.mergeLoginPorts = function(e, t) {
          return this.mergeObjArray(e, t, { keyPath: 'deviceId' });
        }),
        (r.cutLoginPorts = function(e, t) {
          return this.cutObjArray(e, t, { keyPath: 'deviceId', sortPath: 'type' });
        }),
        (r.mergeRelations = function(e, t) {
          return this.mergeObjArray(e, t, { keyPath: 'account' });
        }),
        (r.cutRelations = function(e, t) {
          return this.cutObjArray(e, t, { keyPath: 'account' });
        }),
        (r.findRelation = function(e, t) {
          return s.findObjInArray(e, { keyPath: 'account', value: t });
        }),
        (r.mergeFriends = function(e, t) {
          return this.mergeObjArray(e, t, { keyPath: 'account' });
        }),
        (r.cutFriends = function(e, t) {
          return this.cutObjArray(e, t, { keyPath: 'account' });
        }),
        (r.cutFriendsByAccounts = function(e, t) {
          o(t) || (t = [t]);
          const n = t.map(e => {
            return { account: e };
          });
          return this.cutFriends(e, n);
        }),
        (r.findFriend = function(e, t) {
          return s.findObjInArray(e, { keyPath: 'account', value: t });
        }),
        (r.mergeUsers = function(e, t) {
          return this.mergeObjArray(e, t, { keyPath: 'account' });
        }),
        (r.findUser = function(e, t) {
          return s.findObjInArray(e, { keyPath: 'account', value: t });
        }),
        (r.mergeTeams = function(e, t) {
          return this.mergeObjArray(e, t, { keyPath: 'teamId' });
        }),
        (r.cutTeams = function(e, t) {
          return this.cutObjArray(e, t, { keyPath: 'teamId' });
        }),
        (r.findTeam = function(e, t) {
          return s.findObjInArray(e, { keyPath: 'teamId', value: t });
        }),
        (r.assembleTeamOwner = i.assembleOwner),
        (r.assembleTeamMembers = i.assembleMembers),
        (r.genTeamMemberId = i.genId),
        (r.mergeTeamMembers = function(e, t) {
          return this.mergeObjArray(e, t);
        }),
        (r.cutTeamMembers = function(e, t) {
          return this.cutObjArray(e, t);
        }),
        (r.cutTeamMembersByAccounts = function(e, t, n) {
          o(n) || (n = [n]);
          const r = i.assembleMembers({ teamId: t }, n);
          return this.cutTeamMembers(e, r);
        }),
        (r.findTeamMember = function(e, t) {
          return s.findObjInArray(e, { keyPath: 'id', value: t });
        }),
        (r.mergeSessions = function(e, t) {
          return this.mergeObjArray(e, t, { sortPath: 'updateTime', desc: !0 });
        }),
        (r.cutSessions = function(e, t) {
          return this.cutObjArray(e, t);
        }),
        (r.cutSessionsByIds = function(e, t) {
          o(t) || (t = [t]);
          const n = t.map(e => {
            return { id: e };
          });
          return this.cutSessions(e, n);
        }),
        (r.findSession = function(e, t) {
          return s.findObjInArray(e, { keyPath: 'id', value: t });
        }),
        (r.mergeMsgs = function(e, t) {
          return this.mergeObjArray(e, t, { keyPath: 'idClient', sortPath: 'time' });
        }),
        (r.cutMsgs = function(e, t) {
          return this.cutObjArray(e, t, { keyPath: 'idClient' });
        }),
        (r.cutMsgsByIdClients = function(e, t) {
          o(t) || (t = [t]);
          const n = t.map(e => {
            return { idClient: e };
          });
          return this.cutMsgs(e, n);
        }),
        (r.findMsg = function(e, t) {
          return s.findObjInArray(e, { keyPath: 'idClient', value: t });
        }),
        (r.mergeSysMsgs = function(e, t) {
          return this.mergeObjArray(e, t, { keyPath: 'idServer', desc: !0 });
        }),
        (r.cutSysMsgs = function(e, t) {
          return this.cutObjArray(e, t, { keyPath: 'idServer' });
        }),
        (r.cutSysMsgsByIdServers = function(e, t) {
          o(t) || (t = [t]);
          const n = t.map(e => {
            return { idServer: e };
          });
          return this.cutSysMsgs(e, n);
        }),
        (r.findSysMsg = function(e, t) {
          return s.findObjInArray(e, { keyPath: 'idServer', value: t });
        });
    },
    function(e, t, n) {
      const r = n(66);

      const s = n(0);

      const o = { welcome: '00', text: '01', link: '03' };

      const i = { '01': 'text', '02': 'image', '03': 'answer', 11: 'template' };
      function a(e) {
        s.verifyOptions(e, 'content', 'msg::RobotMessage'),
          s.undef(e.robotAccid) && (e.robotAccid = e.to);
        let t = e.content;
        switch (t.type) {
          case 'welcome':
            s.undef(e.body) && (this.body = '欢迎消息');
            break;
          case 'text':
            s.verifyOptions(t, 'content', 'msg::RobotMessage'),
              s.undef(e.body) && (this.body = t.content);
            break;
          case 'link':
            s.verifyOptions(t, 'target', 'msg::RobotMessage');
        }
        t.type && (t.type = o[t.type]),
          (t = { param: t, robotAccid: e.robotAccid }),
          (this.attach = JSON.stringify(t)),
          (e.type = 'robot'),
          r.call(this, e);
      }
      (a.prototype = Object.create(r.prototype)),
        (a.reverse = function(e) {
          const t = r.reverse(e);
          if (t.type === 'robot') {
            let n = JSON.parse(e.attach);
            if ((n.param && (n.param.type = i[n.param.type] || 'unknown'), n.robotMsg)) {
              const o = (n = s.merge(n, n.robotMsg)).message;
              n.flag === 'bot'
                ? (n.message = o.map(e => {
                    return (e.type = i[e.type] || 'unknown'), e;
                  }))
                : n.flag,
                delete n.robotMsg;
            }
            t.content = n;
          }
          return t;
        }),
        (e.exports = a);
    },
    function(e, t, n) {
      const r = n(66);

      const s = n(0);
      function o(e) {
        s.verifyOptions(e, 'tip', 'msg::TipMessage'),
          (e.type = 'tip'),
          r.call(this, e),
          (this.body = e.tip);
      }
      (o.prototype = Object.create(r.prototype)),
        (o.reverse = function(e) {
          const t = r.reverse(e);
          return (t.text = ''), (t.tip = e.body), e.attach && (t.attach = e.attach), t;
        }),
        (e.exports = o);
    },
    function(e, t, n) {
      const r = n(66);

      const s = n(0);
      function o(e) {
        s.verifyOptions(e, 'content', 'msg::CustomMessage'),
          (e.type = 'custom'),
          r.call(this, e),
          (this.attach = e.content);
      }
      (o.prototype = Object.create(r.prototype)),
        (o.reverse = function(e) {
          const t = r.reverse(e);
          return (t.content = e.attach), t;
        }),
        (e.exports = o);
    },
    function(e, t, n) {
      const r = n(0).notundef;

      const s = n(66);

      const o = n(74).getInstance('IM');

      const i = n(106);

      const a = n(118);

      const c = {
        0: 'addTeamMembers',
        1: 'removeTeamMembers',
        2: 'leaveTeam',
        3: 'updateTeam',
        4: 'dismissTeam',
        5: 'passTeamApply',
        6: 'transferTeam',
        7: 'addTeamManagers',
        8: 'removeTeamManagers',
        9: 'acceptTeamInvite',
        10: 'updateTeamMute',
        101: 'netcallMiss',
        102: 'netcallBill',
      };
      function u() {}
      (u.prototype = Object.create(s.prototype)),
        (u.reverse = function(e) {
          const t = s.reverse(e);
          if (((e.attach = e.attach ? `${e.attach}` : ''), e.attach)) {
            const n = JSON.parse(e.attach);
            if (((t.attach = { type: c[n.id] || n.id }), r(n.data))) {
              const u = n.data;
              r(u.tinfo) && (t.attach.team = i.reverse(o.unserialize(u.tinfo, 'team'), !0)),
                r(u.ids) && (t.attach.accounts = u.ids),
                r(u.id) && (t.attach.account = u.id),
                r(u.uinfos) &&
                  (t.attach.users = u.uinfos.map(e => {
                    return a.reverse(o.unserialize(e, 'user'));
                  })),
                r(u.mute) && (t.attach.mute = +u.mute == 1),
                r(u.attach) && (t.attach.custom = u.attach),
                r(u.channel) && (t.attach.channelId = u.channel),
                r(u.calltype) && (t.attach.netcallType = u.calltype),
                r(u.duration) && (t.attach.duration = u.duration),
                r(u.time) && (t.attach.time = u.time),
                t.attach.accounts &&
                  t.attach.accounts.length <= 2 &&
                  t.from === t.to &&
                  t.attach.accounts.some(e => {
                    if (e !== t.to) return (t.to = e), !0;
                  });
            }
          } else t.attach = {};
          return t;
        }),
        (e.exports = u);
    },
    function(e, t, n) {
      const r = n(66);

      const s = n(0);
      function o(e) {
        (e.type = 'geo'),
          s.verifyOptions(e, 'geo', 'msg::GeoMessage'),
          s.verifyOptions(e.geo, 'lng lat title', !0, 'geo.', 'msg::GeoMessage'),
          s.verifyParamType('geo.lng', e.geo.lng, 'number', 'msg::GeoMessage'),
          s.verifyParamType('geo.lat', e.geo.lat, 'number', 'msg::GeoMessage'),
          s.verifyParamType('geo.title', e.geo.title, 'string', 'msg::GeoMessage'),
          r.call(this, e),
          (this.attach = JSON.stringify(e.geo));
      }
      (o.prototype = Object.create(r.prototype)),
        (o.reverse = function(e) {
          const t = r.reverse(e);
          return (
            (e.attach = e.attach ? `${e.attach}` : ''),
            (t.geo = e.attach ? JSON.parse(e.attach) : {}),
            t
          );
        }),
        (e.exports = o);
    },
    function(e, t, n) {
      const r = n(117);

      const s = n(0);
      function o() {}
      (o.prototype = Object.create(r.prototype)),
        (o.verifyFile = function(e, t) {
          s.verifyOptions(e, 'dur w h', !0, 'file.', t);
        }),
        (e.exports = o);
    },
    function(e, t, n) {
      const r = n(117);

      const s = n(0);
      function o() {}
      (o.prototype = Object.create(r.prototype)),
        (o.verifyFile = function(e, t) {
          s.verifyOptions(e, 'dur', !0, 'file.', t);
        }),
        (e.exports = o);
    },
    function(e, t, n) {
      const r = n(0);

      const s = n(117);
      function o() {}
      (o.prototype = Object.create(s.prototype)),
        (o.verifyFile = function(e, t) {
          r.verifyOptions(e, 'w h', !0, 'file.', t);
        }),
        (e.exports = o);
    },
    function(e, t, n) {
      const r = n(66);

      const s = n(0);
      function o(e) {
        s.verifyOptions(e, 'text', 'msg::TextMessage'), (e.type = 'text'), r.call(this, e);
      }
      (o.prototype = Object.create(r.prototype)),
        (o.reverse = function(e) {
          return r.reverse(e);
        }),
        (e.exports = o);
    },
    function(e, t, n) {
      const r = n(0);

      const s = function(e) {
        this.account = e.account;
      };

      const o = s.prototype;

      const i = (o.Message = n(66));

      const a = (o.TextMessage = n(314));

      const c = (o.FileMessage = n(117));

      const u = (o.GeoMessage = n(310));

      const l = (o.NotificationMessage = n(309));

      const m = (o.CustomMessage = n(308));

      const d = (o.TipMessage = n(307));

      const p = (o.RobotMessage = n(306));
      (o.validScenes = i.validScenes),
        (o.validTypes = i.validTypes),
        (o.reverse = function(e) {
          let t;
          switch (i.getType(e)) {
            case 'text':
              t = a.reverse(e);
              break;
            case 'image':
            case 'audio':
            case 'video':
            case 'file':
              t = c.reverse(e);
              break;
            case 'geo':
              t = u.reverse(e);
              break;
            case 'notification':
              t = l.reverse(e);
              break;
            case 'custom':
              t = m.reverse(e);
              break;
            case 'tip':
              t = d.reverse(e);
              break;
            case 'robot':
              t = p.reverse(e);
              break;
            default:
              t = i.reverse(e);
          }
          return i.setExtra(t, this.account), t;
        }),
        (o.reverseMsgs = function(e, t) {
          let n;

          let s;

          const o = this;
          return e.map(e => {
            return (
              (e = o.reverse(e)),
              t &&
                ((n = t.modifyObj) && (e = r.merge(e, n)),
                (s = t.mapper),
                r.isFunction(s) && (e = s(e))),
              e
            );
          });
        }),
        (e.exports = s);
    },
    function(e, t, n) {
      const r = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n(43));
      const s = n(17).fn;

      const o = n(0);

      const i = r.default.clientTypeMap;
      function a(e) {
        e = e || {};
        const t = o.copy(e);
        return (
          t.clientType && (t.clientType = i[t.clientType] || ''),
          t.serverCustom &&
            ((t.custom = JSON.parse(t.serverCustom)),
            typeof t.custom[0] === 'string' && (t.custom = t.custom[0]),
            delete t.serverCustom),
          t
        );
      }
      s.processEventService = function(e) {
        const t = e.content;

        const n = e.error;

        const r = this.options || {};
        switch (
          (n &&
            ((n.callFunc = 'events::processEventService'),
            this.onCustomError('事件服务解包失败', 'EVENT_SERVICE_ERROR', n)),
          e.cmd)
        ) {
          case 'pushEvent':
            if (o.isFunction(r.onpushevents)) {
              const s = { msgEvents: [a(t.msgEvent)] };
              r.onpushevents(s);
            }
            break;
          case 'pushEvents':
            if (o.isFunction(r.onpushevents)) {
              let i = t.msgEvents;
              (i = {
                msgEvents: i.map(e => {
                  return a(e);
                }),
              }),
                r.onpushevents(i);
            }
        }
      };
    },
    function(e, t, n) {
      n(17).fn.processFilter = function(e) {
        switch (e.cmd) {
          case 'sendFilterMsg':
            this.onSendMsg(e, !0);
            break;
          case 'filterMsg':
            this.onMsg(e, !0);
            break;
          case 'filterSysMsg':
            this.onSysMsg(e, !0);
            break;
          case 'sendFilterCustomSysMsg':
            this.onSendSysMsg(e, !0);
        }
      };
    },
    function(e, t, n) {
      const r = n(17).fn;
      (r.processChatroom = function(e) {
        switch (e.cmd) {
          case 'getChatroomAddress':
            this.onChatroomAddress(e);
        }
      }),
        (r.onChatroomAddress = function(e) {
          e.error || (e.obj.address = e.content.address);
        });
    },
    function(e, t, n) {
      const r = n(17).fn;
      (r.syncSessionAck = function(e) {
        const t = this;

        const n = t.db;

        let r = Promise.resolve();
        [[e.content.p2p, 'p2p'], [e.content.team.m_map, 'team']].forEach(e => {
          const s = e[0];

          const o = e[1];
          Object.keys(s).forEach(e => {
            const i = `${o}-${e}`;

            const a = { id: i, ack: s[e] };
            n.enable &&
              (r = r
                .then(() => {
                  return n.putSession(a);
                })
                .then(() => {
                  t.markUnreadBySessionAck({ sessionId: i, ack: s[e] });
                })),
              t.mergeSession(a);
          });
        }),
          t.logger.warn('session::syncSessionAck: parse offline session ack', t.sessionSet);
        const s = e.content.timetag;
        n.enable &&
          (r = r.then(() => {
            return t.db.updateSessionAck(s);
          })),
          (r.cmd = 'sessionAck'),
          t.syncPromiseArray.push(r);
      }),
        (r.onMarkSessionAck = function(e) {
          e.error || this.storeSessionAck(e.obj);
        }),
        (r.syncMarkSessionAck = function(e) {
          this.storeSessionAck(e.content);
        }),
        (r.storeSessionAck = function(e) {
          if (this.options.syncSessionUnread) {
            const t = this.db;

            const n = `${e.scene === 0 ? 'p2p' : 'team'}-${e.to}`;

            const r = e.timetag;
            if (r <= ((this.findSession(n) || {}).ack || 0))
              this.logger.warn('session::storeSessionAck: ack <= ackInMemory', r);
            else {
              const s = { id: n, ack: r };
              this.mergeSession(s),
                t.enable && t.updateSession(s),
                this.logger.info('session::storeSessionAck:', s),
                this.markUnreadBySessionAck({ sessionId: n, ack: s.ack });
            }
          }
        }),
        (r.markUnreadBySessionAck = function(e) {
          const t = e.sessionId;

          const n = e.ack;

          const r = this;

          const s = r.db;
          if (s.enable)
            r.pushMsgTask(() => {
              return s
                .getMsgCountAfterAck({
                  shouldCountNotifyUnread: r.options.shouldCountNotifyUnread,
                  sessionId: t,
                  ack: n,
                })
                .then(e => {
                  const n = { id: t, unread: e };
                  return (
                    r.logger.log('session::markUnreadBySessionAck: db.getMsgCountAfterAck done'),
                    r.syncing && r.cacheSyncedSession(n),
                    r.onUpdateSession(n),
                    s.updateSession(n)
                  );
                });
            });
          else {
            const o = r.findSession(t);
            if (o) {
              const i = o.unreadMsgs;
              if (i && i.length) {
                for (var a = 0, c = [], u = i.length - 1; u >= 0; u--) {
                  const l = i[u];
                  if (!(l.time > n)) break;
                  a++, c.push(l);
                }
                (o.unreadMsgs = c),
                  (o.unread = a),
                  r.logger.info(`session::markUnreadBySessionAck: unread ${a}`),
                  r.onUpdateSession(o);
              }
            }
          }
        });
    },
    function(e, t, n) {
      const r = n(17).fn;

      const s = n(0);

      const o = n(102);

      const i = n(23);
      (r.mergeSession = function(e) {
        e = s.copyWithNull(e);
        const t = this.sessionSet;

        const n = e.id;

        const r = t[n];
        if (r && r.lastMsg && e && e.lastMsg && e.lastMsg.isLocal) {
          const o = r.lastMsg.time || 0;
          if ((e.lastMsg.time || 0) < o) return r;
        }
        return (t[n] = s.merge(r, e)), (e = t[n]), s.undef(e.unread) && (e.unread = 0), e;
      }),
        (r.mergeSessions = function(e) {
          const t = this;
          e.forEach(e => {
            t.mergeSession(e);
          });
        }),
        (r.deleteLocalSession = function(e) {
          const t = this;
          s.isArray(e) || (e = [e]),
            e.forEach(e => {
              delete t.sessionSet[e];
            });
        }),
        (r.onDeleteSessions = function(e) {
          e.obj = e.obj.sessions.map(e => {
            return o.parse(e);
          });
        }),
        (r.onUpdateSession = function(e) {
          const t = this;
          return new Promise(n => {
            e
              ? ((e = t.mergeSession(e)),
                (e = s.simpleClone(e)),
                o.trim(e),
                o.isComplete(e) &&
                  setTimeout(() => {
                    t.logger.info('session::onUpdateSession:', e.id, s.simpleClone(e)),
                      t.options.onupdatesession(e),
                      n(e);
                  }, 0))
              : n(e);
          });
        }),
        (r.setCurrSession = function(e) {
          (e = `${e}`), (this.currSessionId = e), this.logger.info('session::setCurrSession:', e);
        }),
        (r.findSession = function(e) {
          return this.sessionSet[e];
        }),
        (r.resetSessionUnread = function(e) {
          e = `${e}`;
          let t;

          const n = this;

          const r = n.db;
          if (n.findSession(e)) {
            if (
              (r.enable && r.resetSessionUnread(e),
              !n.options.autoMarkRead && n.sessionUnreadMsgs && n.sessionUnreadMsgs[e])
            ) {
              const s = n.sessionUnreadMsgs[e];
              n.markMsgRead(s, !0), (n.sessionUnreadMsgs[e] = []);
            }
            (t = { id: e, unread: 0 }), n.onUpdateSession(t);
          } else n.logger.warn(`session::resetSessionUnread: no session ${e}`);
        }),
        (r.insertLocalSession = function(e) {
          const t = this;

          const n = t.db;

          const r = t.sessionSet;
          return new Promise((a, c) => {
            const u = e.scene;

            const l = e.to;

            const m = `${u}-${l}`;

            let d = t.findSession(m);
            if (d) c(i.sessionExist({ callFunc: 'session::insertLocalSession', session: d }));
            else {
              let p;
              if (s.isNumber(e.updateTime)) p = e.updateTime;
              else {
                let f;

                const g = [];
                for (const h in r)
                  r.hasOwnProperty(h) &&
                    ((f = r[h]), s.isNumber(f.updateTime) && g.push(f.updateTime));
                (p = Math.max(...g) + 1), (p = Math.max(p, +new Date()));
              }
              let y = Promise.resolve();
              n.enable && (y = n.getMsgs({ sessionId: m, limit: 1 })),
                y.then(e => {
                  if (s.isArray(e) && e.length === 1) {
                    const r = e[0];
                    (d = o.genSessionByMsg(r)).updateTime = p;
                  } else d = { id: m, scene: u, to: l, updateTime: p, lastMsg: null };
                  n.enable ? n.putSession(d).then(a, c) : a(d), t.onUpdateSession(d);
                });
            }
          });
        }),
        (r.updateLocalSession = function(e, t) {
          const n = this;
          return new Promise((r, o) => {
            const a = n.db;
            if (n.findSession(e.id)) {
              let c = Promise.resolve();

              const u = s.filterObj(e, 'id lastMsg localCustom');
              a.enable && (c = a.updateSession(u)),
                c
                  .then(e => {
                    return n.onUpdateSession(e, t);
                  })
                  .then(r, e => {
                    o({ callFunc: 'session::updateLocalSession', event: e });
                  });
            } else
              o(i.sessionNotExist({ sessionId: e.id, callFunc: 'session::updateLocalSession' }));
          });
        });
    },
    function(e, t, n) {
      const r = n(17).fn;

      const s = n(0);

      const o = n(104);
      (r.splitSysMsgs = function(e, t) {
        for (var n, r = e.length - 1; r >= 0; r--)
          (n = e[r]), o.isCustom(n) && (e.splice(r, 1), t.push(n));
      }),
        (r.onOfflineSysMsgs = function(e, t) {
          const n = this;

          let r = e.content.sysMsgs.map(e => {
            return (e = o.reverse(e)), t && (e.filter = !0), e;
          });
          (r = r.reverse()), n.markSysMsgRead(r);
          const s = [];
          n.splitSysMsgs(r, s);
          const i = t ? 'offlineFilterSysMsgs' : 'offlineSysMsgs';

          const a = t ? 'offlineFilterCustomSysMsgs' : 'offlineCustomSysMsgs';
          if (r.length) {
            const c = n.putSysMsg(r, 'offlineSysMsgs').then(e => {
              (r = e).length &&
                (n.logger.info('sysmsg::onOfflineSysMsgs: ', i, r.length, r),
                (n.syncResult[i] = n.syncResult[i] || []),
                (n.syncResult[i] = n.syncResult[i].concat(r)));
            });
            (c.cmd = 'sysMsgs'), n.syncPromiseArray.push(c);
          }
          s.length &&
            (n.logger.info('sysmsg::onOfflineSysMsgs: ', a, s),
            (n.syncResult[a] = n.syncResult[a] || []),
            (n.syncResult[a] = n.syncResult[a].concat(s)));
        }),
        (r.onSendSysMsg = function(e, t) {
          let n = e.obj;
          this.completeSysMsg(n),
            e.error ? (n.status = 'fail') : (n.status = 'success'),
            (n = o.reverse(n)),
            t && (e.obj.filter = !0),
            (e.obj = n);
        }),
        (r.completeSysMsg = function(e) {
          return (e.from = this.account), e;
        }),
        (r.onSysMsg = function(e, t) {
          const n = o.reverse(e.content.sysMsg);
          this.markSysMsgRead(n),
            t && (n.filter = !0),
            o.isCustom(n)
              ? (this.logger.info('sysmsg::onSysMsg: on customSysMsg', n),
                this.options.oncustomsysmsg(n))
              : this.syncing
                ? this.unhandledSysMsgs.push(n)
                : this.handleSysMsg(n);
        }),
        (r.handleSysMsg = function(e) {
          const t = this;

          const n = e.type;

          const r = e.from;
          t.sysMsgPromise = t.sysMsgPromise
            .then(() => {
              return t.putSysMsg(e, 'onSysMsg');
            })
            .then(t => {
              e = t[0];
            })
            .then(() => {
              if (e) {
                let s;

                let o = Promise.resolve();
                switch (n) {
                  case 'addFriend':
                    (s = { type: 'addFriend', account: r }), (o = t.onFriendRequest(s));
                    break;
                  case 'passFriendApply':
                    (s = { type: 'passFriendApply', account: r }), (o = t.onFriendRequest(s));
                    break;
                  case 'deleteFriend':
                    o = t.onDeleteFriend({ account: r });
                }
                return s && s.friend && (e.friend = s.friend), o;
              }
            })
            .then(() => {
              e &&
                (t.logger.info('sysmsg::handleSysMsg: ', n, e),
                setTimeout(() => {
                  t.options.onsysmsg(e);
                }, 0));
            });
        }),
        (r.putSysMsg = function(e, t) {
          if ((s.isArray(e) || (e = [e]), e[0].filter)) return Promise.resolve(e);
          const n = this;

          const r = n.db;

          const o = r.enable;

          let i = Promise.resolve();

          let a = [];
          return (i = (i = i
            .then(() => {
              return o ? r.putSysMsg(e) : e;
            })
            .then(t => {
              const r = [];
              e.forEach(e => {
                n.checkSysMsgUnique(e) && r.push(e);
              }),
                (e = r),
                (a = o ? t : e);
            })).then(() => {
            return n.getSysMsgUnread().then(r => {
              return (
                a.length || ((a = e).backward = !0),
                n.updateSysMsgUnread(a, r, 1).then(e => {
                  t === 'offlineSysMsgs' && (n.syncResult.sysMsgUnread = e),
                    t === 'onSysMsg' && n.onUpdateSysMsgUnread(e);
                })
              );
            });
          })).then(() => {
            return e;
          });
        }),
        (r.checkSysMsgUnique = s.genCheckUniqueFunc('idServer')),
        (r.getSysMsgUnread = function() {
          const e = this;

          const t = e.db;
          return new Promise(n => {
            t.enable
              ? t.getSysMsgUnread().then(
                  e => {
                    n(e);
                  },
                  () => {
                    n(e.sysMsgUnread);
                  }
                )
              : n(e.sysMsgUnread);
          });
        }),
        (r.updateSysMsgUnread = function(e, t, n) {
          if ((s.isArray(e) || (e = [e]), !e.length)) return Promise.resolve(t);
          t = t || {};
          let r;

          const i = this.db;
          return (
            e.forEach(e => {
              ((n > 0 && !e.read) || (n < 0 && e.read)) && ((r = e.type), (t[r] = (t[r] || 0) + n));
            }),
            (t = o.completeUnread(t)),
            (this.sysMsgUnread = t),
            i.enable && !e.backward ? i.updateSysMsgUnread(t) : Promise.resolve(t)
          );
        }),
        (r.reduceSysMsgUnread = function(e) {
          const t = this;
          return t
            .getSysMsgUnread()
            .then(n => {
              return t.updateSysMsgUnread(e, n, -1);
            })
            .then(e => {
              t.onUpdateSysMsgUnread(e);
            });
        }),
        (r.onUpdateSysMsgUnread = function(e) {
          const t = this;
          setTimeout(() => {
            t.logger.info('sysmsg::onUpdateSysMsgUnread:', e), t.options.onupdatesysmsgunread(e);
          }, 0);
        }),
        (r.updateSysMsg = function(e) {
          const t = this;

          const n = t.db;
          (n.enable ? n.updateSysMsg(e) : Promise.resolve(e)).then(e => {
            t.onUpdateSysMsg(e);
          });
        }),
        (r.onUpdateSysMsg = function(e) {
          const t = this;
          setTimeout(() => {
            s.isArray(e) || (e = [e]),
              e.forEach(e => {
                t.logger.info('sysmsg::onUpdateSysMsg:', e), t.options.onupdatesysmsg(e);
              });
          }, 0);
        }),
        (r.processUnsettledSysMsgs = function() {
          const e = this;
          e.unhandledSysMsgs.forEach(t => {
            e.handleSysMsg(t);
          }),
            e.resetUnsettledSysMsgs();
        });
    },
    function(e, t, n) {
      const r = n(17).fn;

      const s = n(104);

      const o = n(102);

      const i = n(0);
      (r.onDeleteMsg = function(e) {
        delete e.obj.sysMsg, e.error || (e.promise = this.deleteLocalMsg(e.obj.msg));
      }),
        (r.onMsgDeleted = function(e) {
          if (!e.error) {
            const t = this;

            const n = t.db;

            let r = s.reverse(e.content.sysMsg);
            (r = t.processDeleteMsgSysMsg(r)),
              t.markSysMsgRead(r),
              t.deleteLocalMsg(r.msg).then(() => {
                n.enable && n.updateDeleteMsgTimetag(r.time + 1), t.handleSysMsg(r);
              });
          }
        }),
        (r.processDeleteMsgSysMsg = function(e) {
          return (
            (e.msg = {}),
            ['scene', 'from', 'to'].forEach(t => {
              e.msg[t] = e[t];
            }),
            (e.msg.idClient = e.deletedIdClient),
            (e.msg.idServer = e.deletedIdServer),
            (e.msg.time = e.deletedMsgTime),
            (e.msg.fromNick = e.deletedMsgFromNick),
            (e.opeAccount = e.opeAccount || e.from),
            (e.msg.opeAccount = e.opeAccount),
            this.message.Message.setExtra(e.msg, this.account),
            e
          );
        }),
        (r.onDeleteMsgOfflineRoaming = function(e) {
          if (!e.error) {
            const t = this;

            const n = +e.content.type == 1 ? 'offline' : 'roaming';

            const r = s.reverseSysMsgs(e.content.sysMsgs, {
              mapper(e) {
                return t.processDeleteMsgSysMsg(e);
              },
            });
            t.logger.info(`msg::onDeleteMsgOfflineRoaming: on delete ${n}`, r),
              n === 'offline' && t.markSysMsgRead(r);
            const o = e.content.timetag;
            (t.timetags.deleteMsg = o), (t.syncResult.deleteMsgTimetag = o);
            const i = t.putSysMsg(r, 'offlineSysMsgs');
            (i.cmd = `deleteMsgSysMsgs ${n}`),
              t.syncPromiseArray.push(i),
              (t.syncResult.deleteMsgSysMsgs = t.syncResult.deleteMsgSysMsgs || []),
              t.syncResult.deleteMsgSysMsgs.push({ type: n, sysMsgs: r });
          }
        }),
        (r.deleteMsgOfflineRoaming = function(e, t) {
          if (!e) return Promise.resolve();
          const n = this;
          n.logger.info('msg::deleteMsgOfflineRoaming: ', e, t);
          const r = n.db;

          const s = [];
          return (
            e.forEach(e => {
              e.sysMsgs.forEach(e => {
                const a = n.deleteLocalMsg(e.msg, {
                  cbUpdateSession(e) {
                    (e = n.mergeSession(e)), (e = i.simpleClone(e)), o.trim(e);
                    const s = i.findObjIndexInArray(t, { value: e.id });
                    if ((s !== -1 && (t[s] = i.merge({}, t[s], e)), r.enable))
                      return r.updateSession(e);
                  },
                });
                s.push(a);
              });
            }),
            Promise.all(s).then(() => {
              if (r.enable) return r.updateDeleteMsgTimetag(n.syncResult.deleteMsgTimetag);
            })
          );
        }),
        (r.deleteLocalMsg = function(e, t) {
          const n = this.db;

          const r = (t = t || {}).cbUpdateSession || this.updateLocalSession.bind(this);
          if (n.enable && e) {
            let s = !1;

            let o = null;

            const i = e.sessionId;
            return n
              .getMsgs({ sessionId: i, limit: 1 })
              .then(t => {
                t && t[0] && t[0].idClient === e.idClient && (s = !0);
              })
              .then(() => {
                return n.deleteMsg(e.idClient);
              })
              .then(() => {
                if (s) return n.getMsgs({ sessionId: i, limit: 1 });
              })
              .then(e => {
                if (s) return e && e[0] && (o = e[0]), r({ id: i, lastMsg: o });
              });
          }
          return Promise.resolve();
        });
    },
    function(e, t, n) {
      const r = n(17).fn;

      const s = n(0);
      (r.onOfflineMsgReceipts = function(e) {
        let t;

        const n = this;

        const r = n.db;

        const s = e.content.msgReceipts;

        const o = (n.syncResult.msgReceipts = []);

        const i = [];

        let a = 'msgReceipts';

        const c = n.syncResult.sessions || {};
        s.forEach(e => {
          e.time = +e.time;
          const s = (e.sessionId = `p2p-${e.from}`);
          (a += `-${s}`), (t = Promise.resolve());
          const u = c[s];
          r.enable
            ? (t = r.getSession(s).then(t => {
                if ((t = t || u) && n.shouldUpdateSessionFromMsgReceipt(t, e)) {
                  const o = n.genSessionFromMsgReceipt(t, e);

                  let i = n.syncResult.sessions;
                  return (
                    i &&
                      i[s] &&
                      (i = i[s]).lastMsg &&
                      o.lastMsg &&
                      i.lastMsg.time > o.lastMsg.time &&
                      (o.lastMsg = i.lastMsg),
                    r.putSession(o).then(e => {
                      e && n.cacheSyncedSession(e);
                    })
                  );
                }
              }))
            : u && o.push(e),
            i.push(t);
        }),
          ((t = Promise.all(i).then(() => {
            if (r.enable) return r.updateMsgReceiptsTimetag(e.content.timetag);
          })).cmd = a),
          n.syncPromiseArray.push(t);
      }),
        (r.mergeSessionAndMsgReceipts = function(e, t) {
          const n = this;

          const r = {};
          return (
            (e = e || []),
            (t = t || []),
            e.forEach(e => {
              r[e.id] = e;
            }),
            t.forEach(t => {
              const s = r[t.sessionId];
              if (n.shouldUpdateSessionFromMsgReceipt(s, t)) {
                const o = n.genSessionFromMsgReceipt(s, t);
                e = n.api.mergeSessions(e, o);
              }
            }),
            e
          );
        }),
        (r.shouldUpdateSessionFromMsgReceipt = function(e, t) {
          return !e || !e.msgReceiptServerTime || t.time > e.msgReceiptServerTime;
        }),
        (r.genSessionFromMsgReceipt = function(e, t) {
          const n = t.time;

          let r = { id: t.sessionId, msgReceiptTime: n, msgReceiptServerTime: n };
          return (
            e && e.id === t.sessionId && (r = s.merge({}, e, r)),
            (e && e.updateTime) || (r.updateTime = n),
            r
          );
        }),
        (r.onMsgReceipt = function(e) {
          const t = this;

          const n = t.db;

          const r = e.content.msgReceipt;
          r.time = +r.time;
          const s = r.idClient;

          let o = Promise.resolve();
          n.enable && s && (o = n.getMsgByIdClient(s)),
            o.then(e => {
              let n;
              if (e) {
                if (!e.idServer) return void (t.msgReceiptTasks[s] = r);
                n = e.time;
              } else n = r.time;
              (r.msgReceiptTime = n), t.updateSessionMsgReceiptTime(r);
            });
        }),
        (r.resolveMsgReceiptTask = function(e) {
          const t = this.msgReceiptTasks[e.idClient];
          t && ((t.msgReceiptTime = e.time), this.updateSessionMsgReceiptTime(t));
        }),
        (r.updateSessionMsgReceiptTime = function(e) {
          const t = this.db;

          const n = {
            id: `p2p-${e.from}`,
            msgReceiptTime: e.msgReceiptTime,
            msgReceiptServerTime: e.time,
          };
          t.enable && t.putSession(n), this.onUpdateSession(n);
        }),
        (r.onSendMsgReceipt = function(e) {
          if (!e.error) {
            const t = e.obj.msgReceipt;

            const n = +t.time;

            const r = +e.content.msgReceipt.time;
            this.sessionSet[`p2p-${t.to}`].msgReceiptSendTime = Math.min(n, r);
          }
        }),
        (r.shouldSendMsgReceipt = function(e) {
          if (e && e.scene === 'p2p' && e.status === 'success') {
            const t = this.sessionSet[e.sessionId];
            if (t) {
              const n = t.msgReceiptSendTime;
              return !n || n < e.time;
            }
          }
          return !1;
        }),
        (r.isMsgRemoteRead = function(e) {
          if (e && e.scene === 'p2p' && e.flow === 'out' && e.status === 'success') {
            const t = this.sessionSet[e.sessionId];
            if (t && t.msgReceiptTime) return e.time <= t.msgReceiptTime;
          }
          return !1;
        });
    },
    function(e, t, n) {
      const r = n(17).fn;

      const s = n(0);

      const o = s.undef;

      const i = n(43);

      const a = n(79);

      const c = n(102);

      const u = n(146);
      (r.processMsg = function(e) {
        switch (e.cmd) {
          case 'sendMsg':
            this.onSendMsg(e);
            break;
          case 'msg':
            this.onMsg(e);
            break;
          case 'sysMsg':
            this.onSysMsg(e);
            break;
          case 'broadcastMsg':
            this.onBroadcastMsg(e);
            break;
          case 'sendCustomSysMsg':
            this.onSendSysMsg(e);
            break;
          case 'getHistoryMsgs':
          case 'searchHistoryMsgs':
            this.onHistoryMsgs(e);
            break;
          case 'syncSendMsg':
            this.onMsg(e);
            break;
          case 'deleteSessions':
            this.onDeleteSessions(e);
            break;
          case 'sendMsgReceipt':
            this.onSendMsgReceipt(e);
            break;
          case 'msgReceipt':
            this.onMsgReceipt(e);
            break;
          case 'onDeleteMsg':
            this.onDeleteMsg(e);
            break;
          case 'onMsgDeleted':
            this.onMsgDeleted(e);
            break;
          case 'onDeleteMsgOfflineRoaming':
            this.onDeleteMsgOfflineRoaming(e);
            break;
          case 'onMarkSessionAck':
            this.onMarkSessionAck(e);
            break;
          case 'syncMarkSessionAck':
            this.syncMarkSessionAck(e);
        }
      }),
        (r.checkIgnore = function(e) {
          const t = this;
          e.forEach(e => {
            e.type === 'notification' &&
              !e.ignore &&
              t.options.shouldIgnoreNotification(e) &&
              (e.ignore = !0);
          });
        }),
        (r.filterIgnore = function(e) {
          return e.filter(e => {
            return !e.ignore;
          });
        }),
        (r.genSessionByMsgs = function(e) {
          return this.checkIgnore(e), c.genSessionByMsgs(this.message.Message, e);
        }),
        (r.onRoamingMsgs = function(e) {
          const t = this;

          const n = t.message;

          const r = n.Message;

          const s = r.getMaxTimetag;

          let o = n.reverseMsgs(e.content.msgs);

          const i = s(o);
          o = r.sortMsgs(o);
          const a = (o = r.deduplication(o))[0];

          const c = a.sessionId;

          const u = t.genSessionByMsgs(o);
          t.cacheSyncedSession(u);
          const l = t.putMsg(o, 'roamingMsgs').then(e => {
            (o = e),
              (o = t.filterIgnore(o)).length &&
                (t.logger.info('msg::onRoamingMsgs: putRoamingMsgs', c, o.length, o),
                (t.syncResult.roamingMsgs = t.syncResult.roamingMsgs || []),
                t.syncResult.roamingMsgs.push({
                  sessionId: c,
                  scene: a.scene,
                  to: a.target,
                  msgs: o,
                  timetag: i,
                }));
          });
          (l.cmd = `roamingMsgs-${c}`), t.syncPromiseArray.push(l);
        }),
        (r.onOfflineMsgs = function(e, t) {
          const n = this;

          const r = n.message;

          const s = r.Message;

          let o = null;
          t && (o = { filter: !0 });
          let i;

          let a;

          const c = r.reverseMsgs(e.content.msgs, { modifyObj: o });

          let u = [];

          let l = '';

          const m = t ? 'offlineFilterMsgs' : 'offlineMsgs';
          function d(e) {
            if (u.length) {
              const t = s.getMaxTimetag(u);

              const r = u[0].scene;

              const o = u[0].target;
              n.markMsgRead(u), (u = s.sortMsgs(u)), (u = s.deduplication(u));
              const i = n.genSessionByMsgs(u);
              n.cacheSyncedSession(i),
                ((a = n.putMsg(u, 'offlineMsgs').then(s => {
                  (u = s),
                    (u = n.filterIgnore(u)).length &&
                      (n.logger.info('msg::onOfflineMsgs： toreLastSession', m, e, u.length, u),
                      (n.syncResult[m] = n.syncResult[m] || []),
                      n.syncResult[m].push({ sessionId: e, scene: r, to: o, msgs: u, timetag: t }));
                })).cmd = `offlineMsgs-${e}`),
                n.syncPromiseArray.push(a);
            }
          }
          c.forEach(e => {
            (i = e.sessionId) !== l ? (d(l), (u = []).push(e), (l = i)) : u.push(e);
          }),
            d(l);
        }),
        (r.markUnreadByMsgsPromise = function(e) {
          const t = this;

          const n = t.db;
          n.enable &&
            n.getSession(e).then(n => {
              n.ack && t.markUnreadBySessionAck({ sessionId: e, ack: n.ack });
            });
        }),
        (r.completeMsg = function(e) {
          return (
            (e.from = this.account),
            (e.fromNick = this.myInfo && this.myInfo.nick),
            (e.fromClientType = 'Web'),
            (e.fromDeviceId = i.deviceId),
            e.time || (e.time = +new Date()),
            e
          );
        }),
        (r.onMsgs = function(e) {
          const t = this;
          t.message.reverseMsgs(e.content.msgs, {
            mapper(e) {
              t.handleMsg(e);
            },
          });
        }),
        (r.onMsg = function(e, t) {
          const n = this.message.reverse(e.content.msg);
          t && (n.filter = !0),
            this.syncing ? this.unhandledMsgs.push({ type: 'onMsg', msg: n }) : this.handleMsg(n);
        }),
        (r.onBroadcastMsgs = function(e) {
          let t = e.content.broadcastMsgs;
          (t = t.sort((e, t) => {
            return e.broadcastId - t.broadcastId;
          })),
            this.putBroadcastMsgs(t);
        }),
        (r.onBroadcastMsg = function(e) {
          const t = e.content.broadcastMsg;
          (t.time = t.timestamp),
            this.syncing
              ? this.unhandledMsgs.push({ type: 'onBroadcastMsg', msg: t })
              : t && this.putBroadcastMsg(t);
        }),
        (r.pushMsgTask = function(e) {
          this.msgPromise = this.msgPromise.then(() => {
            return e();
          });
        }),
        (r.handleMsg = function(e) {
          const t = this;

          const n = e.time;
          t.markMsgRead(e),
            (t.msgPromise = t.msgPromise
              .then(() => {
                return t.putMsg(e, 'onMsg');
              })
              .then(r => {
                return (e = r[0]), t.updateRoamingMsgTimetag(n);
              })
              .then(() => {
                if (e) return t.checkUserUpdate(e);
              })
              .then(() => {
                if (e) {
                  const n = e.type;
                  switch (
                    (t.logger.log(
                      `msg::handleMsg:checkUserUpdate: ${e.scene} ${n} msg${
                        n === 'notification' ? ` ${e.attach.type}` : ''
                      }`,
                      e
                    ),
                    n)
                  ) {
                    case 'notification':
                      return t.onTeamNotificationMsg(e);
                  }
                }
              })
              .then(() => {
                e &&
                  !e.ignore &&
                  (t.logger.info('msg::handleMsg:onmsg: ', e),
                  setTimeout(() => {
                    t.options.onmsg(s.copy(e));
                  }, 0));
              })
              .then(void 0, e => {
                (e.callFunc = 'msg::handleMsg'), t.onCustomError('消息处理错误', e);
              }));
        }),
        (r.putMsg = function(e, t) {
          if ((s.isArray(e) || (e = [e]), e[0].filter)) return Promise.resolve(e);
          const n = this;

          const r = n.db;

          const i = r.enable;

          let a = Promise.resolve();

          const c = n.message.Message.getLastMsg(e);

          const u = c.flow;

          const l = c.sessionId !== n.currSessionId;

          let m = n.genSessionByMsgs(e);
          f(m);
          let d = !1;

          let p = [];
          function f(e) {
            (t !== 'roamingMsgs' && t !== 'offlineMsgs') || n.cacheSyncedSession(e);
          }
          return (
            n.checkIgnore(e),
            (a = (a = (a = a
              .then(() => {
                return (
                  i ||
                    n.options.autoMarkRead ||
                    t === 'roamingMsgs' ||
                    !m ||
                    ((n.sessionUnreadMsgs = n.sessionUnreadMsgs || {}),
                    (n.sessionUnreadMsgs[m.id] = n.sessionUnreadMsgs[m.id] || []),
                    (n.sessionUnreadMsgs[m.id] = n.sessionUnreadMsgs[m.id].concat(
                      e.filter(e => {
                        return n.options.shouldCountNotifyUnread(e);
                      })
                    ))),
                  i && t !== 'roamingMsgs' && t !== 'offlineMsgs'
                    ? (n.logger.log('msg::putMsg:db.putMsg: ', m), r.putMsg(e))
                    : e
                );
              })
              .then(t => {
                const r = [];
                return (
                  e.forEach(e => {
                    n.checkMsgUnique(e) && r.push(e);
                  }),
                  (e = r),
                  (p = i ? t : e),
                  Promise.resolve(e)
                );
              })).then(e => {
              return e.length && (f((m = n.genSessionByMsgs(e))), i && m)
                ? new Promise((t, s) => {
                    r.getSessions({ sessionId: m.id }).then(s => {
                      if (s && s.lastMsg) {
                        const o = s.lastMsg;
                        m.lastMsg && m.lastMsg.time < o.time && (m.lastMsg = o);
                      }
                      n.logger.log('msg::putMsg:db.getSessions: ', m),
                        p.length
                          ? m
                            ? r.putSession(m).then(e => {
                                t(e);
                              })
                            : t(s)
                          : ((d = !0), (p = e), t(s));
                    });
                  })
                : Promise.resolve(m);
            })).then(e => {
              if (m && p.length) {
                const s = t === 'roamingMsgs';

                const a = n.options.syncSessionUnread;

                const c = m.id;

                const g = n.findSession(c) || {};

                let h = g.ack || 0;
                if (t === 'offlineMsgs' || (s && a) || (t === 'onMsg' && u === 'in' && l)) {
                  i && e ? ((m = e), (h = h || m.ack || 0)) : (e = g) && (m.unread = e.unread || 0),
                    f(m),
                    (m.unread = m.unread || 0);
                  let y = 0;
                  if (
                    (p.forEach(e => {
                      const t = n.options.shouldCountNotifyUnread(e);

                      let r =
                        (e.type !== 'notification' || (e.type === 'notification' && t)) &&
                        (o(e.isUnreadable) || e.isUnreadable);
                      if ((r && a && (r = e.time > h && e.flow !== 'out'), r && (y++, a && !i))) {
                        const s = g.unreadMsgs || [];
                        s.push(e), (m.unreadMsgs = s);
                      }
                    }),
                    console.log(m),
                    (m.unread += y),
                    n.logger.log('msg::putMsg:updateSession: ', m),
                    f(m),
                    i && !d)
                  )
                    return r.updateSession({ id: m.id, unread: m.unread });
                }
              }
            })),
            t === 'onMsg'
              ? (a = a.then(() => {
                  e.length &&
                    m &&
                    (n.onUpdateSession(m),
                    n.options.syncSessionUnread && !l && n.api.resetSessionUnread(n.currSessionId));
                }))
              : t === 'sendMsg' &&
                !l &&
                m &&
                m.lastMsg &&
                m.lastMsg.isLocal &&
                (n.onUpdateSession(m), n.api.resetSessionUnread(n.currSessionId)),
            a.then(() => {
              return Promise.resolve(e);
            })
          );
        }),
        (r.putBroadcastMsgs = function(e) {
          const t = this;

          const n = t.db;

          const r = e.length;
          if (r > 0) {
            if ((t.doMarkBroadcastMsgsRead(e), n.enable)) {
              const o = e[r - 1].broadcastId;
              return (
                n.updateBroadcastMsgTimetag(o),
                n.putBroadcastMsg(e).then(() => {
                  return (
                    setTimeout(() => {
                      t.doMarkMsgsRead(), t.options.onbroadcastmsgs(s.copy(e));
                    }, 0),
                    Promise.resolve(e)
                  );
                })
              );
            }
            setTimeout(() => {
              t.options.onbroadcastmsgs(s.copy(e));
            }, 0);
          }
          return e;
        }),
        (r.putBroadcastMsg = function(e) {
          const t = this;

          const n = t.db;
          return (
            t.doMarkBroadcastMsgsRead([e]),
            n.enable
              ? (e.broadcastId && n.updateBroadcastMsgTimetag(e.broadcastId),
                n.putBroadcastMsg(e).then(() => {
                  return (
                    setTimeout(() => {
                      t.options.onbroadcastmsg(s.copy(e));
                    }, 0),
                    Promise.resolve(e)
                  );
                }))
              : (setTimeout(() => {
                  t.options.onbroadcastmsg(s.copy(e));
                }, 0),
                e)
          );
        }),
        (r.doMarkBroadcastMsgsRead = function(e) {
          (e = e.map(e => {
            return e.broadcastId;
          })),
            this.sendCmd('batchMarkRead', { sid: 7, cid: 17, ids: e });
        }),
        (r.cacheSyncedSession = function(e) {
          if (e && this.syncResult) {
            (e = s.merge({}, e)), (this.syncResult.sessions = this.syncResult.sessions || {});
            const t = e.id;
            (this.syncResult.sessions[t] = s.merge(this.syncResult.sessions[t], e)),
              o(this.syncResult.sessions[t].unread) && (this.syncResult.sessions[t].unread = 0),
              this.mergeSession(this.syncResult.sessions[t]);
          }
        }),
        (r.checkMsgUnique = s.genCheckUniqueFunc('idClient')),
        (r.storeSendMsg = function(e) {
          if (!this.syncing) {
            const t = this.putMsg(e, 'sendMsg');
            return (
              (this.msgPromise = this.msgPromise.then(() => {
                return t;
              })),
              t
            );
          }
          this.unhandledMsgs.push({ type: 'sendMsg', msg: e });
        }),
        (r.updateSendMsgError = function(e) {
          if (!this.syncing) {
            const t = this.updateMsg(e);
            return (
              (this.msgPromise = this.msgPromise.then(() => {
                return t;
              })),
              t
            );
          }
          this.unupdatedMsgs.push(e);
        }),
        (r.onSendMsg = function(e, t) {
          const n = this;

          let r = (e.obj && e.obj.msg) || e.content.msg;
          n.completeMsg(r);
          const s = e.error && e.error.code === 7101;
          (e.error && !s) ||
            ((r.idServer = e.content.msg.idServer), (r.time = +e.content.msg.time)),
            e.error ? (r.status = 'fail') : (r.status = 'success'),
            (r = n.message.reverse(r)),
            t && (r.filter = !0),
            (e.obj = r),
            n.syncing
              ? n.unupdatedMsgs.push(r)
              : (n.msgPromise = Promise.all([n.msgPromise, e.obj.promise]).then(e => {
                  return (
                    e.length || (r.resend = !0),
                    n.updateMsg(r).then(() => {
                      return (
                        n.options.syncSessionUnread &&
                          n.currSessionId === r.sessionId &&
                          n.api.resetSessionUnread(n.currSessionId),
                        n.resolveMsgReceiptTask(r),
                        r
                      );
                    })
                  );
                }));
        }),
        (r.updateLocalMsg = function(e) {
          const t = this.updateMsg(e);
          return (
            (this.msgPromise = this.msgPromise.then(() => {
              return t;
            })),
            t
          );
        }),
        (r.updateMsg = function(e) {
          if (e.filter) return Promise.resolve(e);
          const t = this.db;

          const n = e.status === 'success';

          const r = c.genSessionByMsg(e);

          const s = !!e.isLocal;
          return (
            this.onUpdateSession(r),
            t.enable
              ? t.updateMsg(e).then(e => {
                  const o = t.updateSession(r);

                  let i = Promise.resolve();
                  return (
                    n && e && !s && (i = t.updateRoamingMsgTimetag(e.time)), Promise.all([o, i])
                  );
                })
              : (n && !s && (this.timetags.roamingMsgs = e.time), Promise.resolve(e))
          );
        }),
        (r.updateRoamingMsgTimetag = function(e) {
          const t = this.db;
          return t.enable
            ? t.updateRoamingMsgTimetag(e)
            : ((this.timetags.roamingMsgs = e), Promise.resolve(e));
        }),
        (r.checkUserUpdate = function(e) {
          const t = this;

          const n = e.from;
          return n === t.account
            ? Promise.resolve()
            : new Promise(r => {
                const o = t.userSet[n];
                if (o) {
                  const i = +o.updateTime;

                  const a = +e.userUpdateTime;
                  !isNaN(i) && !isNaN(a) && s.isNumber(i) && s.isNumber(a) && i < a ? c() : r();
                } else c();
                function c() {
                  t.api.getUser({
                    account: n,
                    sync: !0,
                    done(e, n) {
                      e ||
                        setTimeout(() => {
                          t.logger.log('user::checkUserUpdate: onupdateuser', n.account, n),
                            t.options.onupdateuser(n);
                        }, 0),
                        r();
                    },
                  });
                }
              });
        }),
        (r.processUnsettledMsgs = function() {
          const e = this;
          e.unhandledMsgs.forEach(t => {
            const n = t.msg;
            switch (t.type) {
              case 'onMsg':
                e.handleMsg(n);
                break;
              case 'sendMsg':
                e.msgPromise = e.msgPromise.then(() => {
                  return e.putMsg(n);
                });
                break;
              case 'onBroadcastMsg':
                e.msgPromise = e.msgPromise.then(() => {
                  return e.putBroadcastMsg(n);
                });
            }
          }),
            e.unupdatedMsgs.forEach(t => {
              e.msgPromise = e.msgPromise.then(() => {
                return e.updateMsg(t);
              });
            }),
            e.resetUnsettledMsgs();
        }),
        (r.onTeamNotificationMsg = function(e) {
          const t = this.db;

          const n = e.attach;

          const r = n.type;

          const s = e.from;

          const o = e.to;

          const i = e.time;

          const a = n.team;

          const c = n.account;

          const u = n.accounts;
          switch (r) {
            case 'updateTeam':
              if (!t.enable) return;
              return (a.updateTime = i), this.onUpdateTeam(a), t.updateTeam(a);
            case 'addTeamMembers':
              return this.onAddTeamMembers(e, a, u);
            case 'removeTeamMembers':
              return this.onRemoveTeamMembers(a, o, u);
            case 'acceptTeamInvite':
              return this.onAddTeamMembers(e, a, [s]);
            case 'passTeamApply':
              return this.onAddTeamMembers(e, a, [c]);
            case 'addTeamManagers':
              return this.updateTeamManagers(e, o, u, !0, i);
            case 'removeTeamManagers':
              return this.updateTeamManagers(e, o, u, !1, i);
            case 'leaveTeam':
              return this.onRemoveTeamMembers(a, o, [s]);
            case 'dismissTeam':
              return this.onDismissTeam(o, i);
            case 'transferTeam':
              return this.transferTeam(e, a, s, c);
            case 'updateTeamMute':
              return this.onUpdateTeamMembersMute(e, a, [c], n.mute);
          }
        }),
        (r.onAddTeamMembers = function(e, t, n) {
          const r = this;

          const o = r.db;

          const i = t.teamId;

          const c = a.assembleMembers(t, n);
          e.attach.members = c;
          const u = { team: t, accounts: n, members: c };
          if (
            (r.logger.info('team::onAddTeamMembers: ', u),
            r.options.onAddTeamMembers(s.simpleClone(u)),
            o.enable)
          ) {
            let l;

            let m = o.putTeam(t);
            return (
              n.indexOf(r.account) === -1
                ? (l = o.putTeamMembers(c))
                : (r.logger.warn('team::onAddTeamMembers: user join team', i),
                  (m = new Promise(e => {
                    r.api.getTeamMembers({
                      teamId: i,
                      sync: !0,
                      done() {
                        e();
                      },
                    });
                  }))),
              Promise.all([l, m])
            );
          }
        }),
        (r.onRemoveTeamMembers = function(e, t, n) {
          const r = this.db;

          const o = { team: e, accounts: n };
          if (
            (this.logger.info('team::onRemoveTeamMembers:', o),
            this.options.onRemoveTeamMembers(s.simpleClone(o)),
            r.enable)
          ) {
            if (n.indexOf(this.account) === -1) {
              const i = r.removeTeamMembersByAccounts(t, n);

              let a = Promise.resolve();
              return e && (a = r.putTeam(e)), Promise.all([i, a]);
            }
            return r.leaveTeam(t);
          }
        }),
        (r.updateTeamManagers = function(e, t, n, r, o) {
          const i = this.db;

          const c = (e.attach.members = n.map(e => {
            return { id: a.genId(t, e), type: r ? 'manager' : 'normal', updateTime: o };
          }));

          const u = { teamId: `${t}`, memberUpdateTime: o };
          e.attach.team = u;
          const l = { team: u, accounts: n, isManager: r, members: c };
          if (
            (this.logger.info('team::updateTeamManagers:', l),
            this.options.onUpdateTeamManagers(s.simpleClone(l)),
            i.enable)
          ) {
            const m = i.updateTeam(u);

            const d = i.updateTeamManagers(t, n, r, o);
            return Promise.all([m, d]);
          }
        }),
        (r.onDismissTeam = function(e, t) {
          const n = this.db;

          const r = { teamId: e };
          if (
            (this.logger.info('team::onDismissTeam:', r), this.options.onDismissTeam(r), n.enable)
          )
            return n.dismissTeam(e, t);
        }),
        (r.transferTeam = function(e, t, n, r) {
          const o = this.db;

          const i = t.teamId;

          const c = t.memberUpdateTime;

          const u = { id: a.genId(i, n), type: 'normal', updateTime: c };

          const l = { id: a.genId(i, r), type: 'owner', updateTime: c };
          e.attach.members = [u, l];
          const m = { team: t, from: u, to: l };
          if (
            (this.logger.info('team::transferTeam:', m),
            this.options.onTransferTeam(s.simpleClone(m)),
            o.enable)
          )
            return o.transferTeam(t, n, r);
        }),
        (r.onUpdateTeamMembersMute = function(e, t, n, r) {
          const o = this.db;

          const i = n.map(e => {
            return {
              id: a.genId(t.teamId, e),
              account: e,
              teamId: t.teamId,
              mute: r,
              updateTime: t.memberUpdateTime,
            };
          });
          e.attach.members = i;
          const c = { team: t, accounts: n, members: i, mute: r };
          if (
            (this.logger.info('team::onUpdateTeamMembersMute:', c),
            this.options.onUpdateTeamMembersMute(s.simpleClone(c)),
            o.enable)
          ) {
            const u = o.updateTeamMembers(i);

            const l = o.putTeam(t);
            return Promise.all([u, l]);
          }
        }),
        (r.onHistoryMsgs = function(e) {
          e.error || (e.obj.msgs = this.message.reverseMsgs(e.content.msgs));
        }),
        (r.isFilterMsgs = function(e) {
          return !!e[0].filter;
        }),
        (r.splitMsgs = function(e, t, n, r) {
          e.forEach(e => {
            if (e.filter) r.push(e);
            else
              switch (e.scene) {
                case 'p2p':
                  t.push(e);
                  break;
                case 'team':
                  n.push(e);
              }
          });
        }),
        (r.markMsgRead = function(e, t) {
          s.isArray(e) || (e = [e]);
          if (this.db.enable || this.options.autoMarkRead || t) {
            const n = [];

            const r = [];

            const o = [];
            this.splitMsgs(e, n, r, o),
              this.markP2pMsgsRead(n),
              this.markTeamMsgsRead(r),
              this.markFilterMsgsRead(o);
          }
        }),
        (r.markP2pMsgsRead = function(e) {
          if (e.length) {
            const t = u.idMap.msg.id;

            const n = u.idMap.msg.msg;
            this.doMarkMsgsRead(t, n, e);
          }
        }),
        (r.markTeamMsgsRead = function(e) {
          if (e.length) {
            const t = u.idMap.team.id;

            const n = u.idMap.team.teamMsg;
            this.doMarkMsgsRead(t, n, e);
          }
        }),
        (r.markFilterMsgsRead = function(e) {
          if (e.length) {
            const t = u.idMap.filter.id;

            const n = u.idMap.filter.filterMsg;
            this.doMarkMsgsRead(t, n, e);
          }
        }),
        (r.markSysMsgRead = function(e, t) {
          s.isArray(e) || (e = [e]);
          let n;
          let r;
          (this.db.enable || this.options.autoMarkRead || t) &&
            (this.isFilterMsgs(e)
              ? ((n = u.idMap.filter.id), (r = u.idMap.filter.filterSysMsg))
              : ((n = u.idMap.msg.id), (r = u.idMap.msg.sysMsg)),
            this.doMarkMsgsRead(n, r, e));
        }),
        (r.doMarkMsgsRead = function(e, t, n) {
          n &&
            n.length &&
            this.sendCmd('batchMarkRead', {
              sid: e,
              cid: t,
              ids: n.map(e => {
                return e.idServer;
              }),
            });
        });
    },
    function(e, t, n) {
      const r = n(17).fn;

      const s = n(0);

      const o = n(147);
      (r.processNotify = function(e) {
        switch (e.cmd) {
          case 'syncOfflineMsgs':
            this.onOfflineMsgs(e);
            break;
          case 'batchMarkRead':
            break;
          case 'syncOfflineSysMsgs':
            this.onOfflineSysMsgs(e);
            break;
          case 'syncRoamingMsgs':
            this.onRoamingMsgs(e);
            break;
          case 'syncOfflineFilterMsgs':
            this.onOfflineMsgs(e, !0);
            break;
          case 'syncOfflineFilterSysMsgs':
            this.onOfflineSysMsgs(e, !0);
            break;
          case 'syncMsgReceipts':
            this.onOfflineMsgReceipts(e);
            break;
          case 'syncDonnop':
            this.onDonnop(e, !0);
            break;
          case 'syncSessionAck':
            this.syncSessionAck(e);
            break;
          case 'syncRobots':
            this.onRobots(e);
            break;
          case 'syncBroadcastMsgs':
            this.onBroadcastMsgs(e);
        }
      }),
        (r.onDonnop = function(e, t) {
          if (!e.error) {
            const n = this;

            const r = n.db;

            const s = o.reverse(e.content.donnop);
            n.mergeDonnop(s);
            let i = n.dbDonnop();
            if (t) {
              const a = e.content.timetag;
              (n.timetags.donnop = a),
                r.enable &&
                  (i = i.then(() => {
                    return n.db.updateDonnopTimetag(a);
                  })),
                (i.cmd = 'donnop'),
                n.syncPromiseArray.push(i);
            } else n.onPushNotificationMultiportConfigUpdate();
          }
        }),
        (r.onUpdateDonnop = function(e) {
          if (!e.error) {
            const t = e.obj;
            t &&
              (this.mergeDonnop(s.filterObj(t, ['shouldPushNotificationWhenPCOnline'])),
              this.dbDonnop(),
              this.onPushNotificationMultiportConfigUpdate());
          }
        }),
        (r.getPushNotificationMultiportConfig = function() {
          return s.merge({}, this.pushNotificationMultiportConfig);
        }),
        (r.mergeDonnop = function(e) {
          this.pushNotificationMultiportConfig = s.merge(
            {},
            this.pushNotificationMultiportConfig,
            e
          );
        }),
        (r.dbDonnop = function() {
          return this.db.enable
            ? this.db.setDonnop(this.pushNotificationMultiportConfig)
            : Promise.resolve();
        }),
        (r.onPushNotificationMultiportConfigUpdate = function() {
          const e = this;
          setTimeout(() => {
            const t = e.getPushNotificationMultiportConfig();
            e.logger.info('link::onPushNotificationMultiportConfigUpdate:', t),
              e.options.onPushNotificationMultiportConfigUpdate(t);
          });
        });
    },
    function(e, t, n) {
      const r = n(17).fn;

      const s = n(0);

      const o = s.objs2accounts;

      const i = s.teams2ids;

      const a = n(106);

      const c = n(79);
      (r.processTeam = function(e) {
        const t = e.error;

        let n = void 0;

        let r = void 0;

        let s = void 0;
        switch (e.cmd) {
          case 'createTeam':
            if (
              ((n = e.obj.team),
              t || (n = e.content.team),
              (n = a.reverse(n)),
              (e.obj.team = n),
              (s = c.assembleOwner(n)),
              (e.obj.owner = s),
              !t)
            ) {
              const o = { team: n, owner: s };
              this.logger.info('team::processTeam: create team', o),
                this.options.onCreateTeam(o),
                this.onCreateTeam(n, s);
            }
            break;
          case 'syncCreateTeam':
            (n = a.reverse(e.content.team)),
              (s = c.assembleOwner(n)),
              this.logger.info('team::processTeam: sync createTeam', n, s),
              this.options.onsynccreateteam(n, s),
              this.onCreateTeam(n, s);
            break;
          case 'sendTeamMsg':
            this.onSendMsg(e);
            break;
          case 'teamMsg':
            this.onMsg(e);
            break;
          case 'teamMsgs':
            this.onMsgs(e);
            break;
          case 'addTeamMembers':
          case 'removeTeamMembers':
          case 'leaveTeam':
          case 'dismissTeam':
          case 'addTeamManagers':
          case 'removeTeamManagers':
          case 'transferTeam':
            break;
          case 'updateInfoInTeam':
            t ||
              (((r = e.obj).account = this.account),
              (r.id = c.genId(r.teamId, r.account)),
              (r = c.reverse(r)),
              (e.obj = r),
              this.mergeMyTeamMembers(r),
              this.onUpdateTeamMember(r));
            break;
          case 'updateNickInTeam':
            e.obj = c.reverse(e.obj);
            break;
          case 'updateTeam':
            e.obj = a.reverse(e.obj, !0);
            break;
          case 'applyTeam':
            e.error || (e.obj = a.reverse(e.content.team));
            break;
          case 'passTeamApply':
            this.updateTeamSysMsgState(e, 'passed');
            break;
          case 'rejectTeamApply':
            this.updateTeamSysMsgState(e, 'rejected');
            break;
          case 'acceptTeamInvite':
            this.updateTeamSysMsgState(e, 'passed'), e.error || (e.obj = a.reverse(e.content.team));
            break;
          case 'rejectTeamInvite':
            this.updateTeamSysMsgState(e, 'rejected');
            break;
          case 'getTeam':
            e.error || (e.obj = a.reverse(e.content.team));
            break;
          case 'getTeams':
            this.onTeams(e);
            break;
          case 'getTeamMembers':
            this.onTeamMembers(e);
            break;
          case 'syncTeams':
            this.onTeams(e);
            break;
          case 'syncTeamMembers':
            this.onTeamMembers(e);
            break;
          case 'getTeamHistoryMsgs':
          case 'searchTeamHistoryMsgs':
            this.onHistoryMsgs(e);
            break;
          case 'syncSendTeamMsg':
            this.onMsg(e);
            break;
          case 'notifyTeamMsgReads':
            this.onTeamMsgReceipt(e);
            break;
          case 'syncUpdateTeamMember':
            (r = c.reverse(e.content.teamMember)),
              this.onUpdateTeamMember(r),
              r.account === this.account && this.mergeMyTeamMembers(r);
            break;
          case 'updateMuteStateInTeam':
            break;
          case 'getMyTeamMembers':
            e.error || (e.obj = c.reverseMembers(e.content.teamMembers));
            break;
          case 'getMutedTeamMembers':
            e.error ||
              (e.obj = { teamId: e.obj.teamId, members: c.reverseMembers(e.content.teamMembers) });
            break;
          case 'syncMyTeamMembers':
            this.onSyncMyTeamMembers(e);
        }
      }),
        (r.onCreateTeam = function(e, t) {
          const n = this.db;
          n.enable && (n.putTeam(e), n.putTeamMembers(t));
        }),
        (r.onTeams = function(e) {
          e.content = e.content || {};
          let t;

          const n = this;

          const r = n.db;

          const s = n.packetFromSync(e);

          const o = e.content.teams || [];

          let c = !0;

          let u = [];

          const l = [];
          if (e.error)
            switch (e.error.code) {
              case 803:
                (e.error = null), (c = !1);
            }
          const m = new Promise((m, p) => {
            e.error
              ? s && p(e.error)
              : ((function() {
                  c &&
                    o.forEach(e => {
                      (e = a.reverse(e)).validToCurrentUser ? u.push(e) : l.push(e);
                    });
                  n.logger.info('team::onTeams: parseData', i(u), u, 'invalid', i(l), l),
                    o.length ? ((c = !0), (t = e.content.timetag)) : (c = !1);
                })(),
                r.enable
                  ? (function(o, i) {
                      e.promise = new Promise((e, a) => {
                        function m() {
                          s
                            ? (d(), e(), o())
                            : r
                                .getTeams()
                                .then(t => {
                                  (u = t), d(), e(), o();
                                })
                                .then(void 0, e => {
                                  (e.message = 'db.getTeams error'),
                                    (e.callFunc = 'team::afterMergeData'),
                                    a(e),
                                    i(e);
                                });
                        }
                        c
                          ? r
                              .mergeTeams(u, l, t)
                              .then(() => {
                                m();
                              })
                              .then(void 0, e => {
                                const t = {
                                  callFunc: 'team::onTeams:mergeData',
                                  message: 'db.mergeTeams error',
                                  event: e,
                                };
                                a(t), i(t);
                              })
                          : (n.logger.warn('team::onTeams:mergeData: no teams need merge'), m());
                      }).then(void 0, e => {
                        throw ((e.message = 'merge teams data error'),
                        (e.callFunc = 'team::mergeData'),
                        i(e),
                        e);
                      });
                    })(m, p)
                  : (d(), m()));
          });
          function d() {
            (n.timetags.teams = t),
              (u.invalid = l),
              s
                ? ((n.syncResult.teams = u), (n.syncResult.invalidTeams = l))
                : (n.logger.info('team::onTeams: not in syncing, get teams', i(u), u), (e.obj = u));
          }
          s && ((m.cmd = 'teams'), n.syncPromiseArray.push(m));
        }),
        (r.onTeamMembers = function(e) {
          e.content = e.content || {};
          let t;

          let n;

          const r = this;

          const s = (r.db, r.packetFromSync(e));

          const i = e.content.members || [];

          let a = !0;

          const u = [];

          const l = [];
          if ((e.obj && (n = e.obj.teamId), n || (n = e.content.teamId), (n = `${n}`), e.error))
            switch (e.error.code) {
              case 406:
                (e.error = null), (a = !1);
            }
          const m = new Promise((m, d) => {
            e.error
              ? s &&
                d({
                  callFunc: 'team::onTeamMembers',
                  event: e.error,
                  message: `teamId-${n} 获取群成员错误`,
                })
              : (!(function() {
                  a &&
                    i.forEach(e => {
                      (e = c.reverse(e)).valid ? u.push(e) : l.push(e);
                    });
                  r.logger.warn('team::onTeamMembers: parseData', n, o(u), u, 'invalid', o(l), l),
                    i.length ? ((a = !0), (t = e.content.timetag)) : (a = !1);
                })(),
                (u.invalid = l),
                s
                  ? ((r.syncTeamMembersResult[n] = u),
                    (r.syncTeamMembersResult[`${n}-invalid`] = l),
                    (r.timetags[`team-${n}`] = t))
                  : (r.logger.info('team::onTeamMembers: not syncing, get members', n, o(u), u),
                    (e.obj = { teamId: n, members: u })),
                m());
          });
          s && ((m.cmd = n), r.syncTeamMembersPromiseArray.push(m));
        }),
        (r.onUpdateTeamMember = function(e) {
          e.updateTime || (e.updateTime = +new Date()),
            this.logger.info('team::onUpdateTeamMember: ', e),
            this.options.onupdateteammember(s.simpleClone(e));
          const t = { teamId: e.teamId, memberUpdateTime: e.updateTime };
          this.onUpdateTeam(t);
          const n = this.db;
          n.enable && n.updateTeamMember(e);
        }),
        (r.onUpdateTeam = function(e) {
          this.logger.info('team::onUpdateTeam:', e), this.options.onUpdateTeam(s.simpleClone(e));
          const t = this.db;
          t.enable && t.updateTeam(e);
        }),
        (r.onSyncMyTeamMembers = function(e) {
          const t = this.db;

          const n = c.reverseMembers(e.content.teamMembers);
          if ((this.logger.info('team::onSyncMyTeamMembers:', n), t.enable)) {
            const r = t.putTeamMembers(n).then(() => {
              return t.updateMyTeamMembersTimetag(e.content.timetag);
            });
            (r.cmd = 'myTeamMembers'), this.syncTeamMembersPromiseArray.push(r);
          }
          this.mergeMyTeamMembers(n);
        }),
        (r.mergeMyTeamMembers = function(e) {
          s.isArray(e) || (e = [e]);
          const t = (this.myTeamMembersMap = this.myTeamMembersMap || {});
          e.forEach(e => {
            const n = e.teamId;
            t[n] = s.merge(t[n], e);
          }),
            this.logger.info('team::mergeMyTeamMembers:', t);
        }),
        (r.notifyForNewTeamMsg = function(e) {
          s.isArray(e) || (e = [e]);
          const t = this;

          const n = this.myTeamMembersMap || {};

          const r = {};

          const o = [];
          e.forEach(e => {
            s.exist(n[e]) ? (r[e] = n[e].muteNotiType) : o.push(e);
          });
          let i = Promise.resolve(r);
          return (
            o.length &&
              (i = t.api.getMyTeamMembers({ teamIds: o, promise: !0 }).then(e => {
                return (
                  t.mergeMyTeamMembers(e),
                  e.forEach(e => {
                    r[e.teamId] = e.muteNotiType;
                  }),
                  r
                );
              })),
            i
          );
        }),
        (r.updateTeamSysMsgState = function(e, t) {
          let n;

          let r = e.error;
          r && ((t = 'error'), (r = s.filterObj(r, 'code message'))),
            (n = { idServer: e.obj.idServer, state: t }),
            r && (n.error = r),
            this.updateSysMsg(n);
        }),
        (r.onTeamMsgReceipt = function(e) {
          const t = e.content;

          const n = e.error;
          n && this.logger.error('team::onTeamMsgReceipt:', n),
            t && t.teamMsgReceipts && this.options.onTeamMsgReceipt(t);
        });
    },
    function(e, t, n) {
      const r = n(17).fn;

      const s = n(0);
      r.onRobots = function(e) {
        const t = e.content;
        if (s.isFunction(this.options.onrobots) && Array.isArray(t.robots)) {
          const n = t.robots.filter(e => {
            return !!e.botid;
          });
          n.length > 0 && this.options.onrobots(n || []);
        }
      };
    },
    function(e, t, n) {
      const r = n(17).fn;

      const s = n(0);

      const o = s.objs2accounts;

      const i = n(179);

      const a = n(118);
      (r.processFriend = function(e) {
        const t = e.obj;

        const n = e.content;

        const r = e.error;
        switch (e.cmd) {
          case 'friendRequest':
            this.updateFriendSysMsg(e), r || this.onFriendRequest(t);
            break;
          case 'syncFriendRequest':
            this.onFriendRequest(n, !0);
            break;
          case 'deleteFriend':
            r || this.onDeleteFriend(t);
            break;
          case 'syncDeleteFriend':
            this.onDeleteFriend(n, !0);
            break;
          case 'updateFriend':
            r || this.onUpdateFriend(t);
            break;
          case 'syncUpdateFriend':
            this.onUpdateFriend(n.friend, !0);
            break;
          case 'getFriends':
          case 'syncFriends':
            this.onFriends(e);
            break;
          case 'syncFriendUsers':
            this.onFriendUsers(e);
        }
      }),
        (r.onFriends = function(e) {
          let t;

          const n = this;

          const r = n.db;

          const s = e.error;

          const a = n.packetFromSync(e);

          const c = e.content.friends;

          let u = !0;

          let l = [];

          const m = [];

          const d = new Promise((d, f) => {
            s
              ? a && f(s)
              : ((function() {
                  u &&
                    c.forEach(e => {
                      (e = i.reverse(e)).valid ? l.push(e) : m.push(e);
                    });
                  n.logger.info('friend::onFriends: parse friends', o(l), l, 'delete', o(m), m),
                    c.length ? ((u = !0), (t = e.content.timetag)) : (u = !1);
                })(),
                r.enable
                  ? (function(s, o) {
                      e.promise = new Promise((e, i) => {
                        function c() {
                          a
                            ? (p(), e(), s())
                            : r
                                .getFriends()
                                .then(t => {
                                  (l = t), p(), e(), s();
                                })
                                .then(void 0, e => {
                                  (e._msg = 'get friends error'), i(e), o(e);
                                });
                        }
                        u
                          ? r
                              .mergeFriends(l, m, t)
                              .then(() => {
                                c();
                              })
                              .then(void 0, e => {
                                (e._msg = 'merge friends error'), i(e), o(e);
                              })
                          : (n.logger.info('friend::onFriends: no merge friends'), c());
                      }).then(void 0, e => {
                        throw ((e._msg = 'merge friends data error'), o(e), e);
                      });
                    })(d, f)
                  : (p(), d()));
          });
          function p() {
            (n.timetags.friends = t),
              (l.invalid = m),
              a
                ? ((n.syncResult.friends = l), (n.syncResult.invalidFriends = m))
                : (n.logger.info('friend::onFriends: get friends bingo', o(l), l), (e.obj = l));
          }
          a && ((d.cmd = 'friends'), n.syncPromiseArray.push(d));
        }),
        (r.onFriendRequest = function(e, t) {
          let n = Promise.resolve();

          const r = this.db;

          let s = e.type;
          if ((s = e.type = i.getTypeFromByte(s) || s) === 'addFriend' || s === 'passFriendApply') {
            const o = (e.friend = i.assembleFriend(e.account));
            r.enable && (n = r.putFriend(o));
          }
          return t && this.onSyncFriendAction(e), n;
        }),
        (r.onSyncFriendAction = function(e) {
          this.logger.info('friend::onSyncFriendActionon:', e), this.options.onsyncfriendaction(e);
        }),
        (r.onDeleteFriend = function(e, t) {
          let n = Promise.resolve();

          const r = this.db;
          return (
            r.enable && (n = r.deleteFriend(e.account)),
            t && ((e.type = 'deleteFriend'), this.onSyncFriendAction(e)),
            n
          );
        }),
        (r.onUpdateFriend = function(e, t) {
          const n = this.db;

          const r = i.reverse(e);
          n.enable && n.updateFriend(r),
            t && this.onSyncFriendAction({ type: 'updateFriend', friend: r });
        }),
        (r.onFriendUsers = function(e) {
          const t = this.db;

          const n = e.content;

          const r = n.users.map(e => {
            return a.reverse(e);
          });
          this.logger.warn('friend::onFriendUsers: parse users', o(r), r);
          const s = n.timetag;

          let i = Promise.resolve();
          t.enable && (i = t.mergeFriendUsers(r, s)),
            (this.timetags.friendUsers = s),
            (i.cmd = 'friendUsers'),
            this.syncPromiseArray.push(i),
            (this.syncResult.users = r);
        }),
        (r.updateFriendSysMsg = function(e) {
          let t;

          let n;

          const r = e.obj;

          let o = e.error;
          if (e.obj.idServer) {
            if (o) (t = 'error'), (o = s.filterObj(o, 'code message'));
            else {
              let a = r.type;
              switch ((a = i.getTypeFromByte(a) || a)) {
                case 'passFriendApply':
                  t = 'passed';
                  break;
                case 'rejectFriendApply':
                  t = 'rejected';
              }
            }
            (n = { idServer: r.idServer, state: t }), o && (n.error = o), this.updateSysMsg(n);
          }
        });
    },
    function(e, t, n) {
      const r = n(0);
      function s() {}
      (s.parse = function(e) {
        const t = r.copy(e);
        return (
          (t.isBlacked = t.isBlacked === '1'),
          (t.isMuted = t.isMuted === '1'),
          (t.createTime = +t.createTime),
          (t.updateTime = +t.updateTime),
          t
        );
      }),
        (e.exports = s);
    },
    function(e, t, n) {
      const r = n(17).fn;

      const s = n(0);

      const o = s.objs2accounts;

      const i = n(329);

      const a = n(118);
      (r.processUser = function(e) {
        let t;

        const n = this;

        const r = n.db;

        const s = e.obj;

        const o = e.error;

        const i = e.content;
        switch (e.cmd) {
          case 'markInBlacklist':
            o || n.markInBlacklist(s);
            break;
          case 'syncMarkInBlacklist':
            n.markInBlacklist(i, !0);
            break;
          case 'markInMutelist':
            o || n.markInMutelist(s);
            break;
          case 'syncMarkInMutelist':
            n.markInMutelist(i, !0);
            break;
          case 'getRelations':
            o || n.onRelations(e);
            break;
          case 'syncMyInfo':
            n.onMyInfo(e, !0);
            break;
          case 'updateMyInfo':
            o || ((s.updateTime = i.timetag), n.onUpdateMyInfo(e, s));
            break;
          case 'syncUpdateMyInfo':
            n.onUpdateMyInfo(e, i.user, !0);
            break;
          case 'getUsers':
            o ||
              ((t = i.users.map(e => {
                return (e = a.reverse(e)), n.mergeUser(e), e;
              })),
              (e.obj = t),
              r.enable && r.putUsers(t));
            break;
          case 'updateDonnop':
            n.onUpdateDonnop(e);
            break;
          case 'syncUpdateDonnop':
            n.onDonnop(e, !1);
        }
      }),
        (r.onMyInfo = function(e) {
          const t = this;

          const n = t.db;

          const r = e.error;

          const s = e.content;

          const o = !0;

          let i = void 0;

          const c = new Promise((e, c) => {
            r
              ? o && (r && (r.callFunc = 'user::onMyInfo'), e(r), t.syncData())
              : ((i = a.reverse(s.user)),
                t.logger.info('user::onMyInfo: parseData', i),
                n.enable
                  ? (function(e, t) {
                      n.mergeMyInfo(i, o)
                        .then(() => {
                          u(), e();
                        })
                        .then(void 0, e => {
                          (e.message = 'db.mergeMyInfo error'),
                            (e.callFunc = 'user::onMyInfo'),
                            t(e);
                        });
                    })(e, c)
                  : (u(), e()));
          });
          function u() {
            (t.timetags.myInfo = i.updateTime), o && (t.syncResult.myInfo = i);
          }
          o && ((c.cmd = 'myInfo'), t.syncPromiseArray.push(c));
        }),
        (r.onUpdateMyInfo = function(e, t, n) {
          const r = this.db;

          const o = a.reverse(t);

          const i = s.merge(this.myInfo, o);
          (this.myInfo = i),
            n
              ? (this.logger.info('user::onUpdateMyInfo:', i), this.options.onupdatemyinfo(i))
              : (e.obj = i),
            r.enable && ((o.account = this.account), r.updateUser(o));
        }),
        (r.onRelations = function(e) {
          const t = this;

          const n = t.db;

          const r = e.error;

          const s = t.packetFromSync(e);

          const a = e.content.specialRelations;

          let c = !0;

          let u = void 0;

          let l = [];

          const m = [];

          let d = [];

          const p = [];

          const f = new Promise((f, h) => {
            r
              ? s && (f(r), t.syncData())
              : (a.forEach(e => {
                  const t = {
                    account: (e = i.parse(e)).account,
                    createTime: e.createTime,
                    updateTime: e.updateTime,
                  };
                  e.isBlacked ? l.push(t) : m.push(t), e.isMuted ? d.push(t) : p.push(t);
                }),
                t.logger.info('user::onRelations: parse blacklist', o(l), l, 'delete', o(m), m),
                t.logger.info('user::onRelations: parse mutelist', o(d), d, 'delete', o(p), p),
                a.length ? ((c = !0), (u = e.content.timetag)) : (c = !1),
                n.enable
                  ? (function(r, o) {
                      e.promise = new Promise((e, i) => {
                        function a() {
                          s
                            ? (g(), e(), r())
                            : n
                                .getRelations()
                                .then(t => {
                                  (l = t[0]), (d = t[1]), g(), e(), r();
                                })
                                .then(void 0, e => {
                                  (e.message = 'db.getRelations error'),
                                    (e.callFunc = 'user::onRelations'),
                                    i(e),
                                    o(e);
                                });
                        }
                        c
                          ? n
                              .mergeRelations(l, m, d, p, u)
                              .then(() => {
                                a();
                              })
                              .then(void 0, e => {
                                (e.message = 'db.mergeRelations error'),
                                  (e.callFunc = 'user::onRelations'),
                                  i(e),
                                  o(e);
                              })
                          : (t.logger.warn('user::onRelations: no relations need merge'), a());
                      }).then(void 0, e => {
                        throw ((e.message = 'merge relations data error'),
                        (e.callFunc = 'user::onRelations'),
                        o(e),
                        e);
                      });
                    })(f, h)
                  : (g(), f()));
          });
          function g() {
            (t.timetags.relations = u),
              (l.invalid = m),
              (d.invalid = p),
              s
                ? ((t.syncResult.blacklist = l),
                  (t.syncResult.mutelist = d),
                  (t.syncResult.invalidBlacklist = m),
                  (t.syncResult.invalidMutelist = p))
                : (t.logger.info('user::onRelations: get relations', l, d),
                  (e.obj.blacklist = l),
                  (e.obj.mutelist = d));
          }
          s && ((f.cmd = 'relations'), t.syncPromiseArray.push(f));
        }),
        (r.markInBlacklist = function(e, t) {
          const n = this.db;
          (e.record = { account: e.account, updateTime: +new Date() }),
            n.enable && n.markInBlacklist(e),
            t &&
              (this.logger.info('user::markInBlacklist:', e),
              this.options.onsyncmarkinblacklist(e));
        }),
        (r.markInMutelist = function(e, t) {
          const n = this.db;
          (e.record = { account: e.account, updateTime: +new Date() }),
            n.enable && n.markInMutelist(e),
            t &&
              (this.logger.info('user::markInMutelist:', e), this.options.onsyncmarkinmutelist(e));
        }),
        (r.mergeUser = function(e) {
          this.userSet[e.account] = e;
        });
    },
    function(e, t, n) {
      const r = n(6);

      const s = n(19);
      e.exports = function(e, t, n) {
        t in e ? r.f(e, t, s(0, n)) : (e[t] = n);
      };
    },
    function(e, t, n) {
      const r = n(44);

      const s = n(13);

      const o = n(49);

      const i = n(145);

      const a = n(144);

      const c = n(69);

      const u = n(331);

      const l = n(119);
      s(
        s.S +
          s.F *
            !n(143)(e => {
              Array.from(e);
            }),
        'Array',
        {
          from(e) {
            let t;

            let n;

            let s;

            let m;

            const d = o(e);

            const p = typeof this === 'function' ? this : Array;

            const f = arguments.length;

            let g = f > 1 ? arguments[1] : void 0;

            const h = void 0 !== g;

            let y = 0;

            const v = l(d);
            if (
              (h && (g = r(g, f > 2 ? arguments[2] : void 0, 2)),
              void 0 == v || (p == Array && a(v)))
            )
              for (n = new p((t = c(d.length))); t > y; y++) u(n, y, h ? g(d[y], y) : d[y]);
            else
              for (m = v.call(d), n = new p(); !(s = m.next()).done; y++)
                u(n, y, h ? i(m, g, [s.value, y], !0) : s.value);
            return (n.length = y), n;
          },
        }
      );
    },
    function(e, t, n) {
      n(51), n(332), (e.exports = n(3).Array.from);
    },
    function(e, t, n) {
      e.exports = { default: n(333), __esModule: !0 };
    },
    function(e, t, n) {
      t.__esModule = !0;
      const r = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n(334));
      t.default = function(e) {
        if (Array.isArray(e)) {
          for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
          return n;
        }
        return (0, r.default)(e);
      };
    },
    function(e, t, n) {
      const r = (function(e) {
        return e && e.__esModule ? e : { default: e };
      })(n(335));
      const s = n(17).fn;

      const o = n(0);

      const i = n(23);

      const a = o.undef;

      const c = o.objs2ids;

      const u = o.objs2accounts;

      const l = o.teams2ids;

      const m = n(102);

      const d = o.getGlobal();
      (s.beforeSync = function() {
        const e = this.db;
        return e.enable ? e.clearSendingMsgs() : Promise.resolve();
      }),
        (s.syncData = function() {
          const e = this;

          const t = e.db;

          const n = e.options;

          const r = t.enable;
          function s(t) {
            (e.syncPromiseArray = []),
              (e.syncResult = {}),
              (e.syncTeamMembersPromiseArray = []),
              (e.syncTeamMembersResult = {}),
              o.verifyBooleanWithDefault(
                n,
                'syncRelations syncFriends syncFriendUsers syncTeams syncRoamingMsgs syncMsgReceipts syncExtraTeamInfo',
                !0,
                '',
                'sync::syncData'
              ),
              o.verifyBooleanWithDefault(n, 'syncFilter syncTeamMembers', !1, '', 'sync::syncData');
            const r = {};
            (t = t || {}),
              d._nimForceSyncIM &&
                (e.logger.warn('sync::syncData: nimForceSyncIM'),
                delete t.teams,
                (d._nimForceSyncIM = !1)),
              (r.myInfo = t.myInfo || 0),
              (r.offlineMsgs = 0),
              n.syncRelations && (r.relations = t.relations || 0),
              n.syncFriends && (r.friends = t.friends || 0),
              n.syncFriendUsers && (r.friendUsers = t.friendUsers || 0),
              n.syncRobots && (r.robots = t.robots || 0),
              n.syncTeams && (r.teams = t.teams || 0),
              n.syncRoamingMsgs && (r.roamingMsgs = t.roamingMsgs || 0),
              n.syncMsgReceipts && (r.msgReceipts = t.msgReceipts || 0),
              n.syncExtraTeamInfo && (r.myTeamMembers = t.myTeamMembers || 0),
              n.syncSessionUnread && (r.sessionAck = t.sessionAck || 0),
              n.syncBroadcastMsgs && (r.broadcastMsgs = t.broadcastMsg || 0),
              (r.donnop = t.donnop || 0),
              (r.deleteMsg = t.deleteMsg || 0),
              n.syncFilter && (r.filterMsgs = 0),
              e.sendCmd('sync', { sync: r }, e.onSyncData.bind(e));
          }
          e.notifyLogin(),
            (e.syncing = !0),
            r
              ? e
                  .beforeSync()
                  .then(() => {
                    return e.db.getTimetags();
                  })
                  .then(
                    e => {
                      s(e);
                    },
                    () => {
                      s();
                    }
                  )
              : s(e.timetags);
        }),
        (s.onSyncData = function(e, t) {
          e &&
            this.syncRetryTimes > 3 &&
            ((this.syncRetryTimes = 0),
            (e.callFunc = 'sync::onSyncData'),
            this.onCustomError('SYNC_DATA_ERROR', e));
        }),
        (s.processSync = function(e) {
          switch (
            ((this.syncRetryTimes = this.syncRetryTimes || 0), this.syncRetryTimes++, e.cmd)
          ) {
            case 'syncDone':
              e.error
                ? this.syncRetryTimes > 3 || this.syncData()
                : ((this.timetags.sync = e.content.timetag), this.onSyncDone());
              break;
            case 'syncTeamMembersDone':
              this.onSyncTeamMembersDone();
          }
        }),
        (s.onSyncDone = function(e) {
          let t;

          let n;

          let s;

          let d;

          let p;

          let f;

          let g;

          let h;

          let y;

          let v;

          let b;

          let M;

          let T;

          let k;

          let S;

          let C;

          let P;

          let I;

          let O;

          let w;

          let x;

          let A;

          const _ = this;

          const E = _.db;

          const R = E.enable;

          const F = _.options;

          let j = _.syncPromiseArray;

          const U = _.syncResult;
          if (j && j.length) {
            const N = j.filter(e => {
              return e.cmd === 'sessionAck';
            });
            N.length === 0 && N.push(Promise.resolve());
            const D = j.filter(e => {
              return e.cmd !== 'sessionAck';
            });
            D.length === 0 && D.push(Promise.resolve()),
              Promise.all(D)
                .then(
                  () => {
                    return Promise.all(N);
                  },
                  e => {
                    (e.callFunc = 'sync::onSyncDone'),
                      (e.message = 'afterSync syncNormalPromise 出错'),
                      _.onCustomError('SYNC_NORMAL_ERROR', e);
                  }
                )
                .then(L, e => {
                  (e.callFunc = 'sync::onSyncDone'),
                    (e.message = 'afterSync syncSessionAckPromise 出错'),
                    _.onCustomError('SYNC_SESSION_ACK_ERROR', e);
                })
                .catch(e => {
                  _.syncData();
                });
          } else L();
          function L() {
            if (j) {
              if (
                (_.logger.info('sync::onSyncDone: after sync', o.promises2cmds(j)),
                (j = []),
                (n = U.blacklist || []),
                (s = U.invalidBlacklist || []),
                (d = U.mutelist || []),
                (p = U.invalidMutelist || []),
                (f = U.friends),
                (g = U.invalidFriends || []),
                (h = U.myInfo),
                (y = U.users),
                (v = U.teams),
                (b = U.invalidTeams || []),
                (M = U.sessions),
                (T = U.msgReceipts),
                (k = U.roamingMsgs),
                (S = U.offlineMsgs),
                (C = U.offlineFilterMsgs),
                (I = U.offlineSysMsgs),
                (O = U.offlineCustomSysMsgs),
                (w = U.offlineFilterSysMsgs),
                (x = U.offlineFilterCustomSysMsgs),
                U.broadcastMsgs,
                (A = U.sysMsgUnread),
                M)
              ) {
                const e = [];
                Object.keys(M).forEach(t => {
                  e.push(M[t]);
                }),
                  (M = e.sort((e, t) => {
                    return t.updateTime - e.updateTime;
                  }));
              }
              let i = Promise.resolve();
              R &&
                (i = (function() {
                  let e;

                  const t = [];

                  let n = [];
                  k &&
                    k.forEach(e => {
                      n = [].concat((0, r.default)(n), (0, r.default)(e.msgs));
                    });
                  S &&
                    S.forEach(e => {
                      n = [].concat((0, r.default)(n), (0, r.default)(e.msgs));
                    });
                  return (
                    (e = E.putMsg(n)),
                    t.push(e),
                    Promise.all(t).then(() => {
                      return n;
                    })
                  );
                })().then(e => {
                  const t = {};
                  e.forEach(e => {
                    const n = e.sessionId;
                    t[n] || ((t[n] = !0), _.markUnreadByMsgsPromise(n));
                  });
                })),
                i.then(() => {
                  R &&
                    !_.hasSynced &&
                    ((_.hasSynced = !0),
                    (function() {
                      F.syncRelations &&
                        ((t = E.getRelations().then(
                          e => {
                            (n = e[0]), (d = e[1]), (n.invalid = s), (d.invalid = p);
                          },
                          e => {
                            return (e._msg = 'on relations error'), e;
                          }
                        )),
                        j.push(t));
                      F.syncFriends &&
                        ((t = E.getFriends().then(
                          e => {
                            (f = e).invalid = g;
                          },
                          e => {
                            return (e._msg = 'on friends error'), e;
                          }
                        )),
                        j.push(t));
                      a(h) &&
                        ((t = E.getUser(_.account).then(
                          e => {
                            h = e;
                          },
                          e => {
                            return (e._msg = 'on myInfo error'), e;
                          }
                        )),
                        j.push(t));
                      F.syncFriendUsers &&
                        ((t = E.getFriends()
                          .then(e => {
                            return e.map(e => {
                              return e.account;
                            });
                          })
                          .then(e => {
                            return E.getUsers(e);
                          })
                          .then(
                            e => {
                              y = e;
                            },
                            e => {
                              return (e._msg = 'on users error'), e;
                            }
                          )),
                        j.push(t));
                      F.syncTeams &&
                        ((t = E.getTeams().then(
                          e => {
                            (v = e).invalid = b;
                          },
                          e => {
                            return (e._msg = 'on teams error'), e;
                          }
                        )),
                        j.push(t));
                      (t = E.getTeamMembersByAccount(_.account).then(e => {
                        _.mergeMyTeamMembers(e);
                      })),
                        j.push(t),
                        (t = E.getDonnop().then(e => {
                          _.mergeDonnop(e);
                        })),
                        j.push(t),
                        (t = E.getSessions().then(
                          e => {
                            M = e;
                          },
                          e => {
                            return (e._msg = 'on sessions error'), e;
                          }
                        )),
                        j.push(t),
                        (t = E.getSysMsgUnread().then(
                          e => {
                            A = e;
                          },
                          e => {
                            return (e._msg = 'on sysMsgUnread error'), e;
                          }
                        )),
                        j.push(t);
                    })());
                  const e = j.filter(e => {
                    return e.cmd === 'sessionAck';
                  });
                  e.length === 0 && e.push(Promise.resolve());
                  const r = j.filter(e => {
                    return e.cmd !== 'sessionAck';
                  });
                  r.length === 0 && r.push(Promise.resolve()),
                    Promise.all(r)
                      .then(() => {
                        return Promise.all(e);
                      })
                      .then(B)
                      .then(q, e => {
                        (e.callFunc = 'sync::onSyncDone'),
                          (e.message = 'taskAfterSync syncSessionAckPromise 出错'),
                          _.onCustomError('SYNC_SESSION_ACK_ERROR', e);
                      });
                });
            } else _.logger.warn('sync::onSyncDone: after sync --no promiseArray');
          }
          function B() {
            _.logger.info('sync::onSyncDone: taskAfterSync'),
              (function() {
                if (U.deleteMsgSysMsgs) {
                  const e = {};
                  k &&
                    k.forEach(t => {
                      e[t.sessionId] = t;
                    });
                  const t = {};
                  S &&
                    S.forEach(e => {
                      t[e.sessionId] = e;
                    });
                  const n = _.api;
                  U.deleteMsgSysMsgs.forEach(r => {
                    r.sysMsgs.forEach(r => {
                      const s = r.msg;

                      const o = s.sessionId;
                      [e, t].forEach(e => {
                        e[o] && (e[o].msgs = n.cutMsgs(e[o].msgs, s));
                      });
                    });
                  }),
                    E.enable ||
                      [k, S].forEach(e => {
                        e &&
                          e.forEach(e => {
                            if (e.msgs.length) {
                              const t = _.genSessionByMsgs(e.msgs);
                              _.cacheSyncedSession(t), (M = n.mergeSessions(M, t));
                            } else M = n.cutSessions(M, { id: e.sessionId });
                          });
                      });
                }
              })();
            const e = [];
            return e.push(_.deleteMsgOfflineRoaming(U.deleteMsgSysMsgs, M)), Promise.all(e);
          }
          function q() {
            setTimeout(H, 0);
          }
          function H() {
            let e;

            let t;

            const r = [];
            n && (_.logger.info('sync::notifyDataAsync: on blacklist', u(n), n), F.onblacklist(n)),
              d && (_.logger.info('sync::notifyDataAsync: on mutelist', u(d), d), F.onmutelist(d)),
              f && (_.logger.info('sync::notifyDataAsync: on friends', u(f), f), F.onfriends(f)),
              h &&
                (_.logger.info('sync::notifyDataAsync: on myInfo', h),
                (_.myInfo = h),
                F.onmyinfo(o.copy(h))),
              y &&
                (y.forEach(e => {
                  _.mergeUser(e);
                }),
                _.logger.info('sync::notifyDataAsync: on users', u(y), y),
                F.onusers(y)),
              v && (_.logger.info('sync::notifyDataAsync: on teams', l(v), v), F.onteams(v)),
              T &&
                ((!_.hasSynced && M && M.length) || _.hasSynced) &&
                (M = _.mergeSessionAndMsgReceipts(M, T)),
              M &&
                M.length &&
                (M.forEach(e => {
                  _.syncResult.sessions &&
                    _.syncResult.sessions[e.id] &&
                    typeof _.syncResult.sessions[e.id].unread === 'number' &&
                    (e.unread = _.syncResult.sessions[e.id].unread),
                    _.mergeSession(e),
                    m.trim(e);
                }),
                _.logger.info('sync::notifyDataAsync: on sessions', c(M), M),
                F.onsessions(M)),
              k &&
                k.forEach(e => {
                  r.push(e.timetag),
                    (t = e.msgs).length &&
                      (_.logger.info(
                        'sync::notifyDataAsync: on roaming msgs',
                        e.sessionId,
                        t.length,
                        t
                      ),
                      F.onroamingmsgs(e));
                }),
              S &&
                S.forEach(e => {
                  r.push(e.timetag),
                    (t = e.msgs).length &&
                      (_.logger.info(
                        'sync::notifyDataAsync: on offline msgs',
                        e.sessionId,
                        t.length,
                        t
                      ),
                      F.onofflinemsgs(e));
                }),
              C &&
                C.forEach(e => {
                  r.push(e.timetag),
                    (t = e.msgs).length &&
                      (_.logger.info(
                        'sync::notifyDataAsync: on offline filter msgs',
                        e.sessionId,
                        t.length,
                        t
                      ),
                      F.onofflinefiltermsgs(t));
                });
            let s = [];

            let i = [];
            U.deleteMsgSysMsgs &&
              U.deleteMsgSysMsgs.forEach(e => {
                e.type === 'roaming' ? (s = s.concat(e.sysMsgs)) : (i = i.concat(e.sysMsgs));
              }),
              s.length && (P = (P = P || []).concat(s)),
              i.length && (I = (I = I || []).concat(i)),
              P &&
                (_.logger.info('sync::notifyDataAsync: on roaming sys msgs', P.length, P),
                F.onroamingsysmsgs(P)),
              I &&
                (_.logger.info('sync::notifyDataAsync: on offline sys msgs', I.length, I),
                F.onofflinesysmsgs(I)),
              w &&
                (_.logger.info('sync::notifyDataAsync: on offline filter sys msgs', w.length, w),
                F.onofflinefiltersysmsgs(w)),
              O &&
                (_.logger.info('sync::notifyDataAsync: on offline custom sys msgs', O.length, O),
                F.onofflinecustomsysmsgs(O)),
              x &&
                (_.logger.info(
                  'sync::notifyDataAsync: on offline filter custom sys msgs',
                  x.length,
                  x
                ),
                F.onofflinefiltercustomsysmsgs(x)),
              A &&
                ((A = o.merge({}, _.sysMsgUnread, A)),
                (_.sysMsgUnread = o.merge({}, A)),
                _.logger.info('sync::notifyDataAsync: on sysMsgUnread', A),
                F.onsysmsgunread(A));
            const a = _.getPushNotificationMultiportConfig();
            _.logger.info('sync::notifyDataAsync: on pushNotificationMultiportConfig', a),
              F.onPushNotificationMultiportConfig(a),
              r.length ? ((e = Math.max(...r)), _.updateRoamingMsgTimetag(e).then(W, W)) : W(),
              (_.syncPromiseArray = null),
              (_.syncResult = null);
          }
          function W() {
            if (
              (_.processUnsettledMsgs(),
              _.processUnsettledSysMsgs(),
              (_.syncing = !1),
              F.onsyncdone(),
              F.syncTeamMembers && v && v.length)
            )
              throw new i('sync team members api deprecated!');
          }
        }),
        (s.syncTeamMembers = function(e) {
          const t = this;
          !(function(n) {
            const r = {};
            (n = n || {}),
              e.forEach(e => {
                r[e.teamId] = 0;
              }, t),
              t.sendCmd('syncTeamMembers', { sync: r }, t.onSyncTeamMembers.bind(t));
          })(t.timetags);
        }),
        (s.onSyncTeamMembers = function(e, t) {
          (e.callFunc = 'sync::onSyncTeamMembers'),
            (e.message = '同步群成员错误'),
            this.onCustomError('SYNC_TEAM_MEMBERS_ERROR', e);
        }),
        (s.onSyncTeamMembersDone = function() {
          let e;

          const t = this;

          const n = t.db;

          const r = t.options;

          const s = t.syncTeamMembersResult;

          let i = t.syncTeamMembersPromiseArray;
          function a() {
            t.logger.log('sync::onSyncTeamMembersDone: afterSync', o.promises2cmds(i)),
              (i = []),
              n.enable && !t.hasSyncedTeamMembers
                ? ((t.hasSyncedTeamMembers = !0),
                  (function() {
                    if (!r.syncTeams || !r.syncTeamMembers) return m();
                    n.getTeams().then(
                      n => {
                        n.forEach(n => {
                          const r = n.teamId;
                          (e = new Promise((e, n) => {
                            t.api.getTeamMembers({
                              teamId: r,
                              done(t, o) {
                                t &&
                                  n({
                                    callFunc: `sync::getTeamMembers: teamId-${r}`,
                                    message: 'sync team members error',
                                  }),
                                  (s[r] = o.members || []),
                                  e();
                              },
                            });
                          })),
                            i.push(e);
                        }),
                          i.length
                            ? Promise.all(i).then(c, e => {
                                (e.callFunc = 'sync::onSyncTeamMembersDone'),
                                  (e.message = 'pullFullData promiseArray notifyData 错误'),
                                  t.onCustomError('SYNC_TEAM_MEMBERS_ERROR', e);
                              })
                            : c();
                      },
                      e => {
                        (e.callFunc = 'sync::onSyncTeamMembersDone'),
                          (e.message = 'pullFullData getTeams 错误'),
                          t.onCustomError('SYNC_TEAM_MEMBERS_ERROR', e);
                      }
                    );
                  })())
                : c();
          }
          function c() {
            setTimeout(l, 0);
          }
          function l() {
            let e;
            let n;
            Object.keys(s).forEach(o => {
              o.indexOf('invalid') === -1 &&
                ((e = s[o]),
                (n = s[`${o}-invalid`] || []),
                (e.invalid = n),
                (function(e, n) {
                  t.logger.info('sync::onSyncTeamMembersDone: onTeamMembers', e, u(n), n),
                    r.onteammembers({ teamId: e, members: n });
                })(o, e));
            }),
              m();
          }
          function m() {
            t.logger.info('sync::onSyncTeamMembersDone: bingo'),
              r.onsyncteammembersdone(),
              (t.syncTeamMembersResult = null),
              (t.syncTeamMembersPromiseArray = null);
          }
          i.length
            ? Promise.all(i)
                .then(a, e => {
                  (e.callFunc = 'sync::onSyncTeamMembersDone'),
                    (e.message = '同步群成员 syncTeamMembersPromiseArray 错误'),
                    t.onCustomError('SYNC_TEAM_MEMBERS_ERROR', e);
                })
                .catch(e => {
                  t.logger.log(
                    'sync::onSyncTeamMembersDone: syncTeamMembersPromiseArray promise ',
                    e
                  ),
                    a();
                })
            : a();
        });
    },
    function(e, t, n) {
      const r = n(17).fn;

      const s = n(105);
      (r.assembleLogin = function() {
        const e = this.assembleIMLogin();
        return this.addPushInfo ? this.addPushInfo(e) : Promise.resolve({ login: e });
      }),
        (r.afterLogin = function() {
          this.initPush && this.initPush();
          const e = this;

          const t = e.db;
          if (t.enable) {
            let n = e.account;
            e.options.appendAppKeyForDBName && (n += `-${e.options.appKey}`),
              e.db.init(n).then(
                () => {
                  e.syncData();
                },
                n => {
                  e.logger.warn('link::afterLogin: no db', n), t.reset(!1), e.syncData();
                }
              );
          } else e.logger.info('link::afterLogin: no db'), e.syncData();
        }),
        (r.processAuth = function(e) {
          switch (e.cmd) {
            case 'login':
              e.error ||
                ((e.content = e.content || {}),
                this.loginAndroidPush && this.loginAndroidPush(e.content.aosPushInfo || {}),
                (e.obj = e.content.loginRes),
                (this.connectionId = e.content.loginRes.connectionId),
                this.onLoginPortsChange(e, 2));
              break;
            case 'kicked':
              return void this.onKicked(e);
            case 'multiPortLogin':
              this.onLoginPortsChange(e, e.content.state);
              break;
            case 'kick':
              e.error || (e.obj.deviceIds = e.content.deviceIds);
          }
        }),
        (r.onLoginPortsChange = function(e, t) {
          const n = this;

          let r = e.content.loginPorts;
          if (r && r.length) {
            let o = !0;
            switch (t) {
              case 2:
                o = !0;
                break;
              case 3:
                o = !1;
            }
            r.forEach(e => {
              (e.type = s.reverseType(e.type)), (e.time = +e.time), (e.online = o);
            }),
              (r = r.filter(e => {
                return e.connectionId !== n.connectionId;
              })).length &&
                (n.logger.info('link::onLoginPortsChange:', r), n.options.onloginportschange(r));
          }
        }),
        (r.kickedReasons = [
          '',
          'samePlatformKick',
          'serverKick',
          'otherPlatformKick',
          'silentlyKick',
        ]),
        (r.kickedMessages = [
          '',
          '不允许同一个帐号在多个地方同时登录',
          '被服务器踢了',
          '被其它端踢了',
          '悄悄被踢',
        ]);
    },
    function(e, t, n) {
      const r = n(17).fn;

      const s = n(4);

      const o = n(0);

      const i = n(59);
      r.refreshSocketUrl = function() {
        const e = this;

        const t = e.options;

        const n = s.info;

        let r = t.lbsUrl;
        function a(t) {
          (e.socketUrls = []),
            (t = s.isWeixinApp ? t.data : JSON.parse(t)).common.link.forEach(t => {
              e.socketUrls.push(s.formatSocketUrl({ url: t, secure: e.options.secure }));
            }),
            t.common['link.default'].forEach(t => {
              (t = s.formatSocketUrl({ url: t, secure: e.options.secure })),
                e.socketUrls.indexOf(t) === -1 && e.socketUrls.push(t);
            });
          try {
            s.uploadUrl = t.nosup[0];
          } catch (e) {}
          e.logger.info('link::refreshSocketUrl: ajax load, got socket urls ', e.socketUrls),
            e.connectToUrl(e.getNextSocketUrl());
        }
        function c(t) {
          e.logger.error('link::refreshSocketUrl: ajax lbs error', t),
            e.api.reportLogs({ event: 'nimlb', code: 3001 }),
            e.onDisconnect(!1, 'link::refreshSocketUrl');
        }
        (r = `${r + o.genUrlSep(r)}k=${t.appKey}&id=${t.account}&sv=${n.sdkVersion}&pv=${
          n.protocolVersion
        }`),
          e.logger.info(`link::refreshSocketUrl: ajax ${r}`),
          s.isWeixinApp
            ? ((r = r.replace(/:\d+/, '')), wx.request({ url: r, success: a, fail: c }))
            : i(r, {
                proxyUrl: `${o.url2origin(r)}/lbs/res/cors/nej_proxy_frame.html`,
                timeout: s.xhrTimeout,
                onload: a,
                onerror: c,
              });
      };
    },
    function(e, t, n) {
      const r = n(47).fn;

      const s = n(0);

      const o = s.notundef;
      (r.putSession = function(e) {
        return (
          void 0 === (e = s.merge({}, e)).updateTime &&
            (e.lastMsg && e.lastMsg.time ? (e.updateTime = e.lastMsg.time) : (e.updateTime = 0)),
          delete e.unread,
          this.modifyOrPut({ table: 'session', obj: e, key: 'id', modifyObjWhenPut: { unread: 0 } })
        );
      }),
        (r.getSessions = function(e) {
          let t;

          const n = !(e = e || {}).reverse;

          const r = e.limit || 100;

          const s = e.lastSessionId;

          const i = e.sessionId;

          let a = !1;
          if (o(s))
            t = function(e) {
              return !!a || (e.id === s && (a = !0), !1);
            };
          else if (o(i)) return this.get('session', i);
          return this.getAll('session', { index: 'updateTime', desc: n, limit: r, filter: t });
        }),
        (r.getSession = function(e) {
          return this.get('session', e);
        }),
        (r.updateSession = function(e) {
          const t = this;

          const n = e.id;

          const r = s.filterObj(
            e,
            'ack unread lastMsg localCustom msgReceiptTime msgReceiptServerTime'
          );
          return (
            Object.keys(e).forEach(t => {
              t.indexOf('last') === 0 && (r[t] = e[t]);
            }),
            this.getOne('session', null, n, { modifyObj: r }).then(e => {
              return (
                e
                  ? t.logger.log(`db::updateSession: ${n}`, r)
                  : t.logger.warn(`db::updateSession: no record ${n}`),
                e
              );
            })
          );
        }),
        (r.resetSessionUnread = function(e) {
          return this.updateSession({ id: e, unread: 0 });
        }),
        (r.deleteSession = function(e) {
          return this.remove('session', e);
        });
    },
    function(e, t, n) {
      const r = n(47).fn;

      const s = n(0);
      s.notundef;
      (r.putBroadcastMsg = function(e) {
        const t = this;
        return new Promise(n => {
          s.isArray(e) || (e = [e]);
          const r = [];

          let o = e.length;
          function i() {
            --o === 0 && n(r);
          }
          e.forEach(e => {
            (e = s.copy(e)),
              t.put('broadcastMsg', e).then(e => {
                r.push(e[0]), i();
              }, i);
          });
        });
      }),
        (r.getBroadcastMsgs = function(e) {
          return (e = e || {}), this.getAll('broadcastMsg', e);
        });
    },
    function(e, t, n) {
      const r = n(47).fn;

      const s = n(0);

      const o = s.notundef;
      (r.putSysMsg = function(e) {
        const t = this;
        return new Promise(n => {
          if ((s.isArray(e) || (e = [e]), !e[0].filter)) {
            var r = [];

            var o = e.length;
            e.forEach(e => {
              (e = s.copy(e)),
                t.put('sysMsg', e).then(e => {
                  r.push(e[0]), i();
                }, i);
            });
          }
          function i() {
            --o === 0 && n(r);
          }
        });
      }),
        (r.getSysMsgs = function(e) {
          const t = !(e = e || {}).reverse;

          const n = e.limit || 100;

          let r = null;

          let s = null;
          e.category && ((r = 'category'), (s = e.category)),
            e.type && ((r = 'type'), (s = e.type));
          let i;

          let a = e.lastIdServer;

          let c = !1;

          const u = e.read;
          return (
            (o(a) || o(u)) &&
              (i = function(e) {
                return o(a) ? ((a = `${a}`), c ? t() : (e.idServer === a && (c = !0), !1)) : t();
                function t() {
                  return !o(u) || e.read === u;
                }
              }),
            (e = { filter: i, desc: t, limit: n }),
            r ? this.getOnly('sysMsg', r, s, e) : this.getAll('sysMsg', e)
          );
        }),
        (r.getSysMsgByIdServer = function(e) {
          return this.getOne('sysMsg', 'idServer', e);
        }),
        (r.updateSysMsg = function(e) {
          const t = this;
          if (!e.filter) {
            const n = `${e.idServer}`;

            const r = s.filterObj(e, 'read state error localCustom');
            return this.getOne('sysMsg', 'idServer', n, { modifyObj: r }).then(e => {
              return (
                e
                  ? t.logger.log(`db::updateSysMsg: ${n}`, r)
                  : t.logger.warn(`db::updateSession: ${n}`),
                e
              );
            });
          }
        }),
        (r.markSysMsgRead = function(e) {
          const t = this;
          return new Promise((n, r) => {
            s.isArray(e) || (e = [e]);
            let o;

            let i;

            const a = [];

            const c = [];
            e.forEach(e => {
              (o = t.getSysMsgByIdServer(e.idServer).then(e => {
                e &&
                  !e.read &&
                  ((i = t.updateSysMsg({ idServer: e.idServer, read: !0 })), c.push(i));
              }, r)),
                a.push(o);
            }),
              Promise.all(a).then(() => {
                Promise.all(c).then(e => {
                  n(e);
                }, r);
              }, r);
          });
        }),
        (r.deleteSysMsg = function(e) {
          let t;

          const n = this;

          const r = [];
          return (
            s.isArray(e) || (e = [e]),
            e.forEach(e => {
              (e = `${e}`), (t = n.getOne('sysMsg', 'idServer', e, { remove: !0 })), r.push(t);
            }),
            r.length === 1 ? r[0] : Promise.all(r)
          );
        }),
        (r.deleteAllSysMsgs = function() {
          const e = this.clearTable('sysMsg');

          const t = this.clearTable('sysMsgUnread');
          return Promise.all([e, t]);
        }),
        (r.getSysMsgUnread = function() {
          return this.getAll('sysMsgUnread').then(e => {
            const t = {};
            return (
              e.forEach(e => {
                t[e.type] = e.num;
              }),
              t
            );
          });
        }),
        (r.updateSysMsgUnread = function(e) {
          const t = this;
          e = s.copy(e);
          const n = [];
          return (
            Object.keys(e).forEach(t => {
              n.push({ type: t, num: e[t] });
            }),
            this.put('sysMsgUnread', n).then(() => {
              return t.logger.log('db::updateSysMsgUnread: ', e), e;
            })
          );
        });
    },
    function(e, t, n) {
      const r = n(47).fn;

      const s = n(0);

      const o = n(4);
      (r.putMsg = function(e) {
        return (
          s.isArray(e) || (e = [e]),
          !e.length || e[0].filter
            ? Promise.resolve()
            : ((e = e.filter(e => {
                return !e.ignore;
              })),
              this.put('msg1', e))
        );
      }),
        (r.updateMsg = function(e) {
          const t = this;
          if (!e.filter) {
            const n = e.idClient;

            const r = s.filterObj(e, 'resend status idServer time localCustom');
            return t.getOne('msg1', null, n, { modifyObj: r }).then(e => {
              return (
                e
                  ? t.logger.log(`db::updateMsg: ${n}`, r)
                  : t.logger.warn(`db::updateMsg: no record ${n}`),
                e
              );
            });
          }
        }),
        (r.getMsgs = function(e) {
          return o.isBrowser
            ? this.getMsgsIndexedDB(e)
            : o.isRN
              ? this.getMsgsRN(e)
              : Promise.resolve();
        }),
        (r.getMsgsRN = function(e) {
          const t = {};
          return (
            typeof e.start === 'number' && (t.lowerBound = ['time', e.start]),
            typeof e.end === 'number' && e.end !== 1 / 0 && (t.upperBound = ['time', e.end]),
            (t.desc = !1),
            (t.sortIndex = 'time'),
            typeof e.desc === 'boolean' && (t.desc = e.desc),
            typeof e.limit === 'number' && (t.limit = e.limit),
            (t.searchIndex = []),
            e.sessionId && t.searchIndex.push(['sessionId', e.sessionId]),
            typeof e.type === 'string' && t.searchIndex.push(['type', e.type]),
            this.getAll('msg1', t)
          );
        }),
        (r.getMsgsIndexedDB = function(e) {
          this.checkDB();
          let t = 'time';

          let n = !1;

          let r = !1;

          let o = (e = e || {}).sessionId;

          const i = e.sessionIds;
          s.exist(o)
            ? ((n = !0), (t = 'sessionTime'))
            : s.exist(i) &&
              ((n = !0),
              s.isString(i)
                ? ((t = 'sessionTime'), (o = i))
                : Array.isArray(i) &&
                  (i.length === 1 ? ((t = 'sessionTime'), (o = i[0])) : (r = !0)));
          const a = e.start || 0;

          const c = e.end || 1 / 0;

          let u = a;

          let l = c;
          n && !r && ((u = [o, a]), (l = [o, c]));
          const m = !1 !== e.desc;

          const d = e.limit || 100;

          let p = !1;

          let f = !1;

          let g = e.type;

          const h = e.types;
          s.exist(g)
            ? (p = !0)
            : s.exist(h) &&
              ((p = !0),
              s.isString(h)
                ? (g = h)
                : Array.isArray(h) && (h.length === 1 ? (g = h[0]) : (f = !0)));
          const y = e.keyword || '';

          const v = e.filterFunc;

          let b = void 0;
          return (
            (r || p || y || s.isFunction(v)) &&
              (b = function(e) {
                if (r && i.indexOf(e.sessionId) === -1) return !1;
                if (p)
                  if (f) {
                    if (h.indexOf(e.type) === -1) return !1;
                  } else if (g !== e.type) return !1;
                if (y && (e.text || e.tip || '').indexOf(y) === -1) return !1;
                return !v || v(e);
              }),
            this.server
              .query('msg1', t)
              .bound(u, l, !0, !0)
              .desc(m)
              .limit(d)
              .filter(b)
              .execute()
          );
        }),
        (r.getMsgCountAfterAck = function(e) {
          return o.isBrowser
            ? this.getMsgCountAfterAckIndexedDB(e)
            : o.isRN
              ? this.getMsgCountAfterAckRN(e)
              : Promise.resolve();
        }),
        (r.getMsgCountAfterAckRN = function(e) {
          const t = (e = e || {});

          const n = t.sessionId;

          const r = t.ack;
          return (
            this.checkDB(),
            this.getAll('msg1', { searchIndex: ['sessionId', n], lowerBound: ['time', r] }).then(
              t => {
                const n = t.filter(t => {
                  return (
                    t.flow !== 'out' &&
                    (t.type !== 'notification' || !!e.shouldCountNotifyUnread(t))
                  );
                });
                return Promise.resolve(n.length);
              }
            )
          );
        }),
        (r.getMsgCountAfterAckIndexedDB = function(e) {
          const t = (e = e || {}).sessionId;
          return (
            this.checkDB(),
            this.server
              .query('msg1', 'sessionTime')
              .bound([t, e.ack], [t, 1 / 0], !0, !0)
              .execute()
              .then(t => {
                const n = t.filter(t => {
                  return (
                    t.flow !== 'out' &&
                    (t.type !== 'notification' || !!e.shouldCountNotifyUnread(t))
                  );
                });
                return Promise.resolve(n.length);
              })
          );
        }),
        (r.amendMsg = function(e) {
          return e ? (s.notexist(e.text) && (e.text = ''), e) : null;
        }),
        (r.getMsgByIdClient = function(e) {
          const t = this;
          return t.getOne('msg1', null, e).then(e => {
            return t.amendMsg(e);
          });
        }),
        (r.getMsgsByIdClients = function(e) {
          let t;

          const n = this;

          const r = [];
          return (
            e.forEach(e => {
              (t = n.getMsgByIdClient(e)), r.push(t);
            }),
            Promise.all(r)
          );
        }),
        (r.clearSendingMsgs = function() {
          const e = this;
          return e
            .getOnly('msg1', 'status', 'sending', { modifyObj: { status: 'fail' } })
            .then(t => {
              e.logger.log('db::clearSendingMsgs: msgs send failed', t);
            });
        }),
        (r.deleteMsg = function(e) {
          let t;

          const n = this;

          const r = [];
          return (
            s.isArray(e) || (e = [e]),
            e.forEach(e => {
              (t = n.getOne('msg1', null, e, { remove: !0 }).then(e => {
                return n.logger.log('db::deleteMsg:', e), e;
              })),
                r.push(t);
            }),
            r.length === 1 ? r[0] : Promise.all(r)
          );
        }),
        (r.deleteMsgsBySessionId = function(e) {
          return this.getOnly('msg1', 'sessionId', e, { remove: !0 });
        }),
        (r.deleteAllMsgs = function() {
          const e = this.clearTable('msg1');

          const t = this.clearTable('session');
          return Promise.all([e, t]);
        });
    },
    function(e, t, n) {
      const r = n(47).fn;

      const s = n(0);
      (r.mergeMyInfo = function(e, t) {
        const n = this;
        return n.put('user', e).then(() => {
          return t ? n.updateMyInfoTimetag(e.updateTime) : e;
        });
      }),
        (r.mergeFriendUsers = function(e, t) {
          const n = this;
          return n.putUsers(e).then(() => {
            n.updateFriendUserTimetag(t);
          });
        }),
        (r.putUsers = function(e) {
          return this.put('user', e);
        }),
        (r.putUser = function(e) {
          return this.put('user', e);
        }),
        (r.updateUser = function(e) {
          const t = this;

          const n = (e = s.copy(e)).account;
          return this.getOne('user', null, n, { modifyObj: e }).then(r => {
            return (
              r
                ? t.logger.log(`db::updateUser: ${n}`, e)
                : t.logger.warn(`db::updateUser: no record ${n}`),
              r
            );
          });
        }),
        (r.putUsersIfIsFriend = function(e) {
          let t;

          const n = this;

          const r = [];

          const s = [];
          return (
            e.forEach(e => {
              (t = n.getFriend(e.account).then(r => {
                return r && ((t = n.putUser(e)), s.push(t)), r;
              })),
                r.push(t);
            }),
            Promise.all(r).then(() => {
              return Promise.all(s).then(e => {
                return e;
              });
            })
          );
        }),
        (r.deleteUser = function(e) {
          return this.remove('user', e);
        }),
        (r.getUser = function(e) {
          return this.getOne('user', null, e);
        }),
        (r.getUsers = function(e) {
          return this.getAll('user', {
            filter(t) {
              return e.indexOf(t.account) !== -1;
            },
          });
        }),
        (r.getAllUsers = function() {
          return this.getAll('user');
        });
    },
    function(e, t, n) {
      const r = n(47).fn;

      const s = n(0);

      const o = n(23);

      const i = n(106);

      const a = n(79);
      function c(e) {
        return e.valid && e.validToCurrentUser;
      }
      function u(e) {
        return e && e.valid;
      }
      function l(e) {
        return e && s.fillUndef(e, { mute: !1, custom: '' }), e;
      }
      (r.mergeTeams = function(e, t, n) {
        const r = this;

        const s = r.put('team', e);

        const o = r.leaveTeams(t, n);
        return Promise.all([s, o]).then(() => {
          return r.logger.log('db::mergeTeams:'), r.updateTeamTimetag(n), [e, t, n];
        });
      }),
        (r.putTeam = function(e) {
          if (e)
            return (
              s.isArray(e) || (e = [e]),
              e.forEach(e => {
                e.validToCurrentUser = !0;
              }),
              this.put('team', e)
            );
        }),
        (r.updateTeam = function(e) {
          const t = this;

          const n = (e = s.copy(e)).teamId;
          return t.getOne('team', null, n, { modifyObj: e }).then(r => {
            return r
              ? (t.logger.log(`db::updateTeam: ${n}`, e), r)
              : (t.logger.warn(`db::updateTeam: no record ${n}`), t.putTeam(e));
          });
        }),
        (r.transferTeam = function(e, t, n) {
          const r = this;

          const s = e.teamId;

          const o = e.memberUpdateTime;

          const i = { teamId: s, account: t, type: 'normal', updateTime: o };

          const a = { teamId: s, account: n, type: 'owner', updateTime: o };
          return r.updateTeamMembers([i, a]).then(() => {
            return r.putTeam(e).then(() => {
              return r.logger.log(`db::transferTeam: ${e.teamId} ${t} -> ${n}`), [e, t, n];
            });
          });
        }),
        (r.leaveTeam = function(e) {
          const t = this;
          return t.updateTeam({ teamId: e, validToCurrentUser: !1 }).then(() => {
            return t.removeAllTeamMembers(e);
          });
        }),
        (r.dismissTeam = function(e, t) {
          const n = this;

          const r = { teamId: e, valid: !1, validToCurrentUser: !1, updateTime: t };
          return n.updateTeam(r).then(() => {
            return n.removeAllTeamMembers(e);
          });
        }),
        (r.leaveTeams = function(e, t) {
          let n;

          const r = this;

          const s = [];
          return (
            e.forEach(e => {
              (n = r.leaveTeam(e.teamId, t)), s.push(n);
            }),
            Promise.all(s)
          );
        }),
        (r.getTeamsByTeamIds = function(e) {
          let t;

          const n = this;

          const r = [];
          return (
            e.forEach(e => {
              (t = n.getTeam(e)), r.push(t);
            }),
            Promise.all(r)
          );
        }),
        (r.getTeam = function(e) {
          e = `${e}`;
          const t = this;
          return t.getOne('team', null, e).then(e => {
            return e ? (t.updateTeamProperties([e]), e) : null;
          });
        }),
        (r.getTeams = function() {
          const e = this;
          return e.getAll('team', { filter: c }).then(t => {
            return e.updateTeamProperties(t), t;
          });
        }),
        (r.updateTeamProperties = function(e) {
          e.forEach(e => {
            e && i.fillProperties(e);
          });
        }),
        (r.mergeTeamMembers = function(e, t, n, r) {
          const s = this;

          const o = s.putTeamMembers(t);

          const i = s.updateTeamMembers(n);
          return Promise.all([o, i]).then(() => {
            return s.logger.log(`db::mergeTeamMembers: ${e}`), s.updateTeamMemberTimetag(e, r);
          });
        }),
        (r.putTeamMembers = function(e) {
          return this.put('teamMember', e);
        }),
        (r.getTeamMembersByAccount = function(e) {
          return this.getOnly('teamMember', 'account', e, { filter: u, mapper: l }).then();
        }),
        (r.getTeamMembers = function(e) {
          const t = this;
          e = `${e}`;
          return t
            .getOnly('teamMember', 'teamId', e, {
              filter(e) {
                return e.valid;
              },
              mapper: l,
            })
            .then(e => {
              return t.updateTeamMemberProperties(e).then(() => {
                return e;
              });
            });
        }),
        (r.updateTeamMemberProperties = function(e) {
          let t;

          const n = this;

          const r = [];
          return (
            e.forEach(e => {
              a.fillProperties(e) && ((t = n.updateTeamMember(e)), r.push(t));
            }),
            Promise.all(r)
          );
        }),
        (r.getInvalidTeamMembers = function(e, t) {
          const n = this;
          e = `${e}`;
          let r;

          const s = [];
          return (
            t.forEach(t => {
              (r = n.getOne('teamMember', null, a.genId(e, t)).then(e => {
                return l(e);
              })),
                s.push(r);
            }),
            Promise.all(s)
          );
        }),
        (r.updateTeamMember = function(e) {
          const t = this;

          const n = e.teamId;

          const r = e.account;

          const o = a.genId(n, r);

          const i = s.filterObj(e, 'nickInTeam muteTeam mute custom updateTime type valid');
          return this.getOne('teamMember', null, o, { modifyObj: i, mapper: l }).then(e => {
            return (
              e
                ? t.logger.log(`db::updateTeamMember: ${n} ${r}`, i)
                : t.logger.warn(`db::updateTeam: no record ${n} ${r}`),
              e
            );
          });
        }),
        (r.updateTeamMembers = function(e) {
          const t = this;
          if (!e.length) return Promise.resolve();
          let n;

          const r = [];
          return (
            e.forEach(e => {
              (n = t.updateTeamMember(e)), r.push(n);
            }),
            Promise.all(r)
          );
        }),
        (r.updateTeamManagers = function(e, t, n, r) {
          const s = t.map(t => {
            return { teamId: e, account: t, type: n ? 'manager' : 'normal', updateTime: r };
          });
          return this.updateTeamMembers(s);
        }),
        (r.removeTeamMembersByAccounts = function(e, t) {
          const n = t.map(t => {
            return { teamId: e, account: t, valid: !1 };
          });
          return this.updateTeamMembers(n);
        }),
        (r.removeAllTeamMembers = function(e) {
          const t = this;
          return t.getOnly('teamMember', 'teamId', e, { modifyObj: { valid: !1 } }).then(() => {
            return t.logger.warn(`db::removeAllTeamMembers: ${e}`), t.deleteTeamMemberTimetag(e);
          });
        }),
        (r.deleteTeamMembers = function(e) {
          const t = this;
          return t.getOnly('teamMember', 'teamId', e, { remove: !0 }).then(() => {
            t.logger.warn(`db::deleteTeamMembers: ${e}`), t.deleteTeamMemberTimetag(e);
          });
        }),
        (r.deleteTeam = function(e) {
          let t;

          const n = this;

          const r = [];
          return (
            s.isArray(e) || (e = [e]),
            e.forEach(e => {
              (e = `${e}`),
                (t = n.get('team', e).then(t => {
                  if (t && c(t))
                    throw o.stillInTeamError({ callFunc: 'team::deleteTeam', team: t });
                  const r = n.remove('team', e);

                  const s = n.deleteTeamMembers(e);
                  return Promise.all([r, s]);
                })),
                r.push(t);
            }),
            r.length === 1 ? r[0] : Promise.all(r)
          );
        });
    },
    function(e, t, n) {
      const r = n(47).fn;

      const s = n(0);
      (r.mergeFriends = function(e, t, n) {
        const r = this;
        return r.updateAndDelete('friend', e, t).then(() => {
          return (
            r.logger.log('db::mergeFriends: updateAndDelete done', e),
            n && r.updateFriendTimetag(n),
            [e, t, n]
          );
        });
      }),
        (r.putFriend = function(e) {
          return this.put('friend', e);
        }),
        (r.updateFriend = function(e) {
          const t = this;

          const n = (e = s.copy(e)).account;
          return this.getOne('friend', null, n, { modifyObj: e }).then(r => {
            return (
              r
                ? t.logger.log(`db::updateFriend: ${n}`, e)
                : t.logger.warn(`db::updateFriend: no record ${n}`),
              r
            );
          });
        }),
        (r.deleteFriend = function(e) {
          const t = this.remove('friend', e);

          const n = this.deleteUser(e);
          return Promise.all([t, n]);
        }),
        (r.getFriends = function() {
          return this.getAll('friend', {
            filter(e) {
              return e.valid;
            },
          });
        }),
        (r.getFriend = function(e) {
          return this.getOne('friend', null, e);
        });
    },
    function(e, t, n) {
      const r = n(47).fn;

      const s = n(0);
      (r.mergeRelations = function(e, t, n, r, s) {
        const o = this;

        const i = o.updateAndDelete('blacklist', e, t);

        const a = o.updateAndDelete('mutelist', n, r);
        return Promise.all([i, a]).then(() => {
          return (
            o.logger.log(`db::mergeRelations: timetag ${s}`),
            o.updateRelationTimetag(s),
            [e, t, n, r, s]
          );
        });
      }),
        (r.getRelations = function() {
          const e = this.getAll('blacklist');

          const t = this.getAll('mutelist');
          return Promise.all([e, t]);
        }),
        (r.markInBlacklist = function(e) {
          if ((e = s.copy(e)).isAdd) {
            const t = e.record;
            return this.put('blacklist', t);
          }
          const n = e.account;
          return this.remove('blacklist', n);
        }),
        (r.markInMutelist = function(e) {
          if ((e = s.copy(e)).isAdd) {
            const t = e.record;
            return this.put('mutelist', t);
          }
          const n = e.account;
          return this.remove('mutelist', n);
        });
    },
    function(e, t, n) {
      const r = n(47).fn;
      (r.getTimetags = function(e) {
        const t = {};
        return this.getAll('timetag', {
          filter: e,
          mapper(e) {
            return e.name.indexOf('team-') !== -1 ? (t[e.name] = 0) : (t[e.name] = e.value), e;
          },
        }).then(() => {
          return t;
        });
      }),
        (r.getTeamMemberTimetags = function() {
          return this.getTimetags(e => {
            return e.name.indexOf('team-') !== -1;
          });
        }),
        (r.getTimetag = function(e) {
          return this.getOne('timetag', null, e).then(e => {
            return (e = e || { value: 0 }).value;
          });
        }),
        (r.getTeamMemberTimetag = function(e) {
          return 0;
        }),
        (r.updateTimetag = function(e, t) {
          const n = { name: e, value: t };
          return this.put('timetag', n);
        }),
        (r.updateMyInfoTimetag = function(e) {
          return this.updateTimetag('myInfo', e);
        }),
        (r.updateRelationTimetag = function(e) {
          return this.updateTimetag('relations', e);
        }),
        (r.getRelationsTimetag = function() {
          return this.getTimetag('relations');
        }),
        (r.updateFriendTimetag = function(e) {
          return this.updateTimetag('friends', e);
        }),
        (r.getFriendsTimetag = function() {
          return this.getTimetag('friends');
        }),
        (r.updateFriendUserTimetag = function(e) {
          return this.updateTimetag('friendUsers', e);
        }),
        (r.updateTeamTimetag = function(e) {
          return this.updateTimetag('teams', e);
        }),
        (r.getTeamsTimetag = function() {
          return this.getTimetag('teams');
        }),
        (r.updateTeamMemberTimetag = function(e, t) {
          return this.updateTimetag(`team-${e}`, t);
        }),
        (r.getTeamMembersTimetag = function(e) {
          return this.getTimetag(`team-${e}`);
        }),
        (r.updateMyTeamMembersTimetag = function(e) {
          return this.updateTimetag('myTeamMembers', e);
        }),
        (r.getBroadcastMsgTimetag = function(e) {
          return this.getTimetag('broadcastMsg');
        }),
        (r.updateBroadcastMsgTimetag = function(e) {
          return this.updateTimetag('broadcastMsg', parseInt(e));
        }),
        (r.updateRoamingMsgTimetag = function(e) {
          return this.updateTimetag('roamingMsgs', e);
        }),
        (r.updateMsgReceiptsTimetag = function(e) {
          return this.updateTimetag('msgReceipts', e);
        }),
        (r.updateDonnopTimetag = function(e) {
          return this.updateTimetag('donnop', e);
        }),
        (r.updateDeleteMsgTimetag = function(e) {
          return this.updateTimetag('deleteMsg', e);
        }),
        (r.updateSessionAck = function(e) {
          return this.updateTimetag('sessionAck', e);
        }),
        (r.deleteTimetag = function(e) {
          return this.remove('timetag', e);
        }),
        (r.deleteTeamMemberTimetag = function(e) {
          return this.deleteTimetag(`team-${e}`);
        });
    },
    function(e, t, n) {
      const r = n(47).fn;
      (r.setKey = function(e, t) {
        return this.put('kv', { key: e, value: t });
      }),
        (r.getKey = function(e) {
          return this.get('kv', e).then(e => {
            return e && e.value;
          });
        }),
        (r.setDonnop = function(e) {
          return this.setKey('donnop', e);
        }),
        (r.getDonnop = function() {
          return this.getKey('donnop');
        });
    },
    function(e, t, n) {
      const r = { version: 8 };

      const s = {
        kv: { key: { keyPath: 'key' } },
        timetag: { key: { keyPath: 'name' } },
        blacklist: { key: { keyPath: 'account' } },
        mutelist: { key: { keyPath: 'account' } },
        friend: { key: { keyPath: 'account' } },
        user: { key: { keyPath: 'account' } },
        team: { key: { keyPath: 'teamId' } },
        teamMember: {
          key: { keyPath: 'id' },
          indexes: { teamId: { unique: !1 }, account: { unique: !1 } },
        },
        msg: {
          key: { autoIncrement: !0 },
          indexes: {
            idClient: { unique: !0 },
            sessionId: { unique: !1 },
            time: { unique: !1 },
            type: { unique: !1 },
            sessionType: { unique: !1 },
            status: { unique: !1 },
            sessionTime: { key: ['sessionId', 'time'], unique: !1 },
          },
        },
        msg1: {
          key: { keyPath: 'idClient' },
          indexes: {
            sessionId: { unique: !1 },
            time: { unique: !1 },
            status: { unique: !1 },
            sessionTime: { key: ['sessionId', 'time'], unique: !1 },
          },
        },
        broadcastMsg: { key: { keyPath: 'broadcastId' }, indexes: { time: { unique: !1 } } },
        sysMsg: {
          key: { autoIncrement: !0 },
          indexes: { idServer: { unique: !0 }, category: { unique: !1 }, type: { unique: !1 } },
        },
        sysMsgUnread: { key: { keyPath: 'type' } },
        session: { key: { keyPath: 'id' }, indexes: { updateTime: { unique: !1 } } },
      };
      (r.keyPath = function(e) {
        return s[e].key.keyPath;
      }),
        (r.schema = function() {
          return (window._nimForceSyncIM = !0), s;
        }),
        (e.exports = r);
    },
    function(e, t, n) {
      (function(r) {
        let s;

        const o = (function(e) {
          return e && e.__esModule ? e : { default: e };
        })(n(5));
        !(function(i, a) {
          let c;

          const u =
            (i = void 0 !== i ? i : typeof self !== 'undefined' ? self : void 0 !== r ? r : {})
              .IDBKeyRange || i.webkitIDBKeyRange;

          const l = 'readonly';

          const m = 'readwrite';

          const d = Object.prototype.hasOwnProperty;

          const p = function() {
            if (
              !c &&
              !(c =
                i.indexedDB ||
                i.webkitIndexedDB ||
                i.mozIndexedDB ||
                i.oIndexedDB ||
                i.msIndexedDB ||
                (i.indexedDB === null && i.shimIndexedDB ? i.shimIndexedDB : void 0))
            )
              throw 'IndexedDB required';
            return c;
          };

          const f = function(e) {
            return e;
          };

          const g = function(e) {
            return Object.prototype.toString
              .call(e)
              .slice(8, -1)
              .toLowerCase();
          };

          const h = function(e) {
            return typeof e === 'function';
          };

          const y = function(e) {
            return void 0 === e;
          };

          const v = function(e, t) {
            const n = this;

            let r = !1;
            (this.name = t),
              (this.getIndexedDB = function() {
                return e;
              }),
              (this.add = function(t) {
                if (r) throw 'Database has been closed';
                for (var s = [], o = 0, i = 0; i < arguments.length - 1; i++)
                  if (Array.isArray(arguments[i + 1]))
                    for (let a = 0; a < arguments[i + 1].length; a++)
                      (s[o] = arguments[i + 1][a]), o++;
                  else (s[o] = arguments[i + 1]), o++;
                const c = e.transaction(t, m);

                const u = c.objectStore(t);
                return new Promise((e, t) => {
                  s.forEach(e => {
                    let t;
                    if (e.item && e.key) {
                      const n = e.key;
                      (e = e.item), (t = u.add(e, n));
                    } else t = u.add(e);
                    t.onsuccess = function(t) {
                      const n = t.target;

                      let r = n.source.keyPath;
                      r === null && (r = '__id__'),
                        Object.defineProperty(e, r, { value: n.result, enumerable: !0 });
                    };
                  }),
                    (c.oncomplete = function() {
                      e(s, n);
                    }),
                    (c.onerror = function(e) {
                      e.preventDefault(), t(e);
                    }),
                    (c.onabort = function(e) {
                      t(e);
                    });
                });
              }),
              (this.updateAndDelete = function(t, n, s) {
                if (r) throw 'Database has been closed';
                const o = e.transaction(t, m);

                const i = o.objectStore(t);

                const a = i.keyPath;
                return new Promise((e, t) => {
                  n.forEach(e => {
                    if (e.item && e.key) {
                      const t = e.key;
                      (e = e.item), i.put(e, t);
                    } else i.put(e);
                  }),
                    s.forEach(e => {
                      i.delete(e[a]);
                    }),
                    (o.oncomplete = function() {
                      e([n, s]);
                    }),
                    (o.onerror = function(e) {
                      t(e);
                    });
                });
              }),
              (this.update = function(t) {
                if (r) throw 'Database has been closed';
                for (var s, o = [], i = 1; i < arguments.length; i++)
                  (s = arguments[i]), Array.isArray(s) ? (o = o.concat(s)) : o.push(s);
                const a = e.transaction(t, m);

                const c = a.objectStore(t);
                c.keyPath;
                return new Promise((e, t) => {
                  o.forEach(e => {
                    let t;
                    if (e.item && e.key) {
                      const n = e.key;
                      (e = e.item), (t = c.put(e, n));
                    } else t = c.put(e);
                    (t.onsuccess = function(e) {}), (t.onerror = function(e) {});
                  }),
                    (a.oncomplete = function() {
                      e(o, n);
                    }),
                    (a.onerror = function(e) {
                      t(e);
                    }),
                    (a.onabort = function(e) {
                      t(e);
                    });
                });
              }),
              (this.remove = function(t, n) {
                if (r) throw 'Database has been closed';
                const s = e.transaction(t, m);

                const o = s.objectStore(t);
                return new Promise((e, t) => {
                  Array.isArray(n) || (n = [n]),
                    n.forEach(e => {
                      o.delete(e);
                    }),
                    (s.oncomplete = function() {
                      e(n);
                    }),
                    (s.onerror = function(e) {
                      t(e);
                    }),
                    (s.onabort = function(e) {
                      t(e);
                    });
                });
              }),
              (this.clear = function(t) {
                if (r) throw 'Database has been closed';
                const n = e.transaction(t, m);
                n.objectStore(t).clear();
                return new Promise((e, t) => {
                  (n.oncomplete = function() {
                    e();
                  }),
                    (n.onerror = function(e) {
                      t(e);
                    });
                });
              }),
              (this.close = function() {
                r || (e.close(), (r = !0), delete T[t]);
              }),
              (this.get = function(t, n) {
                if (r) throw 'Database has been closed';
                const s = e.transaction(t);

                const o = s.objectStore(t).get(n);
                return new Promise((e, t) => {
                  (o.onsuccess = function(t) {
                    e(t.target.result);
                  }),
                    (s.onerror = function(e) {
                      t(e);
                    });
                });
              }),
              (this.query = function(t, n) {
                if (r) throw 'Database has been closed';
                return new b(t, e, n);
              }),
              (this.count = function(t, n) {
                if (r) throw 'Database has been closed';
                e.transaction(t).objectStore(t);
              });
            for (let s = 0, o = e.objectStoreNames.length; s < o; s++)
              !(function(e) {
                for (const t in ((n[e] = {}), n))
                  d.call(n, t) &&
                    t !== 'close' &&
                    (n[e][t] = (function(t) {
                      return function() {
                        const r = [e].concat([].slice.call(arguments, 0));
                        return n[t](...r);
                      };
                    })(t));
              })(e.objectStoreNames[s]);
          };

          var b = function(e, t, n) {
            const r = this;

            let s = !1;

            let i = !1;

            const a = function(r, a, c, d, p, f, g) {
              return new Promise((y, v) => {
                const b = s || i ? m : l;

                const M = t.transaction(e, b);

                const T = M.objectStore(e);

                const k = n ? T.index(n) : T;

                let S = [];

                const C = [r ? u[r].apply(null, a) : null];

                let P = 0;
                (p = p || null), (f = f || []), c !== 'count' && C.push(d || 'next');
                const I = !!s && Object.keys(s);
                (k[c](...C).onsuccess = function(e) {
                  const t = e.target.result;
                  if ((void 0 === t ? 'undefined' : (0, o.default)(t)) === (0, o.default)(0)) S = t;
                  else if (t)
                    if (p !== null && p[0] > P) (P = p[0]), t.advance(p[0]);
                    else if (p !== null && P >= p[0] + p[1]);
                    else {
                      let n = !0;

                      let r = 'value' in t ? t.value : t.key;
                      f.forEach(e => {
                        e &&
                          e.length &&
                          (e.length === 2
                            ? (n = n && r[e[0]] === e[1])
                            : h(e[0]) && (n = n && e[0].apply(void 0, [r])));
                      }),
                        n &&
                          (P++,
                          S.push(g(r)),
                          i
                            ? t.delete()
                            : s &&
                              ((r = (function(e) {
                                for (let t = 0; t < I.length; t++) {
                                  const n = I[t];

                                  let r = s[n];
                                  r instanceof Function && (r = r(e)), (e[n] = r);
                                }
                                return e;
                              })(r)),
                              t.update(r))),
                        t.continue();
                    }
                }),
                  (M.oncomplete = function() {
                    y(S);
                  }),
                  (M.onerror = function(e) {
                    v(e);
                  }),
                  (M.onabort = function(e) {
                    v(e);
                  });
              });
            };

            const c = function(e, t) {
              let n = 'next';

              let r = 'openCursor';

              const o = [];

              let c = null;

              let u = f;

              let l = !1;

              const m = function() {
                return a(e, t, r, l ? `${n}unique` : n, c, o, u);
              };

              const d = function() {
                return (n = null), (r = 'count'), { execute: m };
              };

              const p = function e() {
                return (
                  (c = (function(e) {
                    return g(e) === 'array';
                  })(arguments[0])
                    ? arguments[0]
                    : Array.prototype.slice.call(arguments, 0, 2)).length == 1 && c.unshift(0),
                  (function(e) {
                    return g(e) === 'number';
                  })(c[1]) || (c = null),
                  {
                    execute: m,
                    count: d,
                    keys: v,
                    filter: b,
                    asc: M,
                    desc: T,
                    distinct: k,
                    modify: S,
                    limit: e,
                    map: C,
                    remove: P,
                  }
                );
              };

              var v = function e(t) {
                return (
                  (t = !!y(t) || !!t) && (r = 'openKeyCursor'),
                  {
                    execute: m,
                    keys: e,
                    filter: b,
                    asc: M,
                    desc: T,
                    distinct: k,
                    modify: S,
                    limit: p,
                    map: C,
                    remove: P,
                  }
                );
              };

              var b = function e() {
                return (
                  o.push(Array.prototype.slice.call(arguments, 0, 2)),
                  {
                    execute: m,
                    count: d,
                    keys: v,
                    filter: e,
                    asc: M,
                    desc: T,
                    distinct: k,
                    modify: S,
                    limit: p,
                    map: C,
                    remove: P,
                  }
                );
              };

              var M = function e(t) {
                return (
                  (t = !!y(t) || !!t),
                  (n = t ? 'next' : 'prev'),
                  {
                    execute: m,
                    count: d,
                    keys: v,
                    filter: b,
                    asc: e,
                    desc: T,
                    distinct: k,
                    modify: S,
                    limit: p,
                    map: C,
                    remove: P,
                  }
                );
              };

              var T = function e(t) {
                return (
                  (t = !!y(t) || !!t),
                  (n = t ? 'prev' : 'next'),
                  {
                    execute: m,
                    count: d,
                    keys: v,
                    filter: b,
                    asc: M,
                    desc: e,
                    distinct: k,
                    modify: S,
                    limit: p,
                    map: C,
                    remove: P,
                  }
                );
              };

              var k = function e(t) {
                return (
                  (t = !!y(t) || !!t),
                  (l = t),
                  {
                    execute: m,
                    count: d,
                    keys: v,
                    filter: b,
                    asc: M,
                    desc: T,
                    distinct: e,
                    modify: S,
                    limit: p,
                    map: C,
                    remove: P,
                  }
                );
              };

              var S = function e(t) {
                return (
                  (s = t),
                  {
                    execute: m,
                    count: d,
                    keys: v,
                    filter: b,
                    asc: M,
                    desc: T,
                    distinct: k,
                    modify: e,
                    limit: p,
                    map: C,
                    remove: P,
                  }
                );
              };

              var C = function e(t) {
                return (
                  h(t) && (u = t),
                  {
                    execute: m,
                    count: d,
                    keys: v,
                    filter: b,
                    asc: M,
                    desc: T,
                    distinct: k,
                    modify: S,
                    limit: p,
                    map: e,
                    remove: P,
                  }
                );
              };

              var P = function e(t) {
                return (
                  (t = !!y(t) || !!t),
                  (i = t),
                  {
                    execute: m,
                    count: d,
                    keys: v,
                    filter: b,
                    asc: M,
                    desc: T,
                    distinct: k,
                    modify: S,
                    limit: p,
                    map: C,
                    remove: e,
                  }
                );
              };
              return {
                execute: m,
                count: d,
                keys: v,
                filter: b,
                asc: M,
                desc: T,
                distinct: k,
                modify: S,
                limit: p,
                map: C,
                remove: P,
              };
            };
            'only bound upperBound lowerBound'.split(' ').forEach(e => {
              r[e] = function() {
                return new c(e, arguments);
              };
            }),
              (this.filter = function() {
                const e = new c(null, null);
                return e.filter(...arguments);
              }),
              (this.all = function() {
                return this.filter();
              });
          };

          const M = function(e, t, n, r) {
            const s = e.target.result;

            const o = new v(s, t);
            return (T[t] = s), Promise.resolve(o);
          };

          var T = {};

          const k = {
            version: '0.10.2',
            open(e) {
              let t;
              return new Promise((n, r) => {
                if (T[e.server])
                  M({ target: { result: T[e.server] } }, e.server, e.version, e.schema).then(n, r);
                else {
                  try {
                    t = p().open(e.server, e.version);
                  } catch (e) {
                    r(e);
                  }
                  (t.onsuccess = function(t) {
                    M(t, e.server, e.version, e.schema).then(n, r);
                  }),
                    (t.onupgradeneeded = function(t) {
                      !(function(e, t, n) {
                        for (const r in (typeof t === 'function' && (t = t()), t)) {
                          var s;

                          const o = t[r];
                          for (const i in ((s =
                            !d.call(t, r) || n.objectStoreNames.contains(r)
                              ? e.currentTarget.transaction.objectStore(r)
                              : n.createObjectStore(r, o.key)),
                          o.indexes)) {
                            const a = o.indexes[i];
                            try {
                              s.index(i);
                            } catch (e) {
                              s.createIndex(
                                i,
                                a.key || i,
                                Object.keys(a).length ? a : { unique: !1 }
                              );
                            }
                          }
                        }
                      })(t, e.schema, t.target.result);
                    }),
                    (t.onerror = function(e) {
                      r(e);
                    });
                }
              });
            },
            remove(e) {
              return new Promise((t, n) => {
                if (!e) return t();
                let r;
                let s;
                (void 0 === e ? 'undefined' : (0, o.default)(e)) === v && (e = e.name),
                  typeof e === 'string' && (r = T[e]),
                  r && typeof r.close === 'function' && r.close();
                try {
                  s = p().deleteDatabase(e);
                } catch (e) {
                  n(e);
                }
                (s.onsuccess = function(n) {
                  delete T[e], t(e);
                }),
                  (s.onerror = function(e) {
                    n(e);
                  }),
                  (s.onblocked = function(e) {
                    n(e);
                  });
              });
            },
          };
          void 0 !== e && void 0 !== e.exports
            ? (e.exports = k)
            : void 0 ===
                (s = function() {
                  return k;
                }.call(t, n, t, e)) || (e.exports = s);
        })(window);
      }.call(this, n(30)));
    },
    function(e, t, n) {
      const r = n(15);

      const s = n(110);

      const o = n(350);

      const i = n(349);

      const a = n(0);

      const c = n(149);

      const u = n(23);

      const l = u.newSupportDBError;

      const m = u.noDBError;

      let d = !1;
      function p(e) {
        (d = e), c.set('db', e, o);
      }
      if (
        (p(!!a.getGlobal().indexedDB),
        r.name === 'IE' && p(!1),
        r.name === 'Microsoft Edge' && p(!1),
        r.name === 'Safari')
      ) {
        try {
          parseInt(r.version.split('.')[0], 10) < 10 && p(!1);
        } catch (e) {}
        p(!1);
      }
      function f(e) {
        (this.concurrency = 0),
          (this.pendingTasks = []),
          (this.queue = Promise.resolve()),
          (this.logger = e.logger);
      }
      const g = f.prototype;
      (g.reset = a.emptyFunc),
        d &&
          (g.reset = function(e) {
            this.enable = !1 !== e;
          }),
        (g.addTask = function(e) {
          const t = this;
          return new Promise((n, r) => {
            function s(e) {
              t.concurrency--;
              const n = t.pendingTasks.shift();
              n && t.addTask(n), e();
            }
            if (t.concurrency < 100)
              return (
                t.concurrency++,
                e().then(
                  t => {
                    s(() => {
                      n(t), e.resolve && e.resolve(t);
                    });
                  },
                  t => {
                    s(() => {
                      const n = {
                        event: (t = t || {}).event || t,
                        callFunc: t.callFunc || 'db::addTask',
                      };
                      r(n), e.reject && e.reject(n);
                    });
                  }
                )
              );
            e.resolve || ((e.resolve = n), (e.reject = r)), t.pendingTasks.push(e);
          });
        }),
        (g.init = function(e) {
          const t = this;
          return t.addTask(() => {
            return t.enable
              ? t.server
                ? Promise.resolve()
                : ((t.name = `nim-${e}`),
                  o.open({ server: t.name, version: i.version, schema: i.schema }).then(
                    e => {
                      t.logger.log(`db::init: ${t.name}`), (t.server = e);
                    },
                    e => {
                      throw (p(!1), (t.server = null), (t.name = null), e);
                    }
                  ))
              : Promise.reject(l({ callFunc: 'db::init' }));
          });
        }),
        (g.destroy = function() {
          const e = this;
          return e.addTask(() => {
            return e.enable
              ? e.server
                ? o.remove(e.name).then(() => {
                    e.logger.log(`db::destroy: ${e.name}`), (e.server = null), (e.name = null);
                  })
                : Promise.resolve()
              : Promise.reject(l({ callFunc: 'db::destroy' }));
          });
        }),
        (g.clear = function() {
          const e = this;
          return e.addTask(() => {
            return e.enable
              ? e.server
                ? e.server.clear('timetag').then(() => {
                    const t = [];
                    if (
                      ([].slice.call(e.server.getIndexedDB().objectStoreNames).forEach(n => {
                        t.push(e.server.clear(n));
                      }),
                      t.length)
                    )
                      return Promise.all(t).then(() => {
                        e.logger.log(`db::clear: ${e.name}`);
                      });
                  })
                : Promise.resolve()
              : Promise.reject(l({ callFunc: 'db::clear' }));
          });
        }),
        (g.close = function() {
          this.server && (this.server.close(), (this.server = null), (this.name = null));
        }),
        (g.remove = function(e, t) {
          const n = this;
          return n.addTask(() => {
            return (
              n.checkDB(),
              a.isArray(t) || (t = [t]),
              n.server.remove(e, t).then(() => {
                n.logger.log(`db::delete: ${e} ${t.length === 1 ? t[0] : t}`);
              })
            );
          });
        }),
        (g.put = function(e, t) {
          const n = this;
          return n.addTask(() => {
            return (
              n.checkDB(),
              a.isArray(t) || (t = [t]),
              n.server.update(e, t).then(t => {
                const r = ['put', e];

                const o = i.keyPath(e);

                const a = [];
                return (
                  o &&
                    (t.forEach(e => {
                      a.push(s(e, o));
                    }),
                    r.push(a.length === 1 ? a[0] : a)),
                  r.push(t.length === 1 ? t[0] : t),
                  r.unshift('db::put:'),
                  n.logger.log.apply(n.logger.log, r),
                  t
                );
              })
            );
          });
        }),
        (g.get = function(e, t) {
          const n = this;
          return n.addTask(() => {
            return n.checkDB(), n.server.get(e, t);
          });
        }),
        (g.modifyOrPut = function(e) {
          const t = this;

          const n = e.table;

          let r = a.copy(e.obj);

          const s = e.key;

          const o = e.modifyObjWhenPut;

          const i = a.copy(r);
          return (
            delete i[s],
            t.getOne(n, null, r[s], { modifyObj: i }).then(e => {
              return e
                ? (t.logger.log(`db::modifyOrPut: update table ${n}`, r), e)
                : ((r = a.merge(r, o)),
                  t.put(n, r).then(e => {
                    return e[0];
                  }));
            })
          );
        }),
        (g.updateAndDelete = function(e, t, n) {
          const r = this;
          return r.addTask(() => {
            return r.checkDB(), r.server.updateAndDelete(e, t, n);
          });
        }),
        (g.getAll = function(e, t) {
          const n = this;
          return n.addTask(() => {
            return (
              n.checkDB(),
              ((t = t || {}).keys = !0 === t.keys),
              (t.desc = !0 === t.desc),
              (t.distinct = !0 === t.distinct),
              n.server
                .query(e, t.index)
                .filter(t.filter)
                .keys(t.keys)
                .desc(t.desc)
                .limit(t.limit)
                .distinct(t.distinct)
                .map(t.mapper)
                .modify(t.modifyObj)
                .execute()
            );
          });
        }),
        (g.getOnly = function(e, t, n, r) {
          const s = this;
          return s.addTask(() => {
            return (
              s.checkDB(),
              ((r = r || {}).keys = !0 === r.keys),
              (r.desc = !0 === r.desc),
              (r.distinct = !0 === r.distinct),
              (r.remove = !0 === r.remove),
              s.server
                .query(e, t)
                .only(n)
                .filter(r.filter)
                .keys(r.keys)
                .desc(r.desc)
                .limit(r.limit)
                .distinct(r.distinct)
                .map(r.mapper)
                .modify(r.modifyObj)
                .remove(r.remove)
                .execute()
            );
          });
        }),
        (g.getOne = function() {
          return this.getOnly.apply(this, arguments).then(e => {
            return e[0];
          });
        }),
        (g.clearTable = function(e) {
          const t = this;
          return t.addTask(() => {
            return t.checkDB(), t.server.clear(e);
          });
        }),
        (g.checkDB = function() {
          if (!this.enable) throw l({ callFunc: 'db::checkDB' });
          if (!this.server) throw m({ callFunc: 'db::checkDB' });
        }),
        (e.exports = f);
    },
    function(e, t, n) {
      n(150);
      const r = n(29);
      n(142)(r), (e.exports = r);
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
    function(e, t, n) {
      n(150);
      const r = { NIM: n(352), Chatroom: n(286) };
      n(142)(r), (e.exports = r);
    },
  ]);
});
