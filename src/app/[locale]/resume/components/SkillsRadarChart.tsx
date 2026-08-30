'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js'
import { Radar } from 'react-chartjs-2'
import { useTranslations } from 'next-intl'
import { Skill } from '@/lib/types/resume'

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

/**
 * Chart.js paints to canvas and cannot read CSS custom properties, so the paper
 * tokens are mirrored here per theme. Keep in sync with globals.css.
 */
const palettes = {
  light: {
    ink: '#1a1a19',
    inkSoft: '#4a4a47',
    inkMuted: '#8a8778',
    rule: '#d9d4c2',
    paper: '#f0eee6',
    accent: '#0f7a57',
  },
  dark: {
    ink: '#edeae0',
    inkSoft: '#b6b2a4',
    inkMuted: '#86836f',
    rule: '#34332a',
    paper: '#14140f',
    accent: '#2ee6a6',
  },
} as const

interface SkillsRadarChartProps {
  skills: Skill[]
}

export function SkillsRadarChart({ skills }: SkillsRadarChartProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const t = useTranslations('resume')

  useEffect(() => setMounted(true), [])

  // Render nothing until the theme resolves, so the canvas is painted once in
  // the correct palette rather than flashing the wrong one.
  if (!mounted) {
    return <div className="w-full aspect-square max-w-md mx-auto" aria-hidden="true" />
  }

  const c = resolvedTheme === 'dark' ? palettes.dark : palettes.light

  const hexToRgba = (hex: string, alpha: number) => {
    const value = parseInt(hex.slice(1), 16)
    const r = (value >> 16) & 255
    const g = (value >> 8) & 255
    const b = value & 255
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  }

  const data = {
    labels: skills.map(skill => skill.name),
    datasets: [
      {
        label: t('skillsSection.proficiency'),
        data: skills.map(skill => skill.level),
        backgroundColor: hexToRgba(c.accent, 0.18),
        borderColor: c.accent,
        borderWidth: 2,
        pointBackgroundColor: c.accent,
        pointBorderColor: c.paper,
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7,
        fill: true,
      },
      {
        label: t('experience'),
        data: skills.map(skill => Math.min(skill.yearsExperience, 10)),
        backgroundColor: hexToRgba(c.ink, 0.08),
        borderColor: c.inkSoft,
        borderWidth: 2,
        borderDash: [4, 3],
        pointBackgroundColor: c.inkSoft,
        pointBorderColor: c.paper,
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
        fill: true,
      }
    ]
  }

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          color: c.inkSoft,
          font: { family: 'var(--font-jetbrains-mono), monospace', size: 11 },
          boxWidth: 12,
          boxHeight: 12,
          padding: 16,
          usePointStyle: false,
        },
      },
      tooltip: {
        backgroundColor: c.ink,
        titleColor: c.paper,
        bodyColor: c.paper,
        borderColor: c.accent,
        borderWidth: 2,
        cornerRadius: 0,
        titleFont: { family: 'var(--font-jetbrains-mono), monospace', size: 11 },
        bodyFont: { family: 'var(--font-jetbrains-mono), monospace', size: 11 },
        padding: 10,
      },
    },
    scales: {
      r: {
        beginAtZero: true,
        max: 10,
        ticks: {
          stepSize: 2,
          color: c.inkMuted,
          backdropColor: 'transparent',
          font: { family: 'var(--font-jetbrains-mono), monospace', size: 10 },
        },
        grid: { color: c.rule },
        angleLines: { color: c.rule },
        pointLabels: {
          color: c.inkSoft,
          font: { family: 'var(--font-jetbrains-mono), monospace', size: 10 },
        },
      },
    },
  }

  return (
    <div className="w-full aspect-square max-w-md mx-auto">
      <Radar data={data} options={options} />
    </div>
  )
}
