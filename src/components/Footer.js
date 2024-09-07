const Footer = () =>
{
    return(
        <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-slate-200 p-8 ">
  {/* Footer Content Container */}
  <div className="my-3 footer-container flex flex-col md:flex-row items-center justify-between py-8">
    {/* Footer Links */}
    <ul className="list-footer flex flex-wrap justify-center md:justify-start gap-8 mb-6 md:mb-0">
      <li className="text-gray-800 hover:text-purple-700 font-medium cursor-pointer transition duration-300">
        <h3>Privacy Policy</h3>
      </li>
      <li className="text-gray-800 hover:text-purple-700 font-medium cursor-pointer transition duration-300">
        <h3>Terms Of Service</h3>
      </li>
      <li className="text-gray-800 hover:text-purple-700 font-medium cursor-pointer transition duration-300">
        <h3>Refund Policy</h3>
      </li>
      <li className="text-gray-800 hover:text-purple-700 font-medium cursor-pointer transition duration-300">
        <h3>Become Affiliate</h3>
      </li>
      <li className="text-gray-800 hover:text-purple-700 font-medium cursor-pointer transition duration-300">
        <h3>Gift a Course</h3>
      </li>
      <li className="text-gray-800 hover:text-purple-700 font-medium cursor-pointer transition duration-300">
        <h3>Team</h3>
      </li>
      <li className="text-gray-800 hover:text-purple-700 font-medium cursor-pointer transition duration-300">
        <h3>Contact Us</h3>
      </li>
    </ul>
  </div>

  {/* Footer Bottom Section */}
  <div className="text-center mt-6">
    <h4 className="text-gray-700 text-lg font-semibold">
      Made with <span className="text-red-500">❤️</span> in India
    </h4>
  </div>
</div>

    )
}
export default Footer;






