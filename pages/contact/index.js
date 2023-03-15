import Navbar from '@/component/Header/navbar/Navbar'

const Contact = () => {
    return (
        <>
            <Navbar />
            <div style={{ margin: "20px" }}>
                <h1 style={{ fontSize: '20px' }}> Contact with Star Tech & Engineering Ltd.</h1>
                <p style={{ fontSize: '15px', lineHeight: '20px' }}>You can always contact Star Tech & Engineering Ltd. to buy your preferred model of the latest laptop, desktop, PC component, Gaming PC, Gaming Accessories, Gadgets, Cameras or TV at the best price in Bangladesh.Star Tech has multiple branches in major cities like Dhaka, Chittagong, Rangpur, Gazipur, and Khulna. Our Branches are well-decorated with all the latest Tech products from the best Brands in Bangladesh. We are also planning on opening more branches in the future to serve more customers. You can visit any nearest Star Tech & Engineering Ltd. branch with your query, after-sale service, or any type of technical assistance. Our team of highly trained technicians and Qualified customer representatives will assist your issue with the utmost importance.</p>

                <div style={{ borderRadius: "15px", border: '1px solid black', width: '150px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
                    <p style={{ margin: '2px 5px' }}>Call</p>
                    <p style={{ margin: '2px 5px' }} >0000000</p>
                </div>
            </div>
        </>
    )
}

export default Contact