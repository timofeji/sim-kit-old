"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.render = exports.initRenderer = exports.resize = exports.World = exports.Camera = exports.viewMatrix = void 0;
var gl_matrix_1 = require("gl-matrix");
var geometry_1 = require("./geometry");
var math_1 = require("./math");
var IMaterial_1 = require("./types/IMaterial");
var matWorldUniformLocation;
var matModelUniformLocation;
var matViewUniformLocation;
var matProjUniformLocation;
var lightUniformLocation;
var viewPosUniformLocation;
var timeUniformLocation;
var shininessUniformLocation;
var identityMatrix = new Float32Array(16);
gl_matrix_1.mat4.identity(identityMatrix);
var posAttribLocation;
var texAttribLocation;
var nmlAttribLocation;
exports.viewMatrix = new Float32Array(16);
var worldMatrix = new Float32Array(16);
var modelMatrix = new Float32Array(16);
var projMatrix = new Float32Array(16);
var glProgram;
var devTexture;
var texture2;
var Camera = /** @class */ (function () {
    function Camera() {
    }
    return Camera;
}());
exports.Camera = Camera;
var box = new geometry_1.Box3D();
var plane = new geometry_1.Plane3D();
var World = /** @class */ (function () {
    function World() {
        this.camera = new Camera();
        this.camera.v_position = new math_1.vec3(0, 0, 6);
        this.camera.v_lookAt = new math_1.vec3(0, 0, 0);
        this.camera.pitch = 0;
        this.camera.yaw = 0;
        this.camera.dist = 6;
        this.objects = [];
        var box2 = new geometry_1.Box3D();
        var box = new geometry_1.Box3D();
        box2.v_position = new math_1.vec3(0, 2, 0);
        plane.v_position = new math_1.vec3(0, -1, 0);
        box.v_position = new math_1.vec3(2, 0, 0);
    }
    World.prototype.addMesh = function (gl, mesh) {
        //VERTEX BUFFER OBJECT
        mesh.VBO = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, mesh.VBO);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(mesh.m_VERTICES), gl.STATIC_DRAW);
        //TEXTURE BUFFER OBJECT
        mesh.TBO = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, mesh.TBO);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(mesh.m_TEXCOORDS), gl.STATIC_DRAW);
        //NORMAL BUFFER OBJECT
        mesh.NBO = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, mesh.NBO);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(mesh.m_NORMALS), gl.STATIC_DRAW);
        //INDEX BUFFER OBJECT
        mesh.IBO = gl.createBuffer();
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, mesh.IBO);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(mesh.m_INDICES), gl.STATIC_DRAW);
        this.objects.push(mesh);
    };
    return World;
}());
exports.World = World;
function resize(gl, w, h) {
    gl_matrix_1.mat4.perspective(projMatrix, gl_matrix_1.glMatrix.toRadian(90), w / h, 0.1, 1000.0);
    gl.viewport(0, 0, w, h);
    gl.uniformMatrix4fv(matProjUniformLocation, false, projMatrix);
}
exports.resize = resize;
function initRenderer(game) {
    return __awaiter(this, void 0, void 0, function () {
        var gl, fragShader, vertShader, obj, teapot, model, vertexShader, fragmentShader, boxer, plane, image, image2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    gl = game.gl;
                    return [4 /*yield*/, fetch("../shaders/frag.glsl")];
                case 1: return [4 /*yield*/, (_a.sent()).text()];
                case 2:
                    fragShader = _a.sent();
                    return [4 /*yield*/, fetch("../shaders/vert.glsl")];
                case 3: return [4 /*yield*/, (_a.sent()).text()];
                case 4:
                    vertShader = _a.sent();
                    return [4 /*yield*/, fetch("../assets/monkey.obj")];
                case 5: return [4 /*yield*/, (_a.sent()).text()];
                case 6:
                    obj = _a.sent();
                    return [4 /*yield*/, fetch("../assets/teapot.obj")];
                case 7: return [4 /*yield*/, (_a.sent()).text()];
                case 8:
                    teapot = _a.sent();
                    model = (0, geometry_1.loadOBJMesh)(obj);
                    gl.clearColor(0.1, 0.07, 0.07, 1);
                    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
                    gl.enable(gl.DEPTH_TEST);
                    gl.enable(gl.CULL_FACE);
                    gl.frontFace(gl.CCW);
                    gl.cullFace(gl.BACK);
                    vertexShader = buildShader(gl, vertShader, gl.VERTEX_SHADER);
                    fragmentShader = buildShader(gl, fragShader, gl.FRAGMENT_SHADER);
                    // Create program
                    glProgram = gl.createProgram();
                    // Attach and link shaders to the program
                    gl.attachShader(glProgram, vertexShader);
                    gl.attachShader(glProgram, fragmentShader);
                    gl.linkProgram(glProgram);
                    if (!gl.getProgramParameter(glProgram, gl.LINK_STATUS)) {
                        console.error("ERROR linking program!", gl.getProgramInfoLog(glProgram));
                        return [2 /*return*/];
                    }
                    gl.validateProgram(glProgram);
                    if (!gl.getProgramParameter(glProgram, gl.VALIDATE_STATUS)) {
                        console.error("ERROR validating program!", gl.getProgramInfoLog(glProgram));
                        return [2 /*return*/];
                    }
                    posAttribLocation = gl.getAttribLocation(glProgram, "a_position");
                    texAttribLocation = gl.getAttribLocation(glProgram, "a_texCoord");
                    nmlAttribLocation = gl.getAttribLocation(glProgram, "a_normal");
                    boxer = new geometry_1.Box3D();
                    boxer.v_position = new math_1.vec3(2, 0, 0);
                    model.v_position = new math_1.vec3(0, 4, 0);
                    plane = new geometry_1.Plane3D();
                    plane.v_position = new math_1.vec3(0, -1, 0);
                    game.world.addMesh(game.gl, box);
                    game.world.addMesh(game.gl, plane);
                    game.world.addMesh(game.gl, boxer);
                    game.world.addMesh(game.gl, model);
                    devTexture = gl.createTexture();
                    gl.bindTexture(gl.TEXTURE_2D, devTexture);
                    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 255, 255]));
                    texture2 = gl.createTexture();
                    gl.bindTexture(gl.TEXTURE_2D, texture2);
                    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 255, 255]));
                    boxer.material = new IMaterial_1.DefaultMaterial();
                    boxer.material.texture = texture2;
                    image = new Image();
                    image.src = "../assets/dev-texture.png";
                    image.addEventListener("load", function () {
                        // Now that the image has loaded make copy it to the texture.
                        gl.bindTexture(gl.TEXTURE_2D, devTexture);
                        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
                        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
                        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
                        gl.generateMipmap(gl.TEXTURE_2D);
                    });
                    image2 = new Image();
                    image2.src = "../assets/f-texture.png";
                    image2.addEventListener("load", function () {
                        // Now that the image has loaded make copy it to the texture.
                        gl.bindTexture(gl.TEXTURE_2D, texture2);
                        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image2);
                        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
                        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
                        gl.generateMipmap(gl.TEXTURE_2D);
                    });
                    gl.useProgram(glProgram);
                    matWorldUniformLocation = gl.getUniformLocation(glProgram, "u_mWorld");
                    matViewUniformLocation = gl.getUniformLocation(glProgram, "u_mView");
                    matModelUniformLocation = gl.getUniformLocation(glProgram, "u_mModel");
                    matProjUniformLocation = gl.getUniformLocation(glProgram, "u_mProj");
                    lightUniformLocation = gl.getUniformLocation(glProgram, "u_vLightPos");
                    viewPosUniformLocation = gl.getUniformLocation(glProgram, "u_vViewPos");
                    timeUniformLocation = gl.getUniformLocation(glProgram, "fTime");
                    shininessUniformLocation = gl.getUniformLocation(glProgram, "u_shininess");
                    gl_matrix_1.mat4.identity(worldMatrix);
                    gl_matrix_1.mat4.identity(modelMatrix);
                    gl_matrix_1.mat4.lookAt(exports.viewMatrix, [0, 0, 6], [0, 0, 0], [0, 1, 0]);
                    gl_matrix_1.mat4.perspective(projMatrix, gl_matrix_1.glMatrix.toRadian(90), gl.canvas.width / gl.canvas.height, 0.1, 1000.0);
                    gl.viewport(0, 0, window.innerWidth, window.innerHeight);
                    gl.uniformMatrix4fv(matWorldUniformLocation, false, worldMatrix);
                    gl.uniformMatrix4fv(matProjUniformLocation, false, projMatrix);
                    gl.uniformMatrix4fv(matModelUniformLocation, false, modelMatrix);
                    gl.uniformMatrix4fv(matViewUniformLocation, false, exports.viewMatrix);
                    gl.uniform1f(shininessUniformLocation, 110.0);
                    return [2 /*return*/];
            }
        });
    });
}
exports.initRenderer = initRenderer;
function render(game, deltaTime) {
    var gl = game.gl;
    var world = game.world;
    gl.uniform1f(timeUniformLocation, performance.now());
    gl.uniformMatrix4fv(matViewUniformLocation, false, exports.viewMatrix);
    gl.clearColor(0.1, 0.07, 0.07, 1);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.uniform3fv(lightUniformLocation, [Math.sin(performance.now() * 0.005) * 5, 2, Math.cos(performance.now() * 0.005) * 5]);
    gl.uniform3fv(viewPosUniformLocation, [game.world.camera.v_position.X, game.world.camera.v_position.Y, game.world.camera.v_position.Z]);
    world.objects.forEach(function (renderObject) {
        gl_matrix_1.mat4.translate(renderObject.m_modelMatrix, identityMatrix, [renderObject.v_position.X, renderObject.v_position.Y, renderObject.v_position.Z]);
        gl.uniformMatrix4fv(matModelUniformLocation, false, renderObject.m_modelMatrix);
        if (renderObject.material) {
            gl.bindTexture(gl.TEXTURE_2D, renderObject.material.texture);
            gl.activeTexture(gl.TEXTURE0);
        }
        else {
            gl.bindTexture(gl.TEXTURE_2D, devTexture);
            gl.activeTexture(gl.TEXTURE0);
        }
        // VERTEX BUFFER OBJECT
        gl.bindBuffer(gl.ARRAY_BUFFER, renderObject.VBO);
        gl.vertexAttribPointer(posAttribLocation, // Attribute location
        3, // Number of elements per attribute
        gl.FLOAT, // Type of elements
        false, 3 * Float32Array.BYTES_PER_ELEMENT, // Size of an individual vertex
        0 // Offset from the beginning of a single vertex to this attribute
        );
        gl.enableVertexAttribArray(posAttribLocation);
        //NORMAL BUFFER OBJECT
        gl.bindBuffer(gl.ARRAY_BUFFER, renderObject.NBO);
        gl.vertexAttribPointer(nmlAttribLocation, // Attribute location
        3, // Number of elements per attribute
        gl.FLOAT, // Type of elements
        false, 0 * Float32Array.BYTES_PER_ELEMENT, 0);
        gl.enableVertexAttribArray(nmlAttribLocation);
        //TEXTURE BUFFER OBJECT
        gl.bindBuffer(gl.ARRAY_BUFFER, renderObject.TBO);
        gl.vertexAttribPointer(texAttribLocation, // Attribute location
        2, // Number of elements per attribute
        gl.FLOAT, // Type of elements
        false, 2 * Float32Array.BYTES_PER_ELEMENT, 0);
        gl.enableVertexAttribArray(texAttribLocation);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, renderObject.IBO);
        gl.drawElements(gl.TRIANGLES, renderObject.m_INDICES.length, gl.UNSIGNED_SHORT, 0);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
    });
}
exports.render = render;
function buildShader(gl, src, type) {
    var shader = gl.createShader(type);
    gl.shaderSource(shader, src);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        alert("Error compiling shader: " + gl.getShaderInfoLog(shader));
        return;
    }
    return shader;
}
