import React from "react";

const Layout = ({ children }) => {
  return (
    <div className='bg-gray-900 mt-0 pt-20'>
      <div className='min-h-screen m-auto'>
        <main className='flex items-start justify-center'>
          <div className='bg-gray-800 rounded-lg mr-10 max-w-sm w-96 mt-12 text-gray-100 p-6'>
            <p>Mock data to use:</p>
            <p>Every input should be 4 or more characters long</p>
            <ul>
              <li className='flex items-center my-1'>
                <pre>
                  {" "}
                  Email : <code className='bg-gray-900 p-1 border border-gray-500 rounded text-sm'>test@test.com</code>
                </pre>
              </li>
              <li className='flex items-center my-1'>
                <pre>
                  {" "}
                  Phone number :<code className='bg-gray-900 p-1 border border-gray-500 rounded text-sm'>3214567890</code>
                </pre>
              </li>
              <li className='flex items-center my-1'>
                <pre>
                  {" "}
                  OTP : <code className='bg-gray-900 p-1 border border-gray-500 rounded text-sm'>123456</code>
                </pre>
              </li>
              <li className='flex items-center my-1'>
                <pre>
                  {" "}
                  Full Name :<code className='bg-gray-900 p-1 border border-gray-500 rounded text-sm'>Test User</code>
                </pre>
              </li>
              <li className='flex items-center my-1'>
                <pre>
                  {" "}
                  Near ID : <code className='bg-gray-900 p-1 border border-gray-500 rounded text-sm'>testuser</code>
                </pre>
              </li>
              <li className='flex items-center my-1'>
                <pre>
                  {" "}
                  Password :<code className='bg-gray-900 p-1 border border-gray-500 rounded text-sm'>test1234</code>
                </pre>
              </li>
            </ul>
            <p>If everything goes well you will be presented with all your details at profile page.</p>
            <p>You can refresh the page at any instance it will resume on the same step.</p>
          </div>
          <div className='device device-iphone-x'>
            <div className='device-frame'>
              <div className='device-content overflow-y-auto'>{children}</div>
            </div>
            <div className='device-header' />
            <div className='device-btns' />
            <div className='device-power' />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
