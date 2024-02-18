import { Link } from "react-router-dom"

export const Header = () => {
    return(
        <header className='flex w-full h-16 justify-center items-center'>
            <div className='flex w-5/6 h-full items-center'>
                <p className='text-blue-400 text-2xl font-bold'>{'<FE>'}</p>
                <p className='text-2xl font-semibold ml-1'>Franco Erben</p>
                <ul className='flex flex-row  mt-2 w-fit h-full gap-3 ml-4 items-center justify-center'>
                    <li>
                        <Link> About Me </Link>
                    </li>
                    <li>
                        <Link>Proyects</Link>
                    </li>
                    <li>
                        <Link>Contact Me</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}