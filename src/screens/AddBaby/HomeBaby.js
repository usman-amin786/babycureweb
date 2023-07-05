import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import $ from 'jquery';
import { BabyContext } from "../../ContextApi/BabyContext";

const HomeBaby = () => {

  const { selectedBabyId, selectedBabyDob } = useContext(BabyContext);
  const [babyAge, setBabyAge] = useState(0);

  useEffect(() => {
    if (selectedBabyDob) {
      const today = new Date();
      const dob = new Date(selectedBabyDob);
      const ageInMonths = (today.getFullYear() - dob.getFullYear()) * 12 + (today.getMonth() - dob.getMonth());
      setBabyAge(ageInMonths);
    }
  }, [selectedBabyDob]);

  console.log("Selected Baby ID:", selectedBabyId);
  console.log("Selected DOB home baby:", selectedBabyDob);
  console.log("Baby Age:", babyAge);

  $(document).ready(function() {
    $(".navbar .nav-link").on("click", function() {
      $(".navbar").find(".activeNav").removeClass("activeNav");
      $(this).addClass("activeNav");
    });
  });

  return (
    <>
 <Header/>
      <section className="HomeBaby_page" style={{backgroundColor:'#dcdcdc'}} >
        <div className="container pb-5">
          <div className="text-left pb-4 pt-3">
           <h4>Home / Baby</h4>
          </div>
          <div className="row g-4 pb-5">
            <div className="col-md-3">
              <div className="card p-4 rounded-4" style={{backgroundColor:'#a9a9a9',boxShadow: '1px 2px 9px #000',
              padding: '1em'}}>
                <div className="text-center">
                  <img
                    src={require("../../assets/image/img1.png")}
                    width="90px"
                    alt=""
                  />
                  <h4 className="pt-2">Vaccination</h4>
                </div>
                <div className="text-left">
                  <p>Upcoming</p>
                  <p>
                  Recent
                  </p>
                  
                  <p>Date</p>
                </div>
                <div className="text-center">
                <Link to={`/vaccination?babyId=${selectedBabyId}`} className="btn btn-light w-50" style={{ boxShadow: '1px 2px 9px #000', padding: '1em' }}>
                      More <i className="fa ps-2  fa-arrow-right"></i>
                    </Link>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card p-4 rounded-4" style={{backgroundColor:'#a9a9a9',boxShadow: '1px 2px 9px #000',
              padding: '1em'}}>
                <div className="text-center">
                  <img
                    src={require("../../assets/image/img2.png")}
                    width="90px"
                    alt=""
                  />
                  <h4 className="pt-2">Diet Plan & Water Intake</h4>
                </div>
                <div className="text-left">
                  <p>Recommended Diet</p>
                  <p>
                  Water Quantity
                  </p>
                </div>
                <div className="text-center mt-3">
                  <Link to={`/diet_plan?babyAge=${babyAge}`} className="btn btn-light w-50" style={{boxShadow: '1px 2px 9px #000',padding: '1em'}}>More  <i className="fa ps-2  fa-arrow-right"></i>  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card p-4 rounded-4"style={{backgroundColor:'#a9a9a9',boxShadow: '1px 2px 9px #000',
              padding: '1em'}}>
                <div className="text-center">
                  <img
                    src={require("../../assets/image/img3.png")}
                    width="90px"
                    alt=""
                  />
                  <h4 className="pt-2">Milestone</h4>
                </div>
                <div className="text-left">
                  <p>Recent Milestone</p>
                  <p>
                  Upcoming Milestones
                  </p>
                </div>
                <div className="text-center mt-5">
                  <Link to={`/milestones?babyId=${selectedBabyId}`} className="btn btn-light w-50" style={{boxShadow: '1px 2px 9px #000',padding: '1em'}}>More  <i className="fa ps-2  fa-arrow-right"></i>  </Link> 
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card p-4 rounded-4" style={{backgroundColor:'#a9a9a9',boxShadow: '1px 2px 9px #000',
              padding: '1em'}}>
                <div className="text-center">
                  <img
                    src={require("../../assets/image/img4.png")}
                    width="90px"
                    alt=""
                  />
                  <h4 className="pt-2">Doctor Consultancy</h4>
                </div>
                <div className="text-left">
               
                  <p>
                  Name
                  </p>
                  <p>Recent Doctor hired</p>
                </div>
                <div className="text-center mt-3">
                  <Link to="/doctor_consultancy" className="btn btn-light w-50" style={{boxShadow: '1px 2px 9px #000',padding: '1em'}}>More  <i className="fa ps-2  fa-arrow-right"></i>   </Link>
                </div> 
              </div>
            </div>
          
          </div>
          <div className="mx-4 text-center">
          <h1 style={{fontWeight:"400",color:'#B5972F'}} >Hi ! Baby Information is Displayed Here. Lets Daily look on it</h1>
          </div>
        </div>
      </section>
  <Footer/>
    </>
  );
};

export default HomeBaby;
