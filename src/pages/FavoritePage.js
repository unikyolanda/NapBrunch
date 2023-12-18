import { useFavorite } from '../context/Favorite';
import Card from '../components/Card';
import b4 from '../pic/b4.jpg';


function FavoritePage() {
    const { favorites, removeFromFavorite } = useFavorite();
    return(
        <div>
            <div className='relative w-full h-[32rem] overflow-hidden'>
                <img className='flex object-cover h-full w-full items-center' alt="banner" src={b4}/>
                <div className="absolute inset-0 bg-gradient-to-r from-stone-500/20 to-white/30"></div>
                <div className='animate-slideUp absolute bg-neutral-800 bg-opacity-30 top-64 left-24 transform px-16 py-4 rounded-lg flex flex-col items-center'>
                    <p className='mt-3 text-white text-[24px]'>收藏清單</p>
                    <p className='mt-1 text-white text-[24px]'>Favotite</p>
                </div>
            </div>
            <div className='flex justify-center m-20'>
                <div className='flex flex-wrap justify-center my-6 gap-y-10 gap-x-8'>
                    {favorites.length > 0 ? (
                        favorites.map(item => (
                            <Card product={item} onRemove={() => removeFromFavorite(item.id)}/>
                    ))
                ) : (
                    <p className='my-12 text-center font-bold text-lg text-green-700'>您的收藏清單是空的</p>
                )}
                </div>
            </div>
        </div>
    )
}

export default FavoritePage;