import React from "react"

const BrokenPage = ({message = "Something Went Wrong"}) => (
    <div>
        <p>{message}</p>
    </div>
)

export default BrokenPage;