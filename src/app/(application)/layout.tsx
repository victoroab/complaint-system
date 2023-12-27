import { LayoutNav } from './layout-nav'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <LayoutNav>{children}</LayoutNav>
}
