import { TabBar } from '@shared/components'

export default async function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <main>{children}</main>
      <TabBar />
    </>
  )
}
