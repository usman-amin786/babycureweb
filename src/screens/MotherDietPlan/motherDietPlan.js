import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import $ from 'jquery'
import MotherHome from '../mother/motherhome';
import Footer from '../../components/Footer/Footer';

const MotherDietPlan = () => {
  $(".navbar .nav-link").on("click", function(){
    $(".navbar").find(".activeNav").removeClass("activeNav");
    $(this).addClass("activeNav");
 });

  return (
    <>
    <Header/>
       <section style={{backgroundColor:'#dcdcdc', minHeight:"100vh"}}  >
          <div className='container'  style={{position:'relative'}} >
              <div className='row'>
              <h4 className='pt-3'>Home / Mother / Diet Plan</h4>
                <div className='col-md-9 mx-auto'>
                <div className='row'>
                <div className='col-md-6 mx-auto'>
                <div className="py-4" style={{ position: "relative" }}>
                <input
                  type="search"
                  className="  form-control py-3 btn btn border-0 search_btn2 rounded-5"
                />
                <label
                  style={{ position: "absolute", top: "40px", right: "12px" }}
                >
                  <i className="fa  fa-search" style={{ fontSize: "20px" }}></i>
                </label>
                
              </div>
                </div>
                <div className='col-md-12 pt-5 text-center justify-content-center'>
                    <div className='p-4 text-white' style={{backgroundColor:'#a9a9a9',border:'3px solid #000', boxShadow: '1px 2px 9px #000',
              padding: '1em' }}>
                        <h2>Recommended Diet Plan</h2>
                        <p className='pt-4'>An infant needs 18 – 32 ounces of breast milk in his first 3 months. You should increase the amount gradually and very slowly so that by the end of 3 months your child is fed with 32 ounces of milk approximately. You should not add any kind of cereal or starchy food item to a baby who is below 3 months of age.If your baby is younger than 12 months of age, no. Breast milk is comprised 87% of water and water is optional before one year of age. If your child is 12 months or older, water is necessary.</p>
                    </div>
                </div>
                <div  className='col-md-4 mx-auto pt-5 pb-4'>
                <Link to="/request_customize" style={{backgroundColor:'black',fontSize:'16px', boxShadow: '1px 2px 9px #000',
              padding: '1em' }} className='btn  py-2 rounded-3 w-100 text-white'>Request for Customize Diet Plan</Link>
                </div>
             </div>
                </div>
              </div>

{/*               <div  style={{position:'absolute',top:'100px',right
              :'23px'}} className=''>
                  <img src={require('../../assets/image/Star 1.png')} alt='' />
                </div>
                <div className=''  style={{position:'absolute',top:'20px',right
              :'220px'}} >
                  <img src={require('../../assets/image/Star 2.png')} alt='' />
                </div>
                <div  style={{position:'absolute',top:'0',right
              :'-60px'}} className=''>
                  <img src={require('../../assets/image/Star 3.png')} alt='' />
                </div> */}
          </div>
       </section>
      <Footer/>
    </>
  )
}

export default MotherDietPlan;
