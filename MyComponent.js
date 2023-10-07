import React from 'react';
import './MyComponent.css'; 
import logo from "./81bfe0742921b68eadb33db28494e728.png";
import block from "./block-removebg-preview.png";
function MyComponent() {
  const circleStyles = {
    width: '15px',
    height: '15px',
    flexShrink: 0,
    position: 'absolute',
    top: '15px',
    left: '25px',
  };
  const circleStyles1 = {
    width: '15px',
    height: '15px',
    flexShrink: 0,
    position: 'absolute',
    top: '15px',
    left: '45px',
  };
  const circleStyles2 = {
    width: '15px',
    height: '15px',
    flexShrink: 0,
    position: 'absolute',
    top: '15px',
    left: '65px',
  };
  const customStyles1 = {
    width: '718px',
    height: '30x',
    flexShrink: 0,
    color: '#000',
    fontFamily: 'ARIAL',
    fontSize: '60px',
    fontStyle: 'italic',
    fontWeight: 700,
    lineHeight: 'normal',
    paddingLeft: '175px', 
    paddingTop: '120px', 
  };
  const customStyles2 = {
    width: '1500px',
    height: '130px',
    flexShrink: 0,
    color: '#000',
    fontFamily: 'ARIAL',
    fontSize: '150px',
    fontStyle: 'normal',
    fontWeight: 900,
    paddingLeft: "162px",
    lineHeight: 'normal',
  };
  const circleStyles3 = {
    width: '168px',
    height: '164px',
    flexShrink: 0,
    borderRadius: '100px',
    position: 'absolute',
    top: '300px',
    right: '500px',
  };
  const customStyles3 = {
    width: '164px',
    height: '32px',
    flexShrink: 0,
    color: 'blue',
    fontFamily: 'arial',
    fontSize: '22px',
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: 'normal',
    position: 'absolute', 
    top: '25px', 
    right: '30px',
    cursor: 'pointer',
  };
  const openEmailClient = () => {
    window.location.href = 'mailto:example@gmail.com'; // Replace with your email address
  };
  const customStyles4 = {
    width: '380px',
    height: '420px',
    flexShrink: 0,
    fontSize: "20px",
    fontFamily:'arial',
    backgroundColor: "#ffffe6",
    borderRadius: '30px',
    background: '#ffffe6',
    position: 'absolute',
    bottom: '10px',
    right: '70px', 
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };
  const customStyles5 = {
    width: '11px',
    height: '200px',
    flexShrink: 0,
    backgroundColor: '#657DF9',
    position: 'absolute',
    left: '180px',
    bottom: "0px"
  };
  const customStyles8 = {
    width: '11px',
    height: '200px',
    flexShrink: 0,
    backgroundColor: '#657DF9',
    fontFamily: 'Inter',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 'normal',
    position: 'absolute',
    bottom: '0px', 
    left: '642px',
  };
  const imageStyles = {
    width: '700px',
    height: '296px',
    flexShrink: 0,
    backgroundColor: 'lightgray',
    backgroundSize: 'cover',
    backgroundPosition: '50%',
    backgroundRepeat: 'no-repeat',
    margin: '0px 0px 50px 170px', 
    marginTop: '70px',
    };
  const customStyles6 = {
    width: '280px',
    height: '41px',
    flexShrink: 0,
    color: '#000',
    fontFamily: 'Arial',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: "Bold",
    lineHeight: 'normal',
    paddingLeft: "200px"
  };
  
  const customStyles9 = {
    width: '250px',
    height: '41px',
    flexShrink: 0,
    color: '#000',
    fontFamily: 'Arial',
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: "bold",
    position: 'absolute',
    lineHeight: 'normal',
    paddingLeft: '662px',
    bottom: "150px", 
  };
  const customStyles7 = {
    width: '250px',
    height: '139px',
    flexShrink: 0,
    color: '#000',
    fontFamily: 'arial',
    fontSize: '17px',
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: 'normal',
    paddingLeft: "200px",
    paddingTop:"15px",
    alignItems: "left",
  };
  const customStyles10 = {
    width: '250px',
    height: '139px',
    flexShrink: 0,
    color: '#000',
    fontFamily: 'arial',
    fontSize: '17px',
    fontWeight: 500,
    position:'absolute',
    lineHeight: 'normal',
    paddingLeft: "200px",
    paddingTop:"100px",
    alignItems: "left",
    left:"462px",
    bottom:"5px",
  };
  const customStylesContainer = {
    position: 'relative',
  };
  const lineStyles = {
    width: '111px',
    height: '3px',
    position: "absolute",
    backgroundColor: '#39004d', // You can adjust the color as needed
    alignItems:"center",
    left: '850px',
    top:'15px', 
  };
  const lineStyles2 = {
    width: '111px',
    height: '2px',
    position: "absolute",
    backgroundColor: "#9900cc", // You can adjust the color as needed
    left:"850px",
    top:'25px', // Center the line horizontally
  };
  return (
    <div className='container' style={{ position: 'relative' }}>
      <svg style={circleStyles} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15">
      <circle cx="7.5" cy="7.5" r="7.5" fill="red" />
    </svg>
    <svg style={circleStyles1} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15">
      <circle cx="7.5" cy="7.5" r="7.5" fill="yellow" />
    </svg>
    <svg style={circleStyles2} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15">
      <circle cx="7.5" cy="7.5" r="7.5" fill="#45FF04" />
    </svg>
      <div style={lineStyles}></div>
      <div style={lineStyles2}></div>
      <div style={customStyles1}>
        <div className='header'>
          Find your Driving Details
        </div>
      </div>
      <div className='sub-header' style={customStyles2}>
        IN     S E C O N D S
      </div>
      <div style={circleStyles3}><img src={block} alt="block" height={"164px"} width={"168px"} borderRadius={"100px"}/></div>
      <div onClick={openEmailClient} style={customStyles3}>
        Contact Us
      </div>
      <div style={imageStyles}><img src={logo} alt="Logo" className="image" height={"310px"} width={"750px"} /></div>
      <div style={customStyles4}>
        <h1><centre> Find Now Where
          </centre></h1>
        <form>
          <label>
            <input type="text" name="Vechile Number"  placeholder="Vechile Number"  required />
          </label>
          <label htmlFor="dateInput">
            <input type="text" id="dateInput" name="date" placeholder= "Date (mm/dd/yyyy)"/></label>
          <label>
            <input type="text" name="Address" placeholder="Address"  required />
          </label>
          <button type="submit">Show Details</button>
        </form>
      </div>
      <div style={customStyles5}></div>
      <div style={customStyles6}>Guaranteed Driving Experince Details Available</div>
      <div style={customStyles7}>Get proper details all about your driving experience prior or post your driving. Detailed traffic, speed, smoke and sound checked experience of your past present or future journey though city or more!</div>
      <div style={customStyles8}></div>
      <div style={customStyles9}>Satisfaction Guarantee</div>
      <div style={customStyles10}>We know you will surely be happy with all the details we provide with! But if you are not satisfied, you may contact our customer services for your help!</div>
    </div>
  );
}
export default MyComponent;
