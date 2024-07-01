"use client";
import React, { useEffect, useState } from 'react'


type Props = {}

const TestApi = (props: Props) => {
    const [heading, setHeading] = useState();
    useEffect(() => {
        fetch('/api/testApi').then((res) => res.json()).then((data) => setHeading(data));
    }, [])
    return (
        <pre>{JSON.stringify(heading, null, 2)}</pre>
    )
}

export default TestApi