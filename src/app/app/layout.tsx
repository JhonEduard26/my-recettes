import { getCurrentUser } from '@lib/sqlite/statements'
import { Header } from '@shared/components'

export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const currentUser = await getCurrentUser()

  return (
    <>
      <Header currentUser={currentUser} />
      <main>{children}</main>
    </>
  )
}
