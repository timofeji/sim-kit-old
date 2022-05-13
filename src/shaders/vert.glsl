precision mediump float;

attribute vector3 a_position;
attribute vector3 a_normal;
attribute vec2 a_texCoord;

uniform mat4 u_mWorld;
uniform mat4 u_mModel;
uniform mat4 u_mView;
uniform mat4 u_mProj;

uniform vector3 u_vViewPos;
uniform vector3 u_vLightPos;

varying vec2 vTexCoord;
varying vector3 vNormals;
varying vector3 vSurfaceToLight;
varying vector3 vSurfaceToView;


void main()
{
  vNormals = mat3(u_mModel) * a_normal;
  vTexCoord = a_texCoord;

  vector3 surfaceWorldPosition = (mat3(u_mModel) * a_position).xyz;
  vSurfaceToLight = u_vLightPos - surfaceWorldPosition;
  vSurfaceToView =  u_vViewPos - surfaceWorldPosition;


  gl_Position = u_mProj * u_mView  * u_mModel *vec4(a_position, 1.0);
}