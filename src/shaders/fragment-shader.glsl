uniform sampler2D uBackgroundSampler;
uniform sampler2D uNormalMapSampler;

varying highp vec2 vTextureCoord;

precision highp float;

void main() {
  vec4 textureColor = texture2D(uBackgroundSampler, vTextureCoord);

  vec4 rawNormalColor = texture2D(uNormalMapSampler, vTextureCoord);
  vec3 normalVectorBeforeScaling = vec3(rawNormalColor.xy * 2.0 - 1.0, rawNormalColor.z);
  vec3 normalVectorAfterScaling = normalVectorBeforeScaling / normalVectorBeforeScaling.z;
  vec3 normalVector = normalize(normalVectorAfterScaling);

  float cosine = max(0.0, dot(normalVector, vec3(0.0, 0.0, 1.0)));

  gl_FragColor = vec4(textureColor.rgb * cosine, 1.0);
}
