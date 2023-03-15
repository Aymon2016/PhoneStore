import React, { useEffect } from 'react'
import style from '../../styles/banner/banner.module.scss'
import Carousel from 'react-material-ui-carousel'
import fetchDataFromApi from '../../hooks/api'
import Image from 'next/image'

function Banner({ posts }) {
    const url = process.env.STRAPI_URL
    if (!posts) return
    return (
        <>

            <Carousel
                className="carasousel"
                autoPlay={true}
                animation="slide"
                indicators={false}
                navButtonsAlwaysVisible={true}
                cycleNavigation={true}
                navButtonsProps={{
                    style: {
                        background: "#fff",
                        color: "#494949",
                        borderRadius: 10,
                        marginTop: -22,
                        height: "10px",
                        width: "5px"
                    }
                }}>
                {
                    posts?.map((item) => {
                        return (
                            <>
                                <div>
                                    <img src={url + item.attributes.Image.data.attributes.url} alt="img" key={item.id} className={style.bannerImg} />
                                </div>
                            </>
                        )
                    })
                }

            </Carousel>
        </>
    )
}

export default Banner

