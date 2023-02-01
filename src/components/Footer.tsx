const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black p-4">
      <div className="flex gap-4 justify-between border-b-1 border-white py-4">
        <div className="text-gray">
          <div>COMPANY</div>
          <ul className="list-none text-white">
            <li>About us</li>
            <li>Careers</li>
            <li>Swiggy Instamart</li>
          </ul>
        </div>
        <div className="text-gray">
          <div>CONTACT</div>
          <ul className="list-none  text-white">
            <li>Help &amp; Support</li>
            <li>Partner with us</li>
            <li>Ride with us</li>
          </ul>
        </div>
        <div className="text-gray">
          <div>LEGAL</div>
          <ul className="list-none  text-white">
            <li>Terms &amp; Conditions</li>
            <li>Refund &amp; Cancellation</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between text-white py-4">
        <div>Swiggy</div>
        <div>&copy; {year} Swiggy</div>
        <div>Icons</div>
      </div>
    </footer>
  );
};

export default Footer;
