function InputPeople ({handlePeopleChange}){
    return(
        <div>
        <label htmlFor="people" className="block text-lg font-medium leading-6 text-gray-900">People</label>
        <div className="relative mt-2 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            </div>
            <input type="text" onChange={handlePeopleChange} name="people" id="people" className="bg-sky-100 block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="0"/>
        </div>
        </div>
    )
}

export default InputPeople