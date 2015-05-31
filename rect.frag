uniform vec2 u_resolution;

float draw_rect_outline(vec2 st, vec2 sz, vec2 width)
{
    float res = 0;
    sz = vec2(1.0)-(vec2(0.5)+sz*vec2(0.5));
    width = vec2(0.02);
    vec2 lt = step(sz, st);
    vec2 rb = step(sz, vec2(1.0)-st);
    vec2 alt = step(vec2(1.0)-sz+width, vec2(1.0)-st);
    vec2 arb = step(vec2(1.0)-sz+width, st);
    res = lt.x*lt.y*rb.x*rb.y, alt.x;
    res = max(res, max(alt.x, alt.y));
    res = max(res, max(arb.x, arb.y));
    return res;
}

float draw_rect(vec2 st, vec2 sz)
{
    sz = vec2(1.0)-(vec2(0.5)+sz*vec2(0.5));
    vec2 lt = step(sz, st);
    vec2 rb = step(sz, vec2(1.0)-st);
    return lt.x*lt.y*rb.x*rb.y;
}

float draw_rect_smooth(vec2 st, vec2 sz, float off)
{
    sz = vec2(1.0)-(vec2(0.5)+sz*vec2(0.5));
    vec2 szb = sz-vec2(off);
    vec2 sza = sz+vec2(off);
    vec2 lt = smoothstep(szb, sza, st);
    vec2 rb = smoothstep(szb, sza, vec2(1.0)-st);
    return lt.x*lt.y*rb.x*rb.y;
}

void main(){
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    vec3 color = vec3(0.0);

    color = vec3(draw_rect_outline(st-vec2(0.1), vec2(0.3, 0.3), vec2(0.01, 0.08)));

    gl_FragColor = vec4(color,1.0);
}
