import { ReactNode } from 'react'

type Props = {
  children: ReactNode;
}

export function Layout({ children, ...props }: Props) {
  return <>
    <style jsx>{`
      .container {
        max-width: 36rem;
        padding: 0 1rem;
        margin: 3rem auto 6rem;
        background: #eee;
      }
    `}</style>
    <div className="container" {...props}>
      {children}
    </div>
  </>
}