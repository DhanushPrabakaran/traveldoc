import React, { useState } from 'react';

interface TravelFormData {
  destination: string;
  plannedBudget: number;
  startDate: string;
  endDate: string;
  accommodation: string;
  transportation: string;
}

const TravelForm: React.FC = () => {
  const [formData, setFormData] = useState<TravelFormData>({
    destination: '',
    plannedBudget: 0,
    startDate: '',
    endDate: '',
    accommodation: '',
    transportation: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can perform actions like submitting the form data to a backend server
    console.log(formData);
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Travel Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="destination" className="block mb-2">
            Destination:
          </label>
          <input
            type="text"
            id="destination"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="plannedBudget" className="block mb-2">
            Planned Budget ($):
          </label>
          <input
            type="number"
            id="plannedBudget"
            name="plannedBudget"
            value={formData.plannedBudget}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="startDate" className="block mb-2">
            Start Date:
          </label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="endDate" className="block mb-2">
            End Date:
          </label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="accommodation" className="block mb-2">
            Accommodation:
          </label>
          <input
            type="text"
            id="accommodation"
            name="accommodation"
            value={formData.accommodation}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="transportation" className="block mb-2">
            Transportation:
          </label>
          <select
            id="transportation"
            name="transportation"
            value={formData.transportation}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2"
            required
          >
            <option value="">Select transportation</option>
            <option value="Car">Car</option>
            <option value="Train">Train</option>
            <option value="Plane">Plane</option>
            <option value="Bus">Bus</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default TravelForm;
