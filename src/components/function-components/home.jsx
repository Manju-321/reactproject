import React from "react";
import './home.css';

const Home=()=>{
    return(
        <div className="container-fluid row mt-2">
            <div className=" col md-3">
                <header className="d-flex justify-content-center align-items-center" style={{height:'70px'}}>Header</header>
                <nav className="d-flex justify-content-center align-items-center" style={{height:'30px'}}>Navigation</nav>
                <div className="d-flex justify-content-center align-items-center" style={{height:'600px'}}>
                    <aside className="d-flex justify-content-center align-items-center" style={{height:'600px'}}>Aside</aside>
                    <section>
                        <div className="d-flex justify-content-center align-items-center" style={{height:'600px'}}>Section</div>
                    </section>
                </div>
                <footer className="d-flex justify-content-center align-items-center" style={{height:'30px'}}>Footer</footer>
            </div>
        </div>
    )
}
export default Home;