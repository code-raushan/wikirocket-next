import getWikiResults from "@/lib/getWikiResults"
import Item from "./components/Item"
//to generate the metadata for this page.
export async function generateMetadata({params:{searchTerm}}){
    const wikiData = getWikiResults(searchTerm)
    const data = await wikiData

    const displayTerm = searchTerm.replaceAll('%20', ' ')

    if(!data?.query?.pages){
        return{
            title: `${displayTerm} Not Found`
        }
    }
    return{
        title: displayTerm,
        description: `Search Results for ${displayTerm}`
    }
}


export default async function SearchTerm({params:{searchTerm}}) {
    const wikiData = getWikiResults(searchTerm)
    const data = await wikiData
    const results = data?.query?.pages;

    const content = (
        <main className="bg-slate-200 mx-auto max-w-lg py-1 min-h-screen">
            {results
            ?Object.values(results).map((result, index)=>{
                return <Item key={result.pageid} result={result}/>
            })
            :<h2 className="p-2 text-xl">{`${searchTerm} Not Found`}</h2>
            }
        </main>
    )

  return content;
}
