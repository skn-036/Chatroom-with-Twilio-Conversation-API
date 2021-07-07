(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Components_Conversation_container_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Conversation/container.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Conversation/container.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./resources/js/Components/Conversation/header.vue");
/* harmony import */ var _msgBody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./msgBody */ "./resources/js/Components/Conversation/msgBody.vue");
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    topHeader: _header__WEBPACK_IMPORTED_MODULE_0__.default,
    msgBody: _msgBody__WEBPACK_IMPORTED_MODULE_1__.default
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Conversation/header.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Conversation/header.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      convoSid: "",
      me: {}
    };
  },
  methods: {
    login: function login() {
      if (this.$store.getters.loginResponse.success !== undefined) {
        return this.$store.getters.loginResponse;
      } else {
        if (JSON.parse(sessionStorage.getItem("loginResponse")) !== undefined) {
          return JSON.parse(sessionStorage.getItem("loginResponse"));
        } else {
          return {
            success: null,
            message: null
          };
        }
      }
    }
  },
  computed: {
    participants: function participants() {
      return this.$store.getters.allConvoUsers;
    }
  },
  created: function created() {
    this.me = this.login().authUser;
    this.convoSid = this.$route.params.sid;
    this.$store.dispatch('ConvoUsers', this.convoSid);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Conversation/msgBody.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Conversation/msgBody.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      convoSid: "",
      msg: "",
      me: {}
    };
  },
  methods: {
    sendMsg: function sendMsg(request) {
      this.$store.dispatch("sendMsg", request);
      this.msg = "";
    },
    login: function login() {
      if (this.$store.getters.loginResponse.success !== undefined) {
        return this.$store.getters.loginResponse;
      } else {
        if (JSON.parse(sessionStorage.getItem("loginResponse")) !== undefined) {
          return JSON.parse(sessionStorage.getItem("loginResponse"));
        } else {
          return {
            success: null,
            message: null
          };
        }
      }
    }
  },
  computed: {
    webhook: function webhook() {
      var _this = this;

      axios.post('/api/webhook').then(function (response) {
        console.log(response);

        if (response.status == 200) {
          _this.$store.dispatch("allMsg", _this.$route.params.sid);
        }
      });
    },
    messages: function messages() {
      return this.$store.getters.convoMsg;
    },
    otherParticipant: function otherParticipant() {
      var _this2 = this;

      var target = this.$store.getters.allConvoUsers;
      target.array.forEach(function (item) {
        if (item.sid !== _this2.me.sid) {
          return item;
        }
      });
    }
  },
  created: function created() {
    this.me = this.login().authUser;
    this.convoSid = this.$route.params.sid;
    this.$store.dispatch('ConvoUsers', this.convoSid);
    this.$store.dispatch("allMsg", this.$route.params.sid);
  }
});

/***/ }),

/***/ "./resources/js/Components/Conversation/container.vue":
/*!************************************************************!*\
  !*** ./resources/js/Components/Conversation/container.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _container_vue_vue_type_template_id_70a31b80___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./container.vue?vue&type=template&id=70a31b80& */ "./resources/js/Components/Conversation/container.vue?vue&type=template&id=70a31b80&");
/* harmony import */ var _container_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container.vue?vue&type=script&lang=js& */ "./resources/js/Components/Conversation/container.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _container_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _container_vue_vue_type_template_id_70a31b80___WEBPACK_IMPORTED_MODULE_0__.render,
  _container_vue_vue_type_template_id_70a31b80___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Conversation/container.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Conversation/header.vue":
/*!*********************************************************!*\
  !*** ./resources/js/Components/Conversation/header.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _header_vue_vue_type_template_id_2813c31e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.vue?vue&type=template&id=2813c31e& */ "./resources/js/Components/Conversation/header.vue?vue&type=template&id=2813c31e&");
/* harmony import */ var _header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.vue?vue&type=script&lang=js& */ "./resources/js/Components/Conversation/header.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _header_vue_vue_type_template_id_2813c31e___WEBPACK_IMPORTED_MODULE_0__.render,
  _header_vue_vue_type_template_id_2813c31e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Conversation/header.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Conversation/msgBody.vue":
/*!**********************************************************!*\
  !*** ./resources/js/Components/Conversation/msgBody.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _msgBody_vue_vue_type_template_id_6ca4cefc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./msgBody.vue?vue&type=template&id=6ca4cefc& */ "./resources/js/Components/Conversation/msgBody.vue?vue&type=template&id=6ca4cefc&");
/* harmony import */ var _msgBody_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./msgBody.vue?vue&type=script&lang=js& */ "./resources/js/Components/Conversation/msgBody.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _msgBody_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _msgBody_vue_vue_type_template_id_6ca4cefc___WEBPACK_IMPORTED_MODULE_0__.render,
  _msgBody_vue_vue_type_template_id_6ca4cefc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Conversation/msgBody.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Conversation/container.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/Components/Conversation/container.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_container_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./container.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Conversation/container.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_container_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Components/Conversation/header.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/Components/Conversation/header.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./header.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Conversation/header.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Components/Conversation/msgBody.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Components/Conversation/msgBody.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_msgBody_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./msgBody.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Conversation/msgBody.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_msgBody_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Components/Conversation/container.vue?vue&type=template&id=70a31b80&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Components/Conversation/container.vue?vue&type=template&id=70a31b80& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_container_vue_vue_type_template_id_70a31b80___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_container_vue_vue_type_template_id_70a31b80___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_container_vue_vue_type_template_id_70a31b80___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./container.vue?vue&type=template&id=70a31b80& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Conversation/container.vue?vue&type=template&id=70a31b80&");


/***/ }),

/***/ "./resources/js/Components/Conversation/header.vue?vue&type=template&id=2813c31e&":
/*!****************************************************************************************!*\
  !*** ./resources/js/Components/Conversation/header.vue?vue&type=template&id=2813c31e& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_2813c31e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_2813c31e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_2813c31e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./header.vue?vue&type=template&id=2813c31e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Conversation/header.vue?vue&type=template&id=2813c31e&");


/***/ }),

/***/ "./resources/js/Components/Conversation/msgBody.vue?vue&type=template&id=6ca4cefc&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Components/Conversation/msgBody.vue?vue&type=template&id=6ca4cefc& ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_msgBody_vue_vue_type_template_id_6ca4cefc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_msgBody_vue_vue_type_template_id_6ca4cefc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_msgBody_vue_vue_type_template_id_6ca4cefc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./msgBody.vue?vue&type=template&id=6ca4cefc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Conversation/msgBody.vue?vue&type=template&id=6ca4cefc&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Conversation/container.vue?vue&type=template&id=70a31b80&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Conversation/container.vue?vue&type=template&id=70a31b80& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "h-screen" },
    [_c("top-header"), _vm._v(" "), _c("msg-body")],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Conversation/header.vue?vue&type=template&id=2813c31e&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Conversation/header.vue?vue&type=template&id=2813c31e& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "bg-light" }, [
    _c("div", { staticClass: "px-4 w-100 container-fluid" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-6 d-flex flex-row py-2" }, [
          _c("img", {
            staticClass: "img-fluid round-full mr-3",
            attrs: {
              src: "https://picsum.photos/50",
              alt: "https://picsum.photos/50"
            }
          }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "my-auto" },
            [
              _vm._l(_vm.participants, function(item, index) {
                return item.sid !== _vm.me.sid
                  ? _c("div", [
                      _c("h5", { staticClass: "text-black font-bold" }, [
                        _vm._v(_vm._s(item.name))
                      ])
                    ])
                  : _vm._e()
              }),
              _vm._v(" "),
              _vm._m(0)
            ],
            2
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("p", { staticClass: "text-size-small" }, [
        _vm._v("Last seen today 11.00 pm")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Conversation/msgBody.vue?vue&type=template&id=6ca4cefc&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Conversation/msgBody.vue?vue&type=template&id=6ca4cefc& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", {}, [
    _c("div", { staticClass: "chat" }, [
      _c(
        "div",
        { staticClass: "chat__wrapper" },
        _vm._l(_vm.messages, function(msg, index) {
          return _c(
            "div",
            {
              class: [
                msg.author == _vm.me.user_name ? "chat__message-own" : "",
                "chat__message"
              ]
            },
            [
              _c("div", [_vm._v(_vm._s(msg.body))]),
              _vm._v(" "),
              _c("div", { staticClass: "date text-size-small text-right" }, [
                _vm._v("hello")
              ])
            ]
          )
        }),
        0
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "chat__form" }, [
      _c(
        "form",
        {
          staticClass: "p-rel",
          attrs: { id: "chat__form" },
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.sendMsg({
                convoSid: _vm.convoSid,
                msg: _vm.msg,
                me: _vm.me
              })
            }
          }
        },
        [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.msg,
                expression: "msg"
              }
            ],
            staticClass: "mx-3",
            attrs: {
              id: "text-message",
              type: "text",
              placeholder: "Type your message here ..."
            },
            domProps: { value: _vm.msg },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.msg = $event.target.value
              }
            }
          }),
          _vm._v(" "),
          _vm.msg
            ? _c(
                "button",
                { staticClass: "p-abs send border-none bg-transparent" },
                [
                  _c("i", {
                    staticClass: "text-blue fa fa-paper-plane text-size-large"
                  })
                ]
              )
            : _c(
                "div",
                { staticClass: "p-abs send border-none bg-transparent" },
                [
                  _c("i", {
                    staticClass: "fa fa-paper-plane text-size-large text-grey"
                  })
                ]
              )
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);