import { PropsWithChildren } from 'react'
import QueryProvider from './QueryClient'


const Providers = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <QueryProvider>
        {children}
      </QueryProvider>
    </div>
  )
}

export default Providers