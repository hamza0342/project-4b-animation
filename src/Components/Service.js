import React from 'react'

function Service(props) {
    return (
        <div>
            <section id="services">
                
                <div className="service-container">
                    <div className="box">

                        <h2> {props.heading} </h2>

                        <p> {props.body} </p>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Service
