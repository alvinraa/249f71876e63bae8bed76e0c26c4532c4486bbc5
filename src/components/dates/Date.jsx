import React, { Component } from "react";
import InfiniteCarousel from 'react-leaf-carousel';
import Button from 'react-bootstrap/Button';


class Date extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='date'>
                    <InfiniteCarousel
                        breakpoints={[
                            {
                                breakpoint: 500,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 2,
                                },
                            },
                            {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 3,
                                    slidesToScroll: 3,
                                },
                            },
                        ]}
                        dots={false}
                        showSides={false}
                        sidesOpacity={.5}
                        sideSize={.1}
                        slidesToScroll={8}
                        slidesToShow={8}
                        scrollOnDevice={true}
                        arrows={false}
                        incrementalSides={false}
                    >
                        <div>
                            <Button className='clear-button border-radius-100'><p className='text-center m-0 p-0'>Kam</p> <span className='font-weight-bolder text-center'>6</span></Button>
                        </div>
                        <div>
                            <Button className='clear-button border-radius-100'><p className='text-center m-0 p-0'>Jum</p> <span className='font-weight-bolder text-center'>7</span></Button>
                        </div>
                        <div>
                            <Button className='clear-button border-radius-100' disabled><p className='text-center m-0 p-0'>Sab</p> <span className='font-weight-bolder text-center'>8</span></Button>
                        </div>
                        <div>
                            <Button className='clear-button border-radius-100' disabled><p className='text-center m-0 p-0'>Min</p> <span className='font-weight-bolder text-center'>9</span></Button>
                        </div>
                        <div>
                            <Button className='clear-button border-radius-100'><p className='text-center m-0 p-0'>Sen</p> <span className='font-weight-bolder text-center'>10</span></Button>
                        </div>
                        <div>
                            <Button className='clear-button border-radius-100'><p className='text-center m-0 p-0'>Sel</p> <span className='font-weight-bolder text-center'>11</span></Button>
                        </div>
                        <div>
                            <Button className='clear-button border-radius-100'><p className='text-center m-0 p-0'>Rab</p> <span className='font-weight-bolder text-center'>12</span></Button>
                        </div>
                        <div>
                            <Button className='clear-button border-radius-100'><p className='text-center m-0 p-0'>Kam</p> <span className='font-weight-bolder text-center'>13</span></Button>
                        </div>
                        <div>
                            <Button className='clear-button border-radius-100'><p className='text-center m-0 p-0'>Jum</p> <span className='font-weight-bolder text-center'>14</span></Button>
                        </div>
                        <div>
                            <Button className='clear-button border-radius-100' disabled><p className='text-center m-0 p-0'>Sab</p> <span className='font-weight-bolder text-center'>15</span></Button>
                        </div>
                        <div>
                            <Button className='clear-button border-radius-100' disabled><p className='text-center m-0 p-0'>Min</p> <span className='font-weight-bolder text-center'>16</span></Button>
                        </div>
                        <div>
                            <Button className='clear-button border-radius-100'><p className='text-center m-0 p-0'>Sen</p> <span className='font-weight-bolder text-center'>17</span></Button>
                        </div>
                        <div>
                            <Button className='clear-button border-radius-100'><p className='text-center m-0 p-0'>Sel</p> <span className='font-weight-bolder text-center'>18</span></Button>
                        </div>
                        <div>
                            <Button className='clear-button border-radius-100'><p className='text-center m-0 p-0'>Rab</p> <span className='font-weight-bolder text-center'>19</span></Button>
                        </div>
                    </InfiniteCarousel>
                </div>
                <hr className="m-0" />
            </React.Fragment>
        );
    }
}

export default Date;