<template>
    <div class="container">
        <h1 class="section-heading">Contact Me</h1>
        <form   class="contact-form row" 
                action="https://formspree.io/chriskierandevelopment@gmail.com" 
                target="_blank" 
                method="POST"
        >   
            <div class="col-12 col-sm-8 form-top">
                <div class="form-group">
                    <label for="name"></label>
                    <input  class="form-input form-control" 
                            type="text" 
                            name="name" 
                            id="name" 
                            placeholder="Name" 
                            required
                    >
                </div>
                <div class="form-group">
                    <label for="email"></label>
                    <input  class="form-input form-control" 
                            type="email" 
                            name="email" 
                            id="email" 
                            placeholder="Email" 
                            required
                    >
                </div>
                <div class="form-group">
                    <label for="phone"></label>
                    <input  class="form-input form-control" 
                            type="tel" 
                            name="phone" 
                            id="phone" 
                            placeholder="Phone"
                    >
                </div> 
            </div>
            <div class="col-7 col-sm-4">
                <a href="https://www.linkedin.com/in/chris-kieran" target="_blank">
                    <div class="linkedin-container">
                        <p class="linkedin">Connect with me on LinkedIn</p>
                        <i class="fab fa-linkedin-in"></i>
                    </div>
                </a>              
            </div> 
                <div class="form-group col-12">
                    <label for="message"></label>
                    <textarea  
                            class="form-input form-control" 
                            rows="4"
                            type="text" 
                            name="message" 
                            id="message"
                            placeholder="How can I help you?" 
                            required
                    ></textarea>
                    <div>
                        <div>
                            <button class="btn btn-outline-light button-submit" type="submit" value="Send">
                                Send
                            </button> 
                        </div>
                    </div>
                </div>    
        </form>
    </div>
</template>

<style lang="scss" scoped>
.container {
    padding: $section-container-padding;
    font-family: $main-font;
    a {
        text-decoration: none;
    }
}
.section-heading {
    font-size: $section-heading-size;
    margin: $section-heading-margin;
}
.section-content {
    font-size: $section-content-size;
}
.section-heading, .section-content {
    color: $light;
}
.contact-form, .linkedin-container {
    margin: auto;
    border-radius: .25rem;
}
.form-group {
    margin-bottom: 0;
}
.form-input {
    font-size: 16px;
}
.button-submit {
    font-size: 16px;
    margin-top: 15px;
}
.linkedin-container {
    background: $darker;
    margin-top: 50px;
    color: $light;
    padding: 20px 0px;
    text-align: center;
    width: 300px;
}
.linkedin-container:hover {
    background: $light;
    color: $darker;
    cursor: pointer;
}
.linkedin {
    font-size: 18px;
    text-align: center;
    font-weight: bolder;
}
.fa-linkedin-in {
    font-size: 40px;
    border: 2px solid $light;
    padding: 6px;
    border-radius: 5px;
}
.form-top, .form-group {
    padding: 0;
}
#message {
    font-size: 16px;
}

@media screen and (max-width: 1200px) {
  .section-heading {
      padding-left: $padding-1200;
  }
  form {
      padding: 0 $padding-1200;
  }
  .linkedin-container {
      width: 200px;
      margin-top: 22px;
  }
}
@media screen and (max-width: 970px) {
  .linkedin-container {
      width: 100px;
  }
  .linkedin {
      display: none;
  }
  .section-heading {
      margin-bottom: 0;
  }
}
@media screen and (max-width: 576px) {
    .form-input, #message {
        font-size: 16px;
    }  
  .section-heading {
      font-size: $mobile-heading-size;
      margin: $mobile-heading-margin;
  }
  .section-content {
      font-size: $mobile-content-size;
  }
  .section-image-container {
      margin-top: 10px;
  }
  .section-heading, .row {
      padding-left: $padding-576;
      padding-right: $padding-576;
  }
  .fas, .fab {
      font-size: 80%;
      color: $lighter;
  }
  .linkedin-container {
      display: none;
  }
  .contact-form {
      margin-top: -30px;
  }
}
</style>