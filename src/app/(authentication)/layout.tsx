export default function Layout({
    children,
}: {
    children: React.ReactNode,
}) {
    return (
            <body>
                <div>{children}</div>
            </body>
    )
}
