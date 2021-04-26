import React from 'react'
import Header from './Header'

const DefaultLayout = ({ children }) => {
    return (
        <div>
            <Header brand="Gulers React Router"></Header>
            <main>
                {children}
            </main>
        </div>
    )
}

export default DefaultLayout
