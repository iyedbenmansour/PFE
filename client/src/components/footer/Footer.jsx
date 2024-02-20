import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">About Us</li>
          <li className="fListItem">Parking Services</li>
          <li className="fListItem">Contact Us</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Book a Spot</li>
          <li className="fListItem">Payment Methods</li>
          <li className="fListItem">Support</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">FAQ</li>
          <li className="fListItem">Terms of Service</li>
          <li className="fListItem">Privacy Policy</li>
        </ul>
      </div>
      <div className="fText">iyed ben mansour 2024</div>
    </div>
  );
};

export default Footer;
