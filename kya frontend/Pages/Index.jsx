import React from 'react'
import MainNav from './MainNav';

const Index = () => {
    return (
        <div className='bg py-5 h-screen '>
            <MainNav />
            <div className='container  '>
                <div className=' '>

                    <div className='row  mt-5 my-5'>
                        <div className='col-sm-6'>
                            <div className='card'>

                                <div className='card-img'>
                                    <img src='https://navi.com/blog/wp-content/uploads/2022/06/advantages-and-disadvantages-of-credit-card.jpg' alt='Credit card management system'>


                                    </img>
                                </div>
                            </div>

                        </div>
                        <div className='col-sm-1'>

                        </div>
                        <div className='col-sm-5 text-start fw-bold fs-4  ' style={{ fontFamily: 'italic' }}>
                            The main objective of the Know Your Applicants (KYA) app is to help credit card partners assess
                            the risk of lending to new customers. By collecting personal and financial information from
                            applicants, the KYA app can help credit card partners identify potential red flags, such as a history
                            of late payments or defaults. This information can then be used to make more informed decisions
                            about whether or not to approve a credit card application.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index;