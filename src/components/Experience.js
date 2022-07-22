import React from "react"

const Experience = () => {
    return (
        <div id="experience" className="experience">
            <div className="d-flex justify-content-center my-5">
                <h1>Cenník služieb</h1>
            </div>
            <div className="container experience-wraper">
            {/*   --------     */}
            <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h5>ŠTRAMÁK - pánsky strih do prechodu fade rôzne techniky</h5>
                        <p><b>10 €</b></p>
                    </div>
                </div>
            {/*   --------     */}
            <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h5>JUNÁK - jednoduchý pánsky strih boky jednej dĺžky</h5>
                        <p><b>8 €</b></p>
                    </div>
                </div>
                {/*   --------     */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h5>NA JEŽKA - strojčekom na jednu dĺžku</h5>
                        <p><b>6 €</b></p>
                    </div>
                </div>
                {/*   --------     */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h5>TAMAGOČI - strih do 15 rokov pre vaše ratolesti</h5>
                        <p><b>6 €</b></p>
                    </div>
                </div>
                {/*   --------     */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h5>VIKING - úprava brady, britva, gél na holenie, kolínska po holení</h5>
                        <p><b>6 €</b></p>
                    </div>
                </div>
                {/*   --------     */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h5>Farba vlasy - farbenie krátkych pánskych vlasov</h5>
                        <p><b>5 €</b></p>
                    </div>
                </div>
                {/*   --------     */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h5>Farba brada</h5>
                        <p><b>5 €</b></p>
                    </div>
                </div>
                {/*   --------     */}
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h5>Čierna maska - čierna čistiaca zlupovacia maska</h5>
                        <p><b>5 €</b></p>
                    </div>
                </div>
                {/*   --------     */}
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h5>Umývanie vlasov</h5>
                        <p><b>2 €</b></p>
                    </div>
                </div>
                {/*   --------     */}
            </div>

            <div className="d-flex justify-content-center">
                <span className="alert">
                    <h3 className="center">Pokuta 5€ ak nedáš vedieť že neprídeš aspoň 1h pred!</h3>
                </span>
            </div>
        </div>
    )
}

export default Experience;
