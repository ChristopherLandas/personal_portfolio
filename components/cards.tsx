import { Tag2 } from './tags'

interface props{
    title: string,
    subtitle: string,
    media: string // either file path for imageCard or classname for the iconCard
}

export function IconCard({title, subtitle, media} : props){
    return(
        <div className='border border-[#fff3d624] flex w-120 h-auto items-center p-4 rounded-2xl overflow-hidden'>
            <div className='h-full bg-amber-600 rounded-full mr-3'>
                <i className={`fas ${media} text-2xl m-2 py-1`}/>
            </div>
            <div className='text-nowrap text-ellipsis w-50 overflow-hidden bg-amber-50'>
                <span className='block text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span>
                <span className='block'>{subtitle}</span>
            </div>
        </div>
    )
}