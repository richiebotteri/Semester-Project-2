import { loadItem } from "../../storage/localStorage/load.mjs";
import { getProfile } from "../requests/get-profile.mjs";
import { changeToSignedInLinks } from "./change-to-signed-in-links.mjs";
import { deleteStorageSigningOut } from "./delete-storage-signing-out.mjs";

export function ifTokenDoTask() {
   const isToken = loadItem("token");
   const path = location.pathname;

   if (isToken) {
      getProfile();
      deleteStorageSigningOut();
      if (path === "/auctions-page.html") {
         changeToSignedInLinks();
      }
   }
}