export default /* glsl */`
uniform float time;
uniform vec3 color;
varying vec2 vUv;

void main() {
    vec2 uv = vUv - 0.5;
    float r = length(uv);
    
    // Core glow
    float coreIntensity = 1.0 - smoothstep(0.0, 0.5, r);
    
    // Outer glow
    float outerGlow = 1.0 - smoothstep(0.4, 1.0, r);
    
    // Pulsating effect
    float pulse = sin(time / 2.0) * 0.05 + 0.95;
    
    // Combine effects
    float finalIntensity = (coreIntensity + outerGlow * 0.3) * pulse;
    
    // Apply color
    vec3 finalColor = color * finalIntensity;
    
    gl_FragColor = vec4(finalColor, 1.0);
}`