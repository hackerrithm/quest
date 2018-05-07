webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actionTypes; });
var actionTypes = {
    FETCH_MEMBERS_COMPLETED: 'FETCH_MEMBERS_COMPLETED',
    FETCH_MEMBER_BY_ID_COMPLETED: 'FETCH_MEMBER_BY_ID_COMPLETED',
    UPDATE_MEMBER_FIELD: 'UPDATE_MEMBER_FIELD',
    SAVE_MEMBER: 'SAVE_MEMBER',
    FETCH_NOTES_COMPLETED: 'FETCH_NOTES_COMPLETED'
};

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return memberAPI; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mockData__ = __webpack_require__(146);
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }


// const baseURL = 'https://api.github.com/orgs/lemoncode';
var baseURL = 'http://localhost:7000/v1/auth/note';
var mockMembers = __WEBPACK_IMPORTED_MODULE_0__mockData__["a" /* members */];
var fetchMembers = function fetchMembers() {
    //return Promise.resolve(mockMembers);
    var membersURL = baseURL + '/retrieve-all';
    return fetch(membersURL).then(function (response) {
        return response.json();
    }).then(mapToMembersClone);
};
var fetchMembersAsync = function fetchMembersAsync() {
    var membersURL = baseURL + '/retrieve-all';
    return fetch(membersURL).then(function (response) {
        return response.json();
    }).then(mapToMembers);
};
var mapToMembers = function mapToMembers(githubMembers) {
    return githubMembers.map(mapToMember);
};
var mapToMembersClone = function mapToMembersClone(githubMembers) {
    return githubMembers.map(mapToMember);
};
var mapToMember = function mapToMember(githubMember) {
    return {
        id: githubMember.id,
        // id: githubMember.id,
        // login: githubMember.login,
        // avatar_url: githubMember.avatar_url,
        title: githubMember.title,
        content: githubMember.content
    };
};
var saveMember = function saveMember(member) {
    var index = mockMembers.findIndex(function (m) {
        return m.id === member.id;
    });
    index >= 0 ? updateMember(member, index) : insertMember(member);
    return Promise.resolve(true);
};
var updateMember = function updateMember(member, index) {
    mockMembers = [].concat(_toConsumableArray(mockMembers.slice(0, index)), [member], _toConsumableArray(mockMembers.slice(index + 1)));
};
var insertMember = function insertMember(member) {
    member.id = mockMembers.length;
    mockMembers = [].concat(_toConsumableArray(mockMembers), [member]);
};
var fetchMemberById = function fetchMemberById(id) {
    var member = mockMembers.find(function (m) {
        return m.id === id;
    });
    return Promise.resolve(member);
};
var memberAPI = {
    fetchMembers: fetchMembers,
    fetchMembersAsync: fetchMembersAsync,
    saveMember: saveMember,
    fetchMemberById: fetchMemberById
};

/***/ }),
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__header__ = __webpack_require__(153);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__header__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about__ = __webpack_require__(152);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__about__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__members__ = __webpack_require__(163);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__members__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__member__ = __webpack_require__(158);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__member__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notes__ = __webpack_require__(169);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__notes__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home__ = __webpack_require__(154);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__home__["a"]; });







/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return memberFormValidation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lc_form_validation__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lc_form_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lc_form_validation__);

var validationConstraints = {
    fields: {
        login: [{ validator: __WEBPACK_IMPORTED_MODULE_0_lc_form_validation__["Validators"].required }, {
            validator: __WEBPACK_IMPORTED_MODULE_0_lc_form_validation__["Validators"].minLength,
            customParams: { length: 3 }
        }]
    }
};
var memberFormValidation = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_lc_form_validation__["createFormValidation"])(validationConstraints);

/***/ }),
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components__ = __webpack_require__(85);






var AppRouter = function AppRouter() {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_react_redux__["Provider"], { store: __WEBPACK_IMPORTED_MODULE_3__store__["a" /* store */] }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Router"], { history: __WEBPACK_IMPORTED_MODULE_1_react_router__["hashHistory"] }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: "/", component: __WEBPACK_IMPORTED_MODULE_4__app__["a" /* App */] }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["IndexRoute"], { component: __WEBPACK_IMPORTED_MODULE_5__components__["a" /* Home */] }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: "/home", component: __WEBPACK_IMPORTED_MODULE_5__components__["a" /* Home */] }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: "/about", component: __WEBPACK_IMPORTED_MODULE_5__components__["b" /* About */] }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: "/members", component: __WEBPACK_IMPORTED_MODULE_5__components__["c" /* MembersPageContainer */] }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: "/member", component: __WEBPACK_IMPORTED_MODULE_5__components__["d" /* MemberPageContainer */] }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: "/member/:id", component: __WEBPACK_IMPORTED_MODULE_5__components__["d" /* MemberPageContainer */] }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Route"], { path: "/notes", component: __WEBPACK_IMPORTED_MODULE_5__components__["e" /* NotesPageContainer */] }))));
};

/***/ }),
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return members; });
var members = [
  // {
  //   id: 1457912,
  //   // login: "brauliodiez",
  //   // avatar_url: "https://avatars.githubusercontent.com/u/1457912?v=3",
  //   title: 'Title 1',
  //   content: 'Content1'
  // },
  // {
  //   id: 4374977,
  //   // login: "Nasdan",
  //   // avatar_url: "https://avatars.githubusercontent.com/u/4374977?v=3",
  //   title: 'Title 2',
  //   content: 'Content2'
  // }
];

/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return noteAPI; });
var baseURL = 'http://localhost:7000/v1/auth/note';
var fetchNotes = function fetchNotes() {
    var membersURL = baseURL + '/retrieve-all?user-id=2';
    return fetch(membersURL).then(function (response) {
        return response.json();
    }).then(mapToNotes);
};
var fetchNotesAsync = function fetchNotesAsync() {
    var membersURL = baseURL + '/retrieve-all?user-id=2';
    return fetch(membersURL).then(function (response) {
        return response.json();
    }).then(mapToNotes);
};
var mapToNotes = function mapToNotes(notes) {
    return notes.map(mapToNote);
};
var mapToNote = function mapToNote(note) {
    return {
        id: note.id,
        user_id: note.user_id,
        tasks: note.tasks,
        title: note.title,
        content: note.content,
        category: note.category,
        status: note.status
    };
};
var noteAPI = {
    fetchNotes: fetchNotes
};

/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components__ = __webpack_require__(85);


var App = function App(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "container-fluid" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__components__["f" /* Header */], null), props.children);
};

/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Button; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

var Button = function Button(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { type: "button", className: props.className, onClick: props.onClick }, props.label);
};

/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__input__ = __webpack_require__(151);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__input__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__button__ = __webpack_require__(149);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__button__["a"]; });



/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Input; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

var Input = function Input(props) {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: formatWrapperClass(props) }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "input-field col s6" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { type: "text", name: props.name, className: "form-control", placeholder: props.placeholder, value: props.value, onChange: onChangeInput(props) })), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", { htmlFor: props.name }, props.label), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "help-block" }, props.error));
};
var formatWrapperClass = function formatWrapperClass(props) {
    var wrapperClass = 'form-group';
    return props.error ? wrapperClass + " has-error" : wrapperClass;
};
var onChangeInput = function onChangeInput(props) {
    return function (e) {
        props.onChange(e.target.name, e.target.value);
    };
};

/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return About; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

var About = function About() {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "row about-page" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h2", null, "Hello Kemar"));
};

/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Header; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(24);


var Header = function Header() {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "row" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", { id: "dropdown1", className: "dropdown-content" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#!" }, "one")), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#!" }, "two")), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", { className: "divider" }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("a", { href: "#!" }, "three"))), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("nav", { className: "blue" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "nav-wrapper" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Link"], { to: "/", className: "brand-logo" }, "Quest"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("ul", { className: "right hide-on-med-and-down" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Link"], { to: "/about" }, "About")), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("li", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Link"], { to: "/notes" }, "Notes"))))));
};

/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

var Home = function Home() {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "row home-page" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h2", null, "Hello Index"));
};

/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fetchMemberByIdAction; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_constants_actionTypes__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_member__ = __webpack_require__(53);


var fetchMemberByIdAction = function fetchMemberByIdAction(id) {
    return function (dispatch) {
        __WEBPACK_IMPORTED_MODULE_1__api_member__["a" /* memberAPI */].fetchMemberById(id).then(function (member) {
            dispatch(fetchMemberByIdCompleted(member));
        });
    };
};
var fetchMemberByIdCompleted = function fetchMemberByIdCompleted(member) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__common_constants_actionTypes__["a" /* actionTypes */].FETCH_MEMBER_BY_ID_COMPLETED,
        payload: member
    };
};

/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return memberFieldChangeAction; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_constants_actionTypes__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__memberFormValidation__ = __webpack_require__(86);


var memberFieldChangeAction = function memberFieldChangeAction(member, fieldName, value) {
    return function (dispatch) {
        __WEBPACK_IMPORTED_MODULE_1__memberFormValidation__["a" /* memberFormValidation */].validateField(member, fieldName, value).then(function (fieldValidationResult) {
            dispatch(memberFieldChangeCompleted(fieldValidationResult, value));
        });
    };
};
var memberFieldChangeCompleted = function memberFieldChangeCompleted(fieldValidationResult, value) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__common_constants_actionTypes__["a" /* actionTypes */].UPDATE_MEMBER_FIELD,
        payload: {
            fieldValidationResult: fieldValidationResult,
            value: value
        }
    };
};

/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return saveMemberAction; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_toastr__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_constants_actionTypes__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_member__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__memberFormValidation__ = __webpack_require__(86);





var saveMemberAction = function saveMemberAction(member) {
    return function (dispatch) {
        __WEBPACK_IMPORTED_MODULE_4__memberFormValidation__["a" /* memberFormValidation */].validateForm(member).then(function (formValidationResult) {
            if (formValidationResult.succeeded) {
                saveMember(member);
            }
            dispatch(saveMemberActionCompleted(formValidationResult));
        });
    };
};
var saveMember = function saveMember(member) {
    __WEBPACK_IMPORTED_MODULE_3__api_member__["a" /* memberAPI */].saveMember(member).then(function () {
        __WEBPACK_IMPORTED_MODULE_0_toastr__["success"]('Member saved.');
        __WEBPACK_IMPORTED_MODULE_1_react_router__["hashHistory"].goBack();
    }).catch(__WEBPACK_IMPORTED_MODULE_0_toastr__["error"]);
};
var saveMemberActionCompleted = function saveMemberActionCompleted(formValidationResult) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_2__common_constants_actionTypes__["a" /* actionTypes */].SAVE_MEMBER,
        payload: formValidationResult
    };
};

/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pageContainer__ = __webpack_require__(161);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__pageContainer__["a"]; });


/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_components_form__ = __webpack_require__(150);


var MemberForm = function MemberForm(props) {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("form", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h1", null, "Manage member"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__common_components_form__["a" /* Input */], { name: "login", label: "Login", value: props.member.title, onChange: props.onChange, error: props.memberErrors.login.succeeded ? '' : props.memberErrors.login.errorMessage }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__common_components_form__["a" /* Input */], { name: "avatar_url", label: "Avatar Url", value: props.member.content, onChange: props.onChange }), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__common_components_form__["b" /* Button */], { label: "Save", className: "btn blue lighten-1", onClick: props.onSave }));
};

/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__memberForm__ = __webpack_require__(159);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var MemberPage = function (_React$Component) {
    _inherits(MemberPage, _React$Component);

    function MemberPage() {
        _classCallCheck(this, MemberPage);

        var _this = _possibleConstructorReturn(this, (MemberPage.__proto__ || Object.getPrototypeOf(MemberPage)).call(this));

        _this.onChange = _this.onChange.bind(_this);
        _this.onSave = _this.onSave.bind(_this);
        return _this;
    }

    _createClass(MemberPage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.fetchMemberById(this.props.memberId);
        }
    }, {
        key: 'onChange',
        value: function onChange(fieldName, value) {
            this.props.onChange(this.props.member, fieldName, value);
        }
    }, {
        key: 'onSave',
        value: function onSave() {
            this.props.onSave(this.props.member);
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__memberForm__["a" /* MemberForm */], { member: this.props.member, memberErrors: this.props.memberErrors, onChange: this.onChange, onSave: this.onSave });
        }
    }]);

    return MemberPage;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberPageContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_fetchMemberById__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_memberFieldChange__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_saveMember__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__page__ = __webpack_require__(160);





var mapStateToProps = function mapStateToProps(state, ownProps) {
    return {
        memberId: Number(ownProps.params.id) || 0,
        member: state.member,
        memberErrors: state.memberErrors
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        fetchMemberById: function fetchMemberById(id) {
            return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__actions_fetchMemberById__["a" /* fetchMemberByIdAction */])(id));
        },
        onChange: function onChange(member, fieldName, value) {
            return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__actions_memberFieldChange__["a" /* memberFieldChangeAction */])(member, fieldName, value));
        },
        onSave: function onSave(member) {
            return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__actions_saveMember__["a" /* saveMemberAction */])(member));
        }
    };
};
var MemberPageContainer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_4__page__["a" /* MemberPage */]);

/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fetchMembersAction; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_constants_actionTypes__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_member__ = __webpack_require__(53);


var fetchMembersAction = function fetchMembersAction() {
    return function (dispatch) {
        __WEBPACK_IMPORTED_MODULE_1__api_member__["a" /* memberAPI */].fetchMembers().then(function (members) {
            dispatch(fetchMembersCompleted(members));
        });
    };
};
var fetchMembersCompleted = function fetchMembersCompleted(members) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__common_constants_actionTypes__["a" /* actionTypes */].FETCH_MEMBERS_COMPLETED,
        payload: members
    };
};

/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pageContainer__ = __webpack_require__(167);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__pageContainer__["a"]; });


/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

var MemberHeader = function MemberHeader() {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("tr", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("th", null, "Avatar"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("th", null, "Id"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("th", null, "Name"));
};

/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberRow; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(24);


var MemberRow = function MemberRow(_ref) {
    var member = _ref.member;

    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("tr", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", null), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Link"], { to: '/member/' + member.id }, member.id)), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, member.title)));
};

/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MembersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__memberHeader__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__memberRow__ = __webpack_require__(165);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var MembersPage = function (_React$Component) {
    _inherits(MembersPage, _React$Component);

    function MembersPage() {
        _classCallCheck(this, MembersPage);

        return _possibleConstructorReturn(this, (MembersPage.__proto__ || Object.getPrototypeOf(MembersPage)).apply(this, arguments));
    }

    _createClass(MembersPage, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.fetchMembers();
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "row" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h2", null, " Members Page"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1_react_router__["Link"], { to: "/member" }, "New Member"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("table", { className: "highlight highlight" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("thead", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__memberHeader__["a" /* MemberHeader */], null)), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("tbody", null, this.props.members.map(function (member) {
                return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__memberRow__["a" /* MemberRow */], { key: member.id, member: member });
            }))));
        }
    }]);

    return MembersPage;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
;

/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MembersPageContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_fetchMembers__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page__ = __webpack_require__(166);



var mapStateToProps = function mapStateToProps(state) {
    return {
        members: state.members
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        fetchMembers: function fetchMembers() {
            return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__actions_fetchMembers__["a" /* fetchMembersAction */])());
        }
    };
};
var MembersPageContainer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_2__page__["a" /* MembersPage */]);

/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fetchNotesAction; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_constants_actionTypes__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_note__ = __webpack_require__(147);


var fetchNotesAction = function fetchNotesAction() {
    return function (dispatch) {
        __WEBPACK_IMPORTED_MODULE_1__api_note__["a" /* noteAPI */].fetchNotes().then(function (notes) {
            dispatch(fetchNotesCompleted(notes));
        });
    };
};
var fetchNotesCompleted = function fetchNotesCompleted(notes) {
    return {
        type: __WEBPACK_IMPORTED_MODULE_0__common_constants_actionTypes__["a" /* actionTypes */].FETCH_NOTES_COMPLETED,
        payload: notes
    };
};

/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pageContainer__ = __webpack_require__(173);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__pageContainer__["a"]; });


/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoteHeader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

var NoteHeader = function NoteHeader() {
    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("tr", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("th", null, "Title"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("th", null, "Content"));
};

/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoteRow; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

var NoteRow = function NoteRow(_ref) {
    var note = _ref.note;

    return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("tr", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, note.title)), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, note.content)));
};

/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__noteRow__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__noteHeader__ = __webpack_require__(170);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var NotesPage = function (_React$Component) {
    _inherits(NotesPage, _React$Component);

    function NotesPage() {
        _classCallCheck(this, NotesPage);

        return _possibleConstructorReturn(this, (NotesPage.__proto__ || Object.getPrototypeOf(NotesPage)).apply(this, arguments));
    }

    _createClass(NotesPage, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            this.props.fetchNotes();
        }
    }, {
        key: "render",
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: "row" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("h2", null, " Notes Page"), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("table", { className: "highlight highlight" }, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("thead", null, __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__noteHeader__["a" /* NoteHeader */], null)), __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("tbody", null, this.props.notes.map(function (note) {
                return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_1__noteRow__["a" /* NoteRow */], { key: note.id, note: note });
            }))));
        }
    }]);

    return NotesPage;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);
;

/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesPageContainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_fetchNotes__ = __webpack_require__(168);



var mapStateToProps = function mapStateToProps(state) {
    return {
        notes: state.notes
    };
};
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
    return {
        fetchNotes: function fetchNotes() {
            return dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__actions_fetchNotes__["a" /* fetchNotesAction */])());
        }
    };
};
var NotesPageContainer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_1__page__["a" /* NotesPage */]);

/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(142);



__WEBPACK_IMPORTED_MODULE_1_react_dom__["render"](__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__router__["a" /* AppRouter */], null), document.getElementById('root'));

/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return state; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__members__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__member__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__memberErrors__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notes__ = __webpack_require__(179);





;
var state = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
    members: __WEBPACK_IMPORTED_MODULE_1__members__["a" /* membersReducer */],
    member: __WEBPACK_IMPORTED_MODULE_2__member__["a" /* memberReducer */],
    memberErrors: __WEBPACK_IMPORTED_MODULE_3__memberErrors__["a" /* memberErrorsReducer */],
    notes: __WEBPACK_IMPORTED_MODULE_4__notes__["a" /* notesReducer */]
});

/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return memberReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_constants_actionTypes__ = __webpack_require__(15);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var createEmptyMember = function createEmptyMember() {
    return {
        id: -1,
        // login: '',
        // avatar_url: '',
        title: '',
        content: ''
    };
};
var memberReducer = function memberReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : createEmptyMember();
    var action = arguments[1];

    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__common_constants_actionTypes__["a" /* actionTypes */].FETCH_MEMBER_BY_ID_COMPLETED:
            return handleFetchMemberByIdCompleted(state, action.payload);
        case __WEBPACK_IMPORTED_MODULE_0__common_constants_actionTypes__["a" /* actionTypes */].UPDATE_MEMBER_FIELD:
            return handleUpdateMemberField(state, action.payload);
    }
    return state;
};
var handleFetchMemberByIdCompleted = function handleFetchMemberByIdCompleted(state, payload) {
    return payload;
};
var handleUpdateMemberField = function handleUpdateMemberField(state, payload) {
    return Object.assign({}, state, _defineProperty({}, payload.fieldValidationResult.key, payload.value));
};

/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return memberErrorsReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lc_form_validation__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lc_form_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lc_form_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_constants_actionTypes__ = __webpack_require__(15);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var createEmptyMemberErrors = function createEmptyMemberErrors() {
    return {
        login: new __WEBPACK_IMPORTED_MODULE_0_lc_form_validation__["FieldValidationResult"]()
    };
};
var memberErrorsReducer = function memberErrorsReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : createEmptyMemberErrors();
    var action = arguments[1];

    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_1__common_constants_actionTypes__["a" /* actionTypes */].FETCH_MEMBERS_COMPLETED:
            return handleFetchMembersCompleted(state, action.payload);
        case __WEBPACK_IMPORTED_MODULE_1__common_constants_actionTypes__["a" /* actionTypes */].UPDATE_MEMBER_FIELD:
            return handleUpdateMemberField(state, action.payload);
        case __WEBPACK_IMPORTED_MODULE_1__common_constants_actionTypes__["a" /* actionTypes */].SAVE_MEMBER:
            return handleSaveMember(state, action.payload);
    }
    return state;
};
var handleFetchMembersCompleted = function handleFetchMembersCompleted(state, payload) {
    return createEmptyMemberErrors();
};
var handleUpdateMemberField = function handleUpdateMemberField(state, payload) {
    return Object.assign({}, state, _defineProperty({}, payload.fieldValidationResult.key, payload.fieldValidationResult));
};
var handleSaveMember = function handleSaveMember(state, payload) {
    var newMemberErrors = Object.assign({}, state);
    return payload.fieldErrors.reduce(function (memberErrors, fieldValidationResult) {
        memberErrors[fieldValidationResult.key] = fieldValidationResult;
        return memberErrors;
    }, newMemberErrors);
};

/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return membersReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_constants_actionTypes__ = __webpack_require__(15);

var membersReducer = function membersReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__common_constants_actionTypes__["a" /* actionTypes */].FETCH_MEMBERS_COMPLETED:
            return handleFetchMembersCompleted(state, action.payload);
    }
    return state;
};
var handleFetchMembersCompleted = function handleFetchMembersCompleted(state, payload) {
    return payload;
};

/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return notesReducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_constants_actionTypes__ = __webpack_require__(15);

var notesReducer = function notesReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__common_constants_actionTypes__["a" /* actionTypes */].FETCH_NOTES_COMPLETED:
            return handleFetchNotesCompleted(state, action.payload);
    }
    return state;
};
var handleFetchNotesCompleted = function handleFetchNotesCompleted(state, payload) {
    return payload;
};

/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return store; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers__ = __webpack_require__(175);



var store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_2__reducers__["a" /* state */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["compose"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_1_redux_thunk___default.a)));

/***/ })
],[174]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21tb24vY29uc3RhbnRzL2FjdGlvblR5cGVzLnRzIiwid2VicGFjazovLy8uL2FwaS9tZW1iZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lbWJlci9tZW1iZXJGb3JtVmFsaWRhdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL2FwaS9tZW1iZXIvbW9ja0RhdGEudHMiLCJ3ZWJwYWNrOi8vLy4vYXBpL25vdGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21tb24vY29tcG9uZW50cy9mb3JtL2J1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vY29tbW9uL2NvbXBvbmVudHMvZm9ybS9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9jb21tb24vY29tcG9uZW50cy9mb3JtL2lucHV0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2Fib3V0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ob21lLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lbWJlci9hY3Rpb25zL2ZldGNoTWVtYmVyQnlJZC50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lbWJlci9hY3Rpb25zL21lbWJlckZpZWxkQ2hhbmdlLnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWVtYmVyL2FjdGlvbnMvc2F2ZU1lbWJlci50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lbWJlci9tZW1iZXJGb3JtLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lbWJlci9wYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lbWJlci9wYWdlQ29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lbWJlcnMvYWN0aW9ucy9mZXRjaE1lbWJlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZW1iZXJzL21lbWJlckhlYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZW1iZXJzL21lbWJlclJvdy50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZW1iZXJzL3BhZ2UudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWVtYmVycy9wYWdlQ29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25vdGVzL2FjdGlvbnMvZmV0Y2hOb3Rlcy50cyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25vdGVzL25vdGVIZWFkZXIudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbm90ZXMvbm90ZVJvdy50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9ub3Rlcy9wYWdlLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25vdGVzL3BhZ2VDb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9tZW1iZXIudHMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvbWVtYmVyRXJyb3JzLnRzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL21lbWJlcnMudHMiLCJ3ZWJwYWNrOi8vLy4vcmVkdWNlcnMvbm90ZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTSxjQUFjO0FBQ3pCLDZCQUF5Qix5QkFEQTtBQUV6QixrQ0FBOEIsOEJBRkw7QUFHekIseUJBQXFCLHFCQUhJO0FBSXpCLGlCQUFhLGFBSlk7QUFLekIsMkJBQXVCO0FBTEUsQ0FBcEIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QURGLENBRmlDLENBQTVCLEMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGFjdGlvblR5cGVzID0ge1xuICBGRVRDSF9NRU1CRVJTX0NPTVBMRVRFRDogJ0ZFVENIX01FTUJFUlNfQ09NUExFVEVEJyxcbiAgRkVUQ0hfTUVNQkVSX0JZX0lEX0NPTVBMRVRFRDogJ0ZFVENIX01FTUJFUl9CWV9JRF9DT01QTEVURUQnLFxuICBVUERBVEVfTUVNQkVSX0ZJRUxEOiAnVVBEQVRFX01FTUJFUl9GSUVMRCcsXG4gIFNBVkVfTUVNQkVSOiAnU0FWRV9NRU1CRVInLFxuICBGRVRDSF9OT1RFU19DT01QTEVURUQ6ICdGRVRDSF9OT1RFU19DT01QTEVURUQnLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbW1vbi9jb25zdGFudHMvYWN0aW9uVHlwZXMudHMiLCJpbXBvcnQgeyBNZW1iZXJFbnRpdHksIE1lbWJlckVudGl0eUNsb25lIH0gZnJvbSAnLi4vLi4vbW9kZWwnO1xuaW1wb3J0IHsgbWVtYmVycyB9IGZyb20gJy4vbW9ja0RhdGEnO1xuXG4vLyBjb25zdCBiYXNlVVJMID0gJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vb3Jncy9sZW1vbmNvZGUnO1xuY29uc3QgYmFzZVVSTCA9ICdodHRwOi8vbG9jYWxob3N0OjcwMDAvdjEvYXV0aC9ub3RlJztcbmxldCBtb2NrTWVtYmVycyA9IG1lbWJlcnM7XG5cbmNvbnN0IGZldGNoTWVtYmVycyA9ICgpOiBQcm9taXNlPE1lbWJlckVudGl0eUNsb25lW10+ID0+IHtcbiAgLy9yZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG1vY2tNZW1iZXJzKTtcbiAgY29uc3QgbWVtYmVyc1VSTCA9IGAke2Jhc2VVUkx9L3JldHJpZXZlLWFsbGA7XG5cbiAgcmV0dXJuIGZldGNoKG1lbWJlcnNVUkwpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiAocmVzcG9uc2UuanNvbigpKSlcbiAgICAudGhlbihtYXBUb01lbWJlcnNDbG9uZSk7XG59O1xuXG5jb25zdCBmZXRjaE1lbWJlcnNBc3luYyA9ICgpOiBQcm9taXNlPE1lbWJlckVudGl0eVtdPiA9PiB7XG4gIGNvbnN0IG1lbWJlcnNVUkwgPSBgJHtiYXNlVVJMfS9yZXRyaWV2ZS1hbGxgO1xuXG4gIHJldHVybiBmZXRjaChtZW1iZXJzVVJMKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gKHJlc3BvbnNlLmpzb24oKSkpXG4gICAgLnRoZW4obWFwVG9NZW1iZXJzKTtcbn07XG5cbmNvbnN0IG1hcFRvTWVtYmVycyA9IChnaXRodWJNZW1iZXJzOiBhbnlbXSk6IE1lbWJlckVudGl0eVtdID0+IHtcbiAgcmV0dXJuIGdpdGh1Yk1lbWJlcnMubWFwKG1hcFRvTWVtYmVyKTtcbn07XG5cbmNvbnN0IG1hcFRvTWVtYmVyc0Nsb25lID0gKGdpdGh1Yk1lbWJlcnM6IGFueVtdKTogTWVtYmVyRW50aXR5Q2xvbmVbXSA9PiB7XG4gIHJldHVybiBnaXRodWJNZW1iZXJzLm1hcChtYXBUb01lbWJlcik7XG59O1xuXG5jb25zdCBtYXBUb01lbWJlciA9IChnaXRodWJNZW1iZXIpOiBNZW1iZXJFbnRpdHkgPT4ge1xuICByZXR1cm4ge1xuICAgIGlkOiBnaXRodWJNZW1iZXIuaWQsXG4gICAgLy8gaWQ6IGdpdGh1Yk1lbWJlci5pZCxcbiAgICAvLyBsb2dpbjogZ2l0aHViTWVtYmVyLmxvZ2luLFxuICAgIC8vIGF2YXRhcl91cmw6IGdpdGh1Yk1lbWJlci5hdmF0YXJfdXJsLFxuICAgIHRpdGxlOiBnaXRodWJNZW1iZXIudGl0bGUsXG4gICAgY29udGVudDogZ2l0aHViTWVtYmVyLmNvbnRlbnQsXG4gIH07XG59O1xuXG5jb25zdCBzYXZlTWVtYmVyID0gKG1lbWJlcjogTWVtYmVyRW50aXR5KTogUHJvbWlzZTxib29sZWFuPiA9PiB7XG4gIGNvbnN0IGluZGV4ID0gbW9ja01lbWJlcnMuZmluZEluZGV4KG0gPT4gbS5pZCA9PT0gbWVtYmVyLmlkKTtcblxuICBpbmRleCA+PSAwID9cbiAgICB1cGRhdGVNZW1iZXIobWVtYmVyLCBpbmRleCkgOlxuICAgIGluc2VydE1lbWJlcihtZW1iZXIpO1xuXG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSk7XG59O1xuXG5jb25zdCB1cGRhdGVNZW1iZXIgPSAobWVtYmVyOiBNZW1iZXJFbnRpdHksIGluZGV4OiBudW1iZXIpID0+IHtcbiAgbW9ja01lbWJlcnMgPSBbXG4gICAgLi4ubW9ja01lbWJlcnMuc2xpY2UoMCwgaW5kZXgpLFxuICAgIG1lbWJlcixcbiAgICAuLi5tb2NrTWVtYmVycy5zbGljZShpbmRleCArIDEpLFxuICBdO1xufTtcblxuY29uc3QgaW5zZXJ0TWVtYmVyID0gKG1lbWJlcjogTWVtYmVyRW50aXR5KSA9PiB7XG4gIG1lbWJlci5pZCA9IG1vY2tNZW1iZXJzLmxlbmd0aDtcblxuICBtb2NrTWVtYmVycyA9IFtcbiAgICAuLi5tb2NrTWVtYmVycyxcbiAgICBtZW1iZXIsXG4gIF07XG59O1xuXG5jb25zdCBmZXRjaE1lbWJlckJ5SWQgPSAoaWQ6IG51bWJlcik6IFByb21pc2U8TWVtYmVyRW50aXR5PiA9PiB7XG4gIGNvbnN0IG1lbWJlciA9IG1vY2tNZW1iZXJzLmZpbmQobSA9PiBtLmlkID09PSBpZCk7XG5cbiAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShtZW1iZXIpO1xufVxuXG5leHBvcnQgY29uc3QgbWVtYmVyQVBJID0ge1xuICBmZXRjaE1lbWJlcnMsXG4gIGZldGNoTWVtYmVyc0FzeW5jLFxuICBzYXZlTWVtYmVyLFxuICBmZXRjaE1lbWJlckJ5SWQsXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBpL21lbWJlci9pbmRleC50cyIsImV4cG9ydCAqIGZyb20gJy4vaGVhZGVyJztcbmV4cG9ydCAqIGZyb20gJy4vYWJvdXQnO1xuZXhwb3J0ICogZnJvbSAnLi9tZW1iZXJzJztcbmV4cG9ydCAqIGZyb20gJy4vbWVtYmVyJztcbmV4cG9ydCAqIGZyb20gJy4vbm90ZXMnO1xuZXhwb3J0ICogZnJvbSAnLi9ob21lJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvaW5kZXgudHMiLCJpbXBvcnQge1xuICBWYWxpZGF0b3JzLCBWYWxpZGF0aW9uQ29uc3RyYWludHMsIGNyZWF0ZUZvcm1WYWxpZGF0aW9uXG59IGZyb20gJ2xjLWZvcm0tdmFsaWRhdGlvbic7XG5cbmNvbnN0IHZhbGlkYXRpb25Db25zdHJhaW50czogVmFsaWRhdGlvbkNvbnN0cmFpbnRzID0ge1xuICBmaWVsZHM6IHtcbiAgICBsb2dpbjogW1xuICAgICAgeyB2YWxpZGF0b3I6IFZhbGlkYXRvcnMucmVxdWlyZWQgfSxcbiAgICAgIHtcbiAgICAgICAgdmFsaWRhdG9yOiBWYWxpZGF0b3JzLm1pbkxlbmd0aCxcbiAgICAgICAgY3VzdG9tUGFyYW1zOiB7IGxlbmd0aDogMyB9LFxuICAgICAgfSxcbiAgICBdXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3QgbWVtYmVyRm9ybVZhbGlkYXRpb24gPSBjcmVhdGVGb3JtVmFsaWRhdGlvbih2YWxpZGF0aW9uQ29uc3RyYWludHMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9tZW1iZXIvbWVtYmVyRm9ybVZhbGlkYXRpb24udHMiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlLCBJbmRleFJvdXRlLCBoYXNoSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHN0b3JlIH0gZnJvbSAnLi9zdG9yZSc7XG5pbXBvcnQgeyBBcHAgfSBmcm9tICcuL2FwcCc7XG5pbXBvcnQgeyBBYm91dCwgTWVtYmVyc1BhZ2VDb250YWluZXIsIE1lbWJlclBhZ2VDb250YWluZXIsIE5vdGVzUGFnZUNvbnRhaW5lciwgSG9tZSB9IGZyb20gJy4vY29tcG9uZW50cyc7XG5cbmV4cG9ydCBjb25zdCBBcHBSb3V0ZXI6IFJlYWN0LlN0YXRlbGVzc0NvbXBvbmVudDx7fT4gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8Um91dGVyIGhpc3Rvcnk9e2hhc2hIaXN0b3J5fT5cbiAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXtBcHB9ID5cbiAgICAgICAgICA8SW5kZXhSb3V0ZSBjb21wb25lbnQ9e0hvbWV9IC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvaG9tZVwiIGNvbXBvbmVudD17SG9tZX0gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hYm91dFwiIGNvbXBvbmVudD17QWJvdXR9IC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvbWVtYmVyc1wiIGNvbXBvbmVudD17TWVtYmVyc1BhZ2VDb250YWluZXJ9IC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvbWVtYmVyXCIgY29tcG9uZW50PXtNZW1iZXJQYWdlQ29udGFpbmVyfSAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL21lbWJlci86aWRcIiBjb21wb25lbnQ9e01lbWJlclBhZ2VDb250YWluZXJ9IC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvbm90ZXNcIiBjb21wb25lbnQ9e05vdGVzUGFnZUNvbnRhaW5lcn0gLz5cbiAgICAgICAgPC9Sb3V0ZT5cbiAgICAgIDwvUm91dGVyPlxuICAgIDwvUHJvdmlkZXI+XG4gICk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yb3V0ZXIudHN4IiwiaW1wb3J0IHsgTWVtYmVyRW50aXR5IH0gZnJvbSAnLi4vLi4vbW9kZWwnO1xuXG5leHBvcnQgY29uc3QgbWVtYmVyczogTWVtYmVyRW50aXR5W10gPVxuICBbXG4gICAgLy8ge1xuICAgIC8vICAgaWQ6IDE0NTc5MTIsXG4gICAgLy8gICAvLyBsb2dpbjogXCJicmF1bGlvZGllelwiLFxuICAgIC8vICAgLy8gYXZhdGFyX3VybDogXCJodHRwczovL2F2YXRhcnMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvMTQ1NzkxMj92PTNcIixcbiAgICAvLyAgIHRpdGxlOiAnVGl0bGUgMScsXG4gICAgLy8gICBjb250ZW50OiAnQ29udGVudDEnXG4gICAgLy8gfSxcbiAgICAvLyB7XG4gICAgLy8gICBpZDogNDM3NDk3NyxcbiAgICAvLyAgIC8vIGxvZ2luOiBcIk5hc2RhblwiLFxuICAgIC8vICAgLy8gYXZhdGFyX3VybDogXCJodHRwczovL2F2YXRhcnMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvNDM3NDk3Nz92PTNcIixcbiAgICAvLyAgIHRpdGxlOiAnVGl0bGUgMicsXG4gICAgLy8gICBjb250ZW50OiAnQ29udGVudDInXG4gICAgLy8gfVxuICBdO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBpL21lbWJlci9tb2NrRGF0YS50cyIsImltcG9ydCB7IE5vdGVFbnRpdHkgfSBmcm9tICcuLi8uLi9tb2RlbCc7XG5jb25zdCBiYXNlVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NzAwMC92MS9hdXRoL25vdGUnO1xuXG5jb25zdCBmZXRjaE5vdGVzID0gKCk6IFByb21pc2U8Tm90ZUVudGl0eVtdPiA9PiB7XG4gIGNvbnN0IG1lbWJlcnNVUkwgPSBgJHtiYXNlVVJMfS9yZXRyaWV2ZS1hbGw/dXNlci1pZD0yYDtcblxuICByZXR1cm4gZmV0Y2gobWVtYmVyc1VSTClcbiAgICAudGhlbigocmVzcG9uc2UpID0+IChyZXNwb25zZS5qc29uKCkpKVxuICAgIC50aGVuKG1hcFRvTm90ZXMpO1xufTtcblxuY29uc3QgZmV0Y2hOb3Rlc0FzeW5jID0gKCk6IFByb21pc2U8Tm90ZUVudGl0eVtdPiA9PiB7XG4gIGNvbnN0IG1lbWJlcnNVUkwgPSBgJHtiYXNlVVJMfS9yZXRyaWV2ZS1hbGw/dXNlci1pZD0yYDtcblxuICByZXR1cm4gZmV0Y2gobWVtYmVyc1VSTClcbiAgICAudGhlbigocmVzcG9uc2UpID0+IChyZXNwb25zZS5qc29uKCkpKVxuICAgIC50aGVuKG1hcFRvTm90ZXMpO1xufTtcblxuY29uc3QgbWFwVG9Ob3RlcyA9IChub3RlczogYW55W10pOiBOb3RlRW50aXR5W10gPT4ge1xuICByZXR1cm4gbm90ZXMubWFwKG1hcFRvTm90ZSk7XG59O1xuXG5jb25zdCBtYXBUb05vdGUgPSAobm90ZSk6IE5vdGVFbnRpdHkgPT4ge1xuICByZXR1cm4ge1xuICAgIGlkOiBub3RlLmlkLFxuICAgIHVzZXJfaWQ6IG5vdGUudXNlcl9pZCxcbiAgICB0YXNrczogbm90ZS50YXNrcyxcbiAgICB0aXRsZTogbm90ZS50aXRsZSxcbiAgICBjb250ZW50OiBub3RlLmNvbnRlbnQsXG4gICAgY2F0ZWdvcnk6IG5vdGUuY2F0ZWdvcnksXG4gICAgc3RhdHVzOiBub3RlLnN0YXR1cyxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBub3RlQVBJID0ge1xuICBmZXRjaE5vdGVzLFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwaS9ub3RlL2luZGV4LnRzIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi9jb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IEFwcDogUmVhY3QuU3RhdGVsZXNzQ29tcG9uZW50PHt9PiA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgPC9kaXY+XG5cbiAgKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGNsYXNzTmFtZTogc3RyaW5nO1xuICBvbkNsaWNrOiAoKSA9PiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgQnV0dG9uOiBSZWFjdC5TdGF0ZWxlc3NDb21wb25lbnQ8UHJvcHM+ID0gKHByb3BzKSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIlxuICAgICAgY2xhc3NOYW1lPXtwcm9wcy5jbGFzc05hbWV9XG4gICAgICBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfVxuICAgID5cbiAgICAgIHtwcm9wcy5sYWJlbH1cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21tb24vY29tcG9uZW50cy9mb3JtL2J1dHRvbi50c3giLCJleHBvcnQgKiBmcm9tICcuL2lucHV0JztcbmV4cG9ydCAqIGZyb20gJy4vYnV0dG9uJztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbW1vbi9jb21wb25lbnRzL2Zvcm0vaW5kZXgudHMiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgbmFtZTogc3RyaW5nO1xuICBsYWJlbDogc3RyaW5nO1xuICBwbGFjZWhvbGRlcj86IHN0cmluZztcbiAgdmFsdWU6IHN0cmluZztcbiAgb25DaGFuZ2U6IChmaWVsZE5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZykgPT4gdm9pZDtcbiAgZXJyb3I/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBJbnB1dDogUmVhY3QuU3RhdGVsZXNzQ29tcG9uZW50PFByb3BzPiA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtmb3JtYXRXcmFwcGVyQ2xhc3MocHJvcHMpfT5cbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczZcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBuYW1lPXtwcm9wcy5uYW1lfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9e3Byb3BzLnBsYWNlaG9sZGVyfVxuICAgICAgICAgIHZhbHVlPXtwcm9wcy52YWx1ZX1cbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VJbnB1dChwcm9wcyl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxsYWJlbCBodG1sRm9yPXtwcm9wcy5uYW1lfT57cHJvcHMubGFiZWx9PC9sYWJlbD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVscC1ibG9ja1wiPntwcm9wcy5lcnJvcn08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufTtcblxuY29uc3QgZm9ybWF0V3JhcHBlckNsYXNzID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICBjb25zdCB3cmFwcGVyQ2xhc3MgPSAnZm9ybS1ncm91cCc7XG5cbiAgcmV0dXJuIHByb3BzLmVycm9yID9cbiAgICBgJHt3cmFwcGVyQ2xhc3N9IGhhcy1lcnJvcmAgOlxuICAgIHdyYXBwZXJDbGFzcztcbn07XG5cbmNvbnN0IG9uQ2hhbmdlSW5wdXQgPSAocHJvcHM6IFByb3BzKSA9PiAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgcHJvcHMub25DaGFuZ2UoZS50YXJnZXQubmFtZSwgZS50YXJnZXQudmFsdWUpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbW1vbi9jb21wb25lbnRzL2Zvcm0vaW5wdXQudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgQWJvdXQ6IFJlYWN0LlN0YXRlbGVzc0NvbXBvbmVudDx7fT4gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgYWJvdXQtcGFnZVwiPlxuICAgICA8aDI+SGVsbG8gS2VtYXI8L2gyPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9hYm91dC50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuZXhwb3J0IGNvbnN0IEhlYWRlcjogUmVhY3QuU3RhdGVsZXNzQ29tcG9uZW50PHt9PiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8dWwgaWQ9XCJkcm9wZG93bjFcIiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250ZW50XCI+XG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCIjIVwiPm9uZTwvYT48L2xpPlxuICAgICAgICAgIDxsaT48YSBocmVmPVwiIyFcIj50d288L2E+PC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZGl2aWRlclwiPjwvbGk+XG4gICAgICAgICAgPGxpPjxhIGhyZWY9XCIjIVwiPnRocmVlPC9hPjwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiYmx1ZVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LXdyYXBwZXJcIj5cbiAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiIGNsYXNzTmFtZT1cImJyYW5kLWxvZ29cIj5RdWVzdDwvTGluaz5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJyaWdodCBoaWRlLW9uLW1lZC1hbmQtZG93blwiPlxuICAgICAgICAgICAgICA8bGk+PExpbmsgdG89XCIvYWJvdXRcIj5BYm91dDwvTGluaz48L2xpPlxuICAgICAgICAgICAgICB7LyogPGxpPjxMaW5rIHRvPVwiL21lbWJlcnNcIj5NZW1iZXJzPC9MaW5rPjwvbGk+ICovfVxuICAgICAgICAgICAgICA8bGk+PExpbmsgdG89XCIvbm90ZXNcIj5Ob3RlczwvTGluaz48L2xpPlxuICAgICAgICAgICAgICB7LyogPGxpPjxhIGNsYXNzTmFtZT1cImRyb3Bkb3duLXRyaWdnZXJcIiBocmVmPVwiIyFcIiBkYXRhLXRhcmdldD1cImRyb3Bkb3duMVwiPkRyb3Bkb3duPGkgY2xhc3NOYW1lPVwibWF0ZXJpYWwtaWNvbnMgcmlnaHRcIj5hcnJvd19kcm9wX2Rvd248L2k+PC9hPjwvbGk+ICovfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uYXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL2hlYWRlci50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBIb21lOiBSZWFjdC5TdGF0ZWxlc3NDb21wb25lbnQ8e30+ID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGhvbWUtcGFnZVwiPlxuICAgICA8aDI+SGVsbG8gSW5kZXg8L2gyPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9ob21lLnRzeCIsImltcG9ydCB7IGFjdGlvblR5cGVzIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2NvbnN0YW50cy9hY3Rpb25UeXBlcyc7XG5pbXBvcnQgeyBNZW1iZXJFbnRpdHkgfSBmcm9tICcuLi8uLi8uLi9tb2RlbCc7XG5pbXBvcnQgeyBtZW1iZXJBUEkgfSBmcm9tICcuLi8uLi8uLi9hcGkvbWVtYmVyJztcblxuZXhwb3J0IGNvbnN0IGZldGNoTWVtYmVyQnlJZEFjdGlvbiA9IChpZDogbnVtYmVyKSA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgbWVtYmVyQVBJLmZldGNoTWVtYmVyQnlJZChpZClcbiAgICAudGhlbigobWVtYmVyKSA9PiB7XG4gICAgICBkaXNwYXRjaChmZXRjaE1lbWJlckJ5SWRDb21wbGV0ZWQobWVtYmVyKSk7XG4gICAgfSk7XG59O1xuXG5jb25zdCBmZXRjaE1lbWJlckJ5SWRDb21wbGV0ZWQgPSAobWVtYmVyOiBNZW1iZXJFbnRpdHkpID0+ICh7XG4gIHR5cGU6IGFjdGlvblR5cGVzLkZFVENIX01FTUJFUl9CWV9JRF9DT01QTEVURUQsXG4gIHBheWxvYWQ6IG1lbWJlcixcbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9tZW1iZXIvYWN0aW9ucy9mZXRjaE1lbWJlckJ5SWQudHMiLCJpbXBvcnQgeyBGaWVsZFZhbGlkYXRpb25SZXN1bHQgfSBmcm9tICdsYy1mb3JtLXZhbGlkYXRpb24nO1xuaW1wb3J0IHsgYWN0aW9uVHlwZXMgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vY29uc3RhbnRzL2FjdGlvblR5cGVzJztcbmltcG9ydCB7IE1lbWJlckVudGl0eSB9IGZyb20gJy4uLy4uLy4uL21vZGVsJztcbmltcG9ydCB7IG1lbWJlckZvcm1WYWxpZGF0aW9uIH0gZnJvbSAnLi4vbWVtYmVyRm9ybVZhbGlkYXRpb24nO1xuXG5leHBvcnQgY29uc3QgbWVtYmVyRmllbGRDaGFuZ2VBY3Rpb24gPSAobWVtYmVyOiBNZW1iZXJFbnRpdHksIGZpZWxkTmFtZTogc3RyaW5nLCB2YWx1ZTogYW55KSA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgbWVtYmVyRm9ybVZhbGlkYXRpb24udmFsaWRhdGVGaWVsZChtZW1iZXIsIGZpZWxkTmFtZSwgdmFsdWUpXG4gICAgLnRoZW4oKGZpZWxkVmFsaWRhdGlvblJlc3VsdCkgPT4ge1xuICAgICAgZGlzcGF0Y2gobWVtYmVyRmllbGRDaGFuZ2VDb21wbGV0ZWQoZmllbGRWYWxpZGF0aW9uUmVzdWx0LCB2YWx1ZSkpO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBNZW1iZXJGaWVsZENoYW5nZVBheWxvYWQge1xuICBmaWVsZFZhbGlkYXRpb25SZXN1bHQ6IEZpZWxkVmFsaWRhdGlvblJlc3VsdDtcbiAgdmFsdWU6IGFueTtcbn1cblxuY29uc3QgbWVtYmVyRmllbGRDaGFuZ2VDb21wbGV0ZWQgPSAoZmllbGRWYWxpZGF0aW9uUmVzdWx0OiBGaWVsZFZhbGlkYXRpb25SZXN1bHQsIHZhbHVlOiBhbnkpID0+ICh7XG4gIHR5cGU6IGFjdGlvblR5cGVzLlVQREFURV9NRU1CRVJfRklFTEQsXG4gIHBheWxvYWQ6IHtcbiAgICBmaWVsZFZhbGlkYXRpb25SZXN1bHQsXG4gICAgdmFsdWUsXG4gIH0gYXMgTWVtYmVyRmllbGRDaGFuZ2VQYXlsb2FkLFxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21lbWJlci9hY3Rpb25zL21lbWJlckZpZWxkQ2hhbmdlLnRzIiwiaW1wb3J0IHsgRm9ybVZhbGlkYXRpb25SZXN1bHQgfSBmcm9tICdsYy1mb3JtLXZhbGlkYXRpb24nO1xuaW1wb3J0ICogYXMgdG9hc3RyIGZyb20gJ3RvYXN0cic7XG5pbXBvcnQgeyBoYXNoSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgeyBhY3Rpb25UeXBlcyB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jb25zdGFudHMvYWN0aW9uVHlwZXMnO1xuaW1wb3J0IHsgTWVtYmVyRW50aXR5IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwnO1xuaW1wb3J0IHsgbWVtYmVyQVBJIH0gZnJvbSAnLi4vLi4vLi4vYXBpL21lbWJlcic7XG5pbXBvcnQgeyBtZW1iZXJGb3JtVmFsaWRhdGlvbiB9IGZyb20gJy4uL21lbWJlckZvcm1WYWxpZGF0aW9uJztcblxuZXhwb3J0IGNvbnN0IHNhdmVNZW1iZXJBY3Rpb24gPSAobWVtYmVyOiBNZW1iZXJFbnRpdHkpID0+IChkaXNwYXRjaCkgPT4ge1xuICBtZW1iZXJGb3JtVmFsaWRhdGlvbi52YWxpZGF0ZUZvcm0obWVtYmVyKVxuICAgIC50aGVuKChmb3JtVmFsaWRhdGlvblJlc3VsdCkgPT4ge1xuICAgICAgaWYgKGZvcm1WYWxpZGF0aW9uUmVzdWx0LnN1Y2NlZWRlZCkge1xuICAgICAgICBzYXZlTWVtYmVyKG1lbWJlcik7XG4gICAgICB9XG4gICAgICBkaXNwYXRjaChzYXZlTWVtYmVyQWN0aW9uQ29tcGxldGVkKGZvcm1WYWxpZGF0aW9uUmVzdWx0KSk7XG4gICAgfSk7XG59O1xuXG5jb25zdCBzYXZlTWVtYmVyID0gKG1lbWJlcjogTWVtYmVyRW50aXR5KSA9PiB7XG4gIG1lbWJlckFQSS5zYXZlTWVtYmVyKG1lbWJlcilcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICB0b2FzdHIuc3VjY2VzcygnTWVtYmVyIHNhdmVkLicpO1xuICAgICAgaGFzaEhpc3RvcnkuZ29CYWNrKCk7XG4gICAgfSlcbiAgICAuY2F0Y2godG9hc3RyLmVycm9yKTtcbn07XG5cbmNvbnN0IHNhdmVNZW1iZXJBY3Rpb25Db21wbGV0ZWQgPSAoZm9ybVZhbGlkYXRpb25SZXN1bHQ6IEZvcm1WYWxpZGF0aW9uUmVzdWx0KSA9PiAoe1xuICB0eXBlOiBhY3Rpb25UeXBlcy5TQVZFX01FTUJFUixcbiAgcGF5bG9hZDogZm9ybVZhbGlkYXRpb25SZXN1bHQsXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbWVtYmVyL2FjdGlvbnMvc2F2ZU1lbWJlci50cyIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IE1lbWJlckVudGl0eSwgTWVtYmVyRXJyb3JzIH0gZnJvbSAnLi4vLi4vbW9kZWwnO1xuaW1wb3J0IHsgSW5wdXQsIEJ1dHRvbiB9IGZyb20gJy4uLy4uL2NvbW1vbi9jb21wb25lbnRzL2Zvcm0nO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBtZW1iZXI6IE1lbWJlckVudGl0eTtcbiAgbWVtYmVyRXJyb3JzOiBNZW1iZXJFcnJvcnM7XG4gIG9uQ2hhbmdlOiAoZmllbGROYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7XG4gIG9uU2F2ZTogKCkgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IE1lbWJlckZvcm06IFJlYWN0LlN0YXRlbGVzc0NvbXBvbmVudDxQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Zm9ybT5cbiAgICAgIDxoMT5NYW5hZ2UgbWVtYmVyPC9oMT5cblxuICAgICAgPElucHV0XG4gICAgICAgIG5hbWU9XCJsb2dpblwiXG4gICAgICAgIGxhYmVsPVwiTG9naW5cIlxuICAgICAgICB2YWx1ZT17cHJvcHMubWVtYmVyLnRpdGxlfVxuICAgICAgICBvbkNoYW5nZT17cHJvcHMub25DaGFuZ2V9XG4gICAgICAgIGVycm9yPXtcbiAgICAgICAgICBwcm9wcy5tZW1iZXJFcnJvcnMubG9naW4uc3VjY2VlZGVkID9cbiAgICAgICAgICAgICcnIDpcbiAgICAgICAgICAgIHByb3BzLm1lbWJlckVycm9ycy5sb2dpbi5lcnJvck1lc3NhZ2VcbiAgICAgICAgfVxuICAgICAgLz5cblxuICAgICAgPElucHV0XG4gICAgICAgIG5hbWU9XCJhdmF0YXJfdXJsXCJcbiAgICAgICAgbGFiZWw9XCJBdmF0YXIgVXJsXCJcbiAgICAgICAgdmFsdWU9e3Byb3BzLm1lbWJlci5jb250ZW50fVxuICAgICAgICBvbkNoYW5nZT17cHJvcHMub25DaGFuZ2V9XG4gICAgICAvPlxuXG4gICAgICA8QnV0dG9uXG4gICAgICAgIGxhYmVsPVwiU2F2ZVwiXG4gICAgICAgIGNsYXNzTmFtZT1cImJ0biBibHVlIGxpZ2h0ZW4tMVwiXG4gICAgICAgIG9uQ2xpY2s9e3Byb3BzLm9uU2F2ZX1cbiAgICAgIC8+XG4gICAgPC9mb3JtPlxuICApO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbWVtYmVyL21lbWJlckZvcm0udHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTWVtYmVyRW50aXR5LCBNZW1iZXJFcnJvcnMgfSBmcm9tICcuLi8uLi9tb2RlbCc7XG5pbXBvcnQgeyBNZW1iZXJGb3JtIH0gZnJvbSAnLi9tZW1iZXJGb3JtJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgbWVtYmVySWQ6IG51bWJlcjtcbiAgbWVtYmVyOiBNZW1iZXJFbnRpdHk7XG4gIG1lbWJlckVycm9yczogTWVtYmVyRXJyb3JzO1xuICBmZXRjaE1lbWJlckJ5SWQ6IChpZDogbnVtYmVyKSA9PiB2b2lkO1xuICBvbkNoYW5nZTogKG1lbWJlcjogTWVtYmVyRW50aXR5LCBmaWVsZE5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZykgPT4gdm9pZDtcbiAgb25TYXZlOiAobWVtYmVyOiBNZW1iZXJFbnRpdHkpID0+IHZvaWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBNZW1iZXJQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCB7fT4ge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uU2F2ZSA9IHRoaXMub25TYXZlLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLmZldGNoTWVtYmVyQnlJZCh0aGlzLnByb3BzLm1lbWJlcklkKTtcbiAgfVxuXG4gIHByaXZhdGUgb25DaGFuZ2UoZmllbGROYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMucHJvcHMubWVtYmVyLCBmaWVsZE5hbWUsIHZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgb25TYXZlKCkge1xuICAgIHRoaXMucHJvcHMub25TYXZlKHRoaXMucHJvcHMubWVtYmVyKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPE1lbWJlckZvcm1cbiAgICAgICAgbWVtYmVyPXt0aGlzLnByb3BzLm1lbWJlcn1cbiAgICAgICAgbWVtYmVyRXJyb3JzPXt0aGlzLnByb3BzLm1lbWJlckVycm9yc31cbiAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9XG4gICAgICAgIG9uU2F2ZT17dGhpcy5vblNhdmV9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbWVtYmVyL3BhZ2UudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMnO1xuaW1wb3J0IHsgTWVtYmVyRW50aXR5IH0gZnJvbSAnLi4vLi4vbW9kZWwnO1xuaW1wb3J0IHsgZmV0Y2hNZW1iZXJCeUlkQWN0aW9uIH0gZnJvbSAnLi9hY3Rpb25zL2ZldGNoTWVtYmVyQnlJZCc7XG5pbXBvcnQgeyBtZW1iZXJGaWVsZENoYW5nZUFjdGlvbiB9IGZyb20gJy4vYWN0aW9ucy9tZW1iZXJGaWVsZENoYW5nZSc7XG5pbXBvcnQgeyBzYXZlTWVtYmVyQWN0aW9uIH0gZnJvbSAnLi9hY3Rpb25zL3NhdmVNZW1iZXInO1xuaW1wb3J0IHsgTWVtYmVyUGFnZSB9IGZyb20gJy4vcGFnZSc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogU3RhdGUsIG93blByb3BzOiBhbnkpID0+ICh7XG4gIG1lbWJlcklkOiBOdW1iZXIob3duUHJvcHMucGFyYW1zLmlkKSB8fCAwLFxuICBtZW1iZXI6IHN0YXRlLm1lbWJlcixcbiAgbWVtYmVyRXJyb3JzOiBzdGF0ZS5tZW1iZXJFcnJvcnMsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKGRpc3BhdGNoKSA9PiAoe1xuICBmZXRjaE1lbWJlckJ5SWQ6IChpZDogbnVtYmVyKSA9PiBkaXNwYXRjaChmZXRjaE1lbWJlckJ5SWRBY3Rpb24oaWQpKSxcbiAgb25DaGFuZ2U6IChtZW1iZXI6IE1lbWJlckVudGl0eSwgZmllbGROYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpID0+XG4gICAgZGlzcGF0Y2gobWVtYmVyRmllbGRDaGFuZ2VBY3Rpb24obWVtYmVyLCBmaWVsZE5hbWUsIHZhbHVlKSksXG4gIG9uU2F2ZTogKG1lbWJlcjogTWVtYmVyRW50aXR5KSA9PiBkaXNwYXRjaChzYXZlTWVtYmVyQWN0aW9uKG1lbWJlcikpLFxufSk7XG5cbmV4cG9ydCBjb25zdCBNZW1iZXJQYWdlQ29udGFpbmVyID0gY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICBtYXBEaXNwYXRjaFRvUHJvcHMsXG4pKE1lbWJlclBhZ2UpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9tZW1iZXIvcGFnZUNvbnRhaW5lci50c3giLCJpbXBvcnQgeyBhY3Rpb25UeXBlcyB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jb25zdGFudHMvYWN0aW9uVHlwZXMnO1xuaW1wb3J0IHsgTWVtYmVyRW50aXR5LCBNZW1iZXJFbnRpdHlDbG9uZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsJztcbmltcG9ydCB7IG1lbWJlckFQSSB9IGZyb20gJy4uLy4uLy4uL2FwaS9tZW1iZXInO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hNZW1iZXJzQWN0aW9uID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIG1lbWJlckFQSS5mZXRjaE1lbWJlcnMoKVxuICAgIC50aGVuKChtZW1iZXJzKSA9PiB7XG4gICAgICBkaXNwYXRjaChmZXRjaE1lbWJlcnNDb21wbGV0ZWQobWVtYmVycykpO1xuICAgIH0pO1xufTtcblxuY29uc3QgZmV0Y2hNZW1iZXJzQ29tcGxldGVkID0gKG1lbWJlcnM6IE1lbWJlckVudGl0eUNsb25lW10pID0+ICh7XG4gIHR5cGU6IGFjdGlvblR5cGVzLkZFVENIX01FTUJFUlNfQ09NUExFVEVELFxuICBwYXlsb2FkOiBtZW1iZXJzLFxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21lbWJlcnMvYWN0aW9ucy9mZXRjaE1lbWJlcnMudHMiLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBjb25zdCBNZW1iZXJIZWFkZXI6IFJlYWN0LlN0YXRlbGVzc0NvbXBvbmVudDx7fT4gPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHRyPlxuICAgICAgPHRoPkF2YXRhcjwvdGg+XG4gICAgICA8dGg+SWQ8L3RoPlxuICAgICAgPHRoPk5hbWU8L3RoPlxuICAgIDwvdHI+XG4gICk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9tZW1iZXJzL21lbWJlckhlYWRlci50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IE1lbWJlckVudGl0eSB9IGZyb20gJy4uLy4uL21vZGVsJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgbWVtYmVyOiBNZW1iZXJFbnRpdHk7XG59XG5cbmV4cG9ydCBjb25zdCBNZW1iZXJSb3c6IFJlYWN0LlN0YXRlbGVzc0NvbXBvbmVudDxQcm9wcz4gPSAoeyBtZW1iZXIgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDx0cj5cbiAgICAgIDx0ZD5cbiAgICAgICAgey8qIDxpbWcgc3JjPXttZW1iZXIuYXZhdGFyX3VybH0gY2xhc3NOYW1lPVwiYXZhdGFyXCIgLz4gKi99XG4gICAgICA8L3RkPlxuICAgICAgPHRkPlxuICAgICAgICA8TGlua1xuICAgICAgICAgIHRvPXtgL21lbWJlci8ke21lbWJlci5pZH1gfVxuICAgICAgICA+XG4gICAgICAgICAge21lbWJlci5pZH1cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC90ZD5cbiAgICAgIDx0ZD5cbiAgICAgICAgPHNwYW4+e21lbWJlci50aXRsZX08L3NwYW4+XG4gICAgICA8L3RkPlxuICAgIDwvdHI+XG4gICk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9tZW1iZXJzL21lbWJlclJvdy50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IE1lbWJlckVudGl0eSB9IGZyb20gJy4uLy4uL21vZGVsJztcbmltcG9ydCB7IE1lbWJlckhlYWRlciB9IGZyb20gJy4vbWVtYmVySGVhZGVyJztcbmltcG9ydCB7IE1lbWJlclJvdyB9IGZyb20gJy4vbWVtYmVyUm93JztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgbWVtYmVyczogTWVtYmVyRW50aXR5W107XG4gIGZldGNoTWVtYmVycygpOiB2b2lkO1xufVxuXG5leHBvcnQgY2xhc3MgTWVtYmVyc1BhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMse30+IHtcbiAgcHVibGljIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMuZmV0Y2hNZW1iZXJzKCk7XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8aDI+IE1lbWJlcnMgUGFnZTwvaDI+XG4gICAgICAgIDxMaW5rIHRvPVwiL21lbWJlclwiPk5ldyBNZW1iZXI8L0xpbms+XG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJoaWdobGlnaHQgaGlnaGxpZ2h0XCI+XG4gICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgPE1lbWJlckhlYWRlciAvPlxuICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aGlzLnByb3BzLm1lbWJlcnMubWFwKChtZW1iZXIpID0+XG4gICAgICAgICAgICAgICAgPE1lbWJlclJvd1xuICAgICAgICAgICAgICAgICAga2V5PXttZW1iZXIuaWR9XG4gICAgICAgICAgICAgICAgICBtZW1iZXI9e21lbWJlcn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21lbWJlcnMvcGFnZS50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgU3RhdGUgfSBmcm9tICcuLi8uLi9yZWR1Y2Vycyc7XG5pbXBvcnQgeyBmZXRjaE1lbWJlcnNBY3Rpb24gfSBmcm9tICcuL2FjdGlvbnMvZmV0Y2hNZW1iZXJzJztcbmltcG9ydCB7IE1lbWJlcnNQYWdlIH0gZnJvbSAnLi9wYWdlJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlOiBTdGF0ZSkgPT4gKHtcbiAgbWVtYmVyczogc3RhdGUubWVtYmVycyxcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gIGZldGNoTWVtYmVyczogKCkgPT4gZGlzcGF0Y2goZmV0Y2hNZW1iZXJzQWN0aW9uKCkpLFxufSk7XG5cbmV4cG9ydCBjb25zdCBNZW1iZXJzUGFnZUNvbnRhaW5lciA9IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzLFxuKShNZW1iZXJzUGFnZSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL21lbWJlcnMvcGFnZUNvbnRhaW5lci50c3giLCJpbXBvcnQgeyBhY3Rpb25UeXBlcyB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9jb25zdGFudHMvYWN0aW9uVHlwZXMnO1xuaW1wb3J0IHsgTm90ZUVudGl0eSB9IGZyb20gJy4uLy4uLy4uL21vZGVsJztcbmltcG9ydCB7IG5vdGVBUEkgfSBmcm9tICcuLi8uLi8uLi9hcGkvbm90ZSc7XG5cbmV4cG9ydCBjb25zdCBmZXRjaE5vdGVzQWN0aW9uID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIG5vdGVBUEkuZmV0Y2hOb3RlcygpXG4gICAgLnRoZW4oKG5vdGVzKSA9PiB7XG4gICAgICBkaXNwYXRjaChmZXRjaE5vdGVzQ29tcGxldGVkKG5vdGVzKSk7XG4gICAgfSk7XG59O1xuXG5jb25zdCBmZXRjaE5vdGVzQ29tcGxldGVkID0gKG5vdGVzOiBOb3RlRW50aXR5W10pID0+ICh7XG4gIHR5cGU6IGFjdGlvblR5cGVzLkZFVENIX05PVEVTX0NPTVBMRVRFRCxcbiAgcGF5bG9hZDogbm90ZXMsXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbm90ZXMvYWN0aW9ucy9mZXRjaE5vdGVzLnRzIiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgTm90ZUhlYWRlcjogUmVhY3QuU3RhdGVsZXNzQ29tcG9uZW50PHt9PiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8dHI+XG4gICAgICA8dGg+VGl0bGU8L3RoPlxuICAgICAgPHRoPkNvbnRlbnQ8L3RoPlxuICAgIDwvdHI+XG4gICk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9ub3Rlcy9ub3RlSGVhZGVyLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHsgTm90ZUVudGl0eSB9IGZyb20gJy4uLy4uL21vZGVsJztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgbm90ZTogTm90ZUVudGl0eTtcbn1cblxuZXhwb3J0IGNvbnN0IE5vdGVSb3c6IFJlYWN0LlN0YXRlbGVzc0NvbXBvbmVudDxQcm9wcz4gPSAoeyBub3RlIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8dHI+XG4gICAgICA8dGQ+XG4gICAgICAgIDxzcGFuPntub3RlLnRpdGxlfTwvc3Bhbj5cbiAgICAgIDwvdGQ+XG4gICAgICA8dGQ+XG4gICAgICAgIDxzcGFuPntub3RlLmNvbnRlbnR9PC9zcGFuPlxuICAgICAgPC90ZD5cbiAgICA8L3RyPlxuICApO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvbm90ZXMvbm90ZVJvdy50c3giLCJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IE5vdGVFbnRpdHkgfSBmcm9tICcuLi8uLi9tb2RlbCc7XG5pbXBvcnQgeyBOb3RlUm93IH0gZnJvbSBcIi4vbm90ZVJvd1wiO1xuaW1wb3J0IHsgTm90ZUhlYWRlciB9IGZyb20gXCIuL25vdGVIZWFkZXJcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgbm90ZXM6IE5vdGVFbnRpdHlbXTtcbiAgZmV0Y2hOb3RlcygpOiB2b2lkO1xufVxuXG5leHBvcnQgY2xhc3MgTm90ZXNQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLHt9PiB7XG4gIHB1YmxpYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnByb3BzLmZldGNoTm90ZXMoKTtcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxoMj4gTm90ZXMgUGFnZTwvaDI+XG4gICAgICAgIHsvKiA8TGluayB0bz1cIi9tZW1iZXJcIj5OZXcgTWVtYmVyPC9MaW5rPiAqL31cbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cImhpZ2hsaWdodCBoaWdobGlnaHRcIj5cbiAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICA8Tm90ZUhlYWRlciAvPlxuICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aGlzLnByb3BzLm5vdGVzLm1hcCgobm90ZSkgPT5cbiAgICAgICAgICAgICAgICA8Tm90ZVJvd1xuICAgICAgICAgICAgICAgICAga2V5PXtub3RlLmlkfVxuICAgICAgICAgICAgICAgICAgbm90ZT17bm90ZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL25vdGVzL3BhZ2UudHN4IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IFN0YXRlIH0gZnJvbSAnLi4vLi4vcmVkdWNlcnMnO1xuaW1wb3J0IHsgTm90ZXNQYWdlIH0gZnJvbSAnLi9wYWdlJztcbmltcG9ydCB7IGZldGNoTm90ZXNBY3Rpb24gfSBmcm9tICcuL2FjdGlvbnMvZmV0Y2hOb3Rlcyc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZTogU3RhdGUpID0+ICh7XG4gIG5vdGVzOiBzdGF0ZS5ub3Rlcyxcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSAoZGlzcGF0Y2gpID0+ICh7XG4gIGZldGNoTm90ZXM6ICgpID0+IGRpc3BhdGNoKGZldGNoTm90ZXNBY3Rpb24oKSksXG59KTtcblxuZXhwb3J0IGNvbnN0IE5vdGVzUGFnZUNvbnRhaW5lciA9IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzLFxuKShOb3Rlc1BhZ2UpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9ub3Rlcy9wYWdlQ29udGFpbmVyLnRzeCIsImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBBcHBSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcic7XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPEFwcFJvdXRlciAvPlxuICAsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vaW5kZXgudHN4IiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgTWVtYmVyRW50aXR5LCBNZW1iZXJFcnJvcnMsIE5vdGVFbnRpdHkgfSBmcm9tICcuLi9tb2RlbCc7XG5pbXBvcnQgeyBtZW1iZXJzUmVkdWNlciB9IGZyb20gJy4vbWVtYmVycyc7XG5pbXBvcnQgeyBtZW1iZXJSZWR1Y2VyIH0gZnJvbSAnLi9tZW1iZXInO1xuaW1wb3J0IHsgbWVtYmVyRXJyb3JzUmVkdWNlciB9IGZyb20gJy4vbWVtYmVyRXJyb3JzJztcbmltcG9ydCB7IG5vdGVzUmVkdWNlciB9IGZyb20gJy4vbm90ZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRlIHtcbiAgbWVtYmVyczogTWVtYmVyRW50aXR5W107XG4gIG1lbWJlcjogTWVtYmVyRW50aXR5O1xuICBtZW1iZXJFcnJvcnM6IE1lbWJlckVycm9ycztcbiAgbm90ZXM6IE5vdGVFbnRpdHlbXTtcbn07XG5cbmV4cG9ydCBjb25zdCBzdGF0ZSA9IGNvbWJpbmVSZWR1Y2VyczxTdGF0ZT4oe1xuICBtZW1iZXJzOiBtZW1iZXJzUmVkdWNlcixcbiAgbWVtYmVyOiBtZW1iZXJSZWR1Y2VyLFxuICBtZW1iZXJFcnJvcnM6IG1lbWJlckVycm9yc1JlZHVjZXIsXG4gIG5vdGVzOiBub3Rlc1JlZHVjZXIsXG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlZHVjZXJzL2luZGV4LnRzIiwiaW1wb3J0IHsgYWN0aW9uVHlwZXMgfSBmcm9tICcuLi9jb21tb24vY29uc3RhbnRzL2FjdGlvblR5cGVzJztcbmltcG9ydCB7IE1lbWJlckVudGl0eSB9IGZyb20gJy4uL21vZGVsJztcbmltcG9ydCB7IE1lbWJlckZpZWxkQ2hhbmdlUGF5bG9hZCB9IGZyb20gJy4uL2NvbXBvbmVudHMvbWVtYmVyL2FjdGlvbnMvbWVtYmVyRmllbGRDaGFuZ2UnO1xuXG5jb25zdCBjcmVhdGVFbXB0eU1lbWJlciA9ICgpOiBNZW1iZXJFbnRpdHkgPT4gKHtcbiAgaWQ6IC0xLFxuICAvLyBsb2dpbjogJycsXG4gIC8vIGF2YXRhcl91cmw6ICcnLFxuICB0aXRsZTogJycsXG4gIGNvbnRlbnQ6ICcnLFxufSk7XG5cbmV4cG9ydCBjb25zdCBtZW1iZXJSZWR1Y2VyID0gKHN0YXRlID0gY3JlYXRlRW1wdHlNZW1iZXIoKSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGFjdGlvblR5cGVzLkZFVENIX01FTUJFUl9CWV9JRF9DT01QTEVURUQ6XG4gICAgICByZXR1cm4gaGFuZGxlRmV0Y2hNZW1iZXJCeUlkQ29tcGxldGVkKHN0YXRlLCBhY3Rpb24ucGF5bG9hZCk7XG4gICAgY2FzZSBhY3Rpb25UeXBlcy5VUERBVEVfTUVNQkVSX0ZJRUxEOlxuICAgICAgcmV0dXJuIGhhbmRsZVVwZGF0ZU1lbWJlckZpZWxkKHN0YXRlLCBhY3Rpb24ucGF5bG9hZCk7XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59O1xuXG5jb25zdCBoYW5kbGVGZXRjaE1lbWJlckJ5SWRDb21wbGV0ZWQgPSAoc3RhdGU6IE1lbWJlckVudGl0eSwgcGF5bG9hZDogTWVtYmVyRW50aXR5KTogTWVtYmVyRW50aXR5ID0+IHtcbiAgcmV0dXJuIHBheWxvYWQ7XG59O1xuXG5jb25zdCBoYW5kbGVVcGRhdGVNZW1iZXJGaWVsZCA9IChzdGF0ZTogTWVtYmVyRW50aXR5LCBwYXlsb2FkOiBNZW1iZXJGaWVsZENoYW5nZVBheWxvYWQpOiBNZW1iZXJFbnRpdHkgPT4ge1xuICByZXR1cm4ge1xuICAgIC4uLnN0YXRlLFxuICAgIFtwYXlsb2FkLmZpZWxkVmFsaWRhdGlvblJlc3VsdC5rZXldOiBwYXlsb2FkLnZhbHVlLFxuICB9O1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlZHVjZXJzL21lbWJlci50cyIsImltcG9ydCB7IEZpZWxkVmFsaWRhdGlvblJlc3VsdCwgRm9ybVZhbGlkYXRpb25SZXN1bHQgfSBmcm9tICdsYy1mb3JtLXZhbGlkYXRpb24nO1xuaW1wb3J0IHsgYWN0aW9uVHlwZXMgfSBmcm9tICcuLi9jb21tb24vY29uc3RhbnRzL2FjdGlvblR5cGVzJztcbmltcG9ydCB7IE1lbWJlckVycm9ycyB9IGZyb20gJy4uL21vZGVsJztcbmltcG9ydCB7IE1lbWJlckZpZWxkQ2hhbmdlUGF5bG9hZCB9IGZyb20gJy4uL2NvbXBvbmVudHMvbWVtYmVyL2FjdGlvbnMvbWVtYmVyRmllbGRDaGFuZ2UnO1xuXG5jb25zdCBjcmVhdGVFbXB0eU1lbWJlckVycm9ycyA9ICgpOiBNZW1iZXJFcnJvcnMgPT4gKHtcbiAgbG9naW46IG5ldyBGaWVsZFZhbGlkYXRpb25SZXN1bHQoKSxcbn0pO1xuXG5leHBvcnQgY29uc3QgbWVtYmVyRXJyb3JzUmVkdWNlciA9IChzdGF0ZSA9IGNyZWF0ZUVtcHR5TWVtYmVyRXJyb3JzKCksIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBhY3Rpb25UeXBlcy5GRVRDSF9NRU1CRVJTX0NPTVBMRVRFRDpcbiAgICAgIHJldHVybiBoYW5kbGVGZXRjaE1lbWJlcnNDb21wbGV0ZWQoc3RhdGUsIGFjdGlvbi5wYXlsb2FkKTtcbiAgICBjYXNlIGFjdGlvblR5cGVzLlVQREFURV9NRU1CRVJfRklFTEQ6XG4gICAgICByZXR1cm4gaGFuZGxlVXBkYXRlTWVtYmVyRmllbGQoc3RhdGUsIGFjdGlvbi5wYXlsb2FkKTtcbiAgICBjYXNlIGFjdGlvblR5cGVzLlNBVkVfTUVNQkVSOlxuICAgICAgcmV0dXJuIGhhbmRsZVNhdmVNZW1iZXIoc3RhdGUsIGFjdGlvbi5wYXlsb2FkKTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn07XG5cbmNvbnN0IGhhbmRsZUZldGNoTWVtYmVyc0NvbXBsZXRlZCA9IChzdGF0ZTogTWVtYmVyRXJyb3JzLCBwYXlsb2FkKSA9PiB7XG4gIHJldHVybiBjcmVhdGVFbXB0eU1lbWJlckVycm9ycygpO1xufTtcblxuY29uc3QgaGFuZGxlVXBkYXRlTWVtYmVyRmllbGQgPSAoc3RhdGU6IE1lbWJlckVycm9ycywgcGF5bG9hZDogTWVtYmVyRmllbGRDaGFuZ2VQYXlsb2FkKTogTWVtYmVyRXJyb3JzID0+IHtcbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBbcGF5bG9hZC5maWVsZFZhbGlkYXRpb25SZXN1bHQua2V5XTogcGF5bG9hZC5maWVsZFZhbGlkYXRpb25SZXN1bHQsXG4gIH07XG59O1xuXG5jb25zdCBoYW5kbGVTYXZlTWVtYmVyID0gKHN0YXRlOiBNZW1iZXJFcnJvcnMsIHBheWxvYWQ6IEZvcm1WYWxpZGF0aW9uUmVzdWx0KTogTWVtYmVyRXJyb3JzID0+IHtcbiAgY29uc3QgbmV3TWVtYmVyRXJyb3JzID0geyAuLi5zdGF0ZSB9O1xuXG4gIHJldHVybiBwYXlsb2FkLmZpZWxkRXJyb3JzLnJlZHVjZSgobWVtYmVyRXJyb3JzLCBmaWVsZFZhbGlkYXRpb25SZXN1bHQpID0+IHtcbiAgICBtZW1iZXJFcnJvcnNbZmllbGRWYWxpZGF0aW9uUmVzdWx0LmtleV0gPSBmaWVsZFZhbGlkYXRpb25SZXN1bHQ7XG4gICAgcmV0dXJuIG1lbWJlckVycm9ycztcbiAgfSwgbmV3TWVtYmVyRXJyb3JzKTtcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWR1Y2Vycy9tZW1iZXJFcnJvcnMudHMiLCJpbXBvcnQgeyBhY3Rpb25UeXBlcyB9IGZyb20gJy4uL2NvbW1vbi9jb25zdGFudHMvYWN0aW9uVHlwZXMnO1xuaW1wb3J0IHsgTWVtYmVyRW50aXR5IH0gZnJvbSAnLi4vbW9kZWwnO1xuXG5leHBvcnQgY29uc3QgbWVtYmVyc1JlZHVjZXIgPSAoc3RhdGU6IE1lbWJlckVudGl0eVtdID0gW10sIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBhY3Rpb25UeXBlcy5GRVRDSF9NRU1CRVJTX0NPTVBMRVRFRDpcbiAgICAgIHJldHVybiBoYW5kbGVGZXRjaE1lbWJlcnNDb21wbGV0ZWQoc3RhdGUsIGFjdGlvbi5wYXlsb2FkKTtcbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn07XG5cbmNvbnN0IGhhbmRsZUZldGNoTWVtYmVyc0NvbXBsZXRlZCA9IChzdGF0ZTogTWVtYmVyRW50aXR5W10sIHBheWxvYWQ6IE1lbWJlckVudGl0eVtdKSA9PiB7XG4gIHJldHVybiBwYXlsb2FkO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3JlZHVjZXJzL21lbWJlcnMudHMiLCJpbXBvcnQgeyBhY3Rpb25UeXBlcyB9IGZyb20gJy4uL2NvbW1vbi9jb25zdGFudHMvYWN0aW9uVHlwZXMnO1xuaW1wb3J0IHsgTm90ZUVudGl0eSB9IGZyb20gJy4uL21vZGVsJztcblxuZXhwb3J0IGNvbnN0IG5vdGVzUmVkdWNlciA9IChzdGF0ZTogTm90ZUVudGl0eVtdID0gW10sIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBhY3Rpb25UeXBlcy5GRVRDSF9OT1RFU19DT01QTEVURUQ6XG4gICAgICByZXR1cm4gaGFuZGxlRmV0Y2hOb3Rlc0NvbXBsZXRlZChzdGF0ZSwgYWN0aW9uLnBheWxvYWQpO1xuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufTtcblxuY29uc3QgaGFuZGxlRmV0Y2hOb3Rlc0NvbXBsZXRlZCA9IChzdGF0ZTogTm90ZUVudGl0eVtdLCBwYXlsb2FkOiBOb3RlRW50aXR5W10pID0+IHtcbiAgcmV0dXJuIHBheWxvYWQ7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdWNlcnMvbm90ZXMudHMiLCJpbXBvcnQgeyBTdG9yZSwgY3JlYXRlU3RvcmUsIGNvbXBvc2UsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCByZWR1eFRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcbmltcG9ydCB7IHN0YXRlLCBTdGF0ZSB9IGZyb20gJy4vcmVkdWNlcnMnO1xuXG5leHBvcnQgY29uc3Qgc3RvcmU6IFN0b3JlPFN0YXRlPiA9IGNyZWF0ZVN0b3JlKFxuICBzdGF0ZSxcbiAgY29tcG9zZShcbiAgICBhcHBseU1pZGRsZXdhcmUocmVkdXhUaHVuayksXG4gIClcbik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zdG9yZS50cyJdLCJzb3VyY2VSb290IjoiIn0=