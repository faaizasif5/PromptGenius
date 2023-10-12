import '@styles/globals.css';

import Nav from '@components/Nav';
import Provider from '@components/Provider';
import Providers  from '@app/redux/provider';

export const metadata = {
    title: "PromptWhiz",
    description: "Unlock Creativity with AI-Powered Prompts"
}
const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <body>
            <Provider>
                <div className='main'>
                    <div className='gradient' />
                </div>

                <main className='app'>
                    <Nav/>
                    <Providers>
                        {children}
                    </Providers>
                </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout