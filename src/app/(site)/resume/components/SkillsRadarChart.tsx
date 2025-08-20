'use client'

import { useEffect, useRef } from 'react'
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js'
import { Radar } from 'react-chartjs-2'
import { Skill } from '@/lib/types/resume'

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend)

interface SkillsRadarChartProps {
  skills: Skill[]
}

export function SkillsRadarChart({ skills }: SkillsRadarChartProps) {
  const chartRef = useRef(null)

  const data = {
    labels: skills.map(skill => skill.name),
    datasets: [
      {
        label: 'Proficiency Level',
        data: skills.map(skill => skill.level),
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(59, 130, 246, 1)',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8,
        fill: true,
      },
      {
        label: 'Years of Experience',
        data: skills.map(skill => Math.min(skill.yearsExperience, 10)), // Normalize to 0-10 scale
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        borderColor: 'rgba(16, 185, 129, 0.8)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(16, 185, 129, 1)',
        pointBorderColor: '#ffffff',
        pointBorderWidth: 2,
        pointRadius: 4,
        pointHoverRadius: 6,
        fill: true,
      }
    ]
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          color: 'rgb(71, 85, 105)', // slate-600
          font: {
            size: 12,
            family: 'Inter, system-ui, sans-serif'
          },
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle'
        }
      },
      tooltip: {
        backgroundColor: 'rgba(15, 23, 42, 0.9)', // slate-900
        titleColor: '#ffffff',
        bodyColor: '#ffffff',
        borderColor: 'rgba(59, 130, 246, 0.5)',
        borderWidth: 1,
        cornerRadius: 8,
        displayColors: true,
        callbacks: {
          afterLabel: function(context: any) {
            const skillIndex = context.dataIndex
            const skill = skills[skillIndex]
            if (context.datasetIndex === 0) {
              return `Level: ${skill.level}/10`
            } else {
              return `Experience: ${skill.yearsExperience} years`
            }
          }
        }
      }
    },
    scales: {
      r: {
        min: 0,
        max: 10,
        beginAtZero: true,
        grid: {
          color: 'rgba(148, 163, 184, 0.3)', // slate-400 with opacity
          lineWidth: 1
        },
        angleLines: {
          color: 'rgba(148, 163, 184, 0.3)',
          lineWidth: 1
        },
        pointLabels: {
          color: 'rgb(51, 65, 85)', // slate-700
          font: {
            size: 11,
            family: 'Inter, system-ui, sans-serif',
            weight: 500
          },
          padding: 10
        },
        ticks: {
          color: 'rgba(100, 116, 139, 0.7)', // slate-500
          backdropColor: 'transparent',
          font: {
            size: 10
          },
          stepSize: 2,
          showLabelBackdrop: false
        }
      }
    },
    elements: {
      line: {
        tension: 0.3,
        borderJoinStyle: 'round' as const,
        borderCapStyle: 'round' as const
      },
      point: {
        hoverBorderWidth: 3
      }
    },
    interaction: {
      intersect: false,
      mode: 'index' as const
    },
    animation: {
      duration: 2000,
      easing: 'easeInOutCubic' as const,
      delay: (context: any) => {
        return context.type === 'data' && context.mode === 'default' ? context.dataIndex * 100 : 0
      }
    }
  }

  return (
    <div className="w-full h-80 relative">
      <Radar 
        ref={chartRef}
        data={data} 
        options={options}
      />
      
      {/* Legend Enhancement */}
      <div className="absolute bottom-0 left-0 right-0 text-center">
        <div className="text-xs text-slate-500 dark:text-slate-400 mt-2">
          Skills radar showing proficiency level and years of experience
        </div>
      </div>
    </div>
  )
}