import { AuthProvider } from '../../auth/AuthProvider'
import { LayoutNav } from './layout-nav'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <LayoutNav>{children}</LayoutNav>
    </AuthProvider>
  )
}