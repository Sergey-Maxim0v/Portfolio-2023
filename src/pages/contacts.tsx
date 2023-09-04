import BaseLayout from "../ layouts/baseLayout";
import ContactsContent from "../components/contacts-content";
import HelmetPageTitle from "../components/helmet-page-title";
import { getPageTitle } from "../utils/getPageTitle";

const PAGE_TITLE_EN = getPageTitle("Contacts");
const PAGE_TITLE_RU = getPageTitle("Контакты");

const Contacts = () => {
  return (
    <BaseLayout>
      <HelmetPageTitle titleEN={PAGE_TITLE_EN} tileRU={PAGE_TITLE_RU} />

      <ContactsContent />
    </BaseLayout>
  );
};

export default Contacts;
