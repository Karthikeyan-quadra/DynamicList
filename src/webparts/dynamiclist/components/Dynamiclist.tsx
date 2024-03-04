// // Dynamiclist.tsx
// import * as React from 'react';
// import { IDynamiclistProps } from './IDynamiclistProps';
// import { Addlist, Addlistfields } from '../../../helpers/Service';

// export default function Dynamiclist(props: IDynamiclistProps) {
//   const handleLocationChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const selectedLocation:any = e.target.value;
//     // Call the service function to create list and fields dynamically
//     await Addlist();
//     await Addlistfields();
//   };

//   return (
//     <div>
//       <p>Dynamic list creation</p>
//       <label htmlFor="location">Admin</label>
//       <select name="location" id="location" onChange={handleLocationChange}>
//         <option value="Coimbatore">Coimbatore</option>
//         <option value="Chennai">Chennai</option>
//       </select>
//       <label htmlFor="description">description</label>
//       <input type="text" />
//     </div>
//   );
// }

// import * as React from 'react';
// import { IDynamiclistProps } from './IDynamiclistProps';
// import { Addlist, Addlistfields } from '../../../helpers/Service';

// export default function Dynamiclist(props: IDynamiclistProps) {
//   const handleLocationChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const selectedLocation: string = e.target.value;
//     const description: string = "Some default description"; // You can get the description from user input or set a default

//     // Call the service function to create list and fields dynamically
//     await Addlist(selectedLocation, description);
//     await Addlistfields(selectedLocation, description);
//   };

//   const handleButtonClick = async () => {
//     // Handle button click logic here, if needed
//   };

//   return (
//     <div>
//       <p>Dynamic list creation</p>
//       <label htmlFor="location">Admin</label>
//       <select name="location" id="location" onChange={handleLocationChange}>
//         <option value="Coimbatore">Coimbatore</option>
//         <option value="Chennai">Chennai</option>
//       </select>
//       <label htmlFor="description">Description</label>
//       <input type="text" />
//       <button onClick={handleButtonClick}>Submit</button>
//     </div>
//   );
// }


// // Dynamiclist.tsx
// import * as React from 'react';
// import { IDynamiclistProps } from './IDynamiclistProps';
// import { Addlist, Addlistfields } from '../../../helpers/Service';

// export default function Dynamiclist(props: IDynamiclistProps) {
//   const [inputDescription, setInputDescription] = React.useState("");
//   const [selectedLocation, setSelectedLocation] = React.useState("Coimbatore");
//   const [inputFieldName, setInputFieldName] = React.useState("");

//   const handleLocationChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setSelectedLocation(e.target.value);
//   };

//   const handleButtonClick = async () => {
//     if (inputDescription.trim() !== "" && inputFieldName.trim() !== "") {
//       // Create the list and get the unique list ID
//       const uniqueListId = await Addlist(selectedLocation, inputDescription);
  
//       // Now, create the fields for the list using the unique list ID
//       await Addlistfields(uniqueListId, inputDescription, inputFieldName);
  
//       // Optionally, reset the inputDescription and inputFieldName after submission
//       setInputDescription("");
//       setInputFieldName("");
//     } else {
//       console.error("Description and Field Name cannot be empty");
//     }
//   };

//   return (
//     <div>
//       <p>Dynamic list and field creation</p>
//       <label htmlFor="location">Admin</label>
//       <select name="location" id="location" onChange={handleLocationChange} value={selectedLocation}>
//         <option value="Coimbatore">Coimbatore</option>
//         <option value="Chennai">Chennai</option>
//       </select>
//       <label htmlFor="description">Description</label>
//       <input
//         type="text"
//         value={inputDescription}
//         onChange={(e) => setInputDescription(e.target.value)}
//       />
//       <label htmlFor="fieldName">Field Name</label>
//       <input
//         type="text"
//         value={inputFieldName}
//         onChange={(e) => setInputFieldName(e.target.value)}
//       />
//       <button onClick={handleButtonClick}>Submit</button>
//     </div>
//   );
// }


// Dynamiclist.tsx
import * as React from 'react';
import { IDynamiclistProps } from './IDynamiclistProps';
import { Addlist, Addlistfields } from '../../../helpers/Service';
import './Dynamiclist.module.scss'; // Import your CSS file for styling

export default function Dynamiclist(props: IDynamiclistProps) {
  const [inputDescription, setInputDescription] = React.useState("");
  const [selectedLocation, setSelectedLocation] = React.useState("Coimbatore");
  const [inputFieldName, setInputFieldName] = React.useState("");

  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLocation(e.target.value);
  };

  const handleButtonClick = async () => {
    if (inputDescription.trim() !== "" && inputFieldName.trim() !== "") {
      const uniqueListId = await Addlist(selectedLocation, inputDescription);
      await Addlistfields(uniqueListId, inputDescription, inputFieldName);

      setInputDescription("");
      setInputFieldName("");
    } else {
      console.error("Description and Field Name cannot be empty");
    }
  };

  return (
    <div className="dynamic-list-container">
      <h1>Dynamic List and Field Creation</h1>
      <div className="form-group">
        <label htmlFor="location">Admin</label>
        <select name="location" id="location" onChange={handleLocationChange} value={selectedLocation}>
          <option value="Coimbatore">Coimbatore</option>
          <option value="Chennai">Chennai</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input type="text" value={inputDescription} onChange={(e) => setInputDescription(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="fieldName">Field Name</label>
        <input type="text" value={inputFieldName} onChange={(e) => setInputFieldName(e.target.value)} />
      </div>
      <button className="submit-button" onClick={handleButtonClick}>Submit</button>
    </div>
  );
}
