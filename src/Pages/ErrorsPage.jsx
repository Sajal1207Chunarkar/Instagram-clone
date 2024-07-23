import React from "react"

function ErrorsPage() {
  return (
    <div style={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        height:'1000vh'

    }}>
        <h1>404-Page Not Found</h1>
        <p 
            onClick={()=>window.history.back()}
            style={{
                color:'blue',
                textDecoration:'underline',
                cursor:'pointer'
            }}>Go back</p>

    </div>
  )
}

export default ErrorsPage

