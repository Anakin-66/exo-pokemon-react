import { Link } from "react-router-dom";

function Teamlist () {

    const trainers = [
        {
            id : 1,
            name : "Sashe du Bourg palette"
        },
        {
            id : 2,
            name : "Dwayne Johnson"
        },
        {
            id : 3,
            name : "Affida Turner"
        }
    ]

    return (
        <>
            <h2>Tous les dresseurs</h2>
            <>
            {trainers.map ((allTrainers) =>
            <Link to={`/trainers/${allTrainers.id}`}>
                <article>
                    <p> {allTrainers.name} </p>
                </article>
            </Link>
            )}
            </>
        </>
    )
}

export default Teamlist;