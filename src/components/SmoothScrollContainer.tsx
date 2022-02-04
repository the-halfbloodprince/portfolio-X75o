import React from 'react';
import useSizes from '../hooks/useSizes.jsx'

const SmoothScrollContainer: React.FC = ({children}) => {
  
    const [sizes, setSizes] = React.useState()
    
    React.useEffect(() => {
        
        setSizes(useSizes())
        console.log('updated');
        console.log(sizes);
    }, [])

    const config = {
        ease: 0.1,
        current: 0,
        previous: 0,
        rounded: 0
    }

    const parentRef = React.useRef(null)
    const scrollContRef = React.useRef(null)
  
    return (
        <div ref={parentRef}>
            <div ref={scrollContRef}>
                {children}
            </div>
        </div>
    )
};

export default SmoothScrollContainer;
