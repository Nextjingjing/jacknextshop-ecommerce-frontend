import Image from '../component/detail/Image'
import Details from '../component/detail/Details'

function Detail() {
    return (
        <div>
            <div className='w-[1080px] container mx-auto mt-6'>
                <div className='bg-white px-4 py-4 rounded-xl'>
                    <div className='flex flex-row gap-6'>
                        <Image product_image='https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/tile/Apple-iPhone-16-Pro-hero-240909-lp.jpg.news_app_ed.jpg' />
                        <Details 
                        product_name='Iphone 16 Pro Max' 
                        product_price={40000} 
                        product_detail='iphone 16 pro max มือสอง ราคาถูกครับ'
                        product_rating={4.5} 
                        reviewer_count={100} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail