'use client'
import { useEffect, useRef } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) } }),
      { threshold: 0.12 }
    )
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])
}

export function useCountUp() {
  useEffect(() => {
    const counters = document.querySelectorAll<HTMLElement>('.count-up[data-target]')
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return
        const el = e.target as HTMLElement
        const target = parseInt(el.dataset.target || '0')
        const suffix = el.dataset.suffix || ''
        let current = 0
        const step = target / 60
        const timer = setInterval(() => {
          current = Math.min(current + step, target)
          el.textContent = Math.floor(current).toLocaleString() + suffix
          if (current >= target) clearInterval(timer)
        }, 20)
        obs.unobserve(el)
      })
    }, { threshold: 0.5 })
    counters.forEach(c => obs.observe(c))
    return () => obs.disconnect()
  }, [])
}
