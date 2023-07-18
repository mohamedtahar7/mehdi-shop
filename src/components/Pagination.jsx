import React from 'react'
const Pagination = ({totalProducts,productPerPage,setCurrrentPage,currentPage}) => {
    let pages = []
    for (let i =1;i<= Math.ceil(totalProducts/productPerPage);i++) {
        pages.push(i)
    }
  return (
    <div className='flex flex-row items-center justify-center gap-6'>
        {pages.map((page,index)=>(
            <a href='#products' className={`${currentPage===page && 'text-white bg-[#11334f]'} py-2 px-4 hover:text-white hover:bg-[#11334f] transition-all text-[#11334f] border border-[#11334f]`} key={index} onClick={()=>setCurrrentPage(page)}>{page}</a>
        ))}
    </div>
  )
}

export default Pagination