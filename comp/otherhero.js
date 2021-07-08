

export default function OtherHero(props) {
    return (
        <section class="otherhome" id="otherhome" style={{ backgroundImage: "url('./hero-2.jpg')" }}>
            <div class="max-width container">
                <div class="otherhome-content">
                    <h1 className="hero-welcome">{props.Page}</h1>

                    <a href="#timing" className="scroll-down-btn ">
                        <i className="fas fa-angle-double-down"></i>
                    </a><p className="hero-welcome-note">It's time to welcome you back for pasta, pizza, vino. Finally!</p>
                </div>

            </div>
        </section>

    )
}