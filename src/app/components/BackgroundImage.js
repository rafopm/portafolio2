import React from 'react'

export const BackgroundImage = () => {
    return (
        <div
            className={[
                "bg-cover bg-center absolute inset-0 bg-opacity-50",
            ]}
            style={{
                backgroundImage: `url(/images/bk-mov.jpg)`,
                zIndex: -1,
            }}
        ></div>
    )
}
