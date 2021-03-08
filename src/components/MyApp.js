import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import MainContent from "./MainContent"

function MyApp(){
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>

    )

    
}

// export make it avaible to other components of React
export default MyApp

