// Original vector drawings: hero panels (ART) and small card icons (ICON). Nothing here is traced from a photo.
const svgBox = (inner, bg = '#e8eef1') =>
  `<svg viewBox="0 0 320 132" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg"><rect width="320" height="132" fill="${bg}"/>${inner}</svg>`;
const T = (x, y, txt, o = {}) =>
  `<text x="${x}" y="${y}" font-family="${o.serif ? 'Georgia,serif' : 'Segoe UI,Arial'}" font-size="${o.size || 11}" font-weight="${o.w || 700}" fill="${o.fill || '#16130f'}" text-anchor="${o.a || 'start'}"${o.it ? ' font-style="italic"' : ''}>${txt}</text>`;

const ART = {
  blank: (s) => svgBox(T(160, 70, esc(s.place), { a: 'middle', size: 16 })),

  // Baltic sketch: Estonia beside Russia, the border marked closed from 1 Dec, Moscow's warning in a bubble.
  estonia: () => svgBox(`
    <path d="M0 0 H320 V132 H0Z" fill="#cfe0ea"/>
    <path d="M62 40 L118 34 L150 40 L156 58 L150 82 L120 86 L92 84 L70 76 L60 60Z" fill="#f3ead6" stroke="#7d725e"/>
    <path d="M150 40 L320 22 V132 H120 L120 86 L150 82 L156 58Z" fill="#e3d6bf" stroke="#7d725e"/>
    <path d="M40 92 L92 84 L120 86 L120 132 H30Z" fill="#efe4cc" stroke="#7d725e"/>
    ${T(84, 64, 'ESTONIA', { size: 11 })}${T(66, 110, 'LATVIA', { size: 9, w: 400, fill: '#5d554a' })}
    ${T(214, 110, 'RUSSIA', { size: 13 })}${T(24, 22, 'Gulf of Finland', { size: 8.5, w: 400, it: 1, fill: '#3b5b70' })}
    <path d="M150 40 L156 58 L150 82 L120 86" fill="none" stroke="#b5462e" stroke-width="3" stroke-dasharray="5 3"/>
    <rect x="157" y="88" width="62" height="16" fill="#b5462e"/>${T(188, 100, 'SHUT 1 DEC', { a: 'middle', size: 9, fill: '#fff' })}
    <circle cx="96" cy="48" r="3" fill="#16130f"/>${T(102, 50, 'Tallinn', { size: 8.5, w: 600 })}
    <path d="M186 10 H312 V54 H214 L200 66 L202 54 H186Z" fill="#fff" stroke="#16130f"/>
    ${T(249, 26, '"On the verge of', { a: 'middle', size: 10.5, serif: 1, it: 1 })}
    ${T(249, 41, 'triggering open war"', { a: 'middle', size: 10.5, serif: 1, it: 1 })}
    ${T(249, 51, 'RUSSIAN FOREIGN MINISTRY', { a: 'middle', size: 6.5, fill: '#5d554a' })}`),

  // Mediterranean off Benghazi: a corvette going down, sea-drone wakes converging, the count of drones.
  libya: () => svgBox(`
    <path d="M0 0 H320 V132 H0Z" fill="#bfd8e6"/>
    <path d="M0 98 C60 92 90 104 130 100 C170 96 190 86 230 92 C262 96 290 90 320 94 V132 H0Z" fill="#ead9b5" stroke="#9c8a63"/>
    ${T(250, 120, 'LIBYA', { size: 12 })}<circle cx="214" cy="93" r="3" fill="#16130f"/>${T(196, 112, 'Benghazi', { size: 8.5, w: 600, a: 'middle' })}
    <g transform="rotate(14 150 52)">
      <path d="M96 54 H200 L190 66 H108Z" fill="#5b6470" stroke="#2b3036"/>
      <rect x="132" y="40" width="34" height="14" fill="#6c7581"/><rect x="146" y="28" width="6" height="12" fill="#6c7581"/>
    </g>
    <path d="M92 74 C120 70 170 82 210 78" fill="none" stroke="#fff" stroke-width="2" opacity=".8"/>
    <path d="M140 46 C134 34 146 26 140 14 M156 50 C164 38 152 30 160 18" stroke="#4a4a4a" stroke-width="5" fill="none" opacity=".45" stroke-linecap="round"/>
    ${[[18, 30], [26, 58], [30, 84], [292, 34], [298, 62], [60, 16], [256, 14]].map(([x, y]) =>
      `<path d="M${x} ${y} L${x < 160 ? x + 9 : x - 9} ${y + 3} L${x} ${y + 6}Z" fill="#16130f"/><path d="M${x < 160 ? x + 12 : x - 12} ${y + 3} L${x < 160 ? 118 : 182} ${54 + (y - 50) / 4}" stroke="#16130f" stroke-width=".8" stroke-dasharray="3 2"/>`).join('')}
    <rect x="8" y="104" width="94" height="22" fill="#fff" stroke="#16130f"/>${T(55, 119, '7 SEA DRONES', { a: 'middle', size: 11, fill: '#c07a12' })}
    ${T(150, 22, 'CORVETTE MERKURY, CLAIMS KYIV', { a: 'middle', size: 8.5 })}`),

  // Price line that jumps on the day, with the numbers that matter.
  nvidia: () => svgBox(`
    <rect x="0" y="0" width="320" height="132" fill="#eef3ea"/>
    ${[30, 60, 90].map((y) => `<line x1="20" y1="${y}" x2="210" y2="${y}" stroke="#cdd8c7"/>`).join('')}
    <polyline points="20,96 40,92 60,98 80,104 100,100 120,108 140,104 160,110 180,106" fill="none" stroke="#5d554a" stroke-width="2"/>
    <polyline points="180,106 200,40 210,34" fill="none" stroke="#2e8a57" stroke-width="3.5"/>
    <circle cx="210" cy="34" r="4" fill="#2e8a57"/>
    ${T(22, 124, 'Nvidia shares (sketch): Huang quit 12 Nov, back 23 Nov', { size: 8, w: 400, fill: '#5d554a' })}
    ${T(266, 34, '+31%', { a: 'middle', size: 30, serif: 1, fill: '#2e8a57' })}
    ${T(266, 48, 'NVIDIA, $165.05', { a: 'middle', size: 8.5 })}
    <line x1="222" y1="58" x2="312" y2="58" stroke="#16130f"/>
    ${T(266, 74, 'Nasdaq +6.51%', { a: 'middle', size: 11 })}
    ${T(266, 90, 'S&amp;P 500 +4.73%', { a: 'middle', size: 11 })}
    ${T(266, 106, 'Dow +1,448 pts', { a: 'middle', size: 11 })}
    <rect x="34" y="12" width="132" height="18" fill="#16130f"/>${T(100, 25, 'HUANG BACK AS CEO', { a: 'middle', size: 10, fill: '#fff' })}`),
};

const ICON = {
  stars: (c) => `<svg viewBox="0 0 46 40"><rect x="3" y="4" width="40" height="30" fill="${c}"/>${Array.from({ length: 12 }, (_, i) => {
    const a = (i / 12) * 2 * Math.PI; return `<circle cx="${(23 + Math.cos(a) * 10).toFixed(1)}" cy="${(19 + Math.sin(a) * 10).toFixed(1)}" r="1.7" fill="#ffd34a"/>`; }).join('')}</svg>`,
  plane: (c) => `<svg viewBox="0 0 46 40"><path d="M6 22 L40 14 L42 18 L28 22 L22 34 L18 34 L20 24 L10 26 L8 30 L5 30Z" fill="#555"/><circle cx="23" cy="20" r="17" fill="none" stroke="${c}" stroke-width="3"/><line x1="11" y1="8" x2="35" y2="32" stroke="${c}" stroke-width="3"/></svg>`,
  bank: (c) => `<svg viewBox="0 0 46 40"><path d="M5 14 L23 4 L41 14Z" fill="${c}"/>${[9, 17, 25, 33].map((x) => `<rect x="${x}" y="16" width="4" height="15" fill="${c}"/>`).join('')}<rect x="5" y="32" width="36" height="4" fill="${c}"/><line x1="4" y1="38" x2="42" y2="2" stroke="#16130f" stroke-width="2.5"/></svg>`,
  flood: (c) => `<svg viewBox="0 0 46 40"><path d="M10 24 L10 12 L20 5 L30 12 L30 24Z" fill="#c9b99a"/><path d="M2 24 Q8 20 14 24 T26 24 T38 24 T46 24 V40 H2Z" fill="${c}" opacity=".85"/><path d="M2 31 Q8 27 14 31 T26 31 T38 31 T46 31" stroke="#fff" fill="none"/></svg>`,
  down: (c) => `<svg viewBox="0 0 46 40"><polyline points="4,8 14,14 22,10 32,24 42,32" fill="none" stroke="${c}" stroke-width="3"/><path d="M42 32 L34 32 L42 24Z" fill="${c}"/></svg>`,
  scales: (c) => `<svg viewBox="0 0 46 40"><line x1="23" y1="4" x2="23" y2="34" stroke="${c}" stroke-width="2.5"/><line x1="8" y1="10" x2="38" y2="10" stroke="${c}" stroke-width="2.5"/><path d="M3 22 L8 11 L13 22Z M33 22 L38 11 L43 22Z" fill="none" stroke="${c}" stroke-width="1.5"/><path d="M3 22 Q8 27 13 22Z M33 22 Q38 27 43 22Z" fill="${c}"/><rect x="15" y="34" width="16" height="3" fill="${c}"/></svg>`,
  chip: (c) => `<svg viewBox="0 0 46 40"><rect x="12" y="9" width="22" height="22" rx="2" fill="${c}"/>${[13, 19, 25, 31].map((v) => `<line x1="${v + 1}" y1="3" x2="${v + 1}" y2="9" stroke="${c}" stroke-width="2"/><line x1="${v + 1}" y1="31" x2="${v + 1}" y2="37" stroke="${c}" stroke-width="2"/>`).join('')}<text x="23" y="24" font-size="9" font-weight="700" fill="#fff" text-anchor="middle" font-family="Segoe UI,Arial">AI</text></svg>`,
  gavel: (c) => `<svg viewBox="0 0 46 40"><rect x="10" y="6" width="22" height="10" rx="2" transform="rotate(-30 21 11)" fill="${c}"/><line x1="22" y1="16" x2="38" y2="32" stroke="${c}" stroke-width="4"/><rect x="4" y="32" width="22" height="5" fill="#5d554a"/></svg>`,
};
