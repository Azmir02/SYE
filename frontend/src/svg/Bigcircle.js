function BigCircle(){
    return(
        <svg
            width={50}
            height={50}
            viewBox="0 0 50 50"
            fill="none"
        >
        <circle cx={25} cy={25} r={25} fill="#05141C" />
        <circle
            cx={25}
            cy={25}
            r={23}
            stroke="#D17274"
            strokeOpacity="0.64"
            strokeWidth={4}
        />
</svg>
    )
}

export default BigCircle