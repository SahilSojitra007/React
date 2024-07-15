import React from 'react';

export default function Contact(props) {
    const { mode } = props;

    const contactStyles = {
        color: mode === 'dark' ? 'white' : 'black',
        backgroundColor: mode === 'dark' ? 'black' : 'white',
        borderColor: mode === 'dark' ? 'white' : '#dee2e6'
    };

    return (
        <div className="container-fluid" style={contactStyles}>
            <div className="row justify-content-center">
                <div className="col-lg-12">
                    <h1 className="mb-3">Contact Us</h1>
                    <form>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <label htmlFor="your-name" className="form-label">Your Name</label>
                                <input type="text" className="form-control" id="your-name" name="your-name" required style={contactStyles} />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="your-surname" className="form-label">Your Surname</label>
                                <input type="text" className="form-control" id="your-surname" name="your-surname" required style={contactStyles} />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="your-email" className="form-label">Your Email</label>
                                <input type="email" className="form-control" id="your-email" name="your-email" required style={contactStyles} />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="your-subject" className="form-label">Your Subject</label>
                                <input type="text" className="form-control" id="your-subject" name="your-subject" style={contactStyles} />
                            </div>
                            <div className="col-12">
                                <label htmlFor="your-message" className="form-label">Your Message</label>
                                <textarea className="form-control" id="your-message" name="your-message" rows="5" required style={contactStyles}></textarea>
                            </div>
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-md-12">
                                        <button type="submit" className="btn btn-primary w-100 fw-bold">Send</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
