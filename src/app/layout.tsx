import StyledComponentsRegistry from '@/app/_lib/AntdRegistry';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CheapSpot',
  description: 'Your budget friendly haven',
}

function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html>
      <body className={montserrat.className}>
        <StyledComponentsRegistry>
          {children}
          </StyledComponentsRegistry>
        <SpeedInsights />
      </body>
    </html>
  )
}

export default RootLayout;
