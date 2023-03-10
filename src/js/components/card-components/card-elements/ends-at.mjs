import { createHtmlElement } from "../../../helpers/methods/create-element.mjs";
import { createChildDataFieldLeft } from "./data-fields/child-field-left.mjs";
import { createChildDataFieldRight } from "./data-fields/child-field-right.mjs";
import { createParentDataField } from "./data-fields/parent-field.mjs";

export function createHtmlEndsAt(apiEndDate) {
   const parentDiv = createParentDataField();

   const childDivLeft = createChildDataFieldLeft("data-field--left-deadline");
   const childDivRight = createChildDataFieldRight("data-field--right-deadline");

   const childContentLeft = createHtmlElement("p");
   const childContentRight = createHtmlElement("p");

   childContentLeft.innerText = "Ends in";
   childContentRight.innerText = apiEndDate;
   parentDiv.appendChild(childDivLeft);
   parentDiv.appendChild(childDivRight);

   childDivLeft.appendChild(childContentLeft);
   childDivRight.appendChild(childContentRight);

   return parentDiv;
}
