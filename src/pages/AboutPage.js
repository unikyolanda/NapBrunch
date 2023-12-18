import ScrollDiv from '../components/ScrollDiv';
import Link from '../components/Link';
import banner2 from '../pic/banner2.jpg';
import b2 from '../pic/b2.jpg';
import poem from '../pic/poem.jpg';
import ab1 from '../pic/ab1.jpg';
import ab2 from '../pic/ab2.jpg';
import b6 from '../pic/b6.jpg';

function AboutPage() {
    return(
        <div>
            <div className='relative w-full h-[32rem] overflow-hidden'>
                <img className='flex w-full h-full object-cover' alt="banner" src={banner2}/>
                <div className="absolute inset-0 bg-gradient-to-r from-stone-500/20 to-white/30"></div>
                <div className='animate-slideUp absolute bg-neutral-800 bg-opacity-30 top-64 left-24 transform px-16 py-4 rounded-lg flex flex-col items-start'>
                    <p className='mt-3 text-white text-xl md:text-[24px]'>願我們的講究</p>
                    <p className='mt-1 text-white text-xl md:text-[24px]'>成就您不將就的早晨</p>
                </div>
            </div>
            <div className='my-20 mx-3 h-[500px] xl:mx-10'>
                <div className='relative flex'>
                    <ScrollDiv threshold={50} content={
                        <div className='absolute right-20 flex flex-col w-[80%] md:w-1/2 bg-zinc-100 pr-7 2xl:pr-16 pl-[80px] xl:pl-[110px] py-12 rounded-lg'>
                            <p className='text-green-700 text-xl xl:text-2xl font-bold p-3'>關於 Nap Brunch</p>
                            <p className='text-stone-700 text-sm xl:text-base p-3'>我們是一支滿載活力和熱情的團隊，對早午餐的品質抱有無比的熱忱。從選擇最優質的食材、細心製作到精心包裝，我們嚴格執行衛生管理，確保每一口都是安全、可靠的美味。</p>
                            <p className='text-stone-700 text-sm xl:text-base p-3'>在 Nap Brunch，您不僅可以感受到活力滿滿的氛圍，還有我們對食品安全的嚴謹控管。我們精心挑選一切與新鮮相關的食材和事物，確保您每天一開始就能從我們這裡獲得充沛的活力。</p>
                            <p className='text-stone-700 text-sm xl:text-base p-3'>讓您的早晨由 Nap Brunch 啟動，為您的全天注入精彩活力！</p>
                        </div>}
                    />
                    <div className='hidden md:flex relative w-[40%] xl:w-[45%] z-10 ml-20 mt-16'>
                        <img className='rounded-lg' alt='about' src={b2} />
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-stone-400/20"></div>
                    </div>
                </div>
            </div>
            <div className="relative bg-cover bg-center bg-fixed bg-ab">
                <div className="absolute inset-0 bg-gradient-to-r from-zinc-700/40 to-zinc-300/40"></div>
                <div className='h-[22rem] text-center flex'></div>
            </div>
            <div className='mx-10 my-20'>
                <ScrollDiv threshold={700} content={
                    <div className='flex justify-center my-10'>
                        <img className='w-2/5 h-64 rounded-lg object-cover' alt='about1' src={ab1}/>
                        <div className='w-1/3 p-10 text-stone-700'>
                            <p className='my-2 text-xl font-bold'>精心挑選</p>
                            <p className='my-1'>堅持選用優質食材、遠離過度加工。</p>
                            <p className='my-1'>我們承諾提供的不僅是最新鮮的美味，更是來自大自然的純粹佳餚，保證您食用時的安全與放心。</p>
                        </div>
                    </div>}
                />
                <ScrollDiv threshold={1000} content={
                    <div className='flex justify-center my-10'>
                        <div className='w-1/3 p-10 text-stone-700'>
                            <p className='my-2 text-xl font-bold'>品質保證</p>
                            <p className='my-1'>在每個環節，從精選食材到嚴謹衛生控制，從顯著至微小細節，</p>
                            <p className='my-1'>我們都實施最嚴格的標準審核，確保您每一口都是放心與安心的極致享受。</p>
                        </div>
                        <img className='w-2/5 h-64 rounded-lg object-cover' alt='about1' src={b6}/>
                    </div>}
                />
                <ScrollDiv threshold={1300} content={
                    <div className='flex justify-center my-10'>
                        <img className='w-2/5 h-64 rounded-lg object-cover' alt='about1' src={ab2}/>
                        <div className='w-1/3 p-10 text-stone-700'>
                            <p className='my-2 text-xl font-bold'>鮮味直送</p>
                            <p className='my-1'>我們採用環保且可循環利用的包裝材料，確保每份餐點都是訂單確認後即時製作，</p>
                            <p className='my-1'>並使用當天送達的新鮮食材，保障您品嚐到的每一口都是最頂級的新鮮美味。</p>
                        </div>
                    </div>}
                />
            </div>
            <div className='relative flex flex-col'>
                <img className='' alt='poem' src={poem}/>
                <ScrollDiv threshold={2000} content={
                    <div className="absolute flex flex-col justify-center inset-0 bg-gradient-to-r from-white/20 to-white/30">
                        <p className='relative flex pl-28 my-2 text-3xl font-bold text-stone-600 drop-shadow'>開啟清新美味「食」尚之旅</p>
                        <p className='relative flex pl-28 my-2 text-stone-600'>探索您的味蕾饗宴，只需一鍵訂餐！</p>
                        <Link key='menu' to='/menu' className='flex justify-center relative ml-28 bg-green-700 text-white py-2 mx-2 my-2 rounded-lg hover:opacity-90 w-32'>GO</Link>
                    </div>}
                />
            </div>
        </div>
    )
}

export default AboutPage;