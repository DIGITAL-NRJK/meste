type KenteDividerProps = {
  className?: string
}

export function KenteDivider({ className = '' }: KenteDividerProps) {
  return <div aria-hidden="true" className={`kente-divider ${className}`.trim()} />
}
