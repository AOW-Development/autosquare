import React from "react";
import Link from "next/link";

const EngineFilterSidebar = () => (
  <>
    {/* CHOOSE YOUR SPECIFICATION */}
    <div className="md:mb-6 bg-[#091627] p-4 rounded-l-lg md:rounded-lg">
      <h3 className=" mb-3">CHOOSE YOUR SPECIFICATION</h3>

       {/* Dropdown for specification selection */}
        <div className="mb-4">
          <label htmlFor="specification" className="block text-sm text-gray-300 mb-1">
            Select Specification
          </label>
          <select
            id="specification"
            name="specification"
            className="w-full bg-[#1C2A3A] text-white border border-gray-600 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
            onChange={(e) => console.log("Selected:", e.target.value)}
          >
            <option value="">-- Select --</option>
            <option value="4.9L_E40D">4.9L with E40D transmission</option>
            <option value="4.9L_no_E40D">4.9L without E40D transmission</option>
            <option value="5.8L">5.8L V8 (from 4/10/91)</option>
            <option value="7.5L">7.5L V8 EFI (Heavy Duty)</option>
          </select>
        </div>


      <ul className="space-y-2">
        <li>
          <p className="text-white">4.9L</p>
          <p className="text-xs text-gray-400">
            from 2/3/91 (AIR inner manifold)
          </p>
          <Link
            href="/catalogue/engine/selectedSpecification"
            className="text-sky-400 hover:underline text-xs"
          >
            E40D transmission
          </Link>
          <br />
          <Link href="#" className="text-sky-400 hover:underline text-xs">
            w/o E40D transmission
          </Link>
        </li>
        <li className="mt-3">
          <p className="text-white">thru 2/2/91 (AIR inner head)</p>
          <Link href="#" className="text-sky-400 hover:underline text-xs">
            E40D transmission
          </Link>
          <br />
          <Link href="#" className="text-sky-400 hover:underline text-xs">
            w/o E40D transmission
          </Link>
        </li>
        <li className="mt-3">
          <p className="text-white">5.0L</p>
          <p className="text-xs text-gray-400">VIN N, 8th digit</p>
        </li>
        <li className="mt-3">
          <p className="text-white">5.8L</p>
          <p className="text-xs text-gray-400">VIN H, 8th digit, 8-35TW</p>
        </li>
      </ul>
    </div>
    {/* PRICE RANGE */}
    <div className="md:mb-6 bg-[#091627] p-4 md:rounded-lg">
      <h3 className=" mb-3">PRICE RANGE</h3>
      <div className="flex gap-2 mb-3">
        <input
          type="number"
          placeholder="0"
          className="w-1/2 border border-white shadow-2xl rounded-md p-2 text-sm text-white focus:ring-sky-500 focus:border-sky-500"
        />
        <input
          type="number"
          placeholder="100000"
          className="w-1/2  border border-white shadow-2xl rounded-md p-2 text-sm text-white focus:ring-sky-500 focus:border-sky-500"
        />
      </div>
      <button className="w-full border-1 border-sky-700 hover:bg-sky-700 text-white text-sm px-4 py-2 rounded-md transition-colors">
        Filter
      </button>
    </div>
    {/* STATE */}
    <div className="md:mb-6 bg-[#091627] p-4 md:rounded-lg">
      <h3 className=" mb-3">STATE</h3>
      <label className="flex items-center mb-2">
        <input
          type="checkbox"
          className="mr-2 h-4 w-4 text-sky-600 rounded focus:ring-sky-500 bg-gray-700 border-gray-600"
        />
        Used
      </label>
      <label className="flex items-center mb-2">
        <input
          type="checkbox"
          className="mr-2 h-4 w-4 text-sky-600 rounded focus:ring-sky-500 bg-gray-700 border-gray-600"
        />
        Re-Manufactured
      </label>
      <label className="flex items-center">
        <input
          type="checkbox"
          className="mr-2 h-4 w-4 text-sky-600 rounded focus:ring-sky-500 bg-gray-700 border-gray-600"
        />
        After Market
      </label>
    </div>
    {/* CAR MILEAGE, MILES */}
    <div className="md:mb-6 bg-[#091627] p-4 md:rounded-lg">
      <h3 className=" mb-3">CAR MILEAGE, MILES</h3>
      <label className="flex items-center mb-2">
        <input
          type="checkbox"
          className="mr-2 h-4 w-4 text-sky-600 rounded focus:ring-sky-500 bg-gray-700 border-gray-600"
        />
        Up to 50 thousand
      </label>
      <label className="flex items-center mb-2">
        <input
          type="checkbox"
          className="mr-2 h-4 w-4 text-sky-600 rounded focus:ring-sky-500 bg-gray-700 border-gray-600"
        />
        50-100 thousand
      </label>
      <label className="flex items-center mb-2">
        <input
          type="checkbox"
          className="mr-2 h-4 w-4 text-sky-600 rounded focus:ring-sky-500 bg-gray-700 border-gray-600"
        />
        100-150 thousand
      </label>
      <label className="flex items-center">
        <input
          type="checkbox"
          className="mr-2 h-4 w-4 text-sky-600 rounded focus:ring-sky-500 bg-gray-700 border-gray-600"
        />
        150-200 thousand
      </label>
    </div>
    {/* CONDITION */}
    <div className="bg-[#091627] p-4 md:rounded-lg">
      <h3 className=" mb-3">CONDITION</h3>
      <label className="flex items-center mb-2">
        <input
          type="checkbox"
          className="mr-2 h-4 w-4 text-sky-600 rounded focus:ring-sky-500 bg-gray-700 border-gray-600"
        />
        Excellent
      </label>
      <label className="flex items-center">
        <input
          type="checkbox"
          className="mr-2 h-4 w-4 text-sky-600 rounded focus:ring-sky-500 bg-gray-700 border-gray-600"
        />
        Very Good
      </label>
    </div>
  </>
);

export default EngineFilterSidebar;
