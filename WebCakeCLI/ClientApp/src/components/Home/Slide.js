import React, { Component }  from 'react';

class Slide extends Component {
    render() {
        return (
			<div id="carouselExampleControls" class="carousel slide" data-ride="carousel" style={{width: '90%', height: '750px', margin : 'auto'}}>
				<div class="carousel-inner">
					<div class="carousel-item active">
						<img class="d-block w-100" src="images/slider-01.jpg" alt="First slide" />
					</div>
					<div class="carousel-item">
						<img class="d-block w-100" src="images/slider-02.jpg" alt="Second slide"/>
					</div>
				</div>
				<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="sr-only">Previous</span>
				</a>
				<a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="sr-only">Next</span>
				</a>
			</div>
    )
    }
}

export default Slide;