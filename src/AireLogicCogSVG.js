import React from 'react';

export function AireLogicCogSVG(props) {    
    return (
        <React.Fragment>
            <defs>
                
            <linearGradient
                    x1={97.327}
                    y1={53.252}
                    x2={-3.185}
                    y2={7.221}
                    id="org-structure__a"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset={0} stopColor="#5f9a00" />
                    <stop offset={1} stopColor="#99a700" />
                </linearGradient>
                <linearGradient
                    x1={97.327}
                    y1={53.252}
                    x2={-3.185}
                    y2={7.221}
                    id="org-structure__b"
                    xlinkHref="#org-structure__a"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="matrix(.17583 0 0 .1885 53.588 155.42)"
                />
            </defs>
            <path
                d="M62.294 155.785c-2.465 0-.386 1.097-1.823 1.69-1.438.593-1.01-1.524-2.546.283-1.537 1.806.626.921.271 2.39-.354 1.469-1.9-.21-1.35 2.043.548 2.253 1.168.051 2.162 1.29.995 1.24-1.36 1.262.861 2.265 2.22 1.002.83-.857 2.425-.78 1.595.075.205 1.782 2.425.78 2.221-1.003-.133-1.12.862-2.265.994-1.144 1.614.963 2.162-1.29.549-2.253-.996-.54-1.35-2.043-.356-1.503 1.808-.584.271-2.39-1.537-1.807-1.109.446-2.546-.283-1.437-.73.641-1.69-1.824-1.69zm.535 3.435c1.453 0 2.63 1.154 2.63 2.578s-1.177 2.579-2.63 2.579c-1.453 0-2.63-1.155-2.63-2.579 0-1.424 1.177-2.578 2.63-2.578z"
                fill="url(#org-structure__b)"
                fillRule="evenodd"
                {...props}
            />
        </React.Fragment>

    );
}

export default AireLogicCogSVG;