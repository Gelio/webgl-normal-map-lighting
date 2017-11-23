/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NAMED_TAG = "named";
exports.NAME_TAG = "name";
exports.UNMANAGED_TAG = "unmanaged";
exports.OPTIONAL_TAG = "optional";
exports.INJECT_TAG = "inject";
exports.MULTI_INJECT_TAG = "multi_inject";
exports.TAGGED = "inversify:tagged";
exports.TAGGED_PROP = "inversify:tagged_props";
exports.PARAM_TYPES = "inversify:paramtypes";
exports.DESIGN_PARAM_TYPES = "design:paramtypes";
exports.POST_CONSTRUCT = "post_construct";


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DUPLICATED_INJECTABLE_DECORATOR = "Cannot apply @injectable decorator multiple times.";
exports.DUPLICATED_METADATA = "Metadata key was used more than once in a parameter:";
exports.NULL_ARGUMENT = "NULL argument";
exports.KEY_NOT_FOUND = "Key Not Found";
exports.AMBIGUOUS_MATCH = "Ambiguous match found for serviceIdentifier:";
exports.CANNOT_UNBIND = "Could not unbind serviceIdentifier:";
exports.NOT_REGISTERED = "No matching bindings found for serviceIdentifier:";
exports.MISSING_INJECTABLE_ANNOTATION = "Missing required @injectable annotation in:";
exports.MISSING_INJECT_ANNOTATION = "Missing required @inject or @multiInject annotation in:";
exports.CIRCULAR_DEPENDENCY = "Circular dependency found:";
exports.NOT_IMPLEMENTED = "Sorry, this feature is not fully implemented yet.";
exports.INVALID_BINDING_TYPE = "Invalid binding type:";
exports.NO_MORE_SNAPSHOTS_AVAILABLE = "No snapshot available to restore.";
exports.INVALID_MIDDLEWARE_RETURN = "Invalid return type in middleware. Middleware must return!";
exports.INVALID_FUNCTION_BINDING = "Value provided to function binding must be a function!";
exports.INVALID_TO_SELF_VALUE = "The toSelf function can only be applied when a constructor is " +
    "used as service identifier";
exports.INVALID_DECORATOR_OPERATION = "The @inject @multiInject @tagged and @named decorators " +
    "must be applied to the parameters of a class constructor or a class property.";
exports.ARGUMENTS_LENGTH_MISMATCH_1 = "The number of constructor arguments in the derived class ";
exports.ARGUMENTS_LENGTH_MISMATCH_2 = " must be >= than the number of constructor arguments of its base class.";
exports.CONTAINER_OPTIONS_MUST_BE_AN_OBJECT = "Invalid Container constructor argument. Container options " +
    "must be an object.";
exports.CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE = "Invalid Container option. Default scope must " +
    "be a string ('singleton' or 'transient').";
exports.CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE = "Invalid Container option. Auto bind injectable must " +
    "be a boolean";
exports.MULTIPLE_POST_CONSTRUCT_METHODS = "Cannot apply @postConstruct decorator multiple times in the same class";
exports.POST_CONSTRUCT_ERROR = function () {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    return "@postConstruct error in class " + values[0] + ": " + values[1];
};
exports.CIRCULAR_DEPENDENCY_IN_FACTORY = function () {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    return "It looks like there is a circular dependency " +
        ("in one of the '" + values[0] + "' bindings. Please investigate bindings with") +
        ("service identifier '" + values[1] + "'.");
};
exports.STACK_OVERFLOW = "Maximum call stack size exceeded";


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var METADATA_KEY = __webpack_require__(0);
var Metadata = (function () {
    function Metadata(key, value) {
        this.key = key;
        this.value = value;
    }
    Metadata.prototype.toString = function () {
        if (this.key === METADATA_KEY.NAMED_TAG) {
            return "named: " + this.value.toString() + " ";
        }
        else {
            return "tagged: { key:" + this.key.toString() + ", value: " + this.value + " }";
        }
    };
    return Metadata;
}());
exports.Metadata = Metadata;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BindingScopeEnum = {
    Request: "Request",
    Singleton: "Singleton",
    Transient: "Transient"
};
exports.BindingScopeEnum = BindingScopeEnum;
var BindingTypeEnum = {
    ConstantValue: "ConstantValue",
    Constructor: "Constructor",
    DynamicValue: "DynamicValue",
    Factory: "Factory",
    Function: "Function",
    Instance: "Instance",
    Invalid: "Invalid",
    Provider: "Provider"
};
exports.BindingTypeEnum = BindingTypeEnum;
var TargetTypeEnum = {
    ClassProperty: "ClassProperty",
    ConstructorArgument: "ConstructorArgument",
    Variable: "Variable"
};
exports.TargetTypeEnum = TargetTypeEnum;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var METADATA_KEY = __webpack_require__(0);
var ERROR_MSGS = __webpack_require__(1);
function tagParameter(annotationTarget, propertyName, parameterIndex, metadata) {
    var metadataKey = METADATA_KEY.TAGGED;
    _tagParameterOrProperty(metadataKey, annotationTarget, propertyName, metadata, parameterIndex);
}
exports.tagParameter = tagParameter;
function tagProperty(annotationTarget, propertyName, metadata) {
    var metadataKey = METADATA_KEY.TAGGED_PROP;
    _tagParameterOrProperty(metadataKey, annotationTarget.constructor, propertyName, metadata);
}
exports.tagProperty = tagProperty;
function _tagParameterOrProperty(metadataKey, annotationTarget, propertyName, metadata, parameterIndex) {
    var paramsOrPropertiesMetadata = {};
    var isParameterDecorator = (typeof parameterIndex === "number");
    var key = (parameterIndex !== undefined && isParameterDecorator) ? parameterIndex.toString() : propertyName;
    if (isParameterDecorator === true && propertyName !== undefined) {
        throw new Error(ERROR_MSGS.INVALID_DECORATOR_OPERATION);
    }
    if (Reflect.hasOwnMetadata(metadataKey, annotationTarget) === true) {
        paramsOrPropertiesMetadata = Reflect.getMetadata(metadataKey, annotationTarget);
    }
    var paramOrPropertyMetadata = paramsOrPropertiesMetadata[key];
    if (Array.isArray(paramOrPropertyMetadata) !== true) {
        paramOrPropertyMetadata = [];
    }
    else {
        for (var i = 0; i < paramOrPropertyMetadata.length; i++) {
            var m = paramOrPropertyMetadata[i];
            if (m.key === metadata.key) {
                throw new Error(ERROR_MSGS.DUPLICATED_METADATA + " " + m.key);
            }
        }
    }
    paramOrPropertyMetadata.push(metadata);
    paramsOrPropertiesMetadata[key] = paramOrPropertyMetadata;
    Reflect.defineMetadata(metadataKey, paramsOrPropertiesMetadata, annotationTarget);
}
function _decorate(decorators, target) {
    Reflect.decorate(decorators, target);
}
function _param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); };
}
function decorate(decorator, target, parameterIndex) {
    if (typeof parameterIndex === "number") {
        _decorate([_param(parameterIndex, decorator)], target);
    }
    else if (typeof parameterIndex === "string") {
        Reflect.decorate([decorator], target, parameterIndex);
    }
    else {
        _decorate([decorator], target);
    }
}
exports.decorate = decorate;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var container_1 = __webpack_require__(35);
exports.Container = container_1.Container;
var container_module_1 = __webpack_require__(51);
exports.ContainerModule = container_module_1.ContainerModule;
var injectable_1 = __webpack_require__(52);
exports.injectable = injectable_1.injectable;
var tagged_1 = __webpack_require__(53);
exports.tagged = tagged_1.tagged;
var named_1 = __webpack_require__(54);
exports.named = named_1.named;
var inject_1 = __webpack_require__(55);
exports.inject = inject_1.inject;
var optional_1 = __webpack_require__(56);
exports.optional = optional_1.optional;
var unmanaged_1 = __webpack_require__(57);
exports.unmanaged = unmanaged_1.unmanaged;
var multi_inject_1 = __webpack_require__(58);
exports.multiInject = multi_inject_1.multiInject;
var target_name_1 = __webpack_require__(59);
exports.targetName = target_name_1.targetName;
var post_construct_1 = __webpack_require__(60);
exports.postConstruct = post_construct_1.postConstruct;
var metadata_reader_1 = __webpack_require__(16);
exports.MetadataReader = metadata_reader_1.MetadataReader;
var guid_1 = __webpack_require__(6);
exports.guid = guid_1.guid;
var decorator_utils_1 = __webpack_require__(4);
exports.decorate = decorator_utils_1.decorate;
var constraint_helpers_1 = __webpack_require__(15);
exports.traverseAncerstors = constraint_helpers_1.traverseAncerstors;
exports.taggedConstraint = constraint_helpers_1.taggedConstraint;
exports.namedConstraint = constraint_helpers_1.namedConstraint;
exports.typeConstraint = constraint_helpers_1.typeConstraint;
var serialization_1 = __webpack_require__(7);
exports.getServiceIdentifierAsString = serialization_1.getServiceIdentifierAsString;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function guid() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    return s4() + s4() + "-" + s4() + "-" + s4() + "-" +
        s4() + "-" + s4() + s4() + s4();
}
exports.guid = guid;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ERROR_MSGS = __webpack_require__(1);
function getServiceIdentifierAsString(serviceIdentifier) {
    if (typeof serviceIdentifier === "function") {
        var _serviceIdentifier = serviceIdentifier;
        return _serviceIdentifier.name;
    }
    else if (typeof serviceIdentifier === "symbol") {
        return serviceIdentifier.toString();
    }
    else {
        var _serviceIdentifier = serviceIdentifier;
        return _serviceIdentifier;
    }
}
exports.getServiceIdentifierAsString = getServiceIdentifierAsString;
function listRegisteredBindingsForServiceIdentifier(container, serviceIdentifier, getBindings) {
    var registeredBindingsList = "";
    var registeredBindings = getBindings(container, serviceIdentifier);
    if (registeredBindings.length !== 0) {
        registeredBindingsList = "\nRegistered bindings:";
        registeredBindings.forEach(function (binding) {
            var name = "Object";
            if (binding.implementationType !== null) {
                name = getFunctionName(binding.implementationType);
            }
            registeredBindingsList = registeredBindingsList + "\n " + name;
            if (binding.constraint.metaData) {
                registeredBindingsList = registeredBindingsList + " - " + binding.constraint.metaData;
            }
        });
    }
    return registeredBindingsList;
}
exports.listRegisteredBindingsForServiceIdentifier = listRegisteredBindingsForServiceIdentifier;
function circularDependencyToException(request, previousServiceIdentifiers) {
    if (previousServiceIdentifiers === void 0) { previousServiceIdentifiers = []; }
    var parentServiceIdentifier = getServiceIdentifierAsString(request.serviceIdentifier);
    previousServiceIdentifiers.push(parentServiceIdentifier);
    request.childRequests.forEach(function (childRequest) {
        var childServiceIdentifier = getServiceIdentifierAsString(childRequest.serviceIdentifier);
        if (previousServiceIdentifiers.indexOf(childServiceIdentifier) === -1) {
            if (childRequest.childRequests.length > 0) {
                circularDependencyToException(childRequest, previousServiceIdentifiers);
            }
            else {
                previousServiceIdentifiers.push(childServiceIdentifier);
            }
        }
        else {
            previousServiceIdentifiers.push(childServiceIdentifier);
            var services = previousServiceIdentifiers.reduce(function (prev, curr) {
                return (prev !== "") ? prev + " -> " + curr : "" + curr;
            }, "");
            throw new Error(ERROR_MSGS.CIRCULAR_DEPENDENCY + " " + services);
        }
    });
}
exports.circularDependencyToException = circularDependencyToException;
function listMetadataForTarget(serviceIdentifierString, target) {
    if (target.isTagged() || target.isNamed()) {
        var m_1 = "";
        var namedTag = target.getNamedTag();
        var otherTags = target.getCustomTags();
        if (namedTag !== null) {
            m_1 += namedTag.toString() + "\n";
        }
        if (otherTags !== null) {
            otherTags.forEach(function (tag) {
                m_1 += tag.toString() + "\n";
            });
        }
        return " " + serviceIdentifierString + "\n " + serviceIdentifierString + " - " + m_1;
    }
    else {
        return " " + serviceIdentifierString;
    }
}
exports.listMetadataForTarget = listMetadataForTarget;
function getFunctionName(v) {
    if (v.name) {
        return v.name;
    }
    else {
        var name_1 = v.toString();
        var match = name_1.match(/^function\s*([^\s(]+)/);
        return match ? match[1] : "Anonymous function: " + name_1;
    }
}
exports.getFunctionName = getFunctionName;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var binding_on_syntax_1 = __webpack_require__(9);
var constraint_helpers_1 = __webpack_require__(15);
var BindingWhenSyntax = (function () {
    function BindingWhenSyntax(binding) {
        this._binding = binding;
    }
    BindingWhenSyntax.prototype.when = function (constraint) {
        this._binding.constraint = constraint;
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax.prototype.whenTargetNamed = function (name) {
        this._binding.constraint = constraint_helpers_1.namedConstraint(name);
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax.prototype.whenTargetIsDefault = function () {
        this._binding.constraint = function (request) {
            var targetIsDefault = (request.target !== null) &&
                (request.target.isNamed() === false) &&
                (request.target.isTagged() === false);
            return targetIsDefault;
        };
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax.prototype.whenTargetTagged = function (tag, value) {
        this._binding.constraint = constraint_helpers_1.taggedConstraint(tag)(value);
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax.prototype.whenInjectedInto = function (parent) {
        this._binding.constraint = function (request) {
            return constraint_helpers_1.typeConstraint(parent)(request.parentRequest);
        };
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax.prototype.whenParentNamed = function (name) {
        this._binding.constraint = function (request) {
            return constraint_helpers_1.namedConstraint(name)(request.parentRequest);
        };
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax.prototype.whenParentTagged = function (tag, value) {
        this._binding.constraint = function (request) {
            return constraint_helpers_1.taggedConstraint(tag)(value)(request.parentRequest);
        };
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax.prototype.whenAnyAncestorIs = function (ancestor) {
        this._binding.constraint = function (request) {
            return constraint_helpers_1.traverseAncerstors(request, constraint_helpers_1.typeConstraint(ancestor));
        };
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax.prototype.whenNoAncestorIs = function (ancestor) {
        this._binding.constraint = function (request) {
            return !constraint_helpers_1.traverseAncerstors(request, constraint_helpers_1.typeConstraint(ancestor));
        };
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax.prototype.whenAnyAncestorNamed = function (name) {
        this._binding.constraint = function (request) {
            return constraint_helpers_1.traverseAncerstors(request, constraint_helpers_1.namedConstraint(name));
        };
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax.prototype.whenNoAncestorNamed = function (name) {
        this._binding.constraint = function (request) {
            return !constraint_helpers_1.traverseAncerstors(request, constraint_helpers_1.namedConstraint(name));
        };
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax.prototype.whenAnyAncestorTagged = function (tag, value) {
        this._binding.constraint = function (request) {
            return constraint_helpers_1.traverseAncerstors(request, constraint_helpers_1.taggedConstraint(tag)(value));
        };
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax.prototype.whenNoAncestorTagged = function (tag, value) {
        this._binding.constraint = function (request) {
            return !constraint_helpers_1.traverseAncerstors(request, constraint_helpers_1.taggedConstraint(tag)(value));
        };
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax.prototype.whenAnyAncestorMatches = function (constraint) {
        this._binding.constraint = function (request) {
            return constraint_helpers_1.traverseAncerstors(request, constraint);
        };
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
    };
    BindingWhenSyntax.prototype.whenNoAncestorMatches = function (constraint) {
        this._binding.constraint = function (request) {
            return !constraint_helpers_1.traverseAncerstors(request, constraint);
        };
        return new binding_on_syntax_1.BindingOnSyntax(this._binding);
    };
    return BindingWhenSyntax;
}());
exports.BindingWhenSyntax = BindingWhenSyntax;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var binding_when_syntax_1 = __webpack_require__(8);
var BindingOnSyntax = (function () {
    function BindingOnSyntax(binding) {
        this._binding = binding;
    }
    BindingOnSyntax.prototype.onActivation = function (handler) {
        this._binding.onActivation = handler;
        return new binding_when_syntax_1.BindingWhenSyntax(this._binding);
    };
    return BindingOnSyntax;
}());
exports.BindingOnSyntax = BindingOnSyntax;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = __webpack_require__(5);
const ImageLoader_1 = __webpack_require__(17);
const LightSimulator_1 = __webpack_require__(18);
const ShaderProgramInitializer_1 = __webpack_require__(22);
const TextureLoader_1 = __webpack_require__(24);
const configuration_1 = __webpack_require__(21);
// tslint:disable no-require-imports no-var-requires
const vertexShaderSource = __webpack_require__(61);
const fragmentShaderSource = __webpack_require__(62);
// tslint:enable no-require-imports no-var-requires
let Application = class Application {
    constructor(gl, shaderProgramInitializer, textureLoader, imageLoader, lightSimulator) {
        this.gl = gl;
        this.shaderProgramInitializer = shaderProgramInitializer;
        this.textureLoader = textureLoader;
        this.imageLoader = imageLoader;
        this.lightSimulator = lightSimulator;
        this.onLightPositionChange = this.onLightPositionChange.bind(this);
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            const gl = this.gl;
            gl.clearColor(0, 0, 0, 1);
            gl.clear(gl.COLOR_BUFFER_BIT);
            const loadImagesPromise = this.loadImages();
            this.shaderProgram = this.shaderProgramInitializer.initShaderProgram(vertexShaderSource, fragmentShaderSource);
            gl.useProgram(this.shaderProgram);
            this.getAttributeLocations();
            this.getUniformLocations();
            this.initializeTextureCoordsBuffer();
            this.initializePlaneBuffer();
            yield loadImagesPromise;
            this.initializeBackgroundTexture();
            this.initializeNormalMapTexture();
            gl.activeTexture(gl.TEXTURE0);
            gl.bindTexture(gl.TEXTURE_2D, this.backgroundTexture);
            gl.activeTexture(gl.TEXTURE1);
            gl.bindTexture(gl.TEXTURE_2D, this.normalMapTexture);
            gl.uniform1f(this.uniformLocations.kD, configuration_1.configuration.kD);
            gl.uniform1f(this.uniformLocations.kS, configuration_1.configuration.kS);
            gl.uniform1f(this.uniformLocations.m, configuration_1.configuration.m);
            const viewerVector = configuration_1.configuration.viewerVector;
            gl.uniform3f(this.uniformLocations.uViewerVector, viewerVector.x, viewerVector.y, viewerVector.z);
            this.drawFrame();
            this.startLightSimulator();
        });
    }
    drawFrame() {
        const gl = this.gl;
        gl.drawArrays(gl.TRIANGLES, 0, 6);
    }
    startLightSimulator() {
        this.lightSimulator.init();
        this.lightSimulator.addListener('light-position-change', this.onLightPositionChange);
    }
    onLightPositionChange(lightPosition) {
        const gl = this.gl;
        gl.uniform3f(this.uniformLocations.lightPosition, lightPosition.x, lightPosition.y, lightPosition.z);
        this.drawFrame();
    }
    prepareRenderingPlaneBuffer() {
        const gl = this.gl;
        // prettier-ignore
        const planeVertices = new Float32Array([
            -1.0, 1.0,
            1.0, 1.0,
            1.0, -1.0,
            -1.0, 1.0,
            1.0, -1.0,
            -1.0, -1.0
        ]);
        const planeBuffer = gl.createBuffer();
        if (!planeBuffer) {
            throw new Error('Cannot create buffer');
        }
        gl.bindBuffer(gl.ARRAY_BUFFER, planeBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, planeVertices, gl.STATIC_DRAW);
        return planeBuffer;
    }
    prepareTextureCoordsBuffer() {
        const gl = this.gl;
        // prettier-ignore
        const textureCoordsVertices = new Float32Array([
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 0.0,
            1.0, 1.0,
            0.0, 1.0
        ]);
        const textureCoordsBuffer = gl.createBuffer();
        if (!textureCoordsBuffer) {
            throw new Error('Cannot create buffer');
        }
        gl.bindBuffer(gl.ARRAY_BUFFER, textureCoordsBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, textureCoordsVertices, gl.STATIC_DRAW);
        return textureCoordsBuffer;
    }
    loadImages() {
        return __awaiter(this, void 0, void 0, function* () {
            const [backgroundImage, normalMapImage] = yield Promise.all([
                this.imageLoader.loadImage(configuration_1.configuration.backgroundTextureUrl),
                this.imageLoader.loadImage(configuration_1.configuration.normalMapUrl)
            ]);
            this.backgroundImage = backgroundImage;
            this.normalMapImage = normalMapImage;
        });
    }
    initializeTextureCoordsBuffer() {
        const gl = this.gl;
        const textureCoordsBuffer = this.prepareTextureCoordsBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, textureCoordsBuffer);
        gl.vertexAttribPointer(this.attribLocations.textureCoord, 2, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(this.attribLocations.textureCoord);
    }
    initializePlaneBuffer() {
        const gl = this.gl;
        const planeBuffer = this.prepareRenderingPlaneBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, planeBuffer);
        gl.vertexAttribPointer(this.attribLocations.vertexPosition, 2, gl.FLOAT, false, 0, 0);
        gl.enableVertexAttribArray(this.attribLocations.vertexPosition);
    }
    initializeBackgroundTexture() {
        const gl = this.gl;
        this.backgroundTexture = this.textureLoader.loadTexture(this.backgroundImage);
        gl.uniform1i(this.uniformLocations.backgroundSampler, 0);
    }
    initializeNormalMapTexture() {
        const gl = this.gl;
        this.normalMapTexture = this.textureLoader.loadTexture(this.normalMapImage);
        gl.uniform1i(this.uniformLocations.normalMapSampler, 1);
    }
    getAttributeLocations() {
        const gl = this.gl;
        this.attribLocations = {
            vertexPosition: gl.getAttribLocation(this.shaderProgram, 'aVertexPosition'),
            textureCoord: gl.getAttribLocation(this.shaderProgram, 'aTextureCoord')
        };
    }
    getUniformLocations() {
        const gl = this.gl;
        this.uniformLocations = {
            backgroundSampler: gl.getUniformLocation(this.shaderProgram, 'uBackgroundSampler'),
            normalMapSampler: gl.getUniformLocation(this.shaderProgram, 'uNormalMapSampler'),
            lightPosition: gl.getUniformLocation(this.shaderProgram, 'uLightPosition'),
            uViewerVector: gl.getUniformLocation(this.shaderProgram, 'uViewerVector'),
            kD: gl.getUniformLocation(this.shaderProgram, 'kD'),
            kS: gl.getUniformLocation(this.shaderProgram, 'kS'),
            m: gl.getUniformLocation(this.shaderProgram, 'm')
        };
    }
};
Application = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [WebGLRenderingContext,
        ShaderProgramInitializer_1.ShaderProgramInitializer,
        TextureLoader_1.TextureLoader,
        ImageLoader_1.ImageLoader,
        LightSimulator_1.LightSimulator])
], Application);
exports.Application = Application;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var metadata_1 = __webpack_require__(2);
var queryable_string_1 = __webpack_require__(42);
var guid_1 = __webpack_require__(6);
var METADATA_KEY = __webpack_require__(0);
var Target = (function () {
    function Target(type, name, serviceIdentifier, namedOrTagged) {
        this.guid = guid_1.guid();
        this.type = type;
        this.serviceIdentifier = serviceIdentifier;
        this.name = new queryable_string_1.QueryableString(name || "");
        this.metadata = new Array();
        var metadataItem = null;
        if (typeof namedOrTagged === "string") {
            metadataItem = new metadata_1.Metadata(METADATA_KEY.NAMED_TAG, namedOrTagged);
        }
        else if (namedOrTagged instanceof metadata_1.Metadata) {
            metadataItem = namedOrTagged;
        }
        if (metadataItem !== null) {
            this.metadata.push(metadataItem);
        }
    }
    Target.prototype.hasTag = function (key) {
        for (var i = 0; i < this.metadata.length; i++) {
            var m = this.metadata[i];
            if (m.key === key) {
                return true;
            }
        }
        return false;
    };
    Target.prototype.isArray = function () {
        return this.hasTag(METADATA_KEY.MULTI_INJECT_TAG);
    };
    Target.prototype.matchesArray = function (name) {
        return this.matchesTag(METADATA_KEY.MULTI_INJECT_TAG)(name);
    };
    Target.prototype.isNamed = function () {
        return this.hasTag(METADATA_KEY.NAMED_TAG);
    };
    Target.prototype.isTagged = function () {
        return this.metadata.some(function (m) {
            return (m.key !== METADATA_KEY.INJECT_TAG) &&
                (m.key !== METADATA_KEY.MULTI_INJECT_TAG) &&
                (m.key !== METADATA_KEY.NAME_TAG) &&
                (m.key !== METADATA_KEY.UNMANAGED_TAG) &&
                (m.key !== METADATA_KEY.NAMED_TAG);
        });
    };
    Target.prototype.isOptional = function () {
        return this.matchesTag(METADATA_KEY.OPTIONAL_TAG)(true);
    };
    Target.prototype.getNamedTag = function () {
        if (this.isNamed()) {
            return this.metadata.filter(function (m) { return m.key === METADATA_KEY.NAMED_TAG; })[0];
        }
        return null;
    };
    Target.prototype.getCustomTags = function () {
        if (this.isTagged()) {
            return this.metadata.filter(function (m) {
                return (m.key !== METADATA_KEY.INJECT_TAG) &&
                    (m.key !== METADATA_KEY.MULTI_INJECT_TAG) &&
                    (m.key !== METADATA_KEY.NAME_TAG) &&
                    (m.key !== METADATA_KEY.UNMANAGED_TAG) &&
                    (m.key !== METADATA_KEY.NAMED_TAG);
            });
        }
        return null;
    };
    Target.prototype.matchesNamedTag = function (name) {
        return this.matchesTag(METADATA_KEY.NAMED_TAG)(name);
    };
    Target.prototype.matchesTag = function (key) {
        var _this = this;
        return function (value) {
            for (var i = 0; i < _this.metadata.length; i++) {
                var m = _this.metadata[i];
                if (m.key === key && m.value === value) {
                    return true;
                }
            }
            return false;
        };
    };
    return Target;
}());
exports.Target = Target;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ERROR_MSGS = __webpack_require__(1);
function isStackOverflowExeption(error) {
    return (error instanceof RangeError ||
        error.message === ERROR_MSGS.STACK_OVERFLOW);
}
exports.isStackOverflowExeption = isStackOverflowExeption;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var binding_when_syntax_1 = __webpack_require__(8);
var binding_on_syntax_1 = __webpack_require__(9);
var BindingWhenOnSyntax = (function () {
    function BindingWhenOnSyntax(binding) {
        this._binding = binding;
        this._bindingWhenSyntax = new binding_when_syntax_1.BindingWhenSyntax(this._binding);
        this._bindingOnSyntax = new binding_on_syntax_1.BindingOnSyntax(this._binding);
    }
    BindingWhenOnSyntax.prototype.when = function (constraint) {
        return this._bindingWhenSyntax.when(constraint);
    };
    BindingWhenOnSyntax.prototype.whenTargetNamed = function (name) {
        return this._bindingWhenSyntax.whenTargetNamed(name);
    };
    BindingWhenOnSyntax.prototype.whenTargetIsDefault = function () {
        return this._bindingWhenSyntax.whenTargetIsDefault();
    };
    BindingWhenOnSyntax.prototype.whenTargetTagged = function (tag, value) {
        return this._bindingWhenSyntax.whenTargetTagged(tag, value);
    };
    BindingWhenOnSyntax.prototype.whenInjectedInto = function (parent) {
        return this._bindingWhenSyntax.whenInjectedInto(parent);
    };
    BindingWhenOnSyntax.prototype.whenParentNamed = function (name) {
        return this._bindingWhenSyntax.whenParentNamed(name);
    };
    BindingWhenOnSyntax.prototype.whenParentTagged = function (tag, value) {
        return this._bindingWhenSyntax.whenParentTagged(tag, value);
    };
    BindingWhenOnSyntax.prototype.whenAnyAncestorIs = function (ancestor) {
        return this._bindingWhenSyntax.whenAnyAncestorIs(ancestor);
    };
    BindingWhenOnSyntax.prototype.whenNoAncestorIs = function (ancestor) {
        return this._bindingWhenSyntax.whenNoAncestorIs(ancestor);
    };
    BindingWhenOnSyntax.prototype.whenAnyAncestorNamed = function (name) {
        return this._bindingWhenSyntax.whenAnyAncestorNamed(name);
    };
    BindingWhenOnSyntax.prototype.whenAnyAncestorTagged = function (tag, value) {
        return this._bindingWhenSyntax.whenAnyAncestorTagged(tag, value);
    };
    BindingWhenOnSyntax.prototype.whenNoAncestorNamed = function (name) {
        return this._bindingWhenSyntax.whenNoAncestorNamed(name);
    };
    BindingWhenOnSyntax.prototype.whenNoAncestorTagged = function (tag, value) {
        return this._bindingWhenSyntax.whenNoAncestorTagged(tag, value);
    };
    BindingWhenOnSyntax.prototype.whenAnyAncestorMatches = function (constraint) {
        return this._bindingWhenSyntax.whenAnyAncestorMatches(constraint);
    };
    BindingWhenOnSyntax.prototype.whenNoAncestorMatches = function (constraint) {
        return this._bindingWhenSyntax.whenNoAncestorMatches(constraint);
    };
    BindingWhenOnSyntax.prototype.onActivation = function (handler) {
        return this._bindingOnSyntax.onActivation(handler);
    };
    return BindingWhenOnSyntax;
}());
exports.BindingWhenOnSyntax = BindingWhenOnSyntax;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var metadata_1 = __webpack_require__(2);
var METADATA_KEY = __webpack_require__(0);
var traverseAncerstors = function (request, constraint) {
    var parent = request.parentRequest;
    if (parent !== null) {
        return constraint(parent) ? true : traverseAncerstors(parent, constraint);
    }
    else {
        return false;
    }
};
exports.traverseAncerstors = traverseAncerstors;
var taggedConstraint = function (key) { return function (value) {
    var constraint = function (request) {
        return request !== null && request.target !== null && request.target.matchesTag(key)(value);
    };
    constraint.metaData = new metadata_1.Metadata(key, value);
    return constraint;
}; };
exports.taggedConstraint = taggedConstraint;
var namedConstraint = taggedConstraint(METADATA_KEY.NAMED_TAG);
exports.namedConstraint = namedConstraint;
var typeConstraint = function (type) { return function (request) {
    var binding = null;
    if (request !== null) {
        binding = request.bindings[0];
        if (typeof type === "string") {
            var serviceIdentifier = binding.serviceIdentifier;
            return serviceIdentifier === type;
        }
        else {
            var constructor = request.bindings[0].implementationType;
            return type === constructor;
        }
    }
    return false;
}; };
exports.typeConstraint = typeConstraint;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var METADATA_KEY = __webpack_require__(0);
var MetadataReader = (function () {
    function MetadataReader() {
    }
    MetadataReader.prototype.getConstructorMetadata = function (constructorFunc) {
        var compilerGeneratedMetadata = Reflect.getMetadata(METADATA_KEY.PARAM_TYPES, constructorFunc);
        var userGeneratedMetadata = Reflect.getMetadata(METADATA_KEY.TAGGED, constructorFunc);
        return {
            compilerGeneratedMetadata: compilerGeneratedMetadata,
            userGeneratedMetadata: userGeneratedMetadata || {}
        };
    };
    MetadataReader.prototype.getPropertiesMetadata = function (constructorFunc) {
        var userGeneratedMetadata = Reflect.getMetadata(METADATA_KEY.TAGGED_PROP, constructorFunc) || [];
        return userGeneratedMetadata;
    };
    return MetadataReader;
}());
exports.MetadataReader = MetadataReader;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = __webpack_require__(5);
let ImageLoader = class ImageLoader {
    loadImage(url) {
        return new Promise((resolve, reject) => {
            const image = new Image();
            image.onload = () => resolve(image);
            image.onerror = reject;
            image.src = url;
        });
    }
};
ImageLoader = __decorate([
    inversify_1.injectable()
], ImageLoader);
exports.ImageLoader = ImageLoader;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const eventemitter3_1 = __webpack_require__(19);
const inversify_1 = __webpack_require__(5);
const Vector3_1 = __webpack_require__(20);
const configuration_1 = __webpack_require__(21);
let LightSimulator = class LightSimulator extends eventemitter3_1.EventEmitter {
    constructor() {
        super();
        this.horizontalRadiansModuloValue = 2 * Math.PI; // [0; 360] degrees
        this.lightHorizontalAngle = 0;
        this.lightVerticalAngleOffset = configuration_1.configuration.movingLight.minVerticalAngle;
        this.lightVerticalRising = true;
        this.lightPositionRadius = configuration_1.configuration.movingLight.radius;
        this.centerX = configuration_1.configuration.movingLight.center.x;
        this.centerY = configuration_1.configuration.movingLight.center.y;
        this.performInitialCalculations();
        this.movingLightTick = this.movingLightTick.bind(this);
    }
    init() {
        this.startMovingLight();
    }
    destroy() {
        this.stopMovingLight();
    }
    performInitialCalculations() {
        this.horizontalStepInRadians = configuration_1.configuration.movingLight.tickInterval /
            configuration_1.configuration.movingLight.horizontalLapTime *
            2 *
            Math.PI;
        this.minVerticalAngle = configuration_1.configuration.movingLight.minVerticalAngle;
        this.verticalAngleDelta = configuration_1.configuration.movingLight.maxVerticalAngle -
            this.minVerticalAngle;
        this.verticalStepInRadians = configuration_1.configuration.movingLight.tickInterval /
            configuration_1.configuration.movingLight.verticalLapTime *
            this.verticalAngleDelta;
    }
    dispatchLightPosition(position) {
        this.emit('light-position-change', position);
    }
    startMovingLight() {
        this.movingLightIntervalId = setInterval(this.movingLightTick, configuration_1.configuration.movingLight.tickInterval);
    }
    movingLightTick() {
        const { centerX, centerY } = this;
        const verticalAngle = configuration_1.configuration.movingLight.minVerticalAngle + this.lightVerticalAngleOffset;
        const horizontalRadius = this.lightPositionRadius * Math.cos(verticalAngle);
        const x = centerX + horizontalRadius * Math.cos(this.lightHorizontalAngle);
        const y = centerY + horizontalRadius * Math.sin(this.lightHorizontalAngle);
        const z = this.lightPositionRadius * Math.sin(verticalAngle);
        const lightPosition = new Vector3_1.Vector3(x, y, z);
        this.dispatchLightPosition(lightPosition);
        this.horizontalTick();
        this.verticalTick();
    }
    horizontalTick() {
        this.lightHorizontalAngle += this.horizontalStepInRadians;
        if (this.lightHorizontalAngle >= this.horizontalRadiansModuloValue) {
            this.lightHorizontalAngle -= this.horizontalRadiansModuloValue;
        }
    }
    verticalTick() {
        if (this.lightVerticalRising) {
            this.lightVerticalAngleOffset += this.verticalStepInRadians;
            if (this.lightVerticalAngleOffset >= this.verticalAngleDelta) {
                this.lightVerticalRising = false;
            }
        }
        else {
            this.lightVerticalAngleOffset -= this.verticalStepInRadians;
            if (this.lightVerticalAngleOffset <= 0) {
                this.lightVerticalRising = true;
            }
        }
    }
    stopMovingLight() {
        clearInterval(this.movingLightIntervalId);
        this.lightHorizontalAngle = 0;
        this.lightVerticalAngleOffset = configuration_1.configuration.movingLight.minVerticalAngle;
        this.lightVerticalRising = true;
    }
};
LightSimulator = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [])
], LightSimulator);
exports.LightSimulator = LightSimulator;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty
  , prefix = '~';

/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @api private
 */
function Events() {}

//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
  Events.prototype = Object.create(null);

  //
  // This hack is needed because the `__proto__` property is still inherited in
  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
  //
  if (!new Events().__proto__) prefix = false;
}

/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {Mixed} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @api private
 */
function EE(fn, context, once) {
  this.fn = fn;
  this.context = context;
  this.once = once || false;
}

/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @api public
 */
function EventEmitter() {
  this._events = new Events();
  this._eventsCount = 0;
}

/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @api public
 */
EventEmitter.prototype.eventNames = function eventNames() {
  var names = []
    , events
    , name;

  if (this._eventsCount === 0) return names;

  for (name in (events = this._events)) {
    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
  }

  if (Object.getOwnPropertySymbols) {
    return names.concat(Object.getOwnPropertySymbols(events));
  }

  return names;
};

/**
 * Return the listeners registered for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Boolean} exists Only check if there are listeners.
 * @returns {Array|Boolean}
 * @api public
 */
EventEmitter.prototype.listeners = function listeners(event, exists) {
  var evt = prefix ? prefix + event : event
    , available = this._events[evt];

  if (exists) return !!available;
  if (!available) return [];
  if (available.fn) return [available.fn];

  for (var i = 0, l = available.length, ee = new Array(l); i < l; i++) {
    ee[i] = available[i].fn;
  }

  return ee;
};

/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @api public
 */
EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return false;

  var listeners = this._events[evt]
    , len = arguments.length
    , args
    , i;

  if (listeners.fn) {
    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

    switch (len) {
      case 1: return listeners.fn.call(listeners.context), true;
      case 2: return listeners.fn.call(listeners.context, a1), true;
      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
    }

    for (i = 1, args = new Array(len -1); i < len; i++) {
      args[i - 1] = arguments[i];
    }

    listeners.fn.apply(listeners.context, args);
  } else {
    var length = listeners.length
      , j;

    for (i = 0; i < length; i++) {
      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

      switch (len) {
        case 1: listeners[i].fn.call(listeners[i].context); break;
        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
        default:
          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
            args[j - 1] = arguments[j];
          }

          listeners[i].fn.apply(listeners[i].context, args);
      }
    }
  }

  return true;
};

/**
 * Add a listener for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn The listener function.
 * @param {Mixed} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.on = function on(event, fn, context) {
  var listener = new EE(fn, context || this)
    , evt = prefix ? prefix + event : event;

  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
  else if (!this._events[evt].fn) this._events[evt].push(listener);
  else this._events[evt] = [this._events[evt], listener];

  return this;
};

/**
 * Add a one-time listener for a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn The listener function.
 * @param {Mixed} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.once = function once(event, fn, context) {
  var listener = new EE(fn, context || this, true)
    , evt = prefix ? prefix + event : event;

  if (!this._events[evt]) this._events[evt] = listener, this._eventsCount++;
  else if (!this._events[evt].fn) this._events[evt].push(listener);
  else this._events[evt] = [this._events[evt], listener];

  return this;
};

/**
 * Remove the listeners of a given event.
 *
 * @param {String|Symbol} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {Mixed} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
  var evt = prefix ? prefix + event : event;

  if (!this._events[evt]) return this;
  if (!fn) {
    if (--this._eventsCount === 0) this._events = new Events();
    else delete this._events[evt];
    return this;
  }

  var listeners = this._events[evt];

  if (listeners.fn) {
    if (
         listeners.fn === fn
      && (!once || listeners.once)
      && (!context || listeners.context === context)
    ) {
      if (--this._eventsCount === 0) this._events = new Events();
      else delete this._events[evt];
    }
  } else {
    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
      if (
           listeners[i].fn !== fn
        || (once && !listeners[i].once)
        || (context && listeners[i].context !== context)
      ) {
        events.push(listeners[i]);
      }
    }

    //
    // Reset the array, or remove it completely if we have no more listeners.
    //
    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
    else if (--this._eventsCount === 0) this._events = new Events();
    else delete this._events[evt];
  }

  return this;
};

/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {String|Symbol} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @api public
 */
EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
  var evt;

  if (event) {
    evt = prefix ? prefix + event : event;
    if (this._events[evt]) {
      if (--this._eventsCount === 0) this._events = new Events();
      else delete this._events[evt];
    }
  } else {
    this._events = new Events();
    this._eventsCount = 0;
  }

  return this;
};

//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;

//
// This function doesn't apply anymore.
//
EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
  return this;
};

//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;

//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;

//
// Expose the module.
//
if (true) {
  module.exports = EventEmitter;
}


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Vector3 {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}
exports.Vector3 = Vector3;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Vector3_1 = __webpack_require__(20);
exports.configuration = {
    backgroundTextureUrl: 'images/backgrounds/Funny-Cat-Face.jpg',
    // backgroundTextureUrl: 'images/backgrounds/hqdefault.jpg',
    normalMapUrl: 'images/normal-maps/normal_map.jpg',
    movingLight: {
        horizontalLapTime: 10 * 1000,
        verticalLapTime: 8 * 1000,
        minVerticalAngle: 20 / 180 * Math.PI,
        maxVerticalAngle: 70 / 180 * Math.PI,
        tickInterval: 50,
        center: {
            x: 0.5,
            y: 0.5
        },
        radius: 0.4
    },
    kD: 1,
    kS: 1,
    m: 100,
    viewerVector: new Vector3_1.Vector3(0, 0, 1)
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = __webpack_require__(5);
const ShaderLoader_1 = __webpack_require__(23);
let ShaderProgramInitializer = class ShaderProgramInitializer {
    constructor(gl, shaderLoader) {
        this.gl = gl;
        this.shaderLoader = shaderLoader;
    }
    initShaderProgram(vertexShaderSource, fragmentShaderSource) {
        const gl = this.gl;
        const shaderProgram = gl.createProgram();
        if (!shaderProgram) {
            throw new Error('Cannot create WebGL program');
        }
        const { fragmentShader, vertexShader } = this.createShaders(vertexShaderSource, fragmentShaderSource);
        gl.attachShader(shaderProgram, vertexShader);
        gl.attachShader(shaderProgram, fragmentShader);
        gl.linkProgram(shaderProgram);
        if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
            const programInfoLog = gl.getProgramInfoLog(shaderProgram);
            gl.deleteProgram(shaderProgram);
            gl.deleteShader(vertexShader);
            gl.deleteShader(fragmentShader);
            throw new Error(`Cannot link program: ${programInfoLog}`);
        }
        return shaderProgram;
    }
    createShaders(vertexShaderSource, fragmentShaderSource) {
        const gl = this.gl;
        const vertexShader = this.shaderLoader.loadShader(gl.VERTEX_SHADER, vertexShaderSource);
        const fragmentShader = this.shaderLoader.loadShader(gl.FRAGMENT_SHADER, fragmentShaderSource);
        return { vertexShader, fragmentShader };
    }
};
ShaderProgramInitializer = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [WebGLRenderingContext, ShaderLoader_1.ShaderLoader])
], ShaderProgramInitializer);
exports.ShaderProgramInitializer = ShaderProgramInitializer;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = __webpack_require__(5);
let ShaderLoader = class ShaderLoader {
    constructor(gl) {
        this.gl = gl;
    }
    loadShader(shaderType, source) {
        const gl = this.gl;
        const shader = gl.createShader(shaderType);
        if (!shader) {
            throw new Error('Cannot create shader');
        }
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            const shaderInfoLog = gl.getShaderInfoLog(shader);
            gl.deleteShader(shader);
            throw new Error(`Cannot compile shader: ${shaderInfoLog}`);
        }
        return shader;
    }
};
ShaderLoader = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [WebGLRenderingContext])
], ShaderLoader);
exports.ShaderLoader = ShaderLoader;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = __webpack_require__(5);
let TextureLoader = class TextureLoader {
    constructor(gl) {
        this.gl = gl;
    }
    loadTexture(image) {
        const gl = this.gl;
        const texture = gl.createTexture();
        if (!texture) {
            throw new Error('Cannot create texture');
        }
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
        return texture;
    }
};
TextureLoader = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [WebGLRenderingContext])
], TextureLoader);
exports.TextureLoader = TextureLoader;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(26);
__webpack_require__(31);
__webpack_require__(32);
__webpack_require__(33);
const Application_1 = __webpack_require__(11);
const inversify_config_1 = __webpack_require__(63);
window.onload = bootstrap;
function bootstrap() {
    const canvasElement = document.getElementById('application-canvas');
    if (!canvasElement) {
        throw new Error("Canvas with id 'application-canvas' not found");
    }
    const canvas = canvasElement;
    inversify_config_1.container.bind(HTMLCanvasElement).toConstantValue(canvas);
    const gl = canvas.getContext('webgl');
    if (!gl) {
        throw new Error('WebGL is not supported');
    }
    inversify_config_1.container.bind(WebGLRenderingContext).toConstantValue(gl);
    inversify_config_1.container.get(Application_1.Application).init();
}


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(27);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(29)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./index.scss", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./index.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(28)(undefined);
// imports


// module
exports.push([module.i, "html, body {\n  box-sizing: border-box; }\n\n*, *::before, *::after {\n  box-sizing: inherit; }\n\n.application {\n  margin-left: 2em; }\n\n.canvas-wrapper {\n  display: inline-block;\n  border: solid 1px black; }\n\n#application-canvas {\n  display: block; }\n", ""]);

// exports


/***/ }),
/* 28 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(30);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 30 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 31 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {(function(){/*

 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
'use strict';var n,p="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};function ba(){ba=function(){};p.Symbol||(p.Symbol=da)}var da=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();
function ea(){ba();var a=p.Symbol.iterator;a||(a=p.Symbol.iterator=p.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&aa(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return fa(this)}});ea=function(){}}function fa(a){var b=0;return ha(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}function ha(a){ea();a={next:a};a[p.Symbol.iterator]=function(){return this};return a}function ia(a){ea();var b=a[Symbol.iterator];return b?b.call(a):fa(a)}
function ja(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
(function(a){function b(a,b){if("function"===typeof window.CustomEvent)return new CustomEvent(a,b);var c=document.createEvent("CustomEvent");c.initCustomEvent(a,!!b.bubbles,!!b.cancelable,b.detail);return c}function c(a){if(m)return a.ownerDocument!==document?a.ownerDocument:null;var b=a.__importDoc;if(!b&&a.parentNode){b=a.parentNode;if("function"===typeof b.closest)b=b.closest("link[rel=import]");else for(;!g(b)&&(b=b.parentNode););a.__importDoc=b}return b}function d(a){var b=document.querySelectorAll("link[rel=import]:not([import-dependency])"),
c=b.length;c?l(b,function(b){return h(b,function(){0===--c&&a()})}):a()}function e(a){function b(){"loading"!==document.readyState&&document.body&&(document.removeEventListener("readystatechange",b),a())}document.addEventListener("readystatechange",b);b()}function f(a){e(function(){return d(function(){return a&&a()})})}function h(a,b){if(a.__loaded)b&&b();else if("script"===a.localName&&!a.src||"style"===a.localName&&!a.firstChild)a.__loaded=!0,b&&b();else{var c=function(d){a.removeEventListener(d.type,
c);a.__loaded=!0;b&&b()};a.addEventListener("load",c);Ka&&"style"===a.localName||a.addEventListener("error",c)}}function g(a){return a.nodeType===Node.ELEMENT_NODE&&"link"===a.localName&&"import"===a.rel}function k(){var a=this;this.a={};this.b=0;this.f=new MutationObserver(function(b){return a.Ia(b)});this.f.observe(document.head,{childList:!0,subtree:!0});this.c(document)}function l(a,b,c){var d=a?a.length:0,e=c?-1:1;for(c=c?d-1:0;c<d&&0<=c;c+=e)b(a[c],c)}var m="import"in document.createElement("link"),
q=null;!1==="currentScript"in document&&Object.defineProperty(document,"currentScript",{get:function(){return q||("complete"!==document.readyState?document.scripts[document.scripts.length-1]:null)},configurable:!0});var E=/(url\()([^)]*)(\))/g,J=/(@import[\s]+(?!url\())([^;]*)(;)/g,Ld=/(<link[^>]*)(rel=['|"]?stylesheet['|"]?[^>]*>)/g,z={Ca:function(a,b){a.href&&a.setAttribute("href",z.R(a.getAttribute("href"),b));a.src&&a.setAttribute("src",z.R(a.getAttribute("src"),b));if("style"===a.localName){var c=
z.ma(a.textContent,b,E);a.textContent=z.ma(c,b,J)}},ma:function(a,b,c){return a.replace(c,function(a,c,d,e){a=d.replace(/["']/g,"");b&&(a=z.R(a,b));return c+"'"+a+"'"+e})},R:function(a,b){if(void 0===z.V){z.V=!1;try{var c=new URL("b","http://a");c.pathname="c%20d";z.V="http://a/c%20d"===c.href}catch(Af){}}if(z.V)return(new URL(a,b)).href;c=z.va;c||(c=document.implementation.createHTMLDocument("temp"),z.va=c,c.ea=c.createElement("base"),c.head.appendChild(c.ea),c.da=c.createElement("a"));c.ea.href=
b;c.da.href=a;return c.da.href||a}},Lb={async:!0,load:function(a,b,c){if(a)if(a.match(/^data:/)){a=a.split(",");var d=a[1];d=-1<a[0].indexOf(";base64")?atob(d):decodeURIComponent(d);b(d)}else{var e=new XMLHttpRequest;e.open("GET",a,Lb.async);e.onload=function(){var a=e.responseURL||e.getResponseHeader("Location");a&&0===a.indexOf("/")&&(a=(location.origin||location.protocol+"//"+location.host)+a);var d=e.response||e.responseText;304===e.status||0===e.status||200<=e.status&&300>e.status?b(d,a):c(d)};
e.send()}else c("error: href must be specified")}},Ka=/Trident/.test(navigator.userAgent)||/Edge\/\d./i.test(navigator.userAgent);k.prototype.c=function(a){var b=this;a=a.querySelectorAll("link[rel=import]");l(a,function(a){return b.F(a)})};k.prototype.F=function(a){var b=this,c=a.href;if(void 0!==this.a[c]){var d=this.a[c];d&&d.__loaded&&(a.import=d,this.l(a))}else this.b++,this.a[c]="pending",Lb.load(c,function(a,d){a=b.Ja(a,d||c);b.a[c]=a;b.b--;b.c(a);b.ka()},function(){b.a[c]=null;b.b--;b.ka()})};
k.prototype.Ja=function(a,b){if(!a)return document.createDocumentFragment();Ka&&(a=a.replace(Ld,function(a,b,c){return-1===a.indexOf("type=")?b+" type=import-disable "+c:a}));var c=document.createElement("template");c.innerHTML=a;if(c.content)a=c.content;else for(a=document.createDocumentFragment();c.firstChild;)a.appendChild(c.firstChild);if(c=a.querySelector("base"))b=z.R(c.getAttribute("href"),b),c.removeAttribute("href");c=a.querySelectorAll('link[rel=import], link[rel=stylesheet][href][type=import-disable],\n    style:not([type]), link[rel=stylesheet][href]:not([type]),\n    script:not([type]), script[type="application/javascript"],\n    script[type="text/javascript"]');
var d=0;l(c,function(a){h(a);z.Ca(a,b);a.setAttribute("import-dependency","");"script"===a.localName&&!a.src&&a.textContent&&(a.setAttribute("src","data:text/javascript;charset=utf-8,"+encodeURIComponent(a.textContent+("\n//# sourceURL="+b+(d?"-"+d:"")+".js\n"))),a.textContent="",d++)});return a};k.prototype.ka=function(){var a=this;if(!this.b){this.f.disconnect();this.flatten(document);var b=!1,c=!1,d=function(){c&&b&&(a.c(document),a.b||(a.f.observe(document.head,{childList:!0,subtree:!0}),a.Ha()))};
this.Oa(function(){c=!0;d()});this.Ka(function(){b=!0;d()})}};k.prototype.flatten=function(a){var b=this;a=a.querySelectorAll("link[rel=import]");l(a,function(a){var c=b.a[a.href];(a.import=c)&&c.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&(b.a[a.href]=a,a.readyState="loading",a.import=a,b.flatten(c),a.appendChild(c))})};k.prototype.Ka=function(a){function b(e){if(e<d){var f=c[e],g=document.createElement("script");f.removeAttribute("import-dependency");l(f.attributes,function(a){return g.setAttribute(a.name,
a.value)});q=g;f.parentNode.replaceChild(g,f);h(g,function(){q=null;b(e+1)})}else a()}var c=document.querySelectorAll("script[import-dependency]"),d=c.length;b(0)};k.prototype.Oa=function(a){var b=document.querySelectorAll("style[import-dependency],\n    link[rel=stylesheet][import-dependency]"),d=b.length;if(d){var e=Ka&&!!document.querySelector("link[rel=stylesheet][href][type=import-disable]");l(b,function(b){h(b,function(){b.removeAttribute("import-dependency");0===--d&&a()});if(e&&b.parentNode!==
document.head){var f=document.createElement(b.localName);f.__appliedElement=b;f.setAttribute("type","import-placeholder");b.parentNode.insertBefore(f,b.nextSibling);for(f=c(b);f&&c(f);)f=c(f);f.parentNode!==document.head&&(f=null);document.head.insertBefore(b,f);b.removeAttribute("type")}})}else a()};k.prototype.Ha=function(){var a=this,b=document.querySelectorAll("link[rel=import]");l(b,function(b){return a.l(b)},!0)};k.prototype.l=function(a){a.__loaded||(a.__loaded=!0,a.import&&(a.import.readyState=
"complete"),a.dispatchEvent(b(a.import?"load":"error",{bubbles:!1,cancelable:!1,detail:void 0})))};k.prototype.Ia=function(a){var b=this;l(a,function(a){return l(a.addedNodes,function(a){a&&a.nodeType===Node.ELEMENT_NODE&&(g(a)?b.F(a):b.c(a))})})};if(m){var la=document.querySelectorAll("link[rel=import]");l(la,function(a){a.import&&"loading"===a.import.readyState||(a.__loaded=!0)});la=function(a){a=a.target;g(a)&&(a.__loaded=!0)};document.addEventListener("load",la,!0);document.addEventListener("error",
la,!0)}else{var ca=Object.getOwnPropertyDescriptor(Node.prototype,"baseURI");Object.defineProperty((!ca||ca.configurable?Node:Element).prototype,"baseURI",{get:function(){var a=g(this)?this:c(this);return a?a.href:ca&&ca.get?ca.get.call(this):(document.querySelector("base")||window.location).href},configurable:!0,enumerable:!0});e(function(){return new k})}f(function(){return document.dispatchEvent(b("HTMLImportsLoaded",{cancelable:!0,bubbles:!0,detail:void 0}))});a.useNative=m;a.whenReady=f;a.importForElement=
c})(window.HTMLImports=window.HTMLImports||{});/*

Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var r=window.ShadyDOM||{};r.Ea=!(!Element.prototype.attachShadow||!Node.prototype.getRootNode);var ka=Object.getOwnPropertyDescriptor(Node.prototype,"firstChild");r.G=!!(ka&&ka.configurable&&ka.get);r.la=r.force||!r.Ea;function t(a){return a.__shady&&void 0!==a.__shady.firstChild}function u(a){return"ShadyRoot"===a.sa}function ma(a){a=a.getRootNode();if(u(a))return a}var v=Element.prototype,na=v.matches||v.matchesSelector||v.mozMatchesSelector||v.msMatchesSelector||v.oMatchesSelector||v.webkitMatchesSelector;
function oa(a,b){if(a&&b)for(var c=Object.getOwnPropertyNames(b),d=0,e;d<c.length&&(e=c[d]);d++){var f=Object.getOwnPropertyDescriptor(b,e);f&&Object.defineProperty(a,e,f)}}function pa(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];for(d=0;d<c.length;d++)oa(a,c[d]);return a}function qa(a,b){for(var c in b)a[c]=b[c]}var ra=document.createTextNode(""),sa=0,ta=[];(new MutationObserver(function(){for(;ta.length;)try{ta.shift()()}catch(a){throw ra.textContent=sa++,a;}})).observe(ra,{characterData:!0});
function ua(a){ta.push(a);ra.textContent=sa++}var va=!!document.contains;function wa(a,b){for(;b;){if(b==a)return!0;b=b.parentNode}return!1};var xa=[],ya;function za(a){ya||(ya=!0,ua(Aa));xa.push(a)}function Aa(){ya=!1;for(var a=!!xa.length;xa.length;)xa.shift()();return a}Aa.list=xa;function Ba(){this.a=!1;this.addedNodes=[];this.removedNodes=[];this.N=new Set}function Ca(a){a.a||(a.a=!0,ua(function(){Da(a)}))}function Da(a){if(a.a){a.a=!1;var b=a.takeRecords();b.length&&a.N.forEach(function(a){a(b)})}}Ba.prototype.takeRecords=function(){if(this.addedNodes.length||this.removedNodes.length){var a=[{addedNodes:this.addedNodes,removedNodes:this.removedNodes}];this.addedNodes=[];this.removedNodes=[];return a}return[]};
function Ea(a,b){a.__shady=a.__shady||{};a.__shady.H||(a.__shady.H=new Ba);a.__shady.H.N.add(b);var c=a.__shady.H;return{wa:b,w:c,ya:a,takeRecords:function(){return c.takeRecords()}}}function Fa(a){var b=a&&a.w;b&&(b.N.delete(a.wa),b.N.size||(a.ya.__shady.H=null))}
function Ga(a,b){var c=b.getRootNode();return a.map(function(a){var b=c===a.target.getRootNode();if(b&&a.addedNodes){if(b=Array.from(a.addedNodes).filter(function(a){return c===a.getRootNode()}),b.length)return a=Object.create(a),Object.defineProperty(a,"addedNodes",{value:b,configurable:!0}),a}else if(b)return a}).filter(function(a){return a})};var w={},Ha=Element.prototype.insertBefore,Ia=Element.prototype.removeChild,Ja=Element.prototype.setAttribute,La=Element.prototype.removeAttribute,Ma=Element.prototype.cloneNode,Na=Document.prototype.importNode,Oa=Element.prototype.addEventListener,Pa=Element.prototype.removeEventListener,Qa=Window.prototype.addEventListener,Ra=Window.prototype.removeEventListener,Sa=Element.prototype.dispatchEvent,Ta=Element.prototype.querySelector,Ua=Element.prototype.querySelectorAll,Va=Node.prototype.contains||
HTMLElement.prototype.contains;w.appendChild=Element.prototype.appendChild;w.insertBefore=Ha;w.removeChild=Ia;w.setAttribute=Ja;w.removeAttribute=La;w.cloneNode=Ma;w.importNode=Na;w.addEventListener=Oa;w.removeEventListener=Pa;w.Ta=Qa;w.Ua=Ra;w.dispatchEvent=Sa;w.querySelector=Ta;w.querySelectorAll=Ua;w.contains=Va;var Wa=/[&\u00A0"]/g,Xa=/[&\u00A0<>]/g;function Ya(a){switch(a){case "&":return"&amp;";case "<":return"&lt;";case ">":return"&gt;";case '"':return"&quot;";case "\u00a0":return"&nbsp;"}}function Za(a){for(var b={},c=0;c<a.length;c++)b[a[c]]=!0;return b}var $a=Za("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),ab=Za("style script xmp iframe noembed noframes plaintext noscript".split(" "));
function bb(a,b){"template"===a.localName&&(a=a.content);for(var c="",d=b?b(a):a.childNodes,e=0,f=d.length,h;e<f&&(h=d[e]);e++){a:{var g=h;var k=a;var l=b;switch(g.nodeType){case Node.ELEMENT_NODE:for(var m=g.localName,q="<"+m,E=g.attributes,J=0;k=E[J];J++)q+=" "+k.name+'="'+k.value.replace(Wa,Ya)+'"';q+=">";g=$a[m]?q:q+bb(g,l)+"</"+m+">";break a;case Node.TEXT_NODE:g=g.data;g=k&&ab[k.localName]?g:g.replace(Xa,Ya);break a;case Node.COMMENT_NODE:g="\x3c!--"+g.data+"--\x3e";break a;default:throw window.console.error(g),
Error("not implemented");}}c+=g}return c};var x={},y=document.createTreeWalker(document,NodeFilter.SHOW_ALL,null,!1),A=document.createTreeWalker(document,NodeFilter.SHOW_ELEMENT,null,!1);function cb(a){var b=[];y.currentNode=a;for(a=y.firstChild();a;)b.push(a),a=y.nextSibling();return b}x.parentNode=function(a){y.currentNode=a;return y.parentNode()};x.firstChild=function(a){y.currentNode=a;return y.firstChild()};x.lastChild=function(a){y.currentNode=a;return y.lastChild()};x.previousSibling=function(a){y.currentNode=a;return y.previousSibling()};
x.nextSibling=function(a){y.currentNode=a;return y.nextSibling()};x.childNodes=cb;x.parentElement=function(a){A.currentNode=a;return A.parentNode()};x.firstElementChild=function(a){A.currentNode=a;return A.firstChild()};x.lastElementChild=function(a){A.currentNode=a;return A.lastChild()};x.previousElementSibling=function(a){A.currentNode=a;return A.previousSibling()};x.nextElementSibling=function(a){A.currentNode=a;return A.nextSibling()};
x.children=function(a){var b=[];A.currentNode=a;for(a=A.firstChild();a;)b.push(a),a=A.nextSibling();return b};x.innerHTML=function(a){return bb(a,function(a){return cb(a)})};x.textContent=function(a){switch(a.nodeType){case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:a=document.createTreeWalker(a,NodeFilter.SHOW_TEXT,null,!1);for(var b="",c;c=a.nextNode();)b+=c.nodeValue;return b;default:return a.nodeValue}};var db=Object.getOwnPropertyDescriptor(Element.prototype,"innerHTML")||Object.getOwnPropertyDescriptor(HTMLElement.prototype,"innerHTML"),eb=document.implementation.createHTMLDocument("inert").createElement("div"),fb=Object.getOwnPropertyDescriptor(Document.prototype,"activeElement"),gb={parentElement:{get:function(){var a=this.__shady&&this.__shady.parentNode;a&&a.nodeType!==Node.ELEMENT_NODE&&(a=null);return void 0!==a?a:x.parentElement(this)},configurable:!0},parentNode:{get:function(){var a=this.__shady&&
this.__shady.parentNode;return void 0!==a?a:x.parentNode(this)},configurable:!0},nextSibling:{get:function(){var a=this.__shady&&this.__shady.nextSibling;return void 0!==a?a:x.nextSibling(this)},configurable:!0},previousSibling:{get:function(){var a=this.__shady&&this.__shady.previousSibling;return void 0!==a?a:x.previousSibling(this)},configurable:!0},className:{get:function(){return this.getAttribute("class")||""},set:function(a){this.setAttribute("class",a)},configurable:!0},nextElementSibling:{get:function(){if(this.__shady&&
void 0!==this.__shady.nextSibling){for(var a=this.nextSibling;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.nextSibling;return a}return x.nextElementSibling(this)},configurable:!0},previousElementSibling:{get:function(){if(this.__shady&&void 0!==this.__shady.previousSibling){for(var a=this.previousSibling;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.previousSibling;return a}return x.previousElementSibling(this)},configurable:!0}},hb={childNodes:{get:function(){if(t(this)){if(!this.__shady.childNodes){this.__shady.childNodes=
[];for(var a=this.firstChild;a;a=a.nextSibling)this.__shady.childNodes.push(a)}var b=this.__shady.childNodes}else b=x.childNodes(this);b.item=function(a){return b[a]};return b},configurable:!0},childElementCount:{get:function(){return this.children.length},configurable:!0},firstChild:{get:function(){var a=this.__shady&&this.__shady.firstChild;return void 0!==a?a:x.firstChild(this)},configurable:!0},lastChild:{get:function(){var a=this.__shady&&this.__shady.lastChild;return void 0!==a?a:x.lastChild(this)},
configurable:!0},textContent:{get:function(){if(t(this)){for(var a=[],b=0,c=this.childNodes,d;d=c[b];b++)d.nodeType!==Node.COMMENT_NODE&&a.push(d.textContent);return a.join("")}return x.textContent(this)},set:function(a){switch(this.nodeType){case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:for(;this.firstChild;)this.removeChild(this.firstChild);(0<a.length||this.nodeType===Node.ELEMENT_NODE)&&this.appendChild(document.createTextNode(a));break;default:this.nodeValue=a}},configurable:!0},firstElementChild:{get:function(){if(this.__shady&&
void 0!==this.__shady.firstChild){for(var a=this.firstChild;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.nextSibling;return a}return x.firstElementChild(this)},configurable:!0},lastElementChild:{get:function(){if(this.__shady&&void 0!==this.__shady.lastChild){for(var a=this.lastChild;a&&a.nodeType!==Node.ELEMENT_NODE;)a=a.previousSibling;return a}return x.lastElementChild(this)},configurable:!0},children:{get:function(){var a;t(this)?a=Array.prototype.filter.call(this.childNodes,function(a){return a.nodeType===
Node.ELEMENT_NODE}):a=x.children(this);a.item=function(b){return a[b]};return a},configurable:!0},innerHTML:{get:function(){var a="template"===this.localName?this.content:this;return t(this)?bb(a):x.innerHTML(a)},set:function(a){for(var b="template"===this.localName?this.content:this;b.firstChild;)b.removeChild(b.firstChild);for(db&&db.set?db.set.call(eb,a):eb.innerHTML=a;eb.firstChild;)b.appendChild(eb.firstChild)},configurable:!0}},ib={shadowRoot:{get:function(){return this.__shady&&this.__shady.Ma||
null},configurable:!0}},jb={activeElement:{get:function(){var a=fb&&fb.get?fb.get.call(document):r.G?void 0:document.activeElement;if(a&&a.nodeType){var b=!!u(this);if(this===document||b&&this.host!==a&&w.contains.call(this.host,a)){for(b=ma(a);b&&b!==this;)a=b.host,b=ma(a);a=this===document?b?null:a:b===this?a:null}else a=null}else a=null;return a},set:function(){},configurable:!0}};
function B(a,b,c){for(var d in b){var e=Object.getOwnPropertyDescriptor(a,d);e&&e.configurable||!e&&c?Object.defineProperty(a,d,b[d]):c&&console.warn("Could not define",d,"on",a)}}function C(a){B(a,gb);B(a,hb);B(a,jb)}var kb=r.G?function(){}:function(a){a.__shady&&a.__shady.ta||(a.__shady=a.__shady||{},a.__shady.ta=!0,B(a,gb,!0))},lb=r.G?function(){}:function(a){a.__shady&&a.__shady.ra||(a.__shady=a.__shady||{},a.__shady.ra=!0,B(a,hb,!0),B(a,ib,!0))};function mb(a,b,c){kb(a);c=c||null;a.__shady=a.__shady||{};b.__shady=b.__shady||{};c&&(c.__shady=c.__shady||{});a.__shady.previousSibling=c?c.__shady.previousSibling:b.lastChild;var d=a.__shady.previousSibling;d&&d.__shady&&(d.__shady.nextSibling=a);(d=a.__shady.nextSibling=c)&&d.__shady&&(d.__shady.previousSibling=a);a.__shady.parentNode=b;c?c===b.__shady.firstChild&&(b.__shady.firstChild=a):(b.__shady.lastChild=a,b.__shady.firstChild||(b.__shady.firstChild=a));b.__shady.childNodes=null}
function nb(a){if(!a.__shady||void 0===a.__shady.firstChild){a.__shady=a.__shady||{};a.__shady.firstChild=x.firstChild(a);a.__shady.lastChild=x.lastChild(a);lb(a);for(var b=a.__shady.childNodes=x.childNodes(a),c=0,d;c<b.length&&(d=b[c]);c++)d.__shady=d.__shady||{},d.__shady.parentNode=a,d.__shady.nextSibling=b[c+1]||null,d.__shady.previousSibling=b[c-1]||null,kb(d)}};function ob(a,b,c){if(b===a)throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent.");if(c){var d=c.__shady&&c.__shady.parentNode;if(void 0!==d&&d!==a||void 0===d&&x.parentNode(c)!==a)throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.");}if(c===b)return b;b.parentNode&&pb(b.parentNode,b);d=ma(a);var e;if(e=d)a:{if(!b.__noInsertionPoint){var f;"slot"===b.localName?f=[b]:
b.querySelectorAll&&(f=b.querySelectorAll("slot"));if(f&&f.length){e=f;break a}}e=void 0}(f=e)&&d.C.push.apply(d.C,[].concat(f instanceof Array?f:ja(ia(f))));d&&("slot"===a.localName||f)&&D(d);if(t(a)){d=c;lb(a);a.__shady=a.__shady||{};void 0!==a.__shady.firstChild&&(a.__shady.childNodes=null);if(b.nodeType===Node.DOCUMENT_FRAGMENT_NODE){f=b.childNodes;for(e=0;e<f.length;e++)mb(f[e],a,d);b.__shady=b.__shady||{};d=void 0!==b.__shady.firstChild?null:void 0;b.__shady.firstChild=b.__shady.lastChild=d;
b.__shady.childNodes=d}else mb(b,a,d);if(qb(a)){D(a.__shady.root);var h=!0}else a.__shady.root&&(h=!0)}h||(h=u(a)?a.host:a,c?(c=rb(c),w.insertBefore.call(h,b,c)):w.appendChild.call(h,b));sb(a,b);return b}
function pb(a,b){if(b.parentNode!==a)throw Error("The node to be removed is not a child of this node: "+b);var c=ma(b);if(t(a)){b.__shady=b.__shady||{};a.__shady=a.__shady||{};b===a.__shady.firstChild&&(a.__shady.firstChild=b.__shady.nextSibling);b===a.__shady.lastChild&&(a.__shady.lastChild=b.__shady.previousSibling);var d=b.__shady.previousSibling,e=b.__shady.nextSibling;d&&(d.__shady=d.__shady||{},d.__shady.nextSibling=e);e&&(e.__shady=e.__shady||{},e.__shady.previousSibling=d);b.__shady.parentNode=
b.__shady.previousSibling=b.__shady.nextSibling=void 0;void 0!==a.__shady.childNodes&&(a.__shady.childNodes=null);if(qb(a)){D(a.__shady.root);var f=!0}}tb(b);if(c){(d=a&&"slot"===a.localName)&&(f=!0);ub(c);e=c.i;for(var h in e)for(var g=e[h],k=0;k<g.length;k++){var l=g[k];if(wa(b,l)){g.splice(k,1);var m=c.m.indexOf(l);0<=m&&c.m.splice(m,1);k--;if(m=l.__shady.D)for(l=0;l<m.length;l++){var q=m[l],E=x.parentNode(q);E&&w.removeChild.call(E,q)}m=!0}}(m||d)&&D(c)}f||(f=u(a)?a.host:a,(!a.__shady.root&&"slot"!==
b.localName||f===x.parentNode(b))&&w.removeChild.call(f,b));sb(a,null,b);return b}function tb(a){if(a.__shady&&void 0!==a.__shady.ca)for(var b=a.childNodes,c=0,d=b.length,e;c<d&&(e=b[c]);c++)tb(e);a.__shady&&(a.__shady.ca=void 0)}function rb(a){var b=a;a&&"slot"===a.localName&&(b=(b=a.__shady&&a.__shady.D)&&b.length?b[0]:rb(a.nextSibling));return b}function qb(a){return(a=a&&a.__shady&&a.__shady.root)&&vb(a)}
function wb(a,b){if("slot"===b)a=a.parentNode,qb(a)&&D(a.__shady.root);else if("slot"===a.localName&&"name"===b&&(b=ma(a))){var c=a.ua,d=xb(a);if(d!==c){c=b.i[c];var e=c.indexOf(a);0<=e&&c.splice(e,1);c=b.i[d]||(b.i[d]=[]);c.push(a);1<c.length&&(b.i[d]=yb(c))}D(b)}}function sb(a,b,c){if(a=a.__shady&&a.__shady.H)b&&a.addedNodes.push(b),c&&a.removedNodes.push(c),Ca(a)}
function zb(a){if(a&&a.nodeType){a.__shady=a.__shady||{};var b=a.__shady.ca;void 0===b&&(u(a)?b=a:b=(b=a.parentNode)?zb(b):a,w.contains.call(document.documentElement,a)&&(a.__shady.ca=b));return b}}function Ab(a,b,c){var d=[];Bb(a.childNodes,b,c,d);return d}function Bb(a,b,c,d){for(var e=0,f=a.length,h;e<f&&(h=a[e]);e++){var g;if(g=h.nodeType===Node.ELEMENT_NODE){g=h;var k=b,l=c,m=d,q=k(g);q&&m.push(g);l&&l(q)?g=q:(Bb(g.childNodes,k,l,m),g=void 0)}if(g)break}}var Cb=null;
function Db(a,b,c){Cb||(Cb=window.ShadyCSS&&window.ShadyCSS.ScopingShim);Cb&&"class"===b?Cb.setElementClass(a,c):(w.setAttribute.call(a,b,c),wb(a,b))}function Eb(a,b){if(a.ownerDocument!==document)return w.importNode.call(document,a,b);var c=w.importNode.call(document,a,!1);if(b){a=a.childNodes;b=0;for(var d;b<a.length;b++)d=Eb(a[b],!0),c.appendChild(d)}return c};var Fb="__eventWrappers"+Date.now(),Gb={blur:!0,focus:!0,focusin:!0,focusout:!0,click:!0,dblclick:!0,mousedown:!0,mouseenter:!0,mouseleave:!0,mousemove:!0,mouseout:!0,mouseover:!0,mouseup:!0,wheel:!0,beforeinput:!0,input:!0,keydown:!0,keyup:!0,compositionstart:!0,compositionupdate:!0,compositionend:!0,touchstart:!0,touchend:!0,touchmove:!0,touchcancel:!0,pointerover:!0,pointerenter:!0,pointerdown:!0,pointermove:!0,pointerup:!0,pointercancel:!0,pointerout:!0,pointerleave:!0,gotpointercapture:!0,lostpointercapture:!0,
dragstart:!0,drag:!0,dragenter:!0,dragleave:!0,dragover:!0,drop:!0,dragend:!0,DOMActivate:!0,DOMFocusIn:!0,DOMFocusOut:!0,keypress:!0};function Hb(a,b){var c=[],d=a;for(a=a===window?window:a.getRootNode();d;)c.push(d),d=d.assignedSlot?d.assignedSlot:d.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&d.host&&(b||d!==a)?d.host:d.parentNode;c[c.length-1]===document&&c.push(window);return c}
function Ib(a,b){if(!u)return a;a=Hb(a,!0);for(var c=0,d,e,f,h;c<b.length;c++)if(d=b[c],f=d===window?window:d.getRootNode(),f!==e&&(h=a.indexOf(f),e=f),!u(f)||-1<h)return d}
var Jb={get composed(){!1!==this.isTrusted&&void 0===this.S&&(this.S=Gb[this.type]);return this.S||!1},composedPath:function(){this.fa||(this.fa=Hb(this.__target,this.composed));return this.fa},get target(){return Ib(this.currentTarget,this.composedPath())},get relatedTarget(){if(!this.ga)return null;this.ha||(this.ha=Hb(this.ga,!0));return Ib(this.currentTarget,this.ha)},stopPropagation:function(){Event.prototype.stopPropagation.call(this);this.T=!0},stopImmediatePropagation:function(){Event.prototype.stopImmediatePropagation.call(this);
this.T=this.qa=!0}};function Kb(a){function b(b,d){b=new a(b,d);b.S=d&&!!d.composed;return b}qa(b,a);b.prototype=a.prototype;return b}var Mb={focus:!0,blur:!0};function Nb(a,b,c){if(c=b.__handlers&&b.__handlers[a.type]&&b.__handlers[a.type][c])for(var d=0,e;(e=c[d])&&a.target!==a.relatedTarget&&(e.call(b,a),!a.qa);d++);}
function Ob(a){var b=a.composedPath();Object.defineProperty(a,"currentTarget",{get:function(){return d},configurable:!0});for(var c=b.length-1;0<=c;c--){var d=b[c];Nb(a,d,"capture");if(a.T)return}Object.defineProperty(a,"eventPhase",{get:function(){return Event.AT_TARGET}});var e;for(c=0;c<b.length;c++){d=b[c];var f=d.__shady&&d.__shady.root;if(0===c||f&&f===e)if(Nb(a,d,"bubble"),d!==window&&(e=d.getRootNode()),a.T)break}}
function Pb(a,b,c,d,e,f){for(var h=0;h<a.length;h++){var g=a[h],k=g.type,l=g.capture,m=g.once,q=g.passive;if(b===g.node&&c===k&&d===l&&e===m&&f===q)return h}return-1}
function Qb(a,b,c){if(b){if(c&&"object"===typeof c){var d=!!c.capture;var e=!!c.once;var f=!!c.passive}else d=!!c,f=e=!1;var h=c&&c.U||this,g=b[Fb];if(g){if(-1<Pb(g,h,a,d,e,f))return}else b[Fb]=[];g=function(d){e&&this.removeEventListener(a,b,c);d.__target||Rb(d);if(h!==this){var f=Object.getOwnPropertyDescriptor(d,"currentTarget");Object.defineProperty(d,"currentTarget",{get:function(){return h},configurable:!0})}if(d.composed||-1<d.composedPath().indexOf(h))if(d.target===d.relatedTarget)d.eventPhase===
Event.BUBBLING_PHASE&&d.stopImmediatePropagation();else if(d.eventPhase===Event.CAPTURING_PHASE||d.bubbles||d.target===h){var g="object"===typeof b&&b.handleEvent?b.handleEvent(d):b.call(h,d);h!==this&&(f?(Object.defineProperty(d,"currentTarget",f),f=null):delete d.currentTarget);return g}};b[Fb].push({node:this,type:a,capture:d,once:e,passive:f,Va:g});Mb[a]?(this.__handlers=this.__handlers||{},this.__handlers[a]=this.__handlers[a]||{capture:[],bubble:[]},this.__handlers[a][d?"capture":"bubble"].push(g)):
(this instanceof Window?w.Ta:w.addEventListener).call(this,a,g,c)}}
function Sb(a,b,c){if(b){if(c&&"object"===typeof c){var d=!!c.capture;var e=!!c.once;var f=!!c.passive}else d=!!c,f=e=!1;var h=c&&c.U||this,g=void 0;var k=null;try{k=b[Fb]}catch(l){}k&&(e=Pb(k,h,a,d,e,f),-1<e&&(g=k.splice(e,1)[0].Va,k.length||(b[Fb]=void 0)));(this instanceof Window?w.Ua:w.removeEventListener).call(this,a,g||b,c);g&&Mb[a]&&this.__handlers&&this.__handlers[a]&&(a=this.__handlers[a][d?"capture":"bubble"],g=a.indexOf(g),-1<g&&a.splice(g,1))}}
function Tb(){for(var a in Mb)window.addEventListener(a,function(a){a.__target||(Rb(a),Ob(a))},!0)}function Rb(a){a.__target=a.target;a.ga=a.relatedTarget;if(r.G){var b=Object.getPrototypeOf(a);if(!b.hasOwnProperty("__patchProto")){var c=Object.create(b);c.Xa=b;oa(c,Jb);b.__patchProto=c}a.__proto__=b.__patchProto}else oa(a,Jb)}var Ub=Kb(window.Event),Vb=Kb(window.CustomEvent),Wb=Kb(window.MouseEvent);function Xb(a,b){return{index:a,I:[],M:b}}
function Yb(a,b,c,d){var e=0,f=0,h=0,g=0,k=Math.min(b-e,d-f);if(0==e&&0==f)a:{for(h=0;h<k;h++)if(a[h]!==c[h])break a;h=k}if(b==a.length&&d==c.length){g=a.length;for(var l=c.length,m=0;m<k-h&&Zb(a[--g],c[--l]);)m++;g=m}e+=h;f+=h;b-=g;d-=g;if(0==b-e&&0==d-f)return[];if(e==b){for(b=Xb(e,0);f<d;)b.I.push(c[f++]);return[b]}if(f==d)return[Xb(e,b-e)];k=e;h=f;d=d-h+1;g=b-k+1;b=Array(d);for(l=0;l<d;l++)b[l]=Array(g),b[l][0]=l;for(l=0;l<g;l++)b[0][l]=l;for(l=1;l<d;l++)for(m=1;m<g;m++)if(a[k+m-1]===c[h+l-1])b[l][m]=
b[l-1][m-1];else{var q=b[l-1][m]+1,E=b[l][m-1]+1;b[l][m]=q<E?q:E}k=b.length-1;h=b[0].length-1;d=b[k][h];for(a=[];0<k||0<h;)0==k?(a.push(2),h--):0==h?(a.push(3),k--):(g=b[k-1][h-1],l=b[k-1][h],m=b[k][h-1],q=l<m?l<g?l:g:m<g?m:g,q==g?(g==d?a.push(0):(a.push(1),d=g),k--,h--):q==l?(a.push(3),k--,d=l):(a.push(2),h--,d=m));a.reverse();b=void 0;k=[];for(h=0;h<a.length;h++)switch(a[h]){case 0:b&&(k.push(b),b=void 0);e++;f++;break;case 1:b||(b=Xb(e,0));b.M++;e++;b.I.push(c[f]);f++;break;case 2:b||(b=Xb(e,0));
b.M++;e++;break;case 3:b||(b=Xb(e,0)),b.I.push(c[f]),f++}b&&k.push(b);return k}function Zb(a,b){return a===b};var $b={};function F(a,b,c){if(a!==$b)throw new TypeError("Illegal constructor");a=document.createDocumentFragment();a.__proto__=F.prototype;a.sa="ShadyRoot";nb(b);nb(a);a.host=b;a.a=c&&c.mode;b.__shady=b.__shady||{};b.__shady.root=a;b.__shady.Ma="closed"!==a.a?a:null;a.L=!1;a.m=[];a.i={};a.C=[];c=x.childNodes(b);for(var d=0,e=c.length;d<e;d++)w.removeChild.call(b,c[d]);return a}F.prototype=Object.create(DocumentFragment.prototype);function D(a){a.L||(a.L=!0,za(function(){return ac(a)}))}
function ac(a){for(var b;a;){a.L&&(b=a);a:{var c=a;a=c.host.getRootNode();if(u(a))for(var d=c.host.childNodes,e=0;e<d.length;e++)if(c=d[e],"slot"==c.localName)break a;a=void 0}}b&&b._renderRoot()}
F.prototype._renderRoot=function(){this.L=!1;ub(this);for(var a=0,b;a<this.m.length;a++){b=this.m[a];var c=b.__shady.assignedNodes;b.__shady.assignedNodes=[];b.__shady.D=[];if(b.__shady.ia=c)for(var d=0;d<c.length;d++){var e=c[d];e.__shady.Z=e.__shady.assignedSlot;e.__shady.assignedSlot===b&&(e.__shady.assignedSlot=null)}}for(b=this.host.firstChild;b;b=b.nextSibling)bc(this,b);for(a=0;a<this.m.length;a++){b=this.m[a];if(!b.__shady.assignedNodes.length)for(c=b.firstChild;c;c=c.nextSibling)bc(this,
c,b);c=b.parentNode;(c=c.__shady&&c.__shady.root)&&vb(c)&&c._renderRoot();cc(this,b.__shady.D,b.__shady.assignedNodes);if(c=b.__shady.ia){for(d=0;d<c.length;d++)c[d].__shady.Z=null;b.__shady.ia=null;c.length>b.__shady.assignedNodes.length&&(b.__shady.aa=!0)}b.__shady.aa&&(b.__shady.aa=!1,dc(this,b))}a=this.m;b=[];for(c=0;c<a.length;c++)d=a[c].parentNode,d.__shady&&d.__shady.root||!(0>b.indexOf(d))||b.push(d);for(a=0;a<b.length;a++){c=b[a];d=c===this?this.host:c;e=[];c=c.childNodes;for(var f=0;f<c.length;f++){var h=
c[f];if("slot"==h.localName){h=h.__shady.D;for(var g=0;g<h.length;g++)e.push(h[g])}else e.push(h)}c=void 0;f=x.childNodes(d);h=Yb(e,e.length,f,f.length);for(var k=g=0;g<h.length&&(c=h[g]);g++){for(var l=0,m;l<c.I.length&&(m=c.I[l]);l++)x.parentNode(m)===d&&w.removeChild.call(d,m),f.splice(c.index+k,1);k-=c.M}for(k=0;k<h.length&&(c=h[k]);k++)for(g=f[c.index],l=c.index;l<c.index+c.M;l++)m=e[l],w.insertBefore.call(d,m,g),f.splice(l,0,m)}};
function bc(a,b,c){b.__shady=b.__shady||{};var d=b.__shady.Z;b.__shady.Z=null;c||(c=(a=a.i[b.slot||"__catchall"])&&a[0]);c?(c.__shady.assignedNodes.push(b),b.__shady.assignedSlot=c):b.__shady.assignedSlot=void 0;d!==b.__shady.assignedSlot&&b.__shady.assignedSlot&&(b.__shady.assignedSlot.__shady.aa=!0)}function cc(a,b,c){for(var d=0,e;d<c.length&&(e=c[d]);d++)if("slot"==e.localName){var f=e.__shady.assignedNodes;f&&f.length&&cc(a,b,f)}else b.push(c[d])}
function dc(a,b){w.dispatchEvent.call(b,new Event("slotchange"));b.__shady.assignedSlot&&dc(a,b.__shady.assignedSlot)}function ub(a){if(a.C.length){for(var b=a.C,c,d=0;d<b.length;d++){var e=b[d];e.__shady=e.__shady||{};nb(e);nb(e.parentNode);var f=xb(e);a.i[f]?(c=c||{},c[f]=!0,a.i[f].push(e)):a.i[f]=[e];a.m.push(e)}if(c)for(var h in c)a.i[h]=yb(a.i[h]);a.C=[]}}function xb(a){var b=a.name||a.getAttribute("name")||"__catchall";return a.ua=b}
function yb(a){return a.sort(function(a,c){a=ec(a);for(var b=ec(c),e=0;e<a.length;e++){c=a[e];var f=b[e];if(c!==f)return a=Array.from(c.parentNode.childNodes),a.indexOf(c)-a.indexOf(f)}})}function ec(a){var b=[];do b.unshift(a);while(a=a.parentNode);return b}function vb(a){ub(a);return!!a.m.length}F.prototype.addEventListener=function(a,b,c){"object"!==typeof c&&(c={capture:!!c});c.U=this;this.host.addEventListener(a,b,c)};
F.prototype.removeEventListener=function(a,b,c){"object"!==typeof c&&(c={capture:!!c});c.U=this;this.host.removeEventListener(a,b,c)};F.prototype.getElementById=function(a){return Ab(this,function(b){return b.id==a},function(a){return!!a})[0]||null};var fc=F.prototype;B(fc,hb,!0);B(fc,jb,!0);function gc(a){var b=a.getRootNode();u(b)&&ac(b);return a.__shady&&a.__shady.assignedSlot||null}
var hc={addEventListener:Qb.bind(window),removeEventListener:Sb.bind(window)},ic={addEventListener:Qb,removeEventListener:Sb,appendChild:function(a){return ob(this,a)},insertBefore:function(a,b){return ob(this,a,b)},removeChild:function(a){return pb(this,a)},replaceChild:function(a,b){ob(this,a,b);pb(this,b);return a},cloneNode:function(a){if("template"==this.localName)var b=w.cloneNode.call(this,a);else if(b=w.cloneNode.call(this,!1),a){a=this.childNodes;for(var c=0,d;c<a.length;c++)d=a[c].cloneNode(!0),
b.appendChild(d)}return b},getRootNode:function(){return zb(this)},contains:function(a){return wa(this,a)},get isConnected(){var a=this.ownerDocument;if(va&&w.contains.call(a,this)||a.documentElement&&w.contains.call(a.documentElement,this))return!0;for(a=this;a&&!(a instanceof Document);)a=a.parentNode||(a instanceof F?a.host:void 0);return!!(a&&a instanceof Document)},dispatchEvent:function(a){Aa();return w.dispatchEvent.call(this,a)}},jc={get assignedSlot(){return gc(this)}},kc={querySelector:function(a){return Ab(this,
function(b){return na.call(b,a)},function(a){return!!a})[0]||null},querySelectorAll:function(a){return Ab(this,function(b){return na.call(b,a)})}},lc={assignedNodes:function(a){if("slot"===this.localName){var b=this.getRootNode();u(b)&&ac(b);return this.__shady?(a&&a.flatten?this.__shady.D:this.__shady.assignedNodes)||[]:[]}}},mc=pa({setAttribute:function(a,b){Db(this,a,b)},removeAttribute:function(a){w.removeAttribute.call(this,a);wb(this,a)},attachShadow:function(a){if(!this)throw"Must provide a host.";
if(!a)throw"Not enough arguments.";return new F($b,this,a)},get slot(){return this.getAttribute("slot")},set slot(a){Db(this,"slot",a)},get assignedSlot(){return gc(this)}},kc,lc);Object.defineProperties(mc,ib);var nc=pa({importNode:function(a,b){return Eb(a,b)},getElementById:function(a){return Ab(this,function(b){return b.id==a},function(a){return!!a})[0]||null}},kc);Object.defineProperties(nc,{_activeElement:jb.activeElement});
var oc=HTMLElement.prototype.blur,pc=pa({blur:function(){var a=this.__shady&&this.__shady.root;(a=a&&a.activeElement)?a.blur():oc.call(this)}});function G(a,b){for(var c=Object.getOwnPropertyNames(b),d=0;d<c.length;d++){var e=c[d],f=Object.getOwnPropertyDescriptor(b,e);f.value?a[e]=f.value:Object.defineProperty(a,e,f)}};if(r.la){var ShadyDOM={inUse:r.la,patch:function(a){return a},isShadyRoot:u,enqueue:za,flush:Aa,settings:r,filterMutations:Ga,observeChildren:Ea,unobserveChildren:Fa,nativeMethods:w,nativeTree:x};window.ShadyDOM=ShadyDOM;window.Event=Ub;window.CustomEvent=Vb;window.MouseEvent=Wb;Tb();var qc=window.customElements&&window.customElements.nativeHTMLElement||HTMLElement;G(window.Node.prototype,ic);G(window.Window.prototype,hc);G(window.Text.prototype,jc);G(window.DocumentFragment.prototype,kc);G(window.Element.prototype,
mc);G(window.Document.prototype,nc);window.HTMLSlotElement&&G(window.HTMLSlotElement.prototype,lc);G(qc.prototype,pc);r.G&&(C(window.Node.prototype),C(window.Text.prototype),C(window.DocumentFragment.prototype),C(window.Element.prototype),C(qc.prototype),C(window.Document.prototype),window.HTMLSlotElement&&C(window.HTMLSlotElement.prototype));window.ShadowRoot=F};var rc=new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));function sc(a){var b=rc.has(a);a=/^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(a);return!b&&a}function H(a){var b=a.isConnected;if(void 0!==b)return b;for(;a&&!(a.__CE_isImportDocument||a instanceof Document);)a=a.parentNode||(window.ShadowRoot&&a instanceof ShadowRoot?a.host:void 0);return!(!a||!(a.__CE_isImportDocument||a instanceof Document))}
function tc(a,b){for(;b&&b!==a&&!b.nextSibling;)b=b.parentNode;return b&&b!==a?b.nextSibling:null}
function I(a,b,c){c=void 0===c?new Set:c;for(var d=a;d;){if(d.nodeType===Node.ELEMENT_NODE){var e=d;b(e);var f=e.localName;if("link"===f&&"import"===e.getAttribute("rel")){d=e.import;if(d instanceof Node&&!c.has(d))for(c.add(d),d=d.firstChild;d;d=d.nextSibling)I(d,b,c);d=tc(a,e);continue}else if("template"===f){d=tc(a,e);continue}if(e=e.__CE_shadowRoot)for(e=e.firstChild;e;e=e.nextSibling)I(e,b,c)}d=d.firstChild?d.firstChild:tc(a,d)}}function K(a,b,c){a[b]=c};function uc(){this.a=new Map;this.l=new Map;this.f=[];this.c=!1}function vc(a,b,c){a.a.set(b,c);a.l.set(c.constructor,c)}function wc(a,b){a.c=!0;a.f.push(b)}function xc(a,b){a.c&&I(b,function(b){return a.b(b)})}uc.prototype.b=function(a){if(this.c&&!a.__CE_patched){a.__CE_patched=!0;for(var b=0;b<this.f.length;b++)this.f[b](a)}};function L(a,b){var c=[];I(b,function(a){return c.push(a)});for(b=0;b<c.length;b++){var d=c[b];1===d.__CE_state?a.connectedCallback(d):yc(a,d)}}
function M(a,b){var c=[];I(b,function(a){return c.push(a)});for(b=0;b<c.length;b++){var d=c[b];1===d.__CE_state&&a.disconnectedCallback(d)}}
function N(a,b,c){c=void 0===c?{}:c;var d=c.Sa||new Set,e=c.oa||function(b){return yc(a,b)},f=[];I(b,function(b){if("link"===b.localName&&"import"===b.getAttribute("rel")){var c=b.import;c instanceof Node&&(c.__CE_isImportDocument=!0,c.__CE_hasRegistry=!0);c&&"complete"===c.readyState?c.__CE_documentLoadHandled=!0:b.addEventListener("load",function(){var c=b.import;if(!c.__CE_documentLoadHandled){c.__CE_documentLoadHandled=!0;var f=new Set(d);f.delete(c);N(a,c,{Sa:f,oa:e})}})}else f.push(b)},d);if(a.c)for(b=
0;b<f.length;b++)a.b(f[b]);for(b=0;b<f.length;b++)e(f[b])}
function yc(a,b){if(void 0===b.__CE_state){var c=b.ownerDocument;if(c.defaultView||c.__CE_isImportDocument&&c.__CE_hasRegistry)if(c=a.a.get(b.localName)){c.constructionStack.push(b);var d=c.constructor;try{try{if(new d!==b)throw Error("The custom element constructor did not produce the element being upgraded.");}finally{c.constructionStack.pop()}}catch(h){throw b.__CE_state=2,h;}b.__CE_state=1;b.__CE_definition=c;if(c.attributeChangedCallback)for(c=c.observedAttributes,d=0;d<c.length;d++){var e=c[d],
f=b.getAttribute(e);null!==f&&a.attributeChangedCallback(b,e,null,f,null)}H(b)&&a.connectedCallback(b)}}}uc.prototype.connectedCallback=function(a){var b=a.__CE_definition;b.connectedCallback&&b.connectedCallback.call(a)};uc.prototype.disconnectedCallback=function(a){var b=a.__CE_definition;b.disconnectedCallback&&b.disconnectedCallback.call(a)};
uc.prototype.attributeChangedCallback=function(a,b,c,d,e){var f=a.__CE_definition;f.attributeChangedCallback&&-1<f.observedAttributes.indexOf(b)&&f.attributeChangedCallback.call(a,b,c,d,e)};function zc(a){var b=document;this.h=a;this.a=b;this.w=void 0;N(this.h,this.a);"loading"===this.a.readyState&&(this.w=new MutationObserver(this.b.bind(this)),this.w.observe(this.a,{childList:!0,subtree:!0}))}function Ac(a){a.w&&a.w.disconnect()}zc.prototype.b=function(a){var b=this.a.readyState;"interactive"!==b&&"complete"!==b||Ac(this);for(b=0;b<a.length;b++)for(var c=a[b].addedNodes,d=0;d<c.length;d++)N(this.h,c[d])};function Bc(){var a=this;this.b=this.a=void 0;this.c=new Promise(function(b){a.b=b;a.a&&b(a.a)})}function Cc(a){if(a.a)throw Error("Already resolved.");a.a=void 0;a.b&&a.b(void 0)};function O(a){this.W=!1;this.h=a;this.$=new Map;this.X=function(a){return a()};this.K=!1;this.Y=[];this.xa=new zc(a)}
O.prototype.define=function(a,b){var c=this;if(!(b instanceof Function))throw new TypeError("Custom element constructors must be functions.");if(!sc(a))throw new SyntaxError("The element name '"+a+"' is not valid.");if(this.h.a.get(a))throw Error("A custom element with name '"+a+"' has already been defined.");if(this.W)throw Error("A custom element is already being defined.");this.W=!0;try{var d=function(a){var b=e[a];if(void 0!==b&&!(b instanceof Function))throw Error("The '"+a+"' callback must be a function.");
return b},e=b.prototype;if(!(e instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");var f=d("connectedCallback");var h=d("disconnectedCallback");var g=d("adoptedCallback");var k=d("attributeChangedCallback");var l=b.observedAttributes||[]}catch(m){return}finally{this.W=!1}b={localName:a,constructor:b,connectedCallback:f,disconnectedCallback:h,adoptedCallback:g,attributeChangedCallback:k,observedAttributes:l,constructionStack:[]};vc(this.h,a,b);this.Y.push(b);
this.K||(this.K=!0,this.X(function(){return Dc(c)}))};function Dc(a){if(!1!==a.K){a.K=!1;for(var b=a.Y,c=[],d=new Map,e=0;e<b.length;e++)d.set(b[e].localName,[]);N(a.h,document,{oa:function(b){if(void 0===b.__CE_state){var e=b.localName,f=d.get(e);f?f.push(b):a.h.a.get(e)&&c.push(b)}}});for(e=0;e<c.length;e++)yc(a.h,c[e]);for(;0<b.length;){var f=b.shift();e=f.localName;f=d.get(f.localName);for(var h=0;h<f.length;h++)yc(a.h,f[h]);(e=a.$.get(e))&&Cc(e)}}}O.prototype.get=function(a){if(a=this.h.a.get(a))return a.constructor};
O.prototype.whenDefined=function(a){if(!sc(a))return Promise.reject(new SyntaxError("'"+a+"' is not a valid custom element name."));var b=this.$.get(a);if(b)return b.c;b=new Bc;this.$.set(a,b);this.h.a.get(a)&&!this.Y.some(function(b){return b.localName===a})&&Cc(b);return b.c};O.prototype.La=function(a){Ac(this.xa);var b=this.X;this.X=function(c){return a(function(){return b(c)})}};window.CustomElementRegistry=O;O.prototype.define=O.prototype.define;O.prototype.get=O.prototype.get;
O.prototype.whenDefined=O.prototype.whenDefined;O.prototype.polyfillWrapFlushCallback=O.prototype.La;var Ec=window.Document.prototype.createElement,Fc=window.Document.prototype.createElementNS,Gc=window.Document.prototype.importNode,Hc=window.Document.prototype.prepend,Ic=window.Document.prototype.append,Jc=window.DocumentFragment.prototype.prepend,Kc=window.DocumentFragment.prototype.append,Lc=window.Node.prototype.cloneNode,Mc=window.Node.prototype.appendChild,Nc=window.Node.prototype.insertBefore,Oc=window.Node.prototype.removeChild,Pc=window.Node.prototype.replaceChild,Qc=Object.getOwnPropertyDescriptor(window.Node.prototype,
"textContent"),Rc=window.Element.prototype.attachShadow,Sc=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),Tc=window.Element.prototype.getAttribute,Uc=window.Element.prototype.setAttribute,Vc=window.Element.prototype.removeAttribute,Wc=window.Element.prototype.getAttributeNS,Xc=window.Element.prototype.setAttributeNS,Yc=window.Element.prototype.removeAttributeNS,Zc=window.Element.prototype.insertAdjacentElement,$c=window.Element.prototype.prepend,ad=window.Element.prototype.append,
bd=window.Element.prototype.before,cd=window.Element.prototype.after,dd=window.Element.prototype.replaceWith,ed=window.Element.prototype.remove,fd=window.HTMLElement,gd=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),hd=window.HTMLElement.prototype.insertAdjacentElement;var id=new function(){};function jd(){var a=P;window.HTMLElement=function(){function b(){var b=this.constructor,d=a.l.get(b);if(!d)throw Error("The custom element being constructed was not registered with `customElements`.");var e=d.constructionStack;if(0===e.length)return e=Ec.call(document,d.localName),Object.setPrototypeOf(e,b.prototype),e.__CE_state=1,e.__CE_definition=d,a.b(e),e;d=e.length-1;var f=e[d];if(f===id)throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");
e[d]=id;Object.setPrototypeOf(f,b.prototype);a.b(f);return f}b.prototype=fd.prototype;return b}()};function kd(a,b,c){function d(b){return function(c){for(var d=[],e=0;e<arguments.length;++e)d[e-0]=arguments[e];e=[];for(var f=[],l=0;l<d.length;l++){var m=d[l];m instanceof Element&&H(m)&&f.push(m);if(m instanceof DocumentFragment)for(m=m.firstChild;m;m=m.nextSibling)e.push(m);else e.push(m)}b.apply(this,d);for(d=0;d<f.length;d++)M(a,f[d]);if(H(this))for(d=0;d<e.length;d++)f=e[d],f instanceof Element&&L(a,f)}}void 0!==c.P&&(b.prepend=d(c.P));void 0!==c.append&&(b.append=d(c.append))};function ld(){var a=P;K(Document.prototype,"createElement",function(b){if(this.__CE_hasRegistry){var c=a.a.get(b);if(c)return new c.constructor}b=Ec.call(this,b);a.b(b);return b});K(Document.prototype,"importNode",function(b,c){b=Gc.call(this,b,c);this.__CE_hasRegistry?N(a,b):xc(a,b);return b});K(Document.prototype,"createElementNS",function(b,c){if(this.__CE_hasRegistry&&(null===b||"http://www.w3.org/1999/xhtml"===b)){var d=a.a.get(c);if(d)return new d.constructor}b=Fc.call(this,b,c);a.b(b);return b});
kd(a,Document.prototype,{P:Hc,append:Ic})};function md(){var a=P;function b(b,d){Object.defineProperty(b,"textContent",{enumerable:d.enumerable,configurable:!0,get:d.get,set:function(b){if(this.nodeType===Node.TEXT_NODE)d.set.call(this,b);else{var c=void 0;if(this.firstChild){var e=this.childNodes,g=e.length;if(0<g&&H(this)){c=Array(g);for(var k=0;k<g;k++)c[k]=e[k]}}d.set.call(this,b);if(c)for(b=0;b<c.length;b++)M(a,c[b])}}})}K(Node.prototype,"insertBefore",function(b,d){if(b instanceof DocumentFragment){var c=Array.prototype.slice.apply(b.childNodes);
b=Nc.call(this,b,d);if(H(this))for(d=0;d<c.length;d++)L(a,c[d]);return b}c=H(b);d=Nc.call(this,b,d);c&&M(a,b);H(this)&&L(a,b);return d});K(Node.prototype,"appendChild",function(b){if(b instanceof DocumentFragment){var c=Array.prototype.slice.apply(b.childNodes);b=Mc.call(this,b);if(H(this))for(var e=0;e<c.length;e++)L(a,c[e]);return b}c=H(b);e=Mc.call(this,b);c&&M(a,b);H(this)&&L(a,b);return e});K(Node.prototype,"cloneNode",function(b){b=Lc.call(this,b);this.ownerDocument.__CE_hasRegistry?N(a,b):
xc(a,b);return b});K(Node.prototype,"removeChild",function(b){var c=H(b),e=Oc.call(this,b);c&&M(a,b);return e});K(Node.prototype,"replaceChild",function(b,d){if(b instanceof DocumentFragment){var c=Array.prototype.slice.apply(b.childNodes);b=Pc.call(this,b,d);if(H(this))for(M(a,d),d=0;d<c.length;d++)L(a,c[d]);return b}c=H(b);var f=Pc.call(this,b,d),h=H(this);h&&M(a,d);c&&M(a,b);h&&L(a,b);return f});Qc&&Qc.get?b(Node.prototype,Qc):wc(a,function(a){b(a,{enumerable:!0,configurable:!0,get:function(){for(var a=
[],b=0;b<this.childNodes.length;b++)a.push(this.childNodes[b].textContent);return a.join("")},set:function(a){for(;this.firstChild;)Oc.call(this,this.firstChild);Mc.call(this,document.createTextNode(a))}})})};function nd(a){var b=Element.prototype;function c(b){return function(c){for(var d=[],e=0;e<arguments.length;++e)d[e-0]=arguments[e];e=[];for(var g=[],k=0;k<d.length;k++){var l=d[k];l instanceof Element&&H(l)&&g.push(l);if(l instanceof DocumentFragment)for(l=l.firstChild;l;l=l.nextSibling)e.push(l);else e.push(l)}b.apply(this,d);for(d=0;d<g.length;d++)M(a,g[d]);if(H(this))for(d=0;d<e.length;d++)g=e[d],g instanceof Element&&L(a,g)}}void 0!==bd&&(b.before=c(bd));void 0!==bd&&(b.after=c(cd));void 0!==
dd&&K(b,"replaceWith",function(b){for(var c=[],d=0;d<arguments.length;++d)c[d-0]=arguments[d];d=[];for(var h=[],g=0;g<c.length;g++){var k=c[g];k instanceof Element&&H(k)&&h.push(k);if(k instanceof DocumentFragment)for(k=k.firstChild;k;k=k.nextSibling)d.push(k);else d.push(k)}g=H(this);dd.apply(this,c);for(c=0;c<h.length;c++)M(a,h[c]);if(g)for(M(a,this),c=0;c<d.length;c++)h=d[c],h instanceof Element&&L(a,h)});void 0!==ed&&K(b,"remove",function(){var b=H(this);ed.call(this);b&&M(a,this)})};function od(){var a=P;function b(b,c){Object.defineProperty(b,"innerHTML",{enumerable:c.enumerable,configurable:!0,get:c.get,set:function(b){var d=this,e=void 0;H(this)&&(e=[],I(this,function(a){a!==d&&e.push(a)}));c.set.call(this,b);if(e)for(var f=0;f<e.length;f++){var l=e[f];1===l.__CE_state&&a.disconnectedCallback(l)}this.ownerDocument.__CE_hasRegistry?N(a,this):xc(a,this);return b}})}function c(b,c){K(b,"insertAdjacentElement",function(b,d){var e=H(d);b=c.call(this,b,d);e&&M(a,d);H(b)&&L(a,d);
return b})}Rc&&K(Element.prototype,"attachShadow",function(a){return this.__CE_shadowRoot=a=Rc.call(this,a)});Sc&&Sc.get?b(Element.prototype,Sc):gd&&gd.get?b(HTMLElement.prototype,gd):wc(a,function(a){b(a,{enumerable:!0,configurable:!0,get:function(){return Lc.call(this,!0).innerHTML},set:function(a){var b="template"===this.localName,c=b?this.content:this,d=Ec.call(document,this.localName);for(d.innerHTML=a;0<c.childNodes.length;)Oc.call(c,c.childNodes[0]);for(a=b?d.content:d;0<a.childNodes.length;)Mc.call(c,
a.childNodes[0])}})});K(Element.prototype,"setAttribute",function(b,c){if(1!==this.__CE_state)return Uc.call(this,b,c);var d=Tc.call(this,b);Uc.call(this,b,c);c=Tc.call(this,b);a.attributeChangedCallback(this,b,d,c,null)});K(Element.prototype,"setAttributeNS",function(b,c,f){if(1!==this.__CE_state)return Xc.call(this,b,c,f);var d=Wc.call(this,b,c);Xc.call(this,b,c,f);f=Wc.call(this,b,c);a.attributeChangedCallback(this,c,d,f,b)});K(Element.prototype,"removeAttribute",function(b){if(1!==this.__CE_state)return Vc.call(this,
b);var c=Tc.call(this,b);Vc.call(this,b);null!==c&&a.attributeChangedCallback(this,b,c,null,null)});K(Element.prototype,"removeAttributeNS",function(b,c){if(1!==this.__CE_state)return Yc.call(this,b,c);var d=Wc.call(this,b,c);Yc.call(this,b,c);var e=Wc.call(this,b,c);d!==e&&a.attributeChangedCallback(this,c,d,e,b)});hd?c(HTMLElement.prototype,hd):Zc?c(Element.prototype,Zc):console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched.");kd(a,Element.prototype,{P:$c,append:ad});nd(a)}
;var pd=window.customElements;if(!pd||pd.forcePolyfill||"function"!=typeof pd.define||"function"!=typeof pd.get){var P=new uc;jd();ld();kd(P,DocumentFragment.prototype,{P:Jc,append:Kc});md();od();document.__CE_hasRegistry=!0;var customElements=new O(P);Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:customElements})};/*

Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function qd(){this.end=this.start=0;this.rules=this.parent=this.previous=null;this.cssText=this.parsedCssText="";this.atRule=!1;this.type=0;this.parsedSelector=this.selector=this.keyframesName=""}
function rd(a){a=a.replace(sd,"").replace(td,"");var b=ud,c=a,d=new qd;d.start=0;d.end=c.length;for(var e=d,f=0,h=c.length;f<h;f++)if("{"===c[f]){e.rules||(e.rules=[]);var g=e,k=g.rules[g.rules.length-1]||null;e=new qd;e.start=f+1;e.parent=g;e.previous=k;g.rules.push(e)}else"}"===c[f]&&(e.end=f+1,e=e.parent||d);return b(d,a)}
function ud(a,b){var c=b.substring(a.start,a.end-1);a.parsedCssText=a.cssText=c.trim();a.parent&&(c=b.substring(a.previous?a.previous.end:a.parent.start,a.start-1),c=vd(c),c=c.replace(wd," "),c=c.substring(c.lastIndexOf(";")+1),c=a.parsedSelector=a.selector=c.trim(),a.atRule=0===c.indexOf("@"),a.atRule?0===c.indexOf("@media")?a.type=xd:c.match(yd)&&(a.type=zd,a.keyframesName=a.selector.split(wd).pop()):a.type=0===c.indexOf("--")?Ad:Bd);if(c=a.rules)for(var d=0,e=c.length,f;d<e&&(f=c[d]);d++)ud(f,
b);return a}function vd(a){return a.replace(/\\([0-9a-f]{1,6})\s/gi,function(a,c){a=c;for(c=6-a.length;c--;)a="0"+a;return"\\"+a})}
function Cd(a,b,c){c=void 0===c?"":c;var d="";if(a.cssText||a.rules){var e=a.rules,f;if(f=e)f=e[0],f=!(f&&f.selector&&0===f.selector.indexOf("--"));if(f){f=0;for(var h=e.length,g;f<h&&(g=e[f]);f++)d=Cd(g,b,d)}else b?b=a.cssText:(b=a.cssText,b=b.replace(Dd,"").replace(Ed,""),b=b.replace(Fd,"").replace(Gd,"")),(d=b.trim())&&(d="  "+d+"\n")}d&&(a.selector&&(c+=a.selector+" {\n"),c+=d,a.selector&&(c+="}\n\n"));return c}
var Bd=1,zd=7,xd=4,Ad=1E3,sd=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,td=/@import[^;]*;/gim,Dd=/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,Ed=/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,Fd=/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,Gd=/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,yd=/^@[^\s]*keyframes/,wd=/\s+/g;var Q=!(window.ShadyDOM&&window.ShadyDOM.inUse),Hd;function Id(a){Hd=a&&a.shimcssproperties?!1:Q||!(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)||!window.CSS||!CSS.supports||!CSS.supports("box-shadow","0 0 0 var(--foo)"))}window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?Hd=window.ShadyCSS.nativeCss:window.ShadyCSS?(Id(window.ShadyCSS),window.ShadyCSS=void 0):Id(window.WebComponents&&window.WebComponents.flags);var R=Hd;var Jd=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,Kd=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,Md=/(--[\w-]+)\s*([:,;)]|$)/gi,Nd=/(animation\s*:)|(animation-name\s*:)/,Od=/@media\s(.*)/,Pd=/\{[^}]*\}/g;var Qd=new Set;function S(a,b){if(!a)return"";"string"===typeof a&&(a=rd(a));b&&T(a,b);return Cd(a,R)}function Rd(a){!a.__cssRules&&a.textContent&&(a.__cssRules=rd(a.textContent));return a.__cssRules||null}function Sd(a){return!!a.parent&&a.parent.type===zd}function T(a,b,c,d){if(a){var e=!1,f=a.type;if(d&&f===xd){var h=a.selector.match(Od);h&&(window.matchMedia(h[1]).matches||(e=!0))}f===Bd?b(a):c&&f===zd?c(a):f===Ad&&(e=!0);if((a=a.rules)&&!e){e=0;f=a.length;for(var g;e<f&&(g=a[e]);e++)T(g,b,c,d)}}}
function Td(a,b,c,d){var e=document.createElement("style");b&&e.setAttribute("scope",b);e.textContent=a;Ud(e,c,d);return e}var U=null;function Ud(a,b,c){b=b||document.head;b.insertBefore(a,c&&c.nextSibling||b.firstChild);U?a.compareDocumentPosition(U)===Node.DOCUMENT_POSITION_PRECEDING&&(U=a):U=a}
function Vd(a,b){var c=a.indexOf("var(");if(-1===c)return b(a,"","","");a:{var d=0;var e=c+3;for(var f=a.length;e<f;e++)if("("===a[e])d++;else if(")"===a[e]&&0===--d)break a;e=-1}d=a.substring(c+4,e);c=a.substring(0,c);a=Vd(a.substring(e+1),b);e=d.indexOf(",");return-1===e?b(c,d.trim(),"",a):b(c,d.substring(0,e).trim(),d.substring(e+1).trim(),a)}function Wd(a,b){Q?a.setAttribute("class",b):window.ShadyDOM.nativeMethods.setAttribute.call(a,"class",b)}
function V(a){var b=a.localName,c="";b?-1<b.indexOf("-")||(c=b,b=a.getAttribute&&a.getAttribute("is")||""):(b=a.is,c=a.extends);return{is:b,J:c}};function Xd(){}function Yd(a,b,c){var d=W;a.__styleScoped?a.__styleScoped=null:Zd(d,a,b||"",c)}function Zd(a,b,c,d){b.nodeType===Node.ELEMENT_NODE&&$d(b,c,d);if(b="template"===b.localName?(b.content||b.Ya).childNodes:b.children||b.childNodes)for(var e=0;e<b.length;e++)Zd(a,b[e],c,d)}
function $d(a,b,c){if(b)if(a.classList)c?(a.classList.remove("style-scope"),a.classList.remove(b)):(a.classList.add("style-scope"),a.classList.add(b));else if(a.getAttribute){var d=a.getAttribute(ae);c?d&&(b=d.replace("style-scope","").replace(b,""),Wd(a,b)):Wd(a,(d?d+" ":"")+"style-scope "+b)}}function be(a,b,c){var d=W,e=a.__cssBuild;Q||"shady"===e?b=S(b,c):(a=V(a),b=ce(d,b,a.is,a.J,c)+"\n\n");return b.trim()}
function ce(a,b,c,d,e){var f=de(c,d);c=c?ee+c:"";return S(b,function(b){b.c||(b.selector=b.j=fe(a,b,a.b,c,f),b.c=!0);e&&e(b,c,f)})}function de(a,b){return b?"[is="+a+"]":a}function fe(a,b,c,d,e){var f=b.selector.split(ge);if(!Sd(b)){b=0;for(var h=f.length,g;b<h&&(g=f[b]);b++)f[b]=c.call(a,g,d,e)}return f.join(ge)}function he(a){return a.replace(ie,function(a,c,d){-1<d.indexOf("+")?d=d.replace(/\+/g,"___"):-1<d.indexOf("___")&&(d=d.replace(/___/g,"+"));return":"+c+"("+d+")"})}
Xd.prototype.b=function(a,b,c){var d=!1;a=a.trim();var e=ie.test(a);e&&(a=a.replace(ie,function(a,b,c){return":"+b+"("+c.replace(/\s/g,"")+")"}),a=he(a));a=a.replace(je,ke+" $1");a=a.replace(le,function(a,e,g){d||(a=me(g,e,b,c),d=d||a.stop,e=a.Ba,g=a.value);return e+g});e&&(a=he(a));return a};
function me(a,b,c,d){var e=a.indexOf(ne);0<=a.indexOf(ke)?a=oe(a,d):0!==e&&(a=c?pe(a,c):a);c=!1;0<=e&&(b="",c=!0);if(c){var f=!0;c&&(a=a.replace(qe,function(a,b){return" > "+b}))}a=a.replace(re,function(a,b,c){return'[dir="'+c+'"] '+b+", "+b+'[dir="'+c+'"]'});return{value:a,Ba:b,stop:f}}function pe(a,b){a=a.split(se);a[0]+=b;return a.join(se)}
function oe(a,b){var c=a.match(te);return(c=c&&c[2].trim()||"")?c[0].match(ue)?a.replace(te,function(a,c,f){return b+f}):c.split(ue)[0]===b?c:ve:a.replace(ke,b)}function we(a){a.selector===xe&&(a.selector="html")}Xd.prototype.c=function(a){return a.match(ne)?this.b(a,ye):pe(a.trim(),ye)};p.Object.defineProperties(Xd.prototype,{a:{configurable:!0,enumerable:!0,get:function(){return"style-scope"}}});
var ie=/:(nth[-\w]+)\(([^)]+)\)/,ye=":not(.style-scope)",ge=",",le=/(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g,ue=/[[.:#*]/,ke=":host",xe=":root",ne="::slotted",je=new RegExp("^("+ne+")"),te=/(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,qe=/(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,re=/(.*):dir\((?:(ltr|rtl))\)/,ee=".",se=":",ae="class",ve="should_not_match",W=new Xd;function ze(a,b,c,d){this.u=a||null;this.b=b||null;this.ba=c||[];this.B=null;this.J=d||"";this.a=this.o=this.v=null}function X(a){return a?a.__styleInfo:null}function Ae(a,b){return a.__styleInfo=b}ze.prototype.c=function(){return this.u};ze.prototype._getStyleRules=ze.prototype.c;var Be,Ce=window.Element.prototype;Be=Ce.matches||Ce.matchesSelector||Ce.mozMatchesSelector||Ce.msMatchesSelector||Ce.oMatchesSelector||Ce.webkitMatchesSelector;var De=navigator.userAgent.match("Trident");function Ee(){}function Fe(a){var b={},c=[],d=0;T(a,function(a){Ge(a);a.index=d++;a=a.g.cssText;for(var c;c=Md.exec(a);){var e=c[1];":"!==c[2]&&(b[e]=!0)}},function(a){c.push(a)});a.b=c;a=[];for(var e in b)a.push(e);return a}
function Ge(a){if(!a.g){var b={},c={};He(a,c)&&(b.s=c,a.rules=null);b.cssText=a.parsedCssText.replace(Pd,"").replace(Jd,"");a.g=b}}function He(a,b){var c=a.g;if(c){if(c.s)return Object.assign(b,c.s),!0}else{c=a.parsedCssText;for(var d;a=Jd.exec(c);){d=(a[2]||a[3]).trim();if("inherit"!==d||"unset"!==d)b[a[1].trim()]=d;d=!0}return d}}
function Ie(a,b,c){b&&(b=0<=b.indexOf(";")?Je(a,b,c):Vd(b,function(b,e,f,h){if(!e)return b+h;(e=Ie(a,c[e],c))&&"initial"!==e?"apply-shim-inherit"===e&&(e="inherit"):e=Ie(a,c[f]||f,c)||f;return b+(e||"")+h}));return b&&b.trim()||""}
function Je(a,b,c){b=b.split(";");for(var d=0,e,f;d<b.length;d++)if(e=b[d]){Kd.lastIndex=0;if(f=Kd.exec(e))e=Ie(a,c[f[1]],c);else if(f=e.indexOf(":"),-1!==f){var h=e.substring(f);h=h.trim();h=Ie(a,h,c)||h;e=e.substring(0,f)+h}b[d]=e&&e.lastIndexOf(";")===e.length-1?e.slice(0,-1):e||""}return b.join(";")}
function Ke(a,b){var c={},d=[];T(a,function(a){a.g||Ge(a);var e=a.j||a.parsedSelector;b&&a.g.s&&e&&Be.call(b,e)&&(He(a,c),a=a.index,e=parseInt(a/32,10),d[e]=(d[e]||0)|1<<a%32)},null,!0);return{s:c,key:d}}
function Le(a,b,c,d){b.g||Ge(b);if(b.g.s){var e=V(a);a=e.is;e=e.J;e=a?de(a,e):"html";var f=b.parsedSelector,h=":host > *"===f||"html"===f,g=0===f.indexOf(":host")&&!h;"shady"===c&&(h=f===e+" > *."+e||-1!==f.indexOf("html"),g=!h&&0===f.indexOf(e));"shadow"===c&&(h=":host > *"===f||"html"===f,g=g&&!h);if(h||g)c=e,g&&(Q&&!b.j&&(b.j=fe(W,b,W.b,a?ee+a:"",e)),c=b.j||e),d({Pa:c,Ga:g,$a:h})}}
function Me(a,b){var c={},d={},e=b&&b.__cssBuild;T(b,function(b){Le(a,b,e,function(e){Be.call(a.Za||a,e.Pa)&&(e.Ga?He(b,c):He(b,d))})},null,!0);return{Na:d,Fa:c}}
function Ne(a,b,c,d){var e=V(b),f=de(e.is,e.J),h=new RegExp("(?:^|[^.#[:])"+(b.extends?"\\"+f.slice(0,-1)+"\\]":f)+"($|[.:[\\s>+~])");e=X(b).u;var g=Oe(e,d);return be(b,e,function(b){var e="";b.g||Ge(b);b.g.cssText&&(e=Je(a,b.g.cssText,c));b.cssText=e;if(!Q&&!Sd(b)&&b.cssText){var k=e=b.cssText;null==b.ja&&(b.ja=Nd.test(e));if(b.ja)if(null==b.O){b.O=[];for(var q in g)k=g[q],k=k(e),e!==k&&(e=k,b.O.push(q))}else{for(q=0;q<b.O.length;++q)k=g[b.O[q]],e=k(e);k=e}b.cssText=k;b.j=b.j||b.selector;e="."+d;
q=b.j.split(",");k=0;for(var E=q.length,J;k<E&&(J=q[k]);k++)q[k]=J.match(h)?J.replace(f,e):e+" "+J;b.selector=q.join(",")}})}function Oe(a,b){a=a.b;var c={};if(!Q&&a)for(var d=0,e=a[d];d<a.length;e=a[++d]){var f=e,h=b;f.f=new RegExp(f.keyframesName,"g");f.a=f.keyframesName+"-"+h;f.j=f.j||f.selector;f.selector=f.j.replace(f.keyframesName,f.a);c[e.keyframesName]=Pe(e)}return c}function Pe(a){return function(b){return b.replace(a.f,a.a)}}
function Qe(a,b){var c=Re,d=Rd(a);a.textContent=S(d,function(a){var d=a.cssText=a.parsedCssText;a.g&&a.g.cssText&&(d=d.replace(Dd,"").replace(Ed,""),a.cssText=Je(c,d,b))})}p.Object.defineProperties(Ee.prototype,{a:{configurable:!0,enumerable:!0,get:function(){return"x-scope"}}});var Re=new Ee;var Se={},Te=window.customElements;if(Te&&!Q){var Ue=Te.define;Te.define=function(a,b,c){var d=document.createComment(" Shady DOM styles for "+a+" "),e=document.head;e.insertBefore(d,(U?U.nextSibling:null)||e.firstChild);U=d;Se[a]=d;return Ue.call(Te,a,b,c)}};function Ve(){this.cache={}}Ve.prototype.store=function(a,b,c,d){var e=this.cache[a]||[];e.push({s:b,styleElement:c,o:d});100<e.length&&e.shift();this.cache[a]=e};Ve.prototype.fetch=function(a,b,c){if(a=this.cache[a])for(var d=a.length-1;0<=d;d--){var e=a[d],f;a:{for(f=0;f<c.length;f++){var h=c[f];if(e.s[h]!==b[h]){f=!1;break a}}f=!0}if(f)return e}};function We(){}
function Xe(a){for(var b=0;b<a.length;b++){var c=a[b];if(c.target!==document.documentElement&&c.target!==document.head)for(var d=0;d<c.addedNodes.length;d++){var e=c.addedNodes[d];if(e.nodeType===Node.ELEMENT_NODE){var f=e.getRootNode();var h=e;var g=[];h.classList?g=Array.from(h.classList):h instanceof window.SVGElement&&h.hasAttribute("class")&&(g=h.getAttribute("class").split(/\s+/));h=g;g=h.indexOf(W.a);if((h=-1<g?h[g+1]:"")&&f===e.ownerDocument)Yd(e,h,!0);else if(f.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&
(f=f.host))if(f=V(f).is,h===f)for(e=window.ShadyDOM.nativeMethods.querySelectorAll.call(e,":not(."+W.a+")"),f=0;f<e.length;f++)$d(e[f],h);else h&&Yd(e,h,!0),Yd(e,f)}}}}
if(!Q){var Ye=new MutationObserver(Xe),Ze=function(a){Ye.observe(a,{childList:!0,subtree:!0})};if(window.customElements&&!window.customElements.polyfillWrapFlushCallback)Ze(document);else{var $e=function(){Ze(document.body)};window.HTMLImports?window.HTMLImports.whenReady($e):requestAnimationFrame(function(){if("loading"===document.readyState){var a=function(){$e();document.removeEventListener("readystatechange",a)};document.addEventListener("readystatechange",a)}else $e()})}We=function(){Xe(Ye.takeRecords())}}
var af=We;var bf={};var cf=Promise.resolve();function df(a){if(a=bf[a])a._applyShimCurrentVersion=a._applyShimCurrentVersion||0,a._applyShimValidatingVersion=a._applyShimValidatingVersion||0,a._applyShimNextVersion=(a._applyShimNextVersion||0)+1}function ef(a){return a._applyShimCurrentVersion===a._applyShimNextVersion}function ff(a){a._applyShimValidatingVersion=a._applyShimNextVersion;a.b||(a.b=!0,cf.then(function(){a._applyShimCurrentVersion=a._applyShimNextVersion;a.b=!1}))};var gf=null,hf=window.HTMLImports&&window.HTMLImports.whenReady||null,jf;function kf(a){requestAnimationFrame(function(){hf?hf(a):(gf||(gf=new Promise(function(a){jf=a}),"complete"===document.readyState?jf():document.addEventListener("readystatechange",function(){"complete"===document.readyState&&jf()})),gf.then(function(){a&&a()}))})};var lf=new Ve;function Y(){var a=this;this.F={};this.c=document.documentElement;var b=new qd;b.rules=[];this.f=Ae(this.c,new ze(b));this.l=!1;this.b=this.a=null;kf(function(){mf(a)})}n=Y.prototype;n.pa=function(){af()};n.Da=function(a){return Rd(a)};n.Ra=function(a){return S(a)};
n.prepareTemplate=function(a,b,c){if(!a.f){a.f=!0;a.name=b;a.extends=c;bf[b]=a;var d=(d=a.content.querySelector("style"))?d.getAttribute("css-build")||"":"";var e=[];for(var f=a.content.querySelectorAll("style"),h=0;h<f.length;h++){var g=f[h];if(g.hasAttribute("shady-unscoped")){if(!Q){var k=g.textContent;Qd.has(k)||(Qd.add(k),k=g.cloneNode(!0),document.head.appendChild(k));g.parentNode.removeChild(g)}}else e.push(g.textContent),g.parentNode.removeChild(g)}e=e.join("").trim();c={is:b,extends:c,Wa:d};
Q||Yd(a.content,b);mf(this);f=Kd.test(e)||Jd.test(e);Kd.lastIndex=0;Jd.lastIndex=0;e=rd(e);f&&R&&this.a&&this.a.transformRules(e,b);a._styleAst=e;a.l=d;d=[];R||(d=Fe(a._styleAst));if(!d.length||R)e=Q?a.content:null,b=Se[b],f=be(c,a._styleAst),b=f.length?Td(f,c.is,e,b):void 0,a.a=b;a.c=d}};
function nf(a){!a.b&&window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface&&(a.b=window.ShadyCSS.CustomStyleInterface,a.b.transformCallback=function(b){a.na(b)},a.b.validateCallback=function(){requestAnimationFrame(function(){(a.b.enqueued||a.l)&&a.A()})})}function mf(a){!a.a&&window.ShadyCSS&&window.ShadyCSS.ApplyShim&&(a.a=window.ShadyCSS.ApplyShim,a.a.invalidCallback=df);nf(a)}
n.A=function(){mf(this);if(this.b){var a=this.b.processStyles();if(this.b.enqueued){if(R)for(var b=0;b<a.length;b++){var c=this.b.getStyleForCustomStyle(a[b]);if(c&&R&&this.a){var d=Rd(c);mf(this);this.a.transformRules(d);c.textContent=S(d)}}else for(of(this,this.c,this.f),b=0;b<a.length;b++)(c=this.b.getStyleForCustomStyle(a[b]))&&Qe(c,this.f.v);this.b.enqueued=!1;this.l&&!R&&this.styleDocument()}}};
n.styleElement=function(a,b){var c=V(a).is,d=X(a);if(!d){var e=V(a);d=e.is;e=e.J;var f=Se[d];d=bf[d];if(d){var h=d._styleAst;var g=d.c}d=Ae(a,new ze(h,f,g,e))}a!==this.c&&(this.l=!0);b&&(d.B=d.B||{},Object.assign(d.B,b));if(R){if(d.B){b=d.B;for(var k in b)null===k?a.style.removeProperty(k):a.style.setProperty(k,b[k])}if(((k=bf[c])||a===this.c)&&k&&k.a&&!ef(k)){if(ef(k)||k._applyShimValidatingVersion!==k._applyShimNextVersion)mf(this),this.a&&this.a.transformRules(k._styleAst,c),k.a.textContent=be(a,
d.u),ff(k);Q&&(c=a.shadowRoot)&&(c.querySelector("style").textContent=be(a,d.u));d.u=k._styleAst}}else if(of(this,a,d),d.ba&&d.ba.length){c=d;k=V(a).is;d=(b=lf.fetch(k,c.v,c.ba))?b.styleElement:null;h=c.o;(g=b&&b.o)||(g=this.F[k]=(this.F[k]||0)+1,g=k+"-"+g);c.o=g;g=c.o;e=Re;e=d?d.textContent||"":Ne(e,a,c.v,g);f=X(a);var l=f.a;l&&!Q&&l!==d&&(l._useCount--,0>=l._useCount&&l.parentNode&&l.parentNode.removeChild(l));Q?f.a?(f.a.textContent=e,d=f.a):e&&(d=Td(e,g,a.shadowRoot,f.b)):d?d.parentNode||(De&&
-1<e.indexOf("@media")&&(d.textContent=e),Ud(d,null,f.b)):e&&(d=Td(e,g,null,f.b));d&&(d._useCount=d._useCount||0,f.a!=d&&d._useCount++,f.a=d);g=d;Q||(d=c.o,f=e=a.getAttribute("class")||"",h&&(f=e.replace(new RegExp("\\s*x-scope\\s*"+h+"\\s*","g")," ")),f+=(f?" ":"")+"x-scope "+d,e!==f&&Wd(a,f));b||lf.store(k,c.v,g,c.o)}};function pf(a,b){return(b=b.getRootNode().host)?X(b)?b:pf(a,b):a.c}
function of(a,b,c){a=pf(a,b);var d=X(a);a=Object.create(d.v||null);var e=Me(b,c.u);b=Ke(d.u,b).s;Object.assign(a,e.Fa,b,e.Na);b=c.B;for(var f in b)if((e=b[f])||0===e)a[f]=e;f=Re;b=Object.getOwnPropertyNames(a);for(e=0;e<b.length;e++)d=b[e],a[d]=Ie(f,a[d],a);c.v=a}n.styleDocument=function(a){this.styleSubtree(this.c,a)};
n.styleSubtree=function(a,b){var c=a.shadowRoot;(c||a===this.c)&&this.styleElement(a,b);if(b=c&&(c.children||c.childNodes))for(a=0;a<b.length;a++)this.styleSubtree(b[a]);else if(a=a.children||a.childNodes)for(b=0;b<a.length;b++)this.styleSubtree(a[b])};n.na=function(a){var b=this,c=Rd(a);T(c,function(a){if(Q)we(a);else{var c=W;a.selector=a.parsedSelector;we(a);a.selector=a.j=fe(c,a,c.c,void 0,void 0)}R&&(mf(b),b.a&&b.a.transformRule(a))});R?a.textContent=S(c):this.f.u.rules.push(c)};
n.getComputedStyleValue=function(a,b){var c;R||(c=(X(a)||X(pf(this,a))).v[b]);return(c=c||window.getComputedStyle(a).getPropertyValue(b))?c.trim():""};n.Qa=function(a,b){var c=a.getRootNode();b=b?b.split(/\s/):[];c=c.host&&c.host.localName;if(!c){var d=a.getAttribute("class");if(d){d=d.split(/\s/);for(var e=0;e<d.length;e++)if(d[e]===W.a){c=d[e+1];break}}}c&&b.push(W.a,c);R||(c=X(a))&&c.o&&b.push(Re.a,c.o);Wd(a,b.join(" "))};n.za=function(a){return X(a)};Y.prototype.flush=Y.prototype.pa;
Y.prototype.prepareTemplate=Y.prototype.prepareTemplate;Y.prototype.styleElement=Y.prototype.styleElement;Y.prototype.styleDocument=Y.prototype.styleDocument;Y.prototype.styleSubtree=Y.prototype.styleSubtree;Y.prototype.getComputedStyleValue=Y.prototype.getComputedStyleValue;Y.prototype.setElementClass=Y.prototype.Qa;Y.prototype._styleInfoForNode=Y.prototype.za;Y.prototype.transformCustomStyleForDocument=Y.prototype.na;Y.prototype.getStyleAst=Y.prototype.Da;Y.prototype.styleAstToString=Y.prototype.Ra;
Y.prototype.flushCustomStyles=Y.prototype.A;Object.defineProperties(Y.prototype,{nativeShadow:{get:function(){return Q}},nativeCss:{get:function(){return R}}});var Z=new Y,qf,rf;window.ShadyCSS&&(qf=window.ShadyCSS.ApplyShim,rf=window.ShadyCSS.CustomStyleInterface);window.ShadyCSS={ScopingShim:Z,prepareTemplate:function(a,b,c){Z.A();Z.prepareTemplate(a,b,c)},styleSubtree:function(a,b){Z.A();Z.styleSubtree(a,b)},styleElement:function(a){Z.A();Z.styleElement(a)},styleDocument:function(a){Z.A();Z.styleDocument(a)},getComputedStyleValue:function(a,b){return Z.getComputedStyleValue(a,b)},nativeCss:R,nativeShadow:Q};qf&&(window.ShadyCSS.ApplyShim=qf);
rf&&(window.ShadyCSS.CustomStyleInterface=rf);/*

 Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var sf=window.customElements,tf=window.HTMLImports,uf=window.HTMLTemplateElement;window.WebComponents=window.WebComponents||{};if(sf&&sf.polyfillWrapFlushCallback){var vf,wf=function(){if(vf){uf.Aa&&uf.Aa(window.document);var a=vf;vf=null;a();return!0}},xf=tf.whenReady;sf.polyfillWrapFlushCallback(function(a){vf=a;xf(wf)});tf.whenReady=function(a){xf(function(){wf()?tf.whenReady(a):a()})}}
tf.whenReady(function(){requestAnimationFrame(function(){window.WebComponents.ready=!0;document.dispatchEvent(new CustomEvent("WebComponentsReady",{bubbles:!0}))})});var yf=document.createElement("style");yf.textContent="body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n";var zf=document.querySelector("head");zf.insertBefore(yf,zf.firstChild);}).call(this);

//# sourceMappingURL=webcomponents-hi-sd-ce.js.map

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(10)))

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var Reflect;
(function (Reflect) {
    "use strict";
    var hasOwn = Object.prototype.hasOwnProperty;
    // feature test for Symbol support
    var supportsSymbol = typeof Symbol === "function";
    var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
    var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
    var HashMap;
    (function (HashMap) {
        var supportsCreate = typeof Object.create === "function"; // feature test for Object.create support
        var supportsProto = { __proto__: [] } instanceof Array; // feature test for __proto__ support
        var downLevel = !supportsCreate && !supportsProto;
        // create an object in dictionary mode (a.k.a. "slow" mode in v8)
        HashMap.create = supportsCreate
            ? function () { return MakeDictionary(Object.create(null)); }
            : supportsProto
                ? function () { return MakeDictionary({ __proto__: null }); }
                : function () { return MakeDictionary({}); };
        HashMap.has = downLevel
            ? function (map, key) { return hasOwn.call(map, key); }
            : function (map, key) { return key in map; };
        HashMap.get = downLevel
            ? function (map, key) { return hasOwn.call(map, key) ? map[key] : undefined; }
            : function (map, key) { return map[key]; };
    })(HashMap || (HashMap = {}));
    // Load global or shim versions of Map, Set, and WeakMap
    var functionPrototype = Object.getPrototypeOf(Function);
    var usePolyfill = typeof process === "object" && process.env && process.env["REFLECT_METADATA_USE_MAP_POLYFILL"] === "true";
    var _Map = !usePolyfill && typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
    var _Set = !usePolyfill && typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
    var _WeakMap = !usePolyfill && typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
    // [[Metadata]] internal slot
    // https://rbuckton.github.io/reflect-metadata/#ordinary-object-internal-methods-and-internal-slots
    var Metadata = new _WeakMap();
    /**
      * Applies a set of decorators to a property of a target object.
      * @param decorators An array of decorators.
      * @param target The target object.
      * @param propertyKey (Optional) The property key to decorate.
      * @param attributes (Optional) The property descriptor for the target key.
      * @remarks Decorators are applied in reverse order.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     Example = Reflect.decorate(decoratorsArray, Example);
      *
      *     // property (on constructor)
      *     Reflect.decorate(decoratorsArray, Example, "staticProperty");
      *
      *     // property (on prototype)
      *     Reflect.decorate(decoratorsArray, Example.prototype, "property");
      *
      *     // method (on constructor)
      *     Object.defineProperty(Example, "staticMethod",
      *         Reflect.decorate(decoratorsArray, Example, "staticMethod",
      *             Object.getOwnPropertyDescriptor(Example, "staticMethod")));
      *
      *     // method (on prototype)
      *     Object.defineProperty(Example.prototype, "method",
      *         Reflect.decorate(decoratorsArray, Example.prototype, "method",
      *             Object.getOwnPropertyDescriptor(Example.prototype, "method")));
      *
      */
    function decorate(decorators, target, propertyKey, attributes) {
        if (!IsUndefined(propertyKey)) {
            if (!IsArray(decorators))
                throw new TypeError();
            if (!IsObject(target))
                throw new TypeError();
            if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
                throw new TypeError();
            if (IsNull(attributes))
                attributes = undefined;
            propertyKey = ToPropertyKey(propertyKey);
            return DecorateProperty(decorators, target, propertyKey, attributes);
        }
        else {
            if (!IsArray(decorators))
                throw new TypeError();
            if (!IsConstructor(target))
                throw new TypeError();
            return DecorateConstructor(decorators, target);
        }
    }
    Reflect.decorate = decorate;
    // 4.1.2 Reflect.metadata(metadataKey, metadataValue)
    // https://rbuckton.github.io/reflect-metadata/#reflect.metadata
    /**
      * A default metadata decorator factory that can be used on a class, class member, or parameter.
      * @param metadataKey The key for the metadata entry.
      * @param metadataValue The value for the metadata entry.
      * @returns A decorator function.
      * @remarks
      * If `metadataKey` is already defined for the target and target key, the
      * metadataValue for that key will be overwritten.
      * @example
      *
      *     // constructor
      *     @Reflect.metadata(key, value)
      *     class Example {
      *     }
      *
      *     // property (on constructor, TypeScript only)
      *     class Example {
      *         @Reflect.metadata(key, value)
      *         static staticProperty;
      *     }
      *
      *     // property (on prototype, TypeScript only)
      *     class Example {
      *         @Reflect.metadata(key, value)
      *         property;
      *     }
      *
      *     // method (on constructor)
      *     class Example {
      *         @Reflect.metadata(key, value)
      *         static staticMethod() { }
      *     }
      *
      *     // method (on prototype)
      *     class Example {
      *         @Reflect.metadata(key, value)
      *         method() { }
      *     }
      *
      */
    function metadata(metadataKey, metadataValue) {
        function decorator(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
                throw new TypeError();
            OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
        }
        return decorator;
    }
    Reflect.metadata = metadata;
    /**
      * Define a unique metadata entry on the target.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param metadataValue A value that contains attached metadata.
      * @param target The target object on which to define metadata.
      * @param propertyKey (Optional) The property key for the target.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     Reflect.defineMetadata("custom:annotation", options, Example);
      *
      *     // property (on constructor)
      *     Reflect.defineMetadata("custom:annotation", options, Example, "staticProperty");
      *
      *     // property (on prototype)
      *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "property");
      *
      *     // method (on constructor)
      *     Reflect.defineMetadata("custom:annotation", options, Example, "staticMethod");
      *
      *     // method (on prototype)
      *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "method");
      *
      *     // decorator factory as metadata-producing annotation.
      *     function MyAnnotation(options): Decorator {
      *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
      *     }
      *
      */
    function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
        if (!IsObject(target))
            throw new TypeError();
        if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
    }
    Reflect.defineMetadata = defineMetadata;
    /**
      * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param target The target object on which the metadata is defined.
      * @param propertyKey (Optional) The property key for the target.
      * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.hasMetadata("custom:annotation", Example);
      *
      *     // property (on constructor)
      *     result = Reflect.hasMetadata("custom:annotation", Example, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.hasMetadata("custom:annotation", Example, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "method");
      *
      */
    function hasMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
            throw new TypeError();
        if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryHasMetadata(metadataKey, target, propertyKey);
    }
    Reflect.hasMetadata = hasMetadata;
    /**
      * Gets a value indicating whether the target object has the provided metadata key defined.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param target The target object on which the metadata is defined.
      * @param propertyKey (Optional) The property key for the target.
      * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.hasOwnMetadata("custom:annotation", Example);
      *
      *     // property (on constructor)
      *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "method");
      *
      */
    function hasOwnMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
            throw new TypeError();
        if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
    }
    Reflect.hasOwnMetadata = hasOwnMetadata;
    /**
      * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param target The target object on which the metadata is defined.
      * @param propertyKey (Optional) The property key for the target.
      * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.getMetadata("custom:annotation", Example);
      *
      *     // property (on constructor)
      *     result = Reflect.getMetadata("custom:annotation", Example, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.getMetadata("custom:annotation", Example, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "method");
      *
      */
    function getMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
            throw new TypeError();
        if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryGetMetadata(metadataKey, target, propertyKey);
    }
    Reflect.getMetadata = getMetadata;
    /**
      * Gets the metadata value for the provided metadata key on the target object.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param target The target object on which the metadata is defined.
      * @param propertyKey (Optional) The property key for the target.
      * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.getOwnMetadata("custom:annotation", Example);
      *
      *     // property (on constructor)
      *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "method");
      *
      */
    function getOwnMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
            throw new TypeError();
        if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
    }
    Reflect.getOwnMetadata = getOwnMetadata;
    /**
      * Gets the metadata keys defined on the target object or its prototype chain.
      * @param target The target object on which the metadata is defined.
      * @param propertyKey (Optional) The property key for the target.
      * @returns An array of unique metadata keys.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.getMetadataKeys(Example);
      *
      *     // property (on constructor)
      *     result = Reflect.getMetadataKeys(Example, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.getMetadataKeys(Example.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.getMetadataKeys(Example, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.getMetadataKeys(Example.prototype, "method");
      *
      */
    function getMetadataKeys(target, propertyKey) {
        if (!IsObject(target))
            throw new TypeError();
        if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryMetadataKeys(target, propertyKey);
    }
    Reflect.getMetadataKeys = getMetadataKeys;
    /**
      * Gets the unique metadata keys defined on the target object.
      * @param target The target object on which the metadata is defined.
      * @param propertyKey (Optional) The property key for the target.
      * @returns An array of unique metadata keys.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.getOwnMetadataKeys(Example);
      *
      *     // property (on constructor)
      *     result = Reflect.getOwnMetadataKeys(Example, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.getOwnMetadataKeys(Example.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.getOwnMetadataKeys(Example, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.getOwnMetadataKeys(Example.prototype, "method");
      *
      */
    function getOwnMetadataKeys(target, propertyKey) {
        if (!IsObject(target))
            throw new TypeError();
        if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryOwnMetadataKeys(target, propertyKey);
    }
    Reflect.getOwnMetadataKeys = getOwnMetadataKeys;
    /**
      * Deletes the metadata entry from the target object with the provided key.
      * @param metadataKey A key used to store and retrieve metadata.
      * @param target The target object on which the metadata is defined.
      * @param propertyKey (Optional) The property key for the target.
      * @returns `true` if the metadata entry was found and deleted; otherwise, false.
      * @example
      *
      *     class Example {
      *         // property declarations are not part of ES6, though they are valid in TypeScript:
      *         // static staticProperty;
      *         // property;
      *
      *         constructor(p) { }
      *         static staticMethod(p) { }
      *         method(p) { }
      *     }
      *
      *     // constructor
      *     result = Reflect.deleteMetadata("custom:annotation", Example);
      *
      *     // property (on constructor)
      *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticProperty");
      *
      *     // property (on prototype)
      *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "property");
      *
      *     // method (on constructor)
      *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticMethod");
      *
      *     // method (on prototype)
      *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "method");
      *
      */
    function deleteMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
            throw new TypeError();
        if (!IsUndefined(propertyKey))
            propertyKey = ToPropertyKey(propertyKey);
        var metadataMap = GetOrCreateMetadataMap(target, propertyKey, /*Create*/ false);
        if (IsUndefined(metadataMap))
            return false;
        if (!metadataMap.delete(metadataKey))
            return false;
        if (metadataMap.size > 0)
            return true;
        var targetMetadata = Metadata.get(target);
        targetMetadata.delete(propertyKey);
        if (targetMetadata.size > 0)
            return true;
        Metadata.delete(target);
        return true;
    }
    Reflect.deleteMetadata = deleteMetadata;
    function DecorateConstructor(decorators, target) {
        for (var i = decorators.length - 1; i >= 0; --i) {
            var decorator = decorators[i];
            var decorated = decorator(target);
            if (!IsUndefined(decorated) && !IsNull(decorated)) {
                if (!IsConstructor(decorated))
                    throw new TypeError();
                target = decorated;
            }
        }
        return target;
    }
    function DecorateProperty(decorators, target, propertyKey, descriptor) {
        for (var i = decorators.length - 1; i >= 0; --i) {
            var decorator = decorators[i];
            var decorated = decorator(target, propertyKey, descriptor);
            if (!IsUndefined(decorated) && !IsNull(decorated)) {
                if (!IsObject(decorated))
                    throw new TypeError();
                descriptor = decorated;
            }
        }
        return descriptor;
    }
    function GetOrCreateMetadataMap(O, P, Create) {
        var targetMetadata = Metadata.get(O);
        if (IsUndefined(targetMetadata)) {
            if (!Create)
                return undefined;
            targetMetadata = new _Map();
            Metadata.set(O, targetMetadata);
        }
        var metadataMap = targetMetadata.get(P);
        if (IsUndefined(metadataMap)) {
            if (!Create)
                return undefined;
            metadataMap = new _Map();
            targetMetadata.set(P, metadataMap);
        }
        return metadataMap;
    }
    // 3.1.1.1 OrdinaryHasMetadata(MetadataKey, O, P)
    // https://rbuckton.github.io/reflect-metadata/#ordinaryhasmetadata
    function OrdinaryHasMetadata(MetadataKey, O, P) {
        var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
        if (hasOwn)
            return true;
        var parent = OrdinaryGetPrototypeOf(O);
        if (!IsNull(parent))
            return OrdinaryHasMetadata(MetadataKey, parent, P);
        return false;
    }
    // 3.1.2.1 OrdinaryHasOwnMetadata(MetadataKey, O, P)
    // https://rbuckton.github.io/reflect-metadata/#ordinaryhasownmetadata
    function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
        var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
        if (IsUndefined(metadataMap))
            return false;
        return ToBoolean(metadataMap.has(MetadataKey));
    }
    // 3.1.3.1 OrdinaryGetMetadata(MetadataKey, O, P)
    // https://rbuckton.github.io/reflect-metadata/#ordinarygetmetadata
    function OrdinaryGetMetadata(MetadataKey, O, P) {
        var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
        if (hasOwn)
            return OrdinaryGetOwnMetadata(MetadataKey, O, P);
        var parent = OrdinaryGetPrototypeOf(O);
        if (!IsNull(parent))
            return OrdinaryGetMetadata(MetadataKey, parent, P);
        return undefined;
    }
    // 3.1.4.1 OrdinaryGetOwnMetadata(MetadataKey, O, P)
    // https://rbuckton.github.io/reflect-metadata/#ordinarygetownmetadata
    function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
        var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
        if (IsUndefined(metadataMap))
            return undefined;
        return metadataMap.get(MetadataKey);
    }
    // 3.1.5.1 OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P)
    // https://rbuckton.github.io/reflect-metadata/#ordinarydefineownmetadata
    function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
        var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ true);
        metadataMap.set(MetadataKey, MetadataValue);
    }
    // 3.1.6.1 OrdinaryMetadataKeys(O, P)
    // https://rbuckton.github.io/reflect-metadata/#ordinarymetadatakeys
    function OrdinaryMetadataKeys(O, P) {
        var ownKeys = OrdinaryOwnMetadataKeys(O, P);
        var parent = OrdinaryGetPrototypeOf(O);
        if (parent === null)
            return ownKeys;
        var parentKeys = OrdinaryMetadataKeys(parent, P);
        if (parentKeys.length <= 0)
            return ownKeys;
        if (ownKeys.length <= 0)
            return parentKeys;
        var set = new _Set();
        var keys = [];
        for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
            var key = ownKeys_1[_i];
            var hasKey = set.has(key);
            if (!hasKey) {
                set.add(key);
                keys.push(key);
            }
        }
        for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
            var key = parentKeys_1[_a];
            var hasKey = set.has(key);
            if (!hasKey) {
                set.add(key);
                keys.push(key);
            }
        }
        return keys;
    }
    // 3.1.7.1 OrdinaryOwnMetadataKeys(O, P)
    // https://rbuckton.github.io/reflect-metadata/#ordinaryownmetadatakeys
    function OrdinaryOwnMetadataKeys(O, P) {
        var keys = [];
        var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
        if (IsUndefined(metadataMap))
            return keys;
        var keysObj = metadataMap.keys();
        var iterator = GetIterator(keysObj);
        var k = 0;
        while (true) {
            var next = IteratorStep(iterator);
            if (!next) {
                keys.length = k;
                return keys;
            }
            var nextValue = IteratorValue(next);
            try {
                keys[k] = nextValue;
            }
            catch (e) {
                try {
                    IteratorClose(iterator);
                }
                finally {
                    throw e;
                }
            }
            k++;
        }
    }
    // 6 ECMAScript Data Typ0es and Values
    // https://tc39.github.io/ecma262/#sec-ecmascript-data-types-and-values
    function Type(x) {
        if (x === null)
            return 1 /* Null */;
        switch (typeof x) {
            case "undefined": return 0 /* Undefined */;
            case "boolean": return 2 /* Boolean */;
            case "string": return 3 /* String */;
            case "symbol": return 4 /* Symbol */;
            case "number": return 5 /* Number */;
            case "object": return x === null ? 1 /* Null */ : 6 /* Object */;
            default: return 6 /* Object */;
        }
    }
    // 6.1.1 The Undefined Type
    // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-undefined-type
    function IsUndefined(x) {
        return x === undefined;
    }
    // 6.1.2 The Null Type
    // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-null-type
    function IsNull(x) {
        return x === null;
    }
    // 6.1.5 The Symbol Type
    // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-symbol-type
    function IsSymbol(x) {
        return typeof x === "symbol";
    }
    // 6.1.7 The Object Type
    // https://tc39.github.io/ecma262/#sec-object-type
    function IsObject(x) {
        return typeof x === "object" ? x !== null : typeof x === "function";
    }
    // 7.1 Type Conversion
    // https://tc39.github.io/ecma262/#sec-type-conversion
    // 7.1.1 ToPrimitive(input [, PreferredType])
    // https://tc39.github.io/ecma262/#sec-toprimitive
    function ToPrimitive(input, PreferredType) {
        switch (Type(input)) {
            case 0 /* Undefined */: return input;
            case 1 /* Null */: return input;
            case 2 /* Boolean */: return input;
            case 3 /* String */: return input;
            case 4 /* Symbol */: return input;
            case 5 /* Number */: return input;
        }
        var hint = PreferredType === 3 /* String */ ? "string" : PreferredType === 5 /* Number */ ? "number" : "default";
        var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
        if (exoticToPrim !== undefined) {
            var result = exoticToPrim.call(input, hint);
            if (IsObject(result))
                throw new TypeError();
            return result;
        }
        return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
    }
    // 7.1.1.1 OrdinaryToPrimitive(O, hint)
    // https://tc39.github.io/ecma262/#sec-ordinarytoprimitive
    function OrdinaryToPrimitive(O, hint) {
        if (hint === "string") {
            var toString_1 = O.toString;
            if (IsCallable(toString_1)) {
                var result = toString_1.call(O);
                if (!IsObject(result))
                    return result;
            }
            var valueOf = O.valueOf;
            if (IsCallable(valueOf)) {
                var result = valueOf.call(O);
                if (!IsObject(result))
                    return result;
            }
        }
        else {
            var valueOf = O.valueOf;
            if (IsCallable(valueOf)) {
                var result = valueOf.call(O);
                if (!IsObject(result))
                    return result;
            }
            var toString_2 = O.toString;
            if (IsCallable(toString_2)) {
                var result = toString_2.call(O);
                if (!IsObject(result))
                    return result;
            }
        }
        throw new TypeError();
    }
    // 7.1.2 ToBoolean(argument)
    // https://tc39.github.io/ecma262/2016/#sec-toboolean
    function ToBoolean(argument) {
        return !!argument;
    }
    // 7.1.12 ToString(argument)
    // https://tc39.github.io/ecma262/#sec-tostring
    function ToString(argument) {
        return "" + argument;
    }
    // 7.1.14 ToPropertyKey(argument)
    // https://tc39.github.io/ecma262/#sec-topropertykey
    function ToPropertyKey(argument) {
        var key = ToPrimitive(argument, 3 /* String */);
        if (IsSymbol(key))
            return key;
        return ToString(key);
    }
    // 7.2 Testing and Comparison Operations
    // https://tc39.github.io/ecma262/#sec-testing-and-comparison-operations
    // 7.2.2 IsArray(argument)
    // https://tc39.github.io/ecma262/#sec-isarray
    function IsArray(argument) {
        return Array.isArray
            ? Array.isArray(argument)
            : argument instanceof Object
                ? argument instanceof Array
                : Object.prototype.toString.call(argument) === "[object Array]";
    }
    // 7.2.3 IsCallable(argument)
    // https://tc39.github.io/ecma262/#sec-iscallable
    function IsCallable(argument) {
        // NOTE: This is an approximation as we cannot check for [[Call]] internal method.
        return typeof argument === "function";
    }
    // 7.2.4 IsConstructor(argument)
    // https://tc39.github.io/ecma262/#sec-isconstructor
    function IsConstructor(argument) {
        // NOTE: This is an approximation as we cannot check for [[Construct]] internal method.
        return typeof argument === "function";
    }
    // 7.2.7 IsPropertyKey(argument)
    // https://tc39.github.io/ecma262/#sec-ispropertykey
    function IsPropertyKey(argument) {
        switch (Type(argument)) {
            case 3 /* String */: return true;
            case 4 /* Symbol */: return true;
            default: return false;
        }
    }
    // 7.3 Operations on Objects
    // https://tc39.github.io/ecma262/#sec-operations-on-objects
    // 7.3.9 GetMethod(V, P)
    // https://tc39.github.io/ecma262/#sec-getmethod
    function GetMethod(V, P) {
        var func = V[P];
        if (func === undefined || func === null)
            return undefined;
        if (!IsCallable(func))
            throw new TypeError();
        return func;
    }
    // 7.4 Operations on Iterator Objects
    // https://tc39.github.io/ecma262/#sec-operations-on-iterator-objects
    function GetIterator(obj) {
        var method = GetMethod(obj, iteratorSymbol);
        if (!IsCallable(method))
            throw new TypeError(); // from Call
        var iterator = method.call(obj);
        if (!IsObject(iterator))
            throw new TypeError();
        return iterator;
    }
    // 7.4.4 IteratorValue(iterResult)
    // https://tc39.github.io/ecma262/2016/#sec-iteratorvalue
    function IteratorValue(iterResult) {
        return iterResult.value;
    }
    // 7.4.5 IteratorStep(iterator)
    // https://tc39.github.io/ecma262/#sec-iteratorstep
    function IteratorStep(iterator) {
        var result = iterator.next();
        return result.done ? false : result;
    }
    // 7.4.6 IteratorClose(iterator, completion)
    // https://tc39.github.io/ecma262/#sec-iteratorclose
    function IteratorClose(iterator) {
        var f = iterator["return"];
        if (f)
            f.call(iterator);
    }
    // 9.1 Ordinary Object Internal Methods and Internal Slots
    // https://tc39.github.io/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots
    // 9.1.1.1 OrdinaryGetPrototypeOf(O)
    // https://tc39.github.io/ecma262/#sec-ordinarygetprototypeof
    function OrdinaryGetPrototypeOf(O) {
        var proto = Object.getPrototypeOf(O);
        if (typeof O !== "function" || O === functionPrototype)
            return proto;
        // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
        // Try to determine the superclass constructor. Compatible implementations
        // must either set __proto__ on a subclass constructor to the superclass constructor,
        // or ensure each class has a valid `constructor` property on its prototype that
        // points back to the constructor.
        // If this is not the same as Function.[[Prototype]], then this is definately inherited.
        // This is the case when in ES6 or when using __proto__ in a compatible browser.
        if (proto !== functionPrototype)
            return proto;
        // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
        var prototype = O.prototype;
        var prototypeProto = prototype && Object.getPrototypeOf(prototype);
        if (prototypeProto == null || prototypeProto === Object.prototype)
            return proto;
        // If the constructor was not a function, then we cannot determine the heritage.
        var constructor = prototypeProto.constructor;
        if (typeof constructor !== "function")
            return proto;
        // If we have some kind of self-reference, then we cannot determine the heritage.
        if (constructor === O)
            return proto;
        // we have a pretty good guess at the heritage.
        return constructor;
    }
    // naive Map shim
    function CreateMapPolyfill() {
        var cacheSentinel = {};
        var arraySentinel = [];
        var MapIterator = (function () {
            function MapIterator(keys, values, selector) {
                this._index = 0;
                this._keys = keys;
                this._values = values;
                this._selector = selector;
            }
            MapIterator.prototype["@@iterator"] = function () { return this; };
            MapIterator.prototype[iteratorSymbol] = function () { return this; };
            MapIterator.prototype.next = function () {
                var index = this._index;
                if (index >= 0 && index < this._keys.length) {
                    var result = this._selector(this._keys[index], this._values[index]);
                    if (index + 1 >= this._keys.length) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    else {
                        this._index++;
                    }
                    return { value: result, done: false };
                }
                return { value: undefined, done: true };
            };
            MapIterator.prototype.throw = function (error) {
                if (this._index >= 0) {
                    this._index = -1;
                    this._keys = arraySentinel;
                    this._values = arraySentinel;
                }
                throw error;
            };
            MapIterator.prototype.return = function (value) {
                if (this._index >= 0) {
                    this._index = -1;
                    this._keys = arraySentinel;
                    this._values = arraySentinel;
                }
                return { value: value, done: true };
            };
            return MapIterator;
        }());
        return (function () {
            function Map() {
                this._keys = [];
                this._values = [];
                this._cacheKey = cacheSentinel;
                this._cacheIndex = -2;
            }
            Object.defineProperty(Map.prototype, "size", {
                get: function () { return this._keys.length; },
                enumerable: true,
                configurable: true
            });
            Map.prototype.has = function (key) { return this._find(key, /*insert*/ false) >= 0; };
            Map.prototype.get = function (key) {
                var index = this._find(key, /*insert*/ false);
                return index >= 0 ? this._values[index] : undefined;
            };
            Map.prototype.set = function (key, value) {
                var index = this._find(key, /*insert*/ true);
                this._values[index] = value;
                return this;
            };
            Map.prototype.delete = function (key) {
                var index = this._find(key, /*insert*/ false);
                if (index >= 0) {
                    var size = this._keys.length;
                    for (var i = index + 1; i < size; i++) {
                        this._keys[i - 1] = this._keys[i];
                        this._values[i - 1] = this._values[i];
                    }
                    this._keys.length--;
                    this._values.length--;
                    if (key === this._cacheKey) {
                        this._cacheKey = cacheSentinel;
                        this._cacheIndex = -2;
                    }
                    return true;
                }
                return false;
            };
            Map.prototype.clear = function () {
                this._keys.length = 0;
                this._values.length = 0;
                this._cacheKey = cacheSentinel;
                this._cacheIndex = -2;
            };
            Map.prototype.keys = function () { return new MapIterator(this._keys, this._values, getKey); };
            Map.prototype.values = function () { return new MapIterator(this._keys, this._values, getValue); };
            Map.prototype.entries = function () { return new MapIterator(this._keys, this._values, getEntry); };
            Map.prototype["@@iterator"] = function () { return this.entries(); };
            Map.prototype[iteratorSymbol] = function () { return this.entries(); };
            Map.prototype._find = function (key, insert) {
                if (this._cacheKey !== key) {
                    this._cacheIndex = this._keys.indexOf(this._cacheKey = key);
                }
                if (this._cacheIndex < 0 && insert) {
                    this._cacheIndex = this._keys.length;
                    this._keys.push(key);
                    this._values.push(undefined);
                }
                return this._cacheIndex;
            };
            return Map;
        }());
        function getKey(key, _) {
            return key;
        }
        function getValue(_, value) {
            return value;
        }
        function getEntry(key, value) {
            return [key, value];
        }
    }
    // naive Set shim
    function CreateSetPolyfill() {
        return (function () {
            function Set() {
                this._map = new _Map();
            }
            Object.defineProperty(Set.prototype, "size", {
                get: function () { return this._map.size; },
                enumerable: true,
                configurable: true
            });
            Set.prototype.has = function (value) { return this._map.has(value); };
            Set.prototype.add = function (value) { return this._map.set(value, value), this; };
            Set.prototype.delete = function (value) { return this._map.delete(value); };
            Set.prototype.clear = function () { this._map.clear(); };
            Set.prototype.keys = function () { return this._map.keys(); };
            Set.prototype.values = function () { return this._map.values(); };
            Set.prototype.entries = function () { return this._map.entries(); };
            Set.prototype["@@iterator"] = function () { return this.keys(); };
            Set.prototype[iteratorSymbol] = function () { return this.keys(); };
            return Set;
        }());
    }
    // naive WeakMap shim
    function CreateWeakMapPolyfill() {
        var UUID_SIZE = 16;
        var keys = HashMap.create();
        var rootKey = CreateUniqueKey();
        return (function () {
            function WeakMap() {
                this._key = CreateUniqueKey();
            }
            WeakMap.prototype.has = function (target) {
                var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                return table !== undefined ? HashMap.has(table, this._key) : false;
            };
            WeakMap.prototype.get = function (target) {
                var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                return table !== undefined ? HashMap.get(table, this._key) : undefined;
            };
            WeakMap.prototype.set = function (target, value) {
                var table = GetOrCreateWeakMapTable(target, /*create*/ true);
                table[this._key] = value;
                return this;
            };
            WeakMap.prototype.delete = function (target) {
                var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                return table !== undefined ? delete table[this._key] : false;
            };
            WeakMap.prototype.clear = function () {
                // NOTE: not a real clear, just makes the previous data unreachable
                this._key = CreateUniqueKey();
            };
            return WeakMap;
        }());
        function CreateUniqueKey() {
            var key;
            do
                key = "@@WeakMap@@" + CreateUUID();
            while (HashMap.has(keys, key));
            keys[key] = true;
            return key;
        }
        function GetOrCreateWeakMapTable(target, create) {
            if (!hasOwn.call(target, rootKey)) {
                if (!create)
                    return undefined;
                Object.defineProperty(target, rootKey, { value: HashMap.create() });
            }
            return target[rootKey];
        }
        function FillRandomBytes(buffer, size) {
            for (var i = 0; i < size; ++i)
                buffer[i] = Math.random() * 0xff | 0;
            return buffer;
        }
        function GenRandomBytes(size) {
            if (typeof Uint8Array === "function") {
                if (typeof crypto !== "undefined")
                    return crypto.getRandomValues(new Uint8Array(size));
                if (typeof msCrypto !== "undefined")
                    return msCrypto.getRandomValues(new Uint8Array(size));
                return FillRandomBytes(new Uint8Array(size), size);
            }
            return FillRandomBytes(new Array(size), size);
        }
        function CreateUUID() {
            var data = GenRandomBytes(UUID_SIZE);
            // mark as random - RFC 4122 § 4.4
            data[6] = data[6] & 0x4f | 0x40;
            data[8] = data[8] & 0xbf | 0x80;
            var result = "";
            for (var offset = 0; offset < UUID_SIZE; ++offset) {
                var byte = data[offset];
                if (offset === 4 || offset === 6 || offset === 8)
                    result += "-";
                if (byte < 16)
                    result += "0";
                result += byte.toString(16).toLowerCase();
            }
            return result;
        }
    }
    // uses a heuristic used by v8 and chakra to force an object into dictionary mode.
    function MakeDictionary(obj) {
        obj.__ = undefined;
        delete obj.__;
        return obj;
    }
    // patch global Reflect
    (function (__global) {
        if (typeof __global.Reflect !== "undefined") {
            if (__global.Reflect !== Reflect) {
                for (var p in Reflect) {
                    if (hasOwn.call(Reflect, p)) {
                        __global.Reflect[p] = Reflect[p];
                    }
                }
            }
        }
        else {
            __global.Reflect = Reflect;
        }
    })(typeof global !== "undefined" ? global :
        typeof self !== "undefined" ? self :
            Function("return this;")());
})(Reflect || (Reflect = {}));
//# sourceMappingURL=Reflect.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(34), __webpack_require__(10)))

/***/ }),
/* 34 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var binding_1 = __webpack_require__(36);
var lookup_1 = __webpack_require__(37);
var planner_1 = __webpack_require__(38);
var resolver_1 = __webpack_require__(45);
var binding_to_syntax_1 = __webpack_require__(47);
var serialization_1 = __webpack_require__(7);
var container_snapshot_1 = __webpack_require__(50);
var guid_1 = __webpack_require__(6);
var ERROR_MSGS = __webpack_require__(1);
var METADATA_KEY = __webpack_require__(0);
var literal_types_1 = __webpack_require__(3);
var metadata_reader_1 = __webpack_require__(16);
var Container = (function () {
    function Container(containerOptions) {
        if (containerOptions !== undefined) {
            if (typeof containerOptions !== "object") {
                throw new Error("" + ERROR_MSGS.CONTAINER_OPTIONS_MUST_BE_AN_OBJECT);
            }
            else {
                if (containerOptions.defaultScope !== undefined &&
                    containerOptions.defaultScope !== literal_types_1.BindingScopeEnum.Singleton &&
                    containerOptions.defaultScope !== literal_types_1.BindingScopeEnum.Transient &&
                    containerOptions.defaultScope !== literal_types_1.BindingScopeEnum.Request) {
                    throw new Error("" + ERROR_MSGS.CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE);
                }
                if (containerOptions.autoBindInjectable !== undefined &&
                    typeof containerOptions.autoBindInjectable !== "boolean") {
                    throw new Error("" + ERROR_MSGS.CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE);
                }
            }
            this.options = {
                autoBindInjectable: containerOptions.autoBindInjectable,
                defaultScope: containerOptions.defaultScope
            };
        }
        else {
            this.options = {
                autoBindInjectable: false,
                defaultScope: literal_types_1.BindingScopeEnum.Transient
            };
        }
        this.guid = guid_1.guid();
        this._bindingDictionary = new lookup_1.Lookup();
        this._snapshots = [];
        this._middleware = null;
        this.parent = null;
        this._metadataReader = new metadata_reader_1.MetadataReader();
    }
    Container.merge = function (container1, container2) {
        var container = new Container();
        var bindingDictionary = planner_1.getBindingDictionary(container);
        var bindingDictionary1 = planner_1.getBindingDictionary(container1);
        var bindingDictionary2 = planner_1.getBindingDictionary(container2);
        function copyDictionary(origin, destination) {
            origin.traverse(function (key, value) {
                value.forEach(function (binding) {
                    destination.add(binding.serviceIdentifier, binding.clone());
                });
            });
        }
        copyDictionary(bindingDictionary1, bindingDictionary);
        copyDictionary(bindingDictionary2, bindingDictionary);
        return container;
    };
    Container.prototype.load = function () {
        var _this = this;
        var modules = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            modules[_i] = arguments[_i];
        }
        var setModuleId = function (bindingToSyntax, moduleId) {
            bindingToSyntax._binding.moduleId = moduleId;
        };
        var getBindFunction = function (moduleId) {
            return function (serviceIdentifier) {
                var bindingToSyntax = _this.bind.call(_this, serviceIdentifier);
                setModuleId(bindingToSyntax, moduleId);
                return bindingToSyntax;
            };
        };
        var getUnbindFunction = function (moduleId) {
            return function (serviceIdentifier) {
                var _unbind = _this.unbind.bind(_this);
                _unbind(serviceIdentifier);
            };
        };
        var getIsboundFunction = function (moduleId) {
            return function (serviceIdentifier) {
                var _isBound = _this.isBound.bind(_this);
                return _isBound(serviceIdentifier);
            };
        };
        var getRebindFunction = function (moduleId) {
            return function (serviceIdentifier) {
                var bindingToSyntax = _this.rebind.call(_this, serviceIdentifier);
                setModuleId(bindingToSyntax, moduleId);
                return bindingToSyntax;
            };
        };
        modules.forEach(function (module) {
            var bindFunction = getBindFunction(module.guid);
            var unbindFunction = getUnbindFunction(module.guid);
            var isboundFunction = getIsboundFunction(module.guid);
            var rebindFunction = getRebindFunction(module.guid);
            module.registry(bindFunction, unbindFunction, isboundFunction, rebindFunction);
        });
    };
    Container.prototype.unload = function () {
        var _this = this;
        var modules = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            modules[_i] = arguments[_i];
        }
        var conditionFactory = function (expected) { return function (item) {
            return item.moduleId === expected;
        }; };
        modules.forEach(function (module) {
            var condition = conditionFactory(module.guid);
            _this._bindingDictionary.removeByCondition(condition);
        });
    };
    Container.prototype.bind = function (serviceIdentifier) {
        var scope = this.options.defaultScope || literal_types_1.BindingScopeEnum.Transient;
        var binding = new binding_1.Binding(serviceIdentifier, scope);
        this._bindingDictionary.add(serviceIdentifier, binding);
        return new binding_to_syntax_1.BindingToSyntax(binding);
    };
    Container.prototype.rebind = function (serviceIdentifier) {
        this.unbind(serviceIdentifier);
        return this.bind(serviceIdentifier);
    };
    Container.prototype.unbind = function (serviceIdentifier) {
        try {
            this._bindingDictionary.remove(serviceIdentifier);
        }
        catch (e) {
            throw new Error(ERROR_MSGS.CANNOT_UNBIND + " " + serialization_1.getServiceIdentifierAsString(serviceIdentifier));
        }
    };
    Container.prototype.unbindAll = function () {
        this._bindingDictionary = new lookup_1.Lookup();
    };
    Container.prototype.isBound = function (serviceIdentifier) {
        var bound = this._bindingDictionary.hasKey(serviceIdentifier);
        if (!bound && this.parent) {
            bound = this.parent.isBound(serviceIdentifier);
        }
        return bound;
    };
    Container.prototype.isBoundNamed = function (serviceIdentifier, named) {
        return this.isBoundTagged(serviceIdentifier, METADATA_KEY.NAMED_TAG, named);
    };
    Container.prototype.isBoundTagged = function (serviceIdentifier, key, value) {
        var bound = false;
        if (this._bindingDictionary.hasKey(serviceIdentifier)) {
            var bindings = this._bindingDictionary.get(serviceIdentifier);
            var request_1 = planner_1.createMockRequest(this, serviceIdentifier, key, value);
            bound = bindings.some(function (b) { return b.constraint(request_1); });
        }
        if (!bound && this.parent) {
            bound = this.parent.isBoundTagged(serviceIdentifier, key, value);
        }
        return bound;
    };
    Container.prototype.snapshot = function () {
        this._snapshots.push(container_snapshot_1.ContainerSnapshot.of(this._bindingDictionary.clone(), this._middleware));
    };
    Container.prototype.restore = function () {
        var snapshot = this._snapshots.pop();
        if (snapshot === undefined) {
            throw new Error(ERROR_MSGS.NO_MORE_SNAPSHOTS_AVAILABLE);
        }
        this._bindingDictionary = snapshot.bindings;
        this._middleware = snapshot.middleware;
    };
    Container.prototype.createChild = function () {
        var child = new Container();
        child.parent = this;
        return child;
    };
    Container.prototype.applyMiddleware = function () {
        var middlewares = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            middlewares[_i] = arguments[_i];
        }
        var initial = (this._middleware) ? this._middleware : this._planAndResolve();
        this._middleware = middlewares.reduce(function (prev, curr) {
            return curr(prev);
        }, initial);
    };
    Container.prototype.applyCustomMetadataReader = function (metadataReader) {
        this._metadataReader = metadataReader;
    };
    Container.prototype.get = function (serviceIdentifier) {
        return this._get(false, false, literal_types_1.TargetTypeEnum.Variable, serviceIdentifier);
    };
    Container.prototype.getTagged = function (serviceIdentifier, key, value) {
        return this._get(false, false, literal_types_1.TargetTypeEnum.Variable, serviceIdentifier, key, value);
    };
    Container.prototype.getNamed = function (serviceIdentifier, named) {
        return this.getTagged(serviceIdentifier, METADATA_KEY.NAMED_TAG, named);
    };
    Container.prototype.getAll = function (serviceIdentifier) {
        return this._get(true, true, literal_types_1.TargetTypeEnum.Variable, serviceIdentifier);
    };
    Container.prototype.getAllTagged = function (serviceIdentifier, key, value) {
        return this._get(false, true, literal_types_1.TargetTypeEnum.Variable, serviceIdentifier, key, value);
    };
    Container.prototype.getAllNamed = function (serviceIdentifier, named) {
        return this.getAllTagged(serviceIdentifier, METADATA_KEY.NAMED_TAG, named);
    };
    Container.prototype.resolve = function (constructorFunction) {
        var tempContainer = new Container();
        tempContainer.bind(constructorFunction).toSelf();
        tempContainer.parent = this;
        return tempContainer.get(constructorFunction);
    };
    Container.prototype._get = function (avoidConstraints, isMultiInject, targetType, serviceIdentifier, key, value) {
        var result = null;
        var defaultArgs = {
            avoidConstraints: avoidConstraints,
            contextInterceptor: function (context) { return context; },
            isMultiInject: isMultiInject,
            key: key,
            serviceIdentifier: serviceIdentifier,
            targetType: targetType,
            value: value
        };
        if (this._middleware) {
            result = this._middleware(defaultArgs);
            if (result === undefined || result === null) {
                throw new Error(ERROR_MSGS.INVALID_MIDDLEWARE_RETURN);
            }
        }
        else {
            result = this._planAndResolve()(defaultArgs);
        }
        return result;
    };
    Container.prototype._planAndResolve = function () {
        var _this = this;
        return function (args) {
            var context = planner_1.plan(_this._metadataReader, _this, args.isMultiInject, args.targetType, args.serviceIdentifier, args.key, args.value, args.avoidConstraints);
            context = args.contextInterceptor(context);
            var result = resolver_1.resolve(context);
            return result;
        };
    };
    return Container;
}());
exports.Container = Container;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var guid_1 = __webpack_require__(6);
var literal_types_1 = __webpack_require__(3);
var Binding = (function () {
    function Binding(serviceIdentifier, scope) {
        this.guid = guid_1.guid();
        this.activated = false;
        this.serviceIdentifier = serviceIdentifier;
        this.scope = scope;
        this.type = literal_types_1.BindingTypeEnum.Invalid;
        this.constraint = function (request) { return true; };
        this.implementationType = null;
        this.cache = null;
        this.factory = null;
        this.provider = null;
        this.onActivation = null;
        this.dynamicValue = null;
    }
    Binding.prototype.clone = function () {
        var clone = new Binding(this.serviceIdentifier, this.scope);
        clone.activated = false;
        clone.implementationType = this.implementationType;
        clone.dynamicValue = this.dynamicValue;
        clone.scope = this.scope;
        clone.type = this.type;
        clone.factory = this.factory;
        clone.provider = this.provider;
        clone.constraint = this.constraint;
        clone.onActivation = this.onActivation;
        clone.cache = this.cache;
        return clone;
    };
    return Binding;
}());
exports.Binding = Binding;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ERROR_MSGS = __webpack_require__(1);
var Lookup = (function () {
    function Lookup() {
        this._map = new Map();
    }
    Lookup.prototype.getMap = function () {
        return this._map;
    };
    Lookup.prototype.add = function (serviceIdentifier, value) {
        if (serviceIdentifier === null || serviceIdentifier === undefined) {
            throw new Error(ERROR_MSGS.NULL_ARGUMENT);
        }
        if (value === null || value === undefined) {
            throw new Error(ERROR_MSGS.NULL_ARGUMENT);
        }
        var entry = this._map.get(serviceIdentifier);
        if (entry !== undefined) {
            entry.push(value);
            this._map.set(serviceIdentifier, entry);
        }
        else {
            this._map.set(serviceIdentifier, [value]);
        }
    };
    Lookup.prototype.get = function (serviceIdentifier) {
        if (serviceIdentifier === null || serviceIdentifier === undefined) {
            throw new Error(ERROR_MSGS.NULL_ARGUMENT);
        }
        var entry = this._map.get(serviceIdentifier);
        if (entry !== undefined) {
            return entry;
        }
        else {
            throw new Error(ERROR_MSGS.KEY_NOT_FOUND);
        }
    };
    Lookup.prototype.remove = function (serviceIdentifier) {
        if (serviceIdentifier === null || serviceIdentifier === undefined) {
            throw new Error(ERROR_MSGS.NULL_ARGUMENT);
        }
        if (!this._map.delete(serviceIdentifier)) {
            throw new Error(ERROR_MSGS.KEY_NOT_FOUND);
        }
    };
    Lookup.prototype.removeByCondition = function (condition) {
        var _this = this;
        this._map.forEach(function (entries, key) {
            var updatedEntries = entries.filter(function (entry) { return !condition(entry); });
            if (updatedEntries.length > 0) {
                _this._map.set(key, updatedEntries);
            }
            else {
                _this._map.delete(key);
            }
        });
    };
    Lookup.prototype.hasKey = function (serviceIdentifier) {
        if (serviceIdentifier === null || serviceIdentifier === undefined) {
            throw new Error(ERROR_MSGS.NULL_ARGUMENT);
        }
        return this._map.has(serviceIdentifier);
    };
    Lookup.prototype.clone = function () {
        var copy = new Lookup();
        this._map.forEach(function (value, key) {
            value.forEach(function (b) { return copy.add(key, b.clone()); });
        });
        return copy;
    };
    Lookup.prototype.traverse = function (func) {
        this._map.forEach(function (value, key) {
            func(key, value);
        });
    };
    return Lookup;
}());
exports.Lookup = Lookup;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var plan_1 = __webpack_require__(39);
var context_1 = __webpack_require__(40);
var request_1 = __webpack_require__(41);
var target_1 = __webpack_require__(12);
var binding_count_1 = __webpack_require__(43);
var reflection_utils_1 = __webpack_require__(44);
var metadata_1 = __webpack_require__(2);
var ERROR_MSGS = __webpack_require__(1);
var METADATA_KEY = __webpack_require__(0);
var exceptions_1 = __webpack_require__(13);
var literal_types_1 = __webpack_require__(3);
var serialization_1 = __webpack_require__(7);
function getBindingDictionary(cntnr) {
    return cntnr._bindingDictionary;
}
exports.getBindingDictionary = getBindingDictionary;
function _createTarget(isMultiInject, targetType, serviceIdentifier, name, key, value) {
    var metadataKey = isMultiInject ? METADATA_KEY.MULTI_INJECT_TAG : METADATA_KEY.INJECT_TAG;
    var injectMetadata = new metadata_1.Metadata(metadataKey, serviceIdentifier);
    var target = new target_1.Target(targetType, name, serviceIdentifier, injectMetadata);
    if (key !== undefined) {
        var tagMetadata = new metadata_1.Metadata(key, value);
        target.metadata.push(tagMetadata);
    }
    return target;
}
function _getActiveBindings(metadataReader, avoidConstraints, context, parentRequest, target) {
    var bindings = getBindings(context.container, target.serviceIdentifier);
    var activeBindings = [];
    if (bindings.length === binding_count_1.BindingCount.NoBindingsAvailable &&
        context.container.options.autoBindInjectable &&
        typeof target.serviceIdentifier === "function" &&
        metadataReader.getConstructorMetadata(target.serviceIdentifier).compilerGeneratedMetadata) {
        context.container.bind(target.serviceIdentifier).toSelf();
        bindings = getBindings(context.container, target.serviceIdentifier);
    }
    if (avoidConstraints === false) {
        activeBindings = bindings.filter(function (binding) {
            var request = new request_1.Request(binding.serviceIdentifier, context, parentRequest, binding, target);
            return binding.constraint(request);
        });
    }
    else {
        activeBindings = bindings;
    }
    _validateActiveBindingCount(target.serviceIdentifier, activeBindings, target, context.container);
    return activeBindings;
}
function _validateActiveBindingCount(serviceIdentifier, bindings, target, container) {
    switch (bindings.length) {
        case binding_count_1.BindingCount.NoBindingsAvailable:
            if (target.isOptional() === true) {
                return bindings;
            }
            else {
                var serviceIdentifierString = serialization_1.getServiceIdentifierAsString(serviceIdentifier);
                var msg = ERROR_MSGS.NOT_REGISTERED;
                msg += serialization_1.listMetadataForTarget(serviceIdentifierString, target);
                msg += serialization_1.listRegisteredBindingsForServiceIdentifier(container, serviceIdentifierString, getBindings);
                throw new Error(msg);
            }
        case binding_count_1.BindingCount.OnlyOneBindingAvailable:
            if (target.isArray() === false) {
                return bindings;
            }
        case binding_count_1.BindingCount.MultipleBindingsAvailable:
        default:
            if (target.isArray() === false) {
                var serviceIdentifierString = serialization_1.getServiceIdentifierAsString(serviceIdentifier), msg = ERROR_MSGS.AMBIGUOUS_MATCH + " " + serviceIdentifierString;
                msg += serialization_1.listRegisteredBindingsForServiceIdentifier(container, serviceIdentifierString, getBindings);
                throw new Error(msg);
            }
            else {
                return bindings;
            }
    }
}
function _createSubRequests(metadataReader, avoidConstraints, serviceIdentifier, context, parentRequest, target) {
    try {
        var activeBindings = void 0;
        var childRequest_1;
        if (parentRequest === null) {
            activeBindings = _getActiveBindings(metadataReader, avoidConstraints, context, null, target);
            childRequest_1 = new request_1.Request(serviceIdentifier, context, null, activeBindings, target);
            var thePlan = new plan_1.Plan(context, childRequest_1);
            context.addPlan(thePlan);
        }
        else {
            activeBindings = _getActiveBindings(metadataReader, avoidConstraints, context, parentRequest, target);
            childRequest_1 = parentRequest.addChildRequest(target.serviceIdentifier, activeBindings, target);
        }
        activeBindings.forEach(function (binding) {
            var subChildRequest = null;
            if (target.isArray()) {
                subChildRequest = childRequest_1.addChildRequest(binding.serviceIdentifier, binding, target);
            }
            else {
                if (binding.cache) {
                    return;
                }
                subChildRequest = childRequest_1;
            }
            if (binding.type === literal_types_1.BindingTypeEnum.Instance && binding.implementationType !== null) {
                var dependencies = reflection_utils_1.getDependencies(metadataReader, binding.implementationType);
                dependencies.forEach(function (dependency) {
                    _createSubRequests(metadataReader, false, dependency.serviceIdentifier, context, subChildRequest, dependency);
                });
            }
        });
    }
    catch (error) {
        if (exceptions_1.isStackOverflowExeption(error) &&
            parentRequest !== null) {
            serialization_1.circularDependencyToException(parentRequest.parentContext.plan.rootRequest);
        }
        else {
            throw new Error(error.message);
        }
    }
}
function getBindings(container, serviceIdentifier) {
    var bindings = [];
    var bindingDictionary = getBindingDictionary(container);
    if (bindingDictionary.hasKey(serviceIdentifier)) {
        bindings = bindingDictionary.get(serviceIdentifier);
    }
    else if (container.parent !== null) {
        bindings = getBindings(container.parent, serviceIdentifier);
    }
    return bindings;
}
function plan(metadataReader, container, isMultiInject, targetType, serviceIdentifier, key, value, avoidConstraints) {
    if (avoidConstraints === void 0) { avoidConstraints = false; }
    var context = new context_1.Context(container);
    var target = _createTarget(isMultiInject, targetType, serviceIdentifier, "", key, value);
    _createSubRequests(metadataReader, avoidConstraints, serviceIdentifier, context, null, target);
    return context;
}
exports.plan = plan;
function createMockRequest(container, serviceIdentifier, key, value) {
    var target = new target_1.Target(literal_types_1.TargetTypeEnum.Variable, "", serviceIdentifier, new metadata_1.Metadata(key, value));
    var context = new context_1.Context(container);
    var request = new request_1.Request(serviceIdentifier, context, null, [], target);
    return request;
}
exports.createMockRequest = createMockRequest;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Plan = (function () {
    function Plan(parentContext, rootRequest) {
        this.parentContext = parentContext;
        this.rootRequest = rootRequest;
    }
    return Plan;
}());
exports.Plan = Plan;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var guid_1 = __webpack_require__(6);
var Context = (function () {
    function Context(container) {
        this.guid = guid_1.guid();
        this.container = container;
    }
    Context.prototype.addPlan = function (plan) {
        this.plan = plan;
    };
    return Context;
}());
exports.Context = Context;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var guid_1 = __webpack_require__(6);
var Request = (function () {
    function Request(serviceIdentifier, parentContext, parentRequest, bindings, target) {
        this.guid = guid_1.guid();
        this.serviceIdentifier = serviceIdentifier;
        this.parentContext = parentContext;
        this.parentRequest = parentRequest;
        this.target = target;
        this.childRequests = [];
        this.bindings = (Array.isArray(bindings) ? bindings : [bindings]);
        if (parentRequest === null) {
            this.requestScope = new Map();
        }
        else {
            this.requestScope = null;
        }
    }
    Request.prototype.addChildRequest = function (serviceIdentifier, bindings, target) {
        var child = new Request(serviceIdentifier, this.parentContext, this, bindings, target);
        this.childRequests.push(child);
        return child;
    };
    return Request;
}());
exports.Request = Request;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var QueryableString = (function () {
    function QueryableString(str) {
        this.str = str;
    }
    QueryableString.prototype.startsWith = function (searchString) {
        return this.str.indexOf(searchString) === 0;
    };
    QueryableString.prototype.endsWith = function (searchString) {
        var reverseString = "";
        var reverseSearchString = searchString.split("").reverse().join("");
        reverseString = this.str.split("").reverse().join("");
        return this.startsWith.call({ str: reverseString }, reverseSearchString);
    };
    QueryableString.prototype.contains = function (searchString) {
        return (this.str.indexOf(searchString) !== -1);
    };
    QueryableString.prototype.equals = function (compareString) {
        return this.str === compareString;
    };
    QueryableString.prototype.value = function () {
        return this.str;
    };
    return QueryableString;
}());
exports.QueryableString = QueryableString;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var BindingCount = {
    MultipleBindingsAvailable: 2,
    NoBindingsAvailable: 0,
    OnlyOneBindingAvailable: 1
};
exports.BindingCount = BindingCount;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var serialization_1 = __webpack_require__(7);
var target_1 = __webpack_require__(12);
var ERROR_MSGS = __webpack_require__(1);
var METADATA_KEY = __webpack_require__(0);
var literal_types_1 = __webpack_require__(3);
function getDependencies(metadataReader, func) {
    var constructorName = serialization_1.getFunctionName(func);
    var targets = getTargets(metadataReader, constructorName, func, false);
    return targets;
}
exports.getDependencies = getDependencies;
function getTargets(metadataReader, constructorName, func, isBaseClass) {
    var metadata = metadataReader.getConstructorMetadata(func);
    var serviceIdentifiers = metadata.compilerGeneratedMetadata;
    if (serviceIdentifiers === undefined) {
        var msg = ERROR_MSGS.MISSING_INJECTABLE_ANNOTATION + " " + constructorName + ".";
        throw new Error(msg);
    }
    var constructorArgsMetadata = metadata.userGeneratedMetadata;
    var keys = Object.keys(constructorArgsMetadata);
    var hasUserDeclaredUnknownInjections = (func.length === 0 && keys.length > 0);
    var iterations = (hasUserDeclaredUnknownInjections) ? keys.length : func.length;
    var constructorTargets = getConstructorArgsAsTargets(isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata, iterations);
    var propertyTargets = getClassPropsAsTargets(metadataReader, func);
    var targets = constructorTargets.concat(propertyTargets);
    var baseClassDependencyCount = getBaseClassDependencyCount(metadataReader, func);
    if (targets.length < baseClassDependencyCount) {
        var error = ERROR_MSGS.ARGUMENTS_LENGTH_MISMATCH_1 +
            constructorName + ERROR_MSGS.ARGUMENTS_LENGTH_MISMATCH_2;
        throw new Error(error);
    }
    return targets;
}
function getConstructorArgsAsTarget(index, isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata) {
    var targetMetadata = constructorArgsMetadata[index.toString()] || [];
    var metadata = formatTargetMetadata(targetMetadata);
    var isManaged = metadata.unmanaged !== true;
    var serviceIdentifier = serviceIdentifiers[index];
    var injectIdentifier = (metadata.inject || metadata.multiInject);
    serviceIdentifier = (injectIdentifier) ? (injectIdentifier) : serviceIdentifier;
    if (isManaged === true) {
        var isObject = serviceIdentifier === Object;
        var isFunction = serviceIdentifier === Function;
        var isUndefined = serviceIdentifier === undefined;
        var isUnknownType = (isObject || isFunction || isUndefined);
        if (isBaseClass === false && isUnknownType) {
            var msg = ERROR_MSGS.MISSING_INJECT_ANNOTATION + " argument " + index + " in class " + constructorName + ".";
            throw new Error(msg);
        }
        var target = new target_1.Target(literal_types_1.TargetTypeEnum.ConstructorArgument, metadata.targetName, serviceIdentifier);
        target.metadata = targetMetadata;
        return target;
    }
    return null;
}
function getConstructorArgsAsTargets(isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata, iterations) {
    var targets = [];
    for (var i = 0; i < iterations; i++) {
        var index = i;
        var target = getConstructorArgsAsTarget(index, isBaseClass, constructorName, serviceIdentifiers, constructorArgsMetadata);
        if (target !== null) {
            targets.push(target);
        }
    }
    return targets;
}
function getClassPropsAsTargets(metadataReader, constructorFunc) {
    var classPropsMetadata = metadataReader.getPropertiesMetadata(constructorFunc);
    var targets = [];
    var keys = Object.keys(classPropsMetadata);
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var targetMetadata = classPropsMetadata[key];
        var metadata = formatTargetMetadata(classPropsMetadata[key]);
        var targetName = metadata.targetName || key;
        var serviceIdentifier = (metadata.inject || metadata.multiInject);
        var target = new target_1.Target(literal_types_1.TargetTypeEnum.ClassProperty, targetName, serviceIdentifier);
        target.metadata = targetMetadata;
        targets.push(target);
    }
    var baseConstructor = Object.getPrototypeOf(constructorFunc.prototype).constructor;
    if (baseConstructor !== Object) {
        var baseTargets = getClassPropsAsTargets(metadataReader, baseConstructor);
        targets = targets.concat(baseTargets);
    }
    return targets;
}
function getBaseClassDependencyCount(metadataReader, func) {
    var baseConstructor = Object.getPrototypeOf(func.prototype).constructor;
    if (baseConstructor !== Object) {
        var baseConstructorName = serialization_1.getFunctionName(baseConstructor);
        var targets = getTargets(metadataReader, baseConstructorName, baseConstructor, true);
        var metadata = targets.map(function (t) {
            return t.metadata.filter(function (m) {
                return m.key === METADATA_KEY.UNMANAGED_TAG;
            });
        });
        var unmanagedCount = [].concat.apply([], metadata).length;
        var dependencyCount = targets.length - unmanagedCount;
        if (dependencyCount > 0) {
            return dependencyCount;
        }
        else {
            return getBaseClassDependencyCount(metadataReader, baseConstructor);
        }
    }
    else {
        return 0;
    }
}
function formatTargetMetadata(targetMetadata) {
    var targetMetadataMap = {};
    targetMetadata.forEach(function (m) {
        targetMetadataMap[m.key.toString()] = m.value;
    });
    return {
        inject: targetMetadataMap[METADATA_KEY.INJECT_TAG],
        multiInject: targetMetadataMap[METADATA_KEY.MULTI_INJECT_TAG],
        targetName: targetMetadataMap[METADATA_KEY.NAME_TAG],
        unmanaged: targetMetadataMap[METADATA_KEY.UNMANAGED_TAG]
    };
}


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var literal_types_1 = __webpack_require__(3);
var serialization_1 = __webpack_require__(7);
var instantiation_1 = __webpack_require__(46);
var ERROR_MSGS = __webpack_require__(1);
var _resolveRequest = function (requestScope) {
    return function (request) {
        var bindings = request.bindings;
        var childRequests = request.childRequests;
        var targetIsAnArray = request.target && request.target.isArray();
        var targetParentIsNotAnArray = !request.parentRequest ||
            !request.parentRequest.target ||
            !request.target ||
            !request.parentRequest.target.matchesArray(request.target.serviceIdentifier);
        if (targetIsAnArray && targetParentIsNotAnArray) {
            return childRequests.map(function (childRequest) {
                var _f = _resolveRequest(requestScope);
                return _f(childRequest);
            });
        }
        else {
            var result = null;
            if (request.target.isOptional() === true && bindings.length === 0) {
                return undefined;
            }
            var binding = bindings[0];
            var isSingleton = binding.scope === literal_types_1.BindingScopeEnum.Singleton;
            var isRequestSingleton = binding.scope === literal_types_1.BindingScopeEnum.Request;
            if (isSingleton && binding.activated === true) {
                return binding.cache;
            }
            if (isRequestSingleton &&
                requestScope !== null &&
                requestScope.has(binding.guid)) {
                return requestScope.get(binding.guid);
            }
            if (binding.type === literal_types_1.BindingTypeEnum.ConstantValue) {
                result = binding.cache;
            }
            else if (binding.type === literal_types_1.BindingTypeEnum.Function) {
                result = binding.cache;
            }
            else if (binding.type === literal_types_1.BindingTypeEnum.Constructor) {
                result = binding.implementationType;
            }
            else if (binding.type === literal_types_1.BindingTypeEnum.DynamicValue && binding.dynamicValue !== null) {
                result = binding.dynamicValue(request.parentContext);
            }
            else if (binding.type === literal_types_1.BindingTypeEnum.Factory && binding.factory !== null) {
                result = binding.factory(request.parentContext);
            }
            else if (binding.type === literal_types_1.BindingTypeEnum.Provider && binding.provider !== null) {
                result = binding.provider(request.parentContext);
            }
            else if (binding.type === literal_types_1.BindingTypeEnum.Instance && binding.implementationType !== null) {
                result = instantiation_1.resolveInstance(binding.implementationType, childRequests, _resolveRequest(requestScope));
            }
            else {
                var serviceIdentifier = serialization_1.getServiceIdentifierAsString(request.serviceIdentifier);
                throw new Error(ERROR_MSGS.INVALID_BINDING_TYPE + " " + serviceIdentifier);
            }
            if (typeof binding.onActivation === "function") {
                result = binding.onActivation(request.parentContext, result);
            }
            if (isSingleton) {
                binding.cache = result;
                binding.activated = true;
            }
            if (isRequestSingleton &&
                requestScope !== null &&
                !requestScope.has(binding.guid)) {
                requestScope.set(binding.guid, result);
            }
            return result;
        }
    };
};
function resolve(context) {
    var _f = _resolveRequest(context.plan.rootRequest.requestScope);
    return _f(context.plan.rootRequest);
}
exports.resolve = resolve;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var literal_types_1 = __webpack_require__(3);
var METADATA_KEY = __webpack_require__(0);
var error_msgs_1 = __webpack_require__(1);
function _injectProperties(instance, childRequests, resolveRequest) {
    var propertyInjectionsRequests = childRequests.filter(function (childRequest) {
        return (childRequest.target !== null &&
            childRequest.target.type === literal_types_1.TargetTypeEnum.ClassProperty);
    });
    var propertyInjections = propertyInjectionsRequests.map(function (childRequest) {
        return resolveRequest(childRequest);
    });
    propertyInjectionsRequests.forEach(function (r, index) {
        var propertyName = "";
        propertyName = r.target.name.value();
        var injection = propertyInjections[index];
        instance[propertyName] = injection;
    });
    return instance;
}
function _createInstance(Func, injections) {
    return new (Func.bind.apply(Func, [void 0].concat(injections)))();
}
function _postConstruct(constr, result) {
    if (Reflect.hasMetadata(METADATA_KEY.POST_CONSTRUCT, constr)) {
        var data = Reflect.getMetadata(METADATA_KEY.POST_CONSTRUCT, constr);
        try {
            result[data.value]();
        }
        catch (e) {
            throw new Error(error_msgs_1.POST_CONSTRUCT_ERROR(constr.name, e.message));
        }
    }
}
function resolveInstance(constr, childRequests, resolveRequest) {
    var result = null;
    if (childRequests.length > 0) {
        var constructorInjectionsRequests = childRequests.filter(function (childRequest) {
            return (childRequest.target !== null && childRequest.target.type === literal_types_1.TargetTypeEnum.ConstructorArgument);
        });
        var constructorInjections = constructorInjectionsRequests.map(function (childRequest) {
            return resolveRequest(childRequest);
        });
        result = _createInstance(constr, constructorInjections);
        result = _injectProperties(result, childRequests, resolveRequest);
    }
    else {
        result = new constr();
    }
    _postConstruct(constr, result);
    return result;
}
exports.resolveInstance = resolveInstance;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var binding_in_when_on_syntax_1 = __webpack_require__(48);
var binding_when_on_syntax_1 = __webpack_require__(14);
var literal_types_1 = __webpack_require__(3);
var exceptions_1 = __webpack_require__(13);
var ERROR_MSGS = __webpack_require__(1);
function factoryWrapper(factoryType, serviceIdentifier, factory) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        try {
            return factory.apply(void 0, args);
        }
        catch (error) {
            if (exceptions_1.isStackOverflowExeption(error)) {
                throw new Error(ERROR_MSGS.CIRCULAR_DEPENDENCY_IN_FACTORY(factoryType, serviceIdentifier));
            }
            else {
                throw new Error(error.message);
            }
        }
    };
}
var BindingToSyntax = (function () {
    function BindingToSyntax(binding) {
        this._binding = binding;
    }
    BindingToSyntax.prototype.to = function (constructor) {
        this._binding.type = literal_types_1.BindingTypeEnum.Instance;
        this._binding.implementationType = constructor;
        return new binding_in_when_on_syntax_1.BindingInWhenOnSyntax(this._binding);
    };
    BindingToSyntax.prototype.toSelf = function () {
        if (typeof this._binding.serviceIdentifier !== "function") {
            throw new Error("" + ERROR_MSGS.INVALID_TO_SELF_VALUE);
        }
        var self = this._binding.serviceIdentifier;
        return this.to(self);
    };
    BindingToSyntax.prototype.toConstantValue = function (value) {
        this._binding.type = literal_types_1.BindingTypeEnum.ConstantValue;
        this._binding.cache = value;
        this._binding.dynamicValue = null;
        this._binding.implementationType = null;
        return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
    };
    BindingToSyntax.prototype.toDynamicValue = function (func) {
        this._binding.type = literal_types_1.BindingTypeEnum.DynamicValue;
        this._binding.cache = null;
        this._binding.dynamicValue = factoryWrapper("toDynamicValue", this._binding.serviceIdentifier.toString(), func);
        this._binding.implementationType = null;
        return new binding_in_when_on_syntax_1.BindingInWhenOnSyntax(this._binding);
    };
    BindingToSyntax.prototype.toConstructor = function (constructor) {
        this._binding.type = literal_types_1.BindingTypeEnum.Constructor;
        this._binding.implementationType = constructor;
        return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
    };
    BindingToSyntax.prototype.toFactory = function (factory) {
        this._binding.type = literal_types_1.BindingTypeEnum.Factory;
        this._binding.factory = factoryWrapper("toFactory", this._binding.serviceIdentifier.toString(), factory);
        return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
    };
    BindingToSyntax.prototype.toFunction = function (func) {
        if (typeof func !== "function") {
            throw new Error(ERROR_MSGS.INVALID_FUNCTION_BINDING);
        }
        var bindingWhenOnSyntax = this.toConstantValue(func);
        this._binding.type = literal_types_1.BindingTypeEnum.Function;
        return bindingWhenOnSyntax;
    };
    BindingToSyntax.prototype.toAutoFactory = function (serviceIdentifier) {
        var _this = this;
        this._binding.type = literal_types_1.BindingTypeEnum.Factory;
        this._binding.factory = function (context) {
            var autofactory = function () { return context.container.get(serviceIdentifier); };
            return factoryWrapper("toAutoFactory", _this._binding.serviceIdentifier.toString(), autofactory);
        };
        return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
    };
    BindingToSyntax.prototype.toProvider = function (provider) {
        this._binding.type = literal_types_1.BindingTypeEnum.Provider;
        this._binding.provider = factoryWrapper("toProvider", this._binding.serviceIdentifier.toString(), provider);
        return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
    };
    return BindingToSyntax;
}());
exports.BindingToSyntax = BindingToSyntax;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var binding_in_syntax_1 = __webpack_require__(49);
var binding_when_syntax_1 = __webpack_require__(8);
var binding_on_syntax_1 = __webpack_require__(9);
var BindingInWhenOnSyntax = (function () {
    function BindingInWhenOnSyntax(binding) {
        this._binding = binding;
        this._bindingWhenSyntax = new binding_when_syntax_1.BindingWhenSyntax(this._binding);
        this._bindingOnSyntax = new binding_on_syntax_1.BindingOnSyntax(this._binding);
        this._bindingInSyntax = new binding_in_syntax_1.BindingInSyntax(binding);
    }
    BindingInWhenOnSyntax.prototype.inRequestScope = function () {
        return this._bindingInSyntax.inRequestScope();
    };
    BindingInWhenOnSyntax.prototype.inSingletonScope = function () {
        return this._bindingInSyntax.inSingletonScope();
    };
    BindingInWhenOnSyntax.prototype.inTransientScope = function () {
        return this._bindingInSyntax.inTransientScope();
    };
    BindingInWhenOnSyntax.prototype.when = function (constraint) {
        return this._bindingWhenSyntax.when(constraint);
    };
    BindingInWhenOnSyntax.prototype.whenTargetNamed = function (name) {
        return this._bindingWhenSyntax.whenTargetNamed(name);
    };
    BindingInWhenOnSyntax.prototype.whenTargetIsDefault = function () {
        return this._bindingWhenSyntax.whenTargetIsDefault();
    };
    BindingInWhenOnSyntax.prototype.whenTargetTagged = function (tag, value) {
        return this._bindingWhenSyntax.whenTargetTagged(tag, value);
    };
    BindingInWhenOnSyntax.prototype.whenInjectedInto = function (parent) {
        return this._bindingWhenSyntax.whenInjectedInto(parent);
    };
    BindingInWhenOnSyntax.prototype.whenParentNamed = function (name) {
        return this._bindingWhenSyntax.whenParentNamed(name);
    };
    BindingInWhenOnSyntax.prototype.whenParentTagged = function (tag, value) {
        return this._bindingWhenSyntax.whenParentTagged(tag, value);
    };
    BindingInWhenOnSyntax.prototype.whenAnyAncestorIs = function (ancestor) {
        return this._bindingWhenSyntax.whenAnyAncestorIs(ancestor);
    };
    BindingInWhenOnSyntax.prototype.whenNoAncestorIs = function (ancestor) {
        return this._bindingWhenSyntax.whenNoAncestorIs(ancestor);
    };
    BindingInWhenOnSyntax.prototype.whenAnyAncestorNamed = function (name) {
        return this._bindingWhenSyntax.whenAnyAncestorNamed(name);
    };
    BindingInWhenOnSyntax.prototype.whenAnyAncestorTagged = function (tag, value) {
        return this._bindingWhenSyntax.whenAnyAncestorTagged(tag, value);
    };
    BindingInWhenOnSyntax.prototype.whenNoAncestorNamed = function (name) {
        return this._bindingWhenSyntax.whenNoAncestorNamed(name);
    };
    BindingInWhenOnSyntax.prototype.whenNoAncestorTagged = function (tag, value) {
        return this._bindingWhenSyntax.whenNoAncestorTagged(tag, value);
    };
    BindingInWhenOnSyntax.prototype.whenAnyAncestorMatches = function (constraint) {
        return this._bindingWhenSyntax.whenAnyAncestorMatches(constraint);
    };
    BindingInWhenOnSyntax.prototype.whenNoAncestorMatches = function (constraint) {
        return this._bindingWhenSyntax.whenNoAncestorMatches(constraint);
    };
    BindingInWhenOnSyntax.prototype.onActivation = function (handler) {
        return this._bindingOnSyntax.onActivation(handler);
    };
    return BindingInWhenOnSyntax;
}());
exports.BindingInWhenOnSyntax = BindingInWhenOnSyntax;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var literal_types_1 = __webpack_require__(3);
var binding_when_on_syntax_1 = __webpack_require__(14);
var BindingInSyntax = (function () {
    function BindingInSyntax(binding) {
        this._binding = binding;
    }
    BindingInSyntax.prototype.inRequestScope = function () {
        this._binding.scope = literal_types_1.BindingScopeEnum.Request;
        return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
    };
    BindingInSyntax.prototype.inSingletonScope = function () {
        this._binding.scope = literal_types_1.BindingScopeEnum.Singleton;
        return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
    };
    BindingInSyntax.prototype.inTransientScope = function () {
        this._binding.scope = literal_types_1.BindingScopeEnum.Transient;
        return new binding_when_on_syntax_1.BindingWhenOnSyntax(this._binding);
    };
    return BindingInSyntax;
}());
exports.BindingInSyntax = BindingInSyntax;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ContainerSnapshot = (function () {
    function ContainerSnapshot() {
    }
    ContainerSnapshot.of = function (bindings, middleware) {
        var snapshot = new ContainerSnapshot();
        snapshot.bindings = bindings;
        snapshot.middleware = middleware;
        return snapshot;
    };
    return ContainerSnapshot;
}());
exports.ContainerSnapshot = ContainerSnapshot;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var guid_1 = __webpack_require__(6);
var ContainerModule = (function () {
    function ContainerModule(registry) {
        this.guid = guid_1.guid();
        this.registry = registry;
    }
    return ContainerModule;
}());
exports.ContainerModule = ContainerModule;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var METADATA_KEY = __webpack_require__(0);
var ERRORS_MSGS = __webpack_require__(1);
function injectable() {
    return function (target) {
        if (Reflect.hasOwnMetadata(METADATA_KEY.PARAM_TYPES, target) === true) {
            throw new Error(ERRORS_MSGS.DUPLICATED_INJECTABLE_DECORATOR);
        }
        var types = Reflect.getMetadata(METADATA_KEY.DESIGN_PARAM_TYPES, target) || [];
        Reflect.defineMetadata(METADATA_KEY.PARAM_TYPES, types, target);
        return target;
    };
}
exports.injectable = injectable;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var metadata_1 = __webpack_require__(2);
var decorator_utils_1 = __webpack_require__(4);
function tagged(metadataKey, metadataValue) {
    return function (target, targetKey, index) {
        var metadata = new metadata_1.Metadata(metadataKey, metadataValue);
        if (typeof index === "number") {
            decorator_utils_1.tagParameter(target, targetKey, index, metadata);
        }
        else {
            decorator_utils_1.tagProperty(target, targetKey, metadata);
        }
    };
}
exports.tagged = tagged;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var metadata_1 = __webpack_require__(2);
var decorator_utils_1 = __webpack_require__(4);
var METADATA_KEY = __webpack_require__(0);
function named(name) {
    return function (target, targetKey, index) {
        var metadata = new metadata_1.Metadata(METADATA_KEY.NAMED_TAG, name);
        if (typeof index === "number") {
            decorator_utils_1.tagParameter(target, targetKey, index, metadata);
        }
        else {
            decorator_utils_1.tagProperty(target, targetKey, metadata);
        }
    };
}
exports.named = named;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var metadata_1 = __webpack_require__(2);
var decorator_utils_1 = __webpack_require__(4);
var METADATA_KEY = __webpack_require__(0);
function inject(serviceIdentifier) {
    return function (target, targetKey, index) {
        var metadata = new metadata_1.Metadata(METADATA_KEY.INJECT_TAG, serviceIdentifier);
        if (typeof index === "number") {
            decorator_utils_1.tagParameter(target, targetKey, index, metadata);
        }
        else {
            decorator_utils_1.tagProperty(target, targetKey, metadata);
        }
    };
}
exports.inject = inject;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var metadata_1 = __webpack_require__(2);
var decorator_utils_1 = __webpack_require__(4);
var METADATA_KEY = __webpack_require__(0);
function optional() {
    return function (target, targetKey, index) {
        var metadata = new metadata_1.Metadata(METADATA_KEY.OPTIONAL_TAG, true);
        if (typeof index === "number") {
            decorator_utils_1.tagParameter(target, targetKey, index, metadata);
        }
        else {
            decorator_utils_1.tagProperty(target, targetKey, metadata);
        }
    };
}
exports.optional = optional;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var metadata_1 = __webpack_require__(2);
var decorator_utils_1 = __webpack_require__(4);
var METADATA_KEY = __webpack_require__(0);
function unmanaged() {
    return function (target, targetKey, index) {
        var metadata = new metadata_1.Metadata(METADATA_KEY.UNMANAGED_TAG, true);
        decorator_utils_1.tagParameter(target, targetKey, index, metadata);
    };
}
exports.unmanaged = unmanaged;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var metadata_1 = __webpack_require__(2);
var decorator_utils_1 = __webpack_require__(4);
var METADATA_KEY = __webpack_require__(0);
function multiInject(serviceIdentifier) {
    return function (target, targetKey, index) {
        var metadata = new metadata_1.Metadata(METADATA_KEY.MULTI_INJECT_TAG, serviceIdentifier);
        if (typeof index === "number") {
            decorator_utils_1.tagParameter(target, targetKey, index, metadata);
        }
        else {
            decorator_utils_1.tagProperty(target, targetKey, metadata);
        }
    };
}
exports.multiInject = multiInject;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var metadata_1 = __webpack_require__(2);
var decorator_utils_1 = __webpack_require__(4);
var METADATA_KEY = __webpack_require__(0);
function targetName(name) {
    return function (target, targetKey, index) {
        var metadata = new metadata_1.Metadata(METADATA_KEY.NAME_TAG, name);
        decorator_utils_1.tagParameter(target, targetKey, index, metadata);
    };
}
exports.targetName = targetName;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var metadata_1 = __webpack_require__(2);
var METADATA_KEY = __webpack_require__(0);
var ERRORS_MSGS = __webpack_require__(1);
function postConstruct() {
    return function (target, propertyKey, descriptor) {
        var metadata = new metadata_1.Metadata(METADATA_KEY.POST_CONSTRUCT, propertyKey);
        if (Reflect.hasOwnMetadata(METADATA_KEY.POST_CONSTRUCT, target.constructor)) {
            throw new Error(ERRORS_MSGS.MULTIPLE_POST_CONSTRUCT_METHODS);
        }
        Reflect.defineMetadata(METADATA_KEY.POST_CONSTRUCT, metadata, target.constructor);
    };
}
exports.postConstruct = postConstruct;


/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = "attribute vec4 aVertexPosition;\r\nattribute vec2 aTextureCoord;\r\n\r\nvarying highp vec2 vTextureCoord;\r\n\r\nvoid main() {\r\n  gl_Position = aVertexPosition;\r\n  vTextureCoord = aTextureCoord;\r\n}\r\n"

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = "uniform sampler2D uBackgroundSampler;\r\nuniform sampler2D uNormalMapSampler;\r\n\r\nprecision highp float;\r\n\r\nuniform vec3 uLightPosition;\r\nuniform vec3 uViewerVector;\r\nuniform float kD;\r\nuniform float kS;\r\nuniform float m;\r\n\r\nvarying vec2 vTextureCoord;\r\n\r\nvec3 getNormalVector() {\r\n  vec4 rawNormalColor = texture2D(uNormalMapSampler, vTextureCoord);\r\n  vec3 normalVectorBeforeScaling = vec3(rawNormalColor.xy * 2.0 - 1.0, rawNormalColor.z);\r\n  vec3 normalVectorAfterScaling = normalVectorBeforeScaling / normalVectorBeforeScaling.z;\r\n  vec3 normalVector = normalize(normalVectorAfterScaling);\r\n  normalVector.y *= -1.0;\r\n\r\n  return normalVector;\r\n}\r\n\r\nvec3 getDiffuseComponent(vec4 textureColor, vec3 normalVector, vec3 lightVector) {\r\n  float cosine = max(0.0, dot(normalVector, lightVector));\r\n\r\n  return textureColor.rgb * cosine;\r\n}\r\n\r\nvec3 getSpecularComponent(vec3 normalVector, vec3 lightVector) {\r\n  vec3 r = 2.0 * normalVector * dot(normalVector, lightVector) - lightVector;\r\n  float cosine = max(0.0, dot(r, uViewerVector));\r\n\r\n  return vec3(1.0, 1.0, 1.0) * pow(cosine, m);\r\n}\r\n\r\nvoid main() {\r\n  vec4 textureColor = texture2D(uBackgroundSampler, vTextureCoord);\r\n  vec3 normalVector = getNormalVector();\r\n  vec3 lightVector = normalize(uLightPosition - vec3(vTextureCoord, 0.0));\r\n\r\n  vec3 diffuseComponent = getDiffuseComponent(textureColor, normalVector, lightVector);\r\n  vec3 specularComponent = getSpecularComponent(normalVector, lightVector);\r\n\r\n  vec3 finalTextureColor = kD * diffuseComponent + kS * specularComponent;\r\n  gl_FragColor = vec4(finalTextureColor, 1.0);\r\n}\r\n"

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const eventemitter3_1 = __webpack_require__(19);
const inversify_1 = __webpack_require__(5);
const Application_1 = __webpack_require__(11);
const ImageLoader_1 = __webpack_require__(17);
const LightSimulator_1 = __webpack_require__(18);
const ShaderLoader_1 = __webpack_require__(23);
const ShaderProgramInitializer_1 = __webpack_require__(22);
const TextureLoader_1 = __webpack_require__(24);
inversify_1.decorate(inversify_1.injectable(), eventemitter3_1.EventEmitter);
const container = new inversify_1.Container();
exports.container = container;
container.bind(Application_1.Application).toSelf().inSingletonScope();
container.bind(ShaderLoader_1.ShaderLoader).toSelf();
container.bind(ImageLoader_1.ImageLoader).toSelf();
container.bind(ShaderProgramInitializer_1.ShaderProgramInitializer).toSelf();
container.bind(TextureLoader_1.TextureLoader).toSelf();
container.bind(LightSimulator_1.LightSimulator).toSelf().inSingletonScope();


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZWZlYzc2N2VhYjUwY2UxNGNlNGQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ludmVyc2lmeS9saWIvY29uc3RhbnRzL21ldGFkYXRhX2tleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ludmVyc2lmeS9saWIvY29uc3RhbnRzL2Vycm9yX21zZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ludmVyc2lmeS9saWIvcGxhbm5pbmcvbWV0YWRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ludmVyc2lmeS9saWIvY29uc3RhbnRzL2xpdGVyYWxfdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ludmVyc2lmeS9saWIvYW5ub3RhdGlvbi9kZWNvcmF0b3JfdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ludmVyc2lmeS9saWIvaW52ZXJzaWZ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pbnZlcnNpZnkvbGliL3V0aWxzL2d1aWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ludmVyc2lmeS9saWIvdXRpbHMvc2VyaWFsaXphdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW52ZXJzaWZ5L2xpYi9zeW50YXgvYmluZGluZ193aGVuX3N5bnRheC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW52ZXJzaWZ5L2xpYi9zeW50YXgvYmluZGluZ19vbl9zeW50YXguanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQXBwbGljYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ludmVyc2lmeS9saWIvcGxhbm5pbmcvdGFyZ2V0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pbnZlcnNpZnkvbGliL3V0aWxzL2V4Y2VwdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ludmVyc2lmeS9saWIvc3ludGF4L2JpbmRpbmdfd2hlbl9vbl9zeW50YXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ludmVyc2lmeS9saWIvc3ludGF4L2NvbnN0cmFpbnRfaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW52ZXJzaWZ5L2xpYi9wbGFubmluZy9tZXRhZGF0YV9yZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL0ltYWdlTG9hZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9MaWdodFNpbXVsYXRvci50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZXZlbnRlbWl0dGVyMy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL1ZlY3RvcjMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbmZpZ3VyYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL1NoYWRlclByb2dyYW1Jbml0aWFsaXplci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvU2hhZGVyTG9hZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9UZXh0dXJlTG9hZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguc2Nzcz80NDQ2Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9Ad2ViY29tcG9uZW50cy93ZWJjb21wb25lbnRzanMvd2ViY29tcG9uZW50cy1oaS1zZC1jZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVmbGVjdC1tZXRhZGF0YS9SZWZsZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ludmVyc2lmeS9saWIvY29udGFpbmVyL2NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW52ZXJzaWZ5L2xpYi9iaW5kaW5ncy9iaW5kaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pbnZlcnNpZnkvbGliL2NvbnRhaW5lci9sb29rdXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ludmVyc2lmeS9saWIvcGxhbm5pbmcvcGxhbm5lci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW52ZXJzaWZ5L2xpYi9wbGFubmluZy9wbGFuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pbnZlcnNpZnkvbGliL3BsYW5uaW5nL2NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ludmVyc2lmeS9saWIvcGxhbm5pbmcvcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW52ZXJzaWZ5L2xpYi9wbGFubmluZy9xdWVyeWFibGVfc3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pbnZlcnNpZnkvbGliL2JpbmRpbmdzL2JpbmRpbmdfY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ludmVyc2lmeS9saWIvcGxhbm5pbmcvcmVmbGVjdGlvbl91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW52ZXJzaWZ5L2xpYi9yZXNvbHV0aW9uL3Jlc29sdmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pbnZlcnNpZnkvbGliL3Jlc29sdXRpb24vaW5zdGFudGlhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW52ZXJzaWZ5L2xpYi9zeW50YXgvYmluZGluZ190b19zeW50YXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ludmVyc2lmeS9saWIvc3ludGF4L2JpbmRpbmdfaW5fd2hlbl9vbl9zeW50YXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ludmVyc2lmeS9saWIvc3ludGF4L2JpbmRpbmdfaW5fc3ludGF4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pbnZlcnNpZnkvbGliL2NvbnRhaW5lci9jb250YWluZXJfc25hcHNob3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ludmVyc2lmeS9saWIvY29udGFpbmVyL2NvbnRhaW5lcl9tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ludmVyc2lmeS9saWIvYW5ub3RhdGlvbi9pbmplY3RhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pbnZlcnNpZnkvbGliL2Fubm90YXRpb24vdGFnZ2VkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pbnZlcnNpZnkvbGliL2Fubm90YXRpb24vbmFtZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ludmVyc2lmeS9saWIvYW5ub3RhdGlvbi9pbmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ludmVyc2lmeS9saWIvYW5ub3RhdGlvbi9vcHRpb25hbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW52ZXJzaWZ5L2xpYi9hbm5vdGF0aW9uL3VubWFuYWdlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW52ZXJzaWZ5L2xpYi9hbm5vdGF0aW9uL211bHRpX2luamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaW52ZXJzaWZ5L2xpYi9hbm5vdGF0aW9uL3RhcmdldF9uYW1lLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pbnZlcnNpZnkvbGliL2Fubm90YXRpb24vcG9zdF9jb25zdHJ1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYWRlcnMvdmVydGV4LXNoYWRlci5nbHNsIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL2ZyYWdtZW50LXNoYWRlci5nbHNsIiwid2VicGFjazovLy8uL3NyYy9pbnZlcnNpZnkuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REE7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1pBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQzlDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsNkRBQTZEO0FBQzFGO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7QUNsQkE7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3hCQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixvQ0FBb0M7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxvQ0FBb0M7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDekRBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNwQ0E7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNYQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxpQ0FBaUM7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMxRkE7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFD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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsUUFBUTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLFFBQVE7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsdUJBQXVCO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELDBCQUEwQjtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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S0FBSztBQUNMO0FBQ0Esa0NBQWtDO0FBQ2xDLENBQUMsMEJBQTBCO0FBQzNCLG1DOzs7Ozs7O0FDcG1DQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVOzs7Ozs7OztBQ3ZMdEM7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QjtBQUMvQztBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BEO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxnQ0FBZ0MsRUFBRTtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxnQkFBZ0IsRUFBRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7O0FDNVBBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGFBQWE7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7O0FDbkNBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRSwwQkFBMEIsRUFBRTtBQUM5RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsaUNBQWlDLEVBQUU7QUFDM0UsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7QUM5RUE7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsMEJBQTBCO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ25KQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7QUNUQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7OztBQ2JBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7QUMxQkE7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLHFCQUFxQjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7OztBQzFCQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNQQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixnQkFBZ0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGlCQUFpQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDM0hBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbEZBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3JEQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGlEQUFpRDtBQUM1RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7Ozs7Ozs7QUMxRkE7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7OztBQ3ZFQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7OztBQ3RCQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOzs7Ozs7OztBQ2JBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7Ozs7Ozs7O0FDVkE7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNkQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDZkE7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDaEJBO0FBQ0EsOENBQThDLGNBQWM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ2hCQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNoQkE7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNYQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNoQkE7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNYQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDZEEsaURBQWlELGlDQUFpQyx5Q0FBeUMscUJBQXFCLG9DQUFvQyxvQ0FBb0MsS0FBSyxLOzs7Ozs7QUNBN04sdURBQXVELHdDQUF3Qyw4QkFBOEIsb0NBQW9DLCtCQUErQixxQkFBcUIscUJBQXFCLG9CQUFvQixtQ0FBbUMsZ0NBQWdDLHdFQUF3RSw2RkFBNkYsOEZBQThGLDhEQUE4RCw2QkFBNkIsOEJBQThCLEtBQUssMEZBQTBGLDhEQUE4RCwyQ0FBMkMsS0FBSyx3RUFBd0UsaUZBQWlGLHFEQUFxRCxzREFBc0QsS0FBSyxxQkFBcUIsdUVBQXVFLDRDQUE0Qyw4RUFBOEUsK0ZBQStGLCtFQUErRSxrRkFBa0Ysa0RBQWtELEtBQUssSzs7Ozs7Ozs7O0FDQWhxRCxnREFBNkM7QUFDN0MsMkNBQTREO0FBRTVELDhDQUEwQztBQUMxQyw4Q0FBbUQ7QUFDbkQsaURBQXlEO0FBQ3pELCtDQUFxRDtBQUNyRCwyREFBNkU7QUFDN0UsZ0RBQXVEO0FBRXZELG9CQUFRLENBQUMsc0JBQVUsRUFBRSxFQUFFLDRCQUFZLENBQUMsQ0FBQztBQUVyQyxNQUFNLFNBQVMsR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztBQVN6Qiw4QkFBUztBQVBsQixTQUFTLENBQUMsSUFBSSxDQUFjLHlCQUFXLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0FBQ3JFLFNBQVMsQ0FBQyxJQUFJLENBQWUsMkJBQVksQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ3BELFNBQVMsQ0FBQyxJQUFJLENBQWMseUJBQVcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ2xELFNBQVMsQ0FBQyxJQUFJLENBQTJCLG1EQUF3QixDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDNUUsU0FBUyxDQUFDLElBQUksQ0FBZ0IsNkJBQWEsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ3RELFNBQVMsQ0FBQyxJQUFJLENBQWlCLCtCQUFjLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDI1KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBlZmVjNzY3ZWFiNTBjZTE0Y2U0ZCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5OQU1FRF9UQUcgPSBcIm5hbWVkXCI7XG5leHBvcnRzLk5BTUVfVEFHID0gXCJuYW1lXCI7XG5leHBvcnRzLlVOTUFOQUdFRF9UQUcgPSBcInVubWFuYWdlZFwiO1xuZXhwb3J0cy5PUFRJT05BTF9UQUcgPSBcIm9wdGlvbmFsXCI7XG5leHBvcnRzLklOSkVDVF9UQUcgPSBcImluamVjdFwiO1xuZXhwb3J0cy5NVUxUSV9JTkpFQ1RfVEFHID0gXCJtdWx0aV9pbmplY3RcIjtcbmV4cG9ydHMuVEFHR0VEID0gXCJpbnZlcnNpZnk6dGFnZ2VkXCI7XG5leHBvcnRzLlRBR0dFRF9QUk9QID0gXCJpbnZlcnNpZnk6dGFnZ2VkX3Byb3BzXCI7XG5leHBvcnRzLlBBUkFNX1RZUEVTID0gXCJpbnZlcnNpZnk6cGFyYW10eXBlc1wiO1xuZXhwb3J0cy5ERVNJR05fUEFSQU1fVFlQRVMgPSBcImRlc2lnbjpwYXJhbXR5cGVzXCI7XG5leHBvcnRzLlBPU1RfQ09OU1RSVUNUID0gXCJwb3N0X2NvbnN0cnVjdFwiO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaW52ZXJzaWZ5L2xpYi9jb25zdGFudHMvbWV0YWRhdGFfa2V5cy5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRFVQTElDQVRFRF9JTkpFQ1RBQkxFX0RFQ09SQVRPUiA9IFwiQ2Fubm90IGFwcGx5IEBpbmplY3RhYmxlIGRlY29yYXRvciBtdWx0aXBsZSB0aW1lcy5cIjtcbmV4cG9ydHMuRFVQTElDQVRFRF9NRVRBREFUQSA9IFwiTWV0YWRhdGEga2V5IHdhcyB1c2VkIG1vcmUgdGhhbiBvbmNlIGluIGEgcGFyYW1ldGVyOlwiO1xuZXhwb3J0cy5OVUxMX0FSR1VNRU5UID0gXCJOVUxMIGFyZ3VtZW50XCI7XG5leHBvcnRzLktFWV9OT1RfRk9VTkQgPSBcIktleSBOb3QgRm91bmRcIjtcbmV4cG9ydHMuQU1CSUdVT1VTX01BVENIID0gXCJBbWJpZ3VvdXMgbWF0Y2ggZm91bmQgZm9yIHNlcnZpY2VJZGVudGlmaWVyOlwiO1xuZXhwb3J0cy5DQU5OT1RfVU5CSU5EID0gXCJDb3VsZCBub3QgdW5iaW5kIHNlcnZpY2VJZGVudGlmaWVyOlwiO1xuZXhwb3J0cy5OT1RfUkVHSVNURVJFRCA9IFwiTm8gbWF0Y2hpbmcgYmluZGluZ3MgZm91bmQgZm9yIHNlcnZpY2VJZGVudGlmaWVyOlwiO1xuZXhwb3J0cy5NSVNTSU5HX0lOSkVDVEFCTEVfQU5OT1RBVElPTiA9IFwiTWlzc2luZyByZXF1aXJlZCBAaW5qZWN0YWJsZSBhbm5vdGF0aW9uIGluOlwiO1xuZXhwb3J0cy5NSVNTSU5HX0lOSkVDVF9BTk5PVEFUSU9OID0gXCJNaXNzaW5nIHJlcXVpcmVkIEBpbmplY3Qgb3IgQG11bHRpSW5qZWN0IGFubm90YXRpb24gaW46XCI7XG5leHBvcnRzLkNJUkNVTEFSX0RFUEVOREVOQ1kgPSBcIkNpcmN1bGFyIGRlcGVuZGVuY3kgZm91bmQ6XCI7XG5leHBvcnRzLk5PVF9JTVBMRU1FTlRFRCA9IFwiU29ycnksIHRoaXMgZmVhdHVyZSBpcyBub3QgZnVsbHkgaW1wbGVtZW50ZWQgeWV0LlwiO1xuZXhwb3J0cy5JTlZBTElEX0JJTkRJTkdfVFlQRSA9IFwiSW52YWxpZCBiaW5kaW5nIHR5cGU6XCI7XG5leHBvcnRzLk5PX01PUkVfU05BUFNIT1RTX0FWQUlMQUJMRSA9IFwiTm8gc25hcHNob3QgYXZhaWxhYmxlIHRvIHJlc3RvcmUuXCI7XG5leHBvcnRzLklOVkFMSURfTUlERExFV0FSRV9SRVRVUk4gPSBcIkludmFsaWQgcmV0dXJuIHR5cGUgaW4gbWlkZGxld2FyZS4gTWlkZGxld2FyZSBtdXN0IHJldHVybiFcIjtcbmV4cG9ydHMuSU5WQUxJRF9GVU5DVElPTl9CSU5ESU5HID0gXCJWYWx1ZSBwcm92aWRlZCB0byBmdW5jdGlvbiBiaW5kaW5nIG11c3QgYmUgYSBmdW5jdGlvbiFcIjtcbmV4cG9ydHMuSU5WQUxJRF9UT19TRUxGX1ZBTFVFID0gXCJUaGUgdG9TZWxmIGZ1bmN0aW9uIGNhbiBvbmx5IGJlIGFwcGxpZWQgd2hlbiBhIGNvbnN0cnVjdG9yIGlzIFwiICtcbiAgICBcInVzZWQgYXMgc2VydmljZSBpZGVudGlmaWVyXCI7XG5leHBvcnRzLklOVkFMSURfREVDT1JBVE9SX09QRVJBVElPTiA9IFwiVGhlIEBpbmplY3QgQG11bHRpSW5qZWN0IEB0YWdnZWQgYW5kIEBuYW1lZCBkZWNvcmF0b3JzIFwiICtcbiAgICBcIm11c3QgYmUgYXBwbGllZCB0byB0aGUgcGFyYW1ldGVycyBvZiBhIGNsYXNzIGNvbnN0cnVjdG9yIG9yIGEgY2xhc3MgcHJvcGVydHkuXCI7XG5leHBvcnRzLkFSR1VNRU5UU19MRU5HVEhfTUlTTUFUQ0hfMSA9IFwiVGhlIG51bWJlciBvZiBjb25zdHJ1Y3RvciBhcmd1bWVudHMgaW4gdGhlIGRlcml2ZWQgY2xhc3MgXCI7XG5leHBvcnRzLkFSR1VNRU5UU19MRU5HVEhfTUlTTUFUQ0hfMiA9IFwiIG11c3QgYmUgPj0gdGhhbiB0aGUgbnVtYmVyIG9mIGNvbnN0cnVjdG9yIGFyZ3VtZW50cyBvZiBpdHMgYmFzZSBjbGFzcy5cIjtcbmV4cG9ydHMuQ09OVEFJTkVSX09QVElPTlNfTVVTVF9CRV9BTl9PQkpFQ1QgPSBcIkludmFsaWQgQ29udGFpbmVyIGNvbnN0cnVjdG9yIGFyZ3VtZW50LiBDb250YWluZXIgb3B0aW9ucyBcIiArXG4gICAgXCJtdXN0IGJlIGFuIG9iamVjdC5cIjtcbmV4cG9ydHMuQ09OVEFJTkVSX09QVElPTlNfSU5WQUxJRF9ERUZBVUxUX1NDT1BFID0gXCJJbnZhbGlkIENvbnRhaW5lciBvcHRpb24uIERlZmF1bHQgc2NvcGUgbXVzdCBcIiArXG4gICAgXCJiZSBhIHN0cmluZyAoJ3NpbmdsZXRvbicgb3IgJ3RyYW5zaWVudCcpLlwiO1xuZXhwb3J0cy5DT05UQUlORVJfT1BUSU9OU19JTlZBTElEX0FVVE9fQklORF9JTkpFQ1RBQkxFID0gXCJJbnZhbGlkIENvbnRhaW5lciBvcHRpb24uIEF1dG8gYmluZCBpbmplY3RhYmxlIG11c3QgXCIgK1xuICAgIFwiYmUgYSBib29sZWFuXCI7XG5leHBvcnRzLk1VTFRJUExFX1BPU1RfQ09OU1RSVUNUX01FVEhPRFMgPSBcIkNhbm5vdCBhcHBseSBAcG9zdENvbnN0cnVjdCBkZWNvcmF0b3IgbXVsdGlwbGUgdGltZXMgaW4gdGhlIHNhbWUgY2xhc3NcIjtcbmV4cG9ydHMuUE9TVF9DT05TVFJVQ1RfRVJST1IgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhbHVlc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICByZXR1cm4gXCJAcG9zdENvbnN0cnVjdCBlcnJvciBpbiBjbGFzcyBcIiArIHZhbHVlc1swXSArIFwiOiBcIiArIHZhbHVlc1sxXTtcbn07XG5leHBvcnRzLkNJUkNVTEFSX0RFUEVOREVOQ1lfSU5fRkFDVE9SWSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmFsdWVzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFsdWVzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgfVxuICAgIHJldHVybiBcIkl0IGxvb2tzIGxpa2UgdGhlcmUgaXMgYSBjaXJjdWxhciBkZXBlbmRlbmN5IFwiICtcbiAgICAgICAgKFwiaW4gb25lIG9mIHRoZSAnXCIgKyB2YWx1ZXNbMF0gKyBcIicgYmluZGluZ3MuIFBsZWFzZSBpbnZlc3RpZ2F0ZSBiaW5kaW5ncyB3aXRoXCIpICtcbiAgICAgICAgKFwic2VydmljZSBpZGVudGlmaWVyICdcIiArIHZhbHVlc1sxXSArIFwiJy5cIik7XG59O1xuZXhwb3J0cy5TVEFDS19PVkVSRkxPVyA9IFwiTWF4aW11bSBjYWxsIHN0YWNrIHNpemUgZXhjZWVkZWRcIjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2ludmVyc2lmeS9saWIvY29uc3RhbnRzL2Vycm9yX21zZ3MuanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgTUVUQURBVEFfS0VZID0gcmVxdWlyZShcIi4uL2NvbnN0YW50cy9tZXRhZGF0YV9rZXlzXCIpO1xudmFyIE1ldGFkYXRhID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBNZXRhZGF0YShrZXksIHZhbHVlKSB7XG4gICAgICAgIHRoaXMua2V5ID0ga2V5O1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIE1ldGFkYXRhLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMua2V5ID09PSBNRVRBREFUQV9LRVkuTkFNRURfVEFHKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJuYW1lZDogXCIgKyB0aGlzLnZhbHVlLnRvU3RyaW5nKCkgKyBcIiBcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBcInRhZ2dlZDogeyBrZXk6XCIgKyB0aGlzLmtleS50b1N0cmluZygpICsgXCIsIHZhbHVlOiBcIiArIHRoaXMudmFsdWUgKyBcIiB9XCI7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBNZXRhZGF0YTtcbn0oKSk7XG5leHBvcnRzLk1ldGFkYXRhID0gTWV0YWRhdGE7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9pbnZlcnNpZnkvbGliL3BsYW5uaW5nL21ldGFkYXRhLmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEJpbmRpbmdTY29wZUVudW0gPSB7XG4gICAgUmVxdWVzdDogXCJSZXF1ZXN0XCIsXG4gICAgU2luZ2xldG9uOiBcIlNpbmdsZXRvblwiLFxuICAgIFRyYW5zaWVudDogXCJUcmFuc2llbnRcIlxufTtcbmV4cG9ydHMuQmluZGluZ1Njb3BlRW51bSA9IEJpbmRpbmdTY29wZUVudW07XG52YXIgQmluZGluZ1R5cGVFbnVtID0ge1xuICAgIENvbnN0YW50VmFsdWU6IFwiQ29uc3RhbnRWYWx1ZVwiLFxuICAgIENvbnN0cnVjdG9yOiBcIkNvbnN0cnVjdG9yXCIsXG4gICAgRHluYW1pY1ZhbHVlOiBcIkR5bmFtaWNWYWx1ZVwiLFxuICAgIEZhY3Rvcnk6IFwiRmFjdG9yeVwiLFxuICAgIEZ1bmN0aW9uOiBcIkZ1bmN0aW9uXCIsXG4gICAgSW5zdGFuY2U6IFwiSW5zdGFuY2VcIixcbiAgICBJbnZhbGlkOiBcIkludmFsaWRcIixcbiAgICBQcm92aWRlcjogXCJQcm92aWRlclwiXG59O1xuZXhwb3J0cy5CaW5kaW5nVHlwZUVudW0gPSBCaW5kaW5nVHlwZUVudW07XG52YXIgVGFyZ2V0VHlwZUVudW0gPSB7XG4gICAgQ2xhc3NQcm9wZXJ0eTogXCJDbGFzc1Byb3BlcnR5XCIsXG4gICAgQ29uc3RydWN0b3JBcmd1bWVudDogXCJDb25zdHJ1Y3RvckFyZ3VtZW50XCIsXG4gICAgVmFyaWFibGU6IFwiVmFyaWFibGVcIlxufTtcbmV4cG9ydHMuVGFyZ2V0VHlwZUVudW0gPSBUYXJnZXRUeXBlRW51bTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2ludmVyc2lmeS9saWIvY29uc3RhbnRzL2xpdGVyYWxfdHlwZXMuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgTUVUQURBVEFfS0VZID0gcmVxdWlyZShcIi4uL2NvbnN0YW50cy9tZXRhZGF0YV9rZXlzXCIpO1xudmFyIEVSUk9SX01TR1MgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzL2Vycm9yX21zZ3NcIik7XG5mdW5jdGlvbiB0YWdQYXJhbWV0ZXIoYW5ub3RhdGlvblRhcmdldCwgcHJvcGVydHlOYW1lLCBwYXJhbWV0ZXJJbmRleCwgbWV0YWRhdGEpIHtcbiAgICB2YXIgbWV0YWRhdGFLZXkgPSBNRVRBREFUQV9LRVkuVEFHR0VEO1xuICAgIF90YWdQYXJhbWV0ZXJPclByb3BlcnR5KG1ldGFkYXRhS2V5LCBhbm5vdGF0aW9uVGFyZ2V0LCBwcm9wZXJ0eU5hbWUsIG1ldGFkYXRhLCBwYXJhbWV0ZXJJbmRleCk7XG59XG5leHBvcnRzLnRhZ1BhcmFtZXRlciA9IHRhZ1BhcmFtZXRlcjtcbmZ1bmN0aW9uIHRhZ1Byb3BlcnR5KGFubm90YXRpb25UYXJnZXQsIHByb3BlcnR5TmFtZSwgbWV0YWRhdGEpIHtcbiAgICB2YXIgbWV0YWRhdGFLZXkgPSBNRVRBREFUQV9LRVkuVEFHR0VEX1BST1A7XG4gICAgX3RhZ1BhcmFtZXRlck9yUHJvcGVydHkobWV0YWRhdGFLZXksIGFubm90YXRpb25UYXJnZXQuY29uc3RydWN0b3IsIHByb3BlcnR5TmFtZSwgbWV0YWRhdGEpO1xufVxuZXhwb3J0cy50YWdQcm9wZXJ0eSA9IHRhZ1Byb3BlcnR5O1xuZnVuY3Rpb24gX3RhZ1BhcmFtZXRlck9yUHJvcGVydHkobWV0YWRhdGFLZXksIGFubm90YXRpb25UYXJnZXQsIHByb3BlcnR5TmFtZSwgbWV0YWRhdGEsIHBhcmFtZXRlckluZGV4KSB7XG4gICAgdmFyIHBhcmFtc09yUHJvcGVydGllc01ldGFkYXRhID0ge307XG4gICAgdmFyIGlzUGFyYW1ldGVyRGVjb3JhdG9yID0gKHR5cGVvZiBwYXJhbWV0ZXJJbmRleCA9PT0gXCJudW1iZXJcIik7XG4gICAgdmFyIGtleSA9IChwYXJhbWV0ZXJJbmRleCAhPT0gdW5kZWZpbmVkICYmIGlzUGFyYW1ldGVyRGVjb3JhdG9yKSA/IHBhcmFtZXRlckluZGV4LnRvU3RyaW5nKCkgOiBwcm9wZXJ0eU5hbWU7XG4gICAgaWYgKGlzUGFyYW1ldGVyRGVjb3JhdG9yID09PSB0cnVlICYmIHByb3BlcnR5TmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihFUlJPUl9NU0dTLklOVkFMSURfREVDT1JBVE9SX09QRVJBVElPTik7XG4gICAgfVxuICAgIGlmIChSZWZsZWN0Lmhhc093bk1ldGFkYXRhKG1ldGFkYXRhS2V5LCBhbm5vdGF0aW9uVGFyZ2V0KSA9PT0gdHJ1ZSkge1xuICAgICAgICBwYXJhbXNPclByb3BlcnRpZXNNZXRhZGF0YSA9IFJlZmxlY3QuZ2V0TWV0YWRhdGEobWV0YWRhdGFLZXksIGFubm90YXRpb25UYXJnZXQpO1xuICAgIH1cbiAgICB2YXIgcGFyYW1PclByb3BlcnR5TWV0YWRhdGEgPSBwYXJhbXNPclByb3BlcnRpZXNNZXRhZGF0YVtrZXldO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhcmFtT3JQcm9wZXJ0eU1ldGFkYXRhKSAhPT0gdHJ1ZSkge1xuICAgICAgICBwYXJhbU9yUHJvcGVydHlNZXRhZGF0YSA9IFtdO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYXJhbU9yUHJvcGVydHlNZXRhZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIG0gPSBwYXJhbU9yUHJvcGVydHlNZXRhZGF0YVtpXTtcbiAgICAgICAgICAgIGlmIChtLmtleSA9PT0gbWV0YWRhdGEua2V5KSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKEVSUk9SX01TR1MuRFVQTElDQVRFRF9NRVRBREFUQSArIFwiIFwiICsgbS5rZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHBhcmFtT3JQcm9wZXJ0eU1ldGFkYXRhLnB1c2gobWV0YWRhdGEpO1xuICAgIHBhcmFtc09yUHJvcGVydGllc01ldGFkYXRhW2tleV0gPSBwYXJhbU9yUHJvcGVydHlNZXRhZGF0YTtcbiAgICBSZWZsZWN0LmRlZmluZU1ldGFkYXRhKG1ldGFkYXRhS2V5LCBwYXJhbXNPclByb3BlcnRpZXNNZXRhZGF0YSwgYW5ub3RhdGlvblRhcmdldCk7XG59XG5mdW5jdGlvbiBfZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0KSB7XG4gICAgUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQpO1xufVxuZnVuY3Rpb24gX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfTtcbn1cbmZ1bmN0aW9uIGRlY29yYXRlKGRlY29yYXRvciwgdGFyZ2V0LCBwYXJhbWV0ZXJJbmRleCkge1xuICAgIGlmICh0eXBlb2YgcGFyYW1ldGVySW5kZXggPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgX2RlY29yYXRlKFtfcGFyYW0ocGFyYW1ldGVySW5kZXgsIGRlY29yYXRvcildLCB0YXJnZXQpO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgcGFyYW1ldGVySW5kZXggPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgUmVmbGVjdC5kZWNvcmF0ZShbZGVjb3JhdG9yXSwgdGFyZ2V0LCBwYXJhbWV0ZXJJbmRleCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBfZGVjb3JhdGUoW2RlY29yYXRvcl0sIHRhcmdldCk7XG4gICAgfVxufVxuZXhwb3J0cy5kZWNvcmF0ZSA9IGRlY29yYXRlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaW52ZXJzaWZ5L2xpYi9hbm5vdGF0aW9uL2RlY29yYXRvcl91dGlscy5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjb250YWluZXJfMSA9IHJlcXVpcmUoXCIuL2NvbnRhaW5lci9jb250YWluZXJcIik7XG5leHBvcnRzLkNvbnRhaW5lciA9IGNvbnRhaW5lcl8xLkNvbnRhaW5lcjtcbnZhciBjb250YWluZXJfbW9kdWxlXzEgPSByZXF1aXJlKFwiLi9jb250YWluZXIvY29udGFpbmVyX21vZHVsZVwiKTtcbmV4cG9ydHMuQ29udGFpbmVyTW9kdWxlID0gY29udGFpbmVyX21vZHVsZV8xLkNvbnRhaW5lck1vZHVsZTtcbnZhciBpbmplY3RhYmxlXzEgPSByZXF1aXJlKFwiLi9hbm5vdGF0aW9uL2luamVjdGFibGVcIik7XG5leHBvcnRzLmluamVjdGFibGUgPSBpbmplY3RhYmxlXzEuaW5qZWN0YWJsZTtcbnZhciB0YWdnZWRfMSA9IHJlcXVpcmUoXCIuL2Fubm90YXRpb24vdGFnZ2VkXCIpO1xuZXhwb3J0cy50YWdnZWQgPSB0YWdnZWRfMS50YWdnZWQ7XG52YXIgbmFtZWRfMSA9IHJlcXVpcmUoXCIuL2Fubm90YXRpb24vbmFtZWRcIik7XG5leHBvcnRzLm5hbWVkID0gbmFtZWRfMS5uYW1lZDtcbnZhciBpbmplY3RfMSA9IHJlcXVpcmUoXCIuL2Fubm90YXRpb24vaW5qZWN0XCIpO1xuZXhwb3J0cy5pbmplY3QgPSBpbmplY3RfMS5pbmplY3Q7XG52YXIgb3B0aW9uYWxfMSA9IHJlcXVpcmUoXCIuL2Fubm90YXRpb24vb3B0aW9uYWxcIik7XG5leHBvcnRzLm9wdGlvbmFsID0gb3B0aW9uYWxfMS5vcHRpb25hbDtcbnZhciB1bm1hbmFnZWRfMSA9IHJlcXVpcmUoXCIuL2Fubm90YXRpb24vdW5tYW5hZ2VkXCIpO1xuZXhwb3J0cy51bm1hbmFnZWQgPSB1bm1hbmFnZWRfMS51bm1hbmFnZWQ7XG52YXIgbXVsdGlfaW5qZWN0XzEgPSByZXF1aXJlKFwiLi9hbm5vdGF0aW9uL211bHRpX2luamVjdFwiKTtcbmV4cG9ydHMubXVsdGlJbmplY3QgPSBtdWx0aV9pbmplY3RfMS5tdWx0aUluamVjdDtcbnZhciB0YXJnZXRfbmFtZV8xID0gcmVxdWlyZShcIi4vYW5ub3RhdGlvbi90YXJnZXRfbmFtZVwiKTtcbmV4cG9ydHMudGFyZ2V0TmFtZSA9IHRhcmdldF9uYW1lXzEudGFyZ2V0TmFtZTtcbnZhciBwb3N0X2NvbnN0cnVjdF8xID0gcmVxdWlyZShcIi4vYW5ub3RhdGlvbi9wb3N0X2NvbnN0cnVjdFwiKTtcbmV4cG9ydHMucG9zdENvbnN0cnVjdCA9IHBvc3RfY29uc3RydWN0XzEucG9zdENvbnN0cnVjdDtcbnZhciBtZXRhZGF0YV9yZWFkZXJfMSA9IHJlcXVpcmUoXCIuL3BsYW5uaW5nL21ldGFkYXRhX3JlYWRlclwiKTtcbmV4cG9ydHMuTWV0YWRhdGFSZWFkZXIgPSBtZXRhZGF0YV9yZWFkZXJfMS5NZXRhZGF0YVJlYWRlcjtcbnZhciBndWlkXzEgPSByZXF1aXJlKFwiLi91dGlscy9ndWlkXCIpO1xuZXhwb3J0cy5ndWlkID0gZ3VpZF8xLmd1aWQ7XG52YXIgZGVjb3JhdG9yX3V0aWxzXzEgPSByZXF1aXJlKFwiLi9hbm5vdGF0aW9uL2RlY29yYXRvcl91dGlsc1wiKTtcbmV4cG9ydHMuZGVjb3JhdGUgPSBkZWNvcmF0b3JfdXRpbHNfMS5kZWNvcmF0ZTtcbnZhciBjb25zdHJhaW50X2hlbHBlcnNfMSA9IHJlcXVpcmUoXCIuL3N5bnRheC9jb25zdHJhaW50X2hlbHBlcnNcIik7XG5leHBvcnRzLnRyYXZlcnNlQW5jZXJzdG9ycyA9IGNvbnN0cmFpbnRfaGVscGVyc18xLnRyYXZlcnNlQW5jZXJzdG9ycztcbmV4cG9ydHMudGFnZ2VkQ29uc3RyYWludCA9IGNvbnN0cmFpbnRfaGVscGVyc18xLnRhZ2dlZENvbnN0cmFpbnQ7XG5leHBvcnRzLm5hbWVkQ29uc3RyYWludCA9IGNvbnN0cmFpbnRfaGVscGVyc18xLm5hbWVkQ29uc3RyYWludDtcbmV4cG9ydHMudHlwZUNvbnN0cmFpbnQgPSBjb25zdHJhaW50X2hlbHBlcnNfMS50eXBlQ29uc3RyYWludDtcbnZhciBzZXJpYWxpemF0aW9uXzEgPSByZXF1aXJlKFwiLi91dGlscy9zZXJpYWxpemF0aW9uXCIpO1xuZXhwb3J0cy5nZXRTZXJ2aWNlSWRlbnRpZmllckFzU3RyaW5nID0gc2VyaWFsaXphdGlvbl8xLmdldFNlcnZpY2VJZGVudGlmaWVyQXNTdHJpbmc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9pbnZlcnNpZnkvbGliL2ludmVyc2lmeS5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmZ1bmN0aW9uIGd1aWQoKSB7XG4gICAgZnVuY3Rpb24gczQoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKCgxICsgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwKVxuICAgICAgICAgICAgLnRvU3RyaW5nKDE2KVxuICAgICAgICAgICAgLnN1YnN0cmluZygxKTtcbiAgICB9XG4gICAgcmV0dXJuIHM0KCkgKyBzNCgpICsgXCItXCIgKyBzNCgpICsgXCItXCIgKyBzNCgpICsgXCItXCIgK1xuICAgICAgICBzNCgpICsgXCItXCIgKyBzNCgpICsgczQoKSArIHM0KCk7XG59XG5leHBvcnRzLmd1aWQgPSBndWlkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaW52ZXJzaWZ5L2xpYi91dGlscy9ndWlkLmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIEVSUk9SX01TR1MgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzL2Vycm9yX21zZ3NcIik7XG5mdW5jdGlvbiBnZXRTZXJ2aWNlSWRlbnRpZmllckFzU3RyaW5nKHNlcnZpY2VJZGVudGlmaWVyKSB7XG4gICAgaWYgKHR5cGVvZiBzZXJ2aWNlSWRlbnRpZmllciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHZhciBfc2VydmljZUlkZW50aWZpZXIgPSBzZXJ2aWNlSWRlbnRpZmllcjtcbiAgICAgICAgcmV0dXJuIF9zZXJ2aWNlSWRlbnRpZmllci5uYW1lO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2Ygc2VydmljZUlkZW50aWZpZXIgPT09IFwic3ltYm9sXCIpIHtcbiAgICAgICAgcmV0dXJuIHNlcnZpY2VJZGVudGlmaWVyLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgX3NlcnZpY2VJZGVudGlmaWVyID0gc2VydmljZUlkZW50aWZpZXI7XG4gICAgICAgIHJldHVybiBfc2VydmljZUlkZW50aWZpZXI7XG4gICAgfVxufVxuZXhwb3J0cy5nZXRTZXJ2aWNlSWRlbnRpZmllckFzU3RyaW5nID0gZ2V0U2VydmljZUlkZW50aWZpZXJBc1N0cmluZztcbmZ1bmN0aW9uIGxpc3RSZWdpc3RlcmVkQmluZGluZ3NGb3JTZXJ2aWNlSWRlbnRpZmllcihjb250YWluZXIsIHNlcnZpY2VJZGVudGlmaWVyLCBnZXRCaW5kaW5ncykge1xuICAgIHZhciByZWdpc3RlcmVkQmluZGluZ3NMaXN0ID0gXCJcIjtcbiAgICB2YXIgcmVnaXN0ZXJlZEJpbmRpbmdzID0gZ2V0QmluZGluZ3MoY29udGFpbmVyLCBzZXJ2aWNlSWRlbnRpZmllcik7XG4gICAgaWYgKHJlZ2lzdGVyZWRCaW5kaW5ncy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgcmVnaXN0ZXJlZEJpbmRpbmdzTGlzdCA9IFwiXFxuUmVnaXN0ZXJlZCBiaW5kaW5nczpcIjtcbiAgICAgICAgcmVnaXN0ZXJlZEJpbmRpbmdzLmZvckVhY2goZnVuY3Rpb24gKGJpbmRpbmcpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gXCJPYmplY3RcIjtcbiAgICAgICAgICAgIGlmIChiaW5kaW5nLmltcGxlbWVudGF0aW9uVHlwZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIG5hbWUgPSBnZXRGdW5jdGlvbk5hbWUoYmluZGluZy5pbXBsZW1lbnRhdGlvblR5cGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVnaXN0ZXJlZEJpbmRpbmdzTGlzdCA9IHJlZ2lzdGVyZWRCaW5kaW5nc0xpc3QgKyBcIlxcbiBcIiArIG5hbWU7XG4gICAgICAgICAgICBpZiAoYmluZGluZy5jb25zdHJhaW50Lm1ldGFEYXRhKSB7XG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJlZEJpbmRpbmdzTGlzdCA9IHJlZ2lzdGVyZWRCaW5kaW5nc0xpc3QgKyBcIiAtIFwiICsgYmluZGluZy5jb25zdHJhaW50Lm1ldGFEYXRhO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlZ2lzdGVyZWRCaW5kaW5nc0xpc3Q7XG59XG5leHBvcnRzLmxpc3RSZWdpc3RlcmVkQmluZGluZ3NGb3JTZXJ2aWNlSWRlbnRpZmllciA9IGxpc3RSZWdpc3RlcmVkQmluZGluZ3NGb3JTZXJ2aWNlSWRlbnRpZmllcjtcbmZ1bmN0aW9uIGNpcmN1bGFyRGVwZW5kZW5jeVRvRXhjZXB0aW9uKHJlcXVlc3QsIHByZXZpb3VzU2VydmljZUlkZW50aWZpZXJzKSB7XG4gICAgaWYgKHByZXZpb3VzU2VydmljZUlkZW50aWZpZXJzID09PSB2b2lkIDApIHsgcHJldmlvdXNTZXJ2aWNlSWRlbnRpZmllcnMgPSBbXTsgfVxuICAgIHZhciBwYXJlbnRTZXJ2aWNlSWRlbnRpZmllciA9IGdldFNlcnZpY2VJZGVudGlmaWVyQXNTdHJpbmcocmVxdWVzdC5zZXJ2aWNlSWRlbnRpZmllcik7XG4gICAgcHJldmlvdXNTZXJ2aWNlSWRlbnRpZmllcnMucHVzaChwYXJlbnRTZXJ2aWNlSWRlbnRpZmllcik7XG4gICAgcmVxdWVzdC5jaGlsZFJlcXVlc3RzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkUmVxdWVzdCkge1xuICAgICAgICB2YXIgY2hpbGRTZXJ2aWNlSWRlbnRpZmllciA9IGdldFNlcnZpY2VJZGVudGlmaWVyQXNTdHJpbmcoY2hpbGRSZXF1ZXN0LnNlcnZpY2VJZGVudGlmaWVyKTtcbiAgICAgICAgaWYgKHByZXZpb3VzU2VydmljZUlkZW50aWZpZXJzLmluZGV4T2YoY2hpbGRTZXJ2aWNlSWRlbnRpZmllcikgPT09IC0xKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGRSZXF1ZXN0LmNoaWxkUmVxdWVzdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGNpcmN1bGFyRGVwZW5kZW5jeVRvRXhjZXB0aW9uKGNoaWxkUmVxdWVzdCwgcHJldmlvdXNTZXJ2aWNlSWRlbnRpZmllcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJldmlvdXNTZXJ2aWNlSWRlbnRpZmllcnMucHVzaChjaGlsZFNlcnZpY2VJZGVudGlmaWVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHByZXZpb3VzU2VydmljZUlkZW50aWZpZXJzLnB1c2goY2hpbGRTZXJ2aWNlSWRlbnRpZmllcik7XG4gICAgICAgICAgICB2YXIgc2VydmljZXMgPSBwcmV2aW91c1NlcnZpY2VJZGVudGlmaWVycy5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIGN1cnIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHByZXYgIT09IFwiXCIpID8gcHJldiArIFwiIC0+IFwiICsgY3VyciA6IFwiXCIgKyBjdXJyO1xuICAgICAgICAgICAgfSwgXCJcIik7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoRVJST1JfTVNHUy5DSVJDVUxBUl9ERVBFTkRFTkNZICsgXCIgXCIgKyBzZXJ2aWNlcyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmV4cG9ydHMuY2lyY3VsYXJEZXBlbmRlbmN5VG9FeGNlcHRpb24gPSBjaXJjdWxhckRlcGVuZGVuY3lUb0V4Y2VwdGlvbjtcbmZ1bmN0aW9uIGxpc3RNZXRhZGF0YUZvclRhcmdldChzZXJ2aWNlSWRlbnRpZmllclN0cmluZywgdGFyZ2V0KSB7XG4gICAgaWYgKHRhcmdldC5pc1RhZ2dlZCgpIHx8IHRhcmdldC5pc05hbWVkKCkpIHtcbiAgICAgICAgdmFyIG1fMSA9IFwiXCI7XG4gICAgICAgIHZhciBuYW1lZFRhZyA9IHRhcmdldC5nZXROYW1lZFRhZygpO1xuICAgICAgICB2YXIgb3RoZXJUYWdzID0gdGFyZ2V0LmdldEN1c3RvbVRhZ3MoKTtcbiAgICAgICAgaWYgKG5hbWVkVGFnICE9PSBudWxsKSB7XG4gICAgICAgICAgICBtXzEgKz0gbmFtZWRUYWcudG9TdHJpbmcoKSArIFwiXFxuXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG90aGVyVGFncyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgb3RoZXJUYWdzLmZvckVhY2goZnVuY3Rpb24gKHRhZykge1xuICAgICAgICAgICAgICAgIG1fMSArPSB0YWcudG9TdHJpbmcoKSArIFwiXFxuXCI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXCIgXCIgKyBzZXJ2aWNlSWRlbnRpZmllclN0cmluZyArIFwiXFxuIFwiICsgc2VydmljZUlkZW50aWZpZXJTdHJpbmcgKyBcIiAtIFwiICsgbV8xO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFwiIFwiICsgc2VydmljZUlkZW50aWZpZXJTdHJpbmc7XG4gICAgfVxufVxuZXhwb3J0cy5saXN0TWV0YWRhdGFGb3JUYXJnZXQgPSBsaXN0TWV0YWRhdGFGb3JUYXJnZXQ7XG5mdW5jdGlvbiBnZXRGdW5jdGlvbk5hbWUodikge1xuICAgIGlmICh2Lm5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHYubmFtZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBuYW1lXzEgPSB2LnRvU3RyaW5nKCk7XG4gICAgICAgIHZhciBtYXRjaCA9IG5hbWVfMS5tYXRjaCgvXmZ1bmN0aW9uXFxzKihbXlxccyhdKykvKTtcbiAgICAgICAgcmV0dXJuIG1hdGNoID8gbWF0Y2hbMV0gOiBcIkFub255bW91cyBmdW5jdGlvbjogXCIgKyBuYW1lXzE7XG4gICAgfVxufVxuZXhwb3J0cy5nZXRGdW5jdGlvbk5hbWUgPSBnZXRGdW5jdGlvbk5hbWU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9pbnZlcnNpZnkvbGliL3V0aWxzL3NlcmlhbGl6YXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgYmluZGluZ19vbl9zeW50YXhfMSA9IHJlcXVpcmUoXCIuL2JpbmRpbmdfb25fc3ludGF4XCIpO1xudmFyIGNvbnN0cmFpbnRfaGVscGVyc18xID0gcmVxdWlyZShcIi4vY29uc3RyYWludF9oZWxwZXJzXCIpO1xudmFyIEJpbmRpbmdXaGVuU3ludGF4ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBCaW5kaW5nV2hlblN5bnRheChiaW5kaW5nKSB7XG4gICAgICAgIHRoaXMuX2JpbmRpbmcgPSBiaW5kaW5nO1xuICAgIH1cbiAgICBCaW5kaW5nV2hlblN5bnRheC5wcm90b3R5cGUud2hlbiA9IGZ1bmN0aW9uIChjb25zdHJhaW50KSB7XG4gICAgICAgIHRoaXMuX2JpbmRpbmcuY29uc3RyYWludCA9IGNvbnN0cmFpbnQ7XG4gICAgICAgIHJldHVybiBuZXcgYmluZGluZ19vbl9zeW50YXhfMS5CaW5kaW5nT25TeW50YXgodGhpcy5fYmluZGluZyk7XG4gICAgfTtcbiAgICBCaW5kaW5nV2hlblN5bnRheC5wcm90b3R5cGUud2hlblRhcmdldE5hbWVkID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgdGhpcy5fYmluZGluZy5jb25zdHJhaW50ID0gY29uc3RyYWludF9oZWxwZXJzXzEubmFtZWRDb25zdHJhaW50KG5hbWUpO1xuICAgICAgICByZXR1cm4gbmV3IGJpbmRpbmdfb25fc3ludGF4XzEuQmluZGluZ09uU3ludGF4KHRoaXMuX2JpbmRpbmcpO1xuICAgIH07XG4gICAgQmluZGluZ1doZW5TeW50YXgucHJvdG90eXBlLndoZW5UYXJnZXRJc0RlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX2JpbmRpbmcuY29uc3RyYWludCA9IGZ1bmN0aW9uIChyZXF1ZXN0KSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0SXNEZWZhdWx0ID0gKHJlcXVlc3QudGFyZ2V0ICE9PSBudWxsKSAmJlxuICAgICAgICAgICAgICAgIChyZXF1ZXN0LnRhcmdldC5pc05hbWVkKCkgPT09IGZhbHNlKSAmJlxuICAgICAgICAgICAgICAgIChyZXF1ZXN0LnRhcmdldC5pc1RhZ2dlZCgpID09PSBmYWxzZSk7XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0SXNEZWZhdWx0O1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV3IGJpbmRpbmdfb25fc3ludGF4XzEuQmluZGluZ09uU3ludGF4KHRoaXMuX2JpbmRpbmcpO1xuICAgIH07XG4gICAgQmluZGluZ1doZW5TeW50YXgucHJvdG90eXBlLndoZW5UYXJnZXRUYWdnZWQgPSBmdW5jdGlvbiAodGFnLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLl9iaW5kaW5nLmNvbnN0cmFpbnQgPSBjb25zdHJhaW50X2hlbHBlcnNfMS50YWdnZWRDb25zdHJhaW50KHRhZykodmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IGJpbmRpbmdfb25fc3ludGF4XzEuQmluZGluZ09uU3ludGF4KHRoaXMuX2JpbmRpbmcpO1xuICAgIH07XG4gICAgQmluZGluZ1doZW5TeW50YXgucHJvdG90eXBlLndoZW5JbmplY3RlZEludG8gPSBmdW5jdGlvbiAocGFyZW50KSB7XG4gICAgICAgIHRoaXMuX2JpbmRpbmcuY29uc3RyYWludCA9IGZ1bmN0aW9uIChyZXF1ZXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gY29uc3RyYWludF9oZWxwZXJzXzEudHlwZUNvbnN0cmFpbnQocGFyZW50KShyZXF1ZXN0LnBhcmVudFJlcXVlc3QpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV3IGJpbmRpbmdfb25fc3ludGF4XzEuQmluZGluZ09uU3ludGF4KHRoaXMuX2JpbmRpbmcpO1xuICAgIH07XG4gICAgQmluZGluZ1doZW5TeW50YXgucHJvdG90eXBlLndoZW5QYXJlbnROYW1lZCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHRoaXMuX2JpbmRpbmcuY29uc3RyYWludCA9IGZ1bmN0aW9uIChyZXF1ZXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gY29uc3RyYWludF9oZWxwZXJzXzEubmFtZWRDb25zdHJhaW50KG5hbWUpKHJlcXVlc3QucGFyZW50UmVxdWVzdCk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXcgYmluZGluZ19vbl9zeW50YXhfMS5CaW5kaW5nT25TeW50YXgodGhpcy5fYmluZGluZyk7XG4gICAgfTtcbiAgICBCaW5kaW5nV2hlblN5bnRheC5wcm90b3R5cGUud2hlblBhcmVudFRhZ2dlZCA9IGZ1bmN0aW9uICh0YWcsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2JpbmRpbmcuY29uc3RyYWludCA9IGZ1bmN0aW9uIChyZXF1ZXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gY29uc3RyYWludF9oZWxwZXJzXzEudGFnZ2VkQ29uc3RyYWludCh0YWcpKHZhbHVlKShyZXF1ZXN0LnBhcmVudFJlcXVlc3QpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV3IGJpbmRpbmdfb25fc3ludGF4XzEuQmluZGluZ09uU3ludGF4KHRoaXMuX2JpbmRpbmcpO1xuICAgIH07XG4gICAgQmluZGluZ1doZW5TeW50YXgucHJvdG90eXBlLndoZW5BbnlBbmNlc3RvcklzID0gZnVuY3Rpb24gKGFuY2VzdG9yKSB7XG4gICAgICAgIHRoaXMuX2JpbmRpbmcuY29uc3RyYWludCA9IGZ1bmN0aW9uIChyZXF1ZXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gY29uc3RyYWludF9oZWxwZXJzXzEudHJhdmVyc2VBbmNlcnN0b3JzKHJlcXVlc3QsIGNvbnN0cmFpbnRfaGVscGVyc18xLnR5cGVDb25zdHJhaW50KGFuY2VzdG9yKSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXcgYmluZGluZ19vbl9zeW50YXhfMS5CaW5kaW5nT25TeW50YXgodGhpcy5fYmluZGluZyk7XG4gICAgfTtcbiAgICBCaW5kaW5nV2hlblN5bnRheC5wcm90b3R5cGUud2hlbk5vQW5jZXN0b3JJcyA9IGZ1bmN0aW9uIChhbmNlc3Rvcikge1xuICAgICAgICB0aGlzLl9iaW5kaW5nLmNvbnN0cmFpbnQgPSBmdW5jdGlvbiAocmVxdWVzdCkge1xuICAgICAgICAgICAgcmV0dXJuICFjb25zdHJhaW50X2hlbHBlcnNfMS50cmF2ZXJzZUFuY2Vyc3RvcnMocmVxdWVzdCwgY29uc3RyYWludF9oZWxwZXJzXzEudHlwZUNvbnN0cmFpbnQoYW5jZXN0b3IpKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ldyBiaW5kaW5nX29uX3N5bnRheF8xLkJpbmRpbmdPblN5bnRheCh0aGlzLl9iaW5kaW5nKTtcbiAgICB9O1xuICAgIEJpbmRpbmdXaGVuU3ludGF4LnByb3RvdHlwZS53aGVuQW55QW5jZXN0b3JOYW1lZCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHRoaXMuX2JpbmRpbmcuY29uc3RyYWludCA9IGZ1bmN0aW9uIChyZXF1ZXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gY29uc3RyYWludF9oZWxwZXJzXzEudHJhdmVyc2VBbmNlcnN0b3JzKHJlcXVlc3QsIGNvbnN0cmFpbnRfaGVscGVyc18xLm5hbWVkQ29uc3RyYWludChuYW1lKSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXcgYmluZGluZ19vbl9zeW50YXhfMS5CaW5kaW5nT25TeW50YXgodGhpcy5fYmluZGluZyk7XG4gICAgfTtcbiAgICBCaW5kaW5nV2hlblN5bnRheC5wcm90b3R5cGUud2hlbk5vQW5jZXN0b3JOYW1lZCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHRoaXMuX2JpbmRpbmcuY29uc3RyYWludCA9IGZ1bmN0aW9uIChyZXF1ZXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gIWNvbnN0cmFpbnRfaGVscGVyc18xLnRyYXZlcnNlQW5jZXJzdG9ycyhyZXF1ZXN0LCBjb25zdHJhaW50X2hlbHBlcnNfMS5uYW1lZENvbnN0cmFpbnQobmFtZSkpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV3IGJpbmRpbmdfb25fc3ludGF4XzEuQmluZGluZ09uU3ludGF4KHRoaXMuX2JpbmRpbmcpO1xuICAgIH07XG4gICAgQmluZGluZ1doZW5TeW50YXgucHJvdG90eXBlLndoZW5BbnlBbmNlc3RvclRhZ2dlZCA9IGZ1bmN0aW9uICh0YWcsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2JpbmRpbmcuY29uc3RyYWludCA9IGZ1bmN0aW9uIChyZXF1ZXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gY29uc3RyYWludF9oZWxwZXJzXzEudHJhdmVyc2VBbmNlcnN0b3JzKHJlcXVlc3QsIGNvbnN0cmFpbnRfaGVscGVyc18xLnRhZ2dlZENvbnN0cmFpbnQodGFnKSh2YWx1ZSkpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV3IGJpbmRpbmdfb25fc3ludGF4XzEuQmluZGluZ09uU3ludGF4KHRoaXMuX2JpbmRpbmcpO1xuICAgIH07XG4gICAgQmluZGluZ1doZW5TeW50YXgucHJvdG90eXBlLndoZW5Ob0FuY2VzdG9yVGFnZ2VkID0gZnVuY3Rpb24gKHRhZywgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5fYmluZGluZy5jb25zdHJhaW50ID0gZnVuY3Rpb24gKHJlcXVlc3QpIHtcbiAgICAgICAgICAgIHJldHVybiAhY29uc3RyYWludF9oZWxwZXJzXzEudHJhdmVyc2VBbmNlcnN0b3JzKHJlcXVlc3QsIGNvbnN0cmFpbnRfaGVscGVyc18xLnRhZ2dlZENvbnN0cmFpbnQodGFnKSh2YWx1ZSkpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV3IGJpbmRpbmdfb25fc3ludGF4XzEuQmluZGluZ09uU3ludGF4KHRoaXMuX2JpbmRpbmcpO1xuICAgIH07XG4gICAgQmluZGluZ1doZW5TeW50YXgucHJvdG90eXBlLndoZW5BbnlBbmNlc3Rvck1hdGNoZXMgPSBmdW5jdGlvbiAoY29uc3RyYWludCkge1xuICAgICAgICB0aGlzLl9iaW5kaW5nLmNvbnN0cmFpbnQgPSBmdW5jdGlvbiAocmVxdWVzdCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnN0cmFpbnRfaGVscGVyc18xLnRyYXZlcnNlQW5jZXJzdG9ycyhyZXF1ZXN0LCBjb25zdHJhaW50KTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5ldyBiaW5kaW5nX29uX3N5bnRheF8xLkJpbmRpbmdPblN5bnRheCh0aGlzLl9iaW5kaW5nKTtcbiAgICB9O1xuICAgIEJpbmRpbmdXaGVuU3ludGF4LnByb3RvdHlwZS53aGVuTm9BbmNlc3Rvck1hdGNoZXMgPSBmdW5jdGlvbiAoY29uc3RyYWludCkge1xuICAgICAgICB0aGlzLl9iaW5kaW5nLmNvbnN0cmFpbnQgPSBmdW5jdGlvbiAocmVxdWVzdCkge1xuICAgICAgICAgICAgcmV0dXJuICFjb25zdHJhaW50X2hlbHBlcnNfMS50cmF2ZXJzZUFuY2Vyc3RvcnMocmVxdWVzdCwgY29uc3RyYWludCk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXcgYmluZGluZ19vbl9zeW50YXhfMS5CaW5kaW5nT25TeW50YXgodGhpcy5fYmluZGluZyk7XG4gICAgfTtcbiAgICByZXR1cm4gQmluZGluZ1doZW5TeW50YXg7XG59KCkpO1xuZXhwb3J0cy5CaW5kaW5nV2hlblN5bnRheCA9IEJpbmRpbmdXaGVuU3ludGF4O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaW52ZXJzaWZ5L2xpYi9zeW50YXgvYmluZGluZ193aGVuX3N5bnRheC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBiaW5kaW5nX3doZW5fc3ludGF4XzEgPSByZXF1aXJlKFwiLi9iaW5kaW5nX3doZW5fc3ludGF4XCIpO1xudmFyIEJpbmRpbmdPblN5bnRheCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQmluZGluZ09uU3ludGF4KGJpbmRpbmcpIHtcbiAgICAgICAgdGhpcy5fYmluZGluZyA9IGJpbmRpbmc7XG4gICAgfVxuICAgIEJpbmRpbmdPblN5bnRheC5wcm90b3R5cGUub25BY3RpdmF0aW9uID0gZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5fYmluZGluZy5vbkFjdGl2YXRpb24gPSBoYW5kbGVyO1xuICAgICAgICByZXR1cm4gbmV3IGJpbmRpbmdfd2hlbl9zeW50YXhfMS5CaW5kaW5nV2hlblN5bnRheCh0aGlzLl9iaW5kaW5nKTtcbiAgICB9O1xuICAgIHJldHVybiBCaW5kaW5nT25TeW50YXg7XG59KCkpO1xuZXhwb3J0cy5CaW5kaW5nT25TeW50YXggPSBCaW5kaW5nT25TeW50YXg7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9pbnZlcnNpZnkvbGliL3N5bnRheC9iaW5kaW5nX29uX3N5bnRheC5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XG59IGNhdGNoKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcblx0XHRnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGluamVjdGFibGUgfSBmcm9tICdpbnZlcnNpZnknO1xyXG5cclxuaW1wb3J0IHsgVmVjdG9yMyB9IGZyb20gJ2NvbW1vbi9WZWN0b3IzJztcclxuXHJcbmltcG9ydCB7IEltYWdlTG9hZGVyIH0gZnJvbSAnc2VydmljZXMvSW1hZ2VMb2FkZXInO1xyXG5pbXBvcnQgeyBMaWdodFNpbXVsYXRvciB9IGZyb20gJ3NlcnZpY2VzL0xpZ2h0U2ltdWxhdG9yJztcclxuaW1wb3J0IHsgU2hhZGVyUHJvZ3JhbUluaXRpYWxpemVyIH0gZnJvbSAnc2VydmljZXMvU2hhZGVyUHJvZ3JhbUluaXRpYWxpemVyJztcclxuaW1wb3J0IHsgVGV4dHVyZUxvYWRlciB9IGZyb20gJ3NlcnZpY2VzL1RleHR1cmVMb2FkZXInO1xyXG5cclxuaW1wb3J0IHsgY29uZmlndXJhdGlvbiB9IGZyb20gJ2NvbmZpZ3VyYXRpb24nO1xyXG5cclxuLy8gdHNsaW50OmRpc2FibGUgbm8tcmVxdWlyZS1pbXBvcnRzIG5vLXZhci1yZXF1aXJlc1xyXG5jb25zdCB2ZXJ0ZXhTaGFkZXJTb3VyY2U6IHN0cmluZyA9IHJlcXVpcmUoJy4vc2hhZGVycy92ZXJ0ZXgtc2hhZGVyLmdsc2wnKTtcclxuY29uc3QgZnJhZ21lbnRTaGFkZXJTb3VyY2U6IHN0cmluZyA9IHJlcXVpcmUoJy4vc2hhZGVycy9mcmFnbWVudC1zaGFkZXIuZ2xzbCcpO1xyXG4vLyB0c2xpbnQ6ZW5hYmxlIG5vLXJlcXVpcmUtaW1wb3J0cyBuby12YXItcmVxdWlyZXNcclxuXHJcbkBpbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFwcGxpY2F0aW9uIHtcclxuICBwcml2YXRlIHJlYWRvbmx5IGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQ7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBzaGFkZXJQcm9ncmFtSW5pdGlhbGl6ZXI6IFNoYWRlclByb2dyYW1Jbml0aWFsaXplcjtcclxuICBwcml2YXRlIHJlYWRvbmx5IHRleHR1cmVMb2FkZXI6IFRleHR1cmVMb2FkZXI7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBpbWFnZUxvYWRlcjogSW1hZ2VMb2FkZXI7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBsaWdodFNpbXVsYXRvcjogTGlnaHRTaW11bGF0b3I7XHJcblxyXG4gIHByaXZhdGUgc2hhZGVyUHJvZ3JhbTogV2ViR0xQcm9ncmFtO1xyXG5cclxuICBwcml2YXRlIGF0dHJpYkxvY2F0aW9uczogeyBbbG9jYXRpb25OYW1lOiBzdHJpbmddOiBudW1iZXIgfTtcclxuICBwcml2YXRlIHVuaWZvcm1Mb2NhdGlvbnM6IHtcclxuICAgIFtsb2NhdGlvbk5hbWU6IHN0cmluZ106IFdlYkdMVW5pZm9ybUxvY2F0aW9uIHwgbnVsbDtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIGJhY2tncm91bmRJbWFnZTogSFRNTEltYWdlRWxlbWVudDtcclxuICBwcml2YXRlIG5vcm1hbE1hcEltYWdlOiBIVE1MSW1hZ2VFbGVtZW50O1xyXG5cclxuICBwcml2YXRlIGJhY2tncm91bmRUZXh0dXJlOiBXZWJHTFRleHR1cmU7XHJcbiAgcHJpdmF0ZSBub3JtYWxNYXBUZXh0dXJlOiBXZWJHTFRleHR1cmU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCxcclxuICAgIHNoYWRlclByb2dyYW1Jbml0aWFsaXplcjogU2hhZGVyUHJvZ3JhbUluaXRpYWxpemVyLFxyXG4gICAgdGV4dHVyZUxvYWRlcjogVGV4dHVyZUxvYWRlcixcclxuICAgIGltYWdlTG9hZGVyOiBJbWFnZUxvYWRlcixcclxuICAgIGxpZ2h0U2ltdWxhdG9yOiBMaWdodFNpbXVsYXRvclxyXG4gICkge1xyXG4gICAgdGhpcy5nbCA9IGdsO1xyXG4gICAgdGhpcy5zaGFkZXJQcm9ncmFtSW5pdGlhbGl6ZXIgPSBzaGFkZXJQcm9ncmFtSW5pdGlhbGl6ZXI7XHJcbiAgICB0aGlzLnRleHR1cmVMb2FkZXIgPSB0ZXh0dXJlTG9hZGVyO1xyXG4gICAgdGhpcy5pbWFnZUxvYWRlciA9IGltYWdlTG9hZGVyO1xyXG4gICAgdGhpcy5saWdodFNpbXVsYXRvciA9IGxpZ2h0U2ltdWxhdG9yO1xyXG5cclxuICAgIHRoaXMub25MaWdodFBvc2l0aW9uQ2hhbmdlID0gdGhpcy5vbkxpZ2h0UG9zaXRpb25DaGFuZ2UuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBhc3luYyBpbml0KCkge1xyXG4gICAgY29uc3QgZ2wgPSB0aGlzLmdsO1xyXG4gICAgZ2wuY2xlYXJDb2xvcigwLCAwLCAwLCAxKTtcclxuICAgIGdsLmNsZWFyKGdsLkNPTE9SX0JVRkZFUl9CSVQpO1xyXG5cclxuICAgIGNvbnN0IGxvYWRJbWFnZXNQcm9taXNlID0gdGhpcy5sb2FkSW1hZ2VzKCk7XHJcblxyXG4gICAgdGhpcy5zaGFkZXJQcm9ncmFtID0gdGhpcy5zaGFkZXJQcm9ncmFtSW5pdGlhbGl6ZXIuaW5pdFNoYWRlclByb2dyYW0oXHJcbiAgICAgIHZlcnRleFNoYWRlclNvdXJjZSxcclxuICAgICAgZnJhZ21lbnRTaGFkZXJTb3VyY2VcclxuICAgICk7XHJcbiAgICBnbC51c2VQcm9ncmFtKHRoaXMuc2hhZGVyUHJvZ3JhbSk7XHJcblxyXG4gICAgdGhpcy5nZXRBdHRyaWJ1dGVMb2NhdGlvbnMoKTtcclxuICAgIHRoaXMuZ2V0VW5pZm9ybUxvY2F0aW9ucygpO1xyXG5cclxuICAgIHRoaXMuaW5pdGlhbGl6ZVRleHR1cmVDb29yZHNCdWZmZXIoKTtcclxuICAgIHRoaXMuaW5pdGlhbGl6ZVBsYW5lQnVmZmVyKCk7XHJcblxyXG4gICAgYXdhaXQgbG9hZEltYWdlc1Byb21pc2U7XHJcblxyXG4gICAgdGhpcy5pbml0aWFsaXplQmFja2dyb3VuZFRleHR1cmUoKTtcclxuICAgIHRoaXMuaW5pdGlhbGl6ZU5vcm1hbE1hcFRleHR1cmUoKTtcclxuXHJcbiAgICBnbC5hY3RpdmVUZXh0dXJlKGdsLlRFWFRVUkUwKTtcclxuICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRoaXMuYmFja2dyb3VuZFRleHR1cmUpO1xyXG4gICAgZ2wuYWN0aXZlVGV4dHVyZShnbC5URVhUVVJFMSk7XHJcbiAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0aGlzLm5vcm1hbE1hcFRleHR1cmUpO1xyXG5cclxuICAgIGdsLnVuaWZvcm0xZih0aGlzLnVuaWZvcm1Mb2NhdGlvbnMua0QsIGNvbmZpZ3VyYXRpb24ua0QpO1xyXG4gICAgZ2wudW5pZm9ybTFmKHRoaXMudW5pZm9ybUxvY2F0aW9ucy5rUywgY29uZmlndXJhdGlvbi5rUyk7XHJcbiAgICBnbC51bmlmb3JtMWYodGhpcy51bmlmb3JtTG9jYXRpb25zLm0sIGNvbmZpZ3VyYXRpb24ubSk7XHJcbiAgICBjb25zdCB2aWV3ZXJWZWN0b3IgPSBjb25maWd1cmF0aW9uLnZpZXdlclZlY3RvcjtcclxuICAgIGdsLnVuaWZvcm0zZihcclxuICAgICAgdGhpcy51bmlmb3JtTG9jYXRpb25zLnVWaWV3ZXJWZWN0b3IsXHJcbiAgICAgIHZpZXdlclZlY3Rvci54LFxyXG4gICAgICB2aWV3ZXJWZWN0b3IueSxcclxuICAgICAgdmlld2VyVmVjdG9yLnpcclxuICAgICk7XHJcblxyXG4gICAgdGhpcy5kcmF3RnJhbWUoKTtcclxuICAgIHRoaXMuc3RhcnRMaWdodFNpbXVsYXRvcigpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkcmF3RnJhbWUoKSB7XHJcbiAgICBjb25zdCBnbCA9IHRoaXMuZ2w7XHJcbiAgICBnbC5kcmF3QXJyYXlzKGdsLlRSSUFOR0xFUywgMCwgNik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHN0YXJ0TGlnaHRTaW11bGF0b3IoKSB7XHJcbiAgICB0aGlzLmxpZ2h0U2ltdWxhdG9yLmluaXQoKTtcclxuICAgIHRoaXMubGlnaHRTaW11bGF0b3IuYWRkTGlzdGVuZXIoXHJcbiAgICAgICdsaWdodC1wb3NpdGlvbi1jaGFuZ2UnLFxyXG4gICAgICB0aGlzLm9uTGlnaHRQb3NpdGlvbkNoYW5nZVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25MaWdodFBvc2l0aW9uQ2hhbmdlKGxpZ2h0UG9zaXRpb246IFZlY3RvcjMpIHtcclxuICAgIGNvbnN0IGdsID0gdGhpcy5nbDtcclxuXHJcbiAgICBnbC51bmlmb3JtM2YoXHJcbiAgICAgIHRoaXMudW5pZm9ybUxvY2F0aW9ucy5saWdodFBvc2l0aW9uLFxyXG4gICAgICBsaWdodFBvc2l0aW9uLngsXHJcbiAgICAgIGxpZ2h0UG9zaXRpb24ueSxcclxuICAgICAgbGlnaHRQb3NpdGlvbi56XHJcbiAgICApO1xyXG4gICAgdGhpcy5kcmF3RnJhbWUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcHJlcGFyZVJlbmRlcmluZ1BsYW5lQnVmZmVyKCkge1xyXG4gICAgY29uc3QgZ2wgPSB0aGlzLmdsO1xyXG4gICAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgICBjb25zdCBwbGFuZVZlcnRpY2VzID0gbmV3IEZsb2F0MzJBcnJheShbXHJcbiAgICAgIC0xLjAsIDEuMCxcclxuICAgICAgMS4wLCAxLjAsXHJcbiAgICAgIDEuMCwgLTEuMCxcclxuXHJcbiAgICAgIC0xLjAsIDEuMCxcclxuICAgICAgMS4wLCAtMS4wLFxyXG4gICAgICAtMS4wLCAtMS4wXHJcbiAgICBdKTtcclxuXHJcbiAgICBjb25zdCBwbGFuZUJ1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xyXG5cclxuICAgIGlmICghcGxhbmVCdWZmZXIpIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgY3JlYXRlIGJ1ZmZlcicpO1xyXG4gICAgfVxyXG5cclxuICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBwbGFuZUJ1ZmZlcik7XHJcbiAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgcGxhbmVWZXJ0aWNlcywgZ2wuU1RBVElDX0RSQVcpO1xyXG5cclxuICAgIHJldHVybiBwbGFuZUJ1ZmZlcjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcHJlcGFyZVRleHR1cmVDb29yZHNCdWZmZXIoKSB7XHJcbiAgICBjb25zdCBnbCA9IHRoaXMuZ2w7XHJcbiAgICAvLyBwcmV0dGllci1pZ25vcmVcclxuICAgIGNvbnN0IHRleHR1cmVDb29yZHNWZXJ0aWNlcyA9IG5ldyBGbG9hdDMyQXJyYXkoW1xyXG4gICAgICAwLjAsIDAuMCxcclxuICAgICAgMS4wLCAwLjAsXHJcbiAgICAgIDEuMCwgMS4wLFxyXG5cclxuICAgICAgMC4wLCAwLjAsXHJcbiAgICAgIDEuMCwgMS4wLFxyXG4gICAgICAwLjAsIDEuMFxyXG4gICAgXSk7XHJcblxyXG4gICAgY29uc3QgdGV4dHVyZUNvb3Jkc0J1ZmZlciA9IGdsLmNyZWF0ZUJ1ZmZlcigpO1xyXG5cclxuICAgIGlmICghdGV4dHVyZUNvb3Jkc0J1ZmZlcikge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBjcmVhdGUgYnVmZmVyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHRleHR1cmVDb29yZHNCdWZmZXIpO1xyXG4gICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIHRleHR1cmVDb29yZHNWZXJ0aWNlcywgZ2wuU1RBVElDX0RSQVcpO1xyXG5cclxuICAgIHJldHVybiB0ZXh0dXJlQ29vcmRzQnVmZmVyO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhc3luYyBsb2FkSW1hZ2VzKCkge1xyXG4gICAgY29uc3QgW2JhY2tncm91bmRJbWFnZSwgbm9ybWFsTWFwSW1hZ2VdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICB0aGlzLmltYWdlTG9hZGVyLmxvYWRJbWFnZShjb25maWd1cmF0aW9uLmJhY2tncm91bmRUZXh0dXJlVXJsKSxcclxuICAgICAgdGhpcy5pbWFnZUxvYWRlci5sb2FkSW1hZ2UoY29uZmlndXJhdGlvbi5ub3JtYWxNYXBVcmwpXHJcbiAgICBdKTtcclxuXHJcbiAgICB0aGlzLmJhY2tncm91bmRJbWFnZSA9IGJhY2tncm91bmRJbWFnZTtcclxuICAgIHRoaXMubm9ybWFsTWFwSW1hZ2UgPSBub3JtYWxNYXBJbWFnZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdGlhbGl6ZVRleHR1cmVDb29yZHNCdWZmZXIoKSB7XHJcbiAgICBjb25zdCBnbCA9IHRoaXMuZ2w7XHJcblxyXG4gICAgY29uc3QgdGV4dHVyZUNvb3Jkc0J1ZmZlciA9IHRoaXMucHJlcGFyZVRleHR1cmVDb29yZHNCdWZmZXIoKTtcclxuICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCB0ZXh0dXJlQ29vcmRzQnVmZmVyKTtcclxuXHJcbiAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKFxyXG4gICAgICB0aGlzLmF0dHJpYkxvY2F0aW9ucy50ZXh0dXJlQ29vcmQsXHJcbiAgICAgIDIsXHJcbiAgICAgIGdsLkZMT0FULFxyXG4gICAgICBmYWxzZSxcclxuICAgICAgMCxcclxuICAgICAgMFxyXG4gICAgKTtcclxuXHJcbiAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh0aGlzLmF0dHJpYkxvY2F0aW9ucy50ZXh0dXJlQ29vcmQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0aWFsaXplUGxhbmVCdWZmZXIoKSB7XHJcbiAgICBjb25zdCBnbCA9IHRoaXMuZ2w7XHJcblxyXG4gICAgY29uc3QgcGxhbmVCdWZmZXIgPSB0aGlzLnByZXBhcmVSZW5kZXJpbmdQbGFuZUJ1ZmZlcigpO1xyXG4gICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIHBsYW5lQnVmZmVyKTtcclxuXHJcbiAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKFxyXG4gICAgICB0aGlzLmF0dHJpYkxvY2F0aW9ucy52ZXJ0ZXhQb3NpdGlvbixcclxuICAgICAgMixcclxuICAgICAgZ2wuRkxPQVQsXHJcbiAgICAgIGZhbHNlLFxyXG4gICAgICAwLFxyXG4gICAgICAwXHJcbiAgICApO1xyXG5cclxuICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHRoaXMuYXR0cmliTG9jYXRpb25zLnZlcnRleFBvc2l0aW9uKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdGlhbGl6ZUJhY2tncm91bmRUZXh0dXJlKCkge1xyXG4gICAgY29uc3QgZ2wgPSB0aGlzLmdsO1xyXG5cclxuICAgIHRoaXMuYmFja2dyb3VuZFRleHR1cmUgPSB0aGlzLnRleHR1cmVMb2FkZXIubG9hZFRleHR1cmUoXHJcbiAgICAgIHRoaXMuYmFja2dyb3VuZEltYWdlXHJcbiAgICApO1xyXG5cclxuICAgIGdsLnVuaWZvcm0xaSh0aGlzLnVuaWZvcm1Mb2NhdGlvbnMuYmFja2dyb3VuZFNhbXBsZXIsIDApO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0aWFsaXplTm9ybWFsTWFwVGV4dHVyZSgpIHtcclxuICAgIGNvbnN0IGdsID0gdGhpcy5nbDtcclxuXHJcbiAgICB0aGlzLm5vcm1hbE1hcFRleHR1cmUgPSB0aGlzLnRleHR1cmVMb2FkZXIubG9hZFRleHR1cmUodGhpcy5ub3JtYWxNYXBJbWFnZSk7XHJcblxyXG4gICAgZ2wudW5pZm9ybTFpKHRoaXMudW5pZm9ybUxvY2F0aW9ucy5ub3JtYWxNYXBTYW1wbGVyLCAxKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0QXR0cmlidXRlTG9jYXRpb25zKCkge1xyXG4gICAgY29uc3QgZ2wgPSB0aGlzLmdsO1xyXG5cclxuICAgIHRoaXMuYXR0cmliTG9jYXRpb25zID0ge1xyXG4gICAgICB2ZXJ0ZXhQb3NpdGlvbjogZ2wuZ2V0QXR0cmliTG9jYXRpb24oXHJcbiAgICAgICAgdGhpcy5zaGFkZXJQcm9ncmFtLFxyXG4gICAgICAgICdhVmVydGV4UG9zaXRpb24nXHJcbiAgICAgICksXHJcbiAgICAgIHRleHR1cmVDb29yZDogZ2wuZ2V0QXR0cmliTG9jYXRpb24odGhpcy5zaGFkZXJQcm9ncmFtLCAnYVRleHR1cmVDb29yZCcpXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRVbmlmb3JtTG9jYXRpb25zKCkge1xyXG4gICAgY29uc3QgZ2wgPSB0aGlzLmdsO1xyXG5cclxuICAgIHRoaXMudW5pZm9ybUxvY2F0aW9ucyA9IHtcclxuICAgICAgYmFja2dyb3VuZFNhbXBsZXI6IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihcclxuICAgICAgICB0aGlzLnNoYWRlclByb2dyYW0sXHJcbiAgICAgICAgJ3VCYWNrZ3JvdW5kU2FtcGxlcidcclxuICAgICAgKSxcclxuICAgICAgbm9ybWFsTWFwU2FtcGxlcjogZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKFxyXG4gICAgICAgIHRoaXMuc2hhZGVyUHJvZ3JhbSxcclxuICAgICAgICAndU5vcm1hbE1hcFNhbXBsZXInXHJcbiAgICAgICksXHJcbiAgICAgIGxpZ2h0UG9zaXRpb246IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihcclxuICAgICAgICB0aGlzLnNoYWRlclByb2dyYW0sXHJcbiAgICAgICAgJ3VMaWdodFBvc2l0aW9uJ1xyXG4gICAgICApLFxyXG4gICAgICB1Vmlld2VyVmVjdG9yOiBnbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5zaGFkZXJQcm9ncmFtLCAndVZpZXdlclZlY3RvcicpLFxyXG4gICAgICBrRDogZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuc2hhZGVyUHJvZ3JhbSwgJ2tEJyksXHJcbiAgICAgIGtTOiBnbC5nZXRVbmlmb3JtTG9jYXRpb24odGhpcy5zaGFkZXJQcm9ncmFtLCAna1MnKSxcclxuICAgICAgbTogZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuc2hhZGVyUHJvZ3JhbSwgJ20nKVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvQXBwbGljYXRpb24udHMiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBtZXRhZGF0YV8xID0gcmVxdWlyZShcIi4vbWV0YWRhdGFcIik7XG52YXIgcXVlcnlhYmxlX3N0cmluZ18xID0gcmVxdWlyZShcIi4vcXVlcnlhYmxlX3N0cmluZ1wiKTtcbnZhciBndWlkXzEgPSByZXF1aXJlKFwiLi4vdXRpbHMvZ3VpZFwiKTtcbnZhciBNRVRBREFUQV9LRVkgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzL21ldGFkYXRhX2tleXNcIik7XG52YXIgVGFyZ2V0ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBUYXJnZXQodHlwZSwgbmFtZSwgc2VydmljZUlkZW50aWZpZXIsIG5hbWVkT3JUYWdnZWQpIHtcbiAgICAgICAgdGhpcy5ndWlkID0gZ3VpZF8xLmd1aWQoKTtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5zZXJ2aWNlSWRlbnRpZmllciA9IHNlcnZpY2VJZGVudGlmaWVyO1xuICAgICAgICB0aGlzLm5hbWUgPSBuZXcgcXVlcnlhYmxlX3N0cmluZ18xLlF1ZXJ5YWJsZVN0cmluZyhuYW1lIHx8IFwiXCIpO1xuICAgICAgICB0aGlzLm1ldGFkYXRhID0gbmV3IEFycmF5KCk7XG4gICAgICAgIHZhciBtZXRhZGF0YUl0ZW0gPSBudWxsO1xuICAgICAgICBpZiAodHlwZW9mIG5hbWVkT3JUYWdnZWQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIG1ldGFkYXRhSXRlbSA9IG5ldyBtZXRhZGF0YV8xLk1ldGFkYXRhKE1FVEFEQVRBX0tFWS5OQU1FRF9UQUcsIG5hbWVkT3JUYWdnZWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5hbWVkT3JUYWdnZWQgaW5zdGFuY2VvZiBtZXRhZGF0YV8xLk1ldGFkYXRhKSB7XG4gICAgICAgICAgICBtZXRhZGF0YUl0ZW0gPSBuYW1lZE9yVGFnZ2VkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtZXRhZGF0YUl0ZW0gIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMubWV0YWRhdGEucHVzaChtZXRhZGF0YUl0ZW0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIFRhcmdldC5wcm90b3R5cGUuaGFzVGFnID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubWV0YWRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBtID0gdGhpcy5tZXRhZGF0YVtpXTtcbiAgICAgICAgICAgIGlmIChtLmtleSA9PT0ga2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgVGFyZ2V0LnByb3RvdHlwZS5pc0FycmF5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXNUYWcoTUVUQURBVEFfS0VZLk1VTFRJX0lOSkVDVF9UQUcpO1xuICAgIH07XG4gICAgVGFyZ2V0LnByb3RvdHlwZS5tYXRjaGVzQXJyYXkgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXRjaGVzVGFnKE1FVEFEQVRBX0tFWS5NVUxUSV9JTkpFQ1RfVEFHKShuYW1lKTtcbiAgICB9O1xuICAgIFRhcmdldC5wcm90b3R5cGUuaXNOYW1lZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzVGFnKE1FVEFEQVRBX0tFWS5OQU1FRF9UQUcpO1xuICAgIH07XG4gICAgVGFyZ2V0LnByb3RvdHlwZS5pc1RhZ2dlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWV0YWRhdGEuc29tZShmdW5jdGlvbiAobSkge1xuICAgICAgICAgICAgcmV0dXJuIChtLmtleSAhPT0gTUVUQURBVEFfS0VZLklOSkVDVF9UQUcpICYmXG4gICAgICAgICAgICAgICAgKG0ua2V5ICE9PSBNRVRBREFUQV9LRVkuTVVMVElfSU5KRUNUX1RBRykgJiZcbiAgICAgICAgICAgICAgICAobS5rZXkgIT09IE1FVEFEQVRBX0tFWS5OQU1FX1RBRykgJiZcbiAgICAgICAgICAgICAgICAobS5rZXkgIT09IE1FVEFEQVRBX0tFWS5VTk1BTkFHRURfVEFHKSAmJlxuICAgICAgICAgICAgICAgIChtLmtleSAhPT0gTUVUQURBVEFfS0VZLk5BTUVEX1RBRyk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgVGFyZ2V0LnByb3RvdHlwZS5pc09wdGlvbmFsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXRjaGVzVGFnKE1FVEFEQVRBX0tFWS5PUFRJT05BTF9UQUcpKHRydWUpO1xuICAgIH07XG4gICAgVGFyZ2V0LnByb3RvdHlwZS5nZXROYW1lZFRhZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNOYW1lZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5tZXRhZGF0YS5maWx0ZXIoZnVuY3Rpb24gKG0pIHsgcmV0dXJuIG0ua2V5ID09PSBNRVRBREFUQV9LRVkuTkFNRURfVEFHOyB9KVswXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICAgIFRhcmdldC5wcm90b3R5cGUuZ2V0Q3VzdG9tVGFncyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNUYWdnZWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubWV0YWRhdGEuZmlsdGVyKGZ1bmN0aW9uIChtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChtLmtleSAhPT0gTUVUQURBVEFfS0VZLklOSkVDVF9UQUcpICYmXG4gICAgICAgICAgICAgICAgICAgIChtLmtleSAhPT0gTUVUQURBVEFfS0VZLk1VTFRJX0lOSkVDVF9UQUcpICYmXG4gICAgICAgICAgICAgICAgICAgIChtLmtleSAhPT0gTUVUQURBVEFfS0VZLk5BTUVfVEFHKSAmJlxuICAgICAgICAgICAgICAgICAgICAobS5rZXkgIT09IE1FVEFEQVRBX0tFWS5VTk1BTkFHRURfVEFHKSAmJlxuICAgICAgICAgICAgICAgICAgICAobS5rZXkgIT09IE1FVEFEQVRBX0tFWS5OQU1FRF9UQUcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgICBUYXJnZXQucHJvdG90eXBlLm1hdGNoZXNOYW1lZFRhZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hdGNoZXNUYWcoTUVUQURBVEFfS0VZLk5BTUVEX1RBRykobmFtZSk7XG4gICAgfTtcbiAgICBUYXJnZXQucHJvdG90eXBlLm1hdGNoZXNUYWcgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgX3RoaXMubWV0YWRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgbSA9IF90aGlzLm1ldGFkYXRhW2ldO1xuICAgICAgICAgICAgICAgIGlmIChtLmtleSA9PT0ga2V5ICYmIG0udmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHJldHVybiBUYXJnZXQ7XG59KCkpO1xuZXhwb3J0cy5UYXJnZXQgPSBUYXJnZXQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9pbnZlcnNpZnkvbGliL3BsYW5uaW5nL3RhcmdldC5qc1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgRVJST1JfTVNHUyA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHMvZXJyb3JfbXNnc1wiKTtcbmZ1bmN0aW9uIGlzU3RhY2tPdmVyZmxvd0V4ZXB0aW9uKGVycm9yKSB7XG4gICAgcmV0dXJuIChlcnJvciBpbnN0YW5jZW9mIFJhbmdlRXJyb3IgfHxcbiAgICAgICAgZXJyb3IubWVzc2FnZSA9PT0gRVJST1JfTVNHUy5TVEFDS19PVkVSRkxPVyk7XG59XG5leHBvcnRzLmlzU3RhY2tPdmVyZmxvd0V4ZXB0aW9uID0gaXNTdGFja092ZXJmbG93RXhlcHRpb247XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9pbnZlcnNpZnkvbGliL3V0aWxzL2V4Y2VwdGlvbnMuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGJpbmRpbmdfd2hlbl9zeW50YXhfMSA9IHJlcXVpcmUoXCIuL2JpbmRpbmdfd2hlbl9zeW50YXhcIik7XG52YXIgYmluZGluZ19vbl9zeW50YXhfMSA9IHJlcXVpcmUoXCIuL2JpbmRpbmdfb25fc3ludGF4XCIpO1xudmFyIEJpbmRpbmdXaGVuT25TeW50YXggPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEJpbmRpbmdXaGVuT25TeW50YXgoYmluZGluZykge1xuICAgICAgICB0aGlzLl9iaW5kaW5nID0gYmluZGluZztcbiAgICAgICAgdGhpcy5fYmluZGluZ1doZW5TeW50YXggPSBuZXcgYmluZGluZ193aGVuX3N5bnRheF8xLkJpbmRpbmdXaGVuU3ludGF4KHRoaXMuX2JpbmRpbmcpO1xuICAgICAgICB0aGlzLl9iaW5kaW5nT25TeW50YXggPSBuZXcgYmluZGluZ19vbl9zeW50YXhfMS5CaW5kaW5nT25TeW50YXgodGhpcy5fYmluZGluZyk7XG4gICAgfVxuICAgIEJpbmRpbmdXaGVuT25TeW50YXgucHJvdG90eXBlLndoZW4gPSBmdW5jdGlvbiAoY29uc3RyYWludCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYmluZGluZ1doZW5TeW50YXgud2hlbihjb25zdHJhaW50KTtcbiAgICB9O1xuICAgIEJpbmRpbmdXaGVuT25TeW50YXgucHJvdG90eXBlLndoZW5UYXJnZXROYW1lZCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9iaW5kaW5nV2hlblN5bnRheC53aGVuVGFyZ2V0TmFtZWQobmFtZSk7XG4gICAgfTtcbiAgICBCaW5kaW5nV2hlbk9uU3ludGF4LnByb3RvdHlwZS53aGVuVGFyZ2V0SXNEZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYmluZGluZ1doZW5TeW50YXgud2hlblRhcmdldElzRGVmYXVsdCgpO1xuICAgIH07XG4gICAgQmluZGluZ1doZW5PblN5bnRheC5wcm90b3R5cGUud2hlblRhcmdldFRhZ2dlZCA9IGZ1bmN0aW9uICh0YWcsIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9iaW5kaW5nV2hlblN5bnRheC53aGVuVGFyZ2V0VGFnZ2VkKHRhZywgdmFsdWUpO1xuICAgIH07XG4gICAgQmluZGluZ1doZW5PblN5bnRheC5wcm90b3R5cGUud2hlbkluamVjdGVkSW50byA9IGZ1bmN0aW9uIChwYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JpbmRpbmdXaGVuU3ludGF4LndoZW5JbmplY3RlZEludG8ocGFyZW50KTtcbiAgICB9O1xuICAgIEJpbmRpbmdXaGVuT25TeW50YXgucHJvdG90eXBlLndoZW5QYXJlbnROYW1lZCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9iaW5kaW5nV2hlblN5bnRheC53aGVuUGFyZW50TmFtZWQobmFtZSk7XG4gICAgfTtcbiAgICBCaW5kaW5nV2hlbk9uU3ludGF4LnByb3RvdHlwZS53aGVuUGFyZW50VGFnZ2VkID0gZnVuY3Rpb24gKHRhZywgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JpbmRpbmdXaGVuU3ludGF4LndoZW5QYXJlbnRUYWdnZWQodGFnLCB2YWx1ZSk7XG4gICAgfTtcbiAgICBCaW5kaW5nV2hlbk9uU3ludGF4LnByb3RvdHlwZS53aGVuQW55QW5jZXN0b3JJcyA9IGZ1bmN0aW9uIChhbmNlc3Rvcikge1xuICAgICAgICByZXR1cm4gdGhpcy5fYmluZGluZ1doZW5TeW50YXgud2hlbkFueUFuY2VzdG9ySXMoYW5jZXN0b3IpO1xuICAgIH07XG4gICAgQmluZGluZ1doZW5PblN5bnRheC5wcm90b3R5cGUud2hlbk5vQW5jZXN0b3JJcyA9IGZ1bmN0aW9uIChhbmNlc3Rvcikge1xuICAgICAgICByZXR1cm4gdGhpcy5fYmluZGluZ1doZW5TeW50YXgud2hlbk5vQW5jZXN0b3JJcyhhbmNlc3Rvcik7XG4gICAgfTtcbiAgICBCaW5kaW5nV2hlbk9uU3ludGF4LnByb3RvdHlwZS53aGVuQW55QW5jZXN0b3JOYW1lZCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9iaW5kaW5nV2hlblN5bnRheC53aGVuQW55QW5jZXN0b3JOYW1lZChuYW1lKTtcbiAgICB9O1xuICAgIEJpbmRpbmdXaGVuT25TeW50YXgucHJvdG90eXBlLndoZW5BbnlBbmNlc3RvclRhZ2dlZCA9IGZ1bmN0aW9uICh0YWcsIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9iaW5kaW5nV2hlblN5bnRheC53aGVuQW55QW5jZXN0b3JUYWdnZWQodGFnLCB2YWx1ZSk7XG4gICAgfTtcbiAgICBCaW5kaW5nV2hlbk9uU3ludGF4LnByb3RvdHlwZS53aGVuTm9BbmNlc3Rvck5hbWVkID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JpbmRpbmdXaGVuU3ludGF4LndoZW5Ob0FuY2VzdG9yTmFtZWQobmFtZSk7XG4gICAgfTtcbiAgICBCaW5kaW5nV2hlbk9uU3ludGF4LnByb3RvdHlwZS53aGVuTm9BbmNlc3RvclRhZ2dlZCA9IGZ1bmN0aW9uICh0YWcsIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9iaW5kaW5nV2hlblN5bnRheC53aGVuTm9BbmNlc3RvclRhZ2dlZCh0YWcsIHZhbHVlKTtcbiAgICB9O1xuICAgIEJpbmRpbmdXaGVuT25TeW50YXgucHJvdG90eXBlLndoZW5BbnlBbmNlc3Rvck1hdGNoZXMgPSBmdW5jdGlvbiAoY29uc3RyYWludCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYmluZGluZ1doZW5TeW50YXgud2hlbkFueUFuY2VzdG9yTWF0Y2hlcyhjb25zdHJhaW50KTtcbiAgICB9O1xuICAgIEJpbmRpbmdXaGVuT25TeW50YXgucHJvdG90eXBlLndoZW5Ob0FuY2VzdG9yTWF0Y2hlcyA9IGZ1bmN0aW9uIChjb25zdHJhaW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9iaW5kaW5nV2hlblN5bnRheC53aGVuTm9BbmNlc3Rvck1hdGNoZXMoY29uc3RyYWludCk7XG4gICAgfTtcbiAgICBCaW5kaW5nV2hlbk9uU3ludGF4LnByb3RvdHlwZS5vbkFjdGl2YXRpb24gPSBmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5fYmluZGluZ09uU3ludGF4Lm9uQWN0aXZhdGlvbihoYW5kbGVyKTtcbiAgICB9O1xuICAgIHJldHVybiBCaW5kaW5nV2hlbk9uU3ludGF4O1xufSgpKTtcbmV4cG9ydHMuQmluZGluZ1doZW5PblN5bnRheCA9IEJpbmRpbmdXaGVuT25TeW50YXg7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9pbnZlcnNpZnkvbGliL3N5bnRheC9iaW5kaW5nX3doZW5fb25fc3ludGF4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBtZXRhZGF0YV8xID0gcmVxdWlyZShcIi4uL3BsYW5uaW5nL21ldGFkYXRhXCIpO1xudmFyIE1FVEFEQVRBX0tFWSA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHMvbWV0YWRhdGFfa2V5c1wiKTtcbnZhciB0cmF2ZXJzZUFuY2Vyc3RvcnMgPSBmdW5jdGlvbiAocmVxdWVzdCwgY29uc3RyYWludCkge1xuICAgIHZhciBwYXJlbnQgPSByZXF1ZXN0LnBhcmVudFJlcXVlc3Q7XG4gICAgaWYgKHBhcmVudCAhPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gY29uc3RyYWludChwYXJlbnQpID8gdHJ1ZSA6IHRyYXZlcnNlQW5jZXJzdG9ycyhwYXJlbnQsIGNvbnN0cmFpbnQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn07XG5leHBvcnRzLnRyYXZlcnNlQW5jZXJzdG9ycyA9IHRyYXZlcnNlQW5jZXJzdG9ycztcbnZhciB0YWdnZWRDb25zdHJhaW50ID0gZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdmFyIGNvbnN0cmFpbnQgPSBmdW5jdGlvbiAocmVxdWVzdCkge1xuICAgICAgICByZXR1cm4gcmVxdWVzdCAhPT0gbnVsbCAmJiByZXF1ZXN0LnRhcmdldCAhPT0gbnVsbCAmJiByZXF1ZXN0LnRhcmdldC5tYXRjaGVzVGFnKGtleSkodmFsdWUpO1xuICAgIH07XG4gICAgY29uc3RyYWludC5tZXRhRGF0YSA9IG5ldyBtZXRhZGF0YV8xLk1ldGFkYXRhKGtleSwgdmFsdWUpO1xuICAgIHJldHVybiBjb25zdHJhaW50O1xufTsgfTtcbmV4cG9ydHMudGFnZ2VkQ29uc3RyYWludCA9IHRhZ2dlZENvbnN0cmFpbnQ7XG52YXIgbmFtZWRDb25zdHJhaW50ID0gdGFnZ2VkQ29uc3RyYWludChNRVRBREFUQV9LRVkuTkFNRURfVEFHKTtcbmV4cG9ydHMubmFtZWRDb25zdHJhaW50ID0gbmFtZWRDb25zdHJhaW50O1xudmFyIHR5cGVDb25zdHJhaW50ID0gZnVuY3Rpb24gKHR5cGUpIHsgcmV0dXJuIGZ1bmN0aW9uIChyZXF1ZXN0KSB7XG4gICAgdmFyIGJpbmRpbmcgPSBudWxsO1xuICAgIGlmIChyZXF1ZXN0ICE9PSBudWxsKSB7XG4gICAgICAgIGJpbmRpbmcgPSByZXF1ZXN0LmJpbmRpbmdzWzBdO1xuICAgICAgICBpZiAodHlwZW9mIHR5cGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHZhciBzZXJ2aWNlSWRlbnRpZmllciA9IGJpbmRpbmcuc2VydmljZUlkZW50aWZpZXI7XG4gICAgICAgICAgICByZXR1cm4gc2VydmljZUlkZW50aWZpZXIgPT09IHR5cGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgY29uc3RydWN0b3IgPSByZXF1ZXN0LmJpbmRpbmdzWzBdLmltcGxlbWVudGF0aW9uVHlwZTtcbiAgICAgICAgICAgIHJldHVybiB0eXBlID09PSBjb25zdHJ1Y3RvcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59OyB9O1xuZXhwb3J0cy50eXBlQ29uc3RyYWludCA9IHR5cGVDb25zdHJhaW50O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaW52ZXJzaWZ5L2xpYi9zeW50YXgvY29uc3RyYWludF9oZWxwZXJzLmpzXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBNRVRBREFUQV9LRVkgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzL21ldGFkYXRhX2tleXNcIik7XG52YXIgTWV0YWRhdGFSZWFkZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE1ldGFkYXRhUmVhZGVyKCkge1xuICAgIH1cbiAgICBNZXRhZGF0YVJlYWRlci5wcm90b3R5cGUuZ2V0Q29uc3RydWN0b3JNZXRhZGF0YSA9IGZ1bmN0aW9uIChjb25zdHJ1Y3RvckZ1bmMpIHtcbiAgICAgICAgdmFyIGNvbXBpbGVyR2VuZXJhdGVkTWV0YWRhdGEgPSBSZWZsZWN0LmdldE1ldGFkYXRhKE1FVEFEQVRBX0tFWS5QQVJBTV9UWVBFUywgY29uc3RydWN0b3JGdW5jKTtcbiAgICAgICAgdmFyIHVzZXJHZW5lcmF0ZWRNZXRhZGF0YSA9IFJlZmxlY3QuZ2V0TWV0YWRhdGEoTUVUQURBVEFfS0VZLlRBR0dFRCwgY29uc3RydWN0b3JGdW5jKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNvbXBpbGVyR2VuZXJhdGVkTWV0YWRhdGE6IGNvbXBpbGVyR2VuZXJhdGVkTWV0YWRhdGEsXG4gICAgICAgICAgICB1c2VyR2VuZXJhdGVkTWV0YWRhdGE6IHVzZXJHZW5lcmF0ZWRNZXRhZGF0YSB8fCB7fVxuICAgICAgICB9O1xuICAgIH07XG4gICAgTWV0YWRhdGFSZWFkZXIucHJvdG90eXBlLmdldFByb3BlcnRpZXNNZXRhZGF0YSA9IGZ1bmN0aW9uIChjb25zdHJ1Y3RvckZ1bmMpIHtcbiAgICAgICAgdmFyIHVzZXJHZW5lcmF0ZWRNZXRhZGF0YSA9IFJlZmxlY3QuZ2V0TWV0YWRhdGEoTUVUQURBVEFfS0VZLlRBR0dFRF9QUk9QLCBjb25zdHJ1Y3RvckZ1bmMpIHx8IFtdO1xuICAgICAgICByZXR1cm4gdXNlckdlbmVyYXRlZE1ldGFkYXRhO1xuICAgIH07XG4gICAgcmV0dXJuIE1ldGFkYXRhUmVhZGVyO1xufSgpKTtcbmV4cG9ydHMuTWV0YWRhdGFSZWFkZXIgPSBNZXRhZGF0YVJlYWRlcjtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2ludmVyc2lmeS9saWIvcGxhbm5pbmcvbWV0YWRhdGFfcmVhZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBpbmplY3RhYmxlIH0gZnJvbSAnaW52ZXJzaWZ5JztcclxuXHJcbkBpbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEltYWdlTG9hZGVyIHtcclxuICBwdWJsaWMgbG9hZEltYWdlKHVybDogc3RyaW5nKTogUHJvbWlzZTxIVE1MSW1hZ2VFbGVtZW50PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG5cclxuICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4gcmVzb2x2ZShpbWFnZSk7XHJcbiAgICAgIGltYWdlLm9uZXJyb3IgPSByZWplY3Q7XHJcblxyXG4gICAgICBpbWFnZS5zcmMgPSB1cmw7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvc2VydmljZXMvSW1hZ2VMb2FkZXIudHMiLCJpbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdldmVudGVtaXR0ZXIzJztcclxuaW1wb3J0IHsgaW5qZWN0YWJsZSB9IGZyb20gJ2ludmVyc2lmeSc7XHJcblxyXG5pbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSAnY29tbW9uL1ZlY3RvcjMnO1xyXG5pbXBvcnQgeyBjb25maWd1cmF0aW9uIH0gZnJvbSAnY29uZmlndXJhdGlvbic7XHJcblxyXG5AaW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMaWdodFNpbXVsYXRvciBleHRlbmRzIEV2ZW50RW1pdHRlciB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBob3Jpem9udGFsUmFkaWFuc01vZHVsb1ZhbHVlID0gMiAqIE1hdGguUEk7IC8vIFswOyAzNjBdIGRlZ3JlZXNcclxuICBwcml2YXRlIGhvcml6b250YWxTdGVwSW5SYWRpYW5zOiBudW1iZXI7XHJcblxyXG4gIHByaXZhdGUgbWluVmVydGljYWxBbmdsZTogbnVtYmVyO1xyXG4gIHByaXZhdGUgdmVydGljYWxBbmdsZURlbHRhOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSB2ZXJ0aWNhbFN0ZXBJblJhZGlhbnM6IG51bWJlcjtcclxuXHJcbiAgcHJpdmF0ZSBtb3ZpbmdMaWdodEludGVydmFsSWQ6IG51bWJlcjtcclxuICBwcml2YXRlIGxpZ2h0SG9yaXpvbnRhbEFuZ2xlID0gMDtcclxuICBwcml2YXRlIGxpZ2h0VmVydGljYWxBbmdsZU9mZnNldCA9IGNvbmZpZ3VyYXRpb24ubW92aW5nTGlnaHQubWluVmVydGljYWxBbmdsZTtcclxuICBwcml2YXRlIGxpZ2h0VmVydGljYWxSaXNpbmcgPSB0cnVlO1xyXG4gIHByaXZhdGUgbGlnaHRQb3NpdGlvblJhZGl1cyA9IGNvbmZpZ3VyYXRpb24ubW92aW5nTGlnaHQucmFkaXVzO1xyXG5cclxuICBwcml2YXRlIHJlYWRvbmx5IGNlbnRlclggPSBjb25maWd1cmF0aW9uLm1vdmluZ0xpZ2h0LmNlbnRlci54O1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgY2VudGVyWSA9IGNvbmZpZ3VyYXRpb24ubW92aW5nTGlnaHQuY2VudGVyLnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLnBlcmZvcm1Jbml0aWFsQ2FsY3VsYXRpb25zKCk7XHJcbiAgICB0aGlzLm1vdmluZ0xpZ2h0VGljayA9IHRoaXMubW92aW5nTGlnaHRUaWNrLmJpbmQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaW5pdCgpIHtcclxuICAgIHRoaXMuc3RhcnRNb3ZpbmdMaWdodCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnN0b3BNb3ZpbmdMaWdodCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBwZXJmb3JtSW5pdGlhbENhbGN1bGF0aW9ucygpIHtcclxuICAgIHRoaXMuaG9yaXpvbnRhbFN0ZXBJblJhZGlhbnMgPSBjb25maWd1cmF0aW9uLm1vdmluZ0xpZ2h0LnRpY2tJbnRlcnZhbCAvXHJcbiAgICAgIGNvbmZpZ3VyYXRpb24ubW92aW5nTGlnaHQuaG9yaXpvbnRhbExhcFRpbWUgKlxyXG4gICAgICAyICpcclxuICAgICAgTWF0aC5QSTtcclxuXHJcbiAgICB0aGlzLm1pblZlcnRpY2FsQW5nbGUgPSBjb25maWd1cmF0aW9uLm1vdmluZ0xpZ2h0Lm1pblZlcnRpY2FsQW5nbGU7XHJcbiAgICB0aGlzLnZlcnRpY2FsQW5nbGVEZWx0YSA9IGNvbmZpZ3VyYXRpb24ubW92aW5nTGlnaHQubWF4VmVydGljYWxBbmdsZSAtXHJcbiAgICAgIHRoaXMubWluVmVydGljYWxBbmdsZTtcclxuXHJcbiAgICB0aGlzLnZlcnRpY2FsU3RlcEluUmFkaWFucyA9IGNvbmZpZ3VyYXRpb24ubW92aW5nTGlnaHQudGlja0ludGVydmFsIC9cclxuICAgICAgY29uZmlndXJhdGlvbi5tb3ZpbmdMaWdodC52ZXJ0aWNhbExhcFRpbWUgKlxyXG4gICAgICB0aGlzLnZlcnRpY2FsQW5nbGVEZWx0YTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGlzcGF0Y2hMaWdodFBvc2l0aW9uKHBvc2l0aW9uOiBWZWN0b3IzKSB7XHJcbiAgICB0aGlzLmVtaXQoJ2xpZ2h0LXBvc2l0aW9uLWNoYW5nZScsIHBvc2l0aW9uKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhcnRNb3ZpbmdMaWdodCgpIHtcclxuICAgIHRoaXMubW92aW5nTGlnaHRJbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoXHJcbiAgICAgIHRoaXMubW92aW5nTGlnaHRUaWNrLFxyXG4gICAgICBjb25maWd1cmF0aW9uLm1vdmluZ0xpZ2h0LnRpY2tJbnRlcnZhbFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbW92aW5nTGlnaHRUaWNrKCkge1xyXG4gICAgY29uc3QgeyBjZW50ZXJYLCBjZW50ZXJZIH0gPSB0aGlzO1xyXG4gICAgY29uc3QgdmVydGljYWxBbmdsZSA9XHJcbiAgICAgIGNvbmZpZ3VyYXRpb24ubW92aW5nTGlnaHQubWluVmVydGljYWxBbmdsZSArIHRoaXMubGlnaHRWZXJ0aWNhbEFuZ2xlT2Zmc2V0O1xyXG5cclxuICAgIGNvbnN0IGhvcml6b250YWxSYWRpdXMgPSB0aGlzLmxpZ2h0UG9zaXRpb25SYWRpdXMgKiBNYXRoLmNvcyh2ZXJ0aWNhbEFuZ2xlKTtcclxuXHJcbiAgICBjb25zdCB4ID0gY2VudGVyWCArIGhvcml6b250YWxSYWRpdXMgKiBNYXRoLmNvcyh0aGlzLmxpZ2h0SG9yaXpvbnRhbEFuZ2xlKTtcclxuICAgIGNvbnN0IHkgPSBjZW50ZXJZICsgaG9yaXpvbnRhbFJhZGl1cyAqIE1hdGguc2luKHRoaXMubGlnaHRIb3Jpem9udGFsQW5nbGUpO1xyXG4gICAgY29uc3QgeiA9IHRoaXMubGlnaHRQb3NpdGlvblJhZGl1cyAqIE1hdGguc2luKHZlcnRpY2FsQW5nbGUpO1xyXG5cclxuICAgIGNvbnN0IGxpZ2h0UG9zaXRpb24gPSBuZXcgVmVjdG9yMyh4LCB5LCB6KTtcclxuICAgIHRoaXMuZGlzcGF0Y2hMaWdodFBvc2l0aW9uKGxpZ2h0UG9zaXRpb24pO1xyXG5cclxuICAgIHRoaXMuaG9yaXpvbnRhbFRpY2soKTtcclxuICAgIHRoaXMudmVydGljYWxUaWNrKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhvcml6b250YWxUaWNrKCkge1xyXG4gICAgdGhpcy5saWdodEhvcml6b250YWxBbmdsZSArPSB0aGlzLmhvcml6b250YWxTdGVwSW5SYWRpYW5zO1xyXG4gICAgaWYgKHRoaXMubGlnaHRIb3Jpem9udGFsQW5nbGUgPj0gdGhpcy5ob3Jpem9udGFsUmFkaWFuc01vZHVsb1ZhbHVlKSB7XHJcbiAgICAgIHRoaXMubGlnaHRIb3Jpem9udGFsQW5nbGUgLT0gdGhpcy5ob3Jpem9udGFsUmFkaWFuc01vZHVsb1ZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB2ZXJ0aWNhbFRpY2soKSB7XHJcbiAgICBpZiAodGhpcy5saWdodFZlcnRpY2FsUmlzaW5nKSB7XHJcbiAgICAgIHRoaXMubGlnaHRWZXJ0aWNhbEFuZ2xlT2Zmc2V0ICs9IHRoaXMudmVydGljYWxTdGVwSW5SYWRpYW5zO1xyXG4gICAgICBpZiAodGhpcy5saWdodFZlcnRpY2FsQW5nbGVPZmZzZXQgPj0gdGhpcy52ZXJ0aWNhbEFuZ2xlRGVsdGEpIHtcclxuICAgICAgICB0aGlzLmxpZ2h0VmVydGljYWxSaXNpbmcgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5saWdodFZlcnRpY2FsQW5nbGVPZmZzZXQgLT0gdGhpcy52ZXJ0aWNhbFN0ZXBJblJhZGlhbnM7XHJcbiAgICAgIGlmICh0aGlzLmxpZ2h0VmVydGljYWxBbmdsZU9mZnNldCA8PSAwKSB7XHJcbiAgICAgICAgdGhpcy5saWdodFZlcnRpY2FsUmlzaW5nID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdG9wTW92aW5nTGlnaHQoKSB7XHJcbiAgICBjbGVhckludGVydmFsKHRoaXMubW92aW5nTGlnaHRJbnRlcnZhbElkKTtcclxuICAgIHRoaXMubGlnaHRIb3Jpem9udGFsQW5nbGUgPSAwO1xyXG4gICAgdGhpcy5saWdodFZlcnRpY2FsQW5nbGVPZmZzZXQgPSBjb25maWd1cmF0aW9uLm1vdmluZ0xpZ2h0Lm1pblZlcnRpY2FsQW5nbGU7XHJcbiAgICB0aGlzLmxpZ2h0VmVydGljYWxSaXNpbmcgPSB0cnVlO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9zZXJ2aWNlcy9MaWdodFNpbXVsYXRvci50cyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGhhcyA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHlcbiAgLCBwcmVmaXggPSAnfic7XG5cbi8qKlxuICogQ29uc3RydWN0b3IgdG8gY3JlYXRlIGEgc3RvcmFnZSBmb3Igb3VyIGBFRWAgb2JqZWN0cy5cbiAqIEFuIGBFdmVudHNgIGluc3RhbmNlIGlzIGEgcGxhaW4gb2JqZWN0IHdob3NlIHByb3BlcnRpZXMgYXJlIGV2ZW50IG5hbWVzLlxuICpcbiAqIEBjb25zdHJ1Y3RvclxuICogQGFwaSBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIEV2ZW50cygpIHt9XG5cbi8vXG4vLyBXZSB0cnkgdG8gbm90IGluaGVyaXQgZnJvbSBgT2JqZWN0LnByb3RvdHlwZWAuIEluIHNvbWUgZW5naW5lcyBjcmVhdGluZyBhblxuLy8gaW5zdGFuY2UgaW4gdGhpcyB3YXkgaXMgZmFzdGVyIHRoYW4gY2FsbGluZyBgT2JqZWN0LmNyZWF0ZShudWxsKWAgZGlyZWN0bHkuXG4vLyBJZiBgT2JqZWN0LmNyZWF0ZShudWxsKWAgaXMgbm90IHN1cHBvcnRlZCB3ZSBwcmVmaXggdGhlIGV2ZW50IG5hbWVzIHdpdGggYVxuLy8gY2hhcmFjdGVyIHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSBidWlsdC1pbiBvYmplY3QgcHJvcGVydGllcyBhcmUgbm90XG4vLyBvdmVycmlkZGVuIG9yIHVzZWQgYXMgYW4gYXR0YWNrIHZlY3Rvci5cbi8vXG5pZiAoT2JqZWN0LmNyZWF0ZSkge1xuICBFdmVudHMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcblxuICAvL1xuICAvLyBUaGlzIGhhY2sgaXMgbmVlZGVkIGJlY2F1c2UgdGhlIGBfX3Byb3RvX19gIHByb3BlcnR5IGlzIHN0aWxsIGluaGVyaXRlZCBpblxuICAvLyBzb21lIG9sZCBicm93c2VycyBsaWtlIEFuZHJvaWQgNCwgaVBob25lIDUuMSwgT3BlcmEgMTEgYW5kIFNhZmFyaSA1LlxuICAvL1xuICBpZiAoIW5ldyBFdmVudHMoKS5fX3Byb3RvX18pIHByZWZpeCA9IGZhbHNlO1xufVxuXG4vKipcbiAqIFJlcHJlc2VudGF0aW9uIG9mIGEgc2luZ2xlIGV2ZW50IGxpc3RlbmVyLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7TWl4ZWR9IGNvbnRleHQgVGhlIGNvbnRleHQgdG8gaW52b2tlIHRoZSBsaXN0ZW5lciB3aXRoLlxuICogQHBhcmFtIHtCb29sZWFufSBbb25jZT1mYWxzZV0gU3BlY2lmeSBpZiB0aGUgbGlzdGVuZXIgaXMgYSBvbmUtdGltZSBsaXN0ZW5lci5cbiAqIEBjb25zdHJ1Y3RvclxuICogQGFwaSBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIEVFKGZuLCBjb250ZXh0LCBvbmNlKSB7XG4gIHRoaXMuZm4gPSBmbjtcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgdGhpcy5vbmNlID0gb25jZSB8fCBmYWxzZTtcbn1cblxuLyoqXG4gKiBNaW5pbWFsIGBFdmVudEVtaXR0ZXJgIGludGVyZmFjZSB0aGF0IGlzIG1vbGRlZCBhZ2FpbnN0IHRoZSBOb2RlLmpzXG4gKiBgRXZlbnRFbWl0dGVyYCBpbnRlcmZhY2UuXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAYXBpIHB1YmxpY1xuICovXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIHRoaXMuX2V2ZW50cyA9IG5ldyBFdmVudHMoKTtcbiAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xufVxuXG4vKipcbiAqIFJldHVybiBhbiBhcnJheSBsaXN0aW5nIHRoZSBldmVudHMgZm9yIHdoaWNoIHRoZSBlbWl0dGVyIGhhcyByZWdpc3RlcmVkXG4gKiBsaXN0ZW5lcnMuXG4gKlxuICogQHJldHVybnMge0FycmF5fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5ldmVudE5hbWVzID0gZnVuY3Rpb24gZXZlbnROYW1lcygpIHtcbiAgdmFyIG5hbWVzID0gW11cbiAgICAsIGV2ZW50c1xuICAgICwgbmFtZTtcblxuICBpZiAodGhpcy5fZXZlbnRzQ291bnQgPT09IDApIHJldHVybiBuYW1lcztcblxuICBmb3IgKG5hbWUgaW4gKGV2ZW50cyA9IHRoaXMuX2V2ZW50cykpIHtcbiAgICBpZiAoaGFzLmNhbGwoZXZlbnRzLCBuYW1lKSkgbmFtZXMucHVzaChwcmVmaXggPyBuYW1lLnNsaWNlKDEpIDogbmFtZSk7XG4gIH1cblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHJldHVybiBuYW1lcy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhldmVudHMpKTtcbiAgfVxuXG4gIHJldHVybiBuYW1lcztcbn07XG5cbi8qKlxuICogUmV0dXJuIHRoZSBsaXN0ZW5lcnMgcmVnaXN0ZXJlZCBmb3IgYSBnaXZlbiBldmVudC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xTeW1ib2x9IGV2ZW50IFRoZSBldmVudCBuYW1lLlxuICogQHBhcmFtIHtCb29sZWFufSBleGlzdHMgT25seSBjaGVjayBpZiB0aGVyZSBhcmUgbGlzdGVuZXJzLlxuICogQHJldHVybnMge0FycmF5fEJvb2xlYW59XG4gKiBAYXBpIHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uIGxpc3RlbmVycyhldmVudCwgZXhpc3RzKSB7XG4gIHZhciBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50XG4gICAgLCBhdmFpbGFibGUgPSB0aGlzLl9ldmVudHNbZXZ0XTtcblxuICBpZiAoZXhpc3RzKSByZXR1cm4gISFhdmFpbGFibGU7XG4gIGlmICghYXZhaWxhYmxlKSByZXR1cm4gW107XG4gIGlmIChhdmFpbGFibGUuZm4pIHJldHVybiBbYXZhaWxhYmxlLmZuXTtcblxuICBmb3IgKHZhciBpID0gMCwgbCA9IGF2YWlsYWJsZS5sZW5ndGgsIGVlID0gbmV3IEFycmF5KGwpOyBpIDwgbDsgaSsrKSB7XG4gICAgZWVbaV0gPSBhdmFpbGFibGVbaV0uZm47XG4gIH1cblxuICByZXR1cm4gZWU7XG59O1xuXG4vKipcbiAqIENhbGxzIGVhY2ggb2YgdGhlIGxpc3RlbmVycyByZWdpc3RlcmVkIGZvciBhIGdpdmVuIGV2ZW50LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfFN5bWJvbH0gZXZlbnQgVGhlIGV2ZW50IG5hbWUuXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gYHRydWVgIGlmIHRoZSBldmVudCBoYWQgbGlzdGVuZXJzLCBlbHNlIGBmYWxzZWAuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiBlbWl0KGV2ZW50LCBhMSwgYTIsIGEzLCBhNCwgYTUpIHtcbiAgdmFyIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnQ7XG5cbiAgaWYgKCF0aGlzLl9ldmVudHNbZXZ0XSkgcmV0dXJuIGZhbHNlO1xuXG4gIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9ldmVudHNbZXZ0XVxuICAgICwgbGVuID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICwgYXJnc1xuICAgICwgaTtcblxuICBpZiAobGlzdGVuZXJzLmZuKSB7XG4gICAgaWYgKGxpc3RlbmVycy5vbmNlKSB0aGlzLnJlbW92ZUxpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcnMuZm4sIHVuZGVmaW5lZCwgdHJ1ZSk7XG5cbiAgICBzd2l0Y2ggKGxlbikge1xuICAgICAgY2FzZSAxOiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQpLCB0cnVlO1xuICAgICAgY2FzZSAyOiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExKSwgdHJ1ZTtcbiAgICAgIGNhc2UgMzogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSwgYTIpLCB0cnVlO1xuICAgICAgY2FzZSA0OiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExLCBhMiwgYTMpLCB0cnVlO1xuICAgICAgY2FzZSA1OiByZXR1cm4gbGlzdGVuZXJzLmZuLmNhbGwobGlzdGVuZXJzLmNvbnRleHQsIGExLCBhMiwgYTMsIGE0KSwgdHJ1ZTtcbiAgICAgIGNhc2UgNjogcmV0dXJuIGxpc3RlbmVycy5mbi5jYWxsKGxpc3RlbmVycy5jb250ZXh0LCBhMSwgYTIsIGEzLCBhNCwgYTUpLCB0cnVlO1xuICAgIH1cblxuICAgIGZvciAoaSA9IDEsIGFyZ3MgPSBuZXcgQXJyYXkobGVuIC0xKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICB9XG5cbiAgICBsaXN0ZW5lcnMuZm4uYXBwbHkobGlzdGVuZXJzLmNvbnRleHQsIGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBsZW5ndGggPSBsaXN0ZW5lcnMubGVuZ3RoXG4gICAgICAsIGo7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChsaXN0ZW5lcnNbaV0ub25jZSkgdGhpcy5yZW1vdmVMaXN0ZW5lcihldmVudCwgbGlzdGVuZXJzW2ldLmZuLCB1bmRlZmluZWQsIHRydWUpO1xuXG4gICAgICBzd2l0Y2ggKGxlbikge1xuICAgICAgICBjYXNlIDE6IGxpc3RlbmVyc1tpXS5mbi5jYWxsKGxpc3RlbmVyc1tpXS5jb250ZXh0KTsgYnJlYWs7XG4gICAgICAgIGNhc2UgMjogbGlzdGVuZXJzW2ldLmZuLmNhbGwobGlzdGVuZXJzW2ldLmNvbnRleHQsIGExKTsgYnJlYWs7XG4gICAgICAgIGNhc2UgMzogbGlzdGVuZXJzW2ldLmZuLmNhbGwobGlzdGVuZXJzW2ldLmNvbnRleHQsIGExLCBhMik7IGJyZWFrO1xuICAgICAgICBjYXNlIDQ6IGxpc3RlbmVyc1tpXS5mbi5jYWxsKGxpc3RlbmVyc1tpXS5jb250ZXh0LCBhMSwgYTIsIGEzKTsgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgaWYgKCFhcmdzKSBmb3IgKGogPSAxLCBhcmdzID0gbmV3IEFycmF5KGxlbiAtMSk7IGogPCBsZW47IGorKykge1xuICAgICAgICAgICAgYXJnc1tqIC0gMV0gPSBhcmd1bWVudHNbal07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGlzdGVuZXJzW2ldLmZuLmFwcGx5KGxpc3RlbmVyc1tpXS5jb250ZXh0LCBhcmdzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8qKlxuICogQWRkIGEgbGlzdGVuZXIgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8U3ltYm9sfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7TWl4ZWR9IFtjb250ZXh0PXRoaXNdIFRoZSBjb250ZXh0IHRvIGludm9rZSB0aGUgbGlzdGVuZXIgd2l0aC5cbiAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9IGB0aGlzYC5cbiAqIEBhcGkgcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBmdW5jdGlvbiBvbihldmVudCwgZm4sIGNvbnRleHQpIHtcbiAgdmFyIGxpc3RlbmVyID0gbmV3IEVFKGZuLCBjb250ZXh0IHx8IHRoaXMpXG4gICAgLCBldnQgPSBwcmVmaXggPyBwcmVmaXggKyBldmVudCA6IGV2ZW50O1xuXG4gIGlmICghdGhpcy5fZXZlbnRzW2V2dF0pIHRoaXMuX2V2ZW50c1tldnRdID0gbGlzdGVuZXIsIHRoaXMuX2V2ZW50c0NvdW50Kys7XG4gIGVsc2UgaWYgKCF0aGlzLl9ldmVudHNbZXZ0XS5mbikgdGhpcy5fZXZlbnRzW2V2dF0ucHVzaChsaXN0ZW5lcik7XG4gIGVsc2UgdGhpcy5fZXZlbnRzW2V2dF0gPSBbdGhpcy5fZXZlbnRzW2V2dF0sIGxpc3RlbmVyXTtcblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQWRkIGEgb25lLXRpbWUgbGlzdGVuZXIgZm9yIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8U3ltYm9sfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7TWl4ZWR9IFtjb250ZXh0PXRoaXNdIFRoZSBjb250ZXh0IHRvIGludm9rZSB0aGUgbGlzdGVuZXIgd2l0aC5cbiAqIEByZXR1cm5zIHtFdmVudEVtaXR0ZXJ9IGB0aGlzYC5cbiAqIEBhcGkgcHVibGljXG4gKi9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIG9uY2UoZXZlbnQsIGZuLCBjb250ZXh0KSB7XG4gIHZhciBsaXN0ZW5lciA9IG5ldyBFRShmbiwgY29udGV4dCB8fCB0aGlzLCB0cnVlKVxuICAgICwgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudDtcblxuICBpZiAoIXRoaXMuX2V2ZW50c1tldnRdKSB0aGlzLl9ldmVudHNbZXZ0XSA9IGxpc3RlbmVyLCB0aGlzLl9ldmVudHNDb3VudCsrO1xuICBlbHNlIGlmICghdGhpcy5fZXZlbnRzW2V2dF0uZm4pIHRoaXMuX2V2ZW50c1tldnRdLnB1c2gobGlzdGVuZXIpO1xuICBlbHNlIHRoaXMuX2V2ZW50c1tldnRdID0gW3RoaXMuX2V2ZW50c1tldnRdLCBsaXN0ZW5lcl07XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgbGlzdGVuZXJzIG9mIGEgZ2l2ZW4gZXZlbnQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd8U3ltYm9sfSBldmVudCBUaGUgZXZlbnQgbmFtZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIE9ubHkgcmVtb3ZlIHRoZSBsaXN0ZW5lcnMgdGhhdCBtYXRjaCB0aGlzIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtNaXhlZH0gY29udGV4dCBPbmx5IHJlbW92ZSB0aGUgbGlzdGVuZXJzIHRoYXQgaGF2ZSB0aGlzIGNvbnRleHQuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IG9uY2UgT25seSByZW1vdmUgb25lLXRpbWUgbGlzdGVuZXJzLlxuICogQHJldHVybnMge0V2ZW50RW1pdHRlcn0gYHRoaXNgLlxuICogQGFwaSBwdWJsaWNcbiAqL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKGV2ZW50LCBmbiwgY29udGV4dCwgb25jZSkge1xuICB2YXIgZXZ0ID0gcHJlZml4ID8gcHJlZml4ICsgZXZlbnQgOiBldmVudDtcblxuICBpZiAoIXRoaXMuX2V2ZW50c1tldnRdKSByZXR1cm4gdGhpcztcbiAgaWYgKCFmbikge1xuICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKSB0aGlzLl9ldmVudHMgPSBuZXcgRXZlbnRzKCk7XG4gICAgZWxzZSBkZWxldGUgdGhpcy5fZXZlbnRzW2V2dF07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fZXZlbnRzW2V2dF07XG5cbiAgaWYgKGxpc3RlbmVycy5mbikge1xuICAgIGlmIChcbiAgICAgICAgIGxpc3RlbmVycy5mbiA9PT0gZm5cbiAgICAgICYmICghb25jZSB8fCBsaXN0ZW5lcnMub25jZSlcbiAgICAgICYmICghY29udGV4dCB8fCBsaXN0ZW5lcnMuY29udGV4dCA9PT0gY29udGV4dClcbiAgICApIHtcbiAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKSB0aGlzLl9ldmVudHMgPSBuZXcgRXZlbnRzKCk7XG4gICAgICBlbHNlIGRlbGV0ZSB0aGlzLl9ldmVudHNbZXZ0XTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGV2ZW50cyA9IFtdLCBsZW5ndGggPSBsaXN0ZW5lcnMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChcbiAgICAgICAgICAgbGlzdGVuZXJzW2ldLmZuICE9PSBmblxuICAgICAgICB8fCAob25jZSAmJiAhbGlzdGVuZXJzW2ldLm9uY2UpXG4gICAgICAgIHx8IChjb250ZXh0ICYmIGxpc3RlbmVyc1tpXS5jb250ZXh0ICE9PSBjb250ZXh0KVxuICAgICAgKSB7XG4gICAgICAgIGV2ZW50cy5wdXNoKGxpc3RlbmVyc1tpXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy9cbiAgICAvLyBSZXNldCB0aGUgYXJyYXksIG9yIHJlbW92ZSBpdCBjb21wbGV0ZWx5IGlmIHdlIGhhdmUgbm8gbW9yZSBsaXN0ZW5lcnMuXG4gICAgLy9cbiAgICBpZiAoZXZlbnRzLmxlbmd0aCkgdGhpcy5fZXZlbnRzW2V2dF0gPSBldmVudHMubGVuZ3RoID09PSAxID8gZXZlbnRzWzBdIDogZXZlbnRzO1xuICAgIGVsc2UgaWYgKC0tdGhpcy5fZXZlbnRzQ291bnQgPT09IDApIHRoaXMuX2V2ZW50cyA9IG5ldyBFdmVudHMoKTtcbiAgICBlbHNlIGRlbGV0ZSB0aGlzLl9ldmVudHNbZXZ0XTtcbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgYWxsIGxpc3RlbmVycywgb3IgdGhvc2Ugb2YgdGhlIHNwZWNpZmllZCBldmVudC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ3xTeW1ib2x9IFtldmVudF0gVGhlIGV2ZW50IG5hbWUuXG4gKiBAcmV0dXJucyB7RXZlbnRFbWl0dGVyfSBgdGhpc2AuXG4gKiBAYXBpIHB1YmxpY1xuICovXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9IGZ1bmN0aW9uIHJlbW92ZUFsbExpc3RlbmVycyhldmVudCkge1xuICB2YXIgZXZ0O1xuXG4gIGlmIChldmVudCkge1xuICAgIGV2dCA9IHByZWZpeCA/IHByZWZpeCArIGV2ZW50IDogZXZlbnQ7XG4gICAgaWYgKHRoaXMuX2V2ZW50c1tldnRdKSB7XG4gICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMCkgdGhpcy5fZXZlbnRzID0gbmV3IEV2ZW50cygpO1xuICAgICAgZWxzZSBkZWxldGUgdGhpcy5fZXZlbnRzW2V2dF07XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRoaXMuX2V2ZW50cyA9IG5ldyBFdmVudHMoKTtcbiAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gIH1cblxuICByZXR1cm4gdGhpcztcbn07XG5cbi8vXG4vLyBBbGlhcyBtZXRob2RzIG5hbWVzIGJlY2F1c2UgcGVvcGxlIHJvbGwgbGlrZSB0aGF0LlxuLy9cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub2ZmID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lcjtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uO1xuXG4vL1xuLy8gVGhpcyBmdW5jdGlvbiBkb2Vzbid0IGFwcGx5IGFueW1vcmUuXG4vL1xuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5zZXRNYXhMaXN0ZW5lcnMgPSBmdW5jdGlvbiBzZXRNYXhMaXN0ZW5lcnMoKSB7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLy9cbi8vIEV4cG9zZSB0aGUgcHJlZml4LlxuLy9cbkV2ZW50RW1pdHRlci5wcmVmaXhlZCA9IHByZWZpeDtcblxuLy9cbi8vIEFsbG93IGBFdmVudEVtaXR0ZXJgIHRvIGJlIGltcG9ydGVkIGFzIG1vZHVsZSBuYW1lc3BhY2UuXG4vL1xuRXZlbnRFbWl0dGVyLkV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcblxuLy9cbi8vIEV4cG9zZSB0aGUgbW9kdWxlLlxuLy9cbmlmICgndW5kZWZpbmVkJyAhPT0gdHlwZW9mIG1vZHVsZSkge1xuICBtb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2V2ZW50ZW1pdHRlcjMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBjbGFzcyBWZWN0b3IzIHtcclxuICBwdWJsaWMgcmVhZG9ubHkgeDogbnVtYmVyO1xyXG4gIHB1YmxpYyByZWFkb25seSB5OiBudW1iZXI7XHJcbiAgcHVibGljIHJlYWRvbmx5IHo6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlcikge1xyXG4gICAgdGhpcy54ID0geDtcclxuICAgIHRoaXMueSA9IHk7XHJcbiAgICB0aGlzLnogPSB6O1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9jb21tb24vVmVjdG9yMy50cyIsImltcG9ydCB7IFZlY3RvcjMgfSBmcm9tICdjb21tb24vVmVjdG9yMyc7XHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlndXJhdGlvbiA9IHtcclxuICBiYWNrZ3JvdW5kVGV4dHVyZVVybDogJ2ltYWdlcy9iYWNrZ3JvdW5kcy9GdW5ueS1DYXQtRmFjZS5qcGcnLFxyXG4gIC8vIGJhY2tncm91bmRUZXh0dXJlVXJsOiAnaW1hZ2VzL2JhY2tncm91bmRzL2hxZGVmYXVsdC5qcGcnLFxyXG4gIG5vcm1hbE1hcFVybDogJ2ltYWdlcy9ub3JtYWwtbWFwcy9ub3JtYWxfbWFwLmpwZycsXHJcblxyXG4gIG1vdmluZ0xpZ2h0OiB7XHJcbiAgICBob3Jpem9udGFsTGFwVGltZTogMTAgKiAxMDAwLFxyXG4gICAgdmVydGljYWxMYXBUaW1lOiA4ICogMTAwMCxcclxuICAgIG1pblZlcnRpY2FsQW5nbGU6IDIwIC8gMTgwICogTWF0aC5QSSxcclxuICAgIG1heFZlcnRpY2FsQW5nbGU6IDcwIC8gMTgwICogTWF0aC5QSSxcclxuICAgIHRpY2tJbnRlcnZhbDogNTAsXHJcbiAgICBjZW50ZXI6IHtcclxuICAgICAgeDogMC41LFxyXG4gICAgICB5OiAwLjVcclxuICAgIH0sXHJcbiAgICByYWRpdXM6IDAuNFxyXG4gIH0sXHJcblxyXG4gIGtEOiAxLFxyXG4gIGtTOiAxLFxyXG4gIG06IDEwMCxcclxuICB2aWV3ZXJWZWN0b3I6IG5ldyBWZWN0b3IzKDAsIDAsIDEpXHJcbn07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2NvbmZpZ3VyYXRpb24udHMiLCJpbXBvcnQgeyBpbmplY3RhYmxlIH0gZnJvbSAnaW52ZXJzaWZ5JztcclxuaW1wb3J0IHsgU2hhZGVyTG9hZGVyIH0gZnJvbSAnc2VydmljZXMvU2hhZGVyTG9hZGVyJztcclxuXHJcbkBpbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNoYWRlclByb2dyYW1Jbml0aWFsaXplciB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0O1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgc2hhZGVyTG9hZGVyOiBTaGFkZXJMb2FkZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQsIHNoYWRlckxvYWRlcjogU2hhZGVyTG9hZGVyKSB7XHJcbiAgICB0aGlzLmdsID0gZ2w7XHJcbiAgICB0aGlzLnNoYWRlckxvYWRlciA9IHNoYWRlckxvYWRlcjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBpbml0U2hhZGVyUHJvZ3JhbShcclxuICAgIHZlcnRleFNoYWRlclNvdXJjZTogc3RyaW5nLFxyXG4gICAgZnJhZ21lbnRTaGFkZXJTb3VyY2U6IHN0cmluZ1xyXG4gICk6IFdlYkdMUHJvZ3JhbSB7XHJcbiAgICBjb25zdCBnbCA9IHRoaXMuZ2w7XHJcbiAgICBjb25zdCBzaGFkZXJQcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpO1xyXG5cclxuICAgIGlmICghc2hhZGVyUHJvZ3JhbSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBjcmVhdGUgV2ViR0wgcHJvZ3JhbScpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHsgZnJhZ21lbnRTaGFkZXIsIHZlcnRleFNoYWRlciB9ID0gdGhpcy5jcmVhdGVTaGFkZXJzKFxyXG4gICAgICB2ZXJ0ZXhTaGFkZXJTb3VyY2UsXHJcbiAgICAgIGZyYWdtZW50U2hhZGVyU291cmNlXHJcbiAgICApO1xyXG5cclxuICAgIGdsLmF0dGFjaFNoYWRlcihzaGFkZXJQcm9ncmFtLCB2ZXJ0ZXhTaGFkZXIpO1xyXG4gICAgZ2wuYXR0YWNoU2hhZGVyKHNoYWRlclByb2dyYW0sIGZyYWdtZW50U2hhZGVyKTtcclxuXHJcbiAgICBnbC5saW5rUHJvZ3JhbShzaGFkZXJQcm9ncmFtKTtcclxuXHJcbiAgICBpZiAoIWdsLmdldFByb2dyYW1QYXJhbWV0ZXIoc2hhZGVyUHJvZ3JhbSwgZ2wuTElOS19TVEFUVVMpKSB7XHJcbiAgICAgIGNvbnN0IHByb2dyYW1JbmZvTG9nID0gZ2wuZ2V0UHJvZ3JhbUluZm9Mb2coc2hhZGVyUHJvZ3JhbSk7XHJcbiAgICAgIGdsLmRlbGV0ZVByb2dyYW0oc2hhZGVyUHJvZ3JhbSk7XHJcbiAgICAgIGdsLmRlbGV0ZVNoYWRlcih2ZXJ0ZXhTaGFkZXIpO1xyXG4gICAgICBnbC5kZWxldGVTaGFkZXIoZnJhZ21lbnRTaGFkZXIpO1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBsaW5rIHByb2dyYW06ICR7cHJvZ3JhbUluZm9Mb2d9YCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHNoYWRlclByb2dyYW07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNyZWF0ZVNoYWRlcnMoXHJcbiAgICB2ZXJ0ZXhTaGFkZXJTb3VyY2U6IHN0cmluZyxcclxuICAgIGZyYWdtZW50U2hhZGVyU291cmNlOiBzdHJpbmdcclxuICApIHtcclxuICAgIGNvbnN0IGdsID0gdGhpcy5nbDtcclxuXHJcbiAgICBjb25zdCB2ZXJ0ZXhTaGFkZXIgPSB0aGlzLnNoYWRlckxvYWRlci5sb2FkU2hhZGVyKFxyXG4gICAgICBnbC5WRVJURVhfU0hBREVSLFxyXG4gICAgICB2ZXJ0ZXhTaGFkZXJTb3VyY2VcclxuICAgICk7XHJcbiAgICBjb25zdCBmcmFnbWVudFNoYWRlciA9IHRoaXMuc2hhZGVyTG9hZGVyLmxvYWRTaGFkZXIoXHJcbiAgICAgIGdsLkZSQUdNRU5UX1NIQURFUixcclxuICAgICAgZnJhZ21lbnRTaGFkZXJTb3VyY2VcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHsgdmVydGV4U2hhZGVyLCBmcmFnbWVudFNoYWRlciB9O1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9zZXJ2aWNlcy9TaGFkZXJQcm9ncmFtSW5pdGlhbGl6ZXIudHMiLCJpbXBvcnQgeyBpbmplY3RhYmxlIH0gZnJvbSAnaW52ZXJzaWZ5JztcclxuXHJcbkBpbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNoYWRlckxvYWRlciB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0O1xyXG5cclxuICBjb25zdHJ1Y3RvcihnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0KSB7XHJcbiAgICB0aGlzLmdsID0gZ2w7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9hZFNoYWRlcihzaGFkZXJUeXBlOiBudW1iZXIsIHNvdXJjZTogc3RyaW5nKTogV2ViR0xTaGFkZXIge1xyXG4gICAgY29uc3QgZ2wgPSB0aGlzLmdsO1xyXG4gICAgY29uc3Qgc2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKHNoYWRlclR5cGUpO1xyXG5cclxuICAgIGlmICghc2hhZGVyKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGNyZWF0ZSBzaGFkZXInKTtcclxuICAgIH1cclxuXHJcbiAgICBnbC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBzb3VyY2UpO1xyXG4gICAgZ2wuY29tcGlsZVNoYWRlcihzaGFkZXIpO1xyXG5cclxuICAgIGlmICghZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgZ2wuQ09NUElMRV9TVEFUVVMpKSB7XHJcbiAgICAgIGNvbnN0IHNoYWRlckluZm9Mb2cgPSBnbC5nZXRTaGFkZXJJbmZvTG9nKHNoYWRlcik7XHJcbiAgICAgIGdsLmRlbGV0ZVNoYWRlcihzaGFkZXIpO1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCBjb21waWxlIHNoYWRlcjogJHtzaGFkZXJJbmZvTG9nfWApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzaGFkZXI7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL3NlcnZpY2VzL1NoYWRlckxvYWRlci50cyIsImltcG9ydCB7IGluamVjdGFibGUgfSBmcm9tICdpbnZlcnNpZnknO1xyXG5cclxuQGluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVGV4dHVyZUxvYWRlciB7XHJcbiAgcHJpdmF0ZSBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0O1xyXG5cclxuICBjb25zdHJ1Y3RvcihnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0KSB7XHJcbiAgICB0aGlzLmdsID0gZ2w7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbG9hZFRleHR1cmUoaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGdsID0gdGhpcy5nbDtcclxuICAgIGNvbnN0IHRleHR1cmUgPSBnbC5jcmVhdGVUZXh0dXJlKCk7XHJcblxyXG4gICAgaWYgKCF0ZXh0dXJlKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGNyZWF0ZSB0ZXh0dXJlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgdGV4dHVyZSk7XHJcblxyXG4gICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgZ2wuQ0xBTVBfVE9fRURHRSk7XHJcbiAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9ULCBnbC5DTEFNUF9UT19FREdFKTtcclxuICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5MSU5FQVIpO1xyXG4gICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01BR19GSUxURVIsIGdsLk5FQVJFU1QpO1xyXG5cclxuICAgIGdsLnRleEltYWdlMkQoZ2wuVEVYVFVSRV8yRCwgMCwgZ2wuUkdCQSwgZ2wuUkdCQSwgZ2wuVU5TSUdORURfQllURSwgaW1hZ2UpO1xyXG5cclxuICAgIHJldHVybiB0ZXh0dXJlO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvdHNsaW50LWxvYWRlciEuL3NyYy9zZXJ2aWNlcy9UZXh0dXJlTG9hZGVyLnRzIiwiaW1wb3J0ICdpbmRleC5zY3NzJztcclxuaW1wb3J0ICdub3JtYWxpemUuY3NzJztcclxuXHJcbmltcG9ydCAnQHdlYmNvbXBvbmVudHMvd2ViY29tcG9uZW50c2pzL3dlYmNvbXBvbmVudHMtaGktc2QtY2UnO1xyXG5pbXBvcnQgJ3JlZmxlY3QtbWV0YWRhdGEnO1xyXG5cclxuaW1wb3J0IHsgQXBwbGljYXRpb24gfSBmcm9tICdBcHBsaWNhdGlvbic7XHJcbmltcG9ydCB7IGNvbnRhaW5lciB9IGZyb20gJ2ludmVyc2lmeS5jb25maWcnO1xyXG5cclxud2luZG93Lm9ubG9hZCA9IGJvb3RzdHJhcDtcclxuXHJcbmZ1bmN0aW9uIGJvb3RzdHJhcCgpIHtcclxuICBjb25zdCBjYW52YXNFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcGxpY2F0aW9uLWNhbnZhcycpO1xyXG4gIGlmICghY2FudmFzRWxlbWVudCkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FudmFzIHdpdGggaWQgJ2FwcGxpY2F0aW9uLWNhbnZhcycgbm90IGZvdW5kXCIpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY2FudmFzID0gPEhUTUxDYW52YXNFbGVtZW50PmNhbnZhc0VsZW1lbnQ7XHJcbiAgY29udGFpbmVyLmJpbmQ8SFRNTENhbnZhc0VsZW1lbnQ+KEhUTUxDYW52YXNFbGVtZW50KS50b0NvbnN0YW50VmFsdWUoY2FudmFzKTtcclxuXHJcbiAgY29uc3QgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wnKTtcclxuICBpZiAoIWdsKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1dlYkdMIGlzIG5vdCBzdXBwb3J0ZWQnKTtcclxuICB9XHJcblxyXG4gIGNvbnRhaW5lci5iaW5kPFdlYkdMUmVuZGVyaW5nQ29udGV4dD4oV2ViR0xSZW5kZXJpbmdDb250ZXh0KS50b0NvbnN0YW50VmFsdWUoZ2wpO1xyXG5cclxuICBjb250YWluZXIuZ2V0KEFwcGxpY2F0aW9uKS5pbml0KCk7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL3RzbGludC1sb2FkZXIhLi9zcmMvaW5kZXgudHMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9pbmRleC5zY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBQcmVwYXJlIGNzc1RyYW5zZm9ybWF0aW9uXG52YXIgdHJhbnNmb3JtO1xuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2luZGV4LnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vaW5kZXguc2Nzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvaW5kZXguc2Nzc1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCwgYm9keSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0OyB9XFxuXFxuLmFwcGxpY2F0aW9uIHtcXG4gIG1hcmdpbi1sZWZ0OiAyZW07IH1cXG5cXG4uY2FudmFzLXdyYXBwZXIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgYm9yZGVyOiBzb2xpZCAxcHggYmxhY2s7IH1cXG5cXG4jYXBwbGljYXRpb24tY2FudmFzIHtcXG4gIGRpc3BsYXk6IGJsb2NrOyB9XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vc3JjL2luZGV4LnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24oc2VsZWN0b3IpIHtcblx0XHRpZiAodHlwZW9mIG1lbW9bc2VsZWN0b3JdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBmbi5jYWxsKHRoaXMsIHNlbGVjdG9yKTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAoc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3NlbGVjdG9yXSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1tzZWxlY3Rvcl1cblx0fTtcbn0pKGZ1bmN0aW9uICh0YXJnZXQpIHtcblx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KVxufSk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50byArIFwiIFwiICsgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzc1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiKGZ1bmN0aW9uKCl7LypcblxuIENvcHlyaWdodCAoYykgMjAxNiBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbid1c2Ugc3RyaWN0Jzt2YXIgbixwPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJndpbmRvdz09PXRoaXM/dGhpczpcInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsJiZudWxsIT1nbG9iYWw/Z2xvYmFsOnRoaXMsYWE9XCJmdW5jdGlvblwiPT10eXBlb2YgT2JqZWN0LmRlZmluZVByb3BlcnRpZXM/T2JqZWN0LmRlZmluZVByb3BlcnR5OmZ1bmN0aW9uKGEsYixjKXthIT1BcnJheS5wcm90b3R5cGUmJmEhPU9iamVjdC5wcm90b3R5cGUmJihhW2JdPWMudmFsdWUpfTtmdW5jdGlvbiBiYSgpe2JhPWZ1bmN0aW9uKCl7fTtwLlN5bWJvbHx8KHAuU3ltYm9sPWRhKX12YXIgZGE9ZnVuY3Rpb24oKXt2YXIgYT0wO3JldHVybiBmdW5jdGlvbihiKXtyZXR1cm5cImpzY29tcF9zeW1ib2xfXCIrKGJ8fFwiXCIpK2ErK319KCk7XG5mdW5jdGlvbiBlYSgpe2JhKCk7dmFyIGE9cC5TeW1ib2wuaXRlcmF0b3I7YXx8KGE9cC5TeW1ib2wuaXRlcmF0b3I9cC5TeW1ib2woXCJpdGVyYXRvclwiKSk7XCJmdW5jdGlvblwiIT10eXBlb2YgQXJyYXkucHJvdG90eXBlW2FdJiZhYShBcnJheS5wcm90b3R5cGUsYSx7Y29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIGZhKHRoaXMpfX0pO2VhPWZ1bmN0aW9uKCl7fX1mdW5jdGlvbiBmYShhKXt2YXIgYj0wO3JldHVybiBoYShmdW5jdGlvbigpe3JldHVybiBiPGEubGVuZ3RoP3tkb25lOiExLHZhbHVlOmFbYisrXX06e2RvbmU6ITB9fSl9ZnVuY3Rpb24gaGEoYSl7ZWEoKTthPXtuZXh0OmF9O2FbcC5TeW1ib2wuaXRlcmF0b3JdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9O3JldHVybiBhfWZ1bmN0aW9uIGlhKGEpe2VhKCk7dmFyIGI9YVtTeW1ib2wuaXRlcmF0b3JdO3JldHVybiBiP2IuY2FsbChhKTpmYShhKX1cbmZ1bmN0aW9uIGphKGEpe2Zvcih2YXIgYixjPVtdOyEoYj1hLm5leHQoKSkuZG9uZTspYy5wdXNoKGIudmFsdWUpO3JldHVybiBjfVxuKGZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoYSxiKXtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2Ygd2luZG93LkN1c3RvbUV2ZW50KXJldHVybiBuZXcgQ3VzdG9tRXZlbnQoYSxiKTt2YXIgYz1kb2N1bWVudC5jcmVhdGVFdmVudChcIkN1c3RvbUV2ZW50XCIpO2MuaW5pdEN1c3RvbUV2ZW50KGEsISFiLmJ1YmJsZXMsISFiLmNhbmNlbGFibGUsYi5kZXRhaWwpO3JldHVybiBjfWZ1bmN0aW9uIGMoYSl7aWYobSlyZXR1cm4gYS5vd25lckRvY3VtZW50IT09ZG9jdW1lbnQ/YS5vd25lckRvY3VtZW50Om51bGw7dmFyIGI9YS5fX2ltcG9ydERvYztpZighYiYmYS5wYXJlbnROb2RlKXtiPWEucGFyZW50Tm9kZTtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYi5jbG9zZXN0KWI9Yi5jbG9zZXN0KFwibGlua1tyZWw9aW1wb3J0XVwiKTtlbHNlIGZvcig7IWcoYikmJihiPWIucGFyZW50Tm9kZSk7KTthLl9faW1wb3J0RG9jPWJ9cmV0dXJuIGJ9ZnVuY3Rpb24gZChhKXt2YXIgYj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibGlua1tyZWw9aW1wb3J0XTpub3QoW2ltcG9ydC1kZXBlbmRlbmN5XSlcIiksXG5jPWIubGVuZ3RoO2M/bChiLGZ1bmN0aW9uKGIpe3JldHVybiBoKGIsZnVuY3Rpb24oKXswPT09LS1jJiZhKCl9KX0pOmEoKX1mdW5jdGlvbiBlKGEpe2Z1bmN0aW9uIGIoKXtcImxvYWRpbmdcIiE9PWRvY3VtZW50LnJlYWR5U3RhdGUmJmRvY3VtZW50LmJvZHkmJihkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVhZHlzdGF0ZWNoYW5nZVwiLGIpLGEoKSl9ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5c3RhdGVjaGFuZ2VcIixiKTtiKCl9ZnVuY3Rpb24gZihhKXtlKGZ1bmN0aW9uKCl7cmV0dXJuIGQoZnVuY3Rpb24oKXtyZXR1cm4gYSYmYSgpfSl9KX1mdW5jdGlvbiBoKGEsYil7aWYoYS5fX2xvYWRlZCliJiZiKCk7ZWxzZSBpZihcInNjcmlwdFwiPT09YS5sb2NhbE5hbWUmJiFhLnNyY3x8XCJzdHlsZVwiPT09YS5sb2NhbE5hbWUmJiFhLmZpcnN0Q2hpbGQpYS5fX2xvYWRlZD0hMCxiJiZiKCk7ZWxzZXt2YXIgYz1mdW5jdGlvbihkKXthLnJlbW92ZUV2ZW50TGlzdGVuZXIoZC50eXBlLFxuYyk7YS5fX2xvYWRlZD0hMDtiJiZiKCl9O2EuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIixjKTtLYSYmXCJzdHlsZVwiPT09YS5sb2NhbE5hbWV8fGEuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsYyl9fWZ1bmN0aW9uIGcoYSl7cmV0dXJuIGEubm9kZVR5cGU9PT1Ob2RlLkVMRU1FTlRfTk9ERSYmXCJsaW5rXCI9PT1hLmxvY2FsTmFtZSYmXCJpbXBvcnRcIj09PWEucmVsfWZ1bmN0aW9uIGsoKXt2YXIgYT10aGlzO3RoaXMuYT17fTt0aGlzLmI9MDt0aGlzLmY9bmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24oYil7cmV0dXJuIGEuSWEoYil9KTt0aGlzLmYub2JzZXJ2ZShkb2N1bWVudC5oZWFkLHtjaGlsZExpc3Q6ITAsc3VidHJlZTohMH0pO3RoaXMuYyhkb2N1bWVudCl9ZnVuY3Rpb24gbChhLGIsYyl7dmFyIGQ9YT9hLmxlbmd0aDowLGU9Yz8tMToxO2ZvcihjPWM/ZC0xOjA7YzxkJiYwPD1jO2MrPWUpYihhW2NdLGMpfXZhciBtPVwiaW1wb3J0XCJpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKSxcbnE9bnVsbDshMT09PVwiY3VycmVudFNjcmlwdFwiaW4gZG9jdW1lbnQmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eShkb2N1bWVudCxcImN1cnJlbnRTY3JpcHRcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHF8fChcImNvbXBsZXRlXCIhPT1kb2N1bWVudC5yZWFkeVN0YXRlP2RvY3VtZW50LnNjcmlwdHNbZG9jdW1lbnQuc2NyaXB0cy5sZW5ndGgtMV06bnVsbCl9LGNvbmZpZ3VyYWJsZTohMH0pO3ZhciBFPS8odXJsXFwoKShbXildKikoXFwpKS9nLEo9LyhAaW1wb3J0W1xcc10rKD8hdXJsXFwoKSkoW147XSopKDspL2csTGQ9Lyg8bGlua1tePl0qKShyZWw9Wyd8XCJdP3N0eWxlc2hlZXRbJ3xcIl0/W14+XSo+KS9nLHo9e0NhOmZ1bmN0aW9uKGEsYil7YS5ocmVmJiZhLnNldEF0dHJpYnV0ZShcImhyZWZcIix6LlIoYS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLGIpKTthLnNyYyYmYS5zZXRBdHRyaWJ1dGUoXCJzcmNcIix6LlIoYS5nZXRBdHRyaWJ1dGUoXCJzcmNcIiksYikpO2lmKFwic3R5bGVcIj09PWEubG9jYWxOYW1lKXt2YXIgYz1cbnoubWEoYS50ZXh0Q29udGVudCxiLEUpO2EudGV4dENvbnRlbnQ9ei5tYShjLGIsSil9fSxtYTpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIGEucmVwbGFjZShjLGZ1bmN0aW9uKGEsYyxkLGUpe2E9ZC5yZXBsYWNlKC9bXCInXS9nLFwiXCIpO2ImJihhPXouUihhLGIpKTtyZXR1cm4gYytcIidcIithK1wiJ1wiK2V9KX0sUjpmdW5jdGlvbihhLGIpe2lmKHZvaWQgMD09PXouVil7ei5WPSExO3RyeXt2YXIgYz1uZXcgVVJMKFwiYlwiLFwiaHR0cDovL2FcIik7Yy5wYXRobmFtZT1cImMlMjBkXCI7ei5WPVwiaHR0cDovL2EvYyUyMGRcIj09PWMuaHJlZn1jYXRjaChBZil7fX1pZih6LlYpcmV0dXJuKG5ldyBVUkwoYSxiKSkuaHJlZjtjPXoudmE7Y3x8KGM9ZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KFwidGVtcFwiKSx6LnZhPWMsYy5lYT1jLmNyZWF0ZUVsZW1lbnQoXCJiYXNlXCIpLGMuaGVhZC5hcHBlbmRDaGlsZChjLmVhKSxjLmRhPWMuY3JlYXRlRWxlbWVudChcImFcIikpO2MuZWEuaHJlZj1cbmI7Yy5kYS5ocmVmPWE7cmV0dXJuIGMuZGEuaHJlZnx8YX19LExiPXthc3luYzohMCxsb2FkOmZ1bmN0aW9uKGEsYixjKXtpZihhKWlmKGEubWF0Y2goL15kYXRhOi8pKXthPWEuc3BsaXQoXCIsXCIpO3ZhciBkPWFbMV07ZD0tMTxhWzBdLmluZGV4T2YoXCI7YmFzZTY0XCIpP2F0b2IoZCk6ZGVjb2RlVVJJQ29tcG9uZW50KGQpO2IoZCl9ZWxzZXt2YXIgZT1uZXcgWE1MSHR0cFJlcXVlc3Q7ZS5vcGVuKFwiR0VUXCIsYSxMYi5hc3luYyk7ZS5vbmxvYWQ9ZnVuY3Rpb24oKXt2YXIgYT1lLnJlc3BvbnNlVVJMfHxlLmdldFJlc3BvbnNlSGVhZGVyKFwiTG9jYXRpb25cIik7YSYmMD09PWEuaW5kZXhPZihcIi9cIikmJihhPShsb2NhdGlvbi5vcmlnaW58fGxvY2F0aW9uLnByb3RvY29sK1wiLy9cIitsb2NhdGlvbi5ob3N0KSthKTt2YXIgZD1lLnJlc3BvbnNlfHxlLnJlc3BvbnNlVGV4dDszMDQ9PT1lLnN0YXR1c3x8MD09PWUuc3RhdHVzfHwyMDA8PWUuc3RhdHVzJiYzMDA+ZS5zdGF0dXM/YihkLGEpOmMoZCl9O1xuZS5zZW5kKCl9ZWxzZSBjKFwiZXJyb3I6IGhyZWYgbXVzdCBiZSBzcGVjaWZpZWRcIil9fSxLYT0vVHJpZGVudC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KXx8L0VkZ2VcXC9cXGQuL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtrLnByb3RvdHlwZS5jPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXM7YT1hLnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaW5rW3JlbD1pbXBvcnRdXCIpO2woYSxmdW5jdGlvbihhKXtyZXR1cm4gYi5GKGEpfSl9O2sucHJvdG90eXBlLkY9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcyxjPWEuaHJlZjtpZih2b2lkIDAhPT10aGlzLmFbY10pe3ZhciBkPXRoaXMuYVtjXTtkJiZkLl9fbG9hZGVkJiYoYS5pbXBvcnQ9ZCx0aGlzLmwoYSkpfWVsc2UgdGhpcy5iKyssdGhpcy5hW2NdPVwicGVuZGluZ1wiLExiLmxvYWQoYyxmdW5jdGlvbihhLGQpe2E9Yi5KYShhLGR8fGMpO2IuYVtjXT1hO2IuYi0tO2IuYyhhKTtiLmthKCl9LGZ1bmN0aW9uKCl7Yi5hW2NdPW51bGw7Yi5iLS07Yi5rYSgpfSl9O1xuay5wcm90b3R5cGUuSmE9ZnVuY3Rpb24oYSxiKXtpZighYSlyZXR1cm4gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO0thJiYoYT1hLnJlcGxhY2UoTGQsZnVuY3Rpb24oYSxiLGMpe3JldHVybi0xPT09YS5pbmRleE9mKFwidHlwZT1cIik/YitcIiB0eXBlPWltcG9ydC1kaXNhYmxlIFwiK2M6YX0pKTt2YXIgYz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGVtcGxhdGVcIik7Yy5pbm5lckhUTUw9YTtpZihjLmNvbnRlbnQpYT1jLmNvbnRlbnQ7ZWxzZSBmb3IoYT1kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7Yy5maXJzdENoaWxkOylhLmFwcGVuZENoaWxkKGMuZmlyc3RDaGlsZCk7aWYoYz1hLnF1ZXJ5U2VsZWN0b3IoXCJiYXNlXCIpKWI9ei5SKGMuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSxiKSxjLnJlbW92ZUF0dHJpYnV0ZShcImhyZWZcIik7Yz1hLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpbmtbcmVsPWltcG9ydF0sIGxpbmtbcmVsPXN0eWxlc2hlZXRdW2hyZWZdW3R5cGU9aW1wb3J0LWRpc2FibGVdLFxcbiAgICBzdHlsZTpub3QoW3R5cGVdKSwgbGlua1tyZWw9c3R5bGVzaGVldF1baHJlZl06bm90KFt0eXBlXSksXFxuICAgIHNjcmlwdDpub3QoW3R5cGVdKSwgc2NyaXB0W3R5cGU9XCJhcHBsaWNhdGlvbi9qYXZhc2NyaXB0XCJdLFxcbiAgICBzY3JpcHRbdHlwZT1cInRleHQvamF2YXNjcmlwdFwiXScpO1xudmFyIGQ9MDtsKGMsZnVuY3Rpb24oYSl7aChhKTt6LkNhKGEsYik7YS5zZXRBdHRyaWJ1dGUoXCJpbXBvcnQtZGVwZW5kZW5jeVwiLFwiXCIpO1wic2NyaXB0XCI9PT1hLmxvY2FsTmFtZSYmIWEuc3JjJiZhLnRleHRDb250ZW50JiYoYS5zZXRBdHRyaWJ1dGUoXCJzcmNcIixcImRhdGE6dGV4dC9qYXZhc2NyaXB0O2NoYXJzZXQ9dXRmLTgsXCIrZW5jb2RlVVJJQ29tcG9uZW50KGEudGV4dENvbnRlbnQrKFwiXFxuLy8jIHNvdXJjZVVSTD1cIitiKyhkP1wiLVwiK2Q6XCJcIikrXCIuanNcXG5cIikpKSxhLnRleHRDb250ZW50PVwiXCIsZCsrKX0pO3JldHVybiBhfTtrLnByb3RvdHlwZS5rYT1mdW5jdGlvbigpe3ZhciBhPXRoaXM7aWYoIXRoaXMuYil7dGhpcy5mLmRpc2Nvbm5lY3QoKTt0aGlzLmZsYXR0ZW4oZG9jdW1lbnQpO3ZhciBiPSExLGM9ITEsZD1mdW5jdGlvbigpe2MmJmImJihhLmMoZG9jdW1lbnQpLGEuYnx8KGEuZi5vYnNlcnZlKGRvY3VtZW50LmhlYWQse2NoaWxkTGlzdDohMCxzdWJ0cmVlOiEwfSksYS5IYSgpKSl9O1xudGhpcy5PYShmdW5jdGlvbigpe2M9ITA7ZCgpfSk7dGhpcy5LYShmdW5jdGlvbigpe2I9ITA7ZCgpfSl9fTtrLnByb3RvdHlwZS5mbGF0dGVuPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXM7YT1hLnF1ZXJ5U2VsZWN0b3JBbGwoXCJsaW5rW3JlbD1pbXBvcnRdXCIpO2woYSxmdW5jdGlvbihhKXt2YXIgYz1iLmFbYS5ocmVmXTsoYS5pbXBvcnQ9YykmJmMubm9kZVR5cGU9PT1Ob2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUmJihiLmFbYS5ocmVmXT1hLGEucmVhZHlTdGF0ZT1cImxvYWRpbmdcIixhLmltcG9ydD1hLGIuZmxhdHRlbihjKSxhLmFwcGVuZENoaWxkKGMpKX0pfTtrLnByb3RvdHlwZS5LYT1mdW5jdGlvbihhKXtmdW5jdGlvbiBiKGUpe2lmKGU8ZCl7dmFyIGY9Y1tlXSxnPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7Zi5yZW1vdmVBdHRyaWJ1dGUoXCJpbXBvcnQtZGVwZW5kZW5jeVwiKTtsKGYuYXR0cmlidXRlcyxmdW5jdGlvbihhKXtyZXR1cm4gZy5zZXRBdHRyaWJ1dGUoYS5uYW1lLFxuYS52YWx1ZSl9KTtxPWc7Zi5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChnLGYpO2goZyxmdW5jdGlvbigpe3E9bnVsbDtiKGUrMSl9KX1lbHNlIGEoKX12YXIgYz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwic2NyaXB0W2ltcG9ydC1kZXBlbmRlbmN5XVwiKSxkPWMubGVuZ3RoO2IoMCl9O2sucHJvdG90eXBlLk9hPWZ1bmN0aW9uKGEpe3ZhciBiPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzdHlsZVtpbXBvcnQtZGVwZW5kZW5jeV0sXFxuICAgIGxpbmtbcmVsPXN0eWxlc2hlZXRdW2ltcG9ydC1kZXBlbmRlbmN5XVwiKSxkPWIubGVuZ3RoO2lmKGQpe3ZhciBlPUthJiYhIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJsaW5rW3JlbD1zdHlsZXNoZWV0XVtocmVmXVt0eXBlPWltcG9ydC1kaXNhYmxlXVwiKTtsKGIsZnVuY3Rpb24oYil7aChiLGZ1bmN0aW9uKCl7Yi5yZW1vdmVBdHRyaWJ1dGUoXCJpbXBvcnQtZGVwZW5kZW5jeVwiKTswPT09LS1kJiZhKCl9KTtpZihlJiZiLnBhcmVudE5vZGUhPT1cbmRvY3VtZW50LmhlYWQpe3ZhciBmPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYi5sb2NhbE5hbWUpO2YuX19hcHBsaWVkRWxlbWVudD1iO2Yuc2V0QXR0cmlidXRlKFwidHlwZVwiLFwiaW1wb3J0LXBsYWNlaG9sZGVyXCIpO2IucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZixiLm5leHRTaWJsaW5nKTtmb3IoZj1jKGIpO2YmJmMoZik7KWY9YyhmKTtmLnBhcmVudE5vZGUhPT1kb2N1bWVudC5oZWFkJiYoZj1udWxsKTtkb2N1bWVudC5oZWFkLmluc2VydEJlZm9yZShiLGYpO2IucmVtb3ZlQXR0cmlidXRlKFwidHlwZVwiKX19KX1lbHNlIGEoKX07ay5wcm90b3R5cGUuSGE9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLGI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImxpbmtbcmVsPWltcG9ydF1cIik7bChiLGZ1bmN0aW9uKGIpe3JldHVybiBhLmwoYil9LCEwKX07ay5wcm90b3R5cGUubD1mdW5jdGlvbihhKXthLl9fbG9hZGVkfHwoYS5fX2xvYWRlZD0hMCxhLmltcG9ydCYmKGEuaW1wb3J0LnJlYWR5U3RhdGU9XG5cImNvbXBsZXRlXCIpLGEuZGlzcGF0Y2hFdmVudChiKGEuaW1wb3J0P1wibG9hZFwiOlwiZXJyb3JcIix7YnViYmxlczohMSxjYW5jZWxhYmxlOiExLGRldGFpbDp2b2lkIDB9KSkpfTtrLnByb3RvdHlwZS5JYT1mdW5jdGlvbihhKXt2YXIgYj10aGlzO2woYSxmdW5jdGlvbihhKXtyZXR1cm4gbChhLmFkZGVkTm9kZXMsZnVuY3Rpb24oYSl7YSYmYS5ub2RlVHlwZT09PU5vZGUuRUxFTUVOVF9OT0RFJiYoZyhhKT9iLkYoYSk6Yi5jKGEpKX0pfSl9O2lmKG0pe3ZhciBsYT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwibGlua1tyZWw9aW1wb3J0XVwiKTtsKGxhLGZ1bmN0aW9uKGEpe2EuaW1wb3J0JiZcImxvYWRpbmdcIj09PWEuaW1wb3J0LnJlYWR5U3RhdGV8fChhLl9fbG9hZGVkPSEwKX0pO2xhPWZ1bmN0aW9uKGEpe2E9YS50YXJnZXQ7ZyhhKSYmKGEuX19sb2FkZWQ9ITApfTtkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLGxhLCEwKTtkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIixcbmxhLCEwKX1lbHNle3ZhciBjYT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE5vZGUucHJvdG90eXBlLFwiYmFzZVVSSVwiKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoKCFjYXx8Y2EuY29uZmlndXJhYmxlP05vZGU6RWxlbWVudCkucHJvdG90eXBlLFwiYmFzZVVSSVwiLHtnZXQ6ZnVuY3Rpb24oKXt2YXIgYT1nKHRoaXMpP3RoaXM6Yyh0aGlzKTtyZXR1cm4gYT9hLmhyZWY6Y2EmJmNhLmdldD9jYS5nZXQuY2FsbCh0aGlzKTooZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJhc2VcIil8fHdpbmRvdy5sb2NhdGlvbikuaHJlZn0sY29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITB9KTtlKGZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBrfSl9ZihmdW5jdGlvbigpe3JldHVybiBkb2N1bWVudC5kaXNwYXRjaEV2ZW50KGIoXCJIVE1MSW1wb3J0c0xvYWRlZFwiLHtjYW5jZWxhYmxlOiEwLGJ1YmJsZXM6ITAsZGV0YWlsOnZvaWQgMH0pKX0pO2EudXNlTmF0aXZlPW07YS53aGVuUmVhZHk9ZjthLmltcG9ydEZvckVsZW1lbnQ9XG5jfSkod2luZG93LkhUTUxJbXBvcnRzPXdpbmRvdy5IVE1MSW1wb3J0c3x8e30pOy8qXG5cbkNvcHlyaWdodCAoYykgMjAxNiBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG52YXIgcj13aW5kb3cuU2hhZHlET018fHt9O3IuRWE9ISghRWxlbWVudC5wcm90b3R5cGUuYXR0YWNoU2hhZG93fHwhTm9kZS5wcm90b3R5cGUuZ2V0Um9vdE5vZGUpO3ZhciBrYT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE5vZGUucHJvdG90eXBlLFwiZmlyc3RDaGlsZFwiKTtyLkc9ISEoa2EmJmthLmNvbmZpZ3VyYWJsZSYma2EuZ2V0KTtyLmxhPXIuZm9yY2V8fCFyLkVhO2Z1bmN0aW9uIHQoYSl7cmV0dXJuIGEuX19zaGFkeSYmdm9pZCAwIT09YS5fX3NoYWR5LmZpcnN0Q2hpbGR9ZnVuY3Rpb24gdShhKXtyZXR1cm5cIlNoYWR5Um9vdFwiPT09YS5zYX1mdW5jdGlvbiBtYShhKXthPWEuZ2V0Um9vdE5vZGUoKTtpZih1KGEpKXJldHVybiBhfXZhciB2PUVsZW1lbnQucHJvdG90eXBlLG5hPXYubWF0Y2hlc3x8di5tYXRjaGVzU2VsZWN0b3J8fHYubW96TWF0Y2hlc1NlbGVjdG9yfHx2Lm1zTWF0Y2hlc1NlbGVjdG9yfHx2Lm9NYXRjaGVzU2VsZWN0b3J8fHYud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xuZnVuY3Rpb24gb2EoYSxiKXtpZihhJiZiKWZvcih2YXIgYz1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhiKSxkPTAsZTtkPGMubGVuZ3RoJiYoZT1jW2RdKTtkKyspe3ZhciBmPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYixlKTtmJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoYSxlLGYpfX1mdW5jdGlvbiBwYShhLGIpe2Zvcih2YXIgYz1bXSxkPTE7ZDxhcmd1bWVudHMubGVuZ3RoOysrZCljW2QtMV09YXJndW1lbnRzW2RdO2ZvcihkPTA7ZDxjLmxlbmd0aDtkKyspb2EoYSxjW2RdKTtyZXR1cm4gYX1mdW5jdGlvbiBxYShhLGIpe2Zvcih2YXIgYyBpbiBiKWFbY109YltjXX12YXIgcmE9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcIiksc2E9MCx0YT1bXTsobmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24oKXtmb3IoO3RhLmxlbmd0aDspdHJ5e3RhLnNoaWZ0KCkoKX1jYXRjaChhKXt0aHJvdyByYS50ZXh0Q29udGVudD1zYSsrLGE7fX0pKS5vYnNlcnZlKHJhLHtjaGFyYWN0ZXJEYXRhOiEwfSk7XG5mdW5jdGlvbiB1YShhKXt0YS5wdXNoKGEpO3JhLnRleHRDb250ZW50PXNhKyt9dmFyIHZhPSEhZG9jdW1lbnQuY29udGFpbnM7ZnVuY3Rpb24gd2EoYSxiKXtmb3IoO2I7KXtpZihiPT1hKXJldHVybiEwO2I9Yi5wYXJlbnROb2RlfXJldHVybiExfTt2YXIgeGE9W10seWE7ZnVuY3Rpb24gemEoYSl7eWF8fCh5YT0hMCx1YShBYSkpO3hhLnB1c2goYSl9ZnVuY3Rpb24gQWEoKXt5YT0hMTtmb3IodmFyIGE9ISF4YS5sZW5ndGg7eGEubGVuZ3RoOyl4YS5zaGlmdCgpKCk7cmV0dXJuIGF9QWEubGlzdD14YTtmdW5jdGlvbiBCYSgpe3RoaXMuYT0hMTt0aGlzLmFkZGVkTm9kZXM9W107dGhpcy5yZW1vdmVkTm9kZXM9W107dGhpcy5OPW5ldyBTZXR9ZnVuY3Rpb24gQ2EoYSl7YS5hfHwoYS5hPSEwLHVhKGZ1bmN0aW9uKCl7RGEoYSl9KSl9ZnVuY3Rpb24gRGEoYSl7aWYoYS5hKXthLmE9ITE7dmFyIGI9YS50YWtlUmVjb3JkcygpO2IubGVuZ3RoJiZhLk4uZm9yRWFjaChmdW5jdGlvbihhKXthKGIpfSl9fUJhLnByb3RvdHlwZS50YWtlUmVjb3Jkcz1mdW5jdGlvbigpe2lmKHRoaXMuYWRkZWROb2Rlcy5sZW5ndGh8fHRoaXMucmVtb3ZlZE5vZGVzLmxlbmd0aCl7dmFyIGE9W3thZGRlZE5vZGVzOnRoaXMuYWRkZWROb2RlcyxyZW1vdmVkTm9kZXM6dGhpcy5yZW1vdmVkTm9kZXN9XTt0aGlzLmFkZGVkTm9kZXM9W107dGhpcy5yZW1vdmVkTm9kZXM9W107cmV0dXJuIGF9cmV0dXJuW119O1xuZnVuY3Rpb24gRWEoYSxiKXthLl9fc2hhZHk9YS5fX3NoYWR5fHx7fTthLl9fc2hhZHkuSHx8KGEuX19zaGFkeS5IPW5ldyBCYSk7YS5fX3NoYWR5LkguTi5hZGQoYik7dmFyIGM9YS5fX3NoYWR5Lkg7cmV0dXJue3dhOmIsdzpjLHlhOmEsdGFrZVJlY29yZHM6ZnVuY3Rpb24oKXtyZXR1cm4gYy50YWtlUmVjb3JkcygpfX19ZnVuY3Rpb24gRmEoYSl7dmFyIGI9YSYmYS53O2ImJihiLk4uZGVsZXRlKGEud2EpLGIuTi5zaXplfHwoYS55YS5fX3NoYWR5Lkg9bnVsbCkpfVxuZnVuY3Rpb24gR2EoYSxiKXt2YXIgYz1iLmdldFJvb3ROb2RlKCk7cmV0dXJuIGEubWFwKGZ1bmN0aW9uKGEpe3ZhciBiPWM9PT1hLnRhcmdldC5nZXRSb290Tm9kZSgpO2lmKGImJmEuYWRkZWROb2Rlcyl7aWYoYj1BcnJheS5mcm9tKGEuYWRkZWROb2RlcykuZmlsdGVyKGZ1bmN0aW9uKGEpe3JldHVybiBjPT09YS5nZXRSb290Tm9kZSgpfSksYi5sZW5ndGgpcmV0dXJuIGE9T2JqZWN0LmNyZWF0ZShhKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoYSxcImFkZGVkTm9kZXNcIix7dmFsdWU6Yixjb25maWd1cmFibGU6ITB9KSxhfWVsc2UgaWYoYilyZXR1cm4gYX0pLmZpbHRlcihmdW5jdGlvbihhKXtyZXR1cm4gYX0pfTt2YXIgdz17fSxIYT1FbGVtZW50LnByb3RvdHlwZS5pbnNlcnRCZWZvcmUsSWE9RWxlbWVudC5wcm90b3R5cGUucmVtb3ZlQ2hpbGQsSmE9RWxlbWVudC5wcm90b3R5cGUuc2V0QXR0cmlidXRlLExhPUVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUF0dHJpYnV0ZSxNYT1FbGVtZW50LnByb3RvdHlwZS5jbG9uZU5vZGUsTmE9RG9jdW1lbnQucHJvdG90eXBlLmltcG9ydE5vZGUsT2E9RWxlbWVudC5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lcixQYT1FbGVtZW50LnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyLFFhPVdpbmRvdy5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lcixSYT1XaW5kb3cucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIsU2E9RWxlbWVudC5wcm90b3R5cGUuZGlzcGF0Y2hFdmVudCxUYT1FbGVtZW50LnByb3RvdHlwZS5xdWVyeVNlbGVjdG9yLFVhPUVsZW1lbnQucHJvdG90eXBlLnF1ZXJ5U2VsZWN0b3JBbGwsVmE9Tm9kZS5wcm90b3R5cGUuY29udGFpbnN8fFxuSFRNTEVsZW1lbnQucHJvdG90eXBlLmNvbnRhaW5zO3cuYXBwZW5kQ2hpbGQ9RWxlbWVudC5wcm90b3R5cGUuYXBwZW5kQ2hpbGQ7dy5pbnNlcnRCZWZvcmU9SGE7dy5yZW1vdmVDaGlsZD1JYTt3LnNldEF0dHJpYnV0ZT1KYTt3LnJlbW92ZUF0dHJpYnV0ZT1MYTt3LmNsb25lTm9kZT1NYTt3LmltcG9ydE5vZGU9TmE7dy5hZGRFdmVudExpc3RlbmVyPU9hO3cucmVtb3ZlRXZlbnRMaXN0ZW5lcj1QYTt3LlRhPVFhO3cuVWE9UmE7dy5kaXNwYXRjaEV2ZW50PVNhO3cucXVlcnlTZWxlY3Rvcj1UYTt3LnF1ZXJ5U2VsZWN0b3JBbGw9VWE7dy5jb250YWlucz1WYTt2YXIgV2E9L1smXFx1MDBBMFwiXS9nLFhhPS9bJlxcdTAwQTA8Pl0vZztmdW5jdGlvbiBZYShhKXtzd2l0Y2goYSl7Y2FzZSBcIiZcIjpyZXR1cm5cIiZhbXA7XCI7Y2FzZSBcIjxcIjpyZXR1cm5cIiZsdDtcIjtjYXNlIFwiPlwiOnJldHVyblwiJmd0O1wiO2Nhc2UgJ1wiJzpyZXR1cm5cIiZxdW90O1wiO2Nhc2UgXCJcXHUwMGEwXCI6cmV0dXJuXCImbmJzcDtcIn19ZnVuY3Rpb24gWmEoYSl7Zm9yKHZhciBiPXt9LGM9MDtjPGEubGVuZ3RoO2MrKyliW2FbY11dPSEwO3JldHVybiBifXZhciAkYT1aYShcImFyZWEgYmFzZSBiciBjb2wgY29tbWFuZCBlbWJlZCBociBpbWcgaW5wdXQga2V5Z2VuIGxpbmsgbWV0YSBwYXJhbSBzb3VyY2UgdHJhY2sgd2JyXCIuc3BsaXQoXCIgXCIpKSxhYj1aYShcInN0eWxlIHNjcmlwdCB4bXAgaWZyYW1lIG5vZW1iZWQgbm9mcmFtZXMgcGxhaW50ZXh0IG5vc2NyaXB0XCIuc3BsaXQoXCIgXCIpKTtcbmZ1bmN0aW9uIGJiKGEsYil7XCJ0ZW1wbGF0ZVwiPT09YS5sb2NhbE5hbWUmJihhPWEuY29udGVudCk7Zm9yKHZhciBjPVwiXCIsZD1iP2IoYSk6YS5jaGlsZE5vZGVzLGU9MCxmPWQubGVuZ3RoLGg7ZTxmJiYoaD1kW2VdKTtlKyspe2E6e3ZhciBnPWg7dmFyIGs9YTt2YXIgbD1iO3N3aXRjaChnLm5vZGVUeXBlKXtjYXNlIE5vZGUuRUxFTUVOVF9OT0RFOmZvcih2YXIgbT1nLmxvY2FsTmFtZSxxPVwiPFwiK20sRT1nLmF0dHJpYnV0ZXMsSj0wO2s9RVtKXTtKKyspcSs9XCIgXCIray5uYW1lKyc9XCInK2sudmFsdWUucmVwbGFjZShXYSxZYSkrJ1wiJztxKz1cIj5cIjtnPSRhW21dP3E6cStiYihnLGwpK1wiPC9cIittK1wiPlwiO2JyZWFrIGE7Y2FzZSBOb2RlLlRFWFRfTk9ERTpnPWcuZGF0YTtnPWsmJmFiW2subG9jYWxOYW1lXT9nOmcucmVwbGFjZShYYSxZYSk7YnJlYWsgYTtjYXNlIE5vZGUuQ09NTUVOVF9OT0RFOmc9XCJcXHgzYyEtLVwiK2cuZGF0YStcIi0tXFx4M2VcIjticmVhayBhO2RlZmF1bHQ6dGhyb3cgd2luZG93LmNvbnNvbGUuZXJyb3IoZyksXG5FcnJvcihcIm5vdCBpbXBsZW1lbnRlZFwiKTt9fWMrPWd9cmV0dXJuIGN9O3ZhciB4PXt9LHk9ZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihkb2N1bWVudCxOb2RlRmlsdGVyLlNIT1dfQUxMLG51bGwsITEpLEE9ZG9jdW1lbnQuY3JlYXRlVHJlZVdhbGtlcihkb2N1bWVudCxOb2RlRmlsdGVyLlNIT1dfRUxFTUVOVCxudWxsLCExKTtmdW5jdGlvbiBjYihhKXt2YXIgYj1bXTt5LmN1cnJlbnROb2RlPWE7Zm9yKGE9eS5maXJzdENoaWxkKCk7YTspYi5wdXNoKGEpLGE9eS5uZXh0U2libGluZygpO3JldHVybiBifXgucGFyZW50Tm9kZT1mdW5jdGlvbihhKXt5LmN1cnJlbnROb2RlPWE7cmV0dXJuIHkucGFyZW50Tm9kZSgpfTt4LmZpcnN0Q2hpbGQ9ZnVuY3Rpb24oYSl7eS5jdXJyZW50Tm9kZT1hO3JldHVybiB5LmZpcnN0Q2hpbGQoKX07eC5sYXN0Q2hpbGQ9ZnVuY3Rpb24oYSl7eS5jdXJyZW50Tm9kZT1hO3JldHVybiB5Lmxhc3RDaGlsZCgpfTt4LnByZXZpb3VzU2libGluZz1mdW5jdGlvbihhKXt5LmN1cnJlbnROb2RlPWE7cmV0dXJuIHkucHJldmlvdXNTaWJsaW5nKCl9O1xueC5uZXh0U2libGluZz1mdW5jdGlvbihhKXt5LmN1cnJlbnROb2RlPWE7cmV0dXJuIHkubmV4dFNpYmxpbmcoKX07eC5jaGlsZE5vZGVzPWNiO3gucGFyZW50RWxlbWVudD1mdW5jdGlvbihhKXtBLmN1cnJlbnROb2RlPWE7cmV0dXJuIEEucGFyZW50Tm9kZSgpfTt4LmZpcnN0RWxlbWVudENoaWxkPWZ1bmN0aW9uKGEpe0EuY3VycmVudE5vZGU9YTtyZXR1cm4gQS5maXJzdENoaWxkKCl9O3gubGFzdEVsZW1lbnRDaGlsZD1mdW5jdGlvbihhKXtBLmN1cnJlbnROb2RlPWE7cmV0dXJuIEEubGFzdENoaWxkKCl9O3gucHJldmlvdXNFbGVtZW50U2libGluZz1mdW5jdGlvbihhKXtBLmN1cnJlbnROb2RlPWE7cmV0dXJuIEEucHJldmlvdXNTaWJsaW5nKCl9O3gubmV4dEVsZW1lbnRTaWJsaW5nPWZ1bmN0aW9uKGEpe0EuY3VycmVudE5vZGU9YTtyZXR1cm4gQS5uZXh0U2libGluZygpfTtcbnguY2hpbGRyZW49ZnVuY3Rpb24oYSl7dmFyIGI9W107QS5jdXJyZW50Tm9kZT1hO2ZvcihhPUEuZmlyc3RDaGlsZCgpO2E7KWIucHVzaChhKSxhPUEubmV4dFNpYmxpbmcoKTtyZXR1cm4gYn07eC5pbm5lckhUTUw9ZnVuY3Rpb24oYSl7cmV0dXJuIGJiKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGNiKGEpfSl9O3gudGV4dENvbnRlbnQ9ZnVuY3Rpb24oYSl7c3dpdGNoKGEubm9kZVR5cGUpe2Nhc2UgTm9kZS5FTEVNRU5UX05PREU6Y2FzZSBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREU6YT1kb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKGEsTm9kZUZpbHRlci5TSE9XX1RFWFQsbnVsbCwhMSk7Zm9yKHZhciBiPVwiXCIsYztjPWEubmV4dE5vZGUoKTspYis9Yy5ub2RlVmFsdWU7cmV0dXJuIGI7ZGVmYXVsdDpyZXR1cm4gYS5ub2RlVmFsdWV9fTt2YXIgZGI9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihFbGVtZW50LnByb3RvdHlwZSxcImlubmVySFRNTFwiKXx8T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihIVE1MRWxlbWVudC5wcm90b3R5cGUsXCJpbm5lckhUTUxcIiksZWI9ZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50KFwiaW5lcnRcIikuY3JlYXRlRWxlbWVudChcImRpdlwiKSxmYj1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKERvY3VtZW50LnByb3RvdHlwZSxcImFjdGl2ZUVsZW1lbnRcIiksZ2I9e3BhcmVudEVsZW1lbnQ6e2dldDpmdW5jdGlvbigpe3ZhciBhPXRoaXMuX19zaGFkeSYmdGhpcy5fX3NoYWR5LnBhcmVudE5vZGU7YSYmYS5ub2RlVHlwZSE9PU5vZGUuRUxFTUVOVF9OT0RFJiYoYT1udWxsKTtyZXR1cm4gdm9pZCAwIT09YT9hOngucGFyZW50RWxlbWVudCh0aGlzKX0sY29uZmlndXJhYmxlOiEwfSxwYXJlbnROb2RlOntnZXQ6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLl9fc2hhZHkmJlxudGhpcy5fX3NoYWR5LnBhcmVudE5vZGU7cmV0dXJuIHZvaWQgMCE9PWE/YTp4LnBhcmVudE5vZGUodGhpcyl9LGNvbmZpZ3VyYWJsZTohMH0sbmV4dFNpYmxpbmc6e2dldDpmdW5jdGlvbigpe3ZhciBhPXRoaXMuX19zaGFkeSYmdGhpcy5fX3NoYWR5Lm5leHRTaWJsaW5nO3JldHVybiB2b2lkIDAhPT1hP2E6eC5uZXh0U2libGluZyh0aGlzKX0sY29uZmlndXJhYmxlOiEwfSxwcmV2aW91c1NpYmxpbmc6e2dldDpmdW5jdGlvbigpe3ZhciBhPXRoaXMuX19zaGFkeSYmdGhpcy5fX3NoYWR5LnByZXZpb3VzU2libGluZztyZXR1cm4gdm9pZCAwIT09YT9hOngucHJldmlvdXNTaWJsaW5nKHRoaXMpfSxjb25maWd1cmFibGU6ITB9LGNsYXNzTmFtZTp7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCJ9LHNldDpmdW5jdGlvbihhKXt0aGlzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsYSl9LGNvbmZpZ3VyYWJsZTohMH0sbmV4dEVsZW1lbnRTaWJsaW5nOntnZXQ6ZnVuY3Rpb24oKXtpZih0aGlzLl9fc2hhZHkmJlxudm9pZCAwIT09dGhpcy5fX3NoYWR5Lm5leHRTaWJsaW5nKXtmb3IodmFyIGE9dGhpcy5uZXh0U2libGluZzthJiZhLm5vZGVUeXBlIT09Tm9kZS5FTEVNRU5UX05PREU7KWE9YS5uZXh0U2libGluZztyZXR1cm4gYX1yZXR1cm4geC5uZXh0RWxlbWVudFNpYmxpbmcodGhpcyl9LGNvbmZpZ3VyYWJsZTohMH0scHJldmlvdXNFbGVtZW50U2libGluZzp7Z2V0OmZ1bmN0aW9uKCl7aWYodGhpcy5fX3NoYWR5JiZ2b2lkIDAhPT10aGlzLl9fc2hhZHkucHJldmlvdXNTaWJsaW5nKXtmb3IodmFyIGE9dGhpcy5wcmV2aW91c1NpYmxpbmc7YSYmYS5ub2RlVHlwZSE9PU5vZGUuRUxFTUVOVF9OT0RFOylhPWEucHJldmlvdXNTaWJsaW5nO3JldHVybiBhfXJldHVybiB4LnByZXZpb3VzRWxlbWVudFNpYmxpbmcodGhpcyl9LGNvbmZpZ3VyYWJsZTohMH19LGhiPXtjaGlsZE5vZGVzOntnZXQ6ZnVuY3Rpb24oKXtpZih0KHRoaXMpKXtpZighdGhpcy5fX3NoYWR5LmNoaWxkTm9kZXMpe3RoaXMuX19zaGFkeS5jaGlsZE5vZGVzPVxuW107Zm9yKHZhciBhPXRoaXMuZmlyc3RDaGlsZDthO2E9YS5uZXh0U2libGluZyl0aGlzLl9fc2hhZHkuY2hpbGROb2Rlcy5wdXNoKGEpfXZhciBiPXRoaXMuX19zaGFkeS5jaGlsZE5vZGVzfWVsc2UgYj14LmNoaWxkTm9kZXModGhpcyk7Yi5pdGVtPWZ1bmN0aW9uKGEpe3JldHVybiBiW2FdfTtyZXR1cm4gYn0sY29uZmlndXJhYmxlOiEwfSxjaGlsZEVsZW1lbnRDb3VudDp7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY2hpbGRyZW4ubGVuZ3RofSxjb25maWd1cmFibGU6ITB9LGZpcnN0Q2hpbGQ6e2dldDpmdW5jdGlvbigpe3ZhciBhPXRoaXMuX19zaGFkeSYmdGhpcy5fX3NoYWR5LmZpcnN0Q2hpbGQ7cmV0dXJuIHZvaWQgMCE9PWE/YTp4LmZpcnN0Q2hpbGQodGhpcyl9LGNvbmZpZ3VyYWJsZTohMH0sbGFzdENoaWxkOntnZXQ6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLl9fc2hhZHkmJnRoaXMuX19zaGFkeS5sYXN0Q2hpbGQ7cmV0dXJuIHZvaWQgMCE9PWE/YTp4Lmxhc3RDaGlsZCh0aGlzKX0sXG5jb25maWd1cmFibGU6ITB9LHRleHRDb250ZW50OntnZXQ6ZnVuY3Rpb24oKXtpZih0KHRoaXMpKXtmb3IodmFyIGE9W10sYj0wLGM9dGhpcy5jaGlsZE5vZGVzLGQ7ZD1jW2JdO2IrKylkLm5vZGVUeXBlIT09Tm9kZS5DT01NRU5UX05PREUmJmEucHVzaChkLnRleHRDb250ZW50KTtyZXR1cm4gYS5qb2luKFwiXCIpfXJldHVybiB4LnRleHRDb250ZW50KHRoaXMpfSxzZXQ6ZnVuY3Rpb24oYSl7c3dpdGNoKHRoaXMubm9kZVR5cGUpe2Nhc2UgTm9kZS5FTEVNRU5UX05PREU6Y2FzZSBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREU6Zm9yKDt0aGlzLmZpcnN0Q2hpbGQ7KXRoaXMucmVtb3ZlQ2hpbGQodGhpcy5maXJzdENoaWxkKTsoMDxhLmxlbmd0aHx8dGhpcy5ub2RlVHlwZT09PU5vZGUuRUxFTUVOVF9OT0RFKSYmdGhpcy5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShhKSk7YnJlYWs7ZGVmYXVsdDp0aGlzLm5vZGVWYWx1ZT1hfX0sY29uZmlndXJhYmxlOiEwfSxmaXJzdEVsZW1lbnRDaGlsZDp7Z2V0OmZ1bmN0aW9uKCl7aWYodGhpcy5fX3NoYWR5JiZcbnZvaWQgMCE9PXRoaXMuX19zaGFkeS5maXJzdENoaWxkKXtmb3IodmFyIGE9dGhpcy5maXJzdENoaWxkO2EmJmEubm9kZVR5cGUhPT1Ob2RlLkVMRU1FTlRfTk9ERTspYT1hLm5leHRTaWJsaW5nO3JldHVybiBhfXJldHVybiB4LmZpcnN0RWxlbWVudENoaWxkKHRoaXMpfSxjb25maWd1cmFibGU6ITB9LGxhc3RFbGVtZW50Q2hpbGQ6e2dldDpmdW5jdGlvbigpe2lmKHRoaXMuX19zaGFkeSYmdm9pZCAwIT09dGhpcy5fX3NoYWR5Lmxhc3RDaGlsZCl7Zm9yKHZhciBhPXRoaXMubGFzdENoaWxkO2EmJmEubm9kZVR5cGUhPT1Ob2RlLkVMRU1FTlRfTk9ERTspYT1hLnByZXZpb3VzU2libGluZztyZXR1cm4gYX1yZXR1cm4geC5sYXN0RWxlbWVudENoaWxkKHRoaXMpfSxjb25maWd1cmFibGU6ITB9LGNoaWxkcmVuOntnZXQ6ZnVuY3Rpb24oKXt2YXIgYTt0KHRoaXMpP2E9QXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKHRoaXMuY2hpbGROb2RlcyxmdW5jdGlvbihhKXtyZXR1cm4gYS5ub2RlVHlwZT09PVxuTm9kZS5FTEVNRU5UX05PREV9KTphPXguY2hpbGRyZW4odGhpcyk7YS5pdGVtPWZ1bmN0aW9uKGIpe3JldHVybiBhW2JdfTtyZXR1cm4gYX0sY29uZmlndXJhYmxlOiEwfSxpbm5lckhUTUw6e2dldDpmdW5jdGlvbigpe3ZhciBhPVwidGVtcGxhdGVcIj09PXRoaXMubG9jYWxOYW1lP3RoaXMuY29udGVudDp0aGlzO3JldHVybiB0KHRoaXMpP2JiKGEpOnguaW5uZXJIVE1MKGEpfSxzZXQ6ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPVwidGVtcGxhdGVcIj09PXRoaXMubG9jYWxOYW1lP3RoaXMuY29udGVudDp0aGlzO2IuZmlyc3RDaGlsZDspYi5yZW1vdmVDaGlsZChiLmZpcnN0Q2hpbGQpO2ZvcihkYiYmZGIuc2V0P2RiLnNldC5jYWxsKGViLGEpOmViLmlubmVySFRNTD1hO2ViLmZpcnN0Q2hpbGQ7KWIuYXBwZW5kQ2hpbGQoZWIuZmlyc3RDaGlsZCl9LGNvbmZpZ3VyYWJsZTohMH19LGliPXtzaGFkb3dSb290OntnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fX3NoYWR5JiZ0aGlzLl9fc2hhZHkuTWF8fFxubnVsbH0sY29uZmlndXJhYmxlOiEwfX0samI9e2FjdGl2ZUVsZW1lbnQ6e2dldDpmdW5jdGlvbigpe3ZhciBhPWZiJiZmYi5nZXQ/ZmIuZ2V0LmNhbGwoZG9jdW1lbnQpOnIuRz92b2lkIDA6ZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtpZihhJiZhLm5vZGVUeXBlKXt2YXIgYj0hIXUodGhpcyk7aWYodGhpcz09PWRvY3VtZW50fHxiJiZ0aGlzLmhvc3QhPT1hJiZ3LmNvbnRhaW5zLmNhbGwodGhpcy5ob3N0LGEpKXtmb3IoYj1tYShhKTtiJiZiIT09dGhpczspYT1iLmhvc3QsYj1tYShhKTthPXRoaXM9PT1kb2N1bWVudD9iP251bGw6YTpiPT09dGhpcz9hOm51bGx9ZWxzZSBhPW51bGx9ZWxzZSBhPW51bGw7cmV0dXJuIGF9LHNldDpmdW5jdGlvbigpe30sY29uZmlndXJhYmxlOiEwfX07XG5mdW5jdGlvbiBCKGEsYixjKXtmb3IodmFyIGQgaW4gYil7dmFyIGU9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihhLGQpO2UmJmUuY29uZmlndXJhYmxlfHwhZSYmYz9PYmplY3QuZGVmaW5lUHJvcGVydHkoYSxkLGJbZF0pOmMmJmNvbnNvbGUud2FybihcIkNvdWxkIG5vdCBkZWZpbmVcIixkLFwib25cIixhKX19ZnVuY3Rpb24gQyhhKXtCKGEsZ2IpO0IoYSxoYik7QihhLGpiKX12YXIga2I9ci5HP2Z1bmN0aW9uKCl7fTpmdW5jdGlvbihhKXthLl9fc2hhZHkmJmEuX19zaGFkeS50YXx8KGEuX19zaGFkeT1hLl9fc2hhZHl8fHt9LGEuX19zaGFkeS50YT0hMCxCKGEsZ2IsITApKX0sbGI9ci5HP2Z1bmN0aW9uKCl7fTpmdW5jdGlvbihhKXthLl9fc2hhZHkmJmEuX19zaGFkeS5yYXx8KGEuX19zaGFkeT1hLl9fc2hhZHl8fHt9LGEuX19zaGFkeS5yYT0hMCxCKGEsaGIsITApLEIoYSxpYiwhMCkpfTtmdW5jdGlvbiBtYihhLGIsYyl7a2IoYSk7Yz1jfHxudWxsO2EuX19zaGFkeT1hLl9fc2hhZHl8fHt9O2IuX19zaGFkeT1iLl9fc2hhZHl8fHt9O2MmJihjLl9fc2hhZHk9Yy5fX3NoYWR5fHx7fSk7YS5fX3NoYWR5LnByZXZpb3VzU2libGluZz1jP2MuX19zaGFkeS5wcmV2aW91c1NpYmxpbmc6Yi5sYXN0Q2hpbGQ7dmFyIGQ9YS5fX3NoYWR5LnByZXZpb3VzU2libGluZztkJiZkLl9fc2hhZHkmJihkLl9fc2hhZHkubmV4dFNpYmxpbmc9YSk7KGQ9YS5fX3NoYWR5Lm5leHRTaWJsaW5nPWMpJiZkLl9fc2hhZHkmJihkLl9fc2hhZHkucHJldmlvdXNTaWJsaW5nPWEpO2EuX19zaGFkeS5wYXJlbnROb2RlPWI7Yz9jPT09Yi5fX3NoYWR5LmZpcnN0Q2hpbGQmJihiLl9fc2hhZHkuZmlyc3RDaGlsZD1hKTooYi5fX3NoYWR5Lmxhc3RDaGlsZD1hLGIuX19zaGFkeS5maXJzdENoaWxkfHwoYi5fX3NoYWR5LmZpcnN0Q2hpbGQ9YSkpO2IuX19zaGFkeS5jaGlsZE5vZGVzPW51bGx9XG5mdW5jdGlvbiBuYihhKXtpZighYS5fX3NoYWR5fHx2b2lkIDA9PT1hLl9fc2hhZHkuZmlyc3RDaGlsZCl7YS5fX3NoYWR5PWEuX19zaGFkeXx8e307YS5fX3NoYWR5LmZpcnN0Q2hpbGQ9eC5maXJzdENoaWxkKGEpO2EuX19zaGFkeS5sYXN0Q2hpbGQ9eC5sYXN0Q2hpbGQoYSk7bGIoYSk7Zm9yKHZhciBiPWEuX19zaGFkeS5jaGlsZE5vZGVzPXguY2hpbGROb2RlcyhhKSxjPTAsZDtjPGIubGVuZ3RoJiYoZD1iW2NdKTtjKyspZC5fX3NoYWR5PWQuX19zaGFkeXx8e30sZC5fX3NoYWR5LnBhcmVudE5vZGU9YSxkLl9fc2hhZHkubmV4dFNpYmxpbmc9YltjKzFdfHxudWxsLGQuX19zaGFkeS5wcmV2aW91c1NpYmxpbmc9YltjLTFdfHxudWxsLGtiKGQpfX07ZnVuY3Rpb24gb2IoYSxiLGMpe2lmKGI9PT1hKXRocm93IEVycm9yKFwiRmFpbGVkIHRvIGV4ZWN1dGUgJ2FwcGVuZENoaWxkJyBvbiAnTm9kZSc6IFRoZSBuZXcgY2hpbGQgZWxlbWVudCBjb250YWlucyB0aGUgcGFyZW50LlwiKTtpZihjKXt2YXIgZD1jLl9fc2hhZHkmJmMuX19zaGFkeS5wYXJlbnROb2RlO2lmKHZvaWQgMCE9PWQmJmQhPT1hfHx2b2lkIDA9PT1kJiZ4LnBhcmVudE5vZGUoYykhPT1hKXRocm93IEVycm9yKFwiRmFpbGVkIHRvIGV4ZWN1dGUgJ2luc2VydEJlZm9yZScgb24gJ05vZGUnOiBUaGUgbm9kZSBiZWZvcmUgd2hpY2ggdGhlIG5ldyBub2RlIGlzIHRvIGJlIGluc2VydGVkIGlzIG5vdCBhIGNoaWxkIG9mIHRoaXMgbm9kZS5cIik7fWlmKGM9PT1iKXJldHVybiBiO2IucGFyZW50Tm9kZSYmcGIoYi5wYXJlbnROb2RlLGIpO2Q9bWEoYSk7dmFyIGU7aWYoZT1kKWE6e2lmKCFiLl9fbm9JbnNlcnRpb25Qb2ludCl7dmFyIGY7XCJzbG90XCI9PT1iLmxvY2FsTmFtZT9mPVtiXTpcbmIucXVlcnlTZWxlY3RvckFsbCYmKGY9Yi5xdWVyeVNlbGVjdG9yQWxsKFwic2xvdFwiKSk7aWYoZiYmZi5sZW5ndGgpe2U9ZjticmVhayBhfX1lPXZvaWQgMH0oZj1lKSYmZC5DLnB1c2guYXBwbHkoZC5DLFtdLmNvbmNhdChmIGluc3RhbmNlb2YgQXJyYXk/ZjpqYShpYShmKSkpKTtkJiYoXCJzbG90XCI9PT1hLmxvY2FsTmFtZXx8ZikmJkQoZCk7aWYodChhKSl7ZD1jO2xiKGEpO2EuX19zaGFkeT1hLl9fc2hhZHl8fHt9O3ZvaWQgMCE9PWEuX19zaGFkeS5maXJzdENoaWxkJiYoYS5fX3NoYWR5LmNoaWxkTm9kZXM9bnVsbCk7aWYoYi5ub2RlVHlwZT09PU5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSl7Zj1iLmNoaWxkTm9kZXM7Zm9yKGU9MDtlPGYubGVuZ3RoO2UrKyltYihmW2VdLGEsZCk7Yi5fX3NoYWR5PWIuX19zaGFkeXx8e307ZD12b2lkIDAhPT1iLl9fc2hhZHkuZmlyc3RDaGlsZD9udWxsOnZvaWQgMDtiLl9fc2hhZHkuZmlyc3RDaGlsZD1iLl9fc2hhZHkubGFzdENoaWxkPWQ7XG5iLl9fc2hhZHkuY2hpbGROb2Rlcz1kfWVsc2UgbWIoYixhLGQpO2lmKHFiKGEpKXtEKGEuX19zaGFkeS5yb290KTt2YXIgaD0hMH1lbHNlIGEuX19zaGFkeS5yb290JiYoaD0hMCl9aHx8KGg9dShhKT9hLmhvc3Q6YSxjPyhjPXJiKGMpLHcuaW5zZXJ0QmVmb3JlLmNhbGwoaCxiLGMpKTp3LmFwcGVuZENoaWxkLmNhbGwoaCxiKSk7c2IoYSxiKTtyZXR1cm4gYn1cbmZ1bmN0aW9uIHBiKGEsYil7aWYoYi5wYXJlbnROb2RlIT09YSl0aHJvdyBFcnJvcihcIlRoZSBub2RlIHRvIGJlIHJlbW92ZWQgaXMgbm90IGEgY2hpbGQgb2YgdGhpcyBub2RlOiBcIitiKTt2YXIgYz1tYShiKTtpZih0KGEpKXtiLl9fc2hhZHk9Yi5fX3NoYWR5fHx7fTthLl9fc2hhZHk9YS5fX3NoYWR5fHx7fTtiPT09YS5fX3NoYWR5LmZpcnN0Q2hpbGQmJihhLl9fc2hhZHkuZmlyc3RDaGlsZD1iLl9fc2hhZHkubmV4dFNpYmxpbmcpO2I9PT1hLl9fc2hhZHkubGFzdENoaWxkJiYoYS5fX3NoYWR5Lmxhc3RDaGlsZD1iLl9fc2hhZHkucHJldmlvdXNTaWJsaW5nKTt2YXIgZD1iLl9fc2hhZHkucHJldmlvdXNTaWJsaW5nLGU9Yi5fX3NoYWR5Lm5leHRTaWJsaW5nO2QmJihkLl9fc2hhZHk9ZC5fX3NoYWR5fHx7fSxkLl9fc2hhZHkubmV4dFNpYmxpbmc9ZSk7ZSYmKGUuX19zaGFkeT1lLl9fc2hhZHl8fHt9LGUuX19zaGFkeS5wcmV2aW91c1NpYmxpbmc9ZCk7Yi5fX3NoYWR5LnBhcmVudE5vZGU9XG5iLl9fc2hhZHkucHJldmlvdXNTaWJsaW5nPWIuX19zaGFkeS5uZXh0U2libGluZz12b2lkIDA7dm9pZCAwIT09YS5fX3NoYWR5LmNoaWxkTm9kZXMmJihhLl9fc2hhZHkuY2hpbGROb2Rlcz1udWxsKTtpZihxYihhKSl7RChhLl9fc2hhZHkucm9vdCk7dmFyIGY9ITB9fXRiKGIpO2lmKGMpeyhkPWEmJlwic2xvdFwiPT09YS5sb2NhbE5hbWUpJiYoZj0hMCk7dWIoYyk7ZT1jLmk7Zm9yKHZhciBoIGluIGUpZm9yKHZhciBnPWVbaF0saz0wO2s8Zy5sZW5ndGg7aysrKXt2YXIgbD1nW2tdO2lmKHdhKGIsbCkpe2cuc3BsaWNlKGssMSk7dmFyIG09Yy5tLmluZGV4T2YobCk7MDw9bSYmYy5tLnNwbGljZShtLDEpO2stLTtpZihtPWwuX19zaGFkeS5EKWZvcihsPTA7bDxtLmxlbmd0aDtsKyspe3ZhciBxPW1bbF0sRT14LnBhcmVudE5vZGUocSk7RSYmdy5yZW1vdmVDaGlsZC5jYWxsKEUscSl9bT0hMH19KG18fGQpJiZEKGMpfWZ8fChmPXUoYSk/YS5ob3N0OmEsKCFhLl9fc2hhZHkucm9vdCYmXCJzbG90XCIhPT1cbmIubG9jYWxOYW1lfHxmPT09eC5wYXJlbnROb2RlKGIpKSYmdy5yZW1vdmVDaGlsZC5jYWxsKGYsYikpO3NiKGEsbnVsbCxiKTtyZXR1cm4gYn1mdW5jdGlvbiB0YihhKXtpZihhLl9fc2hhZHkmJnZvaWQgMCE9PWEuX19zaGFkeS5jYSlmb3IodmFyIGI9YS5jaGlsZE5vZGVzLGM9MCxkPWIubGVuZ3RoLGU7YzxkJiYoZT1iW2NdKTtjKyspdGIoZSk7YS5fX3NoYWR5JiYoYS5fX3NoYWR5LmNhPXZvaWQgMCl9ZnVuY3Rpb24gcmIoYSl7dmFyIGI9YTthJiZcInNsb3RcIj09PWEubG9jYWxOYW1lJiYoYj0oYj1hLl9fc2hhZHkmJmEuX19zaGFkeS5EKSYmYi5sZW5ndGg/YlswXTpyYihhLm5leHRTaWJsaW5nKSk7cmV0dXJuIGJ9ZnVuY3Rpb24gcWIoYSl7cmV0dXJuKGE9YSYmYS5fX3NoYWR5JiZhLl9fc2hhZHkucm9vdCkmJnZiKGEpfVxuZnVuY3Rpb24gd2IoYSxiKXtpZihcInNsb3RcIj09PWIpYT1hLnBhcmVudE5vZGUscWIoYSkmJkQoYS5fX3NoYWR5LnJvb3QpO2Vsc2UgaWYoXCJzbG90XCI9PT1hLmxvY2FsTmFtZSYmXCJuYW1lXCI9PT1iJiYoYj1tYShhKSkpe3ZhciBjPWEudWEsZD14YihhKTtpZihkIT09Yyl7Yz1iLmlbY107dmFyIGU9Yy5pbmRleE9mKGEpOzA8PWUmJmMuc3BsaWNlKGUsMSk7Yz1iLmlbZF18fChiLmlbZF09W10pO2MucHVzaChhKTsxPGMubGVuZ3RoJiYoYi5pW2RdPXliKGMpKX1EKGIpfX1mdW5jdGlvbiBzYihhLGIsYyl7aWYoYT1hLl9fc2hhZHkmJmEuX19zaGFkeS5IKWImJmEuYWRkZWROb2Rlcy5wdXNoKGIpLGMmJmEucmVtb3ZlZE5vZGVzLnB1c2goYyksQ2EoYSl9XG5mdW5jdGlvbiB6YihhKXtpZihhJiZhLm5vZGVUeXBlKXthLl9fc2hhZHk9YS5fX3NoYWR5fHx7fTt2YXIgYj1hLl9fc2hhZHkuY2E7dm9pZCAwPT09YiYmKHUoYSk/Yj1hOmI9KGI9YS5wYXJlbnROb2RlKT96YihiKTphLHcuY29udGFpbnMuY2FsbChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsYSkmJihhLl9fc2hhZHkuY2E9YikpO3JldHVybiBifX1mdW5jdGlvbiBBYihhLGIsYyl7dmFyIGQ9W107QmIoYS5jaGlsZE5vZGVzLGIsYyxkKTtyZXR1cm4gZH1mdW5jdGlvbiBCYihhLGIsYyxkKXtmb3IodmFyIGU9MCxmPWEubGVuZ3RoLGg7ZTxmJiYoaD1hW2VdKTtlKyspe3ZhciBnO2lmKGc9aC5ub2RlVHlwZT09PU5vZGUuRUxFTUVOVF9OT0RFKXtnPWg7dmFyIGs9YixsPWMsbT1kLHE9ayhnKTtxJiZtLnB1c2goZyk7bCYmbChxKT9nPXE6KEJiKGcuY2hpbGROb2RlcyxrLGwsbSksZz12b2lkIDApfWlmKGcpYnJlYWt9fXZhciBDYj1udWxsO1xuZnVuY3Rpb24gRGIoYSxiLGMpe0NifHwoQ2I9d2luZG93LlNoYWR5Q1NTJiZ3aW5kb3cuU2hhZHlDU1MuU2NvcGluZ1NoaW0pO0NiJiZcImNsYXNzXCI9PT1iP0NiLnNldEVsZW1lbnRDbGFzcyhhLGMpOih3LnNldEF0dHJpYnV0ZS5jYWxsKGEsYixjKSx3YihhLGIpKX1mdW5jdGlvbiBFYihhLGIpe2lmKGEub3duZXJEb2N1bWVudCE9PWRvY3VtZW50KXJldHVybiB3LmltcG9ydE5vZGUuY2FsbChkb2N1bWVudCxhLGIpO3ZhciBjPXcuaW1wb3J0Tm9kZS5jYWxsKGRvY3VtZW50LGEsITEpO2lmKGIpe2E9YS5jaGlsZE5vZGVzO2I9MDtmb3IodmFyIGQ7YjxhLmxlbmd0aDtiKyspZD1FYihhW2JdLCEwKSxjLmFwcGVuZENoaWxkKGQpfXJldHVybiBjfTt2YXIgRmI9XCJfX2V2ZW50V3JhcHBlcnNcIitEYXRlLm5vdygpLEdiPXtibHVyOiEwLGZvY3VzOiEwLGZvY3VzaW46ITAsZm9jdXNvdXQ6ITAsY2xpY2s6ITAsZGJsY2xpY2s6ITAsbW91c2Vkb3duOiEwLG1vdXNlZW50ZXI6ITAsbW91c2VsZWF2ZTohMCxtb3VzZW1vdmU6ITAsbW91c2VvdXQ6ITAsbW91c2VvdmVyOiEwLG1vdXNldXA6ITAsd2hlZWw6ITAsYmVmb3JlaW5wdXQ6ITAsaW5wdXQ6ITAsa2V5ZG93bjohMCxrZXl1cDohMCxjb21wb3NpdGlvbnN0YXJ0OiEwLGNvbXBvc2l0aW9udXBkYXRlOiEwLGNvbXBvc2l0aW9uZW5kOiEwLHRvdWNoc3RhcnQ6ITAsdG91Y2hlbmQ6ITAsdG91Y2htb3ZlOiEwLHRvdWNoY2FuY2VsOiEwLHBvaW50ZXJvdmVyOiEwLHBvaW50ZXJlbnRlcjohMCxwb2ludGVyZG93bjohMCxwb2ludGVybW92ZTohMCxwb2ludGVydXA6ITAscG9pbnRlcmNhbmNlbDohMCxwb2ludGVyb3V0OiEwLHBvaW50ZXJsZWF2ZTohMCxnb3Rwb2ludGVyY2FwdHVyZTohMCxsb3N0cG9pbnRlcmNhcHR1cmU6ITAsXG5kcmFnc3RhcnQ6ITAsZHJhZzohMCxkcmFnZW50ZXI6ITAsZHJhZ2xlYXZlOiEwLGRyYWdvdmVyOiEwLGRyb3A6ITAsZHJhZ2VuZDohMCxET01BY3RpdmF0ZTohMCxET01Gb2N1c0luOiEwLERPTUZvY3VzT3V0OiEwLGtleXByZXNzOiEwfTtmdW5jdGlvbiBIYihhLGIpe3ZhciBjPVtdLGQ9YTtmb3IoYT1hPT09d2luZG93P3dpbmRvdzphLmdldFJvb3ROb2RlKCk7ZDspYy5wdXNoKGQpLGQ9ZC5hc3NpZ25lZFNsb3Q/ZC5hc3NpZ25lZFNsb3Q6ZC5ub2RlVHlwZT09PU5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSYmZC5ob3N0JiYoYnx8ZCE9PWEpP2QuaG9zdDpkLnBhcmVudE5vZGU7Y1tjLmxlbmd0aC0xXT09PWRvY3VtZW50JiZjLnB1c2god2luZG93KTtyZXR1cm4gY31cbmZ1bmN0aW9uIEliKGEsYil7aWYoIXUpcmV0dXJuIGE7YT1IYihhLCEwKTtmb3IodmFyIGM9MCxkLGUsZixoO2M8Yi5sZW5ndGg7YysrKWlmKGQ9YltjXSxmPWQ9PT13aW5kb3c/d2luZG93OmQuZ2V0Um9vdE5vZGUoKSxmIT09ZSYmKGg9YS5pbmRleE9mKGYpLGU9ZiksIXUoZil8fC0xPGgpcmV0dXJuIGR9XG52YXIgSmI9e2dldCBjb21wb3NlZCgpeyExIT09dGhpcy5pc1RydXN0ZWQmJnZvaWQgMD09PXRoaXMuUyYmKHRoaXMuUz1HYlt0aGlzLnR5cGVdKTtyZXR1cm4gdGhpcy5TfHwhMX0sY29tcG9zZWRQYXRoOmZ1bmN0aW9uKCl7dGhpcy5mYXx8KHRoaXMuZmE9SGIodGhpcy5fX3RhcmdldCx0aGlzLmNvbXBvc2VkKSk7cmV0dXJuIHRoaXMuZmF9LGdldCB0YXJnZXQoKXtyZXR1cm4gSWIodGhpcy5jdXJyZW50VGFyZ2V0LHRoaXMuY29tcG9zZWRQYXRoKCkpfSxnZXQgcmVsYXRlZFRhcmdldCgpe2lmKCF0aGlzLmdhKXJldHVybiBudWxsO3RoaXMuaGF8fCh0aGlzLmhhPUhiKHRoaXMuZ2EsITApKTtyZXR1cm4gSWIodGhpcy5jdXJyZW50VGFyZ2V0LHRoaXMuaGEpfSxzdG9wUHJvcGFnYXRpb246ZnVuY3Rpb24oKXtFdmVudC5wcm90b3R5cGUuc3RvcFByb3BhZ2F0aW9uLmNhbGwodGhpcyk7dGhpcy5UPSEwfSxzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb246ZnVuY3Rpb24oKXtFdmVudC5wcm90b3R5cGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uLmNhbGwodGhpcyk7XG50aGlzLlQ9dGhpcy5xYT0hMH19O2Z1bmN0aW9uIEtiKGEpe2Z1bmN0aW9uIGIoYixkKXtiPW5ldyBhKGIsZCk7Yi5TPWQmJiEhZC5jb21wb3NlZDtyZXR1cm4gYn1xYShiLGEpO2IucHJvdG90eXBlPWEucHJvdG90eXBlO3JldHVybiBifXZhciBNYj17Zm9jdXM6ITAsYmx1cjohMH07ZnVuY3Rpb24gTmIoYSxiLGMpe2lmKGM9Yi5fX2hhbmRsZXJzJiZiLl9faGFuZGxlcnNbYS50eXBlXSYmYi5fX2hhbmRsZXJzW2EudHlwZV1bY10pZm9yKHZhciBkPTAsZTsoZT1jW2RdKSYmYS50YXJnZXQhPT1hLnJlbGF0ZWRUYXJnZXQmJihlLmNhbGwoYixhKSwhYS5xYSk7ZCsrKTt9XG5mdW5jdGlvbiBPYihhKXt2YXIgYj1hLmNvbXBvc2VkUGF0aCgpO09iamVjdC5kZWZpbmVQcm9wZXJ0eShhLFwiY3VycmVudFRhcmdldFwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gZH0sY29uZmlndXJhYmxlOiEwfSk7Zm9yKHZhciBjPWIubGVuZ3RoLTE7MDw9YztjLS0pe3ZhciBkPWJbY107TmIoYSxkLFwiY2FwdHVyZVwiKTtpZihhLlQpcmV0dXJufU9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLFwiZXZlbnRQaGFzZVwiLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gRXZlbnQuQVRfVEFSR0VUfX0pO3ZhciBlO2ZvcihjPTA7YzxiLmxlbmd0aDtjKyspe2Q9YltjXTt2YXIgZj1kLl9fc2hhZHkmJmQuX19zaGFkeS5yb290O2lmKDA9PT1jfHxmJiZmPT09ZSlpZihOYihhLGQsXCJidWJibGVcIiksZCE9PXdpbmRvdyYmKGU9ZC5nZXRSb290Tm9kZSgpKSxhLlQpYnJlYWt9fVxuZnVuY3Rpb24gUGIoYSxiLGMsZCxlLGYpe2Zvcih2YXIgaD0wO2g8YS5sZW5ndGg7aCsrKXt2YXIgZz1hW2hdLGs9Zy50eXBlLGw9Zy5jYXB0dXJlLG09Zy5vbmNlLHE9Zy5wYXNzaXZlO2lmKGI9PT1nLm5vZGUmJmM9PT1rJiZkPT09bCYmZT09PW0mJmY9PT1xKXJldHVybiBofXJldHVybi0xfVxuZnVuY3Rpb24gUWIoYSxiLGMpe2lmKGIpe2lmKGMmJlwib2JqZWN0XCI9PT10eXBlb2YgYyl7dmFyIGQ9ISFjLmNhcHR1cmU7dmFyIGU9ISFjLm9uY2U7dmFyIGY9ISFjLnBhc3NpdmV9ZWxzZSBkPSEhYyxmPWU9ITE7dmFyIGg9YyYmYy5VfHx0aGlzLGc9YltGYl07aWYoZyl7aWYoLTE8UGIoZyxoLGEsZCxlLGYpKXJldHVybn1lbHNlIGJbRmJdPVtdO2c9ZnVuY3Rpb24oZCl7ZSYmdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKGEsYixjKTtkLl9fdGFyZ2V0fHxSYihkKTtpZihoIT09dGhpcyl7dmFyIGY9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihkLFwiY3VycmVudFRhcmdldFwiKTtPYmplY3QuZGVmaW5lUHJvcGVydHkoZCxcImN1cnJlbnRUYXJnZXRcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGh9LGNvbmZpZ3VyYWJsZTohMH0pfWlmKGQuY29tcG9zZWR8fC0xPGQuY29tcG9zZWRQYXRoKCkuaW5kZXhPZihoKSlpZihkLnRhcmdldD09PWQucmVsYXRlZFRhcmdldClkLmV2ZW50UGhhc2U9PT1cbkV2ZW50LkJVQkJMSU5HX1BIQVNFJiZkLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO2Vsc2UgaWYoZC5ldmVudFBoYXNlPT09RXZlbnQuQ0FQVFVSSU5HX1BIQVNFfHxkLmJ1YmJsZXN8fGQudGFyZ2V0PT09aCl7dmFyIGc9XCJvYmplY3RcIj09PXR5cGVvZiBiJiZiLmhhbmRsZUV2ZW50P2IuaGFuZGxlRXZlbnQoZCk6Yi5jYWxsKGgsZCk7aCE9PXRoaXMmJihmPyhPYmplY3QuZGVmaW5lUHJvcGVydHkoZCxcImN1cnJlbnRUYXJnZXRcIixmKSxmPW51bGwpOmRlbGV0ZSBkLmN1cnJlbnRUYXJnZXQpO3JldHVybiBnfX07YltGYl0ucHVzaCh7bm9kZTp0aGlzLHR5cGU6YSxjYXB0dXJlOmQsb25jZTplLHBhc3NpdmU6ZixWYTpnfSk7TWJbYV0/KHRoaXMuX19oYW5kbGVycz10aGlzLl9faGFuZGxlcnN8fHt9LHRoaXMuX19oYW5kbGVyc1thXT10aGlzLl9faGFuZGxlcnNbYV18fHtjYXB0dXJlOltdLGJ1YmJsZTpbXX0sdGhpcy5fX2hhbmRsZXJzW2FdW2Q/XCJjYXB0dXJlXCI6XCJidWJibGVcIl0ucHVzaChnKSk6XG4odGhpcyBpbnN0YW5jZW9mIFdpbmRvdz93LlRhOncuYWRkRXZlbnRMaXN0ZW5lcikuY2FsbCh0aGlzLGEsZyxjKX19XG5mdW5jdGlvbiBTYihhLGIsYyl7aWYoYil7aWYoYyYmXCJvYmplY3RcIj09PXR5cGVvZiBjKXt2YXIgZD0hIWMuY2FwdHVyZTt2YXIgZT0hIWMub25jZTt2YXIgZj0hIWMucGFzc2l2ZX1lbHNlIGQ9ISFjLGY9ZT0hMTt2YXIgaD1jJiZjLlV8fHRoaXMsZz12b2lkIDA7dmFyIGs9bnVsbDt0cnl7az1iW0ZiXX1jYXRjaChsKXt9ayYmKGU9UGIoayxoLGEsZCxlLGYpLC0xPGUmJihnPWsuc3BsaWNlKGUsMSlbMF0uVmEsay5sZW5ndGh8fChiW0ZiXT12b2lkIDApKSk7KHRoaXMgaW5zdGFuY2VvZiBXaW5kb3c/dy5VYTp3LnJlbW92ZUV2ZW50TGlzdGVuZXIpLmNhbGwodGhpcyxhLGd8fGIsYyk7ZyYmTWJbYV0mJnRoaXMuX19oYW5kbGVycyYmdGhpcy5fX2hhbmRsZXJzW2FdJiYoYT10aGlzLl9faGFuZGxlcnNbYV1bZD9cImNhcHR1cmVcIjpcImJ1YmJsZVwiXSxnPWEuaW5kZXhPZihnKSwtMTxnJiZhLnNwbGljZShnLDEpKX19XG5mdW5jdGlvbiBUYigpe2Zvcih2YXIgYSBpbiBNYil3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihhLGZ1bmN0aW9uKGEpe2EuX190YXJnZXR8fChSYihhKSxPYihhKSl9LCEwKX1mdW5jdGlvbiBSYihhKXthLl9fdGFyZ2V0PWEudGFyZ2V0O2EuZ2E9YS5yZWxhdGVkVGFyZ2V0O2lmKHIuRyl7dmFyIGI9T2JqZWN0LmdldFByb3RvdHlwZU9mKGEpO2lmKCFiLmhhc093blByb3BlcnR5KFwiX19wYXRjaFByb3RvXCIpKXt2YXIgYz1PYmplY3QuY3JlYXRlKGIpO2MuWGE9YjtvYShjLEpiKTtiLl9fcGF0Y2hQcm90bz1jfWEuX19wcm90b19fPWIuX19wYXRjaFByb3RvfWVsc2Ugb2EoYSxKYil9dmFyIFViPUtiKHdpbmRvdy5FdmVudCksVmI9S2Iod2luZG93LkN1c3RvbUV2ZW50KSxXYj1LYih3aW5kb3cuTW91c2VFdmVudCk7ZnVuY3Rpb24gWGIoYSxiKXtyZXR1cm57aW5kZXg6YSxJOltdLE06Yn19XG5mdW5jdGlvbiBZYihhLGIsYyxkKXt2YXIgZT0wLGY9MCxoPTAsZz0wLGs9TWF0aC5taW4oYi1lLGQtZik7aWYoMD09ZSYmMD09ZilhOntmb3IoaD0wO2g8aztoKyspaWYoYVtoXSE9PWNbaF0pYnJlYWsgYTtoPWt9aWYoYj09YS5sZW5ndGgmJmQ9PWMubGVuZ3RoKXtnPWEubGVuZ3RoO2Zvcih2YXIgbD1jLmxlbmd0aCxtPTA7bTxrLWgmJlpiKGFbLS1nXSxjWy0tbF0pOyltKys7Zz1tfWUrPWg7Zis9aDtiLT1nO2QtPWc7aWYoMD09Yi1lJiYwPT1kLWYpcmV0dXJuW107aWYoZT09Yil7Zm9yKGI9WGIoZSwwKTtmPGQ7KWIuSS5wdXNoKGNbZisrXSk7cmV0dXJuW2JdfWlmKGY9PWQpcmV0dXJuW1hiKGUsYi1lKV07az1lO2g9ZjtkPWQtaCsxO2c9Yi1rKzE7Yj1BcnJheShkKTtmb3IobD0wO2w8ZDtsKyspYltsXT1BcnJheShnKSxiW2xdWzBdPWw7Zm9yKGw9MDtsPGc7bCsrKWJbMF1bbF09bDtmb3IobD0xO2w8ZDtsKyspZm9yKG09MTttPGc7bSsrKWlmKGFbayttLTFdPT09Y1toK2wtMV0pYltsXVttXT1cbmJbbC0xXVttLTFdO2Vsc2V7dmFyIHE9YltsLTFdW21dKzEsRT1iW2xdW20tMV0rMTtiW2xdW21dPXE8RT9xOkV9az1iLmxlbmd0aC0xO2g9YlswXS5sZW5ndGgtMTtkPWJba11baF07Zm9yKGE9W107MDxrfHwwPGg7KTA9PWs/KGEucHVzaCgyKSxoLS0pOjA9PWg/KGEucHVzaCgzKSxrLS0pOihnPWJbay0xXVtoLTFdLGw9YltrLTFdW2hdLG09YltrXVtoLTFdLHE9bDxtP2w8Zz9sOmc6bTxnP206ZyxxPT1nPyhnPT1kP2EucHVzaCgwKTooYS5wdXNoKDEpLGQ9Zyksay0tLGgtLSk6cT09bD8oYS5wdXNoKDMpLGstLSxkPWwpOihhLnB1c2goMiksaC0tLGQ9bSkpO2EucmV2ZXJzZSgpO2I9dm9pZCAwO2s9W107Zm9yKGg9MDtoPGEubGVuZ3RoO2grKylzd2l0Y2goYVtoXSl7Y2FzZSAwOmImJihrLnB1c2goYiksYj12b2lkIDApO2UrKztmKys7YnJlYWs7Y2FzZSAxOmJ8fChiPVhiKGUsMCkpO2IuTSsrO2UrKztiLkkucHVzaChjW2ZdKTtmKys7YnJlYWs7Y2FzZSAyOmJ8fChiPVhiKGUsMCkpO1xuYi5NKys7ZSsrO2JyZWFrO2Nhc2UgMzpifHwoYj1YYihlLDApKSxiLkkucHVzaChjW2ZdKSxmKyt9YiYmay5wdXNoKGIpO3JldHVybiBrfWZ1bmN0aW9uIFpiKGEsYil7cmV0dXJuIGE9PT1ifTt2YXIgJGI9e307ZnVuY3Rpb24gRihhLGIsYyl7aWYoYSE9PSRiKXRocm93IG5ldyBUeXBlRXJyb3IoXCJJbGxlZ2FsIGNvbnN0cnVjdG9yXCIpO2E9ZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO2EuX19wcm90b19fPUYucHJvdG90eXBlO2Euc2E9XCJTaGFkeVJvb3RcIjtuYihiKTtuYihhKTthLmhvc3Q9YjthLmE9YyYmYy5tb2RlO2IuX19zaGFkeT1iLl9fc2hhZHl8fHt9O2IuX19zaGFkeS5yb290PWE7Yi5fX3NoYWR5Lk1hPVwiY2xvc2VkXCIhPT1hLmE/YTpudWxsO2EuTD0hMTthLm09W107YS5pPXt9O2EuQz1bXTtjPXguY2hpbGROb2RlcyhiKTtmb3IodmFyIGQ9MCxlPWMubGVuZ3RoO2Q8ZTtkKyspdy5yZW1vdmVDaGlsZC5jYWxsKGIsY1tkXSk7cmV0dXJuIGF9Ri5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShEb2N1bWVudEZyYWdtZW50LnByb3RvdHlwZSk7ZnVuY3Rpb24gRChhKXthLkx8fChhLkw9ITAsemEoZnVuY3Rpb24oKXtyZXR1cm4gYWMoYSl9KSl9XG5mdW5jdGlvbiBhYyhhKXtmb3IodmFyIGI7YTspe2EuTCYmKGI9YSk7YTp7dmFyIGM9YTthPWMuaG9zdC5nZXRSb290Tm9kZSgpO2lmKHUoYSkpZm9yKHZhciBkPWMuaG9zdC5jaGlsZE5vZGVzLGU9MDtlPGQubGVuZ3RoO2UrKylpZihjPWRbZV0sXCJzbG90XCI9PWMubG9jYWxOYW1lKWJyZWFrIGE7YT12b2lkIDB9fWImJmIuX3JlbmRlclJvb3QoKX1cbkYucHJvdG90eXBlLl9yZW5kZXJSb290PWZ1bmN0aW9uKCl7dGhpcy5MPSExO3ViKHRoaXMpO2Zvcih2YXIgYT0wLGI7YTx0aGlzLm0ubGVuZ3RoO2ErKyl7Yj10aGlzLm1bYV07dmFyIGM9Yi5fX3NoYWR5LmFzc2lnbmVkTm9kZXM7Yi5fX3NoYWR5LmFzc2lnbmVkTm9kZXM9W107Yi5fX3NoYWR5LkQ9W107aWYoYi5fX3NoYWR5LmlhPWMpZm9yKHZhciBkPTA7ZDxjLmxlbmd0aDtkKyspe3ZhciBlPWNbZF07ZS5fX3NoYWR5Llo9ZS5fX3NoYWR5LmFzc2lnbmVkU2xvdDtlLl9fc2hhZHkuYXNzaWduZWRTbG90PT09YiYmKGUuX19zaGFkeS5hc3NpZ25lZFNsb3Q9bnVsbCl9fWZvcihiPXRoaXMuaG9zdC5maXJzdENoaWxkO2I7Yj1iLm5leHRTaWJsaW5nKWJjKHRoaXMsYik7Zm9yKGE9MDthPHRoaXMubS5sZW5ndGg7YSsrKXtiPXRoaXMubVthXTtpZighYi5fX3NoYWR5LmFzc2lnbmVkTm9kZXMubGVuZ3RoKWZvcihjPWIuZmlyc3RDaGlsZDtjO2M9Yy5uZXh0U2libGluZyliYyh0aGlzLFxuYyxiKTtjPWIucGFyZW50Tm9kZTsoYz1jLl9fc2hhZHkmJmMuX19zaGFkeS5yb290KSYmdmIoYykmJmMuX3JlbmRlclJvb3QoKTtjYyh0aGlzLGIuX19zaGFkeS5ELGIuX19zaGFkeS5hc3NpZ25lZE5vZGVzKTtpZihjPWIuX19zaGFkeS5pYSl7Zm9yKGQ9MDtkPGMubGVuZ3RoO2QrKyljW2RdLl9fc2hhZHkuWj1udWxsO2IuX19zaGFkeS5pYT1udWxsO2MubGVuZ3RoPmIuX19zaGFkeS5hc3NpZ25lZE5vZGVzLmxlbmd0aCYmKGIuX19zaGFkeS5hYT0hMCl9Yi5fX3NoYWR5LmFhJiYoYi5fX3NoYWR5LmFhPSExLGRjKHRoaXMsYikpfWE9dGhpcy5tO2I9W107Zm9yKGM9MDtjPGEubGVuZ3RoO2MrKylkPWFbY10ucGFyZW50Tm9kZSxkLl9fc2hhZHkmJmQuX19zaGFkeS5yb290fHwhKDA+Yi5pbmRleE9mKGQpKXx8Yi5wdXNoKGQpO2ZvcihhPTA7YTxiLmxlbmd0aDthKyspe2M9YlthXTtkPWM9PT10aGlzP3RoaXMuaG9zdDpjO2U9W107Yz1jLmNoaWxkTm9kZXM7Zm9yKHZhciBmPTA7ZjxjLmxlbmd0aDtmKyspe3ZhciBoPVxuY1tmXTtpZihcInNsb3RcIj09aC5sb2NhbE5hbWUpe2g9aC5fX3NoYWR5LkQ7Zm9yKHZhciBnPTA7ZzxoLmxlbmd0aDtnKyspZS5wdXNoKGhbZ10pfWVsc2UgZS5wdXNoKGgpfWM9dm9pZCAwO2Y9eC5jaGlsZE5vZGVzKGQpO2g9WWIoZSxlLmxlbmd0aCxmLGYubGVuZ3RoKTtmb3IodmFyIGs9Zz0wO2c8aC5sZW5ndGgmJihjPWhbZ10pO2crKyl7Zm9yKHZhciBsPTAsbTtsPGMuSS5sZW5ndGgmJihtPWMuSVtsXSk7bCsrKXgucGFyZW50Tm9kZShtKT09PWQmJncucmVtb3ZlQ2hpbGQuY2FsbChkLG0pLGYuc3BsaWNlKGMuaW5kZXgraywxKTtrLT1jLk19Zm9yKGs9MDtrPGgubGVuZ3RoJiYoYz1oW2tdKTtrKyspZm9yKGc9ZltjLmluZGV4XSxsPWMuaW5kZXg7bDxjLmluZGV4K2MuTTtsKyspbT1lW2xdLHcuaW5zZXJ0QmVmb3JlLmNhbGwoZCxtLGcpLGYuc3BsaWNlKGwsMCxtKX19O1xuZnVuY3Rpb24gYmMoYSxiLGMpe2IuX19zaGFkeT1iLl9fc2hhZHl8fHt9O3ZhciBkPWIuX19zaGFkeS5aO2IuX19zaGFkeS5aPW51bGw7Y3x8KGM9KGE9YS5pW2Iuc2xvdHx8XCJfX2NhdGNoYWxsXCJdKSYmYVswXSk7Yz8oYy5fX3NoYWR5LmFzc2lnbmVkTm9kZXMucHVzaChiKSxiLl9fc2hhZHkuYXNzaWduZWRTbG90PWMpOmIuX19zaGFkeS5hc3NpZ25lZFNsb3Q9dm9pZCAwO2QhPT1iLl9fc2hhZHkuYXNzaWduZWRTbG90JiZiLl9fc2hhZHkuYXNzaWduZWRTbG90JiYoYi5fX3NoYWR5LmFzc2lnbmVkU2xvdC5fX3NoYWR5LmFhPSEwKX1mdW5jdGlvbiBjYyhhLGIsYyl7Zm9yKHZhciBkPTAsZTtkPGMubGVuZ3RoJiYoZT1jW2RdKTtkKyspaWYoXCJzbG90XCI9PWUubG9jYWxOYW1lKXt2YXIgZj1lLl9fc2hhZHkuYXNzaWduZWROb2RlcztmJiZmLmxlbmd0aCYmY2MoYSxiLGYpfWVsc2UgYi5wdXNoKGNbZF0pfVxuZnVuY3Rpb24gZGMoYSxiKXt3LmRpc3BhdGNoRXZlbnQuY2FsbChiLG5ldyBFdmVudChcInNsb3RjaGFuZ2VcIikpO2IuX19zaGFkeS5hc3NpZ25lZFNsb3QmJmRjKGEsYi5fX3NoYWR5LmFzc2lnbmVkU2xvdCl9ZnVuY3Rpb24gdWIoYSl7aWYoYS5DLmxlbmd0aCl7Zm9yKHZhciBiPWEuQyxjLGQ9MDtkPGIubGVuZ3RoO2QrKyl7dmFyIGU9YltkXTtlLl9fc2hhZHk9ZS5fX3NoYWR5fHx7fTtuYihlKTtuYihlLnBhcmVudE5vZGUpO3ZhciBmPXhiKGUpO2EuaVtmXT8oYz1jfHx7fSxjW2ZdPSEwLGEuaVtmXS5wdXNoKGUpKTphLmlbZl09W2VdO2EubS5wdXNoKGUpfWlmKGMpZm9yKHZhciBoIGluIGMpYS5pW2hdPXliKGEuaVtoXSk7YS5DPVtdfX1mdW5jdGlvbiB4YihhKXt2YXIgYj1hLm5hbWV8fGEuZ2V0QXR0cmlidXRlKFwibmFtZVwiKXx8XCJfX2NhdGNoYWxsXCI7cmV0dXJuIGEudWE9Yn1cbmZ1bmN0aW9uIHliKGEpe3JldHVybiBhLnNvcnQoZnVuY3Rpb24oYSxjKXthPWVjKGEpO2Zvcih2YXIgYj1lYyhjKSxlPTA7ZTxhLmxlbmd0aDtlKyspe2M9YVtlXTt2YXIgZj1iW2VdO2lmKGMhPT1mKXJldHVybiBhPUFycmF5LmZyb20oYy5wYXJlbnROb2RlLmNoaWxkTm9kZXMpLGEuaW5kZXhPZihjKS1hLmluZGV4T2YoZil9fSl9ZnVuY3Rpb24gZWMoYSl7dmFyIGI9W107ZG8gYi51bnNoaWZ0KGEpO3doaWxlKGE9YS5wYXJlbnROb2RlKTtyZXR1cm4gYn1mdW5jdGlvbiB2YihhKXt1YihhKTtyZXR1cm4hIWEubS5sZW5ndGh9Ri5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lcj1mdW5jdGlvbihhLGIsYyl7XCJvYmplY3RcIiE9PXR5cGVvZiBjJiYoYz17Y2FwdHVyZTohIWN9KTtjLlU9dGhpczt0aGlzLmhvc3QuYWRkRXZlbnRMaXN0ZW5lcihhLGIsYyl9O1xuRi5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lcj1mdW5jdGlvbihhLGIsYyl7XCJvYmplY3RcIiE9PXR5cGVvZiBjJiYoYz17Y2FwdHVyZTohIWN9KTtjLlU9dGhpczt0aGlzLmhvc3QucmVtb3ZlRXZlbnRMaXN0ZW5lcihhLGIsYyl9O0YucHJvdG90eXBlLmdldEVsZW1lbnRCeUlkPWZ1bmN0aW9uKGEpe3JldHVybiBBYih0aGlzLGZ1bmN0aW9uKGIpe3JldHVybiBiLmlkPT1hfSxmdW5jdGlvbihhKXtyZXR1cm4hIWF9KVswXXx8bnVsbH07dmFyIGZjPUYucHJvdG90eXBlO0IoZmMsaGIsITApO0IoZmMsamIsITApO2Z1bmN0aW9uIGdjKGEpe3ZhciBiPWEuZ2V0Um9vdE5vZGUoKTt1KGIpJiZhYyhiKTtyZXR1cm4gYS5fX3NoYWR5JiZhLl9fc2hhZHkuYXNzaWduZWRTbG90fHxudWxsfVxudmFyIGhjPXthZGRFdmVudExpc3RlbmVyOlFiLmJpbmQod2luZG93KSxyZW1vdmVFdmVudExpc3RlbmVyOlNiLmJpbmQod2luZG93KX0saWM9e2FkZEV2ZW50TGlzdGVuZXI6UWIscmVtb3ZlRXZlbnRMaXN0ZW5lcjpTYixhcHBlbmRDaGlsZDpmdW5jdGlvbihhKXtyZXR1cm4gb2IodGhpcyxhKX0saW5zZXJ0QmVmb3JlOmZ1bmN0aW9uKGEsYil7cmV0dXJuIG9iKHRoaXMsYSxiKX0scmVtb3ZlQ2hpbGQ6ZnVuY3Rpb24oYSl7cmV0dXJuIHBiKHRoaXMsYSl9LHJlcGxhY2VDaGlsZDpmdW5jdGlvbihhLGIpe29iKHRoaXMsYSxiKTtwYih0aGlzLGIpO3JldHVybiBhfSxjbG9uZU5vZGU6ZnVuY3Rpb24oYSl7aWYoXCJ0ZW1wbGF0ZVwiPT10aGlzLmxvY2FsTmFtZSl2YXIgYj13LmNsb25lTm9kZS5jYWxsKHRoaXMsYSk7ZWxzZSBpZihiPXcuY2xvbmVOb2RlLmNhbGwodGhpcywhMSksYSl7YT10aGlzLmNoaWxkTm9kZXM7Zm9yKHZhciBjPTAsZDtjPGEubGVuZ3RoO2MrKylkPWFbY10uY2xvbmVOb2RlKCEwKSxcbmIuYXBwZW5kQ2hpbGQoZCl9cmV0dXJuIGJ9LGdldFJvb3ROb2RlOmZ1bmN0aW9uKCl7cmV0dXJuIHpiKHRoaXMpfSxjb250YWluczpmdW5jdGlvbihhKXtyZXR1cm4gd2EodGhpcyxhKX0sZ2V0IGlzQ29ubmVjdGVkKCl7dmFyIGE9dGhpcy5vd25lckRvY3VtZW50O2lmKHZhJiZ3LmNvbnRhaW5zLmNhbGwoYSx0aGlzKXx8YS5kb2N1bWVudEVsZW1lbnQmJncuY29udGFpbnMuY2FsbChhLmRvY3VtZW50RWxlbWVudCx0aGlzKSlyZXR1cm4hMDtmb3IoYT10aGlzO2EmJiEoYSBpbnN0YW5jZW9mIERvY3VtZW50KTspYT1hLnBhcmVudE5vZGV8fChhIGluc3RhbmNlb2YgRj9hLmhvc3Q6dm9pZCAwKTtyZXR1cm4hIShhJiZhIGluc3RhbmNlb2YgRG9jdW1lbnQpfSxkaXNwYXRjaEV2ZW50OmZ1bmN0aW9uKGEpe0FhKCk7cmV0dXJuIHcuZGlzcGF0Y2hFdmVudC5jYWxsKHRoaXMsYSl9fSxqYz17Z2V0IGFzc2lnbmVkU2xvdCgpe3JldHVybiBnYyh0aGlzKX19LGtjPXtxdWVyeVNlbGVjdG9yOmZ1bmN0aW9uKGEpe3JldHVybiBBYih0aGlzLFxuZnVuY3Rpb24oYil7cmV0dXJuIG5hLmNhbGwoYixhKX0sZnVuY3Rpb24oYSl7cmV0dXJuISFhfSlbMF18fG51bGx9LHF1ZXJ5U2VsZWN0b3JBbGw6ZnVuY3Rpb24oYSl7cmV0dXJuIEFiKHRoaXMsZnVuY3Rpb24oYil7cmV0dXJuIG5hLmNhbGwoYixhKX0pfX0sbGM9e2Fzc2lnbmVkTm9kZXM6ZnVuY3Rpb24oYSl7aWYoXCJzbG90XCI9PT10aGlzLmxvY2FsTmFtZSl7dmFyIGI9dGhpcy5nZXRSb290Tm9kZSgpO3UoYikmJmFjKGIpO3JldHVybiB0aGlzLl9fc2hhZHk/KGEmJmEuZmxhdHRlbj90aGlzLl9fc2hhZHkuRDp0aGlzLl9fc2hhZHkuYXNzaWduZWROb2Rlcyl8fFtdOltdfX19LG1jPXBhKHtzZXRBdHRyaWJ1dGU6ZnVuY3Rpb24oYSxiKXtEYih0aGlzLGEsYil9LHJlbW92ZUF0dHJpYnV0ZTpmdW5jdGlvbihhKXt3LnJlbW92ZUF0dHJpYnV0ZS5jYWxsKHRoaXMsYSk7d2IodGhpcyxhKX0sYXR0YWNoU2hhZG93OmZ1bmN0aW9uKGEpe2lmKCF0aGlzKXRocm93XCJNdXN0IHByb3ZpZGUgYSBob3N0LlwiO1xuaWYoIWEpdGhyb3dcIk5vdCBlbm91Z2ggYXJndW1lbnRzLlwiO3JldHVybiBuZXcgRigkYix0aGlzLGEpfSxnZXQgc2xvdCgpe3JldHVybiB0aGlzLmdldEF0dHJpYnV0ZShcInNsb3RcIil9LHNldCBzbG90KGEpe0RiKHRoaXMsXCJzbG90XCIsYSl9LGdldCBhc3NpZ25lZFNsb3QoKXtyZXR1cm4gZ2ModGhpcyl9fSxrYyxsYyk7T2JqZWN0LmRlZmluZVByb3BlcnRpZXMobWMsaWIpO3ZhciBuYz1wYSh7aW1wb3J0Tm9kZTpmdW5jdGlvbihhLGIpe3JldHVybiBFYihhLGIpfSxnZXRFbGVtZW50QnlJZDpmdW5jdGlvbihhKXtyZXR1cm4gQWIodGhpcyxmdW5jdGlvbihiKXtyZXR1cm4gYi5pZD09YX0sZnVuY3Rpb24oYSl7cmV0dXJuISFhfSlbMF18fG51bGx9fSxrYyk7T2JqZWN0LmRlZmluZVByb3BlcnRpZXMobmMse19hY3RpdmVFbGVtZW50OmpiLmFjdGl2ZUVsZW1lbnR9KTtcbnZhciBvYz1IVE1MRWxlbWVudC5wcm90b3R5cGUuYmx1cixwYz1wYSh7Ymx1cjpmdW5jdGlvbigpe3ZhciBhPXRoaXMuX19zaGFkeSYmdGhpcy5fX3NoYWR5LnJvb3Q7KGE9YSYmYS5hY3RpdmVFbGVtZW50KT9hLmJsdXIoKTpvYy5jYWxsKHRoaXMpfX0pO2Z1bmN0aW9uIEcoYSxiKXtmb3IodmFyIGM9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYiksZD0wO2Q8Yy5sZW5ndGg7ZCsrKXt2YXIgZT1jW2RdLGY9T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiLGUpO2YudmFsdWU/YVtlXT1mLnZhbHVlOk9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLGUsZil9fTtpZihyLmxhKXt2YXIgU2hhZHlET009e2luVXNlOnIubGEscGF0Y2g6ZnVuY3Rpb24oYSl7cmV0dXJuIGF9LGlzU2hhZHlSb290OnUsZW5xdWV1ZTp6YSxmbHVzaDpBYSxzZXR0aW5nczpyLGZpbHRlck11dGF0aW9uczpHYSxvYnNlcnZlQ2hpbGRyZW46RWEsdW5vYnNlcnZlQ2hpbGRyZW46RmEsbmF0aXZlTWV0aG9kczp3LG5hdGl2ZVRyZWU6eH07d2luZG93LlNoYWR5RE9NPVNoYWR5RE9NO3dpbmRvdy5FdmVudD1VYjt3aW5kb3cuQ3VzdG9tRXZlbnQ9VmI7d2luZG93Lk1vdXNlRXZlbnQ9V2I7VGIoKTt2YXIgcWM9d2luZG93LmN1c3RvbUVsZW1lbnRzJiZ3aW5kb3cuY3VzdG9tRWxlbWVudHMubmF0aXZlSFRNTEVsZW1lbnR8fEhUTUxFbGVtZW50O0cod2luZG93Lk5vZGUucHJvdG90eXBlLGljKTtHKHdpbmRvdy5XaW5kb3cucHJvdG90eXBlLGhjKTtHKHdpbmRvdy5UZXh0LnByb3RvdHlwZSxqYyk7Ryh3aW5kb3cuRG9jdW1lbnRGcmFnbWVudC5wcm90b3R5cGUsa2MpO0cod2luZG93LkVsZW1lbnQucHJvdG90eXBlLFxubWMpO0cod2luZG93LkRvY3VtZW50LnByb3RvdHlwZSxuYyk7d2luZG93LkhUTUxTbG90RWxlbWVudCYmRyh3aW5kb3cuSFRNTFNsb3RFbGVtZW50LnByb3RvdHlwZSxsYyk7RyhxYy5wcm90b3R5cGUscGMpO3IuRyYmKEMod2luZG93Lk5vZGUucHJvdG90eXBlKSxDKHdpbmRvdy5UZXh0LnByb3RvdHlwZSksQyh3aW5kb3cuRG9jdW1lbnRGcmFnbWVudC5wcm90b3R5cGUpLEMod2luZG93LkVsZW1lbnQucHJvdG90eXBlKSxDKHFjLnByb3RvdHlwZSksQyh3aW5kb3cuRG9jdW1lbnQucHJvdG90eXBlKSx3aW5kb3cuSFRNTFNsb3RFbGVtZW50JiZDKHdpbmRvdy5IVE1MU2xvdEVsZW1lbnQucHJvdG90eXBlKSk7d2luZG93LlNoYWRvd1Jvb3Q9Rn07dmFyIHJjPW5ldyBTZXQoXCJhbm5vdGF0aW9uLXhtbCBjb2xvci1wcm9maWxlIGZvbnQtZmFjZSBmb250LWZhY2Utc3JjIGZvbnQtZmFjZS11cmkgZm9udC1mYWNlLWZvcm1hdCBmb250LWZhY2UtbmFtZSBtaXNzaW5nLWdseXBoXCIuc3BsaXQoXCIgXCIpKTtmdW5jdGlvbiBzYyhhKXt2YXIgYj1yYy5oYXMoYSk7YT0vXlthLXpdWy4wLTlfYS16XSotW1xcLS4wLTlfYS16XSokLy50ZXN0KGEpO3JldHVybiFiJiZhfWZ1bmN0aW9uIEgoYSl7dmFyIGI9YS5pc0Nvbm5lY3RlZDtpZih2b2lkIDAhPT1iKXJldHVybiBiO2Zvcig7YSYmIShhLl9fQ0VfaXNJbXBvcnREb2N1bWVudHx8YSBpbnN0YW5jZW9mIERvY3VtZW50KTspYT1hLnBhcmVudE5vZGV8fCh3aW5kb3cuU2hhZG93Um9vdCYmYSBpbnN0YW5jZW9mIFNoYWRvd1Jvb3Q/YS5ob3N0OnZvaWQgMCk7cmV0dXJuISghYXx8IShhLl9fQ0VfaXNJbXBvcnREb2N1bWVudHx8YSBpbnN0YW5jZW9mIERvY3VtZW50KSl9XG5mdW5jdGlvbiB0YyhhLGIpe2Zvcig7YiYmYiE9PWEmJiFiLm5leHRTaWJsaW5nOyliPWIucGFyZW50Tm9kZTtyZXR1cm4gYiYmYiE9PWE/Yi5uZXh0U2libGluZzpudWxsfVxuZnVuY3Rpb24gSShhLGIsYyl7Yz12b2lkIDA9PT1jP25ldyBTZXQ6Yztmb3IodmFyIGQ9YTtkOyl7aWYoZC5ub2RlVHlwZT09PU5vZGUuRUxFTUVOVF9OT0RFKXt2YXIgZT1kO2IoZSk7dmFyIGY9ZS5sb2NhbE5hbWU7aWYoXCJsaW5rXCI9PT1mJiZcImltcG9ydFwiPT09ZS5nZXRBdHRyaWJ1dGUoXCJyZWxcIikpe2Q9ZS5pbXBvcnQ7aWYoZCBpbnN0YW5jZW9mIE5vZGUmJiFjLmhhcyhkKSlmb3IoYy5hZGQoZCksZD1kLmZpcnN0Q2hpbGQ7ZDtkPWQubmV4dFNpYmxpbmcpSShkLGIsYyk7ZD10YyhhLGUpO2NvbnRpbnVlfWVsc2UgaWYoXCJ0ZW1wbGF0ZVwiPT09Zil7ZD10YyhhLGUpO2NvbnRpbnVlfWlmKGU9ZS5fX0NFX3NoYWRvd1Jvb3QpZm9yKGU9ZS5maXJzdENoaWxkO2U7ZT1lLm5leHRTaWJsaW5nKUkoZSxiLGMpfWQ9ZC5maXJzdENoaWxkP2QuZmlyc3RDaGlsZDp0YyhhLGQpfX1mdW5jdGlvbiBLKGEsYixjKXthW2JdPWN9O2Z1bmN0aW9uIHVjKCl7dGhpcy5hPW5ldyBNYXA7dGhpcy5sPW5ldyBNYXA7dGhpcy5mPVtdO3RoaXMuYz0hMX1mdW5jdGlvbiB2YyhhLGIsYyl7YS5hLnNldChiLGMpO2EubC5zZXQoYy5jb25zdHJ1Y3RvcixjKX1mdW5jdGlvbiB3YyhhLGIpe2EuYz0hMDthLmYucHVzaChiKX1mdW5jdGlvbiB4YyhhLGIpe2EuYyYmSShiLGZ1bmN0aW9uKGIpe3JldHVybiBhLmIoYil9KX11Yy5wcm90b3R5cGUuYj1mdW5jdGlvbihhKXtpZih0aGlzLmMmJiFhLl9fQ0VfcGF0Y2hlZCl7YS5fX0NFX3BhdGNoZWQ9ITA7Zm9yKHZhciBiPTA7Yjx0aGlzLmYubGVuZ3RoO2IrKyl0aGlzLmZbYl0oYSl9fTtmdW5jdGlvbiBMKGEsYil7dmFyIGM9W107SShiLGZ1bmN0aW9uKGEpe3JldHVybiBjLnB1c2goYSl9KTtmb3IoYj0wO2I8Yy5sZW5ndGg7YisrKXt2YXIgZD1jW2JdOzE9PT1kLl9fQ0Vfc3RhdGU/YS5jb25uZWN0ZWRDYWxsYmFjayhkKTp5YyhhLGQpfX1cbmZ1bmN0aW9uIE0oYSxiKXt2YXIgYz1bXTtJKGIsZnVuY3Rpb24oYSl7cmV0dXJuIGMucHVzaChhKX0pO2ZvcihiPTA7YjxjLmxlbmd0aDtiKyspe3ZhciBkPWNbYl07MT09PWQuX19DRV9zdGF0ZSYmYS5kaXNjb25uZWN0ZWRDYWxsYmFjayhkKX19XG5mdW5jdGlvbiBOKGEsYixjKXtjPXZvaWQgMD09PWM/e306Yzt2YXIgZD1jLlNhfHxuZXcgU2V0LGU9Yy5vYXx8ZnVuY3Rpb24oYil7cmV0dXJuIHljKGEsYil9LGY9W107SShiLGZ1bmN0aW9uKGIpe2lmKFwibGlua1wiPT09Yi5sb2NhbE5hbWUmJlwiaW1wb3J0XCI9PT1iLmdldEF0dHJpYnV0ZShcInJlbFwiKSl7dmFyIGM9Yi5pbXBvcnQ7YyBpbnN0YW5jZW9mIE5vZGUmJihjLl9fQ0VfaXNJbXBvcnREb2N1bWVudD0hMCxjLl9fQ0VfaGFzUmVnaXN0cnk9ITApO2MmJlwiY29tcGxldGVcIj09PWMucmVhZHlTdGF0ZT9jLl9fQ0VfZG9jdW1lbnRMb2FkSGFuZGxlZD0hMDpiLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsZnVuY3Rpb24oKXt2YXIgYz1iLmltcG9ydDtpZighYy5fX0NFX2RvY3VtZW50TG9hZEhhbmRsZWQpe2MuX19DRV9kb2N1bWVudExvYWRIYW5kbGVkPSEwO3ZhciBmPW5ldyBTZXQoZCk7Zi5kZWxldGUoYyk7TihhLGMse1NhOmYsb2E6ZX0pfX0pfWVsc2UgZi5wdXNoKGIpfSxkKTtpZihhLmMpZm9yKGI9XG4wO2I8Zi5sZW5ndGg7YisrKWEuYihmW2JdKTtmb3IoYj0wO2I8Zi5sZW5ndGg7YisrKWUoZltiXSl9XG5mdW5jdGlvbiB5YyhhLGIpe2lmKHZvaWQgMD09PWIuX19DRV9zdGF0ZSl7dmFyIGM9Yi5vd25lckRvY3VtZW50O2lmKGMuZGVmYXVsdFZpZXd8fGMuX19DRV9pc0ltcG9ydERvY3VtZW50JiZjLl9fQ0VfaGFzUmVnaXN0cnkpaWYoYz1hLmEuZ2V0KGIubG9jYWxOYW1lKSl7Yy5jb25zdHJ1Y3Rpb25TdGFjay5wdXNoKGIpO3ZhciBkPWMuY29uc3RydWN0b3I7dHJ5e3RyeXtpZihuZXcgZCE9PWIpdGhyb3cgRXJyb3IoXCJUaGUgY3VzdG9tIGVsZW1lbnQgY29uc3RydWN0b3IgZGlkIG5vdCBwcm9kdWNlIHRoZSBlbGVtZW50IGJlaW5nIHVwZ3JhZGVkLlwiKTt9ZmluYWxseXtjLmNvbnN0cnVjdGlvblN0YWNrLnBvcCgpfX1jYXRjaChoKXt0aHJvdyBiLl9fQ0Vfc3RhdGU9MixoO31iLl9fQ0Vfc3RhdGU9MTtiLl9fQ0VfZGVmaW5pdGlvbj1jO2lmKGMuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKWZvcihjPWMub2JzZXJ2ZWRBdHRyaWJ1dGVzLGQ9MDtkPGMubGVuZ3RoO2QrKyl7dmFyIGU9Y1tkXSxcbmY9Yi5nZXRBdHRyaWJ1dGUoZSk7bnVsbCE9PWYmJmEuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKGIsZSxudWxsLGYsbnVsbCl9SChiKSYmYS5jb25uZWN0ZWRDYWxsYmFjayhiKX19fXVjLnByb3RvdHlwZS5jb25uZWN0ZWRDYWxsYmFjaz1mdW5jdGlvbihhKXt2YXIgYj1hLl9fQ0VfZGVmaW5pdGlvbjtiLmNvbm5lY3RlZENhbGxiYWNrJiZiLmNvbm5lY3RlZENhbGxiYWNrLmNhbGwoYSl9O3VjLnByb3RvdHlwZS5kaXNjb25uZWN0ZWRDYWxsYmFjaz1mdW5jdGlvbihhKXt2YXIgYj1hLl9fQ0VfZGVmaW5pdGlvbjtiLmRpc2Nvbm5lY3RlZENhbGxiYWNrJiZiLmRpc2Nvbm5lY3RlZENhbGxiYWNrLmNhbGwoYSl9O1xudWMucHJvdG90eXBlLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjaz1mdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmPWEuX19DRV9kZWZpbml0aW9uO2YuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrJiYtMTxmLm9ic2VydmVkQXR0cmlidXRlcy5pbmRleE9mKGIpJiZmLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjay5jYWxsKGEsYixjLGQsZSl9O2Z1bmN0aW9uIHpjKGEpe3ZhciBiPWRvY3VtZW50O3RoaXMuaD1hO3RoaXMuYT1iO3RoaXMudz12b2lkIDA7Tih0aGlzLmgsdGhpcy5hKTtcImxvYWRpbmdcIj09PXRoaXMuYS5yZWFkeVN0YXRlJiYodGhpcy53PW5ldyBNdXRhdGlvbk9ic2VydmVyKHRoaXMuYi5iaW5kKHRoaXMpKSx0aGlzLncub2JzZXJ2ZSh0aGlzLmEse2NoaWxkTGlzdDohMCxzdWJ0cmVlOiEwfSkpfWZ1bmN0aW9uIEFjKGEpe2EudyYmYS53LmRpc2Nvbm5lY3QoKX16Yy5wcm90b3R5cGUuYj1mdW5jdGlvbihhKXt2YXIgYj10aGlzLmEucmVhZHlTdGF0ZTtcImludGVyYWN0aXZlXCIhPT1iJiZcImNvbXBsZXRlXCIhPT1ifHxBYyh0aGlzKTtmb3IoYj0wO2I8YS5sZW5ndGg7YisrKWZvcih2YXIgYz1hW2JdLmFkZGVkTm9kZXMsZD0wO2Q8Yy5sZW5ndGg7ZCsrKU4odGhpcy5oLGNbZF0pfTtmdW5jdGlvbiBCYygpe3ZhciBhPXRoaXM7dGhpcy5iPXRoaXMuYT12b2lkIDA7dGhpcy5jPW5ldyBQcm9taXNlKGZ1bmN0aW9uKGIpe2EuYj1iO2EuYSYmYihhLmEpfSl9ZnVuY3Rpb24gQ2MoYSl7aWYoYS5hKXRocm93IEVycm9yKFwiQWxyZWFkeSByZXNvbHZlZC5cIik7YS5hPXZvaWQgMDthLmImJmEuYih2b2lkIDApfTtmdW5jdGlvbiBPKGEpe3RoaXMuVz0hMTt0aGlzLmg9YTt0aGlzLiQ9bmV3IE1hcDt0aGlzLlg9ZnVuY3Rpb24oYSl7cmV0dXJuIGEoKX07dGhpcy5LPSExO3RoaXMuWT1bXTt0aGlzLnhhPW5ldyB6YyhhKX1cbk8ucHJvdG90eXBlLmRlZmluZT1mdW5jdGlvbihhLGIpe3ZhciBjPXRoaXM7aWYoIShiIGluc3RhbmNlb2YgRnVuY3Rpb24pKXRocm93IG5ldyBUeXBlRXJyb3IoXCJDdXN0b20gZWxlbWVudCBjb25zdHJ1Y3RvcnMgbXVzdCBiZSBmdW5jdGlvbnMuXCIpO2lmKCFzYyhhKSl0aHJvdyBuZXcgU3ludGF4RXJyb3IoXCJUaGUgZWxlbWVudCBuYW1lICdcIithK1wiJyBpcyBub3QgdmFsaWQuXCIpO2lmKHRoaXMuaC5hLmdldChhKSl0aHJvdyBFcnJvcihcIkEgY3VzdG9tIGVsZW1lbnQgd2l0aCBuYW1lICdcIithK1wiJyBoYXMgYWxyZWFkeSBiZWVuIGRlZmluZWQuXCIpO2lmKHRoaXMuVyl0aHJvdyBFcnJvcihcIkEgY3VzdG9tIGVsZW1lbnQgaXMgYWxyZWFkeSBiZWluZyBkZWZpbmVkLlwiKTt0aGlzLlc9ITA7dHJ5e3ZhciBkPWZ1bmN0aW9uKGEpe3ZhciBiPWVbYV07aWYodm9pZCAwIT09YiYmIShiIGluc3RhbmNlb2YgRnVuY3Rpb24pKXRocm93IEVycm9yKFwiVGhlICdcIithK1wiJyBjYWxsYmFjayBtdXN0IGJlIGEgZnVuY3Rpb24uXCIpO1xucmV0dXJuIGJ9LGU9Yi5wcm90b3R5cGU7aWYoIShlIGluc3RhbmNlb2YgT2JqZWN0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiVGhlIGN1c3RvbSBlbGVtZW50IGNvbnN0cnVjdG9yJ3MgcHJvdG90eXBlIGlzIG5vdCBhbiBvYmplY3QuXCIpO3ZhciBmPWQoXCJjb25uZWN0ZWRDYWxsYmFja1wiKTt2YXIgaD1kKFwiZGlzY29ubmVjdGVkQ2FsbGJhY2tcIik7dmFyIGc9ZChcImFkb3B0ZWRDYWxsYmFja1wiKTt2YXIgaz1kKFwiYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrXCIpO3ZhciBsPWIub2JzZXJ2ZWRBdHRyaWJ1dGVzfHxbXX1jYXRjaChtKXtyZXR1cm59ZmluYWxseXt0aGlzLlc9ITF9Yj17bG9jYWxOYW1lOmEsY29uc3RydWN0b3I6Yixjb25uZWN0ZWRDYWxsYmFjazpmLGRpc2Nvbm5lY3RlZENhbGxiYWNrOmgsYWRvcHRlZENhbGxiYWNrOmcsYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrOmssb2JzZXJ2ZWRBdHRyaWJ1dGVzOmwsY29uc3RydWN0aW9uU3RhY2s6W119O3ZjKHRoaXMuaCxhLGIpO3RoaXMuWS5wdXNoKGIpO1xudGhpcy5LfHwodGhpcy5LPSEwLHRoaXMuWChmdW5jdGlvbigpe3JldHVybiBEYyhjKX0pKX07ZnVuY3Rpb24gRGMoYSl7aWYoITEhPT1hLkspe2EuSz0hMTtmb3IodmFyIGI9YS5ZLGM9W10sZD1uZXcgTWFwLGU9MDtlPGIubGVuZ3RoO2UrKylkLnNldChiW2VdLmxvY2FsTmFtZSxbXSk7TihhLmgsZG9jdW1lbnQse29hOmZ1bmN0aW9uKGIpe2lmKHZvaWQgMD09PWIuX19DRV9zdGF0ZSl7dmFyIGU9Yi5sb2NhbE5hbWUsZj1kLmdldChlKTtmP2YucHVzaChiKTphLmguYS5nZXQoZSkmJmMucHVzaChiKX19fSk7Zm9yKGU9MDtlPGMubGVuZ3RoO2UrKyl5YyhhLmgsY1tlXSk7Zm9yKDswPGIubGVuZ3RoOyl7dmFyIGY9Yi5zaGlmdCgpO2U9Zi5sb2NhbE5hbWU7Zj1kLmdldChmLmxvY2FsTmFtZSk7Zm9yKHZhciBoPTA7aDxmLmxlbmd0aDtoKyspeWMoYS5oLGZbaF0pOyhlPWEuJC5nZXQoZSkpJiZDYyhlKX19fU8ucHJvdG90eXBlLmdldD1mdW5jdGlvbihhKXtpZihhPXRoaXMuaC5hLmdldChhKSlyZXR1cm4gYS5jb25zdHJ1Y3Rvcn07XG5PLnByb3RvdHlwZS53aGVuRGVmaW5lZD1mdW5jdGlvbihhKXtpZighc2MoYSkpcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBTeW50YXhFcnJvcihcIidcIithK1wiJyBpcyBub3QgYSB2YWxpZCBjdXN0b20gZWxlbWVudCBuYW1lLlwiKSk7dmFyIGI9dGhpcy4kLmdldChhKTtpZihiKXJldHVybiBiLmM7Yj1uZXcgQmM7dGhpcy4kLnNldChhLGIpO3RoaXMuaC5hLmdldChhKSYmIXRoaXMuWS5zb21lKGZ1bmN0aW9uKGIpe3JldHVybiBiLmxvY2FsTmFtZT09PWF9KSYmQ2MoYik7cmV0dXJuIGIuY307Ty5wcm90b3R5cGUuTGE9ZnVuY3Rpb24oYSl7QWModGhpcy54YSk7dmFyIGI9dGhpcy5YO3RoaXMuWD1mdW5jdGlvbihjKXtyZXR1cm4gYShmdW5jdGlvbigpe3JldHVybiBiKGMpfSl9fTt3aW5kb3cuQ3VzdG9tRWxlbWVudFJlZ2lzdHJ5PU87Ty5wcm90b3R5cGUuZGVmaW5lPU8ucHJvdG90eXBlLmRlZmluZTtPLnByb3RvdHlwZS5nZXQ9Ty5wcm90b3R5cGUuZ2V0O1xuTy5wcm90b3R5cGUud2hlbkRlZmluZWQ9Ty5wcm90b3R5cGUud2hlbkRlZmluZWQ7Ty5wcm90b3R5cGUucG9seWZpbGxXcmFwRmx1c2hDYWxsYmFjaz1PLnByb3RvdHlwZS5MYTt2YXIgRWM9d2luZG93LkRvY3VtZW50LnByb3RvdHlwZS5jcmVhdGVFbGVtZW50LEZjPXdpbmRvdy5Eb2N1bWVudC5wcm90b3R5cGUuY3JlYXRlRWxlbWVudE5TLEdjPXdpbmRvdy5Eb2N1bWVudC5wcm90b3R5cGUuaW1wb3J0Tm9kZSxIYz13aW5kb3cuRG9jdW1lbnQucHJvdG90eXBlLnByZXBlbmQsSWM9d2luZG93LkRvY3VtZW50LnByb3RvdHlwZS5hcHBlbmQsSmM9d2luZG93LkRvY3VtZW50RnJhZ21lbnQucHJvdG90eXBlLnByZXBlbmQsS2M9d2luZG93LkRvY3VtZW50RnJhZ21lbnQucHJvdG90eXBlLmFwcGVuZCxMYz13aW5kb3cuTm9kZS5wcm90b3R5cGUuY2xvbmVOb2RlLE1jPXdpbmRvdy5Ob2RlLnByb3RvdHlwZS5hcHBlbmRDaGlsZCxOYz13aW5kb3cuTm9kZS5wcm90b3R5cGUuaW5zZXJ0QmVmb3JlLE9jPXdpbmRvdy5Ob2RlLnByb3RvdHlwZS5yZW1vdmVDaGlsZCxQYz13aW5kb3cuTm9kZS5wcm90b3R5cGUucmVwbGFjZUNoaWxkLFFjPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iod2luZG93Lk5vZGUucHJvdG90eXBlLFxuXCJ0ZXh0Q29udGVudFwiKSxSYz13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuYXR0YWNoU2hhZG93LFNjPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iod2luZG93LkVsZW1lbnQucHJvdG90eXBlLFwiaW5uZXJIVE1MXCIpLFRjPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5nZXRBdHRyaWJ1dGUsVWM9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLnNldEF0dHJpYnV0ZSxWYz13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlQXR0cmlidXRlLFdjPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5nZXRBdHRyaWJ1dGVOUyxYYz13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuc2V0QXR0cmlidXRlTlMsWWM9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLnJlbW92ZUF0dHJpYnV0ZU5TLFpjPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5pbnNlcnRBZGphY2VudEVsZW1lbnQsJGM9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLnByZXBlbmQsYWQ9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLmFwcGVuZCxcbmJkPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5iZWZvcmUsY2Q9d2luZG93LkVsZW1lbnQucHJvdG90eXBlLmFmdGVyLGRkPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5yZXBsYWNlV2l0aCxlZD13aW5kb3cuRWxlbWVudC5wcm90b3R5cGUucmVtb3ZlLGZkPXdpbmRvdy5IVE1MRWxlbWVudCxnZD1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHdpbmRvdy5IVE1MRWxlbWVudC5wcm90b3R5cGUsXCJpbm5lckhUTUxcIiksaGQ9d2luZG93LkhUTUxFbGVtZW50LnByb3RvdHlwZS5pbnNlcnRBZGphY2VudEVsZW1lbnQ7dmFyIGlkPW5ldyBmdW5jdGlvbigpe307ZnVuY3Rpb24gamQoKXt2YXIgYT1QO3dpbmRvdy5IVE1MRWxlbWVudD1mdW5jdGlvbigpe2Z1bmN0aW9uIGIoKXt2YXIgYj10aGlzLmNvbnN0cnVjdG9yLGQ9YS5sLmdldChiKTtpZighZCl0aHJvdyBFcnJvcihcIlRoZSBjdXN0b20gZWxlbWVudCBiZWluZyBjb25zdHJ1Y3RlZCB3YXMgbm90IHJlZ2lzdGVyZWQgd2l0aCBgY3VzdG9tRWxlbWVudHNgLlwiKTt2YXIgZT1kLmNvbnN0cnVjdGlvblN0YWNrO2lmKDA9PT1lLmxlbmd0aClyZXR1cm4gZT1FYy5jYWxsKGRvY3VtZW50LGQubG9jYWxOYW1lKSxPYmplY3Quc2V0UHJvdG90eXBlT2YoZSxiLnByb3RvdHlwZSksZS5fX0NFX3N0YXRlPTEsZS5fX0NFX2RlZmluaXRpb249ZCxhLmIoZSksZTtkPWUubGVuZ3RoLTE7dmFyIGY9ZVtkXTtpZihmPT09aWQpdGhyb3cgRXJyb3IoXCJUaGUgSFRNTEVsZW1lbnQgY29uc3RydWN0b3Igd2FzIGVpdGhlciBjYWxsZWQgcmVlbnRyYW50bHkgZm9yIHRoaXMgY29uc3RydWN0b3Igb3IgY2FsbGVkIG11bHRpcGxlIHRpbWVzLlwiKTtcbmVbZF09aWQ7T2JqZWN0LnNldFByb3RvdHlwZU9mKGYsYi5wcm90b3R5cGUpO2EuYihmKTtyZXR1cm4gZn1iLnByb3RvdHlwZT1mZC5wcm90b3R5cGU7cmV0dXJuIGJ9KCl9O2Z1bmN0aW9uIGtkKGEsYixjKXtmdW5jdGlvbiBkKGIpe3JldHVybiBmdW5jdGlvbihjKXtmb3IodmFyIGQ9W10sZT0wO2U8YXJndW1lbnRzLmxlbmd0aDsrK2UpZFtlLTBdPWFyZ3VtZW50c1tlXTtlPVtdO2Zvcih2YXIgZj1bXSxsPTA7bDxkLmxlbmd0aDtsKyspe3ZhciBtPWRbbF07bSBpbnN0YW5jZW9mIEVsZW1lbnQmJkgobSkmJmYucHVzaChtKTtpZihtIGluc3RhbmNlb2YgRG9jdW1lbnRGcmFnbWVudClmb3IobT1tLmZpcnN0Q2hpbGQ7bTttPW0ubmV4dFNpYmxpbmcpZS5wdXNoKG0pO2Vsc2UgZS5wdXNoKG0pfWIuYXBwbHkodGhpcyxkKTtmb3IoZD0wO2Q8Zi5sZW5ndGg7ZCsrKU0oYSxmW2RdKTtpZihIKHRoaXMpKWZvcihkPTA7ZDxlLmxlbmd0aDtkKyspZj1lW2RdLGYgaW5zdGFuY2VvZiBFbGVtZW50JiZMKGEsZil9fXZvaWQgMCE9PWMuUCYmKGIucHJlcGVuZD1kKGMuUCkpO3ZvaWQgMCE9PWMuYXBwZW5kJiYoYi5hcHBlbmQ9ZChjLmFwcGVuZCkpfTtmdW5jdGlvbiBsZCgpe3ZhciBhPVA7SyhEb2N1bWVudC5wcm90b3R5cGUsXCJjcmVhdGVFbGVtZW50XCIsZnVuY3Rpb24oYil7aWYodGhpcy5fX0NFX2hhc1JlZ2lzdHJ5KXt2YXIgYz1hLmEuZ2V0KGIpO2lmKGMpcmV0dXJuIG5ldyBjLmNvbnN0cnVjdG9yfWI9RWMuY2FsbCh0aGlzLGIpO2EuYihiKTtyZXR1cm4gYn0pO0soRG9jdW1lbnQucHJvdG90eXBlLFwiaW1wb3J0Tm9kZVwiLGZ1bmN0aW9uKGIsYyl7Yj1HYy5jYWxsKHRoaXMsYixjKTt0aGlzLl9fQ0VfaGFzUmVnaXN0cnk/TihhLGIpOnhjKGEsYik7cmV0dXJuIGJ9KTtLKERvY3VtZW50LnByb3RvdHlwZSxcImNyZWF0ZUVsZW1lbnROU1wiLGZ1bmN0aW9uKGIsYyl7aWYodGhpcy5fX0NFX2hhc1JlZ2lzdHJ5JiYobnVsbD09PWJ8fFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiPT09Yikpe3ZhciBkPWEuYS5nZXQoYyk7aWYoZClyZXR1cm4gbmV3IGQuY29uc3RydWN0b3J9Yj1GYy5jYWxsKHRoaXMsYixjKTthLmIoYik7cmV0dXJuIGJ9KTtcbmtkKGEsRG9jdW1lbnQucHJvdG90eXBlLHtQOkhjLGFwcGVuZDpJY30pfTtmdW5jdGlvbiBtZCgpe3ZhciBhPVA7ZnVuY3Rpb24gYihiLGQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShiLFwidGV4dENvbnRlbnRcIix7ZW51bWVyYWJsZTpkLmVudW1lcmFibGUsY29uZmlndXJhYmxlOiEwLGdldDpkLmdldCxzZXQ6ZnVuY3Rpb24oYil7aWYodGhpcy5ub2RlVHlwZT09PU5vZGUuVEVYVF9OT0RFKWQuc2V0LmNhbGwodGhpcyxiKTtlbHNle3ZhciBjPXZvaWQgMDtpZih0aGlzLmZpcnN0Q2hpbGQpe3ZhciBlPXRoaXMuY2hpbGROb2RlcyxnPWUubGVuZ3RoO2lmKDA8ZyYmSCh0aGlzKSl7Yz1BcnJheShnKTtmb3IodmFyIGs9MDtrPGc7aysrKWNba109ZVtrXX19ZC5zZXQuY2FsbCh0aGlzLGIpO2lmKGMpZm9yKGI9MDtiPGMubGVuZ3RoO2IrKylNKGEsY1tiXSl9fX0pfUsoTm9kZS5wcm90b3R5cGUsXCJpbnNlcnRCZWZvcmVcIixmdW5jdGlvbihiLGQpe2lmKGIgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KXt2YXIgYz1BcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoYi5jaGlsZE5vZGVzKTtcbmI9TmMuY2FsbCh0aGlzLGIsZCk7aWYoSCh0aGlzKSlmb3IoZD0wO2Q8Yy5sZW5ndGg7ZCsrKUwoYSxjW2RdKTtyZXR1cm4gYn1jPUgoYik7ZD1OYy5jYWxsKHRoaXMsYixkKTtjJiZNKGEsYik7SCh0aGlzKSYmTChhLGIpO3JldHVybiBkfSk7SyhOb2RlLnByb3RvdHlwZSxcImFwcGVuZENoaWxkXCIsZnVuY3Rpb24oYil7aWYoYiBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpe3ZhciBjPUFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShiLmNoaWxkTm9kZXMpO2I9TWMuY2FsbCh0aGlzLGIpO2lmKEgodGhpcykpZm9yKHZhciBlPTA7ZTxjLmxlbmd0aDtlKyspTChhLGNbZV0pO3JldHVybiBifWM9SChiKTtlPU1jLmNhbGwodGhpcyxiKTtjJiZNKGEsYik7SCh0aGlzKSYmTChhLGIpO3JldHVybiBlfSk7SyhOb2RlLnByb3RvdHlwZSxcImNsb25lTm9kZVwiLGZ1bmN0aW9uKGIpe2I9TGMuY2FsbCh0aGlzLGIpO3RoaXMub3duZXJEb2N1bWVudC5fX0NFX2hhc1JlZ2lzdHJ5P04oYSxiKTpcbnhjKGEsYik7cmV0dXJuIGJ9KTtLKE5vZGUucHJvdG90eXBlLFwicmVtb3ZlQ2hpbGRcIixmdW5jdGlvbihiKXt2YXIgYz1IKGIpLGU9T2MuY2FsbCh0aGlzLGIpO2MmJk0oYSxiKTtyZXR1cm4gZX0pO0soTm9kZS5wcm90b3R5cGUsXCJyZXBsYWNlQ2hpbGRcIixmdW5jdGlvbihiLGQpe2lmKGIgaW5zdGFuY2VvZiBEb2N1bWVudEZyYWdtZW50KXt2YXIgYz1BcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoYi5jaGlsZE5vZGVzKTtiPVBjLmNhbGwodGhpcyxiLGQpO2lmKEgodGhpcykpZm9yKE0oYSxkKSxkPTA7ZDxjLmxlbmd0aDtkKyspTChhLGNbZF0pO3JldHVybiBifWM9SChiKTt2YXIgZj1QYy5jYWxsKHRoaXMsYixkKSxoPUgodGhpcyk7aCYmTShhLGQpO2MmJk0oYSxiKTtoJiZMKGEsYik7cmV0dXJuIGZ9KTtRYyYmUWMuZ2V0P2IoTm9kZS5wcm90b3R5cGUsUWMpOndjKGEsZnVuY3Rpb24oYSl7YihhLHtlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtmb3IodmFyIGE9XG5bXSxiPTA7Yjx0aGlzLmNoaWxkTm9kZXMubGVuZ3RoO2IrKylhLnB1c2godGhpcy5jaGlsZE5vZGVzW2JdLnRleHRDb250ZW50KTtyZXR1cm4gYS5qb2luKFwiXCIpfSxzZXQ6ZnVuY3Rpb24oYSl7Zm9yKDt0aGlzLmZpcnN0Q2hpbGQ7KU9jLmNhbGwodGhpcyx0aGlzLmZpcnN0Q2hpbGQpO01jLmNhbGwodGhpcyxkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShhKSl9fSl9KX07ZnVuY3Rpb24gbmQoYSl7dmFyIGI9RWxlbWVudC5wcm90b3R5cGU7ZnVuY3Rpb24gYyhiKXtyZXR1cm4gZnVuY3Rpb24oYyl7Zm9yKHZhciBkPVtdLGU9MDtlPGFyZ3VtZW50cy5sZW5ndGg7KytlKWRbZS0wXT1hcmd1bWVudHNbZV07ZT1bXTtmb3IodmFyIGc9W10saz0wO2s8ZC5sZW5ndGg7aysrKXt2YXIgbD1kW2tdO2wgaW5zdGFuY2VvZiBFbGVtZW50JiZIKGwpJiZnLnB1c2gobCk7aWYobCBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpZm9yKGw9bC5maXJzdENoaWxkO2w7bD1sLm5leHRTaWJsaW5nKWUucHVzaChsKTtlbHNlIGUucHVzaChsKX1iLmFwcGx5KHRoaXMsZCk7Zm9yKGQ9MDtkPGcubGVuZ3RoO2QrKylNKGEsZ1tkXSk7aWYoSCh0aGlzKSlmb3IoZD0wO2Q8ZS5sZW5ndGg7ZCsrKWc9ZVtkXSxnIGluc3RhbmNlb2YgRWxlbWVudCYmTChhLGcpfX12b2lkIDAhPT1iZCYmKGIuYmVmb3JlPWMoYmQpKTt2b2lkIDAhPT1iZCYmKGIuYWZ0ZXI9YyhjZCkpO3ZvaWQgMCE9PVxuZGQmJksoYixcInJlcGxhY2VXaXRoXCIsZnVuY3Rpb24oYil7Zm9yKHZhciBjPVtdLGQ9MDtkPGFyZ3VtZW50cy5sZW5ndGg7KytkKWNbZC0wXT1hcmd1bWVudHNbZF07ZD1bXTtmb3IodmFyIGg9W10sZz0wO2c8Yy5sZW5ndGg7ZysrKXt2YXIgaz1jW2ddO2sgaW5zdGFuY2VvZiBFbGVtZW50JiZIKGspJiZoLnB1c2goayk7aWYoayBpbnN0YW5jZW9mIERvY3VtZW50RnJhZ21lbnQpZm9yKGs9ay5maXJzdENoaWxkO2s7az1rLm5leHRTaWJsaW5nKWQucHVzaChrKTtlbHNlIGQucHVzaChrKX1nPUgodGhpcyk7ZGQuYXBwbHkodGhpcyxjKTtmb3IoYz0wO2M8aC5sZW5ndGg7YysrKU0oYSxoW2NdKTtpZihnKWZvcihNKGEsdGhpcyksYz0wO2M8ZC5sZW5ndGg7YysrKWg9ZFtjXSxoIGluc3RhbmNlb2YgRWxlbWVudCYmTChhLGgpfSk7dm9pZCAwIT09ZWQmJksoYixcInJlbW92ZVwiLGZ1bmN0aW9uKCl7dmFyIGI9SCh0aGlzKTtlZC5jYWxsKHRoaXMpO2ImJk0oYSx0aGlzKX0pfTtmdW5jdGlvbiBvZCgpe3ZhciBhPVA7ZnVuY3Rpb24gYihiLGMpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShiLFwiaW5uZXJIVE1MXCIse2VudW1lcmFibGU6Yy5lbnVtZXJhYmxlLGNvbmZpZ3VyYWJsZTohMCxnZXQ6Yy5nZXQsc2V0OmZ1bmN0aW9uKGIpe3ZhciBkPXRoaXMsZT12b2lkIDA7SCh0aGlzKSYmKGU9W10sSSh0aGlzLGZ1bmN0aW9uKGEpe2EhPT1kJiZlLnB1c2goYSl9KSk7Yy5zZXQuY2FsbCh0aGlzLGIpO2lmKGUpZm9yKHZhciBmPTA7ZjxlLmxlbmd0aDtmKyspe3ZhciBsPWVbZl07MT09PWwuX19DRV9zdGF0ZSYmYS5kaXNjb25uZWN0ZWRDYWxsYmFjayhsKX10aGlzLm93bmVyRG9jdW1lbnQuX19DRV9oYXNSZWdpc3RyeT9OKGEsdGhpcyk6eGMoYSx0aGlzKTtyZXR1cm4gYn19KX1mdW5jdGlvbiBjKGIsYyl7SyhiLFwiaW5zZXJ0QWRqYWNlbnRFbGVtZW50XCIsZnVuY3Rpb24oYixkKXt2YXIgZT1IKGQpO2I9Yy5jYWxsKHRoaXMsYixkKTtlJiZNKGEsZCk7SChiKSYmTChhLGQpO1xucmV0dXJuIGJ9KX1SYyYmSyhFbGVtZW50LnByb3RvdHlwZSxcImF0dGFjaFNoYWRvd1wiLGZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLl9fQ0Vfc2hhZG93Um9vdD1hPVJjLmNhbGwodGhpcyxhKX0pO1NjJiZTYy5nZXQ/YihFbGVtZW50LnByb3RvdHlwZSxTYyk6Z2QmJmdkLmdldD9iKEhUTUxFbGVtZW50LnByb3RvdHlwZSxnZCk6d2MoYSxmdW5jdGlvbihhKXtiKGEse2VudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiBMYy5jYWxsKHRoaXMsITApLmlubmVySFRNTH0sc2V0OmZ1bmN0aW9uKGEpe3ZhciBiPVwidGVtcGxhdGVcIj09PXRoaXMubG9jYWxOYW1lLGM9Yj90aGlzLmNvbnRlbnQ6dGhpcyxkPUVjLmNhbGwoZG9jdW1lbnQsdGhpcy5sb2NhbE5hbWUpO2ZvcihkLmlubmVySFRNTD1hOzA8Yy5jaGlsZE5vZGVzLmxlbmd0aDspT2MuY2FsbChjLGMuY2hpbGROb2Rlc1swXSk7Zm9yKGE9Yj9kLmNvbnRlbnQ6ZDswPGEuY2hpbGROb2Rlcy5sZW5ndGg7KU1jLmNhbGwoYyxcbmEuY2hpbGROb2Rlc1swXSl9fSl9KTtLKEVsZW1lbnQucHJvdG90eXBlLFwic2V0QXR0cmlidXRlXCIsZnVuY3Rpb24oYixjKXtpZigxIT09dGhpcy5fX0NFX3N0YXRlKXJldHVybiBVYy5jYWxsKHRoaXMsYixjKTt2YXIgZD1UYy5jYWxsKHRoaXMsYik7VWMuY2FsbCh0aGlzLGIsYyk7Yz1UYy5jYWxsKHRoaXMsYik7YS5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sodGhpcyxiLGQsYyxudWxsKX0pO0soRWxlbWVudC5wcm90b3R5cGUsXCJzZXRBdHRyaWJ1dGVOU1wiLGZ1bmN0aW9uKGIsYyxmKXtpZigxIT09dGhpcy5fX0NFX3N0YXRlKXJldHVybiBYYy5jYWxsKHRoaXMsYixjLGYpO3ZhciBkPVdjLmNhbGwodGhpcyxiLGMpO1hjLmNhbGwodGhpcyxiLGMsZik7Zj1XYy5jYWxsKHRoaXMsYixjKTthLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayh0aGlzLGMsZCxmLGIpfSk7SyhFbGVtZW50LnByb3RvdHlwZSxcInJlbW92ZUF0dHJpYnV0ZVwiLGZ1bmN0aW9uKGIpe2lmKDEhPT10aGlzLl9fQ0Vfc3RhdGUpcmV0dXJuIFZjLmNhbGwodGhpcyxcbmIpO3ZhciBjPVRjLmNhbGwodGhpcyxiKTtWYy5jYWxsKHRoaXMsYik7bnVsbCE9PWMmJmEuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKHRoaXMsYixjLG51bGwsbnVsbCl9KTtLKEVsZW1lbnQucHJvdG90eXBlLFwicmVtb3ZlQXR0cmlidXRlTlNcIixmdW5jdGlvbihiLGMpe2lmKDEhPT10aGlzLl9fQ0Vfc3RhdGUpcmV0dXJuIFljLmNhbGwodGhpcyxiLGMpO3ZhciBkPVdjLmNhbGwodGhpcyxiLGMpO1ljLmNhbGwodGhpcyxiLGMpO3ZhciBlPVdjLmNhbGwodGhpcyxiLGMpO2QhPT1lJiZhLmF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayh0aGlzLGMsZCxlLGIpfSk7aGQ/YyhIVE1MRWxlbWVudC5wcm90b3R5cGUsaGQpOlpjP2MoRWxlbWVudC5wcm90b3R5cGUsWmMpOmNvbnNvbGUud2FybihcIkN1c3RvbSBFbGVtZW50czogYEVsZW1lbnQjaW5zZXJ0QWRqYWNlbnRFbGVtZW50YCB3YXMgbm90IHBhdGNoZWQuXCIpO2tkKGEsRWxlbWVudC5wcm90b3R5cGUse1A6JGMsYXBwZW5kOmFkfSk7bmQoYSl9XG47dmFyIHBkPXdpbmRvdy5jdXN0b21FbGVtZW50cztpZighcGR8fHBkLmZvcmNlUG9seWZpbGx8fFwiZnVuY3Rpb25cIiE9dHlwZW9mIHBkLmRlZmluZXx8XCJmdW5jdGlvblwiIT10eXBlb2YgcGQuZ2V0KXt2YXIgUD1uZXcgdWM7amQoKTtsZCgpO2tkKFAsRG9jdW1lbnRGcmFnbWVudC5wcm90b3R5cGUse1A6SmMsYXBwZW5kOktjfSk7bWQoKTtvZCgpO2RvY3VtZW50Ll9fQ0VfaGFzUmVnaXN0cnk9ITA7dmFyIGN1c3RvbUVsZW1lbnRzPW5ldyBPKFApO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3csXCJjdXN0b21FbGVtZW50c1wiLHtjb25maWd1cmFibGU6ITAsZW51bWVyYWJsZTohMCx2YWx1ZTpjdXN0b21FbGVtZW50c30pfTsvKlxuXG5Db3B5cmlnaHQgKGMpIDIwMTcgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuZnVuY3Rpb24gcWQoKXt0aGlzLmVuZD10aGlzLnN0YXJ0PTA7dGhpcy5ydWxlcz10aGlzLnBhcmVudD10aGlzLnByZXZpb3VzPW51bGw7dGhpcy5jc3NUZXh0PXRoaXMucGFyc2VkQ3NzVGV4dD1cIlwiO3RoaXMuYXRSdWxlPSExO3RoaXMudHlwZT0wO3RoaXMucGFyc2VkU2VsZWN0b3I9dGhpcy5zZWxlY3Rvcj10aGlzLmtleWZyYW1lc05hbWU9XCJcIn1cbmZ1bmN0aW9uIHJkKGEpe2E9YS5yZXBsYWNlKHNkLFwiXCIpLnJlcGxhY2UodGQsXCJcIik7dmFyIGI9dWQsYz1hLGQ9bmV3IHFkO2Quc3RhcnQ9MDtkLmVuZD1jLmxlbmd0aDtmb3IodmFyIGU9ZCxmPTAsaD1jLmxlbmd0aDtmPGg7ZisrKWlmKFwie1wiPT09Y1tmXSl7ZS5ydWxlc3x8KGUucnVsZXM9W10pO3ZhciBnPWUsaz1nLnJ1bGVzW2cucnVsZXMubGVuZ3RoLTFdfHxudWxsO2U9bmV3IHFkO2Uuc3RhcnQ9ZisxO2UucGFyZW50PWc7ZS5wcmV2aW91cz1rO2cucnVsZXMucHVzaChlKX1lbHNlXCJ9XCI9PT1jW2ZdJiYoZS5lbmQ9ZisxLGU9ZS5wYXJlbnR8fGQpO3JldHVybiBiKGQsYSl9XG5mdW5jdGlvbiB1ZChhLGIpe3ZhciBjPWIuc3Vic3RyaW5nKGEuc3RhcnQsYS5lbmQtMSk7YS5wYXJzZWRDc3NUZXh0PWEuY3NzVGV4dD1jLnRyaW0oKTthLnBhcmVudCYmKGM9Yi5zdWJzdHJpbmcoYS5wcmV2aW91cz9hLnByZXZpb3VzLmVuZDphLnBhcmVudC5zdGFydCxhLnN0YXJ0LTEpLGM9dmQoYyksYz1jLnJlcGxhY2Uod2QsXCIgXCIpLGM9Yy5zdWJzdHJpbmcoYy5sYXN0SW5kZXhPZihcIjtcIikrMSksYz1hLnBhcnNlZFNlbGVjdG9yPWEuc2VsZWN0b3I9Yy50cmltKCksYS5hdFJ1bGU9MD09PWMuaW5kZXhPZihcIkBcIiksYS5hdFJ1bGU/MD09PWMuaW5kZXhPZihcIkBtZWRpYVwiKT9hLnR5cGU9eGQ6Yy5tYXRjaCh5ZCkmJihhLnR5cGU9emQsYS5rZXlmcmFtZXNOYW1lPWEuc2VsZWN0b3Iuc3BsaXQod2QpLnBvcCgpKTphLnR5cGU9MD09PWMuaW5kZXhPZihcIi0tXCIpP0FkOkJkKTtpZihjPWEucnVsZXMpZm9yKHZhciBkPTAsZT1jLmxlbmd0aCxmO2Q8ZSYmKGY9Y1tkXSk7ZCsrKXVkKGYsXG5iKTtyZXR1cm4gYX1mdW5jdGlvbiB2ZChhKXtyZXR1cm4gYS5yZXBsYWNlKC9cXFxcKFswLTlhLWZdezEsNn0pXFxzL2dpLGZ1bmN0aW9uKGEsYyl7YT1jO2ZvcihjPTYtYS5sZW5ndGg7Yy0tOylhPVwiMFwiK2E7cmV0dXJuXCJcXFxcXCIrYX0pfVxuZnVuY3Rpb24gQ2QoYSxiLGMpe2M9dm9pZCAwPT09Yz9cIlwiOmM7dmFyIGQ9XCJcIjtpZihhLmNzc1RleHR8fGEucnVsZXMpe3ZhciBlPWEucnVsZXMsZjtpZihmPWUpZj1lWzBdLGY9IShmJiZmLnNlbGVjdG9yJiYwPT09Zi5zZWxlY3Rvci5pbmRleE9mKFwiLS1cIikpO2lmKGYpe2Y9MDtmb3IodmFyIGg9ZS5sZW5ndGgsZztmPGgmJihnPWVbZl0pO2YrKylkPUNkKGcsYixkKX1lbHNlIGI/Yj1hLmNzc1RleHQ6KGI9YS5jc3NUZXh0LGI9Yi5yZXBsYWNlKERkLFwiXCIpLnJlcGxhY2UoRWQsXCJcIiksYj1iLnJlcGxhY2UoRmQsXCJcIikucmVwbGFjZShHZCxcIlwiKSksKGQ9Yi50cmltKCkpJiYoZD1cIiAgXCIrZCtcIlxcblwiKX1kJiYoYS5zZWxlY3RvciYmKGMrPWEuc2VsZWN0b3IrXCIge1xcblwiKSxjKz1kLGEuc2VsZWN0b3ImJihjKz1cIn1cXG5cXG5cIikpO3JldHVybiBjfVxudmFyIEJkPTEsemQ9Nyx4ZD00LEFkPTFFMyxzZD0vXFwvXFwqW14qXSpcXCorKFteLypdW14qXSpcXCorKSpcXC8vZ2ltLHRkPS9AaW1wb3J0W147XSo7L2dpbSxEZD0vKD86XlteO1xcLVxcc31dKyk/LS1bXjt7fV0qPzpbXnt9O10qPyg/Ols7XFxuXXwkKS9naW0sRWQ9Lyg/Ol5bXjtcXC1cXHN9XSspPy0tW147e31dKj86W157fTtdKj97W159XSo/fSg/Ols7XFxuXXwkKT8vZ2ltLEZkPS9AYXBwbHlcXHMqXFwoP1teKTtdKlxcKT9cXHMqKD86WztcXG5dfCQpPy9naW0sR2Q9L1teOzpdKj86W147XSo/dmFyXFwoW147XSpcXCkoPzpbO1xcbl18JCk/L2dpbSx5ZD0vXkBbXlxcc10qa2V5ZnJhbWVzLyx3ZD0vXFxzKy9nO3ZhciBRPSEod2luZG93LlNoYWR5RE9NJiZ3aW5kb3cuU2hhZHlET00uaW5Vc2UpLEhkO2Z1bmN0aW9uIElkKGEpe0hkPWEmJmEuc2hpbWNzc3Byb3BlcnRpZXM/ITE6UXx8IShuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9BcHBsZVdlYktpdFxcLzYwMXxFZGdlXFwvMTUvKXx8IXdpbmRvdy5DU1N8fCFDU1Muc3VwcG9ydHN8fCFDU1Muc3VwcG9ydHMoXCJib3gtc2hhZG93XCIsXCIwIDAgMCB2YXIoLS1mb28pXCIpKX13aW5kb3cuU2hhZHlDU1MmJnZvaWQgMCE9PXdpbmRvdy5TaGFkeUNTUy5uYXRpdmVDc3M/SGQ9d2luZG93LlNoYWR5Q1NTLm5hdGl2ZUNzczp3aW5kb3cuU2hhZHlDU1M/KElkKHdpbmRvdy5TaGFkeUNTUyksd2luZG93LlNoYWR5Q1NTPXZvaWQgMCk6SWQod2luZG93LldlYkNvbXBvbmVudHMmJndpbmRvdy5XZWJDb21wb25lbnRzLmZsYWdzKTt2YXIgUj1IZDt2YXIgSmQ9Lyg/Ol58WztcXHN7XVxccyopKC0tW1xcdy1dKj8pXFxzKjpcXHMqKD86KCg/OicoPzpcXFxcJ3wuKSo/J3xcIig/OlxcXFxcInwuKSo/XCJ8XFwoW14pXSo/XFwpfFtefTt7XSkrKXxcXHsoW159XSopXFx9KD86KD89WztcXHN9XSl8JCkpL2dpLEtkPS8oPzpefFxcVyspQGFwcGx5XFxzKlxcKD8oW14pO1xcbl0qKVxcKT8vZ2ksTWQ9LygtLVtcXHctXSspXFxzKihbOiw7KV18JCkvZ2ksTmQ9LyhhbmltYXRpb25cXHMqOil8KGFuaW1hdGlvbi1uYW1lXFxzKjopLyxPZD0vQG1lZGlhXFxzKC4qKS8sUGQ9L1xce1tefV0qXFx9L2c7dmFyIFFkPW5ldyBTZXQ7ZnVuY3Rpb24gUyhhLGIpe2lmKCFhKXJldHVyblwiXCI7XCJzdHJpbmdcIj09PXR5cGVvZiBhJiYoYT1yZChhKSk7YiYmVChhLGIpO3JldHVybiBDZChhLFIpfWZ1bmN0aW9uIFJkKGEpeyFhLl9fY3NzUnVsZXMmJmEudGV4dENvbnRlbnQmJihhLl9fY3NzUnVsZXM9cmQoYS50ZXh0Q29udGVudCkpO3JldHVybiBhLl9fY3NzUnVsZXN8fG51bGx9ZnVuY3Rpb24gU2QoYSl7cmV0dXJuISFhLnBhcmVudCYmYS5wYXJlbnQudHlwZT09PXpkfWZ1bmN0aW9uIFQoYSxiLGMsZCl7aWYoYSl7dmFyIGU9ITEsZj1hLnR5cGU7aWYoZCYmZj09PXhkKXt2YXIgaD1hLnNlbGVjdG9yLm1hdGNoKE9kKTtoJiYod2luZG93Lm1hdGNoTWVkaWEoaFsxXSkubWF0Y2hlc3x8KGU9ITApKX1mPT09QmQ/YihhKTpjJiZmPT09emQ/YyhhKTpmPT09QWQmJihlPSEwKTtpZigoYT1hLnJ1bGVzKSYmIWUpe2U9MDtmPWEubGVuZ3RoO2Zvcih2YXIgZztlPGYmJihnPWFbZV0pO2UrKylUKGcsYixjLGQpfX19XG5mdW5jdGlvbiBUZChhLGIsYyxkKXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7YiYmZS5zZXRBdHRyaWJ1dGUoXCJzY29wZVwiLGIpO2UudGV4dENvbnRlbnQ9YTtVZChlLGMsZCk7cmV0dXJuIGV9dmFyIFU9bnVsbDtmdW5jdGlvbiBVZChhLGIsYyl7Yj1ifHxkb2N1bWVudC5oZWFkO2IuaW5zZXJ0QmVmb3JlKGEsYyYmYy5uZXh0U2libGluZ3x8Yi5maXJzdENoaWxkKTtVP2EuY29tcGFyZURvY3VtZW50UG9zaXRpb24oVSk9PT1Ob2RlLkRPQ1VNRU5UX1BPU0lUSU9OX1BSRUNFRElORyYmKFU9YSk6VT1hfVxuZnVuY3Rpb24gVmQoYSxiKXt2YXIgYz1hLmluZGV4T2YoXCJ2YXIoXCIpO2lmKC0xPT09YylyZXR1cm4gYihhLFwiXCIsXCJcIixcIlwiKTthOnt2YXIgZD0wO3ZhciBlPWMrMztmb3IodmFyIGY9YS5sZW5ndGg7ZTxmO2UrKylpZihcIihcIj09PWFbZV0pZCsrO2Vsc2UgaWYoXCIpXCI9PT1hW2VdJiYwPT09LS1kKWJyZWFrIGE7ZT0tMX1kPWEuc3Vic3RyaW5nKGMrNCxlKTtjPWEuc3Vic3RyaW5nKDAsYyk7YT1WZChhLnN1YnN0cmluZyhlKzEpLGIpO2U9ZC5pbmRleE9mKFwiLFwiKTtyZXR1cm4tMT09PWU/YihjLGQudHJpbSgpLFwiXCIsYSk6YihjLGQuc3Vic3RyaW5nKDAsZSkudHJpbSgpLGQuc3Vic3RyaW5nKGUrMSkudHJpbSgpLGEpfWZ1bmN0aW9uIFdkKGEsYil7UT9hLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsYik6d2luZG93LlNoYWR5RE9NLm5hdGl2ZU1ldGhvZHMuc2V0QXR0cmlidXRlLmNhbGwoYSxcImNsYXNzXCIsYil9XG5mdW5jdGlvbiBWKGEpe3ZhciBiPWEubG9jYWxOYW1lLGM9XCJcIjtiPy0xPGIuaW5kZXhPZihcIi1cIil8fChjPWIsYj1hLmdldEF0dHJpYnV0ZSYmYS5nZXRBdHRyaWJ1dGUoXCJpc1wiKXx8XCJcIik6KGI9YS5pcyxjPWEuZXh0ZW5kcyk7cmV0dXJue2lzOmIsSjpjfX07ZnVuY3Rpb24gWGQoKXt9ZnVuY3Rpb24gWWQoYSxiLGMpe3ZhciBkPVc7YS5fX3N0eWxlU2NvcGVkP2EuX19zdHlsZVNjb3BlZD1udWxsOlpkKGQsYSxifHxcIlwiLGMpfWZ1bmN0aW9uIFpkKGEsYixjLGQpe2Iubm9kZVR5cGU9PT1Ob2RlLkVMRU1FTlRfTk9ERSYmJGQoYixjLGQpO2lmKGI9XCJ0ZW1wbGF0ZVwiPT09Yi5sb2NhbE5hbWU/KGIuY29udGVudHx8Yi5ZYSkuY2hpbGROb2RlczpiLmNoaWxkcmVufHxiLmNoaWxkTm9kZXMpZm9yKHZhciBlPTA7ZTxiLmxlbmd0aDtlKyspWmQoYSxiW2VdLGMsZCl9XG5mdW5jdGlvbiAkZChhLGIsYyl7aWYoYilpZihhLmNsYXNzTGlzdCljPyhhLmNsYXNzTGlzdC5yZW1vdmUoXCJzdHlsZS1zY29wZVwiKSxhLmNsYXNzTGlzdC5yZW1vdmUoYikpOihhLmNsYXNzTGlzdC5hZGQoXCJzdHlsZS1zY29wZVwiKSxhLmNsYXNzTGlzdC5hZGQoYikpO2Vsc2UgaWYoYS5nZXRBdHRyaWJ1dGUpe3ZhciBkPWEuZ2V0QXR0cmlidXRlKGFlKTtjP2QmJihiPWQucmVwbGFjZShcInN0eWxlLXNjb3BlXCIsXCJcIikucmVwbGFjZShiLFwiXCIpLFdkKGEsYikpOldkKGEsKGQ/ZCtcIiBcIjpcIlwiKStcInN0eWxlLXNjb3BlIFwiK2IpfX1mdW5jdGlvbiBiZShhLGIsYyl7dmFyIGQ9VyxlPWEuX19jc3NCdWlsZDtRfHxcInNoYWR5XCI9PT1lP2I9UyhiLGMpOihhPVYoYSksYj1jZShkLGIsYS5pcyxhLkosYykrXCJcXG5cXG5cIik7cmV0dXJuIGIudHJpbSgpfVxuZnVuY3Rpb24gY2UoYSxiLGMsZCxlKXt2YXIgZj1kZShjLGQpO2M9Yz9lZStjOlwiXCI7cmV0dXJuIFMoYixmdW5jdGlvbihiKXtiLmN8fChiLnNlbGVjdG9yPWIuaj1mZShhLGIsYS5iLGMsZiksYi5jPSEwKTtlJiZlKGIsYyxmKX0pfWZ1bmN0aW9uIGRlKGEsYil7cmV0dXJuIGI/XCJbaXM9XCIrYStcIl1cIjphfWZ1bmN0aW9uIGZlKGEsYixjLGQsZSl7dmFyIGY9Yi5zZWxlY3Rvci5zcGxpdChnZSk7aWYoIVNkKGIpKXtiPTA7Zm9yKHZhciBoPWYubGVuZ3RoLGc7YjxoJiYoZz1mW2JdKTtiKyspZltiXT1jLmNhbGwoYSxnLGQsZSl9cmV0dXJuIGYuam9pbihnZSl9ZnVuY3Rpb24gaGUoYSl7cmV0dXJuIGEucmVwbGFjZShpZSxmdW5jdGlvbihhLGMsZCl7LTE8ZC5pbmRleE9mKFwiK1wiKT9kPWQucmVwbGFjZSgvXFwrL2csXCJfX19cIik6LTE8ZC5pbmRleE9mKFwiX19fXCIpJiYoZD1kLnJlcGxhY2UoL19fXy9nLFwiK1wiKSk7cmV0dXJuXCI6XCIrYytcIihcIitkK1wiKVwifSl9XG5YZC5wcm90b3R5cGUuYj1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9ITE7YT1hLnRyaW0oKTt2YXIgZT1pZS50ZXN0KGEpO2UmJihhPWEucmVwbGFjZShpZSxmdW5jdGlvbihhLGIsYyl7cmV0dXJuXCI6XCIrYitcIihcIitjLnJlcGxhY2UoL1xccy9nLFwiXCIpK1wiKVwifSksYT1oZShhKSk7YT1hLnJlcGxhY2UoamUsa2UrXCIgJDFcIik7YT1hLnJlcGxhY2UobGUsZnVuY3Rpb24oYSxlLGcpe2R8fChhPW1lKGcsZSxiLGMpLGQ9ZHx8YS5zdG9wLGU9YS5CYSxnPWEudmFsdWUpO3JldHVybiBlK2d9KTtlJiYoYT1oZShhKSk7cmV0dXJuIGF9O1xuZnVuY3Rpb24gbWUoYSxiLGMsZCl7dmFyIGU9YS5pbmRleE9mKG5lKTswPD1hLmluZGV4T2Yoa2UpP2E9b2UoYSxkKTowIT09ZSYmKGE9Yz9wZShhLGMpOmEpO2M9ITE7MDw9ZSYmKGI9XCJcIixjPSEwKTtpZihjKXt2YXIgZj0hMDtjJiYoYT1hLnJlcGxhY2UocWUsZnVuY3Rpb24oYSxiKXtyZXR1cm5cIiA+IFwiK2J9KSl9YT1hLnJlcGxhY2UocmUsZnVuY3Rpb24oYSxiLGMpe3JldHVybidbZGlyPVwiJytjKydcIl0gJytiK1wiLCBcIitiKydbZGlyPVwiJytjKydcIl0nfSk7cmV0dXJue3ZhbHVlOmEsQmE6YixzdG9wOmZ9fWZ1bmN0aW9uIHBlKGEsYil7YT1hLnNwbGl0KHNlKTthWzBdKz1iO3JldHVybiBhLmpvaW4oc2UpfVxuZnVuY3Rpb24gb2UoYSxiKXt2YXIgYz1hLm1hdGNoKHRlKTtyZXR1cm4oYz1jJiZjWzJdLnRyaW0oKXx8XCJcIik/Y1swXS5tYXRjaCh1ZSk/YS5yZXBsYWNlKHRlLGZ1bmN0aW9uKGEsYyxmKXtyZXR1cm4gYitmfSk6Yy5zcGxpdCh1ZSlbMF09PT1iP2M6dmU6YS5yZXBsYWNlKGtlLGIpfWZ1bmN0aW9uIHdlKGEpe2Euc2VsZWN0b3I9PT14ZSYmKGEuc2VsZWN0b3I9XCJodG1sXCIpfVhkLnByb3RvdHlwZS5jPWZ1bmN0aW9uKGEpe3JldHVybiBhLm1hdGNoKG5lKT90aGlzLmIoYSx5ZSk6cGUoYS50cmltKCkseWUpfTtwLk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFhkLnByb3RvdHlwZSx7YTp7Y29uZmlndXJhYmxlOiEwLGVudW1lcmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuXCJzdHlsZS1zY29wZVwifX19KTtcbnZhciBpZT0vOihudGhbLVxcd10rKVxcKChbXildKylcXCkvLHllPVwiOm5vdCguc3R5bGUtc2NvcGUpXCIsZ2U9XCIsXCIsbGU9LyhefFtcXHM+K35dKykoKD86XFxbLis/XFxdfFteXFxzPit+PVtdKSspL2csdWU9L1tbLjojKl0vLGtlPVwiOmhvc3RcIix4ZT1cIjpyb290XCIsbmU9XCI6OnNsb3R0ZWRcIixqZT1uZXcgUmVnRXhwKFwiXihcIituZStcIilcIiksdGU9Lyg6aG9zdCkoPzpcXCgoKD86XFwoW14pKF0qXFwpfFteKShdKikrPylcXCkpLyxxZT0vKD86OjpzbG90dGVkKSg/OlxcKCgoPzpcXChbXikoXSpcXCl8W14pKF0qKSs/KVxcKSkvLHJlPS8oLiopOmRpclxcKCg/OihsdHJ8cnRsKSlcXCkvLGVlPVwiLlwiLHNlPVwiOlwiLGFlPVwiY2xhc3NcIix2ZT1cInNob3VsZF9ub3RfbWF0Y2hcIixXPW5ldyBYZDtmdW5jdGlvbiB6ZShhLGIsYyxkKXt0aGlzLnU9YXx8bnVsbDt0aGlzLmI9Ynx8bnVsbDt0aGlzLmJhPWN8fFtdO3RoaXMuQj1udWxsO3RoaXMuSj1kfHxcIlwiO3RoaXMuYT10aGlzLm89dGhpcy52PW51bGx9ZnVuY3Rpb24gWChhKXtyZXR1cm4gYT9hLl9fc3R5bGVJbmZvOm51bGx9ZnVuY3Rpb24gQWUoYSxiKXtyZXR1cm4gYS5fX3N0eWxlSW5mbz1ifXplLnByb3RvdHlwZS5jPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudX07emUucHJvdG90eXBlLl9nZXRTdHlsZVJ1bGVzPXplLnByb3RvdHlwZS5jO3ZhciBCZSxDZT13aW5kb3cuRWxlbWVudC5wcm90b3R5cGU7QmU9Q2UubWF0Y2hlc3x8Q2UubWF0Y2hlc1NlbGVjdG9yfHxDZS5tb3pNYXRjaGVzU2VsZWN0b3J8fENlLm1zTWF0Y2hlc1NlbGVjdG9yfHxDZS5vTWF0Y2hlc1NlbGVjdG9yfHxDZS53ZWJraXRNYXRjaGVzU2VsZWN0b3I7dmFyIERlPW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goXCJUcmlkZW50XCIpO2Z1bmN0aW9uIEVlKCl7fWZ1bmN0aW9uIEZlKGEpe3ZhciBiPXt9LGM9W10sZD0wO1QoYSxmdW5jdGlvbihhKXtHZShhKTthLmluZGV4PWQrKzthPWEuZy5jc3NUZXh0O2Zvcih2YXIgYztjPU1kLmV4ZWMoYSk7KXt2YXIgZT1jWzFdO1wiOlwiIT09Y1syXSYmKGJbZV09ITApfX0sZnVuY3Rpb24oYSl7Yy5wdXNoKGEpfSk7YS5iPWM7YT1bXTtmb3IodmFyIGUgaW4gYilhLnB1c2goZSk7cmV0dXJuIGF9XG5mdW5jdGlvbiBHZShhKXtpZighYS5nKXt2YXIgYj17fSxjPXt9O0hlKGEsYykmJihiLnM9YyxhLnJ1bGVzPW51bGwpO2IuY3NzVGV4dD1hLnBhcnNlZENzc1RleHQucmVwbGFjZShQZCxcIlwiKS5yZXBsYWNlKEpkLFwiXCIpO2EuZz1ifX1mdW5jdGlvbiBIZShhLGIpe3ZhciBjPWEuZztpZihjKXtpZihjLnMpcmV0dXJuIE9iamVjdC5hc3NpZ24oYixjLnMpLCEwfWVsc2V7Yz1hLnBhcnNlZENzc1RleHQ7Zm9yKHZhciBkO2E9SmQuZXhlYyhjKTspe2Q9KGFbMl18fGFbM10pLnRyaW0oKTtpZihcImluaGVyaXRcIiE9PWR8fFwidW5zZXRcIiE9PWQpYlthWzFdLnRyaW0oKV09ZDtkPSEwfXJldHVybiBkfX1cbmZ1bmN0aW9uIEllKGEsYixjKXtiJiYoYj0wPD1iLmluZGV4T2YoXCI7XCIpP0plKGEsYixjKTpWZChiLGZ1bmN0aW9uKGIsZSxmLGgpe2lmKCFlKXJldHVybiBiK2g7KGU9SWUoYSxjW2VdLGMpKSYmXCJpbml0aWFsXCIhPT1lP1wiYXBwbHktc2hpbS1pbmhlcml0XCI9PT1lJiYoZT1cImluaGVyaXRcIik6ZT1JZShhLGNbZl18fGYsYyl8fGY7cmV0dXJuIGIrKGV8fFwiXCIpK2h9KSk7cmV0dXJuIGImJmIudHJpbSgpfHxcIlwifVxuZnVuY3Rpb24gSmUoYSxiLGMpe2I9Yi5zcGxpdChcIjtcIik7Zm9yKHZhciBkPTAsZSxmO2Q8Yi5sZW5ndGg7ZCsrKWlmKGU9YltkXSl7S2QubGFzdEluZGV4PTA7aWYoZj1LZC5leGVjKGUpKWU9SWUoYSxjW2ZbMV1dLGMpO2Vsc2UgaWYoZj1lLmluZGV4T2YoXCI6XCIpLC0xIT09Zil7dmFyIGg9ZS5zdWJzdHJpbmcoZik7aD1oLnRyaW0oKTtoPUllKGEsaCxjKXx8aDtlPWUuc3Vic3RyaW5nKDAsZikraH1iW2RdPWUmJmUubGFzdEluZGV4T2YoXCI7XCIpPT09ZS5sZW5ndGgtMT9lLnNsaWNlKDAsLTEpOmV8fFwiXCJ9cmV0dXJuIGIuam9pbihcIjtcIil9XG5mdW5jdGlvbiBLZShhLGIpe3ZhciBjPXt9LGQ9W107VChhLGZ1bmN0aW9uKGEpe2EuZ3x8R2UoYSk7dmFyIGU9YS5qfHxhLnBhcnNlZFNlbGVjdG9yO2ImJmEuZy5zJiZlJiZCZS5jYWxsKGIsZSkmJihIZShhLGMpLGE9YS5pbmRleCxlPXBhcnNlSW50KGEvMzIsMTApLGRbZV09KGRbZV18fDApfDE8PGElMzIpfSxudWxsLCEwKTtyZXR1cm57czpjLGtleTpkfX1cbmZ1bmN0aW9uIExlKGEsYixjLGQpe2IuZ3x8R2UoYik7aWYoYi5nLnMpe3ZhciBlPVYoYSk7YT1lLmlzO2U9ZS5KO2U9YT9kZShhLGUpOlwiaHRtbFwiO3ZhciBmPWIucGFyc2VkU2VsZWN0b3IsaD1cIjpob3N0ID4gKlwiPT09Znx8XCJodG1sXCI9PT1mLGc9MD09PWYuaW5kZXhPZihcIjpob3N0XCIpJiYhaDtcInNoYWR5XCI9PT1jJiYoaD1mPT09ZStcIiA+ICouXCIrZXx8LTEhPT1mLmluZGV4T2YoXCJodG1sXCIpLGc9IWgmJjA9PT1mLmluZGV4T2YoZSkpO1wic2hhZG93XCI9PT1jJiYoaD1cIjpob3N0ID4gKlwiPT09Znx8XCJodG1sXCI9PT1mLGc9ZyYmIWgpO2lmKGh8fGcpYz1lLGcmJihRJiYhYi5qJiYoYi5qPWZlKFcsYixXLmIsYT9lZSthOlwiXCIsZSkpLGM9Yi5qfHxlKSxkKHtQYTpjLEdhOmcsJGE6aH0pfX1cbmZ1bmN0aW9uIE1lKGEsYil7dmFyIGM9e30sZD17fSxlPWImJmIuX19jc3NCdWlsZDtUKGIsZnVuY3Rpb24oYil7TGUoYSxiLGUsZnVuY3Rpb24oZSl7QmUuY2FsbChhLlphfHxhLGUuUGEpJiYoZS5HYT9IZShiLGMpOkhlKGIsZCkpfSl9LG51bGwsITApO3JldHVybntOYTpkLEZhOmN9fVxuZnVuY3Rpb24gTmUoYSxiLGMsZCl7dmFyIGU9VihiKSxmPWRlKGUuaXMsZS5KKSxoPW5ldyBSZWdFeHAoXCIoPzpefFteLiNbOl0pXCIrKGIuZXh0ZW5kcz9cIlxcXFxcIitmLnNsaWNlKDAsLTEpK1wiXFxcXF1cIjpmKStcIigkfFsuOltcXFxccz4rfl0pXCIpO2U9WChiKS51O3ZhciBnPU9lKGUsZCk7cmV0dXJuIGJlKGIsZSxmdW5jdGlvbihiKXt2YXIgZT1cIlwiO2IuZ3x8R2UoYik7Yi5nLmNzc1RleHQmJihlPUplKGEsYi5nLmNzc1RleHQsYykpO2IuY3NzVGV4dD1lO2lmKCFRJiYhU2QoYikmJmIuY3NzVGV4dCl7dmFyIGs9ZT1iLmNzc1RleHQ7bnVsbD09Yi5qYSYmKGIuamE9TmQudGVzdChlKSk7aWYoYi5qYSlpZihudWxsPT1iLk8pe2IuTz1bXTtmb3IodmFyIHEgaW4gZylrPWdbcV0saz1rKGUpLGUhPT1rJiYoZT1rLGIuTy5wdXNoKHEpKX1lbHNle2ZvcihxPTA7cTxiLk8ubGVuZ3RoOysrcSlrPWdbYi5PW3FdXSxlPWsoZSk7az1lfWIuY3NzVGV4dD1rO2Iuaj1iLmp8fGIuc2VsZWN0b3I7ZT1cIi5cIitkO1xucT1iLmouc3BsaXQoXCIsXCIpO2s9MDtmb3IodmFyIEU9cS5sZW5ndGgsSjtrPEUmJihKPXFba10pO2srKylxW2tdPUoubWF0Y2goaCk/Si5yZXBsYWNlKGYsZSk6ZStcIiBcIitKO2Iuc2VsZWN0b3I9cS5qb2luKFwiLFwiKX19KX1mdW5jdGlvbiBPZShhLGIpe2E9YS5iO3ZhciBjPXt9O2lmKCFRJiZhKWZvcih2YXIgZD0wLGU9YVtkXTtkPGEubGVuZ3RoO2U9YVsrK2RdKXt2YXIgZj1lLGg9YjtmLmY9bmV3IFJlZ0V4cChmLmtleWZyYW1lc05hbWUsXCJnXCIpO2YuYT1mLmtleWZyYW1lc05hbWUrXCItXCIraDtmLmo9Zi5qfHxmLnNlbGVjdG9yO2Yuc2VsZWN0b3I9Zi5qLnJlcGxhY2UoZi5rZXlmcmFtZXNOYW1lLGYuYSk7Y1tlLmtleWZyYW1lc05hbWVdPVBlKGUpfXJldHVybiBjfWZ1bmN0aW9uIFBlKGEpe3JldHVybiBmdW5jdGlvbihiKXtyZXR1cm4gYi5yZXBsYWNlKGEuZixhLmEpfX1cbmZ1bmN0aW9uIFFlKGEsYil7dmFyIGM9UmUsZD1SZChhKTthLnRleHRDb250ZW50PVMoZCxmdW5jdGlvbihhKXt2YXIgZD1hLmNzc1RleHQ9YS5wYXJzZWRDc3NUZXh0O2EuZyYmYS5nLmNzc1RleHQmJihkPWQucmVwbGFjZShEZCxcIlwiKS5yZXBsYWNlKEVkLFwiXCIpLGEuY3NzVGV4dD1KZShjLGQsYikpfSl9cC5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhFZS5wcm90b3R5cGUse2E6e2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVyblwieC1zY29wZVwifX19KTt2YXIgUmU9bmV3IEVlO3ZhciBTZT17fSxUZT13aW5kb3cuY3VzdG9tRWxlbWVudHM7aWYoVGUmJiFRKXt2YXIgVWU9VGUuZGVmaW5lO1RlLmRlZmluZT1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9ZG9jdW1lbnQuY3JlYXRlQ29tbWVudChcIiBTaGFkeSBET00gc3R5bGVzIGZvciBcIithK1wiIFwiKSxlPWRvY3VtZW50LmhlYWQ7ZS5pbnNlcnRCZWZvcmUoZCwoVT9VLm5leHRTaWJsaW5nOm51bGwpfHxlLmZpcnN0Q2hpbGQpO1U9ZDtTZVthXT1kO3JldHVybiBVZS5jYWxsKFRlLGEsYixjKX19O2Z1bmN0aW9uIFZlKCl7dGhpcy5jYWNoZT17fX1WZS5wcm90b3R5cGUuc3RvcmU9ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9dGhpcy5jYWNoZVthXXx8W107ZS5wdXNoKHtzOmIsc3R5bGVFbGVtZW50OmMsbzpkfSk7MTAwPGUubGVuZ3RoJiZlLnNoaWZ0KCk7dGhpcy5jYWNoZVthXT1lfTtWZS5wcm90b3R5cGUuZmV0Y2g9ZnVuY3Rpb24oYSxiLGMpe2lmKGE9dGhpcy5jYWNoZVthXSlmb3IodmFyIGQ9YS5sZW5ndGgtMTswPD1kO2QtLSl7dmFyIGU9YVtkXSxmO2E6e2ZvcihmPTA7ZjxjLmxlbmd0aDtmKyspe3ZhciBoPWNbZl07aWYoZS5zW2hdIT09YltoXSl7Zj0hMTticmVhayBhfX1mPSEwfWlmKGYpcmV0dXJuIGV9fTtmdW5jdGlvbiBXZSgpe31cbmZ1bmN0aW9uIFhlKGEpe2Zvcih2YXIgYj0wO2I8YS5sZW5ndGg7YisrKXt2YXIgYz1hW2JdO2lmKGMudGFyZ2V0IT09ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50JiZjLnRhcmdldCE9PWRvY3VtZW50LmhlYWQpZm9yKHZhciBkPTA7ZDxjLmFkZGVkTm9kZXMubGVuZ3RoO2QrKyl7dmFyIGU9Yy5hZGRlZE5vZGVzW2RdO2lmKGUubm9kZVR5cGU9PT1Ob2RlLkVMRU1FTlRfTk9ERSl7dmFyIGY9ZS5nZXRSb290Tm9kZSgpO3ZhciBoPWU7dmFyIGc9W107aC5jbGFzc0xpc3Q/Zz1BcnJheS5mcm9tKGguY2xhc3NMaXN0KTpoIGluc3RhbmNlb2Ygd2luZG93LlNWR0VsZW1lbnQmJmguaGFzQXR0cmlidXRlKFwiY2xhc3NcIikmJihnPWguZ2V0QXR0cmlidXRlKFwiY2xhc3NcIikuc3BsaXQoL1xccysvKSk7aD1nO2c9aC5pbmRleE9mKFcuYSk7aWYoKGg9LTE8Zz9oW2crMV06XCJcIikmJmY9PT1lLm93bmVyRG9jdW1lbnQpWWQoZSxoLCEwKTtlbHNlIGlmKGYubm9kZVR5cGU9PT1Ob2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUmJlxuKGY9Zi5ob3N0KSlpZihmPVYoZikuaXMsaD09PWYpZm9yKGU9d2luZG93LlNoYWR5RE9NLm5hdGl2ZU1ldGhvZHMucXVlcnlTZWxlY3RvckFsbC5jYWxsKGUsXCI6bm90KC5cIitXLmErXCIpXCIpLGY9MDtmPGUubGVuZ3RoO2YrKykkZChlW2ZdLGgpO2Vsc2UgaCYmWWQoZSxoLCEwKSxZZChlLGYpfX19fVxuaWYoIVEpe3ZhciBZZT1uZXcgTXV0YXRpb25PYnNlcnZlcihYZSksWmU9ZnVuY3Rpb24oYSl7WWUub2JzZXJ2ZShhLHtjaGlsZExpc3Q6ITAsc3VidHJlZTohMH0pfTtpZih3aW5kb3cuY3VzdG9tRWxlbWVudHMmJiF3aW5kb3cuY3VzdG9tRWxlbWVudHMucG9seWZpbGxXcmFwRmx1c2hDYWxsYmFjaylaZShkb2N1bWVudCk7ZWxzZXt2YXIgJGU9ZnVuY3Rpb24oKXtaZShkb2N1bWVudC5ib2R5KX07d2luZG93LkhUTUxJbXBvcnRzP3dpbmRvdy5IVE1MSW1wb3J0cy53aGVuUmVhZHkoJGUpOnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpe2lmKFwibG9hZGluZ1wiPT09ZG9jdW1lbnQucmVhZHlTdGF0ZSl7dmFyIGE9ZnVuY3Rpb24oKXskZSgpO2RvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZWFkeXN0YXRlY2hhbmdlXCIsYSl9O2RvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeXN0YXRlY2hhbmdlXCIsYSl9ZWxzZSAkZSgpfSl9V2U9ZnVuY3Rpb24oKXtYZShZZS50YWtlUmVjb3JkcygpKX19XG52YXIgYWY9V2U7dmFyIGJmPXt9O3ZhciBjZj1Qcm9taXNlLnJlc29sdmUoKTtmdW5jdGlvbiBkZihhKXtpZihhPWJmW2FdKWEuX2FwcGx5U2hpbUN1cnJlbnRWZXJzaW9uPWEuX2FwcGx5U2hpbUN1cnJlbnRWZXJzaW9ufHwwLGEuX2FwcGx5U2hpbVZhbGlkYXRpbmdWZXJzaW9uPWEuX2FwcGx5U2hpbVZhbGlkYXRpbmdWZXJzaW9ufHwwLGEuX2FwcGx5U2hpbU5leHRWZXJzaW9uPShhLl9hcHBseVNoaW1OZXh0VmVyc2lvbnx8MCkrMX1mdW5jdGlvbiBlZihhKXtyZXR1cm4gYS5fYXBwbHlTaGltQ3VycmVudFZlcnNpb249PT1hLl9hcHBseVNoaW1OZXh0VmVyc2lvbn1mdW5jdGlvbiBmZihhKXthLl9hcHBseVNoaW1WYWxpZGF0aW5nVmVyc2lvbj1hLl9hcHBseVNoaW1OZXh0VmVyc2lvbjthLmJ8fChhLmI9ITAsY2YudGhlbihmdW5jdGlvbigpe2EuX2FwcGx5U2hpbUN1cnJlbnRWZXJzaW9uPWEuX2FwcGx5U2hpbU5leHRWZXJzaW9uO2EuYj0hMX0pKX07dmFyIGdmPW51bGwsaGY9d2luZG93LkhUTUxJbXBvcnRzJiZ3aW5kb3cuSFRNTEltcG9ydHMud2hlblJlYWR5fHxudWxsLGpmO2Z1bmN0aW9uIGtmKGEpe3JlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpe2hmP2hmKGEpOihnZnx8KGdmPW5ldyBQcm9taXNlKGZ1bmN0aW9uKGEpe2pmPWF9KSxcImNvbXBsZXRlXCI9PT1kb2N1bWVudC5yZWFkeVN0YXRlP2pmKCk6ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5c3RhdGVjaGFuZ2VcIixmdW5jdGlvbigpe1wiY29tcGxldGVcIj09PWRvY3VtZW50LnJlYWR5U3RhdGUmJmpmKCl9KSksZ2YudGhlbihmdW5jdGlvbigpe2EmJmEoKX0pKX0pfTt2YXIgbGY9bmV3IFZlO2Z1bmN0aW9uIFkoKXt2YXIgYT10aGlzO3RoaXMuRj17fTt0aGlzLmM9ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O3ZhciBiPW5ldyBxZDtiLnJ1bGVzPVtdO3RoaXMuZj1BZSh0aGlzLmMsbmV3IHplKGIpKTt0aGlzLmw9ITE7dGhpcy5iPXRoaXMuYT1udWxsO2tmKGZ1bmN0aW9uKCl7bWYoYSl9KX1uPVkucHJvdG90eXBlO24ucGE9ZnVuY3Rpb24oKXthZigpfTtuLkRhPWZ1bmN0aW9uKGEpe3JldHVybiBSZChhKX07bi5SYT1mdW5jdGlvbihhKXtyZXR1cm4gUyhhKX07XG5uLnByZXBhcmVUZW1wbGF0ZT1mdW5jdGlvbihhLGIsYyl7aWYoIWEuZil7YS5mPSEwO2EubmFtZT1iO2EuZXh0ZW5kcz1jO2JmW2JdPWE7dmFyIGQ9KGQ9YS5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCJzdHlsZVwiKSk/ZC5nZXRBdHRyaWJ1dGUoXCJjc3MtYnVpbGRcIil8fFwiXCI6XCJcIjt2YXIgZT1bXTtmb3IodmFyIGY9YS5jb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJzdHlsZVwiKSxoPTA7aDxmLmxlbmd0aDtoKyspe3ZhciBnPWZbaF07aWYoZy5oYXNBdHRyaWJ1dGUoXCJzaGFkeS11bnNjb3BlZFwiKSl7aWYoIVEpe3ZhciBrPWcudGV4dENvbnRlbnQ7UWQuaGFzKGspfHwoUWQuYWRkKGspLGs9Zy5jbG9uZU5vZGUoITApLGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoaykpO2cucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChnKX19ZWxzZSBlLnB1c2goZy50ZXh0Q29udGVudCksZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGcpfWU9ZS5qb2luKFwiXCIpLnRyaW0oKTtjPXtpczpiLGV4dGVuZHM6YyxXYTpkfTtcblF8fFlkKGEuY29udGVudCxiKTttZih0aGlzKTtmPUtkLnRlc3QoZSl8fEpkLnRlc3QoZSk7S2QubGFzdEluZGV4PTA7SmQubGFzdEluZGV4PTA7ZT1yZChlKTtmJiZSJiZ0aGlzLmEmJnRoaXMuYS50cmFuc2Zvcm1SdWxlcyhlLGIpO2EuX3N0eWxlQXN0PWU7YS5sPWQ7ZD1bXTtSfHwoZD1GZShhLl9zdHlsZUFzdCkpO2lmKCFkLmxlbmd0aHx8UillPVE/YS5jb250ZW50Om51bGwsYj1TZVtiXSxmPWJlKGMsYS5fc3R5bGVBc3QpLGI9Zi5sZW5ndGg/VGQoZixjLmlzLGUsYik6dm9pZCAwLGEuYT1iO2EuYz1kfX07XG5mdW5jdGlvbiBuZihhKXshYS5iJiZ3aW5kb3cuU2hhZHlDU1MmJndpbmRvdy5TaGFkeUNTUy5DdXN0b21TdHlsZUludGVyZmFjZSYmKGEuYj13aW5kb3cuU2hhZHlDU1MuQ3VzdG9tU3R5bGVJbnRlcmZhY2UsYS5iLnRyYW5zZm9ybUNhbGxiYWNrPWZ1bmN0aW9uKGIpe2EubmEoYil9LGEuYi52YWxpZGF0ZUNhbGxiYWNrPWZ1bmN0aW9uKCl7cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7KGEuYi5lbnF1ZXVlZHx8YS5sKSYmYS5BKCl9KX0pfWZ1bmN0aW9uIG1mKGEpeyFhLmEmJndpbmRvdy5TaGFkeUNTUyYmd2luZG93LlNoYWR5Q1NTLkFwcGx5U2hpbSYmKGEuYT13aW5kb3cuU2hhZHlDU1MuQXBwbHlTaGltLGEuYS5pbnZhbGlkQ2FsbGJhY2s9ZGYpO25mKGEpfVxubi5BPWZ1bmN0aW9uKCl7bWYodGhpcyk7aWYodGhpcy5iKXt2YXIgYT10aGlzLmIucHJvY2Vzc1N0eWxlcygpO2lmKHRoaXMuYi5lbnF1ZXVlZCl7aWYoUilmb3IodmFyIGI9MDtiPGEubGVuZ3RoO2IrKyl7dmFyIGM9dGhpcy5iLmdldFN0eWxlRm9yQ3VzdG9tU3R5bGUoYVtiXSk7aWYoYyYmUiYmdGhpcy5hKXt2YXIgZD1SZChjKTttZih0aGlzKTt0aGlzLmEudHJhbnNmb3JtUnVsZXMoZCk7Yy50ZXh0Q29udGVudD1TKGQpfX1lbHNlIGZvcihvZih0aGlzLHRoaXMuYyx0aGlzLmYpLGI9MDtiPGEubGVuZ3RoO2IrKykoYz10aGlzLmIuZ2V0U3R5bGVGb3JDdXN0b21TdHlsZShhW2JdKSkmJlFlKGMsdGhpcy5mLnYpO3RoaXMuYi5lbnF1ZXVlZD0hMTt0aGlzLmwmJiFSJiZ0aGlzLnN0eWxlRG9jdW1lbnQoKX19fTtcbm4uc3R5bGVFbGVtZW50PWZ1bmN0aW9uKGEsYil7dmFyIGM9VihhKS5pcyxkPVgoYSk7aWYoIWQpe3ZhciBlPVYoYSk7ZD1lLmlzO2U9ZS5KO3ZhciBmPVNlW2RdO2Q9YmZbZF07aWYoZCl7dmFyIGg9ZC5fc3R5bGVBc3Q7dmFyIGc9ZC5jfWQ9QWUoYSxuZXcgemUoaCxmLGcsZSkpfWEhPT10aGlzLmMmJih0aGlzLmw9ITApO2ImJihkLkI9ZC5CfHx7fSxPYmplY3QuYXNzaWduKGQuQixiKSk7aWYoUil7aWYoZC5CKXtiPWQuQjtmb3IodmFyIGsgaW4gYiludWxsPT09az9hLnN0eWxlLnJlbW92ZVByb3BlcnR5KGspOmEuc3R5bGUuc2V0UHJvcGVydHkoayxiW2tdKX1pZigoKGs9YmZbY10pfHxhPT09dGhpcy5jKSYmayYmay5hJiYhZWYoaykpe2lmKGVmKGspfHxrLl9hcHBseVNoaW1WYWxpZGF0aW5nVmVyc2lvbiE9PWsuX2FwcGx5U2hpbU5leHRWZXJzaW9uKW1mKHRoaXMpLHRoaXMuYSYmdGhpcy5hLnRyYW5zZm9ybVJ1bGVzKGsuX3N0eWxlQXN0LGMpLGsuYS50ZXh0Q29udGVudD1iZShhLFxuZC51KSxmZihrKTtRJiYoYz1hLnNoYWRvd1Jvb3QpJiYoYy5xdWVyeVNlbGVjdG9yKFwic3R5bGVcIikudGV4dENvbnRlbnQ9YmUoYSxkLnUpKTtkLnU9ay5fc3R5bGVBc3R9fWVsc2UgaWYob2YodGhpcyxhLGQpLGQuYmEmJmQuYmEubGVuZ3RoKXtjPWQ7az1WKGEpLmlzO2Q9KGI9bGYuZmV0Y2goayxjLnYsYy5iYSkpP2Iuc3R5bGVFbGVtZW50Om51bGw7aD1jLm87KGc9YiYmYi5vKXx8KGc9dGhpcy5GW2tdPSh0aGlzLkZba118fDApKzEsZz1rK1wiLVwiK2cpO2Mubz1nO2c9Yy5vO2U9UmU7ZT1kP2QudGV4dENvbnRlbnR8fFwiXCI6TmUoZSxhLGMudixnKTtmPVgoYSk7dmFyIGw9Zi5hO2wmJiFRJiZsIT09ZCYmKGwuX3VzZUNvdW50LS0sMD49bC5fdXNlQ291bnQmJmwucGFyZW50Tm9kZSYmbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGwpKTtRP2YuYT8oZi5hLnRleHRDb250ZW50PWUsZD1mLmEpOmUmJihkPVRkKGUsZyxhLnNoYWRvd1Jvb3QsZi5iKSk6ZD9kLnBhcmVudE5vZGV8fChEZSYmXG4tMTxlLmluZGV4T2YoXCJAbWVkaWFcIikmJihkLnRleHRDb250ZW50PWUpLFVkKGQsbnVsbCxmLmIpKTplJiYoZD1UZChlLGcsbnVsbCxmLmIpKTtkJiYoZC5fdXNlQ291bnQ9ZC5fdXNlQ291bnR8fDAsZi5hIT1kJiZkLl91c2VDb3VudCsrLGYuYT1kKTtnPWQ7UXx8KGQ9Yy5vLGY9ZT1hLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwiLGgmJihmPWUucmVwbGFjZShuZXcgUmVnRXhwKFwiXFxcXHMqeC1zY29wZVxcXFxzKlwiK2grXCJcXFxccypcIixcImdcIiksXCIgXCIpKSxmKz0oZj9cIiBcIjpcIlwiKStcIngtc2NvcGUgXCIrZCxlIT09ZiYmV2QoYSxmKSk7Ynx8bGYuc3RvcmUoayxjLnYsZyxjLm8pfX07ZnVuY3Rpb24gcGYoYSxiKXtyZXR1cm4oYj1iLmdldFJvb3ROb2RlKCkuaG9zdCk/WChiKT9iOnBmKGEsYik6YS5jfVxuZnVuY3Rpb24gb2YoYSxiLGMpe2E9cGYoYSxiKTt2YXIgZD1YKGEpO2E9T2JqZWN0LmNyZWF0ZShkLnZ8fG51bGwpO3ZhciBlPU1lKGIsYy51KTtiPUtlKGQudSxiKS5zO09iamVjdC5hc3NpZ24oYSxlLkZhLGIsZS5OYSk7Yj1jLkI7Zm9yKHZhciBmIGluIGIpaWYoKGU9YltmXSl8fDA9PT1lKWFbZl09ZTtmPVJlO2I9T2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoYSk7Zm9yKGU9MDtlPGIubGVuZ3RoO2UrKylkPWJbZV0sYVtkXT1JZShmLGFbZF0sYSk7Yy52PWF9bi5zdHlsZURvY3VtZW50PWZ1bmN0aW9uKGEpe3RoaXMuc3R5bGVTdWJ0cmVlKHRoaXMuYyxhKX07XG5uLnN0eWxlU3VidHJlZT1mdW5jdGlvbihhLGIpe3ZhciBjPWEuc2hhZG93Um9vdDsoY3x8YT09PXRoaXMuYykmJnRoaXMuc3R5bGVFbGVtZW50KGEsYik7aWYoYj1jJiYoYy5jaGlsZHJlbnx8Yy5jaGlsZE5vZGVzKSlmb3IoYT0wO2E8Yi5sZW5ndGg7YSsrKXRoaXMuc3R5bGVTdWJ0cmVlKGJbYV0pO2Vsc2UgaWYoYT1hLmNoaWxkcmVufHxhLmNoaWxkTm9kZXMpZm9yKGI9MDtiPGEubGVuZ3RoO2IrKyl0aGlzLnN0eWxlU3VidHJlZShhW2JdKX07bi5uYT1mdW5jdGlvbihhKXt2YXIgYj10aGlzLGM9UmQoYSk7VChjLGZ1bmN0aW9uKGEpe2lmKFEpd2UoYSk7ZWxzZXt2YXIgYz1XO2Euc2VsZWN0b3I9YS5wYXJzZWRTZWxlY3Rvcjt3ZShhKTthLnNlbGVjdG9yPWEuaj1mZShjLGEsYy5jLHZvaWQgMCx2b2lkIDApfVImJihtZihiKSxiLmEmJmIuYS50cmFuc2Zvcm1SdWxlKGEpKX0pO1I/YS50ZXh0Q29udGVudD1TKGMpOnRoaXMuZi51LnJ1bGVzLnB1c2goYyl9O1xubi5nZXRDb21wdXRlZFN0eWxlVmFsdWU9ZnVuY3Rpb24oYSxiKXt2YXIgYztSfHwoYz0oWChhKXx8WChwZih0aGlzLGEpKSkudltiXSk7cmV0dXJuKGM9Y3x8d2luZG93LmdldENvbXB1dGVkU3R5bGUoYSkuZ2V0UHJvcGVydHlWYWx1ZShiKSk/Yy50cmltKCk6XCJcIn07bi5RYT1mdW5jdGlvbihhLGIpe3ZhciBjPWEuZ2V0Um9vdE5vZGUoKTtiPWI/Yi5zcGxpdCgvXFxzLyk6W107Yz1jLmhvc3QmJmMuaG9zdC5sb2NhbE5hbWU7aWYoIWMpe3ZhciBkPWEuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIik7aWYoZCl7ZD1kLnNwbGl0KC9cXHMvKTtmb3IodmFyIGU9MDtlPGQubGVuZ3RoO2UrKylpZihkW2VdPT09Vy5hKXtjPWRbZSsxXTticmVha319fWMmJmIucHVzaChXLmEsYyk7Unx8KGM9WChhKSkmJmMubyYmYi5wdXNoKFJlLmEsYy5vKTtXZChhLGIuam9pbihcIiBcIikpfTtuLnphPWZ1bmN0aW9uKGEpe3JldHVybiBYKGEpfTtZLnByb3RvdHlwZS5mbHVzaD1ZLnByb3RvdHlwZS5wYTtcblkucHJvdG90eXBlLnByZXBhcmVUZW1wbGF0ZT1ZLnByb3RvdHlwZS5wcmVwYXJlVGVtcGxhdGU7WS5wcm90b3R5cGUuc3R5bGVFbGVtZW50PVkucHJvdG90eXBlLnN0eWxlRWxlbWVudDtZLnByb3RvdHlwZS5zdHlsZURvY3VtZW50PVkucHJvdG90eXBlLnN0eWxlRG9jdW1lbnQ7WS5wcm90b3R5cGUuc3R5bGVTdWJ0cmVlPVkucHJvdG90eXBlLnN0eWxlU3VidHJlZTtZLnByb3RvdHlwZS5nZXRDb21wdXRlZFN0eWxlVmFsdWU9WS5wcm90b3R5cGUuZ2V0Q29tcHV0ZWRTdHlsZVZhbHVlO1kucHJvdG90eXBlLnNldEVsZW1lbnRDbGFzcz1ZLnByb3RvdHlwZS5RYTtZLnByb3RvdHlwZS5fc3R5bGVJbmZvRm9yTm9kZT1ZLnByb3RvdHlwZS56YTtZLnByb3RvdHlwZS50cmFuc2Zvcm1DdXN0b21TdHlsZUZvckRvY3VtZW50PVkucHJvdG90eXBlLm5hO1kucHJvdG90eXBlLmdldFN0eWxlQXN0PVkucHJvdG90eXBlLkRhO1kucHJvdG90eXBlLnN0eWxlQXN0VG9TdHJpbmc9WS5wcm90b3R5cGUuUmE7XG5ZLnByb3RvdHlwZS5mbHVzaEN1c3RvbVN0eWxlcz1ZLnByb3RvdHlwZS5BO09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFkucHJvdG90eXBlLHtuYXRpdmVTaGFkb3c6e2dldDpmdW5jdGlvbigpe3JldHVybiBRfX0sbmF0aXZlQ3NzOntnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gUn19fSk7dmFyIFo9bmV3IFkscWYscmY7d2luZG93LlNoYWR5Q1NTJiYocWY9d2luZG93LlNoYWR5Q1NTLkFwcGx5U2hpbSxyZj13aW5kb3cuU2hhZHlDU1MuQ3VzdG9tU3R5bGVJbnRlcmZhY2UpO3dpbmRvdy5TaGFkeUNTUz17U2NvcGluZ1NoaW06WixwcmVwYXJlVGVtcGxhdGU6ZnVuY3Rpb24oYSxiLGMpe1ouQSgpO1oucHJlcGFyZVRlbXBsYXRlKGEsYixjKX0sc3R5bGVTdWJ0cmVlOmZ1bmN0aW9uKGEsYil7Wi5BKCk7Wi5zdHlsZVN1YnRyZWUoYSxiKX0sc3R5bGVFbGVtZW50OmZ1bmN0aW9uKGEpe1ouQSgpO1ouc3R5bGVFbGVtZW50KGEpfSxzdHlsZURvY3VtZW50OmZ1bmN0aW9uKGEpe1ouQSgpO1ouc3R5bGVEb2N1bWVudChhKX0sZ2V0Q29tcHV0ZWRTdHlsZVZhbHVlOmZ1bmN0aW9uKGEsYil7cmV0dXJuIFouZ2V0Q29tcHV0ZWRTdHlsZVZhbHVlKGEsYil9LG5hdGl2ZUNzczpSLG5hdGl2ZVNoYWRvdzpRfTtxZiYmKHdpbmRvdy5TaGFkeUNTUy5BcHBseVNoaW09cWYpO1xucmYmJih3aW5kb3cuU2hhZHlDU1MuQ3VzdG9tU3R5bGVJbnRlcmZhY2U9cmYpOy8qXG5cbiBDb3B5cmlnaHQgKGMpIDIwMTQgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcbiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG52YXIgc2Y9d2luZG93LmN1c3RvbUVsZW1lbnRzLHRmPXdpbmRvdy5IVE1MSW1wb3J0cyx1Zj13aW5kb3cuSFRNTFRlbXBsYXRlRWxlbWVudDt3aW5kb3cuV2ViQ29tcG9uZW50cz13aW5kb3cuV2ViQ29tcG9uZW50c3x8e307aWYoc2YmJnNmLnBvbHlmaWxsV3JhcEZsdXNoQ2FsbGJhY2spe3ZhciB2Zix3Zj1mdW5jdGlvbigpe2lmKHZmKXt1Zi5BYSYmdWYuQWEod2luZG93LmRvY3VtZW50KTt2YXIgYT12Zjt2Zj1udWxsO2EoKTtyZXR1cm4hMH19LHhmPXRmLndoZW5SZWFkeTtzZi5wb2x5ZmlsbFdyYXBGbHVzaENhbGxiYWNrKGZ1bmN0aW9uKGEpe3ZmPWE7eGYod2YpfSk7dGYud2hlblJlYWR5PWZ1bmN0aW9uKGEpe3hmKGZ1bmN0aW9uKCl7d2YoKT90Zi53aGVuUmVhZHkoYSk6YSgpfSl9fVxudGYud2hlblJlYWR5KGZ1bmN0aW9uKCl7cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCl7d2luZG93LldlYkNvbXBvbmVudHMucmVhZHk9ITA7ZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoXCJXZWJDb21wb25lbnRzUmVhZHlcIix7YnViYmxlczohMH0pKX0pfSk7dmFyIHlmPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTt5Zi50ZXh0Q29udGVudD1cImJvZHkge3RyYW5zaXRpb246IG9wYWNpdHkgZWFzZS1pbiAwLjJzOyB9IFxcbmJvZHlbdW5yZXNvbHZlZF0ge29wYWNpdHk6IDA7IGRpc3BsYXk6IGJsb2NrOyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7IH0gXFxuXCI7dmFyIHpmPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkXCIpO3pmLmluc2VydEJlZm9yZSh5Zix6Zi5maXJzdENoaWxkKTt9KS5jYWxsKHRoaXMpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD13ZWJjb21wb25lbnRzLWhpLXNkLWNlLmpzLm1hcFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvQHdlYmNvbXBvbmVudHMvd2ViY29tcG9uZW50c2pzL3dlYmNvbXBvbmVudHMtaGktc2QtY2UuanNcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKEMpIE1pY3Jvc29mdC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbnZhciBSZWZsZWN0O1xyXG4oZnVuY3Rpb24gKFJlZmxlY3QpIHtcclxuICAgIFwidXNlIHN0cmljdFwiO1xyXG4gICAgdmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XHJcbiAgICAvLyBmZWF0dXJlIHRlc3QgZm9yIFN5bWJvbCBzdXBwb3J0XHJcbiAgICB2YXIgc3VwcG9ydHNTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCI7XHJcbiAgICB2YXIgdG9QcmltaXRpdmVTeW1ib2wgPSBzdXBwb3J0c1N5bWJvbCAmJiB0eXBlb2YgU3ltYm9sLnRvUHJpbWl0aXZlICE9PSBcInVuZGVmaW5lZFwiID8gU3ltYm9sLnRvUHJpbWl0aXZlIDogXCJAQHRvUHJpbWl0aXZlXCI7XHJcbiAgICB2YXIgaXRlcmF0b3JTeW1ib2wgPSBzdXBwb3J0c1N5bWJvbCAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yICE9PSBcInVuZGVmaW5lZFwiID8gU3ltYm9sLml0ZXJhdG9yIDogXCJAQGl0ZXJhdG9yXCI7XHJcbiAgICB2YXIgSGFzaE1hcDtcclxuICAgIChmdW5jdGlvbiAoSGFzaE1hcCkge1xyXG4gICAgICAgIHZhciBzdXBwb3J0c0NyZWF0ZSA9IHR5cGVvZiBPYmplY3QuY3JlYXRlID09PSBcImZ1bmN0aW9uXCI7IC8vIGZlYXR1cmUgdGVzdCBmb3IgT2JqZWN0LmNyZWF0ZSBzdXBwb3J0XHJcbiAgICAgICAgdmFyIHN1cHBvcnRzUHJvdG8gPSB7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5OyAvLyBmZWF0dXJlIHRlc3QgZm9yIF9fcHJvdG9fXyBzdXBwb3J0XHJcbiAgICAgICAgdmFyIGRvd25MZXZlbCA9ICFzdXBwb3J0c0NyZWF0ZSAmJiAhc3VwcG9ydHNQcm90bztcclxuICAgICAgICAvLyBjcmVhdGUgYW4gb2JqZWN0IGluIGRpY3Rpb25hcnkgbW9kZSAoYS5rLmEuIFwic2xvd1wiIG1vZGUgaW4gdjgpXHJcbiAgICAgICAgSGFzaE1hcC5jcmVhdGUgPSBzdXBwb3J0c0NyZWF0ZVxyXG4gICAgICAgICAgICA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIE1ha2VEaWN0aW9uYXJ5KE9iamVjdC5jcmVhdGUobnVsbCkpOyB9XHJcbiAgICAgICAgICAgIDogc3VwcG9ydHNQcm90b1xyXG4gICAgICAgICAgICAgICAgPyBmdW5jdGlvbiAoKSB7IHJldHVybiBNYWtlRGljdGlvbmFyeSh7IF9fcHJvdG9fXzogbnVsbCB9KTsgfVxyXG4gICAgICAgICAgICAgICAgOiBmdW5jdGlvbiAoKSB7IHJldHVybiBNYWtlRGljdGlvbmFyeSh7fSk7IH07XHJcbiAgICAgICAgSGFzaE1hcC5oYXMgPSBkb3duTGV2ZWxcclxuICAgICAgICAgICAgPyBmdW5jdGlvbiAobWFwLCBrZXkpIHsgcmV0dXJuIGhhc093bi5jYWxsKG1hcCwga2V5KTsgfVxyXG4gICAgICAgICAgICA6IGZ1bmN0aW9uIChtYXAsIGtleSkgeyByZXR1cm4ga2V5IGluIG1hcDsgfTtcclxuICAgICAgICBIYXNoTWFwLmdldCA9IGRvd25MZXZlbFxyXG4gICAgICAgICAgICA/IGZ1bmN0aW9uIChtYXAsIGtleSkgeyByZXR1cm4gaGFzT3duLmNhbGwobWFwLCBrZXkpID8gbWFwW2tleV0gOiB1bmRlZmluZWQ7IH1cclxuICAgICAgICAgICAgOiBmdW5jdGlvbiAobWFwLCBrZXkpIHsgcmV0dXJuIG1hcFtrZXldOyB9O1xyXG4gICAgfSkoSGFzaE1hcCB8fCAoSGFzaE1hcCA9IHt9KSk7XHJcbiAgICAvLyBMb2FkIGdsb2JhbCBvciBzaGltIHZlcnNpb25zIG9mIE1hcCwgU2V0LCBhbmQgV2Vha01hcFxyXG4gICAgdmFyIGZ1bmN0aW9uUHJvdG90eXBlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKEZ1bmN0aW9uKTtcclxuICAgIHZhciB1c2VQb2x5ZmlsbCA9IHR5cGVvZiBwcm9jZXNzID09PSBcIm9iamVjdFwiICYmIHByb2Nlc3MuZW52ICYmIHByb2Nlc3MuZW52W1wiUkVGTEVDVF9NRVRBREFUQV9VU0VfTUFQX1BPTFlGSUxMXCJdID09PSBcInRydWVcIjtcclxuICAgIHZhciBfTWFwID0gIXVzZVBvbHlmaWxsICYmIHR5cGVvZiBNYXAgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgTWFwLnByb3RvdHlwZS5lbnRyaWVzID09PSBcImZ1bmN0aW9uXCIgPyBNYXAgOiBDcmVhdGVNYXBQb2x5ZmlsbCgpO1xyXG4gICAgdmFyIF9TZXQgPSAhdXNlUG9seWZpbGwgJiYgdHlwZW9mIFNldCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTZXQucHJvdG90eXBlLmVudHJpZXMgPT09IFwiZnVuY3Rpb25cIiA/IFNldCA6IENyZWF0ZVNldFBvbHlmaWxsKCk7XHJcbiAgICB2YXIgX1dlYWtNYXAgPSAhdXNlUG9seWZpbGwgJiYgdHlwZW9mIFdlYWtNYXAgPT09IFwiZnVuY3Rpb25cIiA/IFdlYWtNYXAgOiBDcmVhdGVXZWFrTWFwUG9seWZpbGwoKTtcclxuICAgIC8vIFtbTWV0YWRhdGFdXSBpbnRlcm5hbCBzbG90XHJcbiAgICAvLyBodHRwczovL3JidWNrdG9uLmdpdGh1Yi5pby9yZWZsZWN0LW1ldGFkYXRhLyNvcmRpbmFyeS1vYmplY3QtaW50ZXJuYWwtbWV0aG9kcy1hbmQtaW50ZXJuYWwtc2xvdHNcclxuICAgIHZhciBNZXRhZGF0YSA9IG5ldyBfV2Vha01hcCgpO1xyXG4gICAgLyoqXHJcbiAgICAgICogQXBwbGllcyBhIHNldCBvZiBkZWNvcmF0b3JzIHRvIGEgcHJvcGVydHkgb2YgYSB0YXJnZXQgb2JqZWN0LlxyXG4gICAgICAqIEBwYXJhbSBkZWNvcmF0b3JzIEFuIGFycmF5IG9mIGRlY29yYXRvcnMuXHJcbiAgICAgICogQHBhcmFtIHRhcmdldCBUaGUgdGFyZ2V0IG9iamVjdC5cclxuICAgICAgKiBAcGFyYW0gcHJvcGVydHlLZXkgKE9wdGlvbmFsKSBUaGUgcHJvcGVydHkga2V5IHRvIGRlY29yYXRlLlxyXG4gICAgICAqIEBwYXJhbSBhdHRyaWJ1dGVzIChPcHRpb25hbCkgVGhlIHByb3BlcnR5IGRlc2NyaXB0b3IgZm9yIHRoZSB0YXJnZXQga2V5LlxyXG4gICAgICAqIEByZW1hcmtzIERlY29yYXRvcnMgYXJlIGFwcGxpZWQgaW4gcmV2ZXJzZSBvcmRlci5cclxuICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAqXHJcbiAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xyXG4gICAgICAqICAgICAgICAgLy8gcHJvcGVydHkgZGVjbGFyYXRpb25zIGFyZSBub3QgcGFydCBvZiBFUzYsIHRob3VnaCB0aGV5IGFyZSB2YWxpZCBpbiBUeXBlU2NyaXB0OlxyXG4gICAgICAqICAgICAgICAgLy8gc3RhdGljIHN0YXRpY1Byb3BlcnR5O1xyXG4gICAgICAqICAgICAgICAgLy8gcHJvcGVydHk7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgICAgIGNvbnN0cnVjdG9yKHApIHsgfVxyXG4gICAgICAqICAgICAgICAgc3RhdGljIHN0YXRpY01ldGhvZChwKSB7IH1cclxuICAgICAgKiAgICAgICAgIG1ldGhvZChwKSB7IH1cclxuICAgICAgKiAgICAgfVxyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIGNvbnN0cnVjdG9yXHJcbiAgICAgICogICAgIEV4YW1wbGUgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnNBcnJheSwgRXhhbXBsZSk7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIGNvbnN0cnVjdG9yKVxyXG4gICAgICAqICAgICBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnNBcnJheSwgRXhhbXBsZSwgXCJzdGF0aWNQcm9wZXJ0eVwiKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gcHJvdG90eXBlKVxyXG4gICAgICAqICAgICBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnNBcnJheSwgRXhhbXBsZS5wcm90b3R5cGUsIFwicHJvcGVydHlcIik7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBjb25zdHJ1Y3RvcilcclxuICAgICAgKiAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEV4YW1wbGUsIFwic3RhdGljTWV0aG9kXCIsXHJcbiAgICAgICogICAgICAgICBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnNBcnJheSwgRXhhbXBsZSwgXCJzdGF0aWNNZXRob2RcIixcclxuICAgICAgKiAgICAgICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEV4YW1wbGUsIFwic3RhdGljTWV0aG9kXCIpKSk7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBwcm90b3R5cGUpXHJcbiAgICAgICogICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShFeGFtcGxlLnByb3RvdHlwZSwgXCJtZXRob2RcIixcclxuICAgICAgKiAgICAgICAgIFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9yc0FycmF5LCBFeGFtcGxlLnByb3RvdHlwZSwgXCJtZXRob2RcIixcclxuICAgICAgKiAgICAgICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEV4YW1wbGUucHJvdG90eXBlLCBcIm1ldGhvZFwiKSkpO1xyXG4gICAgICAqXHJcbiAgICAgICovXHJcbiAgICBmdW5jdGlvbiBkZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIHByb3BlcnR5S2V5LCBhdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgaWYgKCFJc1VuZGVmaW5lZChwcm9wZXJ0eUtleSkpIHtcclxuICAgICAgICAgICAgaWYgKCFJc0FycmF5KGRlY29yYXRvcnMpKVxyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xyXG4gICAgICAgICAgICBpZiAoIUlzT2JqZWN0KHRhcmdldCkpXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XHJcbiAgICAgICAgICAgIGlmICghSXNPYmplY3QoYXR0cmlidXRlcykgJiYgIUlzVW5kZWZpbmVkKGF0dHJpYnV0ZXMpICYmICFJc051bGwoYXR0cmlidXRlcykpXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XHJcbiAgICAgICAgICAgIGlmIChJc051bGwoYXR0cmlidXRlcykpXHJcbiAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBwcm9wZXJ0eUtleSA9IFRvUHJvcGVydHlLZXkocHJvcGVydHlLZXkpO1xyXG4gICAgICAgICAgICByZXR1cm4gRGVjb3JhdGVQcm9wZXJ0eShkZWNvcmF0b3JzLCB0YXJnZXQsIHByb3BlcnR5S2V5LCBhdHRyaWJ1dGVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICghSXNBcnJheShkZWNvcmF0b3JzKSlcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcclxuICAgICAgICAgICAgaWYgKCFJc0NvbnN0cnVjdG9yKHRhcmdldCkpXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBEZWNvcmF0ZUNvbnN0cnVjdG9yKGRlY29yYXRvcnMsIHRhcmdldCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgUmVmbGVjdC5kZWNvcmF0ZSA9IGRlY29yYXRlO1xyXG4gICAgLy8gNC4xLjIgUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSlcclxuICAgIC8vIGh0dHBzOi8vcmJ1Y2t0b24uZ2l0aHViLmlvL3JlZmxlY3QtbWV0YWRhdGEvI3JlZmxlY3QubWV0YWRhdGFcclxuICAgIC8qKlxyXG4gICAgICAqIEEgZGVmYXVsdCBtZXRhZGF0YSBkZWNvcmF0b3IgZmFjdG9yeSB0aGF0IGNhbiBiZSB1c2VkIG9uIGEgY2xhc3MsIGNsYXNzIG1lbWJlciwgb3IgcGFyYW1ldGVyLlxyXG4gICAgICAqIEBwYXJhbSBtZXRhZGF0YUtleSBUaGUga2V5IGZvciB0aGUgbWV0YWRhdGEgZW50cnkuXHJcbiAgICAgICogQHBhcmFtIG1ldGFkYXRhVmFsdWUgVGhlIHZhbHVlIGZvciB0aGUgbWV0YWRhdGEgZW50cnkuXHJcbiAgICAgICogQHJldHVybnMgQSBkZWNvcmF0b3IgZnVuY3Rpb24uXHJcbiAgICAgICogQHJlbWFya3NcclxuICAgICAgKiBJZiBgbWV0YWRhdGFLZXlgIGlzIGFscmVhZHkgZGVmaW5lZCBmb3IgdGhlIHRhcmdldCBhbmQgdGFyZ2V0IGtleSwgdGhlXHJcbiAgICAgICogbWV0YWRhdGFWYWx1ZSBmb3IgdGhhdCBrZXkgd2lsbCBiZSBvdmVyd3JpdHRlbi5cclxuICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIGNvbnN0cnVjdG9yXHJcbiAgICAgICogICAgIEBSZWZsZWN0Lm1ldGFkYXRhKGtleSwgdmFsdWUpXHJcbiAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xyXG4gICAgICAqICAgICB9XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIGNvbnN0cnVjdG9yLCBUeXBlU2NyaXB0IG9ubHkpXHJcbiAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xyXG4gICAgICAqICAgICAgICAgQFJlZmxlY3QubWV0YWRhdGEoa2V5LCB2YWx1ZSlcclxuICAgICAgKiAgICAgICAgIHN0YXRpYyBzdGF0aWNQcm9wZXJ0eTtcclxuICAgICAgKiAgICAgfVxyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBwcm90b3R5cGUsIFR5cGVTY3JpcHQgb25seSlcclxuICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XHJcbiAgICAgICogICAgICAgICBAUmVmbGVjdC5tZXRhZGF0YShrZXksIHZhbHVlKVxyXG4gICAgICAqICAgICAgICAgcHJvcGVydHk7XHJcbiAgICAgICogICAgIH1cclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBtZXRob2QgKG9uIGNvbnN0cnVjdG9yKVxyXG4gICAgICAqICAgICBjbGFzcyBFeGFtcGxlIHtcclxuICAgICAgKiAgICAgICAgIEBSZWZsZWN0Lm1ldGFkYXRhKGtleSwgdmFsdWUpXHJcbiAgICAgICogICAgICAgICBzdGF0aWMgc3RhdGljTWV0aG9kKCkgeyB9XHJcbiAgICAgICogICAgIH1cclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBtZXRob2QgKG9uIHByb3RvdHlwZSlcclxuICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XHJcbiAgICAgICogICAgICAgICBAUmVmbGVjdC5tZXRhZGF0YShrZXksIHZhbHVlKVxyXG4gICAgICAqICAgICAgICAgbWV0aG9kKCkgeyB9XHJcbiAgICAgICogICAgIH1cclxuICAgICAgKlxyXG4gICAgICAqL1xyXG4gICAgZnVuY3Rpb24gbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgICAgICBmdW5jdGlvbiBkZWNvcmF0b3IodGFyZ2V0LCBwcm9wZXJ0eUtleSkge1xyXG4gICAgICAgICAgICBpZiAoIUlzT2JqZWN0KHRhcmdldCkpXHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XHJcbiAgICAgICAgICAgIGlmICghSXNVbmRlZmluZWQocHJvcGVydHlLZXkpICYmICFJc1Byb3BlcnR5S2V5KHByb3BlcnR5S2V5KSlcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcclxuICAgICAgICAgICAgT3JkaW5hcnlEZWZpbmVPd25NZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSwgdGFyZ2V0LCBwcm9wZXJ0eUtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkZWNvcmF0b3I7XHJcbiAgICB9XHJcbiAgICBSZWZsZWN0Lm1ldGFkYXRhID0gbWV0YWRhdGE7XHJcbiAgICAvKipcclxuICAgICAgKiBEZWZpbmUgYSB1bmlxdWUgbWV0YWRhdGEgZW50cnkgb24gdGhlIHRhcmdldC5cclxuICAgICAgKiBAcGFyYW0gbWV0YWRhdGFLZXkgQSBrZXkgdXNlZCB0byBzdG9yZSBhbmQgcmV0cmlldmUgbWV0YWRhdGEuXHJcbiAgICAgICogQHBhcmFtIG1ldGFkYXRhVmFsdWUgQSB2YWx1ZSB0aGF0IGNvbnRhaW5zIGF0dGFjaGVkIG1ldGFkYXRhLlxyXG4gICAgICAqIEBwYXJhbSB0YXJnZXQgVGhlIHRhcmdldCBvYmplY3Qgb24gd2hpY2ggdG8gZGVmaW5lIG1ldGFkYXRhLlxyXG4gICAgICAqIEBwYXJhbSBwcm9wZXJ0eUtleSAoT3B0aW9uYWwpIFRoZSBwcm9wZXJ0eSBrZXkgZm9yIHRoZSB0YXJnZXQuXHJcbiAgICAgICogQGV4YW1wbGVcclxuICAgICAgKlxyXG4gICAgICAqICAgICBjbGFzcyBFeGFtcGxlIHtcclxuICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5IGRlY2xhcmF0aW9ucyBhcmUgbm90IHBhcnQgb2YgRVM2LCB0aG91Z2ggdGhleSBhcmUgdmFsaWQgaW4gVHlwZVNjcmlwdDpcclxuICAgICAgKiAgICAgICAgIC8vIHN0YXRpYyBzdGF0aWNQcm9wZXJ0eTtcclxuICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5O1xyXG4gICAgICAqXHJcbiAgICAgICogICAgICAgICBjb25zdHJ1Y3RvcihwKSB7IH1cclxuICAgICAgKiAgICAgICAgIHN0YXRpYyBzdGF0aWNNZXRob2QocCkgeyB9XHJcbiAgICAgICogICAgICAgICBtZXRob2QocCkgeyB9XHJcbiAgICAgICogICAgIH1cclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBjb25zdHJ1Y3RvclxyXG4gICAgICAqICAgICBSZWZsZWN0LmRlZmluZU1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgb3B0aW9ucywgRXhhbXBsZSk7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIGNvbnN0cnVjdG9yKVxyXG4gICAgICAqICAgICBSZWZsZWN0LmRlZmluZU1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgb3B0aW9ucywgRXhhbXBsZSwgXCJzdGF0aWNQcm9wZXJ0eVwiKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gcHJvdG90eXBlKVxyXG4gICAgICAqICAgICBSZWZsZWN0LmRlZmluZU1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgb3B0aW9ucywgRXhhbXBsZS5wcm90b3R5cGUsIFwicHJvcGVydHlcIik7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBjb25zdHJ1Y3RvcilcclxuICAgICAgKiAgICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIG9wdGlvbnMsIEV4YW1wbGUsIFwic3RhdGljTWV0aG9kXCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIG1ldGhvZCAob24gcHJvdG90eXBlKVxyXG4gICAgICAqICAgICBSZWZsZWN0LmRlZmluZU1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgb3B0aW9ucywgRXhhbXBsZS5wcm90b3R5cGUsIFwibWV0aG9kXCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIGRlY29yYXRvciBmYWN0b3J5IGFzIG1ldGFkYXRhLXByb2R1Y2luZyBhbm5vdGF0aW9uLlxyXG4gICAgICAqICAgICBmdW5jdGlvbiBNeUFubm90YXRpb24ob3B0aW9ucyk6IERlY29yYXRvciB7XHJcbiAgICAgICogICAgICAgICByZXR1cm4gKHRhcmdldCwga2V5PykgPT4gUmVmbGVjdC5kZWZpbmVNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIG9wdGlvbnMsIHRhcmdldCwga2V5KTtcclxuICAgICAgKiAgICAgfVxyXG4gICAgICAqXHJcbiAgICAgICovXHJcbiAgICBmdW5jdGlvbiBkZWZpbmVNZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSwgdGFyZ2V0LCBwcm9wZXJ0eUtleSkge1xyXG4gICAgICAgIGlmICghSXNPYmplY3QodGFyZ2V0KSlcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xyXG4gICAgICAgIGlmICghSXNVbmRlZmluZWQocHJvcGVydHlLZXkpKVxyXG4gICAgICAgICAgICBwcm9wZXJ0eUtleSA9IFRvUHJvcGVydHlLZXkocHJvcGVydHlLZXkpO1xyXG4gICAgICAgIHJldHVybiBPcmRpbmFyeURlZmluZU93bk1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlLCB0YXJnZXQsIHByb3BlcnR5S2V5KTtcclxuICAgIH1cclxuICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEgPSBkZWZpbmVNZXRhZGF0YTtcclxuICAgIC8qKlxyXG4gICAgICAqIEdldHMgYSB2YWx1ZSBpbmRpY2F0aW5nIHdoZXRoZXIgdGhlIHRhcmdldCBvYmplY3Qgb3IgaXRzIHByb3RvdHlwZSBjaGFpbiBoYXMgdGhlIHByb3ZpZGVkIG1ldGFkYXRhIGtleSBkZWZpbmVkLlxyXG4gICAgICAqIEBwYXJhbSBtZXRhZGF0YUtleSBBIGtleSB1c2VkIHRvIHN0b3JlIGFuZCByZXRyaWV2ZSBtZXRhZGF0YS5cclxuICAgICAgKiBAcGFyYW0gdGFyZ2V0IFRoZSB0YXJnZXQgb2JqZWN0IG9uIHdoaWNoIHRoZSBtZXRhZGF0YSBpcyBkZWZpbmVkLlxyXG4gICAgICAqIEBwYXJhbSBwcm9wZXJ0eUtleSAoT3B0aW9uYWwpIFRoZSBwcm9wZXJ0eSBrZXkgZm9yIHRoZSB0YXJnZXQuXHJcbiAgICAgICogQHJldHVybnMgYHRydWVgIGlmIHRoZSBtZXRhZGF0YSBrZXkgd2FzIGRlZmluZWQgb24gdGhlIHRhcmdldCBvYmplY3Qgb3IgaXRzIHByb3RvdHlwZSBjaGFpbjsgb3RoZXJ3aXNlLCBgZmFsc2VgLlxyXG4gICAgICAqIEBleGFtcGxlXHJcbiAgICAgICpcclxuICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XHJcbiAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eSBkZWNsYXJhdGlvbnMgYXJlIG5vdCBwYXJ0IG9mIEVTNiwgdGhvdWdoIHRoZXkgYXJlIHZhbGlkIGluIFR5cGVTY3JpcHQ6XHJcbiAgICAgICogICAgICAgICAvLyBzdGF0aWMgc3RhdGljUHJvcGVydHk7XHJcbiAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAgICAgY29uc3RydWN0b3IocCkgeyB9XHJcbiAgICAgICogICAgICAgICBzdGF0aWMgc3RhdGljTWV0aG9kKHApIHsgfVxyXG4gICAgICAqICAgICAgICAgbWV0aG9kKHApIHsgfVxyXG4gICAgICAqICAgICB9XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gY29uc3RydWN0b3JcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5oYXNNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBjb25zdHJ1Y3RvcilcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5oYXNNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUsIFwic3RhdGljUHJvcGVydHlcIik7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIHByb3RvdHlwZSlcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5oYXNNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUucHJvdG90eXBlLCBcInByb3BlcnR5XCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIG1ldGhvZCAob24gY29uc3RydWN0b3IpXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuaGFzTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLCBcInN0YXRpY01ldGhvZFwiKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBtZXRob2QgKG9uIHByb3RvdHlwZSlcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5oYXNNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUucHJvdG90eXBlLCBcIm1ldGhvZFwiKTtcclxuICAgICAgKlxyXG4gICAgICAqL1xyXG4gICAgZnVuY3Rpb24gaGFzTWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCwgcHJvcGVydHlLZXkpIHtcclxuICAgICAgICBpZiAoIUlzT2JqZWN0KHRhcmdldCkpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcclxuICAgICAgICBpZiAoIUlzVW5kZWZpbmVkKHByb3BlcnR5S2V5KSlcclxuICAgICAgICAgICAgcHJvcGVydHlLZXkgPSBUb1Byb3BlcnR5S2V5KHByb3BlcnR5S2V5KTtcclxuICAgICAgICByZXR1cm4gT3JkaW5hcnlIYXNNZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0LCBwcm9wZXJ0eUtleSk7XHJcbiAgICB9XHJcbiAgICBSZWZsZWN0Lmhhc01ldGFkYXRhID0gaGFzTWV0YWRhdGE7XHJcbiAgICAvKipcclxuICAgICAgKiBHZXRzIGEgdmFsdWUgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSB0YXJnZXQgb2JqZWN0IGhhcyB0aGUgcHJvdmlkZWQgbWV0YWRhdGEga2V5IGRlZmluZWQuXHJcbiAgICAgICogQHBhcmFtIG1ldGFkYXRhS2V5IEEga2V5IHVzZWQgdG8gc3RvcmUgYW5kIHJldHJpZXZlIG1ldGFkYXRhLlxyXG4gICAgICAqIEBwYXJhbSB0YXJnZXQgVGhlIHRhcmdldCBvYmplY3Qgb24gd2hpY2ggdGhlIG1ldGFkYXRhIGlzIGRlZmluZWQuXHJcbiAgICAgICogQHBhcmFtIHByb3BlcnR5S2V5IChPcHRpb25hbCkgVGhlIHByb3BlcnR5IGtleSBmb3IgdGhlIHRhcmdldC5cclxuICAgICAgKiBAcmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG1ldGFkYXRhIGtleSB3YXMgZGVmaW5lZCBvbiB0aGUgdGFyZ2V0IG9iamVjdDsgb3RoZXJ3aXNlLCBgZmFsc2VgLlxyXG4gICAgICAqIEBleGFtcGxlXHJcbiAgICAgICpcclxuICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XHJcbiAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eSBkZWNsYXJhdGlvbnMgYXJlIG5vdCBwYXJ0IG9mIEVTNiwgdGhvdWdoIHRoZXkgYXJlIHZhbGlkIGluIFR5cGVTY3JpcHQ6XHJcbiAgICAgICogICAgICAgICAvLyBzdGF0aWMgc3RhdGljUHJvcGVydHk7XHJcbiAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAgICAgY29uc3RydWN0b3IocCkgeyB9XHJcbiAgICAgICogICAgICAgICBzdGF0aWMgc3RhdGljTWV0aG9kKHApIHsgfVxyXG4gICAgICAqICAgICAgICAgbWV0aG9kKHApIHsgfVxyXG4gICAgICAqICAgICB9XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gY29uc3RydWN0b3JcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5oYXNPd25NZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBjb25zdHJ1Y3RvcilcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5oYXNPd25NZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUsIFwic3RhdGljUHJvcGVydHlcIik7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIHByb3RvdHlwZSlcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5oYXNPd25NZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUucHJvdG90eXBlLCBcInByb3BlcnR5XCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIG1ldGhvZCAob24gY29uc3RydWN0b3IpXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuaGFzT3duTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLCBcInN0YXRpY01ldGhvZFwiKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBtZXRob2QgKG9uIHByb3RvdHlwZSlcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5oYXNPd25NZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUucHJvdG90eXBlLCBcIm1ldGhvZFwiKTtcclxuICAgICAgKlxyXG4gICAgICAqL1xyXG4gICAgZnVuY3Rpb24gaGFzT3duTWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCwgcHJvcGVydHlLZXkpIHtcclxuICAgICAgICBpZiAoIUlzT2JqZWN0KHRhcmdldCkpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcclxuICAgICAgICBpZiAoIUlzVW5kZWZpbmVkKHByb3BlcnR5S2V5KSlcclxuICAgICAgICAgICAgcHJvcGVydHlLZXkgPSBUb1Byb3BlcnR5S2V5KHByb3BlcnR5S2V5KTtcclxuICAgICAgICByZXR1cm4gT3JkaW5hcnlIYXNPd25NZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0LCBwcm9wZXJ0eUtleSk7XHJcbiAgICB9XHJcbiAgICBSZWZsZWN0Lmhhc093bk1ldGFkYXRhID0gaGFzT3duTWV0YWRhdGE7XHJcbiAgICAvKipcclxuICAgICAgKiBHZXRzIHRoZSBtZXRhZGF0YSB2YWx1ZSBmb3IgdGhlIHByb3ZpZGVkIG1ldGFkYXRhIGtleSBvbiB0aGUgdGFyZ2V0IG9iamVjdCBvciBpdHMgcHJvdG90eXBlIGNoYWluLlxyXG4gICAgICAqIEBwYXJhbSBtZXRhZGF0YUtleSBBIGtleSB1c2VkIHRvIHN0b3JlIGFuZCByZXRyaWV2ZSBtZXRhZGF0YS5cclxuICAgICAgKiBAcGFyYW0gdGFyZ2V0IFRoZSB0YXJnZXQgb2JqZWN0IG9uIHdoaWNoIHRoZSBtZXRhZGF0YSBpcyBkZWZpbmVkLlxyXG4gICAgICAqIEBwYXJhbSBwcm9wZXJ0eUtleSAoT3B0aW9uYWwpIFRoZSBwcm9wZXJ0eSBrZXkgZm9yIHRoZSB0YXJnZXQuXHJcbiAgICAgICogQHJldHVybnMgVGhlIG1ldGFkYXRhIHZhbHVlIGZvciB0aGUgbWV0YWRhdGEga2V5IGlmIGZvdW5kOyBvdGhlcndpc2UsIGB1bmRlZmluZWRgLlxyXG4gICAgICAqIEBleGFtcGxlXHJcbiAgICAgICpcclxuICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XHJcbiAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eSBkZWNsYXJhdGlvbnMgYXJlIG5vdCBwYXJ0IG9mIEVTNiwgdGhvdWdoIHRoZXkgYXJlIHZhbGlkIGluIFR5cGVTY3JpcHQ6XHJcbiAgICAgICogICAgICAgICAvLyBzdGF0aWMgc3RhdGljUHJvcGVydHk7XHJcbiAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAgICAgY29uc3RydWN0b3IocCkgeyB9XHJcbiAgICAgICogICAgICAgICBzdGF0aWMgc3RhdGljTWV0aG9kKHApIHsgfVxyXG4gICAgICAqICAgICAgICAgbWV0aG9kKHApIHsgfVxyXG4gICAgICAqICAgICB9XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gY29uc3RydWN0b3JcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBjb25zdHJ1Y3RvcilcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUsIFwic3RhdGljUHJvcGVydHlcIik7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIHByb3RvdHlwZSlcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUucHJvdG90eXBlLCBcInByb3BlcnR5XCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIG1ldGhvZCAob24gY29uc3RydWN0b3IpXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0TWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLCBcInN0YXRpY01ldGhvZFwiKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBtZXRob2QgKG9uIHByb3RvdHlwZSlcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUucHJvdG90eXBlLCBcIm1ldGhvZFwiKTtcclxuICAgICAgKlxyXG4gICAgICAqL1xyXG4gICAgZnVuY3Rpb24gZ2V0TWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCwgcHJvcGVydHlLZXkpIHtcclxuICAgICAgICBpZiAoIUlzT2JqZWN0KHRhcmdldCkpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcclxuICAgICAgICBpZiAoIUlzVW5kZWZpbmVkKHByb3BlcnR5S2V5KSlcclxuICAgICAgICAgICAgcHJvcGVydHlLZXkgPSBUb1Byb3BlcnR5S2V5KHByb3BlcnR5S2V5KTtcclxuICAgICAgICByZXR1cm4gT3JkaW5hcnlHZXRNZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0LCBwcm9wZXJ0eUtleSk7XHJcbiAgICB9XHJcbiAgICBSZWZsZWN0LmdldE1ldGFkYXRhID0gZ2V0TWV0YWRhdGE7XHJcbiAgICAvKipcclxuICAgICAgKiBHZXRzIHRoZSBtZXRhZGF0YSB2YWx1ZSBmb3IgdGhlIHByb3ZpZGVkIG1ldGFkYXRhIGtleSBvbiB0aGUgdGFyZ2V0IG9iamVjdC5cclxuICAgICAgKiBAcGFyYW0gbWV0YWRhdGFLZXkgQSBrZXkgdXNlZCB0byBzdG9yZSBhbmQgcmV0cmlldmUgbWV0YWRhdGEuXHJcbiAgICAgICogQHBhcmFtIHRhcmdldCBUaGUgdGFyZ2V0IG9iamVjdCBvbiB3aGljaCB0aGUgbWV0YWRhdGEgaXMgZGVmaW5lZC5cclxuICAgICAgKiBAcGFyYW0gcHJvcGVydHlLZXkgKE9wdGlvbmFsKSBUaGUgcHJvcGVydHkga2V5IGZvciB0aGUgdGFyZ2V0LlxyXG4gICAgICAqIEByZXR1cm5zIFRoZSBtZXRhZGF0YSB2YWx1ZSBmb3IgdGhlIG1ldGFkYXRhIGtleSBpZiBmb3VuZDsgb3RoZXJ3aXNlLCBgdW5kZWZpbmVkYC5cclxuICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAqXHJcbiAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xyXG4gICAgICAqICAgICAgICAgLy8gcHJvcGVydHkgZGVjbGFyYXRpb25zIGFyZSBub3QgcGFydCBvZiBFUzYsIHRob3VnaCB0aGV5IGFyZSB2YWxpZCBpbiBUeXBlU2NyaXB0OlxyXG4gICAgICAqICAgICAgICAgLy8gc3RhdGljIHN0YXRpY1Byb3BlcnR5O1xyXG4gICAgICAqICAgICAgICAgLy8gcHJvcGVydHk7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgICAgIGNvbnN0cnVjdG9yKHApIHsgfVxyXG4gICAgICAqICAgICAgICAgc3RhdGljIHN0YXRpY01ldGhvZChwKSB7IH1cclxuICAgICAgKiAgICAgICAgIG1ldGhvZChwKSB7IH1cclxuICAgICAgKiAgICAgfVxyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIGNvbnN0cnVjdG9yXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0T3duTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gY29uc3RydWN0b3IpXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0T3duTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLCBcInN0YXRpY1Byb3BlcnR5XCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBwcm90b3R5cGUpXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0T3duTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLnByb3RvdHlwZSwgXCJwcm9wZXJ0eVwiKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBtZXRob2QgKG9uIGNvbnN0cnVjdG9yKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSwgXCJzdGF0aWNNZXRob2RcIik7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBwcm90b3R5cGUpXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0T3duTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLnByb3RvdHlwZSwgXCJtZXRob2RcIik7XHJcbiAgICAgICpcclxuICAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGdldE93bk1ldGFkYXRhKG1ldGFkYXRhS2V5LCB0YXJnZXQsIHByb3BlcnR5S2V5KSB7XHJcbiAgICAgICAgaWYgKCFJc09iamVjdCh0YXJnZXQpKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XHJcbiAgICAgICAgaWYgKCFJc1VuZGVmaW5lZChwcm9wZXJ0eUtleSkpXHJcbiAgICAgICAgICAgIHByb3BlcnR5S2V5ID0gVG9Qcm9wZXJ0eUtleShwcm9wZXJ0eUtleSk7XHJcbiAgICAgICAgcmV0dXJuIE9yZGluYXJ5R2V0T3duTWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCwgcHJvcGVydHlLZXkpO1xyXG4gICAgfVxyXG4gICAgUmVmbGVjdC5nZXRPd25NZXRhZGF0YSA9IGdldE93bk1ldGFkYXRhO1xyXG4gICAgLyoqXHJcbiAgICAgICogR2V0cyB0aGUgbWV0YWRhdGEga2V5cyBkZWZpbmVkIG9uIHRoZSB0YXJnZXQgb2JqZWN0IG9yIGl0cyBwcm90b3R5cGUgY2hhaW4uXHJcbiAgICAgICogQHBhcmFtIHRhcmdldCBUaGUgdGFyZ2V0IG9iamVjdCBvbiB3aGljaCB0aGUgbWV0YWRhdGEgaXMgZGVmaW5lZC5cclxuICAgICAgKiBAcGFyYW0gcHJvcGVydHlLZXkgKE9wdGlvbmFsKSBUaGUgcHJvcGVydHkga2V5IGZvciB0aGUgdGFyZ2V0LlxyXG4gICAgICAqIEByZXR1cm5zIEFuIGFycmF5IG9mIHVuaXF1ZSBtZXRhZGF0YSBrZXlzLlxyXG4gICAgICAqIEBleGFtcGxlXHJcbiAgICAgICpcclxuICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XHJcbiAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eSBkZWNsYXJhdGlvbnMgYXJlIG5vdCBwYXJ0IG9mIEVTNiwgdGhvdWdoIHRoZXkgYXJlIHZhbGlkIGluIFR5cGVTY3JpcHQ6XHJcbiAgICAgICogICAgICAgICAvLyBzdGF0aWMgc3RhdGljUHJvcGVydHk7XHJcbiAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAgICAgY29uc3RydWN0b3IocCkgeyB9XHJcbiAgICAgICogICAgICAgICBzdGF0aWMgc3RhdGljTWV0aG9kKHApIHsgfVxyXG4gICAgICAqICAgICAgICAgbWV0aG9kKHApIHsgfVxyXG4gICAgICAqICAgICB9XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gY29uc3RydWN0b3JcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRNZXRhZGF0YUtleXMoRXhhbXBsZSk7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIGNvbnN0cnVjdG9yKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE1ldGFkYXRhS2V5cyhFeGFtcGxlLCBcInN0YXRpY1Byb3BlcnR5XCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBwcm90b3R5cGUpXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0TWV0YWRhdGFLZXlzKEV4YW1wbGUucHJvdG90eXBlLCBcInByb3BlcnR5XCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIG1ldGhvZCAob24gY29uc3RydWN0b3IpXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0TWV0YWRhdGFLZXlzKEV4YW1wbGUsIFwic3RhdGljTWV0aG9kXCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIG1ldGhvZCAob24gcHJvdG90eXBlKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE1ldGFkYXRhS2V5cyhFeGFtcGxlLnByb3RvdHlwZSwgXCJtZXRob2RcIik7XHJcbiAgICAgICpcclxuICAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGdldE1ldGFkYXRhS2V5cyh0YXJnZXQsIHByb3BlcnR5S2V5KSB7XHJcbiAgICAgICAgaWYgKCFJc09iamVjdCh0YXJnZXQpKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XHJcbiAgICAgICAgaWYgKCFJc1VuZGVmaW5lZChwcm9wZXJ0eUtleSkpXHJcbiAgICAgICAgICAgIHByb3BlcnR5S2V5ID0gVG9Qcm9wZXJ0eUtleShwcm9wZXJ0eUtleSk7XHJcbiAgICAgICAgcmV0dXJuIE9yZGluYXJ5TWV0YWRhdGFLZXlzKHRhcmdldCwgcHJvcGVydHlLZXkpO1xyXG4gICAgfVxyXG4gICAgUmVmbGVjdC5nZXRNZXRhZGF0YUtleXMgPSBnZXRNZXRhZGF0YUtleXM7XHJcbiAgICAvKipcclxuICAgICAgKiBHZXRzIHRoZSB1bmlxdWUgbWV0YWRhdGEga2V5cyBkZWZpbmVkIG9uIHRoZSB0YXJnZXQgb2JqZWN0LlxyXG4gICAgICAqIEBwYXJhbSB0YXJnZXQgVGhlIHRhcmdldCBvYmplY3Qgb24gd2hpY2ggdGhlIG1ldGFkYXRhIGlzIGRlZmluZWQuXHJcbiAgICAgICogQHBhcmFtIHByb3BlcnR5S2V5IChPcHRpb25hbCkgVGhlIHByb3BlcnR5IGtleSBmb3IgdGhlIHRhcmdldC5cclxuICAgICAgKiBAcmV0dXJucyBBbiBhcnJheSBvZiB1bmlxdWUgbWV0YWRhdGEga2V5cy5cclxuICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAqXHJcbiAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xyXG4gICAgICAqICAgICAgICAgLy8gcHJvcGVydHkgZGVjbGFyYXRpb25zIGFyZSBub3QgcGFydCBvZiBFUzYsIHRob3VnaCB0aGV5IGFyZSB2YWxpZCBpbiBUeXBlU2NyaXB0OlxyXG4gICAgICAqICAgICAgICAgLy8gc3RhdGljIHN0YXRpY1Byb3BlcnR5O1xyXG4gICAgICAqICAgICAgICAgLy8gcHJvcGVydHk7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgICAgIGNvbnN0cnVjdG9yKHApIHsgfVxyXG4gICAgICAqICAgICAgICAgc3RhdGljIHN0YXRpY01ldGhvZChwKSB7IH1cclxuICAgICAgKiAgICAgICAgIG1ldGhvZChwKSB7IH1cclxuICAgICAgKiAgICAgfVxyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIGNvbnN0cnVjdG9yXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0T3duTWV0YWRhdGFLZXlzKEV4YW1wbGUpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBjb25zdHJ1Y3RvcilcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRPd25NZXRhZGF0YUtleXMoRXhhbXBsZSwgXCJzdGF0aWNQcm9wZXJ0eVwiKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gcHJvdG90eXBlKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhS2V5cyhFeGFtcGxlLnByb3RvdHlwZSwgXCJwcm9wZXJ0eVwiKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBtZXRob2QgKG9uIGNvbnN0cnVjdG9yKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhS2V5cyhFeGFtcGxlLCBcInN0YXRpY01ldGhvZFwiKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBtZXRob2QgKG9uIHByb3RvdHlwZSlcclxuICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRPd25NZXRhZGF0YUtleXMoRXhhbXBsZS5wcm90b3R5cGUsIFwibWV0aG9kXCIpO1xyXG4gICAgICAqXHJcbiAgICAgICovXHJcbiAgICBmdW5jdGlvbiBnZXRPd25NZXRhZGF0YUtleXModGFyZ2V0LCBwcm9wZXJ0eUtleSkge1xyXG4gICAgICAgIGlmICghSXNPYmplY3QodGFyZ2V0KSlcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xyXG4gICAgICAgIGlmICghSXNVbmRlZmluZWQocHJvcGVydHlLZXkpKVxyXG4gICAgICAgICAgICBwcm9wZXJ0eUtleSA9IFRvUHJvcGVydHlLZXkocHJvcGVydHlLZXkpO1xyXG4gICAgICAgIHJldHVybiBPcmRpbmFyeU93bk1ldGFkYXRhS2V5cyh0YXJnZXQsIHByb3BlcnR5S2V5KTtcclxuICAgIH1cclxuICAgIFJlZmxlY3QuZ2V0T3duTWV0YWRhdGFLZXlzID0gZ2V0T3duTWV0YWRhdGFLZXlzO1xyXG4gICAgLyoqXHJcbiAgICAgICogRGVsZXRlcyB0aGUgbWV0YWRhdGEgZW50cnkgZnJvbSB0aGUgdGFyZ2V0IG9iamVjdCB3aXRoIHRoZSBwcm92aWRlZCBrZXkuXHJcbiAgICAgICogQHBhcmFtIG1ldGFkYXRhS2V5IEEga2V5IHVzZWQgdG8gc3RvcmUgYW5kIHJldHJpZXZlIG1ldGFkYXRhLlxyXG4gICAgICAqIEBwYXJhbSB0YXJnZXQgVGhlIHRhcmdldCBvYmplY3Qgb24gd2hpY2ggdGhlIG1ldGFkYXRhIGlzIGRlZmluZWQuXHJcbiAgICAgICogQHBhcmFtIHByb3BlcnR5S2V5IChPcHRpb25hbCkgVGhlIHByb3BlcnR5IGtleSBmb3IgdGhlIHRhcmdldC5cclxuICAgICAgKiBAcmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG1ldGFkYXRhIGVudHJ5IHdhcyBmb3VuZCBhbmQgZGVsZXRlZDsgb3RoZXJ3aXNlLCBmYWxzZS5cclxuICAgICAgKiBAZXhhbXBsZVxyXG4gICAgICAqXHJcbiAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xyXG4gICAgICAqICAgICAgICAgLy8gcHJvcGVydHkgZGVjbGFyYXRpb25zIGFyZSBub3QgcGFydCBvZiBFUzYsIHRob3VnaCB0aGV5IGFyZSB2YWxpZCBpbiBUeXBlU2NyaXB0OlxyXG4gICAgICAqICAgICAgICAgLy8gc3RhdGljIHN0YXRpY1Byb3BlcnR5O1xyXG4gICAgICAqICAgICAgICAgLy8gcHJvcGVydHk7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgICAgIGNvbnN0cnVjdG9yKHApIHsgfVxyXG4gICAgICAqICAgICAgICAgc3RhdGljIHN0YXRpY01ldGhvZChwKSB7IH1cclxuICAgICAgKiAgICAgICAgIG1ldGhvZChwKSB7IH1cclxuICAgICAgKiAgICAgfVxyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIGNvbnN0cnVjdG9yXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZGVsZXRlTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gY29uc3RydWN0b3IpXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZGVsZXRlTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLCBcInN0YXRpY1Byb3BlcnR5XCIpO1xyXG4gICAgICAqXHJcbiAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBwcm90b3R5cGUpXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZGVsZXRlTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLnByb3RvdHlwZSwgXCJwcm9wZXJ0eVwiKTtcclxuICAgICAgKlxyXG4gICAgICAqICAgICAvLyBtZXRob2QgKG9uIGNvbnN0cnVjdG9yKVxyXG4gICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmRlbGV0ZU1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSwgXCJzdGF0aWNNZXRob2RcIik7XHJcbiAgICAgICpcclxuICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBwcm90b3R5cGUpXHJcbiAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZGVsZXRlTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLnByb3RvdHlwZSwgXCJtZXRob2RcIik7XHJcbiAgICAgICpcclxuICAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGRlbGV0ZU1ldGFkYXRhKG1ldGFkYXRhS2V5LCB0YXJnZXQsIHByb3BlcnR5S2V5KSB7XHJcbiAgICAgICAgaWYgKCFJc09iamVjdCh0YXJnZXQpKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XHJcbiAgICAgICAgaWYgKCFJc1VuZGVmaW5lZChwcm9wZXJ0eUtleSkpXHJcbiAgICAgICAgICAgIHByb3BlcnR5S2V5ID0gVG9Qcm9wZXJ0eUtleShwcm9wZXJ0eUtleSk7XHJcbiAgICAgICAgdmFyIG1ldGFkYXRhTWFwID0gR2V0T3JDcmVhdGVNZXRhZGF0YU1hcCh0YXJnZXQsIHByb3BlcnR5S2V5LCAvKkNyZWF0ZSovIGZhbHNlKTtcclxuICAgICAgICBpZiAoSXNVbmRlZmluZWQobWV0YWRhdGFNYXApKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKCFtZXRhZGF0YU1hcC5kZWxldGUobWV0YWRhdGFLZXkpKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKG1ldGFkYXRhTWFwLnNpemUgPiAwKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB2YXIgdGFyZ2V0TWV0YWRhdGEgPSBNZXRhZGF0YS5nZXQodGFyZ2V0KTtcclxuICAgICAgICB0YXJnZXRNZXRhZGF0YS5kZWxldGUocHJvcGVydHlLZXkpO1xyXG4gICAgICAgIGlmICh0YXJnZXRNZXRhZGF0YS5zaXplID4gMClcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgTWV0YWRhdGEuZGVsZXRlKHRhcmdldCk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBSZWZsZWN0LmRlbGV0ZU1ldGFkYXRhID0gZGVsZXRlTWV0YWRhdGE7XHJcbiAgICBmdW5jdGlvbiBEZWNvcmF0ZUNvbnN0cnVjdG9yKGRlY29yYXRvcnMsIHRhcmdldCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XHJcbiAgICAgICAgICAgIHZhciBkZWNvcmF0b3IgPSBkZWNvcmF0b3JzW2ldO1xyXG4gICAgICAgICAgICB2YXIgZGVjb3JhdGVkID0gZGVjb3JhdG9yKHRhcmdldCk7XHJcbiAgICAgICAgICAgIGlmICghSXNVbmRlZmluZWQoZGVjb3JhdGVkKSAmJiAhSXNOdWxsKGRlY29yYXRlZCkpIHtcclxuICAgICAgICAgICAgICAgIGlmICghSXNDb25zdHJ1Y3RvcihkZWNvcmF0ZWQpKVxyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IGRlY29yYXRlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gRGVjb3JhdGVQcm9wZXJ0eShkZWNvcmF0b3JzLCB0YXJnZXQsIHByb3BlcnR5S2V5LCBkZXNjcmlwdG9yKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcclxuICAgICAgICAgICAgdmFyIGRlY29yYXRvciA9IGRlY29yYXRvcnNbaV07XHJcbiAgICAgICAgICAgIHZhciBkZWNvcmF0ZWQgPSBkZWNvcmF0b3IodGFyZ2V0LCBwcm9wZXJ0eUtleSwgZGVzY3JpcHRvcik7XHJcbiAgICAgICAgICAgIGlmICghSXNVbmRlZmluZWQoZGVjb3JhdGVkKSAmJiAhSXNOdWxsKGRlY29yYXRlZCkpIHtcclxuICAgICAgICAgICAgICAgIGlmICghSXNPYmplY3QoZGVjb3JhdGVkKSlcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdG9yID0gZGVjb3JhdGVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkZXNjcmlwdG9yO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gR2V0T3JDcmVhdGVNZXRhZGF0YU1hcChPLCBQLCBDcmVhdGUpIHtcclxuICAgICAgICB2YXIgdGFyZ2V0TWV0YWRhdGEgPSBNZXRhZGF0YS5nZXQoTyk7XHJcbiAgICAgICAgaWYgKElzVW5kZWZpbmVkKHRhcmdldE1ldGFkYXRhKSkge1xyXG4gICAgICAgICAgICBpZiAoIUNyZWF0ZSlcclxuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIHRhcmdldE1ldGFkYXRhID0gbmV3IF9NYXAoKTtcclxuICAgICAgICAgICAgTWV0YWRhdGEuc2V0KE8sIHRhcmdldE1ldGFkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG1ldGFkYXRhTWFwID0gdGFyZ2V0TWV0YWRhdGEuZ2V0KFApO1xyXG4gICAgICAgIGlmIChJc1VuZGVmaW5lZChtZXRhZGF0YU1hcCkpIHtcclxuICAgICAgICAgICAgaWYgKCFDcmVhdGUpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBtZXRhZGF0YU1hcCA9IG5ldyBfTWFwKCk7XHJcbiAgICAgICAgICAgIHRhcmdldE1ldGFkYXRhLnNldChQLCBtZXRhZGF0YU1hcCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBtZXRhZGF0YU1hcDtcclxuICAgIH1cclxuICAgIC8vIDMuMS4xLjEgT3JkaW5hcnlIYXNNZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUClcclxuICAgIC8vIGh0dHBzOi8vcmJ1Y2t0b24uZ2l0aHViLmlvL3JlZmxlY3QtbWV0YWRhdGEvI29yZGluYXJ5aGFzbWV0YWRhdGFcclxuICAgIGZ1bmN0aW9uIE9yZGluYXJ5SGFzTWV0YWRhdGEoTWV0YWRhdGFLZXksIE8sIFApIHtcclxuICAgICAgICB2YXIgaGFzT3duID0gT3JkaW5hcnlIYXNPd25NZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUCk7XHJcbiAgICAgICAgaWYgKGhhc093bilcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgdmFyIHBhcmVudCA9IE9yZGluYXJ5R2V0UHJvdG90eXBlT2YoTyk7XHJcbiAgICAgICAgaWYgKCFJc051bGwocGFyZW50KSlcclxuICAgICAgICAgICAgcmV0dXJuIE9yZGluYXJ5SGFzTWV0YWRhdGEoTWV0YWRhdGFLZXksIHBhcmVudCwgUCk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgLy8gMy4xLjIuMSBPcmRpbmFyeUhhc093bk1ldGFkYXRhKE1ldGFkYXRhS2V5LCBPLCBQKVxyXG4gICAgLy8gaHR0cHM6Ly9yYnVja3Rvbi5naXRodWIuaW8vcmVmbGVjdC1tZXRhZGF0YS8jb3JkaW5hcnloYXNvd25tZXRhZGF0YVxyXG4gICAgZnVuY3Rpb24gT3JkaW5hcnlIYXNPd25NZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUCkge1xyXG4gICAgICAgIHZhciBtZXRhZGF0YU1hcCA9IEdldE9yQ3JlYXRlTWV0YWRhdGFNYXAoTywgUCwgLypDcmVhdGUqLyBmYWxzZSk7XHJcbiAgICAgICAgaWYgKElzVW5kZWZpbmVkKG1ldGFkYXRhTWFwKSlcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHJldHVybiBUb0Jvb2xlYW4obWV0YWRhdGFNYXAuaGFzKE1ldGFkYXRhS2V5KSk7XHJcbiAgICB9XHJcbiAgICAvLyAzLjEuMy4xIE9yZGluYXJ5R2V0TWV0YWRhdGEoTWV0YWRhdGFLZXksIE8sIFApXHJcbiAgICAvLyBodHRwczovL3JidWNrdG9uLmdpdGh1Yi5pby9yZWZsZWN0LW1ldGFkYXRhLyNvcmRpbmFyeWdldG1ldGFkYXRhXHJcbiAgICBmdW5jdGlvbiBPcmRpbmFyeUdldE1ldGFkYXRhKE1ldGFkYXRhS2V5LCBPLCBQKSB7XHJcbiAgICAgICAgdmFyIGhhc093biA9IE9yZGluYXJ5SGFzT3duTWV0YWRhdGEoTWV0YWRhdGFLZXksIE8sIFApO1xyXG4gICAgICAgIGlmIChoYXNPd24pXHJcbiAgICAgICAgICAgIHJldHVybiBPcmRpbmFyeUdldE93bk1ldGFkYXRhKE1ldGFkYXRhS2V5LCBPLCBQKTtcclxuICAgICAgICB2YXIgcGFyZW50ID0gT3JkaW5hcnlHZXRQcm90b3R5cGVPZihPKTtcclxuICAgICAgICBpZiAoIUlzTnVsbChwYXJlbnQpKVxyXG4gICAgICAgICAgICByZXR1cm4gT3JkaW5hcnlHZXRNZXRhZGF0YShNZXRhZGF0YUtleSwgcGFyZW50LCBQKTtcclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgLy8gMy4xLjQuMSBPcmRpbmFyeUdldE93bk1ldGFkYXRhKE1ldGFkYXRhS2V5LCBPLCBQKVxyXG4gICAgLy8gaHR0cHM6Ly9yYnVja3Rvbi5naXRodWIuaW8vcmVmbGVjdC1tZXRhZGF0YS8jb3JkaW5hcnlnZXRvd25tZXRhZGF0YVxyXG4gICAgZnVuY3Rpb24gT3JkaW5hcnlHZXRPd25NZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUCkge1xyXG4gICAgICAgIHZhciBtZXRhZGF0YU1hcCA9IEdldE9yQ3JlYXRlTWV0YWRhdGFNYXAoTywgUCwgLypDcmVhdGUqLyBmYWxzZSk7XHJcbiAgICAgICAgaWYgKElzVW5kZWZpbmVkKG1ldGFkYXRhTWFwKSlcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICByZXR1cm4gbWV0YWRhdGFNYXAuZ2V0KE1ldGFkYXRhS2V5KTtcclxuICAgIH1cclxuICAgIC8vIDMuMS41LjEgT3JkaW5hcnlEZWZpbmVPd25NZXRhZGF0YShNZXRhZGF0YUtleSwgTWV0YWRhdGFWYWx1ZSwgTywgUClcclxuICAgIC8vIGh0dHBzOi8vcmJ1Y2t0b24uZ2l0aHViLmlvL3JlZmxlY3QtbWV0YWRhdGEvI29yZGluYXJ5ZGVmaW5lb3dubWV0YWRhdGFcclxuICAgIGZ1bmN0aW9uIE9yZGluYXJ5RGVmaW5lT3duTWV0YWRhdGEoTWV0YWRhdGFLZXksIE1ldGFkYXRhVmFsdWUsIE8sIFApIHtcclxuICAgICAgICB2YXIgbWV0YWRhdGFNYXAgPSBHZXRPckNyZWF0ZU1ldGFkYXRhTWFwKE8sIFAsIC8qQ3JlYXRlKi8gdHJ1ZSk7XHJcbiAgICAgICAgbWV0YWRhdGFNYXAuc2V0KE1ldGFkYXRhS2V5LCBNZXRhZGF0YVZhbHVlKTtcclxuICAgIH1cclxuICAgIC8vIDMuMS42LjEgT3JkaW5hcnlNZXRhZGF0YUtleXMoTywgUClcclxuICAgIC8vIGh0dHBzOi8vcmJ1Y2t0b24uZ2l0aHViLmlvL3JlZmxlY3QtbWV0YWRhdGEvI29yZGluYXJ5bWV0YWRhdGFrZXlzXHJcbiAgICBmdW5jdGlvbiBPcmRpbmFyeU1ldGFkYXRhS2V5cyhPLCBQKSB7XHJcbiAgICAgICAgdmFyIG93bktleXMgPSBPcmRpbmFyeU93bk1ldGFkYXRhS2V5cyhPLCBQKTtcclxuICAgICAgICB2YXIgcGFyZW50ID0gT3JkaW5hcnlHZXRQcm90b3R5cGVPZihPKTtcclxuICAgICAgICBpZiAocGFyZW50ID09PSBudWxsKVxyXG4gICAgICAgICAgICByZXR1cm4gb3duS2V5cztcclxuICAgICAgICB2YXIgcGFyZW50S2V5cyA9IE9yZGluYXJ5TWV0YWRhdGFLZXlzKHBhcmVudCwgUCk7XHJcbiAgICAgICAgaWYgKHBhcmVudEtleXMubGVuZ3RoIDw9IDApXHJcbiAgICAgICAgICAgIHJldHVybiBvd25LZXlzO1xyXG4gICAgICAgIGlmIChvd25LZXlzLmxlbmd0aCA8PSAwKVxyXG4gICAgICAgICAgICByZXR1cm4gcGFyZW50S2V5cztcclxuICAgICAgICB2YXIgc2V0ID0gbmV3IF9TZXQoKTtcclxuICAgICAgICB2YXIga2V5cyA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIF9pID0gMCwgb3duS2V5c18xID0gb3duS2V5czsgX2kgPCBvd25LZXlzXzEubGVuZ3RoOyBfaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBrZXkgPSBvd25LZXlzXzFbX2ldO1xyXG4gICAgICAgICAgICB2YXIgaGFzS2V5ID0gc2V0LmhhcyhrZXkpO1xyXG4gICAgICAgICAgICBpZiAoIWhhc0tleSkge1xyXG4gICAgICAgICAgICAgICAgc2V0LmFkZChrZXkpO1xyXG4gICAgICAgICAgICAgICAga2V5cy5wdXNoKGtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgX2EgPSAwLCBwYXJlbnRLZXlzXzEgPSBwYXJlbnRLZXlzOyBfYSA8IHBhcmVudEtleXNfMS5sZW5ndGg7IF9hKyspIHtcclxuICAgICAgICAgICAgdmFyIGtleSA9IHBhcmVudEtleXNfMVtfYV07XHJcbiAgICAgICAgICAgIHZhciBoYXNLZXkgPSBzZXQuaGFzKGtleSk7XHJcbiAgICAgICAgICAgIGlmICghaGFzS2V5KSB7XHJcbiAgICAgICAgICAgICAgICBzZXQuYWRkKGtleSk7XHJcbiAgICAgICAgICAgICAgICBrZXlzLnB1c2goa2V5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ga2V5cztcclxuICAgIH1cclxuICAgIC8vIDMuMS43LjEgT3JkaW5hcnlPd25NZXRhZGF0YUtleXMoTywgUClcclxuICAgIC8vIGh0dHBzOi8vcmJ1Y2t0b24uZ2l0aHViLmlvL3JlZmxlY3QtbWV0YWRhdGEvI29yZGluYXJ5b3dubWV0YWRhdGFrZXlzXHJcbiAgICBmdW5jdGlvbiBPcmRpbmFyeU93bk1ldGFkYXRhS2V5cyhPLCBQKSB7XHJcbiAgICAgICAgdmFyIGtleXMgPSBbXTtcclxuICAgICAgICB2YXIgbWV0YWRhdGFNYXAgPSBHZXRPckNyZWF0ZU1ldGFkYXRhTWFwKE8sIFAsIC8qQ3JlYXRlKi8gZmFsc2UpO1xyXG4gICAgICAgIGlmIChJc1VuZGVmaW5lZChtZXRhZGF0YU1hcCkpXHJcbiAgICAgICAgICAgIHJldHVybiBrZXlzO1xyXG4gICAgICAgIHZhciBrZXlzT2JqID0gbWV0YWRhdGFNYXAua2V5cygpO1xyXG4gICAgICAgIHZhciBpdGVyYXRvciA9IEdldEl0ZXJhdG9yKGtleXNPYmopO1xyXG4gICAgICAgIHZhciBrID0gMDtcclxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICB2YXIgbmV4dCA9IEl0ZXJhdG9yU3RlcChpdGVyYXRvcik7XHJcbiAgICAgICAgICAgIGlmICghbmV4dCkge1xyXG4gICAgICAgICAgICAgICAga2V5cy5sZW5ndGggPSBrO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGtleXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIG5leHRWYWx1ZSA9IEl0ZXJhdG9yVmFsdWUobmV4dCk7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBrZXlzW2tdID0gbmV4dFZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZmluYWxseSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBrKys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gNiBFQ01BU2NyaXB0IERhdGEgVHlwMGVzIGFuZCBWYWx1ZXNcclxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWVjbWFzY3JpcHQtZGF0YS10eXBlcy1hbmQtdmFsdWVzXHJcbiAgICBmdW5jdGlvbiBUeXBlKHgpIHtcclxuICAgICAgICBpZiAoeCA9PT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuIDEgLyogTnVsbCAqLztcclxuICAgICAgICBzd2l0Y2ggKHR5cGVvZiB4KSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ1bmRlZmluZWRcIjogcmV0dXJuIDAgLyogVW5kZWZpbmVkICovO1xyXG4gICAgICAgICAgICBjYXNlIFwiYm9vbGVhblwiOiByZXR1cm4gMiAvKiBCb29sZWFuICovO1xyXG4gICAgICAgICAgICBjYXNlIFwic3RyaW5nXCI6IHJldHVybiAzIC8qIFN0cmluZyAqLztcclxuICAgICAgICAgICAgY2FzZSBcInN5bWJvbFwiOiByZXR1cm4gNCAvKiBTeW1ib2wgKi87XHJcbiAgICAgICAgICAgIGNhc2UgXCJudW1iZXJcIjogcmV0dXJuIDUgLyogTnVtYmVyICovO1xyXG4gICAgICAgICAgICBjYXNlIFwib2JqZWN0XCI6IHJldHVybiB4ID09PSBudWxsID8gMSAvKiBOdWxsICovIDogNiAvKiBPYmplY3QgKi87XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiA2IC8qIE9iamVjdCAqLztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyA2LjEuMSBUaGUgVW5kZWZpbmVkIFR5cGVcclxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMtdW5kZWZpbmVkLXR5cGVcclxuICAgIGZ1bmN0aW9uIElzVW5kZWZpbmVkKHgpIHtcclxuICAgICAgICByZXR1cm4geCA9PT0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgLy8gNi4xLjIgVGhlIE51bGwgVHlwZVxyXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtZWNtYXNjcmlwdC1sYW5ndWFnZS10eXBlcy1udWxsLXR5cGVcclxuICAgIGZ1bmN0aW9uIElzTnVsbCh4KSB7XHJcbiAgICAgICAgcmV0dXJuIHggPT09IG51bGw7XHJcbiAgICB9XHJcbiAgICAvLyA2LjEuNSBUaGUgU3ltYm9sIFR5cGVcclxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMtc3ltYm9sLXR5cGVcclxuICAgIGZ1bmN0aW9uIElzU3ltYm9sKHgpIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHggPT09IFwic3ltYm9sXCI7XHJcbiAgICB9XHJcbiAgICAvLyA2LjEuNyBUaGUgT2JqZWN0IFR5cGVcclxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9iamVjdC10eXBlXHJcbiAgICBmdW5jdGlvbiBJc09iamVjdCh4KSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB4ID09PSBcIm9iamVjdFwiID8geCAhPT0gbnVsbCA6IHR5cGVvZiB4ID09PSBcImZ1bmN0aW9uXCI7XHJcbiAgICB9XHJcbiAgICAvLyA3LjEgVHlwZSBDb252ZXJzaW9uXHJcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy10eXBlLWNvbnZlcnNpb25cclxuICAgIC8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxyXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdG9wcmltaXRpdmVcclxuICAgIGZ1bmN0aW9uIFRvUHJpbWl0aXZlKGlucHV0LCBQcmVmZXJyZWRUeXBlKSB7XHJcbiAgICAgICAgc3dpdGNoIChUeXBlKGlucHV0KSkge1xyXG4gICAgICAgICAgICBjYXNlIDAgLyogVW5kZWZpbmVkICovOiByZXR1cm4gaW5wdXQ7XHJcbiAgICAgICAgICAgIGNhc2UgMSAvKiBOdWxsICovOiByZXR1cm4gaW5wdXQ7XHJcbiAgICAgICAgICAgIGNhc2UgMiAvKiBCb29sZWFuICovOiByZXR1cm4gaW5wdXQ7XHJcbiAgICAgICAgICAgIGNhc2UgMyAvKiBTdHJpbmcgKi86IHJldHVybiBpbnB1dDtcclxuICAgICAgICAgICAgY2FzZSA0IC8qIFN5bWJvbCAqLzogcmV0dXJuIGlucHV0O1xyXG4gICAgICAgICAgICBjYXNlIDUgLyogTnVtYmVyICovOiByZXR1cm4gaW5wdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBoaW50ID0gUHJlZmVycmVkVHlwZSA9PT0gMyAvKiBTdHJpbmcgKi8gPyBcInN0cmluZ1wiIDogUHJlZmVycmVkVHlwZSA9PT0gNSAvKiBOdW1iZXIgKi8gPyBcIm51bWJlclwiIDogXCJkZWZhdWx0XCI7XHJcbiAgICAgICAgdmFyIGV4b3RpY1RvUHJpbSA9IEdldE1ldGhvZChpbnB1dCwgdG9QcmltaXRpdmVTeW1ib2wpO1xyXG4gICAgICAgIGlmIChleG90aWNUb1ByaW0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gZXhvdGljVG9QcmltLmNhbGwoaW5wdXQsIGhpbnQpO1xyXG4gICAgICAgICAgICBpZiAoSXNPYmplY3QocmVzdWx0KSlcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIE9yZGluYXJ5VG9QcmltaXRpdmUoaW5wdXQsIGhpbnQgPT09IFwiZGVmYXVsdFwiID8gXCJudW1iZXJcIiA6IGhpbnQpO1xyXG4gICAgfVxyXG4gICAgLy8gNy4xLjEuMSBPcmRpbmFyeVRvUHJpbWl0aXZlKE8sIGhpbnQpXHJcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vcmRpbmFyeXRvcHJpbWl0aXZlXHJcbiAgICBmdW5jdGlvbiBPcmRpbmFyeVRvUHJpbWl0aXZlKE8sIGhpbnQpIHtcclxuICAgICAgICBpZiAoaGludCA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgICAgICAgICB2YXIgdG9TdHJpbmdfMSA9IE8udG9TdHJpbmc7XHJcbiAgICAgICAgICAgIGlmIChJc0NhbGxhYmxlKHRvU3RyaW5nXzEpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gdG9TdHJpbmdfMS5jYWxsKE8pO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFJc09iamVjdChyZXN1bHQpKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIHZhbHVlT2YgPSBPLnZhbHVlT2Y7XHJcbiAgICAgICAgICAgIGlmIChJc0NhbGxhYmxlKHZhbHVlT2YpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gdmFsdWVPZi5jYWxsKE8pO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFJc09iamVjdChyZXN1bHQpKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciB2YWx1ZU9mID0gTy52YWx1ZU9mO1xyXG4gICAgICAgICAgICBpZiAoSXNDYWxsYWJsZSh2YWx1ZU9mKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHZhbHVlT2YuY2FsbChPKTtcclxuICAgICAgICAgICAgICAgIGlmICghSXNPYmplY3QocmVzdWx0KSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHZhciB0b1N0cmluZ18yID0gTy50b1N0cmluZztcclxuICAgICAgICAgICAgaWYgKElzQ2FsbGFibGUodG9TdHJpbmdfMikpIHtcclxuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSB0b1N0cmluZ18yLmNhbGwoTyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIUlzT2JqZWN0KHJlc3VsdCkpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XHJcbiAgICB9XHJcbiAgICAvLyA3LjEuMiBUb0Jvb2xlYW4oYXJndW1lbnQpXHJcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvMjAxNi8jc2VjLXRvYm9vbGVhblxyXG4gICAgZnVuY3Rpb24gVG9Cb29sZWFuKGFyZ3VtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuICEhYXJndW1lbnQ7XHJcbiAgICB9XHJcbiAgICAvLyA3LjEuMTIgVG9TdHJpbmcoYXJndW1lbnQpXHJcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy10b3N0cmluZ1xyXG4gICAgZnVuY3Rpb24gVG9TdHJpbmcoYXJndW1lbnQpIHtcclxuICAgICAgICByZXR1cm4gXCJcIiArIGFyZ3VtZW50O1xyXG4gICAgfVxyXG4gICAgLy8gNy4xLjE0IFRvUHJvcGVydHlLZXkoYXJndW1lbnQpXHJcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy10b3Byb3BlcnR5a2V5XHJcbiAgICBmdW5jdGlvbiBUb1Byb3BlcnR5S2V5KGFyZ3VtZW50KSB7XHJcbiAgICAgICAgdmFyIGtleSA9IFRvUHJpbWl0aXZlKGFyZ3VtZW50LCAzIC8qIFN0cmluZyAqLyk7XHJcbiAgICAgICAgaWYgKElzU3ltYm9sKGtleSkpXHJcbiAgICAgICAgICAgIHJldHVybiBrZXk7XHJcbiAgICAgICAgcmV0dXJuIFRvU3RyaW5nKGtleSk7XHJcbiAgICB9XHJcbiAgICAvLyA3LjIgVGVzdGluZyBhbmQgQ29tcGFyaXNvbiBPcGVyYXRpb25zXHJcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy10ZXN0aW5nLWFuZC1jb21wYXJpc29uLW9wZXJhdGlvbnNcclxuICAgIC8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXHJcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1pc2FycmF5XHJcbiAgICBmdW5jdGlvbiBJc0FycmF5KGFyZ3VtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXlcclxuICAgICAgICAgICAgPyBBcnJheS5pc0FycmF5KGFyZ3VtZW50KVxyXG4gICAgICAgICAgICA6IGFyZ3VtZW50IGluc3RhbmNlb2YgT2JqZWN0XHJcbiAgICAgICAgICAgICAgICA/IGFyZ3VtZW50IGluc3RhbmNlb2YgQXJyYXlcclxuICAgICAgICAgICAgICAgIDogT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KSA9PT0gXCJbb2JqZWN0IEFycmF5XVwiO1xyXG4gICAgfVxyXG4gICAgLy8gNy4yLjMgSXNDYWxsYWJsZShhcmd1bWVudClcclxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWlzY2FsbGFibGVcclxuICAgIGZ1bmN0aW9uIElzQ2FsbGFibGUoYXJndW1lbnQpIHtcclxuICAgICAgICAvLyBOT1RFOiBUaGlzIGlzIGFuIGFwcHJveGltYXRpb24gYXMgd2UgY2Fubm90IGNoZWNrIGZvciBbW0NhbGxdXSBpbnRlcm5hbCBtZXRob2QuXHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJmdW5jdGlvblwiO1xyXG4gICAgfVxyXG4gICAgLy8gNy4yLjQgSXNDb25zdHJ1Y3Rvcihhcmd1bWVudClcclxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWlzY29uc3RydWN0b3JcclxuICAgIGZ1bmN0aW9uIElzQ29uc3RydWN0b3IoYXJndW1lbnQpIHtcclxuICAgICAgICAvLyBOT1RFOiBUaGlzIGlzIGFuIGFwcHJveGltYXRpb24gYXMgd2UgY2Fubm90IGNoZWNrIGZvciBbW0NvbnN0cnVjdF1dIGludGVybmFsIG1ldGhvZC5cclxuICAgICAgICByZXR1cm4gdHlwZW9mIGFyZ3VtZW50ID09PSBcImZ1bmN0aW9uXCI7XHJcbiAgICB9XHJcbiAgICAvLyA3LjIuNyBJc1Byb3BlcnR5S2V5KGFyZ3VtZW50KVxyXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtaXNwcm9wZXJ0eWtleVxyXG4gICAgZnVuY3Rpb24gSXNQcm9wZXJ0eUtleShhcmd1bWVudCkge1xyXG4gICAgICAgIHN3aXRjaCAoVHlwZShhcmd1bWVudCkpIHtcclxuICAgICAgICAgICAgY2FzZSAzIC8qIFN0cmluZyAqLzogcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIGNhc2UgNCAvKiBTeW1ib2wgKi86IHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICBkZWZhdWx0OiByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gNy4zIE9wZXJhdGlvbnMgb24gT2JqZWN0c1xyXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb3BlcmF0aW9ucy1vbi1vYmplY3RzXHJcbiAgICAvLyA3LjMuOSBHZXRNZXRob2QoViwgUClcclxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWdldG1ldGhvZFxyXG4gICAgZnVuY3Rpb24gR2V0TWV0aG9kKFYsIFApIHtcclxuICAgICAgICB2YXIgZnVuYyA9IFZbUF07XHJcbiAgICAgICAgaWYgKGZ1bmMgPT09IHVuZGVmaW5lZCB8fCBmdW5jID09PSBudWxsKVxyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIGlmICghSXNDYWxsYWJsZShmdW5jKSlcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xyXG4gICAgICAgIHJldHVybiBmdW5jO1xyXG4gICAgfVxyXG4gICAgLy8gNy40IE9wZXJhdGlvbnMgb24gSXRlcmF0b3IgT2JqZWN0c1xyXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb3BlcmF0aW9ucy1vbi1pdGVyYXRvci1vYmplY3RzXHJcbiAgICBmdW5jdGlvbiBHZXRJdGVyYXRvcihvYmopIHtcclxuICAgICAgICB2YXIgbWV0aG9kID0gR2V0TWV0aG9kKG9iaiwgaXRlcmF0b3JTeW1ib2wpO1xyXG4gICAgICAgIGlmICghSXNDYWxsYWJsZShtZXRob2QpKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7IC8vIGZyb20gQ2FsbFxyXG4gICAgICAgIHZhciBpdGVyYXRvciA9IG1ldGhvZC5jYWxsKG9iaik7XHJcbiAgICAgICAgaWYgKCFJc09iamVjdChpdGVyYXRvcikpXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcclxuICAgICAgICByZXR1cm4gaXRlcmF0b3I7XHJcbiAgICB9XHJcbiAgICAvLyA3LjQuNCBJdGVyYXRvclZhbHVlKGl0ZXJSZXN1bHQpXHJcbiAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvMjAxNi8jc2VjLWl0ZXJhdG9ydmFsdWVcclxuICAgIGZ1bmN0aW9uIEl0ZXJhdG9yVmFsdWUoaXRlclJlc3VsdCkge1xyXG4gICAgICAgIHJldHVybiBpdGVyUmVzdWx0LnZhbHVlO1xyXG4gICAgfVxyXG4gICAgLy8gNy40LjUgSXRlcmF0b3JTdGVwKGl0ZXJhdG9yKVxyXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtaXRlcmF0b3JzdGVwXHJcbiAgICBmdW5jdGlvbiBJdGVyYXRvclN0ZXAoaXRlcmF0b3IpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gaXRlcmF0b3IubmV4dCgpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IGZhbHNlIDogcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcclxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWl0ZXJhdG9yY2xvc2VcclxuICAgIGZ1bmN0aW9uIEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IpIHtcclxuICAgICAgICB2YXIgZiA9IGl0ZXJhdG9yW1wicmV0dXJuXCJdO1xyXG4gICAgICAgIGlmIChmKVxyXG4gICAgICAgICAgICBmLmNhbGwoaXRlcmF0b3IpO1xyXG4gICAgfVxyXG4gICAgLy8gOS4xIE9yZGluYXJ5IE9iamVjdCBJbnRlcm5hbCBNZXRob2RzIGFuZCBJbnRlcm5hbCBTbG90c1xyXG4gICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtb3JkaW5hcnktb2JqZWN0LWludGVybmFsLW1ldGhvZHMtYW5kLWludGVybmFsLXNsb3RzXHJcbiAgICAvLyA5LjEuMS4xIE9yZGluYXJ5R2V0UHJvdG90eXBlT2YoTylcclxuICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9yZGluYXJ5Z2V0cHJvdG90eXBlb2ZcclxuICAgIGZ1bmN0aW9uIE9yZGluYXJ5R2V0UHJvdG90eXBlT2YoTykge1xyXG4gICAgICAgIHZhciBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihPKTtcclxuICAgICAgICBpZiAodHlwZW9mIE8gIT09IFwiZnVuY3Rpb25cIiB8fCBPID09PSBmdW5jdGlvblByb3RvdHlwZSlcclxuICAgICAgICAgICAgcmV0dXJuIHByb3RvO1xyXG4gICAgICAgIC8vIFR5cGVTY3JpcHQgZG9lc24ndCBzZXQgX19wcm90b19fIGluIEVTNSwgYXMgaXQncyBub24tc3RhbmRhcmQuXHJcbiAgICAgICAgLy8gVHJ5IHRvIGRldGVybWluZSB0aGUgc3VwZXJjbGFzcyBjb25zdHJ1Y3Rvci4gQ29tcGF0aWJsZSBpbXBsZW1lbnRhdGlvbnNcclxuICAgICAgICAvLyBtdXN0IGVpdGhlciBzZXQgX19wcm90b19fIG9uIGEgc3ViY2xhc3MgY29uc3RydWN0b3IgdG8gdGhlIHN1cGVyY2xhc3MgY29uc3RydWN0b3IsXHJcbiAgICAgICAgLy8gb3IgZW5zdXJlIGVhY2ggY2xhc3MgaGFzIGEgdmFsaWQgYGNvbnN0cnVjdG9yYCBwcm9wZXJ0eSBvbiBpdHMgcHJvdG90eXBlIHRoYXRcclxuICAgICAgICAvLyBwb2ludHMgYmFjayB0byB0aGUgY29uc3RydWN0b3IuXHJcbiAgICAgICAgLy8gSWYgdGhpcyBpcyBub3QgdGhlIHNhbWUgYXMgRnVuY3Rpb24uW1tQcm90b3R5cGVdXSwgdGhlbiB0aGlzIGlzIGRlZmluYXRlbHkgaW5oZXJpdGVkLlxyXG4gICAgICAgIC8vIFRoaXMgaXMgdGhlIGNhc2Ugd2hlbiBpbiBFUzYgb3Igd2hlbiB1c2luZyBfX3Byb3RvX18gaW4gYSBjb21wYXRpYmxlIGJyb3dzZXIuXHJcbiAgICAgICAgaWYgKHByb3RvICE9PSBmdW5jdGlvblByb3RvdHlwZSlcclxuICAgICAgICAgICAgcmV0dXJuIHByb3RvO1xyXG4gICAgICAgIC8vIElmIHRoZSBzdXBlciBwcm90b3R5cGUgaXMgT2JqZWN0LnByb3RvdHlwZSwgbnVsbCwgb3IgdW5kZWZpbmVkLCB0aGVuIHdlIGNhbm5vdCBkZXRlcm1pbmUgdGhlIGhlcml0YWdlLlxyXG4gICAgICAgIHZhciBwcm90b3R5cGUgPSBPLnByb3RvdHlwZTtcclxuICAgICAgICB2YXIgcHJvdG90eXBlUHJvdG8gPSBwcm90b3R5cGUgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvdHlwZSk7XHJcbiAgICAgICAgaWYgKHByb3RvdHlwZVByb3RvID09IG51bGwgfHwgcHJvdG90eXBlUHJvdG8gPT09IE9iamVjdC5wcm90b3R5cGUpXHJcbiAgICAgICAgICAgIHJldHVybiBwcm90bztcclxuICAgICAgICAvLyBJZiB0aGUgY29uc3RydWN0b3Igd2FzIG5vdCBhIGZ1bmN0aW9uLCB0aGVuIHdlIGNhbm5vdCBkZXRlcm1pbmUgdGhlIGhlcml0YWdlLlxyXG4gICAgICAgIHZhciBjb25zdHJ1Y3RvciA9IHByb3RvdHlwZVByb3RvLmNvbnN0cnVjdG9yO1xyXG4gICAgICAgIGlmICh0eXBlb2YgY29uc3RydWN0b3IgIT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICAgICAgcmV0dXJuIHByb3RvO1xyXG4gICAgICAgIC8vIElmIHdlIGhhdmUgc29tZSBraW5kIG9mIHNlbGYtcmVmZXJlbmNlLCB0aGVuIHdlIGNhbm5vdCBkZXRlcm1pbmUgdGhlIGhlcml0YWdlLlxyXG4gICAgICAgIGlmIChjb25zdHJ1Y3RvciA9PT0gTylcclxuICAgICAgICAgICAgcmV0dXJuIHByb3RvO1xyXG4gICAgICAgIC8vIHdlIGhhdmUgYSBwcmV0dHkgZ29vZCBndWVzcyBhdCB0aGUgaGVyaXRhZ2UuXHJcbiAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xyXG4gICAgfVxyXG4gICAgLy8gbmFpdmUgTWFwIHNoaW1cclxuICAgIGZ1bmN0aW9uIENyZWF0ZU1hcFBvbHlmaWxsKCkge1xyXG4gICAgICAgIHZhciBjYWNoZVNlbnRpbmVsID0ge307XHJcbiAgICAgICAgdmFyIGFycmF5U2VudGluZWwgPSBbXTtcclxuICAgICAgICB2YXIgTWFwSXRlcmF0b3IgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBNYXBJdGVyYXRvcihrZXlzLCB2YWx1ZXMsIHNlbGVjdG9yKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9rZXlzID0ga2V5cztcclxuICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlcyA9IHZhbHVlcztcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NlbGVjdG9yID0gc2VsZWN0b3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgTWFwSXRlcmF0b3IucHJvdG90eXBlW1wiQEBpdGVyYXRvclwiXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XHJcbiAgICAgICAgICAgIE1hcEl0ZXJhdG9yLnByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xyXG4gICAgICAgICAgICBNYXBJdGVyYXRvci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuX2luZGV4O1xyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCB0aGlzLl9rZXlzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSB0aGlzLl9zZWxlY3Rvcih0aGlzLl9rZXlzW2luZGV4XSwgdGhpcy5fdmFsdWVzW2luZGV4XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ICsgMSA+PSB0aGlzLl9rZXlzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbmRleCA9IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXlzID0gYXJyYXlTZW50aW5lbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmFsdWVzID0gYXJyYXlTZW50aW5lbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2luZGV4Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiByZXN1bHQsIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIE1hcEl0ZXJhdG9yLnByb3RvdHlwZS50aHJvdyA9IGZ1bmN0aW9uIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2luZGV4ID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbmRleCA9IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2tleXMgPSBhcnJheVNlbnRpbmVsO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlcyA9IGFycmF5U2VudGluZWw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgTWFwSXRlcmF0b3IucHJvdG90eXBlLnJldHVybiA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2luZGV4ID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbmRleCA9IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2tleXMgPSBhcnJheVNlbnRpbmVsO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlcyA9IGFycmF5U2VudGluZWw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6IHRydWUgfTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmV0dXJuIE1hcEl0ZXJhdG9yO1xyXG4gICAgICAgIH0oKSk7XHJcbiAgICAgICAgcmV0dXJuIChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIE1hcCgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2tleXMgPSBbXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2FjaGVLZXkgPSBjYWNoZVNlbnRpbmVsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2FjaGVJbmRleCA9IC0yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShNYXAucHJvdG90eXBlLCBcInNpemVcIiwge1xyXG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9rZXlzLmxlbmd0aDsgfSxcclxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIE1hcC5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gdGhpcy5fZmluZChrZXksIC8qaW5zZXJ0Ki8gZmFsc2UpID49IDA7IH07XHJcbiAgICAgICAgICAgIE1hcC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5fZmluZChrZXksIC8qaW5zZXJ0Ki8gZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGluZGV4ID49IDAgPyB0aGlzLl92YWx1ZXNbaW5kZXhdIDogdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBNYXAucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLl9maW5kKGtleSwgLyppbnNlcnQqLyB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlc1tpbmRleF0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBNYXAucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuX2ZpbmQoa2V5LCAvKmluc2VydCovIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNpemUgPSB0aGlzLl9rZXlzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gaW5kZXggKyAxOyBpIDwgc2l6ZTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2tleXNbaSAtIDFdID0gdGhpcy5fa2V5c1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmFsdWVzW2kgLSAxXSA9IHRoaXMuX3ZhbHVlc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5cy5sZW5ndGgtLTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZXMubGVuZ3RoLS07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gdGhpcy5fY2FjaGVLZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FjaGVLZXkgPSBjYWNoZVNlbnRpbmVsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZUluZGV4ID0gLTI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBNYXAucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fa2V5cy5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdmFsdWVzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZUtleSA9IGNhY2hlU2VudGluZWw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZUluZGV4ID0gLTI7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIE1hcC5wcm90b3R5cGUua2V5cyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBNYXBJdGVyYXRvcih0aGlzLl9rZXlzLCB0aGlzLl92YWx1ZXMsIGdldEtleSk7IH07XHJcbiAgICAgICAgICAgIE1hcC5wcm90b3R5cGUudmFsdWVzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IE1hcEl0ZXJhdG9yKHRoaXMuX2tleXMsIHRoaXMuX3ZhbHVlcywgZ2V0VmFsdWUpOyB9O1xyXG4gICAgICAgICAgICBNYXAucHJvdG90eXBlLmVudHJpZXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgTWFwSXRlcmF0b3IodGhpcy5fa2V5cywgdGhpcy5fdmFsdWVzLCBnZXRFbnRyeSk7IH07XHJcbiAgICAgICAgICAgIE1hcC5wcm90b3R5cGVbXCJAQGl0ZXJhdG9yXCJdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzKCk7IH07XHJcbiAgICAgICAgICAgIE1hcC5wcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5lbnRyaWVzKCk7IH07XHJcbiAgICAgICAgICAgIE1hcC5wcm90b3R5cGUuX2ZpbmQgPSBmdW5jdGlvbiAoa2V5LCBpbnNlcnQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jYWNoZUtleSAhPT0ga2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FjaGVJbmRleCA9IHRoaXMuX2tleXMuaW5kZXhPZih0aGlzLl9jYWNoZUtleSA9IGtleSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fY2FjaGVJbmRleCA8IDAgJiYgaW5zZXJ0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FjaGVJbmRleCA9IHRoaXMuX2tleXMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2tleXMucHVzaChrZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlcy5wdXNoKHVuZGVmaW5lZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGVJbmRleDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmV0dXJuIE1hcDtcclxuICAgICAgICB9KCkpO1xyXG4gICAgICAgIGZ1bmN0aW9uIGdldEtleShrZXksIF8pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGtleTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0VmFsdWUoXywgdmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmdW5jdGlvbiBnZXRFbnRyeShrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBba2V5LCB2YWx1ZV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gbmFpdmUgU2V0IHNoaW1cclxuICAgIGZ1bmN0aW9uIENyZWF0ZVNldFBvbHlmaWxsKCkge1xyXG4gICAgICAgIHJldHVybiAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBmdW5jdGlvbiBTZXQoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tYXAgPSBuZXcgX01hcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZXQucHJvdG90eXBlLCBcInNpemVcIiwge1xyXG4gICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9tYXAuc2l6ZTsgfSxcclxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFNldC5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB0aGlzLl9tYXAuaGFzKHZhbHVlKTsgfTtcclxuICAgICAgICAgICAgU2V0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIHRoaXMuX21hcC5zZXQodmFsdWUsIHZhbHVlKSwgdGhpczsgfTtcclxuICAgICAgICAgICAgU2V0LnByb3RvdHlwZS5kZWxldGUgPSBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIHRoaXMuX21hcC5kZWxldGUodmFsdWUpOyB9O1xyXG4gICAgICAgICAgICBTZXQucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkgeyB0aGlzLl9tYXAuY2xlYXIoKTsgfTtcclxuICAgICAgICAgICAgU2V0LnByb3RvdHlwZS5rZXlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fbWFwLmtleXMoKTsgfTtcclxuICAgICAgICAgICAgU2V0LnByb3RvdHlwZS52YWx1ZXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9tYXAudmFsdWVzKCk7IH07XHJcbiAgICAgICAgICAgIFNldC5wcm90b3R5cGUuZW50cmllcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX21hcC5lbnRyaWVzKCk7IH07XHJcbiAgICAgICAgICAgIFNldC5wcm90b3R5cGVbXCJAQGl0ZXJhdG9yXCJdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5rZXlzKCk7IH07XHJcbiAgICAgICAgICAgIFNldC5wcm90b3R5cGVbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5rZXlzKCk7IH07XHJcbiAgICAgICAgICAgIHJldHVybiBTZXQ7XHJcbiAgICAgICAgfSgpKTtcclxuICAgIH1cclxuICAgIC8vIG5haXZlIFdlYWtNYXAgc2hpbVxyXG4gICAgZnVuY3Rpb24gQ3JlYXRlV2Vha01hcFBvbHlmaWxsKCkge1xyXG4gICAgICAgIHZhciBVVUlEX1NJWkUgPSAxNjtcclxuICAgICAgICB2YXIga2V5cyA9IEhhc2hNYXAuY3JlYXRlKCk7XHJcbiAgICAgICAgdmFyIHJvb3RLZXkgPSBDcmVhdGVVbmlxdWVLZXkoKTtcclxuICAgICAgICByZXR1cm4gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZnVuY3Rpb24gV2Vha01hcCgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2tleSA9IENyZWF0ZVVuaXF1ZUtleSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFdlYWtNYXAucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0YWJsZSA9IEdldE9yQ3JlYXRlV2Vha01hcFRhYmxlKHRhcmdldCwgLypjcmVhdGUqLyBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFibGUgIT09IHVuZGVmaW5lZCA/IEhhc2hNYXAuaGFzKHRhYmxlLCB0aGlzLl9rZXkpIDogZmFsc2U7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIFdlYWtNYXAucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0YWJsZSA9IEdldE9yQ3JlYXRlV2Vha01hcFRhYmxlKHRhcmdldCwgLypjcmVhdGUqLyBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFibGUgIT09IHVuZGVmaW5lZCA/IEhhc2hNYXAuZ2V0KHRhYmxlLCB0aGlzLl9rZXkpIDogdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBXZWFrTWFwLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRhYmxlID0gR2V0T3JDcmVhdGVXZWFrTWFwVGFibGUodGFyZ2V0LCAvKmNyZWF0ZSovIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGFibGVbdGhpcy5fa2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIFdlYWtNYXAucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0YWJsZSA9IEdldE9yQ3JlYXRlV2Vha01hcFRhYmxlKHRhcmdldCwgLypjcmVhdGUqLyBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFibGUgIT09IHVuZGVmaW5lZCA/IGRlbGV0ZSB0YWJsZVt0aGlzLl9rZXldIDogZmFsc2U7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIFdlYWtNYXAucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgLy8gTk9URTogbm90IGEgcmVhbCBjbGVhciwganVzdCBtYWtlcyB0aGUgcHJldmlvdXMgZGF0YSB1bnJlYWNoYWJsZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fa2V5ID0gQ3JlYXRlVW5pcXVlS2V5KCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJldHVybiBXZWFrTWFwO1xyXG4gICAgICAgIH0oKSk7XHJcbiAgICAgICAgZnVuY3Rpb24gQ3JlYXRlVW5pcXVlS2V5KCkge1xyXG4gICAgICAgICAgICB2YXIga2V5O1xyXG4gICAgICAgICAgICBkb1xyXG4gICAgICAgICAgICAgICAga2V5ID0gXCJAQFdlYWtNYXBAQFwiICsgQ3JlYXRlVVVJRCgpO1xyXG4gICAgICAgICAgICB3aGlsZSAoSGFzaE1hcC5oYXMoa2V5cywga2V5KSk7XHJcbiAgICAgICAgICAgIGtleXNba2V5XSA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybiBrZXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZ1bmN0aW9uIEdldE9yQ3JlYXRlV2Vha01hcFRhYmxlKHRhcmdldCwgY3JlYXRlKSB7XHJcbiAgICAgICAgICAgIGlmICghaGFzT3duLmNhbGwodGFyZ2V0LCByb290S2V5KSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjcmVhdGUpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHJvb3RLZXksIHsgdmFsdWU6IEhhc2hNYXAuY3JlYXRlKCkgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtyb290S2V5XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gRmlsbFJhbmRvbUJ5dGVzKGJ1ZmZlciwgc2l6ZSkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpemU7ICsraSlcclxuICAgICAgICAgICAgICAgIGJ1ZmZlcltpXSA9IE1hdGgucmFuZG9tKCkgKiAweGZmIHwgMDtcclxuICAgICAgICAgICAgcmV0dXJuIGJ1ZmZlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gR2VuUmFuZG9tQnl0ZXMoc2l6ZSkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIFVpbnQ4QXJyYXkgPT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjcnlwdG8gIT09IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoc2l6ZSkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtc0NyeXB0byAhPT0gXCJ1bmRlZmluZWRcIilcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KHNpemUpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBGaWxsUmFuZG9tQnl0ZXMobmV3IFVpbnQ4QXJyYXkoc2l6ZSksIHNpemUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBGaWxsUmFuZG9tQnl0ZXMobmV3IEFycmF5KHNpemUpLCBzaXplKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZnVuY3Rpb24gQ3JlYXRlVVVJRCgpIHtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSBHZW5SYW5kb21CeXRlcyhVVUlEX1NJWkUpO1xyXG4gICAgICAgICAgICAvLyBtYXJrIGFzIHJhbmRvbSAtIFJGQyA0MTIyIMKnIDQuNFxyXG4gICAgICAgICAgICBkYXRhWzZdID0gZGF0YVs2XSAmIDB4NGYgfCAweDQwO1xyXG4gICAgICAgICAgICBkYXRhWzhdID0gZGF0YVs4XSAmIDB4YmYgfCAweDgwO1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcclxuICAgICAgICAgICAgZm9yICh2YXIgb2Zmc2V0ID0gMDsgb2Zmc2V0IDwgVVVJRF9TSVpFOyArK29mZnNldCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGJ5dGUgPSBkYXRhW29mZnNldF07XHJcbiAgICAgICAgICAgICAgICBpZiAob2Zmc2V0ID09PSA0IHx8IG9mZnNldCA9PT0gNiB8fCBvZmZzZXQgPT09IDgpXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IFwiLVwiO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJ5dGUgPCAxNilcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gXCIwXCI7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgKz0gYnl0ZS50b1N0cmluZygxNikudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHVzZXMgYSBoZXVyaXN0aWMgdXNlZCBieSB2OCBhbmQgY2hha3JhIHRvIGZvcmNlIGFuIG9iamVjdCBpbnRvIGRpY3Rpb25hcnkgbW9kZS5cclxuICAgIGZ1bmN0aW9uIE1ha2VEaWN0aW9uYXJ5KG9iaikge1xyXG4gICAgICAgIG9iai5fXyA9IHVuZGVmaW5lZDtcclxuICAgICAgICBkZWxldGUgb2JqLl9fO1xyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9XHJcbiAgICAvLyBwYXRjaCBnbG9iYWwgUmVmbGVjdFxyXG4gICAgKGZ1bmN0aW9uIChfX2dsb2JhbCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgX19nbG9iYWwuUmVmbGVjdCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICBpZiAoX19nbG9iYWwuUmVmbGVjdCAhPT0gUmVmbGVjdCkge1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBSZWZsZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKFJlZmxlY3QsIHApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9fZ2xvYmFsLlJlZmxlY3RbcF0gPSBSZWZsZWN0W3BdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgX19nbG9iYWwuUmVmbGVjdCA9IFJlZmxlY3Q7XHJcbiAgICAgICAgfVxyXG4gICAgfSkodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6XHJcbiAgICAgICAgdHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgPyBzZWxmIDpcclxuICAgICAgICAgICAgRnVuY3Rpb24oXCJyZXR1cm4gdGhpcztcIikoKSk7XHJcbn0pKFJlZmxlY3QgfHwgKFJlZmxlY3QgPSB7fSkpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1SZWZsZWN0LmpzLm1hcFxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3JlZmxlY3QtbWV0YWRhdGEvUmVmbGVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgYmluZGluZ18xID0gcmVxdWlyZShcIi4uL2JpbmRpbmdzL2JpbmRpbmdcIik7XG52YXIgbG9va3VwXzEgPSByZXF1aXJlKFwiLi9sb29rdXBcIik7XG52YXIgcGxhbm5lcl8xID0gcmVxdWlyZShcIi4uL3BsYW5uaW5nL3BsYW5uZXJcIik7XG52YXIgcmVzb2x2ZXJfMSA9IHJlcXVpcmUoXCIuLi9yZXNvbHV0aW9uL3Jlc29sdmVyXCIpO1xudmFyIGJpbmRpbmdfdG9fc3ludGF4XzEgPSByZXF1aXJlKFwiLi4vc3ludGF4L2JpbmRpbmdfdG9fc3ludGF4XCIpO1xudmFyIHNlcmlhbGl6YXRpb25fMSA9IHJlcXVpcmUoXCIuLi91dGlscy9zZXJpYWxpemF0aW9uXCIpO1xudmFyIGNvbnRhaW5lcl9zbmFwc2hvdF8xID0gcmVxdWlyZShcIi4vY29udGFpbmVyX3NuYXBzaG90XCIpO1xudmFyIGd1aWRfMSA9IHJlcXVpcmUoXCIuLi91dGlscy9ndWlkXCIpO1xudmFyIEVSUk9SX01TR1MgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzL2Vycm9yX21zZ3NcIik7XG52YXIgTUVUQURBVEFfS0VZID0gcmVxdWlyZShcIi4uL2NvbnN0YW50cy9tZXRhZGF0YV9rZXlzXCIpO1xudmFyIGxpdGVyYWxfdHlwZXNfMSA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHMvbGl0ZXJhbF90eXBlc1wiKTtcbnZhciBtZXRhZGF0YV9yZWFkZXJfMSA9IHJlcXVpcmUoXCIuLi9wbGFubmluZy9tZXRhZGF0YV9yZWFkZXJcIik7XG52YXIgQ29udGFpbmVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDb250YWluZXIoY29udGFpbmVyT3B0aW9ucykge1xuICAgICAgICBpZiAoY29udGFpbmVyT3B0aW9ucyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRhaW5lck9wdGlvbnMgIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJcIiArIEVSUk9SX01TR1MuQ09OVEFJTkVSX09QVElPTlNfTVVTVF9CRV9BTl9PQkpFQ1QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5lck9wdGlvbnMuZGVmYXVsdFNjb3BlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyT3B0aW9ucy5kZWZhdWx0U2NvcGUgIT09IGxpdGVyYWxfdHlwZXNfMS5CaW5kaW5nU2NvcGVFbnVtLlNpbmdsZXRvbiAmJlxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJPcHRpb25zLmRlZmF1bHRTY29wZSAhPT0gbGl0ZXJhbF90eXBlc18xLkJpbmRpbmdTY29wZUVudW0uVHJhbnNpZW50ICYmXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lck9wdGlvbnMuZGVmYXVsdFNjb3BlICE9PSBsaXRlcmFsX3R5cGVzXzEuQmluZGluZ1Njb3BlRW51bS5SZXF1ZXN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlwiICsgRVJST1JfTVNHUy5DT05UQUlORVJfT1BUSU9OU19JTlZBTElEX0RFRkFVTFRfU0NPUEUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY29udGFpbmVyT3B0aW9ucy5hdXRvQmluZEluamVjdGFibGUgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgICAgICB0eXBlb2YgY29udGFpbmVyT3B0aW9ucy5hdXRvQmluZEluamVjdGFibGUgIT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlwiICsgRVJST1JfTVNHUy5DT05UQUlORVJfT1BUSU9OU19JTlZBTElEX0FVVE9fQklORF9JTkpFQ1RBQkxFKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgYXV0b0JpbmRJbmplY3RhYmxlOiBjb250YWluZXJPcHRpb25zLmF1dG9CaW5kSW5qZWN0YWJsZSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0U2NvcGU6IGNvbnRhaW5lck9wdGlvbnMuZGVmYXVsdFNjb3BlXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIGF1dG9CaW5kSW5qZWN0YWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZGVmYXVsdFNjb3BlOiBsaXRlcmFsX3R5cGVzXzEuQmluZGluZ1Njb3BlRW51bS5UcmFuc2llbnRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ndWlkID0gZ3VpZF8xLmd1aWQoKTtcbiAgICAgICAgdGhpcy5fYmluZGluZ0RpY3Rpb25hcnkgPSBuZXcgbG9va3VwXzEuTG9va3VwKCk7XG4gICAgICAgIHRoaXMuX3NuYXBzaG90cyA9IFtdO1xuICAgICAgICB0aGlzLl9taWRkbGV3YXJlID0gbnVsbDtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBudWxsO1xuICAgICAgICB0aGlzLl9tZXRhZGF0YVJlYWRlciA9IG5ldyBtZXRhZGF0YV9yZWFkZXJfMS5NZXRhZGF0YVJlYWRlcigpO1xuICAgIH1cbiAgICBDb250YWluZXIubWVyZ2UgPSBmdW5jdGlvbiAoY29udGFpbmVyMSwgY29udGFpbmVyMikge1xuICAgICAgICB2YXIgY29udGFpbmVyID0gbmV3IENvbnRhaW5lcigpO1xuICAgICAgICB2YXIgYmluZGluZ0RpY3Rpb25hcnkgPSBwbGFubmVyXzEuZ2V0QmluZGluZ0RpY3Rpb25hcnkoY29udGFpbmVyKTtcbiAgICAgICAgdmFyIGJpbmRpbmdEaWN0aW9uYXJ5MSA9IHBsYW5uZXJfMS5nZXRCaW5kaW5nRGljdGlvbmFyeShjb250YWluZXIxKTtcbiAgICAgICAgdmFyIGJpbmRpbmdEaWN0aW9uYXJ5MiA9IHBsYW5uZXJfMS5nZXRCaW5kaW5nRGljdGlvbmFyeShjb250YWluZXIyKTtcbiAgICAgICAgZnVuY3Rpb24gY29weURpY3Rpb25hcnkob3JpZ2luLCBkZXN0aW5hdGlvbikge1xuICAgICAgICAgICAgb3JpZ2luLnRyYXZlcnNlKGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUuZm9yRWFjaChmdW5jdGlvbiAoYmluZGluZykge1xuICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbi5hZGQoYmluZGluZy5zZXJ2aWNlSWRlbnRpZmllciwgYmluZGluZy5jbG9uZSgpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvcHlEaWN0aW9uYXJ5KGJpbmRpbmdEaWN0aW9uYXJ5MSwgYmluZGluZ0RpY3Rpb25hcnkpO1xuICAgICAgICBjb3B5RGljdGlvbmFyeShiaW5kaW5nRGljdGlvbmFyeTIsIGJpbmRpbmdEaWN0aW9uYXJ5KTtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9O1xuICAgIENvbnRhaW5lci5wcm90b3R5cGUubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIG1vZHVsZXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIG1vZHVsZXNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgc2V0TW9kdWxlSWQgPSBmdW5jdGlvbiAoYmluZGluZ1RvU3ludGF4LCBtb2R1bGVJZCkge1xuICAgICAgICAgICAgYmluZGluZ1RvU3ludGF4Ll9iaW5kaW5nLm1vZHVsZUlkID0gbW9kdWxlSWQ7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBnZXRCaW5kRnVuY3Rpb24gPSBmdW5jdGlvbiAobW9kdWxlSWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAoc2VydmljZUlkZW50aWZpZXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgYmluZGluZ1RvU3ludGF4ID0gX3RoaXMuYmluZC5jYWxsKF90aGlzLCBzZXJ2aWNlSWRlbnRpZmllcik7XG4gICAgICAgICAgICAgICAgc2V0TW9kdWxlSWQoYmluZGluZ1RvU3ludGF4LCBtb2R1bGVJZCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJpbmRpbmdUb1N5bnRheDtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIHZhciBnZXRVbmJpbmRGdW5jdGlvbiA9IGZ1bmN0aW9uIChtb2R1bGVJZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChzZXJ2aWNlSWRlbnRpZmllcikge1xuICAgICAgICAgICAgICAgIHZhciBfdW5iaW5kID0gX3RoaXMudW5iaW5kLmJpbmQoX3RoaXMpO1xuICAgICAgICAgICAgICAgIF91bmJpbmQoc2VydmljZUlkZW50aWZpZXIpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIGdldElzYm91bmRGdW5jdGlvbiA9IGZ1bmN0aW9uIChtb2R1bGVJZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChzZXJ2aWNlSWRlbnRpZmllcikge1xuICAgICAgICAgICAgICAgIHZhciBfaXNCb3VuZCA9IF90aGlzLmlzQm91bmQuYmluZChfdGhpcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9pc0JvdW5kKHNlcnZpY2VJZGVudGlmaWVyKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICAgIHZhciBnZXRSZWJpbmRGdW5jdGlvbiA9IGZ1bmN0aW9uIChtb2R1bGVJZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChzZXJ2aWNlSWRlbnRpZmllcikge1xuICAgICAgICAgICAgICAgIHZhciBiaW5kaW5nVG9TeW50YXggPSBfdGhpcy5yZWJpbmQuY2FsbChfdGhpcywgc2VydmljZUlkZW50aWZpZXIpO1xuICAgICAgICAgICAgICAgIHNldE1vZHVsZUlkKGJpbmRpbmdUb1N5bnRheCwgbW9kdWxlSWQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBiaW5kaW5nVG9TeW50YXg7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICBtb2R1bGVzLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZSkge1xuICAgICAgICAgICAgdmFyIGJpbmRGdW5jdGlvbiA9IGdldEJpbmRGdW5jdGlvbihtb2R1bGUuZ3VpZCk7XG4gICAgICAgICAgICB2YXIgdW5iaW5kRnVuY3Rpb24gPSBnZXRVbmJpbmRGdW5jdGlvbihtb2R1bGUuZ3VpZCk7XG4gICAgICAgICAgICB2YXIgaXNib3VuZEZ1bmN0aW9uID0gZ2V0SXNib3VuZEZ1bmN0aW9uKG1vZHVsZS5ndWlkKTtcbiAgICAgICAgICAgIHZhciByZWJpbmRGdW5jdGlvbiA9IGdldFJlYmluZEZ1bmN0aW9uKG1vZHVsZS5ndWlkKTtcbiAgICAgICAgICAgIG1vZHVsZS5yZWdpc3RyeShiaW5kRnVuY3Rpb24sIHVuYmluZEZ1bmN0aW9uLCBpc2JvdW5kRnVuY3Rpb24sIHJlYmluZEZ1bmN0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBDb250YWluZXIucHJvdG90eXBlLnVubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIG1vZHVsZXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIG1vZHVsZXNbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY29uZGl0aW9uRmFjdG9yeSA9IGZ1bmN0aW9uIChleHBlY3RlZCkgeyByZXR1cm4gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLm1vZHVsZUlkID09PSBleHBlY3RlZDtcbiAgICAgICAgfTsgfTtcbiAgICAgICAgbW9kdWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChtb2R1bGUpIHtcbiAgICAgICAgICAgIHZhciBjb25kaXRpb24gPSBjb25kaXRpb25GYWN0b3J5KG1vZHVsZS5ndWlkKTtcbiAgICAgICAgICAgIF90aGlzLl9iaW5kaW5nRGljdGlvbmFyeS5yZW1vdmVCeUNvbmRpdGlvbihjb25kaXRpb24pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIENvbnRhaW5lci5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uIChzZXJ2aWNlSWRlbnRpZmllcikge1xuICAgICAgICB2YXIgc2NvcGUgPSB0aGlzLm9wdGlvbnMuZGVmYXVsdFNjb3BlIHx8IGxpdGVyYWxfdHlwZXNfMS5CaW5kaW5nU2NvcGVFbnVtLlRyYW5zaWVudDtcbiAgICAgICAgdmFyIGJpbmRpbmcgPSBuZXcgYmluZGluZ18xLkJpbmRpbmcoc2VydmljZUlkZW50aWZpZXIsIHNjb3BlKTtcbiAgICAgICAgdGhpcy5fYmluZGluZ0RpY3Rpb25hcnkuYWRkKHNlcnZpY2VJZGVudGlmaWVyLCBiaW5kaW5nKTtcbiAgICAgICAgcmV0dXJuIG5ldyBiaW5kaW5nX3RvX3N5bnRheF8xLkJpbmRpbmdUb1N5bnRheChiaW5kaW5nKTtcbiAgICB9O1xuICAgIENvbnRhaW5lci5wcm90b3R5cGUucmViaW5kID0gZnVuY3Rpb24gKHNlcnZpY2VJZGVudGlmaWVyKSB7XG4gICAgICAgIHRoaXMudW5iaW5kKHNlcnZpY2VJZGVudGlmaWVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmluZChzZXJ2aWNlSWRlbnRpZmllcik7XG4gICAgfTtcbiAgICBDb250YWluZXIucHJvdG90eXBlLnVuYmluZCA9IGZ1bmN0aW9uIChzZXJ2aWNlSWRlbnRpZmllcikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5fYmluZGluZ0RpY3Rpb25hcnkucmVtb3ZlKHNlcnZpY2VJZGVudGlmaWVyKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKEVSUk9SX01TR1MuQ0FOTk9UX1VOQklORCArIFwiIFwiICsgc2VyaWFsaXphdGlvbl8xLmdldFNlcnZpY2VJZGVudGlmaWVyQXNTdHJpbmcoc2VydmljZUlkZW50aWZpZXIpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQ29udGFpbmVyLnByb3RvdHlwZS51bmJpbmRBbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX2JpbmRpbmdEaWN0aW9uYXJ5ID0gbmV3IGxvb2t1cF8xLkxvb2t1cCgpO1xuICAgIH07XG4gICAgQ29udGFpbmVyLnByb3RvdHlwZS5pc0JvdW5kID0gZnVuY3Rpb24gKHNlcnZpY2VJZGVudGlmaWVyKSB7XG4gICAgICAgIHZhciBib3VuZCA9IHRoaXMuX2JpbmRpbmdEaWN0aW9uYXJ5Lmhhc0tleShzZXJ2aWNlSWRlbnRpZmllcik7XG4gICAgICAgIGlmICghYm91bmQgJiYgdGhpcy5wYXJlbnQpIHtcbiAgICAgICAgICAgIGJvdW5kID0gdGhpcy5wYXJlbnQuaXNCb3VuZChzZXJ2aWNlSWRlbnRpZmllcik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJvdW5kO1xuICAgIH07XG4gICAgQ29udGFpbmVyLnByb3RvdHlwZS5pc0JvdW5kTmFtZWQgPSBmdW5jdGlvbiAoc2VydmljZUlkZW50aWZpZXIsIG5hbWVkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzQm91bmRUYWdnZWQoc2VydmljZUlkZW50aWZpZXIsIE1FVEFEQVRBX0tFWS5OQU1FRF9UQUcsIG5hbWVkKTtcbiAgICB9O1xuICAgIENvbnRhaW5lci5wcm90b3R5cGUuaXNCb3VuZFRhZ2dlZCA9IGZ1bmN0aW9uIChzZXJ2aWNlSWRlbnRpZmllciwga2V5LCB2YWx1ZSkge1xuICAgICAgICB2YXIgYm91bmQgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuX2JpbmRpbmdEaWN0aW9uYXJ5Lmhhc0tleShzZXJ2aWNlSWRlbnRpZmllcikpIHtcbiAgICAgICAgICAgIHZhciBiaW5kaW5ncyA9IHRoaXMuX2JpbmRpbmdEaWN0aW9uYXJ5LmdldChzZXJ2aWNlSWRlbnRpZmllcik7XG4gICAgICAgICAgICB2YXIgcmVxdWVzdF8xID0gcGxhbm5lcl8xLmNyZWF0ZU1vY2tSZXF1ZXN0KHRoaXMsIHNlcnZpY2VJZGVudGlmaWVyLCBrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIGJvdW5kID0gYmluZGluZ3Muc29tZShmdW5jdGlvbiAoYikgeyByZXR1cm4gYi5jb25zdHJhaW50KHJlcXVlc3RfMSk7IH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICghYm91bmQgJiYgdGhpcy5wYXJlbnQpIHtcbiAgICAgICAgICAgIGJvdW5kID0gdGhpcy5wYXJlbnQuaXNCb3VuZFRhZ2dlZChzZXJ2aWNlSWRlbnRpZmllciwga2V5LCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJvdW5kO1xuICAgIH07XG4gICAgQ29udGFpbmVyLnByb3RvdHlwZS5zbmFwc2hvdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fc25hcHNob3RzLnB1c2goY29udGFpbmVyX3NuYXBzaG90XzEuQ29udGFpbmVyU25hcHNob3Qub2YodGhpcy5fYmluZGluZ0RpY3Rpb25hcnkuY2xvbmUoKSwgdGhpcy5fbWlkZGxld2FyZSkpO1xuICAgIH07XG4gICAgQ29udGFpbmVyLnByb3RvdHlwZS5yZXN0b3JlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc25hcHNob3QgPSB0aGlzLl9zbmFwc2hvdHMucG9wKCk7XG4gICAgICAgIGlmIChzbmFwc2hvdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoRVJST1JfTVNHUy5OT19NT1JFX1NOQVBTSE9UU19BVkFJTEFCTEUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2JpbmRpbmdEaWN0aW9uYXJ5ID0gc25hcHNob3QuYmluZGluZ3M7XG4gICAgICAgIHRoaXMuX21pZGRsZXdhcmUgPSBzbmFwc2hvdC5taWRkbGV3YXJlO1xuICAgIH07XG4gICAgQ29udGFpbmVyLnByb3RvdHlwZS5jcmVhdGVDaGlsZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNoaWxkID0gbmV3IENvbnRhaW5lcigpO1xuICAgICAgICBjaGlsZC5wYXJlbnQgPSB0aGlzO1xuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfTtcbiAgICBDb250YWluZXIucHJvdG90eXBlLmFwcGx5TWlkZGxld2FyZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG1pZGRsZXdhcmVzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBtaWRkbGV3YXJlc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpbml0aWFsID0gKHRoaXMuX21pZGRsZXdhcmUpID8gdGhpcy5fbWlkZGxld2FyZSA6IHRoaXMuX3BsYW5BbmRSZXNvbHZlKCk7XG4gICAgICAgIHRoaXMuX21pZGRsZXdhcmUgPSBtaWRkbGV3YXJlcy5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIGN1cnIpIHtcbiAgICAgICAgICAgIHJldHVybiBjdXJyKHByZXYpO1xuICAgICAgICB9LCBpbml0aWFsKTtcbiAgICB9O1xuICAgIENvbnRhaW5lci5wcm90b3R5cGUuYXBwbHlDdXN0b21NZXRhZGF0YVJlYWRlciA9IGZ1bmN0aW9uIChtZXRhZGF0YVJlYWRlcikge1xuICAgICAgICB0aGlzLl9tZXRhZGF0YVJlYWRlciA9IG1ldGFkYXRhUmVhZGVyO1xuICAgIH07XG4gICAgQ29udGFpbmVyLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoc2VydmljZUlkZW50aWZpZXIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldChmYWxzZSwgZmFsc2UsIGxpdGVyYWxfdHlwZXNfMS5UYXJnZXRUeXBlRW51bS5WYXJpYWJsZSwgc2VydmljZUlkZW50aWZpZXIpO1xuICAgIH07XG4gICAgQ29udGFpbmVyLnByb3RvdHlwZS5nZXRUYWdnZWQgPSBmdW5jdGlvbiAoc2VydmljZUlkZW50aWZpZXIsIGtleSwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldChmYWxzZSwgZmFsc2UsIGxpdGVyYWxfdHlwZXNfMS5UYXJnZXRUeXBlRW51bS5WYXJpYWJsZSwgc2VydmljZUlkZW50aWZpZXIsIGtleSwgdmFsdWUpO1xuICAgIH07XG4gICAgQ29udGFpbmVyLnByb3RvdHlwZS5nZXROYW1lZCA9IGZ1bmN0aW9uIChzZXJ2aWNlSWRlbnRpZmllciwgbmFtZWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VGFnZ2VkKHNlcnZpY2VJZGVudGlmaWVyLCBNRVRBREFUQV9LRVkuTkFNRURfVEFHLCBuYW1lZCk7XG4gICAgfTtcbiAgICBDb250YWluZXIucHJvdG90eXBlLmdldEFsbCA9IGZ1bmN0aW9uIChzZXJ2aWNlSWRlbnRpZmllcikge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0KHRydWUsIHRydWUsIGxpdGVyYWxfdHlwZXNfMS5UYXJnZXRUeXBlRW51bS5WYXJpYWJsZSwgc2VydmljZUlkZW50aWZpZXIpO1xuICAgIH07XG4gICAgQ29udGFpbmVyLnByb3RvdHlwZS5nZXRBbGxUYWdnZWQgPSBmdW5jdGlvbiAoc2VydmljZUlkZW50aWZpZXIsIGtleSwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldChmYWxzZSwgdHJ1ZSwgbGl0ZXJhbF90eXBlc18xLlRhcmdldFR5cGVFbnVtLlZhcmlhYmxlLCBzZXJ2aWNlSWRlbnRpZmllciwga2V5LCB2YWx1ZSk7XG4gICAgfTtcbiAgICBDb250YWluZXIucHJvdG90eXBlLmdldEFsbE5hbWVkID0gZnVuY3Rpb24gKHNlcnZpY2VJZGVudGlmaWVyLCBuYW1lZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBbGxUYWdnZWQoc2VydmljZUlkZW50aWZpZXIsIE1FVEFEQVRBX0tFWS5OQU1FRF9UQUcsIG5hbWVkKTtcbiAgICB9O1xuICAgIENvbnRhaW5lci5wcm90b3R5cGUucmVzb2x2ZSA9IGZ1bmN0aW9uIChjb25zdHJ1Y3RvckZ1bmN0aW9uKSB7XG4gICAgICAgIHZhciB0ZW1wQ29udGFpbmVyID0gbmV3IENvbnRhaW5lcigpO1xuICAgICAgICB0ZW1wQ29udGFpbmVyLmJpbmQoY29uc3RydWN0b3JGdW5jdGlvbikudG9TZWxmKCk7XG4gICAgICAgIHRlbXBDb250YWluZXIucGFyZW50ID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHRlbXBDb250YWluZXIuZ2V0KGNvbnN0cnVjdG9yRnVuY3Rpb24pO1xuICAgIH07XG4gICAgQ29udGFpbmVyLnByb3RvdHlwZS5fZ2V0ID0gZnVuY3Rpb24gKGF2b2lkQ29uc3RyYWludHMsIGlzTXVsdGlJbmplY3QsIHRhcmdldFR5cGUsIHNlcnZpY2VJZGVudGlmaWVyLCBrZXksIHZhbHVlKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBudWxsO1xuICAgICAgICB2YXIgZGVmYXVsdEFyZ3MgPSB7XG4gICAgICAgICAgICBhdm9pZENvbnN0cmFpbnRzOiBhdm9pZENvbnN0cmFpbnRzLFxuICAgICAgICAgICAgY29udGV4dEludGVyY2VwdG9yOiBmdW5jdGlvbiAoY29udGV4dCkgeyByZXR1cm4gY29udGV4dDsgfSxcbiAgICAgICAgICAgIGlzTXVsdGlJbmplY3Q6IGlzTXVsdGlJbmplY3QsXG4gICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgIHNlcnZpY2VJZGVudGlmaWVyOiBzZXJ2aWNlSWRlbnRpZmllcixcbiAgICAgICAgICAgIHRhcmdldFR5cGU6IHRhcmdldFR5cGUsXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRoaXMuX21pZGRsZXdhcmUpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuX21pZGRsZXdhcmUoZGVmYXVsdEFyZ3MpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCA9PT0gdW5kZWZpbmVkIHx8IHJlc3VsdCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihFUlJPUl9NU0dTLklOVkFMSURfTUlERExFV0FSRV9SRVRVUk4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5fcGxhbkFuZFJlc29sdmUoKShkZWZhdWx0QXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIENvbnRhaW5lci5wcm90b3R5cGUuX3BsYW5BbmRSZXNvbHZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgICAgIHZhciBjb250ZXh0ID0gcGxhbm5lcl8xLnBsYW4oX3RoaXMuX21ldGFkYXRhUmVhZGVyLCBfdGhpcywgYXJncy5pc011bHRpSW5qZWN0LCBhcmdzLnRhcmdldFR5cGUsIGFyZ3Muc2VydmljZUlkZW50aWZpZXIsIGFyZ3Mua2V5LCBhcmdzLnZhbHVlLCBhcmdzLmF2b2lkQ29uc3RyYWludHMpO1xuICAgICAgICAgICAgY29udGV4dCA9IGFyZ3MuY29udGV4dEludGVyY2VwdG9yKGNvbnRleHQpO1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHJlc29sdmVyXzEucmVzb2x2ZShjb250ZXh0KTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH07XG4gICAgfTtcbiAgICByZXR1cm4gQ29udGFpbmVyO1xufSgpKTtcbmV4cG9ydHMuQ29udGFpbmVyID0gQ29udGFpbmVyO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaW52ZXJzaWZ5L2xpYi9jb250YWluZXIvY29udGFpbmVyLmpzXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBndWlkXzEgPSByZXF1aXJlKFwiLi4vdXRpbHMvZ3VpZFwiKTtcbnZhciBsaXRlcmFsX3R5cGVzXzEgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzL2xpdGVyYWxfdHlwZXNcIik7XG52YXIgQmluZGluZyA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQmluZGluZyhzZXJ2aWNlSWRlbnRpZmllciwgc2NvcGUpIHtcbiAgICAgICAgdGhpcy5ndWlkID0gZ3VpZF8xLmd1aWQoKTtcbiAgICAgICAgdGhpcy5hY3RpdmF0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zZXJ2aWNlSWRlbnRpZmllciA9IHNlcnZpY2VJZGVudGlmaWVyO1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMudHlwZSA9IGxpdGVyYWxfdHlwZXNfMS5CaW5kaW5nVHlwZUVudW0uSW52YWxpZDtcbiAgICAgICAgdGhpcy5jb25zdHJhaW50ID0gZnVuY3Rpb24gKHJlcXVlc3QpIHsgcmV0dXJuIHRydWU7IH07XG4gICAgICAgIHRoaXMuaW1wbGVtZW50YXRpb25UeXBlID0gbnVsbDtcbiAgICAgICAgdGhpcy5jYWNoZSA9IG51bGw7XG4gICAgICAgIHRoaXMuZmFjdG9yeSA9IG51bGw7XG4gICAgICAgIHRoaXMucHJvdmlkZXIgPSBudWxsO1xuICAgICAgICB0aGlzLm9uQWN0aXZhdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMuZHluYW1pY1ZhbHVlID0gbnVsbDtcbiAgICB9XG4gICAgQmluZGluZy5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjbG9uZSA9IG5ldyBCaW5kaW5nKHRoaXMuc2VydmljZUlkZW50aWZpZXIsIHRoaXMuc2NvcGUpO1xuICAgICAgICBjbG9uZS5hY3RpdmF0ZWQgPSBmYWxzZTtcbiAgICAgICAgY2xvbmUuaW1wbGVtZW50YXRpb25UeXBlID0gdGhpcy5pbXBsZW1lbnRhdGlvblR5cGU7XG4gICAgICAgIGNsb25lLmR5bmFtaWNWYWx1ZSA9IHRoaXMuZHluYW1pY1ZhbHVlO1xuICAgICAgICBjbG9uZS5zY29wZSA9IHRoaXMuc2NvcGU7XG4gICAgICAgIGNsb25lLnR5cGUgPSB0aGlzLnR5cGU7XG4gICAgICAgIGNsb25lLmZhY3RvcnkgPSB0aGlzLmZhY3Rvcnk7XG4gICAgICAgIGNsb25lLnByb3ZpZGVyID0gdGhpcy5wcm92aWRlcjtcbiAgICAgICAgY2xvbmUuY29uc3RyYWludCA9IHRoaXMuY29uc3RyYWludDtcbiAgICAgICAgY2xvbmUub25BY3RpdmF0aW9uID0gdGhpcy5vbkFjdGl2YXRpb247XG4gICAgICAgIGNsb25lLmNhY2hlID0gdGhpcy5jYWNoZTtcbiAgICAgICAgcmV0dXJuIGNsb25lO1xuICAgIH07XG4gICAgcmV0dXJuIEJpbmRpbmc7XG59KCkpO1xuZXhwb3J0cy5CaW5kaW5nID0gQmluZGluZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2ludmVyc2lmeS9saWIvYmluZGluZ3MvYmluZGluZy5qc1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgRVJST1JfTVNHUyA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHMvZXJyb3JfbXNnc1wiKTtcbnZhciBMb29rdXAgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIExvb2t1cCgpIHtcbiAgICAgICAgdGhpcy5fbWFwID0gbmV3IE1hcCgpO1xuICAgIH1cbiAgICBMb29rdXAucHJvdG90eXBlLmdldE1hcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcDtcbiAgICB9O1xuICAgIExvb2t1cC5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24gKHNlcnZpY2VJZGVudGlmaWVyLCB2YWx1ZSkge1xuICAgICAgICBpZiAoc2VydmljZUlkZW50aWZpZXIgPT09IG51bGwgfHwgc2VydmljZUlkZW50aWZpZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKEVSUk9SX01TR1MuTlVMTF9BUkdVTUVOVCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihFUlJPUl9NU0dTLk5VTExfQVJHVU1FTlQpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMuX21hcC5nZXQoc2VydmljZUlkZW50aWZpZXIpO1xuICAgICAgICBpZiAoZW50cnkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZW50cnkucHVzaCh2YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLl9tYXAuc2V0KHNlcnZpY2VJZGVudGlmaWVyLCBlbnRyeSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9tYXAuc2V0KHNlcnZpY2VJZGVudGlmaWVyLCBbdmFsdWVdKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTG9va3VwLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoc2VydmljZUlkZW50aWZpZXIpIHtcbiAgICAgICAgaWYgKHNlcnZpY2VJZGVudGlmaWVyID09PSBudWxsIHx8IHNlcnZpY2VJZGVudGlmaWVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihFUlJPUl9NU0dTLk5VTExfQVJHVU1FTlQpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMuX21hcC5nZXQoc2VydmljZUlkZW50aWZpZXIpO1xuICAgICAgICBpZiAoZW50cnkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGVudHJ5O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKEVSUk9SX01TR1MuS0VZX05PVF9GT1VORCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIExvb2t1cC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKHNlcnZpY2VJZGVudGlmaWVyKSB7XG4gICAgICAgIGlmIChzZXJ2aWNlSWRlbnRpZmllciA9PT0gbnVsbCB8fCBzZXJ2aWNlSWRlbnRpZmllciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoRVJST1JfTVNHUy5OVUxMX0FSR1VNRU5UKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuX21hcC5kZWxldGUoc2VydmljZUlkZW50aWZpZXIpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoRVJST1JfTVNHUy5LRVlfTk9UX0ZPVU5EKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgTG9va3VwLnByb3RvdHlwZS5yZW1vdmVCeUNvbmRpdGlvbiA9IGZ1bmN0aW9uIChjb25kaXRpb24pIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5fbWFwLmZvckVhY2goZnVuY3Rpb24gKGVudHJpZXMsIGtleSkge1xuICAgICAgICAgICAgdmFyIHVwZGF0ZWRFbnRyaWVzID0gZW50cmllcy5maWx0ZXIoZnVuY3Rpb24gKGVudHJ5KSB7IHJldHVybiAhY29uZGl0aW9uKGVudHJ5KTsgfSk7XG4gICAgICAgICAgICBpZiAodXBkYXRlZEVudHJpZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIF90aGlzLl9tYXAuc2V0KGtleSwgdXBkYXRlZEVudHJpZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuX21hcC5kZWxldGUoa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBMb29rdXAucHJvdG90eXBlLmhhc0tleSA9IGZ1bmN0aW9uIChzZXJ2aWNlSWRlbnRpZmllcikge1xuICAgICAgICBpZiAoc2VydmljZUlkZW50aWZpZXIgPT09IG51bGwgfHwgc2VydmljZUlkZW50aWZpZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKEVSUk9SX01TR1MuTlVMTF9BUkdVTUVOVCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX21hcC5oYXMoc2VydmljZUlkZW50aWZpZXIpO1xuICAgIH07XG4gICAgTG9va3VwLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNvcHkgPSBuZXcgTG9va3VwKCk7XG4gICAgICAgIHRoaXMuX21hcC5mb3JFYWNoKGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICB2YWx1ZS5mb3JFYWNoKGZ1bmN0aW9uIChiKSB7IHJldHVybiBjb3B5LmFkZChrZXksIGIuY2xvbmUoKSk7IH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNvcHk7XG4gICAgfTtcbiAgICBMb29rdXAucHJvdG90eXBlLnRyYXZlcnNlID0gZnVuY3Rpb24gKGZ1bmMpIHtcbiAgICAgICAgdGhpcy5fbWFwLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgIGZ1bmMoa2V5LCB2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIExvb2t1cDtcbn0oKSk7XG5leHBvcnRzLkxvb2t1cCA9IExvb2t1cDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2ludmVyc2lmeS9saWIvY29udGFpbmVyL2xvb2t1cC5qc1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgcGxhbl8xID0gcmVxdWlyZShcIi4vcGxhblwiKTtcbnZhciBjb250ZXh0XzEgPSByZXF1aXJlKFwiLi9jb250ZXh0XCIpO1xudmFyIHJlcXVlc3RfMSA9IHJlcXVpcmUoXCIuL3JlcXVlc3RcIik7XG52YXIgdGFyZ2V0XzEgPSByZXF1aXJlKFwiLi90YXJnZXRcIik7XG52YXIgYmluZGluZ19jb3VudF8xID0gcmVxdWlyZShcIi4uL2JpbmRpbmdzL2JpbmRpbmdfY291bnRcIik7XG52YXIgcmVmbGVjdGlvbl91dGlsc18xID0gcmVxdWlyZShcIi4vcmVmbGVjdGlvbl91dGlsc1wiKTtcbnZhciBtZXRhZGF0YV8xID0gcmVxdWlyZShcIi4vbWV0YWRhdGFcIik7XG52YXIgRVJST1JfTVNHUyA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHMvZXJyb3JfbXNnc1wiKTtcbnZhciBNRVRBREFUQV9LRVkgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzL21ldGFkYXRhX2tleXNcIik7XG52YXIgZXhjZXB0aW9uc18xID0gcmVxdWlyZShcIi4uL3V0aWxzL2V4Y2VwdGlvbnNcIik7XG52YXIgbGl0ZXJhbF90eXBlc18xID0gcmVxdWlyZShcIi4uL2NvbnN0YW50cy9saXRlcmFsX3R5cGVzXCIpO1xudmFyIHNlcmlhbGl6YXRpb25fMSA9IHJlcXVpcmUoXCIuLi91dGlscy9zZXJpYWxpemF0aW9uXCIpO1xuZnVuY3Rpb24gZ2V0QmluZGluZ0RpY3Rpb25hcnkoY250bnIpIHtcbiAgICByZXR1cm4gY250bnIuX2JpbmRpbmdEaWN0aW9uYXJ5O1xufVxuZXhwb3J0cy5nZXRCaW5kaW5nRGljdGlvbmFyeSA9IGdldEJpbmRpbmdEaWN0aW9uYXJ5O1xuZnVuY3Rpb24gX2NyZWF0ZVRhcmdldChpc011bHRpSW5qZWN0LCB0YXJnZXRUeXBlLCBzZXJ2aWNlSWRlbnRpZmllciwgbmFtZSwga2V5LCB2YWx1ZSkge1xuICAgIHZhciBtZXRhZGF0YUtleSA9IGlzTXVsdGlJbmplY3QgPyBNRVRBREFUQV9LRVkuTVVMVElfSU5KRUNUX1RBRyA6IE1FVEFEQVRBX0tFWS5JTkpFQ1RfVEFHO1xuICAgIHZhciBpbmplY3RNZXRhZGF0YSA9IG5ldyBtZXRhZGF0YV8xLk1ldGFkYXRhKG1ldGFkYXRhS2V5LCBzZXJ2aWNlSWRlbnRpZmllcik7XG4gICAgdmFyIHRhcmdldCA9IG5ldyB0YXJnZXRfMS5UYXJnZXQodGFyZ2V0VHlwZSwgbmFtZSwgc2VydmljZUlkZW50aWZpZXIsIGluamVjdE1ldGFkYXRhKTtcbiAgICBpZiAoa2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFyIHRhZ01ldGFkYXRhID0gbmV3IG1ldGFkYXRhXzEuTWV0YWRhdGEoa2V5LCB2YWx1ZSk7XG4gICAgICAgIHRhcmdldC5tZXRhZGF0YS5wdXNoKHRhZ01ldGFkYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmZ1bmN0aW9uIF9nZXRBY3RpdmVCaW5kaW5ncyhtZXRhZGF0YVJlYWRlciwgYXZvaWRDb25zdHJhaW50cywgY29udGV4dCwgcGFyZW50UmVxdWVzdCwgdGFyZ2V0KSB7XG4gICAgdmFyIGJpbmRpbmdzID0gZ2V0QmluZGluZ3MoY29udGV4dC5jb250YWluZXIsIHRhcmdldC5zZXJ2aWNlSWRlbnRpZmllcik7XG4gICAgdmFyIGFjdGl2ZUJpbmRpbmdzID0gW107XG4gICAgaWYgKGJpbmRpbmdzLmxlbmd0aCA9PT0gYmluZGluZ19jb3VudF8xLkJpbmRpbmdDb3VudC5Ob0JpbmRpbmdzQXZhaWxhYmxlICYmXG4gICAgICAgIGNvbnRleHQuY29udGFpbmVyLm9wdGlvbnMuYXV0b0JpbmRJbmplY3RhYmxlICYmXG4gICAgICAgIHR5cGVvZiB0YXJnZXQuc2VydmljZUlkZW50aWZpZXIgPT09IFwiZnVuY3Rpb25cIiAmJlxuICAgICAgICBtZXRhZGF0YVJlYWRlci5nZXRDb25zdHJ1Y3Rvck1ldGFkYXRhKHRhcmdldC5zZXJ2aWNlSWRlbnRpZmllcikuY29tcGlsZXJHZW5lcmF0ZWRNZXRhZGF0YSkge1xuICAgICAgICBjb250ZXh0LmNvbnRhaW5lci5iaW5kKHRhcmdldC5zZXJ2aWNlSWRlbnRpZmllcikudG9TZWxmKCk7XG4gICAgICAgIGJpbmRpbmdzID0gZ2V0QmluZGluZ3MoY29udGV4dC5jb250YWluZXIsIHRhcmdldC5zZXJ2aWNlSWRlbnRpZmllcik7XG4gICAgfVxuICAgIGlmIChhdm9pZENvbnN0cmFpbnRzID09PSBmYWxzZSkge1xuICAgICAgICBhY3RpdmVCaW5kaW5ncyA9IGJpbmRpbmdzLmZpbHRlcihmdW5jdGlvbiAoYmluZGluZykge1xuICAgICAgICAgICAgdmFyIHJlcXVlc3QgPSBuZXcgcmVxdWVzdF8xLlJlcXVlc3QoYmluZGluZy5zZXJ2aWNlSWRlbnRpZmllciwgY29udGV4dCwgcGFyZW50UmVxdWVzdCwgYmluZGluZywgdGFyZ2V0KTtcbiAgICAgICAgICAgIHJldHVybiBiaW5kaW5nLmNvbnN0cmFpbnQocmVxdWVzdCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgYWN0aXZlQmluZGluZ3MgPSBiaW5kaW5ncztcbiAgICB9XG4gICAgX3ZhbGlkYXRlQWN0aXZlQmluZGluZ0NvdW50KHRhcmdldC5zZXJ2aWNlSWRlbnRpZmllciwgYWN0aXZlQmluZGluZ3MsIHRhcmdldCwgY29udGV4dC5jb250YWluZXIpO1xuICAgIHJldHVybiBhY3RpdmVCaW5kaW5ncztcbn1cbmZ1bmN0aW9uIF92YWxpZGF0ZUFjdGl2ZUJpbmRpbmdDb3VudChzZXJ2aWNlSWRlbnRpZmllciwgYmluZGluZ3MsIHRhcmdldCwgY29udGFpbmVyKSB7XG4gICAgc3dpdGNoIChiaW5kaW5ncy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSBiaW5kaW5nX2NvdW50XzEuQmluZGluZ0NvdW50Lk5vQmluZGluZ3NBdmFpbGFibGU6XG4gICAgICAgICAgICBpZiAodGFyZ2V0LmlzT3B0aW9uYWwoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBiaW5kaW5ncztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBzZXJ2aWNlSWRlbnRpZmllclN0cmluZyA9IHNlcmlhbGl6YXRpb25fMS5nZXRTZXJ2aWNlSWRlbnRpZmllckFzU3RyaW5nKHNlcnZpY2VJZGVudGlmaWVyKTtcbiAgICAgICAgICAgICAgICB2YXIgbXNnID0gRVJST1JfTVNHUy5OT1RfUkVHSVNURVJFRDtcbiAgICAgICAgICAgICAgICBtc2cgKz0gc2VyaWFsaXphdGlvbl8xLmxpc3RNZXRhZGF0YUZvclRhcmdldChzZXJ2aWNlSWRlbnRpZmllclN0cmluZywgdGFyZ2V0KTtcbiAgICAgICAgICAgICAgICBtc2cgKz0gc2VyaWFsaXphdGlvbl8xLmxpc3RSZWdpc3RlcmVkQmluZGluZ3NGb3JTZXJ2aWNlSWRlbnRpZmllcihjb250YWluZXIsIHNlcnZpY2VJZGVudGlmaWVyU3RyaW5nLCBnZXRCaW5kaW5ncyk7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgYmluZGluZ19jb3VudF8xLkJpbmRpbmdDb3VudC5Pbmx5T25lQmluZGluZ0F2YWlsYWJsZTpcbiAgICAgICAgICAgIGlmICh0YXJnZXQuaXNBcnJheSgpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBiaW5kaW5ncztcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBiaW5kaW5nX2NvdW50XzEuQmluZGluZ0NvdW50Lk11bHRpcGxlQmluZGluZ3NBdmFpbGFibGU6XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBpZiAodGFyZ2V0LmlzQXJyYXkoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VydmljZUlkZW50aWZpZXJTdHJpbmcgPSBzZXJpYWxpemF0aW9uXzEuZ2V0U2VydmljZUlkZW50aWZpZXJBc1N0cmluZyhzZXJ2aWNlSWRlbnRpZmllciksIG1zZyA9IEVSUk9SX01TR1MuQU1CSUdVT1VTX01BVENIICsgXCIgXCIgKyBzZXJ2aWNlSWRlbnRpZmllclN0cmluZztcbiAgICAgICAgICAgICAgICBtc2cgKz0gc2VyaWFsaXphdGlvbl8xLmxpc3RSZWdpc3RlcmVkQmluZGluZ3NGb3JTZXJ2aWNlSWRlbnRpZmllcihjb250YWluZXIsIHNlcnZpY2VJZGVudGlmaWVyU3RyaW5nLCBnZXRCaW5kaW5ncyk7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYmluZGluZ3M7XG4gICAgICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gX2NyZWF0ZVN1YlJlcXVlc3RzKG1ldGFkYXRhUmVhZGVyLCBhdm9pZENvbnN0cmFpbnRzLCBzZXJ2aWNlSWRlbnRpZmllciwgY29udGV4dCwgcGFyZW50UmVxdWVzdCwgdGFyZ2V0KSB7XG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIGFjdGl2ZUJpbmRpbmdzID0gdm9pZCAwO1xuICAgICAgICB2YXIgY2hpbGRSZXF1ZXN0XzE7XG4gICAgICAgIGlmIChwYXJlbnRSZXF1ZXN0ID09PSBudWxsKSB7XG4gICAgICAgICAgICBhY3RpdmVCaW5kaW5ncyA9IF9nZXRBY3RpdmVCaW5kaW5ncyhtZXRhZGF0YVJlYWRlciwgYXZvaWRDb25zdHJhaW50cywgY29udGV4dCwgbnVsbCwgdGFyZ2V0KTtcbiAgICAgICAgICAgIGNoaWxkUmVxdWVzdF8xID0gbmV3IHJlcXVlc3RfMS5SZXF1ZXN0KHNlcnZpY2VJZGVudGlmaWVyLCBjb250ZXh0LCBudWxsLCBhY3RpdmVCaW5kaW5ncywgdGFyZ2V0KTtcbiAgICAgICAgICAgIHZhciB0aGVQbGFuID0gbmV3IHBsYW5fMS5QbGFuKGNvbnRleHQsIGNoaWxkUmVxdWVzdF8xKTtcbiAgICAgICAgICAgIGNvbnRleHQuYWRkUGxhbih0aGVQbGFuKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGFjdGl2ZUJpbmRpbmdzID0gX2dldEFjdGl2ZUJpbmRpbmdzKG1ldGFkYXRhUmVhZGVyLCBhdm9pZENvbnN0cmFpbnRzLCBjb250ZXh0LCBwYXJlbnRSZXF1ZXN0LCB0YXJnZXQpO1xuICAgICAgICAgICAgY2hpbGRSZXF1ZXN0XzEgPSBwYXJlbnRSZXF1ZXN0LmFkZENoaWxkUmVxdWVzdCh0YXJnZXQuc2VydmljZUlkZW50aWZpZXIsIGFjdGl2ZUJpbmRpbmdzLCB0YXJnZXQpO1xuICAgICAgICB9XG4gICAgICAgIGFjdGl2ZUJpbmRpbmdzLmZvckVhY2goZnVuY3Rpb24gKGJpbmRpbmcpIHtcbiAgICAgICAgICAgIHZhciBzdWJDaGlsZFJlcXVlc3QgPSBudWxsO1xuICAgICAgICAgICAgaWYgKHRhcmdldC5pc0FycmF5KCkpIHtcbiAgICAgICAgICAgICAgICBzdWJDaGlsZFJlcXVlc3QgPSBjaGlsZFJlcXVlc3RfMS5hZGRDaGlsZFJlcXVlc3QoYmluZGluZy5zZXJ2aWNlSWRlbnRpZmllciwgYmluZGluZywgdGFyZ2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChiaW5kaW5nLmNhY2hlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3ViQ2hpbGRSZXF1ZXN0ID0gY2hpbGRSZXF1ZXN0XzE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYmluZGluZy50eXBlID09PSBsaXRlcmFsX3R5cGVzXzEuQmluZGluZ1R5cGVFbnVtLkluc3RhbmNlICYmIGJpbmRpbmcuaW1wbGVtZW50YXRpb25UeXBlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRlcGVuZGVuY2llcyA9IHJlZmxlY3Rpb25fdXRpbHNfMS5nZXREZXBlbmRlbmNpZXMobWV0YWRhdGFSZWFkZXIsIGJpbmRpbmcuaW1wbGVtZW50YXRpb25UeXBlKTtcbiAgICAgICAgICAgICAgICBkZXBlbmRlbmNpZXMuZm9yRWFjaChmdW5jdGlvbiAoZGVwZW5kZW5jeSkge1xuICAgICAgICAgICAgICAgICAgICBfY3JlYXRlU3ViUmVxdWVzdHMobWV0YWRhdGFSZWFkZXIsIGZhbHNlLCBkZXBlbmRlbmN5LnNlcnZpY2VJZGVudGlmaWVyLCBjb250ZXh0LCBzdWJDaGlsZFJlcXVlc3QsIGRlcGVuZGVuY3kpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGlmIChleGNlcHRpb25zXzEuaXNTdGFja092ZXJmbG93RXhlcHRpb24oZXJyb3IpICYmXG4gICAgICAgICAgICBwYXJlbnRSZXF1ZXN0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBzZXJpYWxpemF0aW9uXzEuY2lyY3VsYXJEZXBlbmRlbmN5VG9FeGNlcHRpb24ocGFyZW50UmVxdWVzdC5wYXJlbnRDb250ZXh0LnBsYW4ucm9vdFJlcXVlc3QpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gZ2V0QmluZGluZ3MoY29udGFpbmVyLCBzZXJ2aWNlSWRlbnRpZmllcikge1xuICAgIHZhciBiaW5kaW5ncyA9IFtdO1xuICAgIHZhciBiaW5kaW5nRGljdGlvbmFyeSA9IGdldEJpbmRpbmdEaWN0aW9uYXJ5KGNvbnRhaW5lcik7XG4gICAgaWYgKGJpbmRpbmdEaWN0aW9uYXJ5Lmhhc0tleShzZXJ2aWNlSWRlbnRpZmllcikpIHtcbiAgICAgICAgYmluZGluZ3MgPSBiaW5kaW5nRGljdGlvbmFyeS5nZXQoc2VydmljZUlkZW50aWZpZXIpO1xuICAgIH1cbiAgICBlbHNlIGlmIChjb250YWluZXIucGFyZW50ICE9PSBudWxsKSB7XG4gICAgICAgIGJpbmRpbmdzID0gZ2V0QmluZGluZ3MoY29udGFpbmVyLnBhcmVudCwgc2VydmljZUlkZW50aWZpZXIpO1xuICAgIH1cbiAgICByZXR1cm4gYmluZGluZ3M7XG59XG5mdW5jdGlvbiBwbGFuKG1ldGFkYXRhUmVhZGVyLCBjb250YWluZXIsIGlzTXVsdGlJbmplY3QsIHRhcmdldFR5cGUsIHNlcnZpY2VJZGVudGlmaWVyLCBrZXksIHZhbHVlLCBhdm9pZENvbnN0cmFpbnRzKSB7XG4gICAgaWYgKGF2b2lkQ29uc3RyYWludHMgPT09IHZvaWQgMCkgeyBhdm9pZENvbnN0cmFpbnRzID0gZmFsc2U7IH1cbiAgICB2YXIgY29udGV4dCA9IG5ldyBjb250ZXh0XzEuQ29udGV4dChjb250YWluZXIpO1xuICAgIHZhciB0YXJnZXQgPSBfY3JlYXRlVGFyZ2V0KGlzTXVsdGlJbmplY3QsIHRhcmdldFR5cGUsIHNlcnZpY2VJZGVudGlmaWVyLCBcIlwiLCBrZXksIHZhbHVlKTtcbiAgICBfY3JlYXRlU3ViUmVxdWVzdHMobWV0YWRhdGFSZWFkZXIsIGF2b2lkQ29uc3RyYWludHMsIHNlcnZpY2VJZGVudGlmaWVyLCBjb250ZXh0LCBudWxsLCB0YXJnZXQpO1xuICAgIHJldHVybiBjb250ZXh0O1xufVxuZXhwb3J0cy5wbGFuID0gcGxhbjtcbmZ1bmN0aW9uIGNyZWF0ZU1vY2tSZXF1ZXN0KGNvbnRhaW5lciwgc2VydmljZUlkZW50aWZpZXIsIGtleSwgdmFsdWUpIHtcbiAgICB2YXIgdGFyZ2V0ID0gbmV3IHRhcmdldF8xLlRhcmdldChsaXRlcmFsX3R5cGVzXzEuVGFyZ2V0VHlwZUVudW0uVmFyaWFibGUsIFwiXCIsIHNlcnZpY2VJZGVudGlmaWVyLCBuZXcgbWV0YWRhdGFfMS5NZXRhZGF0YShrZXksIHZhbHVlKSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgY29udGV4dF8xLkNvbnRleHQoY29udGFpbmVyKTtcbiAgICB2YXIgcmVxdWVzdCA9IG5ldyByZXF1ZXN0XzEuUmVxdWVzdChzZXJ2aWNlSWRlbnRpZmllciwgY29udGV4dCwgbnVsbCwgW10sIHRhcmdldCk7XG4gICAgcmV0dXJuIHJlcXVlc3Q7XG59XG5leHBvcnRzLmNyZWF0ZU1vY2tSZXF1ZXN0ID0gY3JlYXRlTW9ja1JlcXVlc3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9pbnZlcnNpZnkvbGliL3BsYW5uaW5nL3BsYW5uZXIuanNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIFBsYW4gPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFBsYW4ocGFyZW50Q29udGV4dCwgcm9vdFJlcXVlc3QpIHtcbiAgICAgICAgdGhpcy5wYXJlbnRDb250ZXh0ID0gcGFyZW50Q29udGV4dDtcbiAgICAgICAgdGhpcy5yb290UmVxdWVzdCA9IHJvb3RSZXF1ZXN0O1xuICAgIH1cbiAgICByZXR1cm4gUGxhbjtcbn0oKSk7XG5leHBvcnRzLlBsYW4gPSBQbGFuO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaW52ZXJzaWZ5L2xpYi9wbGFubmluZy9wbGFuLmpzXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBndWlkXzEgPSByZXF1aXJlKFwiLi4vdXRpbHMvZ3VpZFwiKTtcbnZhciBDb250ZXh0ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDb250ZXh0KGNvbnRhaW5lcikge1xuICAgICAgICB0aGlzLmd1aWQgPSBndWlkXzEuZ3VpZCgpO1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB9XG4gICAgQ29udGV4dC5wcm90b3R5cGUuYWRkUGxhbiA9IGZ1bmN0aW9uIChwbGFuKSB7XG4gICAgICAgIHRoaXMucGxhbiA9IHBsYW47XG4gICAgfTtcbiAgICByZXR1cm4gQ29udGV4dDtcbn0oKSk7XG5leHBvcnRzLkNvbnRleHQgPSBDb250ZXh0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaW52ZXJzaWZ5L2xpYi9wbGFubmluZy9jb250ZXh0LmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBndWlkXzEgPSByZXF1aXJlKFwiLi4vdXRpbHMvZ3VpZFwiKTtcbnZhciBSZXF1ZXN0ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBSZXF1ZXN0KHNlcnZpY2VJZGVudGlmaWVyLCBwYXJlbnRDb250ZXh0LCBwYXJlbnRSZXF1ZXN0LCBiaW5kaW5ncywgdGFyZ2V0KSB7XG4gICAgICAgIHRoaXMuZ3VpZCA9IGd1aWRfMS5ndWlkKCk7XG4gICAgICAgIHRoaXMuc2VydmljZUlkZW50aWZpZXIgPSBzZXJ2aWNlSWRlbnRpZmllcjtcbiAgICAgICAgdGhpcy5wYXJlbnRDb250ZXh0ID0gcGFyZW50Q29udGV4dDtcbiAgICAgICAgdGhpcy5wYXJlbnRSZXF1ZXN0ID0gcGFyZW50UmVxdWVzdDtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHRoaXMuY2hpbGRSZXF1ZXN0cyA9IFtdO1xuICAgICAgICB0aGlzLmJpbmRpbmdzID0gKEFycmF5LmlzQXJyYXkoYmluZGluZ3MpID8gYmluZGluZ3MgOiBbYmluZGluZ3NdKTtcbiAgICAgICAgaWYgKHBhcmVudFJlcXVlc3QgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdFNjb3BlID0gbmV3IE1hcCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0U2NvcGUgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIFJlcXVlc3QucHJvdG90eXBlLmFkZENoaWxkUmVxdWVzdCA9IGZ1bmN0aW9uIChzZXJ2aWNlSWRlbnRpZmllciwgYmluZGluZ3MsIHRhcmdldCkge1xuICAgICAgICB2YXIgY2hpbGQgPSBuZXcgUmVxdWVzdChzZXJ2aWNlSWRlbnRpZmllciwgdGhpcy5wYXJlbnRDb250ZXh0LCB0aGlzLCBiaW5kaW5ncywgdGFyZ2V0KTtcbiAgICAgICAgdGhpcy5jaGlsZFJlcXVlc3RzLnB1c2goY2hpbGQpO1xuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfTtcbiAgICByZXR1cm4gUmVxdWVzdDtcbn0oKSk7XG5leHBvcnRzLlJlcXVlc3QgPSBSZXF1ZXN0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaW52ZXJzaWZ5L2xpYi9wbGFubmluZy9yZXF1ZXN0LmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBRdWVyeWFibGVTdHJpbmcgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFF1ZXJ5YWJsZVN0cmluZyhzdHIpIHtcbiAgICAgICAgdGhpcy5zdHIgPSBzdHI7XG4gICAgfVxuICAgIFF1ZXJ5YWJsZVN0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aCA9IGZ1bmN0aW9uIChzZWFyY2hTdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RyLmluZGV4T2Yoc2VhcmNoU3RyaW5nKSA9PT0gMDtcbiAgICB9O1xuICAgIFF1ZXJ5YWJsZVN0cmluZy5wcm90b3R5cGUuZW5kc1dpdGggPSBmdW5jdGlvbiAoc2VhcmNoU3RyaW5nKSB7XG4gICAgICAgIHZhciByZXZlcnNlU3RyaW5nID0gXCJcIjtcbiAgICAgICAgdmFyIHJldmVyc2VTZWFyY2hTdHJpbmcgPSBzZWFyY2hTdHJpbmcuc3BsaXQoXCJcIikucmV2ZXJzZSgpLmpvaW4oXCJcIik7XG4gICAgICAgIHJldmVyc2VTdHJpbmcgPSB0aGlzLnN0ci5zcGxpdChcIlwiKS5yZXZlcnNlKCkuam9pbihcIlwiKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnRzV2l0aC5jYWxsKHsgc3RyOiByZXZlcnNlU3RyaW5nIH0sIHJldmVyc2VTZWFyY2hTdHJpbmcpO1xuICAgIH07XG4gICAgUXVlcnlhYmxlU3RyaW5nLnByb3RvdHlwZS5jb250YWlucyA9IGZ1bmN0aW9uIChzZWFyY2hTdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLnN0ci5pbmRleE9mKHNlYXJjaFN0cmluZykgIT09IC0xKTtcbiAgICB9O1xuICAgIFF1ZXJ5YWJsZVN0cmluZy5wcm90b3R5cGUuZXF1YWxzID0gZnVuY3Rpb24gKGNvbXBhcmVTdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RyID09PSBjb21wYXJlU3RyaW5nO1xuICAgIH07XG4gICAgUXVlcnlhYmxlU3RyaW5nLnByb3RvdHlwZS52YWx1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RyO1xuICAgIH07XG4gICAgcmV0dXJuIFF1ZXJ5YWJsZVN0cmluZztcbn0oKSk7XG5leHBvcnRzLlF1ZXJ5YWJsZVN0cmluZyA9IFF1ZXJ5YWJsZVN0cmluZztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2ludmVyc2lmeS9saWIvcGxhbm5pbmcvcXVlcnlhYmxlX3N0cmluZy5qc1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgQmluZGluZ0NvdW50ID0ge1xuICAgIE11bHRpcGxlQmluZGluZ3NBdmFpbGFibGU6IDIsXG4gICAgTm9CaW5kaW5nc0F2YWlsYWJsZTogMCxcbiAgICBPbmx5T25lQmluZGluZ0F2YWlsYWJsZTogMVxufTtcbmV4cG9ydHMuQmluZGluZ0NvdW50ID0gQmluZGluZ0NvdW50O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaW52ZXJzaWZ5L2xpYi9iaW5kaW5ncy9iaW5kaW5nX2NvdW50LmpzXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBzZXJpYWxpemF0aW9uXzEgPSByZXF1aXJlKFwiLi4vdXRpbHMvc2VyaWFsaXphdGlvblwiKTtcbnZhciB0YXJnZXRfMSA9IHJlcXVpcmUoXCIuL3RhcmdldFwiKTtcbnZhciBFUlJPUl9NU0dTID0gcmVxdWlyZShcIi4uL2NvbnN0YW50cy9lcnJvcl9tc2dzXCIpO1xudmFyIE1FVEFEQVRBX0tFWSA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHMvbWV0YWRhdGFfa2V5c1wiKTtcbnZhciBsaXRlcmFsX3R5cGVzXzEgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzL2xpdGVyYWxfdHlwZXNcIik7XG5mdW5jdGlvbiBnZXREZXBlbmRlbmNpZXMobWV0YWRhdGFSZWFkZXIsIGZ1bmMpIHtcbiAgICB2YXIgY29uc3RydWN0b3JOYW1lID0gc2VyaWFsaXphdGlvbl8xLmdldEZ1bmN0aW9uTmFtZShmdW5jKTtcbiAgICB2YXIgdGFyZ2V0cyA9IGdldFRhcmdldHMobWV0YWRhdGFSZWFkZXIsIGNvbnN0cnVjdG9yTmFtZSwgZnVuYywgZmFsc2UpO1xuICAgIHJldHVybiB0YXJnZXRzO1xufVxuZXhwb3J0cy5nZXREZXBlbmRlbmNpZXMgPSBnZXREZXBlbmRlbmNpZXM7XG5mdW5jdGlvbiBnZXRUYXJnZXRzKG1ldGFkYXRhUmVhZGVyLCBjb25zdHJ1Y3Rvck5hbWUsIGZ1bmMsIGlzQmFzZUNsYXNzKSB7XG4gICAgdmFyIG1ldGFkYXRhID0gbWV0YWRhdGFSZWFkZXIuZ2V0Q29uc3RydWN0b3JNZXRhZGF0YShmdW5jKTtcbiAgICB2YXIgc2VydmljZUlkZW50aWZpZXJzID0gbWV0YWRhdGEuY29tcGlsZXJHZW5lcmF0ZWRNZXRhZGF0YTtcbiAgICBpZiAoc2VydmljZUlkZW50aWZpZXJzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFyIG1zZyA9IEVSUk9SX01TR1MuTUlTU0lOR19JTkpFQ1RBQkxFX0FOTk9UQVRJT04gKyBcIiBcIiArIGNvbnN0cnVjdG9yTmFtZSArIFwiLlwiO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcbiAgICB9XG4gICAgdmFyIGNvbnN0cnVjdG9yQXJnc01ldGFkYXRhID0gbWV0YWRhdGEudXNlckdlbmVyYXRlZE1ldGFkYXRhO1xuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoY29uc3RydWN0b3JBcmdzTWV0YWRhdGEpO1xuICAgIHZhciBoYXNVc2VyRGVjbGFyZWRVbmtub3duSW5qZWN0aW9ucyA9IChmdW5jLmxlbmd0aCA9PT0gMCAmJiBrZXlzLmxlbmd0aCA+IDApO1xuICAgIHZhciBpdGVyYXRpb25zID0gKGhhc1VzZXJEZWNsYXJlZFVua25vd25JbmplY3Rpb25zKSA/IGtleXMubGVuZ3RoIDogZnVuYy5sZW5ndGg7XG4gICAgdmFyIGNvbnN0cnVjdG9yVGFyZ2V0cyA9IGdldENvbnN0cnVjdG9yQXJnc0FzVGFyZ2V0cyhpc0Jhc2VDbGFzcywgY29uc3RydWN0b3JOYW1lLCBzZXJ2aWNlSWRlbnRpZmllcnMsIGNvbnN0cnVjdG9yQXJnc01ldGFkYXRhLCBpdGVyYXRpb25zKTtcbiAgICB2YXIgcHJvcGVydHlUYXJnZXRzID0gZ2V0Q2xhc3NQcm9wc0FzVGFyZ2V0cyhtZXRhZGF0YVJlYWRlciwgZnVuYyk7XG4gICAgdmFyIHRhcmdldHMgPSBjb25zdHJ1Y3RvclRhcmdldHMuY29uY2F0KHByb3BlcnR5VGFyZ2V0cyk7XG4gICAgdmFyIGJhc2VDbGFzc0RlcGVuZGVuY3lDb3VudCA9IGdldEJhc2VDbGFzc0RlcGVuZGVuY3lDb3VudChtZXRhZGF0YVJlYWRlciwgZnVuYyk7XG4gICAgaWYgKHRhcmdldHMubGVuZ3RoIDwgYmFzZUNsYXNzRGVwZW5kZW5jeUNvdW50KSB7XG4gICAgICAgIHZhciBlcnJvciA9IEVSUk9SX01TR1MuQVJHVU1FTlRTX0xFTkdUSF9NSVNNQVRDSF8xICtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yTmFtZSArIEVSUk9SX01TR1MuQVJHVU1FTlRTX0xFTkdUSF9NSVNNQVRDSF8yO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0cztcbn1cbmZ1bmN0aW9uIGdldENvbnN0cnVjdG9yQXJnc0FzVGFyZ2V0KGluZGV4LCBpc0Jhc2VDbGFzcywgY29uc3RydWN0b3JOYW1lLCBzZXJ2aWNlSWRlbnRpZmllcnMsIGNvbnN0cnVjdG9yQXJnc01ldGFkYXRhKSB7XG4gICAgdmFyIHRhcmdldE1ldGFkYXRhID0gY29uc3RydWN0b3JBcmdzTWV0YWRhdGFbaW5kZXgudG9TdHJpbmcoKV0gfHwgW107XG4gICAgdmFyIG1ldGFkYXRhID0gZm9ybWF0VGFyZ2V0TWV0YWRhdGEodGFyZ2V0TWV0YWRhdGEpO1xuICAgIHZhciBpc01hbmFnZWQgPSBtZXRhZGF0YS51bm1hbmFnZWQgIT09IHRydWU7XG4gICAgdmFyIHNlcnZpY2VJZGVudGlmaWVyID0gc2VydmljZUlkZW50aWZpZXJzW2luZGV4XTtcbiAgICB2YXIgaW5qZWN0SWRlbnRpZmllciA9IChtZXRhZGF0YS5pbmplY3QgfHwgbWV0YWRhdGEubXVsdGlJbmplY3QpO1xuICAgIHNlcnZpY2VJZGVudGlmaWVyID0gKGluamVjdElkZW50aWZpZXIpID8gKGluamVjdElkZW50aWZpZXIpIDogc2VydmljZUlkZW50aWZpZXI7XG4gICAgaWYgKGlzTWFuYWdlZCA9PT0gdHJ1ZSkge1xuICAgICAgICB2YXIgaXNPYmplY3QgPSBzZXJ2aWNlSWRlbnRpZmllciA9PT0gT2JqZWN0O1xuICAgICAgICB2YXIgaXNGdW5jdGlvbiA9IHNlcnZpY2VJZGVudGlmaWVyID09PSBGdW5jdGlvbjtcbiAgICAgICAgdmFyIGlzVW5kZWZpbmVkID0gc2VydmljZUlkZW50aWZpZXIgPT09IHVuZGVmaW5lZDtcbiAgICAgICAgdmFyIGlzVW5rbm93blR5cGUgPSAoaXNPYmplY3QgfHwgaXNGdW5jdGlvbiB8fCBpc1VuZGVmaW5lZCk7XG4gICAgICAgIGlmIChpc0Jhc2VDbGFzcyA9PT0gZmFsc2UgJiYgaXNVbmtub3duVHlwZSkge1xuICAgICAgICAgICAgdmFyIG1zZyA9IEVSUk9SX01TR1MuTUlTU0lOR19JTkpFQ1RfQU5OT1RBVElPTiArIFwiIGFyZ3VtZW50IFwiICsgaW5kZXggKyBcIiBpbiBjbGFzcyBcIiArIGNvbnN0cnVjdG9yTmFtZSArIFwiLlwiO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1zZyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHRhcmdldCA9IG5ldyB0YXJnZXRfMS5UYXJnZXQobGl0ZXJhbF90eXBlc18xLlRhcmdldFR5cGVFbnVtLkNvbnN0cnVjdG9yQXJndW1lbnQsIG1ldGFkYXRhLnRhcmdldE5hbWUsIHNlcnZpY2VJZGVudGlmaWVyKTtcbiAgICAgICAgdGFyZ2V0Lm1ldGFkYXRhID0gdGFyZ2V0TWV0YWRhdGE7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuZnVuY3Rpb24gZ2V0Q29uc3RydWN0b3JBcmdzQXNUYXJnZXRzKGlzQmFzZUNsYXNzLCBjb25zdHJ1Y3Rvck5hbWUsIHNlcnZpY2VJZGVudGlmaWVycywgY29uc3RydWN0b3JBcmdzTWV0YWRhdGEsIGl0ZXJhdGlvbnMpIHtcbiAgICB2YXIgdGFyZ2V0cyA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaXRlcmF0aW9uczsgaSsrKSB7XG4gICAgICAgIHZhciBpbmRleCA9IGk7XG4gICAgICAgIHZhciB0YXJnZXQgPSBnZXRDb25zdHJ1Y3RvckFyZ3NBc1RhcmdldChpbmRleCwgaXNCYXNlQ2xhc3MsIGNvbnN0cnVjdG9yTmFtZSwgc2VydmljZUlkZW50aWZpZXJzLCBjb25zdHJ1Y3RvckFyZ3NNZXRhZGF0YSk7XG4gICAgICAgIGlmICh0YXJnZXQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRhcmdldHMucHVzaCh0YXJnZXQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXRzO1xufVxuZnVuY3Rpb24gZ2V0Q2xhc3NQcm9wc0FzVGFyZ2V0cyhtZXRhZGF0YVJlYWRlciwgY29uc3RydWN0b3JGdW5jKSB7XG4gICAgdmFyIGNsYXNzUHJvcHNNZXRhZGF0YSA9IG1ldGFkYXRhUmVhZGVyLmdldFByb3BlcnRpZXNNZXRhZGF0YShjb25zdHJ1Y3RvckZ1bmMpO1xuICAgIHZhciB0YXJnZXRzID0gW107XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhjbGFzc1Byb3BzTWV0YWRhdGEpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgdmFyIHRhcmdldE1ldGFkYXRhID0gY2xhc3NQcm9wc01ldGFkYXRhW2tleV07XG4gICAgICAgIHZhciBtZXRhZGF0YSA9IGZvcm1hdFRhcmdldE1ldGFkYXRhKGNsYXNzUHJvcHNNZXRhZGF0YVtrZXldKTtcbiAgICAgICAgdmFyIHRhcmdldE5hbWUgPSBtZXRhZGF0YS50YXJnZXROYW1lIHx8IGtleTtcbiAgICAgICAgdmFyIHNlcnZpY2VJZGVudGlmaWVyID0gKG1ldGFkYXRhLmluamVjdCB8fCBtZXRhZGF0YS5tdWx0aUluamVjdCk7XG4gICAgICAgIHZhciB0YXJnZXQgPSBuZXcgdGFyZ2V0XzEuVGFyZ2V0KGxpdGVyYWxfdHlwZXNfMS5UYXJnZXRUeXBlRW51bS5DbGFzc1Byb3BlcnR5LCB0YXJnZXROYW1lLCBzZXJ2aWNlSWRlbnRpZmllcik7XG4gICAgICAgIHRhcmdldC5tZXRhZGF0YSA9IHRhcmdldE1ldGFkYXRhO1xuICAgICAgICB0YXJnZXRzLnB1c2godGFyZ2V0KTtcbiAgICB9XG4gICAgdmFyIGJhc2VDb25zdHJ1Y3RvciA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihjb25zdHJ1Y3RvckZ1bmMucHJvdG90eXBlKS5jb25zdHJ1Y3RvcjtcbiAgICBpZiAoYmFzZUNvbnN0cnVjdG9yICE9PSBPYmplY3QpIHtcbiAgICAgICAgdmFyIGJhc2VUYXJnZXRzID0gZ2V0Q2xhc3NQcm9wc0FzVGFyZ2V0cyhtZXRhZGF0YVJlYWRlciwgYmFzZUNvbnN0cnVjdG9yKTtcbiAgICAgICAgdGFyZ2V0cyA9IHRhcmdldHMuY29uY2F0KGJhc2VUYXJnZXRzKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldHM7XG59XG5mdW5jdGlvbiBnZXRCYXNlQ2xhc3NEZXBlbmRlbmN5Q291bnQobWV0YWRhdGFSZWFkZXIsIGZ1bmMpIHtcbiAgICB2YXIgYmFzZUNvbnN0cnVjdG9yID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGZ1bmMucHJvdG90eXBlKS5jb25zdHJ1Y3RvcjtcbiAgICBpZiAoYmFzZUNvbnN0cnVjdG9yICE9PSBPYmplY3QpIHtcbiAgICAgICAgdmFyIGJhc2VDb25zdHJ1Y3Rvck5hbWUgPSBzZXJpYWxpemF0aW9uXzEuZ2V0RnVuY3Rpb25OYW1lKGJhc2VDb25zdHJ1Y3Rvcik7XG4gICAgICAgIHZhciB0YXJnZXRzID0gZ2V0VGFyZ2V0cyhtZXRhZGF0YVJlYWRlciwgYmFzZUNvbnN0cnVjdG9yTmFtZSwgYmFzZUNvbnN0cnVjdG9yLCB0cnVlKTtcbiAgICAgICAgdmFyIG1ldGFkYXRhID0gdGFyZ2V0cy5tYXAoZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgICAgIHJldHVybiB0Lm1ldGFkYXRhLmZpbHRlcihmdW5jdGlvbiAobSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBtLmtleSA9PT0gTUVUQURBVEFfS0VZLlVOTUFOQUdFRF9UQUc7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciB1bm1hbmFnZWRDb3VudCA9IFtdLmNvbmNhdC5hcHBseShbXSwgbWV0YWRhdGEpLmxlbmd0aDtcbiAgICAgICAgdmFyIGRlcGVuZGVuY3lDb3VudCA9IHRhcmdldHMubGVuZ3RoIC0gdW5tYW5hZ2VkQ291bnQ7XG4gICAgICAgIGlmIChkZXBlbmRlbmN5Q291bnQgPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVwZW5kZW5jeUNvdW50O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGdldEJhc2VDbGFzc0RlcGVuZGVuY3lDb3VudChtZXRhZGF0YVJlYWRlciwgYmFzZUNvbnN0cnVjdG9yKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxufVxuZnVuY3Rpb24gZm9ybWF0VGFyZ2V0TWV0YWRhdGEodGFyZ2V0TWV0YWRhdGEpIHtcbiAgICB2YXIgdGFyZ2V0TWV0YWRhdGFNYXAgPSB7fTtcbiAgICB0YXJnZXRNZXRhZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChtKSB7XG4gICAgICAgIHRhcmdldE1ldGFkYXRhTWFwW20ua2V5LnRvU3RyaW5nKCldID0gbS52YWx1ZTtcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgICBpbmplY3Q6IHRhcmdldE1ldGFkYXRhTWFwW01FVEFEQVRBX0tFWS5JTkpFQ1RfVEFHXSxcbiAgICAgICAgbXVsdGlJbmplY3Q6IHRhcmdldE1ldGFkYXRhTWFwW01FVEFEQVRBX0tFWS5NVUxUSV9JTkpFQ1RfVEFHXSxcbiAgICAgICAgdGFyZ2V0TmFtZTogdGFyZ2V0TWV0YWRhdGFNYXBbTUVUQURBVEFfS0VZLk5BTUVfVEFHXSxcbiAgICAgICAgdW5tYW5hZ2VkOiB0YXJnZXRNZXRhZGF0YU1hcFtNRVRBREFUQV9LRVkuVU5NQU5BR0VEX1RBR11cbiAgICB9O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaW52ZXJzaWZ5L2xpYi9wbGFubmluZy9yZWZsZWN0aW9uX3V0aWxzLmpzXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBsaXRlcmFsX3R5cGVzXzEgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzL2xpdGVyYWxfdHlwZXNcIik7XG52YXIgc2VyaWFsaXphdGlvbl8xID0gcmVxdWlyZShcIi4uL3V0aWxzL3NlcmlhbGl6YXRpb25cIik7XG52YXIgaW5zdGFudGlhdGlvbl8xID0gcmVxdWlyZShcIi4vaW5zdGFudGlhdGlvblwiKTtcbnZhciBFUlJPUl9NU0dTID0gcmVxdWlyZShcIi4uL2NvbnN0YW50cy9lcnJvcl9tc2dzXCIpO1xudmFyIF9yZXNvbHZlUmVxdWVzdCA9IGZ1bmN0aW9uIChyZXF1ZXN0U2NvcGUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHJlcXVlc3QpIHtcbiAgICAgICAgdmFyIGJpbmRpbmdzID0gcmVxdWVzdC5iaW5kaW5ncztcbiAgICAgICAgdmFyIGNoaWxkUmVxdWVzdHMgPSByZXF1ZXN0LmNoaWxkUmVxdWVzdHM7XG4gICAgICAgIHZhciB0YXJnZXRJc0FuQXJyYXkgPSByZXF1ZXN0LnRhcmdldCAmJiByZXF1ZXN0LnRhcmdldC5pc0FycmF5KCk7XG4gICAgICAgIHZhciB0YXJnZXRQYXJlbnRJc05vdEFuQXJyYXkgPSAhcmVxdWVzdC5wYXJlbnRSZXF1ZXN0IHx8XG4gICAgICAgICAgICAhcmVxdWVzdC5wYXJlbnRSZXF1ZXN0LnRhcmdldCB8fFxuICAgICAgICAgICAgIXJlcXVlc3QudGFyZ2V0IHx8XG4gICAgICAgICAgICAhcmVxdWVzdC5wYXJlbnRSZXF1ZXN0LnRhcmdldC5tYXRjaGVzQXJyYXkocmVxdWVzdC50YXJnZXQuc2VydmljZUlkZW50aWZpZXIpO1xuICAgICAgICBpZiAodGFyZ2V0SXNBbkFycmF5ICYmIHRhcmdldFBhcmVudElzTm90QW5BcnJheSkge1xuICAgICAgICAgICAgcmV0dXJuIGNoaWxkUmVxdWVzdHMubWFwKGZ1bmN0aW9uIChjaGlsZFJlcXVlc3QpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2YgPSBfcmVzb2x2ZVJlcXVlc3QocmVxdWVzdFNjb3BlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2YoY2hpbGRSZXF1ZXN0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IG51bGw7XG4gICAgICAgICAgICBpZiAocmVxdWVzdC50YXJnZXQuaXNPcHRpb25hbCgpID09PSB0cnVlICYmIGJpbmRpbmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgYmluZGluZyA9IGJpbmRpbmdzWzBdO1xuICAgICAgICAgICAgdmFyIGlzU2luZ2xldG9uID0gYmluZGluZy5zY29wZSA9PT0gbGl0ZXJhbF90eXBlc18xLkJpbmRpbmdTY29wZUVudW0uU2luZ2xldG9uO1xuICAgICAgICAgICAgdmFyIGlzUmVxdWVzdFNpbmdsZXRvbiA9IGJpbmRpbmcuc2NvcGUgPT09IGxpdGVyYWxfdHlwZXNfMS5CaW5kaW5nU2NvcGVFbnVtLlJlcXVlc3Q7XG4gICAgICAgICAgICBpZiAoaXNTaW5nbGV0b24gJiYgYmluZGluZy5hY3RpdmF0ZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYmluZGluZy5jYWNoZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc1JlcXVlc3RTaW5nbGV0b24gJiZcbiAgICAgICAgICAgICAgICByZXF1ZXN0U2NvcGUgIT09IG51bGwgJiZcbiAgICAgICAgICAgICAgICByZXF1ZXN0U2NvcGUuaGFzKGJpbmRpbmcuZ3VpZCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVxdWVzdFNjb3BlLmdldChiaW5kaW5nLmd1aWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGJpbmRpbmcudHlwZSA9PT0gbGl0ZXJhbF90eXBlc18xLkJpbmRpbmdUeXBlRW51bS5Db25zdGFudFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gYmluZGluZy5jYWNoZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGJpbmRpbmcudHlwZSA9PT0gbGl0ZXJhbF90eXBlc18xLkJpbmRpbmdUeXBlRW51bS5GdW5jdGlvbikge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGJpbmRpbmcuY2FjaGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChiaW5kaW5nLnR5cGUgPT09IGxpdGVyYWxfdHlwZXNfMS5CaW5kaW5nVHlwZUVudW0uQ29uc3RydWN0b3IpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBiaW5kaW5nLmltcGxlbWVudGF0aW9uVHlwZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGJpbmRpbmcudHlwZSA9PT0gbGl0ZXJhbF90eXBlc18xLkJpbmRpbmdUeXBlRW51bS5EeW5hbWljVmFsdWUgJiYgYmluZGluZy5keW5hbWljVmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBiaW5kaW5nLmR5bmFtaWNWYWx1ZShyZXF1ZXN0LnBhcmVudENvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoYmluZGluZy50eXBlID09PSBsaXRlcmFsX3R5cGVzXzEuQmluZGluZ1R5cGVFbnVtLkZhY3RvcnkgJiYgYmluZGluZy5mYWN0b3J5ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gYmluZGluZy5mYWN0b3J5KHJlcXVlc3QucGFyZW50Q29udGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChiaW5kaW5nLnR5cGUgPT09IGxpdGVyYWxfdHlwZXNfMS5CaW5kaW5nVHlwZUVudW0uUHJvdmlkZXIgJiYgYmluZGluZy5wcm92aWRlciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGJpbmRpbmcucHJvdmlkZXIocmVxdWVzdC5wYXJlbnRDb250ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGJpbmRpbmcudHlwZSA9PT0gbGl0ZXJhbF90eXBlc18xLkJpbmRpbmdUeXBlRW51bS5JbnN0YW5jZSAmJiBiaW5kaW5nLmltcGxlbWVudGF0aW9uVHlwZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGluc3RhbnRpYXRpb25fMS5yZXNvbHZlSW5zdGFuY2UoYmluZGluZy5pbXBsZW1lbnRhdGlvblR5cGUsIGNoaWxkUmVxdWVzdHMsIF9yZXNvbHZlUmVxdWVzdChyZXF1ZXN0U2NvcGUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBzZXJ2aWNlSWRlbnRpZmllciA9IHNlcmlhbGl6YXRpb25fMS5nZXRTZXJ2aWNlSWRlbnRpZmllckFzU3RyaW5nKHJlcXVlc3Quc2VydmljZUlkZW50aWZpZXIpO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihFUlJPUl9NU0dTLklOVkFMSURfQklORElOR19UWVBFICsgXCIgXCIgKyBzZXJ2aWNlSWRlbnRpZmllcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIGJpbmRpbmcub25BY3RpdmF0aW9uID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBiaW5kaW5nLm9uQWN0aXZhdGlvbihyZXF1ZXN0LnBhcmVudENvbnRleHQsIHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNTaW5nbGV0b24pIHtcbiAgICAgICAgICAgICAgICBiaW5kaW5nLmNhY2hlID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIGJpbmRpbmcuYWN0aXZhdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc1JlcXVlc3RTaW5nbGV0b24gJiZcbiAgICAgICAgICAgICAgICByZXF1ZXN0U2NvcGUgIT09IG51bGwgJiZcbiAgICAgICAgICAgICAgICAhcmVxdWVzdFNjb3BlLmhhcyhiaW5kaW5nLmd1aWQpKSB7XG4gICAgICAgICAgICAgICAgcmVxdWVzdFNjb3BlLnNldChiaW5kaW5nLmd1aWQsIHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgfTtcbn07XG5mdW5jdGlvbiByZXNvbHZlKGNvbnRleHQpIHtcbiAgICB2YXIgX2YgPSBfcmVzb2x2ZVJlcXVlc3QoY29udGV4dC5wbGFuLnJvb3RSZXF1ZXN0LnJlcXVlc3RTY29wZSk7XG4gICAgcmV0dXJuIF9mKGNvbnRleHQucGxhbi5yb290UmVxdWVzdCk7XG59XG5leHBvcnRzLnJlc29sdmUgPSByZXNvbHZlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaW52ZXJzaWZ5L2xpYi9yZXNvbHV0aW9uL3Jlc29sdmVyLmpzXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBsaXRlcmFsX3R5cGVzXzEgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzL2xpdGVyYWxfdHlwZXNcIik7XG52YXIgTUVUQURBVEFfS0VZID0gcmVxdWlyZShcIi4uL2NvbnN0YW50cy9tZXRhZGF0YV9rZXlzXCIpO1xudmFyIGVycm9yX21zZ3NfMSA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHMvZXJyb3JfbXNnc1wiKTtcbmZ1bmN0aW9uIF9pbmplY3RQcm9wZXJ0aWVzKGluc3RhbmNlLCBjaGlsZFJlcXVlc3RzLCByZXNvbHZlUmVxdWVzdCkge1xuICAgIHZhciBwcm9wZXJ0eUluamVjdGlvbnNSZXF1ZXN0cyA9IGNoaWxkUmVxdWVzdHMuZmlsdGVyKGZ1bmN0aW9uIChjaGlsZFJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIChjaGlsZFJlcXVlc3QudGFyZ2V0ICE9PSBudWxsICYmXG4gICAgICAgICAgICBjaGlsZFJlcXVlc3QudGFyZ2V0LnR5cGUgPT09IGxpdGVyYWxfdHlwZXNfMS5UYXJnZXRUeXBlRW51bS5DbGFzc1Byb3BlcnR5KTtcbiAgICB9KTtcbiAgICB2YXIgcHJvcGVydHlJbmplY3Rpb25zID0gcHJvcGVydHlJbmplY3Rpb25zUmVxdWVzdHMubWFwKGZ1bmN0aW9uIChjaGlsZFJlcXVlc3QpIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVSZXF1ZXN0KGNoaWxkUmVxdWVzdCk7XG4gICAgfSk7XG4gICAgcHJvcGVydHlJbmplY3Rpb25zUmVxdWVzdHMuZm9yRWFjaChmdW5jdGlvbiAociwgaW5kZXgpIHtcbiAgICAgICAgdmFyIHByb3BlcnR5TmFtZSA9IFwiXCI7XG4gICAgICAgIHByb3BlcnR5TmFtZSA9IHIudGFyZ2V0Lm5hbWUudmFsdWUoKTtcbiAgICAgICAgdmFyIGluamVjdGlvbiA9IHByb3BlcnR5SW5qZWN0aW9uc1tpbmRleF07XG4gICAgICAgIGluc3RhbmNlW3Byb3BlcnR5TmFtZV0gPSBpbmplY3Rpb247XG4gICAgfSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuZnVuY3Rpb24gX2NyZWF0ZUluc3RhbmNlKEZ1bmMsIGluamVjdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IChGdW5jLmJpbmQuYXBwbHkoRnVuYywgW3ZvaWQgMF0uY29uY2F0KGluamVjdGlvbnMpKSkoKTtcbn1cbmZ1bmN0aW9uIF9wb3N0Q29uc3RydWN0KGNvbnN0ciwgcmVzdWx0KSB7XG4gICAgaWYgKFJlZmxlY3QuaGFzTWV0YWRhdGEoTUVUQURBVEFfS0VZLlBPU1RfQ09OU1RSVUNULCBjb25zdHIpKSB7XG4gICAgICAgIHZhciBkYXRhID0gUmVmbGVjdC5nZXRNZXRhZGF0YShNRVRBREFUQV9LRVkuUE9TVF9DT05TVFJVQ1QsIGNvbnN0cik7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXN1bHRbZGF0YS52YWx1ZV0oKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yX21zZ3NfMS5QT1NUX0NPTlNUUlVDVF9FUlJPUihjb25zdHIubmFtZSwgZS5tZXNzYWdlKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiByZXNvbHZlSW5zdGFuY2UoY29uc3RyLCBjaGlsZFJlcXVlc3RzLCByZXNvbHZlUmVxdWVzdCkge1xuICAgIHZhciByZXN1bHQgPSBudWxsO1xuICAgIGlmIChjaGlsZFJlcXVlc3RzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdmFyIGNvbnN0cnVjdG9ySW5qZWN0aW9uc1JlcXVlc3RzID0gY2hpbGRSZXF1ZXN0cy5maWx0ZXIoZnVuY3Rpb24gKGNoaWxkUmVxdWVzdCkge1xuICAgICAgICAgICAgcmV0dXJuIChjaGlsZFJlcXVlc3QudGFyZ2V0ICE9PSBudWxsICYmIGNoaWxkUmVxdWVzdC50YXJnZXQudHlwZSA9PT0gbGl0ZXJhbF90eXBlc18xLlRhcmdldFR5cGVFbnVtLkNvbnN0cnVjdG9yQXJndW1lbnQpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGNvbnN0cnVjdG9ySW5qZWN0aW9ucyA9IGNvbnN0cnVjdG9ySW5qZWN0aW9uc1JlcXVlc3RzLm1hcChmdW5jdGlvbiAoY2hpbGRSZXF1ZXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZVJlcXVlc3QoY2hpbGRSZXF1ZXN0KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlc3VsdCA9IF9jcmVhdGVJbnN0YW5jZShjb25zdHIsIGNvbnN0cnVjdG9ySW5qZWN0aW9ucyk7XG4gICAgICAgIHJlc3VsdCA9IF9pbmplY3RQcm9wZXJ0aWVzKHJlc3VsdCwgY2hpbGRSZXF1ZXN0cywgcmVzb2x2ZVJlcXVlc3QpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gbmV3IGNvbnN0cigpO1xuICAgIH1cbiAgICBfcG9zdENvbnN0cnVjdChjb25zdHIsIHJlc3VsdCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMucmVzb2x2ZUluc3RhbmNlID0gcmVzb2x2ZUluc3RhbmNlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaW52ZXJzaWZ5L2xpYi9yZXNvbHV0aW9uL2luc3RhbnRpYXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGJpbmRpbmdfaW5fd2hlbl9vbl9zeW50YXhfMSA9IHJlcXVpcmUoXCIuL2JpbmRpbmdfaW5fd2hlbl9vbl9zeW50YXhcIik7XG52YXIgYmluZGluZ193aGVuX29uX3N5bnRheF8xID0gcmVxdWlyZShcIi4vYmluZGluZ193aGVuX29uX3N5bnRheFwiKTtcbnZhciBsaXRlcmFsX3R5cGVzXzEgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzL2xpdGVyYWxfdHlwZXNcIik7XG52YXIgZXhjZXB0aW9uc18xID0gcmVxdWlyZShcIi4uL3V0aWxzL2V4Y2VwdGlvbnNcIik7XG52YXIgRVJST1JfTVNHUyA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHMvZXJyb3JfbXNnc1wiKTtcbmZ1bmN0aW9uIGZhY3RvcnlXcmFwcGVyKGZhY3RvcnlUeXBlLCBzZXJ2aWNlSWRlbnRpZmllciwgZmFjdG9yeSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBmYWN0b3J5LmFwcGx5KHZvaWQgMCwgYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAoZXhjZXB0aW9uc18xLmlzU3RhY2tPdmVyZmxvd0V4ZXB0aW9uKGVycm9yKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihFUlJPUl9NU0dTLkNJUkNVTEFSX0RFUEVOREVOQ1lfSU5fRkFDVE9SWShmYWN0b3J5VHlwZSwgc2VydmljZUlkZW50aWZpZXIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG59XG52YXIgQmluZGluZ1RvU3ludGF4ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBCaW5kaW5nVG9TeW50YXgoYmluZGluZykge1xuICAgICAgICB0aGlzLl9iaW5kaW5nID0gYmluZGluZztcbiAgICB9XG4gICAgQmluZGluZ1RvU3ludGF4LnByb3RvdHlwZS50byA9IGZ1bmN0aW9uIChjb25zdHJ1Y3Rvcikge1xuICAgICAgICB0aGlzLl9iaW5kaW5nLnR5cGUgPSBsaXRlcmFsX3R5cGVzXzEuQmluZGluZ1R5cGVFbnVtLkluc3RhbmNlO1xuICAgICAgICB0aGlzLl9iaW5kaW5nLmltcGxlbWVudGF0aW9uVHlwZSA9IGNvbnN0cnVjdG9yO1xuICAgICAgICByZXR1cm4gbmV3IGJpbmRpbmdfaW5fd2hlbl9vbl9zeW50YXhfMS5CaW5kaW5nSW5XaGVuT25TeW50YXgodGhpcy5fYmluZGluZyk7XG4gICAgfTtcbiAgICBCaW5kaW5nVG9TeW50YXgucHJvdG90eXBlLnRvU2VsZiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9iaW5kaW5nLnNlcnZpY2VJZGVudGlmaWVyICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlwiICsgRVJST1JfTVNHUy5JTlZBTElEX1RPX1NFTEZfVkFMVUUpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBzZWxmID0gdGhpcy5fYmluZGluZy5zZXJ2aWNlSWRlbnRpZmllcjtcbiAgICAgICAgcmV0dXJuIHRoaXMudG8oc2VsZik7XG4gICAgfTtcbiAgICBCaW5kaW5nVG9TeW50YXgucHJvdG90eXBlLnRvQ29uc3RhbnRWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9iaW5kaW5nLnR5cGUgPSBsaXRlcmFsX3R5cGVzXzEuQmluZGluZ1R5cGVFbnVtLkNvbnN0YW50VmFsdWU7XG4gICAgICAgIHRoaXMuX2JpbmRpbmcuY2FjaGUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5fYmluZGluZy5keW5hbWljVmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLl9iaW5kaW5nLmltcGxlbWVudGF0aW9uVHlwZSA9IG51bGw7XG4gICAgICAgIHJldHVybiBuZXcgYmluZGluZ193aGVuX29uX3N5bnRheF8xLkJpbmRpbmdXaGVuT25TeW50YXgodGhpcy5fYmluZGluZyk7XG4gICAgfTtcbiAgICBCaW5kaW5nVG9TeW50YXgucHJvdG90eXBlLnRvRHluYW1pY1ZhbHVlID0gZnVuY3Rpb24gKGZ1bmMpIHtcbiAgICAgICAgdGhpcy5fYmluZGluZy50eXBlID0gbGl0ZXJhbF90eXBlc18xLkJpbmRpbmdUeXBlRW51bS5EeW5hbWljVmFsdWU7XG4gICAgICAgIHRoaXMuX2JpbmRpbmcuY2FjaGUgPSBudWxsO1xuICAgICAgICB0aGlzLl9iaW5kaW5nLmR5bmFtaWNWYWx1ZSA9IGZhY3RvcnlXcmFwcGVyKFwidG9EeW5hbWljVmFsdWVcIiwgdGhpcy5fYmluZGluZy5zZXJ2aWNlSWRlbnRpZmllci50b1N0cmluZygpLCBmdW5jKTtcbiAgICAgICAgdGhpcy5fYmluZGluZy5pbXBsZW1lbnRhdGlvblR5cGUgPSBudWxsO1xuICAgICAgICByZXR1cm4gbmV3IGJpbmRpbmdfaW5fd2hlbl9vbl9zeW50YXhfMS5CaW5kaW5nSW5XaGVuT25TeW50YXgodGhpcy5fYmluZGluZyk7XG4gICAgfTtcbiAgICBCaW5kaW5nVG9TeW50YXgucHJvdG90eXBlLnRvQ29uc3RydWN0b3IgPSBmdW5jdGlvbiAoY29uc3RydWN0b3IpIHtcbiAgICAgICAgdGhpcy5fYmluZGluZy50eXBlID0gbGl0ZXJhbF90eXBlc18xLkJpbmRpbmdUeXBlRW51bS5Db25zdHJ1Y3RvcjtcbiAgICAgICAgdGhpcy5fYmluZGluZy5pbXBsZW1lbnRhdGlvblR5cGUgPSBjb25zdHJ1Y3RvcjtcbiAgICAgICAgcmV0dXJuIG5ldyBiaW5kaW5nX3doZW5fb25fc3ludGF4XzEuQmluZGluZ1doZW5PblN5bnRheCh0aGlzLl9iaW5kaW5nKTtcbiAgICB9O1xuICAgIEJpbmRpbmdUb1N5bnRheC5wcm90b3R5cGUudG9GYWN0b3J5ID0gZnVuY3Rpb24gKGZhY3RvcnkpIHtcbiAgICAgICAgdGhpcy5fYmluZGluZy50eXBlID0gbGl0ZXJhbF90eXBlc18xLkJpbmRpbmdUeXBlRW51bS5GYWN0b3J5O1xuICAgICAgICB0aGlzLl9iaW5kaW5nLmZhY3RvcnkgPSBmYWN0b3J5V3JhcHBlcihcInRvRmFjdG9yeVwiLCB0aGlzLl9iaW5kaW5nLnNlcnZpY2VJZGVudGlmaWVyLnRvU3RyaW5nKCksIGZhY3RvcnkpO1xuICAgICAgICByZXR1cm4gbmV3IGJpbmRpbmdfd2hlbl9vbl9zeW50YXhfMS5CaW5kaW5nV2hlbk9uU3ludGF4KHRoaXMuX2JpbmRpbmcpO1xuICAgIH07XG4gICAgQmluZGluZ1RvU3ludGF4LnByb3RvdHlwZS50b0Z1bmN0aW9uID0gZnVuY3Rpb24gKGZ1bmMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBmdW5jICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihFUlJPUl9NU0dTLklOVkFMSURfRlVOQ1RJT05fQklORElORyk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGJpbmRpbmdXaGVuT25TeW50YXggPSB0aGlzLnRvQ29uc3RhbnRWYWx1ZShmdW5jKTtcbiAgICAgICAgdGhpcy5fYmluZGluZy50eXBlID0gbGl0ZXJhbF90eXBlc18xLkJpbmRpbmdUeXBlRW51bS5GdW5jdGlvbjtcbiAgICAgICAgcmV0dXJuIGJpbmRpbmdXaGVuT25TeW50YXg7XG4gICAgfTtcbiAgICBCaW5kaW5nVG9TeW50YXgucHJvdG90eXBlLnRvQXV0b0ZhY3RvcnkgPSBmdW5jdGlvbiAoc2VydmljZUlkZW50aWZpZXIpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5fYmluZGluZy50eXBlID0gbGl0ZXJhbF90eXBlc18xLkJpbmRpbmdUeXBlRW51bS5GYWN0b3J5O1xuICAgICAgICB0aGlzLl9iaW5kaW5nLmZhY3RvcnkgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgICAgICAgdmFyIGF1dG9mYWN0b3J5ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gY29udGV4dC5jb250YWluZXIuZ2V0KHNlcnZpY2VJZGVudGlmaWVyKTsgfTtcbiAgICAgICAgICAgIHJldHVybiBmYWN0b3J5V3JhcHBlcihcInRvQXV0b0ZhY3RvcnlcIiwgX3RoaXMuX2JpbmRpbmcuc2VydmljZUlkZW50aWZpZXIudG9TdHJpbmcoKSwgYXV0b2ZhY3RvcnkpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV3IGJpbmRpbmdfd2hlbl9vbl9zeW50YXhfMS5CaW5kaW5nV2hlbk9uU3ludGF4KHRoaXMuX2JpbmRpbmcpO1xuICAgIH07XG4gICAgQmluZGluZ1RvU3ludGF4LnByb3RvdHlwZS50b1Byb3ZpZGVyID0gZnVuY3Rpb24gKHByb3ZpZGVyKSB7XG4gICAgICAgIHRoaXMuX2JpbmRpbmcudHlwZSA9IGxpdGVyYWxfdHlwZXNfMS5CaW5kaW5nVHlwZUVudW0uUHJvdmlkZXI7XG4gICAgICAgIHRoaXMuX2JpbmRpbmcucHJvdmlkZXIgPSBmYWN0b3J5V3JhcHBlcihcInRvUHJvdmlkZXJcIiwgdGhpcy5fYmluZGluZy5zZXJ2aWNlSWRlbnRpZmllci50b1N0cmluZygpLCBwcm92aWRlcik7XG4gICAgICAgIHJldHVybiBuZXcgYmluZGluZ193aGVuX29uX3N5bnRheF8xLkJpbmRpbmdXaGVuT25TeW50YXgodGhpcy5fYmluZGluZyk7XG4gICAgfTtcbiAgICByZXR1cm4gQmluZGluZ1RvU3ludGF4O1xufSgpKTtcbmV4cG9ydHMuQmluZGluZ1RvU3ludGF4ID0gQmluZGluZ1RvU3ludGF4O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaW52ZXJzaWZ5L2xpYi9zeW50YXgvYmluZGluZ190b19zeW50YXguanNcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGJpbmRpbmdfaW5fc3ludGF4XzEgPSByZXF1aXJlKFwiLi9iaW5kaW5nX2luX3N5bnRheFwiKTtcbnZhciBiaW5kaW5nX3doZW5fc3ludGF4XzEgPSByZXF1aXJlKFwiLi9iaW5kaW5nX3doZW5fc3ludGF4XCIpO1xudmFyIGJpbmRpbmdfb25fc3ludGF4XzEgPSByZXF1aXJlKFwiLi9iaW5kaW5nX29uX3N5bnRheFwiKTtcbnZhciBCaW5kaW5nSW5XaGVuT25TeW50YXggPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEJpbmRpbmdJbldoZW5PblN5bnRheChiaW5kaW5nKSB7XG4gICAgICAgIHRoaXMuX2JpbmRpbmcgPSBiaW5kaW5nO1xuICAgICAgICB0aGlzLl9iaW5kaW5nV2hlblN5bnRheCA9IG5ldyBiaW5kaW5nX3doZW5fc3ludGF4XzEuQmluZGluZ1doZW5TeW50YXgodGhpcy5fYmluZGluZyk7XG4gICAgICAgIHRoaXMuX2JpbmRpbmdPblN5bnRheCA9IG5ldyBiaW5kaW5nX29uX3N5bnRheF8xLkJpbmRpbmdPblN5bnRheCh0aGlzLl9iaW5kaW5nKTtcbiAgICAgICAgdGhpcy5fYmluZGluZ0luU3ludGF4ID0gbmV3IGJpbmRpbmdfaW5fc3ludGF4XzEuQmluZGluZ0luU3ludGF4KGJpbmRpbmcpO1xuICAgIH1cbiAgICBCaW5kaW5nSW5XaGVuT25TeW50YXgucHJvdG90eXBlLmluUmVxdWVzdFNjb3BlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYmluZGluZ0luU3ludGF4LmluUmVxdWVzdFNjb3BlKCk7XG4gICAgfTtcbiAgICBCaW5kaW5nSW5XaGVuT25TeW50YXgucHJvdG90eXBlLmluU2luZ2xldG9uU2NvcGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9iaW5kaW5nSW5TeW50YXguaW5TaW5nbGV0b25TY29wZSgpO1xuICAgIH07XG4gICAgQmluZGluZ0luV2hlbk9uU3ludGF4LnByb3RvdHlwZS5pblRyYW5zaWVudFNjb3BlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYmluZGluZ0luU3ludGF4LmluVHJhbnNpZW50U2NvcGUoKTtcbiAgICB9O1xuICAgIEJpbmRpbmdJbldoZW5PblN5bnRheC5wcm90b3R5cGUud2hlbiA9IGZ1bmN0aW9uIChjb25zdHJhaW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9iaW5kaW5nV2hlblN5bnRheC53aGVuKGNvbnN0cmFpbnQpO1xuICAgIH07XG4gICAgQmluZGluZ0luV2hlbk9uU3ludGF4LnByb3RvdHlwZS53aGVuVGFyZ2V0TmFtZWQgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYmluZGluZ1doZW5TeW50YXgud2hlblRhcmdldE5hbWVkKG5hbWUpO1xuICAgIH07XG4gICAgQmluZGluZ0luV2hlbk9uU3ludGF4LnByb3RvdHlwZS53aGVuVGFyZ2V0SXNEZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYmluZGluZ1doZW5TeW50YXgud2hlblRhcmdldElzRGVmYXVsdCgpO1xuICAgIH07XG4gICAgQmluZGluZ0luV2hlbk9uU3ludGF4LnByb3RvdHlwZS53aGVuVGFyZ2V0VGFnZ2VkID0gZnVuY3Rpb24gKHRhZywgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JpbmRpbmdXaGVuU3ludGF4LndoZW5UYXJnZXRUYWdnZWQodGFnLCB2YWx1ZSk7XG4gICAgfTtcbiAgICBCaW5kaW5nSW5XaGVuT25TeW50YXgucHJvdG90eXBlLndoZW5JbmplY3RlZEludG8gPSBmdW5jdGlvbiAocGFyZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9iaW5kaW5nV2hlblN5bnRheC53aGVuSW5qZWN0ZWRJbnRvKHBhcmVudCk7XG4gICAgfTtcbiAgICBCaW5kaW5nSW5XaGVuT25TeW50YXgucHJvdG90eXBlLndoZW5QYXJlbnROYW1lZCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9iaW5kaW5nV2hlblN5bnRheC53aGVuUGFyZW50TmFtZWQobmFtZSk7XG4gICAgfTtcbiAgICBCaW5kaW5nSW5XaGVuT25TeW50YXgucHJvdG90eXBlLndoZW5QYXJlbnRUYWdnZWQgPSBmdW5jdGlvbiAodGFnLCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYmluZGluZ1doZW5TeW50YXgud2hlblBhcmVudFRhZ2dlZCh0YWcsIHZhbHVlKTtcbiAgICB9O1xuICAgIEJpbmRpbmdJbldoZW5PblN5bnRheC5wcm90b3R5cGUud2hlbkFueUFuY2VzdG9ySXMgPSBmdW5jdGlvbiAoYW5jZXN0b3IpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JpbmRpbmdXaGVuU3ludGF4LndoZW5BbnlBbmNlc3RvcklzKGFuY2VzdG9yKTtcbiAgICB9O1xuICAgIEJpbmRpbmdJbldoZW5PblN5bnRheC5wcm90b3R5cGUud2hlbk5vQW5jZXN0b3JJcyA9IGZ1bmN0aW9uIChhbmNlc3Rvcikge1xuICAgICAgICByZXR1cm4gdGhpcy5fYmluZGluZ1doZW5TeW50YXgud2hlbk5vQW5jZXN0b3JJcyhhbmNlc3Rvcik7XG4gICAgfTtcbiAgICBCaW5kaW5nSW5XaGVuT25TeW50YXgucHJvdG90eXBlLndoZW5BbnlBbmNlc3Rvck5hbWVkID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JpbmRpbmdXaGVuU3ludGF4LndoZW5BbnlBbmNlc3Rvck5hbWVkKG5hbWUpO1xuICAgIH07XG4gICAgQmluZGluZ0luV2hlbk9uU3ludGF4LnByb3RvdHlwZS53aGVuQW55QW5jZXN0b3JUYWdnZWQgPSBmdW5jdGlvbiAodGFnLCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fYmluZGluZ1doZW5TeW50YXgud2hlbkFueUFuY2VzdG9yVGFnZ2VkKHRhZywgdmFsdWUpO1xuICAgIH07XG4gICAgQmluZGluZ0luV2hlbk9uU3ludGF4LnByb3RvdHlwZS53aGVuTm9BbmNlc3Rvck5hbWVkID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JpbmRpbmdXaGVuU3ludGF4LndoZW5Ob0FuY2VzdG9yTmFtZWQobmFtZSk7XG4gICAgfTtcbiAgICBCaW5kaW5nSW5XaGVuT25TeW50YXgucHJvdG90eXBlLndoZW5Ob0FuY2VzdG9yVGFnZ2VkID0gZnVuY3Rpb24gKHRhZywgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JpbmRpbmdXaGVuU3ludGF4LndoZW5Ob0FuY2VzdG9yVGFnZ2VkKHRhZywgdmFsdWUpO1xuICAgIH07XG4gICAgQmluZGluZ0luV2hlbk9uU3ludGF4LnByb3RvdHlwZS53aGVuQW55QW5jZXN0b3JNYXRjaGVzID0gZnVuY3Rpb24gKGNvbnN0cmFpbnQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JpbmRpbmdXaGVuU3ludGF4LndoZW5BbnlBbmNlc3Rvck1hdGNoZXMoY29uc3RyYWludCk7XG4gICAgfTtcbiAgICBCaW5kaW5nSW5XaGVuT25TeW50YXgucHJvdG90eXBlLndoZW5Ob0FuY2VzdG9yTWF0Y2hlcyA9IGZ1bmN0aW9uIChjb25zdHJhaW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9iaW5kaW5nV2hlblN5bnRheC53aGVuTm9BbmNlc3Rvck1hdGNoZXMoY29uc3RyYWludCk7XG4gICAgfTtcbiAgICBCaW5kaW5nSW5XaGVuT25TeW50YXgucHJvdG90eXBlLm9uQWN0aXZhdGlvbiA9IGZ1bmN0aW9uIChoYW5kbGVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9iaW5kaW5nT25TeW50YXgub25BY3RpdmF0aW9uKGhhbmRsZXIpO1xuICAgIH07XG4gICAgcmV0dXJuIEJpbmRpbmdJbldoZW5PblN5bnRheDtcbn0oKSk7XG5leHBvcnRzLkJpbmRpbmdJbldoZW5PblN5bnRheCA9IEJpbmRpbmdJbldoZW5PblN5bnRheDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2ludmVyc2lmeS9saWIvc3ludGF4L2JpbmRpbmdfaW5fd2hlbl9vbl9zeW50YXguanNcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGxpdGVyYWxfdHlwZXNfMSA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHMvbGl0ZXJhbF90eXBlc1wiKTtcbnZhciBiaW5kaW5nX3doZW5fb25fc3ludGF4XzEgPSByZXF1aXJlKFwiLi9iaW5kaW5nX3doZW5fb25fc3ludGF4XCIpO1xudmFyIEJpbmRpbmdJblN5bnRheCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQmluZGluZ0luU3ludGF4KGJpbmRpbmcpIHtcbiAgICAgICAgdGhpcy5fYmluZGluZyA9IGJpbmRpbmc7XG4gICAgfVxuICAgIEJpbmRpbmdJblN5bnRheC5wcm90b3R5cGUuaW5SZXF1ZXN0U2NvcGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX2JpbmRpbmcuc2NvcGUgPSBsaXRlcmFsX3R5cGVzXzEuQmluZGluZ1Njb3BlRW51bS5SZXF1ZXN0O1xuICAgICAgICByZXR1cm4gbmV3IGJpbmRpbmdfd2hlbl9vbl9zeW50YXhfMS5CaW5kaW5nV2hlbk9uU3ludGF4KHRoaXMuX2JpbmRpbmcpO1xuICAgIH07XG4gICAgQmluZGluZ0luU3ludGF4LnByb3RvdHlwZS5pblNpbmdsZXRvblNjb3BlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9iaW5kaW5nLnNjb3BlID0gbGl0ZXJhbF90eXBlc18xLkJpbmRpbmdTY29wZUVudW0uU2luZ2xldG9uO1xuICAgICAgICByZXR1cm4gbmV3IGJpbmRpbmdfd2hlbl9vbl9zeW50YXhfMS5CaW5kaW5nV2hlbk9uU3ludGF4KHRoaXMuX2JpbmRpbmcpO1xuICAgIH07XG4gICAgQmluZGluZ0luU3ludGF4LnByb3RvdHlwZS5pblRyYW5zaWVudFNjb3BlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9iaW5kaW5nLnNjb3BlID0gbGl0ZXJhbF90eXBlc18xLkJpbmRpbmdTY29wZUVudW0uVHJhbnNpZW50O1xuICAgICAgICByZXR1cm4gbmV3IGJpbmRpbmdfd2hlbl9vbl9zeW50YXhfMS5CaW5kaW5nV2hlbk9uU3ludGF4KHRoaXMuX2JpbmRpbmcpO1xuICAgIH07XG4gICAgcmV0dXJuIEJpbmRpbmdJblN5bnRheDtcbn0oKSk7XG5leHBvcnRzLkJpbmRpbmdJblN5bnRheCA9IEJpbmRpbmdJblN5bnRheDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2ludmVyc2lmeS9saWIvc3ludGF4L2JpbmRpbmdfaW5fc3ludGF4LmpzXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBDb250YWluZXJTbmFwc2hvdCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ29udGFpbmVyU25hcHNob3QoKSB7XG4gICAgfVxuICAgIENvbnRhaW5lclNuYXBzaG90Lm9mID0gZnVuY3Rpb24gKGJpbmRpbmdzLCBtaWRkbGV3YXJlKSB7XG4gICAgICAgIHZhciBzbmFwc2hvdCA9IG5ldyBDb250YWluZXJTbmFwc2hvdCgpO1xuICAgICAgICBzbmFwc2hvdC5iaW5kaW5ncyA9IGJpbmRpbmdzO1xuICAgICAgICBzbmFwc2hvdC5taWRkbGV3YXJlID0gbWlkZGxld2FyZTtcbiAgICAgICAgcmV0dXJuIHNuYXBzaG90O1xuICAgIH07XG4gICAgcmV0dXJuIENvbnRhaW5lclNuYXBzaG90O1xufSgpKTtcbmV4cG9ydHMuQ29udGFpbmVyU25hcHNob3QgPSBDb250YWluZXJTbmFwc2hvdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2ludmVyc2lmeS9saWIvY29udGFpbmVyL2NvbnRhaW5lcl9zbmFwc2hvdC5qc1xuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgZ3VpZF8xID0gcmVxdWlyZShcIi4uL3V0aWxzL2d1aWRcIik7XG52YXIgQ29udGFpbmVyTW9kdWxlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDb250YWluZXJNb2R1bGUocmVnaXN0cnkpIHtcbiAgICAgICAgdGhpcy5ndWlkID0gZ3VpZF8xLmd1aWQoKTtcbiAgICAgICAgdGhpcy5yZWdpc3RyeSA9IHJlZ2lzdHJ5O1xuICAgIH1cbiAgICByZXR1cm4gQ29udGFpbmVyTW9kdWxlO1xufSgpKTtcbmV4cG9ydHMuQ29udGFpbmVyTW9kdWxlID0gQ29udGFpbmVyTW9kdWxlO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaW52ZXJzaWZ5L2xpYi9jb250YWluZXIvY29udGFpbmVyX21vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgTUVUQURBVEFfS0VZID0gcmVxdWlyZShcIi4uL2NvbnN0YW50cy9tZXRhZGF0YV9rZXlzXCIpO1xudmFyIEVSUk9SU19NU0dTID0gcmVxdWlyZShcIi4uL2NvbnN0YW50cy9lcnJvcl9tc2dzXCIpO1xuZnVuY3Rpb24gaW5qZWN0YWJsZSgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICBpZiAoUmVmbGVjdC5oYXNPd25NZXRhZGF0YShNRVRBREFUQV9LRVkuUEFSQU1fVFlQRVMsIHRhcmdldCkgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihFUlJPUlNfTVNHUy5EVVBMSUNBVEVEX0lOSkVDVEFCTEVfREVDT1JBVE9SKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdHlwZXMgPSBSZWZsZWN0LmdldE1ldGFkYXRhKE1FVEFEQVRBX0tFWS5ERVNJR05fUEFSQU1fVFlQRVMsIHRhcmdldCkgfHwgW107XG4gICAgICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoTUVUQURBVEFfS0VZLlBBUkFNX1RZUEVTLCB0eXBlcywgdGFyZ2V0KTtcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9O1xufVxuZXhwb3J0cy5pbmplY3RhYmxlID0gaW5qZWN0YWJsZTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2ludmVyc2lmeS9saWIvYW5ub3RhdGlvbi9pbmplY3RhYmxlLmpzXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBtZXRhZGF0YV8xID0gcmVxdWlyZShcIi4uL3BsYW5uaW5nL21ldGFkYXRhXCIpO1xudmFyIGRlY29yYXRvcl91dGlsc18xID0gcmVxdWlyZShcIi4vZGVjb3JhdG9yX3V0aWxzXCIpO1xuZnVuY3Rpb24gdGFnZ2VkKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIHRhcmdldEtleSwgaW5kZXgpIHtcbiAgICAgICAgdmFyIG1ldGFkYXRhID0gbmV3IG1ldGFkYXRhXzEuTWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xuICAgICAgICBpZiAodHlwZW9mIGluZGV4ID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICBkZWNvcmF0b3JfdXRpbHNfMS50YWdQYXJhbWV0ZXIodGFyZ2V0LCB0YXJnZXRLZXksIGluZGV4LCBtZXRhZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZWNvcmF0b3JfdXRpbHNfMS50YWdQcm9wZXJ0eSh0YXJnZXQsIHRhcmdldEtleSwgbWV0YWRhdGEpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmV4cG9ydHMudGFnZ2VkID0gdGFnZ2VkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaW52ZXJzaWZ5L2xpYi9hbm5vdGF0aW9uL3RhZ2dlZC5qc1xuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgbWV0YWRhdGFfMSA9IHJlcXVpcmUoXCIuLi9wbGFubmluZy9tZXRhZGF0YVwiKTtcbnZhciBkZWNvcmF0b3JfdXRpbHNfMSA9IHJlcXVpcmUoXCIuL2RlY29yYXRvcl91dGlsc1wiKTtcbnZhciBNRVRBREFUQV9LRVkgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzL21ldGFkYXRhX2tleXNcIik7XG5mdW5jdGlvbiBuYW1lZChuYW1lKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIHRhcmdldEtleSwgaW5kZXgpIHtcbiAgICAgICAgdmFyIG1ldGFkYXRhID0gbmV3IG1ldGFkYXRhXzEuTWV0YWRhdGEoTUVUQURBVEFfS0VZLk5BTUVEX1RBRywgbmFtZSk7XG4gICAgICAgIGlmICh0eXBlb2YgaW5kZXggPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIGRlY29yYXRvcl91dGlsc18xLnRhZ1BhcmFtZXRlcih0YXJnZXQsIHRhcmdldEtleSwgaW5kZXgsIG1ldGFkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRlY29yYXRvcl91dGlsc18xLnRhZ1Byb3BlcnR5KHRhcmdldCwgdGFyZ2V0S2V5LCBtZXRhZGF0YSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuZXhwb3J0cy5uYW1lZCA9IG5hbWVkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaW52ZXJzaWZ5L2xpYi9hbm5vdGF0aW9uL25hbWVkLmpzXG4vLyBtb2R1bGUgaWQgPSA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBtZXRhZGF0YV8xID0gcmVxdWlyZShcIi4uL3BsYW5uaW5nL21ldGFkYXRhXCIpO1xudmFyIGRlY29yYXRvcl91dGlsc18xID0gcmVxdWlyZShcIi4vZGVjb3JhdG9yX3V0aWxzXCIpO1xudmFyIE1FVEFEQVRBX0tFWSA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHMvbWV0YWRhdGFfa2V5c1wiKTtcbmZ1bmN0aW9uIGluamVjdChzZXJ2aWNlSWRlbnRpZmllcikge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCB0YXJnZXRLZXksIGluZGV4KSB7XG4gICAgICAgIHZhciBtZXRhZGF0YSA9IG5ldyBtZXRhZGF0YV8xLk1ldGFkYXRhKE1FVEFEQVRBX0tFWS5JTkpFQ1RfVEFHLCBzZXJ2aWNlSWRlbnRpZmllcik7XG4gICAgICAgIGlmICh0eXBlb2YgaW5kZXggPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIGRlY29yYXRvcl91dGlsc18xLnRhZ1BhcmFtZXRlcih0YXJnZXQsIHRhcmdldEtleSwgaW5kZXgsIG1ldGFkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRlY29yYXRvcl91dGlsc18xLnRhZ1Byb3BlcnR5KHRhcmdldCwgdGFyZ2V0S2V5LCBtZXRhZGF0YSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuZXhwb3J0cy5pbmplY3QgPSBpbmplY3Q7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9pbnZlcnNpZnkvbGliL2Fubm90YXRpb24vaW5qZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBtZXRhZGF0YV8xID0gcmVxdWlyZShcIi4uL3BsYW5uaW5nL21ldGFkYXRhXCIpO1xudmFyIGRlY29yYXRvcl91dGlsc18xID0gcmVxdWlyZShcIi4vZGVjb3JhdG9yX3V0aWxzXCIpO1xudmFyIE1FVEFEQVRBX0tFWSA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHMvbWV0YWRhdGFfa2V5c1wiKTtcbmZ1bmN0aW9uIG9wdGlvbmFsKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCB0YXJnZXRLZXksIGluZGV4KSB7XG4gICAgICAgIHZhciBtZXRhZGF0YSA9IG5ldyBtZXRhZGF0YV8xLk1ldGFkYXRhKE1FVEFEQVRBX0tFWS5PUFRJT05BTF9UQUcsIHRydWUpO1xuICAgICAgICBpZiAodHlwZW9mIGluZGV4ID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICBkZWNvcmF0b3JfdXRpbHNfMS50YWdQYXJhbWV0ZXIodGFyZ2V0LCB0YXJnZXRLZXksIGluZGV4LCBtZXRhZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkZWNvcmF0b3JfdXRpbHNfMS50YWdQcm9wZXJ0eSh0YXJnZXQsIHRhcmdldEtleSwgbWV0YWRhdGEpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmV4cG9ydHMub3B0aW9uYWwgPSBvcHRpb25hbDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2ludmVyc2lmeS9saWIvYW5ub3RhdGlvbi9vcHRpb25hbC5qc1xuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgbWV0YWRhdGFfMSA9IHJlcXVpcmUoXCIuLi9wbGFubmluZy9tZXRhZGF0YVwiKTtcbnZhciBkZWNvcmF0b3JfdXRpbHNfMSA9IHJlcXVpcmUoXCIuL2RlY29yYXRvcl91dGlsc1wiKTtcbnZhciBNRVRBREFUQV9LRVkgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzL21ldGFkYXRhX2tleXNcIik7XG5mdW5jdGlvbiB1bm1hbmFnZWQoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIHRhcmdldEtleSwgaW5kZXgpIHtcbiAgICAgICAgdmFyIG1ldGFkYXRhID0gbmV3IG1ldGFkYXRhXzEuTWV0YWRhdGEoTUVUQURBVEFfS0VZLlVOTUFOQUdFRF9UQUcsIHRydWUpO1xuICAgICAgICBkZWNvcmF0b3JfdXRpbHNfMS50YWdQYXJhbWV0ZXIodGFyZ2V0LCB0YXJnZXRLZXksIGluZGV4LCBtZXRhZGF0YSk7XG4gICAgfTtcbn1cbmV4cG9ydHMudW5tYW5hZ2VkID0gdW5tYW5hZ2VkO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaW52ZXJzaWZ5L2xpYi9hbm5vdGF0aW9uL3VubWFuYWdlZC5qc1xuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgbWV0YWRhdGFfMSA9IHJlcXVpcmUoXCIuLi9wbGFubmluZy9tZXRhZGF0YVwiKTtcbnZhciBkZWNvcmF0b3JfdXRpbHNfMSA9IHJlcXVpcmUoXCIuL2RlY29yYXRvcl91dGlsc1wiKTtcbnZhciBNRVRBREFUQV9LRVkgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzL21ldGFkYXRhX2tleXNcIik7XG5mdW5jdGlvbiBtdWx0aUluamVjdChzZXJ2aWNlSWRlbnRpZmllcikge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCB0YXJnZXRLZXksIGluZGV4KSB7XG4gICAgICAgIHZhciBtZXRhZGF0YSA9IG5ldyBtZXRhZGF0YV8xLk1ldGFkYXRhKE1FVEFEQVRBX0tFWS5NVUxUSV9JTkpFQ1RfVEFHLCBzZXJ2aWNlSWRlbnRpZmllcik7XG4gICAgICAgIGlmICh0eXBlb2YgaW5kZXggPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgIGRlY29yYXRvcl91dGlsc18xLnRhZ1BhcmFtZXRlcih0YXJnZXQsIHRhcmdldEtleSwgaW5kZXgsIG1ldGFkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRlY29yYXRvcl91dGlsc18xLnRhZ1Byb3BlcnR5KHRhcmdldCwgdGFyZ2V0S2V5LCBtZXRhZGF0YSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuZXhwb3J0cy5tdWx0aUluamVjdCA9IG11bHRpSW5qZWN0O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvaW52ZXJzaWZ5L2xpYi9hbm5vdGF0aW9uL211bHRpX2luamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgbWV0YWRhdGFfMSA9IHJlcXVpcmUoXCIuLi9wbGFubmluZy9tZXRhZGF0YVwiKTtcbnZhciBkZWNvcmF0b3JfdXRpbHNfMSA9IHJlcXVpcmUoXCIuL2RlY29yYXRvcl91dGlsc1wiKTtcbnZhciBNRVRBREFUQV9LRVkgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzL21ldGFkYXRhX2tleXNcIik7XG5mdW5jdGlvbiB0YXJnZXROYW1lKG5hbWUpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwgdGFyZ2V0S2V5LCBpbmRleCkge1xuICAgICAgICB2YXIgbWV0YWRhdGEgPSBuZXcgbWV0YWRhdGFfMS5NZXRhZGF0YShNRVRBREFUQV9LRVkuTkFNRV9UQUcsIG5hbWUpO1xuICAgICAgICBkZWNvcmF0b3JfdXRpbHNfMS50YWdQYXJhbWV0ZXIodGFyZ2V0LCB0YXJnZXRLZXksIGluZGV4LCBtZXRhZGF0YSk7XG4gICAgfTtcbn1cbmV4cG9ydHMudGFyZ2V0TmFtZSA9IHRhcmdldE5hbWU7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9pbnZlcnNpZnkvbGliL2Fubm90YXRpb24vdGFyZ2V0X25hbWUuanNcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIG1ldGFkYXRhXzEgPSByZXF1aXJlKFwiLi4vcGxhbm5pbmcvbWV0YWRhdGFcIik7XG52YXIgTUVUQURBVEFfS0VZID0gcmVxdWlyZShcIi4uL2NvbnN0YW50cy9tZXRhZGF0YV9rZXlzXCIpO1xudmFyIEVSUk9SU19NU0dTID0gcmVxdWlyZShcIi4uL2NvbnN0YW50cy9lcnJvcl9tc2dzXCIpO1xuZnVuY3Rpb24gcG9zdENvbnN0cnVjdCgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwgcHJvcGVydHlLZXksIGRlc2NyaXB0b3IpIHtcbiAgICAgICAgdmFyIG1ldGFkYXRhID0gbmV3IG1ldGFkYXRhXzEuTWV0YWRhdGEoTUVUQURBVEFfS0VZLlBPU1RfQ09OU1RSVUNULCBwcm9wZXJ0eUtleSk7XG4gICAgICAgIGlmIChSZWZsZWN0Lmhhc093bk1ldGFkYXRhKE1FVEFEQVRBX0tFWS5QT1NUX0NPTlNUUlVDVCwgdGFyZ2V0LmNvbnN0cnVjdG9yKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKEVSUk9SU19NU0dTLk1VTFRJUExFX1BPU1RfQ09OU1RSVUNUX01FVEhPRFMpO1xuICAgICAgICB9XG4gICAgICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoTUVUQURBVEFfS0VZLlBPU1RfQ09OU1RSVUNULCBtZXRhZGF0YSwgdGFyZ2V0LmNvbnN0cnVjdG9yKTtcbiAgICB9O1xufVxuZXhwb3J0cy5wb3N0Q29uc3RydWN0ID0gcG9zdENvbnN0cnVjdDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2ludmVyc2lmeS9saWIvYW5ub3RhdGlvbi9wb3N0X2NvbnN0cnVjdC5qc1xuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcImF0dHJpYnV0ZSB2ZWM0IGFWZXJ0ZXhQb3NpdGlvbjtcXHJcXG5hdHRyaWJ1dGUgdmVjMiBhVGV4dHVyZUNvb3JkO1xcclxcblxcclxcbnZhcnlpbmcgaGlnaHAgdmVjMiB2VGV4dHVyZUNvb3JkO1xcclxcblxcclxcbnZvaWQgbWFpbigpIHtcXHJcXG4gIGdsX1Bvc2l0aW9uID0gYVZlcnRleFBvc2l0aW9uO1xcclxcbiAgdlRleHR1cmVDb29yZCA9IGFUZXh0dXJlQ29vcmQ7XFxyXFxufVxcclxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2hhZGVycy92ZXJ0ZXgtc2hhZGVyLmdsc2xcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJ1bmlmb3JtIHNhbXBsZXIyRCB1QmFja2dyb3VuZFNhbXBsZXI7XFxyXFxudW5pZm9ybSBzYW1wbGVyMkQgdU5vcm1hbE1hcFNhbXBsZXI7XFxyXFxuXFxyXFxucHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xcclxcblxcclxcbnVuaWZvcm0gdmVjMyB1TGlnaHRQb3NpdGlvbjtcXHJcXG51bmlmb3JtIHZlYzMgdVZpZXdlclZlY3RvcjtcXHJcXG51bmlmb3JtIGZsb2F0IGtEO1xcclxcbnVuaWZvcm0gZmxvYXQga1M7XFxyXFxudW5pZm9ybSBmbG9hdCBtO1xcclxcblxcclxcbnZhcnlpbmcgdmVjMiB2VGV4dHVyZUNvb3JkO1xcclxcblxcclxcbnZlYzMgZ2V0Tm9ybWFsVmVjdG9yKCkge1xcclxcbiAgdmVjNCByYXdOb3JtYWxDb2xvciA9IHRleHR1cmUyRCh1Tm9ybWFsTWFwU2FtcGxlciwgdlRleHR1cmVDb29yZCk7XFxyXFxuICB2ZWMzIG5vcm1hbFZlY3RvckJlZm9yZVNjYWxpbmcgPSB2ZWMzKHJhd05vcm1hbENvbG9yLnh5ICogMi4wIC0gMS4wLCByYXdOb3JtYWxDb2xvci56KTtcXHJcXG4gIHZlYzMgbm9ybWFsVmVjdG9yQWZ0ZXJTY2FsaW5nID0gbm9ybWFsVmVjdG9yQmVmb3JlU2NhbGluZyAvIG5vcm1hbFZlY3RvckJlZm9yZVNjYWxpbmcuejtcXHJcXG4gIHZlYzMgbm9ybWFsVmVjdG9yID0gbm9ybWFsaXplKG5vcm1hbFZlY3RvckFmdGVyU2NhbGluZyk7XFxyXFxuICBub3JtYWxWZWN0b3IueSAqPSAtMS4wO1xcclxcblxcclxcbiAgcmV0dXJuIG5vcm1hbFZlY3RvcjtcXHJcXG59XFxyXFxuXFxyXFxudmVjMyBnZXREaWZmdXNlQ29tcG9uZW50KHZlYzQgdGV4dHVyZUNvbG9yLCB2ZWMzIG5vcm1hbFZlY3RvciwgdmVjMyBsaWdodFZlY3Rvcikge1xcclxcbiAgZmxvYXQgY29zaW5lID0gbWF4KDAuMCwgZG90KG5vcm1hbFZlY3RvciwgbGlnaHRWZWN0b3IpKTtcXHJcXG5cXHJcXG4gIHJldHVybiB0ZXh0dXJlQ29sb3IucmdiICogY29zaW5lO1xcclxcbn1cXHJcXG5cXHJcXG52ZWMzIGdldFNwZWN1bGFyQ29tcG9uZW50KHZlYzMgbm9ybWFsVmVjdG9yLCB2ZWMzIGxpZ2h0VmVjdG9yKSB7XFxyXFxuICB2ZWMzIHIgPSAyLjAgKiBub3JtYWxWZWN0b3IgKiBkb3Qobm9ybWFsVmVjdG9yLCBsaWdodFZlY3RvcikgLSBsaWdodFZlY3RvcjtcXHJcXG4gIGZsb2F0IGNvc2luZSA9IG1heCgwLjAsIGRvdChyLCB1Vmlld2VyVmVjdG9yKSk7XFxyXFxuXFxyXFxuICByZXR1cm4gdmVjMygxLjAsIDEuMCwgMS4wKSAqIHBvdyhjb3NpbmUsIG0pO1xcclxcbn1cXHJcXG5cXHJcXG52b2lkIG1haW4oKSB7XFxyXFxuICB2ZWM0IHRleHR1cmVDb2xvciA9IHRleHR1cmUyRCh1QmFja2dyb3VuZFNhbXBsZXIsIHZUZXh0dXJlQ29vcmQpO1xcclxcbiAgdmVjMyBub3JtYWxWZWN0b3IgPSBnZXROb3JtYWxWZWN0b3IoKTtcXHJcXG4gIHZlYzMgbGlnaHRWZWN0b3IgPSBub3JtYWxpemUodUxpZ2h0UG9zaXRpb24gLSB2ZWMzKHZUZXh0dXJlQ29vcmQsIDAuMCkpO1xcclxcblxcclxcbiAgdmVjMyBkaWZmdXNlQ29tcG9uZW50ID0gZ2V0RGlmZnVzZUNvbXBvbmVudCh0ZXh0dXJlQ29sb3IsIG5vcm1hbFZlY3RvciwgbGlnaHRWZWN0b3IpO1xcclxcbiAgdmVjMyBzcGVjdWxhckNvbXBvbmVudCA9IGdldFNwZWN1bGFyQ29tcG9uZW50KG5vcm1hbFZlY3RvciwgbGlnaHRWZWN0b3IpO1xcclxcblxcclxcbiAgdmVjMyBmaW5hbFRleHR1cmVDb2xvciA9IGtEICogZGlmZnVzZUNvbXBvbmVudCArIGtTICogc3BlY3VsYXJDb21wb25lbnQ7XFxyXFxuICBnbF9GcmFnQ29sb3IgPSB2ZWM0KGZpbmFsVGV4dHVyZUNvbG9yLCAxLjApO1xcclxcbn1cXHJcXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NoYWRlcnMvZnJhZ21lbnQtc2hhZGVyLmdsc2xcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ2V2ZW50ZW1pdHRlcjMnO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIGRlY29yYXRlLCBpbmplY3RhYmxlIH0gZnJvbSAnaW52ZXJzaWZ5JztcclxuXHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uIH0gZnJvbSAnQXBwbGljYXRpb24nO1xyXG5pbXBvcnQgeyBJbWFnZUxvYWRlciB9IGZyb20gJ3NlcnZpY2VzL0ltYWdlTG9hZGVyJztcclxuaW1wb3J0IHsgTGlnaHRTaW11bGF0b3IgfSBmcm9tICdzZXJ2aWNlcy9MaWdodFNpbXVsYXRvcic7XHJcbmltcG9ydCB7IFNoYWRlckxvYWRlciB9IGZyb20gJ3NlcnZpY2VzL1NoYWRlckxvYWRlcic7XHJcbmltcG9ydCB7IFNoYWRlclByb2dyYW1Jbml0aWFsaXplciB9IGZyb20gJ3NlcnZpY2VzL1NoYWRlclByb2dyYW1Jbml0aWFsaXplcic7XHJcbmltcG9ydCB7IFRleHR1cmVMb2FkZXIgfSBmcm9tICdzZXJ2aWNlcy9UZXh0dXJlTG9hZGVyJztcclxuXHJcbmRlY29yYXRlKGluamVjdGFibGUoKSwgRXZlbnRFbWl0dGVyKTtcclxuXHJcbmNvbnN0IGNvbnRhaW5lciA9IG5ldyBDb250YWluZXIoKTtcclxuXHJcbmNvbnRhaW5lci5iaW5kPEFwcGxpY2F0aW9uPihBcHBsaWNhdGlvbikudG9TZWxmKCkuaW5TaW5nbGV0b25TY29wZSgpO1xyXG5jb250YWluZXIuYmluZDxTaGFkZXJMb2FkZXI+KFNoYWRlckxvYWRlcikudG9TZWxmKCk7XHJcbmNvbnRhaW5lci5iaW5kPEltYWdlTG9hZGVyPihJbWFnZUxvYWRlcikudG9TZWxmKCk7XHJcbmNvbnRhaW5lci5iaW5kPFNoYWRlclByb2dyYW1Jbml0aWFsaXplcj4oU2hhZGVyUHJvZ3JhbUluaXRpYWxpemVyKS50b1NlbGYoKTtcclxuY29udGFpbmVyLmJpbmQ8VGV4dHVyZUxvYWRlcj4oVGV4dHVyZUxvYWRlcikudG9TZWxmKCk7XHJcbmNvbnRhaW5lci5iaW5kPExpZ2h0U2ltdWxhdG9yPihMaWdodFNpbXVsYXRvcikudG9TZWxmKCkuaW5TaW5nbGV0b25TY29wZSgpO1xyXG5cclxuZXhwb3J0IHsgY29udGFpbmVyIH07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL25vZGVfbW9kdWxlcy90c2xpbnQtbG9hZGVyIS4vc3JjL2ludmVyc2lmeS5jb25maWcudHMiXSwic291cmNlUm9vdCI6IiJ9