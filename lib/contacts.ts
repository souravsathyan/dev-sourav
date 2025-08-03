export interface Action {
  icon: React.ReactNode
  label: string
  content: string
  onClick: (content: string) => void
}
