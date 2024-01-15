import { ArrowRight, DribbbleIcon, FacebookIcon, InstagramIcon, TwitterIcon } from "lucide-react"
import Image from "next/image"
import { Button } from "../ui/button"

const blogs = [
  {
    day: "01",
    month: "April 2023",
    imgUrl: "/blogImg1.jpg",
    author: "Admin",
    comments: "3 Comments",
    heading: "Why do companies need to have a website"
  },
  {
    day: "02",
    month: "April 2023",
    imgUrl: "/blogImg2.jpg",
    author: "Admin",
    comments: "3 Comments",
    heading: "Five ways you can develop your business website"
  },
  {
    day: "10",
    month: "April 2023",
    imgUrl: "/blogImg3.jpg",
    author: "Admin",
    comments: "3 Comments",
    heading: "Is AI going to take away your job away"
  },
]

const BlogCards = () => {
  return (
    <section className="relative w-full  md:flex justify-between -mt-10 md:mt-0 md:gap-10">
            {
                blogs.map(blog => (
                    <>
                    <div className="flex flex-col w-full h-full  rounded-xl overflow-hidden bg-[#343434] cursor-pointer mt-8 md:mt-0">
                        <div className="relative h-[220px] w-full overflow-hidden" key={blog.day}>
                            <Image src={blog.imgUrl} fill alt='blog image' objectFit="cover" className="hover:scale-110 transition-all duration-300 cursor-pointer" />
                            <div className="absolute z-30 bottom-4 right-4 rounded-lg overflow-hidden">
                              <h3 className="text-white text-2xl font-bold bg-[#c59402] p-3 flex items-center justify-center">{blog.day}</h3>
                              <p className="text-white bg-black p-2 text-[10px] flex items-center justify-center">{blog.month}</p>
                            </div>
                        </div>
                        <div className="p-4">
                          <div className="flex justify-between bg-[#232323]  p-2">
                              <p className="text-muted-foreground text-[10px]">
                                {blog.author}
                              </p>
                              <p className="text-muted-foreground text-[10px]">
                                {blog.comments}
                              </p>
                            </div>
                            <h3 className="text-white text-center mt8 text-xl font-medium mt-4">{blog.heading}</h3>
                            <Button className='bg-[#000000] text-white w-full text-lg flex items-center justify-between mt-8 py-7 rounded-full' size='lg'><span>Read More</span> <ArrowRight className='w-5 h-5' /> </Button>
                        </div>
                        </div>
                    </>
                ))
            }
    </section>
  )
}

export default BlogCards