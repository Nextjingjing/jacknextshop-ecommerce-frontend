import React from 'react'
import Image from '../component/detail/Image'
import Details from '../component/detail/Details'

function Detail() {
    return (
        <div>
            <div className='flex items-center justify-center h-screen'>
                <div className='flex flex-row'>
                    <Image product_image='https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/tile/Apple-iPhone-16-Pro-hero-240909-lp.jpg.news_app_ed.jpg'/>
                    <Details product_name='Iphone 16 Pro Max' product_price={40000} product_rating={4.5} reviewer_count={100}/>
                </div>
            </div>
        </div>
    )
}

export default Detail