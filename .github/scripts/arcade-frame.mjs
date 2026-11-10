// Wraps the generated Pac-Man SVG in an arcade cabinet frame (neon border + HUD).
// Usage: node arcade-frame.mjs <in.svg> <out.svg> <dark|light> <player> <score>
import { readFileSync, writeFileSync } from 'node:fs'

const [inFile, outFile, theme = 'dark', player = 'PLAYER', score = '0'] = process.argv.slice(2)
const inner = readFileSync(inFile, 'utf8')
const m = inner.match(/<svg[^>]*\swidth="(\d+)"[^>]*\sheight="(\d+)"/)
if (!m) throw new Error(`no width/height on the root <svg> of ${inFile}`)
const [w, h] = [Number(m[1]), Number(m[2])]

const pad = 24, top = 58, bottom = 46
const W = w + pad * 2, H = h + top + bottom
const dark = theme === 'dark'
const c = dark
  ? { bg: '#05070d', screen: '#0d1117', text: '#e6edf3', dim: '#7d8590', coin: '#ffd400' }
  : { bg: '#ffffff', screen: '#ffffff', text: '#1f2328', dim: '#656d76', coin: '#b88600' }
const hi = String(score).replace(/\D/g, '').padStart(6, '0')
const esc = s => String(s).replace(/[<>&"]/g, ch => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' })[ch])

const nested = inner.replace(/<svg\b/, `<svg x="${pad}" y="${top}"`).replace(/<\?xml[^>]*\?>/, '')

const out = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="neon" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#2de2e6"/><stop offset="0.5" stop-color="#7b5cff"/><stop offset="1" stop-color="#ff3cac"/>
    </linearGradient>
    <filter id="glow" x="-5%" y="-20%" width="110%" height="140%">
      <feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect x="3" y="3" width="${W - 6}" height="${H - 6}" rx="18" fill="${c.bg}" stroke="url(#neon)" stroke-width="3" filter="url(#glow)"/>
  <rect x="${pad - 6}" y="${top - 6}" width="${w + 12}" height="${h + 12}" rx="8" fill="${c.screen}" stroke="url(#neon)" stroke-opacity="0.35"/>
  <g font-family="'Press Start 2P','Courier New',monospace" font-weight="700" letter-spacing="2">
    <text x="${pad}" y="26" font-size="13" fill="#ff3b3b">1UP</text>
    <text x="${pad}" y="44" font-size="15" fill="${c.text}">${esc(player.toUpperCase())}</text>
    <text x="${W / 2}" y="26" font-size="13" fill="#ff3b3b" text-anchor="middle">HI-SCORE</text>
    <text x="${W / 2}" y="44" font-size="15" fill="${c.text}" text-anchor="middle">${hi}</text>
    <text x="${W - pad}" y="26" font-size="13" fill="#ff3b3b" text-anchor="end">STAGE</text>
    <text x="${W - pad}" y="44" font-size="15" fill="${c.text}" text-anchor="end">${new Date().getUTCFullYear()}</text>
    <text x="${W / 2}" y="${H - 16}" font-size="13" fill="${c.coin}" text-anchor="middle">INSERT COIN
      <animate attributeName="opacity" values="1;1;0;0" keyTimes="0;0.5;0.5;1" dur="1.2s" repeatCount="indefinite"/>
    </text>
    <text x="${pad}" y="${H - 16}" font-size="11" fill="${c.dim}">CONTRIBUTIONS · LAST 12 MONTHS</text>
    <text x="${W - pad}" y="${H - 16}" font-size="11" fill="${c.dim}" text-anchor="end">CREDIT 00</text>
  </g>
  ${nested}
</svg>
`
writeFileSync(outFile, out)
console.log(`${outFile}: ${W}x${H}, hi-score ${hi}`)
