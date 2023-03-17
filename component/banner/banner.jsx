import React, { useEffect } from 'react'
import style from '../../styles/banner/banner.module.scss'
import Carousel from 'react-material-ui-carousel'


function Banner({ posts }) {

    const url = process.env.NEXT_PUBLIC_STRAPI_URL

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

                            <div key={item.attributes.createdAt}>
                                <img src={item.attributes.Image.data.attributes.url} alt="img" key={item.id} className={style.bannerImg} />
                            </div>

                        )
                    })
                }

            </Carousel>
        </>
    )
}

export default Banner

