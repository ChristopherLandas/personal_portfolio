interface TagProps{
    message: string
    icon?: string
    filepath?: string
}

export function Tag1({message, icon} : TagProps){
    return(
        <div className="rounded-xl border border-gray-700 py-1 px-2 bg-blue-950/80 text-[.85rem] whitespace-nowrap">
            <i className={`${icon ? 'me-2 fas ' + icon : 'hidden'}  text-pink-400`}/>
            <span className="inline-block text-yellow-100 text-center">{message}</span>
        </div>
    )
}

export function Tag2({message} : TagProps){
    return(
        <div className="rounded-2xl bg-blue-950/90 text-[.85rem] whitespace-nowrap px-4 py-1">
            <span className="text-yellow-100/75 font-mono">{message}</span>
        </div>
    )
}

export function Tag3({message, filepath}: TagProps){
    return(
        <div className="rounded-xl border border-gray-700 py-1.5 px-3 bg-blue-950/80 whitespace-nowrap text-[1.075  rem] hover:border-pink-300">
            <span>
                {filepath ?<img src={filepath} className="me-2.5 max-w-10 max-h-10 inline-block whitespace-normal"/>: undefined}
            </span>
            <span className="inline-block text-yellow-100 text-center">{message}</span>
        </div>
    )
}