import React, { Component } from 'react';

class Gallery extends Component {
	render() {
		return (
			<div className="gallery-box">
				<div className="container-fluid">
					<div className="row">
						<div className="col-lg-12">
							<div className="heading-title text-center">
								<h2>Gallery</h2>
								<p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
							</div>
						</div>
					</div>
					<div className="tz-gallery">
						<div className="row">
							<div className="col-sm-12 col-md-4 col-lg-4">
								<a className="lightbox" href="images/1.jpg">
									<img className="img-fluid" src="images/1.jpg" alt="Gallery Images" />
								</a>
							</div>
							<div className="col-sm-6 col-md-4 col-lg-4">
								<a className="lightbox" href="images/2.jpg">
									<img className="img-fluid" src="images/2.jpg" alt="Gallery Images" />
								</a>
							</div>
							<div className="col-sm-6 col-md-4 col-lg-4">
								<a className="lightbox" href="images/3.jpg">
									<img className="img-fluid" src="images/3.jpg" alt="Gallery Images" />
								</a>
							</div>
							<div className="col-sm-12 col-md-4 col-lg-4">
								<a className="lightbox" href="images/4.jpg">
									<img className="img-fluid" src="images/4.jpg" alt="Gallery Images" />
								</a>
							</div>
							<div className="col-sm-6 col-md-4 col-lg-4">
								<a className="lightbox" href="images/5.jpg">
									<img className="img-fluid" src="images/5.jpg" alt="Gallery Images" />
								</a>
							</div>
							<div className="col-sm-6 col-md-4 col-lg-4">
								<a className="lightbox" href="images/6.jpg">
									<img className="img-fluid" src="images/6.jpg" alt="Gallery Images" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Gallery;