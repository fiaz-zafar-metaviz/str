// Central token map — mirrors CSS variables in globals.css
// Use CSS variables (var(--token)) in components whenever possible.
// Use these JS values only when CSS variables can't be used (e.g. canvas, third-party libs).

export const tokens = {
  dark: {
    bg:               'rgb(25, 28, 36)',
    bgCard:           'rgba(255, 255, 255, 0.04)',
    bgInput:          'rgba(255, 255, 255, 0.05)',
    border:           'rgba(255, 255, 255, 0.08)',
    textPrimary:      'rgb(253, 253, 253)',
    textMuted:        '#919191',
    accent:           'rgb(0, 116, 228)',
    accentHover:      'rgb(0, 96, 200)',
    error:            'rgb(217, 83, 79)',
    errorBg:          'rgba(217, 83, 79, 0.15)',
    success:          'rgb(34, 197, 94)',
    btnPrimaryBg:     'rgb(253, 253, 253)',
    btnPrimaryText:   'rgb(25, 28, 36)',
  },
  light: {
    bg:               '#f4f6f9',
    bgCard:           '#ffffff',
    bgInput:          '#f1f3f5',
    border:           'rgba(0, 0, 0, 0.1)',
    textPrimary:      '#111111',
    textMuted:        '#666666',
    accent:           'rgb(0, 116, 228)',
    accentHover:      'rgb(0, 96, 200)',
    error:            'rgb(217, 83, 79)',
    errorBg:          'rgba(217, 83, 79, 0.1)',
    success:          'rgb(22, 163, 74)',
    btnPrimaryBg:     'rgb(0, 116, 228)',
    btnPrimaryText:   '#ffffff',
  },
} as const

export type Theme = keyof typeof tokens
