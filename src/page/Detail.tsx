import Image from '../component/detail/Image'
import Details from '../component/detail/Details'
import Quantity from '../component/detail/Quantity'
import BuyAndAddCartButton from '../component/detail/BuyAndAddCartButton'

function Detail() {
    return (
        <div>
            <div className='w-[1080px] container mx-auto mt-6'>
                <div className='bg-white px-4 py-4 rounded-xl relative border-2 border-[#261FB3]'>
                    <div className='flex flex-row gap-6'>
                        <Image product_image='https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/tile/Apple-iPhone-16-Pro-hero-240909-lp.jpg.news_app_ed.jpg' />
                        <Details 
                        product_name='Iphone 16 Pro Max' 
                        product_price={40000} 
                        product_detail='iphone 16 pro max มือสอง ราคาถูกครับ'
                        product_rating={4.5} 
                        reviewer_count={100} />
                    </div>
                    <div className='absolute bottom-[75px] left-[341px]'>
                        <Quantity product_stock={10} />
                    </div>
                    <div className='absolute bottom-[15px] left-[341px]'>
                        <BuyAndAddCartButton />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail