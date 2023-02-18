import { createHtmlElement } from "../../helpers/methods/create-element.mjs";
import { createChildDataFieldLeft } from "./data-fields/child-field-left.mjs";
import { createChildDataFieldRight } from "./data-fields/child-field-right.mjs";
import { createParentDataField } from "./data-fields/parent-field.mjs";

export function createHtmlLastBid(bids) {
   const lastBid = bids.pop();
   const { amount } = lastBid;

   const parentDiv = createParentDataField();

   const childDivLeft = createChildDataFieldLeft("data-field--left");
   const childDivRight = createChildDataFieldRight("data-field--right-accent");

   const childContentLeft = createHtmlElement("p");
   const childContentRight = createHtmlElement("p");

   childContentLeft.innerText = "Last Bid";
   childContentRight.innerText = `$${amount}`;
   parentDiv.appendChild(childDivLeft);
   parentDiv.appendChild(childDivRight);

   childDivLeft.appendChild(childContentLeft);
   childDivRight.appendChild(childContentRight);

   return parentDiv;
}
