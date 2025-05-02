import React from 'react'

export default function About() {
    return (
        <div className="py-5 bg-white">
            <div className="container py-4">
                <div className="row align-items-center">
                    <div className="col-md-5 mb-4 mb-md-0">
                        <img
                            src="/api/placeholder/600/400"
                            alt="Company illustration"
                            className="img-fluid rounded shadow-sm"
                        />
                    </div>
                    <div className="col-md-7">
                        <h2 className="fw-bold display-6 mb-4">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="lead text-secondary mb-4">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                            accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                            aperiam, repellat expedita consequatur!
                        </p>
                        <p className="text-secondary mb-4">
                            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                            Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                        </p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Learn More</button>
                            <button type="button" className="btn btn-outline-secondary btn-lg px-4">Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}