import { useState, useEffect } from 'react'

const useSizes = () => {

    const getSize = () => {
        console.log(window.innerWidth);
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }

    const [sizes, setSizes] = useState(getSize())

    useEffect(() => {

        const setWindowSizes = () => {
            setSizes(getSize())
        }

        console.log('changed window size');

        window.addEventListener('resize', setWindowSizes)

        return () => window.removeEventListener('resize', setWindowSizes)
    }, [])

    return sizes
}

export default useSizes