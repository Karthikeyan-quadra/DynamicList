// //Service.ts
// import "@pnp/sp/webs";
// import "@pnp/sp/lists";
// import "@pnp/sp/fields";
// import { getSP } from "./Pnpconfig";
// import { FieldTypes } from "@pnp/sp/fields";

// export async function Addlist(){
//     const sp = getSP();
//     const listAddResult:any = await sp.web.lists.add("DynamicList");
//     const listcreate:any = await listAddResult.list.select("Title")();
//     console.log(listcreate.Title);
// }

// export async function Addlistfields(){
//     const sp = getSP();
//     const field: any = await sp.web.fields.add("My Field", FieldTypes.Text, { FieldTypeKind: 3, Group: "My Group" });
// // create a new field called 'My Field' in the list 'My List'
// const field2: any = await sp.web.lists.getByTitle("My List").fields.add("My Field", FieldTypes.Text, { FieldTypeKind: 3, Group: "My Group" });
// console.log(field2);

// // we can use this 'field' variable to run more queries on the field:
// const result:any = await field.field.select("Id")();

// // log the field Id to console
// console.log(result.Id);
// }   

// import "@pnp/sp/webs";
// import "@pnp/sp/lists";
// import "@pnp/sp/fields";
// import { getSP } from "./Pnpconfig";
// import { FieldTypes } from "@pnp/sp/fields";

// export async function Addlist(location: string, description: string) {
//   const sp = getSP();

//   // Create a unique ID for the list to prevent duplicates
//   const uniqueListId = `${location}_${new Date().getTime()}`;

//   // Create the list dynamically with the unique ID
//   await sp.web.lists.add(uniqueListId, description);
// }

// export async function Addlistfields(location: string, description: string) {
//   const sp = getSP();

//   // Get the newly created list by title
//   const list: any = await sp.web.lists.getByTitle(location);

//   // Create fields dynamically based on location
//   await list.fields.add("DescriptionField", FieldTypes.Text, { FieldTypeKind: 3, Group: "Custom Fields" });
// }


// // Service.ts
// import "@pnp/sp/webs";
// import "@pnp/sp/lists";
// import "@pnp/sp/fields";
// import { getSP } from "./Pnpconfig";
// import { FieldTypes, IFieldAddResult } from "@pnp/sp/fields/types";

// export async function Addlist(location: string, description: string) {
//   const sp = getSP();
//   const uniqueListId = `${location}_${new Date().getTime()}`;
//   await sp.web.lists.add(uniqueListId, description);
// }

// export async function Addlistfields(location: string, description: string, fieldName: string) {
//   try {
//     const sp = getSP();

//     // Try to get the list by title
//     const list: any = await sp.web.lists.getByTitle(location);
//     console.log(list);
    
//   } catch (error) {
//     console.error(`Error getting list '${location}':`, error);
//     // If the list doesn't exist, create it
//     await Addlist(location, description);
//   }
//   const sp = getSP();

//   // Get the list again after creation
//   const list: any = await sp.web.lists.getByTitle(location);

//   const fieldType = FieldTypes.Text;

//   try {
//     // Create a new field in the list with the user-entered field name
//     const field: IFieldAddResult = await list.fields.add(fieldName, fieldType, { FieldTypeKind: 3, Group: "Custom Fields" });

//     // Log the field Id to the console
//     console.log(`Field '${fieldName}' created with Id: ${field.data.Id}`);
//   } catch (error) {
//     console.error(`Error adding field to list '${location}':`, error);
//     // Handle the error as needed
//   }
// }


// Service.ts
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/fields";
import "@pnp/sp/views/list";
import { getSP } from "./Pnpconfig";

import { FieldTypes, IFieldAddResult } from "@pnp/sp/fields/types";

export async function Addlist(location: string, description: string) {
      const sp = getSP();

  const uniqueListId = `${location}_${new Date().getTime()}`;
  await sp.web.lists.add(uniqueListId, description);

  // Return the unique list ID
  return uniqueListId;
}

export async function Addlistfields(uniqueListId: string, description: string, fieldName: string) {
  try {
        const sp = getSP();

    // Get the list using the unique list ID
    const list: any = await sp.web.lists.getByTitle(uniqueListId);
  
    const fieldType = FieldTypes.Text;

    // Create a new field in the list with the user-entered field name
    const field: IFieldAddResult = await list.fields.add(fieldName, fieldType, { FieldTypeKind: 3, Group: "Custom Fields"});
    // const result:any= await list.fields.getByTitle(fieldName).setShowInDisplayForm(true);
  
    const result:any= await list.defaultView.fields.add(fieldName);
    console.log(result);
    // Log the field Id to the console
    console.log(`Field '${fieldName}' created with Id: ${field.data.Id}`);
  } catch (error) {
    console.error(`Error adding field to list '${uniqueListId}':`, error);
    // Handle the error as needed
  }
}

