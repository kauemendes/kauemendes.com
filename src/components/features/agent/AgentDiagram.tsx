import type { HowItWorksContent } from '@/content/data/how-it-works'

type Labels = HowItWorksContent['diagram']

const W = 390
const BOX_W = 220
const BOX_H = 58
const X = 8
const CX = X + BOX_W / 2
const GAP = 34

/**
 * Caminho de uma pergunta, de cima para baixo. Vertical para caber no celular
 * sem rolagem lateral. Cores só por token (--ink, --ink-muted, --paper, --paper-2),
 * então acompanha o tema claro e o escuro.
 */
export function AgentDiagram({ labels, title }: { labels: Labels; title: string }) {
  const nodes = [
    { name: labels.visitor, sub: '' },
    { name: labels.vercel, sub: labels.vercelSub },
    { name: labels.edge, sub: labels.edgeSub },
    { name: labels.home, sub: labels.homeSub },
    { name: labels.model, sub: labels.modelSub },
  ]
  const top = (i: number) => 8 + i * (BOX_H + GAP)
  const height = top(nodes.length) - GAP + 12

  return (
    <svg
      viewBox={`0 0 ${W} ${height}`}
      role="img"
      aria-label={title}
      className="w-full max-w-[400px] h-auto"
    >
      <title>{title}</title>
      <defs>
        <marker id="agent-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M0 0 L10 5 L0 10 Z" style={{ fill: 'var(--ink)' }} />
        </marker>
      </defs>

      {nodes.map((n, i) => {
        const y = top(i)
        const isEdge = i === 2
        return (
          <g key={n.name}>
            {/* sombra dura do Paper & Ink */}
            <rect x={X + 4} y={y + 4} width={BOX_W} height={BOX_H} style={{ fill: 'var(--ink)' }} />
            <rect
              x={X}
              y={y}
              width={BOX_W}
              height={BOX_H}
              style={{ fill: isEdge ? 'var(--paper-2)' : 'var(--paper)', stroke: 'var(--ink)' }}
              strokeWidth={2}
            />
            <text
              x={CX}
              y={n.sub ? y + 25 : y + 35}
              textAnchor="middle"
              className="font-display"
              style={{ fill: 'var(--ink)', fontSize: 22 }}
            >
              {n.name}
            </text>
            {n.sub && (
              <text
                x={CX}
                y={y + 44}
                textAnchor="middle"
                className="font-mono uppercase"
                style={{ fill: 'var(--ink-muted)', fontSize: 9.5, letterSpacing: '0.12em' }}
              >
                {n.sub}
              </text>
            )}
            {i < nodes.length - 1 && (
              <line
                x1={CX}
                y1={y + BOX_H + 2}
                x2={CX}
                y2={y + BOX_H + GAP - 4}
                style={{ stroke: 'var(--ink)' }}
                strokeWidth={2}
                markerEnd="url(#agent-arrow)"
              />
            )}
          </g>
        )
      })}

      {/* o que a borda barra: chamada sem service token */}
      <g>
        <line
          x1={X + BOX_W + 10}
          y1={top(2) + BOX_H / 2}
          x2={X + BOX_W + 44}
          y2={top(2) + BOX_H / 2}
          style={{ stroke: 'var(--ink-muted)' }}
          strokeWidth={2}
          strokeDasharray="4 3"
        />
        <text
          x={X + BOX_W + 50}
          y={top(2) + BOX_H / 2 + 3.5}
          className="font-mono uppercase"
          style={{ fill: 'var(--ink-muted)', fontSize: 9.5, letterSpacing: '0.1em' }}
        >
          {labels.blocked}
        </text>
      </g>
    </svg>
  )
}
