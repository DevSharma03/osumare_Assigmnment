import React from 'react'
import '../Styl/TestimonialPage.css'

export default function TestimonialPage() {
  return (
    <>
      <div id="options">
        <div className="testimonial-heading" style={{paddingLeft:'120px'}}>
          <p className="testimonial-heading-content fs-1 fw-bold">Customer Testimonials</p>
          <p className="testimonial-heading-contentText fs-5">This tool has transformed my productivity and organization!</p>
        </div>
        <div class="container">
          <div class="row d-flex justify-content-between align-items-center p-5 m-3 pb-0 mb-0">
            <div class="col-6 testimonial-image-content">
              <div className="testimonial-image-content-text">
                <p>Using this website has made my tasks so much easier! I can't imagine my day without it."</p>
                <img src="Assets\Testo.png" alt="img" height={"50px"} width={"270px"} />
                <img src="Assets\Slider.png" alt="Slider" height={"40px"} width={"90px"} />
              </div>
            </div>
            <div class="col-6 testimonial-image pt-3">
              <img src="Assets\Testimonial-page-Image.jpg" alt="img" height={"330px"} width={"330px"} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


