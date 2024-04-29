function Contact () {
    return <>
     <section id="contact">
        <div class="container">
            <div class="contact-card">
                <div class="infos">
                    <h6 class="section-subtitle">Get Here</h6>
                    <h6 class="section-title mb-4">Contact Us</h6>

                    <div class="item">
                        <i class="ti-location-pin"></i>
                        <div class="">
                            <h5>Location</h5>
                            <p> 12345 Fake ST NoWhere AB Country</p>
                        </div>                          
                    </div>
                    <div class="item">
                        <i class="ti-mobile"></i>
                        <div>
                            <h5>Phone Number</h5>
                            <p>(123) 456-7890</p>
                        </div>                          
                    </div>
                    <div class="item">
                        <i class="ti-email"></i>
                        <div class="mb-0">
                            <h5>Email Address</h5>
                            <p>info@website.com</p>
                        </div>
                    </div>
                    <div class="item">
                        <i class="ti-world"></i>
                        <div class="mb-0">
                            <h5>example.com</h5>
                            <p>info@example.com</p>
                        </div>
                    </div>
                </div>
                <div class="form">
                    <h6 class="section-subtitle">Available 24/7</h6>
                    <h6 class="section-title mb-4">Get In Touch</h6>
                    <form>
                        <div class="form-group">
                            <input type="email" class="form-control form-control-lg" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" required/>
                        </div>
                        <div class="form-group">
                            <textarea name="contact-message" id="" cols="30" rows="7" class="form-control form-control-lg" placeholder="Message"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary btn-block btn-lg mt-3">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </>
}

export default Contact;