uniform vec2 u_resolution;

float circle(vec2 st, float rad)
{
    float color = 0.0;
    rad = 1.0-rad;
    color = distance(st, vec2(0.5));
    color = smoothstep(rad-0.004, rad+0.004, 1.0-color);
    return color;
}

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 circle1 = circle(st+vec2(0.1, 0.2), 0.1)*vec3(1.,0.,0.);
    vec3 circle2 = circle(st+vec2(0.2, 0.3), 0.1)*vec3(0.,.8,0.);
    vec3 circle3 = circle(st+vec2(0.4, 0.2), 0.1)*vec3(0.,.0,0.7);
    gl_FragColor = vec4(circle1+circle2+circle3, 1.0);
}
