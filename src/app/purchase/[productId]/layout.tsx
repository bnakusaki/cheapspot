import Header from "../../../components/header/header";

export default function Layout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html>
      <body className="flex flex-col h-screen justify-start">
        <header>
            <Header />
        </header>
        <div>{children}</div>
        {/* <footer className="mt-auto">
          <Footer />
        </footer> */}
      </body>
    </html>
  )
}
