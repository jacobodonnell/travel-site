"use strict";
(self["webpackChunktravel_site"] = self["webpackChunktravel_site"] || []).push([[42],{

/***/ 314:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Modal = /*#__PURE__*/function () {
  function Modal() {
    _classCallCheck(this, Modal);
    this.injectHTML();
    this.modal = document.querySelector('.modal');
    this.closeIcon = document.querySelector('.modal__close');
    this.events();
  }
  return _createClass(Modal, [{
    key: "events",
    value: function events() {
      var _this = this;
      // listen for close click
      this.closeIcon.addEventListener('click', function () {
        return _this.closeTheModal();
      });
      // pushes any key
      document.addEventListener('keyup', function (e) {
        return _this.keyPressHandler(e);
      });
    }
  }, {
    key: "keyPressHandler",
    value: function keyPressHandler(e) {
      if (e.keyCode === 27 && this.modal.classList.contains('modal--is-visible')) {
        this.closeTheModal();
      }
    }
  }, {
    key: "openTheModal",
    value: function openTheModal() {
      this.modal.classList.add('modal--is-visible');
    }
  }, {
    key: "closeTheModal",
    value: function closeTheModal() {
      this.modal.classList.remove('modal--is-visible');
    }
  }, {
    key: "injectHTML",
    value: function injectHTML() {
      document.body.insertAdjacentHTML('beforeend', "<div class=\"modal\">\n        <div class=\"modal__inner\">\n          <h2 class=\"section-title section-title--blue section-title--less-margin\"><img src=\"assets/images/icons/mail.svg\"\n              class=\"section-title__icon\"> Get in <strong>Touch</strong></h2>\n          <div class=\"wrapper wrapper--narrow\">\n            <p class=\"modal__description\">We will have an online order system in place soon. Until then, connect with us on\n              any of the platforms below!</p>\n          </div>\n\n          <div class=\"social-icons\">\n            <a href=\"#\" class=\"social-icons__icon\"><img src=\"assets/images/icons/facebook.svg\" alt=\"Facebook\"></a>\n            <a href=\"#\" class=\"social-icons__icon\"><img src=\"assets/images/icons/twitter.svg\" alt=\"Twitter\"></a>\n            <a href=\"#\" class=\"social-icons__icon\"><img src=\"assets/images/icons/instagram.svg\" alt=\"Instagram\"></a>\n            <a href=\"#\" class=\"social-icons__icon\"><img src=\"assets/images/icons/youtube.svg\" alt=\"YouTube\"></a>\n          </div>\n        </div>\n        <div class=\"modal__close\">X</div>\n      </div>");
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);

/***/ })

}]);