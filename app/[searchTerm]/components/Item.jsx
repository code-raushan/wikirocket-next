import Link from 'next/link'
import Image from 'next/image'
export default function Item({result}) {
    const itemTextCol=( 
        <div className="flex flex-col justify-center">
            <h2>
                <Link href={`https://en.wikipedia.org/?curid=${result.pageid}`} target='_blank' className='font-bold text-xl underline'>
                    {result.title}
                </Link>
            </h2>
            <p>{result.extract}</p>
        </div>
    )
    const content = result?.thumbnail?.source 
        ?(
            <article className="m-4 max-w-lg">
                <div className="flex flex-row gap-4">
                    <div className="flex flex-col justify-center">
                        <Image src={result.thumbnail.source} 
                        alt={result.title}
                        width={result.thumbnail.width} 
                        height={result.thumbnail.height}
                        />
                    </div>
                    {itemTextCol}
                </div>
            </article>
        ):(
            <article className="m-4 max-w-lg">
                {itemTextCol}
            </article>
        )
  return content
}
