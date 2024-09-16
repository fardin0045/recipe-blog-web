import './Banner.css'
const Banner = () => {
    return ( 
        <div className="my-10 banner px-40 py-36  text-center space-y-2 text-white">
          
            <h2 className="text-5xl font-bold ">Discover an <span className='text-green-400'>exceptional cooking</span> <br /> class tailored for you!</h2>
            <p className='text-slate-300' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta repellat quae aut odit ducimus neque officia blanditiis, vitae nihil et aliquid itaque at placeat ut, earum natus voluptate eos dolorum?</p>
            <div className='space-x-3'>
                <button className=" bg-[#0BE58A] p-3 rounded-3xl hover:bg-violet-300 text-black font-semibold" >Explore Now</button>
                <button  className=" border-2 p-3 rounded-3xl hover:bg-violet-300 font-semibold ">Our Feedback</button>
            </div>
        </div>
    );
};

export default Banner;