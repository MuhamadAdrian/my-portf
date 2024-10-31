import type { RendererElement, RendererNode } from 'vue'

export type AnimationType = 'slide-up' | 'split-word' | 'split-line' | 'split-char'
export type AnimationBehaviour = 'scroll' | 'immediate'

export interface AnimateScrollBehaviour {
  start?: any
  toggleActions?: any
}

export interface CreativeAnimation {
  from?: {
    [x?: string]: any
  }
  to?: {
    [x?: string]: any
  }
}

export interface AnimateParams {
  targets: (RendererNode | null)[]
  animation: AnimationType
  duration: number
  stagger: number
  scroll: boolean
  ease?: string
  scrollBehaviour?: AnimateScrollBehaviour
  delay?: number
  creativeAnimation?: CreativeAnimation
}
