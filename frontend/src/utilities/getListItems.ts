import { UpdatedPageProps } from "../shared/api.interfaces";

export const getListItems = (pageContent: UpdatedPageProps) => {
  const descriptions: string[] = [];
  const headings = Object.entries(pageContent).filter(item => {
    if (item[0].includes('list_item_heading')) {
      const headingNumber = item[0].slice(-1);
      const hasMatch = Object.keys(pageContent).includes(`list_item_description_${headingNumber}`);
      hasMatch && descriptions.push(pageContent[`list_item_description_${headingNumber}` as keyof UpdatedPageProps] as string)

      return hasMatch;
    }
  });
  const listItems: [string, string][] = [];
  
  headings.forEach((item, index) => {
    listItems.push([item[1], descriptions[index]]);
  });

  return listItems;
};