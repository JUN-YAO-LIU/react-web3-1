import React, { useState } from 'react'
import { testAPI } from '../../api/testAPI'


const TestAPIPage = () => {
    testAPI.getTestAPIData().then((data) => {
        console.log(data)
    })

    return (
        <>
            <div>TestAPI</div>
        </>
    )
}


export default TestAPIPage