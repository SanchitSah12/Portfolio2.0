
interface Props {
    icon: string;
    name: string;
    color: string;
}

const SingleSkill = ({ icon, name,color }: Props) => {
    return (
        <div className='text-white flex max-h-10 bg-gray-700 '>
            <div className="px-2 py-1 flex items-center space-x-4 shadow-xl border-gray-400 ">
                <figure className="w-[20px] h-[20px] flex items-center justify-center"><img src={icon} alt="" /></figure>
                <div className="">
                    <h2 style={{color:color}} className=" font-display text-xl"><p>{name}</p></h2>
                </div>
            </div>
        </div>
    )
}

export default SingleSkill
