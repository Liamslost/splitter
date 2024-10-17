function ResultBox ({boxTitle }){
    return (
        <div className="border-2 my-10 flex justify-between">
        <div className="border-2">
            <div className="text-white">{boxTitle}</div>
            <div>/ person</div>
        </div>
        <div className="border-2 text-6xl text-teal-600">
            0.00
        </div>
        </div>
    )
}

export default ResultBox