import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import { useParams } from "react-router-dom";

function TrainerDetailsPage () {

    const trainers = [
        {
            id : 1,
            name : "Sashe du Bourg palette",
            bio : "lolloololololololololol"
        },
        {
            id : 2,
            name : "Dwayne Johnson",
            bio : "xddxdxdxdxdxdxdxdx"
        },
        {
            id : 3,
            name : "Affida Turner",
            bio : "azzazazazazazazaza"
        }
    ];

    const { trainersId } = useParams();

    const trainersToDisplay = trainers.find((el) => {
        return el.id == trainersId
    })

    return (
        <>
        <Header />
        <h1>Détail des dresseurs</h1>
        <h2> {trainersToDisplay.name} </h2>
        <p> {trainersToDisplay.bio} </p>
        <Footer />
        </>
    )
}

export default TrainerDetailsPage;