uniform sampler2D uBackgroundSampler;
uniform sampler2D uNormalMapSampler;

precision highp float;

uniform vec3 uLightPosition;
uniform vec3 uViewerVector;
uniform float kD;
uniform float kS;
uniform float m;

varying vec2 vTextureCoord;

vec3 getNormalVector() {
  vec4 rawNormalColor = texture2D(uNormalMapSampler, vTextureCoord);
  vec3 normalVectorBeforeScaling = vec3(rawNormalColor.xy * 2.0 - 1.0, rawNormalColor.z);
  vec3 normalVectorAfterScaling = normalVectorBeforeScaling / normalVectorBeforeScaling.z;
  vec3 normalVector = normalize(normalVectorAfterScaling);
  normalVector.y *= -1.0;

  return normalVector;
}

vec3 getDiffuseComponent(vec4 textureColor, vec3 normalVector, vec3 lightVector) {
  float cosine = max(0.0, dot(normalVector, lightVector));

  return textureColor.rgb * cosine;
}

vec3 getSpecularComponent(vec3 normalVector, vec3 lightVector) {
  vec3 r = 2.0 * normalVector * dot(normalVector, lightVector) - lightVector;
  float cosine = max(0.0, dot(r, uViewerVector));

  return vec3(1.0, 1.0, 1.0) * pow(cosine, m);
}

void main() {
  vec4 textureColor = texture2D(uBackgroundSampler, vTextureCoord);
  vec3 normalVector = getNormalVector();
  vec3 lightVector = normalize(uLightPosition - vec3(vTextureCoord, 0.0));

  vec3 diffuseComponent = getDiffuseComponent(textureColor, normalVector, lightVector);
  vec3 specularComponent = getSpecularComponent(normalVector, lightVector);

  vec3 finalTextureColor = kD * diffuseComponent + kS * specularComponent;
  gl_FragColor = vec4(finalTextureColor, 1.0);
}
