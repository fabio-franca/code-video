import "./principal.css"
import SimpleSlider from '../../components/carousel/Carousel'
import ListaPosts from '../../components/listaPosts/ListaPosts'

export default function Principal() {
    return (
        <div>
            <div>
                <SimpleSlider/>
            </div>
            <div className="lista">
                <div className="listaPostsTitle">
                        <h1>Confira nossas <span>postagens</span></h1>
                </div>
                <ListaPosts/>
            </div>
        </div>
    )
}
