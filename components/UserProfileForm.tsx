import React, { useState } from 'react';

interface UserDetails {
  fullName: string;
  email: string;
  phoneNumber: string;
  twitter: string;
  facebook: string;
  instagram: string;
}

const UserProfileForm: React.FC = () => {
  const [userDetails, setUserDetails] = useState<UserDetails>({
    fullName: '',
    email: '',
    phoneNumber: '',
    twitter: '',
    facebook: '',
    instagram: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can submit the form data to update the user details
    console.log(userDetails);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Update User Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="fullName" className="block mb-2">
            Full Name:
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={userDetails.fullName}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={userDetails.email}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block mb-2">
            Phone Number:
          </label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={userDetails.phoneNumber}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="twitter" className="block mb-2">
            Twitter:
          </label>
          <input
            type="text"
            id="twitter"
            name="twitter"
            value={userDetails.twitter}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="facebook" className="block mb-2">
            Facebook:
          </label>
          <input
            type="text"
            id="facebook"
            name="facebook"
            value={userDetails.facebook}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="instagram" className="block mb-2">
            Instagram:
          </label>
          <input
            type="text"
            id="instagram"
            name="instagram"
            value={userDetails.instagram}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Update Details
        </button>
      </form>
    </div>
  );
};

export default UserProfileForm;
