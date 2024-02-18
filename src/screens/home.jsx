export const Home = () => {
    return(
        <div className='flex min-h-screen min-w-full items-center'>
            <div className='flex flex-col w-2/4 h-full justify-start items-start mx-10'>
                <p className='text-3xl font-semibold'>Hi, i'm</p>
                <h1 className='text-6xl font-bold'>Franco Erben</h1>
                <p className='mt-6 font-light'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, delectus voluptatum minus vitae ipsa natus consequuntur aut at, dicta cupiditate quam accusamus voluptatibus ipsam sint assumenda, reiciendis eum possimus nihil.</p>
                    <button className='flex bg-blue-700 px-5 py-2 w-fit rounded-md my-5 text-xl font-semibold text-white'>Who i am?</button>
            </div>
        </div>
    )
}