const Qualification = () => {
    return (
      <div className="bg-white rounded-lg text-white p-8">
        {/* Header Section */}
        <div className="text-center text-4xl font-bold mb-12 text-purple-500">
          My Journey
        </div>
  
        {/* Main Content - Grid Layout for Education and Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Education Section */}
          <div className="bg-green-50 text-black rounded-lg shadow-xl p-6 space-y-6">
            <h2 className="text-3xl font-semibold text-purple-600">Education</h2>
            
            <div className="space-y-6">
              {/* Education Item 1 */}
              <div>
                <p className="text-xl font-semibold">N.B.K.R Institute of Science and Technology, Tirupati, A.P</p>
                <p className="text-lg">Bachelor of Technology (Civil) <span className="text-sm text-gray-600">2019 - 2023</span></p>
                <p className="text-lg">CGPA: 8.0</p>
              </div>
  
              {/* Education Item 2 */}
              <div>
                <p className="text-xl font-semibold">Sri Nethaji Vikas Jumior College, Vinjamur, A.P</p>
                <p className="text-lg">Higher Secondary Education (XII) <span className="text-sm text-gray-600">2017 - 2019</span></p>
                <p className="text-lg">CGPA: 9.19</p>
              </div>
               {/* Education Item 3 */}
               <div>
                <p className="text-xl font-semibold">Sri Vikas High School, Vinjamur, A.P</p>
                <p className="text-lg">Higher Secondary Education (X) <span className="text-sm text-gray-600">2017 - 2019</span></p>
                <p className="text-lg">CGPA: 8.67</p>
              </div>
            </div>
          </div>
  
          {/* Projects Section */}
          <div className="bg-green-50 text-black rounded-lg shadow-xl p-6 space-y-6">
            <h2 className="text-3xl font-semibold text-purple-600">Projects</h2>
            
            <div className="space-y-6">
              {/* Project 1 */}
              <div>
                <p className="text-xl font-semibold">Sree Teq Services</p>
                <div className="flex space-x-4 mt-2">
                  <a href="#" className="text-blue-500 hover:underline">Website</a>
                  <a href="#" className="text-blue-500 hover:underline">Github</a>
                </div>
              </div>
  
              {/* Project 2 */}
              <div>
                <p className="text-xl font-semibold">Church Management System</p>
                <div className="flex space-x-4 mt-2">
                  <a href="#" className="text-blue-500 hover:underline">Figma</a>
                  <a href="#" className="text-blue-500 hover:underline">PPT</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Qualification;
  