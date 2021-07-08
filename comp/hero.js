

export default function Hero(props) {
    return (
        <section class="home" id="home" style={{ backgroundImage: "url('./bg-2.jpg')" }}>
            <div class="max-width container">
                <div class="home-content">
                    <h1 className="hero-welcome">Hello and Welcome</h1>

                    <a href="#timing" className="scroll-down-btn ">
                        <i className="fas fa-angle-double-down"></i>
                    </a><p className="hero-welcome-note">In The Home Of Taste In West Drayton</p>
                </div>

            </div>
        </section>

    )
}