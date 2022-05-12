"use strict";
exports.__esModule = true;
exports.loadOBJMesh = exports.parseFace = exports.parseVec = exports.Object3D = exports.Plane3D = exports.Box3D = void 0;
var gl_matrix_1 = require("gl-matrix");
var math_1 = require("./math");
var Box3D = /** @class */ (function () {
    function Box3D() {
        this.m_VERTICES =
            [
                // Top
                -1.0, 1.0, -1.0,
                -1.0, 1.0, 1.0,
                1.0, 1.0, 1.0,
                1.0, 1.0, -1.0,
                // Left
                -1.0, 1.0, 1.0,
                -1.0, -1.0, 1.0,
                -1.0, -1.0, -1.0,
                -1.0, 1.0, -1.0,
                // Right
                1.0, 1.0, 1.0,
                1.0, -1.0, 1.0,
                1.0, -1.0, -1.0,
                1.0, 1.0, -1.0,
                // Front
                1.0, 1.0, 1.0,
                1.0, -1.0, 1.0,
                -1.0, -1.0, 1.0,
                -1.0, 1.0, 1.0,
                // Back
                1.0, 1.0, -1.0,
                1.0, -1.0, -1.0,
                -1.0, -1.0, -1.0,
                -1.0, 1.0, -1.0,
                // Bottom
                -1.0, -1.0, -1.0,
                -1.0, -1.0, 1.0,
                1.0, -1.0, 1.0,
                1.0, -1.0, -1.0, //0, 1,
            ];
        this.m_INDICES =
            [
                // Top
                0, 1, 2,
                0, 2, 3,
                // Left
                5, 4, 6,
                6, 4, 7,
                // Right
                8, 9, 10,
                8, 10, 11,
                // Front
                13, 12, 14,
                15, 14, 12,
                // Back
                16, 17, 18,
                16, 18, 19,
                // Bottom
                21, 20, 22,
                22, 20, 23
            ];
        this.m_TEXCOORDS = [
            // Front
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
            // Back
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
            // Top
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
            // Bottom
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
            // Right
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0,
            // Left
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0
        ];
        this.m_NORMALS = [
            //top
            0.0, 1.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 1.0, 0.0,
            0.0, 1.0, 0.0,
            // Left
            -1.0, 0.0, 0.0,
            -1.0, 0.0, 0.0,
            -1.0, 0.0, 0.0,
            -1.0, 0.0, 0.0,
            // Right
            1.0, 0.0, 0.0,
            1.0, 0.0, 0.0,
            1.0, 0.0, 0.0,
            1.0, 0.0, 0.0,
            // Front
            0.0, 0.0, 1.0,
            0.0, 0.0, 1.0,
            0.0, 0.0, 1.0,
            0.0, 0.0, 1.0,
            // Back
            0.0, 0.0, -1.0,
            0.0, 0.0, -1.0,
            0.0, 0.0, -1.0,
            0.0, 0.0, -1.0,
            // Bottom
            0.0, -1.0, 0.0,
            0.0, -1.0, 0.0,
            0.0, -1.0, 0.0,
            0.0, -1.0, 0.0, //0, 1,
        ];
        this.m_modelMatrix = gl_matrix_1.mat4.create();
        this.v_position = new math_1.vec3(0, 0, 0);
    }
    return Box3D;
}());
exports.Box3D = Box3D;
var Plane3D = /** @class */ (function () {
    function Plane3D() {
        this.m_VERTICES =
            [
                // Front
                -5.0, 0.0, -5.0,
                -5.0, 0.0, 5.0,
                5.0, 0.0, 5.0,
                5.0, 0.0, -5.0
            ];
        this.m_NORMALS =
            [
                0.0, 1.0, 0.0,
                0.0, 1.0, 0.0,
                0.0, 1.0, 0.0,
                0.0, 1.0, 0.0
            ];
        this.m_INDICES =
            [
                0, 1, 2,
                0, 2, 3
            ];
        this.m_TEXCOORDS = [
            // Front
            0.0, 0.0,
            1.0, 0.0,
            1.0, 1.0,
            0.0, 1.0
        ];
        this.m_modelMatrix = gl_matrix_1.mat4.create();
        this.v_position = new math_1.vec3(0, 0, 0);
    }
    return Plane3D;
}());
exports.Plane3D = Plane3D;
var Object3D = /** @class */ (function () {
    function Object3D() {
        this.m_VERTICES = [];
        this.m_NORMALS = [];
        this.m_TEXCOORDS = [];
        this.m_modelMatrix = gl_matrix_1.mat4.create();
        this.v_position = new math_1.vec3(0, 0, 0);
    }
    return Object3D;
}());
exports.Object3D = Object3D;
function parseVec(string, prefix) {
    return string.replace(prefix, '').split(' ').map(Number);
}
exports.parseVec = parseVec;
function parseFace(string) {
    return string.replace('f ', '').split(' ').map(function (chunk) {
        return chunk.split('/').map(Number);
    });
}
exports.parseFace = parseFace;
function loadOBJMesh(text) {
    var _vertices = [];
    var _normals = [];
    var _texCoords = [];
    var vertexIndices = [];
    var normalIndices = [];
    var texCoordIndices = [];
    text.split('\n').forEach(function (line) {
        if (line.startsWith('v ')) {
            _vertices.push(parseVec(line, 'v '));
        }
        if (line.startsWith('vn ')) {
            _normals.push(parseVec(line, 'vn '));
        }
        if (line.startsWith('vt ')) {
            _texCoords.push(parseVec(line, 'vt '));
        }
        if (line.startsWith('f ')) {
            var parsedFace = parseFace(line);
            vertexIndices.push.apply(vertexIndices, parsedFace.map(function (face) { return face[0]; }));
            texCoordIndices.push.apply(texCoordIndices, parsedFace.map(function (face) { return face[1] - 1; }));
            normalIndices.push.apply(normalIndices, parsedFace.map(function (face) { return face[2] - 1; }));
            // parsedFace.map(face => {
            //     vertexIndices.push(face[0]);
            // })
            console.log(parsedFace);
        }
    });
    // console.log(vertexIndices.join());
    var vertices = [];
    var normals = [];
    var texCoords = [];
    for (var i = 0; i < vertexIndices.length; i++) {
        var vertexIndex = vertexIndices[i];
        var normalIndex = normalIndices[i];
        var texCoordIndex = texCoordIndices[i];
        var vertex = _vertices[vertexIndex];
        var normal = _normals[normalIndex];
        var texCoord = _texCoords[texCoordIndex];
        if (vertex) {
            vertices.push.apply(vertices, vertex);
        }
        if (normal) {
            normals.push.apply(normals, normal);
        }
        if (texCoord) {
            texCoords.push.apply(texCoords, texCoord);
        }
    }
    var mesh = new Object3D();
    mesh.m_VERTICES = new Float32Array(vertices);
    mesh.m_NORMALS = new Float32Array(normals);
    mesh.m_TEXCOORDS = new Float32Array(texCoords);
    mesh.m_INDICES = new Float32Array(vertexIndices);
    return mesh;
}
exports.loadOBJMesh = loadOBJMesh;
