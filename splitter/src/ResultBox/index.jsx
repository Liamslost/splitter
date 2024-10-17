function ResultBox ({boxTitle }){
    return (
        <div className="my-10 px-4 flex justify-between">
        <div className="">
            <div className="text-white">{boxTitle}</div>
            <div className="text-teal-700">/ person</div>
        </div>
        <div className="text-6xl text-teal-600">
            0.00
        </div>
        </div>
    )
}

export default ResultBox