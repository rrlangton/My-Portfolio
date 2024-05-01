function Contact () {
    return <>
     <section id="contact">
        <div class="container">
            <div class="contact-card">
                <div class="infos">
                    <h6 class="section-subtitle">Robin Langton</h6>
                    <h6 class="section-title mb-4">Contact Me</h6>

                    <div class="item">
                        <i class="ti-linkedin"></i>
                        <div class="">
                            <h5>LinkedIn</h5>
                            <p> https://www.linkedin.com/in/robinrlangton</p>
                        </div>                          
                    </div>
                    <div class="item">
                        <i class="ti-github"></i>
                        <div>
                            <h5>Git Hub</h5>
                            <p>https://github.com/rrlangton</p>
                        </div>                          
                    </div>
                    <div class="item">
                        <i class="ti-email"></i>
                        <div class="mb-0">
                            <h5>Email Address</h5>
                            <p>rrlangton@gmail.com</p>
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